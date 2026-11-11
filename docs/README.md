# 文档索引

## 上手与运行

| 文档 | 适用内容 |
|---|---|
| [后端运行和 API](backend.md) | 安装要求、启动方式、配置、账号登录、设备连接、文件收发与本机 API |
| [手机图库](gallery.md) | PC 浏览手机相册、缩略图、导入导出、删除及 Windows 协议依据 |
| [原生桌面客户端](native-gui.md) | Qt 客户端、Wayland 拖放、依赖、构建、自检和实机验证 |
| [Arch Linux 软件包](../packaging/arch/README.md) | pacman 软件包构建、安装、卸载和桌面图标定制 |

## 技术参考

| 文档 | 适用内容 |
|---|---|
| [官方账号重连协议](official-reconnect.md) | 同账号设备发现、蓝牙挑战、签名建链与自动重连验证 |
| [无线配对](wireless-pairing.md) | UDP 发现、TCP 授权、连接 token、Wi-Fi Direct 和参考实现 |
| [手机连接与文件管理](phone-protocol.md) | USB 启动、版本协商、HTTPS/WSS、手机文件接口和传输流程 |
| [手机访问电脑文件：逆向记录](computer-files-reverse-engineering.md) | 旧 VDFS 与新版随身文件站的协议区别、源码恢复及未完成边界；实现已撤回 |

## 协议与历史资料

| 文档 | 适用内容 |
|---|---|
| [分析范围和架构](architecture.md) | 样本信息、结论等级、进程关系与移植边界 |
| [本机 HTTP 服务](local-services.md) | 9199 / 9200 本地服务、鉴权和路由行为 |
| [本机路由清单](local-routes.md) | 从样本中提取的完整 HTTP 路由表 |
| [HTTP 调用索引](http-index.md) | 调用点、路径和配置候选 |
| [进程通信与同步](ipc-sync.md) | Electron Bridge、子进程 WebSocket 与 SyncService 消息 |
| [Bridge 方法清单](bridge-catalog.md) | 静态可见的主进程导出方法及来源位置 |
| [原生包装接口](native-wrappers.md) | Node 原生模块包装函数与对应源码位置 |

## 移植资料

| 文档 | 适用内容 |
|---|---|
| [跨平台移植计划](porting.md) | 模块边界、实施顺序、验证方法和未解问题 |
| [Windows 样本清单](../samples/windows/v7.0.6.0-cn/README.md) | 样本文件、版本号、校验值与 Windows 运行时兼容线 |

机器可读索引和验证报告位于 [`../evidence/`](../evidence/)；从本机样本生成的完整格式化 bundle 位于被 Git 忽略的 `analysis/`。
