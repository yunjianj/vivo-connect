// analysis/pretty/main.js:23098; webpack module 162
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setIsPhoneCancel = t.getIsPhoneCancel = t.buildImportUploadTaskParams = t.buildDropTaskParams = t.rebuildUploadFilesInfo = t.buildTransferResult = t.handleUploadRes = t.handleDownloadRes = t.buildDisabledRetryMsg = t.buildProgressMsg = t.fileExistAndRename = void 0;
    const r = n(0), i = r.__importDefault(n(71)), o = n(74), a = n(715);
    t.fileExistAndRename = function(e, t) {
        if (process.env.IS_WEB) return "";
        const r = n(4), i = n(1);
        let o = i.join(t, e);
        if (!r.existsSync(o)) return e;
        let a = 1, s = e.lastIndexOf(".");
        if (-1 === s) {
            if (e.endsWith(")") && -1 !== e.lastIndexOf("(") && -1 != e.lastIndexOf(")")) {
                let t = e.substring(e.lastIndexOf("(") + 1, e.lastIndexOf(")") + 1);
                a = parseInt(t), e = e.substring(0, e.lastIndexOf("("));
            }
        } else {
            let t = e.substring(0, s), n = e.substring(s);
            if (t.endsWith(")") && -1 != t.lastIndexOf("(") && -1 != t.lastIndexOf(")")) {
                let r = t.substring(t.lastIndexOf("(") + 1, t.lastIndexOf(")"));
                a = parseInt(r), e = e.substring(0, e.lastIndexOf("(")) + n;
            }
        }
        let l = e;
        for (;r.existsSync(o); ) {
            l = e;
            let n = l.lastIndexOf(".");
            if (-1 === n) l = l + "(" + a + ")"; else {
                let e = l.substring(0, n), t = l.substring(n);
                l = e + "(" + a + ")" + t;
            }
            o = i.join(t, l), ++a;
        }
        return l;
    }, t.buildProgressMsg = function(e, t, n, r, i, o = 0, a = 0, s = "vivoSuite", l) {
        const c = {
            module: s,
            progress: n,
            fileSize: r,
            fileProportion: o,
            fileNumber: i,
            successFile: a,
            title: l
        };
        return {
            deviceId: e,
            id: t,
            type: n,
            msg: "DRAG_COMMON_LOGIC:" + JSON.stringify(c)
        };
    }, t.buildDisabledRetryMsg = function(e, t, n, r, i = "vivoSuite") {
        const o = {
            module: i,
            retry: 1 == r ? 1 : 0
        };
        return {
            deviceId: e,
            id: t,
            type: n,
            msg: "DRAG_COMMON_LOGIC:" + JSON.stringify(o)
        };
    }, t.handleDownloadRes = function(e) {
        if (!e || !e.statusCode) return o.TRANSFER_FAIL_CODE.NETWORK;
        switch (e.statusCode) {
          case a.HTTPStatus.HTTP_OK:
            return o.TRANSFER_FAIL_CODE.OK;

          case a.HTTPStatus.HTTP_NOT_FOUND:
            return o.TRANSFER_FAIL_CODE.FILE_NOT_EXIST;
        }
        return o.TRANSFER_FAIL_CODE.UNKNOWN;
    }, t.handleUploadRes = function(e, t) {
        if (!e || !e.statusCode) return o.TRANSFER_FAIL_CODE.UNKNOWN;
        switch (e.statusCode) {
          case a.HTTPStatus.HTTP_OK:
            if (!t) return o.TRANSFER_FAIL_CODE.OK;
            try {
                const t = e.body || "";
                return 0 == (t ? JSON.parse(t) : {}).status ? o.TRANSFER_FAIL_CODE.OK : o.TRANSFER_FAIL_CODE.UNKNOWN;
            } catch (e) {
                return global.__fmLog.info("[fm]handleUploadRes, parse body err: " + e), o.TRANSFER_FAIL_CODE.UNKNOWN;
            }

          case a.HTTPStatus.HTTP_NO_ACCESS_PERMISSION:
            return o.TRANSFER_FAIL_CODE.NO_PERMISSSION;

          case a.HTTPStatus.HTTP_INSUFFICIENT_STORAGE:
            return global.__fmLog.info("[fm]handleUploadRes, not_enough_space: " + JSON.stringify(e)), 
            o.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE;

          case a.HTTPStatus.HTTP_REQUEST_TIMEOUT:
          case a.HTTPStatus.HTTP_INTERNAL_SERVER_ERROR:
            return o.TRANSFER_FAIL_CODE.NETWORK;
        }
        return o.TRANSFER_FAIL_CODE.NETWORK;
    }, t.buildTransferResult = function(e, t, n, r, i) {
        let a = Date.now() - e.startTime, s = {
            params: e,
            totalCount: e.files.length,
            failCount: t.length,
            progressId: r,
            failCode: n,
            totalSize: e.files.reduce((e, t) => e + t.fileSize, 0),
            duration: a,
            failedFiles: t
        };
        return s.failCode == o.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE && i && (s.spaceNeed = i), 
        s;
    }, t.rebuildUploadFilesInfo = function(e) {
        if (process.env.IS_WEB) return;
        if (!e.failedFiles || 0 == e.failedFiles.length) return;
        const t = n(4), o = e.failedFiles || [];
        o.forEach(e => r.__awaiter(this, void 0, void 0, function*() {
            try {
                const n = t.statSync(e.savePath, {
                    throwIfNoEntry: !1
                });
                e.fileSize = n ? n.size : e.fileSize;
            } catch (e) {
                global.__fmLog.info("[fm]rebuildUploadFilesInfo, fs.statSync err: " + e);
            }
        }));
        let a = {
            id: i.default(),
            dropFileItems: o,
            type: e.params.type || "TO_PC_FILE_MANAGER",
            savePath: e.params.savePath || "",
            totalSize: 0,
            totalCount: o.length,
            screen_w: 0,
            screen_h: 0,
            x: 0,
            y: 0
        };
        return o.forEach(e => {
            a.totalSize += e.fileSize;
        }), a;
    }, t.buildDropTaskParams = function(e, t, n, r, i, o) {
        const a = t.map(e => {
            const t = e.fileName.lastIndexOf(".");
            return t > -1 ? e.fileName.substring(t + 1) : "";
        });
        return {
            trans_type: e,
            file_type: [ ...new Set(a) ].filter(e => e && e.trim()).join("#"),
            file_number: t.length,
            file_size: t.reduce((e, t) => e + t.fileSize, 0),
            is_succed: n,
            fail_reason: r,
            page_type: i,
            isSearch: o
        };
    }, t.buildImportUploadTaskParams = function(e, t, n) {
        const r = [ ...new Set([ ...new Set(t), ...new Set((null == n ? void 0 : n.successFile) || []) ]) ];
        let i = [];
        return r.forEach(e => {
            const t = e.fileName.lastIndexOf(".");
            if (t > -1) {
                let n = e.fileName.substring(t + 1), r = i.find(e => e.type == n);
                r || (r = {
                    type: n,
                    num: 0,
                    size: 0
                }, i.push(r)), r.num += 1, r.size += e.fileSize;
            }
        }), {
            taskInfo: i,
            page_type: e,
            file_number: r.length
        };
    };
    let s = !1;
    t.getIsPhoneCancel = () => (console.log("test getIsPhoneCancel", s), s), t.setIsPhoneCancel = e => {
        console.log("test setIsPhoneCancel", e), s = e;
    };
}
