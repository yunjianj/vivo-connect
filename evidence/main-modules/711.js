// analysis/pretty/main.js:63537; webpack module 711
function(e, t, n) {
    "use strict";
    var r = n(238), i = {
        onopen: null,
        onmessage: null,
        onerror: null,
        onclose: null,
        addEventListener: function(e, t, n) {
            this.on(e, t);
        },
        removeEventListener: function(e, t, n) {
            this.removeListener(e, t);
        },
        dispatchEvent: function(e) {
            e.target = e.currentTarget = this, e.eventPhase = r.AT_TARGET, this["on" + e.type] && this["on" + e.type](e), 
            this.emit(e.type, e);
        }
    };
    e.exports = i;
}
