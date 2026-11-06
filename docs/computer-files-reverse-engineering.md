# 手机访问电脑文件：逆向记录

记录日期：2026-11-06。状态：**研究已停止，功能未完成，实验实现已撤回**。本记录不是使用说明，也不代表当前发行版支持从手机管理电脑文件。应用代码恢复到 `6adf63f`（`v0.1.0-7`）；本次只保留研究文档和静态证据。

## 结论与边界

本次发现两套不同的官方链路，不能将它们混为一谈：

| 链路 | 电脑端组成 | 文件访问方式 | 本次确认程度 |
|---|---|---|---|
| 旧 VDFS | 办公套件连接层、`vdfsServer.exe`、协调服务 | 已有手机 WSS 上交换启动信息，另开 TCP 5679 读取电脑文件 | 已还原启动消息和主要读取报文；手机返回过启动响应，但未显示可用入口，未完成真机文件访问 |
| 新版“随身文件站”电脑入口 | `vivoControl` 远控 PC 模块、`vivo_remote_service.exe`、`vivo_rtc.dll` | 同账号设备发现、设备代码/密码授权、云端信令和 SIP/WebRTC 文件通道 | 已恢复嵌入的文件模块源码、注册接口、信令字段和消息分发；未完成设备注册、RTC 建链或真机文件操作 |

用户提供的手机帮助页明确要求：电脑端打开“远控 PC”（V2.5.0 及以上），查看设备代码和密码，手机选择电脑并选择“远程访问文件”。因此，恢复旧 VDFS 接口不能直接等同于实现该手机上的新版文件站。

只读包查询未发现手机安装 `com.vivo.remotecontrol`；用户随后确认设备不支持 vivo 远控 PC，并要求停止。本结论针对本次设备和样本，不能推广为所有机型均不支持旧 VDFS，也不能据此承诺安装应用即可解决。

## 样本与证据

| 样本 | 版本/来源 | SHA-256 或索引 |
|---|---|---|
| `vdfsServer.exe` | 本地 Windows 办公套件 7.0.6.0-cn 的 `vdfs/` | [反汇编函数索引](../evidence/computer-files/native-functions.json)、[Qt 导入表](../evidence/computer-files/native-imports.json) |
| 手机 `vdfs.apk` | 经已授权 USB，只读提取 `/system/app/vdfs/vdfs.apk` | `d1ba435b1bfd4eaf13bd2fc1ee6d0e2afef88ec4259f587f79a53c28e007a3a1`；[DEX 索引](../evidence/computer-files/android/index.json) |
| 手机 `BBKFileManager.apk` | 只读提取 `/system/app/BBKFileManager/BBKFileManager.apk` | `a0a60f5b9f4678f5f7c846475a44ccd3e2eabe47e8f3d90e3d4023f2827daafd`；[DEX 索引](../evidence/computer-files/filemanager/index.json) |
| `vivoControl/resources/app.asar` | Electron 远控 PC，package.json 版本 3.0.6 | `83b5a7073fe4454171191a8bfa64660703744c27f0296e2b3e4ed1f34ef323e0`；[提取报告](../evidence/computer-files/control-extraction.json) |
| `vivo_remote_service.exe` | 嵌入 Node.js 的 pkg 程序，package.json 版本 3.0.4 | `6bee77532ec52ea0f1e59bd107ee530b5a5eb3b41aff06f0d00592937a19cc80`；[源码文件及哈希索引](../evidence/computer-files/remote-service-extraction.json) |

没有安装、替换或修改手机应用。手机 APK、完整提取目录、原始日志和用户截图没有加入仓库。仓库保留的是选定的静态代码摘录、反汇编及索引；其中 [远控服务公钥](../evidence/computer-files/remote-public-key.pem)来自官方样本，是公开协议材料，不是用户私钥。

## 旧 VDFS 启动与设备信息

[官方连接层摘录](../evidence/computer-files/startup-reference.txt)显示通过 `/ws/heart-beat` 发送：

```text
SHADOW_LIKE:{"type":"startup","data":{"version":1,"pcInfo":{...},"appInfo":[...]}}
```

`pcInfo` 包括 ip、pcDeviceId、pcDeviceName、key、iv、accountOpenId、accountName、connectType。`appInfo` 中 VDFS 项为 `appName:"vdfs"`、port（默认 5679）、version（默认 3）。

应注意两个容易混淆的字段：

- `applicationInitData.pcDeviceId` 来自 `newDeviceId.substr(0,6)`，不同于账号登录和 `/base-info` 使用的完整设备标识。
- connectType 使用官方枚举 `USB`、`WLAN`、`SCAN`、`BLE`，不能自行新增 `WIFI_P2P` 值。

手机 `Ls3/d;` 解析 startup，返回包含 `shadowLikeEnable`、`mobileDeviceInfo` 和 `appInfo` 的消息。其 `parseReady` 检查 `ready.data.state.relay`；只返回 `vdfsServer:true` 不满足这一判断。该字段与协调服务初始化有关，**仅将标志改为 true 不能证明协调服务或文件站已经实现**。本次调整就绪标志和短设备标识后，仍未在手机确认可用入口。

