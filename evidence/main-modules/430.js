// analysis/pretty/main.js:43986; webpack module 430
function(e, t, n) {
    "use strict";
    const {LEVEL: r} = n(27), i = n(273), o = n(1049), a = n(203)("winston:create-logger");
    e.exports = function(e = {}) {
        e.levels = e.levels || i.npm.levels;
        class t extends o {
            constructor(e) {
                super(e);
            }
        }
        const n = new t(e);
        return Object.keys(e.levels).forEach(function(e) {
            a('Define prototype method for "%s"', e), "log" !== e ? (t.prototype[e] = function(...t) {
                const i = this || n;
                if (1 === t.length) {
                    const [o] = t, a = o && o.message && o || {
                        message: o
                    };
                    return a.level = a[r] = e, i._addDefaultMeta(a), i.write(a), this || n;
                }
                return 0 === t.length ? (i.log(e, ""), i) : i.log(e, ...t);
            }, t.prototype[function(e) {
                return "is" + e.charAt(0).toUpperCase() + e.slice(1) + "Enabled";
            }(e)] = function() {
                return (this || n).isLevelEnabled(e);
            }) : console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
        }), n;
    };
}
