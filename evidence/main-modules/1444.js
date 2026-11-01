// analysis/pretty/main.js:107595; webpack module 1444
function(e, t, n) {
    var r = n(149)("regedit"), i = e.exports.WIN_EOL = "\r\n";
    e.exports.encode = function(e) {
        return escape(e) + i;
    }, e.exports.writeArrayToStream = function(t, n, o) {
        var a = t.pop();
        function s(t) {
            if (void 0 !== t) {
                var i = e.exports.encode(t);
                return r(i), n.write(i);
            }
            return !1;
        }
        for (;s(a); ) a = t.pop();
        0 !== t.length ? n.once("drain", function() {
            e.exports.writeArrayToStream(t, n, o);
        }) : n.write(i, o);
    }, e.exports.vbsOutputTransform = function(e, t, n) {
        try {
            e = "buffer" === t ? e.toString() : e.toString(t), this.push(JSON.parse(e));
        } catch (e) {
            return n(e);
        }
        return n();
    };
}
