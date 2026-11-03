// analysis/pretty/main.js:19221; webpack module 148
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(1)), a = n(10), s = r.__importDefault(n(4)), l = r.__importDefault(n(604)), c = n(41), u = r.__importDefault(n(6)), d = r.__importDefault(n(26)), h = r.__importDefault(n(161)), p = n(46), f = r.__importDefault(n(28)), {isMac: _, isMacVersionGE13: m, isWin: g, isWin11: v} = d.default.getSysEnv;
    class y extends h.default {
        constructor() {
            super([ c.LogModule.FRAMEWORK, "OsManager" ]), this.appId = "com.vivo.pcsuite";
        }
        static getInstance() {
            return y.instance || (y.instance = new y), y.instance;
        }
        get isMacAutoLaunch() {
            return u.default.getItem("isMacAutoLaunch") || !1;
        }
        set isMacAutoLaunch(e) {
            u.default.setItem("isMacAutoLaunch", e);
        }
        openNotificationSetting() {
            console.log("怎么个事");
            const e = _ ? `open "x-apple.systempreferences:com.apple.preference.notifications?bundleId=${this.appId}"` : "start ms-settings:notifications";
            this.execCommand(e);
        }
        openPrivacySetting() {
            const e = _ ? 'open "x-apple.systempreferences:com.apple.preference.security"' : "start ms-settings:privacy";
            this.execCommand(e);
        }
        openProjectionSetting() {
            this.execCommand("start ms-settings:project");
        }
        openDisplaySetting() {
            const e = _ ? 'open "x-apple.systempreferences:com.apple.preference.displays"' : "start ms-settings:display";
            this.execCommand(e);
        }
        openPrivacySecuritySetting() {
            const e = _ ? 'open "x-apple.systempreferences:com.apple.preference.security?Privacy"' : "";
            this.execCommand(e);
        }
        openLoginItemsExtensionSetting() {
            const e = _ ? 'open "x-apple.systempreferences:com.apple.LoginItems-Settings.extension"' : "";
            this.execCommand(e);
        }
        openPcRenameSetting() {
            const e = _ ? m ? 'open "x-apple.systempreferences:com.apple.SystemProfiler.AboutExtension"' : 'open "x-apple.systempreferences:com.apple.preferences.sharing?Services_PersonalFileSharing"' : v ? "start ms-settings:" : "start ms-settings:about";
            this.execCommand(e);
        }
        execCommand(e) {
            e && a.exec("" + e, (e, t) => {
                e ? this.log.error("execCommand:" + e) : this.log.info("execCommand success", t);
            });
        }
        openSystemSettingPanel(e) {
            switch (e.panel) {
              case "notify":
                this.openNotificationSetting();
                break;

              case "privacy":
                this.openPrivacySetting();
            }
        }
        getSystemVersion() {
            const e = d.default.getSysVersion();
            return this.log.info("getSystemVersion: " + e), e;
        }
        initAppLaunch() {
            u.default.getItem("initAppLaunchFlag") ? this.checkOldAppLaunchByWin() : (this.getAutoStart() && (this.log.info("app reset appLaunch"), 
            this.removeOldAppLaunch(), this.setAutoStart(!0)), u.default.setItem("initAppLaunchFlag", !0));
        }
        checkOldAppLaunchByWin() {
            if (_) return;
            const {openAtLogin: e} = i.app.getLoginItemSettings();
            this.log.info("checkOldAppLaunchByWin getAutoStart:", e), e && (this.log.info("checkOldAppLaunchByWin reset appLaunch"), 
            this.removeOldAppLaunch(), this.setAutoStart(!0));
        }
        removeOldAppLaunch() {
            const {openAtLogin: e} = i.app.getLoginItemSettings();
            this.log.info("old getAutoStart:", e), e && (this.log.info("app remove old appLaunch"), 
            i.app.setLoginItemSettings({
                openAtLogin: !1,
                path: process.execPath,
                args: []
            }));
        }
        getAutoStart() {
            if (!u.default.getItem("initAppLaunchFlag")) {
                const {openAtLogin: e} = i.app.getLoginItemSettings();
                return this.log.info("old getAutoStart:", e), e;
            }
            const {openAtLogin: e} = i.app.getLoginItemSettings({
                args: [ "--openAsHidden" ]
            });
            return this.log.info("new getAutoStart:", e), e;
        }
        setAutoStart(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.log.info("setAutoStart:" + e), i.app.setLoginItemSettings({
                    openAsHidden: !0,
                    openAtLogin: e,
                    path: process.execPath,
                    args: [ "--openAsHidden" ]
                });
            });
        }
        isSupportHiddenAutoStart() {
            if (g) return !1;
            {
                const e = !1;
                return this.log.info("mac checkSupportHiddenAutoStart: " + e), e;
            }
        }
        isAutoLaunch() {
            return r.__awaiter(this, void 0, void 0, function*() {
                let e = !1;
                if (g) e = process.argv.indexOf("--openAsHidden") > 0; else {
                    const t = yield this.isMacLauncher();
                    e = i.app.getLoginItemSettings().wasOpenedAsHidden || t, this.log.info("isMacAutoLaunch", t);
                }
                return this.log.info("isAutoLaunch:", e), this.log.info("wasOpenedAsHidden:", i.app.getLoginItemSettings().wasOpenedAsHidden), 
                this.log.info("process.arg", process.argv), e;
            });
        }
        setMacAutoLaunchFlag() {
            this.log.info("setMacAutoLaunchFlag"), this.isMacAutoLaunch = !0;
        }
        isMacLauncher() {
            return new Promise(e => {
                try {
                    s.default.readFile(o.default.join("/Library/Preferences/pcsuite", "launcher.json"), "utf8", (t, n) => {
                        if (t) return this.log.error("读取文件时发生错误:", t), void e(!1);
                        if ("" === n.trim()) return this.log.info("JSON文件为空"), void e(!1);
                        const r = JSON.parse(n);
                        if (r.isMacAutoLaunch) {
                            r.isMacAutoLaunch = !1;
                            const t = JSON.stringify(r, null, 2);
                            s.default.writeFile(o.default.join("/Library/Preferences/pcsuite", "launcher.json"), t, "utf8", e => {
                                e ? this.log.error("isMacLauncher set config error:", e) : this.log.info("isMacLauncher:true");
                            }), e(!0);
                        } else this.log.info("don‘t launcher"), e(!1);
                    });
                } catch (t) {
                    this.log.error("isMacLauncher error:", t), e(!1);
                }
            });
        }
        getSystemAndHardwareInfo() {
            const {execSync: e} = n(10);
            let t, r, o, a, s;
            try {
                if (_) t = "Apple", r = e("sysctl hw.model").toString().split(":")[1].trim(), o = e("system_profiler SPDisplaysDataType | grep Chipset").toString().split(":")[1].trim(), 
                a = d.default.getSysVersion(); else {
                    const e = f.default.getOSInfo();
                    global.__log.info("DragFile.getOSInfo2:" + e);
                    const n = JSON.parse(e), i = n.hardware, l = n.os;
                    t = null == i ? void 0 : i.brandName, r = null == i ? void 0 : i.model, o = null == i ? void 0 : i.graphics, 
                    a = null == l ? void 0 : l.version, s = null == l ? void 0 : l.type;
                }
            } catch (e) {
                this.log.error(e);
            }
            const {workAreaSize: {width: l, height: c}, scaleFactor: h} = i.screen.getPrimaryDisplay();
            u.default.setItem("hardwareInfo", {
                brand: t,
                model: r,
                chipset: o,
                workAreaSize: `${l} x ${c}`,
                scaleFactor: h,
                systemVersion: a,
                type: s
            }), u.default.setItem("systemVersion", a), this.log.info(`电脑品牌：${t}, 电脑型号：${r}, 显卡信息：${o}, 屏幕分辨率：${l} x ${c}, 屏幕缩放比：${h}, 系统版本： ${a}`);
        }
        initGpuInfo() {
            try {
                const e = n(125), t = o.default.resolve(i.app.getPath("appData"), "pcsuite/log/mirrorscreen_log/cfg/MirrorCheckResult.ini");
                let r = u.default.getItem("firstReadLauncherIni") || null;
                if (this.log.info("read firstReadLauncherIni: " + r), r) return void this.log.info("has read launcherIni: " + r);
                if (s.default.existsSync(t)) {
                    const n = e.parse(s.default.readFileSync(t, "utf-8"));
                    let r = n.decode.h264BP, i = n.decode.h264HP, o = n.decode.h264MP, a = n.decode.hevc;
                    this.log.info("read mirror.ini res:" + n), this.log.info(`h264BP:${r} and h264HP:${i} and h264MP:${o} and hevc:${a}`), 
                    r || i || o || a ? u.default.setItem("openHardwareAcceleration", 1) : u.default.setItem("openHardwareAcceleration", 0), 
                    u.default.setItem("firstReadLauncherIni", !0), this.log.info("set storage openHardwareAcceleration success");
                } else this.log.error("find iniPath error: " + t);
            } catch (e) {
                this.log.info("read mirror error:" + e);
            }
        }
        getPcName() {
            const e = u.default.getItem("pcName") || "";
            let t = "";
            if (_) {
                const {execSync: e} = n(10);
                t = e("scutil --get ComputerName").toString().trim();
            } else {
                const r = n(8);
                t = process.env.COMPUTERNAME || r.hostname(), t !== e && p.delay(3e3, () => {
                    var e;
                    null === (e = global.__mainWindow) || void 0 === e || e.webContents.send("pcName-changed");
                });
            }
            e && e === t || u.default.setItem("pcName", t), this.monitorPcName();
        }
        monitorPcName() {
            if (_) {
                let e = "", t = "";
                l.default.watch("/Library/Preferences/SystemConfiguration/preferences.plist", {
                    persistent: !0,
                    atomic: !0,
                    usePolling: !0,
                    interval: 600
                }).on("all", () => {
                    var r;
                    t = u.default.getItem("pcName") || "";
                    const {execSync: i} = n(10);
                    e = i("scutil --get ComputerName").toString().trim(), e !== t && (u.default.setItem("pcName", e), 
                    null === (r = global.__mainWindow) || void 0 === r || r.webContents.send("pcName-changed", e)), 
                    this.log.error(`pcName-changed: ${e}, ${t}`);
                });
            }
        }
    }
    t.default = y.getInstance();
}
