// analysis/pretty/main.js:84945; webpack module 1062
function(e, t, n) {
    "use strict";
    var r, i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.browserModuleNames = t.commonModuleNames = void 0;
    const o = n(249);
    t.commonModuleNames = [ "clipboard", "nativeImage", "shell" ], t.browserModuleNames = [ "app", "autoUpdater", "BaseWindow", "BrowserView", "BrowserWindow", "contentTracing", "crashReporter", "dialog", "globalShortcut", "ipcMain", "inAppPurchase", "Menu", "MenuItem", "nativeTheme", "net", "netLog", "MessageChannelMain", "Notification", "powerMonitor", "powerSaveBlocker", "protocol", "pushNotifications", "safeStorage", "screen", "session", "ServiceWorkerMain", "ShareMenu", "systemPreferences", "TopLevelWindow", "TouchBar", "Tray", "utilityProcess", "View", "webContents", "WebContentsView", "webFrameMain" ].concat(t.commonModuleNames);
    const a = o.getElectronBinding("features");
    !1 !== (null === (r = null == a ? void 0 : a.isDesktopCapturerEnabled) || void 0 === r ? void 0 : r.call(a)) && t.browserModuleNames.push("desktopCapturer"), 
    !1 !== (null === (i = null == a ? void 0 : a.isViewApiEnabled) || void 0 === i ? void 0 : i.call(a)) && t.browserModuleNames.push("ImageView");
}
