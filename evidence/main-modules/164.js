// analysis/pretty/main.js:23306; webpack module 164
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TaskManager = t.recordStatus = void 0;
    const r = n(0), i = n(1490), o = r.__importDefault(n(1495)), a = n(727), s = n(242);
    var l;
    !function(e) {
        e[e.success = 3] = "success", e[e.download = 7] = "download", e[e.cancel = 8] = "cancel";
    }(l = t.recordStatus || (t.recordStatus = {}));
    class c {
        constructor() {
            this.tasks = new Map;
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
        hasRunningTask() {
            return [ ...this.tasks.values() ].some(e => "downloading" === e.status);
        }
        addTask(e, t = !1) {
            global.__log.info(`[FreeTransfer] [TaskDonwloadManager] addTask taskItem: taskId:${e.taskId},totalCount:${e.totalCount},totalSize:${e.totalSize},receiveDeviceInfo:${JSON.stringify(e.receiveDeviceInfo)}, sendDeviceInfo:${JSON.stringify(e.sendDeviceInfo)}`);
            const n = this.tasks.get(e.taskId);
            if (n && !n.isDownloadDeleted) return;
            n && (n.removeAllListeners(), this.tasks.delete(e.taskId));
            const r = new i.TaskDownload(e, t);
            if (r.on("progress", () => o.default.progress(r)), r.on("done", () => {
                const e = {
                    completed: "完成",
                    interrupted: "中断",
                    failed: "失败"
                }[r.status] || r.status;
                global.__log.info(`[FreeTransfer] [TaskDonwloadManager] addTask.onDone taskId: 任务 ${r.id} ${e} 成功 ${r.successFiles.length}, 失败 ${r.failedFiles.length}`), 
                "completed" === r.status ? o.default.completed(r) : "interrupted" === r.status ? (r.isInterruptedError = !0, 
                o.default.interrupted(r)) : "failed" === r.status && (r.isError = !0, o.default.failed(r)), 
                this.next();
            }), r.on("cancel", () => {
                global.__log.info("[FreeTransfer] [TaskDonwloadManager] task.onCancel taskId: " + r.taskId), 
                o.default.cancel(r), this.next();
            }), r.on("spaceError", () => {
                r.isSpaceError = !0, o.default.errorSpace(r), this.next();
            }), r.on("error", () => {
                r.isError = !0, o.default.error(r), this.next();
            }), r.on("errorNetwork", () => {
                r.isError = !0, o.default.error(r);
            }), r.on("addRecord", e => {
                o.default.addRecord(e);
            }), this.tasks.set(e.taskId, r), e.status === l.cancel) return r.status = "interrupted", 
            void (r.downloadStatus = l.cancel);
            const {isExpired: a} = s.checkExpireStatus(e.createTimeMillis);
            a ? r.status = "interrupted" : (r.status = "waiting", o.default.add(r), this.hasRunningTask() ? o.default.wait(r) : r.start());
        }
        resumeTask(e) {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.resumeTask taskId: " + e);
            const t = this.tasks.get(e);
            t && (this.hasRunningTask() ? (t.status = "waiting", t.reset(), o.default.wait(t)) : (o.default.start(t), 
            t.resume()));
        }
        next() {
            for (const e of this.tasks.values()) if ("waiting" === e.status) {
                e.start();
                break;
            }
        }
        cancelTask(e) {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.cancelTask taskId: " + e);
            const t = this.tasks.get(e);
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.cancelTask task.status " + (null == t ? void 0 : t.status)), 
            t && [ "downloading", "waiting" ].includes(t.status) && t.cancel();
        }
        cancelTaskByNetWork() {
            Array.from(this.tasks.keys()).forEach(e => {
                const t = this.tasks.get(e);
                t && [ "downloading", "waiting" ].includes(t.status) && t.cancelByNetwork();
            });
        }
        cancelAll() {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.cancelAll");
            for (const e of this.tasks.values()) [ "downloading", "waiting" ].includes(e.status) && e.cancel();
        }
        deleteTask(e) {
            var t, n;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = Array.from(this.tasks.values()).filter(t => e.includes(t.taskId)).map(e => e.id);
                global.__log.info(`[FreeTransfer] [TaskDonwloadManager] opr.deleteTask onBefore taskIds: ${e.join(",")}, ids: ${r.join(",")}, source: ${null === (n = null === (t = (new Error).stack) || void 0 === t ? void 0 : t.split("\n")[2]) || void 0 === n ? void 0 : n.trim()}`);
                for (const t of e) {
                    const e = this.tasks.get(t);
                    if (!e) return;
                    e.isDownloadDeleted = !0, [ "downloading", "waiting" ].includes(e.status) && e.cancel(), 
                    e.removeAllListeners(), o.default.delete(e);
                }
                let i = !0;
                try {
                    yield a.deleteRecord(r), global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.deleteTask onSuccess taskIds: " + e.join(","));
                } catch (t) {
                    i = !1, global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.deleteTask onFail taskIds: " + e.join(","));
                }
                return this.next(), i;
            });
        }
        deleteAll() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.deleteAll");
                const e = Array.from(this.tasks.values()).map(e => e.id);
                for (const e of this.tasks.values()) e.isDownloadDeleted = !0, [ "downloading", "waiting" ].includes(e.status) && e.cancel(), 
                e.removeAllListeners(), o.default.delete(e);
                let t = !0;
                try {
                    global.__log.info(`[FreeTransfer] [TaskDonwloadManager] opr.deleteAll , taskIds: ${[ ...this.tasks.values() ].map(e => e.taskId).join(",")},  ids: ${e.join(",")}`), 
                    yield a.deleteRecord(e), global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.deleteAll onSuccess");
                } catch (e) {
                    t = !1, global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.deleteAll onFail");
                }
                return t;
            });
        }
        cancelTaskInNotification() {
            const e = [ ...this.tasks.values() ].filter(e => o.default.noticeWinSet.has(e.taskId));
            for (const t of e) global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.cancelTaskInNotification"), 
            [ "downloading", "waiting" ].includes(t.status) && t.cancel();
            o.default.clear();
        }
        login() {
            this.tasks.clear();
        }
        logout() {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.logout");
            for (const e of this.tasks.values()) [ "downloading", "waiting" ].includes(e.status) && e.cancel();
        }
        view(e) {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.view taskId: " + e);
            const t = this.tasks.get(e);
            t && (t.viewFile(), o.default.clearSingle(e));
        }
        backendTransfer(e) {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.backendTransfer"), global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.backendTransfer taskId: " + e);
        }
        rogerTask(e) {
            global.__log.info("[FreeTransfer] [TaskDonwloadManager] opr.rogerTask taskId: " + e);
            this.tasks.get(e) && o.default.clearSingle(e);
        }
        clearDb() {
            n(165).clearEntireTable();
        }
        getTaskStatus(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = this.tasks.get(e);
                if (!t) return null;
                const n = {
                    waiting: "task:wait",
                    downloading: "task:progress",
                    completed: "task:completed",
                    interrupted: "task:interrupted",
                    failed: "task:failed",
                    canceled: "task:cancel"
                }[t.status];
                return yield o.default.buildNoticePayload(t, n);
            });
        }
        getAllTasks() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const e = [ ...this.tasks.values() ].filter(e => !e.isDownloadDeleted);
                return (yield Promise.all(e.map(e => this.getTaskStatus(e.taskId)))).filter(Boolean);
            });
        }
        getWaitingTaskNumber() {
            return [ ...this.tasks.values() ].filter(e => [ "waiting", "downloading" ].includes(e.status)).length;
        }
        getIsExpired(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[FreeTransfer] [TaskDonwloadManager] getIsExpired start " + e);
                const t = this.tasks.get(e);
                return (null == t ? void 0 : t.getIsExpired()) || !1;
            });
        }
    }
    t.TaskManager = c.getInstance();
}
