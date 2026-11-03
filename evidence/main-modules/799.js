// analysis/pretty/main.js:73210; webpack module 799
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setReportSwitchEnabled = t.getReportSwitchEnabled = t.writeReportSwitchConfig = t.readReportSwitchConfig = void 0;
    const r = n(4), i = n(1), o = {
        enabled: !0,
        updatedAt: (new Date).toISOString()
    };
    function a() {
        const e = function() {
            try {
                if ("browser" === process.type) {
                    const {app: e} = n(2);
                    return e.getPath("appData");
                }
                return n(146).app.getPath("appData");
            } catch (e) {
                try {
                    return n(146).app.getPath("appData");
                } catch (e) {
                    const {app: t} = n(2);
                    return t.getPath("appData");
                }
            }
        }();
        return i.join(e, "pcsuite", "vclaw-config", "report-switch.json");
    }
    function s() {
        var e, t, n, i, s, l;
        const c = a();
        try {
            if (!r.existsSync(c)) return null === (t = null === (e = global.__log) || void 0 === e ? void 0 : e.info) || void 0 === t || t.call(e, "[ReportSwitchConfig] 配置文件不存在，返回默认值: " + c), 
            o;
            const a = r.readFileSync(c, "utf-8"), s = JSON.parse(a);
            return null === (i = null === (n = global.__log) || void 0 === n ? void 0 : n.info) || void 0 === i || i.call(n, "[ReportSwitchConfig] 读取配置成功: enabled=" + s.enabled), 
            s;
        } catch (e) {
            return null === (l = null === (s = global.__log) || void 0 === s ? void 0 : s.warn) || void 0 === l || l.call(s, "[ReportSwitchConfig] 读取配置失败，返回默认值: " + e), 
            o;
        }
    }
    function l(e) {
        var t, n, o, s;
        const l = a();
        try {
            const o = i.dirname(l);
            r.existsSync(o) || r.mkdirSync(o, {
                recursive: !0
            });
            const a = {
                enabled: e,
                updatedAt: (new Date).toISOString()
            };
            r.writeFileSync(l, JSON.stringify(a, null, 2), "utf-8"), null === (n = null === (t = global.__log) || void 0 === t ? void 0 : t.info) || void 0 === n || n.call(t, `[ReportSwitchConfig] 写入配置成功: enabled=${e}, path=${l}`);
        } catch (e) {
            null === (s = null === (o = global.__log) || void 0 === o ? void 0 : o.error) || void 0 === s || s.call(o, "[ReportSwitchConfig] 写入配置失败: " + e);
        }
    }
    t.readReportSwitchConfig = s, t.writeReportSwitchConfig = l, t.getReportSwitchEnabled = function() {
        return s().enabled;
    }, t.setReportSwitchEnabled = function(e) {
        l(e);
    };
}
