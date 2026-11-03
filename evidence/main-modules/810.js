// analysis/pretty/main.js:73932; webpack module 810
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(116)), a = r.__importDefault(n(1)), s = r.__importStar(n(8)), l = n(2), c = n(248), u = n(384), d = r.__importDefault(n(6)), h = r.__importDefault(n(987)), p = r.__importDefault(n(156)), f = r.__importDefault(n(705)), _ = r.__importDefault(n(89)), m = r.__importDefault(n(265)), g = r.__importDefault(n(1489)), v = r.__importDefault(n(109)), y = r.__importDefault(n(354)), E = r.__importDefault(n(700)), b = r.__importDefault(n(1497)), w = r.__importDefault(n(1498)), S = r.__importDefault(n(729)), T = r.__importDefault(n(216)), A = r.__importDefault(n(1500)), O = r.__importDefault(n(26)), C = r.__importDefault(n(147)), N = r.__importDefault(n(219)), I = r.__importDefault(n(1501)), R = r.__importDefault(n(76)), D = n(201), L = n(1504), k = n(56), M = n(63), P = n(1506), x = n(1677), F = n(1711), j = n(684), U = n(1712), W = n(800), B = n(801), H = n(11), $ = n(46), Y = n(100), z = n(1713), G = n(41), q = r.__importDefault(n(660)), V = r.__importDefault(n(148)), K = r.__importDefault(n(113)), J = r.__importDefault(n(336)), X = n(240), Q = r.__importDefault(n(1715)), Z = n(1716), ee = r.__importDefault(n(360)), te = n(94), ne = r.__importDefault(n(284)), re = r.__importDefault(n(1717)), ie = r.__importDefault(n(65)), oe = r.__importDefault(n(720)), ae = n(1718);
    D.registerCrashReporter(), global.__static = a.default.join(__dirname, "/static").replace(/\\/g, "\\\\"), 
    global.__launchTimeLog = {
        appReady: Date.now(),
        appLaunchTotal: Date.now()
    }, global.__appIcon = null, global.__log = D.initMainLog({}), global.__encryptLog = D.initMainLog({
        encrypt: !0
    }), global.__fmLog = new Q.default("main", "./file-manager"), global.__fm__asmLog = new Q.default("main", "./file-manager/ai-search-manager"), 
    global.__cmLog = new Q.default("main", "./common-module/common-manager"), global.__cm__mpLog = new Q.default("main", "./common-module/common-manager/media-player-manager"), 
    global.__cLog = new Q.default("main", "./connection"), global.__dbLog = new Q.default("main", "./device-backup"), 
    global.__windows = new Map, global.__notifications = new Map, global.__transparentWindows = new Map, 
    global.__sqlite3 = u.verbose(), global.__quitFlag = !0;
    const se = new R.default([ G.LogModule.FRAMEWORK, "common" ]).getExpandLog(), {isMac: le, isDev: ce} = O.default.getSysEnv, ue = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT);
    function de() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = O.default.getConfigIni();
            "win32" === process.platform && "1" == (null == e ? void 0 : e.DisableHardwareAcceleration) && (se.info("common.ts app.disableHardwareAcceleration"), 
            l.app.disableHardwareAcceleration()), le && process.umask(0);
            const t = l.app.requestSingleInstanceLock();
            if ($.getPcDeviceId(), console.log("gotTheLock", t), !t) return se.info("App exist:" + t), 
            void l.app.exit();
            d.default.setItem("bootStartTime", Date.now());
            const o = d.default.getItem("serverRoomEnv") || "";
            d.default.removeItem("serverRoomEnv"), d.default.removeItem("isUseDynamicConfig"), 
            J.default.getInstance().initAppBeforeReady(), l.app.on("ready", () => r.__awaiter(this, void 0, void 0, function*() {
                var e, t, r, s, u, h, p, f;
                global.__launchTimeLog.appReady = Date.now() - global.__launchTimeLog.appReady;
                try {
                    const {setReportSwitchEnabled: r} = n(799), i = d.default.getItem("reportSwitch"), o = null == i || 1 == i;
                    r(o), null === (t = null === (e = global.__log) || void 0 === e ? void 0 : e.info) || void 0 === t || t.call(e, "[common] 启动时写入埋点开关配置: enabled=" + o);
                } catch (e) {
                    null === (s = null === (r = global.__log) || void 0 === r ? void 0 : r.error) || void 0 === s || s.call(r, "[common] 写入埋点开关配置失败: " + e);
                }
                c.initialize(), ae.clearStore([ "getConnectedDeviceInfoList", "getConnectedDeviceIdList", "getConnectedDeviceBleIdList" ]);
                try {
                    const e = function() {
                        var e;
                        try {
                            const t = "win32" === process.platform, r = n(125), o = "PCSuite";
                            let s = "/Library/Preferences/pcsuite/switch_host.ini";
                            const l = "switch_host.ini", c = process.env.APP_DIR || "", u = t ? a.default.join(a.default.dirname(c), "../" + l) : s;
                            return (null === (e = r.parse(i.default.readFileSync(u, "utf-8"))[o]) || void 0 === e ? void 0 : e.Host) || "";
                        } catch (e) {
                            return "";
                        }
                    }(), t = (f = e) ? -1 !== f.indexOf("test.vivo.com") ? "test" : -1 !== f.indexOf("pre.vivo.com") ? "pre" : -1 !== f.indexOf("psuite.vivo.com") ? "prod" : "" : "";
                    t && d.default.setItem("serverRoomEnv", t), "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT || !o || !t || o === t || (se.info(`[record-clear] 检测到环境切换 ${o} -> ${t}，准备清理 record 本地数据`), 
                    J.default.getInstance().clearRecordDataOnEnvChange(o, t).then(e => {
                        se.info(`[record-clear] clearRecordDataOnEnvChange 完成 ok=${e} ${o} -> ${t}`);
                    }).catch(e => {
                        var t;
                        se.info("[record-clear] clearRecordDataOnEnvChange 失败但不阻塞启动: " + ((null === (t = e) || void 0 === t ? void 0 : t.message) || e));
                    }));
                } catch (e) {
                    se.info("[record-clear] 环境检测异常(非致命): " + ((null === (u = e) || void 0 === u ? void 0 : u.message) || e));
                }
                if (function() {
                    var e, t;
                    se.info("check first install", null === (e = d.default.getItem("useLogin")) || void 0 === e ? void 0 : e.mode), 
                    (null === (t = d.default.getItem("useLogin")) || void 0 === t ? void 0 : t.mode) || (se.info("first install clear cookie"), 
                    l.session.defaultSession.clearStorageData({
                        storages: [ "cookies" ]
                    }).then(() => {
                        se.info("first install Cookies cleared success");
                    }).catch(e => {
                        se.error("Cookies clear error: ", (null == e ? void 0 : e.message) || e);
                    }));
                }(), l.app.setAppUserModelId("com.vivo.pcsuite"), l.app.setAsDefaultProtocolClient(B.OPEN_URL.replace("://", "")), 
                he(), ee.default.patchDownloadNotInstalled(), (null === (h = d.default.getItem("updateDir")) || void 0 === h ? void 0 : h.updateDir) && 1 == (null === (p = d.default.getItem("closeAfterUpdate")) || void 0 === p ? void 0 : p.closeAfterUpdate) && !le) w.default.downloadNotInstalled(); else {
                    const {vivoshareIp: e, vivosharePort: t, isOpenIdSame: n} = T.default.get();
                    "win32" === process.platform && W.handleOpenUrl(process.argv), yield M.createWindow("" != e && "" != t), 
                    M.createNotificationBrowserWindow(), W.handleOpenUrlMainWindowFocus(), l.Menu.setApplicationMenu(z.getMenuTemplate()), 
                    le && (d.default.setItem("closeAfterUpdate", {
                        closeAfterUpdate: 0
                    }), d.default.setItem("updateDir", {
                        updateDir: ""
                    })), $.delay(200, () => {
                        S.default(), X.startVivoshareLink({
                            ip: e,
                            port: t,
                            sameAccount: n,
                            sceneType: "launch"
                        });
                    });
                }
                if (l.protocol.registerFileProtocol("localapp", (e, t) => {
                    let n = e.url.replace("localapp://", "");
                    try {
                        n = decodeURI(n);
                    } catch (e) {
                        se.error("localapp decodeURI failed: ", n);
                    }
                    try {
                        return t(n);
                    } catch (e) {
                        return console.error(e), t("not Found");
                    }
                }), !le) {
                    !d.default.has("usbAutoOpenPcsuite") && d.default.setItem("usbAutoOpenPcsuite", !1);
                }
                v.default.getInstance(), A.default.getInstance().start(), $.delay(300, () => {
                    V.default.getSystemAndHardwareInfo(), V.default.initAppLaunch(), V.default.getPcName();
                }), j.bindScreenLifecycle(), $.getNodeOsUserName(), te.initDefaultReceiveAndBackupPath(), 
                ne.default.init(), re.default.start(), ie.default.init(), le || oe.default.init();
            })), l.app.on("web-contents-created", (e, t) => {
                c.enable(t), se.info("App web-contents-created event"), "webview" === t.getType() && (t.setWindowOpenHandler(({url: e}) => (se.info("App web-contents-created new-window url:", e), 
                {
                    action: "deny"
                })), t.on("will-navigate", (e, t) => {
                    se.info("App web-contents-created will-navigate url:", t), -1 === t.indexOf("/signin/usernamerecovery") && -1 === t.indexOf("/signin/v2/usernamerecovery") || e.preventDefault();
                }));
            }), process.on("uncaughtException", e => {
                console.log("error", e);
                se.info("[main-process]uncaughtException" + e);
            }), U.bindSecondInstanceLifecycle(ge), W.bindOpenUrlLifecycle(), x.bindAppLifecycle(), 
            F.bindPowerMonitorLifecycle(), $.getIniData(), $.handleExEnv(), d.default.setItem("channelCode", ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") || ""), 
            $.getCountryCodeByOsLocaleSet(), w.default.checkUpdate();
        });
    }
    se.info("process.env.COMMIT_INFO: feat-dev7.0.1-claw: f0ccbd0a22d3167efffad8f65794370967bc04b9"), 
    se.info("process.env.BUILD_TIME: 2026-10-15 14:28:50"), process.env.APP_DIR = l.app.getAppPath(), 
    se.info(`\n  process.env.APP_DIR: ${process.env.APP_DIR}\n  exe目录: ${a.default.dirname(l.app.getPath("exe"))}\n`), 
    se.info(`\n  common.ts process.env.IS_EXPORT: ${"undefined" != typeof __buildConfig__ ? __buildConfig__.IS_EXPORT : ""}\n`), 
    se.info(`\n  common.ts process.env.CHANNEL_CODE: ${"undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : ""}\n`), 
    t.init = de;
    const he = () => {
        P.initBridgeListener();
        const e = N.default.getInstance();
        l.ipcMain.on(H.NOTIFICATION_MESSAGE_ENUM.CREATE_NOTIFICATION, pe), l.ipcMain.on(H.DIALOG_MESSAGE_ENUM.OPEN_DIRECTORY_DIALOG, fe), 
        l.ipcMain.on(H.FILE_MESSAGE_ENUM.ON_DRAG_START, _e), l.ipcMain.on(H.LocaleManagerMsg.ON_LOCALE_CHANGE, ve), 
        C.default.getInstance().registerIpcEvent(), e.registerIpcEvent(), I.default.getInstance().registerIpcEvent(), 
        !ue && q.default.getInstance().registerIpcEvent(), e.listenWindowMounted(() => {
            se.info("WINDOW_MOUNTED"), function() {
                var e;
                try {
                    g.default.getInstance();
                } catch (t) {
                    null === (e = global.__log) || void 0 === e || e.info("FreeTransferManager init error");
                }
                let t = _.default.getInstance();
                global.__connectionMainUtil = p.default.getInstance(), global.__winServiceManager = f.default.getInstance(), 
                global.__deviceManager = t, global.__mainWindow && (se.info("did-finish-load2"), 
                y.default.getInstance().setWebContent(global.__mainWindow.webContents), t.setWebContent(global.__mainWindow.webContents), 
                m.default.getInstance().setWebContent(global.__mainWindow.webContents), E.default.getInstance().setWebContent(global.__mainWindow.webContents));
                global.__connectionManager = h.default.getInstance(), global.__clickQuitFromDockRef = {
                    clear() {
                        global.__clickQuitFromDock = !1;
                    },
                    getValue: () => global.__clickQuitFromDock
                }, se.info("connect manager mounted");
                let r = n(95).default;
                r.DestoryHttpServer(), r.CreateHttpServer(), se.info("CreateHttpServer ok");
                let i = n(358).default;
                i.DestoryHttpServer(), i.CreateHttpServer();
                const {hostnameFromService: o} = T.default.get();
                o && "" != o && (console.log("启动时hostnameFromService不为空，说明通过vivoservice拉起"), ge(!0));
            }();
        }), function() {
            let e;
            l.ipcMain.on(H.FILE_MESSAGE_ENUM.UPDATE_FILE_GET_PROGRESS, (t, n, r, o) => {
                se.info("[update-file-get-progress] start url: " + n);
                let a = 0;
                const s = i.default.createReadStream(r);
                s.on("data", function(e) {
                    a += e.length, t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_PROGRESS, {
                        bytesReceived: a
                    });
                }).on("error", e => {
                    se.info("createReadStream error "), t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_ERROR, e);
                });
                const l = {
                    url: n,
                    strictSSL: !1,
                    timeout: 36e3,
                    headers: o
                };
                se.info("[update-file-get-progress] ready to upload file , url is " + n), e = K.default.post(l, (e, n, r) => {
                    if (e) return se.info("request error " + e), void t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_ERROR, e);
                    se.info("[update-file-get-progress] response: " + JSON.stringify(n)), n && 200 === n.statusCode ? (se.info("[update-file-get-progress] update file success"), 
                    t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_SUCCESS, n.body)) : t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_ERROR, n.body);
                }), s.pipe("darwin" == process.platform ? e.request : e).on("data", () => {
                    se.info("data piece ");
                }).on("end", () => {
                    se.info("data end ");
                }).on("close", () => {
                    se.info("data close ");
                }).on("abort", () => {
                    se.info("on abort "), t.sender.send(H.FILE_MESSAGE_ENUM.UPDATE_FILE_ABORT_SUCCESS);
                }).on("error", e => {
                    se.info("stream-error: " + e);
                });
            }), l.ipcMain.on(H.FILE_MESSAGE_ENUM.UPDATE_FILE_ABORT, () => {
                null == e || e.abort();
            });
        }(), Z.initNoteListener(), l.ipcMain.on(H.FILE_MESSAGE_ENUM.OPEN_PC_FILE, me), l.ipcMain.on(H.NOTIFICATION_MESSAGE_ENUM.TOAST_DEFAULT_ICON, e => {
            let t;
            t = ce ? a.default.join(__dirname, "../../static/snoretoast.png") : le ? a.default.join(__dirname, "../../dist/electron/static/snoretoast.png") : a.default.resolve(a.default.dirname(l.app.getPath("exe")), "snoretoast.png"), 
            se.info("defaultIcon:" + t), e.reply(H.NOTIFICATION_MESSAGE_ENUM.TOAST_DEFAULT_ICON_REPLY, {
                defaultIcon: t
            });
        }), l.ipcMain.on(H.NOTE_MULTI_WINDOW.NEW_NOTE_WINDOW, (e, t) => M.createNoteWindow(t)), 
        l.ipcMain.on(H.CREATE_NEW_WINDOW.CREATE_NEW_WINDOW_CLOUD, (e, t) => M.createCloudWindow(t)), 
        ue && l.ipcMain.on(H.APP_MESSAGE_ENUM.RESTART_APP_INIT_UPDATA, () => function() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield $.getCountryCodeByOsLocaleSet();
                const e = l.BrowserWindow.getFocusedWindow();
                v.default.getInstance().sendSyncMessage(), e && e.reload();
            });
        }()), l.ipcMain.handle("getDeviceInfo", () => {
            const e = s.hostname() || "PC设备", t = p.default.getInstance().getHostName() || e, n = "darwin" === s.platform() ? "Mac" : "Windows", r = $.getPcDeviceId();
            return global.__log.info(`getDeviceInfo: ${e}, utf code: ${t}, pcDeviceId: ${r}`), 
            {
                pcDeviceName: t,
                pcDeviceId: r,
                clientId: 130,
                pcModelCode: n
            };
        }), l.ipcMain.handle("write-exif-to-file", (e, t, n) => r.__awaiter(void 0, void 0, void 0, function*() {
            try {
                return yield o.default.writeFile(t, Buffer.from(n)), {
                    success: !0
                };
            } catch (e) {
                return global.__log.error("[write-exif-to-file] error: " + ((null == e ? void 0 : e.message) || e)), 
                {
                    success: !1,
                    error: (null == e ? void 0 : e.message) || "写入文件失败"
                };
            }
        })), l.ipcMain.handle("write-exif-to-file-safe", (e, t, n) => r.__awaiter(void 0, void 0, void 0, function*() {
            const e = t + ".exif_tmp";
            try {
                return yield o.default.writeFile(e, Buffer.from(n)), yield o.default.rename(e, t), 
                {
                    success: !0
                };
            } catch (n) {
                try {
                    yield o.default.unlink(e);
                } catch (e) {}
                return global.__log.error(`[write-exif-to-file-safe] 写入新文件失败: newFilePath=${t}, error=${(null == n ? void 0 : n.message) || n}`), 
                {
                    success: !1,
                    error: (null == n ? void 0 : n.message) || "安全写入文件失败"
                };
            }
        })), l.ipcMain.handle("delete-file", (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
            try {
                return yield o.default.unlink(t), {
                    success: !0
                };
            } catch (e) {
                return global.__log.error(`[delete-file] 删除旧文件失败: filePath=${t}, error=${(null == e ? void 0 : e.message) || e}`), 
                {
                    success: !1,
                    error: (null == e ? void 0 : e.message) || "删除文件失败"
                };
            }
        })), l.ipcMain.handle("modify-exif-orientation", (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
            const {filePath: e, mimeType: n, targetOrientation: r, newFilePath: i} = t;
            try {
                const t = yield o.default.readFile(e), a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), s = L.modifyImageExif(a, n, r);
                if (!s) return global.__log.error("[modify-exif-orientation] EXIF修改返回null: " + e), 
                {
                    success: !1,
                    error: "EXIF修改失败"
                };
                const l = i + ".exif_tmp";
                try {
                    yield o.default.writeFile(l, Buffer.from(s)), yield o.default.rename(l, i);
                } catch (e) {
                    try {
                        yield o.default.unlink(l);
                    } catch (e) {}
                    return global.__log.error(`[modify-exif-orientation] 写入新文件失败: ${i}, error=${(null == e ? void 0 : e.message) || e}`), 
                    {
                        success: !1,
                        error: (null == e ? void 0 : e.message) || "写入文件失败"
                    };
                }
                return global.__log.info(`[modify-exif-orientation] 完成: ${e} → ${i} targetOrientation：${r}`), 
                {
                    success: !0,
                    newFileSize: s.byteLength
                };
            } catch (t) {
                return global.__log.error(`[modify-exif-orientation] 异常: ${e}, error=${(null == t ? void 0 : t.message) || t}`), 
                {
                    success: !1,
                    error: (null == t ? void 0 : t.message) || "EXIF处理异常"
                };
            }
        }));
    };
    function pe(e, t, n, r) {
        const i = d.default.getItem("notifyOn");
        if (se.info("notification notifyOn:" + i), se.info("enter create notification"), 
        se.info("iconURL:" + n), !1 === i) return void se.info("notification notifyOn off:" + i);
        const o = {
            title: r ? t.title : `【${t.appName}】${t.title}`,
            body: void 0 === t.content ? " " : t.content,
            silent: !1,
            icon: r ? "" : n,
            hasReply: !1,
            timeoutType: "default",
            sound: "",
            urgency: "normal"
        };
        if (le) {
            const e = (new Date).valueOf(), n = new l.Notification(o);
            n.on("click", () => {
                se.info("Mac notification click"), global.__notifications.delete(e);
                let n = global.__mainWindow;
                r ? (d.default.setItem("closeQuestNotify", !0), null == n || n.webContents.send(H.NOTIFICATION_MESSAGE_ENUM.QUEST_NOTIFY_OPEN_LINK, t.questNotifyUrl)) : (null == n || n.webContents.send(H.NOTIFICATION_MESSAGE_ENUM.LAUNCH_MIRROR_SCREEN, t.pendingIntentId), 
                se.info(`mainWindow?.webContents.send('launch-mirror-screen',${t.pendingIntentId})`));
            }), n.on("close", () => {
                se.info("Mac notification close"), global.__notifications.delete(e), null === M.mainWindow || void 0 === M.mainWindow || M.mainWindow.webContents.send(H.NOTIFICATION_MESSAGE_ENUM.NOTIFICATION_CLOSE_CLICK);
            }), se.info("Notification isSupport: " + l.Notification.isSupported()), n.on("show", () => {
                se.info("Mac notification  showed");
            }).on("failed", (e, t) => {
                se.error("Mac notification failed: " + JSON.stringify(t));
            }).on("action", () => {
                se.info("Mac notification  on action");
            }), n.show(), global.__notifications.set(e, n);
        } else {
            const e = {
                title: r ? t.title : `【${t.appName}】${t.title}`,
                msg: void 0 === t.content ? " " : t.content,
                iconPath: n
            };
            r ? e.questNotifyUrl = t.questNotifyUrl : e.pendingIntentId = t.pendingIntentId, 
            b.default.toast(e);
        }
    }
    function fe(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!global.__mainWindow) return;
            let n = yield l.dialog.showOpenDialogSync(global.__mainWindow, {
                properties: [ t ]
            });
            n && e.sender.send(H.FILE_MESSAGE_ENUM.SELECTED_ITEM, n[0]);
        });
    }
    function _e(e, t, n) {
        const r = [];
        t = t.filter(e => {
            const t = i.default.existsSync(e);
            return t || r.push(e), t;
        });
        try {
            const {createFromDataURL: i} = l.nativeImage, o = i(n);
            if (!t.length) return void e.sender.send(H.FILE_MESSAGE_ENUM.ON_DRAG_END, {
                isExistFailFile: !0,
                failFileList: r
            });
            const a = {
                files: t,
                icon: o
            };
            se.info("start drag filePathList: " + JSON.stringify(t)), se.info("start drag failFileList: " + JSON.stringify(r)), 
            e.sender.startDrag(a), e.sender.send(H.FILE_MESSAGE_ENUM.ON_DRAG_END, {
                isExistFailFile: !!r.length,
                failFileList: r
            });
        } catch (t) {
            se.info("drag err: " + JSON.stringify(t)), e.sender.send(H.FILE_MESSAGE_ENUM.ON_DRAG_END, {
                isExistFailFile: !0,
                failFileList: r,
                error: t
            });
        }
    }
    function me(e, t, n = !1) {
        try {
            i.default.stat(t, r => {
                r ? e.reply(H.FILE_MESSAGE_ENUM.OPEN_PC_FILE_FAILED, t) : n ? l.shell.openPath(t) : l.shell.showItemInFolder(t);
            });
        } catch (n) {
            e.reply(H.FILE_MESSAGE_ENUM.OPEN_PC_FILE_FAILED, t);
        }
    }
    const ge = e => {
        const {hostnameFromService: t, isUsbFromService: n, nameFromService: r, connSeq: i, connectFlag: o, deviceId: a, isAutoConnect: s, vivoAccount: l, deviceType: c, isOpenIdSame: u} = T.default.get();
        if ("" != t) {
            if (se.info(`doConnectionRequest hostnameFromService=${t},  isUsbFromService=${n} nameFromService=${r}`), 
            M.mainWindow) if (n) e && setTimeout(() => {
                null === M.mainWindow || void 0 === M.mainWindow || M.mainWindow.webContents.send(k.ConnectionRendererEvent.ON_USB_CONNECT_REQEUST, t), 
                null === M.mainWindow || void 0 === M.mainWindow || M.mainWindow.show(), null === M.mainWindow || void 0 === M.mainWindow || M.mainWindow.focus();
            }, 100); else {
                const e = {
                    hostnameFromService: t,
                    nameFromService: r,
                    isUsbFromService: n,
                    connSeq: i,
                    connectFlag: "string" == typeof o && o ? o : Y.CONNECT_MODE.WLAN,
                    deviceId: a,
                    isAutoConnect: s,
                    vivoAccount: l,
                    deviceType: c,
                    isOpenIdSame: u
                };
                se.info("doConnectionRequest phoneInfo=" + JSON.stringify(e)), M.mainWindow.webContents.send(k.ConnectionRendererEvent.ON_CONNECT_REQEUST, e);
            }
            T.default.set({
                hostnameFromService: "",
                connSeq: -1
            });
        }
    };
    function ve() {
        l.Menu.setApplicationMenu(z.getMenuTemplate());
    }
    t.default = {
        init: de
    };
}
