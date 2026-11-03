// analysis/pretty/main.js:76741; webpack module 860
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = {
        interval: 25,
        intervalId: void 0,
        limit: n(143).LIMIT_FILES_DESCRIPTORS,
        queueActive: new Set,
        queueWaiting: new Set,
        init: () => {
            r.intervalId || (r.intervalId = setInterval(r.tick, r.interval));
        },
        reset: () => {
            r.intervalId && (clearInterval(r.intervalId), delete r.intervalId);
        },
        add: e => {
            r.queueWaiting.add(e), r.queueActive.size < r.limit / 2 ? r.tick() : r.init();
        },
        remove: e => {
            r.queueWaiting.delete(e), r.queueActive.delete(e);
        },
        schedule: () => new Promise(e => {
            const t = () => r.remove(n), n = () => e(t);
            r.add(n);
        }),
        tick: () => {
            if (!(r.queueActive.size >= r.limit)) {
                if (!r.queueWaiting.size) return r.reset();
                for (const e of r.queueWaiting) {
                    if (r.queueActive.size >= r.limit) break;
                    r.queueWaiting.delete(e), r.queueActive.add(e), e();
                }
            }
        }
    };
    t.default = r;
}
