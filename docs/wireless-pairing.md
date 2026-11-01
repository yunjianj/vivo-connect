# 无线配对：发现、授权与连接 token

本轮只追踪影响基础无线连接的链路。目标是替代 Windows vivoesService 完成同一局域网内发现、请求手机授权，再进入已有 HTTPS/WSS 文件服务。投屏、同步、键鼠和虚拟设备暂不展开。

结论来自本地 PC 7.0.6 JavaScript、vivoesService x86 反汇编及两份随包 APK 的 DEX 指令。下文“确认”是静态实现证据；没有连接真机、发送发现广播或访问扫码云接口。旧版局域网流程的报文已经可以写出；新版手机挑战的取得方式及完整 BLE/Wi-Fi Direct 状态机仍未恢复，不能称为已互通客户端。

## 1. 先区分三条入口

| 入口 | 建立连接的方式 | 当前证据与移植用途 |
|---|---|---|
| 同一局域网 | SSDP 风格 UDP 发现 → TCP 授权 → HTTPS/WSS | 最适合先实现；旧版配对包、端口、token 和帧结构已恢复 |
| 蓝牙附近设备 | BLE 广播/GATT 或新版预连接 → 获得网络通路 → 业务连接 | 旧流程涉及 Wi-Fi Direct；新版还涉及挑战和加密，不能只用一个 GATT 写入代替 |
| 扫码 | PC 获取云 sid → 手机扫描 → 云返回手机地址 → 业务连接 | 可避开 PC 蓝牙依赖，但样本使用远端扫码接口，不能当成本地离线扫码 |

9197 是 PC 到原生服务的本机 RPC，并非手机配对端口。新平台可以直接实现手机协议，无须复制这个进程边界。

## 2. 连接 token 已定位

无线入口使用：

```text
nonce = 从 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 随机取 4 字符
connectionToken = lowercase_hex(SHA256(UTF8(pcIp[0] + nonce)))
```

IP 不存在时原实现用空字符串。原 JS 使用 Math.random；参考实现改用系统随机源，保留输入和输出格式。token 是电脑生成的本次连接值，不是 `/version` 返回的账号凭据，也不是云 API 的账号 token。

