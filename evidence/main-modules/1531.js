// analysis/pretty/main.js:116123; webpack module 1531
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0);
    t.default = {
        event(e) {
            setTimeout(() => {
                e({
                    message: "this is the calendar function"
                });
            }, 2e3);
        },
        listenerEvent(e) {
            setInterval(() => {
                e({
                    b: "this is a listener event callback from calendar >>>>   " + new Date
                });
            }, 5e3);
        },
        runDataBaseMethod(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = n(1532), i = n(1540), {methodName: o, data: a, type: s} = e;
                let l, c = a && JSON.parse(a);
                if (o) try {
                    l = "caldav" == s ? yield i[o](c) : yield r[o](c), t(l);
                } catch (e) {
                    t(l, e);
                } else t(l, new Error("参数不全"));
            });
        }
    };
}
