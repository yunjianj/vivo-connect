# 官方重连协议追踪（2026-11-03）

目标是电脑重启后，由客户端重新发现和认证手机，再建立 Wi-Fi Direct；不依赖上一次后台进程存活。

## 已定位的失败原因

经用户授权，只读检查当前手机的 `dumpsys wifip2p`，在三次断开附近均看到 `com.vivo.connbase` 发出 `REQUEST_PERSISTENT_GROUP_INFO`，随后发出 `DELETE_PERSISTENT_GROUP`。最终持久组数量为 0。电脑侧的持久组邀请被 supplicant 接收，不代表手机接受了邀请。

因此，仅保存 GO 凭据、旧 IP 和旧连接 token 不能完成这台手机的重启重连。这里不能归因于用户没执行手动安装命令：只读检查时，系统服务已经使用持久化配置。

## 本轮直接核对的样本

除了 Windows 7.0.6.0 安装包，这次还只读复制了手机当前系统安装的 ConnBase APK，SHA-256：

`d43b497531fa08e29bc6e4b61c4e0b69b641e2e9f332028fe584839728feb41f`

仓库只保存相关类的静态指令、字段注解和索引，不保存 APK、账号标识、蓝牙地址或手机运行时原始日志。索引：[phone-preconnect/index.json](../evidence/wireless/phone-preconnect/index.json)。

## 当前版本确认的通道和消息

1. `BlueToothManager$f` 调用 `listenUsingInsecureRfcommWithServiceRecord`，服务名 `CONNBASE_NFC_BT_SERVICE`，UUID 为 `8fa9c715-bd1f-596c-a1b0-13162b15c892`，由常量 `Lg5/d2.c0` 提供。这是经典蓝牙 RFCOMM 服务，不能用 GATT 控制特征代替。
2. `Lo4/g`，日志名 `PcPreConnect`，按 `cmd` 派发 `device_info`、`connect_primary`、`connect_cancel`、`disconnect` 等消息。Windows 的 `BtFarawayDevice::DeviceInfoDataBuild` 和 `ConnectFlow::btBuildSendData` 对应前两种请求。
3. 外层为 `PAY_LOAD_1`（10 字节）+ 4 字节大端正文长度 + UTF-8 正文。一个读取可能只有半帧，也可能含多帧。
4. `#bri` 是**独立帧正文的前缀**，其后为设备握手 JSON。它不是普通 JSON 的后缀，也不是随机挑战。Android 的 `connect/r.a()` 构造它，`classicBluetooth/r.f()` 按前四字符分流。Windows 旧解析器还会处理同一次读取混入的这种报文。
5. `#bri` 使用 `device_id` 等字段；现代发现记录使用 `deviceId`、`ext.randomId` 等字段。这些标识不能在未验证相等时混用。

相关静态证据：

