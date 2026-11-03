// analysis/pretty/main.js:103612; webpack module 1408
function(e, t, n) {
    var r = n(111).extend, i = n(5), o = n(12).EventEmitter, a = n(1409);
    function s(e) {
        o.call(this), this.config = {
            server: null
        }, e && r(this.config, e), this.handlers = [], this._requestHandler = this.handleRequest.bind(this), 
        this.config.server && this.attachServer(this.config.server);
    }
    i.inherits(s, o), s.prototype.attachServer = function(e) {
        if (!e) throw new Error("You must specify a WebSocketServer instance to attach to.");
        this.server = e, this.server.on("request", this._requestHandler);
    }, s.prototype.detachServer = function() {
        if (!this.server) throw new Error("Cannot detach from server: not attached.");
        this.server.removeListener("request", this._requestHandler), this.server = null;
    }, s.prototype.mount = function(e, t, n) {
        if (!e) throw new Error("You must specify a path for this handler.");
        if (t || (t = "____no_protocol____"), !n) throw new Error("You must specify a callback for this handler.");
        if (!((e = this.pathToRegExp(e)) instanceof RegExp)) throw new Error("Path must be specified as either a string or a RegExp.");
        var r = e.toString();
        if (t = t.toLocaleLowerCase(), -1 !== this.findHandlerIndex(r, t)) throw new Error("You may only mount one handler per path/protocol combination.");
        this.handlers.push({
            path: e,
            pathString: r,
            protocol: t,
            callback: n
        });
    }, s.prototype.unmount = function(e, t) {
        var n = this.findHandlerIndex(this.pathToRegExp(e).toString(), t);
        if (-1 === n) throw new Error("Unable to find a route matching the specified path and protocol.");
        this.handlers.splice(n, 1);
    }, s.prototype.findHandlerIndex = function(e, t) {
        t = t.toLocaleLowerCase();
        for (var n = 0, r = this.handlers.length; n < r; n++) {
            var i = this.handlers[n];
            if (i.pathString === e && i.protocol === t) return n;
        }
        return -1;
    }, s.prototype.pathToRegExp = function(e) {
        return "string" == typeof e && ("*" === e ? e = /^.*$/ : (e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 
        e = new RegExp("^" + e + "$"))), e;
    }, s.prototype.handleRequest = function(e) {
        var t = e.requestedProtocols;
        0 === t.length && (t = [ "____no_protocol____" ]);
        for (var n = 0; n < t.length; n++) for (var r = t[n].toLocaleLowerCase(), i = 0, o = this.handlers.length; i < o; i++) {
            var s = this.handlers[i];
            if (s.path.test(e.resourceURL.pathname) && (r === s.protocol || "*" === s.protocol)) {
                var l = new a(e, r);
                return void s.callback(l);
            }
        }
        e.reject(404, "No handler is available for the given request.");
    }, e.exports = s;
}
