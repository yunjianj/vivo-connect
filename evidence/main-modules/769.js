// analysis/pretty/main.js:70483; webpack module 769
function(e, t, n) {
    e.exports = me;
    var r = n(1620), i = n(1622), o = n(1623), a = n(1624), s = 0, l = s++, c = s++, u = s++, d = s++, h = s++, p = s++, f = s++, _ = s++, m = s++, g = s++, v = s++, y = s++, E = s++, b = s++, w = s++, S = s++, T = s++, A = s++, O = s++, C = s++, N = s++, I = s++, R = s++, D = s++, L = s++, k = s++, M = s++, P = s++, x = s++, F = s++, j = s++, U = s++, W = s++, B = s++, H = s++, $ = s++, Y = s++, z = s++, G = s++, q = s++, V = s++, K = s++, J = s++, X = s++, Q = s++, Z = s++, ee = s++, te = s++, ne = s++, re = s++, ie = s++, oe = s++, ae = s++, se = s++, le = s++, ce = 0, ue = ce++, de = ce++, he = ce++;
    function pe(e) {
        return " " === e || "\n" === e || "\t" === e || "\f" === e || "\r" === e;
    }
    function fe(e, t, n) {
        var r = e.toLowerCase();
        return e === r ? function(e) {
            e === r ? this._state = t : (this._state = n, this._index--);
        } : function(i) {
            i === r || i === e ? this._state = t : (this._state = n, this._index--);
        };
    }
    function _e(e, t) {
        var n = e.toLowerCase();
        return function(r) {
            r === n || r === e ? this._state = t : (this._state = u, this._index--);
        };
    }
    function me(e, t) {
        this._state = l, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, 
        this._baseState = l, this._special = ue, this._cbs = t, this._running = !0, this._ended = !1, 
        this._xmlMode = !(!e || !e.xmlMode), this._decodeEntities = !(!e || !e.decodeEntities);
    }
    me.prototype._stateText = function(e) {
        "<" === e ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
        this._state = c, this._sectionStart = this._index) : this._decodeEntities && this._special === ue && "&" === e && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
        this._baseState = l, this._state = ie, this._sectionStart = this._index);
    }, me.prototype._stateBeforeTagName = function(e) {
        "/" === e ? this._state = h : "<" === e ? (this._cbs.ontext(this._getSection()), 
        this._sectionStart = this._index) : ">" === e || this._special !== ue || pe(e) ? this._state = l : "!" === e ? (this._state = w, 
        this._sectionStart = this._index + 1) : "?" === e ? (this._state = T, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== e && "S" !== e ? u : j, 
        this._sectionStart = this._index);
    }, me.prototype._stateInTagName = function(e) {
        ("/" === e || ">" === e || pe(e)) && (this._emitToken("onopentagname"), this._state = _, 
        this._index--);
    }, me.prototype._stateBeforeCloseingTagName = function(e) {
        pe(e) || (">" === e ? this._state = l : this._special !== ue ? "s" === e || "S" === e ? this._state = U : (this._state = l, 
        this._index--) : (this._state = p, this._sectionStart = this._index));
    }, me.prototype._stateInCloseingTagName = function(e) {
        (">" === e || pe(e)) && (this._emitToken("onclosetag"), this._state = f, this._index--);
    }, me.prototype._stateAfterCloseingTagName = function(e) {
        ">" === e && (this._state = l, this._sectionStart = this._index + 1);
    }, me.prototype._stateBeforeAttributeName = function(e) {
        ">" === e ? (this._cbs.onopentagend(), this._state = l, this._sectionStart = this._index + 1) : "/" === e ? this._state = d : pe(e) || (this._state = m, 
        this._sectionStart = this._index);
    }, me.prototype._stateInSelfClosingTag = function(e) {
        ">" === e ? (this._cbs.onselfclosingtag(), this._state = l, this._sectionStart = this._index + 1) : pe(e) || (this._state = _, 
        this._index--);
    }, me.prototype._stateInAttributeName = function(e) {
        ("=" === e || "/" === e || ">" === e || pe(e)) && (this._cbs.onattribname(this._getSection()), 
        this._sectionStart = -1, this._state = g, this._index--);
    }, me.prototype._stateAfterAttributeName = function(e) {
        "=" === e ? this._state = v : "/" === e || ">" === e ? (this._cbs.onattribend(), 
        this._state = _, this._index--) : pe(e) || (this._cbs.onattribend(), this._state = m, 
        this._sectionStart = this._index);
    }, me.prototype._stateBeforeAttributeValue = function(e) {
        '"' === e ? (this._state = y, this._sectionStart = this._index + 1) : "'" === e ? (this._state = E, 
        this._sectionStart = this._index + 1) : pe(e) || (this._state = b, this._sectionStart = this._index, 
        this._index--);
    }, me.prototype._stateInAttributeValueDoubleQuotes = function(e) {
        '"' === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = _) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = ie, this._sectionStart = this._index);
    }, me.prototype._stateInAttributeValueSingleQuotes = function(e) {
        "'" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = _) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = ie, this._sectionStart = this._index);
    }, me.prototype._stateInAttributeValueNoQuotes = function(e) {
        pe(e) || ">" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), 
        this._state = _, this._index--) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
        this._baseState = this._state, this._state = ie, this._sectionStart = this._index);
    }, me.prototype._stateBeforeDeclaration = function(e) {
        this._state = "[" === e ? I : "-" === e ? A : S;
    }, me.prototype._stateInDeclaration = function(e) {
        ">" === e && (this._cbs.ondeclaration(this._getSection()), this._state = l, this._sectionStart = this._index + 1);
    }, me.prototype._stateInProcessingInstruction = function(e) {
        ">" === e && (this._cbs.onprocessinginstruction(this._getSection()), this._state = l, 
        this._sectionStart = this._index + 1);
    }, me.prototype._stateBeforeComment = function(e) {
        "-" === e ? (this._state = O, this._sectionStart = this._index + 1) : this._state = S;
    }, me.prototype._stateInComment = function(e) {
        "-" === e && (this._state = C);
    }, me.prototype._stateAfterComment1 = function(e) {
        this._state = "-" === e ? N : O;
    }, me.prototype._stateAfterComment2 = function(e) {
        ">" === e ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), 
        this._state = l, this._sectionStart = this._index + 1) : "-" !== e && (this._state = O);
    }, me.prototype._stateBeforeCdata1 = fe("C", R, S), me.prototype._stateBeforeCdata2 = fe("D", D, S), 
    me.prototype._stateBeforeCdata3 = fe("A", L, S), me.prototype._stateBeforeCdata4 = fe("T", k, S), 
    me.prototype._stateBeforeCdata5 = fe("A", M, S), me.prototype._stateBeforeCdata6 = function(e) {
        "[" === e ? (this._state = P, this._sectionStart = this._index + 1) : (this._state = S, 
        this._index--);
    }, me.prototype._stateInCdata = function(e) {
        "]" === e && (this._state = x);
    }, me.prototype._stateAfterCdata1 = function(e) {
        this._state = "]" === e ? F : P;
    }, me.prototype._stateAfterCdata2 = function(e) {
        ">" === e ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), 
        this._state = l, this._sectionStart = this._index + 1) : "]" !== e && (this._state = P);
    }, me.prototype._stateBeforeSpecial = function(e) {
        "c" === e || "C" === e ? this._state = W : "t" === e || "T" === e ? this._state = J : (this._state = u, 
        this._index--);
    }, me.prototype._stateBeforeSpecialEnd = function(e) {
        this._special !== de || "c" !== e && "C" !== e ? this._special !== he || "t" !== e && "T" !== e ? this._state = l : this._state = ee : this._state = z;
    }, me.prototype._stateBeforeScript1 = _e("R", B), me.prototype._stateBeforeScript2 = _e("I", H), 
    me.prototype._stateBeforeScript3 = _e("P", $), me.prototype._stateBeforeScript4 = _e("T", Y), 
    me.prototype._stateBeforeScript5 = function(e) {
        ("/" === e || ">" === e || pe(e)) && (this._special = de), this._state = u, this._index--;
    }, me.prototype._stateAfterScript1 = fe("R", G, l), me.prototype._stateAfterScript2 = fe("I", q, l), 
    me.prototype._stateAfterScript3 = fe("P", V, l), me.prototype._stateAfterScript4 = fe("T", K, l), 
    me.prototype._stateAfterScript5 = function(e) {
        ">" === e || pe(e) ? (this._special = ue, this._state = p, this._sectionStart = this._index - 6, 
        this._index--) : this._state = l;
    }, me.prototype._stateBeforeStyle1 = _e("Y", X), me.prototype._stateBeforeStyle2 = _e("L", Q), 
    me.prototype._stateBeforeStyle3 = _e("E", Z), me.prototype._stateBeforeStyle4 = function(e) {
        ("/" === e || ">" === e || pe(e)) && (this._special = he), this._state = u, this._index--;
    }, me.prototype._stateAfterStyle1 = fe("Y", te, l), me.prototype._stateAfterStyle2 = fe("L", ne, l), 
    me.prototype._stateAfterStyle3 = fe("E", re, l), me.prototype._stateAfterStyle4 = function(e) {
        ">" === e || pe(e) ? (this._special = ue, this._state = p, this._sectionStart = this._index - 5, 
        this._index--) : this._state = l;
    }, me.prototype._stateBeforeEntity = fe("#", oe, ae), me.prototype._stateBeforeNumericEntity = fe("X", le, se), 
    me.prototype._parseNamedEntityStrict = function() {
        if (this._sectionStart + 1 < this._index) {
            var e = this._buffer.substring(this._sectionStart + 1, this._index), t = this._xmlMode ? a : i;
            t.hasOwnProperty(e) && (this._emitPartial(t[e]), this._sectionStart = this._index + 1);
        }
    }, me.prototype._parseLegacyEntity = function() {
        var e = this._sectionStart + 1, t = this._index - e;
        for (t > 6 && (t = 6); t >= 2; ) {
            var n = this._buffer.substr(e, t);
            if (o.hasOwnProperty(n)) return this._emitPartial(o[n]), void (this._sectionStart += t + 1);
            t--;
        }
    }, me.prototype._stateInNamedEntity = function(e) {
        ";" === e ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), 
        this._state = this._baseState) : (e < "a" || e > "z") && (e < "A" || e > "Z") && (e < "0" || e > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== l ? "=" !== e && this._parseNamedEntityStrict() : this._parseLegacyEntity()), 
        this._state = this._baseState, this._index--);
    }, me.prototype._decodeNumericEntity = function(e, t) {
        var n = this._sectionStart + e;
        if (n !== this._index) {
            var i = this._buffer.substring(n, this._index), o = parseInt(i, t);
            this._emitPartial(r(o)), this._sectionStart = this._index;
        } else this._sectionStart--;
        this._state = this._baseState;
    }, me.prototype._stateInNumericEntity = function(e) {
        ";" === e ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), 
        this._index--);
    }, me.prototype._stateInHexEntity = function(e) {
        ";" === e ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (e < "a" || e > "f") && (e < "A" || e > "F") && (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), 
        this._index--);
    }, me.prototype._cleanup = function() {
        this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, 
        this._index = 0) : this._running && (this._state === l ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), 
        this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", 
        this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), 
        this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0);
    }, me.prototype.write = function(e) {
        this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += e, 
        this._parse();
    }, me.prototype._parse = function() {
        for (;this._index < this._buffer.length && this._running; ) {
            var e = this._buffer.charAt(this._index);
            this._state === l ? this._stateText(e) : this._state === c ? this._stateBeforeTagName(e) : this._state === u ? this._stateInTagName(e) : this._state === h ? this._stateBeforeCloseingTagName(e) : this._state === p ? this._stateInCloseingTagName(e) : this._state === f ? this._stateAfterCloseingTagName(e) : this._state === d ? this._stateInSelfClosingTag(e) : this._state === _ ? this._stateBeforeAttributeName(e) : this._state === m ? this._stateInAttributeName(e) : this._state === g ? this._stateAfterAttributeName(e) : this._state === v ? this._stateBeforeAttributeValue(e) : this._state === y ? this._stateInAttributeValueDoubleQuotes(e) : this._state === E ? this._stateInAttributeValueSingleQuotes(e) : this._state === b ? this._stateInAttributeValueNoQuotes(e) : this._state === w ? this._stateBeforeDeclaration(e) : this._state === S ? this._stateInDeclaration(e) : this._state === T ? this._stateInProcessingInstruction(e) : this._state === A ? this._stateBeforeComment(e) : this._state === O ? this._stateInComment(e) : this._state === C ? this._stateAfterComment1(e) : this._state === N ? this._stateAfterComment2(e) : this._state === I ? this._stateBeforeCdata1(e) : this._state === R ? this._stateBeforeCdata2(e) : this._state === D ? this._stateBeforeCdata3(e) : this._state === L ? this._stateBeforeCdata4(e) : this._state === k ? this._stateBeforeCdata5(e) : this._state === M ? this._stateBeforeCdata6(e) : this._state === P ? this._stateInCdata(e) : this._state === x ? this._stateAfterCdata1(e) : this._state === F ? this._stateAfterCdata2(e) : this._state === j ? this._stateBeforeSpecial(e) : this._state === U ? this._stateBeforeSpecialEnd(e) : this._state === W ? this._stateBeforeScript1(e) : this._state === B ? this._stateBeforeScript2(e) : this._state === H ? this._stateBeforeScript3(e) : this._state === $ ? this._stateBeforeScript4(e) : this._state === Y ? this._stateBeforeScript5(e) : this._state === z ? this._stateAfterScript1(e) : this._state === G ? this._stateAfterScript2(e) : this._state === q ? this._stateAfterScript3(e) : this._state === V ? this._stateAfterScript4(e) : this._state === K ? this._stateAfterScript5(e) : this._state === J ? this._stateBeforeStyle1(e) : this._state === X ? this._stateBeforeStyle2(e) : this._state === Q ? this._stateBeforeStyle3(e) : this._state === Z ? this._stateBeforeStyle4(e) : this._state === ee ? this._stateAfterStyle1(e) : this._state === te ? this._stateAfterStyle2(e) : this._state === ne ? this._stateAfterStyle3(e) : this._state === re ? this._stateAfterStyle4(e) : this._state === ie ? this._stateBeforeEntity(e) : this._state === oe ? this._stateBeforeNumericEntity(e) : this._state === ae ? this._stateInNamedEntity(e) : this._state === se ? this._stateInNumericEntity(e) : this._state === le ? this._stateInHexEntity(e) : this._cbs.onerror(Error("unknown _state"), this._state), 
            this._index++;
        }
        this._cleanup();
    }, me.prototype.pause = function() {
        this._running = !1;
    }, me.prototype.resume = function() {
        this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish();
    }, me.prototype.end = function(e) {
        this._ended && this._cbs.onerror(Error(".end() after done!")), e && this.write(e), 
        this._ended = !0, this._running && this._finish();
    }, me.prototype._finish = function() {
        this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend();
    }, me.prototype._handleTrailingData = function() {
        var e = this._buffer.substr(this._sectionStart);
        this._state === P || this._state === x || this._state === F ? this._cbs.oncdata(e) : this._state === O || this._state === C || this._state === N ? this._cbs.oncomment(e) : this._state !== ae || this._xmlMode ? this._state !== se || this._xmlMode ? this._state !== le || this._xmlMode ? this._state !== u && this._state !== _ && this._state !== v && this._state !== g && this._state !== m && this._state !== E && this._state !== y && this._state !== b && this._state !== p && this._cbs.ontext(e) : (this._decodeNumericEntity(3, 16), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), 
        this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()));
    }, me.prototype.reset = function() {
        me.call(this, {
            xmlMode: this._xmlMode,
            decodeEntities: this._decodeEntities
        }, this._cbs);
    }, me.prototype.getAbsoluteIndex = function() {
        return this._bufferOffset + this._index;
    }, me.prototype._getSection = function() {
        return this._buffer.substring(this._sectionStart, this._index);
    }, me.prototype._emitToken = function(e) {
        this._cbs[e](this._getSection()), this._sectionStart = -1;
    }, me.prototype._emitPartial = function(e) {
        this._baseState !== l ? this._cbs.onattribdata(e) : this._cbs.ontext(e);
    };
}