- [RFCOMM 服务注册](../evidence/wireless/phone-preconnect/classes2.dex__e04860ab254d.txt)、[UUID 常量](../evidence/wireless/phone-preconnect/constants.txt)
- [PcPreConnect 分派和认证](../evidence/wireless/phone-preconnect/classes2.dex__b3f035badf14.txt)
- [蓝牙发送线程](../evidence/wireless/phone-preconnect/classes2.dex__577300245819.txt)、[分流](../evidence/wireless/phone-preconnect/classes2.dex__a2bf66f6ab52.txt)、[#bri 构造](../evidence/wireless/phone-preconnect/br-handshake.txt)
- [Windows 预连接请求](../evidence/wireless/native/0054f9d0.asm)、[连接请求](../evidence/wireless/native/005ea940.asm)

## 账号和签名：手机端已交叉确认

当前手机 `Lo4/g.e()` 读取 `extra_info.seed` 和 `extra_info.sign`，采用：

```text
phoneUniqueId = OsUtils.getUniqueId()       // 当前版本通过 getGUID/getVAID 获取
phoneRandomId = SeedManager.getRandomID()   // 从内存/数据库取得，不是 PC 随机生成
key = SHA256(UTF8(phoneUniqueId + phoneRandomId + pcSeed))
plaintext = UTF8(pcOpenId + "|" + connectionId + "|" + token)
sign = lowercase_hex(AES-256-CBC(key, IV=16 个零字节, PKCS#7, plaintext))
```

`Lig/e` 确认 SHA-256、`AES/CBC/PKCS7Padding` 和全零 IV。解密后，手机调用 `common/utils/l.u()`：第一个字段必须非空，并与手机自己的 OpenID 相等。然后从明文恢复连接 ID 和 token。缺少有效 sign 或账号不匹配均进入失败响应。

这说明这条**同账号自动连接路径**确实涉及登录和同账号校验；不能把“已经扫码连接过”直接等价为“已经满足同账号自动连接条件”。这不代表所有手动连接入口都强制同账号。

现代发现元数据中的 `deviceId` 由同一个 `OsUtils.getUniqueId()` 提供，`ext.randomId` 来自同一个 SeedManager；二者的字段和赋值已经定位，但 **Linux 端如何经当前手机支持的发现通道可靠取得它们，尚未完成真机闭环**。不要把 `#bri.device_id` 或旧缓存随意代入。

证据：[SeedManager](../evidence/wireless/phone-preconnect/classes2.dex__752e5c9fe676.txt)、[加密实现](../evidence/wireless/phone-preconnect/classes3.dex__65ff9a8ff2ce.txt)、[OpenID 比较](../evidence/wireless/phone-preconnect/classes2.dex__edcc6899114a.txt)、[发现元数据构造](../evidence/wireless/phone-preconnect/classes2.dex__c820b3e85b6a.txt)、[DTO 注解](../evidence/wireless/phone-preconnect/field-annotations.json)。

## 成功判定

`connect_primary` 的 `code=0000` 也可能伴随拒绝或忙碌。当前手机实际字段是 `data.userDialogSelectResult`，必须为 `agree`，且 `reqId` 与当前请求一致；不能使用猜测的 `data.state`。

当前手机 `Lo4/g.l()` 还确认了一项条件：当 `isAutoConnect` 为字符串 `"1"` 时，熄屏或 Wi-Fi 关闭会直接进入拒绝响应。它同样不能被 `code=0000` 的外层状态掩盖。

此时也只完成授权结果。最终仍需确认手机加入 GO，并成功完成 `/version`、`/base-info` 和 WSS 心跳，才能宣告业务连接成功。

## Linux 接入与验证

[preconnect-protocol.mjs](../backend/src/preconnect-protocol.mjs) 实现帧编解码、请求、签名和授权判定。[bluetooth.mjs](../backend/src/bluetooth.mjs) 与有限生命周期的 [bluetooth_transport.py](../tools/bluetooth_transport.py) 通过 BlueZ Profile API 获取 RFCOMM 通道，PC 请求使用 `#pcc` 正文前缀。手机分流器和 Windows 原生构造都确认该前缀；缺少它时不会进入 PcPreConnect。

[preconnect.mjs](../backend/src/preconnect.mjs) 通过官方 `GET /device/list` 取得设备发现记录；请求头为 `token`、`userId`、登录回调中的 `deviceId`、`source=2`、版本和地区。登录 deviceId 与 Linux 本地 PC UUID 含义不同，不能互换。当前真机接口已返回成功，发现记录提供了真实 GUID、蓝牙地址和 `ext.randomId`。

自动调度已接入历史设备重连。在蓝牙校验同账号后，由 P2P 管理器开放至多 60 秒的入组授权窗口，将当前 GO 凭据通过签名请求发给手机；收到 `agree` 和当前子网内的 `localAddress` 后，使用同一次 token 完成 HTTPS/WSS，再关闭窗口和临时蓝牙助手。无需建立“等待扫码”任务。这个窗口联动不可省略：原助手只在扫码任务存在时接受入组请求，否则即使蓝牙认证成功，手机仍无法加入 GO。

手机还会保留约 30 秒的预连接状态。忙碌或入组失败后的重试至少间隔 35 秒，避免短周期重复尝试干扰清理。

完成业务身份校验后，将 GUID、蓝牙地址、随机值和所属 OpenID 保存在现有 `devices.json`（0600）中。新进程加载缓存；联网时刷新发现记录，断网时仅使用属于当前账号的已验证缓存。账号不匹配、多个同名候选或错误子网地址均不能直接进入业务连接。无需新增常驻后台服务，客户端退出时仍正常停止其子后端；每次蓝牙助手均受请求取消和超时约束。

后端完整测试 61 项通过，覆盖独立签名向量、分帧、拒绝/忙碌/过期响应、账号检查、入组窗口开闭、业务失败清理、缓存重新加载及重试间隔。已通过真机同账号蓝牙认证、Wi-Fi Direct 建链、HTTPS/WSS 连接；客户端冷启动和新 GO 联调记录见同目录证据索引中的 verification.json。

服务重建测试还发现旧系统单元缺少 `CAP_KILL`：root 进程在受限能力集合内无法终止已降权的 dnsmasq，导致后续 GO 清理未执行。单元现已补齐该能力，清理过程在 DHCP 子进程信号失败时仍继续释放自身接口。若 systemd 已清除运行时归属记录，服务只恢复与 root 持久配置中名称和完整 MAC 一致、同 PHY、类型为 GO、频率为 0 的非活动接口，删除前后复核校园网状态。拒绝匹配其他或活动接口。相关服务/安装器测试 10 项、专用助手测试 22 项通过。

Arch 包升级钩子会刷新已经配置的 root 服务快照，并保留配置、持久组状态和服务启用/禁用选择；未配置服务时不会自动创建服务。用户不必在普通客户端更新后再手动执行安装器来刷新旧快照。

可复现提取工具：`tools/analyze_preconnect_android.py` 支持指定 APK、类描述符、类前缀和检索词；`tools/extract_android_annotations.py` 支持指定 APK 和类前缀。它们不执行 APK。运行环境需 Androguard 4.1.4；本次临时依赖位于 `/tmp`。

Linux 传输层使用 [BlueZ Profile API](https://bluez.readthedocs.io/en/latest/profile-api/) 获取 RFCOMM 文件描述符。该接口属于传输层，不能代替上面的手机账号认证。
