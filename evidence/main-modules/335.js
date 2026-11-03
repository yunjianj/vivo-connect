// analysis/pretty/main.js:36207; webpack module 335
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NotificationWindow = t.NotificationViewBounds = void 0;
    const r = n(0), i = n(41), o = n(11), a = n(2), s = n(160), l = n(682), c = r.__importDefault(n(50)), u = n(66), d = r.__importDefault(n(65)), h = n(1374), p = r.__importDefault(n(230)), f = n(231), {execSync: _} = n(10), m = "darwin" == process.platform, g = m || a.systemPreferences.isAeroGlassEnabled(), v = {
        frame: !1,
        resizable: !1,
        skipTaskbar: !0,
        transparent: m,
        alwaysOnTop: !0,
        fullscreenable: !1,
        acceptFirstMouse: m,
        titleBarStyle: "hidden",
        trafficLightPosition: {
            x: -999,
            y: -999
        },
        useContentSize: !0,
        vibrancy: m ? "fullscreen-ui" : void 0,
        visualEffectState: "active",
        movable: !1,
        maximizable: !1,
        minimizable: !1,
        webPreferences: {
            webviewTag: !0,
            webSecurity: !1,
            nodeIntegration: !0,
            preload: "",
            contextIsolation: !1,
            devTools: !0
        },
        show: !1
    };
    t.NotificationViewBounds = {
        phonesync: {
            width: 300,
            height: 362,
            offsetX: 0,
            offsetY: 0
        },
        phonelink: {
            width: 300,
            height: 120,
            offsetX: 0,
            offsetY: 0
        },
        feedbackMessage: {
            width: 300,
            height: 120,
            x: 420,
            y: 184,
            offsetX: 0,
            offsetY: 0
        },
        notesync: {
            width: 300,
            height: 120,
            x: 420,
            y: 184,
            offsetX: 0,
            offsetY: 0
        },
        disconnectprompt: {
            width: 300,
            height: 332,
            offsetX: 0,
            offsetY: 0
        },
        verifyCode: {
            width: 300,
            height: 120,
            offsetX: 0,
            offsetY: 0
        },
        extscreen: {
            width: 300,
            height: 114,
            offsetX: 0,
            offsetY: m ? 198 : 74
        },
        passBack: {
            width: 300,
            height: 112,
            offsetX: 0,
            offsetY: 0
        },
        noticePrompt: {
            width: 300,
            height: 120,
            offsetX: 0,
            offsetY: 0
        },
        shareImport: {
            width: 300,
            height: 112,
            offsetX: 0,
            offsetY: 0
        }
    };
    class y {
        constructor(e) {
            this.isPhoneCallShow = !1, this.isLockScreen = !1, global.__log.info(`[notification-window] notification window construct  ${e}, isSupportTransparent： ${g}`), 
            !this.win || this.win.isDestroyed() ? (p.default.on("show", () => {
                this.isPhoneCallShow = !0, this.resetPosition();
            }).on("hide", () => {
                this.isPhoneCallShow = !1, this.resetPosition();
            }), c.default.$on(u.FRAMEWORK_MSG.CAMERA_SHARING_WINDOW_POSITION_CHANGED, () => {
                this.resetPosition();
            }), c.default.$on(u.FRAMEWORK_MSG.FEEDBACK_MESSAGE_WINDOW_POSITION_CHANGED, () => {
                this.resetPosition();
            }), a.ipcMain.on(o.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, (e, t) => {
                var n;
                global.__log.info("[notification-window] APP_THEME_SCHEME_CHANGE: " + JSON.stringify(t)), 
                null === (n = this.win) || void 0 === n || n.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.CHANGE_THEME, t);
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.NOTIFICATION_RECEIVE_MESSAGE, (e, t, n) => {
                this.isLockScreen || (global.__log.info(`[notification-window] NOTIFICATION_RECEIVE_MESSAGE received, viewName: ${t}, scene: ${null == n ? void 0 : n.scene}, timestamp: ${Date.now()}`), 
                t === i.NotificationViewEnum.NOTICE_PROMPT ? (null == n ? void 0 : n.isUpdate) ? f.CameraSharingWindowInstance.getInstance().updateData(n) : c.default.$emit(u.FRAMEWORK_MSG.CREATE_CAMERA_SHARING_WINDOW, n) : this.receiveMessage(t, n));
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.SHOW_NOTIFICATION, (e, t, n) => {
                if (this.win && this.win.isVisible()) global.__log.info("[notification-window] notification SHOW_NOTIFICATION end: isVisible " + t); else {
                    global.__log.info(`[notification-window] notification SHOW_NOTIFICATION start ${t} size: ${JSON.stringify(n)}`);
                    try {
                        let e = !this.win || this.win.isDestroyed();
                        n ? (this.diSize = Object.assign({}, n), setTimeout(() => {
                            e || (global.__log.info(`[notification-window] notification SHOW_NOTIFICATION start>>>1>>> ${t} size: ${JSON.stringify(n)}`), 
                            this.show(n));
                        }, 100)) : (this.diSize = {
                            width: void 0,
                            height: void 0
                        }, e || (global.__log.info(`[notification-window] notification SHOW_NOTIFICATION start>>>2>>> ${t} size: ${JSON.stringify(n)}`), 
                        h.throttleExecuteNoTrailing_500(() => {
                            this.show(n);
                        })));
                        let r = global.__mainWindow;
                        global.__log.info("[notification-window] mainWindow?.isVisible:" + (null == r ? void 0 : r.isVisible())), 
                        (null == r ? void 0 : r.isVisible()) || null == r || r.hide();
                    } catch (e) {
                        global.__log.error(`[notification-window] show ${t} notification error:${e}`);
                    }
                }
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.HIDE_NOTIFICATION, (e, t, n) => {
                if (global.__log.info(`[notification-window] notification on ipc HIDE_NOTIFICATION viewName:${t},currentShowView: ${this.currentShowView}`), 
                t && t != this.currentShowView) return void global.__log.warn(`[notification-window] can not HIDE_NOTIFICATION, because current view( ${this.currentShowView} ) is not ${t} `);
                if (!this.win) return void global.__log.warn("[notification-window] can not HIDE_NOTIFICATION, because win is null ");
                let r = !this.win || this.win.isDestroyed();
                !r && this.win && this.win && this.win.isVisible() && this.win.isNormal() && (global.__log.info("notification HIDE_NOTIFICATION "), 
                setTimeout(() => {
                    m && t !== i.NotificationViewEnum.NOTE_SYNC ? this.hideMainWindow(() => {
                        this.hide();
                    }) : this.hide(), global.__log.info(`[notification-window] is ${t} window destroyed:${r},hide notification`);
                }, 200));
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.MOVE_MAIN_WINDOW_TOP, () => {
                try {
                    let e = global.__mainWindow;
                    null == e || e.show(), global.__log.info("[notification-window] set main window on top"), 
                    setTimeout(() => {
                        this.hide();
                    }, 200);
                } catch (e) {
                    global.__log.error("[notification-window] set main window on top error:" + e);
                }
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.NOTICE_PROMPT_ACTION, (e, t, n) => {
                var r;
                global.__log.info(`[notification-window] NOTICE_PROMPT_ACTION, actionChannel: ${t}, actionData: ${JSON.stringify(n)}`), 
                null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.NOTICE_PROMPT_ACTION, t, n);
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE, (e, t, n) => {
                var r;
                global.__log.info("[framework][notification-window] ipcMain NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE, " + JSON.stringify(t)), 
                null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE, t, n);
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE_RESULT, (e, t) => {
                var n, r;
                global.__log.info("[framework][notification-window] ipcMain NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE_RESULT, " + t), 
                null === (r = null === (n = this.win) || void 0 === n ? void 0 : n.webContents) || void 0 === r || r.send(o.NOTIFICATION_MESSAGE_ENUM.CLOUD_DOWNLOAD_IMAGE_RESULT, t);
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.OPEN_PICTURE_RELAY_SWITCH, e => {
                var t;
                global.__log.info("[framework][notification-window] ipcMain send: NOTIFICATION_MESSAGE_ENUM.OPEN_PICTURE_RELAY_SWITCH"), 
                null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.OPEN_PICTURE_RELAY_SWITCH);
            }), a.ipcMain.on("CONNECT_DEVICE_USB", (e, t) => {
                var n;
                const r = global.__mainWindow;
                r && (r.isMinimized() && r.restore(), r.show(), r.focus()), null === (n = global.__mainWindow) || void 0 === n || n.webContents.send("CONNECT_DEVICE_USB", t);
            }), a.ipcMain.on(o.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, {lang: t, isRtl: n}) => {
                var r;
                null === (r = this.win) || void 0 === r || r.webContents.send(o.NOTIFICATION_MESSAGE_ENUM.NOTIFICATION_CHANGE_LANG, {
                    lang: t,
                    isRtl: n
                });
            }), a.ipcMain.on(o.NOTIFICATION_MESSAGE_ENUM.PHONE_CALL_STATE_SYNC, (e, t) => {
                global.__log.info("[notification-window] phoneCallStateSync: " + JSON.stringify(t));
                try {
                    this.phoneCallState = t, this.startLinkAniMove();
                } catch (e) {
                    global.__log.error("[notification-window] phoneCallStateSync error: " + (e.message || e));
                }
            }), a.powerMonitor.on("lock-screen", () => {
                this.isLockScreen = !0, global.__log.info("[notification-window] screen locked, suppress new notifications");
            }), a.powerMonitor.on("unlock-screen", () => {
                this.isLockScreen = !1, global.__log.info("[notification-window] screen unlocked, suppress new notifications");
            })) : global.__log.warn("[notification-window] construct already exist");
        }
        getPhoneCallWinHeight() {
            return this.isPhoneCallShow && this.phoneCallState.h + 12 || 0;
        }
        getCameraSharingWinHeight() {
            const e = f.CameraSharingWindowInstance.winHeight;
            return e > 0 ? e + 12 : 0;
        }
        resetPosition() {
            this.win && !this.win.isDestroyed() && this.win.isVisible() && this.currentShowView && this.recalcBoundsNoAni(this.currentShowView);
        }
        createWin() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!global.__mainWindow) return;
                const e = global.__mainWindow.getBounds(), n = a.screen.getDisplayMatching(e).workArea, r = v;
                r.width = t.NotificationViewBounds.disconnectprompt.width, r.height = t.NotificationViewBounds.disconnectprompt.height, 
                r.x = n.x + n.width - t.NotificationViewBounds.disconnectprompt.width - 30, r.y = n.y + n.height - t.NotificationViewBounds.disconnectprompt.height - 30, 
                this.win = yield d.default.newBrowserWindow(r), this.win.setTitle(""), global.__transparentWindows.set("notification", this.win), 
                this.win.webContents.on("did-finish-load", () => {
                    global.__log.info("[notification-window] load end ");
                }), this.win.webContents.on("did-fail-load", (e, t, n) => {
                    global.__log.info(`[notification-window] load error, errCode: ${t}, errorDesc: ${n} `);
                }), this.win.webContents.on("did-frame-finish-load", () => {
                    global.__log.info("[notification-window] did-frame-finish-load ");
                }), this.win.webContents.on("did-start-loading", () => {
                    global.__log.info("[notification-window] did-start-loading ");
                }), this.win.webContents.on("did-stop-loading", () => {
                    global.__log.info("[notification-window] did-stop-loading ");
                }), this.win.webContents.on("dom-ready", () => {
                    global.__log.info("[notification-window] dom-ready ");
                }), this.win.webContents.on("will-navigate", () => {
                    global.__log.info("[notification-window] will-navigate ");
                }), this.win.webContents.on("did-navigate", () => {
                    global.__log.info("[notification-window] did-navigate ");
                }), this.win.webContents.on("did-frame-navigate", () => {
                    global.__log.info("[notification-window] did-frame-navigate ");
                }), this.win.webContents.on("did-navigate-in-page", () => {
                    global.__log.info("[notification-window] did-navigate-in-page ");
                }), this.win.webContents.on("render-process-gone", (e, t) => {
                    global.__log.error("[notification-window] render-process-gone detaul: " + JSON.stringify(t)), 
                    this.win && !this.win.isDestroyed() && this.win.destroy();
                });
            });
        }
        static getInstance() {
            return this.instance ? global.__log.info("[notification-window] notification window exist") : (global.__log.info("[notification-window] notification window reinit"), 
            this.instance = new y), this.instance;
        }
        show(e) {
            var t;
            global.__log.info("[notification-window] start show, " + (null === (t = this._winAnimation) || void 0 === t ? void 0 : t.getAniState()));
            a.screen.getAllDisplays().length > 1 ? this.preShow(!0, e) : this.preShow(!1, e);
        }
        doShow(e) {
            var t;
            null === (t = global.__transparentWindows.get("download_window")) || void 0 === t || t.setAlwaysOnTop(!0, "torn-off-menu"), 
            m ? this.win.setAlwaysOnTop(!0, "status") : this.win.setAlwaysOnTop(!0, "screen-saver"), 
            this._winAnimation && "END" != this._winAnimation.getAniState() ? this._winAnimation.addListener("end", () => {
                global.__log.info("[notification-window] ani end , to show"), this.aniShow(e);
            }) : this.aniShow(e);
        }
        preShow(e, t) {
            e ? (this.recalcBoundsNoAni(this.currentShowView), setTimeout(() => {
                this.win.showInactive(), this.doShow(t);
            }, 10)) : (this.win.showInactive(), this.doShow(t));
        }
        aniShow(e) {
            var n, r;
            const i = this.checkRightHasScreen(this.currentShowView, e);
            if (global.__log.info(`[notification-window]  showInactive: ${null === (n = this.win) || void 0 === n ? void 0 : n.isVisible()}, destroyed: ${null === (r = this.win) || void 0 === r ? void 0 : r.isDestroyed()}, hasRight: ${i}`), 
            i) this.recalcBoundsNoAni(this.currentShowView, e); else {
                const n = this.recalcBounds(this.currentShowView, e);
                setTimeout(() => {
                    var r;
                    if (n && (this._showAniPosition = n), global.__log.info(`[notification-window]  aniParams: ${JSON.stringify(n)}, opacity: ${null === (r = this.win) || void 0 === r ? void 0 : r.getOpacity()}`), 
                    (null == n ? void 0 : n.start) && (null == n ? void 0 : n.end)) {
                        const r = {
                            height: (null == e ? void 0 : e.height) || t.NotificationViewBounds[this.currentShowView].height,
                            width: (null == e ? void 0 : e.width) || t.NotificationViewBounds[this.currentShowView].width
                        };
                        this._winAnimation = new s.WinAnimation(this.win, r, n.start, n.end, 400, 0, "ease"), 
                        this._winAnimation.start();
                    }
                }, 100);
            }
        }
        hide() {
            var e;
            global.__log.info("[notification-window] start hide, aniState：" + (null === (e = this._winAnimation) || void 0 === e ? void 0 : e.getAniState())), 
            this.win.setAlwaysOnTop(!1), this._winAnimation && "END" != this._winAnimation.getAniState() ? this._winAnimation.on("end", () => {
                this.aniHide();
            }) : this.aniHide();
        }
        aniHide() {
            var e;
            if (global.__log.info("[notification-window] start ani hide, aniState：" + (null === (e = this._winAnimation) || void 0 === e ? void 0 : e.getAniState())), 
            !this.checkRightHasScreen(this.currentShowView) && this._showAniPosition) {
                const e = this.win.getSize(), n = {
                    height: e[1] || t.NotificationViewBounds[this.currentShowView].height,
                    width: e[0] || t.NotificationViewBounds[this.currentShowView].height
                }, r = new s.WinAnimation(this.win, n, this._showAniPosition.end, this._showAniPosition.start, 150, 0, [ .18, .11, .39, .98 ]);
                this._winAnimation = r, r.on("end", () => {
                    var e;
                    global.__log.info("[notification-window]  hide ani on end" + (null === (e = this._winAnimation) || void 0 === e ? void 0 : e.getAniState())), 
                    setTimeout(() => {
                        var e, t;
                        global.__log.info("[notification-window] hide ani on end' + " + (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isVisible())), 
                        this.win.close(), global.__transparentWindows.delete("notification"), null === (t = this._winAnimation) || void 0 === t || t.removeAllListeners(), 
                        this._winAnimation = void 0;
                    }, 0);
                }), r.start();
            } else global.__log.info("[notification-window]  aniHide , because of right display , hide "), 
            this.win.close(), global.__transparentWindows.delete("notification");
        }
        hideMainWindow(e) {
            let t = global.__mainWindow;
            null == t || t.webContents.send(o.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE), 
            a.ipcMain.once(o.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE_REPLY, (n, r) => {
                global.__log.info("[notification-window] visibleState:" + r.visibleState), "hidden" == r.visibleState && ((null == t ? void 0 : t.isFullScreen()) || null == t || t.hide()), 
                e();
            });
        }
        recalcBounds(e, n) {
            if (!global.__mainWindow) return;
            const r = global.__mainWindow.getBounds(), i = a.screen.getDisplayMatching(r).workArea;
            let o = (null == n ? void 0 : n.width) || t.NotificationViewBounds[e].width, s = (null == n ? void 0 : n.height) || t.NotificationViewBounds[e].height, l = i.x + i.width - 30, c = i.y + i.height - s - 30 - this.getPhoneCallWinHeight() - this.getCameraSharingWinHeight(), u = 0;
            if ("extscreen" === e) try {
                if (m) {
                    const e = _("defaults read com.apple.dock orientation").toString().trim();
                    switch (e) {
                      case "left":
                        console.log("Dock is on the left side of the screen."), u = 198;
                        break;

                      case "bottom":
                        console.log("Dock is at the bottom of the screen."), u = 84;
                        break;

                      case "right":
                        console.log("Dock is on the right side of the screen."), u = 198;
                        break;

                      default:
                        console.log("Unknown Dock orientation:", e);
                    }
                }
                l = i.x + i.width - (t.NotificationViewBounds[e].offsetX || 30), c = i.y + i.height - s - (u || t.NotificationViewBounds[e].offsetY || 30) - this.getPhoneCallWinHeight() - this.getCameraSharingWinHeight();
            } catch (e) {
                console.error("Error reading Dock orientation:", e);
            }
            const d = {
                x: l,
                y: c,
                width: o,
                height: s
            };
            return global.__log.info("[notification-window] recalcBounds setBounds: " + JSON.stringify(d)), 
            this.win.setBounds(d), global.__log.info(`[notification-window] cloestWindowBounds wrokArea, width: ${i.width}, height: ${i.height}, x: ${i.x}, y: ${i.y}`), 
            global.__log.info(`[notification-window] notification bounds, width: ${t.NotificationViewBounds[e].width}, height: ${t.NotificationViewBounds[e].height}, x: ${l}, y: ${c}`), 
            {
                start: {
                    x: l
                },
                end: {
                    x: l - o
                }
            };
        }
        recalcBoundsNoAni(e, n) {
            if (!global.__mainWindow) return;
            const r = global.__mainWindow.getBounds(), i = a.screen.getDisplayMatching(r).workArea;
            let o = (null == n ? void 0 : n.width) || t.NotificationViewBounds[e].width, s = (null == n ? void 0 : n.height) || t.NotificationViewBounds[e].height, l = i.x + i.width - o - 30, c = i.y + i.height - s - 30 - this.getPhoneCallWinHeight() - this.getCameraSharingWinHeight();
            "extscreen" === e && (l = i.x + i.width - o - (t.NotificationViewBounds[e].offsetX || 30), 
            c = i.y + i.height - s - (t.NotificationViewBounds[e].offsetY || 30) - this.getPhoneCallWinHeight() - this.getCameraSharingWinHeight());
            const u = {
                x: l,
                y: c,
                width: o,
                height: s
            };
            global.__log.info("[notification-window] recalcBoundsNoAni setBounds: " + JSON.stringify(u)), 
            this.win.setBounds(u);
        }
        checkRightHasScreen(e, n) {
            if (!global.__mainWindow) return !1;
            const r = global.__mainWindow.getBounds(), i = a.screen.getDisplayMatching(r).workArea;
            let o = (null == n ? void 0 : n.height) || t.NotificationViewBounds[e].height;
            const l = i.y + i.height - o - 30;
            return s.WinAnimation.mainWindowHasRightDisplay(l);
        }
        startLinkAniMove() {
            var e;
            if (this.win && !this.win.isDestroyed() && this.win.isVisible()) {
                const t = {
                    width: null === (e = this.phoneCallState) || void 0 === e ? void 0 : e.w,
                    height: this.phoneCallState.h,
                    x: this.phoneCallState.x,
                    y: this.phoneCallState.y
                };
                this.checkIsSameDisplay(t, this.win) ? this._winAnimation && "END" != this._winAnimation.getAniState() ? this._winAnimation.addListener("end", () => {
                    this.createPhoneCallLinkMoveAni();
                }) : this.createPhoneCallLinkMoveAni() : global.__log.info(`[Notification][notification-window] phoneCall win is not same display with curNotification(${this.currentShowView})`);
            }
        }
        createPhoneCallLinkMoveAni() {
            if (this.win && !this.win.isDestroyed() && this.win.isVisible()) {
                const e = this.win.getBounds(), t = a.screen.getDisplayMatching(e);
                global.__log.info(`[notification-window] [currentDisplay.workArea]: ${JSON.stringify(t.workArea)}, [notifyBounds]: ${JSON.stringify(e)}`);
                const n = e.y;
                let r = e.y, i = 0, o = "ease";
                if (t.workArea.y + t.workArea.height - (e.y + e.height) < 42 ? this.phoneCallState && this.phoneCallState.state == l.PhoneCallState.PHONE_CALL_SHOW && (r = n - this.phoneCallState.h - 12, 
                i = 400, o = [ .25, .1, .25, 1 ]) : this.phoneCallState && this.phoneCallState.state != l.PhoneCallState.PHONE_CALL_SHOW && (r = t.workArea.y + t.workArea.height - e.height - 30, 
                i = 250, o = [ .18, .11, .39, .98 ]), global.__log.info(`[notification-window] [startY]: ${n}, [endY]: ${r}`), 
                n && r && n != r) {
                    const t = {
                        height: e.height,
                        width: e.width
                    }, a = new s.WinAnimation(this.win, t, {
                        y: n
                    }, {
                        y: r
                    }, i, 0, o);
                    this._winAnimation = a, a.start();
                }
            }
        }
        checkIsSameDisplay(e, t) {
            if (t = t || global.__mainWindow || void 0) {
                const n = a.screen.getDisplayMatching(t.getBounds()), r = a.screen.getDisplayMatching(e);
                return global.__log.info(`[notification-window] ________isSame: ${n.id == r.id};_______display: ${JSON.stringify(n)}, _______________targetDisplay: ${JSON.stringify(r)}_________________`), 
                n.id == r.id;
            }
            return !1;
        }
        adjustPosition(e) {
            global.__log.info("[notification-window] start adjustPosition"), Math.abs(e) < 5 && a.screen.getAllDisplays().length < 2 || this.win && !this.win.isDestroyed() && this.win.isVisible() && this.show(this.diSize);
        }
        sleep(e) {
            return new Promise(t => {
                setTimeout(() => {
                    t(!0);
                }, e);
            });
        }
        receiveMessage(e, t) {
            var n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[notification-window] NOTIFICATION_RECEIVE_MESSAGE start: currentShowView: ${this.currentShowView} viewName:${e}`);
                let r = !1;
                this.win && !(null === (n = this.win) || void 0 === n ? void 0 : n.isDestroyed()) || (yield this.createWin()), 
                this.win && this.win.isVisible() && (this.currentShowView == e ? (null == t ? void 0 : t.force) && (global.__log.info("[notification-window] NOTIFICATION_RECEIVE_MESSAGE set isNeedHideLastWin true: data.force is true "), 
                r = !0) : (global.__log.info("[notification-window] NOTIFICATION_RECEIVE_MESSAGE set isNeedHideLastWin true:not same viewName"), 
                r = !0)), this.currentShowView = e, r && (global.__log.info("[notification-window] NOTIFICATION_RECEIVE_MESSAGE isNeedHideLastWin: true"), 
                this.hide(), yield this.sleep(500)), this.win && !(null === (i = this.win) || void 0 === i ? void 0 : i.isDestroyed()) || (yield this.createWin()), 
                c.default.$emit(u.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: this.win.id,
                    routePath: "/" + e,
                    data: t
                }), global.__log.info("[notification-window] NOTIFICATION_RECEIVE_MESSAGE end");
            });
        }
    }
    t.NotificationWindow = y;
}
