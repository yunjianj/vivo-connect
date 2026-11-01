// analysis/pretty/main.js:33594; webpack module 299
function(e, t) {
    function n(e) {
        this.dict = e || {};
    }
    n.prototype.set = function(e, t, n) {
        if ("object" != typeof e) {
            void 0 === n && (n = !0);
            var r = this.has(e);
            return !n && r ? this.dict[r] = this.dict[r] + "," + t : this.dict[r || e] = t, 
            r;
        }
        for (var i in e) this.set(i, e[i], t);
    }, n.prototype.has = function(e) {
        for (var t = Object.keys(this.dict), n = (e = e.toLowerCase(), 0); n < t.length; n++) if (t[n].toLowerCase() === e) return t[n];
        return !1;
    }, n.prototype.get = function(e) {
        var t, n;
        e = e.toLowerCase();
        var r = this.dict;
        return Object.keys(r).forEach(function(i) {
            n = i.toLowerCase(), e === n && (t = r[i]);
        }), t;
    }, n.prototype.swap = function(e) {
        var t = this.has(e);
        if (t !== e) {
            if (!t) throw new Error('There is no header than matches "' + e + '"');
            this.dict[e] = this.dict[t], delete this.dict[t];
        }
    }, n.prototype.del = function(e) {
        var t = this.has(e);
        return delete this.dict[t || e];
    }, e.exports = function(e) {
        return new n(e);
    }, e.exports.httpify = function(e, t) {
        var r = new n(t);
        return e.setHeader = function(e, t, n) {
            if (void 0 !== t) return r.set(e, t, n);
        }, e.hasHeader = function(e) {
            return r.has(e);
        }, e.getHeader = function(e) {
            return r.get(e);
        }, e.removeHeader = function(e) {
            return r.del(e);
        }, e.headers = r.dict, r;
    };
}
