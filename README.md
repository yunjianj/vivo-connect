# vivo Connect

适用于 Linux 的 vivo 手机连接与文件管理工具。桌面客户端使用 C++ 和 Qt Widgets，支持 Wayland，并通过本机后端管理设备连接和文件传输。

## 功能

- 使用 vivo 账号登录，通过 Wi-Fi Direct 或局域网扫码连接手机；后端也支持 USB 连接。
- 浏览手机共享存储，上传、接收、移动、重命名和删除文件，支持拖放、右键菜单与快捷键。
- 同步文本剪贴板，查看和取消文件传输任务。
- 断线后尝试自动重连；支持托盘后台运行和登录桌面时自动启动。
- 可选 Wi-Fi Direct 持久服务，供后续连接使用。

功能可用性取决于手机型号、系统版本、授权状态和网络环境；Wi-Fi Direct 重启后可能需要重新扫码。详见[桌面客户端使用说明](docs/native-gui.md)。

## Arch Linux 安装

在项目根目录构建并安装：

```sh
./packaging/arch/build.sh
sudo pacman -U build/packages/vivo-connect-0.1.0-13-x86_64.pkg.tar.zst
```

从应用菜单或运行 `vivo-connect` 启动。依赖、桌面图标定制、Wi-Fi Direct 服务及卸载说明见 [Arch Linux 软件包](packaging/arch/README.md)。

## 从源码运行

需要 Node.js 22+、C++17 编译器、CMake、pkg-config、Qt 6 Widgets/Network/DBus、Qt Wayland、FUSE 3 开发库和 `qrencode`。Wi-Fi Direct、USB 和自动账号登录还需要相应的系统组件，详见[桌面客户端](docs/native-gui.md)和[后端说明](docs/backend.md)。

```sh
./tools/run-native.sh
```

客户端会启动本机后端。也可以在项目根目录单独运行 `npm start`，并参考[本机 API 文档](docs/backend.md)。

## 使用与故障排查

1. 启动客户端并登录账号，在“添加设备”中选择连接方式。
2. 使用 Wi-Fi Direct 时，选择无线网卡并按提示授权；也可在“Wi-Fi Direct 设置”中启用持久服务。
3. 扫描二维码、在手机上确认连接。连接后可在“手机文件”中管理文件，或打开“手机图库”浏览相册、导入导出及删除照片。
4. 关闭主窗口后，系统托盘可用时程序继续在后台运行；通过托盘菜单退出程序。

连接失败、扫码、传输及服务错误的说明和排查方法见[后端文档](docs/backend.md)，桌面操作和已知限制见[桌面客户端文档](docs/native-gui.md)。

## 文档与测试

- [文档索引](docs/README.md)
- [后端运行与 API](docs/backend.md)
- [桌面客户端](docs/native-gui.md)
- [Arch Linux 构建与安装](packaging/arch/README.md)

在项目根目录运行测试：

```sh
npm test
./tools/test-native-qt.sh
```

录音机云同步：在客户端登录与手机相同的 vivo 账号后，打开“录音机云同步”标签页。支持云端增量更新、音频播放导出、改名和回收站，详见[录音云同步文档](docs/recordings.md)。

原子笔记云同步：登录与手机相同的 vivo 账号，在“原子笔记云同步”标签页同步笔记、查看正文和导出附件；支持新建笔记、保留原格式及附件的文字编辑、改名与回收站操作，详见[笔记文档](docs/notes.md)。
