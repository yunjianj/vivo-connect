// analysis/pretty/main.js:7883; webpack module 26
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(410)), a = r.__importStar(n(8)), s = n(126), l = r.__importDefault(n(284)), c = r.__importDefault(n(28)), u = n(4), d = n(125), h = n(1), p = n(10);
    class f extends o.default {
        constructor() {
            super(), this.pcsuiteConfig = null, this.iniKeys = [ "PCSuite", "Hardware", "OS" ], 
            this.configName = "config.ini", this.shadowWsize = 1, this.sessionId = null;
        }
        static getInstance() {
            return this.instance || (this.instance = new f), this.instance;
        }
        get mainWindow() {
            return global.__mainWindow || null;
        }
        getConfigIni() {
            try {
                if (this.pcsuiteConfig) return this.pcsuiteConfig;
                const e = h.resolve(i.app.getPath("appData"), "pcsuite/" + this.configName), t = d.parse(u.readFileSync(e, "utf-8")) || {};
                return this.iniKeys.map(e => {
                    this.pcsuiteConfig = Object.assign(Object.assign({}, this.pcsuiteConfig), t[e]);
                }), global.__log.info("getConfigIni: " + JSON.stringify(this.pcsuiteConfig)), this.pcsuiteConfig;
            } catch (e) {
                throw global.__log.error("[framework] getConfigIni error:" + e), e;
            }
        }
        readConfigIniFile() {
            try {
                let e, t = "config.ini";
                const n = h.resolve(i.app.getPath("appData"), "pcsuite/" + t), r = "PCSuite";
                return e = d.parse(u.readFileSync(n, "utf-8")) || {}, global.__log.info("init文件路径：" + JSON.stringify(e)), 
                e[r];
            } catch (e) {
                throw global.__log.error("[framework]win获取ini文件:" + e), e;
            }
        }
        getSysVersion() {
            const {isWin: e} = this.getSysEnv;
            if (!e) {
                const e = process.getSystemVersion();
                return global.__log.info("[mac os version:]" + a.release()), global.__log.info("[mac getSysVersion:]" + e), 
                e;
            }
            try {
                const e = c.default.getOSInfo();
                global.__log.info("DragFile.getOSInfo1:" + e);
                const t = JSON.parse(e);
                return t.os.version;
            } catch (e) {
                return a.version().match(/\d+/);
            }
        }
        getCurrentDisplay(e) {
            const t = n(2).screen, r = e || this.mainWindow;
            let i;
            try {
                if (r) {
                    const e = r.getBounds();
                    return i = t.getDisplayMatching(e) || t.getPrimaryDisplay(), global.__log.info("[framework] getCurrentDisplay: " + JSON.stringify(i)), 
                    i;
                }
                return i = t.getPrimaryDisplay(), global.__log.info("[framework] getCurrentDisplay else: " + JSON.stringify(i)), 
                i;
            } catch (e) {
                return global.__log.error("[framework] getCurrentDisplay catch " + e), t.getPrimaryDisplay();
            }
        }
        getMainWindowCloestDisplayBounds() {
            if (!global.__mainWindow) return;
            const e = n(2).screen, t = global.__mainWindow.getBounds();
            return e.getDisplayMatching(t).workArea;
        }
        isOnMainScreen(e) {
            const t = n(2).screen.getPrimaryDisplay().bounds, r = e.getBounds(), i = r.x >= t.x && r.y >= t.y && r.x + r.width <= t.x + t.width && r.y + r.height <= t.y + t.height;
            return global.__log.info("[framework] isOnMainScreen: " + i), i;
        }
        getDisplayZoomFactor(e) {
            var t;
            const {workAreaSize: {width: n, height: r}} = this.getCurrentDisplay(e);
            global.__log.info(`[displayZoomFactor]width:${n},height:${r}`);
            const i = r - ("darwin" == process.platform && (null === (t = this.mainWindow) || void 0 === t ? void 0 : t.isFullScreen()) ? 80 : 0), o = s.MIN_SIZE.WIDTH > n ? n : s.MIN_SIZE.WIDTH, a = s.MIN_SIZE.HEIGHT > i ? i : s.MIN_SIZE.HEIGHT, l = [ 1, .9, .8, .75, .67, .5, .33, .25 ];
            let c = 1;
            if (i < s.MIN_SIZE.HEIGHT && (c = parseFloat((i / s.MIN_SIZE.HEIGHT).toFixed(2)), 
            c = l.find(e => c > e) || 1), global.__log.info("[displayZoomFactor]zoom:" + c), 
            this.getSysEnv.isWin && this.mainWindow && n > 1920) {
                const e = this.mainWindow.webContents.getZoomFactor();
                global.__log.info("[displayZoomFactor] Do not set scaling, zoom:" + e);
            }
            return {
                zoom: c,
                minWidth: o,
                minHeight: a,
                maxWidth: n,
                maxHeight: i
            };
        }
        getCpuUsage() {
            const e = (100 * process.getCPUUsage().percentCPUUsage).toFixed(2);
            return global.__log.info(`[sys] getCpuUsage:${e}%`), e;
        }
        getMemoryUsage() {
            const e = (process.memoryUsage().rss / a.totalmem() * 100).toFixed(2);
            return global.__log.info(`[sys] getMemoryUsage:${e} %`), e;
        }
        getSuiteMemoryInfo() {
            try {
                const {app: e} = n(2), t = e.getAppMetrics();
                let r = 0;
                t.forEach(e => {
                    e.memory && e.memory.workingSetSize && (r += e.memory.workingSetSize / 2, global.__log.info(`[getSuiteMemoryInfo] process: ${e.pid || e.name}, memory: ${(e.memory.workingSetSize / 1024 / 2).toFixed(2)}MB`));
                });
                const i = a.totalmem(), o = 1024 * r, s = Math.round(o / 1024 / 1024), l = Math.round(i / 1024 / 1024), c = i > 0 ? parseFloat((o / i * 100).toFixed(2)) : 0;
                return global.__log.info(`[getSuiteMemoryInfo] suiteMemory: ${s}MB, totalMemory: ${l}MB, ramPro: ${c}%`), 
                {
                    RAM: s,
                    RAM_pro: c,
                    com_RAM: l
                };
            } catch (e) {
                return global.__log.error("[getSuiteMemoryInfo] error: " + e), {
                    RAM: 0,
                    RAM_pro: 0,
                    com_RAM: 0
                };
            }
        }
        getMirrorProcessMemoryInfo() {
            try {
                const e = n(605).default.getInstance(), t = e.getPrpcessById(), r = e.getChildProcessPids();
                if (!t || 0 === t.length) return global.__log.info("[getMirrorProcessMemoryInfo] no mirror processes found"), 
                {
                    submodule: "投屏",
                    submodule_RAM: 0,
                    submodule_RAM_pro: 0
                };
                const i = [ ...t.map(e => e.pid), ...r ].filter(Boolean);
                global.__log.info("[getMirrorProcessMemoryInfo] total pids: " + JSON.stringify(i)), 
                global.__log.info(`[getMirrorProcessMemoryInfo] main processes: ${t.length}, child processes: ${r.length}`);
                let o = 0;
                if ("darwin" === a.platform()) for (const e of i) try {
                    const t = parseInt(p.execSync(`ps -p ${e} -o rss=`).toString().trim());
                    o += t, global.__log.info(`[getMirrorProcessMemoryInfo] pid=${e}, rss=${t}KB`);
                } catch (t) {
                    global.__log.warn(`[getMirrorProcessMemoryInfo] failed to get memory for pid=${e}: ${t}`);
                } else if ("win32" === a.platform()) try {
                    global.__log.info("[getMirrorProcessMemoryInfo] total pids: " + JSON.stringify(i));
                    for (const e of i) try {
                        const t = p.execSync(`powershell -Command "Get-Process -Id ${e} | Select-Object -ExpandProperty WorkingSet64"`, {
                            encoding: "utf-8"
                        }), n = parseInt(t.trim());
                        if (!isNaN(n) && n > 0) {
                            const t = Math.round(n / 1024);
                            o += t, global.__log.info(`[getMirrorProcessMemoryInfo] pid=${e}, WorkingSet64=${n} bytes = ${t}KB`);
                        } else global.__log.warn(`[getMirrorProcessMemoryInfo] invalid memory value for pid=${e}: ${t}`);
                    } catch (t) {
                        global.__log.warn(`[getMirrorProcessMemoryInfo] failed to get memory for pid=${e}: ${t}`);
                    }
                } catch (e) {
                    global.__log.error("[getMirrorProcessMemoryInfo] failed to get memory on Windows: " + e);
                } else global.__log.warn("[getMirrorProcessMemoryInfo] unsupported platform: " + a.platform());
                const s = Math.round(o / 1024), l = a.totalmem(), c = l > 0 ? parseFloat((1024 * o / l * 100).toFixed(2)) : 0;
                return global.__log.info(`[getMirrorProcessMemoryInfo] totalMirrorMemory: ${s}MB, ramPro: ${c}%`), 
                {
                    submodule: "投屏",
                    submodule_RAM: s,
                    submodule_RAM_pro: c
                };
            } catch (e) {
                return global.__log.error("[getMirrorProcessMemoryInfo] error: " + e), {
                    submodule: "投屏",
                    submodule_RAM: 0,
                    submodule_RAM_pro: 0
                };
            }
        }
        reportMemoryMetrics() {
            try {
                const e = this.getSuiteMemoryInfo(), t = this.getMirrorProcessMemoryInfo(), r = {
                    RAM: e.RAM,
                    RAM_pro: e.RAM_pro,
                    submodule: t.submodule,
                    submodule_RAM: t.submodule_RAM,
                    submodule_RAM_pro: t.submodule_RAM_pro,
                    appstartcode: this.getSessionId()
                }, {COMMON_DATA_ANALYTICS_SINGLE_EVENT: i} = n(236);
                l.default.sendTask({
                    eventId: i.PC_MEMORY_METRICS,
                    params: r
                }), global.__log.info("[reportMemoryMetrics] reported: " + JSON.stringify(r));
            } catch (e) {
                global.__log.error("[reportMemoryMetrics] error: " + e);
            }
        }
        getDiskUsage() {}
        getAppVersion() {
            let e = "";
            return e = i.app.getVersion(), e;
        }
        getHotVersion() {
            const e = n(1434);
            return e ? e.version : "";
        }
        getShadowStyle(e) {
            const t = null == e ? void 0 : e.getSize();
            this.shadowWsize = -this.shadowWsize, setTimeout(() => {
                null == e || e.setSize(t[0] + this.shadowWsize, t[1]);
            }, 50), global.__log.info(" [framework] getShadowStyle");
        }
        getSessionId() {
            if (!this.sessionId) {
                const e = Date.now(), t = Math.floor(1e6 * Math.random());
                this.sessionId = `${e}-${t}`, global.__log.info("[getSessionId] generated new session id: " + this.sessionId);
            }
            return this.sessionId;
        }
    }
    const _ = f.getInstance();
    t.default = _;
}