相关手机处理器和回调位于 [DEX 类索引](../evidence/computer-files/android/index.json)中的 `Ls3/d;`、`Ls3/d$b;`、`Ls3/d$e;`。

## 旧 VDFS 文件报文

以下字段来自 `vdfsServer.exe` 的静态分析及实验编解码，本次未通过手机文件读取得到端到端确认。

整数采用 Qt QDataStream 大端序。请求先写 uint64 总长度（含 8 字节长度头），随后是 AES-256-GCM 数据。key 取 32 字节，iv 取前 12 字节；**16 字节认证标签放在密文之前**，不同于常见的“密文后附标签”格式。

解密后的读取类请求：

| 字段 | 目录/属性 | 文件读取 |
|---|---|---|
| command | u8，2=目录、3=属性 | u8，6=读取 |
| requestId | u32 | u32 |
| 设备标签 | 16 字节 | 16 字节 |
| flags | u8 | u8 |
| offset / count | 无 | 各 u64 |
| pathLength / path | u32 + UTF-8 字节 | u32 + UTF-8 字节 |

响应为 `5:u8 + payloadLength:u32 + error:u8 + tag + ciphertext`。空目录有特殊分支，使用未加密的 `aabbccdd12345678` 哨兵。

目录项序列化为 `inode:u32 + offset:u64 + nameLength:u16 + type:u8 + NUL 结尾的 UTF-8 名称`。type 4 为目录、8 为普通文件。属性按官方顺序序列化为 82 字节，不能直接复制带对齐填充的内存结构。

主要证据：

- [ParseRequest](../evidence/computer-files/native/00443f70.asm)：解密和命令分发。
- [ParseAttrRequest](../evidence/computer-files/native/00443030.asm)、[ParseDirentRequest](../evidence/computer-files/native/004435f0.asm)：请求字段读取。
- [AssembleAttrReply](../evidence/computer-files/native/004428e0.asm)、[AssembleDirentReply](../evidence/computer-files/native/00442cf0.asm)：响应结构和空目录分支。
- [encrypt](../evidence/computer-files/native/0043c480.asm)、[decrypt](../evidence/computer-files/native/0043bed0.asm)：GCM 参数与标签顺序。
- [sendReadFile](../evidence/computer-files/native/0041c9f0.asm)：按偏移读取。

该 Windows 样本对命令 10、18 返回拒绝，不能据此声称已经恢复电脑文件写入、移动、重命名或删除。

## 新版远控 PC：源码恢复方法

`vivo_remote_service.exe` 并非只有原生代码。其 pkg 载荷中保留了 Node.js 源文件，可以静态提取，无需启动 Windows 程序。

针对上述固定 SHA-256 的样本，bootstrap 中记录：

```text
PAYLOAD_POSITION = 31449600
PAYLOAD_SIZE = 40581719
PRELUDE_POSITION = 72031319
PRELUDE_SIZE = 474212
```

恢复步骤：

1. 读取 bootstrap 的四个数值，再读取 prelude。
2. 从 prelude 定位以 Windows snapshot 路径为键的 JSON 虚拟文件系统；使用 JSON 解析器，不能执行 prelude。
3. 检查压缩标志为 0。虚拟文件条目的 `"1":[offset,size]` 是源文件内容，读取 `PAYLOAD_POSITION + offset`；`"0"` 是字节码，不能当源代码解释。
4. 校验目标路径，拒绝 `..`，按条目长度写出，并计算 SHA-256。

本次恢复 2113 个源/资源文件；文件路径、大小和哈希见[提取报告](../evidence/computer-files/remote-service-extraction.json)。上述偏移只适用于该样本，其他版本必须重新解析，不能硬编码复用。

本地被 Git 忽略的分析目录为 `analysis/vivocontrol/`、`analysis/vivocontrol-pretty/` 和 `analysis/remote-service/`。本次新增的提取与分析脚本随实验代码撤回；关键提取规则和选定源码摘录保存在本记录中。

## 新版设备注册与信令

[注册参考](../evidence/computer-files/remote-service/registration-reference.txt)确认以下接口，服务根地址来自官方生产配置：`https://remote-desktop-backend-prd.vivo.com.cn`。

| 方法 | 路径 | 样本用途 |
|---|---|---|
| POST | `/remote-desk/v1/device/maodun/regist` | 注册/恢复远控设备代码、设备令牌及临时密码 |
| POST | `/remote-desk/v1/device/maodun/auth` | 设备授权接口；未验证完整调用条件 |
| GET | `/remote-desk/v1/device/maodun/tempPassword` | 临时密码接口 |
| GET | `/remote-desk/v1/device/maodun/refreshTempPassword` | 刷新临时密码 |
| GET | `/remote-desk/v1/sip/maodun/account` | 获取 SIP 及连接加密参数 |

注册体观察到 deviceType、identity、deviceDefaultName、version、deviceToken、pcDeviceId、priDeviceToken、countryCode。headers 包含 deviceToken、authToken、countryCode。账号 authToken 与设备 deviceToken 是不同凭据，不能混用。`/maodun/` 接口还携带对 `"ok"` 加密得到的 cipherText。

