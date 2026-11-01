// analysis/pretty/main.js:116156; webpack module 1532
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = n(1533), s = n(1539);
    class l extends i.default {
        constructor(e) {
            super(e), this.queryCalendars = () => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT _id, _id AS id, accountName,accountType,displayName,ownerAccount,visible,colorIndex,color,key_calendar_ext_properties FROM Calendar");
            }), this.queryEvents = () => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT CAST(S.guid AS text) AS guid, E.calendar_id AS calendarId, E._id, E._id AS id, E.title, E.dtStart, E.dtEnd,\n        E.lunarEvent, E.birthLeapMonth, E.birthFebAddDays,\n        E.BirthdayAlertState, E.isShowLunar, E.timezone, E.allDay, E.hasAlarm,\n        E.description, E.rule, E.duration, E.reminderList, E.reminderAlertType, \n        E.eventStatus, E.originalInstanceTime, E.originalSyncId, \n        E.location, E.locationDetail, E.eventTimezone, E.noteGuid, E.noteType, E.extendedProperties\n        FROM Events AS E \n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId");
            }), this.queryEventsByIds = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = e.join(",");
                return yield this.all(`SELECT CAST(S.guid AS text) AS guid, E.calendar_id AS calendarId, E.* FROM Events AS E\n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId\n        where E._id in (${t})`);
            }), this.queryVisibleCalendars = () => r.__awaiter(this, void 0, void 0, function*() {
                const e = [ "bbknotes" ], t = e.map(() => "?").join(",");
                return (yield this.allWithParams(`SELECT * FROM ${l.CALENDARDBNAME} WHERE visible = 1 AND accountName NOT IN (${t})`, e)).filter(e => e.displayName);
            }), this.queryCalendarByAccountName = e => r.__awaiter(this, void 0, void 0, function*() {
                ;"bbknotes";
                return (yield this.get(`SELECT * FROM ${l.CALENDARDBNAME} WHERE accountName = ?`, "bbknotes")) || {};
            }), this.insertCalendars = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = this.getCalendarDbOperItem(), {visible: n, accountName: r, accountType: i, ownerAccount: o, displayName: s, colorIndex: c, color: u} = e, d = Object.assign(Object.assign({}, t), {
                    visible: n,
                    accountName: r,
                    accountType: i,
                    ownerAccount: o,
                    displayName: s,
                    colorIndex: c,
                    color: u
                });
                delete d.id;
                const h = yield this.insert(l.CALENDARDBNAME, d), {code: p} = h;
                if ("SAVE_CODE" !== p) return this.formatData("insert function: calendar table", "SQL_ERROR_CODE");
                const {calendarLastId: f} = yield this.get("SELECT last_insert_rowid() as calendarLastId", {});
                e.id = f;
                const _ = a.localIdFormat("pc", "calendar"), m = a.tableIdFormat(f, "calendar"), g = a.getSyncCalendarItem(d, "insert", _, m), v = yield this.insert(l.SYNCDBNAME, g), {code: y} = v;
                if ("SAVE_CODE" !== y) return this.formatData("insert function: sync table", "SQL_ERROR_CODE");
                const E = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", m), {lastSyncId: b} = E || {};
                return this.formatData({
                    lastSyncId: b
                }, "SAVE_CODE");
            }), this.updateCalendars = e => r.__awaiter(this, void 0, void 0, function*() {
                yield this.isHasEventsAndUpdate(e);
                const {_id: t, visible: n, accountName: r, accountType: i, ownerAccount: o, displayName: s, colorIndex: c, color: u} = e, d = this.getCalendarDbOperItem(), h = Object.assign(Object.assign({}, d), {
                    _id: t,
                    visible: n,
                    accountName: r,
                    accountType: i,
                    ownerAccount: o,
                    displayName: s,
                    colorIndex: c,
                    color: u
                }), {_id: p} = h, f = yield this.update(l.CALENDARDBNAME, h, "_id"), {code: _} = f;
                if ("UPDATE_CODE" !== _) return this.formatData("update function: calendar table", "SQL_ERROR_CODE");
                const m = a.localIdFormat("pc", "calendar"), g = a.tableIdFormat(p, "calendar"), v = a.getSyncCalendarItem(h, "update", m, g), y = yield this.update(l.SYNCDBNAME, v, "tableId"), {code: E} = y;
                if ("UPDATE_CODE" !== E) return this.formatData("update function: sync table", "SQL_ERROR_CODE");
                const b = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", g), {lastSyncId: w} = b || {};
                return this.formatData({
                    lastSyncId: w
                }, "UPDATE_CODE");
            }), this.isHasEventsAndUpdate = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = e._id, n = yield this.all("SELECT * FROM Events WHERE calendar_id = " + t);
                for (var r = 0; r < n.length; r++) {
                    const t = a.tableIdFormat(n[r]._id, "event"), i = a.localIdFormat("pc", "event"), o = n[r];
                    try {
                        o.reminderList = JSON.parse(o.reminderList);
                    } catch (e) {
                        o.reminderList = [];
                    }
                    const s = a.getSyncOperItem(e, o, "update", i, t);
                    yield this.update(l.SYNCDBNAME, s, "tableId");
                }
            }), this.setCalendarVisible = e => r.__awaiter(this, void 0, void 0, function*() {
                const {calendarId: t, visible: n} = e, r = yield this.update(l.CALENDARDBNAME, {
                    _id: t,
                    visible: n
                }, "_id"), {code: i} = r;
                if ("UPDATE_CODE" !== i) return this.formatData("update function: events table", "SQL_ERROR_CODE");
                const o = yield this.find(l.CALENDARDBNAME, t, "_id"), s = a.localIdFormat("pc", "calendar"), c = a.tableIdFormat(t, "calendar"), u = a.getSyncCalendarItem(o, "update", s, c);
                global.__log.info("setCalendarVisible" + JSON.stringify(u));
                const d = yield this.update(l.SYNCDBNAME, u, "tableId"), {code: h} = d;
                if ("UPDATE_CODE" !== h) return this.formatData("update function: sync table", "SQL_ERROR_CODE");
                const p = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", c), {lastSyncId: f} = p || {};
                return this.formatData({
                    lastSyncId: f
                }, "UPDATE_CODE");
            }), this.deleteCalendars = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.find(l.CALENDARDBNAME, e, "_id");
                if (!t) return this.formatData("delete function: calendar table", "SQL_ERROR_CODE");
                let n = {};
                const {isModified: r} = t, i = a.tableIdFormat(e, "calendar");
                if (0 === r) {
                    const e = {
                        tableId: i,
                        status: 3,
                        localStatus: 3,
                        localVersion: "" + (new Date).getTime()
                    }, t = yield this.update(l.SYNCDBNAME, e, "tableId"), {code: r} = t;
                    if ("UPDATE_CODE" !== r) return this.formatData("delete function: sync table", "SQL_ERROR_CODE");
                    const {lastSyncId: o} = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", i);
                    n = this.formatData({
                        lastSyncId: o
                    }, "UPDATE_CODE");
                } else n = yield this.delete(l.SYNCDBNAME, i, "tableId");
                return yield this.delete(l.CALENDARDBNAME, e, "_id"), yield this.deleteEventByCalendarId(e), 
                n;
            }), this.queryColors = (e = "Local account") => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT * FROM Colors WHERE account_name = " + e);
            }), this.getEventsByCalendarId = e => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT * FROM Events WHERE calendar_id = " + e);
            }), this.queryEventsByTitle = e => r.__awaiter(this, void 0, void 0, function*() {
                const {keyWord: t, rStart: n, rEnd: r} = e || {};
                if (!n || !r || !t) return [];
                return yield this.all(`SELECT CAST(S.guid AS text) AS guid,\n        E._id AS eventId, E._id AS id, E.dtStart AS originalDtStart, E.dtEnd AS originalDtEnd,\n        E.title, E.lunarEvent, E.BirthdayState, E.birthLeapMonth, E.birthFebAddDays,\n        E.BirthdayAlertState, E.isShowLunar, E.timezone, E.allDay, E.hasAlarm,\n        E.description, E.rule, E.duration, E.reminderList, E.reminderAlertType,\n        E.location, E.locationDetail, E.eventTimezone, E.noteGuid, E.noteType,\n        C._id AS calendarId, C.color AS calendarColor, C.accountName, C.accountType,\n        C.displayName, C.ownerAccount, C.visible, C.colorIndex,\n        I.begin AS dtStart, I.end AS dtEnd FROM Events AS E\n        LEFT JOIN Calendar AS C ON E.calendar_id = C._id\n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId\n        WHERE end>=${n} AND begin<=${r} AND C.visible = 1 AND (E.title like '%${t}%' OR E.description like '%${t}%')\n        ORDER BY I.begin`);
            }), this.queryEventsByIdAndTime = e => r.__awaiter(this, void 0, void 0, function*() {
                const {eventId: t, rStart: n} = e || {};
                if (!t || !n) return [];
                const r = yield this.all(`SELECT CAST(S.guid AS text) AS guid,\n        E._id AS eventId, E._id AS id, E.dtStart AS originalDtStart, E.dtEnd AS originalDtEnd,\n        E.title, E.lunarEvent, E.BirthdayState, E.birthLeapMonth, E.birthFebAddDays,\n        E.BirthdayAlertState, E.isShowLunar, E.timezone, E.allDay, E.hasAlarm,\n        E.description, E.rule, E.duration, E.reminderList, E.reminderAlertType,\n        E.location, E.locationDetail, E.eventTimezone, E.noteGuid, E.noteType,\n        C._id AS calendarId, C.color AS calendarColor, C.accountName, C.accountType,\n        C.displayName, C.ownerAccount, C.visible, C.colorIndex,\n        I.begin AS dtStart, I.end AS dtEnd FROM Events AS E\n        LEFT JOIN Calendar AS C ON E.calendar_id = C._id\n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId\n        WHERE eventId=${t} AND begin=${n}`);
                return r && 0 !== r.length ? r : [];
            }), this.queryEventsByTimeRange = e => r.__awaiter(this, void 0, void 0, function*() {
                const {rStart: t, rEnd: n} = e || {};
                if (!t || !n) return [];
                return yield this.all(`SELECT CAST(S.guid AS text) AS guid,\n        E._id AS eventId, E._id AS id, E.dtStart AS originalDtStart, E.dtEnd AS originalDtEnd,\n        E.title, E.lunarEvent, E.BirthdayState, E.birthLeapMonth, E.birthFebAddDays,\n        E.BirthdayAlertState, E.isShowLunar, E.timezone, E.allDay, E.hasAlarm,\n        E.description, E.rule, E.duration, E.reminderList, E.reminderAlertType,\n        E.location, E.locationDetail, E.eventTimezone, E.noteGuid, E.noteType,\n        C._id AS calendarId, C.color AS calendarColor, C.accountName, C.accountType,\n        C.displayName, C.ownerAccount, C.visible, C.colorIndex,\n        I.begin AS dtStart, I.end AS dtEnd FROM Events AS E\n        LEFT JOIN Calendar AS C ON E.calendar_id = C._id\n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId\n        WHERE end>=${t} AND begin<=${n}  AND C.visible = 1\n        ORDER BY I.startDay, E.allDay DESC, I.begin, I.end`);
            }), this.queryVivoDaysMatter = e => r.__awaiter(this, void 0, void 0, function*() {
                const {rStart: t, rEnd: n} = e || {};
                if (!t || !n) return [];
                return yield this.all(`SELECT CAST(S.guid AS text) AS guid,\n        E._id AS eventId, E._id AS id, E.dtStart AS originalDtStart, E.dtEnd AS originalDtEnd,\n        E.title, E.lunarEvent, E.BirthdayState, E.birthLeapMonth, E.birthFebAddDays,\n        E.BirthdayAlertState, E.isShowLunar, E.timezone, E.allDay, E.hasAlarm,\n        E.description, E.rule, E.duration, E.reminderList, E.reminderAlertType,\n        E.location, E.locationDetail, E.eventTimezone, E.noteGuid, E.noteType,\n        C._id AS calendarId, C.color AS calendarColor, C.accountName, C.accountType,\n        C.displayName, C.ownerAccount, C.visible, C.colorIndex,\n        I.begin AS dtStart, I.end AS dtEnd FROM Events AS E\n        LEFT JOIN Calendar AS C ON E.calendar_id = C._id\n        LEFT JOIN Sync AS S ON E._id||'_event' = S.tableId\n        WHERE end>=${t} AND begin<=${n} AND C.visible = 1 AND C.accountName = "Vivo Days Matter"\n        ORDER BY I.startDay, E.allDay DESC, I.begin, I.end`);
            }), this.getEventDetail = e => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.getEventsById(e);
            }), this.insertEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                const {calendarId: t, dtStart: n} = e;
                if (!t || !n) return this.formatData("insert events error: params not exist", "SQL_ERROR_CODE");
                const r = yield this.find(l.CALENDARDBNAME, t, "_id");
                let {dtEnd: i} = e;
                if (i || (i = n + 864e5), i < n) return this.formatData("insert events error: params illegal", "SQL_ERROR_CODE");
                const o = yield this.getEventDbOperItem(e, r), s = Object.assign(Object.assign({}, o), {
                    createTime: "" + (new Date).getTime()
                });
                e.extendedProperties && (s.extendedProperties = JSON.stringify(e.extendedProperties) || null), 
                delete s.id, s.synced = 1;
                const c = yield this.insertWithResult(l.EVENTSDBNAME, s);
                e.id = c;
                const u = a.localIdFormat("pc", "event"), d = a.tableIdFormat(c, "event"), h = a.getSyncOperItem(r, e, "insert", u, d), p = yield this.insert(l.SYNCDBNAME, h), {code: f} = p;
                if ("SAVE_CODE" !== f) return this.formatData("insert function: sync table", "SQL_ERROR_CODE");
                const {lastSyncId: _} = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", d);
                return this.formatData({
                    lastSyncId: _,
                    eventLastId: c
                }, "SAVE_CODE");
            }), this.updateEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("updateEvent" + JSON.stringify(e));
                const {eventItem: t} = e, {id: n, calendarId: r, dtStart: i} = t;
                let {dtEnd: o} = t;
                global.__log.info("eventItem" + JSON.stringify(t)), o || (o = i + 864e5);
                const s = yield this.find(l.CALENDARDBNAME, r, "_id");
                if (!n || !s || !i) return this.formatData("update events error: params not exists", "SQL_ERROR_CODE");
                if (o < i) return this.formatData("insert events error: params illegal", "SQL_ERROR_CODE");
                const c = yield this.getEventDbOperItem(t, s), u = Object.assign(Object.assign({}, c), {
                    _id: n,
                    modifyTime: "" + (new Date).getTime()
                });
                u.synced = 2;
                const d = yield this.update(l.EVENTSDBNAME, u, "_id"), {code: h} = d;
                if ("UPDATE_CODE" !== h) return this.formatData("update function: events table", "SQL_ERROR_CODE");
                const p = yield this.find(l.CALENDARDBNAME, r, "_id"), f = a.localIdFormat("pc", "event"), _ = a.tableIdFormat(n, "event"), m = a.getSyncOperItem(p, t, "update", f, _);
                global.__log.info("syncUpdateItem" + JSON.stringify(m));
                const g = yield this.update(l.SYNCDBNAME, m, "tableId");
                global.__log.info("updateSyncRes" + JSON.stringify(g));
                const {code: v} = g;
                if ("UPDATE_CODE" !== v) return this.formatData("update function: sync table", "SQL_ERROR_CODE");
                const y = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", _), E = null == y ? void 0 : y.lastSyncId;
                return this.formatData({
                    lastSyncId: E
                }, "UPDATE_CODE");
            }), this.updateChildEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                const {eventItem: t, originalInstanceTime: n, newEvent: r} = e;
                t.rule = "";
                const {id: i, calendarId: o, dtStart: s} = t;
                if (!(i && o && s && n)) return this.formatData("update child event error: params not exists", "SQL_ERROR_CODE");
                const c = yield this.find(l.CALENDARDBNAME, o, "_id");
                let {dtEnd: u} = t;
                if (u || (u = s + 864e5), u < s) return this.formatData("insert events error: params illegal", "SQL_ERROR_CODE");
                const d = yield this.getGuidByTableId(a.tableIdFormat(i, "event")), h = yield this.getEventDbOperItem(t, c), p = Object.assign(Object.assign({}, h), {
                    createTime: "" + (new Date).getTime(),
                    originalInstanceTime: n,
                    originalSyncId: d
                });
                p.synced = 1;
                const f = yield this.insert(l.EVENTSDBNAME, p), {code: _} = f;
                if ("SAVE_CODE" !== _) return this.formatData("update function: events table", "SQL_ERROR_CODE");
                const {eventLastId: m} = yield this.get("SELECT last_insert_rowid() as eventLastId", {});
                r.id = m, r._id = m;
                const g = a.localIdFormat("pc", "event"), v = a.tableIdFormat(m, "event"), y = a.getSyncOperItem(c, t, "insert", g, v, d, n), E = yield this.insert(l.SYNCDBNAME, y), {code: b} = E;
                if ("SAVE_CODE" !== b) return this.formatData("update function: sync table", "SQL_ERROR_CODE");
                const {lastSyncId: w} = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", v);
                return this.formatData({
                    lastSyncId: w
                }, "UPDATE_CODE");
            }), this.deleteEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                const {eventId: t} = e, n = [];
                return yield this.deleteEventRecursion(t, n), this.formatData({
                    lastSyncId: n
                }, "UPDATE_CODE");
            }), this.deleteEventRecursion = (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                if (!e) return;
                const n = yield this.getDerivativeEventIds(e);
                if (n && n.length > 0) for (let e = 0; e < n.length; e++) yield this.deleteEventRecursion(n[e], t);
                const r = a.tableIdFormat(e, "event"), i = yield this.getEventsById(e), {isModified: o} = i || {};
                if (0 === o) {
                    const n = {
                        status: 3,
                        localVersion: "" + (new Date).getTime(),
                        tableId: r,
                        localStatus: 3,
                        tableList: ""
                    }, i = yield this.update(l.SYNCDBNAME, n, "tableId"), {code: o} = i;
                    if ("UPDATE_CODE" !== o) return;
                    const a = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", r), {lastSyncId: s} = a || {};
                    return s && t.push(s), void (yield this.delete(l.EVENTSDBNAME, e, "_id"));
                }
                return 1 === o ? (yield this.delete(l.EVENTSDBNAME, e, "_id"), void (yield this.delete(l.SYNCDBNAME, r, "tableId"))) : void 0;
            }), this.deleteChildEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                const {eventId: t, originalInstanceTime: n} = e;
                if (!t || !n) return this.formatData("delete child event error: params not exists", "SQL_ERROR_CODE");
                const r = yield this.getEventsById(t), {calendar_id: i, reminderList: o} = r, s = yield this.getGuidByTableId(a.tableIdFormat(t, "event")), c = Object.assign(Object.assign({}, r), {
                    _id: void 0,
                    reminderList: JSON.stringify(o),
                    dirty: 1,
                    eventStatus: 2,
                    originalSyncId: s,
                    originalInstanceTime: n
                });
                c.synced = 1;
                const u = yield this.insert(l.EVENTSDBNAME, c), {code: d} = u;
                if ("SAVE_CODE" !== d) return this.formatData("insert function: events table", "SQL_ERROR_CODE");
                const {eventLastId: h} = yield this.get("SELECT last_insert_rowid() as eventLastId", {}), p = a.localIdFormat("pc", "event"), f = a.tableIdFormat(h, "event"), _ = yield this.find(l.CALENDARDBNAME, i, "_id"), m = a.getSyncOperItem(_, r, "insert", p, f, s, n, !0), g = yield this.insert(l.SYNCDBNAME, m), {code: v} = g;
                if ("SAVE_CODE" !== v) return this.formatData("insert function: sync table", "SQL_ERROR_CODE");
                const {lastSyncId: y} = yield this.get("SELECT _id as lastSyncId FROM Sync WHERE tableId = ?", f);
                return this.formatData({
                    lastSyncId: y
                }, "SAVE_CODE");
            }), this.deleteEventByCalendarId = e => r.__awaiter(this, void 0, void 0, function*() {
                if (!e) return void window._log.error("[Calendar][calendarDao] Failed to delete the schedule, the calendarId is empty.");
                const t = (yield this.all("SELECT * FROM Events WHERE calendar_id = " + e)).map(e => e._id);
                for (let e = 0; e < t.length; e++) yield this.deleteEvent({
                    eventId: t[e]
                });
            }), this.createNoteEvent = e => new Promise(t => {
                s.queueSingleInstance.run(this.createNoteEventInner, e, e => {
                    t(e);
                });
            }), this.createAllEvent = e => new Promise(t => {
                s.queueSingleInstance.run(this.createNoteEventInner2, e, e => {
                    t(e);
                });
            }), this.createNoteEventInner2 = e => r.__awaiter(this, void 0, void 0, function*() {
                if (!e.every(e => {
                    const {calendarId: t, title: n, dtStart: r, dtEnd: i} = e;
                    return t && n && r && i;
                })) return [];
                const t = [];
                try {
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n];
                        const {dtStart: i, calendarId: o} = r;
                        if (!o || !i) return this.formatData("insert events error: params not exist", "SQL_ERROR_CODE");
                        const s = yield this.find(l.CALENDARDBNAME, o, "_id");
                        let {dtEnd: c} = r;
                        if (c || (c = i + 864e5), c < i) return this.formatData("insert events error: params illegal", "SQL_ERROR_CODE");
                        const u = yield this.getEventDbOperItem(r, s), d = Object.assign(Object.assign({}, u), {
                            createTime: "" + (new Date).getTime()
                        });
                        r.extendedProperties && (d.extendedProperties = JSON.stringify(r.extendedProperties) || null), 
                        delete d.id, d.synced = 1;
                        const h = yield this.insertWithResult(l.EVENTSDBNAME, d);
                        r.id = h;
                        const p = a.localIdFormat("pc", "event"), f = a.tableIdFormat(h, "event"), _ = a.getSyncOperItem(s, e[n], "insert", p, f);
                        yield this.insert(l.SYNCDBNAME, _), t.push(h);
                    }
                    return t;
                } catch (e) {
                    return window._log.error("[Calendar][calendarDao] Failed to batch add note calendar"), 
                    t;
                }
            }), this.createNoteEventInner = e => r.__awaiter(this, void 0, void 0, function*() {
                if (!e.every(e => {
                    const {calendarId: t, title: n, dtStart: r, dtEnd: i} = e;
                    return t && n && r && i;
                })) return [];
                const t = [];
                try {
                    for (let n = 0; n < e.length; n++) {
                        const {noteGuid: r, noteType: i} = e[n], o = Object.assign(Object.assign({}, e[n]), {
                            isShowLunar: 0,
                            lunarEvent: !1
                        }), a = yield this.getEventDbOperItem(o), s = Object.assign(Object.assign({}, a), {
                            createTime: "" + (new Date).getTime(),
                            noteGuid: r,
                            noteType: i
                        });
                        s.synced = 1, yield this.insert(l.EVENTSDBNAME, s), t.push(r);
                    }
                    return t;
                } catch (e) {
                    return window._log.error("[Calendar][calendarDao] Failed to batch add note calendar"), 
                    t;
                }
            }), this.updateNoteEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                return new Promise(t => {
                    s.queueSingleInstance.run(this.updateNoteEventInner, e, e => {
                        t(e);
                    });
                });
            }), this.updateNoteEventInner = e => r.__awaiter(this, void 0, void 0, function*() {
                if (!e.every(e => {
                    const {dtStart: t, dtEnd: n, title: r, noteGuid: i} = e;
                    return t && n && r && i;
                })) return [];
                const t = [];
                try {
                    for (let n = 0; n < e.length; n++) {
                        const {noteGuid: r, noteType: i} = e[n], o = yield this.get(`SELECT _id AS eventId FROM ${l.EVENTSDBNAME} WHERE noteGuid = ?`, r), {eventId: a} = o || {};
                        if (a) {
                            const o = Object.assign(Object.assign({}, e[n]), {
                                isShowLunar: 0,
                                lunarEvent: !1
                            }), s = yield this.getEventDbOperItem(o), c = Object.assign(Object.assign({}, s), {
                                _id: a,
                                modifyTime: "" + (new Date).getTime(),
                                noteGuid: r,
                                noteType: i
                            });
                            c.synced = 2;
                            const u = yield this.update(l.EVENTSDBNAME, c, "_id"), {code: d} = u;
                            if ("UPDATE_CODE" !== d) return "updateNodeEvent: update db error";
                            t.push(r);
                        }
                    }
                    return t;
                } catch (e) {
                    return window._log.error("[Calendar][calendarDao] Failed to batch edit note calendar"), 
                    t;
                }
            }), this.deleteNoteEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                return new Promise(t => {
                    s.queueSingleInstance.run(this.deleteNoteEventInner, e, e => {
                        t(e);
                    });
                });
            }), this.deleteNoteEventInner = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = [];
                try {
                    if (!e) {
                        const t = yield this.get(`SELECT * FROM ${l.CALENDARDBNAME} WHERE accountName = ?`, "bbknotes"), {_id: n} = t || {};
                        if (!n) return [];
                        const r = yield this.allWithParams(`SELECT * FROM ${l.EVENTSDBNAME} WHERE calendar_id = ?`, n);
                        if (!r || r.length <= 0) return [];
                        e = r.map(e => e.noteGuid);
                    }
                    for (let n = 0; n < e.length; n++) {
                        const r = yield this.get(`SELECT * FROM ${l.EVENTSDBNAME} WHERE noteGuid = ?`, e[n]), {_id: i} = r || {};
                        i && (yield this.delete(l.EVENTSDBNAME, i, "_id"), t.push(e[n]));
                    }
                    return t;
                } catch (e) {
                    return window._log.error("[Calendar][calendarDao] Failed to batch delete note calendar"), 
                    t;
                }
            }), this.queryNoteEvent = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = e.map(() => "?");
                return yield this.allWithParams(`SELECT * FROM ${l.EVENTSDBNAME} WHERE noteGuid IN (${t.join(",")})`, e);
            }), this.getGuidByTableId = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.get("SELECT CAST(guid AS text) AS guid FROM Sync WHERE tableId = ?", e), {guid: n} = t || {};
                return n ? "" + n : "";
            }), this.getEventIdByGuid = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.find(l.SYNCDBNAME, e, "_id"), {tableId: n} = t || {};
                if (!n) return;
                return parseInt(n);
            }), this.getSyncFields = () => r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT CAST(guid AS text) AS guid, tableId FROM " + l.SYNCDBNAME);
            }), this.getCalendarDbOperItem = () => ({
                isModified: 1,
                sync_events: 1,
                deleted: "0",
                accountName: "Vivo custom",
                accountType: "LOCAL",
                displayName: "",
                calendar_access_level: 700,
                ownerAccount: "Local account",
                maxReminders: 5,
                visible: 1,
                colorIndex: "0",
                color: 0,
                cal_sync10: "" + (new Date).getTime()
            }), this.getEventDbOperItem = (e, t = {}) => r.__awaiter(this, void 0, void 0, function*() {
                const {title: n, calendarId: r, allDay: i, dtStart: o, timezone: s, lunarEvent: l, isShowLunar: c, rule: u, hasAlarm: d, reminderList: h, reminderAlertType: p, location: f, description: _, birthLeapMonth: m, eventStatus: g} = e;
                let {dtEnd: v} = e;
                v || (v = i ? o + 864e5 : o + 36e5);
                const {displayName: y} = t || {};
                let E, b;
                a.isRepeatEvent(e) ? b = a.durationFormat(o, v, i) : E = v;
                let w = 0;
                if ("birthday" === a.displayNameFormat(y)) {
                    const e = new Date(o);
                    1 === e.getMonth() && (w = e.getDate() - 28);
                }
                return {
                    calendar_id: r,
                    isModified: 1,
                    deleted: 0,
                    title: n,
                    dtStart: o,
                    dtEnd: E,
                    originalDtStart: o,
                    originalDtEnd: v,
                    lunarEvent: l ? 1 : 0,
                    BirthdayState: 0,
                    birthLeapMonth: m || 0,
                    birthFebAddDays: w,
                    BirthdayAlertState: 0,
                    isShowLunar: c ? -1 : 0,
                    timezone: s,
                    allDay: !1 === i ? 0 : 1,
                    hasAlarm: d ? 1 : 0,
                    description: _,
                    rule: u,
                    duration: b,
                    reminderList: JSON.stringify(h),
                    reminderAlertType: p,
                    eventStatus: g || 1,
                    dirty: 0,
                    location: f,
                    locationDetail: "",
                    eventTimezone: s,
                    accessLevel: 0,
                    hasExtendedProperties: 0
                };
            }), this.reportingTimeDbExists = () => r.__awaiter(this, void 0, void 0, function*() {
                return this.run("create TABLE IF NOT EXISTS ReportingTime (id INTEGER PRIMARY KEY AUTOINCREMENT, reportTime INTEGER,openId TEXT,reportContent TEXT)", {});
            }), this.getReportingTime = () => r.__awaiter(this, void 0, void 0, function*() {
                yield this.reportingTimeDbExists();
            }), this.queryReportingTimeByOpendId = e => r.__awaiter(this, void 0, void 0, function*() {
                let t = yield this.allWithParams("select * from ReportingTime where openId = ?", e.openId);
                const n = {
                    reportObj: t[0] ? t[0] : "",
                    appInfo: e.appConfig
                };
                return t[0] || (yield this.insert("ReportingTime", {
                    reportTime: (new Date).getTime(),
                    openId: e.openId,
                    reportContent: ""
                })), n;
            }), this.updateReportingTime = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = e.reportObj;
                t.reportTime = (new Date).getTime();
                const n = this.update("ReportingTime", t, "openId");
                return this.formatData({
                    updres: n
                }, "UPDATE_CODE");
            }), this.getEventsById = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.find(l.EVENTSDBNAME, e, "_id"), {reminderList: n} = t || {};
                return n && (t.reminderList = JSON.parse(n)), t;
            }), this.getDerivativeEventIds = e => r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.getGuidByTableId(a.tableIdFormat(e, "event"));
                let n = [];
                return t && (n = yield this.all(`SELECT _id FROM ${l.EVENTSDBNAME} WHERE originalSyncId = ${t} AND eventStatus = 2`)), 
                n.map(e => e._id);
            });
        }
    }
    l.CALENDARDBNAME = "Calendar", l.EVENTSDBNAME = "Events", l.SYNCDBNAME = "Sync";
    const c = new l(o.CALENDAR_DB);
    e.exports = c;
}
