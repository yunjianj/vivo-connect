# vivo Connect

基于 vivo Windows 客户端 **7.0.6.0-cn** 与配套 Android APK 进行协议分析，并实现 Linux 手机连接、文件管理和桌面客户端。当前桌面界面使用 C++ / Qt Widgets，复用本机 Node.js 后端。

## 快速开始

需要 Node.js 22+、Qt 6 Widgets/Network/DBus、CMake、FUSE 3、Python、qrencode，以及项目说明中列出的无线与 Android 工具。运行桌面客户端：

```sh
./tools/run-native.sh
```

也可单独运行后端：

```sh
npm start
```

Arch Linux 软件包可直接通过 `./packaging/arch/build.sh` 构建。安装、依赖和定制方式见 [Arch 打包说明](packaging/arch/README.md)。

## 文档

[文档索引](docs/README.md)按上手运行、协议分析、逆向索引和移植参考整理了全部文档。常用入口：

- [后端运行和 API](docs/backend.md)
- [Qt 桌面客户端](docs/native-gui.md)
- [官方账号重连协议](docs/official-reconnect.md)
- [手机连接与文件管理协议](docs/phone-protocol.md)
- [Windows 样本与版本说明](samples/windows/v7.0.6.0-cn/README.md)

## 样本与分析范围

Windows 原版安装包与完整提取目录按版本放在 `samples/windows/v7.0.6.0-cn/`，并由 Git 忽略；这些样本只用于再分析。Linux 运行所需的开源 Node.js 模块闭包已单独放在 `runtime/windows/v7.0.6.0-cn/`，克隆后无需准备 Windows 安装包。手机端官方 APK 不随公开仓库分发；手机已安装官方应用时可直接连接，需要安装时请通过 vivo 官方渠道获取。公开仓库不包含 Windows 安装包、程序主体、账号配置或构建缓存。

仓库中的 `evidence/` 保存静态分析索引与验证记录；`analysis/` 是从本机样本生成的完整提取产物，默认不纳入版本控制。静态证据不能代替不同手机、系统版本和网络条件下的实机验证。

## 重新生成静态索引

在仓库根目录执行。流程只读取本地样本，不启动 Windows 程序、不安装 APK，也不连接手机或远端服务：

```sh
python tools/extract_asar.py
node tools/format_bundles.cjs
node tools/index_interfaces.cjs
node tools/catalog_interfaces.cjs
python tools/native_inventory.py
python tools/build_http_index.py
python tools/verify_evidence.py
```

缺失的 ASAR unpacked 文件会记入 `evidence/extraction.json`，不会伪装成已恢复源码。公开运行模块遵循其随包许可证；项目没有授予 vivo 安装包、商标或手机 APK 的再分发许可，请按各权利人的条款使用本地样本。
