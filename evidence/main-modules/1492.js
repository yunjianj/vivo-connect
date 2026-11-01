// analysis/pretty/main.js:111592; webpack module 1492
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class r {
        constructor() {
            this.list = {};
        }
        subscribe(e, t) {
            if (console.log(e), "string" != typeof e) throw "topic为字符串类型";
            if ("function" != typeof t) throw "func为函数类型";
            const n = this.list;
            return n[e] || (n[e] = []), n[e].push(t), () => this.unsubscribe(e, t);
        }
        publish(e, t) {
            if ("string" != typeof e) throw "topic必须是字符串类型";
            const n = this.list;
            n[e] && n[e].forEach(e => {
                e.call(this, t);
            });
        }
        unsubscribe(e, t) {
            if ("string" != typeof e) throw "topic为字符串类型";
            if (t && "function" != typeof t) throw "func为函数类型";
            const n = this.list;
            if (!n[e]) throw "不存在该topic监听";
            if (t) {
                if (!n[e].includes(t)) throw "要移除的事件不存在";
                {
                    const r = n[e].findIndex(e => e === t);
                    n[e].splice(r, 1), 0 === n[e].length && delete n[e];
                }
            } else n[e] && delete n[e];
        }
        static getInstance() {
            return r.instance || (r.instance = new r), r.instance;
        }
    }
    t.default = r.getInstance();
}
