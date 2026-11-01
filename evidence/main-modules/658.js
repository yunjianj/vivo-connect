// analysis/pretty/main.js:59382; webpack module 658
function(e, t, n) {
    !function(e) {
        e.parser = function(e, t) {
            return new i(e, t);
        }, e.SAXParser = i, e.SAXStream = a, e.createStream = function(e, t) {
            return new a(e, t);
        }, e.MAX_BUFFER_LENGTH = 65536;
        var t, r = [ "comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script" ];
        function i(t, n) {
            if (!(this instanceof i)) return new i(t, n);
            !function(e) {
                for (var t = 0, n = r.length; t < n; t++) e[r[t]] = "";
            }(this), this.q = this.c = "", this.bufferCheckPosition = e.MAX_BUFFER_LENGTH, this.encoding = null, 
            this.opt = n || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, 
            this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.opt.maxEntityCount = this.opt.maxEntityCount || 512, 
            this.opt.maxEntityDepth = this.opt.maxEntityDepth || 4, this.entityCount = this.entityDepth = 0, 
            this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, 
            this.strict = !!t, this.noscript = !(!t && !this.opt.noscript), this.state = b.BEGIN, 
            this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), 
            this.attribList = [], this.opt.xmlns && (this.ns = Object.create(l)), void 0 === this.opt.unquotedAttributeValues && (this.opt.unquotedAttributeValues = !t), 
            this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), 
            S(this, "onready");
        }
        e.EVENTS = [ "text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace" ], 
        Object.create || (Object.create = function(e) {
            function t() {}
            return t.prototype = e, new t;
        }), Object.keys || (Object.keys = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t;
        }), i.prototype = {
            end: function() {
                R(this);
            },
            write: function(t) {
                if (this.error) throw this.error;
                if (this.closed) return I(this, "Cannot write after close. Assign an onready handler.");
                if (null === t) return R(this);
                "object" == typeof t && (t = t.toString());
                var n = 0, i = "";
                for (;i = U(t, n++), this.c = i, i; ) switch (this.trackPosition && (this.position++, 
                "\n" === i ? (this.line++, this.column = 0) : this.column++), this.state) {
                  case b.BEGIN:
                    if (this.state = b.BEGIN_WHITESPACE, "\ufeff" === i) continue;
                    j(this, i);
                    continue;

                  case b.BEGIN_WHITESPACE:
                    j(this, i);
                    continue;

                  case b.TEXT:
                    if (this.sawRoot && !this.closedRoot) {
                        for (var o = n - 1; i && "<" !== i && "&" !== i; ) (i = U(t, n++)) && this.trackPosition && (this.position++, 
                        "\n" === i ? (this.line++, this.column = 0) : this.column++);
                        this.textNode += t.substring(o, n - 1);
                    }
                    "<" !== i || this.sawRoot && this.closedRoot && !this.strict ? (p(i) || this.sawRoot && !this.closedRoot || D(this, "Text data outside of root node."), 
                    "&" === i ? this.state = b.TEXT_ENTITY : this.textNode += i) : (this.state = b.OPEN_WAKA, 
                    this.startTagPosition = this.position);
                    continue;

                  case b.SCRIPT:
                    "<" === i ? this.state = b.SCRIPT_ENDING : this.script += i;
                    continue;

                  case b.SCRIPT_ENDING:
                    "/" === i ? this.state = b.CLOSE_TAG : (this.script += "<" + i, this.state = b.SCRIPT);
                    continue;

                  case b.OPEN_WAKA:
                    if ("!" === i) this.state = b.SGML_DECL, this.sgmlDecl = ""; else if (p(i)) ; else if (m(c, i)) this.state = b.OPEN_TAG, 
                    this.tagName = i; else if ("/" === i) this.state = b.CLOSE_TAG, this.tagName = ""; else if ("?" === i) this.state = b.PROC_INST, 
                    this.procInstName = this.procInstBody = ""; else {
                        if (D(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
                            var a = this.position - this.startTagPosition;
                            i = new Array(a).join(" ") + i;
                        }
                        this.textNode += "<" + i, this.state = b.TEXT;
                    }
                    continue;

                  case b.SGML_DECL:
                    if (this.sgmlDecl + i === "--") {
                        this.state = b.COMMENT, this.comment = "", this.sgmlDecl = "";
                        continue;
                    }
                    this.doctype && !0 !== this.doctype && this.sgmlDecl ? (this.state = b.DOCTYPE_DTD, 
                    this.doctype += "<!" + this.sgmlDecl + i, this.sgmlDecl = "") : "[CDATA[" === (this.sgmlDecl + i).toUpperCase() ? (O(this, "onopencdata"), 
                    this.state = b.CDATA, this.sgmlDecl = "", this.cdata = "") : "DOCTYPE" === (this.sgmlDecl + i).toUpperCase() ? (this.state = b.DOCTYPE, 
                    (this.doctype || this.sawRoot) && D(this, "Inappropriately located doctype declaration"), 
                    this.doctype = "", this.sgmlDecl = "") : ">" === i ? (O(this, "onsgmldeclaration", this.sgmlDecl), 
                    this.sgmlDecl = "", this.state = b.TEXT) : f(i) ? (this.state = b.SGML_DECL_QUOTED, 
                    this.sgmlDecl += i) : this.sgmlDecl += i;
                    continue;

                  case b.SGML_DECL_QUOTED:
                    i === this.q && (this.state = b.SGML_DECL, this.q = ""), this.sgmlDecl += i;
                    continue;

                  case b.DOCTYPE:
                    ">" === i ? (this.state = b.TEXT, O(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += i, 
                    "[" === i ? this.state = b.DOCTYPE_DTD : f(i) && (this.state = b.DOCTYPE_QUOTED, 
                    this.q = i));
                    continue;

                  case b.DOCTYPE_QUOTED:
                    this.doctype += i, i === this.q && (this.q = "", this.state = b.DOCTYPE);
                    continue;

                  case b.DOCTYPE_DTD:
                    "]" === i ? (this.doctype += i, this.state = b.DOCTYPE) : "<" === i ? (this.state = b.OPEN_WAKA, 
                    this.startTagPosition = this.position) : f(i) ? (this.doctype += i, this.state = b.DOCTYPE_DTD_QUOTED, 
                    this.q = i) : this.doctype += i;
                    continue;

                  case b.DOCTYPE_DTD_QUOTED:
                    this.doctype += i, i === this.q && (this.state = b.DOCTYPE_DTD, this.q = "");
                    continue;

                  case b.COMMENT:
                    "-" === i ? this.state = b.COMMENT_ENDING : this.comment += i;
                    continue;

                  case b.COMMENT_ENDING:
                    "-" === i ? (this.state = b.COMMENT_ENDED, this.comment = N(this.opt, this.comment), 
                    this.comment && O(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + i, 
                    this.state = b.COMMENT);
                    continue;

                  case b.COMMENT_ENDED:
                    ">" !== i ? (D(this, "Malformed comment"), this.comment += "--" + i, this.state = b.COMMENT) : this.doctype && !0 !== this.doctype ? this.state = b.DOCTYPE_DTD : this.state = b.TEXT;
                    continue;

                  case b.CDATA:
                    for (o = n - 1; i && "]" !== i; ) (i = U(t, n++)) && this.trackPosition && (this.position++, 
                    "\n" === i ? (this.line++, this.column = 0) : this.column++);
                    this.cdata += t.substring(o, n - 1), "]" === i && (this.state = b.CDATA_ENDING);
                    continue;

                  case b.CDATA_ENDING:
                    "]" === i ? this.state = b.CDATA_ENDING_2 : (this.cdata += "]" + i, this.state = b.CDATA);
                    continue;

                  case b.CDATA_ENDING_2:
                    ">" === i ? (this.cdata && O(this, "oncdata", this.cdata), O(this, "onclosecdata"), 
                    this.cdata = "", this.state = b.TEXT) : "]" === i ? this.cdata += "]" : (this.cdata += "]]" + i, 
                    this.state = b.CDATA);
                    continue;

                  case b.PROC_INST:
                    "?" === i ? this.state = b.PROC_INST_ENDING : p(i) ? this.state = b.PROC_INST_BODY : this.procInstName += i;
                    continue;

                  case b.PROC_INST_BODY:
                    if (!this.procInstBody && p(i)) continue;
                    "?" === i ? this.state = b.PROC_INST_ENDING : this.procInstBody += i;
                    continue;

                  case b.PROC_INST_ENDING:
                    if (">" === i) {
                        const e = {
                            name: this.procInstName,
                            body: this.procInstBody
                        };
                        A(this, e), O(this, "onprocessinginstruction", e), this.procInstName = this.procInstBody = "", 
                        this.state = b.TEXT;
                    } else this.procInstBody += "?" + i, this.state = b.PROC_INST_BODY;
                    continue;

                  case b.OPEN_TAG:
                    m(u, i) ? this.tagName += i : (L(this), ">" === i ? P(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : (p(i) || D(this, "Invalid character in tag name"), 
                    this.state = b.ATTRIB));
                    continue;

                  case b.OPEN_TAG_SLASH:
                    ">" === i ? (P(this, !0), x(this)) : (D(this, "Forward-slash in opening tag not followed by >"), 
                    this.state = b.ATTRIB);
                    continue;

                  case b.ATTRIB:
                    if (p(i)) continue;
                    ">" === i ? P(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : m(c, i) ? (this.attribName = i, 
                    this.attribValue = "", this.state = b.ATTRIB_NAME) : D(this, "Invalid attribute name");
                    continue;

                  case b.ATTRIB_NAME:
                    "=" === i ? this.state = b.ATTRIB_VALUE : ">" === i ? (D(this, "Attribute without value"), 
                    this.attribValue = this.attribName, M(this), P(this)) : p(i) ? this.state = b.ATTRIB_NAME_SAW_WHITE : m(u, i) ? this.attribName += i : D(this, "Invalid attribute name");
                    continue;

                  case b.ATTRIB_NAME_SAW_WHITE:
                    if ("=" === i) this.state = b.ATTRIB_VALUE; else {
                        if (p(i)) continue;
                        D(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", 
                        O(this, "onattribute", {
                            name: this.attribName,
                            value: ""
                        }), this.attribName = "", ">" === i ? P(this) : m(c, i) ? (this.attribName = i, 
                        this.state = b.ATTRIB_NAME) : (D(this, "Invalid attribute name"), this.state = b.ATTRIB);
                    }
                    continue;

                  case b.ATTRIB_VALUE:
                    if (p(i)) continue;
                    f(i) ? (this.q = i, this.state = b.ATTRIB_VALUE_QUOTED) : (this.opt.unquotedAttributeValues || I(this, "Unquoted attribute value"), 
                    this.state = b.ATTRIB_VALUE_UNQUOTED, this.attribValue = i);
                    continue;

                  case b.ATTRIB_VALUE_QUOTED:
                    if (i !== this.q) {
                        "&" === i ? this.state = b.ATTRIB_VALUE_ENTITY_Q : this.attribValue += i;
                        continue;
                    }
                    M(this), this.q = "", this.state = b.ATTRIB_VALUE_CLOSED;
                    continue;

                  case b.ATTRIB_VALUE_CLOSED:
                    p(i) ? this.state = b.ATTRIB : ">" === i ? P(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : m(c, i) ? (D(this, "No whitespace between attributes"), 
                    this.attribName = i, this.attribValue = "", this.state = b.ATTRIB_NAME) : D(this, "Invalid attribute name");
                    continue;

                  case b.ATTRIB_VALUE_UNQUOTED:
                    if (!_(i)) {
                        "&" === i ? this.state = b.ATTRIB_VALUE_ENTITY_U : this.attribValue += i;
                        continue;
                    }
                    M(this), ">" === i ? P(this) : this.state = b.ATTRIB;
                    continue;

                  case b.CLOSE_TAG:
                    if (this.tagName) ">" === i ? x(this) : m(u, i) ? this.tagName += i : this.script ? (this.script += "</" + this.tagName + i, 
                    this.tagName = "", this.state = b.SCRIPT) : (p(i) || D(this, "Invalid tagname in closing tag"), 
                    this.state = b.CLOSE_TAG_SAW_WHITE); else {
                        if (p(i)) continue;
                        g(c, i) ? this.script ? (this.script += "</" + i, this.state = b.SCRIPT) : D(this, "Invalid tagname in closing tag.") : this.tagName = i;
                    }
                    continue;

                  case b.CLOSE_TAG_SAW_WHITE:
                    if (p(i)) continue;
                    ">" === i ? x(this) : D(this, "Invalid characters in closing tag");
                    continue;

                  case b.TEXT_ENTITY:
                  case b.ATTRIB_VALUE_ENTITY_Q:
                  case b.ATTRIB_VALUE_ENTITY_U:
                    var s, l;
                    switch (this.state) {
                      case b.TEXT_ENTITY:
                        s = b.TEXT, l = "textNode";
                        break;

                      case b.ATTRIB_VALUE_ENTITY_Q:
                        s = b.ATTRIB_VALUE_QUOTED, l = "attribValue";
                        break;

                      case b.ATTRIB_VALUE_ENTITY_U:
                        s = b.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
                    }
                    if (";" === i) {
                        var v = F(this);
                        this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(v) ? ((this.entityCount += 1) > this.opt.maxEntityCount && I(this, "Parsed entity count exceeds max entity count"), 
                        (this.entityDepth += 1) > this.opt.maxEntityDepth && I(this, "Parsed entity depth exceeds max entity depth"), 
                        this.entity = "", this.state = s, this.write(v), this.entityDepth -= 1) : (this[l] += v, 
                        this.entity = "", this.state = s);
                    } else m(this.entity.length ? h : d, i) ? this.entity += i : (D(this, "Invalid character in entity name"), 
                    this[l] += "&" + this.entity + i, this.entity = "", this.state = s);
                    continue;

                  default:
                    throw new Error(this, "Unknown state: " + this.state);
                }
                this.position >= this.bufferCheckPosition && function(t) {
                    for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), i = 0, o = 0, a = r.length; o < a; o++) {
                        var s = t[r[o]].length;
                        if (s > n) switch (r[o]) {
                          case "textNode":
                            C(t);
                            break;

                          case "cdata":
                            O(t, "oncdata", t.cdata), t.cdata = "";
                            break;

                          case "script":
                            O(t, "onscript", t.script), t.script = "";
                            break;

                          default:
                            I(t, "Max buffer length exceeded: " + r[o]);
                        }
                        i = Math.max(i, s);
                    }
                    var l = e.MAX_BUFFER_LENGTH - i;
                    t.bufferCheckPosition = l + t.position;
                }(this);
                return this;
            }
            /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ ,
            resume: function() {
                return this.error = null, this;
            },
            close: function() {
                return this.write(null);
            },
            flush: function() {
                var e;
                C(e = this), "" !== e.cdata && (O(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (O(e, "onscript", e.script), 
                e.script = "");
            }
        };
        try {
            t = n(9).Stream;
        } catch (e) {
            t = function() {};
        }
        t || (t = function() {});
        var o = e.EVENTS.filter(function(e) {
            return "error" !== e && "end" !== e;
        });
        function a(e, n) {
            if (!(this instanceof a)) return new a(e, n);
            t.apply(this), this._parser = new i(e, n), this.writable = !0, this.readable = !0;
            var r = this;
            this._parser.onend = function() {
                r.emit("end");
            }, this._parser.onerror = function(e) {
                r.emit("error", e), r._parser.error = null;
            }, this._decoder = null, this._decoderBuffer = null, o.forEach(function(e) {
                Object.defineProperty(r, "on" + e, {
                    get: function() {
                        return r._parser["on" + e];
                    },
                    set: function(t) {
                        if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
                        r.on(e, t);
                    },
                    enumerable: !0,
                    configurable: !1
                });
            });
        }
        a.prototype = Object.create(t.prototype, {
            constructor: {
                value: a
            }
        }), a.prototype._decodeBuffer = function(e, t) {
            if (this._decoderBuffer && (e = Buffer.concat([ this._decoderBuffer, e ]), this._decoderBuffer = null), 
            !this._decoder) {
                var n = function(e, t) {
                    if (e.length >= 2) {
                        if (255 === e[0] && 254 === e[1]) return "utf-16le";
                        if (254 === e[0] && 255 === e[1]) return "utf-16be";
                    }
                    return e.length >= 3 && 239 === e[0] && 187 === e[1] && 191 === e[2] ? "utf8" : e.length >= 4 ? 60 === e[0] && 0 === e[1] && 63 === e[2] && 0 === e[3] ? "utf-16le" : 0 === e[0] && 60 === e[1] && 0 === e[2] && 63 === e[3] ? "utf-16be" : "utf8" : t ? "utf8" : null;
                }(e, t);
                if (!n) return this._decoderBuffer = e, "";
                this._parser.encoding = n, this._decoder = new TextDecoder(n);
            }
            return this._decoder.decode(e, {
                stream: !t
            });
        }, a.prototype.write = function(e) {
            if ("function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e)) e = this._decodeBuffer(e, !1); else if (this._decoderBuffer) {
                var t = this._decodeBuffer(Buffer.alloc(0), !0);
                t && (this._parser.write(t), this.emit("data", t));
            }
            return this._parser.write(e.toString()), this.emit("data", e), !0;
        }, a.prototype.end = function(e) {
            if (e && e.length && this.write(e), this._decoderBuffer) {
                var t = this._decodeBuffer(Buffer.alloc(0), !0);
                t && (this._parser.write(t), this.emit("data", t));
            } else if (this._decoder) {
                var n = this._decoder.decode();
                n && (this._parser.write(n), this.emit("data", n));
            }
            return this._parser.end(), !0;
        }, a.prototype.on = function(e, n) {
            var r = this;
            return r._parser["on" + e] || -1 === o.indexOf(e) || (r._parser["on" + e] = function() {
                var t = 1 === arguments.length ? [ arguments[0] ] : Array.apply(null, arguments);
                t.splice(0, 0, e), r.emit.apply(r, t);
            }), t.prototype.on.call(r, e, n);
        };
        var s = "http://www.w3.org/XML/1998/namespace", l = {
            xml: s,
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, c = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, u = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, d = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
        function p(e) {
            return " " === e || "\n" === e || "\r" === e || "\t" === e;
        }
        function f(e) {
            return '"' === e || "'" === e;
        }
        function _(e) {
            return ">" === e || p(e);
        }
        function m(e, t) {
            return e.test(t);
        }
        function g(e, t) {
            return !m(e, t);
        }
        var v, y, E, b = 0;
        for (var w in e.STATE = {
            BEGIN: b++,
            BEGIN_WHITESPACE: b++,
            TEXT: b++,
            TEXT_ENTITY: b++,
            OPEN_WAKA: b++,
            SGML_DECL: b++,
            SGML_DECL_QUOTED: b++,
            DOCTYPE: b++,
            DOCTYPE_QUOTED: b++,
            DOCTYPE_DTD: b++,
            DOCTYPE_DTD_QUOTED: b++,
            COMMENT_STARTING: b++,
            COMMENT: b++,
            COMMENT_ENDING: b++,
            COMMENT_ENDED: b++,
            CDATA: b++,
            CDATA_ENDING: b++,
            CDATA_ENDING_2: b++,
            PROC_INST: b++,
            PROC_INST_BODY: b++,
            PROC_INST_ENDING: b++,
            OPEN_TAG: b++,
            OPEN_TAG_SLASH: b++,
            ATTRIB: b++,
            ATTRIB_NAME: b++,
            ATTRIB_NAME_SAW_WHITE: b++,
            ATTRIB_VALUE: b++,
            ATTRIB_VALUE_QUOTED: b++,
            ATTRIB_VALUE_CLOSED: b++,
            ATTRIB_VALUE_UNQUOTED: b++,
            ATTRIB_VALUE_ENTITY_Q: b++,
            ATTRIB_VALUE_ENTITY_U: b++,
            CLOSE_TAG: b++,
            CLOSE_TAG_SAW_WHITE: b++,
            SCRIPT: b++,
            SCRIPT_ENDING: b++
        }, e.XML_ENTITIES = {
            amp: "&",
            gt: ">",
            lt: "<",
            quot: '"',
            apos: "'"
        }, e.ENTITIES = {
            amp: "&",
            gt: ">",
            lt: "<",
            quot: '"',
            apos: "'",
            AElig: 198,
            Aacute: 193,
            Acirc: 194,
            Agrave: 192,
            Aring: 197,
            Atilde: 195,
            Auml: 196,
            Ccedil: 199,
            ETH: 208,
            Eacute: 201,
            Ecirc: 202,
            Egrave: 200,
            Euml: 203,
            Iacute: 205,
            Icirc: 206,
            Igrave: 204,
            Iuml: 207,
            Ntilde: 209,
            Oacute: 211,
            Ocirc: 212,
            Ograve: 210,
            Oslash: 216,
            Otilde: 213,
            Ouml: 214,
            THORN: 222,
            Uacute: 218,
            Ucirc: 219,
            Ugrave: 217,
            Uuml: 220,
            Yacute: 221,
            aacute: 225,
            acirc: 226,
            aelig: 230,
            agrave: 224,
            aring: 229,
            atilde: 227,
            auml: 228,
            ccedil: 231,
            eacute: 233,
            ecirc: 234,
            egrave: 232,
            eth: 240,
            euml: 235,
            iacute: 237,
            icirc: 238,
            igrave: 236,
            iuml: 239,
            ntilde: 241,
            oacute: 243,
            ocirc: 244,
            ograve: 242,
            oslash: 248,
            otilde: 245,
            ouml: 246,
            szlig: 223,
            thorn: 254,
            uacute: 250,
            ucirc: 251,
            ugrave: 249,
            uuml: 252,
            yacute: 253,
            yuml: 255,
            copy: 169,
            reg: 174,
            nbsp: 160,
            iexcl: 161,
            cent: 162,
            pound: 163,
            curren: 164,
            yen: 165,
            brvbar: 166,
            sect: 167,
            uml: 168,
            ordf: 170,
            laquo: 171,
            not: 172,
            shy: 173,
            macr: 175,
            deg: 176,
            plusmn: 177,
            sup1: 185,
            sup2: 178,
            sup3: 179,
            acute: 180,
            micro: 181,
            para: 182,
            middot: 183,
            cedil: 184,
            ordm: 186,
            raquo: 187,
            frac14: 188,
            frac12: 189,
            frac34: 190,
            iquest: 191,
            times: 215,
            divide: 247,
            OElig: 338,
            oelig: 339,
            Scaron: 352,
            scaron: 353,
            Yuml: 376,
            fnof: 402,
            circ: 710,
            tilde: 732,
            Alpha: 913,
            Beta: 914,
            Gamma: 915,
            Delta: 916,
            Epsilon: 917,
            Zeta: 918,
            Eta: 919,
            Theta: 920,
            Iota: 921,
            Kappa: 922,
            Lambda: 923,
            Mu: 924,
            Nu: 925,
            Xi: 926,
            Omicron: 927,
            Pi: 928,
            Rho: 929,
            Sigma: 931,
            Tau: 932,
            Upsilon: 933,
            Phi: 934,
            Chi: 935,
            Psi: 936,
            Omega: 937,
            alpha: 945,
            beta: 946,
            gamma: 947,
            delta: 948,
            epsilon: 949,
            zeta: 950,
            eta: 951,
            theta: 952,
            iota: 953,
            kappa: 954,
            lambda: 955,
            mu: 956,
            nu: 957,
            xi: 958,
            omicron: 959,
            pi: 960,
            rho: 961,
            sigmaf: 962,
            sigma: 963,
            tau: 964,
            upsilon: 965,
            phi: 966,
            chi: 967,
            psi: 968,
            omega: 969,
            thetasym: 977,
            upsih: 978,
            piv: 982,
            ensp: 8194,
            emsp: 8195,
            thinsp: 8201,
            zwnj: 8204,
            zwj: 8205,
            lrm: 8206,
            rlm: 8207,
            ndash: 8211,
            mdash: 8212,
            lsquo: 8216,
            rsquo: 8217,
            sbquo: 8218,
            ldquo: 8220,
            rdquo: 8221,
            bdquo: 8222,
            dagger: 8224,
            Dagger: 8225,
            bull: 8226,
            hellip: 8230,
            permil: 8240,
            prime: 8242,
            Prime: 8243,
            lsaquo: 8249,
            rsaquo: 8250,
            oline: 8254,
            frasl: 8260,
            euro: 8364,
            image: 8465,
            weierp: 8472,
            real: 8476,
            trade: 8482,
            alefsym: 8501,
            larr: 8592,
            uarr: 8593,
            rarr: 8594,
            darr: 8595,
            harr: 8596,
            crarr: 8629,
            lArr: 8656,
            uArr: 8657,
            rArr: 8658,
            dArr: 8659,
            hArr: 8660,
            forall: 8704,
            part: 8706,
            exist: 8707,
            empty: 8709,
            nabla: 8711,
            isin: 8712,
            notin: 8713,
            ni: 8715,
            prod: 8719,
            sum: 8721,
            minus: 8722,
            lowast: 8727,
            radic: 8730,
            prop: 8733,
            infin: 8734,
            ang: 8736,
            and: 8743,
            or: 8744,
            cap: 8745,
            cup: 8746,
            int: 8747,
            there4: 8756,
            sim: 8764,
            cong: 8773,
            asymp: 8776,
            ne: 8800,
            equiv: 8801,
            le: 8804,
            ge: 8805,
            sub: 8834,
            sup: 8835,
            nsub: 8836,
            sube: 8838,
            supe: 8839,
            oplus: 8853,
            otimes: 8855,
            perp: 8869,
            sdot: 8901,
            lceil: 8968,
            rceil: 8969,
            lfloor: 8970,
            rfloor: 8971,
            lang: 9001,
            rang: 9002,
            loz: 9674,
            spades: 9824,
            clubs: 9827,
            hearts: 9829,
            diams: 9830
        }, Object.keys(e.ENTITIES).forEach(function(t) {
            var n = e.ENTITIES[t], r = "number" == typeof n ? String.fromCharCode(n) : n;
            e.ENTITIES[t] = r;
        }), e.STATE) e.STATE[e.STATE[w]] = w;
        function S(e, t, n) {
            e[t] && e[t](n);
        }
        function T(e) {
            return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
        }
        function A(e, t) {
            if (e.strict && e.encoding && t && "xml" === t.name) {
                var n, r, i = (n = t.body, (r = n && n.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i)) ? r[2] : null);
                i && !function(e, t) {
                    const n = T(e), r = T(t);
                    return !n || !r || ("utf16" === r ? "utf16le" === n || "utf16be" === n : n === r);
                }(e.encoding, i) && D(e, "XML declaration encoding " + i + " does not match detected stream encoding " + e.encoding.toUpperCase());
            }
        }
        function O(e, t, n) {
            e.textNode && C(e), S(e, t, n);
        }
        function C(e) {
            e.textNode = N(e.opt, e.textNode), e.textNode && S(e, "ontext", e.textNode), e.textNode = "";
        }
        function N(e, t) {
            return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
        }
        function I(e, t) {
            return C(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), 
            t = new Error(t), e.error = t, S(e, "onerror", t), e;
        }
        function R(e) {
            return e.sawRoot && !e.closedRoot && D(e, "Unclosed root tag"), e.state !== b.BEGIN && e.state !== b.BEGIN_WHITESPACE && e.state !== b.TEXT && I(e, "Unexpected end"), 
            C(e), e.c = "", e.closed = !0, S(e, "onend"), i.call(e, e.strict, e.opt), e;
        }
        function D(e, t) {
            if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
            e.strict && I(e, t);
        }
        function L(e) {
            e.strict || (e.tagName = e.tagName[e.looseCase]());
            var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
                name: e.tagName,
                attributes: {}
            };
            e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, O(e, "onopentagstart", n);
        }
        function k(e, t) {
            var n = e.indexOf(":") < 0 ? [ "", e ] : e.split(":"), r = n[0], i = n[1];
            return t && "xmlns" === e && (r = "xmlns", i = ""), {
                prefix: r,
                local: i
            };
        }
        function M(e) {
            if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = ""; else {
                if (e.opt.xmlns) {
                    var t = k(e.attribName, !0), n = t.prefix, r = t.local;
                    if ("xmlns" === n) if ("xml" === r && e.attribValue !== s) D(e, "xml: prefix must be bound to " + s + "\nActual: " + e.attribValue); else if ("xmlns" === r && "http://www.w3.org/2000/xmlns/" !== e.attribValue) D(e, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + e.attribValue); else {
                        var i = e.tag, o = e.tags[e.tags.length - 1] || e;
                        i.ns === o.ns && (i.ns = Object.create(o.ns)), i.ns[r] = e.attribValue;
                    }
                    e.attribList.push([ e.attribName, e.attribValue ]);
                } else e.tag.attributes[e.attribName] = e.attribValue, O(e, "onattribute", {
                    name: e.attribName,
                    value: e.attribValue
                });
                e.attribName = e.attribValue = "";
            }
        }
        function P(e, t) {
            if (e.opt.xmlns) {
                var n = e.tag, r = k(e.tagName);
                n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (D(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), 
                n.uri = r.prefix);
                var i = e.tags[e.tags.length - 1] || e;
                n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
                    O(e, "onopennamespace", {
                        prefix: t,
                        uri: n.ns[t]
                    });
                });
                for (var o = 0, a = e.attribList.length; o < a; o++) {
                    var s = e.attribList[o], l = s[0], c = s[1], u = k(l, !0), d = u.prefix, h = u.local, p = "" === d ? "" : n.ns[d] || "", f = {
                        name: l,
                        value: c,
                        prefix: d,
                        local: h,
                        uri: p
                    };
                    d && "xmlns" !== d && !p && (D(e, "Unbound namespace prefix: " + JSON.stringify(d)), 
                    f.uri = d), e.tag.attributes[l] = f, O(e, "onattribute", f);
                }
                e.attribList.length = 0;
            }
            e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), O(e, "onopentag", e.tag), 
            t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = b.TEXT : e.state = b.SCRIPT, 
            e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
        }
        function x(e) {
            if (!e.tagName) return D(e, "Weird empty close tag."), e.textNode += "</>", void (e.state = b.TEXT);
            if (e.script) {
                if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", 
                void (e.state = b.SCRIPT);
                O(e, "onscript", e.script), e.script = "";
            }
            var t = e.tags.length, n = e.tagName;
            e.strict || (n = n[e.looseCase]());
            for (var r = n; t--; ) {
                if (e.tags[t].name === r) break;
                D(e, "Unexpected close tag");
            }
            if (t < 0) return D(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", 
            void (e.state = b.TEXT);
            e.tagName = n;
            for (var i = e.tags.length; i-- > t; ) {
                var o = e.tag = e.tags.pop();
                e.tagName = e.tag.name, O(e, "onclosetag", e.tagName);
                var a = {};
                for (var s in o.ns) a[s] = o.ns[s];
                var l = e.tags[e.tags.length - 1] || e;
                e.opt.xmlns && o.ns !== l.ns && Object.keys(o.ns).forEach(function(t) {
                    var n = o.ns[t];
                    O(e, "onclosenamespace", {
                        prefix: t,
                        uri: n
                    });
                });
            }
            0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, 
            e.state = b.TEXT;
        }
        function F(e) {
            var t, n = e.entity, r = n.toLowerCase(), i = "";
            return e.ENTITIES[n] ? e.ENTITIES[n] : e.ENTITIES[r] ? e.ENTITIES[r] : ("#" === (n = r).charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), 
            i = (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), i = (t = parseInt(n, 10)).toString(10))), 
            n = n.replace(/^0+/, ""), isNaN(t) || i.toLowerCase() !== n || t < 0 || t > 1114111 ? (D(e, "Invalid character entity"), 
            "&" + e.entity + ";") : String.fromCodePoint(t));
        }
        function j(e, t) {
            "<" === t ? (e.state = b.OPEN_WAKA, e.startTagPosition = e.position) : p(t) || (D(e, "Non-whitespace before first tag."), 
            e.textNode = t, e.state = b.TEXT);
        }
        function U(e, t) {
            var n = "";
            return t < e.length && (n = e.charAt(t)), n;
        }
        b = e.STATE, String.fromCodePoint || (v = String.fromCharCode, y = Math.floor, E = function() {
            var e, t, n = 16384, r = [], i = -1, o = arguments.length;
            if (!o) return "";
            for (var a = ""; ++i < o; ) {
                var s = Number(arguments[i]);
                if (!isFinite(s) || s < 0 || s > 1114111 || y(s) !== s) throw RangeError("Invalid code point: " + s);
                s <= 65535 ? r.push(s) : (e = 55296 + ((s -= 65536) >> 10), t = s % 1024 + 56320, 
                r.push(e, t)), (i + 1 === o || r.length > n) && (a += v.apply(null, r), r.length = 0);
            }
            return a;
        }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
            value: E,
            configurable: !0,
            writable: !0
        }) : String.fromCodePoint = E);
    }(t);
}
