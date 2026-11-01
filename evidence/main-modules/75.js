// analysis/pretty/main.js:14224; webpack module 75
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(991), o = n(266), a = r.__importDefault(n(6)), s = r.__importDefault(n(992)), l = n(41);
    class c extends s.default {
        constructor() {
            super([ l.LogModule.FRAMEWORK, "EnvironmentManager" ]), this.isEx = void 0 !== ("undefined" != typeof __buildConfig__ ? __buildConfig__.IS_EXPORT : "") ? !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) : !!a.default.getItem("isExport"), 
            this.countryCode = "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") ? "br" : "", 
            this.init();
        }
        static getInstance() {
            return this.instance && this.instance.countryCode === a.default.getItem("countryCode") || (this.instance && this.instance.log.info(`缓存实例的countryCode与最新countryCode不相等：${this.instance.countryCode}!==${a.default.getItem("countryCode")}`), 
            this.instance = new c, this.instance.countryCode = a.default.getItem("countryCode")), 
            this.instance;
        }
        init() {
            const e = this.getCurrentHost();
            let t;
            switch (e) {
              case i.HOST_ENUM.TEST_ENV:
                t = i.TEST_CONFIG;
                break;

              case i.HOST_ENUM.PRE_ENV:
                t = i.PRE_CONFIG;
                break;

              default:
                t = i.PROD_CONFIG;
            }
            if (this.currentRuntimeConfig = Object.assign(Object.assign({}, i.COMMON_CONFIG), t), 
            this.log.info(`myApiConfig：${JSON.stringify(Object.assign({}, this.currentRuntimeConfig))}, process.type：${process.type}`), 
            "renderer" === process.type) if (this.log.info(`host:${e}, !this.isEx:${!this.isEx}`), 
            this.isEx) {
                let t = a.default.getItem("isUseDynamicConfig");
                if (this.log.info(`isUseDynamicConfig:${t}, 轮训前`), "0" === t || "1" === t) t = "prod" === e && "1" === t ? "1" : "0", 
                this.reSetUrl(t); else {
                    let t = setInterval(() => {
                        let n = a.default.getItem("isUseDynamicConfig");
                        this.log.info(`isUseDynamicConfig:${n}, 轮训中`), "0" !== n && "1" !== n || (this.log.info(`isUseDynamicConfig:${n}, 轮训结束`), 
                        clearInterval(t), n = "prod" === e && "1" === n ? "1" : "0", this.reSetUrl(n));
                    }, 500);
                }
            } else this.reSetUrl("0");
        }
        getCurrentHost() {
            let e = i.HOST_ENUM.PROD_ENV, t = "";
            return process.env.IS_WEB ? e = process.env.HOST_ENV || i.HOST_ENUM.PROD_ENV : (t = this.getEnvURL(), 
            this.log.info("getEnvURL hostURL1：", t), t || (t = this.getEnvURL(), this.log.info("getEnvURL hostURL2：", t), 
            t || (t = this.getEnvURL(), this.log.info("getEnvURL hostURL3：", t))), this.log.info("getEnvURL hostURL最终结果：", t), 
            t && (-1 !== t.indexOf("test.vivo.com") ? e = i.HOST_ENUM.TEST_ENV : -1 !== t.indexOf("pre.vivo.com") ? e = i.HOST_ENUM.PRE_ENV : -1 !== t.indexOf("psuite.vivo.com") && (e = i.HOST_ENUM.PROD_ENV))), 
            this.log.info("[host]", e), t && !a.default.getItem("serverRoomEnv") && a.default.setItem("serverRoomEnv", e), 
            e;
        }
        getEnvURL() {
            var e;
            let t = "";
            if (process.env.IS_WEB) return t;
            try {
                const r = n(4), i = n(125), o = n(1), a = "win32" === process.platform, s = "PCSuite";
                let l = "/Library/Preferences/pcsuite/switch_host.ini", c = "switch_host.ini", u = process.env.APP_DIR || "", d = a ? o.join(o.dirname(u), "../" + c) : l;
                this.log.info("init文件路径,iniPath：:" + d);
                !1 && (d = o.join(process.cwd(), c));
                const h = i.parse(r.readFileSync(d, "utf-8"));
                return this.log.info("init文件路径,info：:" + h), t = h[s] ? null === (e = h[s]) || void 0 === e ? void 0 : e.Host : "", 
                t;
            } catch (e) {
                return this.log.info("[win获取ini文件]:" + e), t;
            }
        }
        reSetUrl(e) {
            let t = a.default.getItem("countryCode") || "cn";
            "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") && (t = "br");
            let n = !0, r = o.serverRoomMap.filter(e => -1 !== e.countryCodes.indexOf(t))[0] || null;
            r || (n = !1, r = o.serverRoomMap.filter(e => -1 !== e.countryCodes.indexOf("sg"))[0] || null);
            let s = this.getCurrentHost();
            if (a.default.getItem("serverRoomEnv") || a.default.setItem("serverRoomEnv", s), 
            this.log.info(`处理前 serverRoomEnv:${s}, this.currentRuntimeConfig.gatewayServer:${this.currentRuntimeConfig.gatewayServer}`), 
            "test" === s && "https://productivity-suite-test.vivo.com.cn" !== this.currentRuntimeConfig.gatewayServer || "pre" === s && "https://psuite-pre.vivo.com.cn" !== this.currentRuntimeConfig.gatewayServer || "prod" === s && "https://psuite.vivo.com.cn" !== this.currentRuntimeConfig.gatewayServer) {
                let e;
                switch (s) {
                  case i.HOST_ENUM.TEST_ENV:
                    e = i.TEST_CONFIG;
                    break;

                  case i.HOST_ENUM.PRE_ENV:
                    e = i.PRE_CONFIG;
                    break;

                  default:
                    e = i.PROD_CONFIG;
                }
                this.currentRuntimeConfig = Object.assign(Object.assign({}, i.COMMON_CONFIG), e);
            }
            this.log.info(`处理后 serverRoomEnv:${s}, this.currentRuntimeConfig.gatewayServer:${this.currentRuntimeConfig.gatewayServer}, countryCode:${t}, serverRoom:${JSON.stringify(r)}, countryCodeHasAssignServerRoom:${n}, isUseDynamicConfig:${e}`);
            let l = {
                accountCommonUrl: this.currentRuntimeConfig.accountCommonUrl,
                accountCenterUrl: this.currentRuntimeConfig.accountCenterUrl,
                accountTokenShareUrl: this.currentRuntimeConfig.accountTokenShareUrl,
                loginUrl: this.currentRuntimeConfig.loginUrl,
                webAccountCenterUrl: this.currentRuntimeConfig.webAccountCenterUrl
            };
            this.getAccountUrlByCountryCode(l, t, r, n, s, e);
            let c = {
                iqooAccountCommonUrl: this.currentRuntimeConfig.accountCommonUrl,
                iqooAccountCenterUrl: this.currentRuntimeConfig.accountCenterUrl,
                iqooAccountTokenShareUrl: this.currentRuntimeConfig.accountTokenShareUrl,
                iqooLoginUrl: this.currentRuntimeConfig.loginUrl,
                iqooWebAccountCenterUrl: this.currentRuntimeConfig.webAccountCenterUrl
            };
            this.getIqooAccountUrlByCountryCode(c, t, r, n, s, e);
            let u = {
                gatewayServer: this.currentRuntimeConfig.gatewayServer,
                pcRedirectUrl: this.currentRuntimeConfig.pcRedirectUrl
            };
            this.getGatewayServerUrlByCountryCode(u, t, r, n, s, e);
            let d = {
                feelFreeTransUrl: this.currentRuntimeConfig.feelFreeTransUrl
            };
            this.getFeelFreeTransUrlByCountryCode(d, t, r, n, s, e);
            let h = {
                connectCenterUrl: this.currentRuntimeConfig.connectCenterUrl
            };
            this.getConnectCenterUrlByCountryCode(h, t, r, n, s, e);
            let p = {
                vpushUrl: this.currentRuntimeConfig.vpushUrl
            };
            this.getVpushUrlByCountryCode(p, t, r, n, s, e);
            let f = {
                modelAPIUrl: this.currentRuntimeConfig.modelAPIUrl
            };
            this.getClawModelUrlByCountryCode(f, t, r, n, s, e);
            let _ = {
                creditsUrl: this.currentRuntimeConfig.creditsUrl
            };
            this.getClawCreditsUrlByCountryCode(_, t, r, n, s, e);
            let m = {
                xiaovChannelUrl: this.currentRuntimeConfig.xiaovChannelUrl
            };
            this.getClawXiaovUrlByCountryCode(m, t, r, n, s, e);
            let g = {
                xiaovVFSUrl: this.currentRuntimeConfig.xiaovVFSUrl
            };
            this.getClawXiaovVfsUrlByCountryCode(g, t, r, n, s, e);
            let v = {
                vnoteCopilotUrl: this.currentRuntimeConfig.vnoteCopilotUrl
            };
            this.getVnoteCopilotUrlByCountryCode(v, t, r, n, s, e);
            let y = {
                vnoteAsrUrl: this.currentRuntimeConfig.vnoteAsrUrl
            };
            this.getVnoteAsrUrlByCountryCode(y, t, r, n, s, e);
            let E = {
                vnoteOcrUrl: this.currentRuntimeConfig.vnoteOcrUrl
            };
            this.getVnoteOcrUrlByCountryCode(E, t, r, n, s, e), this.currentRuntimeConfig.hasReSetUrl = !0, 
            this.log.info("myApiConfigSetByCountryCode", JSON.stringify(Object.assign({}, this.currentRuntimeConfig))), 
            this.getGatewayFeedbackServer(r, s);
        }
        getAccountUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return void ("browser" === process.type && a.default.setItem("vivoAccountHost", e.accountCommonUrl.split("https://")[1]));
            const s = a.default.getItem("vivoAccountHost");
            this.log.info("vivoAccountHost:", s, i), Object.entries(e).forEach(([e, i]) => {
                let a = i.replace("vivo.com.cn", "vivo.com");
                "1" === o ? (a = a.replace("passport.vivo.com", s), [ "kh", "n", "mm", "ua", "ye", "gh", "ci", "iq", "ao", "af", "pg" ].includes(t) && (a = a.replace(t + "-passport.vivo.com", "sg-passport.vivo.com"))) : r ? "ru" === n.serverRoomLabel ? a = a.replace("passport.vivo.com", "ru-passport.vivo.com") : "br" === t ? a = a.replace("passport.vivo.com", n.joviAccountHost) : (a = a.replace("passport.vivo.com", `${"gb" === t ? "uk" : t}-${this.removeBeforeFirstDash(n.vivoAccountHost)}`), 
                [ "kh", "n", "mm", "ua", "ye", "gh", "ci", "iq", "ao", "af", "pg" ].includes(t) && (a = a.replace(t + "-passport.vivo.com", "sg-passport.vivo.com"))) : a = a.replace("passport.vivo.com", "sg-passport.vivo.com"), 
                this.currentRuntimeConfig[e] = a;
            }), "browser" === process.type && a.default.setItem("vivoAccountHost", this.currentRuntimeConfig.accountCommonUrl.split("https://")[1]);
        }
        getIqooAccountUrlByCountryCode(e, t, n, r, i, o) {
            if (console.log(t, r), !this.isEx) return;
            const s = a.default.getItem("iqooAccountHost");
            this.log.info("iqooAccountHost:", s, i), Object.entries(e).forEach(([e, t]) => {
                let r = t.replace(/^https:\/\/.*\.com/g, "https://passport.vivo.com");
                "1" === o ? r = r.replace("passport.vivo.com", s) : n.iqooAccountHost && (r = r.replace("passport.vivo.com", n.iqooAccountHost)), 
                this.currentRuntimeConfig[e] = r;
            }), "browser" === process.type && a.default.setItem("iqooAccountHost", this.currentRuntimeConfig.iqooAccountCommonUrl.split("https://")[1]);
        }
        getGatewayServerUrlByCountryCode(e, t, n, r, i, o) {
            if (this.log.info("!this.isEx: " + !this.isEx), !this.isEx) return void ("browser" === process.type && a.default.setItem("gatewayHost", e.gatewayServer.split("https://")[1]));
            const s = a.default.getItem("gatewayHost");
            this.log.info(`gatewayHost:${s}, serverRoomEnv:${i}, process.type:${process.type}`), 
            Object.entries(e).forEach(([e, a]) => {
                let l = a.replace("vivo.com.cn", "vivo.com");
                this.log.info(`getGatewayServerUrlByCountryCode replace: ${e}-${l}`), "1" === o ? (this.log.info(`getGatewayServerUrlByCountryCode 动态域名start: ${e}-${l}`), 
                l = l.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + s), this.log.info(`getGatewayServerUrlByCountryCode 动态域名end: ${e}-${l}`)) : (this.log.info("getGatewayServerUrlByCountryCode 非动态域名 serverRoomEnv:" + i), 
                r || (t = "sg"), "test" === i ? (this.log.info("getGatewayServerUrlByCountryCode serverRoomEnv-test"), 
                l = l.replace("productivity-suite-test.vivo.com", "br" === t ? n.joviGatewayHost : n.gatewayTestHost)) : "pre" === i || "prod" === i && (this.log.info("getGatewayServerUrlByCountryCode serverRoomEnv-prod"), 
                "eu2" === n.serverRoomLabel ? l = -1 !== n.regionCodes.zasc.indexOf(t) ? l.replace("psuite.vivo.com", "zasc-" + this.removeBeforeFirstDash(n.gatewayProdHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? l.replace("psuite.vivo.com", "sca-" + this.removeBeforeFirstDash(n.gatewayProdHost)) : "br" === t ? l.replace("psuite.vivo.com", n.joviGatewayHost) : l.replace("psuite.vivo.com", t + n.gatewayProdHost) : (this.log.info("getGatewayServerUrlByCountryCode serverRoomEnv-prod-非eu2"), 
                l = l.replace("psuite.vivo.com", "uk" === t || "gb" === t ? "uk-" + this.removeBeforeFirstDash(n.gatewayProdHost) : n.gatewayProdHost)))), 
                this.log.info(`getGatewayServerUrlByCountryCode key-url: ${e}-${l}`), this.currentRuntimeConfig[e] = l;
            }), this.log.info(`getGatewayServerUrlByCountryCode process.type: ${process.type}, this.currentRuntimeConfig.gatewayServer: ${this.currentRuntimeConfig.gatewayServer}`), 
            "browser" === process.type && a.default.setItem("gatewayHost", this.currentRuntimeConfig.gatewayServer.split("https://")[1]);
        }
        getFeelFreeTransUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return void ("browser" === process.type && a.default.setItem("feelTransHost", e.feelFreeTransUrl.split("https://")[1]));
            const s = a.default.getItem("feelTransHost");
            this.log.info("feelTransHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a.replace("vivo.com.cn", "vivo.com");
                "1" === o ? l = l.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + s) : (r || (t = "sg"), 
                "test" === i ? l = l.replace("cross-file-bridge-test.vivo.com", n.feelTransTestHost) : "pre" === i || "prod" === i && (l = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? l.replace("cross-file-bridge.vivo.com", "zasc-" + this.removeBeforeFirstDash(n.feelTransProdHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? l.replace("cross-file-bridge.vivo.com", "sca-" + this.removeBeforeFirstDash(n.feelTransProdHost)) : "br" === t ? l.replace("cross-file-bridge.vivo.com", n.joviFeelTransHost) : l.replace("cross-file-bridge.vivo.com", t + n.feelTransProdHost) : l.replace("cross-file-bridge.vivo.com", "uk" === t || "gb" === t ? "uk-" + this.removeBeforeFirstDash(n.feelTransProdHost) : n.feelTransProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("feelTransHost", this.currentRuntimeConfig.feelFreeTransUrl.split("https://")[1]);
        }
        getConnectCenterUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return void ("browser" === process.type && a.default.setItem("connectCenterHost", e.connectCenterUrl.split("https://")[1]));
            const s = a.default.getItem("connectCenterHost");
            this.log.info("connectCenterHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a.replace("vivo.com.cn", "vivo.com");
                "1" === o ? l = l.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + s) : (r || (t = "sg"), 
                "test" === i ? l = l.replace("connection-center-test.vivo.com", n.connectCenterTestHost) : "pre" === i || "prod" === i && (l = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? l.replace("connection-center.vivo.com", "zasc-" + this.removeBeforeFirstDash(n.connectCenterProdHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? l.replace("connection-center.vivo.com", "sca-" + this.removeBeforeFirstDash(n.connectCenterProdHost)) : "br" === t ? l.replace("connection-center.vivo.com", n.joviConnectCenterHost) : l.replace("connection-center.vivo.com", t + n.connectCenterProdHost) : l.replace("connection-center.vivo.com", "uk" === t || "gb" === t ? "uk-" + this.removeBeforeFirstDash(n.connectCenterProdHost) : n.connectCenterProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("connectCenterHost", this.currentRuntimeConfig.connectCenterUrl.split("https://")[1]);
        }
        getVpushUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return void ("browser" === process.type && a.default.setItem("vpushHost", e.vpushUrl.split("https://")[1]));
            const s = a.default.getItem("vpushHost");
            this.log.info("vpushHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a.replace("vivo.com.cn", "vivo.com");
                "1" === o ? l = l.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + s) : (r || (t = "sg"), 
                "test" === i ? l = l.replace("p-test.vivo.com", n.vpushTestHost) : "pre" === i || "prod" === i && (l = "eu1" === n.serverRoomLabel ? -1 !== n.regionCodes.eea.indexOf(t) ? l.replace("p.vivo.com", "eea-" + this.removeBeforeFirstDash(n.vpushProdHost)) : -1 !== n.regionCodes.ena.indexOf(t) ? l.replace("p.vivo.com", "ena-" + this.removeBeforeFirstDash(n.vpushProdHost)) : l.replace("p.vivo.com", "uk" === t || "gb" === t ? "uk-" + this.removeBeforeFirstDash(n.vpushProdHost) : n.connectCenterProdHost) : "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? l.replace("p.vivo.com", "za-" + this.removeBeforeFirstDash(n.vpushProdHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? l.replace("p.vivo.com", "sca-" + this.removeBeforeFirstDash(n.vpushProdHost)) : "br" === t ? l.replace("p.vivo.com", n.joviVpushHost) : l.replace("p.vivo.com", t + n.vpushProdHost) : l.replace("p.vivo.com", n.connectCenterProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("vpushHost", this.currentRuntimeConfig.vpushUrl.split("https://")[1]);
        }
        getVnoteCopilotUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return;
            const s = a.default.getItem("vnoteCopilotHost");
            this.log.info("VnoteCopilot vnoteCopilotHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a;
                "1" === o ? l = l.replace(/^wss:\/\/.*\.vivoglobal\.com/g, "wss://" + s) : (this.log.info("VnoteCopilot vnoteHost: else", s), 
                r || (t = "sg"), "prod" === i && (l = "eu2" === n.serverRoomLabel ? "br" === t ? l.replace("asia-copilot-api-prd.vivoglobal.com", n.joviVnoteCopilotProdHost) : l.replace("asia-copilot-api-prd.vivoglobal.com", "sca" + n.vnoteCopilotProdHost) : l.replace("asia-copilot-api-prd.vivoglobal.com", n.vnoteCopilotProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("vnoteCopilotHost", this.currentRuntimeConfig.vnoteCopilotUrl.split("wss://")[1]);
        }
        getVnoteAsrUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return;
            const s = a.default.getItem("vnoteAsrHost");
            this.log.info("VnoteAsrUrl vnoteAsrHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a;
                "1" === o ? l = l.replace(/^https:\/\/.*\.vivoglobal\.com/g, "https://" + s) : (this.log.info("VnoteAsrUrl vnoteAsrHost: else", s), 
                r || (t = "sg"), "prod" === i && (l = "eu2" === n.serverRoomLabel ? "br" === t ? l.replace("asia-asr-v2.vivoglobal.com", n.joviVnoteAsrProdHost) : l.replace("asia-asr-v2.vivoglobal.com", "sca" + n.vnoteAsrProdHost) : l.replace("asia-asr-v2.vivoglobal.com", n.vnoteAsrProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("vnoteAsrHost", this.currentRuntimeConfig.vnoteAsrUrl.split("https://")[1]);
        }
        getVnoteOcrUrlByCountryCode(e, t, n, r, i, o) {
            if (!this.isEx) return;
            const s = a.default.getItem("vnoteOcrHost");
            this.log.info("VnoteOcr vnoteOcrHost:", s), Object.entries(e).forEach(([e, a]) => {
                let l = a.replace("vivo.com.cn", "vivo.com");
                "1" === o ? l = l.replace(/^https:\/\/.*\.vivoglobal\.com/g, "https://" + s) : (this.log.info("VnoteOcr vnoteOcrHost: else", s), 
                r || (t = "sg"), "prod" === i && (l = "eu2" === n.serverRoomLabel ? "br" === t ? l.replace("asia-ai-image-prd.vivoglobal.com", n.joviVnoteOcrProdHost) : l.replace("asia-ai-image-prd.vivoglobal.com", "sca" + n.vnoteOcrProdHost) : l.replace("asia-ai-image-prd.vivoglobal.com", n.vnoteOcrProdHost))), 
                this.currentRuntimeConfig[e] = l;
            }), "browser" === process.type && a.default.setItem("vnoteOcrHost", this.currentRuntimeConfig.vnoteOcrUrl.split("https://")[1]);
        }
        getClawModelUrlByCountryCode(e, t, n, r, i, o) {
            var s;
            if (!this.isEx) return;
            const l = a.default.getItem("modelAPIHost");
            this.log.info("modelAPIHost:", l), Object.entries(e).forEach(([e, a]) => {
                let s = a.replace("vivo.com.cn", "vivo.com");
                s && ("1" === o ? s = s.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + l) : (r || (t = "sg"), 
                "prod" === i && (s = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? s.replace("vivo-claw-server-prd.vivo.com", "za-" + this.removeBeforeFirstDash(n.modelAPIHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? s.replace("vivo-claw-server-prd.vivo.com", "sca-" + this.removeBeforeFirstDash(n.modelAPIHost)) : "br" === t ? s.replace("vivo-claw-server-prd.vivo.com", n.jovimodelAPIHost) : s.replace("vivo-claw-server-prd.vivo.com", t + n.modelAPIHost) : s.replace("vivo-claw-server-prd.vivo.com", n.modelAPIHost))), 
                this.currentRuntimeConfig[e] = s);
            }), "browser" === process.type && a.default.setItem("modelAPIHost", null === (s = this.currentRuntimeConfig.modelAPIUrl) || void 0 === s ? void 0 : s.split("https://")[1]);
        }
        getClawCreditsUrlByCountryCode(e, t, n, r, i, o) {
            var s;
            if (!this.isEx) return;
            const l = a.default.getItem("creditsHost");
            this.log.info("creditsHost:", l), Object.entries(e).forEach(([e, a]) => {
                let s = a.replace("vivo.com.cn", "vivo.com");
                s && ("1" === o ? s = s.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + l) : (r || (t = "sg"), 
                "prod" === i && (s = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? s.replace("claw.vivo.com", "za-" + this.removeBeforeFirstDash(n.creditsHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? s.replace("claw.vivo.com", "sca-" + this.removeBeforeFirstDash(n.creditsHost)) : "br" === t ? s.replace("claw.vivo.com", n.jovicreditsHost) : s.replace("claw.vivo.com", t + n.creditsHost) : s.replace("claw.vivo.com", n.creditsHost))), 
                this.currentRuntimeConfig[e] = s);
            }), "browser" === process.type && a.default.setItem("creditsHost", null === (s = this.currentRuntimeConfig.creditsUrl) || void 0 === s ? void 0 : s.split("https://")[1]);
        }
        getClawXiaovUrlByCountryCode(e, t, n, r, i, o) {
            var s;
            if (!this.isEx) return;
            const l = a.default.getItem("xiaovChannelHost");
            this.log.info("xiaovChannelHost:", l), Object.entries(e).forEach(([e, a]) => {
                let s = a.replace("vivo.com.cn", "vivo.com");
                s && ("1" === o ? s = s.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + l) : (r || (t = "sg"), 
                "prod" === i && (s = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? s.replace("vivoclaw-gateway.vivo.com", "za-" + this.removeBeforeFirstDash(n.xiaovChannelHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? s.replace("vivoclaw-gateway.vivo.com", "sca-" + this.removeBeforeFirstDash(n.xiaovChannelHost)) : "br" === t ? s.replace("vivoclaw-gateway.vivo.com", n.jovixiaovChannelHost) : s.replace("vivoclaw-gateway.vivo.com", t + n.xiaovChannelHost) : s.replace("vivoclaw-gateway.vivo.com", n.xiaovChannelHost))), 
                this.currentRuntimeConfig[e] = s);
            }), "browser" === process.type && a.default.setItem("xiaovChannelHost", null === (s = this.currentRuntimeConfig.xiaovChannelUrl) || void 0 === s ? void 0 : s.split("https://")[1]);
        }
        getClawXiaovVfsUrlByCountryCode(e, t, n, r, i, o) {
            var s;
            if (!this.isEx) return;
            const l = a.default.getItem("xiaovVFSHost");
            this.log.info("xiaovVFSHost:", l), Object.entries(e).forEach(([e, a]) => {
                let s = a.replace("vivo.com.cn", "vivo.com");
                console.log("getClawXiaovVfsUrlByCountryCode", s, o), s && ("1" === o ? s = s.replace(/^https:\/\/.*\.vivo\.com/g, "https://" + l) : (r || (t = "sg"), 
                "prod" === i && (s = "eu2" === n.serverRoomLabel ? -1 !== n.regionCodes.zasc.indexOf(t) ? s.replace("blueclaw-gateway.vivo.com", "za-" + this.removeBeforeFirstDash(n.xiaovVFSHost)) : -1 !== n.regionCodes.sca.indexOf(t) ? s.replace("blueclaw-gateway.vivo.com", "sca-" + this.removeBeforeFirstDash(n.xiaovVFSHost)) : "br" === t ? s.replace("blueclaw-gateway.vivo.com", n.jovixiaovVFSHost) : s.replace("blueclaw-gateway.vivo.com", t + n.xiaovVFSHost) : s.replace("blueclaw-gateway.vivo.com", n.xiaovVFSHost))), 
                this.currentRuntimeConfig[e] = s);
            }), "browser" === process.type && a.default.setItem("xiaovVFSHost", null === (s = this.currentRuntimeConfig.xiaovVFSUrl) || void 0 === s ? void 0 : s.split("https://")[1]);
        }
        getIqooPcRedirectUrl() {
            return this.currentRuntimeConfig.pcRedirectUrl.includes("asia-psuite.vivo.com") ? this.currentRuntimeConfig.pcRedirectUrl.replace("asia-psuite.vivo.com", "asia-psuite.iqoo.com") : this.currentRuntimeConfig.pcRedirectUrl.includes("in-psuite.vivo.com") ? this.currentRuntimeConfig.pcRedirectUrl.replace("in-psuite.vivo.com", "in-psuite.iqoo.com") : this.currentRuntimeConfig.pcRedirectUrl.includes("ru-psuite.vivo.com") ? this.currentRuntimeConfig.pcRedirectUrl.replace("ru-psuite.vivo.com", "ru-psuite.iqoo.com") : this.currentRuntimeConfig.pcRedirectUrl;
        }
        removeBeforeFirstDash(e) {
            const t = e.indexOf("-");
            return -1 === t ? e : e.slice(t + 1);
        }
        getGatewayFeedbackServer(e, t) {
            t != i.HOST_ENUM.TEST_ENV && t != i.HOST_ENUM.PRE_ENV && this.isEx && (this.currentRuntimeConfig.gatewayFeedbackServer = e.gatewayFeedbackServer, 
            a.default.setItem("gatewayFeedbackServer", this.currentRuntimeConfig.gatewayFeedbackServer));
        }
    }
    t.default = c.getInstance();
}
