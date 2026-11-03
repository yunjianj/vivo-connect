// analysis/pretty/main.js:18749; webpack module 137
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(28));
    t.default = function(e) {
        try {
            global.__log.info("DragFile.launch process: " + e.cmd), r.default.launch(JSON.stringify(e)), 
            global.__log.info("DragFile.launch process end");
        } catch (e) {
            global.__log.error("DragFile.launch process error " + ((null == e ? void 0 : e.message) || e));
        }
    };
}
