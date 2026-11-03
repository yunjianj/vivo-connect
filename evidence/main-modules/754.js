// analysis/pretty/main.js:69150; webpack module 754
function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n(755)), o = r(n(365)), a = r(n(756)), s = r(n(366));
    function l(e) {
        return " " === e || "\n" === e || "\t" === e || "\f" === e || "\r" === e;
    }
    function c(e, t, n) {
        var r = e.toLowerCase();
        return e === r ? function(e, i) {
            i === r ? e._state = t : (e._state = n, e._index--);
        } : function(i, o) {
            o === r || o === e ? i._state = t : (i._state = n, i._index--);
        };
    }
    function u(e, t) {
        var n = e.toLowerCase();
        return function(r, i) {
            i === n || i === e ? r._state = t : (r._state = 3, r._index--);
        };
    }
    var d = c("C", 23, 16), h = c("D", 24, 16), p = c("A", 25, 16), f = c("T", 26, 16), _ = c("A", 27, 16), m = u("R", 34), g = u("I", 35), v = u("P", 36), y = u("T", 37), E = c("R", 39, 1), b = c("I", 40, 1), w = c("P", 41, 1), S = c("T", 42, 1), T = u("Y", 44), A = u("L", 45), O = u("E", 46), C = c("Y", 48, 1), N = c("L", 49, 1), I = c("E", 50, 1), R = c("#", 52, 53), D = c("X", 55, 54), L = function() {
        function e(e, t) {
            this._state = 1, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, 
            this._baseState = 1, this._special = 1, this._running = !0, this._ended = !1, this._cbs = t, 
            this._xmlMode = !(!e || !e.xmlMode), this._decodeEntities = !(!e || !e.decodeEntities);
        }
        return e.prototype.reset = function() {
            this._state = 1, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, 
            this._baseState = 1, this._special = 1, this._running = !0, this._ended = !1;
        }, e.prototype._stateText = function(e) {
            "<" === e ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
            this._state = 2, this._sectionStart = this._index) : this._decodeEntities && 1 === this._special && "&" === e && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), 
            this._baseState = 1, this._state = 51, this._sectionStart = this._index);
        }, e.prototype._stateBeforeTagName = function(e) {
            "/" === e ? this._state = 5 : "<" === e ? (this._cbs.ontext(this._getSection()), 
            this._sectionStart = this._index) : ">" === e || 1 !== this._special || l(e) ? this._state = 1 : "!" === e ? (this._state = 15, 
            this._sectionStart = this._index + 1) : "?" === e ? (this._state = 17, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== e && "S" !== e ? 3 : 31, 
            this._sectionStart = this._index);
        }, e.prototype._stateInTagName = function(e) {
            ("/" === e || ">" === e || l(e)) && (this._emitToken("onopentagname"), this._state = 8, 
            this._index--);
        }, e.prototype._stateBeforeClosingTagName = function(e) {
            l(e) || (">" === e ? this._state = 1 : 1 !== this._special ? "s" === e || "S" === e ? this._state = 32 : (this._state = 1, 
            this._index--) : (this._state = 6, this._sectionStart = this._index));
        }, e.prototype._stateInClosingTagName = function(e) {
            (">" === e || l(e)) && (this._emitToken("onclosetag"), this._state = 7, this._index--);
        }, e.prototype._stateAfterClosingTagName = function(e) {
            ">" === e && (this._state = 1, this._sectionStart = this._index + 1);
        }, e.prototype._stateBeforeAttributeName = function(e) {
            ">" === e ? (this._cbs.onopentagend(), this._state = 1, this._sectionStart = this._index + 1) : "/" === e ? this._state = 4 : l(e) || (this._state = 9, 
            this._sectionStart = this._index);
        }, e.prototype._stateInSelfClosingTag = function(e) {
            ">" === e ? (this._cbs.onselfclosingtag(), this._state = 1, this._sectionStart = this._index + 1) : l(e) || (this._state = 8, 
            this._index--);
        }, e.prototype._stateInAttributeName = function(e) {
            ("=" === e || "/" === e || ">" === e || l(e)) && (this._cbs.onattribname(this._getSection()), 
            this._sectionStart = -1, this._state = 10, this._index--);
        }, e.prototype._stateAfterAttributeName = function(e) {
            "=" === e ? this._state = 11 : "/" === e || ">" === e ? (this._cbs.onattribend(), 
            this._state = 8, this._index--) : l(e) || (this._cbs.onattribend(), this._state = 9, 
            this._sectionStart = this._index);
        }, e.prototype._stateBeforeAttributeValue = function(e) {
            '"' === e ? (this._state = 12, this._sectionStart = this._index + 1) : "'" === e ? (this._state = 13, 
            this._sectionStart = this._index + 1) : l(e) || (this._state = 14, this._sectionStart = this._index, 
            this._index--);
        }, e.prototype._stateInAttributeValueDoubleQuotes = function(e) {
            '"' === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
            this._baseState = this._state, this._state = 51, this._sectionStart = this._index);
        }, e.prototype._stateInAttributeValueSingleQuotes = function(e) {
            "'" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
            this._baseState = this._state, this._state = 51, this._sectionStart = this._index);
        }, e.prototype._stateInAttributeValueNoQuotes = function(e) {
            l(e) || ">" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = 8, 
            this._index--) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), 
            this._baseState = this._state, this._state = 51, this._sectionStart = this._index);
        }, e.prototype._stateBeforeDeclaration = function(e) {
            this._state = "[" === e ? 22 : "-" === e ? 18 : 16;
        }, e.prototype._stateInDeclaration = function(e) {
            ">" === e && (this._cbs.ondeclaration(this._getSection()), this._state = 1, this._sectionStart = this._index + 1);
        }, e.prototype._stateInProcessingInstruction = function(e) {
            ">" === e && (this._cbs.onprocessinginstruction(this._getSection()), this._state = 1, 
            this._sectionStart = this._index + 1);
        }, e.prototype._stateBeforeComment = function(e) {
            "-" === e ? (this._state = 19, this._sectionStart = this._index + 1) : this._state = 16;
        }, e.prototype._stateInComment = function(e) {
            "-" === e && (this._state = 20);
        }, e.prototype._stateAfterComment1 = function(e) {
            this._state = "-" === e ? 21 : 19;
        }, e.prototype._stateAfterComment2 = function(e) {
            ">" === e ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), 
            this._state = 1, this._sectionStart = this._index + 1) : "-" !== e && (this._state = 19);
        }, e.prototype._stateBeforeCdata6 = function(e) {
            "[" === e ? (this._state = 28, this._sectionStart = this._index + 1) : (this._state = 16, 
            this._index--);
        }, e.prototype._stateInCdata = function(e) {
            "]" === e && (this._state = 29);
        }, e.prototype._stateAfterCdata1 = function(e) {
            this._state = "]" === e ? 30 : 28;
        }, e.prototype._stateAfterCdata2 = function(e) {
            ">" === e ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), 
            this._state = 1, this._sectionStart = this._index + 1) : "]" !== e && (this._state = 28);
        }, e.prototype._stateBeforeSpecial = function(e) {
            "c" === e || "C" === e ? this._state = 33 : "t" === e || "T" === e ? this._state = 43 : (this._state = 3, 
            this._index--);
        }, e.prototype._stateBeforeSpecialEnd = function(e) {
            2 !== this._special || "c" !== e && "C" !== e ? 3 !== this._special || "t" !== e && "T" !== e ? this._state = 1 : this._state = 47 : this._state = 38;
        }, e.prototype._stateBeforeScript5 = function(e) {
            ("/" === e || ">" === e || l(e)) && (this._special = 2), this._state = 3, this._index--;
        }, e.prototype._stateAfterScript5 = function(e) {
            ">" === e || l(e) ? (this._special = 1, this._state = 6, this._sectionStart = this._index - 6, 
            this._index--) : this._state = 1;
        }, e.prototype._stateBeforeStyle4 = function(e) {
            ("/" === e || ">" === e || l(e)) && (this._special = 3), this._state = 3, this._index--;
        }, e.prototype._stateAfterStyle4 = function(e) {
            ">" === e || l(e) ? (this._special = 1, this._state = 6, this._sectionStart = this._index - 5, 
            this._index--) : this._state = 1;
        }, e.prototype._parseNamedEntityStrict = function() {
            if (this._sectionStart + 1 < this._index) {
                var e = this._buffer.substring(this._sectionStart + 1, this._index), t = this._xmlMode ? s.default : o.default;
                Object.prototype.hasOwnProperty.call(t, e) && (this._emitPartial(t[e]), this._sectionStart = this._index + 1);
            }
        }, e.prototype._parseLegacyEntity = function() {
            var e = this._sectionStart + 1, t = this._index - e;
            for (t > 6 && (t = 6); t >= 2; ) {
                var n = this._buffer.substr(e, t);
                if (Object.prototype.hasOwnProperty.call(a.default, n)) return this._emitPartial(a.default[n]), 
                void (this._sectionStart += t + 1);
                t--;
            }
        }, e.prototype._stateInNamedEntity = function(e) {
            ";" === e ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), 
            this._state = this._baseState) : (e < "a" || e > "z") && (e < "A" || e > "Z") && (e < "0" || e > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (1 !== this._baseState ? "=" !== e && this._parseNamedEntityStrict() : this._parseLegacyEntity()), 
            this._state = this._baseState, this._index--);
        }, e.prototype._decodeNumericEntity = function(e, t) {
            var n = this._sectionStart + e;
            if (n !== this._index) {
                var r = this._buffer.substring(n, this._index), o = parseInt(r, t);
                this._emitPartial(i.default(o)), this._sectionStart = this._index;
            } else this._sectionStart--;
            this._state = this._baseState;
        }, e.prototype._stateInNumericEntity = function(e) {
            ";" === e ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), 
            this._index--);
        }, e.prototype._stateInHexEntity = function(e) {
            ";" === e ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (e < "a" || e > "f") && (e < "A" || e > "F") && (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), 
            this._index--);
        }, e.prototype._cleanup = function() {
            this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, 
            this._index = 0) : this._running && (1 === this._state ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), 
            this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", 
            this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), 
            this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0);
        }, e.prototype.write = function(e) {
            this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += e, 
            this._parse();
        }, e.prototype._parse = function() {
            for (;this._index < this._buffer.length && this._running; ) {
                var e = this._buffer.charAt(this._index);
                1 === this._state ? this._stateText(e) : 12 === this._state ? this._stateInAttributeValueDoubleQuotes(e) : 9 === this._state ? this._stateInAttributeName(e) : 19 === this._state ? this._stateInComment(e) : 8 === this._state ? this._stateBeforeAttributeName(e) : 3 === this._state ? this._stateInTagName(e) : 6 === this._state ? this._stateInClosingTagName(e) : 2 === this._state ? this._stateBeforeTagName(e) : 10 === this._state ? this._stateAfterAttributeName(e) : 13 === this._state ? this._stateInAttributeValueSingleQuotes(e) : 11 === this._state ? this._stateBeforeAttributeValue(e) : 5 === this._state ? this._stateBeforeClosingTagName(e) : 7 === this._state ? this._stateAfterClosingTagName(e) : 31 === this._state ? this._stateBeforeSpecial(e) : 20 === this._state ? this._stateAfterComment1(e) : 14 === this._state ? this._stateInAttributeValueNoQuotes(e) : 4 === this._state ? this._stateInSelfClosingTag(e) : 16 === this._state ? this._stateInDeclaration(e) : 15 === this._state ? this._stateBeforeDeclaration(e) : 21 === this._state ? this._stateAfterComment2(e) : 18 === this._state ? this._stateBeforeComment(e) : 32 === this._state ? this._stateBeforeSpecialEnd(e) : 38 === this._state ? E(this, e) : 39 === this._state ? b(this, e) : 40 === this._state ? w(this, e) : 33 === this._state ? m(this, e) : 34 === this._state ? g(this, e) : 35 === this._state ? v(this, e) : 36 === this._state ? y(this, e) : 37 === this._state ? this._stateBeforeScript5(e) : 41 === this._state ? S(this, e) : 42 === this._state ? this._stateAfterScript5(e) : 43 === this._state ? T(this, e) : 28 === this._state ? this._stateInCdata(e) : 44 === this._state ? A(this, e) : 45 === this._state ? O(this, e) : 46 === this._state ? this._stateBeforeStyle4(e) : 47 === this._state ? C(this, e) : 48 === this._state ? N(this, e) : 49 === this._state ? I(this, e) : 50 === this._state ? this._stateAfterStyle4(e) : 17 === this._state ? this._stateInProcessingInstruction(e) : 53 === this._state ? this._stateInNamedEntity(e) : 22 === this._state ? d(this, e) : 51 === this._state ? R(this, e) : 23 === this._state ? h(this, e) : 24 === this._state ? p(this, e) : 29 === this._state ? this._stateAfterCdata1(e) : 30 === this._state ? this._stateAfterCdata2(e) : 25 === this._state ? f(this, e) : 26 === this._state ? _(this, e) : 27 === this._state ? this._stateBeforeCdata6(e) : 55 === this._state ? this._stateInHexEntity(e) : 54 === this._state ? this._stateInNumericEntity(e) : 52 === this._state ? D(this, e) : this._cbs.onerror(Error("unknown _state"), this._state), 
                this._index++;
            }
            this._cleanup();
        }, e.prototype.pause = function() {
            this._running = !1;
        }, e.prototype.resume = function() {
            this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish();
        }, e.prototype.end = function(e) {
            this._ended && this._cbs.onerror(Error(".end() after done!")), e && this.write(e), 
            this._ended = !0, this._running && this._finish();
        }, e.prototype._finish = function() {
            this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend();
        }, e.prototype._handleTrailingData = function() {
            var e = this._buffer.substr(this._sectionStart);
            28 === this._state || 29 === this._state || 30 === this._state ? this._cbs.oncdata(e) : 19 === this._state || 20 === this._state || 21 === this._state ? this._cbs.oncomment(e) : 53 !== this._state || this._xmlMode ? 54 !== this._state || this._xmlMode ? 55 !== this._state || this._xmlMode ? 3 !== this._state && 8 !== this._state && 11 !== this._state && 10 !== this._state && 9 !== this._state && 13 !== this._state && 12 !== this._state && 14 !== this._state && 6 !== this._state && this._cbs.ontext(e) : (this._decodeNumericEntity(3, 16), 
            this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), 
            this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), 
            this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()));
        }, e.prototype.getAbsoluteIndex = function() {
            return this._bufferOffset + this._index;
        }, e.prototype._getSection = function() {
            return this._buffer.substring(this._sectionStart, this._index);
        }, e.prototype._emitToken = function(e) {
            this._cbs[e](this._getSection()), this._sectionStart = -1;
        }, e.prototype._emitPartial = function(e) {
            1 !== this._baseState ? this._cbs.onattribdata(e) : this._cbs.ontext(e);
        }, e;
    }();
    t.default = L;
}
