# 手机视频、音乐和文档管理

连接手机后，在主窗口切换到“视频”“音乐”或“文档”。使用当前 USB、局域网或 Wi-Fi Direct 会话，不依赖云端账号，不新增常驻服务。

- 相册、视频、音乐和文档可用“图标／列表”切换显示方式，选择会在这些页面间共用并保存。列表显示文件名、大小和修改时间，路径可通过提示查看；视频显示缩略图，缩略图读取失败仍可导出或打开原文件。
- 支持按名称、类型、时间、大小升降序排列，滚动加载更多；读取失败显示错误，可重试当前页，不把失败当作空列表。
- 文档支持全部、PDF、DOC、XLS、PPT、TXT、VCF、IWORK、CAD、PSD、XMIND 和“其他”分类。文件是否收录及所属分类由手机文件管理器决定。
- Ctrl／Shift 多选；“导出所选”接收原文件并保存到电脑目录，同名文件加编号；双击或“打开原文件”接收后交给电脑默认应用打开。音乐、视频播放能力取决于已安装的播放器。
- 拖出或 Ctrl+C 复制到电脑文件管理器，复用现有 FUSE 文件传输；拖入或“导入到手机”加入上传队列。默认目标分别为 `Movies`、`Music`、`Documents`，确认时可修改，目标目录需已存在。上传后可按 F5 刷新，是否立即收录取决于手机媒体扫描。
- 单选后可重命名（F2）或移动到手机其他文件夹，右键也有相同入口。移动使用手机的原地路径操作，不用复制再删除模拟。
- 删除（Delete）先确认，再请求手机删除，检查完整结果后刷新列表。部分失败会提示；操作可能无法撤销。

切换设备或断线时销毁旧页面及其未完成读取，避免显示另一台手机的列表；切换文档分类或排序时取消旧请求，从第一页重新读取。未打开的页面不预先扫描手机。原有“手机相册”保留，并复用重命名、移动等通用操作。

## Windows 官方接口依据

静态样本为本地 Windows `v7.0.6.0-cn`。关键片段保存在[官方接口证据](../evidence/media/official-reference.txt)，可从 `analysis/pretty/app-modules.js` 模块 102、136、95，以及 `analysis/pretty/168.js` 的 `DocView` 复核。

三类均调用 `POST /pc_file_manager/channel`：

| 分类 | type | category | groupBy |
|---|---|---|---|
| 视频 | `REQUEST_POSTS_VIDEOLIST` | 空字符串 | 0 |
| 音乐 | `REQUEST_POSTS_AUDIOLIST` | 空字符串 | 0 |
| 文档 | `REQUEST_POSTS_WEB_DOCSLIST` | `ALL` 或上表文档类型 | 5 |

官方 `AudioView` / `DEFAULT_AUDIO` 没有音乐格式筛选参数，因此音乐页保留原版的全部音乐列表与排序，不添加自定义格式分类。

文档采用官方 `DocView` 的 `DEFAULT_DOC_NEW`，没有把旧版 `REQUEST_POSTS_DOCSLIST` 猜作当前入口。通用字段为 `data:""`、`fileCount:0`、`pageIndex`、`pageNumber`、`sortCondition`；请求沿用已有分类接口的 `firstFlag:false`。排序枚举 0/1 为名称、2/3 为类型、4/5 为时间、6/7 为大小，各自对应升序/降序。

