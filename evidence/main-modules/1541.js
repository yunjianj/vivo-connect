// analysis/pretty/main.js:117400; webpack module 1541
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = r.__importDefault(n(6)), s = n(2), l = r.__importDefault(n(28)), c = "darwin" == process.platform;
    t.default = {
        makeDir(e, t) {
            try {
                global.__log.info("notification directory path:" + e.pathArr), e.pathArr.map(e => {
                    !function e(t) {
                        return console.log("makeDir:" + t), !!i.default.existsSync(t) || !!e(o.default.dirname(t)) && (i.default.mkdirSync(t), 
                        !0);
                    }(e);
                }), t({
                    code: 1
                });
            } catch (e) {
                global.__log.error("makeDir error", e.message);
            }
        },
        saveFile(e, t) {
            let n = a.default.getItem("receiveFilesPath");
            if (n) try {
                let r = o.default.join(n, "pictureRelay");
                i.default.existsSync(r) || i.default.mkdirSync(r, {
                    recursive: !0
                });
                let a = o.default.join(r, e.fileName);
                i.default.existsSync(a) && (a = o.default.join(r, (new Date).getTime() + e.fileName)), 
                setTimeout(() => {
                    if (c) i.default.rename(e.originPath, a, n => {
                        n ? "EXDEV" === n.code ? i.default.copyFile(e.originPath, a, n => {
                            if (n) return global.__log.error(`[Notification][bridge] mac saveData copyFile error: [${n}]`), 
                            void (t && t({
                                message: "err"
                            }));
                            i.default.unlink(e.originPath, e => {
                                e && global.__log.error(`[Notification][bridge] mac saveData unlink error: [${e}]`), 
                                global.__log.info("[Notification][bridge] mac saveData save images success via copyFile"), 
                                t && t({
                                    message: "ok",
                                    savePath: a,
                                    isReceivePath: !0
                                });
                            });
                        }) : (global.__log.error(`[Notification][bridge] mac saveData save images error: [${n}]`), 
                        t && t({
                            message: "err"
                        })) : (global.__log.info("[Notification][bridge] mac saveData save images success"), 
                        t && t({
                            message: "ok",
                            savePath: a,
                            isReceivePath: !0
                        }));
                    }); else try {
                        const n = i.default.createReadStream(e.originPath);
                        n.on("error", e => {
                            global.__log.error(`[Notification][bridge] saveData readStream error: [${e}]`), 
                            t && t({
                                message: "err"
                            });
                        });
                        const r = i.default.createWriteStream(a);
                        r.on("finish", () => {
                            global.__log.info("[Notification][bridge] saveData writeStream finish"), t && t({
                                message: "ok",
                                savePath: a,
                                isReceivePath: !0
                            });
                        }).on("error", e => {
                            global.__log.error(`[Notification][bridge] saveData writeStream error: [${e}]`), 
                            t && t({
                                message: "err"
                            });
                        }), n.pipe(r);
                    } catch (e) {
                        global.__log.error(`[Notification][bridge] saveData save images error: [${e}]`), 
                        t && t({
                            message: "err"
                        });
                    } finally {
                        i.default.stat(e.originPath, (t, n) => {
                            t ? console.log(t) : n.isFile() && i.default.unlinkSync(e.originPath);
                        });
                    }
                }, 600);
            } catch (e) {
                global.__log.error(`[Notification][bridge] saveData save images error: [${e}]`), 
                t && t({
                    message: "err"
                });
            } else global.__log.error("[Notification][bridge] saveData save images receiveFilesPath is null " + n), 
            t && t({
                message: "ok",
                savePath: e.originPath,
                isReceivePath: !1
            });
        },
        existsFile(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let n = i.default.existsSync(e.originPath);
                    if (e.canOpen) {
                        let r = !0, i = !1;
                        if (!c) {
                            const t = yield l.default.getFileExtSupportApp(o.default.extname(e.originPath)), a = JSON.parse(t);
                            r = a.some(e => 1 == e.isDefault), r || 0 !== a.length && n && (i = l.default.openFile(e.originPath, a[0].appPath));
                        }
                        t({
                            isExist: n,
                            hasDefaultApp: r,
                            openSuccess: i
                        });
                    } else t({
                        isExist: n
                    });
                } catch (e) {
                    global.__log.error("notification existsFile err：" + (e.meesage || e)), t({
                        isExist: !1,
                        err: e
                    });
                }
            });
        },
        writeFile(e, t) {
            this.makeDir({
                pathArr: [ o.default.dirname(e.originPath) ]
            }, () => {
                let n = new Buffer(e.base64, "base64"), r = i.default.createWriteStream(e.originPath);
                r.write(n, function(e) {
                    e ? (global.__log.error("notification write file err：" + e), t && t({
                        message: "err"
                    })) : (global.__log.info("notification write file ok"), t && t({
                        message: "ok"
                    })), r.end();
                });
            });
        },
        getMainWorkArea(e, t) {
            var n;
            try {
                const e = null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getBounds();
                if (e) {
                    const n = s.screen.getDisplayMatching(e).workArea;
                    global.__log.info("[NotificationManager][receivePhoneCallMessage] cloestDisplayBounds-workarea: " + JSON.stringify(n)), 
                    t && t(Object.assign({}, n));
                }
            } catch (e) {
                global.__log.error("[notifition][bridge]getMainWorkArea " + (e.meesage || e)), t && t({});
            }
        }
    };
}
