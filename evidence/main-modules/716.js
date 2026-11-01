// analysis/pretty/main.js:63756; webpack module 716
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.taskDownloadEnd = void 0;
    const r = n(140), i = n(74), o = n(717), a = n(138);
    t.taskDownloadEnd = function(e, t, n, s, l, c) {
        const u = [ ...new Set(n.map(e => {
            const t = e.lastIndexOf(".");
            return e.slice(t + 1);
        })) ].join("#");
        let d;
        d = s == i.TRANSFER_FAIL_CODE.OK ? o.TASK_IS_SUCCED.SUCCESS : s == i.TRANSFER_FAIL_CODE.ABORT || s == i.TRANSFER_FAIL_CODE.CANCEL_FROM_PHONE ? o.TASK_IS_SUCCED.ABORT : o.TASK_IS_SUCCED.FAIL;
        const h = {
            trans_type: o.TASK_TRANS_TYPE.PHONE_2_PC,
            file_type: u,
            file_number: t.totalCount,
            file_size: t.totalSize,
            is_succed: d,
            fail_reason: c ? c.title : "",
            file_path: "",
            duration: ((new Date).valueOf() - l) / 1e3,
            scene: e
        };
        r.send2Main(a.FM_RENDERER_ENUM.DOWNLOAD_WINDOW_TASK, {
            eventId: "W688|10146",
            params: h
        });
    };
}