响应读取 `dataList` 的 `savePath`、`fileName`、`fileSize` 和 `date`；按官方列表转换逻辑去除 `isGroup` 分组标题。复用图库已验证的分页策略：满页继续，短页结束，不把手机返回的当页 `totalCount` 当作全局总量。缩略图和管理操作复用[图库接口](gallery.md)与[文件操作](backend.md#浏览发送与接收文件)，不向 UI 公开手机连接凭据。

## 本地 API

`POST /api/sessions/:id/media/list` 要求本地 Bearer token，且会话已连接：

```json
{"kind":"documents","category":"PDF","pageIndex":0,"pageNumber":100,"sortCondition":5}
```

`kind` 为 `videos`、`music` 或 `documents`，`category` 仅用于文档；页容量为 1–200，页码从 0 开始。返回 `{items,pageIndex,hasMore,total}`，项目格式沿用图库。全局总量未知时 `total:null`，大小未知时 `fileSize:-1`。输入不合法在请求手机前拒绝；手机拒绝、响应格式异常和断线均返回错误。

## 验证范围

本次通过 Windows 静态样本还原接口，使用本机模拟手机验证三类请求、全部文档筛选、排序、分页、权限拒绝与错误处理。桌面自检覆盖三页独立请求、多选导出/复制、导入回调、文档筛选、排序、分页重试、重命名/移动及删除确认与取消。未对真实手机执行导入、移动、重命名或删除，也未将模拟验证当作真机兼容性结论。


## 真机只读自检（2026-11-17）

通过已授权 ADB 建立临时 USB 会话，经当前源码后端的本地 API 完成 39 项检查，全部通过：

- 视频、音乐和文档分别读取前两页，每页 3 项，前后页无重复，均能继续分页。
- 三类分别请求名称、类型、时间和大小的全部 8 种排序；对样本中的时间升序、大小升降序额外检查数值顺序。
- 文档 `ALL` 及 11 个细分类别均返回合法列表；空分类也返回成功的空列表，不混同权限失败。
- 从视频列表选取一张缩略图，只在内存中验证 PNG 类型与字节数，不保存或展示图像。
- 检查结束时手机会话仍连接，随后关闭临时后端、心跳和本次 ADB 转发，清理临时状态目录。

脱敏结果见[真机验证报告](../evidence/media/device-verification.json)。报告只保留条目数、分页与成功状态、缩略图类型和大小，不包含文件名、文件路径、手机序列号或连接凭据。本次没有执行上传、原文件下载、移动、重命名或删除，相关写操作仍只有模拟测试覆盖。

可复现检测工具为 `tools/probe-media.mjs`：

```sh
node tools/probe-media.mjs <已授权的USB序列号> /tmp/media-report.json
```

默认使用已安装客户端状态目录中的电脑身份，可用 `VIVO_STATE_DIR` 指定；不安装手机应用。请先退出客户端，避免检测会话与正在使用的连接互相替换。



## 最近文件

主窗口新增“最近文件”页，通过官方 `REQUEST_POSTS_ONE_MOTH_LIST` 读取手机收录的最近文件，不扫描目录或在电脑上自行计算时间范围。该请求名称指向官方月度列表，实际范围及文件收录由手机决定。当前采用官方默认的最新在前排序，不增加未经验证的筛选与其他排序。

沿用图标／列表显示选择；项目显示手机返回的日期分组与文件类型。可打开原文件、导出、复制和拖放，单选后重命名或移动，删除前须确认。导入默认目标为手机 `Download`，最终是否出现在最近列表仍由手机索引决定。删除会删除原文件，不是从历史记录中隐藏。

本地接口为 `POST /api/sessions/:id/media/list`，参数 `kind:"recent"`、`pageIndex`、`pageNumber` 和 `sortCondition:5`。上游沿用 `/pc_file_manager/channel`，固定 `type:"REQUEST_POSTS_ONE_MOTH_LIST"`、`groupBy:1`、`category:""`、`data:""`、`fileCount:0` 及 `firstFlag:false`。

官方响应的 `dataList` 为日期分组数组，每组含 `time` 和按类型分组的 `dataList:{类型:[文件...]}`。后端按原始次序展开，输出 `recentTime`、`recentType` 及 `isDirectory`；分页依据展开后的文件数量判断，不依据日期组数或当页 `totalCount`。异常分组返回错误，不能伪装成空列表；界面按文件路径去重跨页重复条目。

[最近文件官方代码片段](../evidence/media/recent-official-reference.txt)保存了 `RecentFileView` 的嵌套分组转换、默认请求、分页结束判断及日期组的跨页合并逻辑。新增测试覆盖该结构、不同文件类型、分页、重复条目、空组、错误响应和固定排序。桌面自检覆盖最近文件页的日期／类型展示和通用管理操作。当前未对真实手机执行最近文件接口或写操作；已有 39 项真机报告仍仅对应此前视频、音乐和文档功能。`probe-media.mjs` 现包含最近文件前两页的只读检查，供后续真机验证。
