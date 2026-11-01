// analysis/pretty/main.js:114377; webpack module 1520
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.note_findVClawNoteBook = t.note_findVTalkNoteBook = t.note_findNoteBooks = t.note_checkExistByName = t.note_expungeNoteBook = t.note_expungeNoCascade = t.note_updateNoteBook = t.note_createNoteBook = t.note_getNoteBookStatus = t.note_getNoteBookList = t.note_getBookTreeCount = t.note_getCountNotesByType = void 0;
    const r = n(0), i = r.__importDefault(n(25)), o = () => "renderer" === process.type ? window._log : global.__log;
    t.note_getCountNotesByType = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let {omitEncryptedNotes: n} = e, r = `SELECT ${n ? "SUM(CASE WHEN deleted = 1 AND encryptType is not 1 THEN 1 ELSE 0 END) " : "COUNT(*) "}\n      AS totalNotes\n      , SUM(CASE \n        WHEN noteBookGuid = '0' ${n ? " AND encryptType is not 1" : ""} THEN 1\n        ELSE 0\n      END) AS uncategorized\n      , SUM(CASE \n        WHEN encryptType = 1 THEN 1\n        ELSE 0\n      END) AS encryptedNotes\n    FROM Note\n    WHERE deleted = 1`;
                return {
                    type: "pc-response",
                    data: (yield t.all(r).then(e => e))[0],
                    code: "GET_CODE",
                    message: "查询成功"
                };
            } catch (e) {
                throw console.log("出错了", e), new Error(e.message);
            }
        });
    }, t.note_getBookTreeCount = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {encryptType: t} = e, n = this;
            try {
                let e = `SELECT b.guid, COALESCE(note_counts.note_count, 0) AS count\n    FROM NoteBook b\n      LEFT JOIN (\n        SELECT n.noteBookGuid, COUNT(*) AS note_count\n        FROM Note n\n        WHERE n.deleted = 1 ${t ? " AND (encryptType IS NULL OR encryptType <> 1)" : ""}\n        GROUP BY n.noteBookGuid\n      ) note_counts\n      ON b.guid = note_counts.noteBookGuid\n      WHERE b.deleted = 1\n    ORDER BY b.createTime DESC`;
                const r = yield n.all(e).then(e => e);
                let i = {};
                return r.forEach(e => {
                    i[e.guid] = e.count;
                }), {
                    type: "pc-response",
                    data: i,
                    code: "GET_CODE",
                    message: "查询成功"
                };
            } catch (e) {
                throw console.log("出错了", e), new Error(e.message);
            }
        });
    }, t.note_getNoteBookList = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {beforeUsn: t, maxEntries: n} = e, r = this;
            try {
                let e = "where deleted = 1 ";
                void 0 !== t && (e += `and updateSequenceNum <= ${t} or updateSequenceNum = null`);
                let i = `SELECT * from NoteBook ${e} ORDER BY updateSequenceNum desc limit ${void 0 !== n ? n : 50}`;
                return {
                    type: "pc-response",
                    data: yield r.all(i).then(e => e),
                    code: "GET_CODE",
                    message: "查询成功"
                };
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_getNoteBookStatus = function(e) {
        var t, n, i;
        return r.__awaiter(this, void 0, void 0, function*() {
            const {guids: r} = e, o = this;
            try {
                const e = null === (t = (yield o.all(`select count(guid) as count from Note WHERE noteBookGuid in ('${r.join("','")}') and deleted = 1`))[0]) || void 0 === t ? void 0 : t.count, a = null === (n = (yield o.all(`select count(guid) as count from Note WHERE noteBookGuid in ('${r.join("','")}') and encryptType = 1 and deleted = 1`))[0]) || void 0 === n ? void 0 : n.count;
                return {
                    noteCount: e,
                    encryptNoteCount: a,
                    newFormatCount: null === (i = (yield o.all(`select count(guid) as count from Note WHERE noteBookGuid in ('${r.join("','")}') and syncProtocolVersion > 100 and deleted = 1 and (encryptType IS NULL OR encryptType <> 1)`))[0]) || void 0 === i ? void 0 : i.count
                };
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_createNoteBook = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {syncUp: t} = e, n = t[0], r = this;
            let i = {
                guid: n.guid,
                name: n.name,
                deleted: n.deleted,
                iconColor: n.iconColor,
                createTime: n.createTime,
                updateTime: n.updateTime,
                parentGuid: n.parentGuid,
                nameNew: n.nameNew,
                sort: n.sort,
                defaultNoteBook: 0,
                dirty: 1
            };
            o().info("[notebook]新建文件夹" + n.guid);
            try {
                return yield r.insert("NoteBook", i), {
                    type: "pc-response",
                    data: i,
                    code: "SAVE_CODE",
                    message: "创建成功"
                };
            } catch (e) {
                throw yield r.exec("ROLLBACK;"), new Error("create notebook failed");
            }
        });
    }, t.note_updateNoteBook = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {syncUp: t} = e, n = this;
            try {
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    let o = i.default.cloneDeep(i.default.pick(r, [ "guid", "name", "deleted", "iconColor", "updateTime", "parentGuid", "sort", "nameNew" ])), a = Object.assign(Object.assign({}, o), {
                        defaultNoteBook: 0,
                        dirty: 1
                    });
                    yield n.update("NoteBook", a, "guid");
                }
                return {
                    type: "pc-response",
                    data: {},
                    code: "UPDATE_CODE",
                    message: "更新成功"
                };
            } catch (e) {
                throw yield n.exec("ROLLBACK;"), new Error("update notebook failed");
            }
        });
    }, t.note_expungeNoCascade = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {guids: t, moveToGuid: n} = e, r = this;
            o().info("[notebook]笔记删除文件夹" + t.join(","));
            try {
                const e = `SELECT guid FROM NOTE WHERE noteBookGuid in ('${t.join("','")}') AND deleted = 1;`, i = yield r.all(e), o = `UPDATE Note SET noteBookGuid = ?, attrUpdateTime= ${Date.now()}, dirty = true WHERE noteBookGuid in ('${t.join("','")}') AND deleted = 1`, a = `UPDATE NoteBook SET deleted = -1, dirty = true WHERE guid in ('${t.join("','")}')`;
                return yield r.exec("BEGIN IMMEDIATE;"), yield r.run(o, [ n ]), yield r.run(a), 
                r.exec("COMMIT;"), {
                    type: "pc-response",
                    code: "UPDATE_CODE",
                    message: "更新成功",
                    data: {
                        deletedNotes: i
                    }
                };
            } catch (e) {
                throw yield r.exec("ROLLBACK;"), new Error("update notes failed");
            }
        });
    }, t.note_expungeNoteBook = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = e.delete, n = e.omitEncryptedNotes;
            if (0 === t.length) return;
            const r = this;
            try {
                const e = `SELECT guid FROM NOTE WHERE deleted = 1 AND noteBookGuid in ('${t.join("','")}') AND (${n ? "encryptType = 1 or" : ""} syncProtocolVersion <= 100);`, i = yield r.all(e);
                yield r.exec("BEGIN IMMEDIATE;");
                const o = `UPDATE NoteBook SET deleted = -1, dirty = true WHERE guid in ('${t.join("','")}')`;
                yield r.run(o);
                const a = Date.now(), s = `UPDATE Note SET deleted = 0, updateTime = ${a}, attrUpdateTime= ${a}, noteBookGuid = '0', dirty = true WHERE noteBookGuid in ('${t.join("','")}') AND ${n ? "(encryptType IS NULL OR encryptType <> 1) and " : ""}syncProtocolVersion <= 100`;
                yield r.run(s);
                const l = `UPDATE Note SET noteBookGuid = '0', dirty = true WHERE deleted = 1 AND noteBookGuid in ('${t.join("','")}') AND (${n ? "encryptType = 1 or" : ""} syncProtocolVersion <= 100)`;
                return yield r.run(l), r.exec("COMMIT;"), {
                    type: "pc-response",
                    code: "UPDATE_CODE",
                    message: "更新成功",
                    data: {
                        deletedNotes: i
                    }
                };
            } catch (e) {
                throw yield r.exec("ROLLBACK;"), new Error("update notes failed");
            }
        });
    }, t.note_checkExistByName = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {name: t} = e, n = this;
            try {
                const e = `SELECT * from NoteBook where name = '${t}' and deleted = 1`;
                return !!(yield n.all(e)).length;
            } catch (e) {
                throw new Error("findNoteBooks failed");
            }
        });
    }, t.note_findNoteBooks = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from NoteBook where guid in ('${e.join("','")}')`;
                return yield t.all(n);
            } catch (e) {
                throw new Error("findNoteBooks failed");
            }
        });
    }, t.note_findVTalkNoteBook = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                let t = "SELECT * FROM NoteBook WHERE name = '蓝心小V' and deleted = 1 ORDER BY createTime DESC LIMIT 1;";
                return yield e.all(t);
            } catch (e) {
                throw new Error("findVTalkNoteBook error");
            }
        });
    }, t.note_findVClawNoteBook = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                let t = `SELECT * FROM NoteBook WHERE (name = '${"undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? "Jovi" : "小V Claw"}') and deleted = 1 ORDER BY createTime DESC LIMIT 1;`;
                return yield e.all(t);
            } catch (e) {
                throw new Error("findVClawNoteBook error");
            }
        });
    };
}
