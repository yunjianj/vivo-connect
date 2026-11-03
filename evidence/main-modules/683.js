// analysis/pretty/main.js:61576; webpack module 683
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.openSystemPreferences = void 0;
    const r = n(0), i = n(2), o = "darwin" == process.platform, a = "win32" == process.platform;
    t.openSystemPreferences = (...e) => r.__awaiter(void 0, void 0, void 0, function*() {
        const [t, n] = e;
        o ? yield i.shell.openExternal(`x-apple.systempreferences:com.apple.preference.${t}${n ? "?" + n : ""}`) : a && (yield i.shell.openExternal("ms-settings:" + t));
    });
}
