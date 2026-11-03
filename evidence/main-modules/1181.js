// analysis/pretty/main.js:93186; webpack module 1181
function(e, t, n) {
    var r = n(21), i = n(5), o = n(213), a = (o.HASH_ALGOS, o.PK_ALGOS, o.HttpSignatureError), s = o.InvalidAlgorithmError, l = o.validateAlgorithm, c = 0, u = 1, d = 0, h = 1, p = 2, f = 3;
    function _(e) {
        a.call(this, e, _);
    }
    function m(e) {
        a.call(this, e, m);
    }
    function g(e) {
        a.call(this, e, g);
    }
    function v(e) {
        a.call(this, e, v);
    }
    function y(e) {
        a.call(this, e, y);
    }
    i.inherits(_, a), i.inherits(m, a), i.inherits(g, a), i.inherits(v, a), i.inherits(y, a), 
    e.exports = {
        parseRequest: function(e, t) {
            r.object(e, "request"), r.object(e.headers, "request.headers"), void 0 === t && (t = {}), 
            void 0 === t.headers && (t.headers = [ e.headers["x-date"] ? "x-date" : "date" ]), 
            r.object(t, "options"), r.arrayOfString(t.headers, "options.headers"), r.optionalFinite(t.clockSkew, "options.clockSkew");
            var n = t.authorizationHeaderName || "authorization";
            if (!e.headers[n]) throw new v("no " + n + " header present in the request");
            t.clockSkew = t.clockSkew || 300;
            var i, o = 0, a = c, E = d, b = "", w = "", S = {
                scheme: "",
                params: {},
                signingString: ""
            }, T = e.headers[n];
            for (o = 0; o < T.length; o++) {
                var A = T.charAt(o);
                switch (Number(a)) {
                  case c:
                    " " !== A ? S.scheme += A : a = u;
                    break;

                  case u:
                    switch (Number(E)) {
                      case d:
                        var O = A.charCodeAt(0);
                        if (O >= 65 && O <= 90 || O >= 97 && O <= 122) b += A; else {
                            if ("=" !== A) throw new m("bad param format");
                            if (0 === b.length) throw new m("bad param format");
                            E = h;
                        }
                        break;

                      case h:
                        if ('"' !== A) throw new m("bad param format");
                        w = "", E = p;
                        break;

                      case p:
                        '"' === A ? (S.params[b] = w, E = f) : w += A;
                        break;

                      case f:
                        if ("," !== A) throw new m("bad param format");
                        b = "", E = d;
                        break;

                      default:
                        throw new Error("Invalid substate");
                    }
                    break;

                  default:
                    throw new Error("Invalid substate");
                }
            }
            if (S.params.headers && "" !== S.params.headers ? S.params.headers = S.params.headers.split(" ") : e.headers["x-date"] ? S.params.headers = [ "x-date" ] : S.params.headers = [ "date" ], 
            !S.scheme || "Signature" !== S.scheme) throw new m('scheme was not "Signature"');
            if (!S.params.keyId) throw new m("keyId was not specified");
            if (!S.params.algorithm) throw new m("algorithm was not specified");
            if (!S.params.signature) throw new m("signature was not specified");
            S.params.algorithm = S.params.algorithm.toLowerCase();
            try {
                l(S.params.algorithm);
            } catch (e) {
                throw e instanceof s ? new g(S.params.algorithm + " is not supported") : e;
            }
            for (o = 0; o < S.params.headers.length; o++) {
                var C = S.params.headers[o].toLowerCase();
                if (S.params.headers[o] = C, "request-line" === C) {
                    if (t.strict) throw new y("request-line is not a valid header with strict parsing enabled.");
                    S.signingString += e.method + " " + e.url + " HTTP/" + e.httpVersion;
                } else if ("(request-target)" === C) S.signingString += "(request-target): " + e.method.toLowerCase() + " " + e.url; else {
                    var N = e.headers[C];
                    if (void 0 === N) throw new v(C + " was not in the request");
                    S.signingString += C + ": " + N;
                }
                o + 1 < S.params.headers.length && (S.signingString += "\n");
            }
            if (e.headers.date || e.headers["x-date"]) {
                i = e.headers["x-date"] ? new Date(e.headers["x-date"]) : new Date(e.headers.date);
                var I = new Date, R = Math.abs(I.getTime() - i.getTime());
                if (R > 1e3 * t.clockSkew) throw new _("clock skew of " + R / 1e3 + "s was greater than " + t.clockSkew + "s");
            }
            if (t.headers.forEach(function(e) {
                if (S.params.headers.indexOf(e.toLowerCase()) < 0) throw new v(e + " was not a signed header");
            }), t.algorithms && -1 === t.algorithms.indexOf(S.params.algorithm)) throw new g(S.params.algorithm + " is not a supported algorithm");
            return S.algorithm = S.params.algorithm.toUpperCase(), S.keyId = S.params.keyId, 
            S;
        }
    };
}
