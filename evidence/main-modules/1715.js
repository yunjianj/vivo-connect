// analysis/pretty/main.js:131826; webpack module 1715
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = class {
        constructor(e, t) {
            if (this.log = null, !process.env.IS_WEB) {
                const {initLog: r} = n(201);
                this.log = r(e, t);
            }
        }
        msgFormatter(e) {
            return e.map(e => "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e)).join(" ");
        }
        error(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.error(this.msgFormatter(e));
        }
        warn(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.warn(this.msgFormatter(e));
        }
        help(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.help(this.msgFormatter(e));
        }
        data(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.data(this.msgFormatter(e));
        }
        info(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.info(this.msgFormatter(e));
        }
        debug(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.debug(this.msgFormatter(e));
        }
        prompt(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.prompt(this.msgFormatter(e));
        }
        http(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.http(this.msgFormatter(e));
        }
        verbose(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.verbose(this.msgFormatter(e));
        }
        input(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.input(this.msgFormatter(e));
        }
        silly(...e) {
            var t;
            null === (t = this.log) || void 0 === t || t.silly(this.msgFormatter(e));
        }
    };
}
