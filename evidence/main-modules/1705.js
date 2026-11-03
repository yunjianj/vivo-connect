// analysis/pretty/main.js:131318; webpack module 1705
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSpaceNeedByPhone = void 0;
    const r = n(25);
    t.getSpaceNeedByPhone = e => {
        const {availableByte: t, totalSize: n} = e;
        let i = 0;
        if (r.isNumber(t)) {
            let e = t > 104857600 ? t - 104857600 : 0, r = !1;
            if (0 == n ? r = !0 : e <= 0 ? (e = 0, r = !1) : r = !(e < n), !r) {
                i = n - e;
            }
        }
        return i;
    };
}
