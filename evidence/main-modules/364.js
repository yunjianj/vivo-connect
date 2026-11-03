// analysis/pretty/main.js:39951; webpack module 364
function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    }, function(e, t) {
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    }), o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = o(n(754)), s = n(12), l = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), c = new Set([ "p" ]), u = {
        tr: new Set([ "tr", "th", "td" ]),
        th: new Set([ "th" ]),
        td: new Set([ "thead", "th", "td" ]),
        body: new Set([ "head", "link", "script" ]),
        li: new Set([ "li" ]),
        p: c,
        h1: c,
        h2: c,
        h3: c,
        h4: c,
        h5: c,
        h6: c,
        select: l,
        input: l,
        output: l,
        button: l,
        datalist: l,
        textarea: l,
        option: new Set([ "option" ]),
        optgroup: new Set([ "optgroup", "option" ]),
        dd: new Set([ "dt", "dd" ]),
        dt: new Set([ "dt", "dd" ]),
        address: c,
        article: c,
        aside: c,
        blockquote: c,
        details: c,
        div: c,
        dl: c,
        fieldset: c,
        figcaption: c,
        figure: c,
        footer: c,
        form: c,
        header: c,
        hr: c,
        main: c,
        nav: c,
        ol: c,
        pre: c,
        section: c,
        table: c,
        ul: c,
        rt: new Set([ "rt", "rp" ]),
        rp: new Set([ "rt", "rp" ]),
        tbody: new Set([ "thead", "tbody" ]),
        tfoot: new Set([ "thead", "tbody" ])
    }, d = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), h = new Set([ "math", "svg" ]), p = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), f = /\s|\//, _ = function(e) {
        function t(n, r) {
            var i = e.call(this) || this;
            return i._tagname = "", i._attribname = "", i._attribvalue = "", i._attribs = null, 
            i._stack = [], i._foreignContext = [], i.startIndex = 0, i.endIndex = null, i.parseChunk = t.prototype.write, 
            i.done = t.prototype.end, i._options = r || {}, i._cbs = n || {}, i._tagname = "", 
            i._attribname = "", i._attribvalue = "", i._attribs = null, i._stack = [], i._foreignContext = [], 
            i.startIndex = 0, i.endIndex = null, i._lowerCaseTagNames = "lowerCaseTags" in i._options ? !!i._options.lowerCaseTags : !i._options.xmlMode, 
            i._lowerCaseAttributeNames = "lowerCaseAttributeNames" in i._options ? !!i._options.lowerCaseAttributeNames : !i._options.xmlMode, 
            i._tokenizer = new (i._options.Tokenizer || a.default)(i._options, i), i._cbs.onparserinit && i._cbs.onparserinit(i), 
            i;
        }
        return i(t, e), t.prototype._updatePosition = function(e) {
            null === this.endIndex ? this._tokenizer._sectionStart <= e ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - e : this.startIndex = this.endIndex + 1, 
            this.endIndex = this._tokenizer.getAbsoluteIndex();
        }, t.prototype.ontext = function(e) {
            this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(e);
        }, t.prototype.onopentagname = function(e) {
            if (this._lowerCaseTagNames && (e = e.toLowerCase()), this._tagname = e, !this._options.xmlMode && Object.prototype.hasOwnProperty.call(u, e)) for (var t = void 0; u[e].has(t = this._stack[this._stack.length - 1]); this.onclosetag(t)) ;
            !this._options.xmlMode && d.has(e) || (this._stack.push(e), h.has(e) ? this._foreignContext.push(!0) : p.has(e) && this._foreignContext.push(!1)), 
            this._cbs.onopentagname && this._cbs.onopentagname(e), this._cbs.onopentag && (this._attribs = {});
        }, t.prototype.onopentagend = function() {
            this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), 
            this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && d.has(this._tagname) && this._cbs.onclosetag(this._tagname), 
            this._tagname = "";
        }, t.prototype.onclosetag = function(e) {
            if (this._updatePosition(1), this._lowerCaseTagNames && (e = e.toLowerCase()), (h.has(e) || p.has(e)) && this._foreignContext.pop(), 
            !this._stack.length || !this._options.xmlMode && d.has(e)) this._options.xmlMode || "br" !== e && "p" !== e || (this.onopentagname(e), 
            this._closeCurrentTag()); else {
                var t = this._stack.lastIndexOf(e);
                if (-1 !== t) if (this._cbs.onclosetag) for (t = this._stack.length - t; t--; ) this._cbs.onclosetag(this._stack.pop()); else this._stack.length = t; else "p" !== e || this._options.xmlMode || (this.onopentagname(e), 
                this._closeCurrentTag());
            }
        }, t.prototype.onselfclosingtag = function() {
            this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend();
        }, t.prototype._closeCurrentTag = function() {
            var e = this._tagname;
            this.onopentagend(), this._stack[this._stack.length - 1] === e && (this._cbs.onclosetag && this._cbs.onclosetag(e), 
            this._stack.pop());
        }, t.prototype.onattribname = function(e) {
            this._lowerCaseAttributeNames && (e = e.toLowerCase()), this._attribname = e;
        }, t.prototype.onattribdata = function(e) {
            this._attribvalue += e;
        }, t.prototype.onattribend = function() {
            this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), 
            this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), 
            this._attribname = "", this._attribvalue = "";
        }, t.prototype._getInstructionName = function(e) {
            var t = e.search(f), n = t < 0 ? e : e.substr(0, t);
            return this._lowerCaseTagNames && (n = n.toLowerCase()), n;
        }, t.prototype.ondeclaration = function(e) {
            if (this._cbs.onprocessinginstruction) {
                var t = this._getInstructionName(e);
                this._cbs.onprocessinginstruction("!" + t, "!" + e);
            }
        }, t.prototype.onprocessinginstruction = function(e) {
            if (this._cbs.onprocessinginstruction) {
                var t = this._getInstructionName(e);
                this._cbs.onprocessinginstruction("?" + t, "?" + e);
            }
        }, t.prototype.oncomment = function(e) {
            this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(e), this._cbs.oncommentend && this._cbs.oncommentend();
        }, t.prototype.oncdata = function(e) {
            this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), 
            this._cbs.ontext && this._cbs.ontext(e), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + e + "]]");
        }, t.prototype.onerror = function(e) {
            this._cbs.onerror && this._cbs.onerror(e);
        }, t.prototype.onend = function() {
            if (this._cbs.onclosetag) for (var e = this._stack.length; e > 0; this._cbs.onclosetag(this._stack[--e])) ;
            this._cbs.onend && this._cbs.onend();
        }, t.prototype.reset = function() {
            this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", 
            this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this);
        }, t.prototype.parseComplete = function(e) {
            this.reset(), this.end(e);
        }, t.prototype.write = function(e) {
            this._tokenizer.write(e);
        }, t.prototype.end = function(e) {
            this._tokenizer.end(e);
        }, t.prototype.pause = function() {
            this._tokenizer.pause();
        }, t.prototype.resume = function() {
            this._tokenizer.resume();
        }, t;
    }(s.EventEmitter);
    t.Parser = _;
}
