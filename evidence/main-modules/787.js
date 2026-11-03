// analysis/pretty/main.js:71288; webpack module 787
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FmModuleStopDragPlugin = t.init = void 0;
    const r = n(0), i = r.__importDefault(n(113)), o = r.__importDefault(n(1)), a = r.__importDefault(n(71)), s = r.__importDefault(n(283)), l = r.__importDefault(n(371)), c = r.__importDefault(n(4)), u = r.__importDefault(n(116)), d = r.__importDefault(n(28)), h = n(2), p = r.__importDefault(n(379)), f = n(163), _ = n(138), m = n(380), g = n(74), v = n(96), y = n(25), E = n(162), b = n(715), w = n(717), S = n(100), T = n(1698), A = r.__importDefault(n(798)), O = n(1707), C = n(1708), N = n(1709), I = n(1710), R = n(381), D = h.app.getPath("temp"), L = o.default.join(D, "/fm_file_temp"), k = "win32" == process.platform;
    let M = {
        ip: "",
        port: "",
        id: "",
        ts: 0,
        files: [],
        cancelFlag: !1
    }, P = [], x = {
        id: a.default(),
        deviceId: "",
        transWay: 1,
        pageType: 1,
        from: 1,
        startTime: 0,
        connectType: S.CONNECT_MODE.WLAN,
        files: []
    };
    function F(e, t = "", n = !1) {
        global.__fmLog.info(`[fm]openFileByAppPath appPath:${t} isAppOtherWay:${n}`), t || n ? d.default.openFileAsync(e, n ? "" : t) : h.shell.openPath(e);
    }
    function j(e, t, n, l = "", d = !1, h = O.OPEN_MODE.UNSET, f = C.SCENE_TYPE.FILE_MANAGE_LIST) {
        return r.__awaiter(this, void 0, void 0, function*() {
            e.reply(_.FM_RENDERER_ENUM.CHANGE_CURSOR_TYPE, g.CURSOR_TYPE.WAIT);
            const b = t.progressId || "handleOpenFmFile_download_" + (new Date).valueOf();
            global.__fmLog.info("[fm]handleOpenFmFile start :" + b), t.files = [ n ];
            try {
                const S = o.default.join(L, n.fileName), T = c.default.existsSync(S);
                if (global.__fmLog.info("[fm]openFileByAppPath>>>fileExist>>>" + T), T) {
                    const r = c.default.statSync(S, {
                        throwIfNoEntry: !1
                    });
                    if (global.__fmLog.info(`[fm]openFileByAppPath>>>, fileStat.size: ${r ? r.size : 0}, file.fileSize: ${n.fileSize}`), 
                    r && r.size == n.fileSize) {
                        global.__fmLog.info("[fm]openFileByAppPath>>>fileStat>>>1>>>"), [ O.OPEN_MODE.CANCEL_PLAYER_START_FM, O.OPEN_MODE.START_FM, O.OPEN_MODE.FM_QUEUE, O.OPEN_MODE.UNSET ].includes(h) && (F(S, l, d), 
                        A.default.addAndCheck(S, o.default.dirname(n.savePath), t.isDoc)), e.reply(_.FM_RENDERER_ENUM.CHANGE_CURSOR_TYPE, g.CURSOR_TYPE.DEFAULT);
                        let r = E.buildTransferResult(t, [], g.TRANSFER_FAIL_CODE.OK, b);
                        return r.ignoreTask = !0, global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [5]"), 
                        void e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, r, {
                            openMode: h,
                            sceneType: f,
                            success: !0,
                            file: n
                        });
                    }
                    global.__fmLog.info("[fm]openFileByAppPath>>>unlinkSync>>>"), c.default.unlinkSync(S);
                }
                if (c.default.existsSync(L) || c.default.mkdirSync(L), t.transWay = t.transWay || w.TASK_TRANS_WAY.OPEN, 
                t.savePath = L, yield function({e: e, params: t, progressId: n, isOpen: l, openMode: d = O.OPEN_MODE.UNSET, sceneType: h = C.SCENE_TYPE.FILE_MANAGE_LIST}) {
                    return r.__awaiter(this, void 0, void 0, function*() {
                        global.__cm__mpLog.info(`downFileFromPhone>>> progressId: ${n}, openMode: ${d}, sceneType: ${h}`);
                        let f, {files: b, baseUrl: S, savePath: T} = t;
                        if (S = S || "", !T) return void global.__fmLog.error("[fm]downFileFromPhone failed, saveDir is null");
                        const A = b.reduce((e, t) => e + t.fileSize, 0);
                        if (!(yield v.checkPathWritable(T))) return global.__fmLog.error("[fm]checkPathWritable failed, path is: " + T), 
                        e.reply(_.FM_RENDERER_ENUM.DISK_WRITE_ERROR), f = E.buildTransferResult(t, b, g.TRANSFER_FAIL_CODE.NO_PERMISSSION, n), 
                        H(e, f), Promise.reject(f);
                        const C = a.default();
                        let N = yield function(e, t, n, r) {
                            global.__cm__mpLog.info("checkDownloadInfo>>>baseUrl>>> " + e), global.__cm__mpLog.info("checkDownloadInfo>>>id>>> " + t), 
                            global.__cm__mpLog.info("checkDownloadInfo>>>files>>> " + JSON.stringify(n)), global.__cm__mpLog.info("checkDownloadInfo>>>isOpen>>> " + r);
                            const o = n.map(e => e.savePath), a = n.reduce((e, t) => e + t.fileSize, 0);
                            return global.__fmLog.info("[fm]checkDownloadInfo files count: " + n.length), global.__fmLog.info(`[fm]checkDownloadInfo  totalSize: ${JSON.stringify(a)}, id: ${t}`), 
                            new Promise((n, s) => {
                                i.default.post(Object.assign(Object.assign({
                                    uri: m.buildUrl(e, m.API_FILE_DOWNLOAD_INFO, {
                                        id: t
                                    }),
                                    json: {
                                        downloadList: o,
                                        type: r ? "" : "FROM_PC_FILE_MANAGER",
                                        total: a
                                    }
                                }, R.commonRequstParam), {
                                    timeout: 3e5
                                }), (e, t) => {
                                    var r;
                                    if (e) return global.__fmLog.error("[fm]checkDownloadInfo error:" + e), void n(g.TRANSFER_FAIL_CODE.NETWORK);
                                    try {
                                        t.body = JSON.parse(t.body);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                    global.__fmLog.info(`[fm]checkDownloadInfo response: ${null == t ? void 0 : t.body} length: ${(null === (r = null == t ? void 0 : t.body) || void 0 === r ? void 0 : r.length) || 0}`), 
                                    t && 200 == t.statusCode ? 0 != t.body.length ? n(g.TRANSFER_FAIL_CODE.NOT_FOUND_CONTINUE) : n(g.TRANSFER_FAIL_CODE.OK) : (global.__fmLog.error(`[fm]checkDownloadInfo status error: ${null == t ? void 0 : t.statusCode} ${null == t ? void 0 : t.statusMessage}`), 
                                    n(g.TRANSFER_FAIL_CODE.UNKNOWN));
                                });
                            });
                        }(S, C, b, l);
                        if (global.__cm__mpLog.info("[cm]checkDownloadInfo " + N), N != g.TRANSFER_FAIL_CODE.OK && N != g.TRANSFER_FAIL_CODE.NOT_FOUND_CONTINUE) return f = E.buildTransferResult(t, b, N, n), 
                        H(e, f), Promise.reject(f);
                        const I = (new Date).valueOf(), D = s.default.extract();
                        let L, k = 0, M = !1, P = [], x = 0, F = new Set(b);
                        if (t.transWay == w.TASK_TRANS_WAY.OPEN) global.__cm__mpLog.info("[cm]downFileFromPhone start>>>"), 
                        e.reply(_.FM_RENDERER_ENUM.OPEN_FILE_PROGRESS, {
                            progressId: n,
                            type: "start",
                            totalSize: A,
                            openMode: d,
                            sceneType: h
                        }); else {
                            global.__fmLog.info("[fm][ipc-main][downFileFromPhone][transferProgressLimit] 2097152");
                            const n = K({});
                            e.reply(_.FM_RENDERER_ENUM.PROGRESS_EVENT, {
                                type: "add",
                                params: t,
                                result: n
                            });
                        }
                        if ([ O.OPEN_MODE.FM_QUEUE ].includes(d)) return Promise.resolve();
                        const j = v.getProgressSendThrottle(), U = v.getOpenProgressSendThrottle(), W = y.throttle(e => {
                            global.__fmLog.info("[fm][ipc-main][downloadFileWithoutCheck] progress size: " + e);
                        }, 25e3);
                        return new Promise((a, s) => {
                            let l = !1;
                            D.on("entry", (i, a, s) => {
                                let h = E.fileExistAndRename(i.name, T || "");
                                t.isReplace && (h = i.name);
                                let p = `办公套件_save2Pc_${Date.now()}.download`, f = !0;
                                (i.size || 0) < 1048576 && (p = h, f = !1);
                                const _ = o.default.join(T || "", p);
                                l || (l = !0, global.__fmLog.info("[fm]extract entry start")), L = c.default.createWriteStream(_), 
                                a.pipe(L), L.on("error", e => {
                                    global.__fmLog.error("[fm]currentStream write error: " + JSON.stringify(e)), v.closeAndDelete(L);
                                    const t = b.find(e => e.fileName == i.name);
                                    t && F.add(t), a.resume(), s();
                                }), a.on("data", r => {
                                    if (k += r.length, x += r.length, t.transWay == w.TASK_TRANS_WAY.OPEN) [ O.OPEN_MODE.CANCEL_PLAYER_START_FM, O.OPEN_MODE.START_FM, O.OPEN_MODE.UNSET ].includes(d) && U(e, n, A, k); else if (A > 2097152) {
                                        W(k);
                                        const n = K({
                                            currentSize: k
                                        });
                                        j(e, {
                                            type: "update",
                                            params: t,
                                            result: n
                                        });
                                    }
                                }), a.on("error", e => {
                                    if (t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC) {
                                        const e = b.find(e => e.fileName == i.name);
                                        e && F.add(e);
                                    }
                                    global.__fmLog.error("[fm]downFileFromPhone stream err: " + e);
                                }), a.resume(), a.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                                    try {
                                        const e = o.default.join(T || "", h);
                                        f && (yield u.default.rename(_, e));
                                        const n = Array.from(F).find(e => e.fileName == i.name);
                                        if (n) {
                                            F.delete(n) ? global.__fmLog.info("[fm]failedFiles.delete:  success") : global.__fmLog.info("[fm]failedFiles.delete:  fail");
                                        }
                                        t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC && P.push({
                                            fileName: h,
                                            originName: i.name,
                                            ts: I,
                                            fileSize: x,
                                            savePath: e,
                                            status: 0,
                                            phonePath: (null == n ? void 0 : n.savePath) || ""
                                        }), x = 0;
                                    } catch (e) {
                                        global.__fmLog.error("[fm]downFileFromPhone rename error :" + e.message), f && c.default.unlink(_, e => {
                                            e && global.__fmLog.error("[fm]downFileFromPhone rename error and delete error:" + e.message);
                                        });
                                    }
                                    s();
                                }));
                            });
                            const h = i.default.get(Object.assign({
                                uri: m.buildUrl(S || "", m.API_FILE_DOWNLOAD, {
                                    id: C
                                })
                            }, R.commonRequstParam));
                            p.default.add(n, h), h.on("response", e => {
                                const r = E.handleDownloadRes(e);
                                r != g.TRANSFER_FAIL_CODE.OK ? (global.__fmLog.error("[fm]API_FILE_DOWNLOAD error " + r), 
                                f = E.buildTransferResult(t, Array.from(F), r, n), s(f)) : e.on("error", e => {
                                    global.__fmLog.error("[fm]download http error " + e);
                                    const r = N == g.TRANSFER_FAIL_CODE.OK ? g.TRANSFER_FAIL_CODE.NETWORK : g.TRANSFER_FAIL_CODE.FILE_NOT_EXIST;
                                    f = E.buildTransferResult(t, Array.from(F), r, n), s(f);
                                }).pipe(D).on("finish", () => {
                                    if (M = !0, F && F.size > 0) {
                                        const e = N == g.TRANSFER_FAIL_CODE.OK ? g.TRANSFER_FAIL_CODE.NETWORK : g.TRANSFER_FAIL_CODE.FILE_NOT_EXIST;
                                        f = E.buildTransferResult(t, Array.from(F), e, n), s(f);
                                    } else a();
                                }).on("error", e => {
                                    global.__fmLog.error("[fm]download extract error " + e), v.closeAndDelete(L);
                                    const r = g.TRANSFER_FAIL_CODE.NETWORK;
                                    f = E.buildTransferResult(t, Array.from(F), r, n), s(f);
                                });
                            }).on("abort", () => {
                                global.__fmLog.error("[fm]downFileFromPhone abort"), M || (v.closeAndDelete(L), 
                                f || (f = E.buildTransferResult(t, Array.from(F), g.TRANSFER_FAIL_CODE.ABORT, n), 
                                s(f)), h.destroy());
                            }).on("error", e => {
                                global.__fmLog.error("[fm]downFileFromPhone r error" + e), v.closeAndDelete(L), 
                                f = E.buildTransferResult(t, Array.from(F), g.TRANSFER_FAIL_CODE.NETWORK, n), s(f);
                            });
                        }).finally(() => {
                            j.cancel(), W.cancel(), f && global.__fmLog.error("[fm]downFileFromPhone r error : "), 
                            t.transWay == w.TASK_TRANS_WAY.OPEN ? e.reply(_.FM_RENDERER_ENUM.OPEN_FILE_PROGRESS, {
                                progressId: n,
                                type: "end"
                            }) : (t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC && f && H(e, f), B(e, g.RECORD_TYPE.DOWNLOAD, b.map(e => e.fileName), P, I, t.deviceId)), 
                            p.default.remove(n);
                        });
                    });
                }({
                    e: e,
                    params: t,
                    progressId: b,
                    isOpen: !0,
                    openMode: h,
                    sceneType: f
                }), [ O.OPEN_MODE.FM_QUEUE ].includes(h)) return;
                yield v.sleep(1e3), [ O.OPEN_MODE.CANCEL_PLAYER_START_FM, O.OPEN_MODE.START_FM, O.OPEN_MODE.UNSET ].includes(h) && (F(S, l, d), 
                A.default.addAndCheck(S, o.default.dirname(n.savePath), t.isDoc));
                let N = E.buildTransferResult(t, [], g.TRANSFER_FAIL_CODE.OK, b);
                global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [6]"), e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, N, {
                    openMode: h,
                    sceneType: f,
                    success: !0,
                    file: n
                });
            } catch (t) {
                global.__fmLog.error("[fm]handleOpenFmFile error :" + t), global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [7]"), 
                e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, t, {
                    openMode: h,
                    sceneType: f,
                    success: !1,
                    file: n
                });
            }
            e.reply(_.FM_RENDERER_ENUM.CHANGE_CURSOR_TYPE, g.CURSOR_TYPE.DEFAULT);
        });
    }
    function U(e, t, n, i = !1) {
        var s;
        return r.__awaiter(this, void 0, void 0, function*() {
            x = t;
            let {files: e, baseUrl: r, token: l, connectType: c} = t, p = r || "";
            const f = o.default.join(D, "pcsuite_thumb_" + (new Date).valueOf() + ".png");
            "darwin" == process.platform ? yield u.default.writeFile(f, n, "base64") : yield u.default.writeFile(f, n);
            const m = a.default(), g = t.files.map(e => ({
                fileName: e.fileName,
                pcPath: o.default.join(D, e.fileName),
                isDirectory: e.isDirectory,
                phonePath: e.savePath,
                fileSize: e.fileSize,
                date: new Date(e.date).getTime()
            })), v = e.map(e => e.savePath), y = e.reduce((e, t) => e + t.fileSize, 0), E = JSON.stringify({
                total: y,
                downloadList: v,
                type: "FROM_PC_FILE_MANAGER",
                id: m
            }), [b, w] = p.split(":");
            M = {
                ts: (new Date).valueOf(),
                ip: b,
                port: w,
                id: m,
                files: e
            };
            try {
                global.__fmLog.info(`[fm]start call remote drag native, it tasks ${M.ts - t.startTime}ms, total size is: ${y}, baseUrl: ${p}`), 
                d.default.startDrag({
                    files: g,
                    dragImage: f,
                    tempRoot: D,
                    hostname: b,
                    port: Number(w),
                    postBody: E,
                    cuid: m,
                    type: "FROM_PC_FILE_MANAGER",
                    extInfo: JSON.stringify({
                        mobileDeviceId: t.deviceId,
                        isSearch: !!i,
                        token: l,
                        type: 0,
                        connectType: c
                    })
                }, h.app.getPath("userData"));
            } catch (e) {
                global.__fmLog.error("[fm]remote drag error: " + e);
            }
            k && (global.__fmLog.info("[fm]handleDragTransfer REMOTE_DRAGGING>>>"), null === (s = global.__mainWindow) || void 0 === s || s.webContents.send(_.FM_RENDERER_ENUM.REMOTE_DRAGGING, !1));
        });
    }
    function W(e, t, n) {
        var r, i, a;
        switch (t) {
          case g.DRAG_TRANSFER.START:
            global.__fmLog.info("[fm]handleDragTransfer start>>>"), null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(_.FM_RENDERER_ENUM.STRAT_DOWNLOAD, x.deviceId, "drag_download"), 
            P = [];
            break;

          case g.DRAG_TRANSFER.ING:
            if (n && "number" == typeof n.index) {
                const {ts: e, files: t} = M, r = t[n.index];
                P.push({
                    fileName: r.fileName,
                    fileSize: r.fileSize,
                    status: 0 == n.status ? 0 : 1,
                    savePath: "",
                    ts: e,
                    phonePath: r.savePath
                });
            }
            break;

          case g.DRAG_TRANSFER.END:
            const {files: t} = M;
            x.savePath = (null == n ? void 0 : n.savepath) || x.savePath || "", P.length && (global.__fmLog.info("handleDragTransfer SAVE_TRANSFER_RECORD: " + P.length), 
            P.forEach(e => {
                e.savePath = o.default.resolve(x.savePath || "", e.fileName || "");
            }), null === (i = global.__mainWindow) || void 0 === i || i.webContents.send(_.FM_RENDERER_ENUM.SAVE_TRANSFER_RECORD, g.RECORD_TYPE.DOWNLOAD, P, x.deviceId));
            let s = {
                fileNumber: t.length,
                successFile: 0,
                spaceNeed: 0
            };
            if (null == n ? void 0 : n.result) try {
                s = JSON.parse(n.result);
            } catch (e) {
                global.__fmLog.error("[fm][ipc-main]handleDragTransfer end data result parse error : " + (y.isObject(e) ? JSON.stringify(e).substring(0, 1e4) : e));
            }
            let l = [];
            const c = (s.fileNumber || t.length) - (s.successFile || 0);
            l.length = c;
            const u = 0 == (null == n ? void 0 : n.state) ? g.TRANSFER_FAIL_CODE.OK : -1 == (null == n ? void 0 : n.state) ? g.TRANSFER_FAIL_CODE.ABORT : -2 == (null == n ? void 0 : n.state) ? g.TRANSFER_FAIL_CODE.FILE_NOT_EXIST : -3 == (null == n ? void 0 : n.state) ? g.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE : g.TRANSFER_FAIL_CODE.UNKNOWN;
            global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [8]"), null === (a = global.__mainWindow) || void 0 === a || a.webContents.send(_.FM_RENDERER_ENUM.END_DOWNLOAD, E.buildTransferResult(x, l, u, ""));
        }
    }
    function B(e, t, n, r, i, o) {
        let a = [ ...r ];
        global.__fmLog.info(`[fm][ipc-main] writeTransferRecord type: ${t}, records length: ${r.length}, fileNames length : ${n.length}, deviceId: ${o}`);
        const s = r.map(e => e.originName || e.fileName || "");
        n.length != s.length && n.forEach(e => {
            s.includes(e) || a.push({
                fileName: e,
                status: 1,
                fileSize: 0,
                ts: i,
                savePath: ""
            });
        }), e.reply(_.FM_RENDERER_ENUM.SAVE_TRANSFER_RECORD, t, a, o);
    }
    function H(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            t && E.setIsPhoneCancel(!1);
        });
    }
    function $(e, {params: t, downloadUrl: n, progressId: a, appPath: l = "", isAppOtherWay: d = !1, openMode: m = O.OPEN_MODE.UNSET, sceneType: S = C.SCENE_TYPE.FILE_MANAGE_LIST}) {
        try {
            let {files: T, savePath: N} = t, I = N || "";
            if (global.__fmLog.info("[fm]cloudDownloadFilesTar start :" + a), t.transWay != w.TASK_TRANS_WAY.OPEN) {
                const n = v.getDiskSpaceLeft(I, t.files);
                if (n < 0) {
                    const r = -n, i = E.buildTransferResult(t, t.files, g.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE, a, r);
                    return global.__fmLog.info("[fm]handleSave2pc " + g.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE), 
                    H(0, i), global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [9]"), void e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, i);
                }
            }
            global.__fmLog.info(`[fm][ipc-main][cloudDownloadFilesTar] start， files: ${T.length}, downloadUrl: ${n}, progressId: ${a}， deviceId: ${t.deviceId}`), 
            function({e: e, params: t, downloadUrl: n, progressId: a, openMode: l = O.OPEN_MODE.UNSET, sceneType: d = C.SCENE_TYPE.FILE_MANAGE_LIST}) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let m, {files: S, savePath: T} = t, A = T || "";
                    const O = S.reduce((e, t) => e + t.fileSize, 0);
                    if (!(yield v.checkPathWritable(A || ""))) return global.__fmLog.error("[fm]checkPathWritable failed, path is: " + A), 
                    e.reply(_.FM_RENDERER_ENUM.DISK_WRITE_ERROR), m = E.buildTransferResult(t, t.files, g.TRANSFER_FAIL_CODE.NO_PERMISSSION, a), 
                    H(e, m), Promise.reject(m);
                    const C = (new Date).valueOf(), N = s.default.extract();
                    let I, D, L = 0, k = [], M = 0, P = new Set(S), x = !1;
                    const F = v.getProgressSendThrottle(), j = y.throttle(e => {
                        global.__fmLog.info("[fm][ipc-main][downloadFileWithoutCheck] progress size: " + e);
                    }, 25e3);
                    let U, W = !1;
                    return new Promise((s, y) => {
                        let T = !0;
                        U = (e, n) => {
                            global.__fmLog.info("[fm][ipc-main][cloudReconnectHanlder] reconnectDeviceId:  " + n), 
                            n == t.deviceId && (m = E.buildTransferResult(t, t.files, g.TRANSFER_FAIL_CODE.CLOUD_RECONNECT_FAIL, a), 
                            y(m));
                        }, h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CLOUD_RECONNECT, U), N.on("entry", (n, i, s) => {
                            T && global.__fmLog.info("[fm][[ipc-main]] entry"), T = !1;
                            let h = E.fileExistAndRename(n.name, A);
                            t.isReplace && (h = n.name);
                            let p = `办公套件_save2Pc_${Date.now()}.download`, f = !0;
                            (n.size || 0) < 1048576 && (p = h, f = !1);
                            const m = o.default.join(A, p);
                            I = c.default.createWriteStream(m), I.on("error", e => {
                                var t;
                                global.__fmLog.error("[fm]createWriteStream write error: " + JSON.stringify(e)), 
                                v.closeAndDelete(I);
                                const r = S.find(e => e.fileName == n.name);
                                r && P.add(r), (null === (t = null == e ? void 0 : e.message) || void 0 === t ? void 0 : t.includes("no space")) && (global.__fmLog.error("[fm]downloadSingleTask entry write stream error no space"), 
                                x = !0), x ? D.destroy() : (i.resume(), s());
                            }), i.pipe(I), i.on("data", n => {
                                if (L += n.length, M += n.length, t.transWay == w.TASK_TRANS_WAY.OPEN) e.reply(_.FM_RENDERER_ENUM.OPEN_FILE_PROGRESS, {
                                    progressId: a,
                                    type: "ing",
                                    totalSize: O,
                                    currentSize: L,
                                    openMode: l,
                                    sceneType: d
                                }); else {
                                    if (j(L), W) return;
                                    const n = K({
                                        currentSize: L
                                    });
                                    F(e, {
                                        type: "update",
                                        params: t,
                                        result: n
                                    });
                                }
                            }), i.on("error", e => {
                                if (t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC) {
                                    const e = S.find(e => e.fileName == n.name);
                                    e && P.add(e);
                                }
                                global.__fmLog.error("[fm]downFileFromPhone stream err: " + e);
                            }), i.resume(), i.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                                try {
                                    const e = o.default.join(A, h);
                                    f && (yield u.default.rename(m, e));
                                    const r = Array.from(P).find(e => e.fileName == n.name);
                                    if (r) {
                                        P.delete(r) ? global.__fmLog.info("[fm]failedFiles.delete:  success") : global.__fmLog.info("[fm]failedFiles.delete:  fail");
                                    }
                                    t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC && k.push({
                                        fileName: h,
                                        originName: n.name,
                                        ts: C,
                                        fileSize: M,
                                        savePath: e,
                                        status: 0,
                                        phonePath: (null == r ? void 0 : r.savePath) || ""
                                    }), M = 0;
                                } catch (e) {
                                    global.__fmLog.error("[fm]downloadFileWithoutCheck stream end handle error :" + e.message), 
                                    f && c.default.unlink(m, e => {
                                        e && global.__fmLog.error("[fm]downloadFileWithoutCheck rename error and delete error:" + e.message);
                                    });
                                }
                                s();
                            }));
                        });
                        const B = i.default.get(Object.assign({
                            uri: n
                        }, R.commonRequstParam));
                        global.__cm__mpLog.info(`[fm]download[1] params.id: ${t.id}, ${t ? JSON.stringify(t) : null} progressId: ${a}`), 
                        p.default.add(a, B), B.on("response", e => {
                            D = e, e.statusCode != b.HTTPStatus.HTTP_OK ? (global.__fmLog.info("[fm][ipc-main][downloadFileWithoutCheck] err , code: " + e.statusCode), 
                            m = E.buildTransferResult(t, Array.from(P), g.TRANSFER_FAIL_CODE.NETWORK, a), y(m)) : e.on("error", e => {
                                global.__fmLog.error("[fm]download http error " + e);
                                const n = g.TRANSFER_FAIL_CODE.NETWORK;
                                m = E.buildTransferResult(t, Array.from(P), n, a), y(m);
                            }).pipe(N).on("finish", () => {
                                global.__fmLog.info("[fm][[ipc-main]] download finish -- fail >>> " + (P ? JSON.stringify(P) : null)), 
                                P && P.size > 0 ? (m = E.buildTransferResult(t, Array.from(P), g.TRANSFER_FAIL_CODE.FILE_NOT_EXIST, a), 
                                y(m)) : (global.__fmLog.info("[fm][[ipc-main]] download finish -- success"), s());
                            }).on("error", e => {
                                global.__fmLog.error("[fm]download extract error " + e), v.closeAndDelete(I);
                                let n = g.TRANSFER_FAIL_CODE.NETWORK, r = 0;
                                x && (n = g.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE, r = O), m = E.buildTransferResult(t, Array.from(P), n, a, r), 
                                y(m);
                            });
                        }).on("abort", () => {
                            global.__fmLog.error("[fm]downFileFromPhone abort"), W || (v.closeAndDelete(I), 
                            m = E.buildTransferResult(t, Array.from(P), g.TRANSFER_FAIL_CODE.ABORT, a), y(m), 
                            B.destroy());
                        }).on("error", e => {
                            global.__fmLog.error("[fm]downFileFromPhone r error" + e), v.closeAndDelete(I), 
                            m = E.buildTransferResult(t, Array.from(P), g.TRANSFER_FAIL_CODE.NETWORK, a), y(m);
                        });
                    }).finally(() => {
                        W = !0, U && h.ipcMain.off(f.FM_MAIN_EVENT_ENUM.CLOUD_RECONNECT, U), F.cancel(), 
                        j.cancel(), m && global.__fmLog.error("[fm][ipc-main][downloadFileWithoutCheck] result code： " + m.failCode), 
                        t.transWay == w.TASK_TRANS_WAY.OPEN ? e.reply(_.FM_RENDERER_ENUM.OPEN_FILE_PROGRESS, {
                            progressId: a,
                            type: "end"
                        }) : (t.transWay == w.TASK_TRANS_WAY.SAVE_2_PC && m && H(e, m), B(e, g.RECORD_TYPE.DOWNLOAD, S.map(e => e.fileName), k, C, t.deviceId)), 
                        p.default.remove(a);
                    });
                });
            }({
                e: e,
                params: t,
                downloadUrl: n,
                progressId: a,
                openMode: m,
                sceneType: S
            }).then(() => {
                if (global.__cm__mpLog.info("[fm][ipc-main][cloudUploadFilesTar] successs"), global.__fmLog.info("[fm][ipc-main][cloudUploadFilesTar] successs"), 
                t.transWay == w.TASK_TRANS_WAY.OPEN) {
                    const e = o.default.join(L, T[0].fileName);
                    setTimeout(() => {
                        var n, r;
                        global.__fmLog.info("[fm][ipc-main][cloudUploadFilesTar] start shell.openPath"), 
                        global.__fmLog.info(`[fm]downloadFileWithoutCheck addAndCheck>>>[2] : filePath: ${e}, savePath: ${o.default.dirname(null === (n = null == t ? void 0 : t.files[0]) || void 0 === n ? void 0 : n.savePath)}, isDoc: ${t.isDoc}`), 
                        [ O.OPEN_MODE.CANCEL_PLAYER_START_FM, O.OPEN_MODE.START_FM, O.OPEN_MODE.UNSET ].includes(m) && (F(e, l, d), 
                        A.default.addAndCheck(e, o.default.dirname(null === (r = null == t ? void 0 : t.files[0]) || void 0 === r ? void 0 : r.savePath), t.isDoc));
                    }, 1e3);
                }
                let n = E.buildTransferResult(t, [], g.TRANSFER_FAIL_CODE.OK, a);
                global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [10]"), e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, n, {
                    openMode: m,
                    sceneType: S,
                    success: !0,
                    file: T[0]
                }), H(0, n);
            }).catch(n => {
                let r = y.isObject(n) ? JSON.stringify(n) : n;
                global.__fmLog.error("[fm][ipc-main][cloudDownloadFilesTar]downloadFileWithoutCheck e :" + r.substring(0, 1e4)), 
                global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [11] e: " + r.substring(0, 1e4)), 
                e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, n, {
                    openMode: m,
                    sceneType: S,
                    success: !1,
                    file: T[0]
                }), H(0, E.buildTransferResult(t, [], g.TRANSFER_FAIL_CODE.UNKNOWN, a));
            }).finally(() => {
                e.reply(_.FM_RENDERER_ENUM.CHANGE_CURSOR_TYPE, g.CURSOR_TYPE.DEFAULT);
            });
        } catch (n) {
            global.__fmLog.info("[fm][ipc-main][cloudDownloadFilesTar] e :" + (y.isObject(e) ? JSON.stringify(e).substring(0, 1e4) : e)), 
            n.hasOwnProperty("params") ? (global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [12]"), 
            e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, n, {
                openMode: m,
                sceneType: S,
                success: !1,
                file: t.files[0]
            })) : (global.__cm__mpLog.info("[cm]FM_RENDERER_ENUM.END_DOWNLOAD [13]"), e.reply(_.FM_RENDERER_ENUM.END_DOWNLOAD, E.buildTransferResult(t, t.files, g.TRANSFER_FAIL_CODE.UNKNOWN, a), {
                openMode: m,
                sceneType: S,
                success: !1,
                file: t.files[0]
            })), e.reply(_.FM_RENDERER_ENUM.CHANGE_CURSOR_TYPE, g.CURSOR_TYPE.DEFAULT);
        }
    }
    function Y(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {fileUri: n = "", saveDir: r = "", path: a, isCloudConnected: s, id: u, deviceId: d, newToken: h} = t;
            global.__fmLog.info(`[fm]downloadThumbs start params path: ${a.length}, id: ${u}`), 
            c.default.mkdirSync(r, {
                recursive: !0
            });
            let f = "", m = 0;
            const g = t => {
                setTimeout(() => {
                    e.reply(_.FM_RENDERER_ENUM.DOWNLOAD_THUMB_SHOW, t, d);
                }, 500);
            }, v = l.default.extract({
                cwd: o.default.join(r),
                onentry: e => {
                    f && g(f);
                    const t = a[m];
                    e.path = o.default.join(t || e.path), f = e.path.replace(/\\/g, "/"), 0 === m && global.__fmLog.info("[fm]downloadThumbs extract start path"), 
                    m++;
                }
            });
            return new Promise((e, t) => {
                const r = s ? i.default.get(Object.assign({
                    uri: n
                }, R.commonRequstParam)) : i.default.post({
                    url: n,
                    method: "POST",
                    strictSSL: !1,
                    headers: {
                        "content-type": "application/json",
                        "X-ES-HTTP-VERSION": "1",
                        newToken: h
                    },
                    json: {
                        path: a
                    }
                });
                p.default.add(u, r), r.on("response", n => {
                    n.statusCode != b.HTTPStatus.HTTP_OK ? (global.__fmLog.error("[fm][ipc-main][downloadThumbs] err " + JSON.stringify(n)), 
                    t()) : n.on("error", e => {
                        global.__fmLog.error("[fm][ipc-main][downloadThumbs] err " + JSON.stringify(e)), 
                        t();
                    }).pipe(v).on("finish", () => {
                        global.__fmLog.info("[fm][[ipc-main]] downloadThumbs finish"), e();
                    }).on("error", e => {
                        global.__fmLog.error("[fm][[ipc-main]] downloadThumbs extract error  " + JSON.stringify(e)), 
                        t();
                    });
                }).on("abort", () => {
                    global.__fmLog.info("[fm][[ipc-main]] downloadThumbs abort"), t(), r.destroy();
                }).on("error", e => {
                    global.__fmLog.error("[fm][[ipc-main]] downloadThumbs error  " + JSON.stringify(e)), 
                    t();
                });
            }).finally(() => {
                g(f), e.reply(_.FM_RENDERER_ENUM.DOWNLOAD_THUMB_END, {
                    key: u
                }), global.__fmLog.info("[fm][[ipc-main]] downloadThumbs finally " + u), p.default.remove(u);
            });
        });
    }
    function z(e, t) {
        const {key: n} = t;
        global.__fmLog.info("[fm][[ipc-main]] downloadThumbsAbort abort "), p.default.abort(n);
    }
    function G(e, t) {
        const {value: n, newName: r, deviceId: i, savePathNew: a} = t, s = o.default.join(o.default.dirname(n), r);
        c.default.rename(n, s, t => {
            t ? global.__fmLog.error(`[fm]cacheThumbRename rename error ${n}, ${s}, ${i}, ${JSON.stringify(t)}`) : e.reply(_.FM_RENDERER_ENUM.DOWNLOAD_THUMB_SHOW, a, i);
        });
    }
    function q(e, t, n) {
        global.__fmLog.info("[fm] ipc-main.ts chooseFiles start");
        let r = [ "openFile", "multiSelections" ];
        t && (r = [ "openDirectory", "multiSelections" ]), "darwin" == process.platform && (r = [ "openFile", "openDirectory", "multiSelections" ]), 
        h.dialog.showOpenDialog(global.__mainWindow, {
            properties: r,
            buttonLabel: n
        }).then(t => {
            const r = t.filePaths;
            global.__fmLog.info("[fm] ipc-main.ts chooseFiles end " + r.length), e.reply(f.FM_MAIN_EVENT_ENUM.FM_CHOOSE_FILES, r, n);
        });
    }
    function V(e, t) {
        R.commonRequstParam.headers.newToken = t;
    }
    function K(e) {
        const {code: t, failCount: n, successCount: r, isEnd: i, currentSize: o, spaceNeed: a} = e;
        return {
            code: t || g.TRANSFER_FAIL_CODE.OK,
            failCount: n || 0,
            successCount: r || 0,
            isEnd: i || !1,
            currentSize: o || 0,
            spaceNeed: a || 0
        };
    }
    function J(e, t) {
        const {phoneSavePathList: n, mobileDeviceId: r, connectFlag: i, isSearch: o} = t;
        try {
            global.__fmLog.info("[fm]handleCopyFilePathListToClipboard " + (null == n ? void 0 : n.length));
            const e = a.default(), t = n.map(e => ({
                fileName: "",
                pcPath: "",
                isDirectory: !1,
                phonePath: e,
                fileSize: 0,
                date: 0
            }));
            d.default.startDrag({
                files: t,
                dragImage: "",
                tempRoot: D,
                hostname: "",
                port: 0,
                postBody: "",
                cuid: e,
                type: "FROM_PC_FILE_MANAGER",
                extInfo: JSON.stringify({
                    mobileDeviceId: r,
                    isSearch: o,
                    token: "",
                    type: 1,
                    connectType: i
                })
            }, h.app.getPath("userData"));
        } catch (e) {
            global.__fmLog.error("[fm]remote drag error: " + e);
        }
    }
    function X(e, t) {
        return c.default.existsSync(L) || c.default.mkdirSync(L), t.savePaths.map(e => o.default.join(L, e));
    }
    t.init = function() {
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.OPEN_FM_FILE, j), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.REMOTE_DRAG_FROM_PC_FM, U), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.DOWNLOAD_DIRECTORY_FROM_PC_FM, T.downloadDirectoryStart), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.UPLOAD_DIRECTORY_FROM_PC_FM, T.uploadDirectoryStart), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.GET_DIRECTORY_UPLOAD_INFO, T.getDirectoryUploadInfo), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.SET_TOKEN, V), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.COPY_FILEPATH_LIST_TO_CLIPBOARD, J), 
        h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.GET_DOWNLOAD_SAVEPATH, X), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.GET_ORIGIN_SAVEPATH, X), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.FM_CHOOSE_FILES, q), h.ipcMain.on(N.FM_COMMON_IPC_EVENT.ENABLE_MAIN_WIN, I.onMainWinEnabled), 
        T.initDirectory(), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.ABORT_HTTP_REQUEST, (e, {progressId: t, deviceId: n}) => (global.__cm__mpLog.info(`[fm][ipc-main.ts][ABORT_HTTP_REQUEST]>>> progressId: ${t}, deviceId : ${n} `), 
        global.__fmLog.info("[fm]ABORT_HTTP_REQUEST: " + t), p.default.has(t) ? (global.__cm__mpLog.info("[fm][ipc-main.ts][ABORT_HTTP_REQUEST][0]"), 
        p.default.abort(t), !0) : (global.__cm__mpLog.info("[fm][ipc-main.ts][ABORT_HTTP_REQUEST][1]"), 
        T.setDirectoryTaskCancel(t), global.__fmLog.info("[fm]ABORT_HTTP_REQUEST requestManager has no  " + t), 
        !1))), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CANCEL_REMOTE_DRAG, () => {
            global.__fmLog.info("[fm]cancel remote drag, id: " + M.id), M.cancelFlag = !0, d.default.cancel(M.id);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.REMOTE_DRAG_TRANSFER, W), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.REMOTE_DRAG_CHECKED_FILES, (e, t) => {
            global.__fmLog.info("[fm]cloud checked files : " + t.length), x && (x.files = t);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.ENTER_FM, (e, t) => {
            const {deviceId: n = "", connectFlag: r = "", ip: i = ""} = t;
            global.__fmLog.info("[fm]enter remote drag");
            const o = {
                deviceId: n,
                connectType: r,
                ip: i,
                appData: h.app.getPath("userData")
            }, a = JSON.stringify(o);
            d.default.enter(a);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.LEAVE_FM, (e, t) => {
            global.__fmLog.info("[fm]leave remote drag"), d.default.leave(t), t && v.clearDirFiles(L);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CLEAR_CACHE, (e, t) => {
            setTimeout(() => {
                v.clearCache(t);
            }, 1e3);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CLOUD_DOWNLOAD_FILES, $), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CLOUD_DOWNLOAD_THUMB, Y), 
        h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CLOUD_DOWNLOAD_THUMB_ABORT, z), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.GET_CACHE_THUMB_LIST, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            return yield v.getCacheList(t);
        })), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.GET_FILE_EXT_SUPPORT_APP, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__fmLog.info("[fm]getFileExtSupportApp suffix: " + t);
            const e = yield d.default.getFileExtSupportApp(t);
            return global.__fmLog.info("[fm]getFileExtSupportApp res: " + JSON.stringify(e)), 
            e;
        })), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.OPEN_FM_FILE_BY_APPPATH, (e, t, n = "", r = !1) => {
            F(t, n, r);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.CACHE_THUMB_RENAME, G), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.TRANS_FILE_CANCEL, () => {
            global.__fmLog.info("[fm] on TRANS_FILE_CANCEL true"), E.setIsPhoneCancel(!0);
        }), h.ipcMain.on(f.FM_MAIN_EVENT_ENUM.TRANS_FILE_CANCEL_FALSE, () => {
            global.__fmLog.info("[fm] on TRANS_FILE_CANCEL false"), E.setIsPhoneCancel(!1);
        }), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.OPEN_FM_FILE_BY_VDFS, (e, t, n, i = "", a = !1, s = "", l = "") => r.__awaiter(this, void 0, void 0, function*() {
            return yield function(e, t, n = "", i = !1, a = "", s = "") {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let l = "";
                    a && (l = v.getVdfsFullPath(a, s, e.deviceId, t.savePath), global.__fmLog.info(`[fm]handleSave2pc vdfsPath: ${a}, vdfsFullPath: ${l}`));
                    if (yield v.isPathOk(l)) {
                        if (a && l) {
                            if (global.__fmLog.info("[fm]openFileByAppPath start vdfsFullPath:" + l), A.default.addAndCheck(l, o.default.dirname(t.savePath), e.isDoc), 
                            n || i) return F(l, n, i), !0;
                            return yield function(e) {
                                return r.__awaiter(this, void 0, void 0, function*() {
                                    return new Promise(t => {
                                        h.shell.openPath(e).then(() => {
                                            global.__fmLog.info("[fm]openFileByAppPath end vdfsFullPath"), t(!0);
                                        }).catch(e => {
                                            global.__fmLog.error("[fm]openFileByAppPath end error :" + JSON.stringify(e)), t(!1);
                                        });
                                    });
                                });
                            }(l);
                        }
                        return !1;
                    }
                });
            }(t, n, i, a, s, l);
        })), h.ipcMain.handle(f.FM_MAIN_EVENT_ENUM.CHOOSE_SAVE_DIR, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            return yield T.chooseSaveDir(t);
        }));
    }, t.FmModuleStopDragPlugin = function() {
        global.__fmLog.info("[fm]stop remote drag"), d.default.stop();
    };
}
