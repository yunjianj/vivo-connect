// analysis/pretty/main.js:81107; webpack module 987
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(988)), o = r.__importDefault(n(265)), a = r.__importDefault(n(349)), s = n(32), l = r.__importDefault(n(705)), c = r.__importDefault(n(95)), u = r.__importDefault(n(650)), d = r.__importDefault(n(1488));
    class h {
        static getInstance() {
            return null == this.instance && (this.instance = new h, this.instance.init()), this.instance;
        }
        getHistoryPhoneManager() {
            return i.default.getInstance();
        }
        getMirrorProcessManager() {
            return o.default.getInstance();
        }
        getToastManager() {
            return a.default.getInstance();
        }
        getPathUtil() {
            return s.PathUtil;
        }
        getWindowsServiceManager() {
            return l.default.getInstance();
        }
        getHttpServer() {
            return c.default;
        }
        getRightMenuManger() {
            return u.default;
        }
        init() {
            d.default.initOfflineTransferEvent();
        }
        getConnectedState() {}
        ble_connect_device() {}
        disConnect() {
            return r.__awaiter(this, void 0, void 0, function*() {});
        }
        reconnect() {
            return r.__awaiter(this, void 0, void 0, function*() {});
        }
        ClearConnectStatus() {
            return r.__awaiter(this, void 0, void 0, function*() {});
        }
    }
    t.default = h;
}
