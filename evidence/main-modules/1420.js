// analysis/pretty/main.js:103886; webpack module 1420
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.record_clearAllData = t.record_hasData = t.record_deleteOutlineByFileId = t.record_deleteOutline = t.record_updateOutline = t.record_batchInsertOutline = t.record_insertOutline = t.record_getOutlineByFileId = t.record_deleteInsightByFileId = t.record_deleteInsight = t.record_updateInsight = t.record_batchInsertInsight = t.record_insertInsight = t.record_getInsightByFileId = t.record_deleteSummary = t.record_updateSummary = t.record_insertSummary = t.record_hasRecognize = t.record_updateMarkInfo = t.record_createMarkInfo = t.record_createPhotoMark = t.record_updatePhotoMark = t.record_deletePhotoMark = t.record_getPhotoByLocalId = t.record_getASRList = t.record_updateRecordName = t.record_checkDisplayNameDuplicate = t.record_updateRecordBatchByIds = t.record_resetAILock = t.record_updateRecordByLocalId = t.record_updateRecord = t.record_getRecordByIds = t.record_getRecordById = t.record_insertRecord = t.record_getRecordList = t.record_getRecordCounts = void 0;
    const r = n(0), i = n(347), o = n(695), a = n(695), s = n(58), l = global.__log;
    function c(e) {
        var t, n, a;
        return r.__awaiter(this, void 0, void 0, function*() {
            try {
                yield null === (t = this.ensureReady) || void 0 === t ? void 0 : t.call(this);
                let r = "";
                r = e.ignoreStatus ? o.getCategorySqlConditionNoStatus(e.category) : o.getCategorySqlCondition(e.category);
                let s = "";
                void 0 !== e.ids ? s = ` AND r.id IN (${null === (n = null == e ? void 0 : e.ids) || void 0 === n ? void 0 : n.join(",")})` : Array.isArray(null == e ? void 0 : e.localIds) && e.localIds.length > 0 && (s = ` AND r.localId IN (${e.localIds.map(e => `'${e}'`).join(",")})`);
                const c = !!e.lite, u = `\n      SELECT\n        -- Record\n        r.id AS record_id,\n        r.localId AS record_localId,\n        r.cloudVersion AS record_cloudVersion,\n        r.localVersion AS record_localVersion,\n        r.lastUpdate AS record_lastUpdate,\n        r.guid AS record_guid,\n        r.status AS record_status,\n        r.inRecycle AS record_inRecycle,\n        r.mDuration AS record_mDuration,\n        r.mHasCovert AS record_mHasCovert,\n        r.mHasMark AS record_mHasMark,\n        r.mHasPic AS record_mHasPic,\n        r.mHasSummary AS record_mHasSummary,\n        r.mHasAiInsight AS record_mHasAiInsight,\n        r.mPath AS record_mPath,\n        r.mMediaFileOriginalPath AS record_mMediaFileOriginalPath,\n        r.title AS record_title,\n        r.mDisplayName AS record_mDisplayName,\n        r.mDateModified AS record_mDateModified,\n        r.mSize AS record_mSize,\n        r.mMimeType AS record_mMimeType,\n        r.createTime AS record_createTime,\n        r.dirty AS record_dirty,\n        r.aiLock AS record_aiLock,\n        r.localDataStatus AS record_localDataStatus,\n        r.localLastUpdate AS record_localLastUpdate,\n        r.localFileId AS record_localFileId,\n        r.mRecordFileId AS record_mRecordFileId,\n        r.otherData AS record_otherData,\n        r.mRecordMode AS record_mRecordMode,\n        r.textArrangements AS record_textArrangements,\n\n        -- Mark\n        m.id AS mark_id,\n        m.uuid AS mark_uuid,\n        m.mFileId AS mark_mFileId,\n        m.mMarkItemInfoModifiedTime AS mark_mMarkItemInfoModifiedTime,\n        m.mMarkItemList AS mark_mMarkItemList,\n\n        -- Photo\n        p.id AS photo_id,\n        p.uuid AS photo_uuid,\n        p.mFileId AS photo_mFileId,\n        p.localFileId AS photo_localFileId,\n\n        -- Summary\n        s.id as summary_id,\n        s.uuid AS summary_uuid,\n        s.mFileId AS summary_mFileId,\n        s.addTime As summary_addTime,\n        s.mSummarySpanTextList AS summary_mSummarySpanTextList,\n        s.title AS summary_title,\n        s.content AS summary_content,\n        s.textType AS summary_textType,\n        s.relate AS summary_relate,\n        s.otherData AS summary_otherData,\n        s.mSummaryMarks AS summary_mSummaryMarks,\n        s.mPointRelateData AS summary_mPointRelateData,\n        s.scenesType AS summary_scenesType,\n\n        -- LocalFile\n        f.id AS localFile_id,\n        f.uuid AS localFile_uuid,\n        f.status AS localFile_status,\n        f.localPath AS localFile_localPath,\n        f.file_name AS localFile_file_name,\n        f.metaId AS localFile_metaId,\n        f.domainAddr AS localFile_domainAddr,\n        f.fileSize AS localFile_fileSize,\n        f.checkSumVersion AS localFile_checkSumVersion,\n        f.checkSum AS localFile_checkSum,\n        f.metaType AS localFile_metaType,\n        f.mimeType AS localFile_mimeType,\n        f.width AS localFile_width,\n        f.height AS localFile_height,\n        f.duration AS localFile_duration,\n        f.rotate AS localFile_rotate${c ? "" : `,\n        -- Recognize (1:N → JSON)\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', rec.id,\n              'uuid', rec.uuid,\n              'mFileId', rec.mFileId,\n              'startTime', rec.startTime,\n              'endTime', rec.endTime,\n              'mRecognizeItemInfoModifiedTime', rec.mRecognizeItemInfoModifiedTime,\n              'content', rec.content,\n              'speaker', rec.speaker,\n              'mIsBackground', rec.mIsBackground,\n              'textCanConvert', rec.textCanConvert,\n              'textType', rec.textType,\n              'mSentenceId', rec.mSentenceId,\n              'mParagraphId', rec.mParagraphId,\n              'speakerName', rec.speakerName,\n              'speakerColor', rec.speakerColor,\n              'isSupportSpeaker', rec.isSupportSpeaker,\n              'isSupportNewConvert', rec.isSupportNewConvert,\n              'convertTimeTip', rec.convertTimeTip\n            )\n          )\n          FROM Recognize rec\n          WHERE rec.mFileId = r.localId\n            AND (rec.textType IS NULL OR rec.textType != 3)\n        ) AS recognize_list,\n\n        -- Recognize 文本整理（TextArrangement 表）(1:N → JSON)\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', org.id,\n              'uuid', org.uuid,\n              'mFileId', org.mFileId,\n              'startTime', org.startTime,\n              'endTime', org.endTime,\n              'mRecognizeItemInfoModifiedTime', org.mRecognizeItemInfoModifiedTime,\n              'content', org.content,\n              'speaker', org.speaker,\n              'mIsBackground', org.mIsBackground,\n              'textCanConvert', org.textCanConvert,\n              'textType', org.textType,\n              'mSentenceId', org.mSentenceId,\n              'mParagraphId', org.mParagraphId,\n              'speakerName', org.speakerName,\n              'speakerColor', org.speakerColor,\n              'isSupportSpeaker', org.isSupportSpeaker,\n              'isSupportNewConvert', org.isSupportNewConvert,\n              'convertTimeTip', org.convertTimeTip\n            )\n          )\n          FROM TextArrangement org\n          WHERE org.mFileId = r.localId\n        ) AS organize_list,\n\n\n        -- Outline (1:N → JSON)\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_ID},\n              'outlineRecordFileId', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID},\n              'outlineContent', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_CONTENT},\n              'outlineStartTime', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_START_TIME},\n              'outlineEndTime', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_END_TIME},\n              'dateAdded', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_ADD},\n              'dateModified', ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_MODIFIED},\n              'saveAndroidVersion', ol.${i.TABLE_OUTLINE_CONSTANT.SAVE_ANDROID_VERSION}\n            )\n          )\n          FROM ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME} ol\n          WHERE ol.${i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID} = r.localId\n        ) AS outline_list,\n\n        -- Insight (1:N → JSON)\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_ID},\n              'insightFileId', ins.${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID},\n              'insightFileName', ins.${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_NAME},\n              'insightFilePath', ins.${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_PATH},\n              'insightContent', ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_CONTENT},\n              'insightStartTime', ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_START_TIME},\n              'insightEndTime', ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_END_TIME},\n              'insightModifyDate', ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_MODIFY_DATE},\n              'insightTimeTip', COALESCE(ins.${i.TABLE_INSIGHT_CONSTANT.INSIGHT_TIME_TIP}, ins._insight_recreate_tip, 0)\n            )\n          )\n          FROM ${i.TABLE_INSIGHT_CONSTANT.TABLE_NAME} ins\n          WHERE ins.${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID} = r.localId\n        ) AS insight_list`}\n\n      FROM Record r\n      LEFT JOIN Mark m ON m.mFileId = r.localId\n      LEFT JOIN Photo p ON p.mFileId = r.localId\n      LEFT JOIN LocalFile f ON f.id = r.localFileId\n      LEFT JOIN Summary s ON s.mFileId = r.localId\n      WHERE 1 = 1\n      ${r}\n      ${s}\n    `, d = this, h = yield d.all(u);
                l.info(`[record_getRecordList] 查询到 ${h.length} 条记录`);
                const p = new Map;
                for (const e of h) {
                    const t = e.record_localId;
                    if (!e.localFile_id || !e.localFile_localPath) continue;
                    if (e.record_localFileId && !e.localFile_id ? l.warn(`[record_getRecordList] Record ${t} 有 localFileId=${e.record_localFileId}，但未找到对应的LocalFile记录`) : !e.record_localFileId && e.localFile_id ? l.warn(`[record_getRecordList] Record ${t} 没有 localFileId，但找到了LocalFile记录 id=${e.localFile_id}`) : e.record_localFileId && e.localFile_id && e.record_localFileId !== e.localFile_id && l.warn(`[record_getRecordList] Record ${t} 的 localFileId=${e.record_localFileId} 与 LocalFile的id=${e.localFile_id} 不匹配`), 
                    !e.localFile_id || !e.localFile_localPath) continue;
                    if (!p.has(t)) {
                        p.set(t, {
                            id: e.record_id,
                            guid: e.record_guid,
                            localId: e.record_localId,
                            cloudVersion: e.record_cloudVersion,
                            localVersion: e.record_localVersion,
                            status: e.record_status,
                            inRecycle: e.record_inRecycle,
                            lastUpdate: e.record_lastUpdate,
                            mDuration: e.record_mDuration,
                            mHasCovert: e.record_mHasCovert,
                            mHasMark: e.record_mHasMark,
                            mHasPic: e.record_mHasPic,
                            mHasSummary: e.record_mHasSummary,
                            mHasAiInsight: e.record_mHasAiInsight,
                            mPath: e.record_mPath,
                            mMediaFileOriginalPath: e.record_mMediaFileOriginalPath,
                            title: e.record_title,
                            mDisplayName: e.record_mDisplayName,
                            mDateModified: e.record_mDateModified,
                            mSize: e.record_mSize,
                            mMimeType: e.record_mMimeType,
                            createTime: e.record_createTime,
                            dirty: e.record_dirty,
                            aiLock: e.record_aiLock,
                            localDataStatus: e.record_localDataStatus,
                            localLastUpdate: e.record_localLastUpdate,
                            localFileId: e.record_localFileId,
                            mRecordFileId: e.record_mRecordFileId,
                            otherData: e.record_otherData,
                            mRecordMode: null !== (a = e.record_mRecordMode) && void 0 !== a ? a : null,
                            category: o.getCategoryByPath(e.mMediaFileOriginalPath),
                            localFile: void 0 !== e.localFile_id && null !== e.localFile_id ? {
                                id: e.localFile_id,
                                status: e.localFile_status,
                                localPath: e.localFile_localPath,
                                file_name: e.localFile_file_name,
                                metaId: e.localFile_metaId,
                                domainAddr: e.localFile_domainAddr,
                                fileSize: e.localFile_fileSize,
                                checkSumVersion: e.localFile_checkSumVersion,
                                checkSum: e.localFile_checkSum,
                                metaType: e.localFile_metaType,
                                mimeType: e.localFile_mimeType,
                                width: e.localFile_width,
                                height: e.localFile_height,
                                duration: e.localFile_duration,
                                rotate: e.localFile_rotate
                            } : null,
                            mark: null,
                            photo: null,
                            summary: null,
                            recognizes: e.recognize_list ? JSON.parse(e.recognize_list).filter(e => null !== e) : [],
                            organizes: (() => {
                                if (e.record_textArrangements) try {
                                    const t = JSON.parse(e.record_textArrangements);
                                    if (Array.isArray(t) && t.length > 0) return t.filter(e => null !== e);
                                } catch (e) {
                                    l.info(`[record_getRecordList] 解析 textArrangements 失败 localId=${t} err=${e.message}`);
                                }
                                return e.organize_list ? JSON.parse(e.organize_list).filter(e => null !== e) : [];
                            })(),
                            outlines: e.outline_list ? JSON.parse(e.outline_list).filter(e => null !== e) : [],
                            insights: e.insight_list ? JSON.parse(e.insight_list).filter(e => null !== e) : []
                        });
                        const n = p.get(t), r = n.insights && n.insights.length > 0;
                        if (c) ; else if (r && 1 !== n.mHasAiInsight) {
                            n.mHasAiInsight = 1;
                            const e = Date.now(), r = Math.floor(e / 1e3);
                            d.run("UPDATE Record SET mHasAiInsight = 1, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ e, r, t ]).catch(e => l.info(`[record_getRecordList] 修正 mHasAiInsight 失败 localId=${t} err=${e.message}`)), 
                            l.info(`[record_getRecordList] 修正 mHasAiInsight: localId=${t} insights.length=${n.insights.length}`);
                        } else if (!r && 1 === n.mHasAiInsight) {
                            n.mHasAiInsight = 0;
                            const e = Date.now(), r = Math.floor(e / 1e3);
                            d.run("UPDATE Record SET mHasAiInsight = 0, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ e, r, t ]).catch(e => l.info(`[record_getRecordList] 修正 mHasAiInsight 失败 localId=${t} err=${e.message}`)), 
                            l.info(`[record_getRecordList] 修正 mHasAiInsight: localId=${t} 无insight数据但标志为1`);
                        }
                    }
                    const n = p.get(t);
                    !n.mark && e.mark_id && (n.mark = {
                        id: e.mark_id,
                        mFileId: e.mark_mFileId,
                        mMarkItemInfoModifiedTime: e.mark_mMarkItemInfoModifiedTime,
                        mMarkItemList: e.mark_mMarkItemList ? JSON.parse(e.mark_mMarkItemList) : []
                    }), !n.photo && e.photo_id && (n.photo = {
                        id: e.photo_id,
                        mFileId: e.photo_mFileId,
                        localFileId: e.photo_localFileId
                    }), !n.summary && e.summary_id && (n.summary = {
                        id: e.summary_id,
                        uuid: e.summary_uuid,
                        mFileId: e.summary_mFileId,
                        addTime: e.summary_addTime,
                        mSummarySpanTextList: e.summary_mSummarySpanTextList,
                        title: e.summary_title,
                        content: e.summary_content,
                        textType: e.summary_textType,
                        relate: e.summary_relate,
                        otherData: e.summary_otherData,
                        mSummaryMarks: e.summary_mSummaryMarks,
                        mPointRelateData: e.summary_mPointRelateData,
                        scenesType: e.summary_scenesType
                    });
                }
                return Array.from(p.values());
            } catch (e) {
                throw l.info([ "record_getRecordList 查询出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }
    function u(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return yield t.update("Summary", e, "uuid"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return l.error("更新总结出错" + e.message), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }
    t.record_getRecordCounts = function() {
        var e;
        return r.__awaiter(this, void 0, void 0, function*() {
            yield null === (e = this.ensureReady) || void 0 === e ? void 0 : e.call(this);
            const t = Math.floor(Date.now() / 1e3), n = `\n    SELECT\n      -- 全部（不包含删除，且 localFile 有效）\n      COUNT(CASE WHEN r.inRecycle != 1 AND r.status != 3 AND f.id IS NOT NULL AND f.localPath IS NOT NULL AND f.localPath != '' THEN 1 END) AS total,\n\n      -- 录音机\n      COALESCE(SUM(CASE\n        WHEN r.inRecycle != 1\n             AND r.status != 3\n             AND f.id IS NOT NULL AND f.localPath IS NOT NULL AND f.localPath != ''\n             AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.ROOT_DIR}%'\n             AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n             AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%'\n             AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.APP_DIR}%'\n        THEN 1 ELSE 0 END), 0) AS recording_count,\n\n      -- 电话\n      COALESCE(SUM(CASE\n        WHEN r.inRecycle != 1\n          AND r.status != 3\n          AND f.id IS NOT NULL AND f.localPath IS NOT NULL AND f.localPath != ''\n          AND (r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n            OR r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%')\n        THEN 1 ELSE 0 END), 0) AS call_count,\n\n      -- 应用\n      COALESCE(SUM(CASE\n        WHEN r.inRecycle != 1\n          AND r.status != 3\n          AND f.id IS NOT NULL AND f.localPath IS NOT NULL AND f.localPath != ''\n          AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.APP_DIR}%'\n        THEN 1 ELSE 0 END), 0) AS app_count,\n\n      -- 删除（只统计剩余天数大于0且 localFile 有效的记录，与列表显示逻辑保持一致）\n      COALESCE(SUM(CASE\n        WHEN r.inRecycle = 1\n        AND r.status != 3\n        AND f.id IS NOT NULL AND f.localPath IS NOT NULL AND f.localPath != ''\n        AND (r.mDateModified + 30 * 24 * 60 * 60) > ${t}\n        THEN 1 ELSE 0 END), 0) AS deleted_count\n    FROM Record r\n    LEFT JOIN LocalFile f ON f.id = r.localFileId\n  `, r = yield this.get(n);
            return {
                total: r.total,
                record: r.recording_count,
                call: r.call_count,
                apps: r.app_count,
                recycle: r.deleted_count
            };
        });
    }, t.record_getRecordList = c, t.record_insertRecord = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = e || {}, r = "string" == typeof n.createTime ? parseInt(n.createTime, 10) : n.createTime;
                return "number" == typeof r && !isNaN(r) && r > 0 || (n.createTime = Date.now()), 
                yield t.insertWithResult("Record", n);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_getRecordById = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return yield c.call(t, {
                    ids: [ e.id ],
                    category: 0
                });
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_getRecordByIds = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return yield c.call(t, {
                    ids: [ e.ids ],
                    category: 0
                });
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_updateRecord = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {id: n} = e;
                if (!n) throw new Error("id is required");
                return yield t.update("Record", e, "id");
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_updateRecordByLocalId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {localId: n} = e;
                if (!n) throw new Error("localId is required");
                return yield t.update("Record", e, "localId");
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_resetAILock = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = " UPDATE Record SET aiLock = 0 WHERE aiLock = 1";
                return yield e.run(t);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.record_updateRecordBatchByIds = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {ids: n, partialParam: r} = e;
                if (!n.length) return;
                if (!Object.keys(r).length) return;
                const i = Object.keys(r), o = i.map(e => e + " = ?").join(", "), a = i.map(e => r[e]), s = n.map(() => "?").join(","), l = Date.now(), c = `\n      UPDATE Record\n      SET dirty=1, localVersion='${Math.floor(l / 1e3)}', localLastUpdate='${l}', ${o}\n      WHERE id IN (${s})\n    `;
                return yield t.run(c, [ ...a, ...n ]);
            } catch (e) {
                throw console.log("修改出错了", e), new Error(e.message);
            }
        });
    }, t.record_checkDisplayNameDuplicate = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const {name: t, localId: n} = e, r = yield this.get("\n    SELECT COUNT(*) AS count\n    FROM Record \n    WHERE mDisplayName = ? AND localId != ?\n     AND inRecycle != 1\n     AND status != 3\n  ", [ t, n ]);
            return l.info("record_checkDisplayNameDuplicate row count " + r.count), r.count > 0;
        });
    }, t.record_updateRecordName = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {localId: n, title: r, fileId: i, file_name: o, inRecycle: a} = e;
            try {
                yield t.run("BEGIN IMMEDIATE"), yield t.run("UPDATE LocalFile SET file_name = ? WHERE id = ?", [ o, i ]);
                const e = Date.now(), s = Math.floor(e / 1e3);
                return void 0 !== a ? yield t.run("UPDATE Record SET localVersion = ?, localLastUpdate = ?, title = ?, mDisplayName = ?, inRecycle = ?, dirty =1 WHERE localId = ?", [ s, e, r, o, a, n ]) : yield t.run("UPDATE Record SET localVersion = ?, localLastUpdate = ?, title = ?, mDisplayName = ?, dirty =1 WHERE localId = ?", [ s, e, r, o, n ]), 
                yield t.run("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                try {
                    return yield t.db.run("ROLLBACK"), {
                        code: -1,
                        message: "error"
                    };
                } catch (e) {}
                throw e;
            }
        });
    }, t.record_getASRList = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT\n      -- Record\n      r.id              AS record_id,\n      r.localId         AS record_localId,\n      r.aiLock          AS record_aiLock,\n      r.mDisplayName    AS record_mDisplayName,\n      r.mDateModified   AS record_mDateModified,\n      r.localFileId     AS record_localFileId,\n\n      -- LocalFile\n      f.id              AS localFile_id,\n      f.localPath       AS localFile_localPath,\n      f.fileSize        AS localFile_fileSize,\n      f.duration        AS localFile_duration\n\n    FROM Record r\n    LEFT JOIN LocalFile f\n      ON f.id = r.localFileId\n    WHERE r.inRecycle != 1\n      AND r.status != 3\n      AND f.id IS NOT NULL\n      AND f.localPath IS NOT NULL\n      AND f.localPath != ''\n      AND NOT EXISTS (\n        SELECT 1\n        FROM Recognize rec\n        WHERE rec.mFileId = r.localId\n      );\n      ";
                return yield e.all(t);
            } catch (e) {
                throw l.info([ "record_getASRList 查询出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_getPhotoByLocalId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = "SELECT * FROM Photo WHERE mFileId = ?";
                return yield t.get(n, [ e.localId ]);
            } catch (e) {
                throw e;
            }
        });
    }, t.record_deletePhotoMark = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            console.log(t.db, t.delete);
            const {mFileId: n, id: r} = e;
            try {
                yield t.db.run("BEGIN IMMEDIATE"), yield t.delete("Photo", n, "mFileId"), yield t.delete("LocalFile", r, "id");
                const e = Date.now(), i = Math.floor(e / 1e3);
                return yield t.db.run("UPDATE Record SET mHasPic = ?, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ 0, e, i, n ]), 
                yield t.db.run("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                console.log("record_deletePhotoMark error", e);
                try {
                    return yield t.db.run("ROLLBACK"), {
                        code: -1,
                        message: "error"
                    };
                } catch (e) {}
                throw new Error(e.message);
            }
        });
    }, t.record_updatePhotoMark = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.db.run("BEGIN IMMEDIATE");
                const {localPath: n, fileName: r, domain: i, fileSize: o, checkSum: s, mimeType: l, width: c, height: u, duration: d, rotate: h, mPhotoSize: p, otherData: f, mPhotoRemarkModifiedTime: _, mFileId: m, localFileId: g} = e, v = {
                    id: g,
                    localPath: n || i,
                    file_name: r,
                    fileSize: o,
                    checkSumVersion: "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? 3 : 2,
                    checkSum: s,
                    mimeType: l,
                    metaType: 1,
                    width: c,
                    height: u,
                    duration: d,
                    rotate: h
                };
                yield t.update("LocalFile", v, "id");
                const y = {
                    mFileId: m,
                    mPhotoRemarkModifiedTime: _,
                    mPhotoRemarkPath: a.converPhonePath(n || i),
                    mPhotoRemarkUri: "file://" + a.converPhonePath(n || i),
                    mPhotoSize: p,
                    localFileId: g,
                    otherData: f
                };
                yield t.update("Photo", y, "mFileId");
                const E = Date.now(), b = Math.floor(E / 1e3);
                return yield t.db.run("UPDATE Record SET mHasPic = ?, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ 1, E, b, m ]), 
                yield t.db.run("COMMIT"), g;
            } catch (e) {
                console.log("record_updatePhotoMark error", e);
                try {
                    yield t.db.run("ROLLBACK");
                } catch (e) {}
                throw new Error(e.message);
            }
        });
    }, t.record_createPhotoMark = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            console.log("file_addPhotoMark", e);
            const {localPath: t, fileName: n, domain: r, fileSize: i, checkSum: o, mimeType: l, width: c, height: u, duration: d, rotate: h, mPhotoSize: p, otherData: f, mPhotoRemarkModifiedTime: _, mFileId: m} = e, g = {
                localPath: t || r,
                file_name: n,
                fileSize: i,
                checkSumVersion: "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? 3 : 2,
                checkSum: o,
                mimeType: l,
                metaType: 1,
                width: c,
                height: u,
                duration: d,
                rotate: h,
                fileType: "photo",
                uuid: s.v4(),
                mFileId: m
            };
            console.log("file_addPhotoMark params", g);
            const v = this;
            try {
                yield v.db.run("BEGIN IMMEDIATE");
                const e = yield v.insertWithResult("LocalFile", g);
                console.log("localFile 表插入后返回的值", e);
                const n = {
                    mFileId: m,
                    mPhotoRemarkModifiedTime: _,
                    mPhotoRemarkPath: a.converPhonePath(t || r),
                    mPhotoRemarkUri: "file://" + a.converPhonePath(t || r),
                    mPhotoSize: p,
                    localFileId: e,
                    otherData: f,
                    uuid: s.v4()
                }, i = yield v.insertWithResult("Photo", n);
                console.log("Photo 表插入后返回的值", i);
                const o = Date.now(), l = Math.floor(o / 1e3);
                return yield v.db.run("UPDATE Record SET mHasPic = ?, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ 1, o, l, m ]), 
                yield v.db.run("COMMIT"), {
                    id: i,
                    localFileId: e,
                    mFileId: m
                };
            } catch (e) {
                console.log("record_updatePhotoMark error", e);
                try {
                    yield v.db.run("ROLLBACK");
                } catch (e) {}
                throw new Error(e.message);
            }
        });
    }, t.record_createMarkInfo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.db.run("BEGIN IMMEDIATE"), console.log("record_updateMarkInfo", e);
                const {mFileId: n, mMarkItemList: r} = e, i = r.map(e => ({
                    markTime: e.markTime,
                    markName: e.markName,
                    markType: e.markType,
                    markIndex: e.markIndex
                })), o = Object.assign(Object.assign({}, e), {
                    uuid: s.v4(),
                    mMarkItemList: JSON.stringify(i)
                }), a = yield t.insertWithResult("Mark", o), l = Date.now(), c = Math.floor(l / 1e3);
                return yield t.db.run("UPDATE Record SET mHasMark = ?, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ 1, l, c, n ]), 
                yield t.db.run("COMMIT"), a;
            } catch (e) {
                console.log("record_updateMarkInfo error", e);
                try {
                    yield t.db.run("ROLLBACK");
                } catch (e) {}
                throw new Error(e.message);
            }
        });
    }, t.record_updateMarkInfo = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.db.run("BEGIN IMMEDIATE"), console.log("record_updateMarkInfo", e);
                const {id: n, mFileId: r, mMarkItemList: i} = e, o = i.map(e => ({
                    markTime: e.markTime,
                    markName: e.markName,
                    markType: e.markType,
                    markIndex: e.markIndex
                })), a = Object.assign(Object.assign({}, e), {
                    mMarkItemList: JSON.stringify(o)
                }), s = 0 === i.length ? 0 : 1;
                s ? yield t.update("Mark", a, "id") : yield t.delete("Mark", n, "id"), console.log("mHasMark", s);
                const l = Date.now(), c = Math.floor(l / 1e3);
                return yield t.db.run("UPDATE Record SET mHasMark = ?, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ s, l, c, r ]), 
                yield t.db.run("COMMIT"), n;
            } catch (e) {
                console.log("record_updateMarkInfo error", e);
                try {
                    yield t.db.run("ROLLBACK");
                } catch (e) {}
                throw new Error(e.message);
            }
        });
    }, t.record_hasRecognize = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {localId: n} = e, r = `SELECT r.id, r.localId, EXISTS (\n      SELECT *\n      FROM Recognize rec\n      WHERE rec.mFileId = r.localId\n    ) AS has_recognize\n  FROM Record r\n  WHERE r.localId = '${n}'\n    AND r.status != 3;`, i = yield t.all(r);
                return i && i.length > 0 && i[0].has_recognize > 0;
            } catch (e) {
                throw l.info([ "record_getASRList 查询出错", e.message ].join("#")), e;
            }
        });
    }, t.record_insertSummary = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {data: n, localId: r} = e;
            try {
                const e = Object.keys(n), i = e.join(","), o = e.map(() => "?").join(","), a = e.map(e => n[e]), s = `INSERT INTO Summary (${i}) VALUES (${o})`, c = Date.now(), u = Math.floor(c / 1e3);
                yield t.exec("BEGIN IMMEDIATE");
                const d = yield t.get("SELECT COUNT(*) AS count FROM Summary WHERE mFileId = ?", [ r ]);
                return l.info("record_insertSummary checkEmpty count = " + (null == d ? void 0 : d.count)), 
                (null == d ? void 0 : d.count) > 0 && (yield t.run("DELETE FROM Summary WHERE mFileId = ?", [ r ])), 
                yield t.run(s, a), yield t.run("UPDATE Record SET mHasSummary = 1, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ c, u, r ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return t.exec("ROLLBACK"), l.error("插入总结出错" + e.message), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_updateSummary = u, u.needDirty = 1, t.record_deleteSummary = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = Date.now(), r = Math.floor(n / 1e3);
                return yield t.exec("BEGIN IMMEDIATE"), yield t.run("DELETE FROM Summary where mFileId = ?", [ e ]), 
                yield t.run("UPDATE Record SET mHasSummary = 0, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ n, r, e ]), 
                yield t.exec("COMMIT"), {
                    code: 0,
                    message: "success"
                };
            } catch (e) {
                return t.exec("ROLLBACK"), l.error("删除总结出错" + e.message), {
                    code: -1,
                    message: "error"
                };
            }
        });
    }, t.record_getInsightByFileId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = `\n      SELECT \n        ${i.TABLE_INSIGHT_CONSTANT.INSIGHT_ID} AS id,\n        ${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID} AS insightFileId,\n        ${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_NAME} AS insightFileName,\n        ${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_PATH} AS insightFilePath,\n        ${i.TABLE_INSIGHT_CONSTANT.INSIGHT_CONTENT} AS insightContent,\n        ${i.TABLE_INSIGHT_CONSTANT.INSIGHT_START_TIME} AS insightStartTime,\n        ${i.TABLE_INSIGHT_CONSTANT.INSIGHT_END_TIME} AS insightEndTime,\n        ${i.TABLE_INSIGHT_CONSTANT.INSIGHT_MODIFY_DATE} AS insightModifyDate,\n        COALESCE(${i.TABLE_INSIGHT_CONSTANT.INSIGHT_TIME_TIP}, _insight_recreate_tip, 0) AS insightTimeTip\n      FROM ${i.TABLE_INSIGHT_CONSTANT.TABLE_NAME}\n      WHERE ${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID} = ?\n    `;
                return yield t.all(n, [ e.fileId ]);
            } catch (e) {
                throw l.info([ "record_getInsightByFileId 查询出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_insertInsight = function(e) {
        var t;
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = this;
            try {
                const r = null !== (t = e.insightTimeTip) && void 0 !== t ? t : 0, o = {
                    [i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID]: e.insightFileId,
                    [i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_NAME]: s.v4(),
                    [i.TABLE_INSIGHT_CONSTANT.INSIGHT_CONTENT]: e.insightContent,
                    [i.TABLE_INSIGHT_CONSTANT.INSIGHT_START_TIME]: e.insightStartTime,
                    [i.TABLE_INSIGHT_CONSTANT.INSIGHT_END_TIME]: e.insightEndTime,
                    [i.TABLE_INSIGHT_CONSTANT.INSIGHT_MODIFY_DATE]: e.insightModifyDate,
                    [i.TABLE_INSIGHT_CONSTANT.INSIGHT_TIME_TIP]: r,
                    _insight_recreate_tip: r
                };
                return yield n.insertWithResult(i.TABLE_INSIGHT_CONSTANT.TABLE_NAME, o);
            } catch (e) {
                throw l.info([ "record_insertInsight 插入出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_batchInsertInsight = function(e) {
        var t;
        return r.__awaiter(this, void 0, void 0, function*() {
            const n = this;
            try {
                if (!e.length) return;
                yield n.db.run("BEGIN IMMEDIATE");
                const r = e[0].insightFileId;
                for (const r of e) {
                    const e = null !== (t = r.insightTimeTip) && void 0 !== t ? t : 0, o = {
                        [i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID]: r.insightFileId,
                        [i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_NAME]: s.v4(),
                        [i.TABLE_INSIGHT_CONSTANT.INSIGHT_CONTENT]: r.insightContent,
                        [i.TABLE_INSIGHT_CONSTANT.INSIGHT_START_TIME]: r.insightStartTime,
                        [i.TABLE_INSIGHT_CONSTANT.INSIGHT_END_TIME]: r.insightEndTime,
                        [i.TABLE_INSIGHT_CONSTANT.INSIGHT_MODIFY_DATE]: r.insightModifyDate,
                        [i.TABLE_INSIGHT_CONSTANT.INSIGHT_TIME_TIP]: e,
                        _insight_recreate_tip: e
                    };
                    yield n.insertWithResult(i.TABLE_INSIGHT_CONSTANT.TABLE_NAME, o);
                }
                const o = Date.now(), a = Math.floor(o / 1e3);
                yield n.db.run("UPDATE Record SET mHasAiInsight = 1, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ o, a, r ]), 
                yield n.db.run("COMMIT");
            } catch (e) {
                throw yield n.db.run("ROLLBACK"), l.info([ "record_batchInsertInsight 批量插入出错", e.message ].join("#")), 
                new Error(e.message);
            }
        });
    }, t.record_updateInsight = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {id: n} = e, o = r.__rest(e, [ "id" ]);
                if (!n) throw new Error("id is required");
                yield t.update(i.TABLE_INSIGHT_CONSTANT.TABLE_NAME, o, i.TABLE_INSIGHT_CONSTANT.INSIGHT_ID);
            } catch (e) {
                throw l.info([ "record_updateInsight 更新出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_deleteInsight = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.delete(i.TABLE_INSIGHT_CONSTANT.TABLE_NAME, e.id, i.TABLE_INSIGHT_CONSTANT.INSIGHT_ID);
            } catch (e) {
                throw l.info([ "record_deleteInsight 删除出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_deleteInsightByFileId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = `DELETE FROM ${i.TABLE_INSIGHT_CONSTANT.TABLE_NAME} WHERE ${i.TABLE_INSIGHT_CONSTANT.RECORD_FILE_ID} = ?`;
                yield t.run(n, [ e.fileId ]);
                const r = Date.now(), o = Math.floor(r / 1e3);
                yield t.run("UPDATE Record SET mHasAiInsight = 0, localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ r, o, e.fileId ]);
            } catch (e) {
                throw l.info([ "record_deleteInsightByFileId 删除出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_getOutlineByFileId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = `\n      SELECT \n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_ID} AS id,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID} AS outlineRecordFileId,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_CONTENT} AS outlineContent,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_START_TIME} AS outlineStartTime,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_END_TIME} AS outlineEndTime,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_ADD} AS dateAdded,\n        ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_MODIFIED} AS dateModified,\n        ${i.TABLE_OUTLINE_CONSTANT.SAVE_ANDROID_VERSION} AS saveAndroidVersion\n      FROM ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME}\n      WHERE ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID} = ?\n    `;
                return yield t.all(n, [ e.fileId ]);
            } catch (e) {
                throw l.info([ "record_getOutlineByFileId 查询出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_insertOutline = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = Date.now(), r = {
                    uuid: s.v4(),
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID]: e.outlineRecordFileId,
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_CONTENT]: e.outlineContent,
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_START_TIME]: e.outlineStartTime,
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_END_TIME]: e.outlineEndTime,
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_ADD]: e.dateAdded || n,
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_MODIFIED]: e.dateModified || n,
                    [i.TABLE_OUTLINE_CONSTANT.SAVE_ANDROID_VERSION]: e.saveAndroidVersion || 0
                };
                return yield t.insertWithResult(i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME, r);
            } catch (e) {
                throw l.info([ "record_insertOutline 插入出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_batchInsertOutline = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = Array.isArray(e) ? e : e.list || [];
                if (!n.length) return;
                yield t.db.run("BEGIN IMMEDIATE");
                const r = Date.now();
                for (const e of n) {
                    const n = {
                        uuid: s.v4(),
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID]: e.outlineRecordFileId,
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_CONTENT]: e.outlineContent,
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_START_TIME]: e.outlineStartTime,
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_END_TIME]: e.outlineEndTime,
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_ADD]: e.dateAdded || r,
                        [i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_MODIFIED]: e.dateModified || r,
                        [i.TABLE_OUTLINE_CONSTANT.SAVE_ANDROID_VERSION]: e.saveAndroidVersion || 0
                    };
                    yield t.insertWithResult(i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME, n);
                }
                const o = n[0].outlineRecordFileId, a = Math.floor(r / 1e3);
                yield t.db.run("UPDATE Record SET localLastUpdate = ?, localVersion = ?, dirty = 1 WHERE localId = ?", [ r, a, o ]), 
                yield t.db.run("COMMIT");
            } catch (e) {
                throw yield t.db.run("ROLLBACK"), l.info([ "record_batchInsertOutline 批量插入出错", e.message ].join("#")), 
                new Error(e.message);
            }
        });
    }, t.record_updateOutline = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {id: n} = e, o = r.__rest(e, [ "id" ]);
                if (!n) throw new Error("id is required");
                const a = Object.assign(Object.assign({}, o), {
                    [i.TABLE_OUTLINE_CONSTANT.OUTLINE_DATE_MODIFIED]: Date.now()
                });
                yield t.update(i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME, a, i.TABLE_OUTLINE_CONSTANT.OUTLINE_ID);
            } catch (e) {
                throw l.info([ "record_updateOutline 更新出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_deleteOutline = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.delete(i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME, e.id, i.TABLE_OUTLINE_CONSTANT.OUTLINE_ID);
            } catch (e) {
                throw l.info([ "record_deleteOutline 删除出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_deleteOutlineByFileId = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const n = `DELETE FROM ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_TABLE_NAME} WHERE ${i.TABLE_OUTLINE_CONSTANT.OUTLINE_RECORD_FILE_ID} = ?`;
                yield t.run(n, [ e.fileId ]);
            } catch (e) {
                throw l.info([ "record_deleteOutlineByFileId 删除出错", e.message ].join("#")), new Error(e.message);
            }
        });
    }, t.record_hasData = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT COUNT(*) AS record_count\n      FROM Record\n      WHERE status != 3;";
                return (yield e.all(t))[0];
            } catch (e) {}
        });
    }, t.record_clearAllData = function() {
        var e, t, n, i, o, a;
        return r.__awaiter(this, void 0, void 0, function*() {
            const r = this, s = {
                recordCountBefore: 0,
                localFileCountBefore: 0,
                summaryCountBefore: 0,
                markCountBefore: 0,
                insightCountBefore: 0,
                outlineCountBefore: 0
            };
            try {
                const l = yield r.get("SELECT COUNT(*) AS c FROM Record");
                s.recordCountBefore = null !== (e = null == l ? void 0 : l.c) && void 0 !== e ? e : 0;
                const c = yield r.get("SELECT COUNT(*) AS c FROM LocalFile");
                s.localFileCountBefore = null !== (t = null == c ? void 0 : c.c) && void 0 !== t ? t : 0;
                const u = yield r.get("SELECT COUNT(*) AS c FROM Summary");
                s.summaryCountBefore = null !== (n = null == u ? void 0 : u.c) && void 0 !== n ? n : 0;
                const d = yield r.get("SELECT COUNT(*) AS c FROM Mark");
                s.markCountBefore = null !== (i = null == d ? void 0 : d.c) && void 0 !== i ? i : 0;
                const h = yield r.get("SELECT COUNT(*) AS c FROM Insight");
                s.insightCountBefore = null !== (o = null == h ? void 0 : h.c) && void 0 !== o ? o : 0;
                const p = yield r.get("SELECT COUNT(*) AS c FROM Outline");
                return s.outlineCountBefore = null !== (a = null == p ? void 0 : p.c) && void 0 !== a ? a : 0, 
                yield r.db.run("BEGIN IMMEDIATE"), yield r.db.run("CREATE TABLE IF NOT EXISTS _record_clear_backup AS SELECT * FROM Record WHERE 1=0"), 
                yield r.db.run("INSERT INTO _record_clear_backup SELECT * FROM Record"), yield r.db.run("DELETE FROM Record"), 
                yield r.db.run("DELETE FROM LocalFile"), yield r.db.run("DELETE FROM Summary"), 
                yield r.db.run("DELETE FROM Mark"), yield r.db.run("DELETE FROM Insight"), yield r.db.run("DELETE FROM Outline"), 
                yield r.db.run("COMMIT"), s;
            } catch (e) {
                try {
                    yield r.db.run("ROLLBACK");
                } catch (e) {}
                const t = e;
                throw l.info("record_clearAllData 出错, 已回滚: " + ((null == t ? void 0 : t.message) || e)), 
                new Error((null == t ? void 0 : t.message) || String(e));
            }
        });
    };
}
