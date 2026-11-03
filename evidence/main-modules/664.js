// analysis/pretty/main.js:60475; webpack module 664
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ProgressCallbackTransform = void 0;
    const r = n(9);
    class i extends r.Transform {
        constructor(e, t, n) {
            super(), this.total = e, this.cancellationToken = t, this.onProgress = n, this.start = Date.now(), 
            this.transferred = 0, this.delta = 0, this.nextUpdate = this.start + 1e3;
        }
        _transform(e, t, n) {
            if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
            this.transferred += e.length, this.delta += e.length;
            const r = Date.now();
            r >= this.nextUpdate && this.transferred !== this.total && (this.nextUpdate = r + 1e3, 
            this.onProgress({
                total: this.total,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.total * 100,
                bytesPerSecond: Math.round(this.transferred / ((r - this.start) / 1e3))
            }), this.delta = 0), n(null, e);
        }
        _flush(e) {
            this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
                total: this.total,
                delta: this.delta,
                transferred: this.total,
                percent: 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            }), this.delta = 0, e(null));
        }
    }
    t.ProgressCallbackTransform = i;
}
