// analysis/pretty/main.js:131258; webpack module 1704
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkUploadInfoWithRetry = t.checkUploadInfo = void 0;
    const r = n(0), i = n(381), o = n(74), a = n(380), s = r.__importDefault(n(113)), l = n(162), c = n(1705), u = r.__importDefault(n(379));
    t.checkUploadInfo = e => new Promise(t => r.__awaiter(void 0, void 0, void 0, function*() {
        const {id: n, baseUrl: r, uploadInfo: d, newToken: h = ""} = e;
        global.__fmLog.info(`[fm]directory-transfer.ts uploadDirectory checkUploadInfo start url:${a.API_FILE_UPLOAD_INFO}, baseUrl:${r}, uploadInfo:id:${null == d ? void 0 : d.id},\n             dropFileItems:${null == d ? void 0 : d.dropFileItems.length},totalSize:${null == d ? void 0 : d.totalSize},totalCount:${null == d ? void 0 : d.totalCount},type:${null == d ? void 0 : d.type}`), 
        i.commonRequstParam.headers.newToken = h;
        const p = s.default.post(Object.assign(Object.assign({
            uri: a.buildUrl(r, a.API_FILE_UPLOAD_INFO, {
                id: n
            }),
            json: d
        }, i.commonRequstParam), {
            timeout: 3e5
        }), (e, n) => {
            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory checkUploadInfo res");
            let r = o.TRANSFER_FAIL_CODE.OK, i = -1;
            if (e && (global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory checkUploadInfo error " + JSON.stringify(e)), 
            r = o.TRANSFER_FAIL_CODE.UNKNOWN), r = l.handleUploadRes(n), r == o.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE) {
                const e = Number(n.body.error), t = (null == d ? void 0 : d.totalSize) || 0;
                i = c.getSpaceNeedByPhone({
                    availableByte: e,
                    totalSize: t
                });
            }
            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory checkUploadInfo end " + r), 
            t({
                code: r,
                spaceNeed: i
            });
        });
        u.default.add(n, p), p.on("error", e => {
            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory checkUploadInfo http error:" + e), 
            t({
                code: o.TRANSFER_FAIL_CODE.UNKNOWN,
                spaceNeed: -1
            });
        }).on("abort", () => {
            global.__fmLog.info("[fm]directory-transfer.ts uploadDirectory checkUploadInfo http abort"), 
            t({
                code: o.TRANSFER_FAIL_CODE.ABORT,
                spaceNeed: -1
            });
        });
    })), t.checkUploadInfoWithRetry = (e, n = 3, i = 1e3) => r.__awaiter(void 0, void 0, void 0, function*() {
        var r, a, s, l;
        let c;
        for (let u = 0; u <= n; u++) {
            if (c = yield t.checkUploadInfo(e), c.code === o.TRANSFER_FAIL_CODE.OK) return c;
            if (u < n) {
                const e = i * Math.pow(2, u);
                null === (a = null === (r = global.__fmLog) || void 0 === r ? void 0 : r.info) || void 0 === a || a.call(r, `[fm] checkUploadInfo failed with code ${c.code}, retrying after ${e}ms (attempt ${u + 1}/${n})`), 
                yield new Promise(t => setTimeout(t, e));
            } else null === (l = null === (s = global.__fmLog) || void 0 === s ? void 0 : s.info) || void 0 === l || l.call(s, `[fm] checkUploadInfo failed after ${n} retries, final code: ${c.code}`);
        }
        return c;
    });
}
