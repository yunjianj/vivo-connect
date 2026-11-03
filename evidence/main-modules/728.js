// analysis/pretty/main.js:64472; webpack module 728
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getTranslatedInfo = t.dispatchBury = t.initTaskMain = void 0;
    const r = n(0), i = n(2), o = n(164), a = n(11), s = r.__importDefault(n(71)), l = n(359);
    function c(e, t = []) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = yield o.TaskManager.getAllTasks();
            for (const n of t) {
                e.some(e => e.taskId == n.taskId) || (global.__log.info("[FreeTransfer] [ipc] addTask taskId: " + n.taskId), 
                o.TaskManager.addTask(n));
            }
        });
    }
    function u(e, t) {
        global.__log.info("[FreeTransfer] [ipc] resumeTask taskId: " + t.taskId), o.TaskManager.resumeTask(t.taskId);
    }
    function d(e, t) {
        global.__log.info("[FreeTransfer] [ipc] cancel taskId: " + t.taskId), o.TaskManager.cancelTask(t.taskId);
    }
    function h(e, t) {
        global.__log.info("[FreeTransfer] [ipc] deleteTask taskId: " + t.join(",")), o.TaskManager.deleteTask(t);
    }
    function p(e) {
        global.__log.info("[FreeTransfer] [ipc] deleteAll"), o.TaskManager.deleteAll();
    }
    function f(e, t) {
        global.__log.info("[FreeTransfer] [ipc] cleardb "), o.TaskManager.clearDb();
    }
    function _(e) {
        global.__log.info("[FreeTransfer] [ipc] login"), o.TaskManager.login();
    }
    function m(e) {
        global.__log.info("[FreeTransfer] [ipc] logout"), o.TaskManager.logout();
    }
    function g(e, t) {
        global.__log.info("[FreeTransfer] [ipc] view taskId: " + t.taskId), o.TaskManager.view(t.taskId);
    }
    t.initTaskMain = function() {
        i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_ADD_TASK, c), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_RESUME_TASK, u), 
        i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_CANCEL_TASK, d), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_VIEW_TASK, g), 
        i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_DELETE_TASK, h), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_DELETE_TASK_ALL, p), 
        i.ipcMain.handle(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_GET_TASKS, e => r.__awaiter(this, void 0, void 0, function*() {
            return global.__log.info("[FreeTransfer] [ipc] FREE_TRANSFER_GET_TASKS"), yield o.TaskManager.getAllTasks();
        })), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_RESET, _), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_ABORT_ALL, m), 
        i.ipcMain.on("cleardb", f), i.ipcMain.on(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_SET_BASEURL, l.setBaseUrl), 
        i.ipcMain.on(a.APP_MESSAGE_ENUM.NETWORK_STATUS_CHANGE, (e, t) => {
            t || (global.__log.info("[FreeTransfer] [ipc] cancelNetwork"), o.TaskManager.cancelTaskByNetWork());
        }), i.ipcMain.handle(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_GET_IS_EXPIRED, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            return global.__log.info("[FreeTransfer] [ipc] FREE_TRANSFER_GET_IS_EXPIRED " + t), 
            yield o.TaskManager.getIsExpired(t);
        }));
    }, t.dispatchBury = function(e) {
        var t, n;
        null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info(`[freeTaskManager] [ipc] [dispatchBury] eventId: ${e.eventId} params: ${JSON.stringify(e.params)}`), 
        null === (n = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === n || n.webContents.send(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_BURY_MAIN_TO_RENDERER, e);
    }, t.getTranslatedInfo = function(e, t, n = 0, o) {
        return new Promise(l => r.__awaiter(this, void 0, void 0, function*() {
            var r;
            const c = s.default();
            null === (r = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === r || r.webContents.send(a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_TRANS_STRING, {
                baseInfo: e,
                status: t,
                successCount: n,
                ipcId: c,
                code: o
            }), i.ipcMain.once(`${a.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_TRANS_STRING}${c}`, (e, t) => {
                l(t);
            });
        }));
    };
}
