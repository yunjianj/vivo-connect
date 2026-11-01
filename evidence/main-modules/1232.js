// analysis/pretty/main.js:96533; webpack module 1232
function(e, t, n) {
    "use strict";
    var r = n(302).MissingRef;
    e.exports = function e(t, n, i) {
        var o = this;
        if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
        "function" == typeof n && (i = n, n = void 0);
        var a = s(t).then(function() {
            var e = o._addSchema(t, void 0, n);
            return e.validate || function e(t) {
                try {
                    return o._compile(t);
                } catch (e) {
                    if (e instanceof r) return i(e);
                    throw e;
                }
                function i(r) {
                    var i = r.missingSchema;
                    if (c(i)) throw new Error("Schema " + i + " is loaded but " + r.missingRef + " cannot be resolved");
                    var a = o._loadingSchemas[i];
                    return a || (a = o._loadingSchemas[i] = o._opts.loadSchema(i)).then(l, l), a.then(function(e) {
                        if (!c(i)) return s(e).then(function() {
                            c(i) || o.addSchema(e, i, void 0, n);
                        });
                    }).then(function() {
                        return e(t);
                    });
                    function l() {
                        delete o._loadingSchemas[i];
                    }
                    function c(e) {
                        return o._refs[e] || o._schemas[e];
                    }
                }
            }(e);
        });
        i && a.then(function(e) {
            i(null, e);
        }, i);
        return a;
        function s(t) {
            var n = t.$schema;
            return n && !o.getSchema(n) ? e.call(o, {
                $ref: n
            }, !0) : Promise.resolve();
        }
    };
}
