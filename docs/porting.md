# 跨平台移植实施与验证

## 实现顺序

按当前目标优先完成同一局域网无线连接：UDP 发现、TCP 配对授权、HTTPS/WSS 与基本文件访问。详细报文、参考实现和剩余问题见 [无线配对核心协议](wireless-pairing.md)。USB 可作为协议对照路径；云业务、投屏和其他平台集成暂缓。下表保留完整功能的分阶段拆分，当前先做无线入口及阶段 2、3。

| 阶段 | 实现内容 | 完成判据 |
|---|---|---|
| 1 | ADB 设备发现、启动手机服务、端口映射、连接 token 会话、版本协商 | 真机同意连接后读到 base-info，WSS 心跳持续可用 |
| 2 | 文件分类、目录、存储、缩略图与搜索 | 分页无丢项，路径和设备身份映射正确，授权失败可恢复 |
| 3 | 小文件与目录上传/下载、空间预检、任务取消 | 文件哈希一致，中文/emoji/大文件可用，断线不造成伪成功 |
| 4 | BLE/SSDP/Wi-Fi Direct、网络切换与重连 | 不依赖 Windows vivoesService 也能完成发现、授权和近场连接 |
| 5 | 原生子进程替代、剪贴板、键鼠、投屏/音频/虚拟相机 | 分别完成协议、媒体时序和平台权限验证 |
| 6 | 云连接、账号、笔记/日历/相册同步 | Protobuf 兼容，账号与权限正常，冲突和增量同步语义明确 |

## 建议代码边界

以下是新客户端的接口设计建议，不是从软件中恢复的公开 SDK。

- `DeviceDiscovery`：返回原始设备记录并保留发现来源；BLE ID、mobileDeviceId、cloudDeviceId、ADB serial 各自存储。
- `ConnectionSession`：管理 connectionId、token、手机地址、实际转发端口、近场/云状态和授权能力。
- `PhoneHttpClient`：按会话注入 newToken，明确区分 GET query、POST JSON、nearPack 及流式 body。
- `PhoneControlChannel`：WSS 子协议、心跳、前缀消息和连接事件；断开时取消该设备未完成请求。
- `FileManagerClient`：列表、目录、缩略图和文件元数据 API；维护每类响应的真实 envelope。
- `TransferManager`：任务 id、预检、流式传输、归档、进度、重试、取消和结果校验。
- `CloudRouter`：使用提取的 proto 生成类型，实现 type/data 和请求关联，独立处理账号凭据。
- `PlatformServices`：ADB、权限、文件系统、通知、拖放、剪贴板、挂载和媒体设备适配。

Linux 在样本里缺少与 Windows/macOS 对等的服务实现。尤其 pcSystemType 的原分支只区分 darwin 与其他系统，不能简单把 Linux 伪装为 Windows 后就认为兼容；先验证服务端接受的字段，再定义新平台能力上报。

## 需要继续还原的契约

| 未解部分 | 已有线索 | 下一步证据 |
|---|---|---|
| 配对的动态兼容性与证书绑定 | 无线 token、旧版 TCP 帧及新版加密已静态还原，见无线文档 | 确认新版手机挑战字段、真实授权结果与 HTTPS/WSS 闭环 |
| BLE 广播、GATT、Wi-Fi Direct | 已定位 UUID 与 PC/手机方法；SSDP 报文已还原 | 完整广播位布局、挑战获取、直连凭据交换与抓包 |
| 文件操作的完整 schema | requestGet/Post 调用、APK 路径 | 追踪 UI 参数构造与 APK handler，逐项记录实际响应 |
| 文件传输恢复与取消 | task-id、download_info、drop_files_info、传输 WS 消息 | 断线、取消、重试和重名冲突的成对抓包 |
| VDFS 与键鼠底层流 | 5678/5679、8903/8904、PcsuiteConnectSDK | 手机 native 库与 PC DLL 的会话/数据帧分析 |
| 投屏、音频、扩展屏 | 10381、VivoCastSDK/AvCSDK、FFmpeg | 控制握手、媒体头、编码配置、时钟同步与输入消息 |
| 云增量同步 | SyncService 本机消息、模块号 | 本机同步进程反汇编、数据库迁移与冲突实测 |
| 9200 管道跨平台鉴权 | 管道握手、签名校验与 masterKey | 各目标平台正常授权机制和签名身份模型 |

## 真机验证记录

每次记录软件/手机系统版本、PC 平台、手机 APK 版本、连接方式、请求/响应时间、相关 task-id 与实际端口。导出日志时替换账号 token、连接 token、OpenID 和设备标识；保持同一会话内替换值稳定，以便关联消息。

关键验证用例：

1. 未授权、拒绝授权、锁屏、隐私未同意与已授权的 `/version`、`/base-info` 差异。
2. USB 与局域网的实际 HTTP/TLS/WSS 顺序、证书、Sec-WebSocket-Protocol 选择及 token 生命周期。
3. 两台设备并存，断开一台不影响另一台；端口占用后的映射和资源清理。
4. 列表首页/末页、空目录、外置存储、中文/emoji/含分隔符路径、极长路径。
5. 单文件和目录传输后比较 SHA256；验证实际归档格式、重名处理、权限和空间不足响应。
6. 上传中取消、网络中断、手机服务退出、PC 重启后的任务状态，不把“请求已发送”报告为“文件已完成”。
7. 连接状态接口的业务码类型、内外两层 code、超时成功空数组等原实现边界。
8. 云登录过期、流量限制及 protobuf uint64、大字节消息和乱序回复。

当前产物已经完成可见 JavaScript 接口、原生包装层和 APK 路径线索的静态整理；上述动态兼容性用例尚未执行。不能把它们写成通过记录，也不能将函数名或二进制字符串当成完整可调用协议。

## 分析工具和来源

`tools/extract_asar.py` 直接读取 ASAR 索引、提取存在的文件并记录缺失项。`format_bundles.cjs` 只格式化顶层 JS，不重命名变量。`index_interfaces.cjs` 用 Acorn 分析语法树，提取调用配置、IPC 和 proto；索引含第三方依赖调用，按证据使用而非当成全部业务 API。`catalog_interfaces.cjs` 将本机注册表与 Bridge/原生包装层映射成可读表。`native_inventory.py` 保存 PE 导入导出与 DEX 字符串；它不等于对原生或 Android 方法完成反编译。
