# 本机 HTTP 服务

## 9199 回调服务

基址默认 `http://127.0.0.1:9199`。实际监听地址由 `listen(port)` 决定，代码没有显式绑定 127.0.0.1。请求统一以 UTF-8 字符串累积，pathname 精确匹配；路由器不按 HTTP method 分派。下文 GET/POST 是依据输入位置选择的调用方式。

存在 Origin 时检查其 hostname；否则检查 Referer。允许 hostname 为 `127.0.0.1`、`localhost`、`0.0.0.0`；两者均不存在时通过。`/vivoshareDownload`、`/checkAuthStatus` 额外校验 `Authorization: Bearer <token>` 或 query `auth`。token 可为当前登录 token 的 SHA256 十六进制值，或共享内存 tokenMap 中尚未过期的临时 token。此处不是手机连接用的 `newToken`。[完整实现](../evidence/main-modules/95.js)

正常业务响应通常为 `{"code":"000000","data":...}`，失败业务码通常仍返回 HTTP 200；未知路由 HTTP 404，外层异常 HTTP 500，鉴权失败 HTTP 401，来源检查失败 HTTP 403。不要只检查 HTTP 状态码。

| 字符串业务码 | 含义 |
|---|---|
| `000000` / `000001` | 成功 / 失败 |
| `000002` / `000003` | 无可用 webContents / 等待界面回复超时 |
| `000100` / `000101` / `000102` | 连接忙 / 找不到 IP / ping 失败 |
| `000103` / `000104` | 设备不存在 / 设备未连接 |
| `401` / `404` | 未鉴权 / 无路由 |

[返回码及分派器](../evidence/main-modules/713.js)

常用接口如下；完整注册表和函数见 [路由清单](local-routes.md)。

| 调用 | 输入 | 结果或行为 |
|---|---|---|
| GET `/getSameAccountDevices` | 无 | 缓存设备数组；缓存为空会向 9197 发 `preconnect_startScan`，args 为 `[true]` |
| GET `/getConnectedDevices` | 无 | 等待界面回传已连接设备列表 |
| POST `/getDeviceConnectStatus` | `{"deviceId":"..."}` | 等待 `GET_DEVICE_CONNECT_STATUS`；5 秒超时 |
| POST `/connectDevice` | 至少 `eventId`,`deviceId` | 发连接请求并按 eventId 等待结果，最长 30 秒 |
| POST `/disconnectDevice` | `deviceId` | 通过界面执行断开 |
| GET `/isConnectBusy?deviceType=phone` | deviceType，可省略为 phone | 返回界面连接状态，5 秒超时 |
| GET `/checkServerStatus?deviceType=phone` | 原实现对完整 queryStr 精确比较 phone/pad | 成功结果可含顶层 connectStatus；nearby/cloud 为 1 |
| POST `/queryAll`、`/SSDPQueryAll` | JSON 设备数组 | 分别推送 BLE/WLAN 发现结果给界面 |
| POST `/RH2RF_PUSH_GATT_CLIENT_LIST` | JSON 设备数组 | 更新同账号设备缓存并通知界面 |
| POST `/reportWifip2pStatus` | `{"wifiP2P":1}` 或 0 | 更新本机状态 |
| POST `/nfcConection` | 下表 | 触发手机请求连接流程；拼写保持原样 |

