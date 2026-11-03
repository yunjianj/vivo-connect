// analysis/pretty/main.js:28039; webpack module 235
function(e, t, n) {
    "use strict";
    function r(e) {
        var t, n, r, i;
        const {type: o} = e;
        switch (o) {
          case "image":
          case "video":
            return `${o}:${null !== (t = e.url) && void 0 !== t ? t : ""}`;

          case "livephoto":
            return `${o}:${null !== (n = e.imageUrl) && void 0 !== n ? n : ""}:${null !== (r = e.videoUrl) && void 0 !== r ? r : ""}`;

          default:
            return `${o}:${null !== (i = e.url) && void 0 !== i ? i : ""}`;
        }
    }
    function i(e, t) {
        if (e.length !== t.length) return !1;
        const n = e.map(r).sort(), i = t.map(r).sort();
        for (let e = 0; e < n.length; e++) if (n[e] !== i[e]) return !1;
        return !0;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.winDatasModel = t.WinDatasModel = void 0;
    class o {
        constructor() {
            this.winDatas = new Map, this.winSenders = new Map;
        }
        add(e, t) {
            return this.winDatas.set(e, [ ...t ]), global.__cm__mpLog.info(`[media-player][主进程][刷新缓存][add]，窗口ID：${e}，items: ${t ? JSON.stringify(t) : null}`), 
            this.getAllData(), this;
        }
        setSender(e, t) {
            this.winSenders.set(e, t), global.__cm__mpLog.info(`[media-player][主进程][setSender]，窗口ID：${e}，senderId：${t.id}`);
        }
        getSender(e) {
            return this.winSenders.get(e);
        }
        update(e, t) {
            const n = this.winDatas.has(e);
            return this.winDatas.set(e, [ ...t ]), global.__cm__mpLog.info(`[media-player][主进程][刷新缓存][update]，窗口ID：${e}，items: ${t ? JSON.stringify(t) : null}`), 
            this.getAllData(), {
                action: n ? "updated" : "added",
                windowId: e
            };
        }
        delete(e) {
            this.winDatas.has(e) && this.winDatas.delete(e);
        }
        findWindowId(e) {
            for (const [t, n] of this.winDatas.entries()) if (i(n, e)) return t;
            return null;
        }
        getAllWindowIds() {
            return Array.from(this.winDatas.keys());
        }
        getWindowData(e) {
            const t = this.winDatas.get(e);
            return t ? [ ...t ] : void 0;
        }
        getAllData() {
            const e = {};
            for (const [t, n] of this.winDatas.entries()) e[t] = [ ...n ];
            return global.__cm__mpLog.info("[media-player][主进程][获取缓存][getAllData]，snapshot: " + (e ? JSON.stringify(e) : null)), 
            e;
        }
        getTargetSender(e) {
            var t;
            const n = this.winSenders.get(e);
            return n && !n.isDestroyed() ? n : null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.webContents;
        }
        findWindowIdsBySender(e) {
            const t = [];
            for (const [n, r] of this.winSenders.entries()) r !== e && r.id !== e.id || t.push(n);
            return t;
        }
        clear() {
            this.winDatas.clear(), this.winSenders.clear();
        }
    }
    t.WinDatasModel = o, t.winDatasModel = new o, t.default = t.winDatasModel;
}
