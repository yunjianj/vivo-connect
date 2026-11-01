// analysis/pretty/main.js:103664; webpack module 1409
function(e, t, n) {
    var r = n(5), i = n(12).EventEmitter;
    function o(e, t) {
        i.call(this), this.webSocketRequest = e, this.protocol = "____no_protocol____" === t ? null : t, 
        this.origin = e.origin, this.resource = e.resource, this.resourceURL = e.resourceURL, 
        this.httpRequest = e.httpRequest, this.remoteAddress = e.remoteAddress, this.webSocketVersion = e.webSocketVersion, 
        this.requestedExtensions = e.requestedExtensions, this.cookies = e.cookies;
    }
    r.inherits(o, i), o.prototype.accept = function(e, t) {
        var n = this.webSocketRequest.accept(this.protocol, e, t);
        return this.emit("requestAccepted", n), n;
    }, o.prototype.reject = function(e, t, n) {
        this.webSocketRequest.reject(e, t, n), this.emit("requestRejected", this);
    }, e.exports = o;
}
