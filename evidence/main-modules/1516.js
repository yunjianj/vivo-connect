// analysis/pretty/main.js:114074; webpack module 1516
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.doc_recoverDoc = t.doc_expungeDoc = t.doc_updateDoc = t.doc_createDoc = t.doc_getDoc = t.doc_getDocList = t.doc_getTotalNum = t.doc_getDocSyncChunk = t.doc_getDocSyncState = void 0;
    const r = n(0), i = r.__importDefault(n(1517)), o = n(1518), a = [ "guid", "deleted", "name", "mime", "documentSize", "updateTime", "createTime", "status" ];
    let s = 0;
    const l = new i.default, c = () => "renderer" === process.type ? window._log : global.__log;
    t.doc_getDocSyncState = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this, t = {
                updateCount: 0
            };
            try {
                const [{updateTime: n, createTime: r, usn: i}] = yield e.all(l.state), o = new Date(n).getTime(), a = new Date(r).getTime();
                s = i || 0, t.updateCount = `${Math.max(o || 0, a || 0)}-${s}`;
            } catch (e) {
                c().error([ "doc_getDocSyncState_error", e.message ].join("#"));
            }
            return t;
        });
    }, t.doc_getDocSyncChunk = function(e) {
        var t, n;
        return r.__awaiter(this, void 0, void 0, function*() {
            const {chunks: r} = e, i = this;
            let o = (null == r ? void 0 : r.lastUpdateCount) || 0, a = [];
            const s = (null == r ? void 0 : r.documents) || [];
            if (s.length) try {
                a = (yield i.all(l.getListByGuid(s))).map(e => ({
                    guid: e.guid,
                    deleted: e.deleted,
                    name: e.name,
                    mime: e.mime,
                    documentSize: e.documentSize,
                    updateTime: e.updateTime,
                    createTime: e.createTime,
                    status: e.status,
                    documentKey: e.fileID || "",
                    domainAddr: e.path || "",
                    updateSequenceNum: e.updateTime || 0,
                    ex1: e.ex1
                }));
            } catch (e) {
                c().error([ "doc_getDocSyncChunk_error", e.message ].join("#"));
            }
            const u = ((null === (t = null == r ? void 0 : r.remove) || void 0 === t ? void 0 : t.documents) || []).map(e => ({
                guid: e
            }));
            return {
                documents: a,
                delete: {
                    documents: ((null === (n = null == r ? void 0 : r.delete) || void 0 === n ? void 0 : n.documents) || []).map(e => ({
                        guid: e
                    }))
                },
                remove: {
                    documents: u
                },
                updateCount: o
            };
        });
    }, t.doc_getTotalNum = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            let t = 0;
            try {
                const [{num: n}] = yield e.all(l.count);
                t = n;
            } catch (e) {
                c().error([ "doc_getTotalNum_error", e.message ].join("#"));
            }
            return c().info([ "doc_getTotalNum_result", t ].join("#")), t;
        });
    }, t.doc_getDocList = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            let t = [];
            try {
                t = (yield e.all(l.list)).map(e => ({
                    guid: e.guid,
                    deleted: e.deleted,
                    name: e.name,
                    mime: e.mime,
                    documentSize: e.documentSize,
                    updateTime: e.updateTime,
                    createTime: e.createTime,
                    status: e.status,
                    documentKey: e.fileID || "",
                    domainAddr: e.path || "",
                    updateSequenceNum: e.updateTime || 0,
                    ex1: e.ex1
                }));
            } catch (e) {
                c().error([ "doc_getDocList_error", e.message ].join("#"));
            }
            return c().info([ "doc_getDocList_result", t.length ].join("#")), t;
        });
    }, t.doc_getDoc = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, n = e.guid;
            let r = {};
            try {
                const e = yield t.get(l.get, [ n ]);
                r = Object.assign((i = e, a.reduce((e, t) => (e[t] = i[t] || "", e), {})), {
                    documentKey: e.fileID || "",
                    domainAddr: e.path || "",
                    updateSequenceNum: e.updateTime || 0
                });
            } catch (e) {
                c().error([ "doc_getDoc_error", e.message ].join("#"));
            }
            var i;
            return r;
        });
    }, t.doc_createDoc = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            let n = [];
            c().info([ "doc_createDoc_body", JSON.stringify(e) ].join("#"));
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                const r = e.syncUp;
                for (let e = 0; e < r.length; e++) {
                    const i = r[e], o = i.guid, a = i.createTime, c = i.name, u = i.mime, d = i.documentKey, h = i.documentSize;
                    yield t.run(l.create, [ o, a, a, c, u, d, h ]), n.push({
                        guid: o,
                        updateSequenceNum: `${a}-${s}`
                    });
                }
                t.exec("COMMIT;");
            } catch (e) {
                throw c().error([ "doc_createDoc_error", e.message ].join("#")), yield t.exec("ROLLBACK;"), 
                new Error("createDoc failed");
            }
            return n;
        });
    }, t.doc_updateDoc = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            let n = [];
            const r = e.syncUp || [], i = [];
            for (let e = 0; e < r.length; e++) {
                const {guid: t, name: n = "", updateTime: a, documentKey: s, domainAddr: l = ""} = r[e];
                let c = "";
                if (s) {
                    const e = yield o.renameFile(l, n);
                    e.ok ? (c = e.data, i.push({
                        guid: t,
                        name: n,
                        updateTime: a,
                        documentKey: s,
                        domainAddr: l,
                        destPath: c
                    })) : e.code;
                }
            }
            if (0 === i.length) return [];
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                for (let e = 0; e < i.length; e++) {
                    const {name: r, destPath: o, guid: a, updateTime: c, documentKey: u} = i[e];
                    yield t.run(l.update, [ r, c, a ]), o && (yield t.run(l.updateFile, [ o, u ])), 
                    n.push({
                        guid: a,
                        updateSequenceNum: `${c}-${s}`,
                        domainAddr: o
                    });
                }
                t.exec("COMMIT;");
            } catch (e) {
                throw c().error([ "doc_updateDoc_error", e.message ].join("#")), yield t.exec("ROLLBACK;"), 
                new Error("updateDoc note failed");
            }
            return c().info([ "doc_updateDoc_result", JSON.stringify(n) ].join("#")), n;
        });
    }, t.doc_expungeDoc = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, n = e.remove || [], r = e.delete || [], i = e.updateTime;
            let o = [];
            c().info([ "doc_expungeDoc_body", JSON.stringify(e) ].join("#"));
            try {
                yield t.exec("BEGIN IMMEDIATE;"), n.length && (yield t.run(l.remove(n), [ i ])), 
                r.length && (yield t.run(l.delete(r), [])), t.exec("COMMIT;"), o = n.concat(r).map(e => ({
                    guid: e,
                    updateSequenceNum: `${i}-${s}`
                }));
            } catch (e) {
                throw c().error([ "doc_expungeDoc_error", e.message ].join("#")), yield t.exec("ROLLBACK;"), 
                new Error("doc_expungeDoc failed");
            }
            return c().info([ "doc_expungeDoc_result", JSON.stringify(o) ].join("#")), o;
        });
    }, t.doc_recoverDoc = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            let n = [];
            c().info([ "doc_recoverDoc_body", JSON.stringify(e) ].join("#"));
            try {
                const r = e.updateTime, i = e.documents;
                yield t.exec("BEGIN IMMEDIATE;"), yield t.run(l.recover(i), [ r ]), t.exec("COMMIT;"), 
                n = i.map(e => ({
                    guid: e,
                    updateSequenceNum: `${r}-${s}`
                }));
            } catch (e) {
                throw c().error([ "doc_recoverDoc_error", e.message ].join("#")), yield t.exec("ROLLBACK;"), 
                new Error("doc_recoverDoc failed");
            }
            return c().info([ "doc_recoverDoc_result", JSON.stringify(n) ].join("#")), n;
        });
    };
}
