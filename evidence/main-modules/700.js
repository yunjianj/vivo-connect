// analysis/pretty/main.js:62529; webpack module 700
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = n(2), a = n(131), s = r.__importDefault(n(89));
    class l {
        constructor() {
            this.pollingTimer = null, this.lastClipboardText = "", this.lastClipboardFormats = "", 
            this._webContent = null, this.isPolling = !1, this.webContentRetryTimer = null, 
            this.webContentRetryCount = 0, this.MAX_RETRY_COUNT = 10, this.RETRY_INTERVAL = 2e3;
        }
        get webContent() {
            var e, t;
            return this._webContent ? this._webContent : null !== (t = null === (e = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === e ? void 0 : e.webContents) && void 0 !== t ? t : null;
        }
        static getInstance() {
            return this.instance || (this.instance = new l, this.instance.init()), this.instance;
        }
        init() {
            var e;
            null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] init"), 
            this.registerIpcHandlers();
        }
        setWebContent(e) {
            var t;
            this._webContent = e, null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] setWebContent: " + !!e), 
            e ? this.stopWebContentRetry() : this.startWebContentRetry();
        }
        startWebContentRetry() {
            var e, t;
            this.webContentRetryTimer ? null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] startWebContentRetry: already retrying") : (this.webContentRetryCount = 0, 
            null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] startWebContentRetry: starting retry mechanism"), 
            this.webContentRetryTimer = setInterval(() => {
                var e, t, n;
                this.webContentRetryCount++, null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info(`[ClipboardManager] webContentRetry: attempt ${this.webContentRetryCount}/${this.MAX_RETRY_COUNT}`);
                const r = s.default.getInstance().getWebContent();
                r ? (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] webContentRetry: got webContent success"), 
                this._webContent = r, this.stopWebContentRetry()) : this.webContentRetryCount >= this.MAX_RETRY_COUNT && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.warn(`[ClipboardManager] webContentRetry: max retry count reached (${this.MAX_RETRY_COUNT})`), 
                this.stopWebContentRetry());
            }, this.RETRY_INTERVAL));
        }
        stopWebContentRetry() {
            var e;
            this.webContentRetryTimer && (clearInterval(this.webContentRetryTimer), this.webContentRetryTimer = null, 
            null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] stopWebContentRetry: stopped"));
        }
        registerIpcHandlers() {
            o.ipcMain.handle(a.ConnectionMainEvent.CLIPBOARD_READ_TEXT, () => this.readText()), 
            o.ipcMain.handle(a.ConnectionMainEvent.CLIPBOARD_WRITE_TEXT, (e, t) => this.writeText(t)), 
            o.ipcMain.on(a.ConnectionMainEvent.CLIPBOARD_START_POLLING, () => {
                this.startPolling();
            }), o.ipcMain.on(a.ConnectionMainEvent.CLIPBOARD_STOP_POLLING, () => {
                this.stopPolling();
            });
        }
        readText() {
            var e, t;
            try {
                const t = i.clipboard.readText();
                return null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info(`[ClipboardManager] readText: length=${t.length}, preview=${t.substring(0, 100)}`), 
                t;
            } catch (e) {
                return null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.error("[ClipboardManager] readText error: " + e), 
                "";
            }
        }
        writeText(e) {
            var t, n;
            try {
                return i.clipboard.writeText(e), null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info(`[ClipboardManager] writeText: ${e.substring(0, 100)}...`), 
                this.lastClipboardText = e, !0;
            } catch (e) {
                return null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.error("[ClipboardManager] writeText error: " + e), 
                !1;
            }
        }
        startPolling(e = 1e3) {
            var t, n;
            this.isPolling ? null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] startPolling: already polling") : (this.isPolling = !0, 
            this.lastClipboardText = this.readText(), this.lastClipboardFormats = JSON.stringify(i.clipboard.availableFormats()), 
            this.pollingTimer = setInterval(() => {
                this.checkClipboardChange();
            }, e), null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info(`[ClipboardManager] startPolling: interval=${e}ms`));
        }
        stopPolling() {
            var e, t;
            this.isPolling ? (this.pollingTimer && (clearInterval(this.pollingTimer), this.pollingTimer = null), 
            this.isPolling = !1, null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] stopPolling")) : null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] stopPolling: not polling");
        }
        checkClipboardChange() {
            var e, t, n;
            try {
                const n = i.clipboard.availableFormats();
                if (!n.some(e => e.includes("text") || e.includes("plain-string") || e.includes("utf8"))) {
                    const t = JSON.stringify(n);
                    return void (t !== this.lastClipboardFormats && (this.lastClipboardFormats = t, 
                    null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] clipboard changed but not text, formats: " + t)));
                }
                const r = i.clipboard.readText();
                this.lastClipboardFormats = "", r && r !== this.lastClipboardText && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[ClipboardManager] clipboard changed, text length: " + r.length), 
                this.lastClipboardText = r, this.notifyClipboardChanged(r));
            } catch (e) {
                null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.error("[ClipboardManager] checkClipboardChange error: " + e);
            }
        }
        notifyClipboardChanged(e) {
            var t;
            this.webContent ? this.webContent.send(a.ConnectionMainEvent.CLIPBOARD_TEXT_CHANGED, e) : null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.warn("[ClipboardManager] notifyClipboardChanged: webContent is null");
        }
        getIsPolling() {
            return this.isPolling;
        }
        destroy() {
            var e;
            this.stopPolling(), this.stopWebContentRetry(), this._webContent = null, null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[ClipboardManager] destroy");
        }
    }
    t.default = l;
}
