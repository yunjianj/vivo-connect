// analysis/pretty/main.js:103810; webpack module 1413
function(e, t) {
    function n() {
        "function" != typeof this.addEventListener && (this._listeners = {}, this.addEventListener = r, 
        this.removeEventListener = i, this.dispatchEvent = o);
    }
    function r(e, t) {
        var n, r, i;
        if (e && t) {
            for (void 0 === (n = this._listeners[e]) && (this._listeners[e] = n = []), r = 0; i = n[r]; r++) if (i === t) return;
            n.push(t);
        }
    }
    function i(e, t) {
        var n, r, i;
        if (e && t && void 0 !== (n = this._listeners[e])) {
            for (r = 0; i = n[r]; r++) if (i === t) {
                n.splice(r, 1);
                break;
            }
            0 === n.length && delete this._listeners[e];
        }
    }
    function o(e) {
        var t, n, r, i, o, a = !1;
        if (!e || "string" != typeof e.type) throw new Error("`event` must have a valid `type` property");
        e._yaeti && (e.target = this, e.cancelable = !0);
        try {
            e.stopImmediatePropagation = function() {
                a = !0;
            };
        } catch (e) {}
        for (t = e.type, n = this._listeners[t] || [], "function" == typeof (r = this["on" + t]) && r.call(this, e), 
        i = 0; (o = n[i]) && !a; i++) o.call(this, e);
        return !e.defaultPrevented;
    }
    e.exports = n, Object.defineProperties(n.prototype, {
        listeners: {
            get: function() {
                return this._listeners;
            }
        }
    });
}
