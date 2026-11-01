use reqwest::{Method, blocking::Client, redirect::Policy};
use serde_json::{Value, json};
use std::{fs, path::PathBuf, time::Duration};

#[derive(Clone)]
pub struct Api {
    client: Client,
    base: String,
    token: String,
}
impl Api {
    pub fn load(state: &PathBuf, port: u16) -> Result<Self, String> {
        let config: Value = serde_json::from_slice(
            &fs::read(state.join("config.json"))
                .map_err(|_| "找不到后端配置，请先运行 npm start".to_owned())?,
        )
        .map_err(|_| "后端配置不是有效 JSON")?;
        let token = config["apiToken"]
            .as_str()
            .filter(|s| !s.is_empty())
            .ok_or("后端配置缺少访问凭据")?
            .to_owned();
        let client = Client::builder()
            .no_proxy()
            .redirect(Policy::none())
            .connect_timeout(Duration::from_secs(2))
            .timeout(Duration::from_secs(5))
            .build()
            .map_err(|e| e.to_string())?;
        Ok(Self {
            client,
            base: format!("http://127.0.0.1:{port}"),
            token,
        })
    }
    pub fn request(
        &self,
        method: Method,
        route: &str,
        body: Option<Value>,
    ) -> Result<Value, String> {
        if !route.starts_with("/api/") || route.contains(['\r', '\n']) {
            return Err("接口路径不合法".into());
        }
        let mut req = self
            .client
            .request(method, format!("{}{}", self.base, route))
            .bearer_auth(&self.token);
        if let Some(body) = body {
            req = req.timeout(Duration::from_secs(25)).json(&body);
        }
        let response = req
            .send()
            .map_err(|_| "无法连接本机后端，请确认 npm start 正在运行".to_owned())?;
        let status = response.status();
        let body: Value = response
            .json()
            .map_err(|_| "后端未返回有效 JSON".to_owned())?;
        if !status.is_success() {
            return Err(body["error"]["message"]
                .as_str()
                .unwrap_or("请求失败")
                .to_owned());
        }
        Ok(body)
    }
    pub fn get(&self, route: &str) -> Result<Value, String> {
        self.request(Method::GET, route, None)
    }
    pub fn post(&self, route: &str, body: Value) -> Result<Value, String> {
        self.request(Method::POST, route, Some(body))
    }
    pub fn cancel(&self, id: &str) {
        let _ = self.post(&format!("/api/jobs/{id}/cancel"), json!({}));
    }
}
pub fn text<'a>(v: &'a Value, key: &str) -> &'a str {
    v[key].as_str().unwrap_or("")
}
/// '/' is the official virtual storage home, not Android's filesystem root.
pub fn storage_root(session: &Value) -> String {
    session["phone"]["innerRoot"]
        .as_str()
        .filter(|s| s.starts_with('/') && *s != "/")
        .unwrap_or("/storage/emulated/0")
        .trim_end_matches('/')
        .to_owned()
}
pub fn directory_path(input: &str, root: &str) -> Result<String, String> {
    let input = input.trim();
    if input.is_empty() || input == "/" {
        return Ok("/".into());
    }
    let mut path = input.to_owned();
    for alias in ["/sdcard", "/mnt/sdcard", "/storage/self/primary"] {
        if path == alias || path.starts_with(&format!("{alias}/")) {
            path = format!("{root}{}", &path[alias.len()..]);
            break;
        }
    }
    if !path.starts_with('/') {
        path = format!("{root}/{path}");
    }
    let mut parts = vec![];
    for part in path.split('/') {
        match part {
            "" | "." => {}
            ".." => {
                parts.pop();
            }
            _ => parts.push(part),
        }
    }
    path = format!("/{}", parts.join("/"));
    if path == root {
        return Ok("/".into());
    }
    if !path.starts_with(&format!("{root}/")) {
        return Err("请选择手机存储中的目录".into());
    }
    Ok(path)
}
pub fn parent_directory(path: &str, root: &str) -> String {
    let Ok(path) = directory_path(path, root) else {
        return "/".into();
    };
    if path == "/" {
        return path;
    }
    let parent = path.rsplit_once('/').map(|(p, _)| p).unwrap_or(root);
    directory_path(parent, root).unwrap_or("/".into())
}
pub fn file_entries(value: &Value) -> Vec<Value> {
    let mut payload = value.get("data").unwrap_or(value).clone();
    if let Some(s) = payload.as_str() {
        payload = serde_json::from_str(s).unwrap_or(Value::Null);
    }
    if let Some(items) = payload.as_array() {
        return items.clone();
    }
    for key in ["dataList", "fileList", "list", "items"] {
        if let Some(items) = payload[key].as_array() {
            return items.clone();
        }
    }
    vec![]
}

