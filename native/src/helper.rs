//! Explicit PolicyKit authorization; no sudo password passes through the GUI.
use std::{
    fs,
    io::{BufRead, BufReader},
    path::{Path, PathBuf},
    process::{Child, Command, Stdio},
    sync::mpsc::{self, Receiver},
};

pub struct Helper {
    child: Child,
    diagnostics: Receiver<String>,
    last_error: String,
    build_options: Option<(PathBuf, PathBuf, u16, String)>,
    lease: Option<PathBuf>,
}
impl Helper {
    pub fn launch(root: &Path, state: &Path, port: u16, interface: &str) -> Result<Self, String> {
        if !valid_interface(interface)
            || !Path::new("/sys/class/net")
                .join(interface)
                .join("wireless")
                .exists()
        {
            return Err("请选择本机已连接的无线网卡".into());
        }
        if !root.join("build/private-p2p/bin/wpa_supplicant").is_file() {
            let mut command = Command::new("/usr/bin/python");
            command.arg(root.join("tools/build_p2p_supplicant.py"));
            let mut helper = Self::spawn(command)?;
            helper.build_options = Some((
                root.to_owned(),
                state.to_owned(),
                port,
                interface.to_owned(),
            ));
            return Ok(helper);
        }
        let identity = fs::read_to_string("/proc/self/stat").map_err(|_| "无法读取窗口进程身份")?;
        let start = start_time(&identity).ok_or("无法确认窗口进程身份")?;
        let lease = state.join(format!(
            "native-ui-{}/p2p-owner-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap()
                .as_nanos()
        ));
        fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&lease)
            .map_err(|_| "无法创建无线助手生命周期文件")?;
        let mut command = Command::new("/usr/bin/pkexec");
        command
            .arg("--disable-internal-agent")
            .arg("/usr/bin/python")
            .arg(root.join("tools/p2p_helper.py"))
            .args([
                "--interface",
                interface,
                "--driver",
                "private",
                "--port",
                &port.to_string(),
            ])
            .arg("--state-dir")
            .arg(state)
            .args([
                "--owner-pid",
                &std::process::id().to_string(),
                "--owner-start-time",
                start,
            ])
            .arg("--owner-lease")
            .arg(&lease);
        match Self::spawn(command) {
            Ok(mut helper) => {
                helper.lease = Some(lease);
                Ok(helper)
            }
            Err(error) => {
                let _ = fs::remove_file(lease);
                Err(error)
            }
        }
    }
    fn spawn(mut command: Command) -> Result<Self, String> {
        let mut child = command
            .stdin(Stdio::null())
            .stdout(Stdio::null())
            .stderr(Stdio::piped())
            .spawn()
            .map_err(|_| "无法打开系统授权窗口，请确认已安装 polkit 并运行桌面授权代理")?;
        let (tx, rx) = mpsc::sync_channel(16);
        let stderr = child.stderr.take().unwrap();
        std::thread::spawn(move || {
            for line in BufReader::new(stderr).lines().map_while(Result::ok) {
                // Helper diagnostics deliberately contain no network credentials.
                let _ = tx.try_send(line.chars().take(500).collect());
            }
        });
        Ok(Self {
            child,
            diagnostics: rx,
            last_error: String::new(),
            build_options: None,
            lease: None,
        })
    }
    pub fn building(&self) -> bool {
        self.build_options.is_some()
    }
    pub fn exited(&mut self) -> Option<String> {
        for line in self.diagnostics.try_iter() {
            self.last_error = line;
        }
        let status = self.child.try_wait().ok()??;
        if let Some((root, state, port, interface)) = self.build_options.take() {
            if status.success() {
                match Self::launch(&root, &state, port, &interface) {
                    Ok(helper) => {
                        *self = helper;
                        return None;
                    }
                    Err(error) => return Some(error),
                }
            }
            return Some(format!("独立无线组件构建失败：{}", self.last_error));
        }
        Some(if status.code() == Some(126) {
            "已取消系统授权".into()
        } else if self.last_error.is_empty() {
            format!("无线助手已退出（{status}），请检查桌面授权代理后重试")
        } else {
            self.last_error.clone()
        })
    }
}
impl Drop for Helper {
    fn drop(&mut self) {
        if let Some(lease) = self.lease.take() {
            let _ = fs::remove_file(lease);
        }
        // A privileged helper observes lease removal and performs its own cleanup.
        // kill handles an authorization dialog or unprivileged builder still pending.
        let _ = self.child.kill();
        let _ = self.child.try_wait();
    }
}
pub fn valid_interface(name: &str) -> bool {
    !name.is_empty()
        && !name.starts_with('-')
        && name.len() <= 15
        && name != "."
        && name != ".."
        && name
            .bytes()
            .all(|b| b.is_ascii_alphanumeric() || b"_.:-".contains(&b))
}
fn start_time(stat: &str) -> Option<&str> {
    stat.rsplit_once(')')?.1.split_whitespace().nth(19)
}
pub fn wireless_interfaces() -> Vec<String> {
    let mut names: Vec<_> = fs::read_dir("/sys/class/net")
        .into_iter()
        .flatten()
        .filter_map(Result::ok)
        .filter(|e| e.path().join("wireless").exists())
        .filter_map(|e| e.file_name().into_string().ok())
        .filter(|s| valid_interface(s) && !s.starts_with("p2p-"))
        .collect();
    names.sort();
    names
}
pub fn project_root() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .to_owned()
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn interface_arguments_cannot_escape_sysfs_or_inject_options() {
        for name in ["../wlan0", "--help", "a/b", "", "..", "wlan0;id"] {
            assert!(!valid_interface(name));
        }
        assert!(valid_interface("wlp2s0"));
        assert!(valid_interface("wlan_1"));
    }
    #[test]
    fn owner_identity_handles_spaces_and_parentheses_in_process_name() {
        let stat = fs::read_to_string("/proc/self/stat").unwrap();
        assert!(start_time(&stat).unwrap().parse::<u64>().is_ok());
        let suffix = stat.rsplit_once(')').unwrap().1;
        assert_eq!(
            start_time(&format!("12 (a ) b){suffix}")),
            start_time(&stat)
        );
    }
}
