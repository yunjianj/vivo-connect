// analysis/pretty/main.js:105893; webpack module 1433
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.newErrorX = t.ErrorX = t.ConnectionErrorCode = void 0, function(e) {
        e.pingFailed = "PI", e.versionFailed = "VC", e.baseinfoFailed = "BI", e.ws10380Failed = "WS", 
        e.screenLocked = "0007", e.deviceBusy = "0009", e.privacyNotAgreed = "0016", e.noPcSuite = "noPcSuite", 
        e.adbFailed = "adbFailed", e.startAcvitivtyFailed = "SA", e.startServerFailed = "SS", 
        e.startForwardFailed = "SF", e.gattServerFailed = "GS", e.serviceFailed = "SC", 
        e.characteristicsFailed = "GC", e.bleRequestFailed = "PC", e.bleRequestTimeout = "TO", 
        e.bleResponseIPFailed = "RI", e.bleNoFind = "NF", e.createAPFailed = "AP", e.peerCancel = "peerCancel", 
        e.peerNotAllow = "peerNotAllow", e.pcHotspotEnable = "pcHotspotEnable", e.isProjection = "isProjection", 
        e.needUpdate = "UP", e.pcNeedUpdate = "PCUP", e.canceling = "10013", e.phoneSAPenable = "10020", 
        e.phoneP2Pconflict = "10021", e.transferBusy = "10032", e.updateDrive = "10036", 
        e.unknow = "unknow", e.cloudWSConnectFailed = "cloudErr0", e.cloudRegistrationFailed = "cloudErr1", 
        e.cloudTimeout = "cloudErr2", e.cloudBadRequest = "cloudErr3", e.cloudServerInternalError = "cloudErr4", 
        e.cloudWaitPeerOnline = "cloudErr5", e.cloudWaitPeerOnlineTimeout = "cloudErr6", 
        e.cloudWaitPeerResponeTimeout = "cloudErr7", e.cloudPeerOffline = "cloudErr8", e.cloudVPushSendError = "cloudErr9", 
        e.cloudVPushNotArrived = "cloudErr10", e.cloudHandshakeFailed = "cloudErr100", e.cloudCheckVersionFailed = "cloudErr101", 
        e.cloudBaseInfoFailed = "cloudErr102";
    }(t.ConnectionErrorCode || (t.ConnectionErrorCode = {}));
    class r extends Error {
        constructor(e, t) {
            super(t), this.code = e;
        }
    }
    t.ErrorX = r, t.newErrorX = function(e, t) {
        const n = new r(e);
        return t instanceof Error && (n.message = t.message, n.name = t.name, n.stack = t.stack), 
        n.message = t, n;
    };
}
