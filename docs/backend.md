# 基础后端：账号、手机连接与文件收发

实现位于 [backend/src](../backend/src/server.mjs)，提供本机 REST API 和异步任务。账号登录使用官方 vivo 网页；手机继续运行官方 APK。仓库在 `runtime/windows/v7.0.6.0-cn/app` 中提供 Linux 所需的开源 Node.js 模块闭包，Linux 仅替代 Windows 原生连接服务和 Electron 进程/UI 编排。

已实现的范围是：官方账号登录回调、账号本地持久化/退出；USB、官方云扫码连接和旧版同网段无线配对；`/version`、`/base-info` 与心跳；浏览手机文件、电脑上传手机、从手机下载到电脑，以及手机文件移动、重命名、删除、创建目录和查询目录大小。文件收发使用手机官方文件 API，不使用 ADB push/pull 替代业务传输。“接收文件”当前是选择手机路径后主动下载，不包括手机分享面板主动推送及后台自动接收。

本地模拟手机集成测试已通过；尚无真实账号登录或真机互通记录。新版 seed/sign 挑战获取和 BLE 发现尚未实现；新增不依赖 BLE 的实验性本地扫码 P2P GO 路径（仍需管理员/真机验证）。对于常规局域网，目标手机若拒绝旧配对，可优先尝试官方扫码连接、USB，或由正常官方配对取得的已有连接 token。

## 官方复用清单

| 部分 | 使用方式 | Linux 的替代范围 |
|---|---|---|
| 账号登录 | 直接打开 `passport.vivo.com.cn` 官方登录页，client_id=130，保留官方 psuite 回调地址 | 自动检测浏览器，优先用官方 ChromeDriver/WebDriver 读取回调，CDP 备用；不接收账号密码 |
| 手机服务 | 官方 `com.vivo.pcsuite`；手机需已安装官方应用，项目不分发 APK | 没有重写手机端 APK |
| USB | `runtime/windows/v7.0.6.0-cn/app` 中的 `@vivo/adbkit` 2.11.3，Linux Android platform-tools 的 adb | 原 adbkit 丢弃 tcp:0 返回端口，只有分配/移除转发端口用官方 adb CLI |
| 心跳 | 随包 `ws` 8.20.0 | 重写会话管理，保留手机 WSS 子协议与消息 |
| 文件归档 | 随包 `tar` 6.2.1、`mime-types` 2.1.35 | 重写任务编排与检查，保留 TAR 传输格式 |
| 局域网发现/配对 | 保留官方 UDP/TCP 报文 | vivoesService.exe 没有 Linux 实现，使用原生 Node 网络 API 实现协议 |

加载器优先读取 `VIVO_OFFICIAL_APP`，其次仓库内的版本化运行模块，再回退到本地完整提取目录 `analysis/app`；不依赖全局 npm 包。[加载器](../backend/src/core.mjs)