`/nfcConection` 的代码读取字段：`deviceIp`、`deviceName`、`iSeqNo`、`ConnectFlag`、`addr`、`thisPhoneAutoConnect`、`vivoAccount`、`deviceType`。分别转成 hostnameFromService、nameFromService、connSeq、connectFlag、deviceId、isAutoConnect、vivoAccount、deviceType。thisPhoneAutoConnect 接受布尔 true 或字符串 `"true"`。[处理函数](../evidence/main-modules/239.js#L126)

根路由 `/` 保留旧协议：body 为 `N#payload`，payload 为 `{"event":"nfcConection","args":[...]}` 等消息，N 在 JS 实现中用字符串长度计算。已见事件还有 `checkCurrentPhone`、`notifyUserAcceptConnectionRequest`；后者回应 `1#1`，NFC 路径成功回应 `1#0`。args 为位置数组，不能与 `/nfcConection` 的字段对象混用。非 ASCII 内容的字节长度与 JS UTF-16 长度可能不同，需要真机校验。[旧协议](../evidence/main-modules/95.js)

## 9200 本机集成服务

默认 `http://127.0.0.1:9200`；先通过 `/health` 确认实际端口和 API 版本。API_VERSION 是 `1.1.0`，而 `/skill/getSuiteInfo` 内部 apiVersion 写的是 `1.0.0`，两字段来自不同实现，不能当作同一版本来源。[外层服务](../evidence/main-modules/358.js)、[Skill 路由](../evidence/main-modules/1481.js)

### 鉴权流程

1. 官方本机客户端通过 Windows 命名管道 `\\.\pipe\vivo_auth_server` 或 Unix 路径 `/tmp/vivo_auth_server` 取得服务握手。
2. 管道实现含客户端签名校验；成功格式为 `1.1.0:trusted:<masterKey>:<port>:===ack===`。跨平台移植要实现对应身份验证或提供自己的授权入口，不能假定任意程序都可取得 masterKey。
3. 使用 `Authorization: Bearer <masterKey>` 请求 `/token/create`。返回 `{"code":0,"data":{"token":"...","expireAt":<毫秒时间戳>}}`，临时 token 有效期 30 分钟。
4. `/skill/*` 使用临时 token，或使用已登录用户 token 的 SHA256 十六进制值。masterKey 是管理接口凭据，普通 `checkAuth` 不直接将 masterKey 视为业务 token。

上述步骤是静态还原，未在当前 Linux 环境建立官方管道握手。不要把调试用关闭校验接口作为正常移植方案。[鉴权代码](../evidence/main-modules/358.js#L72)

### 特殊路由

这些路径由外层服务器直接处理，因此没有出现在 Skill 注册表中。

| 路径 | 契约与权限 |
|---|---|
| `/` | 本机访问，文本 `hello, this is VClawHttpServer!` |
| `/health` | 本机访问，无 token；返回 status、version、appVersion、port、masterKeyHash、pipeVerifyDisabled |
| `/token/create` | masterKey；生成临时 token，不要求 JSON body |
| `/token/list` | 管理 token 清单，校验 masterKey；细节见实现 |
| `/userinfo` | masterKey；返回用户表数据（包括账号字段），未登录时 code=1 |
| `/pcsuiteEnvConfig` | 无 token 校验；返回 countryCode、env、channel、serverRoom、domainConfig |
| `/third-party-token/list`、`create`、`update`、`delete` | 独立 token 管理处理器，校验 masterKey；create 读取 tokenName、permission、expireType、expireDate |
| `/third-party/*` | 独立第三方 token；read-only 仅允许 GET；`/third-party/cli/version` 在第三方鉴权前转发 |
| `/pipe/disable-verify` | 调试管理功能，独立处理；会改变校验及 CORS 行为，移植不应依赖它 |

第三方 token 的 permission 为 `read-write` 或 `read-only`；expireType 为 `date` 或 `permanent`。它们与 30 分钟临时 token 是不同存储和权限模型。[完整处理器](../evidence/main-modules/358.js)

### 常用 Skill 调用

正常响应 `{"code":0,"data":...}`；这里的 code 为数字。通常业务响应 HTTP 200；401/403 鉴权拒绝可能返回文本或另一种 JSON 结构。

| 调用方式 | 路径 | 输入或返回 |
|---|---|---|
| GET | `/skill/getSuiteInfo` | 版本、平台、目录、语言、端口和组件状态 |
| GET | `/skill/getSameAccountDevices` | 发现缓存；缓存为空请求预连接扫描 |
| GET | `/skill/getConnectedDevices` | data 为设备数组；界面 5 秒未回复可回成功加空数组 |
| POST | `/skill/getConnectedDeviceInfo` | body `deviceId`；data 为设备对象，找不到返回 code 103 |
| POST | `/skill/getDeviceConnectStatus` | body `deviceId`；等待界面，5 秒超时 |
| POST | `/skill/connectDevice` | body 含 eventId、deviceId；data 为 `{code,reason}`，30 秒等待；外层 code=0 不代表内层连接成功 |
| POST | `/skill/disconnectDevice` | body `deviceId`；等待断开回执 |
| GET | `/skill/localSearch/search` | query keyword、type、pageIndex、pageNumber、sortType；默认 HOME、0、10、1；依赖本机搜索服务 |
| GET | `/skill/localSearch/getThumb` | query fullPathName，内部映射为 path |
| POST | `/skill/localSearch/openFileDetails` | body fullPathName 等对象字段；执行平台文件属性功能 |
| POST | `/skill/localSearch/delete` | body 为对象数组，每项 fullPathName 映射为 savePath，进入回收站 |
| GET | `/skill/fmSearch` | query 传给手机文件搜索服务；详情见代理实现 |
| POST | `/skill/fmTransferFileToPC` | body 由 FmClawService 读取，设备与文件条件失败使用负数 HttpCode |
| POST | `/skill/rightMenuTransfer` | body target、deviceid、filepath，经界面转发传输 |

9200 通用业务码：0 成功、1 失败、2 无 webContents、3 超时、100 忙、101 无 IP、102 ping 失败、103 无设备、104 未连接。文件代理还使用 -1 未连接、-2 转发失败、-3 超时、-4 网络错误、-5 服务端错误、-6 不支持搜索、-40 已在上传、-41 文件不存在等。要保留分层错误，而不是统一把所有非零码解释为 HTTP 状态。[通用码](../evidence/main-modules/725.js)、[代理码](../evidence/main-modules/1478.js)

### 请求示例

以下只读取本机状态，需原软件服务正在运行。用通过正常授权取得的临时 token 替换占位符。

```sh
curl http://127.0.0.1:9200/health
curl -H 'Authorization: Bearer <temporary-token>' \
  http://127.0.0.1:9200/skill/getConnectedDevices
curl -H 'Authorization: Bearer <temporary-token>' \
  -H 'Content-Type: application/json' \
  --data '{"deviceId":"<device-id>"}' \
  http://127.0.0.1:9200/skill/getConnectedDeviceInfo
```

## 兼容性细节

旧 query 解析器先 decodeURIComponent 整条 URL，再按 `?`、`&`、`=` 拆分，不能正确保留参数值中编码后的分隔符。多个等待界面回执的接口共用事件名并调用 removeAllListeners，并发请求可能互相干扰；兼容客户端应先串行化连接与状态操作。9199 的 `/fmTransferFileToPC` 提前 JSON.parse 后又传给期待 `paramsStr` 的服务函数，而 9200 的对应路由直接传请求包装对象；不能假设两者等价可用。[回调实现](../evidence/main-modules/239.js#L1160)、[代理实现](../evidence/main-modules/357.js#L29)
