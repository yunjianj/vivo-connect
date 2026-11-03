// analysis/pretty/main.js:113107; webpack module 1507
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(116)), o = r.__importDefault(n(4)), a = r.__importStar(n(7)), s = r.__importDefault(n(1)), l = n(2), c = r.__importDefault(n(109)), u = r.__importDefault(n(1508)), d = r.__importDefault(n(1509)), h = r.__importDefault(n(128)), p = r.__importDefault(n(651));
    let f = null;
    t.default = {
        test(e, t) {
            setTimeout(() => {
                t({
                    message: "this is the album function"
                });
            }, 2e3);
        },
        makeDir(e, t) {
            try {
                e.pathArr.map(e => {
                    !function e(t) {
                        return console.log("makeDir:" + t), !!o.default.existsSync(t) || (e(s.default.dirname(t)) ? (o.default.mkdirSync(t), 
                        !0) : void 0);
                    }(e);
                }), t({
                    code: 1
                });
            } catch (e) {
                global.__log.error(`[Album][bridge] makeDir error: [${(null == e ? void 0 : e.message) || e}]`);
            }
        },
        saveData(e, t) {
            if ((null == e ? void 0 : e.selectList.length) > 1) l.dialog.showOpenDialog({
                title: "请选择存储文件夹",
                buttonLabel: "保存",
                properties: [ "openDirectory" ]
            }).then(n => {
                if (!(null == n ? void 0 : n.canceled) && n.filePaths) {
                    const r = new Map;
                    let i = null == e ? void 0 : e.selectList.map(e => {
                        const t = e.fileName, n = t.lastIndexOf("."), i = -1 !== n ? t.slice(0, n) : t, o = -1 !== n ? t.slice(n) : "";
                        let a = r.get(t) || 0;
                        const s = Object.assign({}, e);
                        return a > 0 && (s.fileName = `${i}(${a})${o}`), r.set(t, a + 1), s;
                    });
                    global.__log.info("[Album][bridge] saveData :" + JSON.stringify(null == e ? void 0 : e.selectList));
                    let a = 0;
                    for (let e of i) {
                        a++;
                        try {
                            let t = s.default.join(n.filePaths[0], null == e ? void 0 : e.fileName);
                            o.default.existsSync(t) && (t = s.default.join(n.filePaths[0], (new Date).getTime() + a + (null == e ? void 0 : e.fileName)));
                            const r = o.default.createReadStream(e.originPath.replace("localapp://", ""));
                            r.on("error", e => {
                                global.__log.error(`[Album][bridge] saveData readStream error: [${(null == e ? void 0 : e.message) || e}]`);
                            }), r.pipe(o.default.createWriteStream(t));
                        } catch (e) {
                            global.__log.error(`[Album][bridge] saveData save images error: [${(null == e ? void 0 : e.message) || e}]`);
                        }
                    }
                    t({
                        data: null == n ? void 0 : n.filePaths[0]
                    });
                }
            }); else {
                const n = (new Date).toLocaleTimeString().split(":").join("");
                l.dialog.showSaveDialog({
                    title: "另存为",
                    defaultPath: e.selectList[0] && e.selectList[0].fileName || "vivo办公套件 " + n,
                    buttonLabel: "保存"
                }).then(n => {
                    if (!(null == n ? void 0 : n.canceled) && n.filePath) {
                        const r = e.selectList[0];
                        let i = n.filePath;
                        try {
                            const e = o.default.createReadStream(r.originPath.replace("localapp://", ""));
                            e.on("error", e => {
                                global.__log.error(`[Album][bridge] saveData readStream error: [${(null == e ? void 0 : e.message) || e}]`);
                            }), e.pipe(o.default.createWriteStream(i));
                        } catch (e) {
                            global.__log.error(`[Album][bridge] saveData save images error: [${(null == e ? void 0 : e.message) || e}]`);
                        }
                        t({
                            data: i
                        });
                    }
                });
            }
        },
        copyData(e, t) {
            return new Promise((n, a) => {
                this.makeDir({
                    pathArr: [ s.default.dirname(e.savePath) ]
                }, () => {
                    const s = o.default.createReadStream(e.originPath), c = o.default.createWriteStream(e.savePath);
                    l.ipcMain.on("albumCancelImport", () => {
                        global.__log.info("[Album][bridge] copyData albumCancelImport"), s.unpipe(c), s.destroy(), 
                        c.end();
                    }), s.on("data", e => {
                        t && t({
                            message: 1
                        });
                    }), c.on("close", () => r.__awaiter(this, void 0, void 0, function*() {
                        global.__log.info("[Album][bridge] copyData writeStream close");
                        try {
                            const r = yield i.default.stat(e.originPath);
                            yield i.default.utimes(e.savePath, new Date(r.atimeMs), new Date(r.mtimeMs));
                        } catch (e) {
                            global.__log.error(`[Album][bridge] copyData change mtime error: [${(null == e ? void 0 : e.message) || e}]`);
                        } finally {
                            t && t({
                                message: "ok"
                            }), n(null);
                        }
                    })), s.on("error", e => {
                        global.__log.error(`[Album][bridge] copyData readStream error: [${(null == e ? void 0 : e.message) || e}]`), 
                        a(e);
                    }), c.on("error", e => {
                        global.__log.error(`[Album][bridge] copyData writeStream error: [${(null == e ? void 0 : e.message) || e}]`), 
                        a(e);
                    }), s.pipe(c);
                });
            }).catch(e => {
                t && t({
                    error: (null == e ? void 0 : e.message) || e
                });
            });
        },
        copysData(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let n = [], r = [];
                e.updateData.forEach(t => {
                    let i = {
                        originPath: t.old_thumb_data,
                        savePath: (t.save_dir || e.customSavePath) + t.thumb_data
                    };
                    r.push(this.copyData(i), () => {});
                    let a = t.oldFilePath.replace("localapp://", ""), s = new Promise((n, r) => {
                        let i = `${t.save_dir || e.customSavePath}${t.original_data}`;
                        this.makeDir({
                            pathArr: [ i.substr(0, i.lastIndexOf("/")) ]
                        }, () => {
                            o.default.copyFile(a, i, function(e) {
                                e && (global.__log.error(`[Album][bridge] copysData error: [${(null == e ? void 0 : e.message) || e}]`), 
                                r(e)), n(null);
                            });
                        });
                    });
                    n.push(s);
                }), yield Promise.all(r), yield Promise.all(n), t && t();
            });
        },
        movesData(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    e.updateData.forEach(t => {
                        let n = t.oldFilePath.replace("localapp://", ""), r = `${e.customSavePath}${t.original_data}`;
                        this.makeDir({
                            pathArr: [ r.substr(0, r.lastIndexOf("/")) ]
                        }, () => {
                            i.default.rename(n, r);
                        });
                    }), t && t();
                } catch (e) {
                    global.__log.error(`[Album][bridge] movesData error: [${(null == e ? void 0 : e.message) || e}]`);
                }
            });
        },
        moveData(e, t) {
            try {
                i.default.rename(e.originPath, e.savePath).then(e => {
                    global.__log.info(`[Album][bridge] moveData rename end: [${e}]`), t({});
                });
            } catch (e) {
                global.__log.error(`[Album][bridge] moveData error: [${(null == e ? void 0 : e.message) || e}]`);
            }
        },
        getFileData(e, t) {
            try {
                o.default.readFile("D:/test.jpg", function(e, n) {
                    if (e) return;
                    let r = new Blob([ new Uint8Array(n) ], {
                        type: "text/plain"
                    });
                    t({
                        blob: r
                    });
                });
            } catch (e) {}
        },
        getThumb(e, t) {
            try {
                console.info("导入生成缩略图，路径:" + e.savePath), this.makeDir({
                    pathArr: [ s.default.dirname(e.savePath) ]
                }, () => {
                    let n = o.default.createWriteStream(e.savePath);
                    n.write(e.buffer, function(e) {
                        e ? (global.__log.error(`[Album][bridge] getThumb write error: [${(null == e ? void 0 : e.message) || e}]`), 
                        t({
                            error: e
                        })) : t({
                            message: "ok"
                        }), n.close();
                    });
                });
            } catch (e) {
                console.error("getThumb error!", e);
            }
        },
        triggerOperateMessage(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.log("triggerOperateMessage", e);
                const n = {
                    msg: Object.assign({}, e),
                    moduleId: e.moduleId
                }, r = c.default.getInstance();
                yield r.sendServiceMsg(n), t({
                    msg: "通知完成"
                });
            });
        },
        existsFile(e, t) {
            try {
                let n = [], r = [];
                e.selectList.forEach(e => {
                    o.default.existsSync(e.originPath) ? n.push(e) : r.push(e);
                }), t({
                    existsList: n,
                    noExistsList: r
                });
            } catch (e) {}
        },
        existFile(e, t) {
            const n = e.save_dir + e.original_data;
            try {
                o.default.access(n, o.default.constants.F_OK, e => {
                    let n = !0;
                    e && (n = !1), t(n);
                });
            } catch (e) {
                t(!1);
            }
        },
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                (new Date).getTime();
                const r = n(730), {methodName: i, data: o} = e;
                let a, s = o && JSON.parse(o);
                if (i) try {
                    a = yield r[i](s), t(a);
                } catch (e) {
                    t(a, e);
                } else t(a, new Error("参数不全"));
            });
        },
        saveGroups(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let n = [], r = [];
                const i = [];
                e.insertData.forEach(e => {
                    let t = {
                        originPath: e.old_thumb_data,
                        savePath: e.save_dir + e.thumb_data
                    };
                    n.push(this.copyData(t), () => {});
                    let s = e.oldFilePath.replace("localapp://", ""), l = new Promise((t, n) => {
                        try {
                            const n = o.default.readFileSync(s);
                            n.writeUInt32BE(0, n.length - 19);
                            const r = a.createHash("md5");
                            r.update(n, "utf8");
                            const l = r.digest("hex");
                            i.push(Object.assign(Object.assign({}, e), {
                                md5: l
                            }));
                            const c = `${e.save_dir}${e.original_data}`;
                            o.default.writeFileSync(c, n), t();
                        } catch (t) {
                            global.__log.error(`[Album][bridge] saveGroups error. id: [${e._id}], error: [${(null == t ? void 0 : t.message) || t}]`), 
                            n();
                        }
                    });
                    r.push(l);
                }), yield Promise.all(n), yield Promise.all(r), t && t(i);
            });
        },
        getLocalFileStatInfo(e, t) {
            const n = e.filePath;
            o.default.stat(n, function(e, r) {
                e && (global.__log.error(`[Album][bridge] getLocalFileStatInfo err: [${(null == e ? void 0 : e.message) || e}]`), 
                t({}));
                let i = "";
                try {
                    i = h.default.contentType(s.default.extname(n));
                } catch (e) {
                    global.__log.error(`[Album][bridge] getLocalFileStatInfo err: [${(null == e ? void 0 : e.message) || e}]`);
                }
                r.type = i, t({
                    stat: r
                });
            });
        },
        getVideoMetadata(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!e.path) return global.__log.error(`[Album][bridge] getVideoMetadata error. path empty: [${e.path}]`), 
                void t({
                    date: ""
                });
                global.__log.info(`[Album][bridge] getVideoMetadata path: [${e.path}]`);
                const n = (yield i.default.stat(e.path)).size, r = () => n, a = (t, n) => {
                    const r = Buffer.alloc(t);
                    return new Promise((i, a) => {
                        o.default.open(e.path, function(e, a) {
                            o.default.read(a, r, 0, t, n, (e, t, n) => {
                                i(new Uint8Array(n));
                            });
                        });
                    });
                };
                (null == f ? void 0 : f.analyzeData) ? f.analyzeData(r, a).then(e => {
                    var n, r, i, o;
                    const a = null === (r = null === (n = e.media) || void 0 === n ? void 0 : n.track) || void 0 === r ? void 0 : r.find(e => "General" === e["@type"]), s = null === (o = null === (i = e.media) || void 0 === i ? void 0 : i.track) || void 0 === o ? void 0 : o.find(e => "Video" === e["@type"]), l = {
                        duration: Number((null == a ? void 0 : a.Duration) || 0),
                        width: Number((null == s ? void 0 : s.Width) || 0),
                        height: Number((null == s ? void 0 : s.Height) || 0),
                        DateTimeOriginal: null == a ? void 0 : a.Tagged_Date
                    };
                    global.__log.info(`[Album][bridge] getVideoMetadata info 1: [${JSON.stringify(l)}]`), 
                    t({
                        date: l
                    });
                }).catch(e => {
                    global.__log.error(`[Album][bridge] getVideoMetadata error: [${(null == e ? void 0 : e.message) || e}]`), 
                    t({
                        date: {}
                    });
                }) : u.default({
                    format: "object"
                }, e => {
                    (null == e ? void 0 : e.analyzeData) ? (f = e, f.analyzeData(r, a).then(e => {
                        var n, r, i, o;
                        const a = null === (r = null === (n = e.media) || void 0 === n ? void 0 : n.track) || void 0 === r ? void 0 : r.find(e => "General" === e["@type"]), s = null === (o = null === (i = e.media) || void 0 === i ? void 0 : i.track) || void 0 === o ? void 0 : o.find(e => "Video" === e["@type"]), l = {
                            duration: Number((null == a ? void 0 : a.Duration) || 0),
                            width: Number((null == s ? void 0 : s.Width) || 0),
                            height: Number((null == s ? void 0 : s.Height) || 0),
                            DateTimeOriginal: null == a ? void 0 : a.Tagged_Date
                        };
                        global.__log.info(`[Album][bridge] getVideoMetadata info 2: [${JSON.stringify(l)}]`), 
                        t({
                            date: l
                        });
                    }).catch(e => {
                        global.__log.error(`[Album][bridge] getVideoMetadata error: [${(null == e ? void 0 : e.message) || e}]`), 
                        t({
                            date: {}
                        });
                    })) : t({
                        date: {}
                    });
                });
            });
        },
        getLocalFileMd5(e, t) {
            let n = new d.default.ArrayBuffer, r = 0;
            const i = e.path;
            o.default.stat(i, function(e, a) {
                if (e) return global.__log.error(`[Album][bridge] getLocalFileMd5 err: [${(null == e ? void 0 : e.message) || e}]`), 
                void t({
                    data: "error"
                });
                if (a && a.isFile()) {
                    const e = 2097152, s = Math.ceil(a.size / e);
                    o.default.open(i, function(i, l) {
                        if (i) return global.__log.error(`[Album][bridge] getLocalFileMd5 err: [${(null == i ? void 0 : i.message) || i}]`), 
                        void t({
                            data: "error"
                        });
                        let c = 0;
                        !function i() {
                            let u = 0;
                            u = c == s - 1 ? a.size - e * c : e;
                            let d = Buffer.alloc(u);
                            o.default.read(l, d, 0, u, e * c, (e, o, a) => e ? (global.__log.error(`[Album][bridge] getLocalFileMd5 err: [${(null == e ? void 0 : e.message) || e}]`), 
                            void t({
                                data: "error"
                            })) : (n.append(a), c++, r = c / s, c < s ? (t({
                                progress: r
                            }), void i()) : (t({
                                progress: r,
                                data: n.end()
                            }), void (n = null))));
                        }();
                    });
                } else global.__log.error(`[Album][bridge] getLocalFileMd5 err: not file, path: [${i}]`), 
                t({
                    data: "error"
                });
            });
        },
        analysisLocalFile(e, t) {
            const n = e.path, r = {};
            o.default.stat(n, function(e, i) {
                if (e) return global.__log.error(`[Album][bridge] analysisLocalFile err: [${(null == e ? void 0 : e.message) || e}]`), 
                void t({
                    data: "error"
                });
                i && i.isFile() ? o.default.open(n, function(e, n) {
                    if (e) return global.__log.error(`[Album][bridge] analysisLocalFile err: [${(null == e ? void 0 : e.message) || e}]`), 
                    void t({
                        data: "error"
                    });
                    const a = Buffer.alloc(100);
                    o.default.read(n, a, 0, 100, i.size - 100, (e, n, i) => {
                        if (e || !i) return global.__log.error(`[Album][bridge] analysisLocalFile err: [${(null == e ? void 0 : e.message) || e}]`), 
                        void t({
                            data: "error"
                        });
                        const o = i.byteLength;
                        let a = i.slice(o - 59, o - 55), s = Buffer.from(a), l = (255 & s[0]) << 24 | (255 & s[1]) << 16 | (255 & s[2]) << 8 | 255 & s[3];
                        r.vendorCode = l;
                        let c = Buffer.from(i.slice(o - 47));
                        if (0 == (255 & c[0]) && 0 == (255 & c[1]) && 0 == (255 & c[2]) && 47 == (255 & c[3]) && 255 == (255 & c[32]) && 255 == (255 & c[33]) && 255 == (255 & c[34]) && 255 == (255 & c[35])) {
                            for (var u = 0, d = Buffer.alloc(28); u < 28; ) d[u] = c[u + 4], u++;
                            r.hashBytes = String(d);
                        }
                        if (255 == (255 & c[45]) && 217 == (255 & c[46])) {
                            let e = "checkAudioSeek, it's not a jpg with audio";
                            global.__log.error(`[Album][bridge] analysisLocalFile err: [${e}]`), t({
                                data: r
                            });
                        } else if (255 != (255 & c[45]) && 217 != (255 & c[46]) && 177 == (255 & c[46]) && 162 == (255 & c[45]) && 147 == (255 & c[44]) && 132 == (255 & c[43]) && 117 == (255 & c[42]) && 102 == (255 & c[41]) && 87 == (255 & c[40]) && 72 == (255 & c[39]) && 57 == (255 & c[38]) && 42 == (255 & c[37]) && 27 == (255 & c[36])) {
                            let e = (c[28] << 24 & 4294967295) + (c[29] << 16 & 16777215) + (c[30] << 8 & 65535) + (255 & c[31]), t = 255 & c[27];
                            r.groupid = e, r.fullview = t;
                        }
                        t({
                            data: r
                        });
                    });
                }) : (global.__log.error(`[Album][bridge] analysisLocalFile err: not file, path: [${n}]`), 
                t({
                    data: "error"
                }));
            });
        },
        removeCancledUploadFile(e, t) {
            const {filePath: n, thumbPath: r} = e;
            this.removeFile({
                path: n
            }, () => {}), this.removeFile({
                path: r
            }, () => {}), t({
                data: "ok"
            });
        },
        removeFile(e, t) {
            const n = e.path;
            o.default.stat(n, function(e, r) {
                if (e) return global.__log.error(`[Album][bridge] removeFile stat err: [${(null == e ? void 0 : e.message) || e}], path: [${n}]`), 
                void t({
                    data: "error"
                });
                r && r.isFile() ? o.default.unlink(n, e => {
                    if (e) return global.__log.error(`[Album][bridge] removeFile unlink err: [${(null == e ? void 0 : e.message) || e}], path: [${n}]`), 
                    void t({
                        data: "error"
                    });
                    global.__log.info(`[Album][bridge] removeFile success: [${n}]`), t({
                        data: "ok"
                    });
                }) : (global.__log.error(`[Album][bridge] removeFile unlink err: not file, path: [${n}]`), 
                t({
                    data: "error"
                }));
            });
        },
        isLivePhotpAndCreatVideo(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.isLivePhotoFn(e, n => {
                        if (n.isMotion) {
                            global.__log.info(`create live photo start isMotion:${n.isMotion} and xmpData:${JSON.stringify(n.xmpData)}`);
                            const r = n.xmpData["x:xmpmeta"]["rdf:RDF"][0]["rdf:Description"][0]["Container:Directory"][0]["rdf:Seq"][0]["rdf:li"].find(e => "video/mp4" === e["Container:Item"][0].$["Item:Mime"])["Container:Item"][0].$["Item:Length"], i = n.fileBuffer.length, a = i - r, s = n.fileBuffer.slice(a, i);
                            global.__log.info(`live photo start:${a} and videoLength:${r} and fileSize:${i}`), 
                            o.default.writeFileSync(e.videoFilePath, s), global.__log.info("create live_photo video suucess and path: " + e.videoFilePath), 
                            t(!0);
                        } else global.__log.info("create live_photo start and check live photo is not live photo"), 
                        t(!1);
                    });
                } catch (e) {
                    global.__log.error("create live_photo video err:" + e), t(!1);
                }
            });
        },
        isLivePhotoFn(e, t) {
            var i;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(4), o = n(1512), a = new p.default.Parser, s = r.readFileSync(e.originPath), l = o.load(s, {
                    expanded: !0
                });
                try {
                    if (l && (null == l ? void 0 : l.xmp) && (null === (i = null == l ? void 0 : l.xmp) || void 0 === i ? void 0 : i._raw)) {
                        global.__log.info("check img is live photo");
                        const e = l.xmp._raw;
                        let n = yield a.parseStringPromise(e), r = n["x:xmpmeta"]["rdf:RDF"][0]["rdf:Description"][0], i = "1" === r.$["GCamera:MotionPhoto"] || "1" === r.$["Camera:MotionPhoto"];
                        t({
                            isMotion: i,
                            fileBuffer: s,
                            xmpData: n
                        });
                    } else global.__log.info("check img is not live photo"), t({
                        isMotion: !1
                    });
                } catch (e) {
                    global.__log.error("check live photo error: " + e), t({
                        isMotion: !1
                    });
                }
            });
        },
        cheeckLivePhotoPath(e, t) {
            try {
                n(4).existsSync(e) ? (global.__log.info("check livePhoto path and has videoFile:" + e), 
                t(!0)) : (global.__log.info("check livePhoto path and no videoFile"), t(!1));
            } catch (e) {
                global.__log.info("check livePhoto path error:" + e), t(!1);
            }
        }
    };
}
