// analysis/pretty/main.js:43288; webpack module 418
function(e, t, n) {
    "use strict";
    const r = n(5), i = n(268), {LEVEL: o} = n(27), a = e.exports = function(e = {}) {
        i.call(this, {
            objectMode: !0,
            highWaterMark: e.highWaterMark
        }), this.format = e.format, this.level = e.level, this.handleExceptions = e.handleExceptions, 
        this.handleRejections = e.handleRejections, this.silent = e.silent, e.log && (this.log = e.log), 
        e.logv && (this.logv = e.logv), e.close && (this.close = e.close), this.once("pipe", e => {
            this.levels = e.levels, this.parent = e;
        }), this.once("unpipe", e => {
            e === this.parent && (this.parent = null, this.close && this.close());
        });
    };
    r.inherits(a, i), a.prototype._write = function(e, t, n) {
        if (this.silent || !0 === e.exception && !this.handleExceptions) return n(null);
        const r = this.level || this.parent && this.parent.level;
        if (!r || this.levels[r] >= this.levels[e[o]]) {
            if (e && !this.format) return this.log(e, n);
            let t, r;
            try {
                r = this.format.transform(Object.assign({}, e), this.format.options);
            } catch (e) {
                t = e;
            }
            if (t || !r) {
                if (n(), t) throw t;
                return;
            }
            return this.log(r, n);
        }
        return this._writableState.sync = !1, n(null);
    }, a.prototype._writev = function(e, t) {
        if (this.logv) {
            const n = e.filter(this._accept, this);
            return n.length ? this.logv(n, t) : t(null);
        }
        for (let n = 0; n < e.length; n++) {
            if (!this._accept(e[n])) continue;
            if (e[n].chunk && !this.format) {
                this.log(e[n].chunk, e[n].callback);
                continue;
            }
            let r, i;
            try {
                i = this.format.transform(Object.assign({}, e[n].chunk), this.format.options);
            } catch (e) {
                r = e;
            }
            if (r || !i) {
                if (e[n].callback(), r) throw t(null), r;
            } else this.log(i, e[n].callback);
        }
        return t(null);
    }, a.prototype._accept = function(e) {
        const t = e.chunk;
        if (this.silent) return !1;
        const n = this.level || this.parent && this.parent.level;
        return !(!0 !== t.exception && n && !(this.levels[n] >= this.levels[t[o]]) || !this.handleExceptions && !0 === t.exception);
    }, a.prototype._nop = function() {};
}
