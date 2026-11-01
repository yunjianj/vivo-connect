// analysis/pretty/main.js:115204; webpack module 1525
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.todos_getCountTodosByType = t.todos_resetTodoOrder = t.todos_deleteTodo = t.todos_updateTodoBatch = t.todos_updateTodoSingle = t.todos_updateTodo = t.todos_createTodo = t.todos_getTodoItem = t.todos_getTodoList = t.queryTodosHasTime = t.queryTodos = t.todos_getTodoSyncState = void 0;
    const r = n(0);
    function i(e, t) {
        var n;
        return r.__awaiter(this, void 0, void 0, function*() {
            const r = e.syncUp[0], i = JSON.parse(JSON.stringify(r));
            i.contentToDo = r.content, i.dirty = 1, i.localDataStatus = 0, delete i.content, 
            delete i.id, delete i.createTime, delete i.noticeType, delete i.updateSequenceNum, 
            delete i.ex1, delete i.ex2, delete i.ex3, delete i.children, delete i.isEnterEdit, 
            delete i.isExpand, delete i.createdType, delete i.isCreatedTodo, delete i.isNewAuotOutside, 
            delete i.isNewAuotOutside, delete i.hasDate;
            try {
                const e = Object.assign(Object.assign({}, i), {
                    contentToDo: (null === (n = i.contentToDo) || void 0 === n ? void 0 : n.length) || 0
                });
                global.__log && global.__log.info(`[todos_updateTodoSingle] guid: ${i.guid}, fields: ${JSON.stringify(e)}`), 
                yield t.update("ToDo", i, "guid");
                const o = yield t.find("ToDo", i.guid, "guid");
                return global.__log && global.__log.info(`[todos_updateTodoSingle] after update verify: guid=${i.guid}, reminderTime=${null == o ? void 0 : o.reminderTime}, alarmRepeatRule=${null == o ? void 0 : o.alarmRepeatRule}, dirty=${null == o ? void 0 : o.dirty}`), 
                [ {
                    guid: r.guid,
                    updateSequenceNum: r.updateTime
                } ];
            } catch (e) {
                throw global.__log && global.__log.error("[todos_updateTodoSingle] error: " + e), 
                new Error("update todo failed--1-- error: " + e);
            }
        });
    }
    function o(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = e.syncUp, r = [];
            yield t.exec("BEGIN IMMEDIATE;");
            try {
                for (let e = 0; e < n.length; e++) {
                    const i = JSON.parse(JSON.stringify(n[e]));
                    i.contentToDo = i.content, i.dirty = 1, i.localDataStatus = 0, delete i.content, 
                    delete i.id, delete i.createTime, delete i.noticeType, delete i.updateSequenceNum, 
                    delete i.ex1, delete i.ex2, delete i.ex3, delete i.children, delete i.isEnterEdit, 
                    delete i.isExpand, delete i.createdType, delete i.isCreatedTodo, delete i.isNewAuotOutside, 
                    delete i.isNewAuotOutside, delete i.hasDate;
                    const o = [], a = [];
                    Object.keys(i).filter(e => "guid" !== e).map(e => {
                        o.push(e), a.push(i[e]);
                    });
                    const s = `UPDATE ToDo SET ${o.map(e => e + " = ?").join(",")} WHERE guid = "${i.guid}"`;
                    yield t.run(s, a), r.push({
                        guid: i.guid,
                        updateSequenceNum: (new Date).getTime()
                    });
                }
                return t.exec("COMMIT;"), r;
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("update todo failed -- 2");
            }
        });
    }
    function a(e) {
        if (!e.length) return [];
        const t = [];
        return e.forEach(e => {
            const n = {};
            Object.keys(e).forEach(t => {
                "contentToDo" === t ? n.content = e.contentToDo : n[t] = e[t];
            }), t.push(n);
        }), t;
    }
    t.todos_getTodoSyncState = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this, t = {
                updateCount: 0
            };
            try {
                const [{updateCount: n}] = yield e.all("SELECT MAX(updateTime) as updateCount FROM ToDo");
                t.updateCount = n || 0;
            } catch (e) {
                console.log(e);
            }
            return console.log("todos_getTodoSyncState_result", t), t;
        });
    }, t.queryTodos = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from ToDo where type IN (0, 1, 2) AND guid in ('${e.join("','")}') ORDER BY sort asc`, r = yield t.all(n);
                return a(r);
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("queryTodos todo failed");
            }
        });
    }, t.queryTodosHasTime = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT * from ToDo where reminderTime > 0 and type =0 and deleted = 1";
                return yield e.all(t);
            } catch (t) {
                throw yield e.exec("ROLLBACK;"), new Error("queryTodosHasTime todo failed");
            }
        });
    }, t.todos_getTodoList = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                if (e.isConditionalQuery) {
                    const {type: n, maxEntries: r} = e;
                    return t.all(`SELECT * FROM ToDo WHERE deleted = 1 AND type = ${n} ORDER BY sort asc, updateSequenceNum desc LIMIT ${r}`).then(e => a(e));
                }
                return t.all("SELECT * FROM ToDo WHERE deleted = 1 AND type IN (0, 1, 2) ORDER BY sort asc, updateSequenceNum desc").then(e => a(e));
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("getTodoList todo failed");
            }
        });
    }, t.todos_getTodoItem = function({guid: e}) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return t.find("ToDo", e, "guid").then(e => e);
            } catch (e) {
                throw console.log("查询异常", e), new Error("get todo list failed");
            }
        });
    }, t.todos_createTodo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (!e.syncUp.length) return;
            let n = [];
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                let i = [];
                return e.syncUp.forEach(e => r.__awaiter(this, void 0, void 0, function*() {
                    const {content: t, guid: n, type: r, sort: o, symbolInfo: a, bgColor: s, noticeType: l, reminderTime: c, updateTime: u, createTime: d, localDataStatus: h, ex1: p, alarmRepeatRule: f, pguid: _, childCount: m} = e;
                    i.push(`(${[ `'${null == t ? void 0 : t.replace(/'/g, "''")}'`, `'${n}'`, r, o, a, `'${s}'`, null != l && null != l ? l : "null", c ? `'${c}'` : "null", f || 0, 1, 1, u, d, h, p ? "" + p : "null", m || 0, _ ? `'${_}'` : "null" ].join(",")})`);
                })), yield t.exec("INSERT INTO ToDo (contentToDo, guid, type, sort, symbolInfo, bgColor, noticeType, reminderTime, alarmRepeatRule, deleted, dirty, updateTime, createTime, localDataStatus, ex1, childCount, pguid) VALUES " + i.join(",")), 
                t.exec("COMMIT;"), n = [ {
                    updateSequenceNum: e.syncUp[e.syncUp.length - 1].updateTime
                } ], n;
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("create todo failed" + JSON.stringify(e));
            }
        });
    }, t.todos_updateTodo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            return 1 === e.syncUp.length ? yield i(e, t) : e.syncUp.length > 1 ? yield o(e, t) : void 0;
        });
    }, t.todos_updateTodoSingle = i, t.todos_updateTodoBatch = o, t.todos_deleteTodo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = e.delete, n = (new Date).getTime(), r = this;
            try {
                const e = t.map(e => `"${e}"`).join(", "), i = `UPDATE ToDo SET deleted=-1, dirty=1, updateTime=${n}, ex1="" WHERE guid IN (${e})`;
                return yield r.run(i), [ {
                    guid: e,
                    updateSequenceNum: n
                } ];
            } catch (e) {
                throw new Error("expunge todo failed");
            }
        });
    }, t.todos_resetTodoOrder = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = (new Date).getTime(), t = this;
            try {
                const n = yield t.all("SELECT * FROM ToDo WHERE deleted = 1 AND type IN (0, 1, 2) ORDER BY sort asc, updateSequenceNum desc");
                for (let r = 0; r < n.length; r++) {
                    let i = r + 1;
                    n[r] && 2 === n[r].type && n[r - 1] && 0 === n[r - 1].type && (i = r + 1e-8);
                    const o = `UPDATE ToDo SET sort=${i}, updateTime=${e} WHERE guid="${n[r].guid}"`;
                    yield t.run(o);
                }
                return [ {
                    updateSequenceNum: e
                } ];
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("resetTodoOrder todo failed");
            }
        });
    }, t.todos_getCountTodosByType = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {type: n} = e;
                let r = "SELECT COUNT(*) AS todoTotal FROM ToDo WHERE deleted = 1 AND type = " + n;
                return {
                    type: "pc-response",
                    data: (yield t.all(r).then(e => e))[0],
                    code: "GET_CODE",
                    message: "查询成功"
                };
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("getCountNotesByType failed");
            }
        });
    };
}
