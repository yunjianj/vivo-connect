// analysis/pretty/main.js:112187; webpack module 1499
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(55)).default.create({
        baseURL: "http://172.22.188.74:8083/",
        timeout: 5e3,
        headers: {
            "Content-Type": "application/json"
        }
    });
    r.interceptors.request.use(e => e, e => Promise.reject(e)), r.interceptors.response.use(e => {
        const t = e.config.responseType;
        return console.log("Response Type:", t), "stream" === t ? e : e.data;
    }, e => {
        if (e.response) switch (e.response.status) {
          case 401:
            console.log("未授权");
            break;

          case 403:
            console.log("禁止访问");
            break;

          case 404:
            console.log("资源未找到");
            break;

          case 500:
            console.log("服务器内部错误");
            break;

          default:
            console.log("未知错误");
        } else e.request ? console.log("请求已发出，但没有收到响应") : console.log("发生了一些问题，导致请求未发出", e.message);
        return Promise.reject(e);
    });
    t.default = {
        setGlobalHeader: (e, t) => {
            r.defaults.headers.common[e] = t;
        },
        setBaseURL: e => {
            r.defaults.baseURL = e;
        },
        getUpgradeDetail: () => r.get("/update/upgrade/detail"),
        downloadFile: (e, t = () => {}) => r({
            method: "get",
            url: e,
            responseType: "stream",
            onDownloadProgress: e => {
                console.log("progressEvent", e, t);
            }
        }),
        getJsonFile: e => r.get(e),
        getVersionInfo: () => r.get("/update/upgrade/detail")
    };
}
