// analysis/pretty/main.js:109679; webpack module 1480
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDeviceIdByBleId = t.isDeviceConnected = void 0;
    const r = n(0).__importDefault(n(6));
    t.isDeviceConnected = e => (r.default.getItem("getConnectedDeviceInfoList") || []).some(t => t.belId === e.deviceId || t.deviceId === e.deviceId), 
    t.getDeviceIdByBleId = e => {
        const t = (r.default.getItem("getConnectedDeviceInfoList") || []).find(t => t.belId === e.deviceId || t.deviceId === e.deviceId);
        return t ? t.deviceId : "";
    };
}
