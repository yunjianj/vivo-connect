// analysis/pretty/main.js:132936; webpack module 1734
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkDiskAccess = t.requestPermission = t.isMacPc = void 0;
    const r = n(0), i = r.__importStar(n(4)), o = r.__importStar(n(8)), a = n(10), s = n(683), l = n(1735);
    t.isMacPc = "darwin" == process.platform && !process.env.IS_WEB, t.requestPermission = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!t.isMacPc) return;
            const {type: n} = e, {pane: r, section: i} = l.AUTH_INFO_MAP[n];
            return status, s.openSystemPreferences(r, i);
        });
    }, t.checkDiskAccess = function(e) {
        return new Promise(t => {
            a.exec("csrutil status", (n, r) => {
                if (n) global.__log.info("csrutil status error ========>" + n), t(!1); else {
                    const n = r.split(/[(\r\n)\r\n]+/);
                    e < 5 && global.__log.info("csrutil status list[0] ========>" + n[0]);
                    if ("enabled" == (n[0] && n[0].indexOf("enabled") > -1 ? "enabled" : "disabled")) {
                        const n = o.homedir() + "/Library/Application Support/com.apple.TCC/TCC.db";
                        try {
                            i.open(n, "r", (n, r) => {
                                n ? (e < 5 && global.__log.info("无法打开文件"), t(!1)) : (e < 5 && global.__log.info("文件已打开，文件描述符为: " + r), 
                                i.closeSync(r), t(!0));
                            });
                        } catch (e) {
                            global.__log.info("accessSync error========>" + n), t(!1);
                        }
                    } else t(!0);
                }
            });
        });
    };
}
