// analysis/pretty/main.js:73348; webpack module 803
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.verifyFileHash = t.selectTargetFile = t.parseYamlResponse = t.fetchVersionInfo = t.deleteDirectory = t.installWindowsInstaller = t.extractZip = t.getVClawInstallPaths = t.getVClawPlatformConfig = t.getMacArch = t.getAppIsInstalled = void 0;
    const r = n(0), i = r.__importStar(n(4)), o = r.__importStar(n(1)), a = r.__importStar(n(7)), s = n(10), l = r.__importDefault(n(28)), c = n(2), u = r.__importDefault(n(55)), d = r.__importDefault(n(75));
    function h() {
        return "arm64" === process.arch ? "arm64" : "x64";
    }
    function p() {
        const e = process.platform, {gatewayFeedbackServer: t} = d.default.currentRuntimeConfig;
        if ("darwin" === e) {
            const e = h();
            return {
                feedUrl: `${t}/apply/latest-mac.yml?appName=VClaw&platform=mac&arch=${e}`,
                fileName: `vclaw-mac-${e}.zip`,
                installPath: o.resolve(o.dirname(c.app.getPath("exe")), "../", "Resources/VClaw")
            };
        }
        if ("win32" === e) return {
            feedUrl: t + "/apply/latest.yml?appName=VClaw&platform=win&arch=x64",
            fileName: "vclaw-win-installer.exe",
            installPath: o.resolve(o.dirname(c.app.getPath("exe")), "./VClaw")
        };
        throw new Error("Unsupported platform: " + e);
    }
    function f(e) {
        global.__log.info("[VClawInstaller] 解析 YAML 格式响应");
        const t = e.split("\n"), n = {
            files: []
        };
        let r = null, i = !1;
        for (const e of t) {
            const t = e.trim();
            if (!t) continue;
            const [o, ...a] = t.split(":"), s = o.trim(), l = a.join(":").trim().replace(/^"|"$/g, "");
            "files" !== s ? i ? "url" === s && r ? r.url = l : "sha512" === s && r ? r.sha512 = l : "size" === s && r && (r.size = parseInt(l, 10), 
            i = !1, (r.url || r.size > 0) && n.files.push(r), r = null) : "version" === s ? n.version = l : "path" === s ? n.path = l : "sha512" === s ? n.sha512 = l : "releaseDate" !== s && "releaseData" !== s || (n.releaseDate = l.replace(/'/g, "")) : (i = !0, 
            r = {
                url: "",
                size: 0,
                sha512: ""
            });
        }
        return r && (r.url || Number(r.size) > 0) && n.files.push(r), global.__log.info("[VClawInstaller] 解析结果: " + JSON.stringify(n)), 
        n;
    }
    t.getAppIsInstalled = function() {
        let e = c.app.getPath("appData");
        const t = o.join(e, "VClaw/settings.json");
        return global.__log.info("[VClawInstaller] getAppIsInstalled " + t), i.existsSync(t) ? (global.__log.info("[VClawInstaller] getAppIsInstalled true"), 
        !0) : (global.__log.info("[VClawInstaller] getAppIsInstalled false"), !1);
    }, t.getMacArch = h, t.getVClawPlatformConfig = p, t.getVClawInstallPaths = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = p();
            return {
                config: e,
                downloadPath: o.join(c.app.getPath("temp"), e.fileName)
            };
        });
    }, t.extractZip = function(e, t, n) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (null == n ? void 0 : n.aborted) throw new Error("解压已取消");
            (yield i.promises.access(t).then(() => !0).catch(() => !1)) || (yield i.promises.mkdir(t, {
                recursive: !0
            })), yield new Promise((r, i) => {
                const o = s.spawn("unzip", [ "-q", "-o", e, "-d", t ]), a = () => {
                    o.kill("SIGTERM"), i(new Error("解压已取消"));
                };
                n && n.addEventListener("abort", a, {
                    once: !0
                }), o.on("close", e => {
                    n && n.removeEventListener("abort", a), 0 === e ? r() : i(new Error("解压失败，退出码: " + e));
                }), o.on("error", e => {
                    n && n.removeEventListener("abort", a), i(e);
                });
            });
        });
    }, t.installWindowsInstaller = function(e, t, n) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (global.__log.info("[VClawInstaller] Windows 安装"), null == n ? void 0 : n.aborted) throw new Error("安装已取消");
            const o = [ "/S", "/D=" + t ];
            global.__log.info(`[VClawInstaller] 执行安装程序: ${e} ${o.join(" ")}`), yield new Promise((t, i) => {
                const a = s.spawn(e, o, {
                    windowsHide: !0,
                    shell: !0
                }), c = () => {
                    global.__log.info("[VClawInstaller] 取消 Windows 安装"), a.kill("SIGTERM"), i(new Error("安装已取消"));
                };
                n && n.addEventListener("abort", c, {
                    once: !0
                }), a.on("close", a => r.__awaiter(this, void 0, void 0, function*() {
                    if (n && n.removeEventListener("abort", c), global.__log.info("[VClawInstaller] Windows 安装程序退出，退出码: " + a), 
                    0 === a) t(); else if (1 === a) {
                        global.__log.info("[VClawInstaller] spawn 安装失败(退出码 1)，fallback 到 DragFile.launch 方式");
                        const n = {
                            cmd: e,
                            params: o
                        };
                        global.__log.info("[VClawInstaller] DragFile.launch", JSON.stringify(n));
                        const r = l.default.launch(JSON.stringify(n));
                        global.__log.info("[VClawInstaller] DragFile.launch result: " + r), r ? t() : i(new Error("DragFile.launch 启动失败"));
                    } else i(new Error("安装失败，退出码: " + a));
                })), a.on("error", e => {
                    n && n.removeEventListener("abort", c), global.__log.error("[VClawInstaller] Windows 安装进程错误: " + e), 
                    i(e);
                });
            }), global.__log.info("[VClawInstaller] 验证安装目录: " + t);
            if (!(yield i.promises.access(t).then(() => !0).catch(() => !1))) {
                const e = "安装失败：目标目录不存在 " + t;
                throw global.__log.error("[VClawInstaller] " + e), new Error(e);
            }
            try {
                const e = yield i.promises.readdir(t);
                if (global.__log.info("[VClawInstaller] 目标目录内容: " + e.join(", ")), 0 === e.length) {
                    const e = "安装失败：目标目录为空 " + t;
                    throw global.__log.error("[VClawInstaller] " + e), new Error(e);
                }
            } catch (e) {
                throw global.__log.error("[VClawInstaller] 检查目录内容失败: " + e), new Error("检查目录内容失败: " + e);
            }
            global.__log.info("[VClawInstaller] 安装验证成功");
        });
    }, t.deleteDirectory = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            i.existsSync(e) && (yield i.promises.rm(e, {
                recursive: !0,
                force: !0
            }));
        });
    }, t.fetchVersionInfo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[VClawInstaller] 请求版本信息: " + e);
            return f((yield u.default.get(e, {
                timeout: 3e4
            })).data);
        });
    }, t.parseYamlResponse = f, t.selectTargetFile = function(e) {
        var t;
        const n = process.platform, r = process.arch, i = "win32" === n ? ".exe" : ".zip", o = "arm64" === r ? /arm64/ : /x64|x86_64/;
        global.__log.info(`[VClawInstaller] 选择目标文件, 平台: ${n}, 架构: ${r}`);
        for (const t of e) if (t.url.includes(i) && o.test(t.url)) return global.__log.info("[VClawInstaller] 选中文件: " + t.url), 
        t;
        return global.__log.warn("[VClawInstaller] 未匹配到合适的文件，使用第一个: " + (null === (t = e[0]) || void 0 === t ? void 0 : t.url)), 
        e[0] || null;
    }, t.verifyFileHash = function(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            return new Promise((n, o) => {
                (() => {
                    r.__awaiter(this, void 0, void 0, function*() {
                        try {
                            const r = yield i.promises.stat(e);
                            global.__log.info(`[VClawInstaller] 开始校验文件哈希, 文件路径: ${e}, 文件大小: ${r.size} bytes`);
                            const s = a.createHash("sha512"), l = i.createReadStream(e);
                            l.on("data", e => s.update(e)), l.on("end", () => {
                                const r = /^[0-9a-fA-F]{128}$/.test(t), a = r ? s.digest("hex") : s.digest("base64");
                                global.__log.info(`[VClawInstaller] 哈希值计算完成, 期望格式: ${r ? "hex" : "base64"}, 计算格式: ${r ? "hex" : "base64"}`), 
                                a !== t ? (global.__log.error("[VClawInstaller] 文件校验失败"), global.__log.error("[VClawInstaller] 期望哈希: " + t), 
                                global.__log.error("[VClawInstaller] 实际哈希: " + a), i.promises.unlink(e).catch(() => {}), 
                                o(new Error("文件校验失败"))) : (global.__log.info("[VClawInstaller] 文件校验成功"), n());
                            }), l.on("error", e => {
                                global.__log.error("[VClawInstaller] 读取文件时出错: " + e), o(e);
                            });
                        } catch (e) {
                            global.__log.error("[VClawInstaller] 获取文件状态时出错: " + e), o(e);
                        }
                    });
                })();
            });
        });
    };
}
