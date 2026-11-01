// analysis/pretty/main.js:83843; webpack module 1056
function(e, t, n) {
    "use strict";
    var r = n(7);
    function i(e, t) {
        return function(e, t) {
            var n;
            n = "passthrough" !== t.algorithm ? r.createHash(t.algorithm) : new u;
            void 0 === n.write && (n.write = n.update, n.end = n.update);
            c(t, n).dispatch(e), n.update || n.end("");
            if (n.digest) return n.digest("buffer" === t.encoding ? void 0 : t.encoding);
            var i = n.read();
            if ("buffer" === t.encoding) return i;
            return i.toString(t.encoding);
        }(e, t = s(e, t));
    }
    (t = e.exports = i).sha1 = function(e) {
        return i(e);
    }, t.keys = function(e) {
        return i(e, {
            excludeValues: !0,
            algorithm: "sha1",
            encoding: "hex"
        });
    }, t.MD5 = function(e) {
        return i(e, {
            algorithm: "md5",
            encoding: "hex"
        });
    }, t.keysMD5 = function(e) {
        return i(e, {
            algorithm: "md5",
            encoding: "hex",
            excludeValues: !0
        });
    };
    var o = r.getHashes ? r.getHashes().slice() : [ "sha1", "md5" ];
    o.push("passthrough");
    var a = [ "buffer", "hex", "binary", "base64" ];
    function s(e, t) {
        t = t || {};
        var n = {};
        if (n.algorithm = t.algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = !!t.excludeValues, 
        n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), 
        n.ignoreUnknown = !0 === t.ignoreUnknown, n.respectType = !1 !== t.respectType, 
        n.respectFunctionNames = !1 !== t.respectFunctionNames, n.respectFunctionProperties = !1 !== t.respectFunctionProperties, 
        n.unorderedArrays = !0 === t.unorderedArrays, n.unorderedSets = !1 !== t.unorderedSets, 
        n.unorderedObjects = !1 !== t.unorderedObjects, n.replacer = t.replacer || void 0, 
        n.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw new Error("Object argument required.");
        for (var r = 0; r < o.length; ++r) o[r].toLowerCase() === n.algorithm.toLowerCase() && (n.algorithm = o[r]);
        if (-1 === o.indexOf(n.algorithm)) throw new Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + o.join(", "));
        if (-1 === a.indexOf(n.encoding) && "passthrough" !== n.algorithm) throw new Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + a.join(", "));
        return n;
    }
    function l(e) {
        if ("function" != typeof e) return !1;
        return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e));
    }
    function c(e, t, n) {
        n = n || [];
        var r = function(e) {
            return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
        };
        return {
            dispatch: function(t) {
                e.replacer && (t = e.replacer(t));
                var n = typeof t;
                return null === t && (n = "null"), this["_" + n](t);
            },
            _object: function(t) {
                var i = Object.prototype.toString.call(t), o = /\[object (.*)\]/i.exec(i);
                o = (o = o ? o[1] : "unknown:[" + i + "]").toLowerCase();
                var a;
                if ((a = n.indexOf(t)) >= 0) return this.dispatch("[CIRCULAR:" + a + "]");
                if (n.push(t), "undefined" != typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t)) return r("buffer:"), 
                r(t);
                if ("object" === o || "function" === o || "asyncfunction" === o) {
                    var s = Object.keys(t);
                    e.unorderedObjects && (s = s.sort()), !1 === e.respectType || l(t) || s.splice(0, 0, "prototype", "__proto__", "constructor"), 
                    e.excludeKeys && (s = s.filter(function(t) {
                        return !e.excludeKeys(t);
                    })), r("object:" + s.length + ":");
                    var c = this;
                    return s.forEach(function(n) {
                        c.dispatch(n), r(":"), e.excludeValues || c.dispatch(t[n]), r(",");
                    });
                }
                if (!this["_" + o]) {
                    if (e.ignoreUnknown) return r("[" + o + "]");
                    throw new Error('Unknown object type "' + o + '"');
                }
                this["_" + o](t);
            },
            _array: function(t, i) {
                i = void 0 !== i ? i : !1 !== e.unorderedArrays;
                var o = this;
                if (r("array:" + t.length + ":"), !i || t.length <= 1) return t.forEach(function(e) {
                    return o.dispatch(e);
                });
                var a = [], s = t.map(function(t) {
                    var r = new u, i = n.slice();
                    return c(e, r, i).dispatch(t), a = a.concat(i.slice(n.length)), r.read().toString();
                });
                return n = n.concat(a), s.sort(), this._array(s, !1);
            },
            _date: function(e) {
                return r("date:" + e.toJSON());
            },
            _symbol: function(e) {
                return r("symbol:" + e.toString());
            },
            _error: function(e) {
                return r("error:" + e.toString());
            },
            _boolean: function(e) {
                return r("bool:" + e.toString());
            },
            _string: function(e) {
                r("string:" + e.length + ":"), r(e.toString());
            },
            _function: function(t) {
                r("fn:"), l(t) ? this.dispatch("[native]") : this.dispatch(t.toString()), !1 !== e.respectFunctionNames && this.dispatch("function-name:" + String(t.name)), 
                e.respectFunctionProperties && this._object(t);
            },
            _number: function(e) {
                return r("number:" + e.toString());
            },
            _xml: function(e) {
                return r("xml:" + e.toString());
            },
            _null: function() {
                return r("Null");
            },
            _undefined: function() {
                return r("Undefined");
            },
            _regexp: function(e) {
                return r("regex:" + e.toString());
            },
            _uint8array: function(e) {
                return r("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _uint8clampedarray: function(e) {
                return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _int8array: function(e) {
                return r("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _uint16array: function(e) {
                return r("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _int16array: function(e) {
                return r("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _uint32array: function(e) {
                return r("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _int32array: function(e) {
                return r("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _float32array: function(e) {
                return r("float32array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _float64array: function(e) {
                return r("float64array:"), this.dispatch(Array.prototype.slice.call(e));
            },
            _arraybuffer: function(e) {
                return r("arraybuffer:"), this.dispatch(new Uint8Array(e));
            },
            _url: function(e) {
                return r("url:" + e.toString());
            },
            _map: function(t) {
                r("map:");
                var n = Array.from(t);
                return this._array(n, !1 !== e.unorderedSets);
            },
            _set: function(t) {
                r("set:");
                var n = Array.from(t);
                return this._array(n, !1 !== e.unorderedSets);
            },
            _file: function(e) {
                return r("file:"), this.dispatch([ e.name, e.size, e.type, e.lastModfied ]);
            },
            _blob: function() {
                if (e.ignoreUnknown) return r("[blob]");
                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
            },
            _domwindow: function() {
                return r("domwindow");
            },
            _bigint: function(e) {
                return r("bigint:" + e.toString());
            },
            _process: function() {
                return r("process");
            },
            _timer: function() {
                return r("timer");
            },
            _pipe: function() {
                return r("pipe");
            },
            _tcp: function() {
                return r("tcp");
            },
            _udp: function() {
                return r("udp");
            },
            _tty: function() {
                return r("tty");
            },
            _statwatcher: function() {
                return r("statwatcher");
            },
            _securecontext: function() {
                return r("securecontext");
            },
            _connection: function() {
                return r("connection");
            },
            _zlib: function() {
                return r("zlib");
            },
            _context: function() {
                return r("context");
            },
            _nodescript: function() {
                return r("nodescript");
            },
            _httpparser: function() {
                return r("httpparser");
            },
            _dataview: function() {
                return r("dataview");
            },
            _signal: function() {
                return r("signal");
            },
            _fsevent: function() {
                return r("fsevent");
            },
            _tlswrap: function() {
                return r("tlswrap");
            }
        };
    }
    function u() {
        return {
            buf: "",
            write: function(e) {
                this.buf += e;
            },
            end: function(e) {
                this.buf += e;
            },
            read: function() {
                return this.buf;
            }
        };
    }
    t.writeToStream = function(e, t, n) {
        return void 0 === n && (n = t, t = {}), c(t = s(e, t), n).dispatch(e);
    };
}
