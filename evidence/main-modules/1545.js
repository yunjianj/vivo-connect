// analysis/pretty/main.js:117959; webpack module 1545
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.vtalk_updateRecord = t.vtalk_createRecord = void 0;
    const r = n(0), i = n(220), o = "chat_content";
    t.vtalk_createRecord = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return yield t.insert(o, e), {};
            } catch (e) {
                throw new Error("vtalk_createRecord failed");
            }
        });
    }, t.vtalk_updateRecord = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `update chat_content set external_id='${e.noteGuid}' where request_id= '${e.request_id}' and category = '${e.category}'`;
                e.category === i.CHAT_CATEGORY.RESPONSE_ERROR && (n = `update chat_content set data='${JSON.stringify(e.data)}', external_type='', external_content='', category='${e.category}' where request_id= '${e.request_id}' and category = '${i.CHAT_CATEGORY.RESPONSE_NOTE}'`), 
                yield t.run(n);
                const r = `SELECT * from chat_content where request_id= '${e.request_id}' and category = '${e.category}'`;
                let o = yield t.all(r);
                return o && o.length > 0 ? o[0] : {};
            } catch (e) {
                throw new Error("vtalk_updateRecord failed");
            }
        });
    };
}
