// analysis/pretty/main.js:26837; webpack module 210
function(e, t, n) {
    var r = n(5), i = n(9).Stream, o = n(1134);
    function a() {
        this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, 
        this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, 
        this._insideLoop = !1, this._pendingNext = !1;
    }
    e.exports = a, r.inherits(a, i), a.create = function(e) {
        var t = new this;
        for (var n in e = e || {}) t[n] = e[n];
        return t;
    }, a.isStreamLike = function(e) {
        return "function" != typeof e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e && !Buffer.isBuffer(e);
    }, a.prototype.append = function(e) {
        if (a.isStreamLike(e)) {
            if (!(e instanceof o)) {
                var t = o.create(e, {
                    maxDataSize: 1 / 0,
                    pauseStream: this.pauseStreams
                });
                e.on("data", this._checkDataSize.bind(this)), e = t;
            }
            this._handleErrors(e), this.pauseStreams && e.pause();
        }
        return this._streams.push(e), this;
    }, a.prototype.pipe = function(e, t) {
        return i.prototype.pipe.call(this, e, t), this.resume(), e;
    }, a.prototype._getNext = function() {
        if (this._currentStream = null, this._insideLoop) this._pendingNext = !0; else {
            this._insideLoop = !0;
            try {
                do {
                    this._pendingNext = !1, this._realGetNext();
                } while (this._pendingNext);
            } finally {
                this._insideLoop = !1;
            }
        }
    }, a.prototype._realGetNext = function() {
        var e = this._streams.shift();
        void 0 !== e ? "function" == typeof e ? e(function(e) {
            a.isStreamLike(e) && (e.on("data", this._checkDataSize.bind(this)), this._handleErrors(e)), 
            this._pipeNext(e);
        }.bind(this)) : this._pipeNext(e) : this.end();
    }, a.prototype._pipeNext = function(e) {
        if (this._currentStream = e, a.isStreamLike(e)) return e.on("end", this._getNext.bind(this)), 
        void e.pipe(this, {
            end: !1
        });
        var t = e;
        this.write(t), this._getNext();
    }, a.prototype._handleErrors = function(e) {
        var t = this;
        e.on("error", function(e) {
            t._emitError(e);
        });
    }, a.prototype.write = function(e) {
        this.emit("data", e);
    }, a.prototype.pause = function() {
        this.pauseStreams && (this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.pause && this._currentStream.pause(), 
        this.emit("pause"));
    }, a.prototype.resume = function() {
        this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.resume && this._currentStream.resume(), 
        this.emit("resume");
    }, a.prototype.end = function() {
        this._reset(), this.emit("end");
    }, a.prototype.destroy = function() {
        this._reset(), this.emit("close");
    }, a.prototype._reset = function() {
        this.writable = !1, this._streams = [], this._currentStream = null;
    }, a.prototype._checkDataSize = function() {
        if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
            var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
            this._emitError(new Error(e));
        }
    }, a.prototype._updateDataSize = function() {
        this.dataSize = 0;
        var e = this;
        this._streams.forEach(function(t) {
            t.dataSize && (e.dataSize += t.dataSize);
        }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
    }, a.prototype._emitError = function(e) {
        this._reset(), this.emit("error", e);
    };
}
