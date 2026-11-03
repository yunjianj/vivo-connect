// analysis/pretty/main.js:128176; webpack module 1675
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(53), i = n(786);
    t.default = class {
        static createUpdateBuriedPointSql() {
            return `update top(${i.BATCH_SIZE}) ${r.BuriedPointDataBase.REPORT_TABLE_NAME} set status = 1 `;
        }
        static createRemoveBuriedPointSql(e) {
            return `delete from ${r.BuriedPointDataBase.REPORT_TABLE_NAME} where _id in (${e})`;
        }
    };
}
