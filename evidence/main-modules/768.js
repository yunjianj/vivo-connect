// analysis/pretty/main.js:70301; webpack module 768
function(e, t, n) {
    var r = n(769), i = {
        input: !0,
        option: !0,
        optgroup: !0,
        select: !0,
        button: !0,
        datalist: !0,
        textarea: !0
    }, o = {
        tr: {
            tr: !0,
            th: !0,
            td: !0
        },
        th: {
            th: !0
        },
        td: {
            thead: !0,
            th: !0,
            td: !0
        },
        body: {
            head: !0,
            link: !0,
            script: !0
        },
        li: {
            li: !0
        },
        p: {
            p: !0
        },
        h1: {
            p: !0
        },
        h2: {
            p: !0
        },
        h3: {
            p: !0
        },
        h4: {
            p: !0
        },
        h5: {
            p: !0
        },
        h6: {
            p: !0
        },
        select: i,
        input: i,
        output: i,
        button: i,
        datalist: i,
        textarea: i,
        option: {
            option: !0
        },
        optgroup: {
            optgroup: !0
        }
    }, a = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }, s = {
        __proto__: null,
        math: !0,
        svg: !0
    }, l = {
        __proto__: null,
        mi: !0,
        mo: !0,
        mn: !0,
        ms: !0,
        mtext: !0,
        "annotation-xml": !0,
        foreignObject: !0,
        desc: !0,
        title: !0
    }, c = /\s|\//;
    function u(e, t) {
        this._options = t || {}, this._cbs = e || {}, this._tagname = "", this._attribname = "", 
        this._attribvalue = "", this._attribs = null, this._stack = [], this._foreignContext = [], 
        this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, 
        this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, 
        this._options.Tokenizer && (r = this._options.Tokenizer), this._tokenizer = new r(this._options, this), 
        this._cbs.onparserinit && this._cbs.onparserinit(this);
    }
    n(22)(u, n(12).EventEmitter), u.prototype._updatePosition = function(e) {
        null === this.endIndex ? this._tokenizer._sectionStart <= e ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - e : this.startIndex = this.endIndex + 1, 
        this.endIndex = this._tokenizer.getAbsoluteIndex();
    }, u.prototype.ontext = function(e) {
        this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(e);
    }, u.prototype.onopentagname = function(e) {
        if (this._lowerCaseTagNames && (e = e.toLowerCase()), this._tagname = e, !this._options.xmlMode && e in o) for (var t; (t = this._stack[this._stack.length - 1]) in o[e]; this.onclosetag(t)) ;
        !this._options.xmlMode && e in a || (this._stack.push(e), e in s ? this._foreignContext.push(!0) : e in l && this._foreignContext.push(!1)), 
        this._cbs.onopentagname && this._cbs.onopentagname(e), this._cbs.onopentag && (this._attribs = {});
    }, u.prototype.onopentagend = function() {
        this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), 
        this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in a && this._cbs.onclosetag(this._tagname), 
        this._tagname = "";
    }, u.prototype.onclosetag = function(e) {
        if (this._updatePosition(1), this._lowerCaseTagNames && (e = e.toLowerCase()), (e in s || e in l) && this._foreignContext.pop(), 
        !this._stack.length || e in a && !this._options.xmlMode) this._options.xmlMode || "br" !== e && "p" !== e || (this.onopentagname(e), 
        this._closeCurrentTag()); else {
            var t = this._stack.lastIndexOf(e);
            if (-1 !== t) if (this._cbs.onclosetag) for (t = this._stack.length - t; t--; ) this._cbs.onclosetag(this._stack.pop()); else this._stack.length = t; else "p" !== e || this._options.xmlMode || (this.onopentagname(e), 
            this._closeCurrentTag());
        }
    }, u.prototype.onselfclosingtag = function() {
        this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend();
    }, u.prototype._closeCurrentTag = function() {
        var e = this._tagname;
        this.onopentagend(), this._stack[this._stack.length - 1] === e && (this._cbs.onclosetag && this._cbs.onclosetag(e), 
        this._stack.pop());
    }, u.prototype.onattribname = function(e) {
        this._lowerCaseAttributeNames && (e = e.toLowerCase()), this._attribname = e;
    }, u.prototype.onattribdata = function(e) {
        this._attribvalue += e;
    }, u.prototype.onattribend = function() {
        this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), 
        this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), 
        this._attribname = "", this._attribvalue = "";
    }, u.prototype._getInstructionName = function(e) {
        var t = e.search(c), n = t < 0 ? e : e.substr(0, t);
        return this._lowerCaseTagNames && (n = n.toLowerCase()), n;
    }, u.prototype.ondeclaration = function(e) {
        if (this._cbs.onprocessinginstruction) {
            var t = this._getInstructionName(e);
            this._cbs.onprocessinginstruction("!" + t, "!" + e);
        }
    }, u.prototype.onprocessinginstruction = function(e) {
        if (this._cbs.onprocessinginstruction) {
            var t = this._getInstructionName(e);
            this._cbs.onprocessinginstruction("?" + t, "?" + e);
        }
    }, u.prototype.oncomment = function(e) {
        this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(e), this._cbs.oncommentend && this._cbs.oncommentend();
    }, u.prototype.oncdata = function(e) {
        this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), 
        this._cbs.ontext && this._cbs.ontext(e), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + e + "]]");
    }, u.prototype.onerror = function(e) {
        this._cbs.onerror && this._cbs.onerror(e);
    }, u.prototype.onend = function() {
        if (this._cbs.onclosetag) for (var e = this._stack.length; e > 0; this._cbs.onclosetag(this._stack[--e])) ;
        this._cbs.onend && this._cbs.onend();
    }, u.prototype.reset = function() {
        this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", 
        this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this);
    }, u.prototype.parseComplete = function(e) {
        this.reset(), this.end(e);
    }, u.prototype.write = function(e) {
        this._tokenizer.write(e);
    }, u.prototype.end = function(e) {
        this._tokenizer.end(e);
    }, u.prototype.pause = function() {
        this._tokenizer.pause();
    }, u.prototype.resume = function() {
        this._tokenizer.resume();
    }, u.prototype.parseChunk = u.prototype.write, u.prototype.done = u.prototype.end, 
    e.exports = u;
}
