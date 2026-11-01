// analysis/pretty/main.js:22011; webpack module 157
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.V_TALK_MODULE_NAME = void 0;
    const r = n(0), i = r.__importDefault(n(660)), o = n(2), a = n(126), s = r.__importDefault(n(1)), l = n(11), c = n(25), u = n(1303), d = r.__importDefault(n(219)), h = n(46), p = r.__importDefault(n(65)), f = r.__importDefault(n(50)), _ = n(66), m = n(81), g = "darwin" == process.platform, v = g ? 67 : 60, y = {
        title: "蓝心小V",
        frame: !1,
        titleBarStyle: "hidden",
        maximizable: !1,
        minimizable: !1,
        fullscreenable: !1,
        transparent: g,
        backgroundColor: g ? "#e8F2F4F6" : "#F2F4F6",
        acceptFirstMouse: g,
        width: 400,
        minWidth: 400,
        maxWidth: 800,
        minHeight: a.MIN_SIZE.HEIGHT,
        hasShadow: !0,
        useContentSize: !0,
        trafficLightPosition: {
            x: 13,
            y: 16
        },
        vibrancy: "fullscreen-ui",
        visualEffectState: "followWindow",
        webPreferences: {
            webviewTag: !0,
            webSecurity: !1,
            nodeIntegration: !0,
            preload: "",
            contextIsolation: !1,
            devTools: !0,
            backgroundThrottling: !1
        },
        show: !1
    };
    var E;
    function b(e) {
        return new Promise(t => {
            c.delay(() => {
                t(!0);
            }, e);
        });
    }
    t.V_TALK_MODULE_NAME = "ai-talk", function(e) {
        e.NO_OPER = "no_oper", e.V_TALK_MOVING = "v_talk_moving", e.V_TALK_RESIZING = "v_talk_resizing", 
        e.MAIN_MVOING = "main_moving", e.MAIN_RESIZING = "main resizing";
    }(E || (E = {}));
    class w {
        constructor(e) {
            var t;
            this.winState = u.AI_TALK_WIN_STATE.SEPARATION, this.mainWinEventMap = new Map, 
            this.ipcEventUnregisterSet = new Set, this.startShowTime = 0, this.talkBeginFlag = !1, 
            this._isBtnHide = !1, this._isMainWindowHided = !1, this.isWindowAnimating = !1, 
            this.dragFullWindows = !1, this._needRePreshow = !1, this._isLogoutClose = !1, this._winOper = E.NO_OPER, 
            this._winHideTime = 0, this._resizedWidth = 400, this._mainWinResizedWidth = (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.getBounds().width) || a.MIN_SIZE.WIDTH, 
            this.isLoaded = !1, this.displayChangedDebounce = c.debounce(this._displayChanged, 300, {
                leading: !1,
                trailing: !0
            }), this.sendVTalkWinResizeDebounce = c.debounce(() => {
                var e;
                try {
                    const t = this.win.getBounds();
                    null === (e = global.__mainWindow) || void 0 === e || e.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_RESIZE_TASK_REPORT, {
                        height: t.height,
                        width: t.width
                    });
                } catch (e) {
                    global.__log.error("[vTalk][ai-talk-window]sendVTalkWinResizeDebounce  error： " + JSON.stringify(e));
                }
            }, 1e3), this.sendVTalkWinMovedDebounce = c.debounce(() => {
                var e;
                try {
                    const t = this.win.getBounds(), n = o.screen.getDisplayMatching(t), r = o.screen.getPrimaryDisplay().workArea, i = {
                        pos_x: Math.ceil(1e4 * t.x / n.workArea.width) / 100,
                        pos_y: Math.ceil(1e4 * t.y / n.workArea.height) / 100,
                        is_screen: n.workArea.x != r.x || n.workArea.y != r.y ? 1 : 0
                    };
                    null === (e = global.__mainWindow) || void 0 === e || e.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_MOVE_TASK_REPORT, i);
                } catch (e) {
                    global.__log.error("[vTalk][ai-talk-window]sendVTalkWinMovedDebounce  error： " + JSON.stringify(e));
                }
            }, 1e3), global.__log.info("[vTalk]ai-talk window construct  " + e);
            try {
                this.talkBeginFlag = !1, this.unregisterIpcEvent(), this.registerIpcEvent(), this.unregisterMainWindowEvent(), 
                this.registerMainWinodwEvent(), o.screen.removeListener("display-metrics-changed", this.displayChangedDebounce.bind(this)), 
                o.screen.addListener("display-metrics-changed", this.displayChangedDebounce.bind(this));
            } catch (e) {
                global.__log.error("[vTalk]ai-talk window construct  error:  " + JSON.stringify(e));
            }
        }
        createWin() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("[vTalk]ai-talk window createWin start"), this.win && !this.win.isDestroyed()) return void global.__log.info("[vTalk]ai-talk window construct  already ");
                if (!global.__mainWindow) return void global.__log.info("[vTalk]ai-talk window construct  , mainWindow is undefined ");
                let t = y;
                const n = global.__mainWindow.getBounds();
                if (t.height = n.height, t.minHeight = global.__mainWindow.getMinimumSize()[1], 
                g || h.getWindowsDragFullWindow().then(e => {
                    1 == e.value || "1" == e.value ? this.dragFullWindows = !0 : this.dragFullWindows = !1;
                }).catch(e => {
                    this.dragFullWindows = !1, global.__log.error("[vTalk][ai-talk-window]getWindowsDragFullWindow err: " + (e.message || e));
                }), this.win = yield p.default.newBrowserWindow(t), this.isLoaded = !1, global.__log.info("new win id , " + (null === (e = this.win) || void 0 === e ? void 0 : e.id)), 
                global.__windows.set("ai-talk", this.win), g || this.win.setThumbnailClip({
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }), global.__log.info("[vTalk]ai-talk __dirname " + __dirname), !g) {
                    const e = s.default.resolve(__dirname, "static", "v-talk-logo.png");
                    this.win.setIcon(e);
                }
                this.registerAiTalkWinEvent();
            });
        }
        _displayChanged() {
            global.__log.info("[vTalk][ai-talk-window]_displayChanged :" + this.winState), console.log(this), 
            this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && (global.__log.info("[vTalk][ai-talk-window]_displayChanged followMain"), 
            this.toFollowMainWin(void 0, void 0, void 0, !0));
        }
        static getInstance() {
            return this.instance && !this.instance.isDestroyed() || (global.__log.info("[vTalk][ai-talk-window] getInstance recreate"), 
            this.instance = new w), this.instance;
        }
        getWin() {
            return this.win;
        }
        isAdsorption() {
            return this.winState == u.AI_TALK_WIN_STATE.ADSORPTION;
        }
        toFollowMainWin(e, t = !1, n, r = !1) {
            var i;
            try {
                console.log(`start follow mainWin:${t}, ${n ? JSON.stringify(n) : n}`), this.winState = u.AI_TALK_WIN_STATE.ADSORPTION;
                const a = (null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.getBounds()) || {
                    width: 0,
                    x: 0,
                    y: 0,
                    height: 0
                };
                if (n && (a.x = n.x, a.y = n.y), this.win.getParentWindow() || this.win.setParentWindow(global.__mainWindow), 
                g && global.__mainWindow && global.__mainWindow.isVisible() && global.__mainWindow.isNormal() && !e && global.__mainWindow.focus(), 
                this.syncZoomAndMinsize(), a) {
                    const n = this.win.getContentBounds();
                    console.log("**********", this.win.getBounds(), this.win.getNormalBounds(), this.win.getContentBounds());
                    let i = {
                        height: a.height,
                        y: a.y,
                        x: a.x + a.width + 10,
                        width: this._resizedWidth
                    };
                    if (null != e && (i.width = e, this._resizedWidth = e), (r || n.height != i.height || n.width != i.width || n.x != i.x || n.y != i.y) && (global.__log.info("toFollowMainWin:" + JSON.stringify(i)), 
                    g && t && (n.height != i.height || n.y != i.y) && (this.isWindowAnimating = !0, 
                    global.__log.info("toFollowMainWin: this.isWindowAnimating:" + this.isWindowAnimating)), 
                    this.win.setBounds(i, t), !g)) {
                        const e = o.screen.getDisplayMatching(n), t = o.screen.getDisplayMatching(i);
                        e.scaleFactor != t.scaleFactor && setTimeout(() => {
                            this.win.setBounds(i);
                        });
                    }
                }
                this.postWinState();
            } catch (e) {
                global.__log.error("[vTalk]ai-talk window toFollowMainWin  error: " + JSON.stringify(e));
            }
        }
        toEndFollow(e = !1) {
            var t;
            try {
                global.__log.info("end follow mainWin"), e && (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isNormal()) && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && global.__mainWindow.showInactive(), 
                this.winState = u.AI_TALK_WIN_STATE.SEPARATION, this.win.setParentWindow(null), 
                this.postWinState();
            } catch (e) {
                global.__log.info("toEndFollow error: " + JSON.stringify(e));
            }
        }
        show(e, t = !1) {
            var n, i, o;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (global.__log.info(`[vTalk][ai-talk-window] show ${e} ${t} ${this.win}`), this.win && !this.win.isDestroyed() || (global.__log.info("[vTalk][ai-talk-window] show already destroyed break;"), 
                    yield this.createWin(), f.default.$emit(_.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                        winId: null === (n = this.win) || void 0 === n ? void 0 : n.id,
                        routePath: m.CHILD_WINDOW_ROUTES.AI_TALK
                    })), this.winIsShowed()) return global.__log.info("[vTalk][ai-talk-window] already showed"), 
                    void (this.isWinInScreen() ? (global.__log.info("[vTalk][ai-talk-window] already showed inscreen, focus"), 
                    this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_SHOW_ANI), this.win.focus()) : (global.__log.info("[vTalk][ai-talk-window] already showed not inscreen, follow"), 
                    this.toFollowMainWin(400)));
                    if (console.log("show,", null === (i = this.win) || void 0 === i ? void 0 : i.isVisible()), 
                    (g || this.win && this.win.isVisible()) && this.win.isMinimized()) return global.__log.info("[vTalk][ai-talk-window] isMinimized, restore， focus"), 
                    this.win.restore(), void this.win.focus();
                    this.startShowTime = e, (null === (o = global.__mainWindow) || void 0 === o ? void 0 : o.isFullScreen()) ? this.onFullScreenHandlerVWin() : this.isWinMaximize(global.__mainWindow) ? this.onFullScreenHandlerVWin(!0) : this.preShow(), 
                    this.win.show(), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_SHOW_ANI);
                } catch (e) {
                    global.__log.error("[vTalk][ai-talk-window]show error,  " + JSON.stringify(e));
                }
            });
        }
        isDestroyed() {
            return console.log("isDestroyed", this.win.isDestroyed()), !this.win || this.win.isDestroyed();
        }
        hide() {
            try {
                global.__log.info("[vTalk][ai-talk-window] hide"), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_HIDE_ANI), 
                this.win.close(), global.__windows.delete("ai-talk");
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window]hide error, " + JSON.stringify(e));
            }
        }
        preShow(e = !1, t = !1) {
            global.__log.info("[vTalk][ai-talk-window]preshow");
            try {
                if (!global.__mainWindow) return;
                const n = global.__mainWindow.getBounds(), r = o.screen.getDisplayMatching(n).workArea;
                if (global.__log.info(`cloestScreenBounds: ${JSON.stringify(r)}, mainWindowBounds: ${JSON.stringify(n)}`), 
                r.width - (n.x - r.x) - n.width < 410) {
                    const t = r.width - (n.x - r.x) - n.width;
                    if (global.__log.info("rightSpace:" + t), r.width - n.width >= 410) {
                        let e = 410 - t;
                        if (global.__log.info("rightNeed:" + e), global.__log.info("originX: " + n.x), e > 0) {
                            const t = n.x - e;
                            global.__log.info("targetX:" + t);
                            const r = Object.assign({}, n);
                            r.x = t, global.__log.info("preshow mainwindow bounds : " + JSON.stringify(r)), 
                            global.__mainWindow.setBounds(r);
                        }
                        this.toFollowMainWin(400);
                    } else {
                        if (global.__log.info("not enough v window"), !g) {
                            const e = o.screen.getDisplayMatching(n).workArea, t = {
                                x: e.x + e.width + 40,
                                y: e.y + e.height / 2
                            }, r = o.screen.getDisplayNearestPoint(t).workArea;
                            if (global.__log.info(`display matching topRight: ${JSON.stringify(r)}, ${JSON.stringify(t)}`), 
                            t.x >= r.x && t.x <= r.x + r.width && t.y >= r.y && t.y <= r.y + r.height) return void this.toFollowMainWin(400);
                        }
                        if (e) {
                            const e = global.__mainWindow.getMinimumSize();
                            if (r.width - e[0] >= 400) {
                                const e = Object.assign({}, n);
                                e.x = r.x, e.width = r.width - 400 - 10, global.__log.info("preshow mainwindow bounds sacle: " + JSON.stringify(e)), 
                                global.__mainWindow.setBounds(e), this._mainWinResizedWidth = e.width, this.toFollowMainWin(400);
                            } else {
                                const t = Object.assign({}, n);
                                t.x = r.x, t.width = e[0], global.__mainWindow.setBounds(t), this._mainWinResizedWidth = t.width, 
                                this.toFollowMainWin(400), this.win.moveAbove(global.__mainWindow.getMediaSourceId());
                            }
                        } else {
                            const e = this.win.getBounds(), t = n.y, i = r.x + r.width - e.width, o = Object.assign({}, e);
                            o.x = i, o.y = t, o.height = n.height, global.__log.info("preShow targetBounds: " + JSON.stringify(o)), 
                            !g || e.height == o.height && e.y == o.y || (global.__log.info("set isWindowAnimating true 111"), 
                            this.isWindowAnimating = !0), this.win.setBounds(o), this.toEndFollow();
                        }
                    }
                } else this.toFollowMainWin(400, t);
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window]preShow error: " + JSON.stringify(e));
            }
        }
        registerAiTalkWinEvent() {
            try {
                g || (this.win.addListener("will-move", (e, t) => {
                    console.log("[vtalk][ai-talk-window] will-move"), this._winOper = E.V_TALK_MOVING, 
                    this._recalcPosi(!1, t), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WIN_WILL_MOVE_POST);
                }), this.win.addListener("moved", e => {
                    var t;
                    console.log("[vtalk][ai-talk-window] moved"), this._winOper = E.NO_OPER;
                    try {
                        this._recalcPosi(!0), this.sendVTalkWinMovedDebounce(), this.syncZoomAndMinsize(), 
                        null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WIN_ABORING, !1);
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]moved error:" + JSON.stringify(e));
                    }
                }));
                let e = !1;
                this.win.addListener("will-resize", (t, n) => {
                    if (console.log("win will-resize: " + JSON.stringify(n)), this._winOper = E.V_TALK_RESIZING, 
                    global.__mainWindow && !global.__mainWindow.isFullScreen() && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION) {
                        const t = global.__mainWindow.getBounds(), r = this.win.getBounds();
                        if (n.height != r.height) return console.log("not handle height"), void (e = !0);
                        let i = n.x - this._mainWinResizedWidth - 10;
                        const o = {
                            width: this._mainWinResizedWidth,
                            x: i,
                            height: n.height,
                            y: n.y
                        };
                        console.log("main orgin bounds", t), console.log("vTalk win bounds", r), console.log("vtalk window resize setMainbounds: " + JSON.stringify(o)), 
                        global.__mainWindow.setBounds(o);
                    }
                }), this.win.addListener("resize", t => {
                    if (console.info("win resize: " + JSON.stringify(this.win.getBounds())), e) {
                        if (e = !1, global.__mainWindow && !global.__mainWindow.isFullScreen() && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION) {
                            const e = global.__mainWindow.getBounds(), t = this.win.getBounds();
                            let n = t.x - this._mainWinResizedWidth - 10;
                            const r = {
                                width: this._mainWinResizedWidth,
                                x: n,
                                height: t.height,
                                y: t.y
                            };
                            console.log("main orgin bounds", e), console.log("vTalk win bounds", t), console.log("vtalk window resize setMainbounds: " + JSON.stringify(r)), 
                            global.__mainWindow.setBounds(r);
                        }
                    } else global.__log.info("win resize not heightResize");
                });
                let t = 1;
                this.win.addListener("resized", () => {
                    if (this.sendVTalkWinResizeDebounce(), global.__log.info(`[vTalk]ai-talk-window resized: ${this.winState}, isWindowAnimating: ${this.isWindowAnimating}`), 
                    this.isWindowAnimating = !1, global.__log.info("[vTalk]ai-talk-window  isWindowAnimating: " + this.isWindowAnimating), 
                    this._resizedWidth = this.win.getNormalBounds().width, this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && this.toFollowMainWin(), 
                    g) {
                        t = -t;
                        const e = this.win.getSize();
                        setTimeout(() => {
                            this.win.setSize(e[0] + t, e[1]);
                        });
                    }
                }), this.win.addListener("show", () => {
                    var e;
                    global.__log.info(`[vTalk][ai-talk-window]show: ${this.win.webContents.isLoading()}， ${this.win.isVisible()}, ${this.win.isNormal()}`);
                    const t = Date.now();
                    try {
                        if (t - this._winHideTime > 100) {
                            const e = this.loadedNoShow ? "cold" : "hot";
                            this.sendWinShowTaskReport(e);
                        }
                        this.loadedNoShow = !1, this.syncZoomAndMinsize(), g && (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isNormal()) && (this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && this._needRePreshow ? this.preShow() : this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && setTimeout(() => {
                            this.toFollowMainWin();
                        }, 200), this._needRePreshow = !1);
                    } catch (e) {
                        global.__log.error(`[vTalk][ai-talk-window]show error: ${JSON.stringify(e)} `);
                    }
                }), this.win.addListener("close", () => {
                    var e, t, n, r, i, o;
                    try {
                        global.__log.info(`[vTalk][ai-talk-window] on close, quitFlag: ${global.__quitFlag}, quitFromDock: ${global.__quitFromDock}, mainWidnow: ${null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isDestroyed()}, ${null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.webContents.isDestroyed()}`), 
                        g && global.__quitFromDock || this._isLogoutClose || !global.__mainWindow || (null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isDestroyed()) || (null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.webContents.isDestroyed()) ? (console.log("ai-talk-closed", global.__quitFlag, this._isLogoutClose, !global.__mainWindow, null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isDestroyed(), null === (o = global.__mainWindow) || void 0 === o ? void 0 : o.webContents.isDestroyed()), 
                        !this._isLogoutClose && g && "arm64" == process.arch || (global.__log.info(`[vTalk][ai-talk-window] on close, isLogoutClose: ${this._isLogoutClose}, isMac: ${g}, arch: ${process.arch}`), 
                        this.sendWinCloseTaskReport("other")), this.talkBeginFlag = !1) : (!g && this.winState == u.AI_TALK_WIN_STATE.SEPARATION && this.win.isMinimized() && (this.win.setOpacity(0), 
                        this.win.restore(), setTimeout(() => {
                            this.win.setOpacity(1);
                        }, 300)), this._isBtnHide = !0);
                    } catch (e) {
                        global.__log.info("[vTalk][ai-talk-window] hide error： " + (e.message || e));
                    }
                }), this.win.addListener("closed", () => {
                    global.__log.info("[vTalk][ai-talk-window]  closed"), this.win.removeAllListeners(), 
                    this.talkBeginFlag = !1, global.__windows.delete("ai-talk"), this._isLogoutClose && (this._isLogoutClose = !1, 
                    global.__log.info("[vTalk][ai-talk-window] isLogoutClose, recreate"));
                }), this.win.addListener("hide", () => {
                    var e, t, n, r, i, o, a;
                    this._winHideTime = Date.now(), console.log("ai-talk window on hide", null === (e = this.win) || void 0 === e ? void 0 : e.isVisible(), null === (t = this.win) || void 0 === t ? void 0 : t.isMinimized(), this.winState, null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isMinimized(), null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.isVisible()), 
                    !this.win || this.win.isVisible() || this.win.isMinimized() || this.winState != u.AI_TALK_WIN_STATE.SEPARATION && ((null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isMinimized()) || !(null === (o = global.__mainWindow) || void 0 === o ? void 0 : o.isVisible())) ? (!g && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && !(null === (a = global.__mainWindow) || void 0 === a ? void 0 : a.isVisible()) || !g && this.winState == u.AI_TALK_WIN_STATE.SEPARATION && this.win.isMinimized()) && this.sendWinCloseTaskReport("other") : (this._isBtnHide ? (this._isBtnHide = !1, 
                    this.sendWinCloseTaskReport("btn")) : this.sendWinCloseTaskReport("other"), this.toEndFollow(), 
                    global.__log.info("ai-talk window on hide invoke"), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_USER_CLOSE), 
                    this.talkBeginFlag = !1), this.postWinState();
                }), this.win.addListener("focus", () => {
                    console.log("vTalk focus");
                }), this.win.addListener("blur", () => {
                    console.log("vTalk blur");
                });
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window]registerAiTalkWinEvent error: " + JSON.stringify(e));
            }
        }
        registerMainWinodwEvent() {
            if (this.mainWinEventMap.clear(), !global.__mainWindow) return;
            if (!g) {
                const e = (e, t) => {
                    var n;
                    if (this.win && (console.log(`mainwindow will-move, ${JSON.stringify(null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getBounds())}, ${JSON.stringify(t)}`), 
                    this._winOper = E.MAIN_MVOING, !g && global.__mainWindow && this.dragFullWindows && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION)) {
                        console.log("[vTalk]on mainWindowMove ADSORPTION");
                        const e = global.__mainWindow.getBounds(), n = o.screen.getDisplayMatching(t), r = n.workArea;
                        console.log(Math.floor(r.width * n.scaleFactor / 2), o.screen.getCursorScreenPoint());
                        const i = o.screen.getCursorScreenPoint();
                        if (!g && (i.x == r.x || i.y == r.y) && Math.abs(t.x - e.x) > 50 || Math.abs(t.y - e.y) > 50 || Math.abs(t.width - e.width) > 50 || Math.abs(t.height - e.height) > 50) return void global.__log.info("[vTalk][ai-talk-window] will-move not handle ADSORPTION");
                        (!g && Math.abs(t.x - e.x) > 50 || Math.abs(t.y - e.y) > 50 || Math.abs(t.width - e.width) > 50 || Math.abs(t.height - e.height) > 50) && global.__log.info("main-window will-move handler, workArea: " + JSON.stringify(r)), 
                        this.toFollowMainWin(void 0, !1, {
                            x: t.x,
                            y: t.y
                        });
                    }
                };
                global.__mainWindow.addListener("will-move", e), this.mainWinEventMap.set("will-move", e);
                const t = e => {
                    if (this.win && (this._winOper = E.NO_OPER, !g)) {
                        if (this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && global.__mainWindow) {
                            const e = global.__mainWindow.getBounds(), t = o.screen.getDisplayMatching(e).workArea;
                            console.log("movedHandler", e, t);
                            const [n] = global.__mainWindow.getMinimumSize();
                            let r = Math.floor(t.width / 2);
                            if (r < n && (r = n), console.log("halfWidth", r), !g && e.height == t.height && e.width == r && e.y == t.y && (e.x == t.x || e.x == t.x + t.width - r)) return void this.onFullScreenHandlerVWin(!0);
                        }
                        this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && (global.__log.info("[vTalk]on mainWindowMoved ADSORPTION"), 
                        this.toFollowMainWin());
                    }
                };
                global.__mainWindow.addListener("moved", t), this.mainWinEventMap.set("moved", t);
            }
            const e = e => {
                var t, n;
                if (this.win && !this.win.isDestroyed()) if (global.__mainWindow && global.__mainWindow.isNormal() && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && this.win.isVisible() && this.win.isNormal()) {
                    if (this._winOper != E.MAIN_RESIZING) return void global.__log.info(`main-window resize, winOper: ${this._winOper} return`);
                    const e = global.__mainWindow.getNormalBounds(), t = this.win.getNormalBounds(), n = {
                        width: this._resizedWidth,
                        x: e.x + e.width + 10,
                        height: e.height,
                        y: e.y
                    };
                    console.log("mainWindow bounds:", e), console.log(`main-window resize, curVTalkBounds: ${JSON.stringify(t)} setVTalkbounds: ${JSON.stringify(n)}`), 
                    this.isWinInScreen(n) ? this.win.setBounds(n) : global.__log.info("main-window resize,setVTalkbounds not in screen");
                } else if (g && global.__mainWindow && this.isWinMaximize(global.__mainWindow)) {
                    if (global.__log.info(`main-window already isWinMaximize on resize': ${global.__mainWindow.getBounds()}, ${this.winIsShowed()}, ${this.winState}`), 
                    this.winIsShowed() && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION) {
                        if (this.winRecord.isVTalkForceLeaveFullScreen || this.winRecord.isVTalkForceUnMaximize) return void global.__log.info("winRecord: " + JSON.stringify(this.winRecord));
                        this.onFullScreenHandlerVWin(!0), setTimeout(() => {
                            this.win.focus(), console.log("on resize", this.win.getParentWindow());
                        }, 200);
                    }
                } else if (g && (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isMaximized())) {
                    console.log("********", null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getBounds()), 
                    console.log("main-window already maximize on resize", global.__mainWindow.getBounds());
                    const e = this.win.getSize()[0], t = global.__mainWindow.cacheBounds.height || global.__mainWindow.getNormalBounds().height;
                    this.win.setSize(e, t);
                }
            };
            global.__mainWindow.addListener("resize", e), this.mainWinEventMap.set("resize", e);
            const t = e => {
                var t, n;
                this.win && (global.__log.info("main-window resized"), console.log("main isFullScreen", this.isWinMaximize(global.__mainWindow), null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isMaximized()), 
                this._mainWinResizedWidth = (null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getNormalBounds().width) || a.MIN_SIZE.WIDTH, 
                this._winOper = E.NO_OPER, this.winIsShowed());
            };
            global.__mainWindow.addListener("resized", t), this.mainWinEventMap.set("resized", t);
            const n = e => {
                this.win && (console.log("__mainWindow will-resize"), this._winOper = E.MAIN_RESIZING);
            };
            if (global.__mainWindow.addListener("will-resize", n), this.mainWinEventMap.set("will-resize", n), 
            g) {
                const e = () => {
                    if (this.win) try {
                        if (this.winRecord = {
                            vTalkShow: this.win && this.win.isVisible() && !this.win.isMinimized(),
                            vTalkState: this.winState,
                            mainWinIsMaximize: this.isWinMaximize(global.__mainWindow)
                        }, this.win && this.win.isVisible() && !this.win.isMinimized() && global.__mainWindow && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION) {
                            global.__mainWindow && this.toEndFollow();
                            const e = global.__mainWindow.getBounds(), t = {
                                y: e.y + v,
                                height: e.height - v,
                                x: e.x + e.width - 400 - 10,
                                width: 400
                            };
                            global.__log.info(`on fullscreen:  ${JSON.stringify(t)}, ${JSON.stringify(e)}`), 
                            this.win.setBounds(t);
                        }
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]enterFullScreenHanlder error: " + JSON.stringify(e));
                    }
                };
                global.__mainWindow.addListener("enter-full-screen", e), this.mainWinEventMap.set("enter-full-screen", e);
                const t = () => {
                    var e, t, n, r, i, o, a;
                    if (this.win) try {
                        this.winIsShowed() && (global.__log.info("on leaveFullScreen"), (null === (e = this.winRecord) || void 0 === e ? void 0 : e.isVTalkForceLeaveFullScreen) ? (this.winRecord.isVTalkForceLeaveFullScreen = !1, 
                        console.log("getOpacity", null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.getOpacity()), 
                        0 == (null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getOpacity()) && global.__mainWindow.setOpacity(1), 
                        this.preShow(!0)) : (console.log(!(null === (r = this.winRecord) || void 0 === r ? void 0 : r.vTalkShow), (null === (i = this.winRecord) || void 0 === i ? void 0 : i.vTalkState) == u.AI_TALK_WIN_STATE.ADSORPTION), 
                        (null === (o = this.winRecord) || void 0 === o ? void 0 : o.vTalkShow) && (null === (a = this.winRecord) || void 0 === a ? void 0 : a.vTalkState) != u.AI_TALK_WIN_STATE.ADSORPTION || this.isWinMaximize(global.__mainWindow) || this.preShow()));
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]leaveFullScreenHanlder error: " + JSON.stringify(e));
                    }
                };
                global.__mainWindow.addListener("leave-full-screen", t), this.mainWinEventMap.set("leave-full-screen", t);
            }
            const r = () => {
                if (this.win) try {
                    global.__log.info("on maximize"), this.winIsShowed() && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && (this.onFullScreenHandlerVWin(!0), 
                    setTimeout(() => {
                        this.win.focus(), console.log("on maximize", this.win.getParentWindow());
                    }, 200));
                } catch (e) {
                    global.__log.error("[vTalk][ai-talk-window] onMaximize error： " + JSON.stringify(e));
                }
            };
            global.__mainWindow.addListener("maximize", r), this.mainWinEventMap.set("maximize", r);
            const i = () => {
                var e, t, n, r;
                if (this.win) {
                    global.__log.info("on unmaximize:" + this.isWinMaximize(global.__mainWindow));
                    try {
                        if (this.winIsShowed()) if (null === (e = this.winRecord) || void 0 === e ? void 0 : e.isVTalkForceUnMaximize) this.winRecord.isVTalkForceUnMaximize = !1, 
                        this.preShow(!0); else if (console.log("onUnmaximize", !(null === (t = this.winRecord) || void 0 === t ? void 0 : t.vTalkShow), (null === (n = this.winRecord) || void 0 === n ? void 0 : n.vTalkState) == u.AI_TALK_WIN_STATE.ADSORPTION), 
                        this.toEndFollow(), global.__mainWindow) {
                            const e = this.win.getSize()[0];
                            this.win.setSize(e, null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.getBounds().height);
                        }
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]onUnmaximize  error： " + JSON.stringify(e));
                    }
                }
            };
            global.__mainWindow.addListener("unmaximize", i), this.mainWinEventMap.set("unmaximize", i);
            const s = () => {
                var e, t, n, r, i, o;
                if (this.win) try {
                    global.__log.info(`__mainWindow show : ${this.winState}, isNormal:${null === (e = this.win) || void 0 === e ? void 0 : e.isNormal()}, isVisible: ${null === (t = this.win) || void 0 === t ? void 0 : t.isVisible()}, ${null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isNormal()}`), 
                    global.__log.info(`showHandler: focused:  ${null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.isFocused()} , visible: ${null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isVisible()}`), 
                    this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && (null === (o = global.__mainWindow) || void 0 === o ? void 0 : o.isNormal()) && global.__mainWindow.isFocused() && (g && this.win && !this.win.isVisible() && this.preShow(), 
                    this.win && !this.win.isVisible() && (this.win.showInactive(), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_SHOW_ANI)));
                } catch (e) {
                    global.__log.error("[vTalk][ai-talk-window] showHanlder error： " + JSON.stringify(e));
                }
            };
            global.__mainWindow.addListener("show", s), this.mainWinEventMap.set("show", s);
            const c = () => {
                global.__log.info("__mainWindow hide");
            };
            global.__mainWindow.addListener("hide", c), this.mainWinEventMap.set("hide", c);
            const d = () => {
                global.__log.info("__mainWindow restore"), this.win && (this.winState != u.AI_TALK_WIN_STATE.ADSORPTION || this.win.isDestroyed() || this.toFollowMainWin(void 0, !1));
            };
            global.__mainWindow.addListener("restore", d), this.mainWinEventMap.set("restore", d);
            const h = () => {
                global.__log.info("__mainWindow blur");
            };
            global.__mainWindow.addListener("blur", h), this.mainWinEventMap.set("blur", h);
            const p = () => {
                global.__log.info("__mainWindow focus");
            };
            global.__mainWindow.addListener("focus", p), this.mainWinEventMap.set("focus", p);
        }
        unregisterMainWindowEvent() {
            this.mainWinEventMap.forEach((e, t) => {
                var n;
                try {
                    null === (n = global.__mainWindow) || void 0 === n || n.removeListener(t, e);
                } catch (e) {
                    global.__log.error("[framework][vTalk][ai-talk-window] [unregitsterMainWindowEvent] removeListener error: " + (e.message || e));
                }
            }), this.mainWinEventMap.clear();
        }
        _recalcPosi(e = !1, t) {
            var n, i, o, a, s, c, d, h, p;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (console.log("_recalcPosi :" + (null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isVisible())), 
                    this._isMainWindowHided || !(null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isVisible()) || !global.__mainWindow.isNormal()) return void global.__log.info(`[vTalk][ai-talk-window][_recalcPosi]  return, _isMainWindowHided: ${this._isMainWindowHided}, ${!(null === (o = global.__mainWindow) || void 0 === o ? void 0 : o.isVisible())}, ${!(null === (a = global.__mainWindow) || void 0 === a ? void 0 : a.isNormal())}`);
                    const r = t || this.win.getBounds();
                    console.log(`[vTalk][ai-talk-window] moved , x: ${r.x}, y: ${r.y}, height: ${r.height}, width: ${r.width}`);
                    const f = (null === (s = global.__mainWindow) || void 0 === s ? void 0 : s.getBounds()) || {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    };
                    console.log(`[vTalk][ai-talk-window] moved targetWindow, x: ${f.x}, y: ${f.y}, height: ${f.height}, width: ${f.width}`);
                    const _ = Math.abs(r.y - f.y), m = Math.abs(f.x + f.width - r.x);
                    _ < 20 && m < 30 ? e ? (g || (null === (c = global.__mainWindow) || void 0 === c || c.focus(), 
                    yield b(150)), this.toFollowMainWin()) : null === (d = global.__mainWindow) || void 0 === d || d.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WIN_ABORING, !0) : e ? (g || this.winState != u.AI_TALK_WIN_STATE.ADSORPTION || (null === (h = global.__mainWindow) || void 0 === h || h.focus(), 
                    yield b(150)), this.toEndFollow(!0)) : null === (p = global.__mainWindow) || void 0 === p || p.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WIN_ABORING, !1);
                } catch (e) {
                    global.__log.error(" [vTalk][ai-talk-window]_recalcPosi  error： " + JSON.stringify(e));
                }
            });
        }
        postWinState() {
            try {
                this.win.setMinimizable(this.winState == u.AI_TALK_WIN_STATE.SEPARATION), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_FOLLOW_POST, this.winState);
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window] postWinState  error： " + JSON.stringify(e));
            }
        }
        registerIpcEvent() {
            try {
                this.ipcEventUnregisterSet.clear(), i.default.getInstance().registerAiTalkShow((e, t) => {
                    global.__log.info("[vTalk][ai-talk-window] on ipc show");
                    const n = Date.now();
                    this.show(n, null == t ? void 0 : t.withLogin);
                }), i.default.getInstance().registerLoginHandler(e => {
                    global.__log.info("[vTalk][ai-talk-window] on ipc login"), !this.win || this.win.isDestroyed() || this.win.webContents.isDestroyed() || !this.isLoaded || global.__log.info("[vTalk][ai-talk-window] already load , not need load again;");
                }), i.default.getInstance().registerAiTalkHide(e => {
                    global.__log.info("[vTalk][ai-talk-window] on ipc hide ");
                    try {
                        this._isBtnHide = !0, this.hide();
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerAiTalkHide  error： " + JSON.stringify(e));
                    }
                }), i.default.getInstance().registerAiTalkMinimize(e => {
                    global.__log.info("[vTalk][ai-talk-window] on ipc minimize ");
                    try {
                        this.toEndFollow(), this.win.minimize();
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerAiTalkMinimize  error： " + JSON.stringify(e));
                    }
                }), i.default.getInstance().registerAiTalkSetting(e => {
                    var t, n;
                    global.__log.info("recevice setting");
                    try {
                        (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isMinimized()) && global.__mainWindow.restore(), 
                        null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_SETTING), 
                        global.__log.info("send setting");
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerAiTalkSetting  error： " + JSON.stringify(e));
                    }
                }), i.default.getInstance().registerThemeColorHandler((e, t) => r.__awaiter(this, void 0, void 0, function*() {
                    this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_THEME_CHANGE, t);
                })), i.default.getInstance().registerRtlChangeHandler((e, {lang: t, isRtl: n}) => r.__awaiter(this, void 0, void 0, function*() {
                    this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_LANG_CHANGE, {
                        lang: t,
                        isRtl: n
                    });
                })), i.default.getInstance().registerAiTalkWinStateSwitch(e => r.__awaiter(this, void 0, void 0, function*() {
                    var e, t, n, r, i, a, s, l, d, p;
                    try {
                        if (global.__log.info("registerAiTalkWinStateSwitch receive"), this.winState == u.AI_TALK_WIN_STATE.ADSORPTION) (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isVisible()) || null === (t = global.__mainWindow) || void 0 === t || t.showInactive(), 
                        g || (null === (n = global.__mainWindow) || void 0 === n || n.focus(), yield b(150)), 
                        this.toEndFollow(); else {
                            if (global.__log.info("isMaximize:" + this.isWinMaximize(global.__mainWindow)), 
                            (null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.isMinimized()) && (g ? global.__mainWindow.restore() : (global.__mainWindow.restore(), 
                            console.log("min", global.__mainWindow.getNormalBounds()), global.__mainWindow.setBounds(global.__mainWindow.getNormalBounds())), 
                            console.log("isMax ", global.__mainWindow.isMaximized())), (null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isFullScreen()) || this.isWinMaximize(global.__mainWindow)) {
                                if (this.winRecord || (this.winRecord = {
                                    vTalkShow: !0,
                                    vTalkState: this.winState
                                }), null === (a = global.__mainWindow) || void 0 === a ? void 0 : a.isFullScreen()) return this.winRecord.isVTalkForceLeaveFullScreen = !0, 
                                g && this.winState == u.AI_TALK_WIN_STATE.SEPARATION && global.__mainWindow.setOpacity(0), 
                                void global.__mainWindow.setFullScreen(!1);
                                if (global.__mainWindow && this.isWinMaximize(global.__mainWindow)) {
                                    this.winRecord.isVTalkForceUnMaximize = !0;
                                    const e = global.__mainWindow.getBounds();
                                    if (g) {
                                        console.log("1111111");
                                        let t = h.removeEmptyKey(global.__mainWindow.cacheBounds);
                                        console.log("222222");
                                        let n = t;
                                        t && !c.isEmpty(t) || (console.log("222222 --- 2"), t = e), console.log(t);
                                        const r = o.screen.getDisplayMatching(t).workArea;
                                        if (console.log("333333"), r.height == t.height && Math.abs(r.width - t.width) < 2) {
                                            console.log("is not real maximize");
                                            let e = global.__mainWindow.getMinimumSize();
                                            n.x = r.x + r.width / 2 - e[0] / 2, n.y = r.y + r.height / 2 - e[1] / 2, n.width = e[0], 
                                            n.height = e[1];
                                        }
                                        null === (s = global.__mainWindow) || void 0 === s || s.setBounds(n), this._mainWinResizedWidth = n.width, 
                                        this.toFollowMainWin(400, !1), null === (l = global.__mainWindow) || void 0 === l || l.unmaximize();
                                    } else global.__mainWindow.unmaximize();
                                    const [t] = global.__mainWindow.getMinimumSize();
                                    e.width <= t && this.toFollowMainWin(400, !1);
                                }
                                return;
                            }
                            global.__mainWindow && !global.__mainWindow.isVisible() && global.__mainWindow.showInactive(), 
                            g && (null === (d = global.__mainWindow) || void 0 === d ? void 0 : d.isMinimized()) || null === (p = global.__mainWindow) || void 0 === p || p.moveAbove(this.win.getMediaSourceId()), 
                            this.preShow(!0, !0);
                        }
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerAiTalkWinStateSwitch  error： " + JSON.stringify(e));
                    }
                })), i.default.getInstance().registerTalkBegin(e => {
                    global.__log.info("[vtalk][ai-talk-window] talk begin"), this.talkBeginFlag = !0;
                }), i.default.getInstance().registerLogoutHandler(() => {
                    global.__log.info("[vtalk][ai-talk-window] logout ,close vtalk window"), this.win.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_STOP_GENERATE), 
                    setTimeout(() => {
                        this._isLogoutClose = !0, this.win.close();
                    }, 500);
                }), g && (i.default.getInstance().registerVTalkMoveStart(e => {
                    var t, n;
                    try {
                        global.__log.info("[vtalk][ai-talk-window] window move start, " + (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isVisible())), 
                        (null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isNormal()) && this.winState == u.AI_TALK_WIN_STATE.ADSORPTION && global.__mainWindow.showInactive();
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerVTalkMoveStart  error： " + JSON.stringify(e));
                    }
                }), i.default.getInstance().registerVTalkMoveIng(e => {
                    global.__log.info("[vtalk][ai-talk-window] window move ing"), this.toEndFollow(), 
                    this._recalcPosi();
                }), i.default.getInstance().registerVTalkMoveEnd(e => {
                    var t;
                    try {
                        global.__log.info("[vtalk][ai-talk-window] window move end"), this._recalcPosi(!0), 
                        this.sendVTalkWinMovedDebounce(), null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_WIN_ABORING, !1), 
                        this.win.focus();
                    } catch (e) {
                        global.__log.error("[vTalk][ai-talk-window]registerVTalkMoveEnd  error： " + JSON.stringify(e));
                    }
                })), d.default.getInstance().registerMainWinVisiblityChange((e, t) => {
                    this._isMainWindowHided = !t;
                });
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window] registerIpcEvent  error： " + JSON.stringify(e));
            }
        }
        unregisterIpcEvent() {
            i.default.getInstance().removeAllIpcListener();
        }
        sendWinShowTaskReport(e) {
            var t;
            try {
                const n = Date.now(), r = n - this.startShowTime;
                this.showTime = n, null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_SHOW_TASK_REPORT, {
                    startup_type: e,
                    duration: r
                });
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window] sendWinShowTaskReport error： " + JSON.stringify(e));
            }
        }
        sendWinCloseTaskReport(e) {
            var t;
            try {
                global.__log.info("sendWinCloseTaskReport");
                const n = Date.now(), r = n - this.showTime;
                this.showTime = n;
                const i = this.win.getBounds(), a = o.screen.getDisplayMatching(i), s = {
                    pos_x: Math.ceil(1e4 * i.x / a.workArea.width) / 100,
                    pos_y: Math.ceil(1e4 * i.y / a.workArea.height) / 100,
                    duration: r,
                    height: i.height,
                    width: i.width,
                    is_absorb: this.winState == u.AI_TALK_WIN_STATE.ADSORPTION ? 1 : 0,
                    session_type: this.talkBeginFlag ? "after" : "before",
                    type: e
                };
                global.__log.info("sendWinCloseTaskReport end"), null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.AI_TALK_MESSAGE_ENUM.AI_TALK_CLOSE_TASK_REPORT, s);
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window]sendWinCloseTaskReport error： " + JSON.stringify(e));
            }
        }
        winIsShowed() {
            return this.win && this.win.isVisible() && this.win.isNormal() && !this.win.webContents.isDestroyed() && !this.win.webContents.isLoading();
        }
        onFullScreenHandlerVWin(e = !1) {
            global.__log.info("onFullScreenHandlerVWin, isMaximized: " + e);
            try {
                if (global.__mainWindow) {
                    this.winState = u.AI_TALK_WIN_STATE.SEPARATION, e ? this.win.setParentWindow(null) : (this.win.setParentWindow(global.__mainWindow), 
                    setTimeout(() => {
                        this.win.setParentWindow(null);
                    }, 200)), this.postWinState();
                    const t = global.__mainWindow.getBounds(), n = o.screen.getDisplayMatching(t).workArea, r = global.__mainWindow.webContents.getZoomFactor(), i = {
                        y: n.y + v * r,
                        height: n.height - v * r,
                        x: t.x + t.width - 400 - 10,
                        width: 400
                    };
                    global.__log.info(`fullscreen : ${JSON.stringify(this.win.getBounds())},${JSON.stringify(i)}, ${JSON.stringify(t)}`), 
                    this.win.setBounds(i);
                }
            } catch (e) {
                global.__log.error("[vTalk][ai-talk-window]onFullScreenHandlerVWin  error： " + JSON.stringify(e));
            }
        }
        isWinInScreen(e) {
            const t = this.win, n = e || t.getBounds(), r = o.screen.getDisplayNearestPoint(n).workArea;
            return n.x >= r.x && n.x <= r.x + r.width && n.y >= r.y && n.y <= r.y + r.height;
        }
        syncZoomAndMinsize() {
            if (global.__mainWindow) {
                console.log("[vTalk][ai-talk-window]syncZoomAndMinsize");
                const e = (this.winState == u.AI_TALK_WIN_STATE.ADSORPTION ? global.__mainWindow : this.win).getBounds(), t = o.screen.getDisplayMatching(e).workArea;
                console.log(`cloestScreenBounds: ${JSON.stringify(t)}, curBounds: ${JSON.stringify(e)}`);
                const n = global.__mainWindow.webContents.getZoomFactor();
                console.log("cloestScreenBounds: " + n), this.win.webContents.send("WINDOW_FACTOR_CHANGE", {
                    zoom: n
                });
                const [r, i] = this.win.getMinimumSize();
                let a = r;
                t.width >= 400 ? a = 400 : r > t.width && (a = t.width);
                let s = global.__mainWindow.getMinimumSize()[1];
                a == r && i == s || this.win.setMinimumSize(a, s);
            }
        }
        isWinMaximize(e) {
            if (e && e.isMaximized()) {
                if (!g) return !0;
                {
                    const t = e.getBounds(), n = o.screen.getDisplayMatching(t).workArea;
                    if (console.log("isWinMaximize", t, n), n.height == t.height && Math.abs(n.width - t.width) < 2) return !0;
                }
            }
            return !1;
        }
        handleMainWindowMaximize() {
            g && this.win.setParentWindow(null);
        }
    }
    t.default = w;
}
