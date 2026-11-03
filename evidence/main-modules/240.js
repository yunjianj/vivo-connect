// analysis/pretty/main.js:29794; webpack module 240
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startDownloadVivoShare = t.cancelVivoShare = t.openVivoShareFolder = t.init = t.startVivoshareLink = void 0;
    const r = n(0), i = r.__importDefault(n(103)), o = r.__importDefault(n(241)), a = r.__importDefault(n(1)), s = r.__importDefault(n(4)), l = n(2), c = n(25), u = r.__importDefault(n(6)), d = r.__importDefault(n(1473)), h = n(139), p = n(140), f = n(94), _ = n(74), m = n(96), g = n(716), v = r.__importDefault(n(718)), y = r.__importDefault(n(71)), E = n(723), b = a.default.resolve(l.app.getPath("temp"), "vivoshare_thumb.png");
    let w = null, S = null, T = null, A = {
        id: "",
        source: "vivoshare",
        nickName: "",
        deviceName: "",
        totalCount: 0,
        totalSize: 0,
        currentSize: 0,
        fileType: "个文件"
    }, O = "", C = !1, N = [], I = 0, R = null, D = {
        savePath: "",
        successedOpenFiles: []
    }, L = "";
    function k(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return `[stringify error: ${e}]`;
        }
    }
    function M() {
        if (null == T) return;
        global.__log.info("[vivoshare]start download"), I = (new Date).valueOf();
        const {id: e, file: t} = T, n = u.default.getItem("receiveFilesPath") || f.getAppDownloadPath();
        if (!s.default.existsSync(n)) try {
            s.default.mkdirSync(n, {
                recursive: !0
            });
        } catch (e) {
            return void global.__log.info("[vivoshare]mkdirSync error", e);
        }
        if (m.getDiskSpaceLeft(n, t) < 0) return void P(_.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE);
        v.default.add(A);
        const r = new d.default(n, t);
        new Promise(n => {
            w = i.default.get(`https://${O}/download?taskId=${e}&name=pcsuit&vtime=true`, {
                strictSSL: !1,
                timeout: 1e4
            }), w.on("response", e => {
                const i = c.throttle(e => {
                    C || (A.currentSize = e, v.default.updateProgress(A));
                }, 500);
                e.pipe(r).customOn("parse-error", e => {
                    global.__log.error("[vivoshare]download single file error: " + JSON.stringify(e)), 
                    r.handleError(), JSON.stringify(e).includes('"code":"ENOENT"') ? n(_.TRANSFER_FAIL_CODE.NO_PERMISSSION) : n(_.TRANSFER_FAIL_CODE.EXTRACT);
                }).customOn("parse-progress", i).customOn("single-file-end", e => {
                    global.__log.info(`[vivoshare]single-file-end fileName: ${k(e)}, type: ${typeof e}`), 
                    N.push(e);
                }).customOn("parse-end", () => {
                    global.__log.info(`[vivoshare]parse-end, file.length: ${t.length}, successFiles.length: ${N.length}, successFiles: ${k(N)}`), 
                    N.length != t.length ? n(_.TRANSFER_FAIL_CODE.NETWORK) : n(_.TRANSFER_FAIL_CODE.OK);
                });
            }).on("error", e => {
                global.__log.error("[vivoshare]request error" + JSON.stringify(e)), null != w && w.destroy(), 
                r.handleError(), n(_.TRANSFER_FAIL_CODE.NETWORK);
            }).on("complete", (e, t) => {
                global.__log.info(`[vivoshare]request response res: ${e.statusCode}, ${e.statusMessage}, body: ${null == t ? void 0 : t.toString().substring(0, 1e3)}`, "info");
            });
        }).then(e => {
            global.__log.info(`[vivoshare]download end, success file count: ${N.length}, code: ${e}`), 
            N.length && (p.revealAndSelectFiles(n, N), D.savePath = n, D.successedOpenFiles = N), 
            e == _.TRANSFER_FAIL_CODE.OK ? P(e, N.length) : setTimeout(() => {
                P(e, N.length);
            }, 1e3);
        });
    }
    function P(e = _.TRANSFER_FAIL_CODE.OK, t = 0, n) {
        if (C) return void global.__log.info("[vivoshare]extra handleDownloadEnd and return, code: " + e);
        C = !0;
        let r = "1";
        switch (e) {
          case _.TRANSFER_FAIL_CODE.OK:
            r = "1";
            break;

          case _.TRANSFER_FAIL_CODE.ABORT:
            r = "3";
            break;

          default:
            r = "2";
        }
        let i = {
            taskId: null == T ? void 0 : T.id,
            type: r
        };
        n && (i.reason = n);
        const o = "action:2:status?" + JSON.stringify(i);
        null != S && S.send(o, () => {
            null != S && S.close(), global.__log.info("[vivoshare]send end msg to phone: " + o);
        }), v.default.updateResult(A, t, e);
        const a = null == T ? [] : T.file.map(e => e.name);
        g.taskDownloadEnd(3, A, a, e, I, void 0), w = null, T = null, O = "";
        try {
            s.default.unlink(b, () => {});
        } catch (e) {
            global.__log.error(`[vivoshare]remove thumb ${b} error: ${JSON.stringify(e)}`);
        }
    }
    t.startVivoshareLink = function({ip: e, port: t, sameAccount: n, sceneType: a}) {
        t = t || "8080", "" != e && ("" == t && (t = "8080"), global.__log.info(`[vivoshare]startVivoshareLink>>>ip: ${e}, port: ${t}, sameAccount: ${n}, sceneType: ${a}`), 
        O = `${e}:${t}`, S = new o.default(`ws://${O}/websocket`), S.on("error", e => {
            global.__log.error("[vivoshare]ws error: " + JSON.stringify(e)), S = null;
        }), S.on("open", () => {
            global.__log.info("[vivoshare]ws open");
        }), S.on("close", () => {
            global.__log.error("[vivoshare]ws close"), S = null;
        }), S.on("message", function(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.toString();
                global.__log.info("[vivoshare]ws received: " + t), /action\:0\:versionNegotiation\?/.test(t) && this.send(`ack:0:versionNegotiation?{"version":1,"threadLimit":5,"device_avatar_uri":"${L}"}`);
                const r = /action:1:sendRequest\?/;
                if (r.test(t) && (this.send('ack:1:sendRequest?{"versions":[1]}'), function(e) {
                    try {
                        T = JSON.parse(e), global.__log.info("[vivoshare]prepare downloadInfo ok");
                    } catch (e) {
                        T = null, global.__log.error("[vivoshare]parse sendRequest error: " + e);
                    }
                    if (null != T) {
                        const e = E.getFilesQuantifierAndType(T.file);
                        A = {
                            id: y.default(),
                            source: "vivoshare",
                            nickName: "" + T.senderName,
                            deviceName: "" + T.senderName,
                            totalCount: T.fileCount,
                            totalSize: T.totalSize,
                            currentSize: 0,
                            fileType: e
                        }, C = !1, N = [];
                    }
                }(t.replace(r, "")), n ? M() : function() {
                    if (null == T) return;
                    const e = `https://${O}/thumbnail?taskId=${T.id}`;
                    new Promise(t => {
                        i.default.get(e, {
                            strictSSL: !1,
                            encoding: null
                        }, (e, n) => {
                            null != e && (global.__log.error("[vivoshare]downloadThumbnail error: " + JSON.stringify(e)), 
                            t([])), n && 200 == n.statusCode ? (s.default.writeFileSync(b, n.body, {
                                encoding: "binary"
                            }), t([ b ])) : t([]);
                        });
                    }).then(e => {
                        console.log(e), global.__log.info("[vivoshare]show confirm page"), v.default.preAdd(A), 
                        R = setTimeout(() => {
                            P(_.TRANSFER_FAIL_CODE.ABORT, 0, "timeout");
                        }, 3e4);
                    }).catch(e => {
                        global.__log.error(e);
                    });
                }()), /action\:2\:status\?/.test(t)) {
                    let e = _.TRANSFER_FAIL_CODE.NETWORK;
                    /\"type\":3\,\"reason\"\:\"user interrupt\"/.test(t) && (e = _.TRANSFER_FAIL_CODE.CANCEL_FROM_PHONE), 
                    global.__log.error(`[vivoshare]error from phone: ${t}, code: ${e}`), P(e, N.length);
                }
            });
        }));
    }, t.init = function() {
        l.ipcMain.on(h.DOWNLOAD_WIN_MAIN.CONFIRM_RESULT, (e, t) => {
            if ("vivoshare" == t.source) {
                if (null != R && clearTimeout(R), !t.flag) return global.__log.error("[vivoshare]user refuse"), 
                void P(_.TRANSFER_FAIL_CODE.ABORT, 0, "user refuse");
                M();
            }
        }), l.ipcMain.on(h.DOWNLOAD_WIN_MAIN.CANCEL_DOWNLOAD, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            "vivoshare" == t && (P(_.TRANSFER_FAIL_CODE.ABORT), null != w && w.abort());
        })), l.ipcMain.on(h.VIVOSHARE_MAIN.SET_AVATAR, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[vivoshare]user SET_AVATAR " + t), L = t;
        }));
    }, t.openVivoShareFolder = function() {
        global.__log.info(`[vivoshare]openVivoShareFolder result.savePath: ${k(D.savePath)}, result.successedOpenFiles: ${k(D.successedOpenFiles)}, successedOpenFiles[0] type: ${typeof D.successedOpenFiles[0]}`), 
        D.successedOpenFiles.length > 0 && p.revealAndSelectFiles(D.savePath, D.successedOpenFiles);
    }, t.cancelVivoShare = function() {
        A.currentSize ? P(_.TRANSFER_FAIL_CODE.ABORT) : P(_.TRANSFER_FAIL_CODE.ABORT, 0, "user refuse"), 
        null != w && w.abort();
    }, t.startDownloadVivoShare = function() {
        null != R && clearTimeout(R), M();
    };
}
