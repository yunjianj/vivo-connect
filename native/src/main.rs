mod api;
mod helper;
mod snapshot;
mod worker;
slint::include_modules!();
use slint::{ComponentHandle, ModelRc, VecModel};
use std::{fs, path::PathBuf, sync::mpsc, time::Duration};

// Slint arms an in-window drag on the motion that crosses the threshold;
// update the target once more before release even when motion was coalesced.
fn settle_drag_target(window: &slint::Window, position: slint::LogicalPosition) {
    window.dispatch_event(slint::platform::WindowEvent::PointerMoved { position });
}

fn demo(ui: &AppWindow) {
    ui.set_devices(ModelRc::new(VecModel::from(vec![Device {
        id: "demo".into(),
        name: "vivo X200 Pro".into(),
        detail: "已连接".into(),
        connected: true,
    }])));
    ui.set_device_index(0);
    ui.set_device_name("vivo X200 Pro".into());
    ui.set_connected(true);
    ui.set_service_ready(true);
    ui.set_device_detail("手机与电脑已连接，可直接发送和接收文件。".into());
    ui.set_transport("Wi-Fi Direct".into());
    ui.set_phone_ip("192.168.49.79".into());
    ui.set_pc_ip("192.168.49.1".into());
    ui.set_account("vivo 账号已登录".into());
    ui.set_notice("原生 Slint 界面 · 演示数据，不访问手机或账号".into());
    ui.set_transfers(ModelRc::new(VecModel::from(vec![Transfer {
        id: "demo-job".into(),
        name: "example.txt".into(),
        detail: "发送到手机 · 8 B".into(),
        state: "已完成".into(),
        active: false,
        downloadable: false,
        progress: 1.,
    }])));
}
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args: Vec<String> = std::env::args().collect();
    let flag = |name: &str| args.iter().any(|s| s == name);
    let value = |name: &str| {
        args.iter()
            .position(|s| s == name)
            .and_then(|i| args.get(i + 1))
            .cloned()
    };
    if flag("--help") {
        println!(
            "vivo-connect [--state-dir DIR] [--port 8765] [--demo] [--screenshot FILE] [--quit-after SECONDS]\nNative Rust + Slint, Winit software renderer. Uses the existing local backend. No browser runtime."
        );
        return Ok(());
    }
    let screenshot = value("--screenshot");
    let headless = if screenshot.is_some() {
        Some(snapshot::setup())
    } else {
        let selector = slint::BackendSelector::new()
            .backend_name("winit".into())
            .renderer_name("software".into());
        #[cfg(target_os = "linux")]
        let selector = {
            use slint::winit_030::winit::{
                event_loop::EventLoop, platform::wayland::EventLoopBuilderExtWayland,
            };
            let mut builder = EventLoop::<slint::winit_030::SlintEvent>::with_user_event();
            builder.with_wayland();
            selector.with_winit_event_loop_builder(builder)
        };
        selector.select()?;
        None
    };
    let ui = AppWindow::new()?;
    if flag("--demo") || screenshot.is_some() {
        demo(&ui);
    } else {
        let root = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .parent()
            .unwrap()
            .to_owned();
        let state = value("--state-dir")
            .map(PathBuf::from)
            .or_else(|| std::env::var_os("VIVO_STATE_DIR").map(PathBuf::from))
            .unwrap_or(root.join(".vivo-connect"));
        let port: u16 = value("--port")
            .or_else(|| std::env::var("PORT").ok())
            .unwrap_or("8765".into())
            .parse()?;
        let (tx, rx) = mpsc::channel();
        macro_rules! bind {
            ($method:ident,$param:ident,$body:expr) => {{
                let tx = tx.clone();
                ui.$method(move |$param| {
                    let _ = tx.send($body);
                });
            }};
        }
        bind!(
            on_select_device,
            index,
            worker::Action::Select(index as usize)
        );
        bind!(
            on_send_path,
            path,
            worker::Action::SendPath(path.to_string(), "/sdcard/Download".into())
        );
        {
            let tx = tx.clone();
            ui.on_file_operation(move |action, path, value| {
                let _ = tx.send(worker::Action::FileOperation(
                    action.to_string(),
                    path.to_string(),
                    value.to_string(),
                ));
            });
        }
        ui.on_file_drag_data(|path| {
            slint::DataTransfer::from(slint::SharedString::from(format!(
                "vivo-phone-path:{}",
                path
            )))
        });
        ui.on_is_phone_drag(|data| {
            data.plain_text()
                .is_ok_and(|s| s.starts_with("vivo-phone-path:/"))
        });
        ui.on_phone_drag_path(|data| {
            data.plain_text()
                .ok()
                .and_then(|s| s.strip_prefix("vivo-phone-path:").map(|p| p.to_owned()))
                .unwrap_or_default()
                .into()
        });
        bind!(
            on_upload_here,
            path,
            worker::Action::ChooseFiles(path.to_string())
        );
        bind!(on_browse, path, worker::Action::Browse(path.to_string()));
        bind!(on_receive, path, worker::Action::Receive(path.to_string()));
        bind!(
            on_cancel_transfer,
            id,
            worker::Action::Cancel(id.to_string())
        );
        bind!(on_save_transfer, id, worker::Action::Save(id.to_string()));
        let tx_pair = tx.clone();
        let weak_pair = ui.as_weak();
        ui.on_pair_start(move |mode| {
            if let Some(ui) = weak_pair.upgrade() {
                let _ = tx_pair.send(worker::Action::StartPair(
                    mode,
                    ui.get_wifi_interface().to_string(),
                ));
            }
        });
        macro_rules! simple {
            ($method:ident,$action:expr) => {{
                let tx = tx.clone();
                ui.$method(move || {
                    let _ = tx.send($action);
                });
            }};
        }
        simple!(on_refresh, worker::Action::Refresh);
        simple!(on_parent_directory, worker::Action::ParentDirectory);
        simple!(on_login, worker::Action::Login);
        simple!(on_disconnect, worker::Action::Disconnect);
        simple!(on_reconnect, worker::Action::Reconnect);
        simple!(on_pair_open, worker::Action::OpenPair);
        simple!(on_pair_close, worker::Action::ClosePair);
        simple!(on_pair_change, worker::Action::ChangePair);
        let weak = ui.as_weak();
        let tx_copy = tx.clone();
        ui.on_choose_files(move || {
            if let Some(ui) = weak.upgrade() {
                let _ = tx_copy.send(worker::Action::ChooseFiles(ui.get_save_path().to_string()));
            }
        });
        {
            use slint::winit_030::{EventResult, WinitWindowAccessor, winit};
            let tx = tx.clone();
            let weak = ui.as_weak();
            let mut last_cursor = None;
            ui.window().on_winit_window_event(move |window, event| {
                match event {
                    winit::event::WindowEvent::CursorMoved { position, .. } => {
                        let logical = position.to_logical::<f32>(window.scale_factor() as f64);
                        last_cursor = Some(slint::LogicalPosition::new(logical.x, logical.y));
                    }
                    winit::event::WindowEvent::CursorLeft { .. } => last_cursor = None,
                    winit::event::WindowEvent::MouseInput {
                        state: winit::event::ElementState::Released,
                        button: winit::event::MouseButton::Left,
                        ..
                    } => {
                        if let Some(position) = last_cursor {
                            settle_drag_target(window, position);
                        }
                    }
                    _ => {}
                }
                if let winit::event::WindowEvent::DroppedFile(path) = event {
                    if let Some(ui) = weak.upgrade() {
                        if ui.get_tab_index() == 1
                            && ui.get_connected()
                            && !ui.get_pair_visible()
                            && !ui.get_file_menu_visible()
                            && ui.get_file_dialog_action().is_empty()
                        {
                            let _ = tx.send(worker::Action::SendPath(
                                path.to_string_lossy().into_owned(),
                                ui.get_phone_path().to_string(),
                            ));
                        }
                    }
                }
                EventResult::Propagate
            });
        }
        let worker_handle = match api::Api::load(&state, port) {
            Ok(api) => {
                let dir = state.join(format!("native-ui-{}", std::process::id()));
                fs::create_dir_all(&dir)?;
                #[cfg(unix)]
                {
                    use std::os::unix::fs::PermissionsExt;
                    fs::set_permissions(&dir, fs::Permissions::from_mode(0o700))?;
                }
                let weak = ui.as_weak();
                Some(std::thread::spawn(move || {
                    worker::run(api, weak, rx, dir, state, port)
                }))
            }
            Err(e) => {
                ui.set_notice(e.into());
                None
            }
        };
        // The GUI owns only its RPC worker. Closing it never kills a backend or a
        // privileged Wi-Fi helper started independently by the user.
        let timer = slint::Timer::default();
        if let Some(seconds) = value("--quit-after") {
            timer.start(
                slint::TimerMode::SingleShot,
                Duration::from_secs(seconds.parse()?),
                || {
                    let _ = slint::quit_event_loop();
                },
            );
        }
        ui.run()?;
        let _ = tx.send(worker::Action::Shutdown);
        if let Some(worker) = worker_handle {
            let _ = worker.join();
        }
        return Ok(());
    }
    if let Some(path) = screenshot {
        snapshot::save(&ui, headless.unwrap(), &PathBuf::from(path))?;
        return Ok(());
    }
    let timer = slint::Timer::default();
    if let Some(seconds) = value("--quit-after") {
        timer.start(
            slint::TimerMode::SingleShot,
            Duration::from_secs(seconds.parse()?),
            || {
                let _ = slint::quit_event_loop();
            },
        );
    }
    ui.run()?;
    Ok(())
}

