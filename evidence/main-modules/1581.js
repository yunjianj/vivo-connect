// analysis/pretty/main.js:121897; webpack module 1581
function(e, t, n) {
    "use strict";
    var r = n(4), i = n(1), o = n(749), a = n(1593);
    function s(e, t) {
        var n = a(e, t);
        if (n in o) {
            var r = o[n].calculate(e, t);
            if (!1 !== r) return r.type = n, r;
        }
        throw new TypeError("unsupported file type: " + n + " (file: " + t + ")");
    }
    e.exports = function(e, t) {
        if (Buffer.isBuffer(e)) return s(e);
        if ("string" != typeof e) throw new TypeError("invalid invocation");
        var n = i.resolve(e);
        if ("function" != typeof t) return s(function(e) {
            var t = r.openSync(e, "r"), n = r.fstatSync(t).size, i = Math.min(n, 524288), o = Buffer.alloc(i);
            return r.readSync(t, o, 0, i, 0), r.closeSync(t), o;
        }(n), n);
        !function(e, t) {
            r.open(e, "r", function(n, i) {
                if (n) return t(n);
                r.fstat(i, function(n, o) {
                    if (n) return t(n);
                    var a = o.size;
                    if (a <= 0) return t(new Error("File size is not greater than 0 —— " + e));
                    var s = Math.min(a, 524288), l = Buffer.alloc(s);
                    r.read(i, l, 0, s, 0, function(e) {
                        if (e) return t(e);
                        r.close(i, function(e) {
                            t(e, l);
                        });
                    });
                });
            });
        }(n, function(e, r) {
            if (e) return t(e);
            var i;
            try {
                i = s(r, n);
            } catch (t) {
                e = t;
            }
            t(e, i);
        });
    }, e.exports.types = Object.keys(o);
}
