// analysis/pretty/main.js:96960; webpack module 1262
function(e, t, n) {
    var r = n(7);
    function i(e, t, n) {
        return r.createHmac(n, e).update(t).digest("base64");
    }
    function o(e) {
        return encodeURIComponent(e).replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27");
    }
    function a(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
    }
    function s(e, t, n) {
        var r = function(e) {
            var t, n, r = [];
            for (t in e) if (n = e[t], Array.isArray(n)) for (var i = 0; i < n.length; i++) r.push([ t, n[i] ]); else if ("object" == typeof n) for (var o in n) r.push([ t + "[" + o + "]", n[o] ]); else r.push([ t, n ]);
            return r;
        }(n).map(function(e) {
            return [ o(e[0]), o(e[1] || "") ];
        }).sort(function(e, t) {
            return a(e[0], t[0]) || a(e[1], t[1]);
        }).map(function(e) {
            return e.join("=");
        }).join("&");
        return [ o(e ? e.toUpperCase() : "GET"), o(t), o(r) ].join("&");
    }
    function l(e, t, n, r, a) {
        var l = s(e, t, n);
        return i([ r || "", a || "" ].map(o).join("&"), l, "sha1");
    }
    function c(e, t, n, r, a) {
        var l = s(e, t, n);
        return i([ r || "", a || "" ].map(o).join("&"), l, "sha256");
    }
    function u(e, t, n, i, o) {
        return function(e, t) {
            return r.createSign("RSA-SHA1").update(t).sign(e, "base64");
        }(i || "", s(e, t, n));
    }
    function d(e, t) {
        return [ e || "", t || "" ].map(o).join("&");
    }
    t.hmacsign = l, t.hmacsign256 = c, t.rsasign = u, t.plaintext = d, t.sign = function(e, t, n, r, i, o) {
        var a, s = 1;
        switch (e) {
          case "RSA-SHA1":
            a = u;
            break;

          case "HMAC-SHA1":
            a = l;
            break;

          case "HMAC-SHA256":
            a = c;
            break;

          case "PLAINTEXT":
            a = d, s = 4;
            break;

          default:
            throw new Error("Signature method not supported: " + e);
        }
        return a.apply(null, [].slice.call(arguments, s));
    }, t.rfc3986 = o, t.generateBase = s;
}
