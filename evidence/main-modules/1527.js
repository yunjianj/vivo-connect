// analysis/pretty/main.js:115494; webpack module 1527
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.todos_removeCategory = t.todos_updateCategory = t.todos_createCategory = t.todos_queryCategory = t.todos_getCountTodosByType = t.todos_resetTodoOrder = t.todos_deleteTodo = t.todos_updateTodoBatch = t.todos_updateTodoSingle = t.todos_updateTodo = t.todos_createTodo = t.todos_getTodoItem = t.todos_getChildList = t.todos_getTodoList = t.queryTodosHasTime = t.queryTodos = t.todos_getTodoSyncState = void 0;
    const r = n(0);
    function i(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = e.syncUp[0];
            console.log("[todos_updateTodoSingle] item:", JSON.stringify({
                guid: n.guid,
                type: n.type,
                content: n.content
            }));
            const r = JSON.parse(JSON.stringify(n));
            r.contentToDo = n.content, r.dirty = 1, r.localDataStatus = 0, delete r.content, 
            delete r.id, delete r.createTime, delete r.noticeType, delete r.updateSequenceNum, 
            delete r.ex1, delete r.ex2, delete r.ex3, delete r.children, delete r.isEnterEdit, 
            delete r.isExpand, delete r.createdType, delete r.isCreatedTodo, delete r.isNewAuotOutside, 
            delete r.hasDate, delete r.description, delete r.hasAlarm, delete r.reminderList, 
            delete r.hasTime, delete r.dateValue, delete r.timeValue, delete r.reminderTimeStr, 
            delete r.relativeTimeStr;
            try {
                return yield t.update("ToDo", r, "guid"), [ {
                    guid: n.guid,
                    updateSequenceNum: n.updateTime
                } ];
            } catch (e) {
                throw new Error("update todo failed--Single-- error: " + e);
            }
        });
    }
    function o(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = e.syncUp;
            console.log("[todos_updateTodoBatch] itemList:", JSON.stringify(n.map(e => ({
                guid: e.guid,
                type: e.type
            }))));
            const r = [];
            yield t.exec("BEGIN IMMEDIATE;");
            try {
                for (let e = 0; e < n.length; e++) {
                    const i = JSON.parse(JSON.stringify(n[e]));
                    i.contentToDo = i.content, i.dirty = 1, i.localDataStatus = 0, delete i.content, 
                    delete i.id, delete i.createTime, delete i.noticeType, delete i.updateSequenceNum, 
                    delete i.ex1, delete i.ex2, delete i.ex3, delete i.children, delete i.isEnterEdit, 
                    delete i.isExpand, delete i.createdType, delete i.isCreatedTodo, delete i.isNewAuotOutside, 
                    delete i.hasDate, delete i.description, delete i.hasAlarm, delete i.reminderList, 
                    delete i.hasTime, delete i.dateValue, delete i.timeValue, delete i.reminderTimeStr, 
                    delete i.relativeTimeStr;
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
                throw yield t.exec("ROLLBACK;"), new Error("update todo failed--Batch-- error: " + e);
            }
        });
    }
    function a(e) {
        if (!e.length) return [];
        const t = [];
        return e.forEach(e => {
            const n = {};
            Object.keys(e).forEach(t => {
                const r = e[t], i = "string" == typeof r ? r.trim() : r;
                "contentToDo" === t ? n.content = i : n[t] = i;
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
    }, t.todos_getChildList = function({pguid: e}) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return t.all(`SELECT * FROM ToDo WHERE pguid = '${e}' AND deleted = 1 ORDER BY sort asc, updateSequenceNum desc`).then(e => a(e));
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("getChildList todo failed");
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
                let r = [];
                return e.syncUp.forEach(e => {
                    const {content: t, guid: n, type: i, sort: o, symbolInfo: a, bgColor: s, noticeType: l, reminderTime: c, updateTime: u, createTime: d, localDataStatus: h, ex1: p, alarmRepeatRule: f, duration: _, rrule: m, categoryGuid: g, dueTimeType: v, priority: y, sourceType: E, relativeTime: b, location: w, sortv70: S, timeZone: T, showLunar: A, remark: O, pguid: C, childCount: N} = e, I = [ `'${(t || "").replace(/'/g, "''")}'`, `'${n}'`, null != i ? i : 0, null != o ? o : 1, null != a ? a : 0, c ? `'${c}'` : "null", null != l ? l : "null", null != f ? f : 0, 1, 1, u, d, null != h ? h : 0, null != p ? `'${p}'` : "null", `'${s || "color1"}'`, `'${(O || "").replace(/'/g, "''")}'`, `'${_ || "PT15M"}'`, null != y ? y : 0, null != E ? E : 0, `'${m || ""}'`, null != v ? v : 0, `'${b || "[]"}'`, `'${(w || "").replace(/'/g, "''")}'`, null != S ? S : 0, `'${T || ""}'`, null != A ? A : 1, `'${g || ""}'`, null != N ? N : 0, null != C ? `'${C}'` : "null" ];
                    r.push(`(${I.join(",")})`);
                }), yield t.exec("INSERT INTO ToDo (contentToDo, guid, type, sort, symbolInfo, reminderTime, noticeType, alarmRepeatRule, deleted, dirty, updateTime, createTime, localDataStatus, ex1, bgColor, remark, duration, priority, sourceType, rrule, dueTimeType, relativeTime, location, sortv70, timeZone, showLunar, categoryGuid, childCount, pguid) VALUES " + r.join(",")), 
                yield t.exec("COMMIT;"), n = [ {
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
    }, t.todos_queryCategory = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                return (yield e.all("SELECT * FROM ToDoCategory WHERE deleted = 1 ORDER BY colorIndex ASC")) || [];
            } catch (e) {
                throw new Error("queryCategory failed: " + JSON.stringify(e));
            }
        });
    }, t.todos_createCategory = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (!e || !e.syncUp || !e.syncUp.length) return [];
            const n = Date.now();
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                const r = [];
                return e.syncUp.forEach(e => {
                    const {guid: t, name: i, color: o, colorIndex: a} = e;
                    r.push(`('${t}', '${(i || "").replace(/'/g, "''")}', ${o || 0}, ${a || 0}, 1, ${n}, ${n})`);
                }), yield t.exec("INSERT INTO ToDoCategory (guid, name, color, colorIndex, dirty, createTime, updateTime) VALUES " + r.join(",")), 
                yield t.exec("COMMIT;"), [ {
                    updateSequenceNum: n
                } ];
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("createCategory failed: " + JSON.stringify(e));
            }
        });
    }, t.todos_updateCategory = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (!e) return [];
            let n;
            if (e.syncUp && e.syncUp.length) n = e.syncUp; else {
                if (!e.guid && !e.id) return [];
                n = [ e ];
            }
            const r = Date.now();
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                for (const e of n) {
                    const n = e.guid || e.id;
                    if (!n) continue;
                    const i = [ null != e.name ? `name='${(e.name || "").replace(/'/g, "''")}'` : null, null != e.color ? "color=" + e.color : null, null != e.colorIndex ? "colorIndex=" + e.colorIndex : null, null != e.visible ? "localDataStatus=" + e.visible : null, "updateTime=" + r, "dirty=1" ].filter(Boolean).join(", ");
                    yield t.exec(`UPDATE ToDoCategory SET ${i} WHERE guid='${n}'`);
                }
                return yield t.exec("COMMIT;"), [ {
                    updateSequenceNum: r
                } ];
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("updateCategory failed: " + JSON.stringify(e));
            }
        });
    }, t.todos_removeCategory = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            if (!e) return [];
            let n;
            if (e.syncUp && e.syncUp.length) n = e.syncUp.map(e => e.guid); else if (e.delete && e.delete.length) n = e.delete; else {
                if (!e.guid) return [];
                n = [ e.guid ];
            }
            const r = Date.now();
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                const e = n.map(e => `'${e}'`).join(",");
                return yield t.exec(`UPDATE ToDoCategory SET deleted=-1, dirty=1, updateTime=${r} WHERE guid IN (${e})`), 
                yield t.exec("COMMIT;"), [ {
                    updateSequenceNum: r
                } ];
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error("removeCategory failed: " + JSON.stringify(e));
            }
        });
    };
}
