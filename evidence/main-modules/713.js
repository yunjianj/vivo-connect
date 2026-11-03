// analysis/pretty/main.js:63585; webpack module 713
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.router = t.RES_CODE = void 0;
    const r = n(0), i = n(239);
    var o;
    !function(e) {
        e.SUCCESS = "000000", e.NOT_FOUND = "404", e.FAILED = "000001", e.WEB_CONTENT_NOT_FOUND = "000002", 
        e.TIME_OUT = "000003", e.UNAUTHORIZED = "401", e.CONNECT_BUSY = "000100", e.NOT_FOUND_IP = "000101", 
        e.PING_FAIL = "000102", e.DEVICE_NOT_FOUND = "000103", e.DEVICE_NOT_CONNECTED = "000104";
    }(o = t.RES_CODE || (t.RES_CODE = {}));
    const a = [ i.PATHNAME_LIST.bleQueryAll, i.PATHNAME_LIST.networkQueryAll, i.PATHNAME_LIST.batchBuryPoint ];
    t.router = (e, t, n, i, s) => r.__awaiter(void 0, void 0, void 0, function*() {
        if (a.includes(n.pathname) || global.__log.info(`[server-9199][router] requestType: ${t}, params: ${JSON.stringify(n)}, ws: ${!!s}`), 
        "http" === t) {
            if ("function" != typeof i[n.pathname]) return global.__log.info(`[server-9199][router] ${n.pathname} err: 404 Not Found`), 
            {
                code: o.NOT_FOUND,
                data: "404 Not Found"
            };
            try {
                return yield i[n.pathname](n, null, e);
            } catch (e) {
                return global.__log.info("[server-9199][router] http handler err: " + e), {
                    code: o.FAILED,
                    data: e
                };
            }
        } else if ("webSocket" === t) if ("function" == typeof i[n.pathname]) try {
            yield i[n.pathname](n, s);
        } catch (e) {
            return global.__log.info("[server-9199][router] webSocket handler err: " + e), {
                code: o.FAILED,
                data: e
            };
        } else try {
            yield i.applicationManangerHandle(n, s);
        } catch (e) {
            null == s || s.close("404 not found"), global.__log.info("[server-9199][router] websocket 404 not found");
        }
    });
}
