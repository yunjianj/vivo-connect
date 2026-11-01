// analysis/pretty/main.js:117989; webpack module 1546
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(8)), a = r.__importDefault(n(1)), s = n(347), l = n(1547), c = n(738), u = n(1550), d = n(1552), h = "record bridge";
    t.default = {
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(346), {methodName: i, data: o} = e;
                console.log("methodName", r, i);
                let a, s = o && JSON.parse(o);
                if (i) try {
                    a = yield r[i](s), t(a);
                } catch (e) {
                    t(a, e);
                } else t(a, new Error("参数不全"));
            });
        },
        writeFileToLocal(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {src: n, destDir: r, filename: l, mimeType: c, localId: u} = e;
                try {
                    let e = a.default.join(r, u);
                    i.default.existsSync(e) || i.default.mkdirSync(e, {
                        recursive: !0
                    });
                    const p = (h = a.default.join(e, l), "win32" !== o.default.platform() ? h : h && h.replaceAll("\\", "/"));
                    yield function(e, t) {
                        return new Promise((n, r) => {
                            const o = i.default.createReadStream(e), a = i.default.createWriteStream(t);
                            o.on("error", r), a.on("error", r), a.on("finish", n), o.pipe(a);
                        });
                    }(n, p);
                    let f = {
                        code: s.RESPONSE_CODE.SUCCESS,
                        path: p
                    };
                    if ("audio/amr" === c) {
                        const e = yield d(p);
                        f.duration = e;
                    }
                    return void t(f);
                } catch (e) {
                    console.log("错误信息", e), t({
                        code: s.RESPONSE_CODE.FAILDED,
                        message: e.message
                    });
                }
                var h;
            });
        },
        asrInBackground(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {list: n} = e;
                l.AutoAsrManager.getInstance().runAsr(n, t);
            });
        },
        recordASR(e, t) {
            var n, r, i, o;
            console.log("recordASR"), global.__log.info(`[record][${h} recordASR] `);
            const {record: a} = e, s = c.ASRTaskManager.getInstance(), l = {
                record_id: a.id,
                record_localId: a.localId,
                record_aiLock: a.aiLock,
                record_mDisplayName: a.mDisplayName,
                record_mDateModified: a.mDateModified,
                record_localFileId: a.localFileId,
                localFile_id: null === (n = a.localFile) || void 0 === n ? void 0 : n.id,
                localFile_localPath: null === (r = a.localFile) || void 0 === r ? void 0 : r.localPath,
                localFile_fileSize: null === (i = a.localFile) || void 0 === i ? void 0 : i.fileSize,
                localFile_duration: null === (o = a.localFile) || void 0 === o ? void 0 : o.duration,
                has_recognize: a.mHasCovert
            };
            s.addUserTask(l), t({
                code: "success"
            });
        },
        recordOrganize(e, t) {
            var n, r, i, o, a;
            console.log("recordOrganize"), global.__log.info(`[record][${h} recordOrganize] `);
            const {record: s} = e, l = u.OrganizeTaskManager.getInstance(), c = null === (n = s) || void 0 === n ? void 0 : n.organizes, d = Array.isArray(c) && c.length > 0, p = function(e) {
                var t, n;
                const r = e => (Array.isArray(e) ? e : []).map(e => String(e && (e.content || e.onebest) || "").trim()).join("\n"), i = r(null === (t = e) || void 0 === t ? void 0 : t.organizes), o = r(null === (n = e) || void 0 === n ? void 0 : n.recognizes);
                return i === o;
            }(s), f = function(e) {
                var t;
                const n = ((null === (t = e) || void 0 === t ? void 0 : t.recognizes) || []).filter(e => e && 1 !== e.mIsBackground);
                if (!n.length) return !1;
                if (n.some(e => e.convertTimeTip && "GONE" !== e.convertTimeTip)) return !0;
                const r = n[0];
                if (1 === (null == r ? void 0 : r.textCanConvert)) return n.every(e => 1 === e.textCanConvert);
                return !1;
            }(s), _ = d && !p && !f;
            global.__log.info(`[record][${h} recordOrganize] 文本整理与转写内容对比 hasOrganizeContent=${d} isSameAsRecognize=${p} isTransferIncomplete=${f} shouldPassAsrResult=${_} localId=${s.localId}`);
            const m = _ && s.recognizes && s.recognizes.length > 0 ? s.recognizes.map(e => ({
                speaker: e.speaker || 0,
                bg: e.startTime || 0,
                onebest: e.content || "",
                ed: e.endTime || 0,
                enable_speaker: e.isSupportSpeaker || 0
            })) : void 0, g = {
                record_id: s.id,
                record_localId: s.localId,
                record_aiLock: s.aiLock,
                record_mDisplayName: s.mDisplayName,
                record_mDateModified: s.mDateModified,
                record_localFileId: s.localFileId,
                localFile_id: null === (r = s.localFile) || void 0 === r ? void 0 : r.id,
                localFile_localPath: null === (i = s.localFile) || void 0 === i ? void 0 : i.localPath,
                localFile_fileSize: null === (o = s.localFile) || void 0 === o ? void 0 : o.fileSize,
                localFile_duration: null === (a = s.localFile) || void 0 === a ? void 0 : a.duration,
                has_recognize: s.mHasCovert,
                asr_result: m
            };
            l.addUserTask(g), t({
                code: "success"
            });
        }
    };
}
