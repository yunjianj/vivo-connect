// analysis/pretty/main.js:9427; webpack module 46
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fixPCFilePath = t.guid = t.isRenderProcess = t.isJsonObject = t.deserializeJson = t.getPlatformSlash = t.getPcDeviceId = t.handleExEnv = t.getNodeOsUserName = t.getInternationalGeoName = t.getCountryCodeByOsLocaleSet = t.fetchAndExtractGzFile = t.getLocalesJson = t.getWindowsDragFullWindow = t.delay = t.getSysVersion = t.getSysVersionByRegistry = t.welcomeWindowIsExist = t.getIniData = t.sendStableIpcMessage = t.removeEmptyKey = t.setLoginOtherSettings = t.setLoginItemSettings = void 0;
    const r = n(0), i = r.__importDefault(n(75)), o = r.__importDefault(n(6)), a = r.__importStar(n(8)), s = n(266), l = r.__importDefault(n(147)), c = n(28), u = r.__importDefault(n(55)), d = n(58), h = l.default.getInstance(), p = r.__importDefault(n(71)), f = n(1435), _ = n(10), m = n(10), g = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT), v = n(1), {app: y} = n(2), E = n(125), b = n(4), w = n(701), S = v.join(y.getPath("exe"), "../");
    w.setExternalVBSLocation(v.join(S, "vbs")), t.setLoginItemSettings = e => {
        global.__log.info("[程序自启动参数]:" + JSON.stringify(e));
        const t = v.basename(process.execPath);
        "number" == typeof e.openAtLogin && (e.openAtLogin = Boolean(e.openAtLogin)), global.__log.info(`[程序${t}自启动]:${e.openAtLogin}typeof ${typeof e.openAtLogin}`), 
        e.openAtLogin ? y.setLoginItemSettings({
            openAtLogin: !0,
            path: process.execPath,
            args: []
        }) : y.setLoginItemSettings({
            openAtLogin: !1,
            path: process.execPath,
            args: []
        });
    };
    t.setLoginOtherSettings = e => {
        global.__log.info("[程序自启动参数]:" + JSON.stringify(e));
        const t = v.dirname(process.execPath), r = v.resolve(t, e.path);
        global.__log.info(`[程序${e.name}自启动]`), e.isSyncSwitch && n(10).exec(`"${r}" ${e.openAtLogin ? "start" : "exit"}`), 
        y.setLoginItemSettings({
            path: `"${r}" start`,
            openAsHidden: !1,
            name: e.name,
            openAtLogin: e.openAtLogin
        });
    };
    t.removeEmptyKey = (e = {}) => {
        let t = {};
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && null != e[n] && (t[n] = e[n]);
        return t;
    }, t.sendStableIpcMessage = (e, t, n) => {
        (null == e ? void 0 : e.isDestroyed()) || null == e || e.send(t, n);
    };
    const T = (e, t) => {
        (t || !0 !== o.default.getItem("aiSearch.authOn")) && o.default.setItem("aiSearch.authOn", !e), 
        (t || void 0 === o.default.getItem("aiSearch.switchOn")) && o.default.setItem("aiSearch.switchOn", !e);
    };
    function A(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!process.env.IS_WEB) {
                const t = n(30);
                try {
                    const n = yield u.default.get(`https://${"in" === e ? "in-" : ""}domaincfg.vivoglobal.com/domain/v3?code=${e.toUpperCase()}&pkg=com.vivo.pcsuite`, {
                        responseType: "arraybuffer",
                        timeout: 3e3
                    });
                    global.__log.info("getCountryCodeByOsLocaleSet fetchAndExtractGzFile request success");
                    const r = yield new Promise((e, r) => {
                        t.gunzip(Buffer.from(n.data), (t, n) => {
                            t ? r(new Error("解压失败: " + t.message)) : e(n);
                        });
                    });
                    let i;
                    try {
                        i = JSON.parse(r.toString("utf8"));
                    } catch (e) {
                        i = r.toString("utf8");
                    }
                    return i;
                } catch (e) {
                    throw global.__log.error("获取动态配置失败:" + e), e;
                }
            }
        });
    }
    t.getIniData = () => r.__awaiter(void 0, void 0, void 0, function*() {
        const e = v.resolve(y.getPath("appData"), "pcsuite/config.ini");
        global.__log.info("windows iniPath:" + e);
        try {
            let t = E.parse(b.readFileSync(e, "utf-8")).PCSuite;
            (null == t ? void 0 : t.BuriedPointConfigure) ? (o.default.setItem("reportSwitch", null == t ? void 0 : t.BuriedPointConfigure), 
            global.__log.info(" find values.BuriedPointConfigure success")) : (global.__log.info("con not find values.BuriedPointConfigure"), 
            g ? o.default.setItem("reportSwitch", 0) : o.default.setItem("reportSwitch", 1)), 
            g || ((e, t) => {
                var n;
                let r = !1, i = !0;
                const a = null !== (n = o.default.getItem("aiSearch.upgradeFlag")) && void 0 !== n ? n : [];
                if ("1" === t && 1 === a.length && "-1" === a[0]) return r = !1, i = !1, void T(r, i);
                if (e) {
                    if (a.length && a[a.length - 1] === e && "1" !== t) return r = "-1" !== e || Number(a[0].split(".")[0]) < 6, 
                    i = !1, void T(r, i);
                    if ("-1" === e || "1" === t) o.default.setItem("aiSearch.upgradeFlag", [ "-1" ]); else {
                        if (a.length) if ("-1" === a[0]) a.shift(); else if (a[a.length - 1].localeCompare(e) > -1) return o.default.setItem("aiSearch.upgradeFlag", [ e ]), 
                        r = Number(a[0].split(".")[0]) < 6, void T(r, i);
                        a.push(e), o.default.setItem("aiSearch.upgradeFlag", a), r = Number(a[0].split(".")[0]) < 6;
                    }
                } else o.default.setItem("aiSearch.upgradeFlag", [ "-1" ]);
                T(r, i);
            })(null == t ? void 0 : t.UpgradeFlag, null == t ? void 0 : t.CoverFlag);
        } catch (e) {
            global.__log.info("read inifo error:" + JSON.stringify(e)), global.__log.info("read inifo error:" + e), 
            g ? o.default.setItem("reportSwitch", 0) : o.default.setItem("reportSwitch", 1);
        }
    }), t.welcomeWindowIsExist = () => !!global.__windows.get("welcome") && (global.__log.info("welcomeWin:Exist"), 
    !0), t.getSysVersionByRegistry = () => {
        let e = parseInt(a.release());
        return new Promise(t => {
            try {
                "win32" == a.platform() ? m.exec('REG QUERY "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion" /v CurrentMajorVersionNumber', (n, r, i) => {
                    if (n) global.__log.info("getSystemVersion reg query err: " + JSON.stringify(n)), 
                    t(e); else {
                        global.__log.info("getSystemVersion reg query stdout: " + r);
                        const n = /^(\S+)\s+(REG_\S+)\s+(.*)$/, i = r.trim().split(/\r?\n/g).map(e => n.exec(e.trim())).filter(e => e).reduce((e, [t, n, r, i]) => Object.assign(e, {
                            [n]: i
                        }), {
                            CurrentMajorVersionNumber: e
                        }), o = i && parseInt(i.CurrentMajorVersionNumber);
                        e = i && o || e, global.__log.info("getSystemVersion reg query CurrentMajorVersionNumber: " + e), 
                        t(e);
                    }
                }) : t(e);
            } catch (n) {
                global.__log.error("getSystemVersion reg error: " + n), t(e);
            }
        });
    }, t.getSysVersion = () => {
        const e = a.platform(), t = parseInt(a.release()), n = a.version();
        if (!("win32" === e)) {
            const e = process.getSystemVersion();
            return global.__log.info("[mac os version:]" + a.release()), global.__log.info("[mac getSysVersion:]" + e), 
            e;
        }
        {
            let e = n.match(/\d+/) || [ 10 ];
            if (!((null == e ? void 0 : e[0]) < 10)) return global.__log.info("[windows win10 getSysVersion:]" + (null == e ? void 0 : e[0])), 
            t;
            try {
                return e = m.execSync("wmic os get Caption").toString().match(/\d+/) || [ 10 ], 
                global.__log.info("[windows win7 getSysVersion:]" + (null == e ? void 0 : e[0])), 
                (null == e ? void 0 : e[0]) || t;
            } catch (e) {
                return global.__log.error("[catch windows win7 getSysVersion:]" + n), t;
            }
        }
    }, t.delay = (e, t) => new Promise((n, r) => {
        const i = setTimeout(() => {
            try {
                const e = t();
                clearTimeout(i), n(e);
            } catch (e) {
                r(e);
            }
        }, e);
    }), t.getWindowsDragFullWindow = () => r.__awaiter(void 0, void 0, void 0, function*() {
        return new Promise((e, t) => {
            try {
                let n = "HKCU\\Control Panel\\Desktop";
                w.list(n, (r, i) => {
                    var o;
                    if (console.log("getWindowsDragFullWindow", r, i), r) global.__log.error("[getWindowsDragFullWindow] error: " + (r.message || r)), 
                    t(r); else {
                        const r = i[n];
                        (null === (o = null == r ? void 0 : r.values) || void 0 === o ? void 0 : o.DragFullWindows) ? (global.__log.info("[getWindowsDragFullWindow] result: " + JSON.stringify(r.values.DragFullWindows)), 
                        e(r.values.DragFullWindows)) : t(n + " DragFullWindows not exist");
                    }
                });
            } catch (e) {
                global.__log.error("[getWindowsDragFullWindow] e: " + (e.message || e)), t(e);
            }
        });
    }), t.getLocalesJson = e => {
        const t = o.default.getItem("currentLanguage") || "en_US", n = v.resolve(y.getAppPath(), `dist/electron/locales/${t}/${e}.json`);
        global.__log.info(`locales module:${e} json path:${n}`);
        try {
            let e = JSON.parse(b.readFileSync(n, "utf8"));
            return global.__log.info("jsonData keyLenght:" + Object.keys(e).length), e;
        } catch (e) {
            return global.__log.error("read locales file error:" + e), null;
        }
    }, t.fetchAndExtractGzFile = A, t.getCountryCodeByOsLocaleSet = () => r.__awaiter(void 0, void 0, void 0, function*() {
        let e = "";
        try {
            if ("darwin" === process.platform) e = y.getLocaleCountryCode() || "CN"; else {
                try {
                    e = c.getUserGeoName(), global.__log.info("dragfile getUserGeoName: " + e);
                } catch (e) {
                    global.__log.error("dragfile getUserGeoName err: " + e);
                }
                if (!e) try {
                    const n = yield t.getInternationalGeoName();
                    global.__log.info("getInternationalGeoName nameObj: " + JSON.stringify(n)), e = n.value || "CN";
                } catch (t) {
                    global.__log.info("getInternationalGeoName error: " + t), e = y.getLocaleCountryCode() || "CN";
                }
            }
            e = e.toLowerCase(), "gb" === e && (e = "uk");
            const n = o.default.getItem("accountCountryCode");
            n && (e = n), "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") && (e = "br"), 
            o.default.setItem("countryCode", e), global.__log.info("getCountryCodeByOsLocaleSet success: " + e);
            let r = "0";
            if ("undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT) {
                let t = null, n = i.default.getCurrentHost(), a = !0;
                global.__log.info("getCountryCodeByOsLocaleSet serverRoomEnv：" + n);
                let l = "";
                if ("prod" === n) try {
                    global.__log.info("getCountryCodeByOsLocaleSet fetchAndExtractGzFile request start");
                    let n = yield A(e);
                    global.__log.info("getCountryCodeByOsLocaleSet fetchAndExtractGzFile response:" + JSON.stringify(n));
                    let i = JSON.parse(n.data);
                    0 === i.length && (a = !1, n = yield A("SG"), global.__log.info("getCountryCodeByOsLocaleSet fetchAndExtractGzFile response:" + JSON.stringify(n)), 
                    i = JSON.parse(n.data));
                    let o = {};
                    if (i.map(e => {
                        o[e.key] = e.value;
                    }), global.__log.info("getCountryCodeByOsLocaleSet fetchAndExtractGzFile keyValueConfig:" + JSON.stringify(o)), 
                    !o["com.vivo.pcsuite_srl"]) throw new Error("该国家码未设置服务器相关信息动态配置");
                    t = {
                        serverRoomLabel: o["com.vivo.pcsuite_srl"],
                        isStrictComp: o["com.vivo.pcsuite_isc"],
                        regionCode: o["com.vivo.pcsuite_rgc"],
                        vivoAccountHost: o["com.vivo.pcsuite_vivoah"],
                        iqooAccountHost: o["com.vivo.pcsuite_iqooah"],
                        gatewayProdHost: o["com.vivo.pcsuite_gwh"],
                        connectCenterProdHost: o["com.vivo.pcsuite_cch"],
                        feelTransProdHost: o["com.vivo.pcsuite_fth"],
                        vpushProdHost: o["com.vivo.pcsuite_vph"],
                        vnoteCopilotProdHost: o["com.vivo.pcsuite_cph"],
                        vnoteAsrProdHost: o["com.vivo.pcsuite_asrh"],
                        vnoteOcrProdHost: o["com.vivo.pcsuite_ocrh"],
                        modelAPIHost: o["com.vivo.pcsuite_clawm"],
                        creditsHost: o["com.vivo.pcsuite_clawc"],
                        xiaovChannelHost: o["com.vivo.pcsuite_clawv"],
                        xiaovVFSHost: o["com.vivo.pcsuite_clawvfs"]
                    }, l = t.regionCode, r = "1";
                } catch (n) {
                    global.__log.error("getCountryCodeByOsLocaleSet fetchAndExtractGzFile request error:" + JSON.stringify(n)), 
                    t = s.serverRoomMap.filter(t => -1 !== t.countryCodes.indexOf(e))[0] || null;
                } else t = s.serverRoomMap.filter(t => -1 !== t.countryCodes.indexOf(e))[0] || null;
                t || (a = !1, t = s.serverRoomMap.filter(e => -1 !== e.countryCodes.indexOf("sg"))[0] || null), 
                global.__log.info("getCountryCodeByOsLocaleSet serverRoom: " + JSON.stringify(t)), 
                l || (Object.entries(t.regionCodes || {}).forEach(([t, n]) => {
                    n && -1 !== n.indexOf(e) && (l = t);
                }), l || (l = a ? e : "sg")), global.__log.info("getCountryCodeByOsLocaleSet regionCode：" + l), 
                o.default.setItem("serverRoomLabel", t.serverRoomLabel), o.default.setItem("isStrictComp", "boolean" == typeof t.isStrictComp ? !!t.isStrictComp : "true" === t.isStrictComp), 
                o.default.setItem("regionCode", l), o.default.setItem("vivoAccountHost", t.vivoAccountHost), 
                o.default.setItem("iqooAccountHost", t.iqooAccountHost), o.default.setItem("isSupportIqoo", !!t.iqooAccountHost), 
                o.default.setItem("gatewayHost", t.gatewayProdHost), o.default.setItem("connectCenterHost", t.connectCenterProdHost), 
                o.default.setItem("feelTransHost", t.feelTransProdHost), o.default.setItem("vpushHost", t.vpushProdHost), 
                o.default.setItem("vnoteCopilotHost", t.vnoteCopilotProdHost || ""), o.default.setItem("vnoteAsrHost", t.vnoteAsrProdHost || ""), 
                o.default.setItem("vnoteOcrHost", t.vnoteOcrProdHost || ""), o.default.setItem("modelAPIHost", t.modelAPIHost || ""), 
                o.default.setItem("creditsHost", t.creditsHost || ""), o.default.setItem("xiaovChannelHost", t.xiaovChannelHost || ""), 
                o.default.setItem("xiaovVFSHost", t.xiaovVFSHost || ""), h.broadcastAppServerRoom();
            }
            return global.__log.info("get isUseDynamicConfig:" + o.default.getItem("isUseDynamicConfig")), 
            o.default.setItem("isUseDynamicConfig", r), i.default.reSetUrl(r), e;
        } catch (e) {
            return global.__log.info("getCountryCodeByOsLocaleSet error: " + e), "CN";
        }
    }), t.getInternationalGeoName = () => r.__awaiter(void 0, void 0, void 0, function*() {
        return new Promise((e, t) => {
            try {
                let n = "HKCU\\Control Panel\\International\\Geo";
                w.list(n, (r, i) => {
                    var o;
                    if (console.log("InternationalGeo", r, i), r) global.__log.error("[getInternationalGeoName] error: " + (r.message || r)), 
                    t(r); else {
                        const r = i[n];
                        (null === (o = null == r ? void 0 : r.values) || void 0 === o ? void 0 : o.Name) ? (global.__log.info("[InternationalGeoName] result: " + JSON.stringify(r.values.Name)), 
                        e(r.values.Name)) : t(n + " InternationalGeoName not exist");
                    }
                });
            } catch (e) {
                global.__log.error("[getInternationalGeoName] e: " + (e.message || e)), t(e);
            }
        });
    }), t.getNodeOsUserName = () => r.__awaiter(void 0, void 0, void 0, function*() {
        if ("darwin" != process.platform) return new Promise((e, t) => {
            try {
                let n = "HKLM\\SOFTWARE\\WOW6432Node\\pcsuite";
                w.list(n, (r, i) => {
                    var o, a;
                    if (console.log("[pcsuite-OsUserName-AppData]", r, i), r) global.__log.error("[pcsuite-OsUserName-AppData] error: " + (r.message || r)), 
                    t(r); else {
                        const r = i[n];
                        (null === (o = null == r ? void 0 : r.values) || void 0 === o ? void 0 : o.OsUserName) || (null === (a = null == r ? void 0 : r.values) || void 0 === a ? void 0 : a.AppData) ? (global.__log.info(`[pcsuite-OsUserName-AppData] OsUserName: ${JSON.stringify(r.values.OsUserName)}, AppData: ${JSON.stringify(r.values.AppData)}`), 
                        e(r.values.OsUserName)) : (global.__log.error(`[pcsuite-OsUserName-AppData] ${n} not exist`), 
                        t(`[pcsuite-OsUserName-AppData] ${n} not exist`));
                    }
                });
            } catch (e) {
                global.__log.error("[pcsuite-OsUserName-AppData] e: " + (e.message || e)), t(e);
            }
        });
    }), t.handleExEnv = () => {
        var e;
        (null !== (e = o.default.getItem("isExport")) && void 0 !== e && e) !== g && (o.default.removeItem("moduleSort"), 
        o.default.setItem("isExport", g), g || (o.default.setItem("currentLanguage", "zh_CN"), 
        o.default.setItem("vLang", "vzh_rCN"), o.default.setItem("isRtl", !1)));
    }, t.getPcDeviceId = function() {
        let e = o.default.getItem("newDeviceId");
        if (!e) {
            try {
                if (e = f.machineIdSync(), "win32" === process.platform) try {
                    process.env.PATH += `;${process.env.SystemRoot}\\System32\\wbem`;
                    const t = _.execSync("wmic csproduct get UUID", {
                        windowsHide: !0,
                        encoding: "utf-8"
                    });
                    let n = (t.split("\r\r\n")[1] || "").trim();
                    if (!/^[0-9A-F]{32}$/i.test(n.replace(/-/g, ""))) {
                        const e = t.match(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i) || t.match(/[0-9A-F]{32}/i);
                        if (!e) throw new Error("WMIC UUID not found in output");
                        n = e[0];
                    }
                    e += n;
                } catch (t) {
                    try {
                        const t = process.env.SystemRoot + ("ia32" === process.arch ? "\\Sysnative" : "\\System32") + "\\WindowsPowerShell\\v1.0\\powershell.exe", n = _.execSync(`"${t}" -Command "(Get-WmiObject Win32_ComputerSystemProduct).UUID"`, {
                            windowsHide: !0,
                            encoding: "utf-8"
                        });
                        let r = n.trim();
                        if (!/^[0-9A-F]{32}$/i.test(r.replace(/-/g, ""))) {
                            const e = n.match(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i) || n.match(/[0-9A-F]{32}/i);
                            if (!e) throw new Error("PowerShell UUID not found in output");
                            r = e[0];
                        }
                        e += r;
                    } catch (t) {
                        e = p.default();
                    }
                } else {
                    e += _.execSync("ioreg -l | grep IOPlatformSerialNumber | awk -F\\\" '/IOPlatformSerialNumber/{print $(NF-1)}'").toString().trim();
                }
            } catch (t) {
                global.__log.error("machineIdSync init error:" + t), e = p.default(), global.__log.error("cuid init success :" + e);
            }
            o.default.getItem("deviceId") || o.default.setItem("deviceId", e), o.default.setItem("newDeviceId", e);
        }
        return e;
    }, t.getPlatformSlash = () => "win32" === process.platform ? "\\" : "/", t.deserializeJson = e => {
        let n = e;
        for (;!t.isJsonObject(n); ) try {
            n = JSON.parse(n);
        } catch (e) {
            try {
                n = t.deserializeJson(JSON.parse(n));
            } catch (e) {
                throw new Error("Invalid JSON string");
            }
        }
        return n;
    }, t.isJsonObject = e => "string" != typeof e && ("object" == typeof e && "[object Object]" === Object.prototype.toString.call(e)), 
    t.isRenderProcess = () => "renderer" === process.type, t.guid = function() {
        return d.v4().replace(/-/g, "");
    }, t.fixPCFilePath = function(e) {
        return "win32" !== a.platform() ? e : e && e.replaceAll("\\", "/");
    };
}
