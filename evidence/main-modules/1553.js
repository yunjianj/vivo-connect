// analysis/pretty/main.js:118805; webpack module 1553
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importStar(n(4)), o = r.__importStar(n(8)), a = n(2), s = r.__importDefault(n(686)), l = r.__importDefault(n(182)), c = n(1554), u = n(731), d = n(46), h = n(687), p = n(11), f = r.__importDefault(n(156)), _ = r.__importDefault(n(109)), m = r.__importDefault(n(26)), g = r.__importDefault(n(157)), v = r.__importDefault(n(148)), y = r.__importDefault(n(110)), E = r.__importDefault(n(336)), b = r.__importDefault(n(1558)), w = r.__importDefault(n(1562)), S = (n(55), 
    n(1566)), T = n(1567), A = [ "CHECK_LOCAL_DATA_COMMON", "IS_HAS_LOCAL_DIRTY_DATA_COMMON", "CHECK_LOCAL_DATA_SINGLE", "IS_HAS_LOCAL_DIRTY_DATA_SINGLE", "CLEAR_ALL_LOCAL_DATA_COMMON", "CHECK_ALL_SYNC", "CHECK_SYNCED_DATA_COMMON" ];
    let O = !1;
    const C = Object.assign(Object.assign({
        minimizeWindow(e, t) {
            const {moduleName: n, isMainWindow: r, closeAll: i} = e;
            if (i) global.__windows.forEach(e => {
                e.minimize();
            }); else if (r) global.__windows.forEach(e => {
                if (e.isMainBrowser) {
                    e.minimize();
                }
            }); else {
                global.__windows.get(n).minimize();
            }
        },
        setWindowToTop(e, t) {
            let n = global.__windows.get(e.moduleName);
            n ? (n.isVisible() || n.show(), n.isMinimized() && (null == n || n.restore()), n.moveTop(), 
            n.focus(), t({})) : t({
                success: !1,
                message: "Window not found"
            });
        },
        closeMainWindow(e, t) {
            const {closeMode: n = "1"} = e, r = global.__windows.get("mainWindow");
            global.__log.info("当前关闭窗口的方式:" + n), "0" == n ? (null == r || r.hide(), global.__windows.forEach((e, t) => {
                "ai-talk" == t && g.default.getInstance().isAdsorption() && e.hide();
            }), t({})) : (t({}), null == r || r.close());
        },
        exitApp(e, t) {
            global.__mainWindowState.resetStateToDefault(), a.app.exit();
        },
        quitApp(e, t) {
            a.app.quit();
        },
        setMainWindowFullScreen(e, t) {
            global.__log.info("setMainWindowFullScreen");
            const n = global.__windows.get("mainWindow"), r = n.isMaximized();
            r ? n.unmaximize() : n.maximize(), t({
                isMax: !r
            });
        },
        getMainWindowISMaximize(e, t) {
            var n;
            t({
                isMax: null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isMaximized()
            });
        },
        getSubWindowISMaximize(e, t) {
            var n, r, i;
            t({
                isMax: null === (i = null === (r = null === (n = global.__windows) || void 0 === n ? void 0 : n.get) || void 0 === r ? void 0 : r.call(n, "note" + e.guid)) || void 0 === i ? void 0 : i.isMaximized(),
                guid: e.guid
            });
        },
        triggerUpdateMessage(e, t) {
            var n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[bridges][${e.moduleId}]模块请求同步服务进行[${e.cmd}]同步操作`);
                const r = {
                    msg: Object.assign({}, e),
                    moduleId: e.moduleId
                };
                if (global.connectStatus === h.SYNC_CONNECT_STATUS.CONNECT_ERROR || global.connectStatus === h.SYNC_CONNECT_STATUS.CONNECT_CLOSE) {
                    let r = global.__mainWindow, o = global.__windows.get("welcome");
                    A.includes(e.cmd) && (global.__log.info(`[bridges][triggerUpdateMessage][${e.moduleId}][${e.cmd}] SYNC_NOTIFI_CLOSE`), 
                    o ? null === (n = null == o ? void 0 : o.webContents) || void 0 === n || n.send(p.NOTIFICATION_MESSAGE_ENUM.SYNC_NOTIFI_CLOSE) : null === (i = null == r ? void 0 : r.webContents) || void 0 === i || i.send(p.NOTIFICATION_MESSAGE_ENUM.SYNC_NOTIFI_CLOSE)), 
                    global.__log.info(`[bridges][${e.moduleId}][${e.cmd}] cancel`), t({
                        msg: "服务异常"
                    });
                }
                yield _.default.getInstance().sendServiceMsg(r), t({
                    msg: "通知完成"
                });
            });
        },
        monitorUpdateMessage({winId: e}, t) {
            global.__log.info(`[bridges][${e}]窗体同步服务实例化`), _.default.getInstance().addWindowsSyncInstance({
                callback: t,
                winId: e
            });
        },
        repairWinService(e, t) {
            global.__log.info("bridge repairWinService"), _.default.getInstance().repairWinService(), 
            t();
        },
        clearTemp({tempId: e}, t) {
            const r = n(232), i = n(1), {app: o} = n(2), a = i.join(o.getPath("userData"), "temp/" + e);
            r.remove(a).then(() => {
                t && t(!0);
            }).catch(e => {
                t && t(!1, e);
            });
        },
        imagesCompress({imgUrls: e, tempId: t}, r) {
            if (0 === e.length) return void r({
                code: 0,
                msg: "success",
                data: e
            });
            const o = n(1), {app: a} = n(2), s = n(232), l = o.join(a.getPath("userData"), "temp/" + t);
            global.__log.info("imagesCompress === outputDir:" + l), s.ensureDirSync(l);
            var c;
            (c = {
                urls: e,
                outputDir: l
            }, new Promise((e, t) => {
                const r = o.resolve(__dirname, "../../dist/electron/static/task/imagesCompress.js");
                global.__log.info("imagesCompress_process ==> taskPath: " + r);
                const a = i.existsSync(r);
                global.__log.info("imagesCompress_process ==> taskPath exists: " + a);
                const {fork: s} = n(10), l = s(r);
                l.on("exit", (e, n) => {
                    2 != e && (global.__log.info(`imagesCompress_process exit==> code: ${e} = signal: ${n} = killed: ${l.killed}`), 
                    t(new Error("进程异常退出")));
                }), l.on("error", e => {
                    global.__log.info("imagesCompress_process error==> " + e.message), l.killed || l.kill(2);
                }), l.on("message", t => {
                    const {type: n, value: r} = t;
                    "info" === n ? global.__log.info("imagesCompress_process info==" + r) : "result" === n && e(r);
                }), l.channel ? l.send(c) : (l.killed || l.kill(2), t(new Error("进程启动失败")));
            })).then(e => {
                r({
                    code: 0,
                    msg: "success",
                    data: e
                });
            }).catch(e => {
                global.__log.info("imagesCompress === catch:" + e.message), r({
                    code: 1,
                    msg: e.message
                });
            });
        },
        triggerExportFile({contentStr: e, type: t, landscape: i = !1}, o) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("word" !== t) {
                    if ("pdf" === t) try {
                        const t = {
                            show: !1,
                            pageSize: "A4",
                            printBackground: !0,
                            offscreen: !0,
                            webPreferences: {
                                webSecurity: !1,
                                webviewTag: !0,
                                nodeIntegration: !0,
                                contextIsolation: !1
                            }
                        }, {BrowserWindow: a} = n(2), s = n(1), c = !1, d = s.resolve(__dirname, (c ? "../../../" : "../../dist/electron/") + "static/html/pdf.html");
                        let h = new a(t);
                        h.loadFile(d), h.webContents.on("dom-ready", () => {
                            global.__log.info("导出事件: dom-ready");
                            const t = encodeURIComponent(e);
                            h.webContents.executeJavaScript(`document.documentElement.innerHTML = decodeURIComponent("${t}");`), 
                            h.webContents.executeJavaScript("\n                  Promise.all([\n                        ...Array.from(document.querySelectorAll('img')).map(img => {\n                          return new Promise((resolve) => {\n                            if (img.complete) {\n                              resolve();\n                              return;\n                            }\n                            img.onload = () => resolve();\n                            img.onerror = () => resolve();\n                          })\n                        }),\n                        new Promise(async (resolve, reject) => {\n                          const testElement = document.createElement('div');\n                          testElement.className = 'plugin-doc';\n                          document.body.appendChild(testElement);\n                          for (let i = 0; i < 15; i++) {\n                            await new Promise(resolve => setTimeout(resolve, 60));\n                            const computedStyle = window.getComputedStyle(testElement);\n                            if (computedStyle.display === 'flex' || i === 14) {\n                              document.body.removeChild(testElement);\n                              resolve(1);\n                              break;\n                            }\n                          }\n                        })\n                  ]).finally(() => {\n                    document.title = 'imageloaded'\n                  })\n                ");
                        }), h.webContents.on("page-title-updated", (t, n) => {
                            global.__log.info("导出事件: page-title-updated:" + n), "imageloaded" === n && setTimeout(() => {
                                h.webContents.printToPDF({
                                    pageSize: "A4",
                                    landscape: i
                                }).then(e => r.__awaiter(this, void 0, void 0, function*() {
                                    global.__log.info(`>>>>pdf文件导出大小: ${null == e ? void 0 : e.length}}`);
                                    let t = yield Uint8Array.from(e).buffer;
                                    o({
                                        msg: "pdf导出成功",
                                        code: u.ExportFileCode.ENUM_RESULT_SUCCESS,
                                        data: t
                                    }), h.destroy(), h = null;
                                })).catch(t => {
                                    global.__log.info(`>>>>pdf文件导出失败: ${t}; contentStr: ${l.default.Encrypt(e)}`), o({
                                        msg: "pdf文件导出失败",
                                        code: u.ExportFileCode.ENUM_RESULT_FAILED
                                    }), h.destroy(), h = null;
                                });
                            }, 60);
                        });
                    } catch (t) {
                        global.__log.info(`>>>>pdf文件导出失败: ${t}; contentStr: ${l.default.Encrypt(e)}`), o({
                            msg: "pdf文件导出失败",
                            code: u.ExportFileCode.ENUM_RESULT_FAILED
                        });
                    }
                } else try {
                    const t = T(e, {
                        preserveMediaQueries: !1,
                        preserveFontFaces: !1
                    }), n = yield S(t, "", {
                        creator: "vivo办公套件",
                        lastModifiedBy: "vivo办公套件",
                        keywords: [ "vivo办公套件" ],
                        font: "Microsoft Yahei"
                    });
                    setTimeout(() => {
                        o({
                            msg: "word导出成功",
                            code: u.ExportFileCode.ENUM_RESULT_SUCCESS,
                            data: n,
                            timestamp: Date.now()
                        });
                    }, 300);
                } catch (t) {
                    global.__log.info(`>>>>word文件导出失败: ${t}; contentStr: ${l.default.Encrypt(e)}`), 
                    o({
                        msg: "word文件导出失败",
                        code: u.ExportFileCode.ENUM_RESULT_FAILED
                    });
                }
            });
        },
        exportDialogSave(e, t) {
            let n = e.replace(/(.*\/)*([^.]+)/i, "$2");
            a.dialog.showSaveDialog({
                defaultPath: n,
                filters: [ {
                    name: t,
                    extensions: [ t ]
                } ]
            }).then(t => r.__awaiter(this, void 0, void 0, function*() {
                console.log(t);
                let n = i.createReadStream(e), r = i.createWriteStream(t.filePath);
                n.on("data", function(e) {
                    console.log("readStream chunk:", e);
                }).on("error", e => {
                    console.error("readStream error ", e);
                }), n.pipe(r);
            }));
        },
        triggerRecallOfficeSoft({filePath: e}, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.log("triggerRecallOfficeSoft"), "" !== e ? yield c.recallOfficeSoft(e).then(() => {
                    global.__log.info(">>>>文件已打开:" + e), t({
                        msg: "打开成功"
                    });
                }).catch(n => {
                    throw global.__log.error(">>>>文件打开失败:" + e), t({
                        msg: "文件打开失败",
                        err: n
                    }), new Error(n);
                }) : t({
                    msg: "请检查文件路径是否正确"
                });
            });
        },
        setLoginItemSettings(e, t) {
            global.__log.info("[setLoginItemSettings]:" + (null == e ? void 0 : e.openAtLogin)), 
            v.default.setAutoStart(e.openAtLogin), t();
        },
        getLoginItemSettings(e, t) {
            const n = v.default.getAutoStart();
            global.__log.info("[getLoginItemSettings]:" + n), t({
                openAtLogin: n
            });
        },
        setLoginOtherSettings(e, t) {
            d.setLoginOtherSettings(e), t();
        },
        askForMediaAccess(e, t) {
            a.systemPreferences.askForMediaAccess("microphone").then(e => {
                console.log("Microphone access granted:", e), t(e);
            });
        },
        specifyBrowserWindowCommunicate(e, t) {
            let n = global.__windows.get(e.moduleName);
            if (n) try {
                n.webContents.executeJavaScript(`window.acrossWindowCommunicate.call(window, "${e.data}")`);
            } catch (e) {
                t(!0);
            }
            t(!0);
        },
        systemTimeChange(e, t) {
            let n = global.__mainWindow;
            O || ("darwin" == process.platform ? (a.systemPreferences.subscribeLocalNotification("kCFTimeZoneSystemTimeZoneDidChangeNotification", t), 
            a.systemPreferences.subscribeLocalNotification("NSSystemClockDidChangeNotification", t)) : null == n || n.hookWindowMessage(30, t), 
            O = !0);
        },
        openMacAllService(e, t) {
            y.default.getInstance().openMacAllService(), t();
        },
        getDeviceInfo(e, t) {
            const n = o.hostname() || "PC设备", r = f.default.getInstance().getHostName() || n, i = "darwin" === o.platform() ? "Mac" : "Windows", a = d.getPcDeviceId();
            global.__log.info(`getDeviceInfo: ${n}, utf code: ${r}, pcDeviceId: ${a}`), t({
                pcDeviceName: r,
                pcDeviceId: a,
                clientId: 130,
                pcModelCode: i
            });
        },
        openBrowser(e, t) {
            global.__log.info("[openBrowser]:" + l.default.Encrypt(null == e ? void 0 : e.url)), 
            s.default.openBrower(e);
        },
        getReportList(e, t) {
            var i;
            try {
                n(247).getReportList().then(e => r.__awaiter(this, void 0, void 0, function*() {
                    global.__log.info("[bridge]getReportList success"), t(e);
                }));
            } catch (e) {
                const t = global.__mainWindow;
                global.__log.error("[bridge]getReportList error: " + e), null === (i = null == t ? void 0 : t.webContents) || void 0 === i || i.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                    errorType: 4,
                    errorDesc: e
                });
            }
        },
        batchDeleteReportStaus(e, t) {
            var i;
            try {
                const i = n(247), o = global.__mainWindow;
                i.batchDeleteReportStaus(e).then(() => r.__awaiter(this, void 0, void 0, function*() {
                    global.__log.info("[bridge]batchDeleteReportStaus success"), t();
                })).catch(e => {
                    var t;
                    global.__log.info("[bridge]batchDeleteReportStaus e" + e), null === (t = null == o ? void 0 : o.webContents) || void 0 === t || t.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                        errorType: 2,
                        errorDesc: e
                    });
                });
            } catch (e) {
                global.__log.error("[bridge]catch batchDeleteReportStaus error: " + e), null === (i = null === mainWindow || void 0 === mainWindow ? void 0 : mainWindow.webContents) || void 0 === i || i.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                    errorType: 2,
                    errorDesc: e
                });
            }
        },
        batchInsertReportStaus(e, t) {
            var i;
            try {
                const i = n(247), o = global.__mainWindow;
                i.batchInsertReportStaus(e).then(() => r.__awaiter(this, void 0, void 0, function*() {
                    global.__log.info("[bridge]batchInsertReportStaus success"), t();
                })).catch(e => {
                    var t;
                    global.__log.error("[bridge]batchInsertReportStaus error: " + e), null === (t = null == o ? void 0 : o.webContents) || void 0 === t || t.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                        errorType: 1,
                        errorDesc: e
                    });
                });
            } catch (e) {
                global.__log.error("[bridge]catch batchInsertReportStaus error: " + e), null === (i = null === mainWindow || void 0 === mainWindow ? void 0 : mainWindow.webContents) || void 0 === i || i.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                    errorType: 1,
                    errorDesc: e
                });
            }
        },
        getRepeatReportList(e, t) {
            var i;
            try {
                const e = n(247), i = global.__mainWindow;
                e.getRepeatReportList().then(e => r.__awaiter(this, void 0, void 0, function*() {
                    t(e);
                })).catch(e => {
                    var t;
                    global.__log.error("[bridge]getRepeatReportList error: " + e), null === (t = null == i ? void 0 : i.webContents) || void 0 === t || t.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                        errorType: 4,
                        errorDesc: e
                    });
                });
            } catch (e) {
                global.__log.error("[bridge]getRepeatReportList error: " + err), null === (i = null === mainWindow || void 0 === mainWindow ? void 0 : mainWindow.webContents) || void 0 === i || i.send(p.APP_MESSAGE_ENUM.POINT_DATABASE_ERROR, {
                    errorType: 4,
                    errorDesc: err
                });
            }
        },
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(115).getInstance(), {methodName: i, data: o} = e;
                let a, s = o && JSON.parse(o);
                if (global.__log.info(`[runDataBaseMethod][${i}]`), !i) return global.__log.error("[runDataBaseMethod]error - 参数不全"), 
                void t(a, new Error("参数不全"));
                try {
                    a = yield r[i](s), t(a);
                } catch (e) {
                    global.__log.error(`[runDataBaseMethod][${i}] catch error - ${e}`), t(a, e);
                }
            });
        },
        getVClawMasterKey(e, t) {
            try {
                const e = n(358).default, r = e.getMasterKey();
                t({
                    masterKey: r,
                    port: e.serverPort
                });
            } catch (e) {
                global.__log.error("[getVClawMasterKey] error: " + e), t(null, e);
            }
        },
        getPing(e, t) {
            global.__log.info("getPing success," + JSON.stringify(e));
            const {ip: n} = e;
            f.default.getInstance().pingIp(n).then(() => {
                t({
                    res: "OK"
                });
            }).catch(e => {
                t({
                    res: "FAILED"
                });
            });
        },
        getTtelnetIpPort(e, t) {
            global.__log.info("getTtelnetIpPort success," + JSON.stringify(e));
            const {ip: n, port: r} = e;
            f.default.getInstance().telnetIpPort(n, r).then(() => {
                t({
                    res: "OK"
                });
            }).catch(e => {
                t({
                    res: "FAILED"
                });
            });
        },
        serviceIsSupport(e, t) {
            try {
                t({
                    isSupport: global.__winServiceManager.isSupport()
                });
            } catch (e) {
                global.__log.error("[bridge][common] setviceIsSupport error: " + (e.message || e)), 
                t(!1);
            }
        },
        getServiceStatus({serviceName: e}, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    global.__log.info("[bridge][common] getServiceStatus serviceName: " + e);
                    const n = global.__winServiceManager, r = yield null == n ? void 0 : n.getServiceStatus(e);
                    t({
                        status: r
                    });
                } catch (e) {
                    global.__log.error("[bridge][common] getServiceStatus error: " + (e.message || e)), 
                    t({});
                }
            });
        },
        showOpenDialog({properties: e, defaultPath: t}, n) {
            try {
                a.dialog.showOpenDialog(global.__mainWindow, {
                    properties: e,
                    defaultPath: t
                }).then(e => {
                    n(e);
                }).catch(() => {
                    n({
                        filePaths: []
                    });
                });
            } catch (e) {
                global.__log.error("[bridge][common] showOpenDialog error: " + (e.message || e)), 
                n({
                    filePaths: []
                });
            }
        },
        getMainWindowId({}, e) {
            e({
                winId: global.__mainWindow.id
            });
        },
        getPrimaryDisplay({}, e) {
            try {
                e({
                    primaryDisplay: a.screen.getPrimaryDisplay().workArea
                });
            } catch (e) {
                global.__log.error("[bridge][common] getPrimaryDisplay error: " + (e.message || e));
            }
        },
        getProcessArgv({}, e) {
            try {
                e({
                    processArgv: process.argv
                });
            } catch (t) {
                global.__log.error("[bridge][common] getPrimaryDisplay error: " + (t.message || t)), 
                e({});
            }
        },
        appGetPath({name: e}, t) {
            try {
                t(a.app.getPath(e));
            } catch (n) {
                global.__log.error(`[bridge][common] app.getPath(${e}) error: ${n.message || n}`), 
                t({
                    value: ""
                });
            }
        },
        focusMainWindow({}, e) {
            var t, n, r, i, o, a;
            try {
                global.__log.info(`[bridge][common] focusMainWindow called, isFocused: ${null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isFocused()}, isVisible: ${null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isVisible()}, isDestroyed: ${null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.isDestroyed()}, url: ${null === (o = null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.webContents) || void 0 === o ? void 0 : o.getURL()}`), 
                null === (a = global.__mainWindow) || void 0 === a || a.focus();
            } catch (t) {
                global.__log.error("[bridge][common] focusMainWindow  error: " + (t.message || t)), 
                e(!1);
            }
        },
        hideWindows(e, t) {
            global.__windows.forEach((t, n) => {
                e.hideCurrent ? t.isFocused() && t.hide() : t.hide();
            }), t({});
        },
        setFullScreen({}, e) {
            var t;
            global.__mainWindow.isFullScreen() || null === (t = global.__mainWindow) || void 0 === t || t.setFullScreen(!0);
        },
        screenRestoreMainWindow({}, e) {
            const t = global.__mainWindow;
            t.isMinimized() && t.restore(), t.isVisible() || global.__windows.has("welcome") || (global.__log.info("show mainwindow"), 
            t.show()), t.focus();
        },
        openSystemSettingPanel(e, t) {
            v.default.openSystemSettingPanel(e);
        },
        getSystemConfigInfo({}, e) {
            const t = m.default.getConfigIni();
            global.__log.info("getSystemConfigInfo: " + JSON.stringify(t)), e(t);
        },
        getEnvConfig({}, e) {
            const t = E.default.getInstance().readEnvConfig();
            global.__log.info("getEnvConfig: " + JSON.stringify(t)), e(t);
        }
    }, b.default), w.default);
    e.exports = C;
}
