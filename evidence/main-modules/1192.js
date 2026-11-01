// analysis/pretty/main.js:94139; webpack module 1192
function(e, t, n) {
    var r;
    void 0 === (r = function() {
        return function() {
            var e = n;
            e.Integer = {
                type: "integer"
            };
            var t = {
                String: String,
                Boolean: Boolean,
                Number: Number,
                Object: Object,
                Array: Array,
                Date: Date
            };
            function n(e, t) {
                return n(e, t, {
                    changing: !1
                });
            }
            e.validate = n, e.checkPropertyChange = function(e, t, r) {
                return n(e, t, {
                    changing: r || "property"
                });
            };
            var n = e._validate = function(e, n, r) {
                r || (r = {});
                var i = r.changing;
                function o(e) {
                    return e.type || t[e.name] == e && e.name.toLowerCase();
                }
                var a = [];
                function s(e, t, n, l) {
                    var c;
                    function u(e) {
                        a.push({
                            property: n,
                            message: e
                        });
                    }
                    if (n += n ? "number" == typeof l ? "[" + l + "]" : void 0 === l ? "" : "." + l : l, 
                    ("object" != typeof t || t instanceof Array) && (n || "function" != typeof t) && (!t || !o(t))) return "function" == typeof t ? e instanceof t || u("is not an instance of the class/constructor " + t.name) : t && u("Invalid schema/property definition " + t), 
                    null;
                    function d(e, t) {
                        if (e) {
                            if (!("string" != typeof e || "any" == e || ("null" == e ? null === t : typeof t == e) || t instanceof Array && "array" == e || t instanceof Date && "date" == e || "integer" == e && t % 1 == 0)) return [ {
                                property: n,
                                message: t + " - " + typeof t + " value found, but a " + e + " is required"
                            } ];
                            if (e instanceof Array) {
                                for (var r = [], i = 0; i < e.length && (r = d(e[i], t)).length; i++) ;
                                if (r.length) return r;
                            } else if ("object" == typeof e) {
                                var o = a;
                                a = [], s(t, e, n);
                                var l = a;
                                return a = o, l;
                            }
                        }
                        return [];
                    }
                    if (i && t.readonly && u("is a readonly field, it can not be changed"), t.extends && s(e, t.extends, n, l), 
                    void 0 === e) t.required && u("is missing and it is required"); else if (a = a.concat(d(o(t), e)), 
                    t.disallow && !d(t.disallow, e).length && u(" disallowed value was matched"), null !== e) {
                        if (e instanceof Array) {
                            if (t.items) {
                                var h = t.items instanceof Array, p = t.items;
                                for (l = 0, c = e.length; l < c; l += 1) h && (p = t.items[l]), r.coerce && (e[l] = r.coerce(e[l], p)), 
                                a.concat(s(e[l], p, n, l));
                            }
                            t.minItems && e.length < t.minItems && u("There must be a minimum of " + t.minItems + " in the array"), 
                            t.maxItems && e.length > t.maxItems && u("There must be a maximum of " + t.maxItems + " in the array");
                        } else (t.properties || t.additionalProperties) && a.concat(function(e, t, n, o) {
                            if ("object" == typeof t) for (var l in ("object" != typeof e || e instanceof Array) && a.push({
                                property: n,
                                message: "an object is required"
                            }), t) if (t.hasOwnProperty(l) && "__proto__" != l && "constructor" != l) {
                                var c = e.hasOwnProperty(l) ? e[l] : void 0;
                                if (void 0 === c && r.existingOnly) continue;
                                var u = t[l];
                                void 0 === c && u.default && (c = e[l] = u.default), r.coerce && l in e && (c = e[l] = r.coerce(c, u)), 
                                s(c, u, n, l);
                            }
                            for (l in e) {
                                if (e.hasOwnProperty(l) && ("_" != l.charAt(0) || "_" != l.charAt(1)) && t && !t[l] && !1 === o) {
                                    if (r.filter) {
                                        delete e[l];
                                        continue;
                                    }
                                    a.push({
                                        property: n,
                                        message: "The property " + l + " is not defined in the schema and the schema does not allow additional properties"
                                    });
                                }
                                var d = t && t[l] && t[l].requires;
                                d && !(d in e) && a.push({
                                    property: n,
                                    message: "the presence of the property " + l + " requires that " + d + " also be present"
                                }), c = e[l], !o || t && "object" == typeof t && l in t || (r.coerce && (c = e[l] = r.coerce(c, o)), 
                                s(c, o, n, l)), !i && c && c.$schema && (a = a.concat(s(c, c.$schema, n, l)));
                            }
                            return a;
                        }(e, t.properties, n, t.additionalProperties));
                        if (t.pattern && "string" == typeof e && !e.match(t.pattern) && u("does not match the regex pattern " + t.pattern), 
                        t.maxLength && "string" == typeof e && e.length > t.maxLength && u("may only be " + t.maxLength + " characters long"), 
                        t.minLength && "string" == typeof e && e.length < t.minLength && u("must be at least " + t.minLength + " characters long"), 
                        void 0 !== t.minimum && typeof e == typeof t.minimum && t.minimum > e && u("must have a minimum value of " + t.minimum), 
                        void 0 !== t.maximum && typeof e == typeof t.maximum && t.maximum < e && u("must have a maximum value of " + t.maximum), 
                        t.enum) {
                            var f, _ = t.enum;
                            c = _.length;
                            for (var m = 0; m < c; m++) if (_[m] === e) {
                                f = 1;
                                break;
                            }
                            f || u("does not have a value in the enumeration " + _.join(", "));
                        }
                        "number" == typeof t.maxDecimal && e.toString().match(new RegExp("\\.[0-9]{" + (t.maxDecimal + 1) + ",}")) && u("may only have " + t.maxDecimal + " digits of decimal places");
                    }
                    return null;
                }
                return n && s(e, n, "", i || ""), !i && e && e.$schema && s(e, e.$schema, "", ""), 
                {
                    valid: !a.length,
                    errors: a
                };
            };
            return e.mustBeValid = function(e) {
                if (!e.valid) throw new TypeError(e.errors.map(function(e) {
                    return "for property " + e.property + ": " + e.message;
                }).join(", \n"));
            }, e;
        }();
    }.apply(t, [])) || (e.exports = r);
}
