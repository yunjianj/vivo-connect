// analysis/pretty/main.js:74934; webpack module 824
function(e, t, n) {
    var r, i, o, a, s, l, c, u;
    e.exports = (u = n(16), n(183), n(389), i = (r = u).x64, o = i.Word, a = i.WordArray, 
    s = r.algo, l = s.SHA512, c = s.SHA384 = l.extend({
        _doReset: function() {
            this._hash = new a.init([ new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428) ]);
        },
        _doFinalize: function() {
            var e = l._doFinalize.call(this);
            return e.sigBytes -= 16, e;
        }
    }), r.SHA384 = l._createHelper(c), r.HmacSHA384 = l._createHmacHelper(c), u.SHA384);
}
