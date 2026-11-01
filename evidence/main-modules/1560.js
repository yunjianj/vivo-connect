// analysis/pretty/main.js:119864; webpack module 1560
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(75)), o = r.__importDefault(n(6)), a = n(361), s = n(15), l = n(361);
    const c = new class {
        constructor() {
            this.host = i.default.currentRuntimeConfig.aiTalkUrl, this.appId = "1983506217", 
            this.appKey = "dOlwzndUENRMXOaz";
        }
        constructSocketUrlAndHeaders() {
            let {openid: e} = l.getAuthInfo();
            const {model: t} = o.default.getItem("hardwareInfo") || {}, n = Math.floor(Date.now() / 1e3);
            let r = {
                appid: this.appId,
                openid: e,
                vaid: o.default.getItem("newDeviceId"),
                android_version: "10",
                client_version: this.getAppVersion(),
                system_version: "1.0",
                net_type: "1",
                system_time: n,
                model: t,
                business_name: "ai_search",
                product: "pc",
                rom_ver: "1.0",
                protocol_version: "50003",
                intention: [ "ai_search", "", "" ]
            };
            global.__fm__asmLog.info("[aiSearch]: ws 参数 encodeMap " + JSON.stringify(r));
            const i = a.sortObjectAndConvertToString(r), s = `wss://${this.host}/smartjovi/ws/sync?${i}`;
            return {
                url: s,
                headers: this.constructHeaders(s, n)
            };
        }
        constructHeaders(e, t, n) {
            let r = a.generateNonce(), i = new s.URL(e), o = [ n || "GET", i.pathname, i.search.substring(1), this.appId, t, "x-ai-gateway-app-id:" + this.appId, "x-ai-gateway-timestamp:" + t, "x-ai-gateway-nonce:" + r ].join("\n"), c = this.generateSignature(this.appKey, o), {token: u} = l.getAuthInfo();
            return {
                "X-AI-GATEWAY-APP-ID": this.appId,
                "X-AI-GATEWAY-TIMESTAMP": t,
                "X-AI-GATEWAY-NONCE": r,
                "X-AI-GATEWAY-SIGNED-HEADERS": "x-ai-gateway-app-id;x-ai-gateway-timestamp;x-ai-gateway-nonce",
                "X-AI-GATEWAY-SIGNATURE": c,
                vivotoken: u
            };
        }
        generateSignature(e, t) {
            const r = n(117);
            return r.HmacSHA256(t, e).toString(r.enc.Base64);
        }
        getAppVersion() {
            let e = "0.0.1";
            return e = n(168).version, e;
        }
    };
    t.default = c;
}
