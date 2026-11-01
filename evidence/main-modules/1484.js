// analysis/pretty/main.js:110664; webpack module 1484
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CalendarClawService = t.CALENDAR_CLAW_ENUM = void 0;
    const r = n(0), i = n(58);
    var o;
    !function(e) {
        e.CALENDAR_CREATE_EVENT = "calendar:createEvent", e.CALENDAR_REPLY_CREATE_EVENT = "calendar:reply:createEvent", 
        e.CALENDAR_DELETE_EVENT = "calendar:deleteEvent", e.CALENDAR_REPLY_DELETE_EVENT = "calendar:reply:deleteEvent", 
        e.CALENDAR_EDIT_EVENT = "calendar:editEvent", e.CALENDAR_REPLY_EDIT_EVENT = "calendar:reply:editEvent", 
        e.CALENDAR_QUERY_EVENT = "calendar:queryEvent", e.CALENDAR_REPLY_QUERY_EVENT = "calendar:reply:queryEvent", 
        e.CALENDAR_QUERY_EVENT_BYID = "calendar:queryEvent:byId", e.CALENDAR_REPLY_QUERY_EVENT_BYID = "calendar:reply:queryEvent:byId";
    }(o = t.CALENDAR_CLAW_ENUM || (t.CALENDAR_CLAW_ENUM = {}));
    class a {
        static getInstance() {
            return a.instance || (a.instance = new a), a.instance;
        }
        createEvent(e) {
            return this.sendMsg(o.CALENDAR_CREATE_EVENT, o.CALENDAR_REPLY_CREATE_EVENT, e);
        }
        deleteEvent(e) {
            return this.sendMsg(o.CALENDAR_DELETE_EVENT, o.CALENDAR_REPLY_DELETE_EVENT, e);
        }
        editEvent(e) {
            return this.sendMsg(o.CALENDAR_EDIT_EVENT, o.CALENDAR_REPLY_EDIT_EVENT, e);
        }
        queryEvent(e) {
            return this.sendMsg(o.CALENDAR_QUERY_EVENT, o.CALENDAR_REPLY_QUERY_EVENT, e);
        }
        queryEventById(e) {
            return this.sendMsg(o.CALENDAR_QUERY_EVENT_BYID, o.CALENDAR_REPLY_QUERY_EVENT_BYID, e);
        }
        sendMsg(e, t, r) {
            return new Promise(o => {
                var a;
                const s = i.v4().replace(/-/g, "");
                null === (a = global.__mainWindow) || void 0 === a || a.webContents.send(e, Object.assign({
                    unique_guid: s
                }, r)), console.error("sendMsg==1", e, t, s);
                const l = setTimeout(() => {
                    console.error(`[Calendar][ai日程][接口超时][endError]msg：${e}msgReply${t}`), global.__log.info(`[Calendar][ai日程][接口超时][endError]msg：${e}msgReply${t}`), 
                    o(new Error("Request timeout"));
                }, 1e4);
                if (!process.env.IS_WEB) {
                    n(2).ipcMain.once(`${t}:${s}`, (e, n) => {
                        console.error(`[CalendarClawServiceInstance] key: ${t}, data:`, n), clearTimeout(l), 
                        o(n);
                    });
                }
            });
        }
        getIsForwardRequest(e) {
            return null == e ? void 0 : e.includes("pc_calendar");
        }
        forwardRequest(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = (e.url || "").split("?")[0] || "";
                let i = "";
                e.on("data", e => {
                    i += null == e ? void 0 : e.toString();
                }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    if (console.error("end====end"), !(/pc_calendar\/create_calendar/.test(n) || /pc_calendar\/delete_calendar/.test(n) || /pc_calendar\/update_calendar/.test(n) || /pc_calendar\/query_calendar/.test(n) || /pc_calendar\/query_byId_calendar/.test(n))) return console.error("endHttpError==endHttpError"), 
                    void this.endHttpError(t, "not found");
                    if ("application/json" === e.headers["content-type"]) {
                        let e = {};
                        try {
                            e = JSON.parse(i);
                        } catch (e) {
                            return global.__log.info(`req path=${n} body json parse error: ${e.message}`), void this.endError(t, "JSON解析失败", 10001);
                        }
                        if (/pc_calendar\/create_calendar/.test(n)) {
                            console.error("create_calendar====");
                            const n = yield this.createEvent(e);
                            (null == n ? void 0 : n.success) ? this.endOk(t, n) : (global.__log.info("[Calendar][ai日程][创建日程失败][endError]" + JSON.stringify(n)), 
                            console.error("[Calendar][ai日程][创建日程失败][endError]" + JSON.stringify(n)), this.endError(t, "创建日程失败"));
                        } else if (/pc_calendar\/delete_calendar/.test(n)) {
                            console.error("delete_calendar====");
                            const n = yield this.deleteEvent(e);
                            (null == n ? void 0 : n.success) ? this.endOk(t, n) : (global.__log.info("[Calendar][ai日程][删除日程失败][endError]" + JSON.stringify(n)), 
                            console.error("[Calendar][ai日程][删除日程失败][endError]" + JSON.stringify(n)), this.endError(t, "删除日程失败"));
                        } else if (/pc_calendar\/update_calendar/.test(n)) {
                            console.error("update_calendar====");
                            const n = yield this.editEvent(e);
                            (null == n ? void 0 : n.success) ? this.endOk(t, n) : (global.__log.info("[Calendar][ai日程][编辑日程失败][endError]" + JSON.stringify(n)), 
                            console.error("[Calendar][ai日程][编辑日程失败][endError]" + JSON.stringify(n)), this.endError(t, "编辑日程失败"));
                        } else if (/pc_calendar\/query_calendar/.test(n)) {
                            console.error("query_calendar====");
                            const n = yield this.queryEvent(e);
                            console.error("result", n), (null == n ? void 0 : n.success) ? this.endOk(t, n) : (global.__log.info("[Calendar][ai日程][查询日程失败][endError]" + JSON.stringify(n)), 
                            console.error("[Calendar][ai日程][查询日程失败][endError]" + JSON.stringify(n)), this.endError(t, "查询日程失败"));
                        } else if (/pc_calendar\/query_byId_calendar/.test(n)) {
                            console.error("query_byId_calendar====");
                            const n = yield this.queryEventById(e);
                            console.error("result", n), (null == n ? void 0 : n.success) ? this.endOk(t, n) : (global.__log.info("[Calendar][ai日程][查询日程失败-byid][endError]" + JSON.stringify(n)), 
                            console.error("[Calendar][ai日程][查询日程失败-byid][endError]" + JSON.stringify(n)), this.endError(t, "查询日程失败"));
                        }
                    }
                }));
            });
        }
        endHttpError(e, t, n = 404) {
            e.writeHead(n, {
                "content-type": "text/plain"
            }), e.end(t);
        }
        endOk(e, t) {
            e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                code: 0,
                data: t
            }));
        }
        endError(e, t, n = 1) {
            e.writeHead(200, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                code: n,
                data: {},
                message: t
            }));
        }
    }
    t.CalendarClawService = a.getInstance();
}
