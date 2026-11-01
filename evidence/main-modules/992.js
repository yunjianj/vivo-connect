// analysis/pretty/main.js:81509; webpack module 992
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(410));
    class i extends r.default {
        constructor(e) {
            if (super(), this.getSysEnv.isWeb) this.log = console; else {
                const t = n(76);
                this.log = new t(e).getExpandLog();
            }
        }
    }
    t.default = i;
}
