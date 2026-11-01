// analysis/pretty/main.js:64354; webpack module 725
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.router = t.RES_CODE = void 0;
    const r = n(0);
    var i;
    !function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.FAILED = 1] = "FAILED", 
        e[e.WEB_CONTENT_NOT_FOUND = 2] = "WEB_CONTENT_NOT_FOUND", e[e.TIME_OUT = 3] = "TIME_OUT", 
        e[e.CONNECT_BUSY = 100] = "CONNECT_BUSY", e[e.NOT_FOUND_IP = 101] = "NOT_FOUND_IP", 
        e[e.PING_FAIL = 102] = "PING_FAIL", e[e.DEVICE_NOT_FOUND = 103] = "DEVICE_NOT_FOUND", 
        e[e.DEVICE_NOT_CONNECTED = 104] = "DEVICE_NOT_CONNECTED", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", 
        e[e.FORBIDDEN = 403] = "FORBIDDEN";
    }(i = t.RES_CODE || (t.RES_CODE = {})), t.router = (e, t, n, o, a) => r.__awaiter(void 0, void 0, void 0, function*() {
        if (global.__log.info(`[vclaw-server][router] requestType: ${t}, pathname: ${n.pathname}`), 
        "http" === t) {
            if ("function" != typeof o[n.pathname]) return global.__log.info(`[vclaw-server][router] ${n.pathname} err: 404 Not Found`), 
            {
                code: i.NOT_FOUND,
                data: "404 Not Found"
            };
            try {
                return yield o[n.pathname](n, null, e);
            } catch (e) {
                return global.__log.info("[vclaw-server][router] http handler err: " + e), {
                    code: i.FAILED,
                    data: e
                };
            }
        } else if ("webSocket" === t) if ("function" == typeof o[n.pathname]) try {
            yield o[n.pathname](n, a);
        } catch (e) {
            return global.__log.info("[vclaw-server][router] webSocket handler err: " + e), 
            {
                code: i.FAILED,
                data: e
            };
        } else null == a || a.close("404 not found"), global.__log.info("[vclaw-server][router] websocket 404 not found");
    });
}