登录参数和凭据顺序的证据是 [renderer loginUrl](../analysis/pretty/renderer.js#L42622)、[官方 preload 回调](../analysis/pretty/preload-welcome.js#L86)、[handleLoginSuccess](../analysis/pretty/renderer.js#L42831)。USB 使用 [DeviceManager](../evidence/main-modules/89.js) 的 activity/service 参数。文件参数及预检规则来自 [手机协议](phone-protocol.md)、[上传预检响应处理](../evidence/main-modules/162.js#L74)；无线报文来源见 [无线配对](wireless-pairing.md)。

## 运行

需要 Node.js 22 或以上、Python 3（只在提取样本时需要）、Linux Android platform-tools 的 `adb`（USB）、Chromium/Google Chrome（账号网页登录）。测试另需要 OpenSSL 创建本地测试证书；扫码图片和扫码页需要本机 qrencode（Arch Linux 软件包同名）。无需运行 Windows EXE 或安装 Electron。

```sh
# 从仓库根目录执行
# 已有 analysis/app 时无需重复提取；原始 Windows 样本须保留在 `samples/windows/v7.0.6.0-cn/`
python tools/extract_asar.py
# 自动检测已安装的 Chromium/Chrome；有匹配 chromedriver 时优先采用 WebDriver
npm start
```

无需 `npm install`：运行库直接来自本地官方样本。自动登录会检测系统 Chromium/Chrome，优先使用匹配版本的 chromedriver（Arch Linux 可安装 chromium 和 chromedriver）；无驱动时使用 CDP。可用 VIVO_BROWSER / VIVO_WEBDRIVER 指定路径。自动登录需要桌面图形会话；任意其他浏览器可用手动模式，不读取已有个人浏览器的 Cookie。安装包和提取目录已被 Git 忽略，因此克隆仓库后须在本地另行放置样本并提取。

默认只监听 `127.0.0.1:8765`。持久设备 ID、API 凭据放在 `.vivo-connect/config.json`，账号凭据在 `.vivo-connect/account.json`，文件权限为 0600。每次登录使用隔离浏览器目录，登录结束删除，不读取个人日常浏览器的数据。状态目录已加入 `.gitignore`。

可配置环境变量：

| 变量 | 默认 / 作用 |
|---|---|
| `PORT` | 8765；始终绑定 127.0.0.1 |
| `VIVO_STATE_DIR` | 仓库根 `.vivo-connect` |
| `VIVO_OFFICIAL_APP` | 官方 ASAR 提取目录，含 package.json 和 node_modules |
| `VIVO_BROWSER` | 可选，覆盖自动检测到的 Chromium/Chrome 路径 |
| `VIVO_WEBDRIVER` | 可选，chromedriver 路径；默认在 PATH 中查找 |
| `QRENCODE` | 可选，qrencode 可执行文件路径；生成二维码图片，默认从 PATH 查找 |
| `VIVO_LOGIN_TIMEOUT_MS` | 总登录等待时间，默认 900000（15 分钟），范围 30000–3600000 |
| `ADB` | adb 命令名或绝对路径 |
| `VIVO_PC_SYSTEM_TYPE` | `1`；复用原客户端非 macOS 分支。Linux 专属值尚未确认 |

除 `/health`，所有 API 都需要 `Authorization: Bearer <config.json中的apiToken>`，拒绝其他站点 Origin。普通状态响应不返回账号 token 或手机连接 token；扫码创建响应中的 qrText 按官方格式包含短期连接 token，只能交给可信前端显示。后端的 API token、账号 token 与手机连接 token 是三种不同凭据。

```sh
TOKEN=$(python -c 'import json; print(json.load(open(".vivo-connect/config.json"))["apiToken"])')
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/account
```

## 账号登录

重启后端使更新生效，然后保持原调用即可：

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/account/login
# 后端自动打开官方页面；用户只需完成扫码、密码或验证码操作
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/account
```

默认 mode=auto，自动检测 Chromium/Chrome 和 chromedriver，优先使用 WebDriver；无驱动时回退 CDP。自动完成页面打开、登录等待、官方回调识别和凭据持久化；用户仍需完成官方要求的身份验证。`pageLoadStrategy=none` 将导航与认证等待分开，页面资源未加载完不会触发旧版的 8 秒失败；导航期间短暂脚本错误/超时会重试。实现依据 [ChromeDriver capabilities](https://developer.chrome.com/docs/chromedriver/capabilities) 和 [WebDriver page loading strategy](https://www.selenium.dev/documentation/webdriver/drivers/options/#none)。

POST 返回 202，`mode`、`provider`、`phase` 可用于诊断。GET 的 `login.status` 为 waiting/succeeded/failed，phase 依次可为 launching、loading-page、waiting-for-user、reading-callback、authenticated。进入 waiting-for-user 表示页面 DOM 已可读取，不表示所有外部资源已成功加载。只有读到官方回调并保存凭据后才置 `loggedIn=true`。默认总等待 15 分钟，用户关闭窗口、主动退出、成功或总等待耗尽才结束流程。状态不显示带凭据的回调 URL。

如需选定自动控制方式，可传 `{"mode":"browser","provider":"webdriver"}` 或 `{"mode":"browser","provider":"cdp"}`。同一方式重复发起会返回仍在等待的请求，避免重复弹窗。退出账号后可重新开始。

只返回链接、不启动/关闭浏览器的备用模式：

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"mode":"manual"}' http://127.0.0.1:8765/api/account/login
```

任意浏览器打开返回的 loginUrl。官方回调固定在远端 psuite 域名，不能未经证实改为 localhost；因此其他浏览器登录成功不会自动通知本地后端。手动方式需在登录后跳转的 `https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml?...` 页面使用“另存为 HTML”，随后在本地导入：

```sh
node tools/import-account.mjs /绝对路径/保存的回调页.html
```

导入器只读取 HTML 中的隐藏值，不执行页面脚本，也不输出账号 token。它会自动读取本地 API 配置、找到等待中的手动请求并提交。高级调用可用带鉴权 `POST /api/account/login/complete`，body 为 `{id,payload}`，可选 callbackUrl 会严格核对官方回调来源。id 必须对应等待中的手动请求，成功后不能重复使用。请勿把保存的回调文件发到聊天或提交到仓库；使用后可自行删除。导入代表用户显式提供凭据，不会额外向官方验证其是否过期。

`DELETE /api/account` 清除本地账号、关闭本后端打开的受控浏览器并断开手机；手动打开的个人浏览器不受影响，不撤销服务端其他设备的登录。恢复的本地凭据不代表远端永久有效，当前未实现账号 token 自动刷新。基础近场连接允许未登录用户手动授权；账号和手机授权是两条独立链路。

## 原生 GUI

默认前端为 C++ + Qt Widgets 原生桌面程序。后端运行后执行 `./tools/run-native.sh`；`npm run ui` / `npm run scan` 也指向原生入口。设备管理、二维码、账号登录与文件收发均在原生窗口中操作。构建、依赖与内存实测见 [原生 GUI 文档](native-gui.md)。

下文网页相关描述仅适用于可选的旧调试入口 `npm run ui:web`。

## 连接手机

USB 优先复用官方路径：

```sh
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/devices/usb
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"mode":"usb","serial":"<ADB序列号>"}' http://127.0.0.1:8765/api/sessions
```

手机须已开启调试、确认 ADB 授权并解锁。如未安装 `com.vivo.pcsuite`，默认报 `PHONE_APP_MISSING`；显式加 `"installApk":true` 才安装本地随包 pcsuite.apk。基础后端不自动替换系统 connbase，也不强制降级手机组件。

同一局域网的发现与配对：先查询本机网卡，或让后端自动选择唯一的 Wi-Fi/有线 IPv4 网卡。自动选择会排除常见 VPN/TUN、Docker 等虚拟网卡；存在多张局域网网卡时返回候选列表，要求明确选择。网卡名称判断属于启发式规则，可显式指定本机地址覆盖。

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"timeout":5000}' http://127.0.0.1:8765/api/devices/discover
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"mode":"lan","ip":"<发现结果中的手机ip>"}' http://127.0.0.1:8765/api/sessions
```

`GET /api/network/interfaces` 返回本机 address、name、netmask、cidr 和 recommended。发现返回设备记录、手机 ip 和使用的 interfaceIp。不要把文档示例 IP 当作实际地址：显式提供的 interfaceIp/pcIp 必须属于本机网卡，否则立即返回 HTTP 400、LOCAL_IP_NOT_ASSIGNED 和候选网卡。连接时省略 pcIp 会优先按手机子网匹配；多网卡不明确时要求选择。LAN 的 TCP 配对、HTTP 和 WSS 使用所选本地地址。

```sh
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/network/interfaces
# 查看连接任务的结果；queued 仅代表入队，不能视作已连接
curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:8765/api/jobs/<连接请求返回的任务id>
```

空发现数组只表示本次没收到官方发现响应，需检查手机官方互传入口、共同局域网、组播/AP 隔离等条件；它不表示已配对。配对等待手机正常授权。新系统若要求未恢复的挑战协议，会明确失败/超时，不假装建立会话。已有正常授权连接可使用 `{"mode":"existing","ip":"…","token":"…"}` 完成 HTTPS/WSS 接入；不会凭空取得官方账号或配对凭据。

USB、LAN 和 existing 均返回 202 和连接任务 ID。轮询 `GET /api/jobs/<id>`：成功任务的 `result.id` 是 session ID。只有版本/基础信息检查通过且心跳通道打开后才报告 connected。成功连接的设备及连接凭据保存到状态目录 `devices.json`（0600），后端重启后可恢复并尝试自动重连；凭据不通过设备或任务查询接口返回。

旧的网页扫码调试界面可按以下方式使用。保持后端运行，在另一个终端执行：

```sh
npm run ui:web
```

命令自动读取本地 API 配置，通过一次性票据打开系统默认浏览器。页面自动选择本机网卡、显示真实二维码图片及倒计时，轮询连接阶段；官方返回扫码超时 10003 时自动刷新。手机使用**官方互传的“连接电脑 / 扫一扫”**扫描图片，而不是用普通浏览器打开 qrText 链接。进入页面后也可明确选择网卡、刷新或停止等待。

### 旧网页调试界面

运行 `npm run ui:web` 打开旧网页调试界面。布局参考 [KDE Connect](https://apps.kde.org/kdeconnect/) 的桌面设备管理方式，采用 Breeze 浅色、侧边设备列表与右侧功能区域，保持项目自己的名称和图标。

- 已连接设备直接显示概览；添加设备使用二维码弹窗，仍有刷新、停止及配对阶段反馈。
- 左下角可启动官方账号登录，页面轮询登录结果，不读取或显示账号 token。
- 支持系统文件选择器、多文件与拖放发送，可设置手机保存目录；浏览器单文件上限 512 MiB，重名默认保留并改名。
- 手机文件页使用官方 FILELIST 请求（data 为官方虚拟首页 `/` 或手机返回的实际目录路径，versionTag=1）。可进入文件夹、接收文件，也可直接输入手机文件路径接收。
- 传输记录展示真实任务进度、失败原因与取消按钮，接收完成后可保存到浏览器的下载目录。重启后端不保留内存中的任务历史。

页面使用同一后端的 `/scan`，无需单独启动前端或填写 API token。60 秒一次性票据只在浏览器 fragment 中传递，兑换后从 URL 清除；浏览器得到一小时有效的界面凭据，仅存于当前标签页 sessionStorage。它允许账号登录、设备查询/扫码、手机文件查询/下载、浏览器选中文件上传及任务查询/取消；不允许系统网络注册、签发新票据、导入账号回调或直接传入电脑任意路径上传。直接打开未授权页面时会提示先运行 `npm run ui:web`。

浏览器通过 `POST /api/ui/files?sessionId=…&name=…&savePath=…` 发送文件二进制，`X-File-Size` 声明大小。后端检查名称、实际大小、空间和会话，仅在私有随机暂存目录落盘，再交给已有官方上传流程；完成、失败或取消后清理暂存文件。页面凭据不能访问原有 paths 上传接口，从而避免变成任意本地文件读取入口。更新到本版需重启后端；现有手机会话随重启失效，需要重新连接。

验证：`npm run test:web-ui` 使用真实无头浏览器和模拟手机，覆盖已有设备概览、拖放上传、手机目录、接收操作与 390px 窄屏布局；`npm run test:scan-ui` 验证二维码及配对进度。预览图在 `/tmp/vivo-desktop-ui.png`。

API 方式仍保留，并且 pcIp 现在可省略自动选择：

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{}' http://127.0.0.1:8765/api/sessions/scan
```

