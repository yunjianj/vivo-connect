// analysis/pretty/main.js:104681; webpack module 1423
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.record_batchDeleteRecognize = t.record_batchUpdateRecognize = t.record_deleteTextArrangement = t.record_updateTextArrangement = t.record_insertTextArrangement = t.record_batchInsertRecognize = t.recordBatchDelete = t.recordUpdateMany = t.recordInsertMany = void 0;
    const r = n(0), i = global.__log;
    t.recordInsertMany = function(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = this;
            if (t && 0 !== t.length) for (let r = 0; r < t.length; r++) {
                const i = t[r], o = Object.keys(i), a = o.join(", "), s = o.map(() => "?").join(", "), l = o.map(e => i[e]), c = `INSERT INTO ${e} (${a}) VALUES (${s})`;
                yield n.run(c, l);
            }
        });
    }, t.recordUpdateMany = function(e, t, n = "id") {
        return r.__awaiter(this, void 0, void 0, function*() {
            const r = this;
            if (t && 0 !== t.length) for (let i = 0; i < t.length; i++) {
                const o = t[i];
                if (!o[n]) {
                    global.__log.warn("跳过无主键的记录: " + JSON.stringify(o));
                    break;
                }
                const a = Object.keys(o).filter(e => e !== n), s = a.map(e => e + " = ?").join(", "), l = a.map(e => o[e]);
                l.push(o[n]);
                const c = `UPDATE ${e} SET ${s} WHERE ${n} = ?`;
                yield r.run(c, l);
            }
        });
    }, t.recordBatchDelete = function(e, t, n = "id") {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!t || t.length <= 0) return [];
            const r = t.map(() => "?"), i = `DELETE FROM ${e} WHERE ${n} in (${r.join(",")})`;
            yield this.run(i, t);
        });
    }, t.record_batchInsertRecognize = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r, checkEmpty: o = !0} = e, a = Date.now(), s = Math.floor(a / 1e3);
            try {
                if (yield t.exec("BEGIN IMMEDIATE"), o) {
                    const e = yield t.get("SELECT COUNT(*) AS count FROM Recognize WHERE mFileId = ?", [ r ]);
                    i.info("record_batchInsertRecognize checkEmpty count = " + (null == e ? void 0 : e.count)), 
                    (null == e ? void 0 : e.count) > 0 && (yield t.run("DELETE FROM Recognize WHERE mFileId = ?", [ r ]));
                }
                yield t.recordInsertMany("Recognize", n);
                const e = 1;
                return yield t.run("UPDATE Record SET dirty = 1, mHasCovert = ?, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ e, a, s, r ]), 
                yield t.exec("COMMIT"), i.info("record_batchInsertRecognize insert success list.length = " + n.length), 
                {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("批量插入句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_insertTextArrangement = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r} = e, o = Date.now(), a = Math.floor(o / 1e3);
            try {
                return yield t.exec("BEGIN IMMEDIATE"), yield t.run("DELETE FROM TextArrangement WHERE mFileId = ?", [ r ]), 
                yield t.recordInsertMany("TextArrangement", n || []), yield t.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ o, a, r ]), 
                yield t.exec("COMMIT"), i.info("record_insertTextArrangement insert success list.length = " + (n || []).length), 
                {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("批量插入文本整理句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_updateTextArrangement = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r} = e, o = Date.now(), a = Math.floor(o / 1e3);
            try {
                return yield t.exec("BEGIN IMMEDIATE"), yield t.recordUpdateMany("TextArrangement", n, "uuid"), 
                yield t.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ o, a, r ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("批量更新文本整理句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_deleteTextArrangement = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {localId: n} = e, r = Date.now(), o = Math.floor(r / 1e3);
            try {
                return yield t.exec("BEGIN IMMEDIATE"), yield t.run("DELETE FROM TextArrangement WHERE mFileId = ?", [ n ]), 
                yield t.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ r, o, n ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("删除文本整理句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_batchUpdateRecognize = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r} = e, o = Date.now(), a = Math.floor(o / 1e3);
            try {
                return yield t.exec("BEGIN IMMEDIATE"), yield t.recordUpdateMany("Recognize", n, "uuid"), 
                yield t.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ o, a, r ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("批量更新句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_batchDeleteRecognize = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r} = e, o = Date.now(), a = Math.floor(o / 1e3);
            try {
                return yield t.exec("BEGIN IMMEDIATE"), yield t.recordBatchDelete("Recognize", n, "uuid"), 
                yield t.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ o, a, r ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return i.error("批量删除句子出错: " + e.message), yield t.exec("ROLLBACK"), {
                    code: -1,
                    message: "error"
                };
            }
        });
    };
}
