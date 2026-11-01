// analysis/pretty/main.js:113896; webpack module 1513
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(1)), a = r.__importDefault(n(1514)), s = r.__importDefault(n(182)), l = n(731), c = r.__importDefault(n(109)), u = n(10);
    t.default = {
        event(e) {
            setTimeout(() => {
                e({
                    message: "this is the note function"
                });
            }, 2e3);
        },
        listenerEvent(e) {
            setInterval(() => {
                e({
                    b: "this is a listener event callback from note >>>>   " + new Date
                });
            }, 5e3);
        },
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(1515), {methodName: i, data: o} = e;
                let a, s = o && JSON.parse(o);
                if (i) try {
                    a = yield r[i](s), t(a);
                } catch (e) {
                    t(a, e);
                } else t(a, new Error("参数不全"));
            });
        },
        notifyMultiWindowNoteUpdate(e, t) {
            const {guids: n, winId: r, resources: i} = e, o = {
                notes: n
            };
            i && i.length > 0 && (o.resources = i);
            const a = {
                moduleId: 2,
                msg: {
                    cmd: "MULTI_WINDOW_NOTE_DATA_CHANGE",
                    exdata: JSON.stringify(o),
                    recordIdTable: [],
                    resCode: 0,
                    resMsg: " ",
                    taskId: 1,
                    winId: r
                }
            };
            c.default.getInstance().sendToRenderMsg(a), t();
        },
        notifyMultiWindowNoteDelete(e, t) {
            const {guids: n, winId: r} = e, i = {
                moduleId: 2,
                msg: {
                    cmd: "MULTI_WINDOW_NOTE_DATA_CHANGE",
                    exdata: JSON.stringify({
                        remove: {
                            notes: n
                        }
                    }),
                    recordIdTable: [],
                    resCode: 0,
                    resMsg: " ",
                    taskId: 1,
                    winId: r
                }
            };
            c.default.getInstance().sendToRenderMsg(i), t();
        },
        hideMainWindow() {
            var e, t, n;
            "win32" === process.platform ? (null === (e = global.__mainWindow) || void 0 === e || e.setAlwaysOnTop(!0), 
            null === (t = global.__mainWindow) || void 0 === t || t.hide()) : (null === (n = global.__mainWindow) || void 0 === n || n.setOpacity(0), 
            i.app.hide());
        },
        showMainWindow(e, t) {
            var n, r, o, a, s, l, c, u;
            if (global.__log.info("showMainWindow"), "win32" === process.platform) {
                const e = null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.isMaximized();
                null === (r = global.__mainWindow) || void 0 === r || r.showInactive(), e && (null === (o = global.__mainWindow) || void 0 === o || o.maximize()), 
                null === (a = global.__mainWindow) || void 0 === a || a.setAlwaysOnTop(!1), setTimeout(() => {
                    var e;
                    null === (e = global.__mainWindow) || void 0 === e || e.focus(), t();
                }, 100);
            } else {
                const e = null === (s = global.__mainWindow) || void 0 === s ? void 0 : s.isMaximized();
                null === (l = global.__mainWindow) || void 0 === l || l.setOpacity(1), i.app.show(), 
                e && (null === (c = global.__mainWindow) || void 0 === c || c.setFullScreen(!0)), 
                null === (u = global.__mainWindow) || void 0 === u || u.setAlwaysOnTop(!0), setTimeout(() => {
                    var e;
                    null === (e = global.__mainWindow) || void 0 === e || e.setAlwaysOnTop(!1), t();
                }, 100);
            }
        },
        openScreenCapture(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("win32" === process.platform) {
                    let a;
                    {
                        let e = i.app.getPath("exe");
                        a = o.default.join(e, "../tool");
                    }
                    global.__log.info("officeSoft path:" + a);
                    const s = Date.now();
                    console.log("-----打开软件 " + s), e.hide && (null === (n = global.__mainWindow) || void 0 === n || n.hide());
                    const l = yield u.exec(`${a}\\vScreenCapture.exe ${null == e ? void 0 : e.lang} ${(null == e ? void 0 : e.hide) ? " true" : ""}`, (e, t, n) => {
                        e ? global.__log.info("exec error: " + e) : (console.log("stdout: " + t), console.error("stderr: " + n));
                    });
                    l.on("data", function(e) {
                        console.log("stdout: " + e);
                    }), l.on("close", function(e) {
                        return r.__awaiter(this, void 0, void 0, function*() {
                            global.__log.info("-----打开文件状态码:" + e), 0 !== e ? (console.log("file open error code:" + e), 
                            t({
                                msg: "打开失败",
                                code: e
                            })) : (console.log({
                                msg: "success",
                                code: e,
                                now: s
                            }), t({
                                msg: "打开成功",
                                code: e,
                                now: s
                            }));
                        });
                    });
                } else "darwin" === process.platform && console.log(">>> mac");
            });
        },
        addMetamarkAi(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {data: n, fileType: r} = e;
                try {
                    if ("png" === r && /^data:image\/(png|jpeg|jpg|gif|webp);base64,/.test(n)) {
                        const e = n.replace(/^data:image\/\w+;base64,/, "");
                        n = Buffer.from(e, "base64");
                    }
                    const e = yield a.default.writeProducerAIGCMeta(n, r), {fileBuffer: i, aigcMeta: o} = e;
                    return global.__log.info(`>>>>${r}文件加入元数据导出成功`), global.__log.info(">>>>导出的metadata: " + JSON.stringify(o)), 
                    t({
                        code: l.ExportFileCode.ENUM_RESULT_SUCCESS,
                        data: i,
                        timestamp: Date.now()
                    }), e;
                } catch (e) {
                    global.__log.error(`>>>>${r}文件加入元数据导出失败: ${e}; contentStr: ${s.default.Encrypt(n)}`), 
                    t({
                        code: l.ExportFileCode.ENUM_RESULT_FAILED
                    });
                }
            });
        }
    };
}
