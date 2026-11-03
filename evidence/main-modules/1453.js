// analysis/pretty/main.js:108124; webpack module 1453
function(e, t, n) {
    "use strict";
    var r = /([!#\$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+)/, i = /([^!#\$%&'\*\+\-\.\^_`\|~0-9A-Za-z])/g, o = new RegExp(r.source + "(?:=(?:" + r.source + "|" + /"((?:\\[\x00-\x7f]|[^\x00-\x08\x0a-\x1f\x7f"\\])*)"/.source + "))?"), a = new RegExp(r.source + "(?: *; *" + o.source + ")*", "g"), s = new RegExp("^" + a.source + "(?: *, *" + a.source + ")*$"), l = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?$/, c = Object.prototype.hasOwnProperty, u = {
        parseHeader: function(e) {
            var t = new d;
            if ("" === e || void 0 === e) return t;
            if (!s.test(e)) throw new SyntaxError("Invalid Sec-WebSocket-Extensions header: " + e);
            return e.match(a).forEach(function(e) {
                var n = e.match(new RegExp(o.source, "g")), r = n.shift(), i = {};
                n.forEach(function(e) {
                    var t, n = e.match(o), r = n[1];
                    t = void 0 !== n[2] ? n[2] : void 0 === n[3] || n[3].replace(/\\/g, ""), l.test(t) && (t = parseFloat(t)), 
                    c.call(i, r) ? (i[r] = [].concat(i[r]), i[r].push(t)) : i[r] = t;
                }, this), t.push(r, i);
            }, this), t;
        },
        serializeParams: function(e, t) {
            var n = [], r = function(e, t) {
                t instanceof Array ? t.forEach(function(t) {
                    r(e, t);
                }) : !0 === t ? n.push(e) : "number" == typeof t ? n.push(e + "=" + t) : i.test(t) ? n.push(e + '="' + t.replace(/"/g, '\\"') + '"') : n.push(e + "=" + t);
            };
            for (var o in t) r(o, t[o]);
            return [ e ].concat(n).join("; ");
        }
    }, d = function() {
        this._byName = {}, this._inOrder = [];
    };
    d.prototype.push = function(e, t) {
        c.call(this._byName, e) || (this._byName[e] = []), this._byName[e].push(t), this._inOrder.push({
            name: e,
            params: t
        });
    }, d.prototype.eachOffer = function(e, t) {
        for (var n = this._inOrder, r = 0, i = n.length; r < i; r++) e.call(t, n[r].name, n[r].params);
    }, d.prototype.byName = function(e) {
        return this._byName[e] || [];
    }, d.prototype.toArray = function() {
        return this._inOrder.slice();
    }, e.exports = u;
}