该封装采用 RSA 包装的 16 字节 AES key、AES-128-CBC/PKCS7、16 字节 IV、CRC32 和带长度的二进制头，最终编码为 Base64URL。公钥配置头 magic 为 204，消息 magic 为 203，protocol=32，keyVersion=1，应用标识 `com.vivo.remotecontrol`。头部包含 AES key 的 RSA 密文；不能把示例公钥误认为用户认证凭据。

实验中，重写的封装与提取的官方 JavaScript 实现进行了双向离线互解，结果通过。这只证明该封装的互操作，**不代表云端注册成功**。

[信令连接摘录](../evidence/computer-files/remote-service/signaling-connection.txt)记录：

```text
wss://cooperation-prd.vivo.com.cn/ws/v1/servicename/remote-desktop/id/<deviceNo>
  ?controlType=0&retry=...&pcProcessId=...
  &fileTransport=2&needAccountAuth=1&p2pSecurity=1
```

连接还带 openId 和 deviceToken headers。`fileTransport=2` 在样本中表示 Windows/macOS 文件传输支持。不能仅为显示入口便声明未实现的能力。

## 新版文件消息及原生依赖

[消息封装源码](../evidence/computer-files/remote-service/message-envelope.txt)中的顶层字段为：

```text
msgId, timeStamp, action, sourceDeviceNo, targetDeviceNo,
data, version:"v1", connectionId
```

文件消息的 data 为 `{type:"fileTransfer",name:<操作名>,value:<参数>}`。官方[RTC 分发器](../evidence/computer-files/remote-service/rtc-message-dispatch.txt)按 name 查找 `<name>Response`，响应沿用 msgId。这些文件消息实际走原生 data channel；没有证据支持把它们直接移到现有手机心跳 WSS 就能工作。

已恢复的操作包括：

| 操作 | 已观察到的参数/响应 | 摘录 |
|---|---|---|
| fileList | 目录路径；返回 baseDir、`mikdirPermission`（官方拼写）、total、index、list、code，按 1000 项分页 | [控制器](../evidence/computer-files/remote-service/file-controller.txt)、[目录枚举](../evidence/computer-files/remote-service/file-list.txt) |
| mkdir | `{baseDir,name}`；返回 path、code、msg | [文件操作](../evidence/computer-files/remote-service/file-operations.txt) |
| delFile | `{paths:[...]}`；返回逐项 code/path/msg，样本优先交由桌面端移入回收站 | [文件操作](../evidence/computer-files/remote-service/file-operations.txt) |
| confirmFileExist / fileStats | `{paths:[...]}`；返回存在性、读写属性、类型、大小及时间 | [文件操作](../evidence/computer-files/remote-service/file-operations.txt) |
| download / stopDownload / recoverDownload / deleteDownload / downloadFinish | 下载任务控制 | [下载控制器](../evidence/computer-files/remote-service/download-controller.txt) |
| upload / stopUpload / recoverUpload / deleteUpload | 上传任务控制；文件内容另用 protobuf 分片 | [上传控制器](../evidence/computer-files/remote-service/upload-controller.txt) |

目录项包含 type（file/folder）、name、ChineseName、time、size；Windows 根目录还可返回 driver 和媒体目录。原始源码保留的删除、目录和权限判断需要单独评审，不能直接移植为可操作电脑任意路径的服务。

[原生导出列表](../evidence/computer-files/remote-service/rtc-native-exports.txt)显示服务依赖 `vivo_rtc.dll`，包括 SIP 注册、接听、STUN、GCM、data channel 回调和二进制发送。DLL 中还存在 `vivodatachannel`、SCTP/DTLS 和加密 SDP 相关字符串。**Linux 尚未实现该传输层**；恢复 JavaScript 文件操作代码不等于已恢复整条链路。

## 验证结果及停止位置

- 实验原型曾通过 64 项后端回归和原生 Qt 自检；GCM 独立向量、TCP 分片、目录/属性/偏移读取及共享路径隔离使用本机测试验证。上述原型及其新增测试现已撤回，不能作为当前产品功能的验收结果。
- 真机仅确认收到过旧 VDFS 的 startup 响应。用户两次反馈未看到电脑文件入口；没有确认成功浏览目录、打开、上传或删除电脑文件。
- 新版外部注册验证被自动审批拒绝，拒绝原因是未明确授权向外部远控服务提交账号和设备信息、注册持久远控身份并处理相应凭据。该命令未执行，因此没有完成远控注册，也没有获取远控设备令牌、临时密码或 SIP 凭据。
- 用户确认手机不支持 vivo 远控 PC 后要求停止，随后要求仅保存逆向文档、回退代码。临时共享已恢复为关闭，没有安装或修改手机应用，没有发布本次功能。

后续若重新开展，应先确认目标手机支持的官方入口，再恢复账号/设备授权、SIP 与加密 SDP、RTC data channel 和文件分片，并在明确限定的共享目录中逐项完成真机验证。不能把旧 VDFS 启动确认或模拟测试通过表述为新版文件站已可用。
