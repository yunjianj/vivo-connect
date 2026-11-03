// analysis/pretty/main.js:113826; webpack module 1511
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getNoRepeatName = t.handleRename = t.getPreUploadInfoFromDownload = void 0;
    const r = n(0);
    function i(e, t) {
        const n = "renderer" === (null === process || void 0 === process ? void 0 : process.type) ? window._log : global.__log;
        n.info("[Album][utils] getNoRepeatName currentFileName: " + e);
        let r = "";
        if (t.every(t => -1 == t.indexOf(e))) r = e; else for (let n = 0; n < t.length + 1; n++) {
            let i = e.split("."), o = i[i.length - 2], a = i[i.length - 1], s = i.splice(0, i.length - 2).join(".");
            if (r = s ? s + "." + o + "(" + (n + 1) + ")." + a : o + "(" + (n + 1) + ")." + a, 
            -1 == t.indexOf(r)) break;
        }
        return n.info("[Album][utils] getNoRepeatName newName: " + r), r;
    }
    t.getPreUploadInfoFromDownload = function(e) {
        let t = JSON.parse(e), n = 13 == t.modifiedTime.toString().length ? Math.floor(new Date(t.modifiedTime).getTime() / 1e3) : t.modifiedTime, r = {
            clientDateAddTime: String(t.extAttrMap.clientDateAddTime),
            clientModifiedTime: String(n)
        }, i = {
            cameraRefocus: t.cameraRefocus,
            checkSum: t.storage.singleFilePartCheckSum,
            checkSumVersion: t.storage.checkSumVersion,
            classification: t.classification,
            clientBucketDisplayName: t.clientBucketDisplayName,
            clientBucketId: t.clientBucketId,
            clientCreateTime: t.clientCreateTime,
            clientModifiedTime: t.modifiedTime,
            clientPath: t.clientPath,
            clientPathAlias: t.clientPathAlias,
            clientPathMode: 3,
            damagedProgress: !1,
            deviceModel: t.deviceModel ? t.deviceModel[0] : "",
            duration: t.duration,
            extAttrMap: r,
            facing: t.facing,
            fileName: t.fileName,
            fileSize: t.storage.totalSize,
            fullView: t.fullView,
            groupId: t.groupId || 0,
            groupType: t.groupType || 0,
            width: t.width,
            height: t.height,
            indexInGroup: t.indexInGroup,
            isLivePhoto: t.isLivePhoto,
            latitude: t.latitude,
            longitude: t.longitude,
            mediaFormat: t.mediaFormat,
            mediaType: t.mediaType,
            orientation: t.orientation,
            requestSource: 1,
            dimension: "",
            livePhotoHash: t.livePhotoHash,
            folderId: t.folderId,
            clientSource: 2
        };
        return 3 == t.mediaType && (i.dimension = t.dimension), i;
    }, t.handleRename = function(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const r = n(730);
            let o = (yield r.getAllFileName({
                clientBucketId: t
            })).map(e => e.fileName);
            return i(e, o);
        });
    }, t.getNoRepeatName = i;
}
