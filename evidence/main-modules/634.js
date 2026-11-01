// analysis/pretty/main.js:58114; webpack module 634
function(e, t, n) {
    var r = n(44), i = n(5);
    function o(e) {
        var t, n, o, a, c, u, d, h, p, f = [ "([^%]*)", "%", "(['\\-+ #0]*?)", "([1-9]\\d*)?", "(\\.([1-9]\\d*))?", "[lhjztL]*?", "([diouxXfFeEgGaAcCsSp%jr])" ].join(""), _ = new RegExp(f), m = Array.prototype.slice.call(arguments, 1), g = "", v = 1;
        for (r.equal("string", typeof e); null !== (p = _.exec(e)); ) if (g += p[1], e = e.substring(p[0].length), 
        t = p[2] || "", n = p[3] || 0, o = p[4] || "", c = !1, d = !1, u = " ", "%" != (a = p[6])) {
            if (0 === m.length) throw new Error("too few args to sprintf");
            if (h = m.shift(), v++, t.match(/[\' #]/)) throw new Error("unsupported flags: " + t);
            if (o.length > 0) throw new Error("non-zero precision not supported");
            switch (t.match(/-/) && (c = !0), t.match(/0/) && (u = "0"), t.match(/\+/) && (d = !0), 
            a) {
              case "s":
                if (null == h) throw new Error("argument " + v + ": attempted to print undefined or null as a string");
                g += s(u, n, c, h.toString());
                break;

              case "d":
                h = Math.floor(h);

              case "f":
                g += (d = d && h > 0 ? "+" : "") + s(u, n, c, h.toString());
                break;

              case "x":
                g += s(u, n, c, h.toString(16));
                break;

              case "j":
                0 === n && (n = 10), g += i.inspect(h, !1, n);
                break;

              case "r":
                g += l(h);
                break;

              default:
                throw new Error("unsupported conversion: " + a);
            }
        } else g += "%";
        return g += e;
    }
    function a(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return e.write(o.apply(this, t));
    }
    function s(e, t, n, r) {
        for (var i = r; i.length < t; ) n ? i += e : i = e + i;
        return i;
    }
    function l(e) {
        var t;
        if (!(e instanceof Error)) throw new Error(o("invalid type for %%r: %j", e));
        if (t = "EXCEPTION: " + e.constructor.name + ": " + e.stack, e.cause && "function" == typeof e.cause) {
            var n = e.cause();
            n && (t += "\nCaused by: " + l(n));
        }
        return t;
    }
    t.sprintf = o, t.printf = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift(process.stdout), a.apply(null, e);
    }, t.fprintf = a;
}
