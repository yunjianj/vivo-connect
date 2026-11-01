// analysis/pretty/main.js:42828; webpack module 410
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getMobileDesktopModeListener = t.MobileDesktopModeListener = void 0;
    const r = n(0).__importDefault(n(6));
    class i {
        constructor() {
            this.ua = process.env.IS_WEB ? navigator.userAgent.toLowerCase() : "", this.isTouchDevice = "undefined" != typeof window && "ontouchstart" in window || "undefined" != typeof window && navigator.maxTouchPoints > 0, 
            this.isMobileWebOptimized = this.computeIsMobileWebOptimized(), this.isMobileDesktopMode = this.computeIsMobileDesktopMode(), 
            this.systemVersion = null, this.sysEnvCache = null, this.ipadSizeNumber = 834, this.phoneSizeNumber = 600;
        }
        openFolderByWin(e) {
            if (!process.env.IS_WEB) {
                const t = e.replace(/\\\\/g, "\\").replace(/\\|\//g, "\\"), {exec: r} = n(10);
                r("start explorer " + t, (e, t, n) => {
                    e ? console.error("open file filePath err: " + e) : console.info("open file filePath success");
                });
            }
        }
        openFolderByMac(e) {
            if (!process.env.IS_WEB) {
                const {shell: t} = n(2);
                t.showItemInFolder(e);
            }
        }
        isFileExist(e) {
            if (!process.env.IS_WEB) {
                const t = n(4);
                return e && t.existsSync(e);
            }
            return !1;
        }
        get getSysEnv() {
            return this.sysEnvCache || (this.sysEnvCache = this.initSysEnv()), Object.assign({
                isIpadSize: null != process.env.IS_WEB && "undefined" != typeof window && window.screen.width > this.ipadSizeNumber,
                isFoldablePhoneSize: null != process.env.IS_WEB && "undefined" != typeof window && window.screen.width < this.ipadSizeNumber && window.screen.width > this.phoneSizeNumber,
                isPhoneSize: null != process.env.IS_WEB && "undefined" != typeof window && window.screen.width < this.phoneSizeNumber
            }, this.sysEnvCache);
        }
        get systemVersion_() {
            return null === this.systemVersion && (this.systemVersion = r.default.getItem("systemVersion")), 
            this.systemVersion ? parseInt(this.systemVersion) : NaN;
        }
        get systemVersionRaw() {
            return null === this.systemVersion && (this.systemVersion = r.default.getItem("systemVersion")), 
            "string" == typeof this.systemVersion ? this.systemVersion : this.systemVersion ? String(this.systemVersion) : "";
        }
        initSysEnv() {
            return {
                isWin: "win32" == process.platform,
                isMac: "darwin" == process.platform,
                isWeb: null != process.env.IS_WEB,
                isPc: !process.env.IS_WEB,
                isSafari: /safari/.test(this.ua) && !/chrome/.test(this.ua),
                isFirefox: /firefox/.test(this.ua),
                isQQbrowser: /qqbrowser/.test(this.ua),
                isChrome: /chrome/.test(this.ua) && /safari/.test(this.ua),
                isEdg: /edg/.test(this.ua),
                isVivoBrowser: /vivobrowser/.test(this.ua),
                isMacWeb: null != process.env.IS_WEB && /macintosh|mac os x/.test(this.ua),
                isWinWeb: null != process.env.IS_WEB && /win32|wow32|win64|wow64/.test(this.ua),
                isPrd: !0,
                isDev: !1,
                isWin7: !process.env.IS_WEB && "win32" == process.platform && this.systemVersion_ <= 7,
                isWin8: !process.env.IS_WEB && "win32" == process.platform && 8 === this.systemVersion_,
                isLessThanWin10: !process.env.IS_WEB && "win32" == process.platform && this.systemVersion_ < 10,
                isWin11: this.isWin11,
                isMacVersionGE13: this.isMacVersionGE13,
                isMacVersionGE15: this.isMacVersionGE15,
                isMobile: /android|iphone|ipod|ipad|blackberry|iemobile|opera mini/i.test(this.ua),
                isPad: this.isTablet,
                isEx: !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT),
                isMobileWeb: this.isMobileWebOptimized && !this.isMobileDesktopMode,
                isMobileInteraction: this.isMobileWebOptimized || this.isMobileDesktopMode,
                isMobileWebOptimized: this.isMobileWebOptimized,
                isMobileComputer: this.isMobileDesktopMode
            };
        }
        get isWin11() {
            let e = this.systemVersionRaw;
            if (!e || "string" != typeof e) return !1;
            let t = !1;
            if (e.startsWith("10.0")) {
                const n = e.split(".");
                if (n.length > 1) {
                    t = parseInt(n[n.length - 1]) >= 22e3;
                }
            }
            return !process.env.IS_WEB && "win32" == process.platform && t;
        }
        get isMacVersionGE13() {
            return !process.env.IS_WEB && "darwin" === process.platform && this.systemVersion_ >= 13;
        }
        get isMacVersionGE15() {
            return !process.env.IS_WEB && "darwin" === process.platform && this.systemVersion_ >= 15;
        }
        isMacVersionGreaterThanVersion(e) {
            return !process.env.IS_WEB && "darwin" === process.platform && this.systemVersion_ >= e;
        }
        isMacVersionOverTarget(e) {
            return !process.env.IS_WEB && "darwin" === process.platform && this.systemVersion_ >= e;
        }
        get isTablet() {
            const e = [ /ipad/i, /android.+(mobile|tablet)/i, /windows.+(phone|tablet)/i, /silk/i, /playbook/i, /tablet/i, /nexus\s?7/i, /surface/i, /kindle\s?fire/i, /huawei\s?mediapad/i, /lenovo\s?(tab|yoga\s?tab)/i ], t = /android.+tablet/i.test(this.ua);
            for (let n of e) if (n.test(this.ua) || t) return !0;
            return !1;
        }
        computeIsMobileWebOptimized() {
            if (!process.env.IS_WEB) return !1;
            if (/android|iphone|ipod|ipad|blackberry|iemobile|opera mini/i.test(this.ua)) return !0;
            const e = /macintosh|mac os x/i.test(this.ua), t = this.isTouchDevice, n = "undefined" != typeof navigator && navigator.maxTouchPoints > 1;
            if (e && t && n && "undefined" != typeof window) {
                const e = window.screen.width, t = window.screen.height;
                if (e >= 768 && e <= 1366 || t >= 768 && t <= 1366) return !0;
            }
            if ("undefined" != typeof window && this.isTouchDevice) {
                const e = window.screen.width, t = window.screen.height;
                if (Math.min(e, t) <= 1366) {
                    if (!(/windows nt|macintosh|linux x86_64/i.test(this.ua) && !/mobile|android|iphone|ipod|ipad/i.test(this.ua))) return !0;
                }
            }
            return !1;
        }
        computeIsMobileDesktopMode() {
            if (!process.env.IS_WEB) return !1;
            if (/android|iphone|ipod|ipad|blackberry|iemobile|opera mini/i.test(this.ua)) return !1;
            const e = /macintosh|mac os x/i.test(this.ua), t = this.isTouchDevice;
            if (e && t) {
                if ("undefined" != typeof navigator && navigator.maxTouchPoints > 1) return !0;
            }
            if (t) {
                if ((window.devicePixelRatio || 1) >= 2) return !0;
            }
            return !1;
        }
        delay(e) {
            let t;
            const n = new Promise(n => {
                t = setTimeout(n, e);
            });
            return n.finally(() => {
                t && clearTimeout(t);
            }), n;
        }
        isUseInstall() {
            var e;
            const {isMac: t} = this.getSysEnv, n = r.default.getItem("updateRelaunchflags"), i = null === (e = r.default.getItem("updateDir")) || void 0 === e ? void 0 : e.updateDir;
            return !(t ? void 0 !== n : void 0 !== i);
        }
        openBrowser(e) {
            const {isPc: t} = this.getSysEnv;
            if (t) {
                const {shell: t} = n(2);
                t.openExternal(e);
            } else window.open(e);
        }
        openFileByNative(e) {
            if (!this.isFileExist(e)) return;
            const {shell: t} = n(2);
            t.openPath(e);
        }
        openFolder(e) {
            if (console.log("openFolder", e), !process.env.IS_WEB) {
                if (!this.isFileExist(e)) return;
                this.openFolderByMac(e);
            }
        }
        isFileRW(e) {
            if (process.env.IS_WEB) return !1;
            try {
                const {accessSync: t, constants: r} = n(4);
                return t(e, r.R_OK | r.W_OK), console.log(e, ":isFileRW true"), !0;
            } catch (t) {
                return console.error(`${e}: isFileRW false, reason: ${t}`), !1;
            }
        }
    }
    t.default = i;
    class o {
        constructor() {
            this.callbacks = new Set, this.currentMode = !1, this.checkInterval = null, this.previousUA = "", 
            this.handleVisibilityChange = () => {
                document.hidden || setTimeout(() => this.checkModeChange(), 100);
            }, this.handleResize = () => {
                this.checkModeChange();
            }, this.handleFocus = () => {
                this.checkModeChange();
            }, "undefined" != typeof window && process.env.IS_WEB && (this.currentMode = (new i).getSysEnv.isMobileComputer, 
            this.previousUA = navigator.userAgent.toLowerCase(), this.startMonitoring());
        }
        startMonitoring() {
            document.addEventListener("visibilitychange", this.handleVisibilityChange), window.addEventListener("resize", this.handleResize), 
            window.addEventListener("focus", this.handleFocus), this.checkInterval = setInterval(() => {
                this.checkModeChange();
            }, 1e3);
        }
        stopMonitoring() {
            document.removeEventListener("visibilitychange", this.handleVisibilityChange), window.removeEventListener("resize", this.handleResize), 
            window.removeEventListener("focus", this.handleFocus), this.checkInterval && (clearInterval(this.checkInterval), 
            this.checkInterval = null);
        }
        onModeChange(e) {
            return this.callbacks.add(e), () => {
                this.callbacks.delete(e);
            };
        }
        getCurrentMode() {
            return this.currentMode;
        }
        checkModeChange() {
            const e = (new i).getSysEnv.isMobileComputer, t = navigator.userAgent.toLowerCase();
            t !== this.previousUA && (this.previousUA = t, console.log("UserAgent changed, checking desktop mode...")), 
            e !== this.currentMode && (this.currentMode = e, console.log("Desktop mode changed: " + (e ? "Desktop" : "Mobile")), 
            this.callbacks.forEach(t => {
                try {
                    t(e);
                } catch (e) {
                    console.error("Error in desktop mode callback:", e);
                }
            }));
        }
    }
    t.MobileDesktopModeListener = o;
    let a = null;
    t.getMobileDesktopModeListener = function() {
        return a || (a = new o), a;
    };
}
