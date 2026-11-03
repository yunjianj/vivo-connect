// analysis/pretty/main.js:117269; webpack module 1540
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53);
    class a extends i.default {
        constructor(e) {
            super(e), this.DBINFO = {
                caldavAccount: "caldavAccount",
                caldavCalendar: "caldavCalendar",
                caldavEvent: "caldavEvent"
            };
        }
        setFrequency(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {_id: t, frequency: n = 900} = e, r = {
                    _id: t,
                    frequency: n
                };
                return yield this.update(this.DBINFO.caldavAccount, r, "_id"), e;
            });
        }
        updateRefreshToken(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {_id: t, account: n = null, source: r = null, authorization: i = null, refresh_token: o = null, syncURL: a = null, frequency: s = null, status: l = null, lastSyncTime: c = null, syncToken: u = null} = e, d = {
                    _id: t,
                    account: n,
                    source: r,
                    authorization: i,
                    refresh_token: o,
                    syncURL: a,
                    frequency: s,
                    status: l,
                    lastSyncTime: c,
                    syncToken: u
                };
                return yield this.update(this.DBINFO.caldavAccount, d, "_id"), e;
            });
        }
        insertAccount(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {account: t = null, source: n = null, authorization: r = null, refresh_token: i = null, syncURL: o = null, frequency: a = null, status: s = null, lastSyncTime: l = null, syncToken: c = null} = e, u = {
                    account: t,
                    source: n,
                    authorization: r,
                    refresh_token: i,
                    syncURL: o,
                    frequency: a,
                    status: s,
                    lastSyncTime: l,
                    syncToken: c
                };
                yield this.insert(this.DBINFO.caldavAccount, u);
                const {_id: d} = yield this.get("SELECT last_insert_rowid() as _id", {}), h = Object.assign({
                    _id: d
                }, u);
                return this.formatData(h, "SAVE_CODE");
            });
        }
        deleteAccount(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {_id: t = null} = e;
                return yield this.delete(this.DBINFO.caldavAccount, t, "_id"), this.formatData({
                    _id: t
                }, "DELETE_CODE");
            });
        }
        getAccountList() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("SELECT _id, account, source, authorization, refresh_token, syncURL, frequency, status, syncToken, lastSyncTime, syncToken FROM " + this.DBINFO.caldavAccount);
            });
        }
        getAccountBySeriesMasterId(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all(`SELECT account_id, c.accountURL FROM ${this.DBINFO.caldavCalendar} c LEFT JOIN ${this.DBINFO.caldavEvent} e ON c.accountURL = e.accountURL WHERE e.eventURL = '${e}'`);
            });
        }
        isLogin(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {account: t, source: n} = e;
                return (yield this.all(`SELECT _id FROM ${this.DBINFO.caldavAccount} WHERE account = '${t}' AND source = '${n}'`)).length > 0;
            });
        }
        getCalendarList(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e ? `WHERE account_id = '${e}'` : "";
                return yield this.all(`SELECT _id, account_id, accountDisplayName, accountDisplayName As displayName, 'caldav' As accountName, accountURL, accountURL As id, source, ctag, color, syncToken, canEdit, visible, synced FROM ${this.DBINFO.caldavCalendar} ${t}`);
            });
        }
        getEventListByCalendar(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all(`SELECT _id, content, accountURL, eventURL, localId, synced FROM ${this.DBINFO.caldavEvent} WHERE accountURL = '${e}'`);
            });
        }
        countEventByAccount(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return (yield this.all(`SELECT e._id FROM ${this.DBINFO.caldavEvent} e LEFT JOIN ${this.DBINFO.caldavCalendar} c ON e.accountURL = c.accountURL WHERE c.account_id = '${e}'`)).length;
            });
        }
        getEventList() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all(`SELECT E.content, E.accountURL, E.eventURL, E.synced, E.localId, C.account_id FROM ${this.DBINFO.caldavEvent} AS E\n        LEFT JOIN ${this.DBINFO.caldavCalendar} AS C ON C.accountURL = E.accountURL \n        LEFT JOIN ${this.DBINFO.caldavAccount} AS A ON A._id = C.account_id\n        `);
            });
        }
        updateCalendar(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.update(this.DBINFO.caldavCalendar, e, "accountURL"), e;
            });
        }
        deleteEvent(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {localId: t = null} = e;
                return yield this.delete(this.DBINFO.caldavEvent, t, "localId"), this.formatData({
                    localId: t
                }, "DELETE_CODE");
            });
        }
        updateEvent(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.update(this.DBINFO.caldavEvent, e, "localId"), e;
            });
        }
        addEvent(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.insert(this.DBINFO.caldavEvent, e), e;
            });
        }
    }
    const s = new a(o.CALENDAR_DB);
    e.exports = s;
}
