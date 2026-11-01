// analysis/pretty/main.js:131512; webpack module 1712
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bindSecondInstanceLifecycle = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(216)), a = r.__importDefault(n(6)), s = n(63), l = n(11), c = n(800);
    t.bindSecondInstanceLifecycle = function(e) {
        global.__log.info("[bindSecondInstanceLifecycle]"), i.app.on("second-instance", (t, n) => {
            var r;
            if (c.handleOpenUrl(n)) return;
            global.__log.info("[second-instance]");
            let i = "";
            o.default.set({
                hostnameFromService: "",
                nameFromService: "",
                isUsbFromService: !1,
                connSeq: -1,
                pendingIntentId: "",
                patchUpdate: "",
                fmSource: "",
                fileDeviceId: "",
                files: "",
                switchConnectId: ""
            }), global.__log.info("[commandLine] " + n), n.forEach(e => {
                const t = e.match(/([A-Za-z0-9_-]+)=?(.*)/);
                if (null != t && t[1] && t[2]) switch (global.__log.info(`param: ${t[1]}, ${t[2]}`), 
                t[1]) {
                  case "--h":
                    o.default.set({
                        hostnameFromService: t[2]
                    });
                    break;

                  case "--n":
                    o.default.set({
                        nameFromService: t[2]
                    });
                    break;

                  case "--usb":
                    o.default.set({
                        isUsbFromService: !0
                    });
                    break;

                  case "--seq":
                    o.default.set({
                        connSeq: parseInt(t[2])
                    });
                    break;

                  case "--pendingintentid":
                    o.default.set({
                        pendingIntentId: t[2]
                    });
                    break;

                  case "--questnotifyurl":
                    global.__log.info("[questNotifyUrl] " + t[2]), i = t[2];
                    break;

                  case "--patchupdate":
                    o.default.set({
                        patchUpdate: t[2]
                    });
                    break;

                  case "--target":
                    o.default.set({
                        fmSource: t[2]
                    });
                    break;

                  case "--deviceid":
                    o.default.set({
                        fileDeviceId: t[2]
                    });
                    break;

                  case "--filepath":
                    o.default.set({
                        files: t[2]
                    });
                    break;

                  case "--switchconnectid":
                  case "--switchConnectId":
                    o.default.set({
                        switchConnectId: t[2]
                    });
                }
            });
            const {pendingIntentId: u, fmSource: d, fileDeviceId: h, files: p, patchUpdate: f, switchConnectId: _} = o.default.get();
            if (s.mainWindow) {
                if (global.__log.info("second-instance mainwindow exist"), global.__windows.has("welcome")) {
                    global.__log.info("has welcome and return");
                    let e = global.__windows.get("welcome");
                    return null == e || e.show(), void global.__log.info("welcome " + e);
                }
                "" !== u && (null === s.mainWindow || void 0 === s.mainWindow || s.mainWindow.webContents.send(l.NOTIFICATION_MESSAGE_ENUM.LAUNCH_MIRROR_SCREEN, u), 
                global.__log.info("[second-instance][launch-mirror-screen]," + u)), "" !== i && (a.default.setItem("closeQuestNotify", !0), 
                null === s.mainWindow || void 0 === s.mainWindow || s.mainWindow.webContents.send(l.NOTIFICATION_MESSAGE_ENUM.QUEST_NOTIFY_OPEN_LINK, i), 
                global.__log.info("[second-instance][open questNotify link]," + i)), "" !== f && (null === (r = null === s.mainWindow || void 0 === s.mainWindow ? void 0 : s.mainWindow.webContents) || void 0 === r || r.send(l.HOT_UPDATE_MESSAGE_ENUM.UPDATE_NOTIFICATION_CLICK), 
                global.__log.info("[second-instance][patch update notify]")), global.__log.info("---------main-----再次打开时的参数:" + JSON.stringify(process.argv)), 
                "" !== d ? null === s.mainWindow || void 0 === s.mainWindow || s.mainWindow.webContents.send(l.APP_MESSAGE_ENUM.OPEN_FILE_MANAGER, {
                    data: {
                        fileDeviceId: h,
                        files: p,
                        target: d
                    }
                }) : null === s.mainWindow || void 0 === s.mainWindow || s.mainWindow.webContents.send(l.APP_MESSAGE_ENUM.RESTART_APP, {
                    data: n
                }), "" !== _ && (global.__log.info("[second-instance]SWITCH_CONNECT_TYPE "), null === s.mainWindow || void 0 === s.mainWindow || s.mainWindow.webContents.send(l.APP_MESSAGE_ENUM.SWITCH_CONNECT_TYPE, {
                    switchConnectId: _
                })), "" == u && (s.mainWindow.isMinimized() && s.mainWindow.restore(), s.mainWindow.isVisible() || global.__windows.has("welcome") || (global.__log.info("show mainwindow"), 
                s.mainWindow.show()), s.mainWindow.focus(), "" == u && s.mainWindow.focus()), e(!1);
            } else global.__log.info("Application initialization in progress");
        });
    };
}
