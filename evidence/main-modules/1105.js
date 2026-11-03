// analysis/pretty/main.js:89189; webpack module 1105
function(e, t, n) {
    "use strict";
    var r;
    try {
        throw new Error;
    } catch (e) {
        r = e;
    }
    var i = n(1106), o = n(1107);
    function a() {
        this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new o(16), 
        this._normalQueue = new o(16), this._haveDrainedQueues = !1;
        var e = this;
        this.drainQueues = function() {
            e._drainQueues();
        }, this._schedule = i;
    }
    function s(e) {
        for (;e.length() > 0; ) l(e);
    }
    function l(e) {
        var t = e.shift();
        if ("function" != typeof t) t._settlePromises(); else {
            var n = e.shift(), r = e.shift();
            t.call(n, r);
        }
    }
    a.prototype.setScheduler = function(e) {
        var t = this._schedule;
        return this._schedule = e, this._customScheduler = !0, t;
    }, a.prototype.hasCustomScheduler = function() {
        return this._customScheduler;
    }, a.prototype.haveItemsQueued = function() {
        return this._isTickUsed || this._haveDrainedQueues;
    }, a.prototype.fatalError = function(e, t) {
        t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), 
        process.exit(2)) : this.throwLater(e);
    }, a.prototype.throwLater = function(e, t) {
        if (1 === arguments.length && (t = e, e = function() {
            throw t;
        }), "undefined" != typeof setTimeout) setTimeout(function() {
            e(t);
        }, 0); else try {
            this._schedule(function() {
                e(t);
            });
        } catch (e) {
            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
        }
    }, a.prototype.invokeLater = function(e, t, n) {
        this._lateQueue.push(e, t, n), this._queueTick();
    }, a.prototype.invoke = function(e, t, n) {
        this._normalQueue.push(e, t, n), this._queueTick();
    }, a.prototype.settlePromises = function(e) {
        this._normalQueue._pushOne(e), this._queueTick();
    }, a.prototype._drainQueues = function() {
        s(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, s(this._lateQueue);
    }, a.prototype._queueTick = function() {
        this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
    }, a.prototype._reset = function() {
        this._isTickUsed = !1;
    }, e.exports = a, e.exports.firstLineError = r;
}
