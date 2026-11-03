# 手机连接与文件管理协议

## USB 连接流程

USB 是最适合首先移植的入口：通过 ADB 建立通道，可先绕开尚未还原的 BLE/SSDP 发现和 Wi-Fi Direct 协商。以下流程来自 [DeviceManager](../evidence/main-modules/89.js)，仍需解锁手机并完成手机端授权。

1. 检查设备上是否安装 `com.vivo.pcsuite`。
2. 启动 action `vivo.intent.action.PCSUITE_INTENT`，flags 为 268435456，extra `intent_from=1104`。
3. 启动 `com.vivo.pcsuite/.service.AdbPortalService`，携带以下 extras。
4. 建立主连接和附加 TCP forward。
5. POST `/version`；确认版本/隐私状态后，进入 `/base-info` 和心跳连接阶段。

| AdbPortalService extra | 已观察值或来源 |
|---|---|
| from | `pc` |
| foreground | `0`，失败时尝试前台启动分支 |
| pc_name | maskPcName 处理后的主机名 |
| token | 本次连接 token，与后续 newToken 一致 |
| user_name | vivoAccount |
| connectionId | 本次连接关联标识 |
| isTransferConnect | 传输连接标志，默认 0 |
| cancelConnect | 取消流程另行传 true |

此处是 adbkit 的逻辑参数，不是经过验证的 `adb shell am` 命令行模板。不同 extra 类型和 Android 前台服务启动方式应按目标设备验证。[启动实现](../evidence/main-modules/89.js#L348)

USB 初始 `/version` 明确使用 `http://127.0.0.1:<forwardPort>/version`。后续通用连接管理器把 baseUrl/wsUrl 初始化为 HTTPS/WSS，并存在 HTTP/HTTPS 切换逻辑。不能据初次版本请求推断整个 USB 会话都使用明文 HTTP。[USB 版本调用](../evidence/main-modules/89.js#L449)、[协议切换](../analysis/pretty/app-connection.js#L14127)

## POST /version

局域网目标默认是 `https://<phone-ip>:10380/version`，USB 初始目标见上节。请求 JSON、头字段和版本门槛来自本地 7.0.6 样本，不应永久硬编码为所有手机的要求。

```http
POST /version
Content-Type: application/json
version: 7.0.6
newToken: <connection-token>
X-ES-HTTP-VERSION: 1
Connection: keep-alive
```

```json
{
  "version": "7.0.6",
  "connBaseVersionCode": 1155,
  "pcSuiteVersionCode": 70007,
  "timestamp": 0,
  "connectionId": "<connection-id>",
  "pcDeviceId": "<persistent-pc-device-id>",
  "isAutoConnect": false,
  "token": "<connection-token>",
  "isOversea": false,
  "pcOsType": "<platform>",
  "pcOsVersion": "<os-version>"
}
```

timestamp 应为当前 Unix 毫秒；0 只是结构示例。token 和 isOversea 在 USB 版本调用中存在；其他连接分支的字段略有差别。pcOsType 在现有代码中承接平台信息，Linux 对端是否接受未确认。

消费者读取响应 `code`、`data.enpVer`、`data.pcSuiteVersionCode`、`data.connBaseVersionCode`。字符串 `0000` 表示成功；enpVer 默认按 1 处理，高于样本支持值时要求更新 PC。版本较低可能要求更新手机组件。[处理逻辑](../evidence/main-modules/89.js#L526)

| 手机连接业务码 | 含义 |
|---|---|
| `0000` | 成功 |
| `0004` | 拒绝 |
| `0007` | 屏幕锁定 |
| `0009` | 忙 |
| `0010` / `0016` | 未同意隐私 / 隐私等待超时 |
| `0020` | 传输忙 |
| `9999` / `9998` / `9997` | 超时 / 失败 / 取消 |

这些是连接层枚举，不能直接套用到所有文件接口。[枚举](../evidence/main-modules/100.js#L118)

## POST /base-info

携带 `newToken`、`X-ES-HTTP-VERSION: 1`；客户端直连分支 timeout 为 2 秒，并有原生服务代理回退。请求字段：

| 字段 | 含义 |
|---|---|
| pc_name、pcDeviceId | 最新主机名、持久 PC 设备 ID |
| isLogin、openid、pcLoginAccount | 登录状态、OpenID、账号显示值 |
| isAutoConnect | 当前设备自动连接标志 |
| pcSystemType | 现实现 darwin 为字符串 `2`，其他分支为 `1`；Linux 值待协商 |
| isSupVdfs | PC 是否支持 VDFS |
| token | 当前连接 token |
| isPcOsSupportExtScreen | 扩展屏能力声明 |
| pcBleId | 本机 BLE ID |
| deviceAvatarUri | 当前头像地址，可为空 |

确认消费的响应 `data` 字段包括：vivoAccount、nickName、mobileDeviceName、mobileBrand、innerRoot、widthPixels、heightPixels、naviState、isFoldScreen、phoneBleId、mobileDeviceId、netWorkFrequency、p2Pfrequency、androidVersion、hasAlbumBackupInfo、pcIp、product、notePackageName、noteVersionCode、hasStoryPermission、phoneSsid、isWifi、isConnectAlbum、isSupportFmDelete、osVersion、systemVersionName、isSupportBackup、systemProperties、isSupportCall、castId、isSupportPcMode。保留字段大小写；`hasStoryPermission` 在本地被映射到文件管理授权状态，勿自行更名。[请求和字段映射](../analysis/pretty/app-connection.js#L14264)

## WSS /ws/heart-beat

连接地址：`wss://<ip>:<port>/ws/heart-beat`。WebSocket 子协议数组为 `["v1.hc.vivo.com.cn", "<connection-token>"]`，即 token 位于 Sec-WebSocket-Protocol 协商中，不能只添加 Bearer header 代替。

打开连接后立即发送文本 `{"state":"normal"}`，随后每 5 秒发送。收到任何消息会刷新超时检查；30 秒无消息时还会考虑模块是否在使用、测试手机网络、缩略图下载等条件，再决定断开，不能简化为固定 30 秒强制关闭。[建立连接](../analysis/pretty/app-connection.js#L12707)、[心跳](../analysis/pretty/app-connection.js#L12779)、[超时](../analysis/pretty/app-connection.js#L12604)

业务消息混用原始文本和 `前缀:内容`，不都是 JSON。已见前缀：`FILE_MANAGER:`、`CLIPBOARD_TEXT:`、`PC_CONFIG:`、`PC_GET_CAMERA_CONFIG:`、`PC_UPDATE_CAMERA_PARA:`、`TRANS_FILE_FAIL:`、`TRANS_FILE_CANCEL:`，以及关闭文本 `close`。例如剪贴板是 `CLIPBOARD_TEXT:` 拼接原文本。每种消息的载荷需要分别按处理器解释；分隔时只切第一个冒号。[消息枚举与处理器](../analysis/pretty/app-connection.js#L20198)

无线连接 token 的生成与配对报文已完成静态还原，详见 [无线配对](wireless-pairing.md)；手机授权与证书信任尚未完成动态验证。样本部分 Node 请求设置 strictSSL/rejectUnauthorized 为 false；这只说明原实现行为，不构成跨平台客户端证书策略。应记录手机证书、确认配对阶段，再决定使用证书固定或受控信任。

## 手机文件管理 API

基址为已连接设备的 `https://<ip>:<port>`，使用该设备连接 token 的 `newToken`。通用 Axios 适配器不会统一解包响应，因此调用点常见 `response.data.data`；不要套用 9199 的六位 code 模型。

`requestGet` 把业务参数放 query；`requestPost` 默认直接发送参数对象，只有 `nearPack` 为 true 时包装成 `{"params":"<JSON字符串>"}`。云通道统一使用 `{msgId, params: JSON.stringify(payload)}`。所以“同一业务参数”在近场 HTTPS 与云消息通道上的封装不同。[请求适配器](../analysis/pretty/app-modules.js#L9860)

| Method | 路径 | 可确认的参数 / 用途 |
|---|---|---|
| POST | `/pc_file_manager/channel` | 文件分类或目录列表，字段见下方默认请求 |
| GET | `/pc_file_manager/tab_count` | type |
| GET | `/pc_back/album_collect_info` | 相册集合 |
| POST | `/pc_back/album_collect_detail` | list、keyID、pageIndex、pageNumber、sortCondition |
| GET | `/pc_file_manager/global_search` | key（trim）、type、pageNumber、pageIndex、sortCondition |
| POST | `/pc_global/search` | 全局/AI 搜索；调用方传对象，nearPack=true，toModule=`com.vivo.globalsearch` |
| POST | `/pc_file_manager/delete_info` | list 为 savePath 数组，bucketId 为数组；删除检查，不能仅凭名称推定完成删除 |
| POST | `/pc_file_manager/file_rename` | srcPath、newPath、newName；UI 根据 data 判成功，0014 为重名、0015 为源文件不存在 |
| GET | `/pc_file_manager/trans_open_file` | 调用方参数对象 |
| GET | `/pc_file_manager/create_directory` | path、name；0000 成功、0014 重名、0012 空间不足；原实现使用 GET 执行创建 |
| GET | `/pc_file_manager/query_directory_size` | path；消费者读取 data.data.size |
| POST | `/pc_file_manager/file_copy` | copy_id、source_paths（每项 file_path、ifDuplicated）、dest_path；ifDuplicated 为 overwrite 或 rename |
| POST | `/pc_file_manager/file_check` | id、source_paths（每项 file_path）；响应 body.source_paths 每项 exists=1 表示存在 |
| POST | `/pc_file_manager/get_path` | id、path_type；已见 path_type 为空，消费者读取 body.result_path |
| GET | `/pc_file_manager/thumb` | 调用方参数加 type=`fileManager` |
| GET | `/pc_file_manager/new/thumb` | 缩略图 URL 常量；完整参数见调用点 |
| GET | `/pc_file_manager/clear_recycle` | 调用方参数；会清理回收站 |
| POST | `/pc_file_manager/recycle_operation` | 至少观察到 delType、delIds、list |
| POST | `/sync_data/history` | type、data 等业务数据；noCancel=true |
| GET | `/fileManagerStorage` | 存储信息 |

以上请求方法及字段主要来自 [文件 API 实现](../analysis/pretty/app-modules.js#L126)；APK 中可交叉印证多数路径，但 DEX 字符串本身不能证明 Method 和 schema。[APK 线索](../evidence/android-strings.json)

重命名和创建目录字段见 [UI 参数构造](../analysis/pretty/1.js#L1924)，复制、存在性检查和默认路径字段见 [业务服务](../analysis/pretty/app-modules.js#L5020)。这里的 body 指 HTTP JSON 响应体，具体接口不保证统一存在 data 包装。

默认列表参数来自 `DEFAULT_CHANNEL_PARAMS`：

```json
{
  "category": "",
  "data": "",
  "fileCount": 0,
  "sortCondition": 0,
  "groupBy": 0,
  "type": "REQUEST_POSTS_HOMEDATA",
  "pageIndex": 0,
  "pageNumber": 200
}
```

getHomeData 还追加 firstFlag，默认 false。通用 API 的 pageNumber 常量另有 500、cloudPageNumber=100；不要把这些常量误当成所有列表固定分页大小。sortCondition：0 名称升序、1 名称降序、2 类型升序、3 类型降序、4 时间升序、5 时间降序、6 大小升序、7 大小降序、8 默认。groupBy：0 无、1 日、2 月、3 年、4 目录、5 文档。图片与回收站还有独立排序枚举，不能复用同一套值。[枚举和默认值](../analysis/pretty/app-modules.js#L2200)

## 文件传输

### 手机到 PC

1. POST `/pc_file_manager/download_info?id=<task-id>`，JSON 包含 downloadList、type、total、isDir、isAlbum、albumList、dirList。`total` 为所选文件内容的总字节数（目录为递归总量，不含 TAR 头），用于手机发送进度；不能用固定 0 代表未知大小。[官方 totalSize → total 映射](../evidence/main-modules/1698.js#L226)
2. 普通 type 为 `FROM_PC_FILE_MANAGER`，部分业务使用自己的类型。此预检 timeout 为 300 秒。
3. 此直连预检分支从 body 顶层读取 totalCount、totalSize；不要假设它采用通用的 data 包装。serviceUrl 是任务层保留的重定向地址字段，是否由具体分支填充需按实现区分。
4. 下载阶段优先使用 serviceUrl，否则使用 `/pc_file_manager/download?id=<task-id>`。目录传输采用流式接收与归档处理，不能把整包直接当作一个普通文件保存。

[预检](../analysis/pretty/main.js#L129684)、[下载](../analysis/pretty/main.js#L129802)

### PC 到手机

1. POST `/pc_file_manager/drop_files_info?id=<task-id>`，body 为 uploadInfo；已见字段有 id、dropFileItems、totalSize、totalCount、type。
2. 确认空间与权限结果；预检 timeout 为 300 秒，并有重试。
3. 目录流 POST `/upload/drop_file_to_phone?id=<task-id>&type=tar`，优先使用预检/任务提供的 serviceUrl。发送 tar 流，timeout 为一小时。
4. 消费者读取响应 data.dropFileItems，将 fileName 对应回原文件，取 savePath 记录手机最终路径。

[预检实现](../analysis/pretty/main.js#L131260)、[上传流实现](../analysis/pretty/main.js#L129550)

连接层成功码 `0000`、本机服务码 `000000`/0、传输任务层字符串码不是同一个枚举。传输任务可见 `not_enough_space`、`file_not_exist`、`no_permission` 等，映射代码见 [TRANSFER_FAIL_CODE](../evidence/main-modules/74.js)。重试前要验证 task-id 是否可以复用、服务端是否已有部分文件、取消是否生效，当前静态分析没有证明完整断点续传契约。

## 云连接和云文件传输

已提取完整 [pb.proto](../evidence/proto/1fe88f158662.proto)。最外层 `MessageBase` 为字段 1 `MessageType type`、字段 2 `bytes data`；data 依据 type 解码，不能按 JSON 解析。主要类型：PING=1、PONG=2、REGISTER_REQUEST=11、REGISTER_RESPONSE=12、DEVCONNECT_REQUEST=13、DEVCONNECT_RESPONSE=14、FORWARD_MESSAGE=100。

ForwardMessage 保留字段号 1 至 14：version、id、sourceDeviceID、targetDeviceID、trafficControl、msgName、msgType、sessionID、sourceModule、targetModule、priorityLevel、injectData、params、body。body 为 bytes，params 为字符串；uint64 流量数应避免 JavaScript Number 的精度损失。此定义属于消息路由中心，不能据此认定投屏媒体也用相同帧格式。

业务连接顺序可见 handshake → `/version` → `/base-info`，云文件授权另走 `/fileManagerAuth`。请求关联使用 msgId，params 里还嵌套 JSON 字符串，回复通过 msgId 匹配。路由模块名包括 `com.vivo.pcsuite.connect`、`com.vivo.pcsuite.fileManager`、`com.vivo.vdfsClient` 等。[云握手和请求](../analysis/pretty/app-connection.js#L18685)

另有 `/api/v1/file/initDownload`、`/api/v1/file/download`、`/api/v1/download/complete`、`/api/v1/file/initUpload`、`/api/v1/upload/record`、`/api/v1/upload/record/delete` 等云传输 HTTP API。它们使用独立 baseURL、账号 token、OpenID、时间戳等 headers；`getCyHeaders` 的 sign 是 HMAC-SHA256，消息为 `com.vivo.pcsuite.connect`，key 为毫秒 timestamp 的十进制字符串，结果 Base64。不要把邻近的 getkeyAndSecret 常量误认为该函数实际使用的 key。[签名实现](../evidence/main-modules/242.js)、[HTTP 封装](../evidence/main-modules/359.js)、[接口](../analysis/pretty/main.js#L64436)

云 HTTP 消费者要求 HTTP 200 且业务 code=0，并处理 1001 上传限额、1002 token 无效、1003 AppKey、1004 签名、1015 token 过期。远程域名按机房/环境配置动态选择，已提取的地址仅是样本线索，未验证在线可用性。实现本地 USB 文件管理不依赖先接入这套云服务。