返回 `jobId`、`qrText`、`qrImage`（自包含 SVG data URI）、`pcIp` 和 `expiresInMs`。qrText 只是二维码载荷；获取它不代表已经完成手机扫码。扫码界面会自动显示 qrImage，API 调用方也可自行显示该图片。二维码有授权用途，不应公开或写入日志。

任务失败分为两类：

- `SCAN_EXPIRED`：官方 `/scan/getPhone` 返回 10003，尚未取得手机回传地址。需要扫描有效二维码，不能据此认定校园网阻断了手机 TCP。
- `PHONE_UNREACHABLE`：已取得手机 `phoneIps`，但服务连接均因网络错误失败。任务的 attempts 记录 IP 与错误码，便于检查校园网隔离、路由和防火墙；其他业务拒绝仍保留原错误，不全部归为网络问题。

扫码通过官方 psuite 云服务传递结果，需要本机能访问云接口并能访问手机返回的地址。校园网可能同时限制组播发现和设备间通信；官方 Windows 代码另外包含 BLE/Wi-Fi Direct 网络建立入口，当前已新增实验性 P2P GO + 本地扫码路径，尚未还原完整 BLE 预连接。普通云扫码图片本身不能替代这条网络通路。Windows 能连接不代表双方在校园网上可直接互访。可使用共同手机热点或 USB 验证基础链路，但本后端不会自动创建热点、断开校园网或修改系统网络。