#[cfg(test)]
pub(crate) mod tests {
    use super::*;
    use std::{
        io::{Read, Write},
        net::TcpListener,
        thread,
        time::{SystemTime, UNIX_EPOCH},
    };
    pub(crate) fn fixture(
        response: &str,
        status: &str,
    ) -> (Api, thread::JoinHandle<String>, PathBuf) {
        let listener = TcpListener::bind("127.0.0.1:0").unwrap();
        let port = listener.local_addr().unwrap().port();
        let dir = std::env::temp_dir().join(format!(
            "vivo-native-test-{}-{}",
            std::process::id(),
            SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap()
                .as_nanos()
        ));
        fs::create_dir(&dir).unwrap();
        fs::write(
            dir.join("config.json"),
            br#"{"apiToken":"native-test-token"}"#,
        )
        .unwrap();
        let response = response.to_owned();
        let status = status.to_owned();
        let thread = thread::spawn(move || {
            let (mut stream, _) = listener.accept().unwrap();
            let mut request = vec![];
            let mut bytes = [0; 1024];
            loop {
                let n = stream.read(&mut bytes).unwrap();
                if n == 0 {
                    break;
                }
                request.extend_from_slice(&bytes[..n]);
                if let Some(end) = request.windows(4).position(|w| w == b"\r\n\r\n") {
                    let headers = String::from_utf8_lossy(&request[..end]);
                    let length = headers
                        .lines()
                        .find_map(|line| {
                            line.to_ascii_lowercase()
                                .strip_prefix("content-length:")
                                .and_then(|s| s.trim().parse::<usize>().ok())
                        })
                        .unwrap_or(0);
                    if request.len() >= end + 4 + length {
                        break;
                    }
                }
            }
            write!(stream,"HTTP/1.1 {status}\r\nContent-Length: {}\r\nContent-Type: application/json\r\nLocation: http://127.0.0.1:1/not-allowed\r\nConnection: close\r\n\r\n{}",response.len(),response).unwrap();
            String::from_utf8(request).unwrap()
        });
        (Api::load(&dir, port).unwrap(), thread, dir)
    }
    #[test]
    fn rpc_uses_local_bearer_and_decodes_json() {
        let (api, server, dir) = fixture(r#"{"status":"connected"}"#, "200 OK");
        assert_eq!(api.get("/api/sessions").unwrap()["status"], "connected");
        let request = server.join().unwrap();
        assert!(request.starts_with("GET /api/sessions HTTP/1.1"));
        assert!(
            request
                .to_ascii_lowercase()
                .contains("authorization: bearer native-test-token")
        );
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn redirects_are_not_followed() {
        let (api, server, dir) =
            fixture(r#"{"error":{"message":"redirect blocked"}}"#, "302 Found");
        assert_eq!(api.get("/api/account").unwrap_err(), "redirect blocked");
        server.join().unwrap();
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn transfer_rpc_sends_only_file_paths_and_destination() {
        let (api, server, dir) =
            fixture(r#"{"id":"queued-job","status":"queued"}"#, "202 Accepted");
        let body = json!({"paths":["/tmp/native-example.txt"],"savePath":"/sdcard/Download","ifDuplicated":"rename"});
        assert_eq!(
            api.post("/api/sessions/test/uploads", body.clone())
                .unwrap()["id"],
            "queued-job"
        );
        let request = server.join().unwrap();
        let payload = request.split_once("\r\n\r\n").unwrap().1;
        assert_eq!(serde_json::from_str::<Value>(payload).unwrap(), body);
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn malformed_config_is_reported_without_credential_contents() {
        let dir =
            std::env::temp_dir().join(format!("vivo-native-bad-config-{}", std::process::id()));
        fs::create_dir_all(&dir).unwrap();
        fs::write(dir.join("config.json"), b"private-bad-value").unwrap();
        let error = Api::load(&dir, 8765).err().unwrap();
        assert!(!error.contains("private-bad-value"));
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn storage_navigation_uses_official_virtual_home_and_canonical_child_paths() {
        let root = "/storage/emulated/0";
        assert_eq!(directory_path("/", root).unwrap(), "/");
        assert_eq!(directory_path(root, root).unwrap(), "/");
        assert_eq!(directory_path("/sdcard", root).unwrap(), "/");
        assert_eq!(
            directory_path("/sdcard/Download", root).unwrap(),
            "/storage/emulated/0/Download"
        );
        assert_eq!(
            directory_path("DCIM/Camera", root).unwrap(),
            "/storage/emulated/0/DCIM/Camera"
        );
        assert_eq!(parent_directory("/storage/emulated/0/DCIM", root), "/");
        assert_eq!(parent_directory("/", root), "/");
        assert!(directory_path("/etc", root).is_err());
        assert!(directory_path("/storage/emulated/0/../1", root).is_err());
        assert_eq!(
            file_entries(
                &json!({"dataList":[{"savePath":"/storage/emulated/0/DCIM"}],"totalCount":1})
            )
            .len(),
            1
        );
    }
    #[test]
    fn phone_directory_envelopes_are_supported() {
        assert_eq!(
            file_entries(&json!({"data":{"dataList":[{"fileName":"example.txt"}]}})).len(),
            1
        );
        assert_eq!(
            file_entries(&json!({"data":"{\"fileList\":[{\"fileName\":\"example.txt\"}]}"})).len(),
            1
        );
        assert!(file_entries(&Value::Null).is_empty());
    }
}
