use crate::{
    AppWindow, Device, PhoneFile, Transfer,
    api::{Api, directory_path, file_entries, parent_directory, storage_root, text},
};
use serde_json::{Value, json};
use slint::{ModelRc, VecModel};
use std::{
    fs,
    io::Write,
    path::PathBuf,
    process::{Command, Stdio},
    sync::mpsc::{Receiver, RecvTimeoutError},
    time::{Duration, Instant},
};

pub enum Action {
    Refresh,
    Select(usize),
    Login,
    Disconnect,
    Reconnect,
    ChooseFiles(String),
    SendPath(String, String),
    Browse(String),
    ParentDirectory,
    Receive(String),
    Cancel(String),
    Save(String),
    OpenPair,
    StartPair(i32, String),
    ChangePair,
    ClosePair,
    Shutdown,
}
struct Worker {
    api: Api,
    ui: slint::Weak<AppWindow>,
    selected: String,
    sessions: Vec<Value>,
    jobs: Vec<Value>,
    pair: Option<(String, Instant)>,
    p2p: bool,
    dir: PathBuf,
    last: String,
    pair_mode: i32,
    directory: String,
    state: PathBuf,
    port: u16,
    helper: Option<crate::helper::Helper>,
    preparing: Option<Instant>,
    reconnecting: Option<(String, i32)>,
}
impl Worker {
    fn ui(&self, f: impl FnOnce(AppWindow) + Send + 'static) {
        let _ = self.ui.upgrade_in_event_loop(f);
    }
    fn notice(&self, s: impl Into<String>) {
        let s = s.into();
        self.ui(move |ui| ui.set_notice(s.into()));
    }
    fn current(&self) -> Result<&str, String> {
        self.sessions
            .iter()
            .find(|s| text(s, "id") == self.selected && text(s, "status") == "connected")
            .map(|_| self.selected.as_str())
            .ok_or("请先连接手机".into())
    }
    fn refresh(&mut self) -> Result<(), String> {
        let sessions = self.api.get("/api/sessions")?;
        let jobs = self.api.get("/api/jobs")?;
        let account = self.api.get("/api/account")?;
        let p2p = self.api.get("/api/p2p/status")?;
        self.sessions = sessions.as_array().cloned().unwrap_or_default();
        self.jobs = jobs.as_array().cloned().unwrap_or_default();
        self.p2p = p2p["ready"] == true;
        if !self.sessions.iter().any(|s| text(s, "id") == self.selected) {
            self.selected = self
                .sessions
                .iter()
                .find(|s| text(s, "status") == "connected")
                .or(self.sessions.first())
                .map(|s| text(s, "id").to_owned())
                .unwrap_or_default();
        }
        let signature = json!([
            self.sessions
                .iter()
                .map(|s| json!([s["id"], s["status"], s["phone"], s["ip"], s["pcIp"]]))
                .collect::<Vec<_>>(),
            jobs,
            account,
            p2p,
            self.selected
        ])
        .to_string();
        if signature == self.last {
            return Ok(());
        }
        if self.last.is_empty() {
            self.notice("本机服务已连接");
        }
        self.last = signature;
        let devices: Vec<_> = self
            .sessions
            .iter()
            .map(|s| Device {
                id: text(s, "id").into(),
                name: device_name(s).into(),
                detail: if s["status"] == "connected" {
                    "已连接"
                } else {
                    "未连接"
                }
                .into(),
                connected: s["status"] == "connected",
            })
            .collect();
        let transfers: Vec<_> = self
            .jobs
            .iter()
            .rev()
            .filter(|j| matches!(text(j, "kind"), "upload" | "download"))
            .take(100)
            .map(|j| {
                let running = matches!(text(j, "status"), "queued" | "running");
                let total = j["totalSize"]
                    .as_f64()
                    .or(j["result"]["totalSize"].as_f64())
                    .unwrap_or(0.);
                let name = j["fileName"]
                    .as_str()
                    .or(j["result"]["files"][0]["fileName"].as_str())
                    .or(j["result"]["files"][0]["path"].as_str())
                    .unwrap_or(if j["kind"] == "upload" {
                        "发送到手机"
                    } else {
                        "从手机接收"
                    });
                Transfer {
                    id: text(j, "id").into(),
                    name: name.into(),
                    detail: if j["status"] == "failed" {
                        text(&j["error"], "message").to_owned()
                    } else {
                        format!(
                            "{} · {}",
                            if j["kind"] == "upload" {
                                "发送到手机"
                            } else {
                                "从手机接收"
                            },
                            size(total as u64)
                        )
                    }
                    .into(),
                    state: match text(j, "status") {
                        "succeeded" => "已完成",
                        "failed" => "失败",
                        "cancelled" => "已取消",
                        "queued" => "等待中",
                        _ => "传输中",
                    }
                    .into(),
                    active: running,
                    downloadable: j["kind"] == "download" && j["status"] == "succeeded",
                    progress: if total > 0. {
                        (j["bytes"].as_f64().unwrap_or(0.) / total).min(1.) as f32
                    } else {
                        -1.
                    },
                }
            })
            .collect();
        let index = self
            .sessions
            .iter()
            .position(|s| text(s, "id") == self.selected)
            .map(|i| i as i32)
            .unwrap_or(-1);
        let selected = self
            .sessions
            .iter()
            .find(|s| text(s, "id") == self.selected)
            .cloned()
            .unwrap_or(Value::Null);
        let ready = self.p2p;
        let name = if selected.is_null() {
            "连接你的手机".to_owned()
        } else {
            device_name(&selected).to_owned()
        };
        let logged = account["loggedIn"] == true;
        let account_name = if logged {
            account["nickName"]
                .as_str()
                .filter(|s| !s.is_empty())
                .unwrap_or("vivo 账号已登录")
        } else if account["login"]["status"] == "waiting" {
            "等待完成官方登录…"
        } else {
            "登录 vivo 账号"
        }
        .to_owned();
        self.ui(move |ui| {
            ui.set_service_ready(true);
            ui.set_devices(ModelRc::new(VecModel::from(devices)));
            ui.set_transfers(ModelRc::new(VecModel::from(transfers)));
            ui.set_device_index(index);
            ui.set_device_name(name.into());
            ui.set_connected(selected["status"] == "connected");
            ui.set_device_detail(
                if selected["status"] == "connected" {
                    "手机与电脑已连接，可直接发送和接收文件。"
                } else {
                    "使用手机官方互传扫码连接。"
                }
                .into(),
            );
            ui.set_transport(
                match text(&selected, "transport") {
                    "wifi-direct" => "Wi-Fi Direct",
                    "usb" => "USB",
                    _ => {
                        if selected.is_null() {
                            "—"
                        } else {
                            "局域网"
                        }
                    }
                }
                .into(),
            );
            ui.set_phone_ip(text(&selected, "ip").into());
            ui.set_pc_ip(text(&selected, "pcIp").into());
            ui.set_account(account_name.into());
            ui.set_p2p_ready(ready);
        });
        Ok(())
    }
    fn open_pair(&mut self, mode: i32) -> Result<(), String> {
        self.close_pair();
        self.pair_mode = mode;
        let interfaces = crate::helper::wireless_interfaces();
        let preferred = self
            .api
            .get("/api/network/interfaces")
            .ok()
            .and_then(|v| {
                v.as_array()
                    .and_then(|a| {
                        a.iter()
                            .find(|v| interfaces.iter().any(|n| n == text(v, "name")))
                    })
                    .cloned()
            })
            .map(|v| text(&v, "name").to_owned())
            .or_else(|| interfaces.first().cloned())
            .unwrap_or_default();
        self.ui(move |ui| {
            ui.set_pair_visible(true);
            ui.set_pair_mode(mode);
            ui.set_wifi_interfaces(ModelRc::new(VecModel::from(
                interfaces.into_iter().map(Into::into).collect::<Vec<_>>(),
            )));
            ui.set_wifi_interface(preferred.into());
            ui.set_pair_status("准备连接手机".into());
            ui.set_pair_message(
                "选择连接方式，点击生成二维码。Wi-Fi Direct 首次启动需要系统授权。".into(),
            );
            ui.set_qr_image(Default::default());
        });
        if mode == 0 || self.p2p {
            self.start_pair(mode)?;
        }
        Ok(())
    }
    fn prepare_pair(&mut self, mode: i32, interface: String) -> Result<(), String> {
        if self.preparing.is_some() || self.reconnecting.is_some() {
            return Ok(());
        }
        // Query just before use rather than relying on the last UI poll.
        self.p2p = self.api.get("/api/p2p/status")?["ready"] == true;
        if mode != 1 || self.p2p {
            return self.start_pair(mode);
        }
        self.close_pair();
        self.pair_mode = mode;
        self.ui(|ui| ui.set_pair_visible(true));
        if self.helper.is_none() {
            self.helper = Some(crate::helper::Helper::launch(
                &crate::helper::project_root(),
                &self.state,
                self.port,
                &interface,
            )?);
        }
        self.preparing = Some(Instant::now());
        let building = self.helper.as_ref().is_some_and(|h| h.building());
        self.ui(move |ui| {
            ui.set_pair_visible(true);
            ui.set_pairing_busy(true);
            ui.set_qr_image(Default::default());
            ui.set_pair_status("正在启动 Wi-Fi Direct".into());
            ui.set_pair_message(
                if building {
                    "首次使用，正在构建独立无线组件（可能需要几分钟），完成后将弹出系统授权窗口。"
                } else {
                    "请在系统授权窗口确认。保持校园网连接，正在等待独立无线网络就绪…"
                }
                .into(),
            );
        });
        Ok(())
    }
    fn poll_connection(&mut self) -> Result<(), String> {
        if let Some(error) = self.helper.as_mut().and_then(|h| h.exited()) {
            self.helper = None;
            let preparing = self.preparing.take().is_some();
            self.ui(|ui| ui.set_pairing_busy(false));
            if preparing {
                return Err(error);
            }
            self.notice(error);
        }
        if let Some(start) = self.preparing {
            if self.p2p {
                self.preparing = None;
                self.ui(|ui| ui.set_pairing_busy(false));
                self.start_pair(1)?;
            } else if start.elapsed() > Duration::from_secs(600) {
                self.preparing = None;
                self.helper = None;
                self.ui(|ui| ui.set_pairing_busy(false));
                return Err("等待系统授权或无线网络启动超时；可关闭未完成的授权窗口后重试".into());
            }
        }
        if let Some((id, mode)) = self.reconnecting.clone() {
            let job = self.api.get(&format!("/api/jobs/{id}"))?;
            match text(&job, "status") {
                "succeeded" => {
                    self.reconnecting = None;
                    self.selected = text(&job["result"], "id").to_owned();
                    self.last.clear();
                    self.ui(|ui| ui.set_pairing_busy(false));
                    self.notice("设备已重新连接");
                }
                "failed" | "cancelled" => {
                    self.reconnecting = None;
                    self.ui(|ui| ui.set_pairing_busy(false));
                    self.open_pair(mode)?;
                    self.notice("原会话已失效，请扫描新二维码重新连接");
                }
                _ => {}
            }
        }
        Ok(())
    }
    fn start_pair(&mut self, mode: i32) -> Result<(), String> {
        self.close_pair();
        self.pair_mode = mode;
        self.ui(|ui| {
            ui.set_pair_visible(true);
            ui.set_pair_status("正在生成二维码".into());
            ui.set_pair_message("请稍候…".into());
            ui.set_qr_image(Default::default());
        });
        let qr = self.api.post(
            if mode == 1 {
                "/api/sessions/p2p"
            } else {
                "/api/sessions/scan"
            },
            json!({}),
        )?;
        let id = text(&qr, "jobId").to_owned();
        if id.is_empty() {
            return Err("后端没有返回二维码任务".into());
        }
        self.pair = Some((
            id.clone(),
            Instant::now() + Duration::from_millis(qr["expiresInMs"].as_u64().unwrap_or(180000)),
        ));
        let mut child = Command::new("qrencode")
            .args(["-t", "PNG", "-s", "7", "-o", "-"])
            .stdin(Stdio::piped())
            .stdout(Stdio::piped())
            .stderr(Stdio::null())
            .spawn()
            .map_err(|_| "找不到 qrencode，请安装后再生成二维码".to_owned())?;
        child
            .stdin
            .take()
            .ok_or("无法写入二维码生成器")?
            .write_all(text(&qr, "qrText").as_bytes())
            .map_err(|_| "二维码生成失败")?;
        let output = child.wait_with_output().map_err(|_| "二维码生成失败")?;
        if !output.status.success() {
            return Err("二维码生成失败".into());
        }
        let file = self.dir.join(format!("{id}.png"));
        fs::write(&file, output.stdout).map_err(|_| "无法保存临时二维码")?;
        self.ui(move |ui| {
            if let Ok(image) = slint::Image::load_from_path(&file) {
                ui.set_qr_image(image);
            }
            ui.set_pair_status("等待手机扫码连接".into());
            ui.set_pair_message("请使用手机官方互传扫描二维码。".into());
        });
        Ok(())
    }
    fn close_pair(&mut self) {
        if let Some((id, _)) = self.pair.take() {
            self.api.cancel(&id);
        }
        if self.preparing.take().is_some() && !self.p2p {
            self.helper = None;
        }
        self.ui(|ui| {
            ui.set_pair_visible(false);
            ui.set_pairing_busy(false);
        });
    }
    fn poll_pair(&mut self) -> Result<(), String> {
        let Some((id, deadline)) = self.pair.clone() else {
            return Ok(());
        };
        let job = self.api.get(&format!("/api/jobs/{id}"))?;
        match text(&job, "status") {
            "succeeded" => {
                self.selected = text(&job["result"], "id").to_owned();
                self.directory = "/".into();
                self.ui(|ui| {
                    ui.set_phone_path("/storage/emulated/0/".into());
                    ui.set_files(ModelRc::new(VecModel::from(Vec::<PhoneFile>::new())));
                });
                self.pair = None;
                self.ui(|ui| {
                    ui.set_pair_visible(false);
                    ui.set_qr_image(Default::default());
                });
                self.notice("手机已连接");
                self.last.clear();
            }
            "failed" => {
                if job["error"]["code"] == "SCAN_EXPIRED" {
                    self.pair = None;
                    return self.start_pair(self.pair_mode);
                }
                let message = text(&job["error"], "message").to_owned();
                self.pair = None;
                self.ui(move |ui| {
                    ui.set_pair_status("连接未完成".into());
                    ui.set_pair_message(message.into());
                });
            }
            "cancelled" => {
                self.pair = None;
            }
            _ => {
                let seconds = deadline.saturating_duration_since(Instant::now()).as_secs();
                let phase = match text(&job, "phase") {
                    "waiting-for-wps" => "手机已请求配对，正在授权",
                    "pairing-wifi" => "正在建立无线连接",
                    "authenticating-wifi" => "正在验证无线连接",
                    "waiting-for-dhcp" => "正在分配手机地址",
                    "waiting-for-phone-callback" => "等待手机确认连接",
                    "connecting" => "正在连接手机服务",
                    _ => "等待手机扫码连接",
                }
                .to_owned();
                self.ui(move |ui| {
                    ui.set_pair_status(phase.into());
                    ui.set_pair_message(format!("二维码剩余 {seconds} 秒").into());
                });
            }
        }
        Ok(())
    }
    fn browse(&mut self, path: String) -> Result<(), String> {
        let id = self.current()?.to_owned();
        let root = self
            .sessions
            .iter()
            .find(|s| text(s, "id") == id)
            .map(storage_root)
            .unwrap_or("/storage/emulated/0".into());
        let path = directory_path(&path, &root)?;
        self.ui(|ui| ui.set_file_message("正在读取手机目录…".into()));
        let result = self.api.post(
            &format!("/api/sessions/{id}/files"),
            json!({"type":"REQUEST_POSTS_FILELIST","data":path,"versionTag":1}),
        )?;
        let files: Vec<_> = file_entries(&result)
            .into_iter()
            .filter_map(|f| {
                let path = text(&f, "savePath");
                if path.is_empty() {
                    return None;
                }
                let directory = f["isDirectory"] == true || f["isDirectory"] == "true";
                Some(PhoneFile {
                    name: text(&f, "fileName").into(),
                    path: path.into(),
                    directory,
                    detail: if directory {
                        "文件夹".into()
                    } else {
                        size(f["fileSize"].as_u64().unwrap_or(0))
                    }
                    .into(),
                })
            })
            .collect();
        let count = files.len();
        self.directory = path.clone();
        self.ui(move |ui| {
            ui.set_phone_path(
                if path == "/" {
                    format!("{root}/")
                } else {
                    path
                }
                .into(),
            );
            ui.set_storage_root(root.into());
            ui.set_files(ModelRc::new(VecModel::from(files)));
            ui.set_file_message(format!("{count} 个项目").into());
        });
        Ok(())
    }
    fn send(&mut self, paths: Vec<PathBuf>, save: String) -> Result<(), String> {
        let id = self.current()?.to_owned();
        if paths.is_empty() {
            return Ok(());
        }
        let values: Vec<_> = paths
            .iter()
            .map(|p| p.to_string_lossy().into_owned())
            .collect();
        self.api.post(
            &format!("/api/sessions/{id}/uploads"),
            json!({"paths":values,"savePath":save,"ifDuplicated":"rename"}),
        )?;
        self.ui(|ui| ui.set_tab_index(2));
        self.notice("文件已加入发送队列");
        Ok(())
    }
    fn save(&mut self, id: String) -> Result<(), String> {
        let job = self
            .jobs
            .iter()
            .find(|j| text(j, "id") == id)
            .ok_or("找不到传输记录")?;
        if job["kind"] != "download" || job["status"] != "succeeded" {
            return Err("接收尚未完成".into());
        }
        let source = PathBuf::from(text(&job["result"], "directory"));
        let files = job["result"]["files"]
            .as_array()
            .ok_or("没有可保存的文件")?;
        if files.len() != 1 {
            return Err(format!("多个文件已保存在 {}", source.display()));
        }
        let name = text(&files[0], "path");
        let relative = PathBuf::from(name);
        if relative.is_absolute()
            || relative
                .components()
                .any(|p| !matches!(p, std::path::Component::Normal(_)))
        {
            return Err("接收文件路径不合法".into());
        }
        let Some(dest) = file_dialog(
            true,
            relative
                .file_name()
                .and_then(|s| s.to_str())
                .unwrap_or("received-file"),
        )?
        .first()
        .cloned() else {
            return Ok(());
        };
        if !dest.is_absolute() {
            return Err("保存路径必须是绝对路径".into());
        }
        fs::copy(source.join(relative), dest).map_err(|e| format!("保存失败：{e}"))?;
        self.notice("文件已保存到所选位置");
        Ok(())
    }
    fn action(&mut self, action: Action) -> Result<(), String> {
        match action {
            Action::Refresh => {}
            Action::Select(i) => {
                if let Some(s) = self.sessions.get(i) {
                    self.selected = text(s, "id").to_owned();
                    self.directory = "/".into();
                    self.ui(|ui| {
                        ui.set_phone_path("/storage/emulated/0/".into());
                        ui.set_files(ModelRc::new(VecModel::from(Vec::<PhoneFile>::new())));
                    });
                    self.last.clear();
                }
            }
            Action::Login => {
                let a = self.api.get("/api/account")?;
                if a["loggedIn"] == true {
                    self.notice("vivo 账号已登录");
                } else {
                    self.api.post("/api/account/login", json!({}))?;
                    self.notice("请在官方登录窗口完成身份验证");
                }
            }
            Action::Disconnect => {
                let id = self.current()?.to_owned();
                self.api
                    .post(&format!("/api/sessions/{id}/disconnect"), json!({}))?;
                self.notice("已断开手机连接");
            }
            Action::Reconnect => {
                if self.reconnecting.is_some() || self.preparing.is_some() {
                    return Ok(());
                }
                if let Some(session) = self
                    .sessions
                    .iter()
                    .find(|s| text(s, "id") == self.selected)
                {
                    let mode = if text(session, "transport") == "wifi-direct" {
                        1
                    } else {
                        0
                    };
                    if mode == 1 && !self.p2p {
                        self.open_pair(1)?;
                    } else {
                        let job = self.api.post(
                            &format!("/api/sessions/{}/reconnect", self.selected),
                            json!({}),
                        )?;
                        self.reconnecting = Some((text(&job, "id").to_owned(), mode));
                        self.ui(|ui| ui.set_pairing_busy(true));
                        self.notice("正在重新连接设备…");
                    }
                } else {
                    self.open_pair(1)?;
                }
            }
            Action::ChooseFiles(save) => {
                let files = file_dialog(false, "")?;
                self.send(files, save)?;
            }
            Action::SendPath(path, save) => {
                self.send(vec![PathBuf::from(path)], save)?;
            }
            Action::Browse(path) => {
                if let Err(error) = self.browse(path) {
                    let message = error.clone();
                    self.ui(move |ui| ui.set_file_message(message.into()));
                    return Err(error);
                }
            }
            Action::ParentDirectory => {
                let root = self
                    .sessions
                    .iter()
                    .find(|s| text(s, "id") == self.selected)
                    .map(storage_root)
                    .unwrap_or("/storage/emulated/0".into());
                self.browse(parent_directory(&self.directory, &root))?;
            }
            Action::Receive(path) => {
                let id = self.current()?.to_owned();
                self.api.post(
                    &format!("/api/sessions/{id}/downloads"),
                    json!({"paths":[path]}),
                )?;
                self.ui(|ui| ui.set_tab_index(2));
                self.notice("正在从手机接收文件");
            }
            Action::Cancel(id) => self.api.cancel(&id),
            Action::Save(id) => self.save(id)?,
            Action::OpenPair => {
                self.open_pair(1)?;
            }
            Action::StartPair(mode, interface) => self.prepare_pair(mode, interface)?,
            Action::ChangePair => {
                self.close_pair();
                self.ui(|ui| {
                    ui.set_pair_visible(true);
                    ui.set_qr_image(Default::default());
                    ui.set_pair_status("准备连接手机".into());
                    ui.set_pair_message("点击生成二维码开始连接。".into());
                });
            }
            Action::ClosePair => self.close_pair(),
            Action::Shutdown => {}
        }
        Ok(())
    }
}
pub fn run(
    api: Api,
    ui: slint::Weak<AppWindow>,
    rx: Receiver<Action>,
    dir: PathBuf,
    state: PathBuf,
    port: u16,
) {
    let mut w = Worker {
        api,
        ui,
        selected: String::new(),
        sessions: vec![],
        jobs: vec![],
        pair: None,
        p2p: false,
        dir,
        last: String::new(),
        pair_mode: 1,
        directory: "/".into(),
        state,
        port,
        helper: None,
        preparing: None,
        reconnecting: None,
    };
    loop {
        if let Err(e) = w.refresh() {
            w.last.clear();
            w.ui(|ui| ui.set_service_ready(false));
            w.notice(e);
        } else {
            if w.last.is_empty() {
                w.notice("请选择设备，或添加新设备");
            }
        }
        if let Err(e) = w.poll_connection().and_then(|_| w.poll_pair()) {
            let message = e.clone();
            w.ui(move |ui| {
                ui.set_pair_status("连接未完成".into());
                ui.set_pair_message(message.into());
            });
            w.notice(e);
        }
        let busy = w.preparing.is_some()
            || w.reconnecting.is_some()
            || w.helper.is_some()
            || w.pair.is_some()
            || w.jobs
                .iter()
                .any(|j| matches!(text(j, "status"), "running" | "queued"));
        match rx.recv_timeout(Duration::from_secs(if busy { 1 } else { 5 })) {
            Ok(Action::Shutdown) | Err(RecvTimeoutError::Disconnected) => break,
            Ok(action) => {
                if let Err(e) = w.action(action) {
                    let message = e.clone();
                    w.ui(move |ui| {
                        ui.set_pair_status("暂时无法连接".into());
                        ui.set_pair_message(message.into());
                    });
                    w.notice(e);
                }
            }
            Err(RecvTimeoutError::Timeout) => {}
        }
    }
    if let Some((id, _)) = w.reconnecting.take() {
        w.api.cancel(&id);
    }
    if let Some((id, _)) = w.pair.take() {
        w.api.cancel(&id);
    }
    let _ = fs::remove_dir_all(&w.dir);
}
fn device_name(s: &Value) -> &str {
    s["phone"]["mobileDeviceName"]
        .as_str()
        .or(s["phone"]["deviceName"].as_str())
        .unwrap_or("vivo 手机")
}
pub fn size(n: u64) -> String {
    if n < 1024 {
        format!("{n} B")
    } else if n < 1024 * 1024 {
        format!("{:.1} KiB", n as f64 / 1024.)
    } else if n < 1024 * 1024 * 1024 {
        format!("{:.1} MiB", n as f64 / 1048576.)
    } else {
        format!("{:.1} GiB", n as f64 / 1073741824.)
    }
}
fn file_dialog(save: bool, name: &str) -> Result<Vec<PathBuf>, String> {
    let has = |exe: &str| {
        std::env::var_os("PATH")
            .map(|p| std::env::split_paths(&p).any(|d| d.join(exe).is_file()))
            .unwrap_or(false)
    };
    let output = if has("kdialog") {
        let mut c = Command::new("kdialog");
        if save {
            c.args(["--getsavefilename", name]);
        } else {
            c.args([
                "--getopenfilename",
                std::env::var("HOME").as_deref().unwrap_or("/"),
                "--multiple",
                "--separate-output",
            ]);
        }
        c.output()
    } else if has("zenity") {
        let mut c = Command::new("zenity");
        c.arg("--file-selection");
        if save {
            c.args(["--save", "--confirm-overwrite", "--filename", name]);
        } else {
            c.args(["--multiple", "--separator=\n"]);
        }
        c.output()
    } else {
        return Err("请选择安装 kdialog 或 zenity，以使用系统文件选择器".into());
    }
    .map_err(|_| "无法打开系统文件选择器")?;
    if !output.status.success() {
        return Ok(vec![]);
    }
    Ok(String::from_utf8_lossy(&output.stdout)
        .lines()
        .filter(|s| !s.is_empty())
        .map(PathBuf::from)
        .collect())
}

