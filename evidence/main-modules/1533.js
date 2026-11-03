// analysis/pretty/main.js:116630; webpack module 1533
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tableIdFormat = t.localIdFormat = t.isRepeatEvent = t.getSyncOperItem = t.getSyncCalendarItem = t.durationFormat = t.displayNameFormat = void 0;
    const r = n(1534);
    t.displayNameFormat = e => {
        switch (e) {
          case "Birthday":
            return "birthday";

          case "Vivo Anniversary":
            return "anniversary";

          case "Vivo Days Matter":
            return "daysMatter";

          default:
            return "common";
        }
    }, t.durationFormat = (e, t, n) => {
        if (!e || !t) return "";
        let r = Math.floor((t - e) / 1e3), i = r / 86400;
        return i % 1 == 0 && n ? (i < 0 && (i = 1), `P${i}D`) : (r < 0 && (r = 3600), `P${r}S`);
    }, t.getSyncCalendarItem = (e, t, n, i) => {
        const {displayName: o = ""} = e, a = r.getCanlendarContentHash(o), s = r.getCalendarModuleData(e);
        global.__log.info("getSyncCalendarItem" + JSON.stringify(s));
        const l = {
            tableId: i,
            localVersion: "" + (new Date).getTime(),
            contentHash: a,
            moduleData: s,
            dataClass: 10,
            tableList: ""
        };
        return "insert" === t ? (l.localId = n, l.cloudVersion = 0, l.guid = 0, l.lastUpdate = 0, 
        l.status = 1, l.localStatus = 1) : (l.status = 2, l.localStatus = 2), l;
    }, t.getSyncOperItem = (e, t, n, i, o, a, s, l) => {
        const {displayName: c, color: u, accountName: d, ownerAccount: h} = e, p = r.getContentHash(t);
        global.__log.info("getSyncOperItem =====================" + JSON.stringify(t)), 
        l || 2 != t.eventStatus || (l = !0, !a && t.originalSyncId && (a = t.originalSyncId), 
        !s && t.originalInstanceTime && (s = t.originalInstanceTime));
        const f = r.getModuleData(t, c, d, h, u, a, s, l);
        t.syncUri && "SDK_CALENDAR_COURSE" === t.syncUri && t.localId && (i = t.localId);
        const _ = {
            localId: i,
            tableId: o,
            localVersion: "" + (new Date).getTime(),
            contentHash: p,
            moduleData: f,
            dataClass: 20,
            tableList: ""
        };
        return "insert" === n ? (_.cloudVersion = 0, _.guid = 0, _.lastUpdate = 0, _.status = 1, 
        _.localStatus = 1) : (_.status = 2, _.localStatus = 2), _;
    }, t.isRepeatEvent = e => {
        const {rule: t} = e;
        return !!t;
    }, t.localIdFormat = (e, t) => `${(new Date).getTime()}_${e}_${t}`, t.tableIdFormat = (e, t) => `${e}_${t}`;
}
