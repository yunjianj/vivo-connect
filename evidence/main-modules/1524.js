// analysis/pretty/main.js:115076; webpack module 1524
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.note_getTransfer = t.note_getResource = t.note_getNoteResType = t.note_findResources = t.note_deleteResourcesDao = t.note_updateResources = void 0;
    const r = n(0), i = new (r.__importDefault(n(166)).default);
    t.note_updateResources = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {newResources: n, updateResources: o, toRemoveResources: a} = e;
            return new Promise(e => {
                i.run(() => r.__awaiter(this, void 0, void 0, function*() {
                    yield function(e, n, i) {
                        return r.__awaiter(this, void 0, void 0, function*() {
                            try {
                                console.log("doUpdateResource", e, n, i), yield t.exec("BEGIN IMMEDIATE;");
                                for (let n = 0; n < e.length; n++) {
                                    let r = e[n];
                                    const i = yield t.note_findResources([ r.guid ]);
                                    if (i && i.length > 0) {
                                        let e = i[0];
                                        0 === e.deleted && 10 === e.localDataStatus && (e.localDataStatus = 0), e.updateTime = r.updateTime || Date.now(), 
                                        e.dirty = r.dirty, e.deleted = r.deleted, delete e.domainAddr, yield t.update("Resource", e, "guid");
                                    } else yield t.insert("Resource", r);
                                }
                                if (n && n.length > 0) {
                                    console.log("更新附件", n);
                                    for (let e = 0; e < n.length; e++) {
                                        let r = n[e];
                                        const i = yield t.note_findResources([ r.guid ]);
                                        if (i && i.length > 0) {
                                            let e = i[0];
                                            e.dirty = 1, e.deleted = r.deleted, e.sort = r.sort, e.updateTime = r.updateTime || Date.now(), 
                                            delete e.domainAddr;
                                            [ "resourceTextContent", "resourceTextSummary", "resourceTextDigest", "resourceTextUpdateTime", "resourceTransferText", "expandFields" ].forEach(t => {
                                                null !== r[t] && void 0 !== r[t] && (e[t] = r[t]);
                                            }), yield t.update("Resource", e, "guid");
                                        }
                                    }
                                }
                                if (i && i.length > 0) {
                                    console.log("删除附件", i);
                                    for (let e = 0; e < i.length; e++) {
                                        let n = {
                                            deleted: 0,
                                            guid: i[e],
                                            dirty: 1,
                                            updateTime: Date.now()
                                        };
                                        yield t.update("Resource", n, "guid");
                                    }
                                }
                                t.exec("COMMIT;");
                            } catch (e) {
                                throw yield t.exec("ROLLBACK;"), new Error(e.message);
                            }
                        });
                    }(n, o, a);
                }), t => {
                    e(t);
                });
            });
        });
    }, t.note_deleteResourcesDao = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                if (yield t.exec("BEGIN IMMEDIATE;"), e && e.length > 0) for (let n = 0; n < e.length; n++) {
                    let r = {
                        deleted: -1,
                        guid: e[n],
                        dirty: 1,
                        updateTime: Date.now()
                    };
                    yield t.update("Resource", r, "guid");
                }
                t.exec("COMMIT;");
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error(e.message);
            }
        });
    }, t.note_findResources = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from Resource where guid in ('${e.join("','")}')`;
                return yield t.all(n);
            } catch (e) {
                throw console.log("error", e), new Error("findResources failed");
            }
        });
    }, t.note_getNoteResType = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {list: n} = e;
            try {
                let e = `SELECT noteGuid, mime, category, sort from Resource where noteGuid in ('${(n || []).join("','")}') and deleted = 1 group by mime,noteGuid order by sort asc`;
                const r = yield t.all(e), i = {};
                return (r || []).forEach(e => {
                    i[e.noteGuid] || (i[e.noteGuid] = []), i[e.noteGuid].push({
                        mime: e.mime,
                        category: e.category,
                        sort: e.sort
                    });
                }), i;
            } catch (e) {
                throw new Error("findResources failed");
            }
        });
    }, t.note_getResource = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {guid: n} = e;
            try {
                let e = `SELECT\n      noteGuid,\n      guid,\n      updateTime,\n      resourceTransferText,\n      resourceTextContent,\n      resourceTextSummary,\n      resourceTextDigest,\n      resourceTextUpdateTime,\n      resourceTransferText,\n      expandFields,\n      sort from Resource\n    where guid = '${n}' and deleted = 1 group by mime,noteGuid order by sort asc`;
                return (yield t.all(e))[0];
            } catch (e) {
                throw new Error("getResource failed");
            }
        });
    }, t.note_getTransfer = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {filename: n} = e;
            try {
                let e = `SELECT \n        r.noteGuid as noteGuid,\n        r.guid as guid,\n        r.updateTime as updateTime,\n        r.expandFields as expandFields,\n        r.sort as sort,\n        r.resourceTransferText as resourceTransferText,\n        r.fileID as fileID,\n        f.path as path\n    FROM \n        Resource AS r\n    INNER JOIN \n        File AS f ON r.fileID = f.guid\n    WHERE \n        r.name = '${n}' \n        AND r.deleted = 1\n    GROUP BY \n        r.mime, r.noteGuid\n    ORDER BY \n        r.sort ASC;`;
                return (yield t.all(e))[0];
            } catch (e) {
                throw new Error("getResource failed");
            }
        });
    };
}
