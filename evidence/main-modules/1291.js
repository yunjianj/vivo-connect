// analysis/pretty/main.js:99181; webpack module 1291
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c, u, d;
        d = n(79), c = d.assign, u = d.isFunction, i = n(652), o = n(653), a = n(1297), 
        l = n(320), s = n(1298), t = n(29), r = n(218), e.exports.create = function(e, t, n, r) {
            var i, a;
            if (null == e) throw new Error("Root element needs a name.");
            return r = c({}, t, n, r), a = (i = new o(r)).element(e), r.headless || (i.declaration(r), 
            null == r.pubID && null == r.sysID || i.dtd(r)), a;
        }, e.exports.begin = function(e, t, n) {
            var r;
            return u(e) && (t = (r = [ e, t ])[0], n = r[1], e = {}), t ? new a(e, t, n) : new o(e);
        }, e.exports.stringWriter = function(e) {
            return new l(e);
        }, e.exports.streamWriter = function(e, t) {
            return new s(e, t);
        }, e.exports.implementation = new i, e.exports.nodeType = t, e.exports.writerState = r;
    }).call(this);
}
