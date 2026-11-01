// analysis/pretty/main.js:123356; webpack module 1617
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this._func = e;
        }
        return e.prototype.onattribute = function(e, t) {
            this._func("onattribute", e, t);
        }, e.prototype.oncdatastart = function() {
            this._func("oncdatastart");
        }, e.prototype.oncdataend = function() {
            this._func("oncdataend");
        }, e.prototype.ontext = function(e) {
            this._func("ontext", e);
        }, e.prototype.onprocessinginstruction = function(e, t) {
            this._func("onprocessinginstruction", e, t);
        }, e.prototype.oncomment = function(e) {
            this._func("oncomment", e);
        }, e.prototype.oncommentend = function() {
            this._func("oncommentend");
        }, e.prototype.onclosetag = function(e) {
            this._func("onclosetag", e);
        }, e.prototype.onopentag = function(e, t) {
            this._func("onopentag", e, t);
        }, e.prototype.onopentagname = function(e) {
            this._func("onopentagname", e);
        }, e.prototype.onerror = function(e) {
            this._func("onerror", e);
        }, e.prototype.onend = function() {
            this._func("onend");
        }, e.prototype.onparserinit = function(e) {
            this._func("onparserinit", e);
        }, e.prototype.onreset = function() {
            this._func("onreset");
        }, e;
    }();
    t.default = r;
}
