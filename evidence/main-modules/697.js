// analysis/pretty/main.js:62275; webpack module 697
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mediaPlayerWindowManager = void 0;
    const r = n(0), i = r.__importDefault(n(1426)), o = n(1430), a = r.__importDefault(n(235));
    class s {
        constructor() {
            this.creationQueue = Promise.resolve(), this.windows = new Map;
        }
        static getInstance() {
            return s.instance || (s.instance = new s), s.instance;
        }
        createWindow(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return global.__cm__mpLog.info("[media-player][主进程][窗口管理器][创建窗口]，窗口ID：" + e), this.windows.has(e) ? Promise.resolve(this.getWindow(e)) : new Promise((n, o) => {
                    this.creationQueue = this.creationQueue.then(() => r.__awaiter(this, void 0, void 0, function*() {
                        try {
                            const r = new i.default(e);
                            this.windows.set(e, r), yield r.init(t), global.__cm__mpLog.info(`[media-player][主进程][窗口管理器][创建窗口][success], windows：${this.getAllWindowIds()}}`), 
                            n(r);
                        } catch (t) {
                            this.windows.delete(e), global.__cm__mpLog.error(`[media-player][主进程][窗口管理器][创建窗口][error], windows：${this.getAllWindowIds()}}`), 
                            o(t);
                        }
                    }));
                });
            });
        }
        getWindow(e) {
            return this.windows.get(e);
        }
        showWindow(e) {
            const t = this.getWindow(e);
            t ? (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][显示窗口]，窗口ID：" + e), t.show()) : global.__cm__mpLog.error("[media-player][主进程][窗口管理器][窗口不存在]，窗口ID：" + e);
        }
        traceWindow(e) {
            this.getWindow(e.windowId) ? global.__cm__mpLog.info("[media-player][主进程][窗口管理器][埋点：窗口打开失败]，窗口ID：" + e.windowId) : global.__cm__mpLog.error("[media-player][主进程][窗口管理器][埋点：窗口打开失败]，窗口ID：" + e.windowId);
        }
        closeWindow(e) {
            const t = this.getWindow(e);
            t && (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][关闭窗口]，窗口ID：" + e), t.close(), 
            this.windows.delete(e));
        }
        hideWindow(e) {
            const t = this.getWindow(e);
            t && (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][隐藏指定窗口]，窗口ID：" + e), t.hide(!0));
        }
        stopVideo(e) {
            for (const [t, n] of this.windows) n.isReady() && n.isAlive() && t !== e && n.send({
                event: "video:on-pause",
                payload: "",
                type: 1
            });
        }
        adjustVolume(e, t) {
            for (const [n, r] of this.windows) r.isReady() && r.isAlive() && n !== e && r.send({
                event: "media-player-volume-changed",
                payload: t,
                type: 1
            });
        }
        changeTheme(e) {
            for (const [t, n] of this.windows) n.isReady() && n.isAlive() && n.send({
                event: o.MEDIA_PLAYER_MESSAGE_ENUM.THEME_CHANGE,
                payload: e,
                type: 1
            });
        }
        changeScheme({lang: e, isRtl: t}) {
            for (const [n, r] of this.windows) r.isReady() && r.isAlive() && r.send({
                event: o.MEDIA_PLAYER_MESSAGE_ENUM.LANG_CHANGE,
                payload: {
                    lang: e,
                    isRtl: t
                },
                type: 1
            });
        }
        downloadEnded(e) {
            for (const [t, n] of this.windows) n.isReady() && n.isAlive() && n.send({
                event: "on-player-download-ended",
                payload: e,
                type: 1
            });
        }
        jumpPageByData(e) {
            const t = this.getWindow(e.windowId);
            t ? (global.__cm__mpLog.info("[media-player][主进程][common:jumpPageByData][同源跳转][查找到窗口，准备抬起] " + JSON.stringify(e)), 
            t.goToFront(), t.isReady() && t.isAlive() && t.send({
                event: "on-player-page-jumped",
                payload: e,
                type: 1
            })) : global.__cm__mpLog.info("[media-player][主进程][common:jumpPageByData][同源跳转][未查找到窗口] " + JSON.stringify(e));
        }
        maximize(e) {
            const t = this.getWindow(e);
            t && (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][窗口最大化]，窗口ID：" + e), t.maximize());
        }
        minimize(e) {
            const t = this.getWindow(e);
            t && (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][窗口最小化]，窗口ID：" + e), t.minimize());
        }
        restore(e) {
            const t = this.getWindow(e);
            t && (global.__cm__mpLog.info("[media-player][主进程][窗口管理器][窗口恢复]，窗口ID：" + e), t.restore());
        }
        callBackPlayer(e, t, n, r) {
            var i;
            const o = this.getWindow(e);
            o && (global.__cm__mpLog.info(`[media-player][主进程][窗口管理器][回调查看器]，窗口ID：${e}, mode: ${n}`), 
            "inline" === n ? null === (i = a.default.getTargetSender(e)) || void 0 === i || i.send(r, t) : o.send({
                event: r,
                payload: t,
                type: 1
            }));
        }
        broadcast(e) {
            for (const [t, n] of this.windows) n.isReady() && t === e.payload.windowId && n.send(e);
        }
        getAllWindowIds() {
            return Array.from(this.windows.keys());
        }
        getWindowCount() {
            return this.windows.size;
        }
        closeWindowsBySender(e) {
            const t = a.default.findWindowIdsBySender(e);
            global.__cm__mpLog.info(`[media-player][主进程][窗口管理器][根据sender关闭窗口]，senderId：${e.id}，关联窗口：${t}`);
            for (const e of t) this.closeWindow(e);
        }
        cleanup() {
            for (const [e, t] of this.windows) t.close();
            this.windows.clear();
        }
        getAddOnResult(e, t, n) {
            var i;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = this.getWindow(t);
                if (r) {
                    const t = `\n        (() => {\n          const func = window['${e}'];\n          if (typeof func === 'function') {\n            try {\n              return func(${n ? JSON.stringify(n) : void 0});\n            } catch (err) {\n              return {\n                success: false,\n                error: err.message,\n                stack: err.stack\n              };\n            }\n          }\n          return {\n            success: false,\n            error: 'Function ${e} not found in renderer process'\n          };\n        })()\n      `;
                    return yield null === (i = r.getWin()) || void 0 === i ? void 0 : i.webContents.executeJavaScript(t);
                }
                return {
                    success: !1,
                    error: "Window not found"
                };
            });
        }
        callAddOn(e, t, n) {
            var r;
            const i = this.getWindow(t);
            if (i) {
                const t = `\n        (() => {\n          const func = window['${e}'];\n          if (typeof func === 'function') {\n            func(${n ? JSON.stringify(n) : void 0});\n          }\n        })()\n      `;
                null === (r = i.getWin()) || void 0 === r || r.webContents.executeJavaScript(t);
            }
        }
    }
    t.mediaPlayerWindowManager = s.getInstance();
}
