// analysis/pretty/main.js:122288; webpack module 1596
function(e, t, n) {
    "use strict";
    const r = n(1597), i = n(1598), o = n(1602).stdout, a = n(1604), s = "win32" === process.platform && !(process.env.TERM || "").toLowerCase().startsWith("xterm"), l = [ "ansi", "ansi", "ansi256", "ansi16m" ], c = new Set([ "gray" ]), u = Object.create(null);
    function d(e, t) {
        t = t || {};
        const n = o ? o.level : 0;
        e.level = void 0 === t.level ? n : t.level, e.enabled = "enabled" in t ? t.enabled : e.level > 0;
    }
    function h(e) {
        if (!this || !(this instanceof h) || this.template) {
            const t = {};
            return d(t, e), t.template = function() {
                const e = [].slice.call(arguments);
                return m.apply(null, [ t.template ].concat(e));
            }, Object.setPrototypeOf(t, h.prototype), Object.setPrototypeOf(t.template, t), 
            t.template.constructor = h, t.template;
        }
        d(this, e);
    }
    s && (i.blue.open = "[94m");
    for (const e of Object.keys(i)) i[e].closeRe = new RegExp(r(i[e].close), "g"), u[e] = {
        get() {
            const t = i[e];
            return f.call(this, this._styles ? this._styles.concat(t) : [ t ], this._empty, e);
        }
    };
    u.visible = {
        get() {
            return f.call(this, this._styles || [], !0, "visible");
        }
    }, i.color.closeRe = new RegExp(r(i.color.close), "g");
    for (const e of Object.keys(i.color.ansi)) c.has(e) || (u[e] = {
        get() {
            const t = this.level;
            return function() {
                const n = i.color[l[t]][e].apply(null, arguments), r = {
                    open: n,
                    close: i.color.close,
                    closeRe: i.color.closeRe
                };
                return f.call(this, this._styles ? this._styles.concat(r) : [ r ], this._empty, e);
            };
        }
    });
    i.bgColor.closeRe = new RegExp(r(i.bgColor.close), "g");
    for (const e of Object.keys(i.bgColor.ansi)) {
        if (c.has(e)) continue;
        u["bg" + e[0].toUpperCase() + e.slice(1)] = {
            get() {
                const t = this.level;
                return function() {
                    const n = i.bgColor[l[t]][e].apply(null, arguments), r = {
                        open: n,
                        close: i.bgColor.close,
                        closeRe: i.bgColor.closeRe
                    };
                    return f.call(this, this._styles ? this._styles.concat(r) : [ r ], this._empty, e);
                };
            }
        };
    }
    const p = Object.defineProperties(() => {}, u);
    function f(e, t, n) {
        const r = function() {
            return _.apply(r, arguments);
        };
        r._styles = e, r._empty = t;
        const i = this;
        return Object.defineProperty(r, "level", {
            enumerable: !0,
            get: () => i.level,
            set(e) {
                i.level = e;
            }
        }), Object.defineProperty(r, "enabled", {
            enumerable: !0,
            get: () => i.enabled,
            set(e) {
                i.enabled = e;
            }
        }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = p, r;
    }
    function _() {
        const e = arguments, t = e.length;
        let n = String(arguments[0]);
        if (0 === t) return "";
        if (t > 1) for (let r = 1; r < t; r++) n += " " + e[r];
        if (!this.enabled || this.level <= 0 || !n) return this._empty ? "" : n;
        const r = i.dim.open;
        s && this.hasGrey && (i.dim.open = "");
        for (const e of this._styles.slice().reverse()) n = e.open + n.replace(e.closeRe, e.open) + e.close, 
        n = n.replace(/\r?\n/g, `${e.close}$&${e.open}`);
        return i.dim.open = r, n;
    }
    function m(e, t) {
        if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
        const n = [].slice.call(arguments, 2), r = [ t.raw[0] ];
        for (let e = 1; e < t.length; e++) r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), 
        r.push(String(t.raw[e]));
        return a(e, r.join(""));
    }
    Object.defineProperties(h.prototype, u), e.exports = h(), e.exports.supportsColor = o, 
    e.exports.default = e.exports;
}
