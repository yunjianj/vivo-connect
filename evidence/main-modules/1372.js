// analysis/pretty/main.js:102309; webpack module 1372
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ProgressDifferentialDownloadCallbackTransform = void 0;
    const r = n(9);
    var i;
    !function(e) {
        e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
    }(i || (i = {}));
    class o extends r.Transform {
        constructor(e, t, n) {
            super(), this.progressDifferentialDownloadInfo = e, this.cancellationToken = t, 
            this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, 
            this.expectedBytes = 0, this.index = 0, this.operationType = i.COPY, this.nextUpdate = this.start + 1e3;
        }
        _transform(e, t, n) {
            if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
            if (this.operationType == i.COPY) return void n(null, e);
            this.transferred += e.length, this.delta += e.length;
            const r = Date.now();
            r >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = r + 1e3, 
            this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                bytesPerSecond: Math.round(this.transferred / ((r - this.start) / 1e3))
            }), this.delta = 0), n(null, e);
        }
        beginFileCopy() {
            this.operationType = i.COPY;
        }
        beginRangeDownload() {
            this.operationType = i.DOWNLOAD, this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++];
        }
        endRangeDownload() {
            this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            });
        }
        _flush(e) {
            this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            }), this.delta = 0, this.transferred = 0, e(null));
        }
    }
    t.ProgressDifferentialDownloadCallbackTransform = o;
}
