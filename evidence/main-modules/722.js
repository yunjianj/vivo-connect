// analysis/pretty/main.js:64126; webpack module 722
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cancelOriginIsland = t.openOriginIslandFolder = t.init = void 0;
    const r = n(0), i = r.__importDefault(n(1)), o = n(25), a = n(2), s = r.__importDefault(n(6)), l = r.__importDefault(n(1474)), c = r.__importDefault(n(156)), u = n(140), d = n(139), h = n(74), p = n(96), f = n(138), _ = n(1475), m = n(94), g = n(716), v = r.__importDefault(n(718)), y = r.__importDefault(n(71)), E = n(723), b = r.__importDefault(n(4));
    let w = !1, S = null, T = "", A = {
        id: "",
        source: "originIsland",
        nickName: "",
        deviceName: "",
        totalCount: 0,
        totalSize: 0,
        currentSize: 0,
        fileType: "个文件"
    }, O = 0, C = [], N = 0, I = !1, R = {
        savePath: "",
        successedOpenFiles: []
    };
    const D = o.debounce(function() {
        if (global.__log.info(`[oi]extra handleDownloadEnd timeout network error downloading:${w} endHandled:${I}`), 
        !w) return;
        if (I) return;
        global.__log.info("[oi]extra handleDownloadEnd timeout network error"), k(h.TRANSFER_FAIL_CODE.NETWORK), 
        null != S && S.abort();
    }, 1e4, {
        leading: !1,
        trailing: !0
    });
    function L(e, t) {
        global.__log.info("[oi]handleStartDownload begin, isNearConnected: " + t.device.isNearConnected);
        const {device: n, info: a, checkRes: d} = t, g = s.default.getItem("receiveFilesPath") || m.getAppDownloadPath();
        if (function(e, t) {
            const n = t.map(e => ({
                fileName: e.fileName
            })), r = E.getFilesQuantifierAndType(n);
            A = {
                id: "",
                source: "originIsland",
                nickName: e.nickname && "" != e.nickname ? e.nickname + "的" : "",
                deviceName: e.mobileDeviceName || "手机",
                totalCount: t.length,
                totalSize: t.reduce((e, t) => e + t.fileSize, 0),
                currentSize: 0,
                fileType: r
            }, C = t, I = !1, T = e.mobileDeviceId || "", N = 0;
        }(n, a), A.id = y.default(), v.default.add(A), d != h.TRANSFER_FAIL_CODE.OK && d != h.TRANSFER_FAIL_CODE.NOT_FOUND_CONTINUE) return void k(d);
        if (p.getDiskSpaceLeft(g, a) < 0) return void k(h.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE);
        w = !0, O = (new Date).valueOf(), u.send2Main(f.FM_RENDERER_ENUM.TOGGLE_ORIGIN_ISLAND_DOWNLOAD, {
            deviceId: n.mobileDeviceId,
            flag: !0,
            savePaths: a.map(e => e.path)
        });
        const b = o.throttle(e => {
            w && !I && (A.currentSize = e, v.default.updateProgress(A), D());
        }, 500), L = new l.default({
            logPrefix: "[oi][handleStartDownload]"
        }).on("progress", b).on("file-success", () => {
            N++;
        }).on("end", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            if (global.__log.info(`[oi][handleStartDownload] end: ${e}, success files count: ${t.length}`), 
            w = !1, N = t.length, t.length > 0) {
                u.revealAndSelectFiles(g, t.map(e => e.fileName)), R.savePath = g, R.successedOpenFiles = t;
                const e = t.map(e => {
                    var t;
                    const r = null === (t = C.find(t => t.fileName == e.originName)) || void 0 === t ? void 0 : t.path;
                    return {
                        fileName: e.fileName,
                        originName: e.originName,
                        ts: (new Date).valueOf(),
                        fileSize: e.size,
                        status: 0,
                        from: n.mobileDeviceName || "",
                        to: "pc",
                        savePath: i.default.join(g, e.fileName),
                        phonePath: r,
                        deviceName: n.mobileDeviceName || "",
                        deviceId: n.device_id || n.mobileDeviceId || "",
                        deviceType: n.deviceType,
                        fromModule: _.TRANSFER_RECORD_FROM_MODULE_ENUM.ORIGIN_ISLAND
                    };
                });
                u.send2Main(f.FM_RENDERER_ENUM.ORIGIN_ISLAND_WRITE_RECORDS, {
                    records: e
                });
            }
            const o = yield function(e) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    const t = yield c.default.getInstance().getDeviceInformation(e.deviceType);
                    return t && (t.isNearConnected || t.isCloudConnected);
                });
            }(n);
            e == h.TRANSFER_FAIL_CODE.OK ? k(e) : o ? setTimeout(() => {
                global.__log.error("[oi][handleFailConditions] no msg from phone, pc handle failed: " + e), 
                k(e);
            }, 3e3) : k(h.TRANSFER_FAIL_CODE.NETWORK);
            const {totalCount: a} = A;
            global.__log.info("[oi][handleStartDownload] all success: " + (t.length == a)), 
            t.length == a && u.send2Main(f.FM_RENDERER_ENUM.ORIGIN_ISLAND_RESULT_2_PHONE, {
                code: h.TRANSFER_FAIL_CODE.OK,
                totalCount: a,
                successCount: N,
                mobileDeviceId: T
            }), u.send2Main(f.FM_RENDERER_ENUM.TOGGLE_ORIGIN_ISLAND_DOWNLOAD, {
                deviceId: n.mobileDeviceId,
                flag: !1
            });
        }));
        S = L.start({
            files: a,
            savePath: g,
            checkRes: d,
            downloadParam: {
                uri: t.downloadUrl,
                strictSSL: !1,
                headers: {
                    "X-ES-HTTP-VERSION": "1",
                    newToken: t.token
                }
            }
        });
    }
    function k(e, t) {
        if (I) return void global.__log.info("[oi]extra handleDownloadEnd and return, code: " + e);
        D.cancel(), I = !0;
        const {totalCount: n} = A;
        t || u.send2Main(f.FM_RENDERER_ENUM.ORIGIN_ISLAND_RESULT_2_PHONE, {
            code: e,
            totalCount: n,
            successCount: N,
            mobileDeviceId: T
        }), v.default.updateResult(A, N, e), g.taskDownloadEnd(1, A, C.map(e => e.fileName), e, O, void 0);
    }
    t.init = function() {
        a.ipcMain.on(d.DOWNLOAD_WIN_MAIN.CANCEL_DOWNLOAD, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            "originIsland" == t && (k(h.TRANSFER_FAIL_CODE.ABORT), null != S && S.abort());
        })), a.ipcMain.on(d.ORIGIN_ISLAND_MAIN.START_DOWNLOAD, L), a.ipcMain.on(d.ORIGIN_ISLAND_MAIN.FAIL_FROM_PHONE, (e, t) => {
            if (!w) return;
            global.__log.error("[oi]FAIL_FROM_PHONE, type: " + t.type);
            k("cancel" == t.type ? h.TRANSFER_FAIL_CODE.CANCEL_FROM_PHONE : h.TRANSFER_FAIL_CODE.UNKNOWN, !0), 
            null != S && S.abort();
        }), a.ipcMain.on(d.ORIGIN_ISLAND_MAIN.DEVICE_DISCONNECT, (e, t) => {
            w && t.mobileDeviceId == T && k(h.TRANSFER_FAIL_CODE.ConnectionException);
        }), a.ipcMain.handle(d.ORIGIN_ISLAND_MAIN.GET_SAVE_DIR, () => r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[oi]originIsland GET_SAVE_DIR start");
            const e = m.getAppDownloadPath(), t = s.default.getItem("receiveFilesPath") || e;
            global.__log.info("[oi]originIsland GET_SAVE_DIR end: " + JSON.stringify(t));
            return (yield function(e) {
                return new Promise(t => {
                    b.default.mkdir(e, {
                        recursive: !0
                    }, e => {
                        e ? (global.__log.info("[oi]originIsland GET_SAVE_DIR mkdir error: " + e), t(!1)) : (global.__log.info("[oi]originIsland GET_SAVE_DIR mkdir success"), 
                        t(!0));
                    });
                });
            }(t)) ? t : e;
        }));
    }, t.openOriginIslandFolder = function() {
        R.successedOpenFiles.length > 0 && u.revealAndSelectFiles(R.savePath, R.successedOpenFiles.map(e => e.fileName));
    }, t.cancelOriginIsland = function() {
        w && (k(h.TRANSFER_FAIL_CODE.ABORT), null != S && S.abort());
    };
}
