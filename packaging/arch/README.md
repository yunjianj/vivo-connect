# Arch Linux 软件包

从项目根目录以普通用户构建：

```sh
./packaging/arch/build.sh
sudo pacman -U build/packages/vivo-connect-0.1.0-5-x86_64.pkg.tar.zst
```

仓库已包含所需的 Node.js 运行模块，来源和许可证见 [运行模块说明](../../runtime/windows/v7.0.6.0-cn/)。手机已经安装官方应用时可使用 USB 连接；要启用明确请求的 APK 安装选项，可通过 `VIVO_PHONE_APK` 指向合法取得的 APK。默认使用项目 `icons/` 中的图标，以及 `build/private-p2p/wpa_supplicant-2.12.tar.gz`；如无线组件源码包不存在，构建脚本会从上游下载固定版本并验证 SHA-256。私有无线组件在构建期间重新编译，不覆盖系统服务。

可在构建时配置桌面标识和图标：

```sh
VIVO_DESKTOP_ID=io.example.VivoConnect \
VIVO_ICON=/absolute/path/to/icon.png \
./packaging/arch/build.sh
```

`VIVO_DESKTOP_ID` 是反向域名形式的桌面文件 ID，同时用于 Wayland 应用标识；默认 `io.github.vivo_connect.VivoConnect`。图标名称为桌面标识加 `.app`。`VIVO_ICON` 可指定 PNG 图标，默认使用项目图标。可用 `VIVO_PHONE_APK` 指定合法取得的手机 APK；`VIVO_BUILD_JOBS` 控制并行构建数。默认运行模块已包含在仓库中。

安装后从应用菜单或运行 `vivo-connect` 启动。程序、桌面文件、图标、运行模块和私有无线组件均由 pacman 管理；使用 `sudo pacman -R vivo-connect` 卸载。账号、配置和接收文件默认放在 `${XDG_DATA_HOME:-~/.local/share}/vivo-connect`，pacman 不会删除用户数据。如果希望继续使用源码运行时的账号和设置，可以在启动前设置 `VIVO_STATE_DIR` 指向原先的 `.vivo-connect` 目录。确认不再需要后，可自行删除相应用户数据目录。

可选登录浏览器和 USB 工具列在包的 optdepends 中；自动账号登录需要受支持的 Chromium 浏览器，USB 功能需要 Android platform-tools。Wi-Fi Direct 运行时需要系统 polkit 授权代理。

可在客户端的“Wi-Fi Direct 设置”中选择网卡并启用或移除可选系统服务，操作时需要一次系统授权。也可使用以下命令安装（先运行一次客户端生成用户配置）：

```sh
sudo python3 -I /usr/lib/vivo-connect/tools/install_p2p_service.py install \
  --user "$USER" --interface wlp2s0 --state-dir "$HOME/.local/share/vivo-connect"
```

网卡、状态目录应按实际配置填写。该服务将固定配置的无线助手复制到 `/usr/local/lib/vivo-connect-p2p`，后续日常启动不再需要 sudo/pkexec。服务模式的组不随 GUI 退出而撤销，但机器重启后的手机免扫码入组不作保证。卸载 pacman 软件包时会尝试同步移除该可选服务，并保留用户数据；如自动移除失败，可使用以下命令清理：

```sh
sudo python3 -I /usr/local/lib/vivo-connect-p2p/tools/install_p2p_service.py uninstall
```
