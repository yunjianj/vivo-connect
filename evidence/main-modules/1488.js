// analysis/pretty/main.js:110971; webpack module 1488
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = n(305), a = r.__importDefault(n(4)), s = r.__importDefault(n(103)), l = new Map;
    function c(e) {
        var t;
        const n = l.get(e);
        global && (null === (t = global.__log) || void 0 === t || t.info(`[offline-transfer-file.ts][cancelTaskUploadReq]taskId: ${e}, cancelMap size: ${null == n ? void 0 : n.size}, cancel req`)), 
        n && (n.forEach((e, t) => {
            e(), n.delete(t);
        }), l.delete(e));
    }
    t.default = {
        initOfflineTransferEvent: function() {
            !function() {
                i.ipcMain.handle(o.CLOUD_TRANSFER_EVENT.UPLOAD_START, (e, {url: t, fileSize: n, filePath: i, progressEvent: c, data: u, headers: d, taskId: h, timeout: p = 1200}) => r.__awaiter(this, void 0, void 0, function*() {
                    var r, f;
                    global && (null === (r = global.__log) || void 0 === r || r.info(`[offline-transfer-file.ts][onUploadFile] ${t}, taskId: ${h}, timeout: ${p}s, ${i} upload start`));
                    const _ = {
                        code: o.CLOUD_TRANSFER_RES.UPLOAD_UNSTART,
                        err: ""
                    };
                    try {
                        return yield new Promise((r, f) => {
                            var m, g;
                            if (i && c) {
                                let g = "";
                                u && Object.entries(u).forEach(([e, t]) => {
                                    e = "string" != typeof e ? e && "" + e || "" : e;
                                    const n = "string" == typeof t ? t : "" + (t || "") || "";
                                    g += g ? `&${e}=${encodeURIComponent(n)}` : `?${e}=${encodeURIComponent(n)}`;
                                }), g += g ? "&contentLength=" + n : "?contentLength=" + n, global && (null === (m = global.__log) || void 0 === m || m.info(`[offline-transfer-file.ts][UPLOAD_START] ${t}, taskId: ${h}, timeout: ${p}s, queryStr: ${g}, ${i} upload start`));
                                const v = a.default.createReadStream(i);
                                v.on("data", t => {
                                    e.sender.send(c, {
                                        bytesReceived: t.length
                                    });
                                }), v.on("error", e => {
                                    var t;
                                    global && (null === (t = global.__log) || void 0 === t || t.info(`[offline-transfer-file.ts][UPLOAD_START](fileStream error) ${i} fileStream error: ${e}`)), 
                                    f(e), v.close();
                                });
                                const y = s.default.post(t + g, {
                                    timeout: 1e3 * p,
                                    headers: Object.assign(Object.assign({}, d), {
                                        "Content-Type": "application/octet-stream",
                                        "Transfer-Encoding": "chunked"
                                    })
                                }, (e, n, i) => {
                                    var a, s, l, c;
                                    if (global && (null === (a = global.__log) || void 0 === a || a.info(`[offline-transfer-file.ts][返回]${t}, body: ${i} err: ${e}`)), 
                                    e) return f(e), v.close(), void (global && (null === (s = global.__log) || void 0 === s || s.info(`[offline-transfer-file.ts][error][0] ${t}, body: ${i} err: ${e}`)));
                                    try {
                                        i = JSON.parse(i);
                                    } catch (e) {
                                        global && (null === (l = global.__log) || void 0 === l || l.info(`[offline-transfer-file.ts][error][1] ${t}, body: ${i} err: ${e}`));
                                    }
                                    200 != n.statusCode && (_.code = o.CLOUD_TRANSFER_RES.UPLOAD_FAILED, _.err = n.statusCode, 
                                    global && (null === (c = global.__log) || void 0 === c || c.info(`[offline-transfer-file.ts][UPLOAD_START] ${t} request failed : response.status is ${n.statusCode}`)), 
                                    r(_)), global && global.__log.info(`[offline-transfer-file.ts] ${t} response: ${JSON.stringify(i)}, dataType: ${typeof i}, code: ${i.code}, isSucc: ${"0" != i.code}`), 
                                    "0" != i.code ? (_.code = o.CLOUD_TRANSFER_RES.UPLOAD_FAILED, _.err = i.code) : _.code = o.CLOUD_TRANSFER_RES.UPLOAD_SUCC, 
                                    r(_), v.close();
                                });
                                v.pipe(y);
                                const E = () => {
                                    y.abort(), v.close();
                                }, b = l.get(h) || new Map;
                                b.set(i, E), l.set(h, b);
                            } else global && (null === (g = global.__log) || void 0 === g || g.info("[offline-transfer-file.ts][UPLOAD_START] err: invalid parameter")), 
                            r({
                                code: o.CLOUD_TRANSFER_RES.UPLOAD_FAILED,
                                err: "invalid parameter"
                            });
                        });
                    } catch (e) {
                        return global && (null === (f = global.__log) || void 0 === f || f.info("[offline-transfer-file.ts][UPLOAD_START] error: " + (e instanceof Error ? e.toString() : JSON.stringify(e)))), 
                        {
                            code: o.CLOUD_TRANSFER_RES.UPLOAD_FAILED,
                            err: e.code
                        };
                    }
                }));
            }(), i.ipcMain.on(o.CLOUD_TRANSFER_EVENT.CANCEL_UPLOAD, (e, t, n) => {
                var r, i;
                const a = l.get(t);
                if (global && (null === (r = global.__log) || void 0 === r || r.info(`[offline-transfer-file.ts][onCancelRequest] cancel req, taskId: ${t}, cancelMap: ${a}, filePath: ${n}`)), 
                n) {
                    const e = a ? a.get(n) : void 0;
                    e && (e(), a && a.delete(n), global && (null === (i = global.__log) || void 0 === i || i.info(`[offline-transfer-file.ts][${o.CLOUD_TRANSFER_EVENT.CANCEL_UPLOAD}] cancel req`)));
                } else c(t);
            }), i.ipcMain.on(o.CLOUD_TRANSFER_EVENT.UPLOAD_END, (e, t) => {
                c(t);
            });
        }
    };
}
