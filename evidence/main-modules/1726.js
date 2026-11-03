// analysis/pretty/main.js:132257; webpack module 1726
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = n(2), o = n(163), a = n(138);
    t.init = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = n(165);
            e.initTransferRecordTable(), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.INSERT_DB_TRANSFER_RECORD, (t, n) => r.__awaiter(this, void 0, void 0, function*() {
                global.__cm__mpLog.info("[fm][transfer-record][insertTransferRecord][1] " + (n ? JSON.stringify(n) : null)), 
                yield e.insertTransferRecord(n), t.sender.send(a.FM_RENDERER_ENUM.ADD_RECORD_SUCCESS);
            })), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.UPDATE_DB_TRANSFER_RECORD, (t, n) => {
                e.updateTransferRecord([ n ]);
            }), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.DELETE_DB_TRANSFER_RECORD, (t, n) => {
                const r = Array.isArray(n) ? [ ...n ] : [ n ];
                try {
                    e.batchDeleteTransferRecords(r), t.sender.send(a.FM_RENDERER_ENUM.DELETE_RECORD_SUCCESS), 
                    global.__log.info("[fm]delete transfer records success");
                } catch (e) {
                    global.__log.info("[fm]delete error", e, r);
                }
            }), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.CLEAR_DB_TRANSFER_RECORD, (t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield e.clearRecords(n), t.sender.send(a.FM_RENDERER_ENUM.DELETE_RECORD_SUCCESS), 
                    global.__log.info("[fm]clear transfer records success " + n);
                } catch (e) {
                    global.__log.info("[fm]clear error", e, n);
                }
            })), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.DELETE_DB_TRANSFER_RECORD_OVERTIME, (t, n) => {
                e.deleteRecordsOverOneMonth(n);
            }), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.DELETE_DEVICE_TRANSFER_RECORD, (t, n, r) => {
                e.deleteDeviceTransferRecords(n, r);
            }), i.ipcMain.on(o.FM_MAIN_EVENT_ENUM.QUERY_DB_TRANSFER_RECORD, (t, n, r, i, o = 50) => {
                e.queryTransferRecord(n, r, i, o).then(e => {
                    try {
                        global.__log.info("[fm]FM_MAIN_EVENT_ENUM.QUERY_DB_TRANSFER_RECORD>>>res>>> " + (e ? JSON.stringify(e) : null));
                    } catch (e) {
                        global.__log.info("[fm]FM_MAIN_EVENT_ENUM.QUERY_DB_TRANSFER_RECORD>>>error>>> " + e.message);
                    }
                    t.sender.send(a.FM_RENDERER_ENUM.RETURN_TRANSFER_RECORD, e);
                });
            }), i.ipcMain.handle("QUERY_DB_DEVICE_LIST", (t, n, i) => r.__awaiter(this, void 0, void 0, function*() {
                return yield e.queryDeviceRecord(n, i);
            }));
        });
    };
}
