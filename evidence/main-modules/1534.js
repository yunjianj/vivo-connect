// analysis/pretty/main.js:116689; webpack module 1534
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.durationFormat = t.toZoneTime = t.getStartTime = t.getCalendarModuleData = t.getModuleData = t.getCanlendarContentHash = t.getContentHash = void 0;
    const r = n(0).__importDefault(n(1535)), i = n(1538);
    t.getContentHash = e => {
        const n = Object.assign({}, e), i = JSON.parse(t.getModuleData(n, "", "", "", 0));
        let {title: a, description: s, dtStart: l, allDay: c, dtEnd: u, rule: d, duration: h, reminderAlertType: p, hasAlarm: f, location: _, lunarEvent: m, reminderList: g} = i;
        a = a || null, s = s || null, c = c ? 1 : 0, m && d && (l = o(l, c), u = o(u, c)), 
        d ? (u = null, c && !h && (h = "P1D")) : (d = null, h = null), f = f ? 1 : 0, _ = _ || null, 
        m = m ? 2 : 0;
        let v = "";
        f && (g = g.sort((e, t) => e.minutes - t.minutes), v = g.reduce((e, t) => `${e}${t.minutes}${t.method}`, ""));
        const y = `${a}${s}${l}${c}${u}${d}${h}${p}${f ? 1 : 0}${_}${m ? 2 : 0}${v}`;
        return r.default(y);
    }, t.getCanlendarContentHash = e => r.default(e), t.getModuleData = (e, n, r, i, o, a, s, l, c) => {
        const u = (new Date).getTime();
        let d = e.duration || "";
        e.rule ? (d || (d = e.allDay ? t.durationFormat(e.dtStart, e.dtEnd || e.dtStart + 864e5, !!e.allDay) : t.durationFormat(e.dtStart, e.dtEnd || e.dtStart + 36e5)), 
        e.dtEnd = void 0) : e.dtEnd = e.dtEnd || new Date(e.dtStart).getTime() + 864e5 - 1;
        let h = 0;
        if ("生日" == n) {
            new Date(e.dtStart).getMonth() + 1 == 2 && (h = 1);
        }
        const p = {
            calendarId: e.calendarId,
            title: e.title || "",
            displayName: n,
            accountName: r || "Local account",
            accountType: "LOCAL",
            ownerAccout: i || "Local account",
            color: "" + o,
            visible: "0" == e.visible ? "0" : "1",
            eventStatus: l ? 2 : 1,
            originalInstanceTime: s || 0,
            originalSyncId: a ? "" + a : 0,
            dirty: l ? "1" : "0",
            location: e.location || "",
            locationDetail: "",
            description: e.description || "",
            lunarEvent: !!e.lunarEvent,
            birthFebAddDays: h,
            birthLeapMonth: e.birthLeapMonth || 0,
            isShowLunar: e.isShowLunar ? -1 : 0,
            timezone: e.timezone || "Asia/Shanghai",
            allDay: !!e.allDay,
            rule: e.rule || "",
            duration: d,
            originalDtStart: e.originalDtStart || u,
            dtStart: e.dtStart || u,
            originalDtEnd: e.originalDtEnd || u,
            dtEnd: e.dtEnd,
            reminderAlertType: e.reminderAlertType || 2,
            hasAlarm: e.hasAlarm ? 1 : 0,
            reminderList: e.reminderList || [],
            sync_data8: "0",
            key_calendar_ext_properties: c
        }, f = Object.assign({}, p);
        return e.extendedProperties && (f.extendedProperties = e.extendedProperties), f.location || delete f.location, 
        f.locationDetail || delete f.locationDetail, f.description || delete f.description, 
        f.originalSyncId || delete f.originalSyncId, f.key_calendar_ext_properties || delete f.key_calendar_ext_properties, 
        s && l && (f.dtStart = s, f.originalDtStart = s, f.originalDtEnd = f.dtEnd, delete f.rule, 
        delete f.duration, delete f.reminderList, f.reminderAlertType = 0, f.hasAlarm = 0), 
        f.dtStart = Date.parse(new Date(f.dtStart).toString()), JSON.stringify(f);
    }, t.getCalendarModuleData = (e, t) => {
        const n = {
            accountName: e.accountName || "Vivo custom",
            accountType: e.accountType || "LOCAL",
            displayName: e.displayName,
            color: "" + e.color || "-8476161",
            colorIndex: e.colorIndex || "1",
            visible: 0 == e.visible ? "0" : "1",
            ownerAccout: e.ownerAccout || e.ownerAccount || "Local account",
            cal_sync10: e.cal_sync10 || "0",
            colorList: [ {
                color: -8476161,
                colorIndex: 1
            }, {
                color: -7566871,
                colorIndex: 2
            }, {
                color: -8660519,
                colorIndex: 3
            }, {
                color: -5773462,
                colorIndex: 4
            }, {
                color: -604328,
                colorIndex: 5
            }, {
                color: -5212074,
                colorIndex: 6
            }, {
                color: -415335,
                colorIndex: 7
            }, {
                color: -1159088,
                colorIndex: 8
            } ]
        };
        return "Course account" === e.accountName && t && "web" === t && (n._id = e._id ? e._id : null, 
        n.key_calendar_ext_properties = e.key_calendar_ext_properties ? e.key_calendar_ext_properties : {}), 
        JSON.stringify(n);
    }, t.getStartTime = e => {
        const t = new Date(e).toISOString().slice(0, 10) + " 00:00:00";
        return new Date(t).getTime();
    }, t.toZoneTime = (e, t) => {
        let n = e;
        if (t.includes("+")) {
            const r = t.split("+")[1].split(":")[0];
            n = e - 36e5 * Number(r) + 288e5;
        } else {
            const r = t.split("-")[1].split(":")[0];
            n = e - 36e5 * Number(r);
        }
        const r = new Date(n).toISOString();
        return `${r.slice(0, 10)} ${r.slice(11, 19)}`;
    };
    const o = (e, t) => {
        const n = new Date(e), r = a(n), i = s(n);
        return new Date(`${r}T${i}`).getTime();
    }, a = e => {
        const t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), o = i.calendar.solar2lunar(t, n, r);
        let {lYear: a, lMonth: s, lDay: l} = o;
        s = s < 10 ? "0" + s : s, l = l < 10 ? "0" + l : l;
        return `${a}-${s}-${l}`;
    }, s = e => e.toTimeString().slice(0, 8);
    t.durationFormat = (e, t, n) => {
        if (!e || !t) return "";
        let r = Math.floor((t - e) / 1e3), i = r / 86400;
        return i % 1 == 0 && n ? (i < 0 && (i = 1), `P${i}D`) : (r < 0 && (r = 3600), `P${r}S`);
    };
}
