// analysis/pretty/main.js:24032; webpack module 177
function(e, t) {
    e.exports = e => {
        let t = e.length - 1, n = -1;
        for (;t > -1 && "/" === e.charAt(t); ) n = t, t--;
        return -1 === n ? e : e.slice(0, n);
    };
}
