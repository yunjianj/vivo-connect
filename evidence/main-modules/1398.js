// analysis/pretty/main.js:103136; webpack module 1398
function(e, t, n) {
    var r = n(111).extend, i = n(111), o = n(5), a = n(689)("websocket:server"), s = n(12).EventEmitter, l = n(691), c = function(e) {
        s.call(this), this._handlers = {
            upgrade: this.handleUpgrade.bind(this),
            requestAccepted: this.handleRequestAccepted.bind(this),
            requestResolved: this.handleRequestResolved.bind(this)
        }, this.connections = [], this.pendingRequests = [], e && this.mount(e);
    };
    o.inherits(c, s), c.prototype.mount = function(e) {
        if (this.config = {
            httpServer: null,
            maxReceivedFrameSize: 65536,
            maxReceivedMessageSize: 1048576,
            fragmentOutgoingMessages: !0,
            fragmentationThreshold: 16384,
            keepalive: !0,
            keepaliveInterval: 2e4,
            dropConnectionOnKeepaliveTimeout: !0,
            keepaliveGracePeriod: 1e4,
            useNativeKeepalive: !1,
            assembleFragments: !0,
            autoAcceptConnections: !1,
            ignoreXForwardedFor: !1,
            parseCookies: !0,
            parseExtensions: !0,
            disableNagleAlgorithm: !0,
            closeTimeout: 5e3
        }, r(this.config, e), !this.config.httpServer) throw new Error("You must specify an httpServer on which to mount the WebSocket server.");
        Array.isArray(this.config.httpServer) || (this.config.httpServer = [ this.config.httpServer ]);
        var t = this._handlers.upgrade;
        this.config.httpServer.forEach(function(e) {
            e.on("upgrade", t);
        });
    }, c.prototype.unmount = function() {
        var e = this._handlers.upgrade;
        this.config.httpServer.forEach(function(t) {
            t.removeListener("upgrade", e);
        });
    }, c.prototype.closeAllConnections = function() {
        this.connections.forEach(function(e) {
            e.close();
        }), this.pendingRequests.forEach(function(e) {
            process.nextTick(function() {
                e.reject(503);
            });
        });
    }, c.prototype.broadcast = function(e) {
        Buffer.isBuffer(e) ? this.broadcastBytes(e) : "function" == typeof e.toString && this.broadcastUTF(e);
    }, c.prototype.broadcastUTF = function(e) {
        this.connections.forEach(function(t) {
            t.sendUTF(e);
        });
    }, c.prototype.broadcastBytes = function(e) {
        this.connections.forEach(function(t) {
            t.sendBytes(e);
        });
    }, c.prototype.shutDown = function() {
        this.unmount(), this.closeAllConnections();
    }, c.prototype.handleUpgrade = function(e, t) {
        var n = this, r = new l(t, e, this.config);
        try {
            r.readHandshake();
        } catch (e) {
            return r.reject(e.httpCode ? e.httpCode : 400, e.message, e.headers), a("Invalid handshake: %s", e.message), 
            void this.emit("upgradeError", e);
        }
        this.pendingRequests.push(r), r.once("requestAccepted", this._handlers.requestAccepted), 
        r.once("requestResolved", this._handlers.requestResolved), t.once("close", function() {
            n._handlers.requestResolved(r);
        }), !this.config.autoAcceptConnections && i.eventEmitterListenerCount(this, "request") > 0 ? this.emit("request", r) : this.config.autoAcceptConnections ? r.accept(r.requestedProtocols[0], r.origin) : r.reject(404, "No handler is configured to accept the connection.");
    }, c.prototype.handleRequestAccepted = function(e) {
        var t = this;
        e.once("close", function(n, r) {
            t.handleConnectionClose(e, n, r);
        }), this.connections.push(e), this.emit("connect", e);
    }, c.prototype.handleConnectionClose = function(e, t, n) {
        var r = this.connections.indexOf(e);
        -1 !== r && this.connections.splice(r, 1), this.emit("close", e, t, n);
    }, c.prototype.handleRequestResolved = function(e) {
        var t = this.pendingRequests.indexOf(e);
        -1 !== t && this.pendingRequests.splice(t, 1);
    }, e.exports = c;
}
