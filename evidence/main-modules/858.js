// analysis/pretty/main.js:76692; webpack module 858
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(143), i = {
        isChangeErrorOk: e => {
            const {code: t} = e;
            return "ENOSYS" === t || !(r.IS_USER_ROOT || "EINVAL" !== t && "EPERM" !== t);
        },
        isRetriableError: e => {
            const {code: t} = e;
            return "EMFILE" === t || "ENFILE" === t || "EAGAIN" === t || "EBUSY" === t || "EACCESS" === t || "EACCS" === t || "EPERM" === t;
        },
        onChangeError: e => {
            if (!i.isChangeErrorOk(e)) throw e;
        }
    };
    t.default = i;
}
