// analysis/pretty/main.js:81985; webpack module 1015
function(e, t, n) {
    "use strict";
    const r = n(51);
    e.exports = r((e, t = {}) => {
        let n = "metadata";
        t.key && (n = t.key);
        let r = [];
        return t.fillExcept || t.fillWith || (r.push("level"), r.push("message")), t.fillExcept && (r = t.fillExcept), 
        r.length > 0 ? function(e, t, n) {
            const r = t.reduce((t, n) => (t[n] = e[n], delete e[n], t), {}), i = Object.keys(e).reduce((t, n) => (t[n] = e[n], 
            delete e[n], t), {});
            return Object.assign(e, r, {
                [n]: i
            }), e;
        }(e, r, n) : t.fillWith ? function(e, t, n) {
            return e[n] = t.reduce((t, n) => (t[n] = e[n], delete e[n], t), {}), e;
        }(e, t.fillWith, n) : e;
    });
}
