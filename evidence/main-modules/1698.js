// analysis/pretty/main.js:129463; webpack module 1698
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDirectoryUploadInfo = t.chooseSaveDir = t.downloadDirectoryStart = t.uploadDirectoryStart = t.setDirectoryTaskCancel = t.initDirectory = void 0;
    const r = n(0), i = n(2), o = n(74), a = n(163), s = r.__importDefault(n(6)), l = r.__importDefault(n(113)), c = n(380), u = r.__importDefault(n(379)), d = n(162), h = r.__importDefault(n(1699)), p = n(96), f = r.__importDefault(n(28)), _ = r.__importDefault(n(1)), m = r.__importDefault(n(1700)), g = n(381), v = n(94), y = n(1704), E = new Map;
    function b(e) {
        E.delete(e);
    }
    function w(e = "") {
        return r.__awaiter(this, void 0, void 0, function*() {
            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory chooseSaveDir start");
            const t = s.default.getItem("FM_SAVE_PATH") || s.default.getItem("receiveFilesPath") || v.getAppDownloadPath();
            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory chooseSaveDir last path: " + t);
            try {
                const n = global.__mainWindow, r = {
                    properties: [ "openDirectory" ],
                    defaultPath: t,
                    buttonLabel: e
                };
                let o;
                n && !n.isDestroyed() ? o = yield i.dialog.showOpenDialog(n, r) : (global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory chooseSaveDir mainWindow is invalid, using no-window mode"), 
                o = yield i.dialog.showOpenDialog(r));
                let a = "";
                return o.filePaths && o.filePaths.length && (a = o.filePaths[0], s.default.setItem("FM_SAVE_PATH", a)), 
                global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory chooseSaveDir end。 saveDir: " + a), 
                a;
            } catch (e) {
                return global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory chooseSaveDir error: " + e), 
                "";
            }
        });
    }
    function S(e) {
        var t;
        const n = `${a.FM_MAIN_EVENT_ENUM.DIRECTORY_PROGRESS_EVENT}${e.id}`;
        null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(n, e);
    }
    function T(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            return global.__fmLog.info("[fm]directory-transfer.ts getTotalSizeByPath start"), 
            new Promise(t => {
                f.default.getFolderInfo(e, function(e) {
                    global.__fmLog.info("[fm]directory-transfer.ts getTotalSizeByPath end " + e);
                    try {
                        const n = JSON.parse(e);
                        let r = "";
                        n.result && (r = "" + n.reason), t(Object.assign(Object.assign({}, n), {
                            error: r
                        }));
                    } catch (e) {
                        t({
                            totalSize: 0,
                            fileCount: 0,
                            folderCount: 0,
                            error: "error"
                        });
                    }
                });
            });
        });
    }
    t.initDirectory = function() {}, t.setDirectoryTaskCancel = function(e) {
        E.set(e, "true");
    }, t.uploadDirectoryStart = function(e, t) {
        var n, s, p;
        return r.__awaiter(this, void 0, void 0, function*() {
            const {id: e, isCloudConnected: f} = t;
            global.__fmLog.info("[fm] directory-transfer.ts uploadDirectory start");
            let m = {
                code: o.TRANSFER_FAIL_CODE.OK,
                entryNames: [],
                spaceNeed: -1,
                successCount: 0
            };
            if (f) {
                const e = yield function(e) {
                    return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                        var n, r;
                        const {id: o, uploadInfo: s} = e;
                        global.__fmLog.info(`[fm]directory-transfer.ts uploadDirectory checkClouodUploadInfo start params id:${null == s ? void 0 : s.id},totalCount:${null == s ? void 0 : s.totalCount},totalSize:${null == s ? void 0 : s.totalSize},dropFileItems.length:${null === (n = null == s ? void 0 : s.dropFileItems) || void 0 === n ? void 0 : n.length}`);
                        const l = `${a.FM_MAIN_EVENT_ENUM.CHECK_CLOUD_UPLOAD_INFO}${o}`;
                        i.ipcMain.on(l, (e, n) => {
                            global.__fmLog.info(`[fm]directory-transfer.ts uploadDirectory checkClouodUploadInfo end code:${n.code},spaceNeed:${n.spaceNeed}`), 
                            t(n);
                        }), null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(l);
                    }));
                }(t);
                m.code = e.code, m.spaceNeed = e.spaceNeed, t.serviceUrl = e.serviceUrl;
            } else {
                const e = yield y.checkUploadInfoWithRetry(t);
                m.code = e.code, m.spaceNeed = e.spaceNeed;
            }
            if (m.code == o.TRANSFER_FAIL_CODE.OK) {
                const e = yield function(e) {
                    return r.__awaiter(this, void 0, void 0, function*() {
                        return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http start");
                            const {baseUrl: n, id: i, uploadPaths: a, serviceUrl: s, newToken: p = ""} = e, f = c.buildUrl(n, c.API_DROP_FILE_TO_PHONE, {
                                id: i,
                                type: "tar"
                            });
                            g.commonRequstParam.headers.newToken = p;
                            const m = Object.assign(Object.assign({
                                url: s || f
                            }, g.commonRequstParam), {
                                timeout: 36e5
                            });
                            try {
                                global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http start >>> " + (m ? JSON.stringify(m) : null));
                            } catch (e) {
                                global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http start error >>> " + e.message);
                            }
                            const v = l.default.post(m, (e, n) => r.__awaiter(this, void 0, void 0, function*() {
                                if (e) global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http error:" + e); else {
                                    global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http response");
                                    const e = d.handleDownloadRes(n);
                                    e != o.TRANSFER_FAIL_CODE.OK && global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http response " + e), 
                                    y.code = e, y.entryNames = function(e, t) {
                                        var n;
                                        if (null == t ? void 0 : t.body) try {
                                            const r = JSON.parse(null == t ? void 0 : t.body), i = null === (n = null == r ? void 0 : r.data) || void 0 === n ? void 0 : n.dropFileItems;
                                            Array.isArray(i) && (global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http response body dropFileItems:" + i.length), 
                                            e.forEach(e => {
                                                const t = i.find(t => t.fileName == e.originName);
                                                t && (e.fileName = _.default.basename(t.savePath), e.phonePath = t.savePath);
                                            }));
                                        } catch (e) {
                                            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http response body is not a json");
                                        }
                                        return e;
                                    }(y.entryNames, n), t(y);
                                }
                            }));
                            u.default.add(i, v);
                            const y = {
                                code: o.TRANSFER_FAIL_CODE.OK,
                                entryNames: [],
                                successCount: 0
                            };
                            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory createTar start");
                            const E = function(e) {
                                const {req: t, uploadPaths: n, id: r, entryCallback: i} = e;
                                let o = [];
                                const a = new h.default({
                                    type: "create",
                                    fileList: n,
                                    writeStreamTar: t
                                });
                                return a.onprogress(e => {
                                    S({
                                        id: r,
                                        currentSize: e,
                                        type: "progress"
                                    });
                                }), a.onfinish(() => {
                                    global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory createTar finish");
                                }), a.onerror(() => {
                                    global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory createTar error");
                                }), a.onentry(e => {
                                    e.isRoot && o.push(e), i(o);
                                }), a;
                            }({
                                req: "darwin" == process.platform ? v.request : v,
                                uploadPaths: a || [],
                                id: i,
                                entryCallback: e => {
                                    y.entryNames = e, y.successCount++;
                                }
                            });
                            v.on("error", e => {
                                global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http error:" + e), 
                                y.code = o.TRANSFER_FAIL_CODE.UNKNOWN, E.abort(), t(y);
                            }).on("abort", () => {
                                global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http abort"), 
                                y.code = o.TRANSFER_FAIL_CODE.ABORT, E.abort(), t(y);
                            }).on("complete", () => {
                                global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory upload http complete");
                            });
                        }));
                    });
                }(t);
                global.__fmLog.info(`[fm] directory-transfer.ts uploadDirectory uploadres code:${e.code},successCount:${e.successCount},entryNames:${null === (n = e.entryNames) || void 0 === n ? void 0 : n.length}`), 
                m.code = e.code, m.entryNames = e.entryNames, m.successCount = e.successCount;
            }
            global.__fmLog.info(`[fm] directory-transfer.ts uploadDirectory end code:${m.code},successCount:${m.successCount},entryNames:${null === (s = null == m ? void 0 : m.entryNames) || void 0 === s ? void 0 : s.length},spaceNeed:${m.spaceNeed},`);
            const v = `${a.FM_MAIN_EVENT_ENUM.UPLOAD_DIRECTORY_FROM_PC_FM}${e}`;
            null === (p = global.__mainWindow) || void 0 === p || p.webContents.send(v, m), 
            b(e);
        });
    }, t.downloadDirectoryStart = function(e, t, s) {
        var _, m;
        return r.__awaiter(this, void 0, void 0, function*() {
            const {id: e, freespace: v, isCloudConnected: y, totalSize: E} = t;
            let {saveDir: T, requestId: A} = t;
            global.__fmLog.info("[fm] directory-transfer.ts downloadDirectory start");
            let O = {
                code: o.TRANSFER_FAIL_CODE.NO_CHOOSE_DIR,
                spaceNeed: -1,
                entryNames: [],
                saveDir: "",
                successCount: 0
            };
            if (T || (T = yield w(s)), O.saveDir = T, t.saveDir = T, T) {
                S({
                    id: e,
                    type: "init",
                    currentSize: 0
                });
                const s = y ? yield function(e) {
                    return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                        var n;
                        const {id: r} = e;
                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkClouodDownloadInfo start");
                        const o = `${a.FM_MAIN_EVENT_ENUM.CHECK_CLOUD_UPLOAD_INFO}${r}`;
                        i.ipcMain.on(o, (e, n) => {
                            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkClouodDownloadInfo end " + JSON.stringify(n)), 
                            t(n);
                        }), null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(o);
                    }));
                }({
                    id: e
                }) : yield function(e) {
                    var t, n, r;
                    const {baseUrl: i, id: a, downloadList: s, totalSize: d, isAlbum: h, albumList: p, isOriginIsland: f, originIslandType: _, isDirectory: m, dirList: v = [], newToken: y = "", requestId: E} = e;
                    let b = "FROM_PC_FILE_MANAGER";
                    f && _ && (b = _);
                    const w = {
                        downloadList: s,
                        type: b,
                        total: d,
                        isDir: !!m,
                        isAlbum: !!h,
                        albumList: p,
                        dirList: v
                    };
                    global.__fmLog.info(`[fm]directory-transfer.ts downloadDirectory checkDownloadInfo start downloadList: ${null === (t = w.downloadList) || void 0 === t ? void 0 : t.length},type: ${w.type},total: ${w.total},\n        isDir: ${w.isDir},dirList: ${null === (n = w.dirList) || void 0 === n ? void 0 : n.length},isAlbum: ${w.isAlbum},albumList: ${null === (r = w.albumList) || void 0 === r ? void 0 : r.length}`);
                    const S = c.buildUrl(i, c.API_FILE_DOWNLOAD_INFO, {
                        id: a
                    });
                    try {
                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo uri: " + S), 
                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo json: " + (w ? JSON.stringify(w) : null)), 
                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo commonRequstParam: " + (g.commonRequstParam ? JSON.stringify(g.commonRequstParam) : null));
                    } catch (e) {
                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo error: " + e.message);
                    }
                    return new Promise(e => {
                        const t = {
                            code: o.TRANSFER_FAIL_CODE.OK,
                            totalCount: 0,
                            totalSize: 0,
                            serviceUrl: "",
                            data: []
                        };
                        g.commonRequstParam.headers.newToken = y;
                        const n = l.default.post(Object.assign(Object.assign({
                            uri: S,
                            json: w
                        }, g.commonRequstParam), {
                            timeout: 3e5
                        }), (n, r) => {
                            var i, a, s, l;
                            try {
                                global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo res >>> " + (r ? JSON.stringify(r) : null));
                            } catch (e) {
                                global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo error " + e.message);
                            }
                            if (n && (global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo error " + JSON.stringify(n)), 
                            t.code = o.TRANSFER_FAIL_CODE.UNKNOWN), r && 200 == r.statusCode) {
                                try {
                                    r.body = JSON.parse(null == r ? void 0 : r.body);
                                } catch (e) {
                                    global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory json.parse body error"), 
                                    r && r.body && r.body.length && E && (t.code = o.TRANSFER_FAIL_CODE.FILE_NOT_EXIST, 
                                    t.data = r.body);
                                }
                                global.__fmLog.info(`[fm]directory-transfer.ts downloadDirectory checkDownloadInfo res totalCount: ${null === (i = null == r ? void 0 : r.body) || void 0 === i ? void 0 : i.totalCount},totalSize: ${null === (a = null == r ? void 0 : r.body) || void 0 === a ? void 0 : a.totalSize}`), 
                                t.totalCount = (null === (s = r.body) || void 0 === s ? void 0 : s.totalCount) || 0, 
                                t.totalSize = (null === (l = r.body) || void 0 === l ? void 0 : l.totalSize) || 0;
                            } else global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo res error statusCode:" + (null == r ? void 0 : r.statusCode)), 
                            t.code = o.TRANSFER_FAIL_CODE.UNKNOWN;
                            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo end result:" + JSON.stringify(t)), 
                            e(t);
                        });
                        u.default.add(a, n), n.on("error", n => {
                            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo http error:" + n), 
                            t.code = o.TRANSFER_FAIL_CODE.UNKNOWN, e(t);
                        }).on("abort", () => {
                            global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory checkDownloadInfo http abort"), 
                            t.code = o.TRANSFER_FAIL_CODE.ABORT, e(t);
                        });
                    });
                }(t);
                O.code = s.code, t.serviceUrl = s.serviceUrl;
                try {
                    global.__fmLog.info(`[fm][directory-transfer.ts][downloadDirectoryStart][res] requestId: ${A}, res:  ${s ? JSON.stringify(s) : null}`);
                } catch (e) {
                    global.__fmLog.info("[fm][directory-transfer.ts][downloadDirectoryStart][error] " + e.message);
                }
                if (A) if (s.code === o.TRANSFER_FAIL_CODE.FILE_NOT_EXIST) {
                    global.__fmLog.info("[fm][download-file.service.ts][downloadWhenFromClaw][文件不存在]");
                    const {ipcMain: e} = n(2);
                    e.emit(A, null, {
                        fileNotExist: !0,
                        data: s.data
                    });
                } else {
                    const {ipcMain: e} = n(2);
                    e.emit(A, null, {
                        fileNotExist: !1
                    });
                }
                if (O.code == o.TRANSFER_FAIL_CODE.OK) {
                    S({
                        id: e,
                        currentSize: 0,
                        type: "start",
                        totalCount: s.totalCount,
                        totalSize: s.totalSize
                    });
                    const n = yield function(e) {
                        return r.__awaiter(this, void 0, void 0, function*() {
                            const {saveDir: t, totalSize: n, freespace: r} = e;
                            let i = 0;
                            i = r || f.default.getAvailableSpace(t), global.__fmLog.info(`[fm] directory-transfer.ts downloadDirectory checkSpace totalSize:${n},free:${i}`);
                            const a = i - n;
                            let s = {
                                spaceNeed: -1,
                                code: o.TRANSFER_FAIL_CODE.OK
                            };
                            if (a < 0) s.spaceNeed = -a, s.code = o.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE; else {
                                (yield p.checkPathWritable(t)) || (global.__fmLog.info("[fm] directory-transfer.ts downloadDirectory checkSpace writable false"), 
                                s.code = o.TRANSFER_FAIL_CODE.NO_PERMISSSION);
                            }
                            return s;
                        });
                    }({
                        saveDir: T,
                        totalSize: s.totalSize || E,
                        freespace: v
                    });
                    if (O.code = n.code, O.spaceNeed = n.spaceNeed, n.code == o.TRANSFER_FAIL_CODE.OK) {
                        const e = yield function(e) {
                            return r.__awaiter(this, void 0, void 0, function*() {
                                return new Promise(t => {
                                    global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http start");
                                    const {baseUrl: n, id: i, saveDir: a, serviceUrl: s, isAlbum: p, isReplace: f, newToken: _ = ""} = e;
                                    g.commonRequstParam.headers.newToken = _;
                                    const m = s || c.buildUrl(n, c.API_FILE_DOWNLOAD, {
                                        id: i
                                    }), v = Object.assign({
                                        uri: m
                                    }, g.commonRequstParam);
                                    try {
                                        global.__fmLog.info(`[fm]directory-transfer.ts downloadDirectory download http begin>>>requestParams: ${v ? JSON.stringify(v) : null} `);
                                    } catch (e) {
                                        global.__fmLog.info(`[fm]directory-transfer.ts downloadDirectory download http error>>>${e.message} `);
                                    }
                                    const y = l.default.get(v);
                                    u.default.add(i, y);
                                    const E = {
                                        code: o.TRANSFER_FAIL_CODE.OK,
                                        entryNames: [],
                                        successCount: 0
                                    }, b = (e, t) => {
                                        E.entryNames = e, E.successCount = t;
                                    };
                                    y.on("response", e => r.__awaiter(this, void 0, void 0, function*() {
                                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http response");
                                        const n = d.handleDownloadRes(e);
                                        if (n != o.TRANSFER_FAIL_CODE.OK) global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http response " + n), 
                                        E.code = n, t(E); else {
                                            global.__fmLog.info("[fm]directory-transfer.ts download extractTar start");
                                            const n = yield (r = {
                                                res: e,
                                                saveDir: a,
                                                id: i,
                                                entryCallback: b,
                                                isAlbum: p,
                                                isReplace: f
                                            }, new Promise(e => {
                                                const {res: t, saveDir: n, id: i, entryCallback: a, isAlbum: s, isReplace: l} = r;
                                                let c = [], u = 0;
                                                const d = new h.default({
                                                    type: "extract",
                                                    targetDir: n,
                                                    readStreamTar: t,
                                                    isAlbum: s,
                                                    isReplace: l
                                                });
                                                d.onprogress(e => {
                                                    S({
                                                        id: i,
                                                        currentSize: e,
                                                        type: "progress"
                                                    });
                                                }), d.onfinish(t => {
                                                    t || u--;
                                                    const n = d.getFailedEntries();
                                                    global.__fmLog.info(`[fm]directory-transfer.ts downloadDirectory extractTar finish successCount:${u} failedEntries:${(null == n ? void 0 : n.length) || 0}`), 
                                                    e({
                                                        code: o.TRANSFER_FAIL_CODE.OK,
                                                        successCount: u,
                                                        failedEntries: n
                                                    });
                                                }), d.onerror(() => {
                                                    global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory extractTar error");
                                                    const t = d.getFailedEntries();
                                                    e({
                                                        code: o.TRANSFER_FAIL_CODE.EXTRACT,
                                                        successCount: u,
                                                        failedEntries: t
                                                    });
                                                }), d.onentry(e => {
                                                    u++, e.isRoot && (c.push(e), a(c, u)), a(c, u);
                                                });
                                            }));
                                            global.__fmLog.info("[fm]directory-transfer.ts download extractTar end"), E.successCount = n.successCount, 
                                            E.failedEntries = n.failedEntries, E.code == o.TRANSFER_FAIL_CODE.ABORT || (E.code = n.code), 
                                            t(E);
                                        }
                                        var r;
                                    })).on("error", e => {
                                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http error:" + e), 
                                        E.code = o.TRANSFER_FAIL_CODE.UNKNOWN, t(E);
                                    }).on("abort", () => {
                                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http abort"), 
                                        E.code = o.TRANSFER_FAIL_CODE.ABORT, t(E);
                                    }).on("complete", () => {
                                        global.__fmLog.info("[fm]directory-transfer.ts downloadDirectory download http complete");
                                    });
                                });
                            });
                        }(t);
                        global.__fmLog.info(`[fm] directory-transfer.ts downloadDirectory download res code:${e.code},successCount:${e.successCount},entryNames:${e.entryNames.length}`), 
                        O.code = e.code, O.entryNames = e.entryNames, O.successCount = e.successCount;
                    }
                } else s.code !== o.TRANSFER_FAIL_CODE.CLOUD_CHECK_FAILD && y && S({
                    id: e,
                    currentSize: 0,
                    type: "start",
                    totalCount: s.totalCount,
                    totalSize: s.totalSize
                });
            }
            global.__fmLog.info(`[fm] directory-transfer.ts downloadDirectory end code:${O.code},successCount:${O.successCount},entryNames:${null === (_ = null == O ? void 0 : O.entryNames) || void 0 === _ ? void 0 : _.length},spaceNeed:${O.spaceNeed}`);
            const C = `${a.FM_MAIN_EVENT_ENUM.DOWNLOAD_DIRECTORY_FROM_PC_FM}${e}`;
            null === (m = global.__mainWindow) || void 0 === m || m.webContents.send(C, O), 
            b(e);
        });
    }, t.chooseSaveDir = w, t.getDirectoryUploadInfo = function(e, t) {
        var n;
        return r.__awaiter(this, void 0, void 0, function*() {
            const {uploadPaths: e = [], saveDir: r, id: i, isReplace: o, isPassBack: s} = t;
            let l = [], c = 0, u = 0, d = "";
            const h = [];
            for (var f = 0; f < e.length; f++) {
                const t = e[f], n = yield p.getFileStat(t);
                if (n.error) {
                    d = "" + n.error;
                    break;
                }
                {
                    const e = n.stats, r = e.isDirectory();
                    let i = _.default.basename(t) || t[0], a = e.size;
                    if (u++, r) {
                        const e = yield T(t);
                        if (e.error) {
                            d = "" + e.error;
                            break;
                        }
                        a = e.totalSize, u += e.fileCount, u += e.folderCount;
                    }
                    i = p.replaceSpecialSymbolsAndMax(i), i = p.replaceSpecialSymbols(i);
                    let f = o ? "overwrite" : "rename";
                    h.some(e => e == i) && (f = "rename"), l.push({
                        index: -1,
                        isDirectory: r,
                        fileName: i,
                        fileSize: a,
                        savePath: "",
                        date: new Date(e.mtime).getTime(),
                        fileType: "UNKNOWN",
                        mimeType: m.default.getType(t),
                        ifDuplicated: f,
                        fileReturn: !!s
                    }), h.push(i), c += a;
                }
            }
            const g = {
                id: i,
                dropFileItems: l,
                totalSize: c,
                totalCount: u,
                screen_w: 0,
                screen_h: 0,
                x: 0,
                y: 0,
                type: "TO_PC_FILE_MANAGER",
                savePath: r
            };
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(a.FM_MAIN_EVENT_ENUM.GET_DIRECTORY_UPLOAD_INFO, g, d);
        });
    };
}