官方生产 RSA 公钥与 sid/getPhone 参数来自 [扫码 mixin](../analysis/pretty/components-connection.js#L13684)、[rsaEncrypt](../analysis/pretty/app-connection.js#L9630)；近场网络入口见 [startWifiDirect](../analysis/pretty/app-connection.js#L21383)。当前仅实现样本中国区配置。一次 sid 过期后，API 客户端需要重新创建；本地页面会自动处理这个刷新。

## 保持校园网的实验性 Wi-Fi Direct

本机实际只读检查确认：iwlwifi 的 phy0 报告 Station + P2P GO 并发，最多两个工作信道；当前校园网频率为 5785 MHz。这证明驱动声明支持并发，不等于当前固件、监管规则和手机已经互通。真实创建接口、分配地址和提供 DHCP 需要管理员权限，普通后端不直接执行这些操作。

默认路径现为 `--driver private`：先通过 nl80211 创建**独立 P2P GO 接口**，由项目内的独立 supplicant 管理，通过临时私有 Unix 套接字创建组。不调用系统 supplicant 的 GroupAdd，不修改或重启 NetworkManager。手机官方扫码加入后，从该接口取得手机地址；不经过校园网手机 IPv4，不需要 BLE 先发现对方。网络助手单独运行，账号、HTTP API 与文件后端仍以普通用户运行，不要把整个 npm 后端以 root 启动。

按顺序使用三个终端：

```sh
# 首次准备，以普通用户执行；本工作区已构建完成，无需重复
python tools/build_p2p_supplicant.py

# 终端 1：停止旧后端后，以普通用户重新启动
npm start

# 终端 2：独立模式的只读检查不需要 sudo，也不读取系统 supplicant
python tools/p2p_helper.py --interface wlp2s0 --driver private --check
# 检查通过后试运行；保持该终端运行
sudo python tools/p2p_helper.py --interface wlp2s0 --driver private

# 终端 3：助手输出 status=ready 后打开扫码页
npm run scan
```

扫码页在助手已就绪时自动选择“Wi-Fi Direct（保留校园网，实验性）”；也可手动选择后刷新。使用手机官方互传扫描新码。旧的局域网/云二维码不会自动变成直连二维码。助手 Ctrl-C 时只清理本次添加的 P2P 组、IP 和 DHCP 进程，后端停止/重启或助手心跳失败时也会触发清理。

管理员步骤为什么必要：创建 GO、为新增接口分配 IP、监听 DHCP 需要相应权限。默认临时模式由终端 sudo 或 GUI 的 pkexec 授权；另有下文的一次安装系统服务模式。密码仅在系统授权窗口或你的终端由 sudo 接收，不传入 API、不交给助手参数，也不应贴到聊天。两种模式均不放宽系统 supplicant 的 D-Bus 策略。

独立副本采用 [官方 wpa_supplicant 2.12](https://w1.fi/releases/wpa_supplicant-2.12.tar.gz)，固定 SHA-256 为 `08e23937e16d0155e55cab2b51f51fbe10d80a1aa91c4e15442645059b737ef6`。构建需要 Python、C 编译器、make、patch、pkg-config，以及 libnl3 / OpenSSL 开发文件。本工作区依赖齐全且已成功编译。也可用 `--archive <官方源码包>` 离线构建，校验仍强制执行；不会运行 make install。源码、许可证、编译日志和产物仅保存在被 Git 忽略的 `build/private-p2p/`，运行前核对产物和构建输入的哈希。

这不是直接多启动一个系统 supplicant。[适配补丁](../patches/wpa_supplicant-2.12-private-go.patch) 与 [构建配置](../tools/p2p_supplicant.config) 只用于项目副本：仅接受 `p2p-vc-xxxxxx` 名称和内核 GO 类型，保留 GO 模式并拒绝转成 Station；不创建第二个 P2P_DEVICE；组复用自己的 GO 数据接口；不编译系统 D-Bus 接口。配对、P2P 信息元素、WPS 和 WPA 加密仍使用上游代码。私有控制扩展用于确认正在运行的是这份构建。没有退回普通 AP 或系统 GroupAdd。

[独立助手](../tools/p2p_private.py) 将临时控制目录设为仅管理员可读写，输出白名单阶段与错误类别，丢弃事件内的密码；为本次新接口记录 ifindex、名称、phy 和类型。失败或 Ctrl-C 时停止自身进程与 DHCP，清理自身地址，仅在接口身份仍匹配时删除它。旧组、身份变化的接口及校园网 station 不在清理范围。

真实构建产物的无网卡回归可执行 `python tools/smoke_p2p_private.py`：实际启动独立全局控制服务，不添加无线接口，检查 PING、构建标记、空接口列表和拒绝普通 station 名称。`python tools/test_p2p_private.py` 的 17 项检查覆盖模拟启动/注册、拒绝组创建、频率不符、校园网变化、组结束、凭据日志过滤和清理边界。随后通过只读检查已观测到 `p2p-vc-*` 独立接口（2412 MHz）与校园网 `wlp2s0`（5785 MHz）同时运行，后端 `ready=true`，网关 `192.168.49.1`，并已有等待手机加入的直连扫码任务。后续补齐 WPS 授权后，已确认真实手机取得 `192.168.49.79` 并建立 `wifi-direct` 会话，HTTPS/WSS 连接成功；已实测 8 字节 example.txt 上传、回读及 SHA-256 一致；大文件和目录的真机表现尚未验证。

2026-11-01 手机扫码实测曾出现连接超时：当时新增进度显示 `provisionRequests=1`，而关联、认证及 DHCP 均为 0，确认手机已请求 P2P 配对但 GO 尚未授权。已补上上游要求的 WPS PBC 步骤：仅当后端有等待中的二维码或已经通过同账号蓝牙校验的自动重连窗口时，对最近 15 秒内发起 PBC 请求的单个 P2P Device Address 执行 `WPS_PBC p2p_dev_addr=...`。窗口最长 120 秒，二维码取消、过期或更换时关闭；实测修复后无线认证、DHCP 及手机回调均成功，不会在无二维码时向周围所有设备开放 WPS。依据为构建源码中的 `wpa_supplicant/README-P2P` 与 `ctrl_iface.c` 的 WPS_PBC 处理。补丁仍复用上游 WPS 实现，不改系统 supplicant。

二维码的 wm 现优先使用 `STATUS.p2p_device_address`，缺失时才回退 BSSID；Android 的组拥有者设备地址与数据接口 BSSID 不一定相同。是否与本次超时有关尚无单独实验证据。

助手心跳上报白名单计数：无线关联、认证通过、DHCP 请求/分配、配对请求/授权及失败。扫码任务与页面据此显示等待配对、验证、分配地址和等待回调；不输出手机 MAC、组密码或原始 DHCP 行。本地直连二维码不走云扫码回执，所以单纯扫描不会产生与 LAN 云扫码相同的通知；手机端未发来无线请求时，电脑无法确认它是否扫描过。

实现边界：

- [只读能力探测](../tools/wifi_capabilities.py) 使用 nl80211，解析接口组合、Station/P2P GO 数量和频率；缺少并发能力时拒绝创建，不退回会替换校园网的普通热点。
- 旧的 `--driver system` 模式通过现有 supplicant 的 P2P 管理方法调用 GroupAdd；默认独立模式不访问这些系统属性。两种模式共用下述频率、子网和 DHCP 保护。旧模式中，单独列出的 p2p-dev D-Bus 对象不是必需条件。创建前只读确认 NoGroupIface=false、Station 已连接及驱动并发支持，随后优先使用内核明确允许的当前 Station 频率；若当前信道带 NO_IR/DFS 等限制且并发组合支持双信道，则选择允许的 2.4 GHz 信道，等待单独的 GO 接口；检查同一 phy 和 P2P GO 类型后才添加独立 /24 地址及 DHCP。候选子网会避开现有主路由。
- 助手不修改校园网 profile、默认路由、VPN、防火墙、转发/NAT，也不停止系统 supplicant。持续比对校园网的连接 UUID 与 IPv4 地址；变化则清理本组。驱动实际并发行为仍需真机确认，监测不能保证固件永远不干扰原连接。
- DHCP 只用于 P2P 接口，不提供 DNS 或校园网共享上网。后端回调服务只监听 P2P 网关的 9199，管理 API 继续只监听 loopback。已有组存在时拒绝接管，已有 9199 占用时注册失败并由助手清理。
- [P2P 后端](../backend/src/p2p.mjs) 的本地二维码设置 `ls=true,we=true,wid=<组SSID>,wpw=<组密码>,wm=<组BSSID>,gw=<网关>`，省略 lip，触发手机 APK 的立即加入 P2P 分支。二维码含临时组密码及连接 token，不应公开。
- 手机成功加入后 GET `/notifyConnection`。只使用直连子网内 TCP 对端地址，不接受查询参数伪造的校园网 phoneIp；随后沿用官方 `/version`、`/base-info` 和 WSS/file API。组密码到手机 P2P join、手机组件版本与 token 接受情况尚未完成真机验证。

当前实测校园网 5785 MHz 标有 NO_IR，并附带 IR_CONCURRENT 条件标记；助手保守地不依赖条件放宽，改选内核无 NO_IR/DFS/禁用限制的 2412 MHz，前提是有效 Station+GO 组合支持两个信道。只允许单信道时明确退出，不更改监管域或校园网信道。后续 GO 启动后被删除的根因见下节；该频率选择本身不等于手机已经连接成功。新日志包含 preflight 频率计划、create-group、group-created；busctl 错误包含具体方法/属性名称，不输出参数值或组密码。参数 a{sv} 的序列化格式已在独立临时 D-Bus 会话中验证，未调用系统 supplicant。

旧的 `--driver system` 路径中，此前 `dedicatedP2pParent=false` 被当作阻断条件，是把 D-Bus 管理对象与承载数据的内核组接口混淆。已修正：管理对象可以仍叫 wlp2s0，GroupAdd 后必须出现另一个类型为 P2P GO 的接口；不是把校园网 station 切换成 GO。只读取 `P2PDeviceConfig.NoGroupIface`，不会擅自修改它；true/未知均拒绝。相关判断来自上游 [独立组接口选择](https://android.googlesource.com/platform/external/wpa_supplicant_8/+/master/wpa_supplicant/p2p_supplicant.c) 与 [NoGroupIface 的 D-Bus 属性](https://android.googlesource.com/platform/external/wpa_supplicant_8/+/master/wpa_supplicant/dbus/dbus_new_handlers_p2p.c)。`--driver system --check` 输出 stationState、noGroupIface、policyAllowsSeparateGroup、readyForConcurrentGroup；dedicatedP2pParent 仅作信息提示。

旧的 `--driver system` 组启动跟踪在 GroupAdd 前订阅并用唯一探针确认事件监听就绪，优先读取官方 GroupStarted 中的 interface_object / group_object，再核验内核接口为同 phy 的独立 P2P GO 且实际频率匹配；GroupAdd 返回成功本身不视为 ready。订阅只接受 supplicant 的 GroupStarted、GroupFormationFailure、GroupFinished，不记录含密码的协商事件。失败时记录未就绪内核接口与有限的属性错误，并清理本次新建的半创建接口；不会静默吞掉全部 D-Bus 属性错误。独立总线回归可执行 `dbus-run-session -- python tools/test_p2p_bus.py`，它不访问系统 Wi-Fi。

#### NetworkManager 外部组回收修复（已准备，未安装）

2026-11-01 的系统日志确认：supplicant 已在 2412 MHz 达到 AP-ENABLED / P2P-GROUP-STARTED，NetworkManager 1.58.1 同时记录 `group start but we are not trying to connect`，随后该 GO 被撤销。由此得到的源码解释是：`GroupStarted` 创建临时的 NMSupplicantInterface 包装对象；空闲的 NMDeviceWifiP2P 不保留它；包装对象释放时强制调用 RemoveInterface，于是读取 `/Interfaces/4` 的 Ifname 报对象不存在。延长超时、改用 wpa_cli 或只把虚拟 P2P 设备设为 unmanaged，均不能消除底层包装对象的回收行为。

已准备 [NetworkManager 1.58.1 补丁](../patches/networkmanager-1.58.1-preserve-external-p2p.patch)，仅调整析构时的所有权判断：通过既有对象路径发现的组（requested_driver=UNKNOWN）不因最后一个观察引用释放而删除；NetworkManager 主动创建的管理接口维持原清理行为，其自身 P2P 会话仍由 supplicant_group_interface_release 显式 Disconnect。补丁**尚未编译、安装或真机验证**，不应当作已经打通 Wi-Fi Direct。原始源码 SHA-256、观测摘要和补丁状态见 [根因记录](../evidence/networkmanager-p2p-conflict.json)。

补丁已对官方 1.58.1 源文件检查应用兼容性。之后维护系统包时，应将其加入该版本 NetworkManager 的构建配方，在源码目录执行以下检查，再通过系统包管理器安装构建产物；不要覆盖正在运行的系统可执行文件：

```sh
PROJECT_ROOT=/path/to/vivo_connect
patch --dry-run -p1 -i "$PROJECT_ROOT/patches/networkmanager-1.58.1-preserve-external-p2p.patch"
```

该系统补丁只保留备用；目前优先尝试项目独立 supplicant，无需应用它。不修改系统包、不重启网络。安装验证需另安排允许校园网短暂中断的时间，并覆盖原有校园网重连、NetworkManager 自身 P2P 连接/断开、外部自主 GO 保持、Ctrl-C 清理和手机加入。当前不必重复运行相同的恢复命令：它无法修复 NetworkManager 的所有权问题。

助手现在先处理同批事件中的 GroupFinished / GroupFormationFailure，再读新对象属性。仅对对象消失类错误保留等待；权限错误仍立即暴露。该调整让错误指向组被撤销，不代表绕过了系统冲突。

对应官方源码：[GroupStarted / dispose / set_state_down](https://github.com/NetworkManager/NetworkManager/blob/1.58.1/src/core/supplicant/nm-supplicant-interface.c)、[创建已发现对象的包装](https://github.com/NetworkManager/NetworkManager/blob/1.58.1/src/core/supplicant/nm-supplicant-manager.c)、[空闲事件处理及显式 Disconnect](https://github.com/NetworkManager/NetworkManager/blob/1.58.1/src/core/devices/wifi/nm-device-wifi-p2p.c)。

早期助手失败退出可能留下 DOWN、无地址、频率为 0 的 GO 接口。仅在确认是本次实验的残留后，显式指定名称恢复，例如：

```sh
sudo python tools/p2p_helper.py --interface wlp2s0 --driver system --recover-stale p2p-wlp2s0-0
```

此命令重新验证类型、phy、地址、接口状态和频率；目标为校园网 station 或活动 GO 时拒绝。只有显式指定的未活动 GO 才会被移出 supplicant / 删除孤立 netdev，随后重新创建。普通启动若发现已有 P2P 数据接口会退出，不擅自清理。新助手还会记录创建前的 ifindex，正常失败回滚只处理本次新增接口。真正的驱动/系统拒绝仍需依据事件、阶段和后续管理员输出判断，不能把接口存在误报为已互通。

手机证据：[ConnectModel.startConnect / accessPcDirectIp](../evidence/wireless/android/pcsuite__classes2.dex__affb821f01e7.txt#L530)、[qrConnectP2P 派发](../evidence/wireless/android/pcsuite__classes2.dex__e29cb877fbfe.txt#L1096)、[手机 P2P ConfigBuilder](../evidence/wireless/android/connbase__classes2.dex__a21229ab8bff.txt)、[PC 本地回调](../analysis/pretty/main.js#L28794)。系统接口依据 [wpa_supplicant D-Bus 文档](https://w1.fi/wpa_supplicant/devel/dbus.html)；NetworkManager 的 wifi-p2p peer/WPS 设置本身不等同于这里所需的自主 GO 创建，[设置参考](https://networkmanager.dev/docs/api/latest/settings-wifi-p2p.html)。

新 API：`GET /api/p2p/status`、`GET /api/p2p/capabilities?interface=wlp2s0`、`POST /api/sessions/p2p`。`/api/p2p/register`、heartbeat、unregister 由本地管理员助手通过现有 API token 调用；设备界面的临时凭据可查询 status 和创建 P2P 扫码任务，但不能注册网络。二维码任务阶段为 waiting-for-p2p → connecting → succeeded/failed。能力接口不会创建网络。

默认独立助手运行时依赖项目构建产物，以及系统 `ip`、`nmcli`、`dnsmasq`、Python 3；旧的 `--driver system` 才额外依赖 `busctl` 和系统 supplicant。可用 `--state-dir` 和 `--port` 指定实际后端位置。首次运行若遇到监管频率、GroupAdd、固件、DHCP 或回调错误，应保留不含密码的终端错误以继续定位；不要为绕过错误手动断开校园网、停止系统网络服务或关闭防火墙。

其他连接选项：`port` 默认 10380，仅 LAN/existing；`scheme` 默认 https，可显式设 http；`verifyTls=true` 开启手机证书验证。默认复用官方局部请求的自签名证书兼容行为（不验证手机证书链）；它只作用于手机会话，不影响官方账号网站的 TLS 验证。证书固定和正式 Linux 平台能力协商仍需真机完善。

`GET /api/sessions` 查看会话，`GET /api/sessions/<id>` 查看状态，`DELETE /api/sessions/<id>` 取消该会话传输、关闭心跳、移除本后端创建的 USB 转发并遗忘设备。收到手机 close 或 WebSocket 关闭后状态转为 disconnected，已记住且未暂停的设备会自动重试连接。

### 一次安装的系统服务模式

可选 `vivo-connect-p2p.service` 由 systemd 管理无线组，绑定一个普通用户、一个无线网卡、一个状态目录和本机后端端口。安装时需要一次管理员授权，之后打开普通客户端即可；服务发现该用户的后端就绪后创建独立 GO，GUI 自动等待它就绪，不再调用 pkexec。服务保持运行时，关闭 GUI 不会清理组，后端短暂退出时保留网络并关闭 WPS 授权窗口；后端恢复后重注册相同的组、网关和密码。

先以普通用户构建组件，并运行一次客户端生成 `config.json`。以下以源码目录、`wlp2s0` 和默认端口为例；安装前退出旧界面和手动助手，避免旧助手继续占用组锁：

```sh
# 普通用户构建（已有且校验通过时可跳过）
python tools/build_p2p_supplicant.py
# 一次安装；--state-dir 必须与平时运行客户端的 VIVO_STATE_DIR 一致
sudo python3 -I tools/install_p2p_service.py install \
  --user "$USER" --interface wlp2s0 --state-dir "$PWD/.vivo-connect" --port 8765
# 后续照常以普通用户打开软件，无需 sudo
./tools/run-native.sh
```

安装器复制已校验的助手、GO 专用 supplicant、构建记录及输入到 `/usr/local/lib/vivo-connect-p2p/`，由 root 管理；配置位于 `/etc/vivo-connect-p2p/service.json`，不含 token 或组密码。服务只读取指定用户权限为 0600 的后端配置，运行时目录为 `/run/vivo-connect-p2p/`。不会从用户可修改的项目目录执行 root 代码，也不添加免密 sudo、setuid 或宽泛 Polkit 规则。源码更新后，应重新安装更新此独立副本。

服务带 `NoNewPrivileges`、能力范围和文件系统限制。systemd 的 `Restart=on-failure` 用于服务进程异常后的恢复（[官方说明](https://www.freedesktop.org/software/systemd/man/259/systemd.service.html)）；服务内部对后端或校园网暂不可用的情况等待重试。它不会启动 root 身份的文件后端，也不更改 NetworkManager 的校园网连接。

```sh
# 普通用户查看状态；日志查看权限取决于发行版配置
systemctl status vivo-connect-p2p.service
journalctl -u vivo-connect-p2p.service -b
# 完整卸载服务，保留普通用户账号配置和下载文件
sudo python3 -I /usr/local/lib/vivo-connect-p2p/tools/install_p2p_service.py uninstall
```

无需管理员权限即可生成安装预览或运行离线验证：

```sh
python tools/install_p2p_service.py install --user "$USER" --interface wlp2s0 \
  --state-dir "$PWD/.vivo-connect" --destdir /tmp/vivo-p2p-service-preview
python tools/test_p2p_service.py
```

系统服务已补充持久组协议：在 `/var/lib/vivo-connect-p2p/<uid>-<interface>/` 以 0700 目录、0600 文件保存固定的 GO 地址，以及 supplicant 自身写出的 SSID、PSK 和已配对客户端列表；不同配置用户或网卡使用不同资料。启用 `update_config=1` 和 `persistent_reconnect=1`，创建组使用 `P2P_GROUP_ADD persistent`，恢复使用 `persistent=<network-id>`，不再每次启动生成全新的组。独立 supplicant 已启用配置写入，旧版 `CONFIG_NO_CONFIG_WRITE=y` 构建不能用于此模式。

后台在存在启用自动重连的历史设备时，只对持久客户端列表中的具体设备地址进行定向发现及 `P2P_INVITE group=… peer=…` 邀请，每次至少间隔 15 秒；发现阶段限定到该客户端，间隔 6 秒。暂停、手机已关联或正在显式扫码配对时不发起自动邀请，不通过开放 WPS 代替历史配对。接收端是否接受邀请仍由手机决定。机制依据为上游 [P2P_GROUP_ADD / P2P_INVITE 控制接口](https://w1.fi/wpa_supplicant/devel/ctrl_iface_page.html) 和本地 `wpa_supplicant-2.12/wpa_supplicant/README-P2P`。

从旧临时组迁移时，需初始化新组的配对资料；能否在之后复用，取决于手机是否也保存并接受该组，不能保证扫码一次后就能免扫码恢复。仅安装应用包不会替换已经复制到 `/usr/local/lib/vivo-connect-p2p` 的旧服务，因此还需重新运行服务安装器更新副本。服务卸载保留 `/var/lib/vivo-connect-p2p` 配对资料，重新安装可复用。已通过持久身份/配置恢复、配置保存失败、定向邀请、退避、暂停和 netlink MAC 参数等离线测试；更新后的真实手机邀请和重启恢复尚待验证，不将离线测试称为真机免扫码已成功。

真机排查补充：已观测到系统服务运行新版持久组代码、Linux 客户端已登录，但邀请命令被 supplicant 接受后手机没有入组，可复用客户端计数从 1 降为 0。这不支持“再执行安装命令即可修复”或“扫码一次以后保证免扫码”的结论。上游 `wpas_p2p_invitation_result()` 在收到 `P2P_SC_FAIL_UNKNOWN_GROUP` 时会删除对应持久客户端，但尚未取得本机此次失败的响应码，不能据此直接断言手机返回了该状态。

手机样本还有一个兼容性限制：[Android Q 入组分支](../evidence/wireless/android/connbase__classes.dex__9de5e103073d.txt#L1220) 调用的 [ConfigBuilderProxy](../evidence/wireless/android/connbase__classes.dex__05137d27627f.txt#L30) 设置网络名、密码、频率后直接 build，未调用 `enablePersistentMode(true)`；[Android 官方源码](https://android.googlesource.com/platform/packages/modules/Wifi/+/refs/tags/android-14.0.0_r29/framework/java/android/net/wifi/p2p/WifiP2pConfig.java) 明确默认不保存组配置。这只证明该样本分支的行为，不能替代当前手机 ROM 的动态验证；同一代码还存在厂商 Ext 与 Classic 分支。电脑端持久组不是完整的官方免扫码预连接实现。

可用 `sudo python3 -I tools/diagnose_p2p.py --seconds 20` 对运行中的私有控制套接字做只读观察。脚本只允许 STATUS、LIST_NETWORKS、指定字段的 GET_NETWORK、STA 查询及 ATTACH/DETACH；输出邀请状态数值和配置摘要，不输出密码、原始 MAC，不发起发现、邀请、WPS 或网络重启。它用于获取实际失败原因，并不修复手机端的持久配对或官方预连接协议。

### 官方自动连接与账号登录

官方设置名是“自动连接同账号设备”，中文说明为“登录账号后，自动连接附近同账号的手机/平板。”（[设置绑定](../analysis/pretty/renderer.js#L56023)、[官方中文资源](../analysis/pretty/locales-zh_CN.js)）。`AutoConnectManager` 读取此开关，再检查预连接发现结果中的 `auth_status`、`connect_status`，然后调用原生预连接服务；不是只保存扫码 token 后直连旧地址。[自动连接判断](../analysis/pretty/app-connection.js#L1521)

因此应在 Linux 客户端登录与手机相同的 vivo 账号，并允许手机端的设备互联/自动连接；只有 Windows 官方版已登录，不代表本客户端已具备同账号信任状态。后端 `/base-info` 会发送当前账号的 `isLogin/openid/pcLoginAccount` 和自动连接标志，[官方字段来源](../analysis/pretty/app-connection.js#L14264)。现有 token 在网络仍存活时可能允许未登录恢复，但不等同于官方的同账号发现与信任链。当前原生 BLE 预连接尚未完整移植，不能保证仅登录账号就覆盖所有手机后台唤醒场景。

## 浏览、发送与接收文件

`POST /api/sessions/<sessionId>/files` 请求手机列表。默认参数复用官方首页列表；可传 `category`、`data`、`type`、`pageIndex`、`pageNumber` 等原始字段，响应保留手机 envelope。目录类型和 data 取值以对应手机支持的官方协议为准。

电脑发送到手机：

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"paths":["/path/to/example.txt"],"savePath":"/sdcard/Download","ifDuplicated":"rename"}' \
  http://127.0.0.1:8765/api/sessions/<sessionId>/uploads
```

本地 paths 为绝对路径，支持普通文件/目录；根文件名不可重复，不接受符号链接或特殊文件。先暂存快照，再发送官方 drop_files_info 预检和 TAR 流；预检拒绝时不发送文件体。预检按官方 [checkUploadInfo](../evidence/main-modules/1704.js) → [handleUploadRes(response)](../evidence/main-modules/162.js#L74) 的调用规则接受 HTTP 200，不要求响应体含 status；空响应和缺少 status 均兼容，同时保留显式非零 status/code 的拒绝检查。上传最终响应的完成确认独立处理，不因预检成功就报告文件已发送。上传成功要求手机业务响应确认，不把写入 TCP 视为完成。本次实测上传 `/sdcard/Download/example.txt` 成功，再通过下载接口回读，与原始 8 字节文件的 SHA-256 一致，见 [真机验证记录](../evidence/upload-preflight-verification.json)。`ifDuplicated` 可为 rename 或 overwrite，覆盖须由调用方明确选择。

手机接收到电脑：

```sh
curl -X POST -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"paths":["/sdcard/Download/example.txt"]}' \
  http://127.0.0.1:8765/api/sessions/<sessionId>/downloads
```

下载先查询所选路径的文件列表元数据，目录另用 `query_directory_size` 查询递归字节数，合计后作为 `download_info.total` 传给手机。该字段是手机发送进度的总字节数，不能固定为 0（非空文件会因缺少分母直接显示 100%）；它不包含 TAR 头。文件列表支持分页和共享存储路径别名，单个父目录最多查询 100 页，每页 200 项。无法获取大小时返回 `DOWNLOAD_SIZE_UNKNOWN`，无法找到所选文件时返回 `DOWNLOAD_FILE_NOT_FOUND`，不以 0 代替未知大小；真正的空文件允许大小为 0。下载路径不允许重复或同时包含父目录和子路径，避免总量重复计算。若手机预检未返回 totalSize，任务继续使用查询到的总字节数。

TAR 写入临时目录，完整接收后检查条目、大小和安全路径，再解包。完成的文件位于 `.vivo-connect/downloads/<job-id>/`；每个普通文件返回 SHA256。此哈希用于本地校验，尚未与手机端哈希进行对比。目录可传 `"isDirectory":true`。不自动覆盖用户现有下载文件。

接收归档并完成解包、大小检查、SHA-256 计算和落盘后，后端通过 `/ws/heart-beat` 发送 `TRANS_FILE_SUCCESS:{"successCount":…, "id":"<job-id>"}`，结束手机“正在发送”的状态。只结束 HTTP 流会让手机继续等待完成通知，可能停在 99%。失败和取消分别发送官方 `TRANS_FILE_FAIL` / `TRANS_FILE_CANCEL` 消息，不发送成功通知。计数优先使用手机预检返回的 `totalCount`，缺省时使用请求路径数量。协议依据为官方 [transFileSuccess](../analysis/pretty/app-modules.js#L539) 和 [目录传输完成处理](../analysis/pretty/app-modules.js#L17214)。

发送完成通知失败时任务返回 `TRANSFER_NOTIFY_FAILED`，已校验文件仍保留，`error.details.directory/files` 指出保存位置，避免把通知故障误报为文件丢失。通知成功表示 WebSocket 发送完成，协议未提供手机界面更新的确认；当前验证使用模拟手机。

`GET /api/jobs/<id>/file?path=<result.files中的相对路径>` 可以通过带鉴权 HTTP 取回已完成文件。只允许访问该任务结果清单中的文件。

## 文本剪贴板同步

后端复用手机 `/ws/heart-beat` 通道中的 `CLIPBOARD_TEXT:` 消息，支持 USB、LAN、Wi-Fi Direct 等已连接会话。每个会话在内存中保留最新一条文本，不落盘、不输出正文日志，也不在设备列表或任务列表中返回内容。协议按前缀后原始文本处理，保留冒号、换行、Unicode 和空字符串，不将文本解析为 JSON 或命令。仅支持文本，单条最多 64 KiB（UTF-8 字节数），超限手机消息和二进制消息直接忽略。

需要完整本地 API Bearer token；旧网页票据不能访问这些接口：

| 方法 | 路径 | 用途 / 请求体 |
|---|---|---|
| GET | `/api/sessions/<id>/clipboard` | 读取该会话最新文本和同步状态 |
| PUT | `/api/sessions/<id>/clipboard` | 向手机发送 `{"text":"电脑上的文本"}`，空文本为 `{"text":""}` |
| PATCH | `/api/sessions/<id>/clipboard` | 本地暂停或恢复：`{"enabled":false}` / `{"enabled":true}` |

GET 返回 `{enabled,text,revision,source,updatedAt}`。尚未收到或发送文本时 `text/source/updatedAt` 为 null；`source` 为 `phone` 或 `pc`。客户端可轮询 `revision` 判断是否更新，并将 `source=phone` 的新文本写入桌面系统剪贴板；桌面剪贴板变化时调用 PUT。同一文本重复收到或写入不会增加 revision，也不会回传手机，PUT 用 `sent=false` 标记跳过；`sent=true` 仅表示 WebSocket 发送完成，手机没有单独的写入确认消息。

```sh
curl -H "Authorization: Bearer $TOKEN" \
  "http://127.0.0.1:8765/api/sessions/$SESSION_ID/clipboard"
curl -X PUT -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"text":"从电脑同步到手机📋"}' \
  "http://127.0.0.1:8765/api/sessions/$SESSION_ID/clipboard"
```

会话默认接收文本，暂停时清除缓存并忽略手机后续文本，恢复后等待新的文本。此开关仅控制本地处理，不修改手机设置。断开或重连清空缓存并重置状态，客户端重新建立会话后应重新读取配置；多台手机之间不自动广播内容。暂停写入返回 `409 CLIPBOARD_DISABLED`，断连返回 `409 SESSION_DISCONNECTED`，同一会话并发发送返回 `409 CLIPBOARD_BUSY`，发送失败或超时返回 `CLIPBOARD_SEND_FAILED` 且不缓存未发送文本。

Qt 客户端提供当前设备的文本剪贴板双向同步和暂停开关，KDE Wayland 下使用 Klipper 读取后台变化；Slint 客户端尚未接入。协议来源见 [sendClipboardText](../analysis/pretty/app-connection.js#L12598) 和 [接收处理](../analysis/pretty/app-connection.js#L16572)。后端已使用模拟手机验证双向文本、重复抑制、暂停、清理、隔离、大小限制及发送竞争；真实手机可能仍需开启系统互联剪贴板权限。

## 手机文件管理

以下接口均为 `POST /api/sessions/<sessionId>/files/<操作>`，使用本地 API Bearer token 和 JSON 请求体；会话必须已连接。它们同步返回 HTTP 200 和结果，无需轮询任务。原有 `POST .../files` 列表接口保持不变。

| 操作 | 请求体示例 | 返回内容 |
|---|---|---|
| `move` | `{"path":"/sdcard/Download/a.txt","destination":"/sdcard/Documents/a.txt"}` | 目标 `path`、手机原始 `response` |
| `rename` | `{"path":"/sdcard/Download/a.txt","name":"新名字.txt"}` | 目标 `path`、`response` |
| `delete` | `{"paths":["/sdcard/Download/a.txt","/sdcard/Download/旧目录"]}` | 请求的 `paths`、含删除统计的 `response` |
| `mkdir` | `{"path":"/sdcard/Download","name":"新目录"}` | 新目录 `path`、`response` |
| `size` | `{"path":"/sdcard/Download"}` | `path`、字节数 `size` |

`move.destination` 是包含文件名的完整目标路径，目标父目录应已存在。移动与重命名复用手机 `/pc_file_manager/file_rename`，按 `srcPath/newPath/newName` 传参，并要求手机业务码成功且 `data` 确认成功。跨目录、跨存储卷的支持由手机实现决定，目前仅通过模拟手机验证；手机拒绝时直接返回失败，不使用复制后删除兜底。重名 `0014` 映射为 HTTP 409 `FILE_EXISTS`，源不存在 `0015` 映射为 HTTP 404 `FILE_NOT_FOUND`，空间不足 `0012` 映射为 HTTP 409 `PHONE_STORAGE_FULL`。

删除调用官方 `/pc_file_manager/delete_info`（`list` 为手机路径、`bucketId=[]`），根据官方 UI 使用的 `total/successTotal/failType` 检查结果。无法确认全部完成时返回 HTTP 502 `FILE_DELETE_INCOMPLETE`，`details.response` 保留手机统计；部分文件可能已删除，应刷新文件列表后决定下一步。是否进入回收站由手机决定，不承诺可恢复。批量删除限制为 1–1000 个路径，拒绝重复路径及同时选中的父子路径。路径必须为手机绝对路径，拒绝 `.`、`..`、控制字符、反斜杠；禁止移动、重命名或删除 `/`。

目录创建沿用手机 GET `/pc_file_manager/create_directory?path=…&name=…`，对本地调用方仍提供 POST；目录大小使用 `/pc_file_manager/query_directory_size`。新增接口只提供后端能力，尚未接入原生或网页 UI，网页票据也未增加这些操作权限。实现见 [files.mjs](../backend/src/files.mjs)，回归测试见 [files.test.mjs](../backend/test/files.test.mjs)。

## 任务、取消与错误

`GET /api/jobs` 或 `GET /api/jobs/<id>` 返回 queued/running/succeeded/failed/cancelled、phase、bytes、totalSize、result/error。上传接口刚返回的 `queued` 只表示任务已创建；需要继续查询返回的任务 id，才能获知最终成功或 error。bytes 是实际传输流字节数，可能含 TAR 头，不能直接当作文件内容百分比；totalSize 来自文件或手机预检。任务状态仅在内存中，进程重启不恢复，已下载文件保留在本地。

`POST /api/jobs/<id>/cancel` 取消传输/连接。上传取消会中止本地流，不承诺回滚手机端已收到的数据；下载失败/取消会清理临时文件，不公布为成功。单任务基础上限为 50 GiB，不支持断点续传。不要对失败上传自动无限重试，避免产生重名副本。

同步 API 错误形如 `{"error":{"code":"…","message":"…","details":{}}}`；异步任务失败用相同 error 字段。可诊断错误包括 BROWSER_REQUIRED、OFFICIAL_MODULE_MISSING、PAIR_TIMEOUT、PAIR_REJECTED、PHONE_REJECTED、UPLOAD_PREFLIGHT_REJECTED、DOWNLOAD_SIZE_MISMATCH 等。

## 测试与当前验证边界

```sh
npm test
python tools/test_p2p_helper.py
```

当前 26 项 Node 测试、30 项旧网络助手测试及 17 项独立模式测试通过，见 [验证记录](../evidence/backend-verification.json)。测试使用本机模拟手机的 TCP、HTTPS、自签名证书和 WSS，以及模拟 CDP/WebDriver 回调，不连接真实账号或真实手机。扫码 UI 的真实浏览器回归可执行 `npm run test:scan-ui`，它使用模拟云返回、真实二维码生成器，验证图片显示和任务轮询。另可执行 `npm run test:browser`，用真实无头 Chromium/ChromeDriver 访问本地延迟 10 秒才出现回调字段且一直加载资源的页面，回归旧版 8 秒退出问题；不会访问官方账号。覆盖官方扫码 sid/getPhone 到会话的 token 交接、帧拆包、授权忙碌后接受、同 token 鉴权、会话建立、上传/下载后哈希一致、拒绝预检、大小不一致、归档路径/链接拒绝、API 鉴权、取消、账号回调持久化和 USB 启动参数/转发清理。

真机仍需确认：官方网页和回调是否保持样本契约、手机是否允许旧版 LAN 配对、Linux 平台字段、HTTPS/HTTP 切换与证书、目录归档及权限响应。后端会暴露这些真实失败，不将模拟测试结果表述为真机已通过。

### 保留设备的断连与重连

成功连接后，后端在 `devices.json` 保存设备标识、连接方式、手机及本机地址、USB 序列号和连接 token，最多恢复 50 个设备；不保存剪贴板正文或账号资料。文件权限为 0600。后端启动及意外掉线后，自动复用已授权的 HTTPS/WSS 地址和凭据，无需再次扫码；USB 则重新创建 ADB 转发。恢复握手的 `/version`、`/base-info` 均发送 `isAutoConnect=true`，并在采用会话前核对手机身份，保持原 session ID。

自动连接串行执行，失败后按 5、10、20、40、60 秒上限退避，并防止与手动连接/扫码任务重复。手机明确拒绝授权、协议不兼容或身份不一致时停止自动重试，标记 `needsAuthorization=true`；网络不可达时继续等待，不主动打开扫码。`GET /api/sessions` 另返回 `autoConnect`、`reconnecting`、`needsAuthorization`、`nextRetryAt`，任务仍可从 `/api/jobs` 查询。

Wi-Fi Direct 自动重连先区分“组已就绪”和“手机已入组”。组未就绪、手机尚未关联或认证、直连子网发生变化时，不向历史手机地址创建重连请求；会话用 `reconnectWait={code,message}` 返回等待原因。系统服务的 `ready=true` 只代表 GO 和 DHCP 已启动，`authorizedStations=0` 表示没有已认证的手机，不能据此宣称手机可达。手机入组后立即解除等待并恢复自动重连，不沿用旧的失败退避。Qt 显示“等待手机加入直连组”，可点击“加入直连组”主动打开二维码；网络重建后的首次入组仍可能需要手机扫码。

原生 GUI 的“断开连接”使用 `POST /api/sessions/:id/disconnect`，保留设备但暂停自动重连，暂停状态跨重启保留；离线设备也可点击此按钮停止重试。“重新连接”使用 `POST /api/sessions/:id/reconnect`，返回 202 的 job，并恢复自动连接。`DELETE /api/sessions/:id` 遗忘设备，退出账号会遗忘全部设备。Qt 界面显示正在重连、等待重连、暂停或需要授权，失败不再自动弹扫码窗口；需要重新授权时可主动点击“添加设备”。

2026-11-03 已接入官方同账号预连接：读取官方账号设备发现记录，取得 GUID、蓝牙地址和真实随机挑战，经经典蓝牙 `#pcc` 通道校验同账号、发送签名建链请求；在认证后为本次自动重连开放短时入组窗口，再用同一 token 完成 HTTPS/WSS。已验证客户端完整退出、新进程启动后自动重连，无需创建扫码任务。发现信息以 0600 权限保存，支持新进程恢复及同账号离线缓存。蓝牙助手仅在一次连接期间运行，结束即退出，不新增常驻守护进程。手机端仍按官方逻辑检查登录账号、Wi-Fi、蓝牙和解锁状态；忙碌/失败重试会让出至少 35 秒清理窗口。协议证据和真机验证边界见 [官方重连实现](official-reconnect.md)。

Wi-Fi Direct 默认由原生客户端调用系统 pkexec 授权；安装系统服务模式后由固定配置的服务准备网络，GUI 不再请求授权。后端 HTTP 接口不执行提权命令。详见[原生客户端](native-gui.md)。
