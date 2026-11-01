// analysis/pretty/main.js:99570; webpack module 1299
function(e, t, n) {
    (function() {
        "use strict";
        var e, r, i, o, a, s, l, c, u, d = function(e, t) {
            return function() {
                return e.apply(t, arguments);
            };
        }, h = {}.hasOwnProperty;
        c = n(658), o = n(12), e = n(1300), l = n(659), u = n(1301).setImmediate, r = n(306).defaults, 
        a = function(e) {
            return "object" == typeof e && null != e && 0 === Object.keys(e).length;
        }, s = function(e, t, n) {
            var r, i;
            for (r = 0, i = e.length; r < i; r++) t = (0, e[r])(t, n);
            return t;
        }, i = function(e, t, n) {
            var r;
            return (r = Object.create(null)).value = n, r.writable = !0, r.enumerable = !0, 
            r.configurable = !0, Object.defineProperty(e, t, r);
        }, t.Parser = function(n) {
            function o(e) {
                var n, i, o;
                if (this.parseStringPromise = d(this.parseStringPromise, this), this.parseString = d(this.parseString, this), 
                this.reset = d(this.reset, this), this.assignOrPush = d(this.assignOrPush, this), 
                this.processAsync = d(this.processAsync, this), !(this instanceof t.Parser)) return new t.Parser(e);
                for (n in this.options = {}, i = r[.2]) h.call(i, n) && (o = i[n], this.options[n] = o);
                for (n in e) h.call(e, n) && (o = e[n], this.options[n] = o);
                this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), 
                this.options.tagNameProcessors.unshift(l.normalize)), this.reset();
            }
            return function(e, t) {
                for (var n in t) h.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(o, n), o.prototype.processAsync = function() {
                var e, t;
                try {
                    return this.remaining.length <= this.options.chunkSize ? (e = this.remaining, this.remaining = "", 
                    this.saxParser = this.saxParser.write(e), this.saxParser.close()) : (e = this.remaining.substr(0, this.options.chunkSize), 
                    this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), 
                    this.saxParser = this.saxParser.write(e), u(this.processAsync));
                } catch (e) {
                    if (t = e, !this.saxParser.errThrown) return this.saxParser.errThrown = !0, this.emit(t);
                }
            }, o.prototype.assignOrPush = function(e, t, n) {
                return t in e ? (e[t] instanceof Array || i(e, t, [ e[t] ]), e[t].push(n)) : this.options.explicitArray ? i(e, t, [ n ]) : i(e, t, n);
            }, o.prototype.reset = function() {
                var e, t, n, r, o;
                return this.removeAllListeners(), this.saxParser = c.parser(this.options.strict, {
                    trim: !1,
                    normalize: !1,
                    xmlns: this.options.xmlns
                }), this.saxParser.errThrown = !1, this.saxParser.onerror = (o = this, function(e) {
                    if (o.saxParser.resume(), !o.saxParser.errThrown) return o.saxParser.errThrown = !0, 
                    o.emit("error", e);
                }), this.saxParser.onend = function(e) {
                    return function() {
                        if (!e.saxParser.ended) return e.saxParser.ended = !0, e.emit("end", e.resultObject);
                    };
                }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, 
                this.resultObject = null, r = [], e = this.options.attrkey, t = this.options.charkey, 
                this.saxParser.onopentag = function(n) {
                    return function(o) {
                        var a, l, c, u, d;
                        if ((c = {})[t] = "", !n.options.ignoreAttrs) for (a in d = o.attributes) h.call(d, a) && (e in c || n.options.mergeAttrs || (c[e] = {}), 
                        l = n.options.attrValueProcessors ? s(n.options.attrValueProcessors, o.attributes[a], a) : o.attributes[a], 
                        u = n.options.attrNameProcessors ? s(n.options.attrNameProcessors, a) : a, n.options.mergeAttrs ? n.assignOrPush(c, u, l) : i(c[e], u, l));
                        return c["#name"] = n.options.tagNameProcessors ? s(n.options.tagNameProcessors, o.name) : o.name, 
                        n.options.xmlns && (c[n.options.xmlnskey] = {
                            uri: o.uri,
                            local: o.local
                        }), r.push(c);
                    };
                }(this), this.saxParser.onclosetag = function(e) {
                    return function() {
                        var n, o, l, c, u, d, p, f, _, m;
                        if (d = r.pop(), u = d["#name"], e.options.explicitChildren && e.options.preserveChildrenOrder || delete d["#name"], 
                        !0 === d.cdata && (n = d.cdata, delete d.cdata), _ = r[r.length - 1], d[t].match(/^\s*$/) && !n ? (o = d[t], 
                        delete d[t]) : (e.options.trim && (d[t] = d[t].trim()), e.options.normalize && (d[t] = d[t].replace(/\s{2,}/g, " ").trim()), 
                        d[t] = e.options.valueProcessors ? s(e.options.valueProcessors, d[t], u) : d[t], 
                        1 === Object.keys(d).length && t in d && !e.EXPLICIT_CHARKEY && (d = d[t])), a(d) && (d = "function" == typeof e.options.emptyTag ? e.options.emptyTag() : "" !== e.options.emptyTag ? e.options.emptyTag : o), 
                        null != e.options.validator && (m = "/" + function() {
                            var e, t, n;
                            for (n = [], e = 0, t = r.length; e < t; e++) c = r[e], n.push(c["#name"]);
                            return n;
                        }().concat(u).join("/"), function() {
                            var t;
                            try {
                                d = e.options.validator(m, _ && _[u], d);
                            } catch (n) {
                                return t = n, e.emit("error", t);
                            }
                        }()), e.options.explicitChildren && !e.options.mergeAttrs && "object" == typeof d) if (e.options.preserveChildrenOrder) {
                            if (_) {
                                for (l in _[e.options.childkey] = _[e.options.childkey] || [], p = {}, d) h.call(d, l) && i(p, l, d[l]);
                                _[e.options.childkey].push(p), delete d["#name"], 1 === Object.keys(d).length && t in d && !e.EXPLICIT_CHARKEY && (d = d[t]);
                            }
                        } else c = {}, e.options.attrkey in d && (c[e.options.attrkey] = d[e.options.attrkey], 
                        delete d[e.options.attrkey]), !e.options.charsAsChildren && e.options.charkey in d && (c[e.options.charkey] = d[e.options.charkey], 
                        delete d[e.options.charkey]), Object.getOwnPropertyNames(d).length > 0 && (c[e.options.childkey] = d), 
                        d = c;
                        return r.length > 0 ? e.assignOrPush(_, u, d) : (e.options.explicitRoot && (f = d, 
                        i(d = {}, u, f)), e.resultObject = d, e.saxParser.ended = !0, e.emit("end", e.resultObject));
                    };
                }(this), n = function(e) {
                    return function(n) {
                        var i, o;
                        if (o = r[r.length - 1]) return o[t] += n, e.options.explicitChildren && e.options.preserveChildrenOrder && e.options.charsAsChildren && (e.options.includeWhiteChars || "" !== n.replace(/\\n/g, "").trim()) && (o[e.options.childkey] = o[e.options.childkey] || [], 
                        (i = {
                            "#name": "__text__"
                        })[t] = n, e.options.normalize && (i[t] = i[t].replace(/\s{2,}/g, " ").trim()), 
                        o[e.options.childkey].push(i)), o;
                    };
                }(this), this.saxParser.ontext = n, this.saxParser.oncdata = function(e) {
                    var t;
                    if (t = n(e)) return t.cdata = !0;
                };
            }, o.prototype.parseString = function(t, n) {
                var r;
                null != n && "function" == typeof n && (this.on("end", function(e) {
                    return this.reset(), n(null, e);
                }), this.on("error", function(e) {
                    return this.reset(), n(e);
                }));
                try {
                    return "" === (t = t.toString()).trim() ? (this.emit("end", null), !0) : (t = e.stripBOM(t), 
                    this.options.async ? (this.remaining = t, u(this.processAsync), this.saxParser) : this.saxParser.write(t).close());
                } catch (e) {
                    if (r = e, !this.saxParser.errThrown && !this.saxParser.ended) return this.emit("error", r), 
                    this.saxParser.errThrown = !0;
                    if (this.saxParser.ended) throw r;
                }
            }, o.prototype.parseStringPromise = function(e) {
                return new Promise((t = this, function(n, r) {
                    return t.parseString(e, function(e, t) {
                        return e ? r(e) : n(t);
                    });
                }));
                var t;
            }, o;
        }(o), t.parseString = function(e, n, r) {
            var i, o;
            return null != r ? ("function" == typeof r && (i = r), "object" == typeof n && (o = n)) : ("function" == typeof n && (i = n), 
            o = {}), new t.Parser(o).parseString(e, i);
        }, t.parseStringPromise = function(e, n) {
            var r;
            return "object" == typeof n && (r = n), new t.Parser(r).parseStringPromise(e);
        };
    }).call(this);
}
