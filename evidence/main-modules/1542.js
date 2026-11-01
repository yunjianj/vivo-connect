// analysis/pretty/main.js:117553; webpack module 1542
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(733)), o = n(11), a = n(735), s = r.__importDefault(n(734)), l = n(737), c = n(2), u = n(736), d = r.__importDefault(n(6)), h = r.__importDefault(n(1)), p = r.__importDefault(n(4)), f = n(4), _ = r.__importDefault(n(43)), m = n(167), g = r.__importDefault(n(128)), v = r.__importDefault(n(157));
    let y = !1, E = !1;
    const b = "darwin" == process.platform, w = new a.VTalkService;
    t.default = {
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(1544), {methodName: i, data: o} = e;
                let a, s = o && JSON.parse(o);
                if (i) try {
                    a = yield r[i](s), t(a);
                } catch (e) {
                    t(a, e);
                } else t(a, new Error("参数不全"));
            });
        },
        wssend(e, t) {
            try {
                global.__log.info("wssend 1:" + e), i.default.sendMessage(e), t(new u.BridgeSuccessResponse({}));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        wsUpdateMessage() {
            y || (i.default.on("wscallback", e => {
                try {
                    const t = global.__windows.get("ai-talk");
                    (null == t ? void 0 : t.isDestroyed()) ? global.__log.info("[vtalk]: aiTalkWindow isDestroyed") : (global.__log.info("aiTalkWindow 发送"), 
                    null == t || t.webContents.send(o.AI_TALK_MESSAGE_ENUM.AI_TALK_WS_UPDATE, e));
                } catch (e) {
                    global.__log.info("wscallback 出错:" + e);
                }
            }), y = !0);
        },
        wsEndTask(e, t) {
            try {
                const {requestId: n} = e || {};
                i.default.clearRequestTask(n), t(new u.BridgeSuccessResponse({}));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        getRecordLenExSid(e, t) {
            w.getRecordLenExSid(e.sid).then(e => {
                t(new u.BridgeSuccessResponse({
                    count: e
                }));
            }).catch(e => {
                t(new u.BridgeErrorResponse(e.message));
            });
        },
        getRecordList(e, t) {
            const {sid: n, requestId: r, pageNum: i, pageSize: o} = e;
            w.getRecordList({
                sid: n,
                requestId: r,
                pageNum: i,
                pageSize: o
            }).then(e => {
                t(new u.BridgeSuccessResponse(e));
            }).catch(e => {
                t(new u.BridgeErrorResponse(e.message));
            });
        },
        deleteRecord(e, t) {
            const {requestId: n, category: r} = e;
            if (m.isNullOrUndefined(n) || m.isNullOrUndefined(r)) return t(new u.BridgeErrorResponse("参数错误"));
            w.deleteRecord(n, r).then(e => {
                t(new u.BridgeSuccessResponse(e));
            }).catch(e => {
                t(new u.BridgeErrorResponse(e.message));
            });
        },
        updateRecordExtra(e, t) {
            const {extra: n, requestId: r, category: i} = e || {};
            if (m.isNullOrUndefined(n) || m.isNullOrUndefined(r) || m.isNullOrUndefined(i)) return t(new u.BridgeErrorResponse("参数错误"));
            w.updateExtra(n, {
                category: i,
                request_id: r
            }).then(e => {
                t(new u.BridgeSuccessResponse(e));
            }).catch(e => {
                t(new u.BridgeErrorResponse(e.message));
            });
        },
        getSID(e, t) {
            try {
                const {newSID: n} = e, r = !0 === n ? i.default.getNewSID() : i.default.getSID();
                t(new u.BridgeSuccessResponse({
                    sid: r
                }));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        wsTaskStatusUpdate(e, t) {
            E || (i.default.on("wsstatus", e => {
                var n;
                global.__log.info("wsstatus:" + e);
                try {
                    null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(o.AI_TALK_MESSAGE_ENUM.AI_TALK_TASK_STATE_SYNC, e);
                } catch (e) {
                    global.__log.info("wsstatus sync 2 mainWindow error：" + (e.message || e));
                }
                t(e);
            }), E = !0);
        },
        viewImage(e, t) {
            global.__log.info("[vTalk][bridge][viewImage] path: " + (null == e ? void 0 : e.path));
            try {
                e.path ? c.shell.openPath(e.path).then(e => {
                    t({
                        result: "ok"
                    });
                }).catch(e => {
                    global.__log.error("[vTalk][bridge][viewImage] shell.openPath error: " + e), t({
                        result: "error",
                        error: e
                    });
                }) : t({
                    result: "error",
                    error: "NO_PATH"
                });
            } catch (e) {
                global.__log.error("[vTalk][bridge][viewImage] error: " + (e.meesage || e)), t({
                    result: "error",
                    error: "UNKNOW"
                });
            }
        },
        openImagePath(e, t) {
            global.__log.info("[ai-talk][bridge][openImagePath] path: " + (null == e ? void 0 : e.path));
            try {
                e.path ? f.existsSync(e.path) ? (c.shell.showItemInFolder(e.path), t({
                    result: "ok"
                })) : (e.alwaysShowFolder && c.shell.openPath(h.default.dirname(e.path)), t({
                    result: "error",
                    error: "FILE_NOT_EXIST"
                })) : t({
                    result: "error",
                    error: "NO_PATH"
                });
            } catch (e) {
                global.__log.error("[ai-talk][bridge][openImagePath] error: " + (e.meesage || e)), 
                t({
                    result: "error",
                    error: "UNKNOW"
                });
            }
        },
        saveFile(e, t) {
            global.__log.info("[vTalk][bridge]saveFile path: " + (null == e ? void 0 : e.originPath));
            const n = d.default.getItem("V_TALK_SAVE_PATH") || d.default.getItem("receiveFilesPath");
            c.dialog.showOpenDialog(v.default.getInstance().getWin(), {
                properties: [ "openDirectory" ],
                defaultPath: n,
                buttonLabel: "保存"
            }).then(n => {
                const r = n.filePaths;
                if (null == n.filePaths || 0 == n.filePaths.length) return void (t && t({
                    result: "cancel",
                    error: "select path cancel"
                }));
                const i = r[0];
                if (d.default.setItem("V_TALK_SAVE_PATH", i), i) try {
                    let n = h.default.basename(e.originPath);
                    if (n) {
                        let r = h.default.join(i, n);
                        f.existsSync(r) && (r = h.default.join(i, (new Date).getTime() + n)), setTimeout(() => {
                            if (b) f.copyFile(e.originPath, r, e => {
                                if (e) return global.__log.error(`[vTalk][bridge]saveFile mac copyFile : [${e}]`), 
                                void (t && t({
                                    result: "error",
                                    error: e
                                }));
                                global.__log.error("[vTalk][bridge]saveFile mac save images success"), t && t({
                                    result: "ok",
                                    savePath: r,
                                    isReceivePath: !0
                                });
                            }); else try {
                                const n = f.createReadStream(e.originPath);
                                n.on("error", e => {
                                    global.__log.error(`[vTalk][bridge]saveFile readStream error: [${e.message || e}]`), 
                                    t && t({
                                        result: "error",
                                        error: e
                                    });
                                });
                                const i = f.createWriteStream(r);
                                i.on("finish", () => {
                                    t && t({
                                        result: "ok",
                                        savePath: r,
                                        isReceivePath: !0
                                    });
                                }).on("error", e => {
                                    global.__log.error(`[vTalk][bridge]saveFile write error: [${e.message || e}]`), 
                                    t && t({
                                        result: "error",
                                        error: e
                                    });
                                }), n.pipe(i);
                            } catch (e) {
                                global.__log.error(`[vTalk][bridge]saveFile stream error: [${e.message || e}]`), 
                                t && t({
                                    result: "error",
                                    error: e
                                });
                            }
                        }, 600);
                    } else global.__log.error("[vTalk][bridge]saveFile fileName is null " + n), t && t({
                        result: "error",
                        error: "path is not valid"
                    });
                } catch (e) {
                    global.__log.error(`[vTalk][bridge]saveFile  error: [${e.message || e}]`), t && t({
                        result: "error",
                        error: e
                    });
                } else global.__log.error("[vTalk][bridge]saveFile save images receiveFilesPath is null " + i), 
                t && t({
                    result: "error",
                    savePath: e.originPath,
                    isReceivePath: !1,
                    error: "no receiveFilesPath"
                });
            });
        },
        saveRemoteFile(e, t) {
            const n = d.default.getItem("V_TALK_SAVE_PATH") || d.default.getItem("receiveFilesPath");
            c.dialog.showOpenDialog(v.default.getInstance().getWin(), {
                properties: [ "openDirectory" ],
                defaultPath: n,
                buttonLabel: "保存"
            }).then(n => {
                if (n.filePaths) {
                    const r = n.filePaths;
                    if (null == n.filePaths || 0 == n.filePaths.length) return void (t && t({
                        result: "cancel",
                        error: "select path cancel"
                    }));
                    const i = r[0];
                    if (d.default.setItem("V_TALK_SAVE_PATH", i), i) try {
                        if (h.default.basename(e.originPath)) {
                            let n = this.getUniqueFilePath(i, e.originName, e.extension);
                            const r = f.createWriteStream(n);
                            global.__log.info("[vTalk][bridge]saveFile path: " + (null == e ? void 0 : e.originPath)), 
                            _.default.get(e.originPath, e => {
                                e.pipe(r), r.on("finish", () => {
                                    r.close(), t && t({
                                        result: "ok",
                                        isReceivePath: !0
                                    });
                                });
                            }).on("error", e => {
                                t && t({
                                    result: "error",
                                    error: e
                                });
                            });
                        }
                    } catch (e) {
                        t && t({
                            result: "error"
                        });
                    }
                } else t && t({
                    result: "error",
                    error: "no receiveFilesPath"
                });
            });
        },
        getUniqueFilePath(e, t, n) {
            let r = h.default.join(e, `${t}.${n}`), i = 1;
            for (;p.default.existsSync(r); ) r = h.default.join(e, `${t}(${i}).${n}`), i++;
            return r;
        },
        copyImage(e, t) {
            global.__log.info("[vTalk][bridge]copyImage path: " + (null == e ? void 0 : e.path));
            try {
                if (null == e ? void 0 : e.path) {
                    const n = e.path, r = f.readFileSync(n), i = c.nativeImage.createFromBuffer(r);
                    c.clipboard.writeImage(i), t && t({
                        result: "ok"
                    });
                } else t && t({
                    result: "error",
                    error: "no path"
                });
            } catch (e) {
                global.__log.error("[vTalk][bridge]copyImage error: " + (e.meesage || e)), t && t({
                    result: "error",
                    error: e
                });
            }
        },
        clearTalkHistory(e, t) {
            try {
                global.__log.info("[vTalk][bridge]clearTalkHistory start");
                const e = new a.VTalkService;
                i.default.stopAll().finally(() => {
                    e.clearAll().then(e => {
                        global.__log.info("[vTalk][bridge]clearTalkHistory : " + e), t({
                            result: !0 === e ? "ok" : "fail"
                        });
                    });
                });
            } catch (e) {
                global.__log.error("[vTalk][bridge]clearTalkHistory error: " + (e.meesage || e)), 
                t({
                    result: "error",
                    error: e
                });
            }
        },
        closeWS(e, t) {
            global.__log.info("[vTalk][bridge] closeWS"), i.default.close(), t(new u.BridgeSuccessResponse({}));
        },
        saveFileRecord(e, t) {
            try {
                global.__log.info("saveFileRecord 1:" + e), i.default.saveFileRecord(e), t(new u.BridgeSuccessResponse({}));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        saveErrorRecord(e, t) {
            try {
                global.__log.info("saveErrorRecord :" + e), i.default.saveErrorRecord(e), t(new u.BridgeSuccessResponse({}));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        saveCommonRecord(e, t) {
            var n, r, i;
            try {
                global.__log.info("saveCommonRecord :" + e), e.data.text = null !== (r = null === (n = e.data) || void 0 === n ? void 0 : n.query) && void 0 !== r ? r : null === (i = e.data) || void 0 === i ? void 0 : i.text, 
                w.saveToContentCommon(e, e.category), t(new u.BridgeSuccessResponse({}));
            } catch (e) {
                t(new u.BridgeErrorResponse(e.message));
            }
        },
        vtalkImageSave(e, t) {
            global.__log.info("vtalkImageSave 3:" + e.url), l.cacheUrlToFile(e.url, e.file).then(e => {
                global.__log.info("vtalkImageSave 2:" + e), t({
                    result: "ok",
                    savePath: e || "",
                    isReceivePath: !0
                });
            });
        },
        vtalkGetFile(e, t) {
            const n = g.default.contentType(h.default.extname(e.path)), r = h.default.basename(e.path);
            global.__log.info(`vtalkGetFile 3:${n}, ${r}`);
            const i = l.cacheUrlGetFile(e.path);
            t(i ? {
                result: "ok",
                fileBuffer: i,
                type: n,
                name: r
            } : {
                result: "error"
            });
        },
        vtalkGetFileType(e, t) {
            const n = g.default.contentType(e.path);
            global.__log.info("vtalkGetFileType 6:" + n), t({
                result: "ok",
                type: n
            });
        },
        vtalkGetUrlAndHeaders(e, t) {
            let {url: n, method: r = "", params: i} = e;
            n = `${n}${m.sortObjectAndConvertToString(i)}`;
            t({
                result: "ok",
                data: {
                    url: n,
                    headers: s.default.constructHeaders(n, Math.floor(Date.now() / 1e3), r)
                }
            });
        }
    };
}
