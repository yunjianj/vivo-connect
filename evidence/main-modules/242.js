// analysis/pretty/main.js:29982; webpack module 242
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkExpireStatus = t.getCyHeaders = t.sign = t.getkeyAndSecret = void 0;
    const r = n(0).__importDefault(n(6)), i = n(305), o = n(100);
    function a(e, t) {
        if (process.env.IS_WEB) return "";
        const {createHmac: r} = n(7), i = r("sha256", t);
        i.update(e);
        return i.digest("base64");
    }
    t.getkeyAndSecret = function() {
        const e = {
            appKey: "1046870e8cff4a8ba99f6ea90026e36c",
            secret: "315d77f6a4474d35a09c43a75d312776"
        }, t = r.default.getItem("serverRoomEnv"), n = "darwin" === process.platform;
        switch (t) {
          case "test":
            e.appKey = n ? i.FEEL_FREE_TRANSF_APP_KEY.MAC_TEST_KEY : i.FEEL_FREE_TRANSF_APP_KEY.WIN_TEST_KEY, 
            e.secret = n ? i.FEEL_FREE_TRANSF_SECRET.MAC_TEST_SECRET : i.FEEL_FREE_TRANSF_SECRET.WIN_TEST_SECRET;
            break;

          case "pre":
            e.appKey = n ? i.FEEL_FREE_TRANSF_APP_KEY.MAC_PRE_KEY : i.FEEL_FREE_TRANSF_APP_KEY.WIN_PRE_KEY, 
            e.secret = n ? i.FEEL_FREE_TRANSF_SECRET.MAC_PRE_SECRET : i.FEEL_FREE_TRANSF_SECRET.WIN_PRE_SECRET;
            break;

          case "prod":
            e.appKey = n ? i.FEEL_FREE_TRANSF_APP_KEY.MAC_PROD_KEY : i.FEEL_FREE_TRANSF_APP_KEY.WIN_PROD_KEY, 
            e.secret = n ? i.FEEL_FREE_TRANSF_SECRET.MAC_PROD_SECRET : i.FEEL_FREE_TRANSF_SECRET.WIN_PROD_SECRET;
        }
        return e;
    }, t.sign = a, t.getCyHeaders = function() {
        if (process.env.IS_WEB) return;
        const e = r.default.getItem("userInfo") || {}, {token: t, openId: n} = e, i = (new Date).getTime(), s = r.default.getItem("newDeviceId"), l = "darwin" === process.platform ? "mac" : "win", c = r.default.getItem("systemVersion"), u = r.default.getItem("appVersion");
        return {
            openId: n,
            token: t,
            source: "darwin" === process.platform ? 4 : 3,
            timestamp: i,
            sign: a(o.CLOUD_MC_NAME.CONNECT_NAME, i.toString()),
            deviceId: s,
            model: l,
            systemVersion: c,
            appVersion: u
        };
    }, t.checkExpireStatus = function(e) {
        const t = new Date(e), n = (new Date).getTime() - t.getTime(), r = n / 36e5, i = Math.floor(n / 1e3);
        if (r >= 72) return {
            isExpired: !0,
            expireTime: null,
            expireTimeSec: i,
            expireTimeInfo: "已过期"
        };
        const o = Math.ceil(72 - r);
        return {
            isExpired: !1,
            expireTime: o,
            expireTimeSec: i,
            expireTimeInfo: o + " 小时后过期"
        };
    };
}
