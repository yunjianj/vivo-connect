// analysis/pretty/main.js:66158; webpack module 735
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VTalkService = void 0;
    const r = n(0), i = r.__importDefault(n(1)), o = n(2), a = r.__importDefault(n(4)), s = r.__importDefault(n(80)), l = n(221), c = n(220), u = n(167), d = r.__importDefault(n(75));
    t.VTalkService = class {
        constructor() {
            this.host = d.default.currentRuntimeConfig.aiTalkUrl, this.fileRequestIds = [];
        }
        saveToContent(e, t, i, o) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(64);
                let a = this.parseReponseData(e, t, i, o);
                return s.default.commonLog("[vtalk] saveToContent data " + JSON.stringify(a)), yield r.addContent(a);
            });
        }
        saveToContentCommon(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                s.default.commonLog("[vtalk] saveToContentCommon " + JSON.stringify(e));
                try {
                    e = e || {};
                    let {openid: r} = l.getAuthInfo(), i = r, o = e.request_id, a = e.trace_id, s = e.sid, u = e.file_info;
                    delete e.file_info;
                    let d = {
                        open_id: i,
                        chat_id: c.DEFAULT_CHATID,
                        session_id: s,
                        trace_id: a,
                        request_id: o,
                        category: t,
                        data: JSON.stringify(e),
                        extra: JSON.stringify(u),
                        status: null != e.status ? e.status : 1,
                        deleted: 0,
                        create_time: Date.now()
                    };
                    !u && delete d.extra, [ "image_file", "doc_file", "url_file" ].includes(e.client_file_type) && this.fileRequestIds.push(o);
                    const h = n(64);
                    return yield h.addContent(d);
                } catch (e) {
                    s.default.commonLog("[vtalk] saveToContentCommon 出错：" + e);
                }
            });
        }
        updateToContentCommon(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                s.default.commonLog("[vtalk] updateToContentCommon " + JSON.stringify(e));
                try {
                    let r = (e = e || {}).id, {openid: i} = l.getAuthInfo(), o = i, a = e.request_id, s = e.trace_id, u = e.sid, d = e.file_info, h = e.status;
                    delete e.id, delete e.file_info, delete e.status;
                    let p = {
                        id: r,
                        open_id: o,
                        chat_id: c.DEFAULT_CHATID,
                        session_id: u,
                        trace_id: s,
                        request_id: a,
                        data: JSON.stringify(e),
                        extra: JSON.stringify(d),
                        status: h
                    };
                    [ "image_file", "doc_file", "url_file" ].includes(e.client_file_type) && this.fileRequestIds.push(a);
                    const f = n(64);
                    return yield f.updateContent(p, t);
                } catch (e) {
                    s.default.commonLog("[vtalk] updateToContentCommon 出错：" + e);
                }
            });
        }
        getRecordLenExSid(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = n(64);
                return yield t.getRecordCount(e);
            });
        }
        getRecordList(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = n(64);
                    let r;
                    if (void 0 !== e.requestId) {
                        const n = yield t.getMinCreTimeItem(e.requestId);
                        n && (r = n.create_time);
                    }
                    let {openid: i} = l.getAuthInfo();
                    const o = (yield t.getRecordList(Object.assign({
                        openId: i
                    }, e), r)).map(e => {
                        try {
                            e.data = JSON.parse(e.data);
                        } catch (t) {
                            e.data = {};
                        }
                        return e.img_urls = e.file_url ? [ e.file_url ] : [], e.raw_img_urls = e.raw_file_url ? [ e.raw_file_url ] : [], 
                        e.local_img_urls = e.file_path ? [ e.file_path ] : [], e.local_raw_img_urls = e.raw_local_path ? [ e.raw_local_path ] : [], 
                        delete e.file_url, delete e.raw_file_url, delete e.file_path, delete e.raw_local_path, 
                        "image_file" !== e.data.client_file_type && "doc_file" !== e.data.client_file_type || (e.file_info = JSON.parse(e.extra), 
                        delete e.extra), e;
                    }), a = [];
                    for (const e of o) {
                        const t = a.find(t => t.request_id === e.request_id && t.category === e.category && t.id === e.id);
                        t ? (t.img_urls = t.img_urls.concat(e.img_urls), t.raw_img_urls = t.raw_img_urls.concat(e.raw_img_urls), 
                        t.local_img_urls = t.local_img_urls.concat(e.local_img_urls), t.local_raw_img_urls = t.local_raw_img_urls.concat(e.local_raw_img_urls)) : a.push(e);
                    }
                    return a;
                } catch (e) {
                    return s.default.commonLog("[vtalk] getRecordList 出错：" + e), [];
                }
            });
        }
        deleteRecord(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const r = n(64);
                    return yield r.deleteRecord(e, t);
                } catch (e) {
                    return s.default.commonLog("[vtalk] deleteRecord 出错：" + e), [];
                }
            });
        }
        addContentFile(e, t, i) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let {openid: r} = l.getAuthInfo(), o = {
                        open_id: r,
                        category: t,
                        request_id: i,
                        file_type: "image",
                        file_url: e.file_url,
                        file_path: e.file_path,
                        raw_file_url: e.raw_file_url,
                        raw_local_path: e.raw_local_path,
                        deleted: 0,
                        create_time: Date.now()
                    };
                    const a = n(64);
                    return yield a.addContentFile(o);
                } catch (e) {
                    s.default.commonLog("[vtalk] addContentFile 出错：" + e);
                }
            });
        }
        updateExtra(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const r = n(64);
                    return yield r.updateExtra(e, t);
                } catch (e) {
                    throw s.default.commonLog("[vtalk] updateExtra 出错：" + e), new Error("updateFileStatus error");
                }
            });
        }
        clearAll() {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {openid: e} = l.getAuthInfo();
                if (!e) return !1;
                try {
                    const t = n(64);
                    yield t.clearAllByOpenid(e);
                    const r = i.default.join(o.app.getPath("appData"), `pcsuite${u.getPlatformSlash()}storage_files`), s = i.default.join(r || o.app.getPath("userData"), e ? "vtalk/" + e : "vtalk");
                    if (!a.default.existsSync(s)) return !0;
                    return yield this.deleteDirectory(s);
                } catch (e) {
                    throw s.default.commonLog("[vtalk] clearAll 出错：" + e), new Error("clearAll error");
                }
            });
        }
        parseReponseData(e, t, n, r) {
            let i = {};
            try {
                n = n || {};
                let {openid: o} = l.getAuthInfo(), a = o, s = n.request_id, u = n.trace_id, d = n.sid;
                Object.assign(n.data, r), this.fileRequestIds.includes(s) && (n.hideBottomMenu = !0), 
                i = {
                    open_id: a,
                    chat_id: c.DEFAULT_CHATID,
                    session_id: d,
                    trace_id: u,
                    request_id: s,
                    category: e,
                    data: JSON.stringify(n),
                    status: t,
                    deleted: 0,
                    create_time: Date.now()
                };
            } catch (e) {
                s.default.commonLog("[vtalk] parseReponseData 出错：" + e);
            }
            return i;
        }
        deleteDirectory(e) {
            return new Promise((t, n) => {
                a.default.access(e, r => {
                    if (r) return "ENOENT" === r.code ? s.default.commonLog("[vtalk] Directory not found: " + e) : s.default.commonLog("[vtalk] An error occurred: " + r), 
                    n(r);
                    a.default.rm(e, {
                        recursive: !0,
                        force: !0
                    }, r => r ? (s.default.commonLog("[vtalk] Could not delete directory: " + r), n(r)) : (s.default.commonLog("[vtalk] Deleted directory: " + e), 
                    t(!0)));
                });
            });
        }
    };
}
