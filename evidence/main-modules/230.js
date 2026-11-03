// analysis/pretty/main.js:27671; webpack module 230
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(12)), o = r.__importDefault(n(1)), a = n(2), s = n(11), l = n(682), c = n(683), u = r.__importDefault(n(26)), {isMac: d, isMacVersionGE13: h} = u.default.getSysEnv;
    class p extends i.default {
        constructor() {
            super(), this.show = !1, this.height = 0, a.ipcMain.on(s.NOTIFICATION_MESSAGE_ENUM.PHONE_CALL_STATE_SYNC, (e, t) => {
                global.__log.info("[PhoneCallWindow]ws msg: " + JSON.stringify(t)), this.handleWsMsg(t);
            }), a.ipcMain.on(s.NOTIFICATION_MESSAGE_ENUM.SET_PHONE_CALL_DESC, (e, t) => {
                global.__log.info("[PhoneCallWindow]SET_PHONE_CALL_DESC: " + JSON.stringify(t)), 
                this.desc = t;
            });
        }
        static getInstance() {
            return this.instance || (this.instance = new p), this.instance;
        }
        get isShow() {
            return this.show;
        }
        get winHeight() {
            return this.show ? this.height : 0;
        }
        handleWsMsg(e) {
            var t, n, r, i, s;
            switch (e.state) {
              case l.PhoneCallState.PHONE_CALL_SHOW:
                if (this.show) return;
                this.show = !0, this.height = e.h, this.emit("show", this.height);
                break;

              case l.PhoneCallState.PHONE_CALL_CLOSE:
              case l.PhoneCallState.PHONE_CALL_DISCONNECT:
              case l.PhoneCallState.PHONE_CALL_MIN:
                if (!this.show) return;
                this.show = !1, this.emit("hide", this.height), this.height = 0;
                break;

              case l.PhoneCallState.PHONE_CALL_NEED_MICROPHONE_PERMISSION:
                if (this.lastCloseTime && this.lastCloseTime > e.ts) return;
                a.dialog.showMessageBox({
                    type: "none",
                    message: (null === (t = this.desc) || void 0 === t ? void 0 : t.phoneCallsPermissionTitle) || "",
                    detail: d ? h ? (null === (n = this.desc) || void 0 === n ? void 0 : n.phoneCallsPermissionDesc) || "" : (null === (r = this.desc) || void 0 === r ? void 0 : r.phoneCallsPermissionDesc2) || "" : "",
                    buttons: [ (null === (i = this.desc) || void 0 === i ? void 0 : i.searchPowerBtn) || "", (null === (s = this.desc) || void 0 === s ? void 0 : s.cancelBtn) || "" ],
                    defaultId: 0,
                    cancelId: 1,
                    icon: a.nativeImage.createFromPath(o.default.join(__dirname, "../../logo_mac.png"))
                }).then(({response: e}) => {
                    0 === e && c.openSystemPreferences("security", "Privacy_Microphone"), this.lastCloseTime = Date.now() + 1e3;
                });
            }
        }
        on(e, t) {
            return super.on(e, t);
        }
        emit(e, ...t) {
            return super.emit.apply(this, [ e, ...t ]);
        }
    }
    t.default = p.getInstance();
}
