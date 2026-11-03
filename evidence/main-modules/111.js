// analysis/pretty/main.js:17313; webpack module 111
function(e, t, n) {
    var r = t.noop = function() {};
    function i(e, t, n) {
        this.logFunction = n, this.identifier = e, this.uniqueID = t, this.buffer = [];
    }
    t.extend = function(e, t) {
        for (var n in t) e[n] = t[n];
    }, t.eventEmitterListenerCount = n(12).EventEmitter.listenerCount || function(e, t) {
        return e.listeners(t).length;
    }, t.bufferAllocUnsafe = Buffer.allocUnsafe ? Buffer.allocUnsafe : function(e) {
        return new Buffer(e);
    }, t.bufferFromString = Buffer.from ? Buffer.from : function(e, t) {
        return new Buffer(e, t);
    }, t.BufferingLogger = function(e, t) {
        var o = n(689)(e);
        if (o.enabled) {
            var a = new i(e, t, o), s = a.log.bind(a);
            return s.printOutput = a.printOutput.bind(a), s.enabled = o.enabled, s;
        }
        return o.printOutput = r, o;
    }, i.prototype.log = function() {
        return this.buffer.push([ new Date, Array.prototype.slice.call(arguments) ]), this;
    }, i.prototype.clear = function() {
        return this.buffer = [], this;
    }, i.prototype.printOutput = function(e) {
        e || (e = this.logFunction);
        var t = this.uniqueID;
        this.buffer.forEach(function(n) {
            var r = n[0].toLocaleString(), i = n[1].slice(), o = i[0];
            null != o && (o = "%s - %s - " + o.toString(), i.splice(0, 1, o, r, t), e.apply(global, i));
        });
    };
}
