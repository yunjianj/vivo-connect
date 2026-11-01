// analysis/pretty/main.js:16851; webpack module 107
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UpdaterSignal = t.UPDATE_DOWNLOADED = t.DOWNLOAD_PROGRESS = t.CancellationToken = void 0, 
    t.addHandler = i;
    const r = n(36);
    Object.defineProperty(t, "CancellationToken", {
        enumerable: !0,
        get: function() {
            return r.CancellationToken;
        }
    }), t.DOWNLOAD_PROGRESS = "download-progress", t.UPDATE_DOWNLOADED = "update-downloaded";
    t.UpdaterSignal = class {
        constructor(e) {
            this.emitter = e;
        }
        login(e) {
            i(this.emitter, "login", e);
        }
        progress(e) {
            i(this.emitter, t.DOWNLOAD_PROGRESS, e);
        }
        updateDownloaded(e) {
            i(this.emitter, t.UPDATE_DOWNLOADED, e);
        }
        updateCancelled(e) {
            i(this.emitter, "update-cancelled", e);
        }
    };
    function i(e, t, n) {
        e.on(t, n);
    }
}
