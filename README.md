# vivo 互传 7.0.6 接口逆向与跨平台移植

本仓库以提供的 Windows 安装目录和内嵌 Android APK 为样本，整理连接、文件管理、本机服务、Electron IPC、同步与原生组件边界。可以据此设计新的跨平台客户端；投屏媒体传输、蓝牙配对底层和云同步引擎仍需进一步还原，不能仅凭已列出的 HTTP 接口实现全部功能。

## 基础后端

已新增账号登录、手机连接和文件收发后端，优先复用官方账号网页、手机 APK、`@vivo/adbkit`、WebSocket 和 TAR 库。原生 GUI 使用 **Rust + Slint**，采用软件渲染；运行 `./tools/run-native.sh` 打开设备界面，后端可用 `node backend/src/server.mjs` 启动。详情见 [原生 GUI](docs/native-gui.md)。

校园网隔离场景使用项目独立 supplicant 管理 P2P GO，不修改 NetworkManager；已实测手机直连、文件上传及回读哈希一致。API、依赖和验证范围见 [后端使用文档](docs/backend.md)。

## 文档入口

| 文档 | 内容 |
|---|---|
| [无线配对核心协议](docs/wireless-pairing.md) | UDP 2200 发现、TCP 10191 授权、token、新版 seed/sign 与参考实现 |
| [分析范围和架构](docs/architecture.md) | 样本、可信度、端口、进程与协议分层 |
| [手机连接与文件管理](docs/phone-protocol.md) | USB 启动、版本协商、HTTPS、WSS 心跳、文件接口与传输流程 |
| [本机 HTTP 服务](docs/local-services.md) | 9199 与 9200 的鉴权、请求参数、返回码、特殊路由 |
| [本机路由清单](docs/local-routes.md) | 42 个 9199 HTTP 路由、15 个 9200 注册表路由及 WebSocket 根路由 |
| [进程通信与同步](docs/ipc-sync.md) | Bridge 信封、原生子进程 WebSocket、SyncService 消息 |
| [Bridge 方法清单](docs/bridge-catalog.md) | 130 个静态可见导出方法及实现位置 |
| [原生包装层清单](docs/native-wrappers.md) | 81 个 Node 原生模块包装函数签名 |
| [移植实施与验证](docs/porting.md) | 推荐模块边界、分阶段实现、真机验证和未解问题 |
| [HTTP 调用与路径索引](docs/http-index.md) | 自动提取的调用点和路径候选，便于补充接口 |

## 可复用产物

- [无线配对参考实现](tools/wireless_pairing.py)、[离线检查](tools/verify_wireless.py)、[原生函数索引](evidence/wireless/native-functions.json)、[Android 方法索引](evidence/wireless/android-methods.json)。
- [原始 Protobuf 定义](evidence/proto/1fe88f158662.proto)：从连接 bundle 的字符串常量直接提取，含 MessageBase、ForwardMessage、注册、连接和流量消息。
- [本机路由及完整处理函数](evidence/local-routes.json)、[IPC 调用索引](evidence/ipc.json)、[HTTP 调用配置](evidence/http.json)。
- [原生 PE 导入导出与字符串](evidence/native.json)、[Android DEX 字符串交叉验证](evidence/android-strings.json)。
- `analysis/pretty/` 是仅美化、没有重命名的全部 207 个顶层 JavaScript bundle；`evidence/main-modules/` 按主进程 webpack 模块号切分，首行记录 bundle 原始位置。

## 重现分析

在仓库根目录执行，使用本机 Python 3、Node.js 和 GNU objdump。脚本读取样本，不启动 Windows 程序、不安装 APK、不连接手机或远端服务。格式化和语法索引复用样本自带的 Terser 与 Acorn；只执行这些分析工具，不执行应用业务 bundle。

```sh
python tools/extract_asar.py
node tools/format_bundles.cjs
node tools/index_interfaces.cjs
node tools/catalog_interfaces.cjs
python tools/native_inventory.py
python tools/build_http_index.py
python tools/verify_evidence.py
```

若系统有 protoc，验证脚本还会编译 proto 并输出 `evidence/proto/connection.pb`；当前样本已编译通过。代码链接、注册路由数量及 1746 个主进程模块的来源一致性检查结果见 [verification.json](evidence/verification.json)。

ASAR 中标为 unpacked 的部分第三方开发文件在提供的目录中不存在。提取器跳过并逐项记录在 [extraction.json](evidence/extraction.json)，不把缺失文件当作已恢复源码。这里的静态结论针对本地样本，不代表当前在线服务或其他版本的兼容承诺。
