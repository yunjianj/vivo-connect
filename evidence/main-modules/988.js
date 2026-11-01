// analysis/pretty/main.js:81154; webpack module 988
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HistoryPhoneManager = void 0;
    const r = n(0).__importDefault(n(252)), i = n(100);
    class o {
        constructor() {
            this.electronStore = null;
        }
        static getInstance() {
            return this.instance || (this.instance = new o, this.instance.init()), this.instance;
        }
        init() {
            this.electronStore = new r.default({
                name: "historyPhone"
            }), this.electronStore.has("phone") || this.electronStore.set("phone", []), this.electronStore.has("last_time_phone") || this.electronStore.set("last_time_phone", {}), 
            this.electronStore.has("last_connect_succ_device_type") || (this.electronStore.get("last_time_phone") ? this.electronStore.set("last_connect_succ_device_type", i.DeviceType.PHONE) : this.electronStore.get("last_time_pad") && this.electronStore.set("last_connect_succ_device_type", i.DeviceType.PAD)), 
            this.electronStore.has("cloud_auth_result_MAP") || this.electronStore.set("cloud_auth_result_MAP", {}), 
            this.electronStore.has("cloud_need_popover") || this.electronStore.set("cloud_need_popover", {}), 
            this.electronStore.has("HISTORY_DEVICE_MAP") || this.electronStore.set("HISTORY_DEVICE_MAP", {});
        }
        setHistoryDevice(e) {
            if (e && e.bleId) {
                const t = this.electronStore.get("HISTORY_DEVICE_MAP") || {};
                t[e.bleId] = Object.assign(Object.assign({}, t[e.bleId]), e), this.electronStore.set("HISTORY_DEVICE_MAP", t);
            } else global.__log.info("[history-phone-manager.ts][setHistoryDevice] device setup failed, info: " + JSON.stringify(e));
        }
        getHistoryDevice(e, t) {
            var n;
            let r = null;
            if (e) {
                const o = this.electronStore.get("HISTORY_DEVICE_MAP") || {};
                if (t === i.CONNECT_MODE.USB) {
                    for (const t in o) if (Object.prototype.hasOwnProperty.call(o, t)) {
                        const i = o[t];
                        if ((null === (n = i.adb) || void 0 === n ? void 0 : n.id) === e) {
                            r = i;
                            break;
                        }
                    }
                } else r = o[e];
            } else global.__log.info("[history-phone-manager.ts][getHistoryDevice] deviceId error: " + e);
            return r;
        }
        getHistoryDeviceMap() {
            const e = this.electronStore.get("HISTORY_DEVICE_MAP") || {}, t = new Map;
            for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]);
            return t;
        }
        getIsNeedPopover(e) {
            const t = this.electronStore.get("cloud_need_popover");
            return global.__log.info("[history-phone-manager.ts][getIsNeedPopover] deviceId: " + JSON.stringify(t) + e), 
            t[e];
        }
        setIsNeedPopover(e, t) {
            const n = this.electronStore.get("cloud_need_popover"), r = Object.keys(n);
            (t || r.includes(e)) && (t && !r.includes(e) ? n[e] = t : n[e] = !1, global.__log.info("[history-phone-manager.ts][setIsNeedPopover] deviceId: " + JSON.stringify(n)), 
            this.electronStore.set("cloud_need_popover", n));
        }
        setCloudAuthResult(e) {
            if (e && e.deviceId) {
                const t = this.electronStore.get("cloud_auth_result_MAP") || {};
                t[e.deviceId] = Object.assign(Object.assign({}, t[e.deviceId]), e), this.electronStore.set("cloud_auth_result_MAP", t);
            } else global.__log.info("[history-phone-manager.ts][setCloudAuthResult] info: " + JSON.stringify(e));
        }
        getCloudAuthResult(e) {
            let t = null;
            if (e) {
                t = (this.electronStore.get("cloud_auth_result_MAP") || {})[e];
            } else global.__log.info("[history-phone-manager.ts][getCloudAuthResult] deviceId: " + e);
            return t;
        }
        isHistoryDeviceEmpty() {
            return !this.electronStore.get("last_time_phone") || !this.electronStore.get("last_time_pad");
        }
        isPhoneExistInHistory(e, t) {
            var n, r;
            if ("" == e) return !1;
            let i = this.electronStore.get("phone") || [];
            for (let o = 0; o < i.length; o++) {
                if (i[o].device_id == e) return !0;
                if (t && ((null === (n = i[o][t]) || void 0 === n ? void 0 : n.id) === e || (null === (r = i[o][t]) || void 0 === r ? void 0 : r.deviceId) === e)) return !0;
            }
            return !1;
        }
        setLastConnectDevice(e, t = !1) {
            try {
                let n = "last_time_phone";
                (null == e ? void 0 : e.deviceType) === i.DeviceType.PAD && (n = "last_time_pad"), 
                e.connectState = i.CONNECT_STATE.UNCONNECT, this.electronStore.set(n, e), t || this.electronStore.set("last_connect_succ_device_type", (null == e ? void 0 : e.deviceType) || i.DeviceType.PHONE);
            } catch (e) {
                global.__log.info("setLastConnectDevice: " + JSON.stringify(e));
            }
        }
        getLastConnectDeviceType() {
            return this.electronStore.get("last_connect_succ_device_type") || null;
        }
        getLastConnectDevice(e) {
            let t = "last_time_phone";
            return e === i.DeviceType.PAD && (t = "last_time_pad"), this.electronStore.get(t);
        }
        getAllHistoryPhones() {
            return this.electronStore.get("phone") || [];
        }
        getAllHistoryAutoConnectPhones() {
            let e = [], t = this.electronStore.get("phone") || [];
            for (let n = 0; n < t.length; n++) 1 == t[n].autoConnect && e.push(t[n]);
            return e;
        }
        addHistoryPhone(e) {
            let t = this.electronStore.get("phone") || [];
            if (Array.isArray(t)) {
                let n = !1;
                for (let r = 0; r < t.length; r++) t[r].device_id === e.device_id && (n = !0, t[r] = Object.assign(Object.assign({}, t[r]), e));
                n || t.push(e);
            }
            global.__log.info("history phone list: ", JSON.stringify(t)), this.electronStore.set("phone", t);
        }
        deleteHistoryPhone(e) {
            let t = this.electronStore.get("phone") || [];
            for (let n = 0; n < t.length; n++) if (t[n].device_id == e) {
                t.splice(n, 1);
                break;
            }
            this.electronStore.set("phone", t);
        }
        updateHistoryPhone(e, t) {
            let n = this.electronStore.get("phone");
            for (let r = 0; r < n.length; r++) if (n[r].device_id == e) {
                n[r] = Object.assign(Object.assign({}, n[r]), t);
                break;
            }
            this.electronStore.set("phone", n);
        }
        setPhoneAutoConnect(e, t) {
            console.log(e, t);
            let n = this.electronStore.get("phone");
            for (let r = 0; r < n.length; r++) if (n[r].device_id == e) {
                n[r].autoConnect = t;
                break;
            }
            this.electronStore.set("phone", n);
        }
        haveAutoConnectDevice(e) {
            let t = "last_time_phone";
            e === i.DeviceType.PAD && (t = "last_time_pad");
            const n = this.electronStore.get(t);
            return !!(null == n ? void 0 : n.autoConnect);
        }
        setAutoConnectDevice(e) {
            e && e.mobileDeviceId && (e.autoConnect = !0), this.setLastConnectDevice(e);
        }
        getAutoConnectDevice(e) {
            const t = this.getLastConnectDevice(e);
            return (null == t ? void 0 : t.autoConnect) ? t : null;
        }
    }
    t.HistoryPhoneManager = o, t.default = o;
}
