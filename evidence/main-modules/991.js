// analysis/pretty/main.js:81327; webpack module 991
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PROD_CONFIG = t.PRE_CONFIG = t.TEST_CONFIG = t.COMMON_CONFIG = t.PROXY_ENUM = t.HOST_ENUM = t.CALENDAR_SCHEDULE_APPID = t.ClawXiaovVfsUrl = t.ClawXiaovChannelUrl = t.ClawCreditsUrl = t.ClawModelApiUrl = t.CloudUrl = t.VnoteOcrUrl = t.VnoteAsrUrl = t.RECORD_ASR_URL = t.VnoteCopilotUrl = t.AI_TALK_REC_URL = t.AI_TALK_URL = t.CLOUD_TRANS_URL = t.CALENDAR_AI_API_URL = t.CALENDAR_API_URL = t.WEB_SITE_SCREEN_URL = t.WEB_SITE_URL_NOT_EX = t.FEED_BACK_SITE_URL = t.WEB_SITE_URL = t.WEB_REDIRECT_URL = t.PC_REDIRECT_URL = t.VpushUrl = t.FeelFreeTransUrl = t.ConnectCenterUrl = t.GATEWAY_SERVER_ENUM = void 0;
    const r = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT), i = "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "");
    var o, a, s, l, c, u, d, h, p, f, _, m, g, v, y, E, b, w, S, T, A, O, C, N, I;
    !function(e) {
        e.TEST_GATEWAY_SERVER = "https://productivity-suite-test.vivo.com.cn", e.PRE_GATEWAY_SERVER = "https://psuite-pre.vivo.com.cn", 
        e.PROD_GATEWAY_SERVER = "https://psuite.vivo.com.cn";
    }(o = t.GATEWAY_SERVER_ENUM || (t.GATEWAY_SERVER_ENUM = {})), function(e) {
        e.TEST_CONCENTER_URL = "https://connection-center-test.vivo.com.cn", e.PRE_CONCENTER_URL = "https://connection-center-pre.vivo.com.cn", 
        e.PROD_CONCENTER_URL = "https://connection-center.vivo.com.cn";
    }(a = t.ConnectCenterUrl || (t.ConnectCenterUrl = {})), function(e) {
        e.TEST_TRANS_URL = "https://cross-file-bridge-test.vivo.com", e.PRE_TRANS_URL = "https://cross-file-bridge-pre.vivo.com", 
        e.PROD_TRANS_URL = "https://cross-file-bridge.vivo.com";
    }(s = t.FeelFreeTransUrl || (t.FeelFreeTransUrl = {})), function(e) {
        e.TEST_VPUSH_URL = "https://p-test.vivo.com.cn", e.PRE_VPUSH_URL = "https://p-pre.vivo.com.cn", 
        e.PROD_VPUSH_URL = "https://p.vivo.com.cn";
    }(l = t.VpushUrl || (t.VpushUrl = {})), function(e) {
        e.TEST_PC_REDIRECT_URL = "https://productivity-suite-test.vivo.com.cn/vbusiness/account/cookie/getHtml", 
        e.PRE_PC_REDIRECT_URL = "https://psuite-pre.vivo.com.cn/vbusiness/account/cookie/getHtml", 
        e.PROD_PC_REDIRECT_URL = "https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml";
    }(c = t.PC_REDIRECT_URL || (t.PC_REDIRECT_URL = {})), function(e) {
        e.TEST_WEB_REDIRECT_URL = "https://quantumkit-test.vivo.com.cn/", e.PRE_WEB_REDIRECT_URL = "https://quantumkit-pre.vivo.com.cn/", 
        e.PROD_WEB_REDIRECT_URL = "https://quantumkit.vivo.com/suite";
    }(u = t.WEB_REDIRECT_URL || (t.WEB_REDIRECT_URL = {})), function(e) {
        e.TEST_WEB_SITE_URL = "https://quantumkit-test.vivo.com.cn/", e.PRE_WEB_SITE_URL = "https://pc-pre.vmic.xyz/", 
        e.PROD_WEB_SITE_URL = "https://pc.vivo.com", e.EX_PROD_WEB_SITE_URL = "https://pc.vivoglobal.com", 
        e.BR_PROD_WEB_SITE_URL = "https://pc.jovimobile.com";
    }(d = t.WEB_SITE_URL || (t.WEB_SITE_URL = {})), function(e) {
        e.TEST_FEED_SITE_URL = "https://pcsuite-api-test.vmic.xyz", e.PRE_FEED_SITE_URL = "https://pcsuite-api-pre.vmic.xyz", 
        e.PROD_FEED_SITE_URL = "https://pcsuite-api.vivo.com";
    }(h = t.FEED_BACK_SITE_URL || (t.FEED_BACK_SITE_URL = {})), function(e) {
        e.TEST_WEB_SITE_URL = "https://quantumkit-test.vivo.com.cn/", e.PRE_WEB_SITE_URL = "https://pc-pre.vmic.xyz/", 
        e.PROD_WEB_SITE_URL = "https://pc.vivo.com/";
    }(p = t.WEB_SITE_URL_NOT_EX || (t.WEB_SITE_URL_NOT_EX = {})), function(e) {
        e.TEST_WEB_SITE_SCREEN_URL = "http://quantumkit-screen-test.vivo.com.cn", e.PRE_WEB_SITE_SCREEN_URL = "http://quantumkit-screen-pre.vivo.com.cn", 
        e.PROD_WEB_SITE_SCREEN_URL = "http://quantumkit-screen.vivo.com";
    }(f = t.WEB_SITE_SCREEN_URL || (t.WEB_SITE_SCREEN_URL = {})), function(e) {
        e.TEST_WEB_SITE_MAP_URL = "https://subscribe-test.vivo.com.cn/", e.PRE_WEB_SITE_MAP_URL = "https://subscribe.vivo.com.cn/", 
        e.PROD_WEB_SITE_MAP_URL = "https://subscribe.vivo.com.cn/";
    }(_ = t.CALENDAR_API_URL || (t.CALENDAR_API_URL = {})), function(e) {
        e.TEST_WEB_SITE_MAP_URL = "https://subscribe-test.vivo.com.cn/", e.PRE_WEB_SITE_MAP_URL = "https://subscribe-ai.vivo.com.cn/", 
        e.PROD_WEB_SITE_MAP_URL = "https://subscribe-ai.vivo.com.cn/";
    }(m = t.CALENDAR_AI_API_URL || (t.CALENDAR_AI_API_URL = {})), function(e) {
        e.TEST_CLOUD_TRANS_URL = "https://x-trans-test.vivo.com", e.PRE_CLOUD_TRANS_URL = "https://x-trans-pre.vivo.com", 
        e.PROD_CLOUD_TRANS_URL = "https://x-trans.vivo.com";
    }(g = t.CLOUD_TRANS_URL || (t.CLOUD_TRANS_URL = {})), function(e) {
        e.TEST_AI_TALK_URL = "nluoss-ai.vivo.com.cn", e.PRE_AI_TALK_URL = "copilot-api-pre.vivo.com.cn", 
        e.PROD_AI_TALK_URL = "copilot-api-auth-prd.vivo.com.cn";
    }(v = t.AI_TALK_URL || (t.AI_TALK_URL = {})), function(e) {
        e.TEST_AI_TALK_REC_URL = "copilot-recommend-test.vivo.com.cn", e.PRE_AI_TALK_REC_URL = "copilot-recommend-pre.vivo.com.cn", 
        e.PROD_AI_TALK_REC_URL = "copilot-recommend-prd.vivo.com.cn";
    }(y = t.AI_TALK_REC_URL || (t.AI_TALK_REC_URL = {})), function(e) {
        e.TEST_VNOTE_COPILOT_URL = "wss://asia-copilot-api-pre.vivoglobal.com", e.PRE_VNOTE_COPILOT_URL = "wss://asia-copilot-api-pre.vivoglobal.com", 
        e.PROD_VNOTE_COPILOT_URL = "wss://asia-copilot-api-prd.vivoglobal.com";
    }(E = t.VnoteCopilotUrl || (t.VnoteCopilotUrl = {})), function(e) {
        e.TEST_ASR_URL = "https://asr-test-v2.vivo.com.cn", e.PRE_ASR_URL = "https://asr-pre-v2.vivo.com.cn", 
        e.PROD_ASR_URL = "https://asr-v2.vivo.com.cn";
    }(b = t.RECORD_ASR_URL || (t.RECORD_ASR_URL = {})), function(e) {
        e.TEST_VNOTE_ASR_URL = "https://asia-asr-pre-v2.vivoglobal.com", e.PRE_VNOTE_ASR_URL = "https://asia-asr-pre-v2.vivoglobal.com", 
        e.PROD_VNOTE_ASR_URL = "https://asia-asr-v2.vivoglobal.com";
    }(w = t.VnoteAsrUrl || (t.VnoteAsrUrl = {})), function(e) {
        e.TEST_VNOTE_OCR_URL = "https://ai-general-ocr-asia-prd.vivoglobal.com", e.PRE_VNOTE_OCR_URL = "https://ai-general-ocr-asia-prd.vivoglobal.com", 
        e.PROD_VNOTE_OCR_URL = "https://asia-ai-image-prd.vivoglobal.com";
    }(S = t.VnoteOcrUrl || (t.VnoteOcrUrl = {})), function(e) {
        e.TEST_VNOTE_OCR_URL = "https://yun.vivo.com.cn", e.PRE_VNOTE_OCR_URL = "https://yun.vivo.com.cn", 
        e.PROD_VNOTE_OCR_URL = "https://yun.vivo.com.cn";
    }(T = t.CloudUrl || (t.CloudUrl = {})), function(e) {
        e.TEST_CLAW_MODEL_URL = "https://vivo-claw-server-pre.vivo.com", e.PRE_CLAW_MODEL_URL = "https://vivo-claw-server-pre.vivo.com", 
        e.PROD_CLAW_MODEL_URL = "https://vivo-claw-server-prd.vivo.com.cn";
    }(A = t.ClawModelApiUrl || (t.ClawModelApiUrl = {})), function(e) {
        e.TEST_CLAW_CREDITS_URL = "https://vivo-claw-payment-grey.vivo.com.cn", e.PRE_CLAW_CREDITS_URL = "https://vivo-claw-payment-grey.vivo.com.cn", 
        e.PROD_CLAW_CREDITS_URL = "https://claw.vivo.com.cn";
    }(O = t.ClawCreditsUrl || (t.ClawCreditsUrl = {})), function(e) {
        e.TEST_CLAW_XIAOV_URL = "https://vivoclaw-gateway-pre.vivo.com.cn", e.PRE_CLAW_XIAOV_URL = "https://vivoclaw-gateway-pre.vivo.com.cn", 
        e.PROD_CLAW_XIAOV_URL = "https://vivoclaw-gateway.vivo.com.cn";
    }(C = t.ClawXiaovChannelUrl || (t.ClawXiaovChannelUrl = {})), function(e) {
        e.TEST_CLAW_XIAOV_VFS_URL = "https://blueclaw-gateway-test.vivo.com.cn", e.PRE_CLAW_XIAOV_VFS_URL = "https://blueclaw-gateway-test.vivo.com.cn", 
        e.PROD_CLAW_XIAOV_VFS_URL = "https://blueclaw-gateway.vivo.com.cn";
    }(N = t.ClawXiaovVfsUrl || (t.ClawXiaovVfsUrl = {})), function(e) {
        e.TEST_APPID = "de44cbb7fbc22cba8b0c1d615b0d5723", e.PRE_APPID = "de44cbb7fbc22cba8b0c1d615b0d5723", 
        e.PROD_APPID = "04669cafdd6e2393f5b3255fd2034a0c";
    }(I = t.CALENDAR_SCHEDULE_APPID || (t.CALENDAR_SCHEDULE_APPID = {})), function(e) {
        e.PROD_ENV = "prod", e.PRE_ENV = "pre", e.TEST_ENV = "test";
    }(t.HOST_ENUM || (t.HOST_ENUM = {})), function(e) {
        e.NOTE_PROXY = "vbusiness", e.ALBUM_PROXY = "valbum", e.INFO_PROXY = "vinfo", e.UPGRADE_PROXY = "vupgrade", 
        e.CLOUD_PROXY = "vclouddisk", e.DEVICE_PROXY = "deviceReport";
    }(t.PROXY_ENUM || (t.PROXY_ENUM = {})), t.COMMON_CONFIG = {
        accountCommonUrl: "https://passport.vivo.com.cn",
        loginUrl: "https://passport.vivo.com.cn/#/login",
        accountCenterUrl: "https://passport.vivo.com.cn/#/personalCenter",
        accountTokenShareUrl: "https://passport.vivo.com.cn/thirdpart/productivity/transfer",
        webClientId: 131,
        pcClientId: 130,
        webAccountCenterUrl: "https://passport.vivo.com/#/personalCenter",
        iqooLoginUrl: "",
        iqooAccountCenterUrl: "",
        iqooAccountTokenShareUrl: "",
        iqooWebAccountCenterUrl: "",
        iqooAccountCommonUrl: "",
        hasReSetUrl: !1
    }, t.TEST_CONFIG = {
        gatewayServer: o.TEST_GATEWAY_SERVER,
        gatewayFeedbackServer: h.TEST_FEED_SITE_URL,
        pcRedirectUrl: c.TEST_PC_REDIRECT_URL,
        webRedirectUrl: u.TEST_WEB_REDIRECT_URL,
        webSiteUrl: d.TEST_WEB_SITE_URL,
        webSiteUrlNotEx: p.TEST_WEB_SITE_URL,
        webScreenUrl: f.TEST_WEB_SITE_SCREEN_URL,
        calendarApiUrl: _.TEST_WEB_SITE_MAP_URL,
        calendarAIApiUrl: m.TEST_WEB_SITE_MAP_URL,
        calendarScheduleAppid: I.TEST_APPID,
        cloudTransUrl: g.TEST_CLOUD_TRANS_URL,
        aiTalkUrl: v.TEST_AI_TALK_URL,
        aiTalkRecUrl: y.TEST_AI_TALK_REC_URL,
        recordASRUrl: b.TEST_ASR_URL,
        connectCenterUrl: a.TEST_CONCENTER_URL,
        feelFreeTransUrl: s.TEST_TRANS_URL,
        vpushUrl: l.TEST_VPUSH_URL,
        vnoteCopilotUrl: E.TEST_VNOTE_COPILOT_URL,
        vnoteAsrUrl: w.TEST_VNOTE_ASR_URL,
        vnoteOcrUrl: S.TEST_VNOTE_OCR_URL,
        cloudUrl: T.TEST_VNOTE_OCR_URL,
        modelAPIUrl: A.TEST_CLAW_MODEL_URL,
        creditsUrl: O.TEST_CLAW_CREDITS_URL,
        xiaovChannelUrl: C.TEST_CLAW_XIAOV_URL,
        xiaovVFSUrl: N.TEST_CLAW_XIAOV_VFS_URL
    }, t.PRE_CONFIG = {
        gatewayServer: o.PRE_GATEWAY_SERVER,
        gatewayFeedbackServer: h.PRE_FEED_SITE_URL,
        pcRedirectUrl: c.PRE_PC_REDIRECT_URL,
        webRedirectUrl: u.PRE_WEB_REDIRECT_URL,
        webSiteUrl: d.PRE_WEB_SITE_URL,
        webSiteUrlNotEx: p.PRE_WEB_SITE_URL,
        webScreenUrl: f.PRE_WEB_SITE_SCREEN_URL,
        calendarApiUrl: _.PRE_WEB_SITE_MAP_URL,
        calendarAIApiUrl: m.PRE_WEB_SITE_MAP_URL,
        calendarScheduleAppid: I.PRE_APPID,
        cloudTransUrl: g.PROD_CLOUD_TRANS_URL,
        aiTalkUrl: v.PRE_AI_TALK_URL,
        aiTalkRecUrl: y.PRE_AI_TALK_REC_URL,
        recordASRUrl: b.PRE_ASR_URL,
        connectCenterUrl: a.PRE_CONCENTER_URL,
        feelFreeTransUrl: s.PRE_TRANS_URL,
        vpushUrl: l.PRE_VPUSH_URL,
        vnoteCopilotUrl: E.PRE_VNOTE_COPILOT_URL,
        vnoteAsrUrl: w.PRE_VNOTE_ASR_URL,
        vnoteOcrUrl: S.PRE_VNOTE_OCR_URL,
        cloudUrl: T.PRE_VNOTE_OCR_URL,
        modelAPIUrl: A.PRE_CLAW_MODEL_URL,
        creditsUrl: O.PRE_CLAW_CREDITS_URL,
        xiaovChannelUrl: C.PRE_CLAW_XIAOV_URL,
        xiaovVFSUrl: N.PRE_CLAW_XIAOV_VFS_URL
    }, t.PROD_CONFIG = {
        gatewayServer: o.PROD_GATEWAY_SERVER,
        gatewayFeedbackServer: h.PROD_FEED_SITE_URL,
        pcRedirectUrl: c.PROD_PC_REDIRECT_URL,
        webRedirectUrl: u.PROD_WEB_REDIRECT_URL,
        webSiteUrl: r ? i ? d.BR_PROD_WEB_SITE_URL : d.EX_PROD_WEB_SITE_URL : d.PROD_WEB_SITE_URL,
        webSiteUrlNotEx: p.PROD_WEB_SITE_URL,
        webScreenUrl: f.PROD_WEB_SITE_SCREEN_URL,
        calendarApiUrl: _.PROD_WEB_SITE_MAP_URL,
        calendarAIApiUrl: m.PROD_WEB_SITE_MAP_URL,
        calendarScheduleAppid: I.PROD_APPID,
        cloudTransUrl: g.PROD_CLOUD_TRANS_URL,
        aiTalkUrl: v.PROD_AI_TALK_URL,
        aiTalkRecUrl: y.PROD_AI_TALK_REC_URL,
        recordASRUrl: b.PROD_ASR_URL,
        connectCenterUrl: a.PROD_CONCENTER_URL,
        feelFreeTransUrl: s.PROD_TRANS_URL,
        vpushUrl: l.PROD_VPUSH_URL,
        vnoteCopilotUrl: E.PROD_VNOTE_COPILOT_URL,
        vnoteAsrUrl: w.PROD_VNOTE_ASR_URL,
        vnoteOcrUrl: S.PROD_VNOTE_OCR_URL,
        cloudUrl: T.PROD_VNOTE_OCR_URL,
        modelAPIUrl: A.PROD_CLAW_MODEL_URL,
        creditsUrl: O.PROD_CLAW_CREDITS_URL,
        xiaovChannelUrl: C.PROD_CLAW_XIAOV_URL,
        xiaovVFSUrl: N.PROD_CLAW_XIAOV_VFS_URL
    };
}
