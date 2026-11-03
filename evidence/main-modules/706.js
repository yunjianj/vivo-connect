// analysis/pretty/main.js:63199; webpack module 706
function(e, t, n) {
    "use strict";
    var r = n(5), i = n(237), o = n(353), a = function(e, t, n, r, a) {
        a = a || {}, this._stream = t, this._driver = i.http(e, {
            maxLength: a.maxLength,
            protocols: r
        });
        var s = this;
        if (this._stream && this._stream.writable) {
            if (!this._stream.readable) return this._stream.end();
            var l = function() {
                s._stream.removeListener("data", l);
            };
            this._stream.on("data", l), o.call(this, a), process.nextTick(function() {
                s._driver.start(), s._driver.io.write(n);
            });
        }
    };
    r.inherits(a, o), a.isWebSocket = function(e) {
        return i.isWebSocket(e);
    }, a.validateOptions = function(e, t) {
        i.validateOptions(e, t);
    }, a.WebSocket = a, a.Client = n(1462), a.EventSource = n(1463), e.exports = a;
}
