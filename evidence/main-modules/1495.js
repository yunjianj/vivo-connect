// analysis/pretty/main.js:111691; webpack module 1495
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(728), o = n(164), a = r.__importDefault(n(6)), s = n(242), l = r.__importDefault(n(356)), c = n(139), u = n(141), d = n(721), h = n(11), p = n(74), f = n(1496);
    class _ {
        constructor() {
            this.noticeWinSet = new Set;
        }
        static getInstance() {
            return this.instance || (this.instance = new _), this.instance;
        }
        sendAll(e, t, n) {
            var i, o, s;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[FreeTransfer] [notify] event: ${e} currentReceived: ${t.currentReceived} taskId: ${t.taskId}`), 
                !n && this.buidReportParams(e, t);
                let r = "task:add" === e ? c.IPC_NOTICE_WIN_MSG.ADD_NOTICE : c.IPC_NOTICE_WIN_MSG.UPDATE_NOTICE;
                const p = "task:add" === e ? h.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_ADD_TASK : h.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_UPDATE_TASK, f = yield this.buildNoticePayload(t, e);
                [ "task:completed", "task:error", "task:interrupted", "task:failed", "task:errorSpace", "task:cancel" ].includes(e) && !this.noticeWinSet.has(t.taskId) && (r = c.IPC_NOTICE_WIN_MSG.ADD_NOTICE, 
                this.noticeWinSet.add(t.taskId));
                const _ = "task:cancel" === e && (!(null === (i = a.default.getItem("userInfo")) || void 0 === i ? void 0 : i.token) || t.isDownloadDeleted), m = n && [ "task:errorSpace", "task:interrupted", "task:failed", "task:cancel" ].includes(e);
                (_ || m) && ((null === (o = t.successFiles) || void 0 === o ? void 0 : o.length) ? f.showList = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowLookBtn ] : f.showList = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowGotItBtn ]);
                const g = {
                    id: f.id,
                    from: f.from,
                    iconType: f.iconType,
                    title: f.title,
                    desc: f.desc,
                    transferredSize: f.transferredSize,
                    totalSize: f.totalSize,
                    showList: f.showList,
                    isPad: !1,
                    status: f.dialogStatus,
                    taskTransType: d.TaskTransType.Cloud
                };
                r === c.IPC_NOTICE_WIN_MSG.ADD_NOTICE && "task:cancel" === e || l.default.send(r, g), 
                !n && (null === (s = global.__mainWindow) || void 0 === s || s.webContents.send(p, f, t.lastRecord)), 
                global.__log.info(`[FreeTransfer] [notify] event: ${e} NOTICE_TYPE: ${r}}`);
            });
        }
        buildNoticePayload(e, t) {
            var n, o, a, l, c, h;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = null === (n = e.sendDeviceInfo) || void 0 === n ? void 0 : n.deviceName, f = null === (o = e.sendDeviceInfo) || void 0 === o ? void 0 : o.deviceId, _ = (null === (a = e.currentFiles) || void 0 === a ? void 0 : a.length) || e.totalCount, m = null === (l = e.successFiles) || void 0 === l ? void 0 : l.length;
                let g = [];
                const {isExpired: v, expireTimeInfo: y, expireTime: E} = s.checkExpireStatus(e.createTime), b = {
                    deviceName: r,
                    totalCount: _,
                    fileType: e.iconType,
                    totalSize: e.totalSize
                }, w = {
                    "task:add": d.TransStatusEnum.Progress,
                    "task:start": d.TransStatusEnum.Progress,
                    "task:wait": d.TransStatusEnum.Progress,
                    "task:progress": d.TransStatusEnum.Progress,
                    "task:error": d.TransStatusEnum.Interrupt,
                    "task:errorSpace": d.TransStatusEnum.Fail,
                    "task:completed": d.TransStatusEnum.Success,
                    "task:failed": d.TransStatusEnum.Fail,
                    "task:interrupt": d.TransStatusEnum.Interrupt,
                    "task:interrupted": d.TransStatusEnum.Interrupt,
                    "task:cancel": d.TransStatusEnum.Interrupt
                }[t], S = {
                    "task:completed": p.TRANSFER_FAIL_CODE.OK,
                    "task:error": p.TRANSFER_FAIL_CODE.NETWORK,
                    "task:errorSpace": p.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE,
                    "task:interrupt": p.TRANSFER_FAIL_CODE.ABORT,
                    "task:cancel": p.TRANSFER_FAIL_CODE.ABORT
                }[t], {title: T, desc: A} = yield i.getTranslatedInfo(b, w, m, S), {title: O} = yield i.getTranslatedInfo(Object.assign(Object.assign({}, b), {
                    totalCount: e.viewCount
                }), d.TransStatusEnum.FromPhone, m);
                switch (t) {
                  case "task:add":
                    g = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowProgress, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowAbortBtn, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowBackendReceiveBtn ];
                    break;

                  case "task:start":
                  case "task:progress":
                    g = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowProgress, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowAbortBtn, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowBackendReceiveBtn ];
                    break;

                  case "task:wait":
                    g = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowWaiting, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowAbortBtn, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowBackendReceiveBtn ];
                    break;

                  case "task:completed":
                    g = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowLookBtn ];
                    break;

                  case "task:cancel":
                    g = (null === (c = e.successFiles) || void 0 === c ? void 0 : c.length) ? [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowLookBtn, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowReAcceptBtn ] : [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowReAcceptBtn ];
                    break;

                  case "task:error":
                  case "task:failed":
                  case "task:errorSpace":
                    g = [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowDesc, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowReAcceptBtn ];
                    break;

                  case "task:interrupted":
                    g = (null === (h = e.successFiles) || void 0 === h ? void 0 : h.length) ? [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowLookBtn, u.NOTICE_WIN_MSG_ITEM_SHOW.ShowReAcceptBtn ] : [ u.NOTICE_WIN_MSG_ITEM_SHOW.ShowReAcceptBtn ];
                }
                return {
                    id: e.taskId,
                    taskId: e.taskId,
                    status: e.status,
                    downloadStatus: e.downloadStatus,
                    from: u.NOTICE_WIN_MSG_ITEM_FROM.FEEL_FREE,
                    devName: r,
                    devId: f,
                    iconType: e.iconType,
                    transferredSize: (null == e ? void 0 : e.currentReceived) || 0,
                    totalCount: (null == e ? void 0 : e.totalCount) || 0,
                    viewCount: (null == e ? void 0 : e.viewCount) || 0,
                    totalSize: (null == e ? void 0 : e.currentTotal) || 0,
                    fileTypes: (null == e ? void 0 : e.fileTypes) || "",
                    title: T,
                    recordTitle: O,
                    desc: A,
                    showList: g,
                    isExpired: v,
                    expireTimeInfo: y,
                    expireTime: E,
                    creatTime: e.createTime,
                    dialogStatus: w
                };
            });
        }
        buidReportParams(e, t) {
            var n, r;
            null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[freeTaskManager] [notify] [buidReportParams] enter");
            try {
                if (![ "task:completed", "task:error", "task:interrupted", "task:failed", "task:errorSpace", "task:cancel" ].includes(e)) return;
                const n = {
                    trans_id: t.taskId,
                    from: t.sendSourceEntry,
                    file_type: t.fileTypes,
                    file_number: t.totalCount,
                    file_size: Math.ceil(t.totalSize / 1024),
                    result: "task:completed" === e ? 1 : "task:failed" === e || "task:errorSpace" === e ? 0 : -1,
                    fail_reason: t.errorCodeCollect.join(","),
                    duration: Math.floor(t.downloadTimeTotal / 1e3),
                    num: o.TaskManager.getWaitingTaskNumber(),
                    send_complete: t.createTime,
                    download_start: t.downloadTimeStart,
                    download_complete: t.downloadTimeEnd,
                    device_type: 1,
                    if_hand: t.isFromVpush ? 0 : 1
                };
                i.dispatchBury({
                    eventId: "W688|10437",
                    params: n
                });
            } catch (e) {
                null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("[FreeTransfer] [notify] [buidReportParams] err: " + (e.message || JSON.stringify(e)));
            }
        }
        add(e) {
            this.noticeWinSet.add(e.taskId), this.sendAll("task:add", e);
        }
        start(e) {
            this.sendAll("task:start", e);
        }
        wait(e) {
            this.sendAll("task:wait", e);
        }
        completed(e) {
            this.sendAll("task:completed", e);
        }
        progress(e) {
            this.sendAll("task:progress", e);
        }
        error(e) {
            this.sendAll("task:error", e);
        }
        delete(e) {
            var t;
            const {taskId: n, isError: r, isSpaceError: i, isInterruptedError: o, aborted: a} = e;
            global.__log.info("[FreeTransfer] [notify] delete " + n), null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(h.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_DELETE_TASK, n), 
            this.noticeWinSet.has(n) && (r ? this.failed(e, !0) : i ? this.errorSpace(e, !0) : o ? this.interrupted(e, !0) : a && this.cancel(e, !0));
        }
        errorSpace(e, t) {
            this.sendAll("task:errorSpace", e, t);
        }
        interrupted(e, t) {
            this.sendAll("task:interrupted", e, t);
        }
        failed(e, t) {
            this.sendAll("task:failed", e, t);
        }
        cancel(e, t) {
            this.sendAll("task:cancel", e, t);
        }
        clear() {
            this.noticeWinSet.clear(), l.default.maybeDestroy();
        }
        clearSingle(e) {
            this.noticeWinSet.has(e) && (this.noticeWinSet.delete(e), global.__log.info("[FreeTransfer] [notify] clearSingle success taskId: " + e), 
            0 === this.noticeWinSet.size && l.default.maybeDestroy());
        }
        addRecord(e) {
            var t;
            null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(f.TaskIpcEnum.AddRecord, e);
        }
    }
    t.default = _.getInstance();
}
