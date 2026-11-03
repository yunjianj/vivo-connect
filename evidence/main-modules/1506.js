// analysis/pretty/main.js:113062; webpack module 1506
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initBridgeListener = t.eventHandles = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(1507)), a = r.__importDefault(n(1513)), s = r.__importDefault(n(1531)), l = r.__importDefault(n(1541)), c = r.__importDefault(n(1542)), u = r.__importDefault(n(1546)), d = n(1553), h = n(1676);
    t.eventHandles = {
        common: d,
        album: o.default,
        calendar: s.default,
        note: a.default,
        notification: l.default,
        mac: h,
        vtalk: c.default,
        record: u.default
    }, t.initBridgeListener = function() {
        console.log("global.__log", global.__log), global.__log.info("初始化bridge"), i.ipcMain.on("postMessage", (e, n) => r.__awaiter(this, void 0, void 0, function*() {
            if (!n.bridgeName) return void console.warn("参数不合法");
            const r = n.bridgeName.split("/");
            if (1 === r.length && r.unshift("common"), t.eventHandles[r[0]]) if (t.eventHandles[r[0]][r[1]]) {
                "runDataBaseMethod" !== r[1] && global.__log.info(`postmessage: + ${r[0]}  ${r[1]}`);
                try {
                    const i = (t, r) => {
                        global.__mainWindow && (e.sender.isDestroyed() ? global.__log.error(`sender is destroyed ${n.bridgeName}, return`) : e.sender.send("receiveMessage", {
                            bridgeName: n.bridgeName,
                            cid: n.cid,
                            isListener: n.isListener,
                            data: t,
                            error: r
                        }));
                    };
                    t.eventHandles[r[0]][r[1]](n.data, i, n.windowCtx);
                } catch (t) {
                    global.__log.error("出错了:", t), e.sender.send("receiveMessage", {
                        bridgeName: n.bridgeName,
                        error: {
                            code: -1,
                            error: t,
                            message: t.message
                        }
                    });
                }
            } else console.warn(`${r[0]}下无${r[1]}对应的处理函数, 请补充`); else console.warn(`无${r[0]}对应的处理模块, 请补充`);
        }));
    };
}
