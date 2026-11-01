// analysis/pretty/main.js:94298; webpack module 1194
function(e, t, n) {
    e.exports = c, c.SSL = u;
    var r = n(5), i = n(39).Agent, o = n(104), a = n(300), s = n(43).Agent;
    function l(e, t) {
        return "string" == typeof e ? e + ":" + t : e.host + ":" + e.port + ":" + (e.localAddress ? e.localAddress + ":" : ":");
    }
    function c(e) {
        var t = this;
        t.options = e || {}, t.requests = {}, t.sockets = {}, t.freeSockets = {}, t.maxSockets = t.options.maxSockets || i.defaultMaxSockets, 
        t.minSockets = t.options.minSockets || c.defaultMinSockets, t.on("free", function(e, n, r) {
            var i = l(n, r);
            if (t.requests[i] && t.requests[i].length) t.requests[i].shift().onSocket(e); else if (t.sockets[i].length < t.minSockets) {
                t.freeSockets[i] || (t.freeSockets[i] = []), t.freeSockets[i].push(e);
                var o = function() {
                    e.destroy();
                };
                e._onIdleError = o, e.on("error", o);
            } else e.destroy();
        });
    }
    function u(e) {
        c.call(this, e);
    }
    r.inherits(c, i), c.defaultMinSockets = 5, c.prototype.createConnection = o.createConnection, 
    c.prototype.addRequestNoreuse = i.prototype.addRequest, c.prototype.addRequest = function(e, t, n) {
        var r = l(t, n);
        if ("string" != typeof t) {
            var i = t;
            n = i.port, t = i.host;
        }
        if (this.freeSockets[r] && this.freeSockets[r].length > 0 && !e.useChunkedEncodingByDefault) {
            var o = this.freeSockets[r].pop();
            o.removeListener("error", o._onIdleError), delete o._onIdleError, e._reusedSocket = !0, 
            e.onSocket(o);
        } else this.addRequestNoreuse(e, t, n);
    }, c.prototype.removeSocket = function(e, t, n, r) {
        var i;
        this.sockets[t] ? -1 !== (i = this.sockets[t].indexOf(e)) && this.sockets[t].splice(i, 1) : this.sockets[t] && 0 === this.sockets[t].length && (delete this.sockets[t], 
        delete this.requests[t]);
        this.freeSockets[t] && (-1 !== (i = this.freeSockets[t].indexOf(e)) && (this.freeSockets[t].splice(i, 1), 
        0 === this.freeSockets[t].length && delete this.freeSockets[t]));
        this.requests[t] && this.requests[t].length && this.createSocket(t, n, r).emit("free");
    }, r.inherits(u, c), u.prototype.createConnection = function(e, t, n) {
        n = "object" == typeof e ? e : "object" == typeof t ? t : "object" == typeof n ? n : {};
        "number" == typeof e && (n.port = e);
        "string" == typeof t && (n.host = t);
        return a.connect(n);
    }, u.prototype.addRequestNoreuse = s.prototype.addRequest;
}
