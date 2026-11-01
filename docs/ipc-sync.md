# 进程通信与同步接口

## Electron Bridge

界面通过 `window.hybridBridge(name, data, callback, isListener=false)` 调用；Promise 包装为 `hybridBridgeAsync(name,data)`，监听包装为 `addBridgeListener`。它是应用内部桥，不是可通过 TCP 连接的服务。[preload 实现](../analysis/pretty/preload.js)

发送到主进程 IPC channel `postMessage`：

```json
{
  "bridgeName": "common/getSystemConfigInfo",
  "data": {},
  "cid": 1,
  "isListener": false,
  "windowCtx": {"isMainWindow": true, "id": 1}
}
```

主进程按 `/` 拆成模块与方法；不带模块前缀时使用 common。模块为 common、album、calendar、note、notification、mac、vtalk、record。回调在 channel `receiveMessage`：

```json
{
  "bridgeName": "common/getSystemConfigInfo",
  "cid": 1,
  "isListener": false,
  "data": {},
  "error": null
}
```

示例里的 error 仅表示可选字段的位置，正常实现可能直接省略。cid 由 preload 自增，普通回调完成后清除，listener 保留。主进程异常路径发出的回包没有完整 cid 等字段，preload 会抛 message format error；未知方法只警告，不保证回复。移植时可改善这种挂起行为，但不要把原实现的异常分支记成完整 RPC 规范。[分派实现](../evidence/main-modules/1506.js)

[Bridge 清单](bridge-catalog.md)列出静态导出方法。形参 `e,t` 等是打包后名字；业务 data schema 要看实现的解构。例如：

| 方法 | data 字段 | 语义 |
|---|---|---|
| common/triggerUpdateMessage | moduleId、cmd、exdata、resMsg 等原始业务字段 | 转发 SyncService；回调“通知完成”只表示发送阶段完成 |
| common/monitorUpdateMessage | winId | 注册窗口持续同步回调，应使用 listener |
| calendar/runDataBaseMethod | methodName、data（JSON 字符串）、type | 根据 type=`caldav` 或其他值动态调用数据库模块 |
| album/makeDir | pathArr | 逐项创建本地目录 |

common 由基础对象与两个 mixin 合成；清单按后合并者覆盖同名项。其合并关系见 [common](../evidence/main-modules/1553.js)、[mixin 1](../evidence/main-modules/1558.js)、[mixin 2](../evidence/main-modules/1562.js)。

独立 EventPipe 使用 IPC `__eventPipe` 和 `__eventPipeWindow`，与上述 Bridge 不同。[IPC 静态索引](../evidence/ipc.json)同时包含注册和调用；其中 send/once 只是调用或监听点，不能都当作可调用 API。

## 原生子进程 WebSocket

原生组件启动时得到本机回连 URL，例如 `/backup?hashId=<appHashId>` 或 `/keyboardMouseCoordination?hashId=<appHashId>`，同时接收实际 9199 服务端口和日志目录。服务端对未知 WS pathname 走 applicationManangerHandle，将 pathname 去掉首个 `/` 并转大写作为模块名，使用 query hashId 和可选 id 注册连接。[WS 路由](../evidence/main-modules/239.js#L1170)、[应用进程管理器](../evidence/main-modules/354.js)

模块管理映射包括投屏、扩展屏、键鼠、远控、VDFS server/client、备份、录屏、电话、PC 模式、共享相机和 VClaw。hashId 关联的是本机应用实例，不能用手机 deviceId 替代。

界面和主进程间的控制包：

```json
{
  "appHashId": "<instance-id>",
  "type": "<APPIPCMsgType value>",
  "payload": "<business payload>"
}
```

MESSAGE 将 payload 发送给原生 WS；OPEN 的 payload 为 `{appName,params}`；CLOSE 要求字符串 payload；DESTROY 要求含 appName，可带 isKillProcess。枚举真实字面值见 [应用进程常量](../evidence/main-modules/100.js)及静态索引，不能假定英文枚举成员名就是线上值。

子进程消息前缀包括 `heartbeat:`、`receipt:`、`forward:`，字面值见常量。心跳 JSON 带 msgId，主进程回 receipt 前缀拼接同 msgId。forward 载荷的 to 可为数组，元素格式为 `模块名$-$实例ID`，未指定目的地时广播。原生消息通常继续作为字符串转发给界面，不会统一转成 JSON。[处理器](../evidence/main-modules/354.js#L200)

这是组件控制通道，不能据此确定手机投屏的媒体封包、音视频格式、加密或输入事件编码。

## vivoesService HTTP 事件

PC 向 `http://127.0.0.1:9197/` 发送 `N#JSON`。已确认扫描消息示例：

```text
{"event":"preconnect_startScan","app":"pcsuite","args":[true]}
```

发送时前置 JS 字符串长度和 `#`。响应也按 `#` 后内容解析 JSON；getSameAccountDevices 消费 response.data 为设备数组。该请求 timeout 为 5 秒。[扫描调用](../evidence/main-modules/239.js#L290)

该服务负责的 BLE、Wi-Fi、网络代理和服务生命周期功能需要继续从调用点与原生组件还原；不宜用“已发现设备”消息替代真实配对过程。

## SyncService WebSocket

默认 `ws://127.0.0.1:9996`。Windows 会读取配置 SyncServicePort，连接断开后约 5 秒重连。控制层 sendServiceMsg 执行 JSON.stringify，不提供远端同步完成保证。[管理器](../evidence/main-modules/109.js)、[连接常量](../evidence/main-modules/687.js)

常见逻辑消息结构为 `{moduleId, msg:{cmd,exdata,resMsg,...}}`，具体字段来自调用方。triggerUpdateMessage 将界面输入复制到 msg，并在外层写 moduleId；回复按 moduleId 路由到订阅窗口，转发时把 msg.taskId 加 1。不要假定 taskId 与 Bridge cid 相同。管理器含发送失败队列，最大长度 10；不能据此保证持久投递或严格一次执行。

心跳每 30 秒发送 `{"msg":"sent heart beat"}`。此格式与手机 WSS 的 `{"state":"normal"}` 完全不同。

| moduleId | 业务模块 |
|---|---|
| 0 | 相册 |
| 1 | 日历 |
| 2 | 笔记 |
| 3 | Info |
| 4 | 公共业务 |
| 6 | 录音 |

命令枚举包括相册 ADD_PIC、DELETE_PIC、RENAME_ALBUM、SYNC_PROCESS_NOTIFY；笔记、日历、录音、公共命令另有各自集合。完整已见命令保留在 [同步常量模块](../evidence/main-modules/234.js)。这些是 PC 到本机同步引擎的命令，不能据此声称已经还原云端增量同步协议或数据冲突策略。

## 原生依赖边界

[原生包装清单](native-wrappers.md)提供可见 JavaScript 签名；[PE 证据](../evidence/native.json)保留选定核心二进制的导入导出表和相关字符串。`PcsuiteConnectSDK.dll` 导出 createPcsuiteConnector 工厂与 onCommand/onConnected/onForward/onMessage 等 C++ 修饰符号；这只能确认符号存在，不能保证已知类布局、虚表或跨编译器 ABI。

跨平台应替换 `.node` 包装层后面的平台功能，避免复刻 Windows ABI：文件拖放/剪贴板/默认应用/磁盘信息、本机搜索、媒体播放、录音、虚拟相机和系统权限都需要相应平台实现。投屏目录含 FFmpeg、Qt、VivoCastSDK、AvCSDK 等，仍缺手机端会话建立和媒体传输契约。
