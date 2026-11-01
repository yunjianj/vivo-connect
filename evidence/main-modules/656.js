// analysis/pretty/main.js:59128; webpack module 656
function(e, t) {
    (function() {
        var t = function(e, t) {
            return function() {
                return e.apply(t, arguments);
            };
        }, n = {}.hasOwnProperty;
        e.exports = function() {
            function e(e) {
                var r, i, o;
                for (r in this.assertLegalName = t(this.assertLegalName, this), this.assertLegalChar = t(this.assertLegalChar, this), 
                e || (e = {}), this.options = e, this.options.version || (this.options.version = "1.0"), 
                i = e.stringify || {}) n.call(i, r) && (o = i[r], this[r] = o);
            }
            return e.prototype.name = function(e) {
                return this.options.noValidation ? e : this.assertLegalName("" + e || "");
            }, e.prototype.text = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar(this.textEscape("" + e || ""));
            }, e.prototype.cdata = function(e) {
                return this.options.noValidation ? e : (e = (e = "" + e || "").replace("]]>", "]]]]><![CDATA[>"), 
                this.assertLegalChar(e));
            }, e.prototype.comment = function(e) {
                if (this.options.noValidation) return e;
                if ((e = "" + e || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + e);
                return this.assertLegalChar(e);
            }, e.prototype.raw = function(e) {
                return this.options.noValidation ? e : "" + e || "";
            }, e.prototype.attValue = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar(this.attEscape(e = "" + e || ""));
            }, e.prototype.insTarget = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.insValue = function(e) {
                if (this.options.noValidation) return e;
                if ((e = "" + e || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + e);
                return this.assertLegalChar(e);
            }, e.prototype.xmlVersion = function(e) {
                if (this.options.noValidation) return e;
                if (!(e = "" + e || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + e);
                return e;
            }, e.prototype.xmlEncoding = function(e) {
                if (this.options.noValidation) return e;
                if (!(e = "" + e || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + e);
                return this.assertLegalChar(e);
            }, e.prototype.xmlStandalone = function(e) {
                return this.options.noValidation ? e : e ? "yes" : "no";
            }, e.prototype.dtdPubID = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdSysID = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdElementValue = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdAttType = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdAttDefault = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdEntityValue = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.dtdNData = function(e) {
                return this.options.noValidation ? e : this.assertLegalChar("" + e || "");
            }, e.prototype.convertAttKey = "@", e.prototype.convertPIKey = "?", e.prototype.convertTextKey = "#text", 
            e.prototype.convertCDataKey = "#cdata", e.prototype.convertCommentKey = "#comment", 
            e.prototype.convertRawKey = "#raw", e.prototype.assertLegalChar = function(e) {
                var t, n;
                if (this.options.noValidation) return e;
                if (t = "", "1.0" === this.options.version) {
                    if (t = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, 
                    n = e.match(t)) throw new Error("Invalid character in string: " + e + " at index " + n.index);
                } else if ("1.1" === this.options.version && (t = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, 
                n = e.match(t))) throw new Error("Invalid character in string: " + e + " at index " + n.index);
                return e;
            }, e.prototype.assertLegalName = function(e) {
                var t;
                if (this.options.noValidation) return e;
                if (this.assertLegalChar(e), t = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, 
                !e.match(t)) throw new Error("Invalid character in name");
                return e;
            }, e.prototype.textEscape = function(e) {
                var t;
                return this.options.noValidation ? e : (t = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, 
                e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;"));
            }, e.prototype.attEscape = function(e) {
                var t;
                return this.options.noValidation ? e : (t = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, 
                e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;"));
            }, e;
        }();
    }).call(this);
}
