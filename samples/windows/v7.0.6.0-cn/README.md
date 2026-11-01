# Windows 原版样本：vivo 互传 7.0.6.0-cn

此目录存放本项目用于静态逆向的 Windows 样本。版本目录按安装包文件版本命名；不要把不同版本覆盖到同一目录。

| 项目 | 样本信息 |
|---|---|
| 产品 | vivo 办公套件 / vivo 互传 PC 客户端 |
| 安装包文件版本 | 7.0.6.0 |
| 安装包文件 | `pcsuite_setup_v7.0.6.0-cn_1792047719920.exe` |
| 应用包版本 | 7.0.6（ASAR 内 package.json） |
| 主程序文件版本 | 7.0.6.0 |
| 主要架构 | x86 / PE32 |
| Electron / Chromium | 22.0.0 / 108.0.5359.62 |
| 安装包 SHA-256 | `9f16c63a85de96cef91464b2f622ee8ac4926ffb9f855dc8213170229b45e2b1` |
| `resources/app.asar` SHA-256 | `35ffb46ab7979ddc5250c66393dd6fb35210739dab4fd125a94462f72a7f96e0` |

## Windows 版本对应关系

样本内嵌 Electron 22。Electron 官方说明 Electron 22 是最后支持 Windows 7、Windows 8 和 Windows 8.1 的主版本；Electron 23 起要求 Windows 10 或更高版本。因此，按运行时版本判断，本样本对应 **Windows 7/8/8.1 及 Windows 10+ 的 Electron 22 兼容线**。这说明运行时的兼容范围，不等同于 vivo 对该产品的正式最低系统要求；仓库没有发现厂商发布的系统要求说明。

安装包与 `pcsuite.exe` 的 PE 头分别标记 Windows 5.0 和 5.1，且均为 PE32。这些头字段只作为构建元数据记录，不能单独据此断定整个 Electron 应用能在 Windows 2000/XP 上运行。样本适用于分析 32 位 Windows 桌面版本；系统版本兼容结论来自其 Electron 22 运行时。

参考：Electron [Windows 7/8/8.1 支持公告](https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice)、[Electron 22.0.0 发布说明](https://www.electronjs.org/blog/electron-22-0)。

## 目录内容

- `pcsuite/`：从该安装包取得的应用目录，含 `resources/app.asar`、Windows 原生组件和随包 APK。
- 安装包：原始下载文件，文件名和内容保持不变。

原始样本为本机分析输入，已由仓库 `.gitignore` 排除；克隆仓库后需自行将同版样本放到本目录。提取产物位于仓库根目录 `analysis/`，索引与结论位于 `evidence/`。
