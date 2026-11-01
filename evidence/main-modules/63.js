// analysis/pretty/main.js:12946; webpack module 63
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createCloudWindow = t.mainWindow = t.createNoteWindow = t.createAiTalkWindow = t.createNotificationBrowserWindow = t.createWindow = t.attachLoadingToWindow = t.removeWindowFromStack = void 0;
    const r = n(0), i = r.__importStar(n(25)), o = r.__importDefault(n(1)), a = r.__importDefault(n(1287)), s = n(2), l = r.__importDefault(n(6)), c = r.__importDefault(n(650)), u = r.__importDefault(n(76)), d = r.__importDefault(n(219)), h = r.__importDefault(n(147)), p = r.__importDefault(n(26)), f = r.__importDefault(n(157)), _ = r.__importDefault(n(158)), m = n(41), g = n(126), v = n(11), y = n(126), E = n(662), b = n(335), w = n(684), S = r.__importDefault(n(148)), T = r.__importDefault(n(336)), A = r.__importDefault(n(110)), O = r.__importDefault(n(343)), C = r.__importDefault(n(109)), N = r.__importDefault(n(65)), I = r.__importDefault(n(50)), R = n(66), D = n(81), L = n(697), k = new u.default([ m.LogModule.FRAMEWORK, "window" ]).getExpandLog(), M = "darwin" == process.platform;
    let P = global.__mainWindow;
    t.mainWindow = P;
    let x = !1, F = !1;
    function j() {
        if (M) {
            let e = 13;
            if (O.default.isRealRtl() && P) {
                const {width: t = 0} = null == P ? void 0 : P.getBounds();
                e = t - 13 - 60;
                const [n, r] = P.getSize();
                P.setSize(n + 1, r), P.setSize(n, r);
            }
            null == P || P.setTrafficLightPosition({
                x: e,
                y: 16
            }), null == P || P.setVibrancy("fullscreen-ui");
        }
    }
    s.BrowserWindow.prototype.storeBounds = function(e = "all") {
        if ((null == this ? void 0 : this.isDestroyed()) || (null == this ? void 0 : this.isMaximized()) || (null == this ? void 0 : this.isFullScreen())) return;
        let t;
        switch (e) {
          case "size":
            const e = null == this ? void 0 : this.getSize();
            t = {
                width: e[0],
                height: e[1]
            };
            break;

          case "position":
            const n = null == this ? void 0 : this.getPosition();
            t = {
                x: n[0],
                y: n[1]
            };
            break;

          default:
            t = null == this ? void 0 : this.getBounds();
        }
        this.cacheBounds = Object.assign(Object.assign({}, this.cacheBounds || {}), t);
    }, t.createWindow = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            k.info("mainWindow - createWindow"), t.mainWindow = P = function() {
                const e = a.default({
                    defaultHeight: H(),
                    defaultWidth: y.DEFAULT_SIZE.WIDTH
                });
                global.__mainWindowState = e;
                const {zoom: t, minWidth: n, minHeight: l, maxWidth: c, maxHeight: u} = p.default.getDisplayZoomFactor();
                global.__log.info("[createWindowsAccordSystem][displayZoomFactor]zoom:" + t);
                const f = e.width > 148 ? e.width : y.DEFAULT_SIZE.WIDTH, _ = f > 148 && f < y.MIN_SIZE.WIDTH ? y.MIN_SIZE.WIDTH : f, m = e.height < y.MIN_SIZE.HEIGHT ? y.MIN_SIZE.HEIGHT : e.height, g = {
                    width: Math.min(c, _),
                    height: Math.min(u, m),
                    minHeight: l,
                    minWidth: n,
                    useContentSize: !0,
                    frame: !1,
                    titleBarStyle: "hidden",
                    title: "vivo办公套件",
                    trafficLightPosition: {
                        x: 13,
                        y: 16
                    },
                    transparent: M,
                    backgroundColor: M ? "#a6F2F4F6" : "#F2F4F6",
                    acceptFirstMouse: M,
                    fullscreenable: !1,
                    webPreferences: {
                        webSecurity: !1,
                        webviewTag: !0,
                        nodeIntegration: !0,
                        contextIsolation: !1,
                        zoomFactor: t || 1,
                        preload: o.default.resolve(__dirname, "../../dist/electron/preload.js"),
                        devTools: !0
                    },
                    show: !1
                }, E = new s.BrowserWindow(g);
                global.__log.info("[createWindowsAccordSystem] getZoomFactor:" + E.webContents.getZoomFactor()), 
                global.__log.info("[createWindowsAccordSystem] getBounds:" + JSON.stringify(E.getBounds())), 
                E.webContents.setZoomFactor(t || 1), E.isMainBrowser = !0, e.manage(E), E.on("unmaximize", () => {
                    k.info("mainBrowser unmaximize"), d.default.getInstance().broadcastWindowToggleMax({
                        isMaximized: !1
                    });
                }), E.on("maximize", () => {
                    k.info("mainBrowser maximize"), d.default.getInstance().broadcastWindowToggleMax({
                        isMaximized: !0
                    }), !M && h.default.getInstance().broadcastSynsRestore();
                });
                E.on("moved", i.debounce(() => {
                    w.getDisplaysQuantity() > 1 && w.isDisplayUpdate() && (k.info("window move: displayUpdate"), 
                    w.displayMetricsChanged(!0, !0));
                }, 300)), b = E, null == b || b.on("focus", i.default.debounce(() => {
                    z(), b && !b.isDestroyed() && (d.default.getInstance().broadcastWindowFocus(b), 
                    C.default.getInstance().RepairAcrossDays());
                }, 100)), void (null == b || b.on("blur", i.default.debounce(() => {
                    z(), $ = setTimeout(() => {
                        d.default.getInstance().broadcastWindowToggleBlur(!0), Y = !0, k.info("WINDOW_BLUR_TIMEOUT");
                    }, 6e5), b && !b.isDestroyed() && d.default.getInstance().broadcastWindowBlur(b);
                }, 100))), E.on("hide", () => {
                    var e;
                    k.info(`mainBrowser hide getZoomFactor:${null === (e = null == E ? void 0 : E.webContents) || void 0 === e ? void 0 : e.getZoomFactor()},zoom:${t}`), 
                    d.default.getInstance().broadcastWindowHide();
                }), E.on("show", () => {
                    var e;
                    w.checkDisplayZoom(t), k.info(`mainBrowser show getZoomFactor:${null === (e = null == E ? void 0 : E.webContents) || void 0 === e ? void 0 : e.getZoomFactor()},zoom:${t}`), 
                    d.default.getInstance().broadcastWindowShow(), C.default.getInstance().RepairAcrossDays();
                }), E.on("minimize", () => {
                    k.info("mainBrowser minimize"), M && (k.info("mac click min"), global.__clickQuitFromDock = !0), 
                    d.default.getInstance().broadcastWindowMin();
                }), E.on("restore", () => {
                    var e;
                    if (k.info("restore show"), w.checkDisplayZoom(t), !M && (null === (e = null == P ? void 0 : P.webContents) || void 0 === e || e.send(v.APP_MESSAGE_ENUM.EXPORT_PCSUITE_REPORT)), 
                    d.default.getInstance().broadcastWindowRestore(), C.default.getInstance().RepairAcrossDays(), 
                    !M && w.getDisplaysQuantity() > 1) {
                        const e = E.getBounds(), t = E.getContentSize();
                        k.info(`[DIAG] before setBounds - bounds: ${JSON.stringify(e)}, content: ${JSON.stringify(t)}`), 
                        E.setBounds(E.getBounds());
                        const n = E.getBounds(), r = E.getContentSize();
                        k.info(`[DIAG] after setBounds - bounds: ${JSON.stringify(n)}, content: ${JSON.stringify(r)}`);
                    }
                }), E.on("close", () => {
                    M && F && (k.info("mac upgrade firstlaunch exit"), s.app.exit());
                }), E.on("unresponsive", () => {
                    p.default.getCpuUsage(), p.default.getMemoryUsage(), k.info("mainWindow unresponsive");
                }), E.on("responsive", () => {
                    k.info("mainWindow responsive");
                }), M && (E.on("resize", () => {
                    if (O.default.isRealRtl()) {
                        const {width: e} = E.getBounds();
                        E.setTrafficLightPosition({
                            x: e - 60 - 13,
                            y: 16
                        });
                    } else E.setTrafficLightPosition({
                        x: 13,
                        y: 16
                    });
                }), E.on("resized", () => {
                    p.default.getShadowStyle(E);
                }), E.on("focus", () => {
                    E.hasShadow() || (k.info("mainWindow shadow not exist"), p.default.getShadowStyle(E));
                }), E.on("enter-full-screen", () => {
                    null == E || E.focus(), d.default.getInstance().broadcastToggleFullScreen({
                        isFullscreen: !0
                    });
                }), E.on("leave-full-screen", () => {
                    x && (null == E || E.hide(), x = !1), d.default.getInstance().broadcastToggleFullScreen({
                        isFullscreen: !1
                    });
                }), setTimeout(() => {
                    null == E || E.setFullScreenable(!0);
                }, 100));
                var b;
                return function() {
                    null == P || P.webContents.on("crashed", () => r.__awaiter(this, void 0, void 0, function*() {
                        k.info("[addRenderProcessCrashed] -crashed");
                    })), null == P || P.webContents.on("render-process-gone", (e, t, n) => r.__awaiter(this, void 0, void 0, function*() {
                        if (k.info("[addRenderProcessCrashed] - render-process-gone:" + ((null == n ? void 0 : n.reason) && JSON.stringify(n.reason))), 
                        "killed" === n.reason && (1073807364 === n.exitCode || 1 === n.exitCode)) return void k.info("[addRenderProcessCrashed] - render-process-gone by external kill, exitCode: " + n.exitCode);
                        s.dialog.showMessageBox({
                            type: "error",
                            title: "vivo办公套件",
                            message: "抱歉，vivo办公套件运行异常，请点击重新加载或退出应用.",
                            buttons: [ "退出", "重新加载" ]
                        }, e => {
                            1 === e ? (k.info("[addRenderProcessCrashed][reloadWindow] - start"), (null == P ? void 0 : P.isDestroyed()) ? (k.info("[addRenderProcessCrashed][reloadWindow] - relaunch"), 
                            s.app.relaunch(), s.app.exit(0)) : (k.info("[addRenderProcessCrashed][reloadWindow] - reloadWindow"), 
                            s.BrowserWindow.getAllWindows().forEach(e => {
                                e.id !== (null == P ? void 0 : P.id) && e.destroy();
                            }), k.info("[addRenderProcessCrashed][reloadWindow] - end"), s.app.relaunch(), s.app.exit(0))) : s.app.quit();
                        });
                    }));
                }(), k.info("createWindowsAccordSystem complete"), E;
            }(), global.__launchTimeLog.loadHTML = Date.now(), global.__launchTimeLog.loadTransitionUI = Date.now();
            let n = (yield function() {
                return r.__awaiter(this, void 0, void 0, function*() {
                    return new Promise(e => {
                        l.default.getItem("useLogin") ? e(!1) : (k.info("isFirstLaunchApp:" + !0), e(!0));
                    });
                });
            }()) ? "welcome" : l.default.getItem("currentModuleName") || "home";
            e || S.default.getAutoStart() && (yield S.default.isAutoLaunch()) ? (global.__log.info("attachLoadingToWindowV2 hidden window"), 
            j()) : (B(P, n, j), global.__log.info("attachLoadingToWindowV2 show window"), k.info("mainWindow - createWindow attachLoadingToWindowV2")), 
            M && A.default.getInstance().isRelaunchflags() && (F = !0, k.info("mac upgrade launch !"), 
            yield T.default.getInstance().initBasicWork()), g.MODULE_URL_MAP[n] || (k.info("moduleName not found!: " + n), 
            n = "home"), global.__mainWindow = P, global.__windows.set("mainWindow", P), k.info(`[createWindow - mainWindow.loadURL]: moduleName=${n}, path=${g.MODULE_URL_MAP[n]}`), 
            P.loadURL(g.MODULE_URL_MAP[n]), function(e) {
                e.webContents.on("did-finish-load", () => r.__awaiter(this, void 0, void 0, function*() {
                    console.log("did-finish-load"), T.default.getInstance().initWindowAfterReady(), 
                    M && F && (F = !1, k.info("mac upgrade launch reset after did-finish-load")), global.__launchTimeLog.loadHTML = Date.now() - (global.__launchTimeLog.loadHTML || 0), 
                    global.__launchTimeLog.appLaunchTotal = Date.now() - (global.__launchTimeLog.appLaunchTotal || 0), 
                    k.info("launchTime:" + JSON.stringify(global.__launchTimeLog));
                })), e.webContents.on("did-fail-load", (e, t, n) => {
                    k.info("[window]load window fail errCode- " + t), k.info("[window]load window view fail errorDescription- " + n);
                }), e.webContents.on("dom-ready", () => {
                    k.info("load MainWindow dom-ready");
                }), e.webContents.on("did-start-loading", () => {
                    k.info("load MainWindow did-start-loading");
                }), e.webContents.on("did-stop-loading", () => {
                    k.info("load MainWindow did-stop-loading");
                });
            }(P), P.on("close", e => r.__awaiter(this, void 0, void 0, function*() {
                var n;
                try {
                    if (k.info("尝试关闭窗体"), M) {
                        if (k.info("mac quit"), (null == P ? void 0 : P.isFullScreen()) && global.__mainWindowState.resetStateToDefault(), 
                        A.default.getInstance().isKillServiceflags() && (k.info("app quit and update sucess"), 
                        e.preventDefault(), _.default.getInstance().uninit(), h.default.getInstance().broadcastServiceStop(), 
                        yield A.default.getInstance().killRelationService(), h.default.getInstance().broadcastServiceStopEnd(), 
                        k.info("app quit and update sucess2"), global.__mainWindow = null, A.default.getInstance().isRestartNowflags())) return k.info("app quit by quitAndInstall"), 
                        M && global.__transparentWindows.forEach(e => {
                            null == e || e.destroy();
                        }), E.autoUpdater.quitAndInstall(!1, !1), A.default.getInstance().resetRestartNowflags(), 
                        A.default.getInstance().resetKillServiceflags(), void k.info("app quit by quitAndInstall end");
                    } else (null == P ? void 0 : P.isMaximized()) && global.__mainWindowState.resetStateToDefault();
                    if (global.__quitFromUpdate) return global.__quitFromUpdate = !1, global.__quitFlag = !0, 
                    void k.info("退出应用,将同步频率休眠 __quitFromUpdate");
                    let r = l.default.getItem("closeMode") || "0";
                    if (M && !global.__quitFromDock && "0" == r) k.info("mac hide to dock"), global.__clickQuitFromDock = !0, 
                    k.info("exit docker -- WINDOW_MESSAGE_ENUM.WINDOW_HIDE"), d.default.getInstance().broadcastWindowHide(), 
                    (null == P ? void 0 : P.isFullScreen()) && (x = !0, k.info("exit docker -- mainWindow setFullScreen(false)"), 
                    null == P || P.setFullScreen(!1)), null === (n = global.__mainWindow) || void 0 === n || n.hide(), 
                    e.preventDefault(), l.default.setItem("closeHideStatus", 1); else if (k.info("退出应用,将同步频率休眠1"), 
                    h.default.getInstance().broadcastAppQuit(), global.__quitFlag) {
                        const e = null == P ? void 0 : P.id;
                        k.info("[window close] closewindow"), _.default.getInstance().uninit(), global.__mainWindow = null, 
                        c.default.clearDevice(), t.mainWindow = P = null, k.info("[window close] closewindow complete"), 
                        setTimeout(() => {
                            const t = s.BrowserWindow.getAllWindows();
                            k.info("[window close] start windows.length: " + t.length), t.forEach(t => {
                                try {
                                    if (t.id === e) return;
                                    if (t.isDestroyed()) return;
                                    k.info("[window close] start " + (null == t ? void 0 : t.id)), t.close(), k.info("[window close] end " + (null == t ? void 0 : t.id));
                                } catch (e) {
                                    k.info("[window close] end close error: " + (null == t ? void 0 : t.id));
                                }
                            });
                        }, 100);
                    } else k.info("[window close] quitflag check"), e.preventDefault(), s.app.quit();
                } catch (e) {
                    k.error("close error:" + e), s.app.exit();
                }
            })), M || P.setThumbnailClip({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            });
        });
    };
    const U = [];
    function W(e) {
        const t = U.indexOf(e);
        t > -1 && U.splice(t, 1);
    }
    function B(e, t, n) {
        var r;
        const i = o.default.resolve(__dirname, "../../dist/electron/static/html/load.html");
        let a = !1;
        const c = t => {
            a || (a = !0, k.info(t), n && n(), null == e || e.removeBrowserView(h), h.webContents.close());
        };
        !M && e.setOpacity(0);
        const u = null !== (r = l.default.getItem("themeColor.theme")) && void 0 !== r ? r : m.ThemeScheme.DEFAULT, d = u === m.ThemeScheme.SYSTEM ? s.nativeTheme.shouldUseDarkColors : u === m.ThemeScheme.DARK, h = new s.BrowserView;
        h.setBackgroundColor(d ? "#242424" : "#FFFFFF"), global.__log.info(`createLoadingWindow - isDark: ${u}-${d}`), 
        e.addBrowserView(h);
        const p = e.getBounds();
        h.setBounds(Object.assign(Object.assign({}, p), {
            x: 0,
            y: 0
        })), h.setAutoResize({
            width: !0,
            height: !0
        });
        const f = M && A.default.getInstance().isRelaunchflags() ? "upgrade" : "";
        h.webContents.loadFile(i, {
            search: f,
            query: {
                theme: u
            }
        }), h.webContents.on("did-finish-load", () => {
            global.__launchTimeLog.loadTransitionUI = Date.now() - (global.__launchTimeLog.loadTransitionUI || 0), 
            k.info("[window]load browser view show"), null == e || e.setOpacity(1), !(null == e ? void 0 : e.isVisible()) && t && (null == e || e.show()), 
            setTimeout(() => {
                c("[window]load browser view hide handleWinloadTimeout");
            }, 1e4);
        }), h.webContents.on("did-fail-load", (e, t, n) => {
            k.info("[window]load browser view fail errCode- " + t), k.info("[window]load browser view fail errorDescription- " + n);
        }), e.webContents.on("did-finish-load", () => {
            c("[window]load browser view hide");
        }), e.webContents.on("dom-ready", () => {
            "welcome" === t && c("[window]load browser view hide welcome");
        });
    }
    function H() {
        var e;
        const t = s.screen.getPrimaryDisplay(), n = null === (e = null == t ? void 0 : t.workArea) || void 0 === e ? void 0 : e.height;
        return Math.min(y.DEFAULT_SIZE.HEIGHT, n);
    }
    t.removeWindowFromStack = W, t.createNoteWindow = function(e) {
        var t;
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = "note" + e.guid, r = global.__windows.get(n);
            if (r && !r.isDestroyed()) return r.isMinimized() && r.restore(), r.show(), void r.focus();
            {
                let r, i, o, a, c = y.DEFAULT_SIZE.WIDTH, u = H();
                for (;U.length > 0; ) {
                    const e = U[U.length - 1];
                    if (e && !e.isDestroyed()) {
                        o = e;
                        break;
                    }
                    U.pop();
                }
                a = o ? s.screen.getDisplayMatching(o.getBounds()) : s.screen.getPrimaryDisplay();
                const {width: d, height: h, x: p, y: f} = a.workArea, _ = Number(l.default.getItem("noteWindowWidth") || 660), E = Number(l.default.getItem("noteWindowHeight") || 660);
                if (o) {
                    const e = o.getBounds();
                    c = _, u = E, r = e.x + 60, i = e.y + 60;
                } else c = _, u = E, r = p + d / 2, i = f + 20;
                r + c > p + d && (r = p), i + u > f + h && (i = f);
                const b = null !== (t = l.default.getItem("themeColor.theme")) && void 0 !== t ? t : m.ThemeScheme.DEFAULT, w = b === m.ThemeScheme.SYSTEM ? s.nativeTheme.shouldUseDarkColors : b === m.ThemeScheme.DARK, S = yield N.default.newBrowserWindow({
                    x: Math.floor(r),
                    y: Math.floor(i),
                    width: c,
                    height: u,
                    minHeight: 660,
                    minWidth: 439,
                    useContentSize: !0,
                    titleBarStyle: "hidden",
                    trafficLightPosition: {
                        x: 13,
                        y: 16
                    },
                    frame: !1,
                    backgroundColor: w ? "#242424" : "#FFFFFF",
                    acceptFirstMouse: M,
                    fullscreenable: M,
                    webPreferences: {
                        webSecurity: !1,
                        webviewTag: !0,
                        nodeIntegration: !0,
                        contextIsolation: !1,
                        devTools: !0
                    },
                    opacity: 1,
                    show: !0
                }), T = g.NOTE_URL_MAP.note + `?guid=${e.guid}&needDecode=${e.needDecode}&lang=${e.lang}`, A = [ "did-fail-provisional-load", "did-frame-finish-load", "did-start-loading", "did-stop-loading", "dom-ready", "page-title-updated", "page-favicon-updated", "content-bounds-updated", "did-create-window", "will-navigate", "will-frame-navigate", "did-start-navigation", "will-redirect", "did-redirect-navigation", "did-navigate", "did-frame-navigate", "did-navigate-in-page", "will-prevent-unload", "render-process-gone", "unresponsive", "responsive", "blur" ];
                S.webContents.on("did-finish-load", () => {
                    global.__log.info(T + "页面加载完成=============");
                }), S.webContents.on("did-fail-load", e => {
                    global.__log.info(T + "页面加载失败=============", e);
                }), A.forEach(e => {
                    S.webContents.on(e, () => {
                        global.__log.info(`${T} event: ${e}`);
                    });
                }), S.on("unresponsive", () => {
                    global.__log.info(T + "页面无响应=============");
                }), S.on("close", e => {
                    S.webContents.send(v.NOTE_MULTI_WINDOW.CLOSE_WINDOW), e.preventDefault();
                }), S.on("closed", () => (console.log("====================窗口关闭------------------"), 
                S.webContents.send(v.NOTE_MULTI_WINDOW.CLOSE_WINDOW), W(S), global.__windows.delete(n))), 
                S.on("resize", () => {
                    const e = S.getBounds();
                    l.default.setItem("noteWindowWidth", e.width), l.default.setItem("noteWindowHeight", e.height);
                }), S.on("focus", () => {
                    if (function(e) {
                        const t = U.indexOf(e);
                        t > -1 && U.splice(t, 1), U.push(e);
                    }(S), !global.__quitFlag) {
                        const e = S.getBounds();
                        l.default.setItem("noteWindowWidth", e.width), l.default.setItem("noteWindowHeight", e.height);
                    }
                }), S.on("unmaximize", () => {
                    k.info("noteWindow unmaximize"), S.webContents.send(v.NOTE_MULTI_WINDOW.SUB_WINDOW_TOGGLE_MAXIMIZE, {
                        isMaximized: !1,
                        guid: e.guid
                    });
                }), S.on("maximize", () => {
                    k.info("noteWindow maximize"), S.webContents.send(v.NOTE_MULTI_WINDOW.SUB_WINDOW_TOGGLE_MAXIMIZE, {
                        isMaximized: !0,
                        guid: e.guid
                    });
                }), global.__log.info("创建窗口=============" + T), U.push(S), global.__windows.set(n, S), 
                I.default.$emit(R.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: S.id,
                    routePath: D.CHILD_WINDOW_ROUTES.SUB_NOTE,
                    data: {
                        guid: e.guid,
                        needDecode: e.needDecode,
                        lang: e.lang
                    }
                });
            }
        });
    }, t.attachLoadingToWindow = B, t.createNotificationBrowserWindow = function() {
        b.NotificationWindow.getInstance();
    }, t.createAiTalkWindow = function() {
        f.default.getInstance();
    };
    let $ = null, Y = !1;
    function z() {
        null != $ && clearTimeout($), $ = null, Y && (d.default.getInstance().broadcastWindowToggleBlur(!1), 
        Y = !1, k.info("WINDOW_BLUR_TIMEOUT:restore"));
    }
    const G = new Set;
    t.createCloudWindow = function(e) {
        var t;
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = "cloudWindow/" + e.path;
            if (G.has(n)) return void global.__log.info(`[createCloudWindow] ${n} pending, skip duplicate`);
            const r = global.__windows.get(n);
            if (r && !r.isDestroyed()) return r.isMinimized() && r.restore(), r.show(), void r.focus();
            G.add(n);
            try {
                const r = "cloudWindowPosition/" + e.path, i = () => {
                    if (!w.isMaximized() && !w.isFullScreen()) {
                        const e = w.getBounds();
                        l.default.setItem(r, {
                            x: e.x,
                            y: e.y,
                            width: e.width,
                            height: e.height,
                            timestamp: Date.now()
                        });
                    }
                };
                let o, a, c, u;
                const d = l.default.getItem(r);
                if (d && void 0 !== d.x && void 0 !== d.y) {
                    const e = s.screen.getAllDisplays();
                    let t = !1;
                    for (const n of e) {
                        const e = n.workArea, r = d.width || y.DEFAULT_SIZE.SUB_WIDTH, i = d.height || H();
                        if (d.x < e.x + e.width && d.x + r > e.x && d.y < e.y + e.height && d.y + i > e.y) {
                            t = !0;
                            break;
                        }
                    }
                    t && (o = Math.floor(d.x), a = Math.floor(d.y), c = d.width || y.DEFAULT_SIZE.SUB_WIDTH, 
                    u = d.height || H());
                }
                if (void 0 === o || void 0 === a) if (c = y.DEFAULT_SIZE.SUB_WIDTH, u = H(), P && !P.isDestroyed()) {
                    const e = P.getBounds();
                    o = Math.floor(e.x + (e.width - c) / 2), a = Math.floor(e.y + (e.height - u) / 2);
                } else {
                    const e = s.screen.getPrimaryDisplay(), {width: t, height: n} = e.workArea;
                    o = Math.floor((t - c) / 2), a = Math.floor((n - u) / 2);
                }
                const h = null !== (t = l.default.getItem("themeColor.theme")) && void 0 !== t ? t : m.ThemeScheme.DEFAULT, f = h === m.ThemeScheme.SYSTEM ? s.nativeTheme.shouldUseDarkColors : h === m.ThemeScheme.DARK, {zoom: _, minWidth: g, minHeight: v, maxWidth: E, maxHeight: b} = p.default.getDisplayZoomFactor(), w = yield N.default.newBrowserWindow({
                    x: o,
                    y: a,
                    width: Math.min(c, E),
                    height: Math.min(u, b),
                    minWidth: g,
                    minHeight: v,
                    useContentSize: !0,
                    titleBarStyle: "hidden",
                    trafficLightPosition: {
                        x: 13,
                        y: 16
                    },
                    title: e.name || "云服务",
                    frame: !1,
                    backgroundColor: f ? "#242424" : "#FFFFFF",
                    acceptFirstMouse: M,
                    fullscreenable: M,
                    webPreferences: {
                        webSecurity: !1,
                        webviewTag: !0,
                        nodeIntegration: !0,
                        contextIsolation: !1,
                        devTools: !0
                    },
                    opacity: _ || 1,
                    show: !0
                });
                w.webContents.on("did-finish-load", () => {
                    global.__log.info(`[webview新窗体]: ${n} 页面加载完成-`, e);
                }), w.webContents.on("did-fail-load", e => {
                    global.__log.info(`[webview新窗体]: ${n} 页面加载失败-`, e);
                }), w.on("unresponsive", () => {
                    global.__log.info(`[webview新窗体]: ${n} 页面无响应-`);
                }), w.on("close", () => {
                    L.mediaPlayerWindowManager.closeWindowsBySender(w.webContents);
                }), w.on("closed", () => global.__windows.delete(n)), w.on("resize", () => {
                    i();
                }), w.on("move", () => {
                    i();
                }), w.on("focus", () => {}), w.on("unmaximize", () => {
                    k.info("[webview新窗体]: unmaximize");
                }), w.on("maximize", () => {
                    k.info("[webview新窗体]: maximize");
                }), global.__windows.set(n, w), I.default.$emit(R.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: w.id,
                    routePath: D.CHILD_WINDOW_ROUTES.CLOUD,
                    data: Object.assign({}, e)
                });
            } finally {
                G.delete(n);
            }
        });
    };
}
