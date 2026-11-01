// analysis/pretty/main.js:114584; webpack module 1521
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.note_copyAsNewInsert = t.note_setNotReportHistory = t.note_updateNoteHistory = t.note_broadCastMessageToWindow = t.note_execSql = t.note_unstickNoteWindow = t.note_stickNoteWindow = t.note_toggleMaxmizeNoteWindow = t.note_maxmizeNoteWindow = t.note_destroyNoteWindow = t.note_closeNoteWindow = t.note_minimizeNoteWindow = t.note_hasData = t.note_getNoteWindowGuids = t.note_unlockAllNoteSync = t.note_queryNotesHasTime = t.note_findNotes = t.note_updateNotes = t.note_pc_updateNote = t.note_findNote = t.note_insertNote = t.note_getNoteStatusByGuids = t.note_getNotesByGuids = t.note_getSingeNote = t.note_recover = t.note_getRecentlyDeleted = t.note_updateNote = t.note_deleteNote = t.note_getNoteForNoteBook = t.note_updateUserinfo = t.note_getUserinfo = t.note_getNoteContent = t.note_getAllNote = void 0;
    const r = n(0), i = n(1522), o = r.__importDefault(n(25)), a = () => "renderer" === process.type ? window._log : global.__log;
    function s(e, t) {
        let n = [], r = {}, i = [];
        e.forEach(e => {
            let t = r[e.guid], n = {
                bgColor: e.t_bgColor,
                dirty: e.t_dirty,
                guid: e.t_guid,
                name: e.t_name,
                noteGuid: e.t_noteGuid,
                type: e.t_type,
                updateSequenceNum: e.t_updateSequenceNum,
                deleted: e.t_deleted,
                createTime: e.t_createTime
            }, o = {
                dirty: e.r_dirty,
                domainAddr: e.r_domainAddr,
                guid: e.r_guid,
                mime: e.r_mime,
                name: e.r_name,
                noteGuid: e.r_noteGuid,
                resType: e.r_resType,
                resourceKey: e.r_resourceKey,
                resourceSize: e.r_resourceSize,
                updateSequenceNum: e.r_updateSequenceNum,
                fileID: e.r_fileID,
                createTime: e.r_createTime,
                updateTime: e.r_updateTime,
                deleted: e.r_deleted,
                sort: e.r_sort,
                category: e.r_category,
                resourceTextUpdateTime: e.r_resourceTextUpdateTime
            };
            if (t) n.guid && t.tags.push(n), o.guid && t.resources.push(o); else {
                let t = Object.keys(e).filter(e => !e.startsWith("r_") && !e.startsWith("t_")), a = {
                    tags: [],
                    resources: []
                };
                n.guid && a.tags.push(n), o.guid && a.resources.push(o), t.forEach(t => {
                    "contentNote" !== t && "originContent" !== t && (a[t] = e[t]), "ex3" === t && (a.conflictTime = e[t]);
                }), r[e.guid] = Object.assign({}, a), i.push(e.guid);
            }
        }), i = o.default.uniq(i), i.forEach(e => {
            let t = r[e];
            t.tags = o.default.uniqBy(t.tags, "guid"), t.resources = o.default.uniqBy(t.resources, "guid"), 
            n.push(t);
        });
        let a = n && n.length > 0 && n[n.length - 1][t];
        return {
            notes: n,
            chunkLowTime: a
        };
    }
    t.note_getAllNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {sortField: t, maxEntries: n, pageNum: r, omitEncryptedNotes: i} = e, o = this;
            try {
                let e = "WHERE deleted = 1 ";
                i && (e += " AND encryptType is not 1");
                let l = 1 === t ? "createTime" : "updateTime", c = `SELECT n.*, t.guid AS t_guid, t.noteGuid AS t_noteGuid, t.updateSequenceNum AS t_updateSequenceNum, t.name AS t_name\n                , t.bgColor AS t_bgColor, t.type AS t_type, t.dirty AS t_dirty, r.guid AS r_guid, t.deleted as t_deleted, t.createTime as t_createTime\n                , r.noteGuid AS r_noteGuid, r.updateSequenceNum AS r_updateSequenceNum, r.name AS r_name\n                , r.mime AS r_mime, r.resourceKey AS r_resourceKey, r.domainAddr AS r_domainAddr, r.resourceSize AS r_resourceSize, r.resType AS r_resType\n                , r.dirty AS r_dirty, r.fileID as r_fileID, r.createTime as r_createTime, r.updateTime as r_updateTime, r.deleted as r_deleted, r.sort as r_sort, r.category as r_category\n                , r.resourceTextUpdateTime AS r_resourceTextUpdateTime\n                , n.noteBookGuid AS noteBookGuid\n                , nb.name AS noteBookName, nb.iconColor AS noteBookColor\n              FROM (${`SELECT * FROM Note ${e} ORDER BY stickTop DESC, ${1 === t ? "createTime" : "max(stickTopTime, updateTime)"} DESC LIMIT ${n} offset ${(r - 1) * (n || 50)}`}) n\n                LEFT JOIN (\n                  SELECT *\n                  FROM Tag\n                  WHERE Tag.deleted = 1\n                ) t\n                ON n.guid = t.noteGuid\n                LEFT JOIN (\n                  SELECT *\n                  FROM Resource\n                  WHERE Resource.deleted = 1\n                ) r\n                ON n.guid = r.noteGuid\n                LEFT JOIN NoteBook nb\n                ON n.noteBookGuid = nb.guid`;
                const u = yield o.all(c);
                let d = s(u, l);
                return a().info([ "查询笔记数量:", u.length ].join("#")), d;
            } catch (e) {
                throw a().info([ "pc sql query note list error", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.note_getNoteContent = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = yield t.find("Note", e.guid, "guid");
                return !o.default.isNil(n) && o.default.isObject(n) ? (n = n || {}, c(n)) : n;
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_getUserinfo = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                let t = yield e.find("User", "visitor", "userId");
                return !o.default.isNil(t) && o.default.isObject(t) ? (t = t || {}, t) : {
                    userId: t.userId,
                    defaultNoteSynced: t.defaultNoteSynced,
                    defaultTodoPopover: t.defaultTodoPopover
                };
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_updateUserinfo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            let n = {
                userId: "visitor",
                defaultNoteSynced: e.defaultNoteSynced,
                defaultTodoPopover: e.defaultTodoPopover,
                dirty: 1
            };
            try {
                return yield t.update("User", n, "userId");
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_getNoteForNoteBook = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {guid: t, sortField: n, maxEntries: r, pageNum: i, isSeachEncryptNotes: o, omitEncryptedNotes: l} = e, c = this;
            try {
                let e = o ? "WHERE deleted = 1 and encryptType = 1" : `WHERE deleted = 1 and noteBookGuid = '${t}'`;
                !o && l && (e += " AND encryptType is not 1");
                let u = 1 === n ? "createTime" : "updateTime", d = `SELECT * FROM Note ${e} ORDER BY stickTop DESC, ${1 === n ? "createTime" : "max(stickTopTime, updateTime)"} DESC LIMIT ${r} offset ${(i - 1) * (r || 50)}`;
                a().info([ "notesql:", d ].join("#"));
                let h = `SELECT n.*, t.guid AS t_guid, t.noteGuid AS t_noteGuid, t.updateSequenceNum AS t_updateSequenceNum, t.name AS t_name\n                , t.bgColor AS t_bgColor, t.type AS t_type, t.dirty AS t_dirty, r.guid AS r_guid, t.deleted as t_deleted, t.createTime as t_createTime\n                , r.noteGuid AS r_noteGuid, r.updateSequenceNum AS r_updateSequenceNum, r.name AS r_name\n                , r.mime AS r_mime, r.resourceKey AS r_resourceKey, r.domainAddr AS r_domainAddr, r.resourceSize AS r_resourceSize, r.resType AS r_resType\n                , r.dirty AS r_dirty, r.fileID as r_fileID, r.createTime as r_createTime, r.updateTime as r_updateTime,r.deleted as r_deleted, r.sort as r_sort, r.category as r_category\n                , r.resourceTextUpdateTime AS r_resourceTextUpdateTime\n              FROM (${d}) n\n                LEFT JOIN (\n                  SELECT *\n                  FROM Tag\n                  WHERE Tag.deleted = 1\n                ) t\n                ON n.guid = t.noteGuid\n                LEFT JOIN (\n                  SELECT *\n                  FROM Resource\n                  WHERE Resource.deleted = 1\n                ) r\n                ON n.guid = r.noteGuid`;
                return s(yield c.all(h), u);
            } catch (e) {
                throw a().info([ "查询笔记列表出错了:", e.message ].join("#")), new Error(e.message);
            }
        });
    };
    const l = (e, t, n) => `UPDATE ${e} SET deleted = ${t}, updateTime=${Date.now()}, attrUpdateTime=${Date.now()}, dirty=1, ex1=NULL WHERE guid in ("${n.join('","')}")`;
    function c(e) {
        const {contentNote: t, ex3: n} = e, i = r.__rest(e, [ "contentNote", "ex3" ]);
        return Object.assign({
            content: t,
            conflictTime: n
        }, i);
    }
    t.note_deleteNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {remove: n, delete: r} = e;
            try {
                return n && n.length > 0 && (yield t.all(l("Note", 0, n))), r && r.length > 0 && (yield t.all(l("Note", -1, r)), 
                yield t.all(`UPDATE Resource SET deleted = -1, updateTime=${Date.now()}, dirty=1 WHERE noteGuid in ("${r.join('","')}")`), 
                yield t.all(`UPDATE Tag SET deleted = -1, updateTime=${Date.now()}, dirty=1 WHERE noteGuid in ("${r.join('","')}")`)), 
                {
                    data: []
                };
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_updateNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {syncUp: n} = e;
            if (n && 0 !== n.length) try {
                for (let e = 0; e < n.length; e++) {
                    const {guid: r, noteBookGuid: i, attrUpdateTime: o} = n[e];
                    let a = {
                        guid: r,
                        noteBookGuid: i,
                        attrUpdateTime: o,
                        dirty: 1
                    };
                    yield t.update("Note", a, "guid");
                }
                return;
            } catch (e) {
                throw a().info([ "note_updateNote error:", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.note_getRecentlyDeleted = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            try {
                const {type: t, maxEntries: n = 50, page: r = 1} = e, o = {
                    notes: null,
                    documents: null
                }, a = (new Date).getTime() - 5184e6, s = {
                    [i.SyncType.Note]: {
                        table: "Note",
                        condition: `deleted=0 AND updateTime > ${a} ORDER BY updateTime DESC, updateSequenceNum DESC, createTime DESC`,
                        keys: "guid,updateTime as updateSequenceNum,createTime,updateTime,deleted,title,contentDigest,thumbnail,importantLevel,bgColor,alarmTime,encryptType,type,pictureMode,stickTop,stickTopTime,paperTexture,pageMargins,noteBookGuid,oldAlarmTime"
                    },
                    [i.SyncType.Doc]: {
                        table: "Document d LEFT JOIN File f ON d.fileID = f.guid ",
                        condition: `d.deleted=0 AND d.updateTime > ${a} ORDER BY d.updateTime DESC, d.updateSequenceNum DESC, d.createTime DESC`,
                        keys: "d.guid, d.deleted, d.name, d.mime, d.documentSize, d.updateTime, d.createTime, updateTime as updateSequenceNum, f.guid as documentKey, f.path as domainAddr, f.status"
                    }
                }, l = s[Number(t)];
                if (!l) return o;
                const c = `SELECT ${l.keys} FROM ${l.table} WHERE ${l.condition} LIMIT ${n} OFFSET ${(r > 1 ? r - 1 : 0) * n}`, u = yield this.all(c);
                return t === i.SyncType.Note ? o.notes = u : t === i.SyncType.Doc && (o.documents = u), 
                o;
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_recover = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {type: n, notes: r, documents: o} = e;
            try {
                return n === i.SyncType.Note && (yield t.all(l("Note", 1, r))), n === i.SyncType.Doc && (yield t.all((a = "Document", 
                s = 1, c = o, `UPDATE ${a} SET deleted = ${s}, updateTime=${Date.now()}, dirty=1 WHERE guid in ("${c.join('","')}")`))), 
                [];
            } catch (e) {
                throw new Error(e.message);
            }
            var a, s, c;
        });
    }, t.note_getSingeNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {guid: n} = e;
            try {
                let e = `SELECT n.*, t.guid AS t_guid, t.noteGuid AS t_noteGuid, t.updateSequenceNum AS t_updateSequenceNum, t.name AS t_name\n          , t.bgColor AS t_bgColor, t.type AS t_type, t.dirty AS t_dirty, r.guid AS r_guid,  t.deleted as t_deleted, t.createTime as t_createTime\n          , r.noteGuid AS r_noteGuid, r.updateSequenceNum AS r_updateSequenceNum, r.name AS r_name\n          , r.mime AS r_mime, r.resourceKey AS r_resourceKey, r.domainAddr AS r_domainAddr, r.resourceSize AS r_resourceSize, r.resType AS r_resType\n          , r.dirty AS r_dirty, r.fileID as r_fileID, r.createTime as r_createTime, r.updateTime as r_updateTime,r.deleted as r_deleted, r.sort as r_sort, r.category as r_category\n          , r.resourceTextUpdateTime AS r_resourceTextUpdateTime\n        FROM Note n\n          LEFT JOIN (\n            SELECT *\n            FROM Tag\n            WHERE Tag.deleted = 1\n            ORDER BY Tag.updateSequenceNum DESC\n          ) t\n          ON n.guid = t.noteGuid\n          LEFT JOIN (\n            SELECT *\n            FROM Resource\n            WHERE Resource.deleted = 1\n            ORDER BY Resource.updateSequenceNum DESC\n          ) r\n          ON n.guid = r.noteGuid \n      where n.guid = '${n}'`;
                let r = s(yield t.all(e), "timeWord");
                return r.notes && r.notes.length > 0 ? r.notes[0] : {};
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_getNotesByGuids = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {guids: n} = e;
            try {
                let e = `SELECT n.*, t.guid AS t_guid, t.noteGuid AS t_noteGuid, t.updateSequenceNum AS t_updateSequenceNum, t.name AS t_name\n          , t.bgColor AS t_bgColor, t.type AS t_type, t.dirty AS t_dirty, r.guid AS r_guid,  t.deleted as t_deleted, t.createTime as t_createTime\n          , r.noteGuid AS r_noteGuid, r.updateSequenceNum AS r_updateSequenceNum, r.name AS r_name\n          , r.mime AS r_mime, r.resourceKey AS r_resourceKey, r.domainAddr AS r_domainAddr, r.resourceSize AS r_resourceSize, r.resType AS r_resType\n          , r.dirty AS r_dirty, r.fileID as r_fileID, r.createTime as r_createTime, r.updateTime as r_updateTime,r.deleted as r_deleted, r.sort as r_sort, r.category as r_category\n          , r.resourceTextUpdateTime AS r_resourceTextUpdateTime\n        FROM Note n\n          LEFT JOIN (\n            SELECT *\n            FROM Tag\n            WHERE Tag.deleted = 1\n            ORDER BY Tag.updateSequenceNum DESC\n          ) t\n          ON n.guid = t.noteGuid\n          LEFT JOIN (\n            SELECT *\n            FROM Resource\n            WHERE Resource.deleted = 1\n            ORDER BY Resource.updateSequenceNum DESC\n          ) r\n          ON n.guid = r.noteGuid \n      where n.guid in ('${n.join("','")}')`;
                return s(yield t.all(e), "timeWord").notes;
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_getNoteStatusByGuids = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT guid, dirty, localDataStatus from Note where guid in ('${e.join("','")}')`;
                return (yield t.all(n)) || {};
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_insertNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return e.contentNote = e.content, e.ex3 = e.conflictTime, delete e.content, delete e.conflictTime, 
                delete e.contentLoaded, yield t.insert("Note", e);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_findNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = yield t.find("Note", e, "guid");
                return n = n || {}, c(n);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_pc_updateNote = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return void 0 !== e.content && (e.contentNote = e.content), void 0 !== e.conflictTime && (e.ex3 = e.conflictTime), 
                delete e.content, delete e.originContent, delete e.conflictTime, delete e.syncProtocolVersion, 
                yield t.update("Note", e, "guid");
            } catch (e) {
                throw console.log("修改笔记出错"), a().info("修改笔记出错" + e.message), new Error(e.message);
            }
        });
    }, t.note_updateNotes = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    void 0 !== r.content && (r.contentNote = r.content), void 0 !== r.conflictTime && (r.ex3 = r.conflictTime), 
                    delete r.content, delete r.originContent, delete r.conflictTime, yield t.update("Note", r, "guid");
                }
            } catch (e) {
                throw console.log("修改笔记出错"), new Error(e.message);
            }
        });
    }, t.note_findNotes = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from Note where guid in ('${e.join("','")}')`;
                return (yield t.all(n)).map(e => c(e));
            } catch (e) {
                throw new Error("findNotes failed");
            }
        });
    }, t.note_queryNotesHasTime = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT * from Note where alarmTime > 0 and deleted = 1";
                return yield e.all(t);
            } catch (t) {
                throw yield e.exec("ROLLBACK;"), new Error("queryNotesHasTime todo failed");
            }
        });
    }, t.note_unlockAllNoteSync = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT * from Note where syncLock = 1";
                let n = yield e.all(t);
                return void (n.length > 0 && (yield e.exec("BEGIN IMMEDIATE;"), n.forEach(t => {
                    e.update("Note", {
                        guid: t.guid,
                        syncLock: 2,
                        dirty: 1
                    }, "guid");
                }), e.exec("COMMIT;")));
            } catch (t) {
                yield e.exec("ROLLBACK;");
            }
        });
    }, t.note_getNoteWindowGuids = function() {
        return Array.from(global.__windows.keys()).filter(e => "string" == typeof e && e.includes("note")).map(e => e.replace("note", ""));
    }, t.note_hasData = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT COUNT(*) AS note_count\n      FROM Note\n      WHERE deleted != -1;";
                return (yield e.all(t))[0];
            } catch (e) {}
        });
    }, t.note_minimizeNoteWindow = function({guid: e}) {
        a().info("[note]最小化笔记子窗口" + e);
        const t = global.__windows.get("note" + e);
        null == t || t.minimize();
    }, t.note_closeNoteWindow = function({guid: e}) {
        a().info("[note]close 笔记子窗口" + e);
        const t = global.__windows.get("note" + e);
        null == t || t.close();
    }, t.note_destroyNoteWindow = function({guid: e}) {
        a().info("[note]destroy 笔记子窗口" + e);
        const t = global.__windows.get("note" + e);
        t && (global.__windows.delete("note" + e), null == t || t.destroy());
    }, t.note_maxmizeNoteWindow = function({guid: e}) {
        a().info("[note]最大化笔记子窗口" + e);
        const t = global.__windows.get("note" + e);
        null == t || t.maximize();
    }, t.note_toggleMaxmizeNoteWindow = function({guid: e}) {
        const t = global.__windows.get("note" + e), n = null == t ? void 0 : t.isMaximized();
        a().info(`[note]双击笔记子窗口${e} 是否最大化：${n ? "已是最大化" : "不是最大化"}`), n ? null == t || t.unmaximize() : null == t || t.maximize();
    }, t.note_stickNoteWindow = function({guid: e}) {
        a().info("[note]置顶笔记子窗口" + e);
        const t = global.__windows.get("note" + e);
        "darwin" === process.platform ? null == t || t.setAlwaysOnTop(!0) : "win32" === process.platform && (null == t || t.setAlwaysOnTop(!0, "screen-saver"));
    }, t.note_unstickNoteWindow = function({guid: e}) {
        a().info("[note]取消笔记子窗口置顶" + e);
        const t = global.__windows.get("note" + e);
        t && !t.isDestroyed() && (t.setAlwaysOnTop(!1, "normal"), "darwin" === process.platform && t.setVisibleOnAllWorkspaces(!1));
    }, t.note_execSql = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {sql: n} = e;
            try {
                const e = yield t.all(n);
                a().info(`[note][execSql][${n}][${JSON.stringify(e)}]`);
            } catch (e) {
                a().info(`[note][execSql][error][${n}][${JSON.stringify(e)}]`);
            }
        });
    }, t.note_broadCastMessageToWindow = function({event: e, data: t}) {
        return r.__awaiter(this, void 0, void 0, function*() {
            global.__windows.forEach((n, r) => {
                console.log("key, 发送窗口广播", r), n.isDestroyed() || n.webContents.send(e, t);
            });
        });
    }, t.note_updateNoteHistory = function({guid: e}) {
        return r.__awaiter(this, void 0, void 0, function*() {
            this.update("Note", {
                guid: e,
                history: 2
            }, "guid");
        });
    }, t.note_setNotReportHistory = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            yield this.all("UPDATE Note SET history = 2 WHERE history = 1 AND deleted = 1"), 
            this.update("Note", {
                reportHistory: !1
            }, "guid");
        });
    }, t.note_copyAsNewInsert = function({exdata: e, userId: t}) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = this, r = {
                userId: t,
                noteSaveAsCopy: e
            };
            try {
                return yield n.update("User", r, "userId");
            } catch (e) {
                console.error("笔记内容写入失败", e);
            }
        });
    };
}
