# 原生桌面客户端（Rust + Slint）

主界面位于 [native](../native/src/main.rs)，使用 Slint 1.18.1 编译为本地可执行文件。桌面窗口由 Winit 管理，默认使用软件渲染；不使用 WebView、Electron、Qt、QML 或 Slint 解释器。界面文件在编译阶段转换为 Rust，保留浅色侧栏与设备详情的 KDE Connect 式布局。

## 运行

后端已经运行时，只需执行：

```sh
./tools/run-native.sh
```

此脚本最终 exec 原生二进制，不留下额外的 Node/npm 前端启动进程。首次缺少二进制时会构建 Release 版本。也可直接运行 `build/native/release/vivo-connect`；兼容入口 `npm run ui` 和 `npm run scan` 已指向原生客户端，低内存使用建议直接调用脚本。

后端没有运行时，在另一个终端执行：

```sh
node backend/src/server.mjs
```

客户端复用现有的 Node 后端及官方模块，不启动第二份后端，不重启或关闭已经运行的后端，也不改变当前手机连接。GUI 关闭时会取消自身未完成的扫码/重连任务；关闭自身启动的直连助手前会清理其独立网络。局域网、USB 或其他终端助手上的连接继续由后端管理。

## 在 GUI 中连接与重连

点击“添加新设备”，默认选择“Wi-Fi Direct · 保留校园网”。选择当前连接校园网的无线网卡（本机为 `wlp2s0`），点击“生成 / 刷新二维码”。若直连助手尚未启动，会弹出系统授权窗口；授权后 GUI 自动等待独立网络就绪并显示二维码，无需在终端执行 sudo。首次缺少项目独立 supplicant 时先以普通用户构建，完成后才请求授权。

授权使用系统 `pkexec` 和桌面 polkit 代理；密码不经过 GUI 或后端。继续沿用项目的 private 助手，不安装系统服务，不修改或重启 NetworkManager。GUI 自动复用已运行的独立助手。再次启动前会检查上次异常退出的私有接口：只恢复受保护运行记录确认属于本项目、控制服务已退出且没有活动无线组的接口。取消准备会撤销本次启动；GUI 退出会清理它自己启动的直连网络，因此使用该网络传输时请保持窗口运行。其他终端启动的助手由原终端管理，GUI 不关闭它们。

已连接设备点击“断开连接”后仍保留在列表，设备详情提供“重新连接”。意外掉线也会显示该按钮。重连先使用后端保留的会话参数重新握手；若手机已关闭服务、地址变化或原授权失效，则进入原连接方式的扫码页面。Wi-Fi Direct 网络已停止时可直接在该页面重新授权启动。设备按手机的稳定身份合并，原会话重连及重新扫码均复用原设备条目和 ID；同型号不同手机不会按名称或 IP 合并。设备记录与连接凭据当前仅在后端进程内保留，后端重启后需要重新扫码。

## 功能

- 左侧显示已有设备，支持设备切换、状态刷新、断开及重新连接。
- 原生窗口内显示扫码二维码及配对阶段；过期自动重新生成，关闭配对窗口取消等待任务。
- 账号按钮沿用后端的官方网页认证，认证窗口仅在登录时打开。
- 系统文件选择器支持多选；直接向后端提交本地绝对路径，由后端暂存、预检并流式发送。GUI 不缓存整个文件内容，不受旧浏览器文件入口的 512 MiB 限制；后端仍有 50 GiB 单任务上限。
- 手机文件页默认路径明确显示为 `/storage/emulated/0/`，打开官方“手机存储”首页，提供“手机存储 / 上一级 / 打开目录”导航；可进入子目录并接收其中的文件。首页协议路径 `/` 是官方共享存储视图，不是 Android 系统根目录。目录路径采用手机返回的 `savePath`，兼容将 `/sdcard` 别名转换为手机 `innerRoot`（通常是 `/storage/emulated/0`）。
- 传输记录显示进度、失败原因、取消和保存。单个接收文件通过系统保存对话框复制到所选路径；多文件任务会显示后端保存目录。

系统文件对话框按可用情况调用 kdialog 或 zenity，它们只在选择/保存文件时运行。本机已有 zenity。主 GUI 不依赖 GTK/Qt 的常驻运行时。

## 构建与参数

```sh
cargo build --locked --release -j2 --manifest-path native/Cargo.toml --target-dir build/native
cargo test --locked --release -j2 --manifest-path native/Cargo.toml --target-dir build/native
```

开发依赖：Rust/Cargo、C 工具链，以及 Winit 对应的 Wayland/X11、xkbcommon 与 fontconfig 开发环境。已有缓存时可添加 `--offline`。Slint 关闭默认特性，只启用 std、compat-1-18、backend-winit 和 renderer-software；系统字体用于完整支持动态中文设备名、文件名。构建目录被 Git 忽略，Cargo.lock 固定依赖。

可选参数：

```sh
build/native/release/vivo-connect --state-dir /本机后端状态目录 --port 8765
build/native/release/vivo-connect --demo
build/native/release/vivo-connect --screenshot /tmp/vivo-slint-ui.png
```

默认读取项目 `.vivo-connect/config.json`，也支持 VIVO_STATE_DIR / PORT 环境变量。访问凭据仅用于本机请求，不在窗口或日志中输出；禁止代理与 HTTP 重定向，避免将凭据转发到其他主机。演示与截图模式不连接后端、手机或账号。

## 内存验证

2026-11-01 在本机启动实际原生窗口、连接现有后端并只读轮询状态，按 3 秒间隔采样三次：

| 进程 | 稳定 PSS | 稳定 RSS |
|---|---:|---:|
| 原生 GUI | 28.3 MiB | 45.9 MiB |
| 现有 Node 后端 | 38.0 MiB | 68.3 MiB |

PSS 来自 `/proc/<pid>/smaps_rollup`，按共享页比例计算；RSS 包含共享映射。数据不包含桌面合成器、管理员直连助手、临时文件选择器或登录浏览器，也不代表其他机器与传输负载下的峰值。GUI 使用未变更快照跳过界面重建，空闲每 5 秒轮询、配对/传输期间每秒轮询。

[测量记录](../evidence/native-gui-memory.json)包含原始采样。可通过 `python tools/measure_native.py` 复测：会打开实际窗口，12 秒后自动关闭，仅查询状态。`--demo` 可测试不连接后端的界面。

原生回归测试覆盖 RPC 鉴权、拒绝重定向、配置错误保密、文件请求、目录响应、断连与重连操作、会话失效回退扫码、网卡参数与进程身份，以及实际软件渲染和控件点击。预览使用演示数据，位于 `/tmp/vivo-slint-ui.png`。原有网页仅作为可选调试入口 `npm run ui:web` 保留，正常 GUI 路径不会加载网页资源。

框架依据：[Slint Cargo 特性](https://docs.slint.dev/latest/docs/rust/slint/docs/cargo_features/)、[Winit 后端](https://docs.slint.dev/latest/docs/slint/guide/backends-and-renderers/backend_winit/)。
