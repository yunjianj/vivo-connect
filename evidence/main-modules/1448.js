// analysis/pretty/main.js:107742; webpack module 1448
function(e, t, n) {
    "use strict";
    var r = n(9).Stream, i = n(5), o = function(e) {
        this.readable = this.writable = !0, this._paused = !1, this._driver = e;
    };
    i.inherits(o, r), o.prototype.pause = function() {
        this._paused = !0, this._driver.messages._paused = !0;
    }, o.prototype.resume = function() {
        this._paused = !1, this.emit("drain");
        var e = this._driver.messages;
        e._paused = !1, e.emit("drain");
    }, o.prototype.write = function(e) {
        return !!this.writable && (this._driver.parse(e), !this._paused);
    }, o.prototype.end = function(e) {
        if (this.writable) {
            void 0 !== e && this.write(e), this.writable = !1;
            var t = this._driver.messages;
            t.readable && (t.readable = t.writable = !1, t.emit("end"));
        }
    }, o.prototype.destroy = function() {
        this.end();
    };
    var a = function(e) {
        this.readable = this.writable = !0, this._paused = !1, this._driver = e;
    };
    i.inherits(a, r), a.prototype.pause = function() {
        this._driver.io._paused = !0;
    }, a.prototype.resume = function() {
        this._driver.io._paused = !1, this._driver.io.emit("drain");
    }, a.prototype.write = function(e) {
        return !!this.writable && ("string" == typeof e ? this._driver.text(e) : this._driver.binary(e), 
        !this._paused);
    }, a.prototype.end = function(e) {
        void 0 !== e && this.write(e);
    }, a.prototype.destroy = function() {}, t.IO = o, t.Messages = a;
}
