// analysis/pretty/main.js:99199; webpack module 1292
function(e, t, n) {
    (function() {
        var t, r;
        t = n(1293), r = n(1294), e.exports = function() {
            function e() {
                this.defaultParams = {
                    "canonical-form": !1,
                    "cdata-sections": !1,
                    comments: !1,
                    "datatype-normalization": !1,
                    "element-content-whitespace": !0,
                    entities: !0,
                    "error-handler": new t,
                    infoset: !0,
                    "validate-if-schema": !1,
                    namespaces: !0,
                    "namespace-declarations": !0,
                    "normalize-characters": !1,
                    "schema-location": "",
                    "schema-type": "",
                    "split-cdata-sections": !0,
                    validate: !1,
                    "well-formed": !0
                }, this.params = Object.create(this.defaultParams);
            }
            return Object.defineProperty(e.prototype, "parameterNames", {
                get: function() {
                    return new r(Object.keys(this.defaultParams));
                }
            }), e.prototype.getParameter = function(e) {
                return this.params.hasOwnProperty(e) ? this.params[e] : null;
            }, e.prototype.canSetParameter = function(e, t) {
                return !0;
            }, e.prototype.setParameter = function(e, t) {
                return null != t ? this.params[e] = t : delete this.params[e];
            }, e;
        }();
    }).call(this);
}
