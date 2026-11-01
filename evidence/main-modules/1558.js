// analysis/pretty/main.js:119580; webpack module 1558
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(1559)), i = n(742), o = n(743);
    let a = !1, s = !1;
    t.default = {
        aiSearchWssend(e, t) {
            try {
                global.__fm__asmLog.info("[aiSearch]：aiSearchWSLink wssend: " + JSON.stringify(JSON.parse(JSON.stringify(e)))), 
                r.default.sendMessage(e), t(new o.BridgeSuccessResponse({}));
            } catch (e) {
                t(new o.BridgeErrorResponse(e.message));
            }
        },
        aiSearchWsUpdateMessage() {
            a || (r.default.on("wscallback", e => {
                var t, n;
                try {
                    global.__fm__asmLog.info("[aiSearch]：aiSearchWSLink wscallback: " + JSON.parse(JSON.stringify(e))), 
                    (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isDestroyed()) ? global.__fm__asmLog.info("[aiSearch]: mainWindow isDestroyed") : (global.__fm__asmLog.info("[aiSearch]：mainWindow 发送"), 
                    null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(i.AI_SEARCH_MESSAGE_ENUM.AI_SEARCH_WS_UPDATE, e));
                } catch (e) {
                    global.__fm__asmLog.info("[aiSearch]：wscallback 出错:" + e);
                }
            }), a = !0);
        },
        aiSearchWsTaskStatusUpdate(e, t) {
            s || (r.default.on("wsstatus", e => {
                var n;
                global.__fm__asmLog.info("[aiSearch]: aiSearchWsTaskStatusUpdate wsstatus:" + JSON.stringify(e));
                try {
                    null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(i.AI_SEARCH_MESSAGE_ENUM.AI_SEARCH_TASK_STATE_SYNC, e);
                } catch (e) {
                    global.__fm__asmLog.info("wsstatus sync 2 mainWindow error：" + (e.message || e));
                }
                t(e);
            }), s = !0);
        },
        aiSearchWsEndTask(e, t) {
            try {
                const {requestId: n, sid: i} = e || {}, a = {
                    main_type: "cmd",
                    subs_type: "stop",
                    sid: i,
                    trace_id: n,
                    request_id: n,
                    data: {
                        text: ""
                    }
                };
                r.default.sendMessage(a), r.default.clearRequestTask(n), t(new o.BridgeSuccessResponse({}));
            } catch (e) {
                t(new o.BridgeErrorResponse(e.message));
            }
        }
    };
}
