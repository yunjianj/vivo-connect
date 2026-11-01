// analysis/pretty/main.js:104620; webpack module 1422
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.record_getSimilarNameLocalFiles = t.record_getLocalFileListByIds = t.record_getLocalFileById = t.record_updateFileBatchById = t.record_insertFile = void 0;
    const r = n(0);
    t.record_insertFile = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return yield t.insertWithResult("LocalFile", e);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_updateFileBatchById = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {id: n, partialParam: r} = e;
            if (!n) return;
            if (!r || !Object.keys(r).length) return;
            const i = Object.keys(r), o = i.map(e => e + " = ?").join(", "), a = i.map(e => r[e]), s = `\n    UPDATE LocalFile\n    SET ${o}\n    WHERE id = ?\n  `;
            try {
                return yield t.run(s, [ ...a, n ]);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_getLocalFileById = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = "SELECT * FROM LocalFile WHERE id = ?";
                return yield t.get(n, [ e.id ]);
            } catch (e) {
                throw e;
            }
        });
    }, t.record_getLocalFileListByIds = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (0 === e.length) return [];
            let n = [];
            const r = `SELECT * FROM LocalFile WHERE uuid in (${e.map(e => `'${e}'`).join(",")})`;
            try {
                n = yield t.all(r);
            } catch (e) {
                console.log("record_getFileInfoByIds error:", e, t, t.all);
            }
            return n;
        });
    }, t.record_getSimilarNameLocalFiles = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {fileName: n, inRecycle: r} = e;
            try {
                const e = `SELECT * from Record r,  LocalFile f  where r.localFileId = f.id  AND f.file_name like '%${n}%' AND r.inRecycle = ${r}`;
                return (yield t.all(e)) || [];
            } catch (e) {
                throw e;
            }
        });
    };
}