证据：[局域网 makeToken](../analysis/pretty/app-connection.js#L5399)、[预连接 token](../analysis/pretty/app-connection.js#L4827)、[随机字符串函数](../analysis/pretty/app-connection.js#L9647)。局域网连接把它传给 `connectSSDP`，成功后调用 `setConnectToken`；后续 `/version` 等请求使用 `newToken`，WSS 把它放入子协议数组。不要把 `connect_device2` 附近另一个四字符占位参数误当作最终鉴权 token。[连接入口](../analysis/pretty/app-connection.js#L5207)、[业务鉴权](phone-protocol.md)

## 3. 局域网发现：UDP 2200

目标组播是 `239.255.255.250:2200`，不是标准 SSDP 的 1900。PC 请求模板如下，行尾是 CRLF，最后空一行；冒号后的空格不要自行当作字段内容：

```http
M-SEARCH * HTTP/1.1
Host:239.255.255.250:2200
Man:"ssdp:discover"
MX:5
ST:vivo_connect
deviceId:<PC自身设备ID>
openId:<PC账号OpenID，未登录可为空>
Service:com.vivo.share.CONNECT_PC

```

PC 原生构造位置：[0x0060ed40](../evidence/wireless/native/0060ed40.asm)。手机常量与发现处理：[n0/d/a](../evidence/wireless/android/connbase__classes.dex__00425b4daecb.txt)、[n0/b$a](../evidence/wireless/android/connbase__classes.dex__a0c19e42d666.txt)。跨网段、AP 隔离和组播受限场景没有通过代码就能保证的兼容性，应先用同网段验证。

手机响应起始行是 `RESPONSE * HTTP/1.1`，不要限定为 `HTTP/1.1 200 OK`。关键头：

```text
RESPONSE * HTTP/1.1\r\n
DATE:<yyyy-MM-dd HH:mm:ss>\r\n
compatGsonStr:<Base64(UTF8(JSON设备记录))>\r\n
...
```

这里的 Base64 不是加密。手机 DTO 通过 Gson 字段注解定义 `deviceId`、`openId`、`serviceRecord`、`deviceName`、`account`、`deviceType`、`port`、`version`、`mdc`、`pcCustomizedData`、`CustomizedData`、`exposed`，另有 `Cache-Control`、`DATE`、`gsonStr`；字段是否出现取决于版本和构造路径，不能要求全有。保留未识别字段和嵌套字符串。使用 UDP 数据报的源 IP 作为连接地址候选，保留广告中的端口供新版适配。

证据：[响应序列化与 Base64](../evidence/wireless/android/connbase__classes.dex__0129ef77da1d.txt)、[字段注解索引](../evidence/wireless/android-field-annotations.json)、[原生响应解析](../evidence/wireless/native/0060b240.asm)。

手机还会发送 `NOTIFY`，其中 `NT:vivo_connect`、`NTS:"ssdp:alive"` 或 byebye，USN 为 `00000837-0000-1000-8000-00805F9B34FB`。PC 与手机的 Location 模板不相同，不能把它当作固定可请求 URL。[手机 NOTIFY](../evidence/wireless/android/connbase__classes.dex__30d449186b9b.txt)

## 4. 旧版 TCP 授权：10191

PC 连接手机 TCP 10191，发送下列 JSON 的二进制帧。此处 `target_id` 是 **PC 自身设备 ID**，不是发现到的手机 ID。`extra_info` 是 JSON 字符串，不能直接嵌套对象。

```json
{
  "bytes": [0],
  "deviceName": "我的电脑",
  "channel": 0,
  "id": 87654321,
  "open_Id": "",
  "service_id": "com.vivo.pcsuite.SERVICE",
  "target_id": "<PC自身设备ID>",
  "account": "",
  "type": 1,
  "extra_info": "{\"connectType\":1,\"token\":\"<64位十六进制连接token>\"}"
}
```

`Service:com.vivo.share.CONNECT_PC` 是发现过滤服务，`service_id:com.vivo.pcsuite.SERVICE` 是授权业务，两者不同。字段大小写 `open_Id`、`extra_info` 必须保留。

帧格式：

| 偏移 | 长度 | 内容 |
|---|---|---|
| 0 | 10 | ASCII `PAY_LOAD_1`，不含 NUL |
| 10 | 4 | JSON UTF-8 字节长度，uint32，大端 |
| 14 | N | UTF-8 JSON，不附加换行 |

原生完整构造、发送和响应处理：[Worker::initTcpClient 0x00496af0](../evidence/wireless/native/00496af0.asm)；[大端长度函数 0x00498590](../evidence/wireless/native/00498590.asm)。手机发送线程也使用相同 magic、长度、正文顺序：[d0/a$f](../evidence/wireless/android/connbase__classes.dex__1c2f2b76811f.txt)。应按流解包，不能假设一次 recv 就是一帧。

响应使用 `bytes` 首元素作状态。原生 `connectSSDP` 接受 1；11 对应连接忙、13 对应传输忙，其他拒绝状态的完整枚举尚未恢复。接收循环对 11/13 仍可能继续等待，所以参考实现保留这些中间响应至最终结果或超时。不得把“TCP 已连接”当成“用户已授权”。[状态分支](../evidence/wireless/native/00483870.asm)

手机端 `WlanDiscoveryUseCase` 将 `bytes[0]==0` 交给 PC 套件连接请求处理，交付设备身份、业务名和 extra 信息。业务 `ConnectControlModel` 决定忙碌、已有绑定自动接受或显示授权对话框；不同版本可能限制旧包。没有恢复任何绕过授权机制。[手机派发](../evidence/wireless/android/connbase__classes.dex__021b36cbdd9c.txt)、[手机授权控制](../evidence/wireless/android/pcsuite__classes2.dex__e29cb877fbfe.txt)

## 5. 新版预连接与 seed/sign

PC 的新入口是 `preconnect_preconnect-connect` 或已有预连接后的 `preconnect_connect`，不是始终走旧 `connectSSDP`。RPC 参数包含设备 ID、connectionId、连接 token、选项；已有通道还带 connectType 和自动连接标志。[JS 入口](../analysis/pretty/app-connection.js#L4600)

原生新版 WLAN/蓝牙连接对 extra_info 增加 `seed`、`sign`、`isAutoConnect`、`isAutoConnectNew`、`pcPcsuiteVersion`、`connectType`，特定业务还有嵌套 `extra_info.businessName`。不要仅凭字段名把 sign 当成 HMAC。沿 x86 数据流得到的重建是：

```text
pcSeed = Poco UUIDGenerator.createRandom().toString()
key = SHA256(UTF8(peerChallenge + pcSeed))                 # 32 个原始字节
plaintext = UTF8(pcOpenId + "|" + connectionId + "|" + connectionToken)
ciphertext = AES-256-CBC(key, IV=16个零字节, PKCS#7 padding, plaintext)
extra_info.seed = pcSeed
extra_info.sign = lowercase_hex(ciphertext)
```

`peerChallenge` 来自手机预连接/发现状态；蓝牙路径读取 randomId 类数据，WLAN 路径读取该业务的手机 seed。**它不是电脑随机生成的值，也不能任意填充。** 精确的新版广告字段、挑战生命周期和手机校验分支尚未完整恢复。此处算法是静态重建，IV=0 来自新建/reset EVP 上下文后以 NULL IV 初始化的行为，需以真机抓包或对等测试确认版本兼容性。

| 证据 | 还原内容 |
|---|---|
| [wlanDataEncryption 0x005f8da0](../evidence/wireless/native/005f8da0.asm) | 取手机挑战、拼接随机 seed 和明文，生成 sign |
| [btDataEncryption 0x005eb670](../evidence/wireless/native/005eb670.asm) | 蓝牙路径使用同类加密构造 |
| [UUID helper](../evidence/wireless/native/005eef50.asm) | Poco createRandom 与 toString |
| [SHA256 helper](../evidence/wireless/native/005f38c0.asm) | Init/Update/Final，AES 使用原始摘要 |
| [AES helper](../evidence/wireless/native/005ee680.asm) | EVP_aes_256_cbc、padding=1、Update/Final、%02x 输出 |
| [wlanBuildConnData](../evidence/wireless/native/005f7880.asm) | seed/sign 写入 extra_info JSON 字符串 |
| [btBuildSendData](../evidence/wireless/native/005ea940.asm) | 蓝牙载荷字段；与 WLAN 的字段集合并不完全相同 |
| [导入地址索引](../evidence/wireless/native-imports.json) | 对照 OpenSSL/Poco 的间接调用目标 |

随包 connbase.apk 是较旧实现，不能据其旧版配对成功分支断言新版 seed/sign 已得到手机端交叉确认。参考实现暴露离线 `modern_sign()`，要求调用方提供真实 peerChallenge；它不执行完整新版握手。

## 6. BLE 的已知边界

手机 LeDiscoveryUseCaseImpl 中确认出现下列 UUID，暂保留符号角色，避免把所有 UUID 都误标为同一种服务：

| 手机静态字段 | UUID | 当前用途证据 |
|---|---|---|
| P | 00000837-0000-1000-8000-00805F9B34FB | 加入广播 service UUID |
| R | 00000839-0000-1000-8000-00805F9B34FB | 广播 service data 相关 |
| O | 2c042b0a-7f57-4c0a-afcf-1762af70257c | 传入 GATT 相关 API |
| U | bda65297-d43b-4e22-b424-012345678900 | 控制 JSON 写入相关 |
| V | bda65297-d43b-4e22-b424-012345678901 | 订阅/读取相关 |
| S/T | 0000b81c-0000-1000-8000-00805F9B34FB | 发现相关 UUID 常量 |

[手机类、静态字段和调用指令](../evidence/wireless/android/connbase__classes.dex__f44ad9c0cb17.txt)。广播存在版本字节、设备 ID、状态位和账号摘要等内容，但完整位布局、分片重组、重试与 Wi-Fi Direct 凭据交换未恢复。实现基础同网段功能不必先完成这部分；若要求无共同 Wi-Fi 的近场直连，则这部分不可省略。

## 7. 扫码入口不是离线替代

二维码前先请求 `gatewayServer/vbusiness/scan/sid`，GET 的 pid 为 RSA 加密的 PC 设备 ID，成功要求 HTTP 200、业务 code=0，返回 sid、timeout。二维码包含 `s`、`f=pc`、`t=connectionToken`、`u`、`d`、`mac`、`ls`、`pb`、`id` 等参数；本分支强制 `ls=false`。

PC 随后 POST `/scan/getPhone`，body 为 `{sid}`，headers 包含 pid 与固定 userId 标识。成功响应中的 `data.data` 是 JSON 字符串，含手机 ip、deviceName、deviceType、connectionId、bleId、openId 等；取得 IP 后把二维码 token 设置为连接 token，进入普通业务连接。账号和域名仍按运行配置处理，不把样本地址视为当前在线契约。

证据：[扫码 mixin，getScanSid/createQRCode/waitingScanGetPhone/connectByScanCode](../analysis/pretty/components-connection.js#L13559)。云 sid 分配、RSA 配置、超时和扫码结果都是此路径的依赖；自建离线二维码不能凭复制参数替代服务端。

## 8. 配对之后的最低闭环

1. 得到手机 IP 与授权成功结果，保留本次连接 token。
2. 直连手机默认 `https://<phone-ip>:10380`，执行 `/version` 和 `/base-info` 协商；请求 headers 使用同一个 `newToken`。
3. 连接 `wss://<phone-ip>:10380/ws/heart-beat`，子协议为 `["v1.hc.vivo.com.cn", connectionToken]`。
4. 至少保持心跳并成功读取目录，才判定基础业务可用。配对返回 1 本身不足以证明整个闭环。

具体请求字段和消息见 [手机协议文档](phone-protocol.md)。证书信任、拒绝授权、过期 token、手机后台限制和断网重连尚无真机验证记录。

## 9. 参考代码、复现与验证范围

[wireless_pairing.py](../tools/wireless_pairing.py) 提供标准库实现的 token、SSDP 包、Base64 响应解析、TCP 分帧、旧版授权包，以及调用 OpenSSL 的新版离线 sign 构造。CLI 仅在显式执行时联网；目前没有执行以下发现或配对命令：

```sh
python tools/wireless_pairing.py discover --interface <本机IPv4> --device-id <PC设备ID>
python tools/wireless_pairing.py pair-legacy --ip <手机IPv4> --pc-ip <本机IPv4> --device-id <PC设备ID> --name <电脑名称>
```

旧版 CLI 等待手机授权后返回候选会话，`businessSessionVerified` 固定为 false；它没有实现 HTTPS/WSS 闭环，也不会自动降级绕过新版挑战。超时与不支持旧包都需要按真实设备进一步诊断。

离线检查：

```sh
python tools/verify_wireless.py
python tools/analyze_wireless_native.py
python tools/extract_android_annotations.py
# 在安装了 Androguard 4.1.4 的 Python 环境执行；--deps 为依赖目录
python tools/analyze_wireless_android.py --deps /tmp/vivo-reverse-python
python tools/verify_evidence.py
```

8 个离线测试覆盖 UTF-8 字节长度、大端帧头、拆包/粘包、非法长度、发现响应、嵌套 JSON、token、忙碌中间响应和加密解密一致性。加密往返只验证参考代码内部一致性，不能代替与原生程序/手机比对。[测试源码](../tools/test_wireless_pairing.py)、[验证记录](../evidence/wireless/verification.json)

下一步最有价值的证据是：目标手机的 connection/connbase 组件版本、同网段首次配对的双向 UDP/TCP 流量及 PC 日志。需要据此确认旧版 10191 是否仍接受、现代 peerChallenge 的实际字段来源、授权返回枚举，以及 token 到 HTTPS/WSS 的完整交接。当前不扩展到其他业务。

## 后续实现：Linux 本地扫码直连

已新增实验性 Station + P2P GO 并发助手及手机官方本地二维码分支，详见 [基础后端的 Wi-Fi Direct 说明](backend.md)。默认路径使用项目内的上游 supplicant 独立副本和官方手机 APK，不修改 NetworkManager，也不要求先恢复 BLE 挑战。已观测到独立 GO 在 2412 MHz 运行、校园网 Station 同时保持 5785 MHz，后端注册 ready；补齐针对请求手机的 WPS PBC 授权后，已实测手机入组并建立 HTTPS/WSS 会话；已实测 8 字节文件上传、下载回读及哈希一致；大文件、目录及稳定性压力测试尚未完成。旧的系统 D-Bus 路径仅保留为显式选项。
