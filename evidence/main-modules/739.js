// analysis/pretty/main.js:66688; webpack module 739
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(55));
    const i = new class {
        constructor() {
            this.responseHandle = {
                200: e => e.data,
                401: e => (console.log("登录态失效", e), Promise.reject(e)),
                1e4: e => (console.log(e), Promise.reject(e)),
                2e4: e => Promise.reject(e),
                23e3: e => Promise.reject(e),
                21008: e => Promise.reject(e),
                25999: e => Promise.reject(e),
                default: e => Promise.reject(e)
            }, this.init();
        }
        init() {
            this.request = r.default.create({
                baseURL: "",
                timeout: 3e5,
                withCredentials: !0
            }), this.request.interceptors.response.use(e => {
                let t = e.data;
                const n = 0 === t.code ? 200 : t.code;
                return (this.responseHandle[n] || this.responseHandle.default)(t);
            }, e => (console.error("axios error:", e), Promise.reject(e)));
        }
    };
    t.default = i;
}
