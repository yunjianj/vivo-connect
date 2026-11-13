# 录音机云同步

主界面新增“录音机云同步”标签页。先登录与手机相同的 vivo 账号，并在手机录音机中开启云同步，然后点击“立即同步”。不需要 USB、蓝牙或 Wi-Fi Direct 会话。

录音列表支持右键播放、导出、改名及移入回收站或恢复。快捷键：`F5` 同步、`Ctrl+F` 搜索；列表中按 `Enter` 播放、`Ctrl+S` 导出、`F2` 改名、`Delete` 移入回收站。云端删除和恢复仍需确认。

可使用 Ctrl 或 Shift 多选有音频且大小已知的录音，一起拖到电脑文件管理器。同名文件会自动添加序号。放下并读取后才开始下载，取消拖动不会下载；拖出依赖 FUSE，目标读取时会等待完整下载。大小未知时可单独使用“导出”操作。播放、改名、导出及回收站按钮目前针对单条录音。

## 支持的操作

- 首次拉取云端录音索引和详情；随后按云端版本增量更新。录音名称、时长、大小、时间、回收站状态和已返回的转写、摘要、标记资料保存到本地。
- 勾选“自动同步（每分钟）”后，现有后端运行期间每分钟同步一次；设置按账号保存，重启后仍有效。不新增系统服务或后台进程。默认关闭，可随时取消。
- 搜索录音名称，切换普通列表与回收站。
- 播放与导出：按需下载音频，验证大小和 MD5／SHA-256 后保存，播放调用电脑默认应用，不自动播放。支持取消云端下载任务。单条音频上限 2 GiB。
- 改名会同步到云端；移入回收站与恢复会先确认。提交前重新拉取，检查录音版本，避免覆盖手机或其他电脑的更新；不自动重试不确定是否已成功的写入。

这次适配不包含 PC 新建录音／导入音频上传、永久清空回收站、AI 转写请求或修改已有转写；只显示云端已经返回的文字资料。是否存在音频以云端是否已关联文件为准，手机尚未上传的音频会明确提示。

## 本地数据与账号

数据位于状态目录 `recordings/<账号 SHA-256>/`，索引与设置使用私有权限并原子写入，音频按需保存到 `audio/`。不同账号的索引、版本、下载和自动同步设置隔离。退出或切换账号会停止旧账号操作；界面刷新后清空不可访问的资料，不把旧账号缓存作为新账号结果显示。退出登录不会删除已导出的个人文件或该账号私有缓存。

首次同步从版本 `0` 拉取，录音详情每批最多 30 条；缺失详情、响应格式错误、网络失败或版本回退均不提交新索引及游标。服务端删除只更新同步索引，不删除用户导出到其他目录的文件。失败的自动任务会在界面显示错误，可重新登录或手动重试。

## Windows 原版协议

依据本地 Windows `v7.0.6.0-cn` 的录音云模块、网页播放器和 `SyncService/vivoSyncService.exe`。静态片段与原生字符串保存在[协议证据](../evidence/recordings/official-reference.txt)。

基址为 `https://psuite.vivo.com.cn`，当前支持中国区账号。

| 路径 | 用途 |
|---|---|
| `/vbusiness/account/getUserInfo` | 读取 `data.userId`，作为后续 `uid` |
| `/recorder-api/suite/pc/record/pullmapping` | 按 `cloudMaxVersion` 拉取映射及变更 |
| `/recorder-api/suite/pc/record/pulldata` | 按 `ids` 和映射版本分批补齐详情 |
| `/recorder-api/suite/pc/record/pushdata` | 提交改名；保留原始 `moduleData` 中未知字段、摘要和文件关联 |
| `/recorder-api/suite/pc/record/totrash` | `opList: [{guid,cloudVersion}]`，`opAll:false` |
| `/recorder-api/suite/pc/record/restore` | 同上，仅恢复指定条目 |
| `/vclouddisk/api/suite/pc/meta/fileInfo.do` | `metaId`、`needPart:true`、`needThumb:false`、`ignoreOperator:true` |
| `/vclouddisk/api/suite/pc/meta/getStsToken.do` | `tokenType:2`，取得短期下载凭据 |

以上均为 POST。录音接口带 `accountregion`、`countrycode`、`syncUri:SDK_RECORD`、`openid`、`token`、`uid`，并带官方 `openId/token/deviceId/source/version/countryCode` 请求头。

真机云接口验证得到的关键兼容规则：

1. `uid` 必须来自账号资料接口的 `userId`；不能替换成登录回调里的 `cloudOpenId`，后者可能返回“成功但没有录音”的结果。
2. `afterCount` 是云端总量，不能当成本次增量长度；没有新变更时可能只返回当前 `cloudMaxVersion` 与仍然非零的 `afterCount`，没有 `dataList`。只有游标未变化时将这种响应作为无变更处理。
3. 真实 `moduleData` 可把基本录音信息放在 `mAudioBean` 内，而非顶层；其他资料在相关 Bean 中，需要保留其原始结构。
4. 样本中的 `/clouddisk-api/api/suite/web/meta/...` 在当前网关返回 404；使用原生引擎的 `/vclouddisk/api/suite/pc/meta/...`。
5. 音频来自 `fileInfo` 返回的官方 HTTPS `clouddisk*.vivo.com.cn` 域名，路径 `/api/file/webdisk/download.do?asMedia=true`。仅发送 `x-yun-ststoken`、`x-yun-openid`、`x-yun-metaid`，不转发账号 token，不跟随重定向。域名、文件大小和校验值都经过检查。

## 本地 API

沿用现有本地 Bearer token；不存在任意上游 URL 或云账号凭据导入接口。

| 方法与路径 | 内容 |
|---|---|
| `GET /api/recordings` | 当前账号缓存列表、上次同步时间、自动同步设置、进行中任务及最近错误 |
| `POST /api/recordings/sync` | 创建增量同步任务 |
| `PATCH /api/recordings/settings` | `{automatic:true或false}` |
| `POST /api/recordings/:id/download` | 创建音频下载任务 |
| `GET /api/recordings/:id/file` | 读取已完成且已校验的本地音频 |
| `POST /api/recordings/:id/rename` | `{name,cloudVersion}` |
| `POST /api/recordings/:id/trash` | `{cloudVersion}` |
| `POST /api/recordings/:id/restore` | `{cloudVersion}` |

修改和下载返回 202 与任务 ID，通过已有 `/api/jobs/:id` 查询、`/api/jobs/:id/cancel` 取消。录音 ID 是不透明摘要，不是本地路径。相关任务 `kind` 为 `record-sync`、`record-download`、`record-rename`、`record-trash`、`record-restore`。云端写入已提交但回读失败时明确提示重新同步检查，不假装已确认成功。

## 验证范围（2026-11-12）

- 当前真实账号：官方资料认证、录音全量拉取、无变更增量拉取成功；一条小音频下载及大小／校验值检查通过。未播放，未执行云端写入，临时音频和索引已删除。
- 73 项后端测试通过，包括分批同步、错误不推进游标、真实账号标识、云端计数兼容、未知字段保留、冲突处理、回收站请求、账号隔离、临时下载凭据、音频校验及本地 HTTP 鉴权。
- Qt 自检覆盖录音标签页的列表、搜索、文字资料、回收站筛选、任务轮询与登录失效后清空旧资料。
- 改名、移入回收站及恢复仅做了模拟云端测试，未在用户的真实录音上执行。

[脱敏验证报告](../evidence/recordings/verification.json)不包含账号标识、录音名称、转写内容或下载凭据。
