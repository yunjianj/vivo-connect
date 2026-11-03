// analysis/pretty/main.js:44114; webpack module 433
function(e, t) {
    function n(e) {
        for (var t in e) this[t] = e[t];
    }
    t.get = function(e) {
        var n = Error.stackTraceLimit;
        Error.stackTraceLimit = 1 / 0;
        var r = {}, i = Error.prepareStackTrace;
        Error.prepareStackTrace = function(e, t) {
            return t;
        }, Error.captureStackTrace(r, e || t.get);
        var o = r.stack;
        return Error.prepareStackTrace = i, Error.stackTraceLimit = n, o;
    }, t.parse = function(e) {
        if (!e.stack) return [];
        var t = this;
        return e.stack.split("\n").slice(1).map(function(e) {
            if (e.match(/^\s*[-]{4,}$/)) return t._createParsedCallSite({
                fileName: e,
                lineNumber: null,
                functionName: null,
                typeName: null,
                methodName: null,
                columnNumber: null,
                native: null
            });
            var n = e.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
            if (n) {
                var r = null, i = null, o = null, a = null, s = null, l = "native" === n[5];
                if (n[1]) {
                    var c = (o = n[1]).lastIndexOf(".");
                    if ("." == o[c - 1] && c--, c > 0) {
                        r = o.substr(0, c), i = o.substr(c + 1);
                        var u = r.indexOf(".Module");
                        u > 0 && (o = o.substr(u + 1), r = r.substr(0, u));
                    }
                    a = null;
                }
                i && (a = r, s = i), "<anonymous>" === i && (s = null, o = null);
                var d = {
                    fileName: n[2] || null,
                    lineNumber: parseInt(n[3], 10) || null,
                    functionName: o,
                    typeName: a,
                    methodName: s,
                    columnNumber: parseInt(n[4], 10) || null,
                    native: l
                };
                return t._createParsedCallSite(d);
            }
        }).filter(function(e) {
            return !!e;
        });
    };
    [ "this", "typeName", "functionName", "methodName", "fileName", "lineNumber", "columnNumber", "function", "evalOrigin" ].forEach(function(e) {
        n.prototype[e] = null, n.prototype["get" + e[0].toUpperCase() + e.substr(1)] = function() {
            return this[e];
        };
    }), [ "topLevel", "eval", "native", "constructor" ].forEach(function(e) {
        n.prototype[e] = !1, n.prototype["is" + e[0].toUpperCase() + e.substr(1)] = function() {
            return this[e];
        };
    }), t._createParsedCallSite = function(e) {
        return new n(e);
    };
}