#[cfg(test)]
mod ui_tests {
    use super::*;
    use std::{cell::Cell, rc::Rc};
    #[test]
    fn native_widgets_render_and_handle_pointer_events() {
        let window = snapshot::setup();
        let ui = AppWindow::new().unwrap();
        demo(&ui);
        let clicked = Rc::new(Cell::new(0));
        let count = clicked.clone();
        ui.on_pair_open(move || count.set(count.get() + 1));
        let path =
            std::env::temp_dir().join(format!("vivo-native-smoke-{}.png", std::process::id()));
        snapshot::save(&ui, window.clone(), &path).unwrap();
        assert!(fs::metadata(&path).unwrap().len() > 1000);
        use slint::platform::{PointerEventButton, WindowEvent};
        let position = slint::LogicalPosition::new(116., 214.);
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position });
        ui.window().dispatch_event(WindowEvent::PointerPressed {
            position,
            button: PointerEventButton::Left,
        });
        ui.window().dispatch_event(WindowEvent::PointerReleased {
            position,
            button: PointerEventButton::Left,
        });
        assert_eq!(clicked.get(), 1);
        ui.set_pair_visible(true);
        slint::platform::update_timers_and_animations();
        let mut pixels = vec![slint::Rgb8Pixel::default(); 1080 * 760];
        window.draw_if_needed(|renderer| {
            renderer.render(&mut pixels, 1080);
        });
        ui.window().dispatch_event(WindowEvent::PointerPressed {
            position,
            button: PointerEventButton::Left,
        });
        ui.window().dispatch_event(WindowEvent::PointerReleased {
            position,
            button: PointerEventButton::Left,
        });
        assert_eq!(
            clicked.get(),
            1,
            "pairing overlay must block background device actions"
        );
        ui.set_pair_visible(false);
        ui.set_tab_index(1);
        ui.set_phone_path("/storage/emulated/0/".into());
        ui.set_files(ModelRc::new(VecModel::from(vec![
            PhoneFile {
                name: "DCIM".into(),
                path: "/storage/emulated/0/DCIM".into(),
                directory: true,
                detail: "文件夹".into(),
            },
            PhoneFile {
                name: "Download".into(),
                path: "/storage/emulated/0/Download".into(),
                directory: true,
                detail: "文件夹".into(),
            },
            PhoneFile {
                name: "example.txt".into(),
                path: "/storage/emulated/0/example.txt".into(),
                directory: false,
                detail: "8 B".into(),
            },
        ])));
        snapshot::save(
            &ui,
            window,
            &std::env::temp_dir().join("vivo-native-files-smoke.png"),
        )
        .unwrap();
        ui.on_file_drag_data(|path| {
            slint::DataTransfer::from(slint::SharedString::from(format!(
                "vivo-phone-path:{}",
                path
            )))
        });
        ui.on_is_phone_drag(|data| {
            data.plain_text()
                .is_ok_and(|s| s.starts_with("vivo-phone-path:/"))
        });
        ui.on_phone_drag_path(|data| {
            data.plain_text()
                .ok()
                .and_then(|s| s.strip_prefix("vivo-phone-path:").map(str::to_owned))
                .unwrap_or_default()
                .into()
        });
        let moves = Rc::new(std::cell::RefCell::new(Vec::new()));
        let captured = moves.clone();
        ui.on_file_operation(move |action, source, target| {
            captured
                .borrow_mut()
                .push((action.to_string(), source.to_string(), target.to_string()))
        });
        let first = slint::LogicalPosition::new(500., 490.);
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position: first });
        ui.window().dispatch_event(WindowEvent::PointerPressed {
            position: first,
            button: PointerEventButton::Right,
        });
        ui.window().dispatch_event(WindowEvent::PointerReleased {
            position: first,
            button: PointerEventButton::Right,
        });
        assert!(
            ui.get_file_menu_visible(),
            "right click opens the file menu"
        );
        assert_eq!(ui.get_selected_name(), "DCIM");
        ui.set_file_menu_visible(false);
        slint::platform::update_timers_and_animations();
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position: first });
        ui.window().dispatch_event(WindowEvent::PointerPressed {
            position: first,
            button: PointerEventButton::Left,
        });
        let second = slint::LogicalPosition::new(500., 545.);
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position: second });
        ui.window().dispatch_event(WindowEvent::PointerReleased {
            position: second,
            button: PointerEventButton::Left,
        });
        assert!(
            moves.borrow().is_empty(),
            "a single coalesced movement exposes the missing target update"
        );
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position: first });
        ui.window().dispatch_event(WindowEvent::PointerPressed {
            position: first,
            button: PointerEventButton::Left,
        });
        ui.window()
            .dispatch_event(WindowEvent::PointerMoved { position: second });
        settle_drag_target(ui.window(), second);
        ui.window().dispatch_event(WindowEvent::PointerReleased {
            position: second,
            button: PointerEventButton::Left,
        });
        assert_eq!(
            &*moves.borrow(),
            &[(
                "move".to_string(),
                "/storage/emulated/0/DCIM".to_string(),
                "/storage/emulated/0/Download".to_string()
            )],
            "dragging one item onto a folder moves it"
        );
        fs::remove_file(path).unwrap();
    }
}
