// analysis/pretty/main.js:27255; webpack module 216
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(6)), a = r.__importDefault(n(76)), s = n(41), l = new a.default([ s.LogModule.FRAMEWORK, "common" ]).getExpandLog();
    class c {
        constructor() {
            this.cmdInfo = {
                hostnameFromService: "",
                nameFromService: "",
                isUsbFromService: !1,
                connSeq: -1,
                connectFlag: "",
                deviceId: "",
                isAutoConnect: !1,
                vivoAccount: "",
                deviceType: "",
                isOpenIdSame: !1,
                vivoshareIp: "",
                vivosharePort: "",
                pendingIntentId: "",
                source: "",
                action: "",
                fmSource: "",
                files: "",
                fileDeviceId: "",
                patchUpdate: "",
                switchConnectId: ""
            };
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
        init() {
            const e = i.app.commandLine.getSwitchValue("a");
            this.cmdInfo = {
                hostnameFromService: i.app.commandLine.getSwitchValue("h"),
                nameFromService: i.app.commandLine.getSwitchValue("n"),
                isUsbFromService: i.app.commandLine.hasSwitch("usb"),
                connSeq: parseInt(i.app.commandLine.getSwitchValue("seq")),
                connectFlag: i.app.commandLine.getSwitchValue("m"),
                deviceId: i.app.commandLine.getSwitchValue("i"),
                isAutoConnect: !(!e && "true" != e),
                vivoAccount: i.app.commandLine.getSwitchValue("account"),
                deviceType: i.app.commandLine.getSwitchValue("dt"),
                isOpenIdSame: "1" == i.app.commandLine.getSwitchValue("as"),
                vivoshareIp: i.app.commandLine.hasSwitch("ip") ? i.app.commandLine.getSwitchValue("ip") : "",
                vivosharePort: i.app.commandLine.hasSwitch("port") ? i.app.commandLine.getSwitchValue("port") : "",
                pendingIntentId: i.app.commandLine.getSwitchValue("pendingintentid"),
                source: i.app.commandLine.getSwitchValue("source"),
                action: i.app.commandLine.getSwitchValue("action"),
                fmSource: i.app.commandLine.getSwitchValue("target"),
                fileDeviceId: i.app.commandLine.getSwitchValue("deviceid"),
                files: i.app.commandLine.getSwitchValue("filepath"),
                patchUpdate: i.app.commandLine.getSwitchValue("patchUpdate"),
                switchConnectId: i.app.commandLine.getSwitchValue("switchConnectId")
            }, this.executeOtherLogic();
        }
        executeOtherLogic() {
            "win32" === process.platform && (i.app.commandLine.appendSwitch("no-sandbox"), i.app.commandLine.appendSwitch("force-color-profile", "srgb")), 
            i.app.commandLine.appendSwitch("js-flags", "--max-old-space-size=2048"), i.app.commandLine.appendSwitch("ignore-certificate-errors");
            const {hostnameFromService: e, pendingIntentId: t, source: n, action: r, fmSource: a, fileDeviceId: s, files: c} = this.cmdInfo;
            "" !== t && (l.info("call App pendingIntentId:" + t), i.app.exit()), "vivoControl" === n && "login" === r && (o.default.setItem("openLoginFlag", 1), 
            l.info(n + "call App :" + r)), e && i.app.focus(), l.info("commandLine:" + i.app.commandLine), 
            l.info("commandLine:" + n + r), l.info(`commandLine: fmSource:${a} fileDeviceId:${s} files:${c}`);
        }
        get() {
            return this.cmdInfo;
        }
        set(e) {
            this.cmdInfo = Object.assign({}, this.cmdInfo, e);
        }
    }
    t.default = c.getInstance();
}
