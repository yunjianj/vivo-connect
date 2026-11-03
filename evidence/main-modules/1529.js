// analysis/pretty/main.js:116044; webpack module 1529
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.file_isUploadCloud = t.file_getResourceInfoById = t.file_getFileInfoById = t.file_addFileInfo = void 0;
    const r = n(0), i = r.__importDefault(n(1530)), o = r.__importDefault(n(166)), a = n(46), s = new i.default, l = new o.default, c = () => "renderer" === process.type ? window._log : global.__log;
    t.file_addFileInfo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {checkSum: n, checkSumThumbnail: i, domain: o, duration: u, fileSize: d, height: h, width: p, lastModified: f, metaType: _, mimeType: m, rotate: g, thumbPath: v, thumbStyle: y} = e, E = a.guid();
            return new Promise(e => {
                l.run(() => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        return yield t.run(s.create, [ E, a.fixPCFilePath(o), d, n, f, _, !!v, m, p, h, u, g, a.fixPCFilePath(v), i, y ]), 
                        E;
                    } catch (e) {
                        return c().info([ "file_addFileInfo", e.message ].join("#")), "";
                    }
                }), t => {
                    e(t);
                });
            });
        });
    }, t.file_getFileInfoById = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (0 === e.length) return [];
            let n = [];
            try {
                n = yield t.all(s.searchByIds(e));
            } catch (e) {
                console.log(e), c().info([ "file_getFileInfoById", e.message ].join("#"));
            }
            return n;
        });
    }, t.file_getResourceInfoById = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (0 === e.length) return [];
            let n = [];
            try {
                n = yield t.all(s.getResourcesByIds(e));
            } catch (e) {
                console.log(e), c().info([ "file_getResourceInfoById", e.message ].join("#"));
            }
            return n;
        });
    }, t.file_isUploadCloud = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {type: t, guids: n} = e, r = this;
            if (0 === n.length) return [];
            let i = [];
            try {
                "note" === t && (i = yield r.all(s.get_file_usn("Resource", n))), "doc" === t && (i = yield r.all(s.get_file_usn("Document", n)));
            } catch (e) {
                console.log(e), c().info([ "file_isUploadCloud", e.message ].join("#"));
            }
            return i.reduce((e, t) => (e[t.guid] = !!t.usn, e), {});
        });
    };
}
