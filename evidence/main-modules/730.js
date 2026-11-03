// analysis/pretty/main.js:64586; webpack module 730
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(70)), a = n(53), s = n(1510), l = r.__importDefault(n(25)), c = n(1511), u = " ORDER BY clientCreateTime DESC,createTime DESC,_id DESC ";
    let d = "";
    function h(e, t) {
        let n = e + t;
        return n = n.startsWith("localapp://") ? n : "localapp://" + n, n;
    }
    class p extends o.default {
        constructor(e) {
            super(e), this.getAlbumList = e => r.__awaiter(this, void 0, void 0, function*() {
                let {navType: t, mediaType: n} = e;
                return 1 == t ? 1 === n ? this.getImageList(e) : 3 === n ? this.getVideoList(e) : this.getAlbumListAll(e) : 5 == t ? this.getImportAlbumList(e) : 2 == t ? this.getCameraList(e) : 3 == t ? this.getVideoList(e) : 6 == t ? this.getDeleteList(e) : 7 == t ? this.getScreenHot(e) : 8 == t ? this.getScreenRecording(e) : this.getNewAlbumList(e);
            }), this.getAlbumListAll = e => r.__awaiter(this, void 0, void 0, function*() {
                let {pageNum: t, pageSize: n, isRefresh: r, _ids: i, searchAlbum: o, getAll: a = !1} = e, s = "FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType=1 AND  user_status=2 ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias)" + u;
                if (i && (s = `FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND _id IN (${i}) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType=1 AND  user_status=2 AND _id IN (${i}) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC `), 
                (null == o ? void 0 : o.length) > 0) {
                    let e = "", t = "";
                    o.forEach((n, r) => {
                        e += `fileName like '%${n}%' or `, t += `WHEN fileName like '%${n}%' THEN ${r + 1} `;
                    }), e = e.substring(0, e.length - 4), t = t.substring(0, t.length - 1), console.log(e, t, "str----"), 
                    s = `FROM (SELECT * ${s}) as tmp where (${e}) ORDER BY CASE ` + t + " END ";
                }
                let l, c = "SELECT * " + s;
                a ? l = c : (l = c + `limit ${n} offset  ${(t - 1) * n}`, r && (l = c + `limit ${n * t} offset 0`));
                let d = "select count(*) as total " + s, h = yield Promise.all([ this.all(l), this.all(d) ]);
                return this.setData(h, e);
            }), this.getCameraList = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, getAll: o = !1} = e, a = "FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND folderId ='' AND clientPathMode = 1 AND (mediaType = 1 or mediaType = 3) AND clientPathAlias IN ('相机','视频') UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND folderId = '' AND clientPathMode = 1 AND mediaType = 1 AND clientPathAlias IN ('相机','视频') ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )" + u, s = "SELECT * " + a;
                o ? t = s : (t = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND folderId ='' AND clientPathMode = 1 AND (mediaType = 1 or mediaType = 3) AND clientPathAlias IN ('相机','视频') UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND folderId = '' AND clientPathMode = 1 AND mediaType = 1 AND clientPathAlias IN ('相机','视频') ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r} offset  ${(n - 1) * r}`, 
                i && (t = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND folderId ='' AND clientPathMode = 1 AND (mediaType = 1 or mediaType = 3) AND clientPathAlias IN ('相机','视频') UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND folderId = '' AND clientPathMode = 1 AND mediaType = 1 AND clientPathAlias IN ('相机','视频') ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r * n} offset 0`));
                let l = yield Promise.all([ this.all(t), this.all("select count(*) as total FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND folderId ='' AND clientPathMode = 1 AND (mediaType = 1 or mediaType = 3) AND clientPathAlias IN ('相机','视频') UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND folderId = '' AND clientPathMode = 1 AND mediaType = 1 AND clientPathAlias IN ('相机','视频') ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC ") ]);
                return this.setData(l, e);
            }), this.getScreenHot = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, getAll: o = !1} = e, a = "SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 1 " + u;
                o ? t = a : (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 1  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r} offset  ${(n - 1) * r}`, 
                i && (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 1  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r * n} offset 0`));
                let s = yield Promise.all([ this.all(t), this.all("select count(*) as total from AlbumFront  where user_status=2 and groupType = 0") ]);
                return this.setData(s, e);
            }), this.getScreenRecording = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, getAll: o = !1} = e, a = "SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 3 " + u;
                o ? t = a : (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 3  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r} offset  ${(n - 1) * r}`, 
                i && (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 3  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r * n} offset 0`));
                let s = yield Promise.all([ this.all(t), this.all("select count(*) as total from AlbumFront  where user_status=2 and groupType = 0") ]);
                return this.setData(s, e);
            }), this.getVideoList = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, getAll: o = !1} = e, a = "SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND mediaType = 3 " + u;
                o ? t = a : (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND mediaType = 3  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r} offset  ${(n - 1) * r}`, 
                i && (t = `SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND mediaType = 3  ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${r * n} offset 0`));
                let s = yield Promise.all([ this.all(t), this.all("select count(*) as total from AlbumFront  where user_status=2 and groupType = 0") ]);
                return this.setData(s, e);
            }), this.getImageList = e => r.__awaiter(this, void 0, void 0, function*() {
                let {pageNum: t, pageSize: n, isRefresh: r} = e, i = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND mediaType=1 AND  user_status=2 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType=1 AND  user_status=2 ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${n} offset  ${(t - 1) * n}`;
                r && (i = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND mediaType=1 AND  user_status=2 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType=1 AND  user_status=2 ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias) ORDER BY clientCreateTime DESC,createTime DESC,_id DESC limit ${n * t} offset 0`);
                let o = yield Promise.all([ this.all(i), this.all("select count(*) as total from AlbumFront  where user_status=2 ") ]);
                return this.setData(o, e);
            }), this.getDeleteList = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, getAll: o = !1} = e, a = "FROM (select * from AlbumFront where groupId = 0 AND (user_status=3 or user_status=4) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND (user_status=3 or user_status=4) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode) ORDER BY modifiedTime DESC , _id DESC ", s = "SELECT * " + a;
                o ? t = s : (t = `SELECT * FROM (select * from AlbumFront where groupId = 0 AND (user_status=3 or user_status=4) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND (user_status=3 or user_status=4) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode) ORDER BY modifiedTime DESC , _id DESC limit ${r} offset  ${(n - 1) * r}`, 
                i && (t = `SELECT * FROM (select * from AlbumFront where groupId = 0 AND (user_status=3 or user_status=4) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND (user_status=3 or user_status=4) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode) ORDER BY modifiedTime DESC , _id DESC limit ${r * n} offset 0`));
                let l = yield Promise.all([ this.all(t), this.all("select count(*) as total FROM (select * from AlbumFront where groupId = 0 AND (user_status=3 or user_status=4) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND (user_status=3 or user_status=4) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode) ORDER BY modifiedTime DESC , _id DESC ") ]);
                return this.setData(l, e);
            }), this.getNewAlbumList = e => r.__awaiter(this, void 0, void 0, function*() {
                let {folderId: t, pageNum: n, pageSize: r, isRefresh: i, clientBucketId: o, ruleConfig: a, getAll: s = !1} = e, l = "";
                if (a && a.length) {
                    const e = a.find(e => e.keyBucketId == o), t = (null == e ? void 0 : e.clientPathSuffixList) || [];
                    if (t && t.length) {
                        const e = null == t ? void 0 : t.map(e => `original_data LIKE '%/storage/emulated/0${e + "/"}%'`);
                        l = null == e ? void 0 : e.join(" or ");
                    }
                }
                let c, d = `FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (folderId = '${t}' or clientBucketId = '${o}' ` + (l ? "or " + l : "") + " ) UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 " + `AND (folderId = '${t}' or clientBucketId = '${o}' ` + (l ? "or " + l : "") + " ) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )" + u, h = "SELECT * " + d;
                s ? c = h : (c = h + `limit ${r} offset  ${(n - 1) * r}`, i && (c = h + `limit ${r * n} offset 0`));
                let p = "select count(*) as total " + d, f = yield Promise.all([ this.all(c), this.all(p) ]);
                return this.setData(f, e);
            }), this.getImportAlbumList = e => r.__awaiter(this, void 0, void 0, function*() {
                let t, {pageNum: n, pageSize: r, isRefresh: i, isReFreshImportData: o, getAll: a = !1} = e, s = "FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY createTime DESC, _id DESC ", l = "SELECT * " + s;
                a ? t = l : (t = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY createTime DESC, _id DESC limit ${r} offset  ${(n - 1) * r}`, 
                (i || o) && (t = `SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY createTime DESC, _id DESC limit ${r * n} offset 0`));
                let c = yield Promise.all([ this.all(t), this.all("select count(*) as total FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias ) ORDER BY createTime DESC, _id DESC ") ]);
                return this.setData(c, e);
            }), this.setData = (e, t) => {
                var n;
                let r = e[0], i = null === (n = e[1][0]) || void 0 === n ? void 0 : n.total, o = r.map(e => {
                    let t = e.save_dir + e.thumb_data, n = e.save_dir + e.original_data;
                    return Object.assign(Object.assign({}, e), {
                        thumbUrl: t,
                        originUrl: n,
                        filePath: n,
                        iconSrc: "localapp://" + t,
                        save_dir: e.save_dir
                    });
                });
                return {
                    status: 0,
                    hasMore: i / t.pageSize > t.pageNum,
                    fileList: o,
                    serverTime: (new Date).getTime()
                };
            }, this.getAlbumItem = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFront where metaId="${e.metaId}"`).then(e => e);
            }), this.getAlbumItemId = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select _id from AlbumFront where metaId="${e.metaId}"`).then(e => e);
            }), this.getRepeatFile = e => r.__awaiter(this, void 0, void 0, function*() {
                let t = `select * from AlbumFront where user_status = 2 and original_data="${e.original_data}" \n    and original_media like '%"fileSize":${e.newFileSize}%'`;
                return this.all(t).then(e => e);
            }), this.getFileMd5 = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFront where md5='${e.md5}' and clientBucketId='${e.clientBucketId}'`).then(e => e);
            }), this.getSamePath = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFront where original_data="${e.original_data}"`).then(e => e);
            }), this.getAllFileName = e => r.__awaiter(this, void 0, void 0, function*() {
                let t = `select * from AlbumFront where clientBucketId='${e.clientBucketId}'`;
                return this.all(t).then(e => e);
            }), this.getAllRecycleMetaIds = () => r.__awaiter(this, void 0, void 0, function*() {
                return this.all("select * from AlbumFront where user_status=5").then(e => e);
            }), this.getFolderIdByClientBucketId = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select _id from AlbumFolder where clientBucketId="${e.clientBucketId}"`).then(e => {
                    var t;
                    return null === (t = e[0]) || void 0 === t ? void 0 : t._id;
                });
            }), this.getFolderItem = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFolder where _id='${e._id}' and (clientPathMode=3 or clientPathMode=2 or clientPathMode=1)`).then(e => e);
            }), this.getFolderItemByName = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFolder where folderName="${e.folderName}" and (clientPathMode=3 or (clientPathMode=3 or clientPathMode=2)) and orderLevel = 1`).then(e => e);
            }), this.getNewFolderInfo = e => r.__awaiter(this, void 0, void 0, function*() {
                return this.all(`select * from AlbumFolder where clientPath="${e.clientPath}" and status=0 and userStatus!=2 and (clientPathMode=3 or clientPathMode=2)`).then(e => e);
            }), this.restoreFromTrash = e => {
                const t = {
                    metaId: "" + e.metaId,
                    user_status: e.user_status
                };
                return this.update("AlbumFront", t, "metaId").then(e => {
                    console.log(e);
                });
            }, this.removeFolder = e => {
                const t = e.folderIds[0].clientBucketId;
                let n = {
                    clientBucketId: t,
                    userStatus: 2
                };
                return this.update("AlbumFolder", n, "clientBucketId").then(() => (global.__log.info(`[Album][album-dao] removeFolder success. clientBucketId: [${t}]`), 
                this.removePicByclientBucketId(t)));
            }, this.removePicByclientBucketId = e => this.all(`select _id from AlbumFront where clientBucketId = '${e}' and user_status = 2`).then(e => {
                if (e.length) {
                    const t = e.map(e => e._id), n = `update AlbumFront set user_status = 4 where _id in (${t.toString()})`;
                    return this.run(n, []).then(() => (global.__log.info(`[Album][album-dao] removePicByclientBucketId success. ids: [${t.toString()}]`), 
                    t));
                }
                return global.__log.info("[Album][album-dao] removePicByclientBucketId success. ids is empty.]"), 
                [];
            }), this.getPreUploadInfo = e => this.all(`select pre_download_result from AlbumLocal where front_id='${e.front_id}'`).then(e => {
                let t = {};
                return Array.isArray(e) && e.length > 0 && e[0].pre_download_result ? t = c.getPreUploadInfoFromDownload(e[0].pre_download_result) : e && e.pre_download_result && (t = c.getPreUploadInfoFromDownload(e.pre_download_result)), 
                t;
            }), this.getAlbumPage = () => this.all("Sync"), this.apiGetFilesChanges = e => new Promise(() => {}), 
            this.apiGetAlbumMaxVersion = e => new Promise(() => {}), this.apiGetAlbumFolderChanges = e => this.all("select * from AlbumFolder where status=0 and userStatus!=2 and (clientPathMode=3 or clientPathMode=2) ORDER BY createTime DESC").then(e => ({
                status: 0,
                folderList: e
            })), this.apiGetCfg = () => this.all("select cleanCycle from AlbumConfig").then(e => ({
                cleanCycle: e[0].cleanCycle
            })), this.getDetail = e => r.__awaiter(this, void 0, void 0, function*() {
                let t = yield this.all(`select * from albumFront where _id ="${e.id}"`);
                return 0 === t.length ? [] : (t[0].groupId && "0" !== t[0].groupId && (t = yield this.all(`select * from albumFront where groupId="${t[0].groupId}" order by mediaType,indexInGroup ASC`)), 
                t = t.map(e => (e.thumbURL = h(e.save_dir, e.thumb_data), e.originURL = h(e.save_dir, e.original_data), 
                e.thumbUrl = e.save_dir + e.thumb_data, e.originUrl = e.save_dir + e.original_data, 
                e)), t);
            }), this.groups = e => this.all(`select * from AlbumFront where groupId='${e.groupId}' and clientBucketId='${e.clientBucketId}'`).then(e => e), 
            this.moveMetas = e => r.__awaiter(this, void 0, void 0, function*() {
                let {clientBucketId: t, sourceMetaIdList: n} = e;
                global.__log.info("[Album][album-dao] moveMetas begin. target: " + t);
                let r = [];
                n.forEach(e => {
                    let {fileName: n} = e, i = `select * from AlbumFront where user_status=2 and clientBucketId='${t}' and fileName="${n}"`;
                    r.push(this.all(i));
                });
                let i = yield Promise.all(r), o = [];
                i.forEach(e => {
                    e.length && o.push(...e);
                }), global.__log.info("[Album][album-dao] moveMetas has: " + o.map(e => e._id));
                let a = [], s = l.default.differenceBy(e.sourceMetaIdList, o, "fileName");
                if (null == s ? void 0 : s.length) {
                    let t = Object.assign(Object.assign({}, e), {
                        sourceMetaIdList: s
                    }), {moveData: n, repeatFileList: r} = yield this.updateDataForMove(t, !1);
                    a = n, o.push(...r);
                }
                let c = {
                    updateData: a,
                    status: 0,
                    success: !0,
                    has: o.length ? o : null
                };
                return global.__log.info(`[Album][album-dao] moveMetas end. updateData: ${a.map(e => e._id)}, has: ` + (null == o ? void 0 : o.map(e => e._id))), 
                c;
            }), this.moveMetasReplaceAll = e => r.__awaiter(this, void 0, void 0, function*() {
                let {params: t, data: n, type: i} = e;
                global.__log.info("[Album][album-dao] moveMetasReplaceAll begin.");
                let o = n.map(e => e._id), a = t.sourceMetaIdList.map(e => e._id), s = l.default.intersection(o, a);
                global.__log.info("[Album][album-dao] moveMetasReplaceAll sameIds: " + s);
                let c = n.filter(e => !s.includes(e._id));
                global.__log.info("[Album][album-dao] moveMetasReplaceAll repeatList: " + c.map(e => e._id));
                let u = t.sourceMetaIdList.filter(e => !s.includes(e._id));
                global.__log.info("[Album][album-dao] moveMetasReplaceAll sourceList: " + u.map(e => e._id));
                let d = [], h = [], p = [];
                c.forEach(e => r.__awaiter(this, void 0, void 0, function*() {
                    let t = {
                        _id: "" + e._id,
                        user_status: 5
                    };
                    if (h.push(this.update("AlbumFront", t, "_id")), p.push(e.sourceFileName || e.fileName), 
                    d.push(Object.assign(Object.assign({}, e), {
                        user_status: 5
                    })), "0" != e.groupId) {
                        global.__log.info(`[Album][album-dao] moveMetasReplaceAll delete special file.  id: [${e._id}], metaId: [${e.metaId}], groupId: [${e.groupId}]`);
                        let t = yield this.getGroupFileListByBucketId(e.groupId, e.clientBucketId);
                        t = t.filter(t => t.indexInGroup !== e.indexInGroup);
                        for (const e of t) h.push(this.update("AlbumFront", {
                            _id: "" + e._id,
                            user_status: 5
                        }, "_id")), d.push(Object.assign(Object.assign({}, e), {
                            user_status: 5
                        }));
                    }
                })), yield Promise.all(h).catch(() => {}), global.__log.info("[Album][album-dao] moveMetasReplaceAll deleteData: " + d.map(e => e._id));
                let f = [];
                if (p = l.default.uniq(p), c.length) if (u = u.filter(e => {
                    const t = p.indexOf(e.fileName);
                    return t > -1 && p.splice(t, 1), t > -1;
                }), global.__log.info("[Album][album-dao] moveMetasReplaceAll begin handle: " + u.map(e => e._id)), 
                "copy" === i) {
                    let {insertData: e} = yield this.updateDataForCopy(Object.assign(Object.assign({}, t), {
                        sourceMetaIdList: u
                    }), !0);
                    f = e;
                } else if ("move" === i) {
                    let {moveData: e} = yield this.updateDataForMove(Object.assign(Object.assign({}, t), {
                        sourceMetaIdList: u
                    }), !0);
                    f = e;
                }
                let _ = {
                    status: 0,
                    success: !0,
                    newDataList: f,
                    deleteData: d,
                    updateData: [ ...d, ...f ]
                };
                return global.__log.info(`[Album][album-dao] moveMetasReplaceAll end. newDataList: ${f.map(e => e._id)}; deleteData: ${d.map(e => e._id)}; updateData: ${null == f ? void 0 : f.length} + ${null == d ? void 0 : d.length}`), 
                _;
            }), this.moveMetasSaveAll = e => r.__awaiter(this, void 0, void 0, function*() {
                var t, n;
                let {params: r, data: i, type: o} = e;
                global.__log.info("[Album][album-dao] moveMetasSaveAll begin.");
                let a = [], s = [], c = (null == i ? void 0 : i.map(e => e._id)) || [], u = (null === (t = r.sourceMetaIdList) || void 0 === t ? void 0 : t.map(e => e._id)) || [];
                global.__log.info(`[Album][album-dao] moveMetasSaveAll repeatFileIds.length:${c.length} and  sourceFileIds.length:${u}.`);
                let d = l.default.intersection(c, u);
                global.__log.info("[Album][album-dao] moveMetasSaveAll sameIds: " + d), a = "move" === o ? r.sourceMetaIdList.filter(e => (d.includes(e._id) && s.push(e), 
                !d.includes(e._id))) : l.default.cloneDeep(r.sourceMetaIdList), global.__log.info("[Album][album-dao] moveMetasSaveAll moveSameFiles: " + s.map(e => e._id)), 
                global.__log.info("[Album][album-dao] moveMetasSaveAll sourceList: " + a.map(e => e._id));
                let h = [], p = [], f = [];
                if (i.forEach(e => {
                    f.push(e.sourceFileName || e.fileName);
                }), f = l.default.uniq(f), i.length) if (a = a.filter(e => {
                    const t = f.indexOf(e.fileName);
                    return t > -1 && f.splice(t, 1), t > -1;
                }), global.__log.info("[Album][album-dao] moveMetasSaveAll begin handle: " + (null === (n = a) || void 0 === n ? void 0 : n.map(e => e._id))), 
                "copy" === o || "import" === o) {
                    let {insertData: e} = yield this.updateDataForCopy(Object.assign(Object.assign({}, r), {
                        sourceMetaIdList: a
                    }), !0);
                    p = e;
                } else if ("move" === o) {
                    let {moveData: e} = yield this.updateDataForMove(Object.assign(Object.assign({}, r), {
                        sourceMetaIdList: a
                    }), !0);
                    if (s.length) {
                        h = (yield this.updateDataForCopy(Object.assign(Object.assign({}, r), {
                            sourceMetaIdList: s
                        }), !0)).insertData;
                    }
                    p = e;
                }
                let _ = {
                    status: 0,
                    success: !0,
                    insertData: h,
                    updateData: p
                };
                return global.__log.info(`[Album][album-dao] moveMetasSaveAll end. insertData: ${h.map(e => e._id)}; updateData: ${p.map(e => e._id)}; `), 
                _;
            });
        }
        getFolderList(e) {
            console.log(e.navigation);
            return this.all("select * from AlbumFolder where ((status=0 and userStatus!=2) or userStatus = 3) and (clientPathMode=3 or clientPathMode=2 or clientPathMode=1) ORDER BY createTime DESC").then(e => ({
                status: 0,
                folderList: e
            }));
        }
        getFolderAll() {
            return this.all("select * from AlbumFolder where (clientPathMode=3 or clientPathMode=2 or clientPathMode=1) ORDER BY createTime DESC").then(e => e);
        }
        getImageCount(e) {
            return this.all(e).then(e => e);
        }
        getVideoCount(e) {
            return this.all(e).then(e => e);
        }
        getFolderFileCount(e) {
            let t = "", n = "", {navType: r, ruleConfig: i} = e;
            if (2 == r) t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND   user_status=2 AND folderId ='' AND clientPathMode = 1 AND (mediaType = 1 or mediaType = 3) AND clientPathAlias IN ('相机') UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND indexInGroup <= 1 AND mediaType =1 AND  user_status=2 AND folderId = '' AND clientPathMode = 1 AND mediaType = 1 AND clientPathAlias IN ('相机') ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND folderId ='' AND clientPathMode = 1 AND mediaType = 3 AND clientPathAlias IN ('相机','视频'))"; else if (3 == r) t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE metaId='0')", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND mediaType = 3)"; else if (4 == r) {
                let r = "";
                if (i && i.length) {
                    const t = i.find(t => t.keyBucketId == e.clientBucketId), n = (null == t ? void 0 : t.clientPathSuffixList) || [];
                    if (n && n.length) {
                        const e = null == n ? void 0 : n.map(e => `original_data LIKE '%/storage/emulated/0${e + "/"}%'`);
                        r = null == e ? void 0 : e.join(" or ");
                    }
                }
                t = `select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientBucketId = '${e.folderId}' or clientBucketId = '${e.clientBucketId}' ` + (r ? "or " + r : "") + " ) AND mediaType=1 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 " + `AND (clientBucketId = '${e.folderId}' or clientBucketId = '${e.clientBucketId}' ` + (r ? "or " + r : "") + " ) ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )", 
                n = `select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientBucketId = '${e.folderId}' or clientBucketId = '${e.clientBucketId}' ` + (r ? "or " + r : "") + " ) AND mediaType=3)";
            } else 5 == r ? (t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)AND mediaType=1 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType =1 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND  user_status=2 AND (clientSource = 1 or clientSource = 2)AND mediaType=3)") : 6 == r ? (t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND (user_status=3 or user_status=4)AND mediaType=1 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType = 1 AND (user_status=3 or user_status=4)ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias )", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND (user_status=3 or user_status=4)AND mediaType=3)") : 7 == r ? (t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 1 " + u + ")", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE metaId='0')") : 8 == r ? (t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE metaId='0')", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupType = 0  AND  user_status=2 AND (original_data LIKE '/storage/emulated/0/DCIM/Screenshots/%' or original_data LIKE '/storage/emulated/0/Pictures/Screenshots/%') AND original_data NOT LIKE '/storage/emulated/0/Pictures/Screenshots/Games/%' AND mediaType = 3 " + u + ")") : (t = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND mediaType=1 AND  user_status=2 UNION ALL SELECT * FROM (SELECT * FROM AlbumFront WHERE groupId != 0 AND mediaType=1 AND  user_status=2 ORDER BY indexInGroup ASC, _id ASC) AS tmp GROUP BY groupId, clientPathMode, clientPathAlias)", 
            n = "select count(*) as num FROM (SELECT * FROM AlbumFront WHERE groupId = 0 AND mediaType=3 AND  user_status=2 )");
            return Promise.all([ this.getImageCount(t), this.getVideoCount(n) ]).then(t => {
                const n = {
                    IMG: t[0][0].num,
                    VIDEO: t[1][0].num
                };
                return console.log("api获取数量成功", e, n), Object.assign({}, n);
            });
        }
        updateDataForMove(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {sourceMetaIdList: n, destFolderId: r, clientPath: i, clientBucketId: o, clientBucketDisplayName: a, clientPathAlias: s} = e;
                const l = {
                    destFolderId: r,
                    clientPath: i,
                    clientPathAlias: s,
                    clientPathMode: 3,
                    clientBucketId: o,
                    clientBucketDisplayName: a
                };
                global.__log.info("[Album][album-dao] updateDataForMove begin."), global.__log.info("[Album][album-dao] updateDataForMove sourceMetaIdList: " + n.map(e => e._id));
                let u = [], d = [], h = [];
                for (let e = 0, r = n.length; e < r; e++) {
                    let r = n[e];
                    if (global.__log.info(`[Album][album-dao] updateDataForMove handle id: [${r._id}, metaId: [${r.metaId}]]`), 
                    r.metaId === r.original_data) {
                        let e = yield this.all(`select * from AlbumFront where _id = "${r._id}"`);
                        e.length && (r = e[0], global.__log.info("[Album][album-dao] updateDataForMove change item data. metaId = " + r.metaId));
                    }
                    let i = r.fileName;
                    if (t) i = yield c.handleRename(i, o); else {
                        let e = {
                            fileName: i,
                            clientBucketId: o
                        }, {newFileName: t, repeatFileObj: n} = yield this.renameRepeatFileInDel(e);
                        if (n) {
                            h.push(n);
                            continue;
                        }
                        i = t;
                    }
                    const a = Object.assign(Object.assign({}, l), {
                        newFileName: i,
                        fileData: r
                    });
                    this.handleMoveFile(a, d, u), r.metaId === r.original_data && d.push(Object.assign(Object.assign({}, r), {
                        metaId: r.metaId,
                        user_status: 5,
                        isOnceData: !0
                    }));
                    const s = r.groupId;
                    if ("0" != s) {
                        global.__log.info(`[Album][album-dao] updateDataForMove special file. id: [${r._id}], metaId: [${r.metaId}], groupId: [${s}]`);
                        let e = yield this.getGroupFileListByBucketId(s, r.clientBucketId);
                        if (e = e.filter(e => e.indexInGroup !== r.indexInGroup), !e.length) continue;
                        global.__log.info(`[Album][album-dao] updateDataForMove special group files. ids: [${e.map(e => e._id)}]`);
                        for (const t of e) {
                            let e = t.fileName;
                            e = yield c.handleRename(e, o);
                            const n = Object.assign(Object.assign({}, l), {
                                newFileName: e,
                                fileData: t
                            });
                            this.handleMoveFile(n, d, u);
                        }
                    }
                }
                return yield Promise.all(u), global.__log.info(`[Album][album-dao] updateDataForMove end. moveData: ${d.map(e => e._id)}; repeatFileList: ${h.map(e => e._id)}; `), 
                {
                    moveData: d,
                    repeatFileList: h
                };
            });
        }
        handleMoveFile(e, t, n) {
            const {newFileName: r, fileData: i, clientPath: o, destFolderId: a, clientPathAlias: s, clientPathMode: l, clientBucketId: c, clientBucketDisplayName: u} = e;
            global.__log.info(`[Album][album-dao] handleMoveFile id: [${i._id}], name: [${r}]`);
            const h = `${o}/${r}`, p = i.metaId === i.original_data;
            let f = i.metaId, _ = 2, m = i.original_media;
            if (p) {
                f = p ? h : i.metaId;
                let e = JSON.parse(m);
                e = Object.assign(Object.assign({}, e), {
                    fileName: r,
                    folderId: a,
                    clientSource: 2,
                    clientPath: o,
                    clientPathAlias: s,
                    clientPathMode: l,
                    original_data: h,
                    clientBucketId: c,
                    clientBucketDisplayName: u
                }), Object.keys(e).length < 35 && global.__log.error(`[Album][album-dao] handleMoveFile original_media length error: ( id: ${i._id}, metaId: ${i.metaId}, originalMediaObj: ${JSON.stringify(e)})`), 
                m = JSON.stringify(e), _ = 1, global.__log.info(`[Album][album-dao] handleMoveFile change media. id: ${i._id}, metaId: ${i.metaId}.`);
            }
            let g = {
                _id: i._id,
                metaId: f,
                fileName: r,
                folderId: a,
                clientSource: 2,
                clientPathAlias: s,
                modifiedTime: (new Date).getTime(),
                original_data: h,
                original_media: m,
                clientBucketId: c,
                save_dir: d,
                user_action: _,
                clientPathMode: l
            };
            n.push(this.update("AlbumFront", g, "_id")), t.push(Object.assign(Object.assign(Object.assign({}, i), g), {
                oldFilePath: i.save_dir + "" + i.original_data,
                thumbUrl: i.save_dir + i.thumb_data,
                old_thumb_data: i.thumbUrl
            }));
        }
        getGroupFileListByBucketId(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let n = `select * from AlbumFront where groupId = '${e}' and clientBucketId = ${t}`;
                return yield this.all(n);
            });
        }
        updateAlbumItem(e) {
            const t = {
                _id: "" + e._id,
                thumb_data: e.thumb_data,
                original_media: e.original_media
            };
            return this.update("AlbumFront", t, "_id").then(e => {
                console.log(e);
            });
        }
        updateAlbumOrientation(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield this.update("AlbumFront", e, "_id"), global.__log.info(`[Album][album-dao] updateAlbumOrientation success: _id=[${e._id}], orientation=[${e.orientation}]`), 
                    {
                        success: !0
                    };
                } catch (e) {
                    throw global.__log.error("[Album][album-dao] updateAlbumOrientation error: " + e), 
                    e;
                }
            });
        }
        updateAlbumFileNameAndOrientation(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield this.update("AlbumFront", e, "_id"), global.__log.info(`[Album][album-dao] updateAlbumFileNameAndOrientation success: _id=[${e._id}], orientation=[${e.orientation}], fileName=[${e.fileName}], original_data=[${e.original_data}]`), 
                    {
                        success: !0
                    };
                } catch (e) {
                    throw global.__log.error("[Album][album-dao] updateAlbumFileNameAndOrientation error: " + e), 
                    e;
                }
            });
        }
        updateAlbumOrientationBatch(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    return e.items && 0 !== e.items.length ? (yield this.updateMany("AlbumFront", e.items, "_id"), 
                    global.__log.info(`[Album][album-dao] updateAlbumOrientationBatch success: count=[${e.items.length}]`), 
                    {
                        success: !0,
                        count: e.items.length
                    }) : {
                        success: !0,
                        count: 0
                    };
                } catch (e) {
                    throw global.__log.error("[Album][album-dao] updateAlbumOrientationBatch error: " + e), 
                    e;
                }
            });
        }
        updateDataForDelete(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {ids: t, user_status: n} = e, r = `update AlbumFront set user_status=${n}, modifiedTime=${e.modifiedTime || (new Date).getTime()} where _id in (${t.toString()})`;
                yield this.run(r, []);
            });
        }
        updateDataForDeleteById(e) {
            const t = {
                _id: "" + e._id,
                user_status: e.user_status
            };
            return this.update("AlbumFront", t, "_id").then(e => {
                console.log(e);
            });
        }
        updateDataStatus(e) {
            const t = {
                metaId: "" + e.metaId,
                user_status: e.user_status
            };
            return this.update("AlbumFront", t, "metaId").then(e => {
                console.log(e);
            });
        }
        updateListStatus(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {idList: t, user_status: n} = e;
                global.__log.info(`[Album][album-dao] updateListStatus: [${t.toString()}]`);
                const r = `update AlbumFront set user_status=${n} where _id in (${t.toString()})`;
                yield this.run(r, []);
            });
        }
        resumeFolderByBucketId(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t = e.bucketIdList;
                global.__log.info(`[Album][album-dao] resumeFolderByBucketId: [${null == t ? void 0 : t.toString()}]`), 
                t[0] || (t = []);
                const n = `update AlbumFolder set userStatus = 3 where (status = 1 or userStatus = 2) and clientBucketId in (${null == t ? void 0 : t.toString()})`;
                yield this.run(n, []);
            });
        }
        removePermanent(e) {
            const t = {
                metaId: "" + e.metaId,
                user_status: e.user_status
            };
            return this.update("AlbumFront", t, "metaId").then(e => {
                console.log(e);
            });
        }
        renameFolder(e) {
            let t = {
                clientBucketId: e.clientBucketId,
                folderName: e.folderName,
                userStatus: e.userStatus
            };
            return this.update("AlbumFolder", t, "clientBucketId").then(e => {
                console.log(e);
            });
        }
        createFolder(e) {
            let t = {
                folderId: e.folderId,
                folderName: e.folderName,
                clientPath: e.clientPath,
                status: 0,
                createTime: (new Date).getTime(),
                clientPathMode: e.clientPathMode,
                clientBucketId: e.clientBucketId,
                clientBucketDisplayName: e.clientBucketDisplayName,
                userStatus: -1
            };
            return this.insert("AlbumFolder", t).then(e => {
                console.log(e);
            });
        }
        resumeFolder(e) {
            let t = {
                _id: e._id,
                createTime: e.createTime || (new Date).getTime(),
                userStatus: 3
            };
            return this.update("AlbumFolder", t, "_id").then(e => {
                console.log(e);
            });
        }
        insertDataForCopy(e) {
            return this.insert("AlbumFront", e).then(e => (console.log("相册复制操作:", e), e));
        }
        insertData() {
            return this.insert("Sync", {
                guid: 44444566,
                status: 1,
                moduleData: null
            }).then(e => (console.log(e), e));
        }
        deleteData() {
            return this.delete("Sync", 44444);
        }
        getMessage() {
            return this.all("select * from Sync").then(e => {
                const t = this.formatData(e, 4);
                console.log(t);
            });
        }
        updateDataForCopy(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {sourceMetaIdList: n, destFolderId: r, clientPath: i, clientBucketId: o, clientBucketDisplayName: a, clientPathAlias: s} = e;
                const l = {
                    destFolderId: r,
                    clientPath: i,
                    clientPathAlias: s,
                    clientPathMode: 3,
                    clientBucketId: o,
                    clientBucketDisplayName: a
                };
                global.__log.info("[Album][album-dao] updateDataForCopy begin."), global.__log.info("[Album][album-dao] updateDataForCopy sourceMetaIdList: " + n.map(e => e._id));
                let u = [], d = [];
                for (let e = 0, r = n.length; e < r; e++) {
                    let r = n[e], i = r.extAttrMap;
                    "object" == typeof i && (i = JSON.stringify(i));
                    let a = r.groupId;
                    "0" != a && (a = (new Date).getTime().toString().substring(0, 10));
                    let s = r.fileName;
                    if (t) s = yield c.handleRename(s, o); else {
                        let e = {
                            fileName: s,
                            clientBucketId: o
                        }, {newFileName: t, repeatFileObj: n} = yield this.renameRepeatFileInDel(e);
                        if (n) {
                            u.push(n);
                            continue;
                        }
                        s = t;
                    }
                    const h = Object.assign({
                        newFileName: s,
                        groupId: a,
                        extAttrMap: i,
                        fileData: r
                    }, l);
                    if (yield this.handleCopyFile(h, d), "0" != a) {
                        global.__log.info(`[Album][album-dao] updateDataForCopy special file.  id: [${r._id}], metaId: [${r.metaId}], oldGroupId: [${r.groupId}], newGroupId: [${a}]`);
                        let e = yield this.getGroupFileListByBucketId(r.groupId, r.clientBucketId);
                        if (e = e.filter(e => e.indexInGroup !== r.indexInGroup), !e.length) continue;
                        global.__log.info(`[Album][album-dao] updateDataForCopy special group files. ids: [${e.map(e => e._id)}]`);
                        for (const t of e) {
                            let e = t.fileName;
                            e = yield c.handleRename(e, o);
                            const n = Object.assign({
                                newFileName: e,
                                groupId: a,
                                extAttrMap: t.extAttrMap,
                                fileData: t
                            }, l);
                            yield this.handleCopyFile(n, d);
                        }
                    }
                }
                return global.__log.info(`[Album][album-dao] updateDataForCopy end. insertData: ${d.map(e => e._id)}; repeatFileList: ${u.map(e => e._id)}; `), 
                {
                    insertData: d,
                    repeatFileList: u
                };
            });
        }
        handleCopyFile(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = (new Date).getTime(), {newFileName: r, groupId: i, extAttrMap: o, fileData: a, clientPath: l, destFolderId: c, clientPathAlias: u, clientPathMode: h, clientBucketId: p, clientBucketDisplayName: f} = e;
                let _;
                global.__log.info(`[Album][album-dao] handleCopyFile. sid: [${a._id}], name: ${r}, groupId: ${i}`), 
                _ = a.original_media ? JSON.parse(a.original_media) : yield this.getPreUploadInfo({
                    front_id: a._id
                }), Object.keys(_).length < 35 && global.__log.error(`[Album][album-dao] handleCopyFile original_media length error: ( id: ${a._id}, metaId: ${a.metaId}, originalMediaObj: ${JSON.stringify(_)})`), 
                a.original_media = JSON.stringify(Object.assign(Object.assign({}, _), {
                    groupId: i,
                    fileName: r,
                    clientSource: 2,
                    clientBucketId: p,
                    clientPath: l,
                    clientPathAlias: u,
                    clientPathMode: h,
                    clientBucketDisplayName: f,
                    folderId: c,
                    createTime: n
                }));
                const m = `${l}/${r}`;
                let g = {
                    metaId: m,
                    fileName: r,
                    clientPathAlias: u,
                    mediaFormat: a.mediaFormat,
                    mediaType: a.mediaType,
                    groupId: i,
                    groupType: a.groupType,
                    modifiedTime: n,
                    duration: a.duration,
                    width: a.width,
                    height: a.height,
                    indexInGroup: a.indexInGroup,
                    md5: a.md5,
                    createTime: n.toString(),
                    dimension: a.dimension,
                    clientCreateTime: a.clientCreateTime,
                    totalSize: a.totalSize,
                    orientation: a.orientation,
                    version: a.version,
                    extAttrMap: o,
                    longitude: a.longitude,
                    latitude: a.latitude,
                    geoHash: a.geoHash,
                    folderId: c,
                    clientPathMode: h,
                    clientBucketId: p,
                    status: a.status,
                    original_data: m,
                    original_media: a.original_media,
                    thumb_data: "",
                    save_dir: d,
                    clientSource: 2,
                    label_type: a.label_type,
                    label_name: a.label_name,
                    user_action: a.user_action,
                    user_sync: a.user_sync,
                    user_status: 2,
                    extData1: a.extData1,
                    extData2: a.extData2,
                    extData3: a.extData3,
                    extData4: a.extData4,
                    extData5: a.extData5,
                    address: a.address
                };
                yield this.insert("AlbumFront", g);
                const v = `select * from AlbumFront where metaId = '${m}'`, y = yield this.all(v);
                if (1 !== y.length) return void global.__log.info("[Album][album-dao] handleCopyFile error.");
                const E = y[0], b = "/thumb/" + s.nameFormat(E._id);
                yield this.update("AlbumFront", {
                    thumb_data: b,
                    _id: E._id
                }, "_id"), E.thumb_data = b, E.thumbUrl = E.save_dir + b, E.originUrl = E.save_dir + E.original_data, 
                "" === a.thumb_data ? E.old_thumb_data = a.thumbUrl : E.old_thumb_data = a.save_dir + a.thumb_data, 
                E.oldFilePath = a.save_dir + a.original_data, t.push(E);
            });
        }
        copyMetas(e) {
            var t;
            return r.__awaiter(this, void 0, void 0, function*() {
                let {clientBucketId: n, sourceMetaIdList: r} = e;
                global.__log.info("[Album][album-dao] copyMetas begin. target: " + n);
                let i = [];
                r.forEach(e => {
                    let {fileName: t} = e, r = `select * from AlbumFront where user_status=2 and clientBucketId='${n}' and fileName="${t}"`;
                    i.push(this.all(r));
                });
                let o = yield Promise.all(i), a = [];
                o.forEach(e => {
                    e.length && a.push(...e);
                }), global.__log.info("[Album][album-dao] copyMetas has: " + a.map(e => e._id));
                let s, c = l.default.differenceBy(e.sourceMetaIdList, a, "fileName");
                if (null == c ? void 0 : c.length) {
                    let t = Object.assign(Object.assign({}, e), {
                        sourceMetaIdList: c
                    });
                    global.__log.info("[Album][album-dao] copyMetas copy handle");
                    let {insertData: n, repeatFileList: r} = yield this.updateDataForCopy(t, !1);
                    s = n, a.push(...r);
                }
                let u = {
                    updateData: s,
                    status: 0,
                    success: !0,
                    has: a.length ? a : null
                };
                return global.__log.info(`[Album][album-dao] copyMetas end. updateData: ${null === (t = s) || void 0 === t ? void 0 : t.map(e => e._id)}; has: ` + (null == a ? void 0 : a.map(e => e._id))), 
                u;
            });
        }
        saveGroups(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {isSaveAll: t, list: n, firstItem: r} = e, {groupId: i, clientBucketId: o, original_data: a} = r, l = a.substring(0, a.lastIndexOf("/") + 1);
                global.__log.info(`[Album][album-dao] saveGroups begin. isSaveAll: ${t}, groupId: ${i}, clientBucketId: ${o}, clientPath: ${l}`);
                let u = [];
                const d = `select * from AlbumFront where groupId = ${i} and clientBucketId = '${o}' and user_status = 2`, h = yield this.all(d);
                if (t) u = h; else {
                    let e = `select * from AlbumFront where _id in (${n.map(e => e._id).toString()})`;
                    u = yield this.all(e);
                }
                global.__log.info("[Album][album-dao] saveGroups checkedIds: " + JSON.stringify(u.map(e => e._id)));
                let p = [], f = [], _ = (yield this.all(`select fileName from AlbumFront where clientBucketId = '${o}'`)).map(e => e.fileName);
                for (const e of u) {
                    const t = c.getNoRepeatName(e.fileName, _), n = l + t;
                    let r = Object.assign(Object.assign({}, e), {
                        metaId: n,
                        fileName: t,
                        groupId: "0",
                        groupType: 0,
                        indexInGroup: 0,
                        original_data: n
                    });
                    delete r._id, yield this.insert("AlbumFront", r);
                    const i = `select * from AlbumFront where metaId = '${n}'`, o = yield this.all(i);
                    if (1 !== o.length) {
                        global.__log.info(`[Album][album-dao] saveGroups insert data error. metaId: [${n}]`);
                        continue;
                    }
                    const a = o[0], u = "/thumb/" + s.nameFormat(a._id);
                    yield this.update("AlbumFront", {
                        thumb_data: u,
                        _id: a._id
                    }, "_id"), a.thumb_data = u, a.thumbUrl = a.save_dir + u, a.originUrl = a.save_dir + a.original_data, 
                    a.old_thumb_data = a.save_dir + e.thumb_data, a.oldFilePath = e.save_dir + e.original_data, 
                    a.oldId = e._id, p.push(a);
                }
                let m = h.map(e => e._id);
                return yield this.run(`update AlbumFront set user_status = 5 where _id in (${m.toString()})`, {}), 
                f = h.map(e => Object.assign(Object.assign({}, e), {
                    user_status: 5
                })), global.__log.info("[Album][album-dao] saveGroups insertIds: " + JSON.stringify(p.map(e => e._id))), 
                global.__log.info("[Album][album-dao] saveGroups deleteIds: " + JSON.stringify(f.map(e => e._id))), 
                {
                    insertData: p,
                    deleteData: f
                };
            });
        }
        updateSaveGroupInfo(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.updateDataList;
                for (const e of t) {
                    let t = yield this.getPreUploadInfo({
                        front_id: e.oldId
                    }), n = JSON.stringify(Object.assign(Object.assign({}, t), {
                        fileName: e.fileName,
                        groupId: e.groupId,
                        groupType: e.groupType,
                        indexInGroup: e.indexInGroup,
                        checkSum: e.md5,
                        clientPathMode: e.clientPathMode,
                        clientSource: e.clientSource
                    })), r = {
                        _id: e._id,
                        md5: e.md5,
                        original_media: n
                    };
                    global.__log.info(`[Album][album-dao] updateSaveGroupInfo id: [${e._id}], md5: [${e.md5}]`), 
                    yield this.update("AlbumFront", r, "_id");
                }
            });
        }
        renameRepeatFileInDel(e) {
            var t, n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                let {fileName: r, clientBucketId: o, newFileSize: a} = e, s = null, l = r, u = r.lastIndexOf("."), d = r.substring(u), h = r.substring(0, u);
                global.__log.info(`[Album] [renameRepeatFileInDel] ${u} * ${d} * ${h}`);
                let p = `select * from AlbumFront where clientBucketId='${o}' and fileName="${r}" and user_status=2`, f = yield this.all(p);
                if (global.__log.info(`[Album] [renameRepeatFileInDel] repeatFiles: ${f} and ${f.length}`), 
                (null == f ? void 0 : f.length) > 0) {
                    let e = (null === (t = f[0]) || void 0 === t ? void 0 : t.original_media.fileSize) || 0;
                    if (global.__log.info(`repeatFileSize and newFileSize: ${e} and ${a}`), e == a) s = f[0], 
                    s.sourceFileName = r; else {
                        let e = `select * from AlbumFront where clientBucketId='${o}' and fileName like "${h}%${d}" and (user_status=3 or user_status=4 or user_status=5 or user_status=2)`, t = (yield this.all(e)).map(e => e.fileName);
                        global.__log.info(`[Album] [renameRepeatFileInDel] likeRepeatNameDel: ${t} and ${t.length}`), 
                        0 != t.length && t.includes(r) && (l = c.getNoRepeatName(r, t));
                    }
                    return {
                        newFileName: l,
                        repeatFileObj: s
                    };
                }
                let _ = `select * from AlbumFront where clientBucketId='${o}' and fileName like "${h}%${d}" and (user_status=3 or user_status=4 or user_status=5)`, m = (yield this.all(_)).map(e => e.fileName);
                if (global.__log.info(`[Album] [renameRepeatFileInDel] likeFileNameInDel: ${m} and ${m.length}`), 
                0 === m.length || !m.includes(r)) return {
                    newFileName: l,
                    repeatFileObj: s
                };
                if (l = c.getNoRepeatName(r, m), p = `select * from AlbumFront where clientBucketId='${o}' and fileName="${l}" and user_status=2`, 
                f = yield this.all(p), global.__log.info(`[Album] [renameRepeatFileInDel] ** repeatFiles: ${f} and ${f.length}`), 
                null == f ? void 0 : f.length) {
                    let e = null === (i = null === (n = f[0]) || void 0 === n ? void 0 : n.original_media) || void 0 === i ? void 0 : i.fileSize;
                    if (global.__log.info(`[Album] [renameRepeatFileInDel] ** repeatFileSize: ${e} and ${a}`), 
                    e == a) s = f[0], s.sourceFileName = r; else {
                        let e = `select * from AlbumFront where clientBucketId='${o}' and fileName like "${h}%${d}" and (user_status=3 or user_status=4 or user_status=5 or user_status=2) `, t = (yield this.all(e)).map(e => e.fileName);
                        global.__log.info(`[Album] [renameRepeatFileInDel] ** likeRepeatNameDel: ${t} and ${t.length}`), 
                        0 != t.length && t.includes(l) && (l = c.getNoRepeatName(l, t));
                    }
                }
                return global.__log.info(`[Album] [renameRepeatFileInDel] ${l} and ${s}`), {
                    newFileName: l,
                    repeatFileObj: s
                };
            });
        }
        saveAddressInfoById(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.update("AlbumFront", e, "_id");
            });
        }
        updateLastAccessTime(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.update("AlbumFront", {
                    _id: e._id,
                    lastAccessTime: (new Date).getTime()
                }, "_id");
            });
        }
        getNewFolderIndex() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.get("select extData1 from AlbumConfig", {}), n = null !== (e = null == t ? void 0 : t.extData1) && void 0 !== e ? e : "-1", r = this.getNoRepeatFolderNameIndex(Number(n) + 1);
                return global.__log.info(`[Album][album-dao] getNewFolderIndex: [${r}]`), r;
            });
        }
        getNoRepeatFolderNameIndex(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = `select 1 from AlbumFolder where folderName = '${0 === e ? "新建相册" : `新建相册(${e})`}' And orderLevel = 1`;
                return (yield this.all(t)).length ? this.getNoRepeatFolderNameIndex(e + 1) : e;
            });
        }
        updateNewFolderIndex(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[Album][album-dao] updateNewFolderIndex: [${e.index}]`), yield this.run(`update AlbumConfig set extData1 = '${e.index}'`, []);
            });
        }
        deleteAlbumDataById(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[Album][albun-dao] deleteAlbumDataById: [${e.id}]`), yield this.delete("AlbumFront", e.id, "_id");
            });
        }
        setSaveDir(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                d = e + "/Album";
            });
        }
        getSearchImgStatus(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let {fileName: t, id: n} = e, r = `select * from AlbumFront where user_status=2 and _id='${n}' and fileName="${t}"`;
                return !!(yield this.all(r)).length;
            });
        }
        getSearchVirtualImgList(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let t = [];
                    if (e.includes("全部项目") || e.includes("全") || e.includes("部") || e.includes("项目")) {
                        const e = yield this.getAlbumListAll({
                            getAll: !0
                        });
                        return {
                            success: !0,
                            data: e.fileList,
                            total: e.fileList.length
                        };
                    }
                    if (e.includes("相机")) {
                        const e = yield this.getCameraList({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    if (e.includes("视频")) {
                        const e = yield this.getVideoList({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    if (e.includes("截屏")) {
                        const e = yield this.getScreenHot({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    if (e.includes("录屏")) {
                        const e = yield this.getScreenRecording({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    if (e.includes("导入")) {
                        const e = yield this.getImportAlbumList({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    if (e.includes("最近删除") || e.includes("最近") || e.includes("删除")) {
                        const e = yield this.getDeleteList({
                            getAll: !0
                        });
                        t.push(...e.fileList);
                    }
                    return {
                        success: !0,
                        data: t,
                        total: t.length
                    };
                } catch (e) {
                    return console.error("搜索图片列表失败:", e), {
                        success: !1,
                        data: [],
                        total: 0,
                        message: "搜索失败"
                    };
                }
            });
        }
        fileNameFindItem(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.filter(e => e && e.trim().length > 0).filter((e, t, n) => n.indexOf(e) === t);
                if (0 === t.length) return [];
                try {
                    const e = `\n            SELECT * FROM AlbumFront \n            WHERE user_status = 2 \n            AND (${t.map(e => `fileName='${e}'`).join(" or ")})\n        `;
                    return yield this.all(e);
                } catch (e) {
                    throw console.error("文件名获取数据错误:", e), e;
                }
            });
        }
        getVideoThumbDataList() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = "SELECT save_dir, original_data, thumb_data FROM AlbumFront WHERE mediaType = 3", t = yield this.all(e), n = [];
                    for (const e of t) {
                        if (!e.thumb_data) continue;
                        const t = e.save_dir + e.original_data;
                        if (!i.default.existsSync(t)) {
                            const t = e.thumb_data.replace(/^\/thumb\//, "");
                            n.push(t);
                        }
                    }
                    return global.__log.info(`[Album][album-dao] getVideoThumbDataList found ${n.length} video thumb_data (origin not exists)`), 
                    n;
                } catch (e) {
                    return global.__log.error("[Album][album-dao] getVideoThumbDataList error: " + e), 
                    [];
                }
            });
        }
    }
    const f = new p(a.ALBUM_DB);
    e.exports = f;
}
