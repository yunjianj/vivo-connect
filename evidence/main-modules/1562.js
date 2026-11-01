// analysis/pretty/main.js:119960; webpack module 1562
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(1563)), i = n(744), o = n(745);
    let a = !1, s = !1;
    t.default = {
        vClawWssend(e, t) {
            try {
                global.__fm__asmLog.info("[vClaw]：vClawWSLink wssend: " + JSON.stringify(JSON.parse(JSON.stringify(e)))), 
                r.default.sendMessage(e), t(new o.BridgeSuccessResponse({}));
            } catch (e) {
                t(new o.BridgeErrorResponse(e.message));
            }
        },
        vClawWsUpdateMessage() {
            a || (r.default.on("wscallback", e => {
                var t, n;
                try {
                    global.__fm__asmLog.info("[vClaw]：vClawWSLink wscallback: " + JSON.parse(JSON.stringify(e))), 
                    (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.isDestroyed()) ? global.__fm__asmLog.info("[vClaw]: mainWindow isDestroyed") : (global.__fm__asmLog.info("[vClaw]：mainWindow 发送"), 
                    null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(i.VCLAW_MESSAGE_ENUM.VCLAW_WS_UPDATE, e));
                } catch (e) {
                    global.__fm__asmLog.info("[vClaw]：wscallback 出错:" + e);
                }
            }), a = !0);
        },
        vClawWsTaskStatusUpdate(e, t) {
            s || (r.default.on("wsstatus", e => {
                var n;
                global.__fm__asmLog.info("[vClaw]: vClawWsTaskStatusUpdate wsstatus:" + JSON.stringify(e));
                try {
                    null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(i.VCLAW_MESSAGE_ENUM.VCLAW_TASK_STATE_SYNC, e);
                } catch (e) {
                    global.__fm__asmLog.info("wsstatus sync 2 mainWindow error：" + (e.message || e));
                }
                t(e);
            }), s = !0);
        },
        vClawWsEndTask(e, t) {
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