#[cfg(test)]
mod tests {
    use super::*;
    fn worker(api: Api) -> Worker {
        Worker {
            api,
            ui: slint::Weak::default(),
            selected: "old-device".into(),
            sessions: vec![
                json!({"id":"old-device","status":"connected","transport":"wifi-direct"}),
            ],
            jobs: vec![],
            pair: None,
            p2p: false,
            dir: PathBuf::new(),
            last: String::new(),
            pair_mode: 1,
            directory: "/".into(),
            state: PathBuf::new(),
            port: 8765,
            helper: None,
            preparing: None,
            reconnecting: None,
        }
    }
    #[test]
    fn browse_normalizes_alias_and_parses_real_phone_top_level_directory_list() {
        let (api, server, dir) = crate::api::tests::fixture(
            r#"{"dataList":[{"fileName":"DCIM","savePath":"/storage/emulated/0/DCIM","isDirectory":true}],"totalCount":1}"#,
            "200 OK",
        );
        let mut w = worker(api);
        w.browse("/sdcard/DCIM".into()).unwrap();
        let request = server.join().unwrap();
        let payload: Value =
            serde_json::from_str(request.split_once("\r\n\r\n").unwrap().1).unwrap();
        assert_eq!(payload["data"], "/storage/emulated/0/DCIM");
        assert_eq!(w.directory, "/storage/emulated/0/DCIM");
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn disconnect_action_retains_device_via_post_instead_of_deleting() {
        let (api, server, dir) =
            crate::api::tests::fixture(r#"{"status":"disconnected"}"#, "200 OK");
        let mut w = worker(api);
        w.action(Action::Disconnect).unwrap();
        assert!(
            server
                .join()
                .unwrap()
                .starts_with("POST /api/sessions/old-device/disconnect HTTP/1.1")
        );
        fs::remove_dir_all(dir).unwrap();
    }
    #[test]
    fn reconnect_tracks_job_and_selects_recovered_session() {
        let (api, server, dir) =
            crate::api::tests::fixture(r#"{"id":"retry-job"}"#, "202 Accepted");
        let mut w = worker(api);
        w.p2p = true;
        w.action(Action::Reconnect).unwrap();
        assert!(
            server
                .join()
                .unwrap()
                .starts_with("POST /api/sessions/old-device/reconnect HTTP/1.1")
        );
        assert_eq!(w.reconnecting.as_ref().unwrap().0, "retry-job");
        let (api, server, dir2) = crate::api::tests::fixture(
            r#"{"status":"succeeded","result":{"id":"recovered-device"}}"#,
            "200 OK",
        );
        w.api = api;
        w.poll_connection().unwrap();
        assert!(
            server
                .join()
                .unwrap()
                .starts_with("GET /api/jobs/retry-job HTTP/1.1")
        );
        assert_eq!(w.selected, "recovered-device");
        assert!(w.reconnecting.is_none());
        fs::remove_dir_all(dir).unwrap();
        fs::remove_dir_all(dir2).unwrap();
    }
    #[test]
    fn expired_direct_session_falls_back_to_direct_pairing() {
        let (api, server, dir) = crate::api::tests::fixture(
            r#"{"status":"failed","error":{"code":"ECONNREFUSED"}}"#,
            "200 OK",
        );
        let mut w = worker(api);
        w.reconnecting = Some(("retry-job".into(), 1));
        w.poll_connection().unwrap();
        server.join().unwrap();
        assert!(w.reconnecting.is_none());
        assert_eq!(w.pair_mode, 1);
        assert!(
            w.preparing.is_none(),
            "fallback waits for explicit GUI authorization"
        );
        fs::remove_dir_all(dir).unwrap();
    }
}
