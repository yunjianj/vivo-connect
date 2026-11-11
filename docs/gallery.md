# 手机图库

连接手机后，客户端先按 Windows 原版通过心跳通道发送 `RE_CONNECT_ALBUM:` 并等待手机授权响应；`auth: 1` 或 `auth: true` 才继续读取。授权失败、超时或断连会明确报错。

连接手机后，在主窗口右侧切换到“手机相册”。支持所有照片、所有视频与手机相册，按时间升序或降序浏览，向下滚动时自动加载更多。使用 Ctrl／Shift 多选。

可将电脑文件拖入相册，确认手机目标目录后加入上传队列；也可将所选照片或视频拖到电脑文件管理器接收。右键提供打开、导出和删除。快捷键：`F5` 刷新，文件列表中的 `Delete` 删除、`Enter` 打开、`Ctrl+A` 全选。拖出依赖 FUSE，目标读取时会等待手机文件接收完成。

- 缩略图按页读取，同时最多请求 4 张；切换相册、翻页或关闭窗口会取消旧请求。缩略图只在当前窗口内存中保留，不生成后台同步任务。
- 双击项目或点击“打开原图／视频”，通过已有文件传输链路接收完整文件，校验后调用电脑默认应用打开。缩略图失败不影响接收原文件；HEIC、视频等原文件能否打开取决于电脑安装的查看器。
- “导出所选”保存到所选电脑目录。同名文件自动加编号，保留已有文件；来自不同手机目录的同名照片分批接收，避免归档重名。接收显示阶段和已传数据量，可取消。
- “导入到手机”选择电脑上的照片／视频，再确认手机目标目录，默认 `DCIM/Camera`。任务进入已有传输队列，可在主界面的“传输记录”中查看；完成后刷新图库。目标目录需要存在，是否及时出现在图库取决于手机媒体扫描。
- “删除所选”会先确认，随后调用已有手机删除接口，检查全部删除结果，再重新读取相册。操作可能无法撤销；部分失败会明确报错。

没有照片和没有访问权限是两种不同状态。手机拒绝请求时显示权限或连接错误，不以空图库代替成功结果。使用原有 USB、局域网或 Wi-Fi Direct 会话，不需要 vivo 远控 PC，也不新增常驻服务。

## Windows 原版依据

本功能参考本地 Windows `v7.0.6.0-cn` 样本的手机文件管理模块，复用近场 HTTPS 连接 token。不同于账号云相册同步，也不同于手机访问电脑的文件站。

| 行为 | 官方调用与字段 |
|---|---|
| 图库授权 | 心跳 WebSocket 发送 `RE_CONNECT_ALBUM:`，接收同前缀 JSON，读取 `auth`；真机返回数字 `1` |
| 相册集合 | `GET /pc_back/album_collect_info`，读取 `data[]` 的 `name`、`keyID`、`bucketIDs`、`count` |
| 相册内容 | `POST /pc_back/album_collect_detail`，传 `list: bucketIDs`、`keyID`、`pageIndex`、`pageNumber`、`sortCondition` |
| 所有照片／视频 | `POST /pc_file_manager/channel`，`type` 为 `REQUEST_POSTS_IMAGELIST` / `REQUEST_POSTS_VIDEOLIST`，照片使用原版默认 `groupBy: 1`，过滤 `isGroup` 日分组标题；视频使用 `groupBy: 0`，逐页读取 |
| 缩略图 | `GET /pc_file_manager/thumb`，参数 `fileUri`、`date`、`type: fileManager` |
| 相册媒体字段 | `data` → 路径、`display_name` → 文件名、`size` → 字节数、`date_modified` → 秒；分类列表使用 `savePath` / `fileName` / `fileSize` / `date` |
| 管理与原文件 | 复用已实现的上传、下载、完成通知和 `delete_info` 删除结果检查 |

静态来源：格式化 bundle 的 [接口模块](../analysis/pretty/app-modules.js#L142)、[缩略图请求](../analysis/pretty/app-modules.js#L5148)、[相册字段映射](../analysis/pretty/app-modules.js#L6864)、[相册详情](../analysis/pretty/190.js#L139)、[分类与时间排序枚举](../analysis/pretty/app-modules.js#L2204)。完整 bundle 位于本地忽略目录；已提取的可复现片段保存在 [图库静态证据](../evidence/gallery/official-reference.txt)。

## 本地 API

均要求本地 Bearer token，`id` 必须为已连接会话。不会向 UI 返回手机 token，也不允许传任意上游 URL。

| 请求 | 参数 / 结果 |
|---|---|
| `GET /api/sessions/:id/gallery/albums` | 返回 `{albums: [{name,keyID,bucketIDs,count}]}` |
| `POST /api/sessions/:id/gallery/list` | `{kind:"photos"或"videos"或"album", pageIndex:0, pageNumber:100, sortCondition:5}`；相册另传 `keyID` 与 `bucketIDs`；排序 4 为最早、5 为最新 |
| 列表结果 | `{items:[{savePath,fileName,fileSize,date,isVideo,isLivePhoto}],pageIndex,hasMore,total}`；`date` 为毫秒，未知大小为 -1、全局总数为 null |
| `POST /api/sessions/:id/gallery/thumbnail` | `{path:"/storage/emulated/0/DCIM/…"}` → `{mime,base64}` |

缩略图最大 2 MiB，检查 PNG/JPEG/WebP 文件头，拒绝重定向；路径限制在手机共享存储并拒绝目录穿越。客户端缩放解码，限制图片尺寸。真机照片接口不支持 `groupBy: 0`（返回 HTTP 404），因此沿用原版日分组并过滤标题行。真机 `totalCount` 是当页媒体数，不能用于判断全局末尾；当页媒体数达到请求页容量时保留下一页，不足时结束。整页恰好为最后一页时，允许再请求一个空页确认。`total` 因无法可靠确定而返回 null。

## 真机验证（2026-11-11）

通过用户授权的 USB 调试建立临时会话，只读检测已通过：

- `RE_CONNECT_ALBUM:` 授权握手返回 `auth: 1`；此前直接读相册返回 `9999`，补齐握手后返回 `0000`。
- 相册集合读取成功，`bucketIDs`、`keyID` 等字段与 Windows 原版一致。
- 照片列表读取前两页，每页 3 张，没有重复；日分组标题已被过滤。照片无分组请求返回 404，采用原版默认日分组后成功。
- 视频列表、相册详情、相册内缩略图和照片缩略图均读取成功，缩略图为 PNG。
- 两页都有 3 个媒体条目，但响应 `totalCount` 均为 3；已修正不能继续翻页的问题。

脱敏结果见[真机接口报告](../evidence/gallery/device-verification.json)，只保留响应字段类型、条数与检测状态，不保存照片内容、文件名、手机路径、序列号或连接凭据。可用 `node tools/probe-gallery.mjs <USB序列号> /tmp/gallery-report.json` 重复只读检测；脚本默认复用用户状态目录中的电脑身份，禁止安装应用，结束后关闭临时会话与转发。状态目录可通过 `VIVO_STATE_DIR` 指定。

67 项后端测试通过，包含新增的授权拒绝与重试、日分组标题过滤、当页总数不能阻止翻页等回归测试。Qt 自检已验证相册映射、分页、多选导出回调、鉴权、缩略图并发限制与切换相册时取消旧请求。

本次未执行真实照片导入、删除或完整原文件下载；手机文件未被修改。真机接口检测通过不代表这些操作已经进行端到端验证。
