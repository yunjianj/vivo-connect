// analysis/pretty/main.js:39371; webpack module 359
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getBaseUrl = t.setBaseUrl = t.axiosServer = void 0;
    const r = n(0), i = r.__importDefault(n(55)), o = n(242), a = r.__importDefault(n(1491)), s = i.default.create({
        baseURL: "",
        timeout: 3e4
    });
    s.interceptors.request.use(e => (e.headers = Object.assign(Object.assign({}, e.headers || {}), o.getCyHeaders()), 
    e), e => Promise.reject(e));
    const l = () => "renderer" === process.type ? window._log : global.__log;
    s.interceptors.response.use(e => {
        if (200 !== e.status) throw console.error(`HTTP错误：${e.status} ${e.statusText}`), 
        new Error("HTTP错误：" + e.status);
        const {code: t, msg: n, data: r, success: i} = e.data;
        try {
            const r = {
                code: t,
                msg: n,
                success: i
            };
            [ "/api/v1/file/initDownload", "/api/v1/upload/record" ].some(t => {
                var n;
                return null === (n = e.config.url) || void 0 === n ? void 0 : n.includes(t);
            }) ? l().info(`[freeTransfer][axiosServer] [reqData]: ${JSON.stringify(e.config.data)} [resData]: ${JSON.stringify(r)}`) : l().info(`[freeTransfer][axiosServer] [reqData]: ${JSON.stringify(e.config.data)} [resData]: ${JSON.stringify(e.data)}`);
        } catch (e) {
            l().info("[freeTransfer][axiosServer][printError] " + e.message);
        }
        switch (t) {
          case 0:
            return r;

          case -1:
            return console.error("未知异常:", n), Promise.reject({
                code: -1,
                message: "未知异常"
            });

          case 1001:
            return console.error("上传失败：用户当日上传限额已用完"), Promise.reject({
                code: 1001,
                message: "上传限额已用完"
            });

          case 1002:
            return console.error("Token校验失败，请重新登录"), Promise.reject({
                code: 1002,
                message: "Token无效"
            });

          case 1003:
            return console.error("AppKey不存在，请联系管理员"), Promise.reject({
                code: 1003,
                message: "AppKey错误"
            });

          case 1004:
            return console.error("签名校验失败，请重试"), Promise.reject({
                code: 1004,
                message: "签名错误"
            });

          case 1015:
            return console.error("账号token已过期"), "renderer" === process.type && a.default.showTokenExpireTips(), 
            Promise.reject({
                code: 1015,
                message: "账号token已过期"
            });

          default:
            return console.error("未处理的业务码:", t), Promise.reject({
                code: t,
                message: "未处理的业务码"
            });
        }
    }, e => e.response ? (console.error(`HTTP异常：${e.response.status} ${e.response.statusText}`), 
    Promise.reject({
        code: e.response.status,
        message: "HTTP错误：" + e.response.statusText,
        type: "http",
        raw: e
    })) : e.request ? (console.error("无响应或网络错误", e), Promise.reject({
        code: "NETWORK_ERROR",
        message: "网络异常或无响应",
        type: "network",
        raw: e
    })) : (console.error("请求出错:", e.message), Promise.reject({
        code: "UNKNOWN_ERROR",
        message: e.message || "未知错误",
        type: "unknown",
        raw: e
    }))), t.axiosServer = function(e) {
        return s.request(Object.assign({
            url: e.url,
            method: e.method,
            params: e.params,
            data: e.data,
            headers: e.headers,
            baseURL: e.baseURL || s.defaults.baseURL
        }, e.extra));
    }, t.setBaseUrl = function(e, t) {
        s.defaults.baseURL = t;
    }, t.getBaseUrl = function() {
        return s.defaults.baseURL;
    };
}
