# HTTP 调用与路径索引

这是语法提取索引，不是逐项验证的在线 API 规范。相同路径可能服务于不同 host、连接方式或环境；动态表达式保留源码形式。业务字段与实际 method 以链接的完整调用为准。第三方依赖也可能贡献候选。完整配置见 [http.json](../evidence/http.json)。

## 调用配置

| Method 表达式 | URL 或路径表达式 | Bundle / 模块 | 证据 |
|---|---|---|---|
| `"post"` | `s("preUpload")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17850) |
| `"post"` | `s("getStsToken")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17868) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/upload.do"` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17877) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/thumbUpload.do"` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17897) |
| `"post"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/rangeUpload.do"` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17916) |
| `"post"` | `s("confirmUpload")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17937) |
| `"post"` | `s("confirmRangeUpload")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17948) |
| `"post"` | `s("fileDomain")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17956) |
| `"post"` | `s("deferStsToken")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17964) |
| `"post"` | `s("abortUpload")` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17972) |
| `"get"` | ``${String(e.domain).replace(/http?s:/, location.protocol)}/api/file/webdisk/download.do${e.asMedia ? "?asMedia=true&_t=" + t : "?_t=" + t}`` | 125 / 6472 | [代码](../analysis/pretty/125.js#L17985) |
| `process.env.IS_WEB ? "post" : "get"` | `process.env.IS_WEB ? "/note-api/fileUrl/download" : e.url` | 125 / 6472 | [代码](../analysis/pretty/125.js#L18003) |
| `"POST"` | `e` | 125 / 6511 | [代码](../analysis/pretty/125.js#L19302) |
| `"POST"` | `"/file/addFileInfo"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43350) |
| `"POST"` | `"/file/getFileInfoByIds"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43360) |
| `"POST"` | `"/file/getResourceInfoByIds"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43370) |
| `"POST"` | `"/file/isUploadCloud"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43380) |
| `"POST"` | `"/file/addPhotoMark"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43393) |
| `"POST"` | `"/file/updatePhotoMark"` | 125 / 9438 | [代码](../analysis/pretty/125.js#L43403) |
| `"POST"` | `e` | 125 / 10935 | [代码](../analysis/pretty/125.js#L7818) |
| `"GET"` | `e` | 125 / 10935 | [代码](../analysis/pretty/125.js#L7946) |
| `"get"` | `t` | 126 / 931 | [代码](../analysis/pretty/126.js#L18661) |
| `"POST"` | `"/service/shared-link/create"` | 126 / 4810 | [代码](../analysis/pretty/126.js#L8626) |
| `"POST"` | `"/service/shared-link/status"` | 126 / 4810 | [代码](../analysis/pretty/126.js#L8632) |
| `"POST"` | `"/service/shared-link/detail"` | 126 / 4810 | [代码](../analysis/pretty/126.js#L8638) |
| `"POST"` | ``/res/note/${e}/query`` | 126 / 10677 | [代码](../analysis/pretty/126.js#L853) |
| `"post"` | `"/api/v1/file/initDownload"` | 128 / 3823 | [代码](../analysis/pretty/128.js#L3502) |
| `"post"` | `"/api/v1/download/complete"` | 128 / 3823 | [代码](../analysis/pretty/128.js#L3508) |
| `"post"` | `"/api/v1/upload/record"` | 128 / 3823 | [代码](../analysis/pretty/128.js#L3514) |
| `"delete"` | `"/api/v1/upload/record/delete"` | 128 / 3823 | [代码](../analysis/pretty/128.js#L3520) |
| `"post"` | `"/api/v1/file/initUpload"` | 128 / 3823 | [代码](../analysis/pretty/128.js#L3526) |
| `e.method` | `e.url` | 128 / 3824 | [代码](../analysis/pretty/128.js#L3623) |
| `"post"` | `a("preUpload")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L3990) |
| `"post"` | `a("getStsToken")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4008) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/upload.do"` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4017) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/thumbUpload.do"` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4037) |
| `"post"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/rangeUpload.do"` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4056) |
| `"post"` | `a("confirmUpload")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4077) |
| `"post"` | `a("confirmRangeUpload")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4088) |
| `"post"` | `a("fileDomain")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4096) |
| `"post"` | `a("deferStsToken")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4104) |
| `"post"` | `a("abortUpload")` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4112) |
| `"get"` | ``${String(e.domain).replace(/http?s:/, location.protocol)}/api/file/webdisk/download.do${e.asMedia ? "?asMedia=true&_t=" + t : "?_t=" + t}`` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4125) |
| `process.env.IS_WEB ? "post" : "get"` | `process.env.IS_WEB ? "/note-api/fileUrl/download" : e.url` | 128 / 6472 | [代码](../analysis/pretty/128.js#L4143) |
| `"POST"` | `"/sync/getSyncState"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3778) |
| `"post"` | `"/sync/getSyncChunk/v2"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3787) |
| `"post"` | `"todoList/getList/v2"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3794) |
| `"post"` | `"todoList/get/v2"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3806) |
| `"post"` | `"todoList/create/v2"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3818) |
| `"post"` | `"todoList/update/v2"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3830) |
| `"post"` | `"todoList/expunge"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3840) |
| `"post"` | `"todoList/resetOrder"` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3849) |
| `"POST"` | `""` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3857) |
| `"POST"` | `""` | 129 / 4594 | [代码](../analysis/pretty/129.js#L3866) |
| `"POST"` | `"/sync/getSyncState"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3216) |
| `"post"` | `"/sync/getSyncChunk/v2"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3225) |
| `"post"` | `"todoList/getList/v2"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3232) |
| `"post"` | `"todoList/get/v2"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3244) |
| `"post"` | `"todoList/create/v2"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3256) |
| `"post"` | `"todoList/update/v2"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3268) |
| `"post"` | `"todoList/expunge"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3278) |
| `"post"` | `"todoList/resetOrder"` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3287) |
| `"POST"` | `""` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3295) |
| `"POST"` | `""` | 134 / 4594 | [代码](../analysis/pretty/134.js#L3304) |
| `"POST"` | ``https://${g}/common/upload_doc?`` | 135 / 6755 | [代码](../analysis/pretty/135.js#L2808) |
| `"POST"` | ``https://${g}/common/upload_chunck_doc?`` | 135 / 6755 | [代码](../analysis/pretty/135.js#L2834) |
| `"POST"` | ``https://${g}/common/upload_doc?`` | 135 / 6755 | [代码](../analysis/pretty/135.js#L2857) |
| `"POST"` | ``https://${g}/common/check_doc_status?`` | 135 / 6755 | [代码](../analysis/pretty/135.js#L2877) |
| `"get"` | `this.originUrl` | 136 / 7100 | [代码](../analysis/pretty/136.js#L3675) |
| `"POST"` | `"/sync/getSyncState"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L1991) |
| `"post"` | `"/sync/getSyncChunk/v2"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2000) |
| `"post"` | `"todoList/getList/v2"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2007) |
| `"post"` | `"todoList/get/v2"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2019) |
| `"post"` | `"todoList/create/v2"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2031) |
| `"post"` | `"todoList/update/v2"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2043) |
| `"post"` | `"todoList/expunge"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2053) |
| `"post"` | `"todoList/resetOrder"` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2062) |
| `"POST"` | `""` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2070) |
| `"POST"` | `""` | 139 / 4594 | [代码](../analysis/pretty/139.js#L2079) |
| `"POST"` | `"/service/search/v2"` | 170 / 3667 | [代码](../analysis/pretty/170.js#L67) |
| `"POST"` | `"/tag/getAllTagNames"` | 170 / 3667 | [代码](../analysis/pretty/170.js#L75) |
| `"POST"` | `"/note/getExistsType"` | 170 / 3667 | [代码](../analysis/pretty/170.js#L81) |
| `"POST"` | `"/service/search/v2"` | 20 / 3667 | [代码](../analysis/pretty/20.js#L283) |
| `"POST"` | `"/tag/getAllTagNames"` | 20 / 3667 | [代码](../analysis/pretty/20.js#L291) |
| `"POST"` | `"/note/getExistsType"` | 20 / 3667 | [代码](../analysis/pretty/20.js#L297) |
| `"POST"` | `"/record/getRecordCounts"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L874) |
| `"POST"` | `"/record/getRecordList"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L881) |
| `"POST"` | `"/record/getRecord"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L888) |
| `"POST"` | `"/record/getRecord"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L897) |
| `"POST"` | `"/record/createRecord"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L906) |
| `"POST"` | `"/record/createFileInfo"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L913) |
| `"POST"` | `"/record/clearAllData"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L920) |
| `"POST"` | `"/record/getSimilarNameLocalFiles"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L927) |
| `"POST"` | `"/record/updateRecord"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L937) |
| `"POST"` | `"/record/updateRecordByLocalId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L944) |
| `"POST"` | `"/record/resetAiLock"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L951) |
| `"POST"` | `"/record/updateRecordEntity"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L958) |
| `"POST"` | `"/record/checkDisplayNameDuplicate"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L968) |
| `"POST"` | `"/record/record_getASRList"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L978) |
| `"POST"` | `"/record/updateRecordName"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L985) |
| `"POST"` | `"/record/getPhoto"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L993) |
| `"POST"` | `"/record/deletePhoto"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1004) |
| `"POST"` | `"record/addPhotoMark"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1014) |
| `"POST"` | `"/record/updatePhotoMark"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1024) |
| `"POST"` | `"/record/updateMarkInfo"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1034) |
| `"POST"` | `"/record/createMarkInfo"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1044) |
| `"POST"` | `"/record/record_hasRecognize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1053) |
| `"POST"` | `"/record/batchInsertRecognize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1066) |
| `"POST"` | `"/record/batchInsertOrganize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1080) |
| `"POST"` | `"/record/batchUpdateOrganize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1094) |
| `"POST"` | `"/record/deleteOrganizeByFileId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1108) |
| `"POST"` | `"/record/batchUpdateRecognize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1121) |
| `"POST"` | `"/record/batchDeleteRecognize"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1135) |
| `"POST"` | `"/record/record_insertSummary"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1147) |
| `"POST"` | `"/record/record_updateSummary"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1158) |
| `"POST"` | `"/record/record_deleteSummary"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1169) |
| `"POST"` | `"/record/record_insertTextArrangement"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1178) |
| `"POST"` | `"/record/record_deleteTextArrangement"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1190) |
| `"POST"` | `"/record/record_getTextArrangement"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1201) |
| `"POST"` | `"/record/getLocalFileById"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1212) |
| `"POST"` | `"/record/getLocalFileListByIds"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1223) |
| `"POST"` | `"/record/getInsightByFileId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1232) |
| `"POST"` | `"/record/insertInsight"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1241) |
| `"POST"` | `"/record/batchInsertInsight"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1250) |
| `"POST"` | `"/record/updateInsight"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1259) |
| `"POST"` | `"/record/deleteInsight"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1268) |
| `"POST"` | `"/record/deleteInsightByFileId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1277) |
| `"POST"` | `"/record/getOutlineByFileId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1286) |
| `"POST"` | `"/record/insertOutline"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1295) |
| `"POST"` | `"/record/batchInsertOutline"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1304) |
| `"POST"` | `"/record/updateOutline"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1315) |
| `"POST"` | `"/record/deleteOutline"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1324) |
| `"POST"` | `"/record/deleteOutlineByFileId"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1333) |
| `"post"` | `"/record/hasData"` | 24 / 6464 | [代码](../analysis/pretty/24.js#L1341) |
| `"POST"` | `"/record/search_getNormalResult"` | 24 / 6724 | [代码](../analysis/pretty/24.js#L1357) |
| `"POST"` | `"/record/search_getInRecycleResult"` | 24 / 6724 | [代码](../analysis/pretty/24.js#L1370) |
| `"POST"` | `e` | 27 / 10472 | [代码](../analysis/pretty/27.js#L533) |
| `(e.method &#124;&#124; "GET").toUpperCase()` | `e.url` | 32 / 6531 | [代码](../analysis/pretty/32.js#L4120) |
| `"POST"` | `"/service/search/v2"` | 6 / 3667 | [代码](../analysis/pretty/6.js#L218) |
| `"POST"` | `"/tag/getAllTagNames"` | 6 / 3667 | [代码](../analysis/pretty/6.js#L226) |
| `"POST"` | `"/note/getExistsType"` | 6 / 3667 | [代码](../analysis/pretty/6.js#L232) |
| `e.method` | `e.router` | app-connection / 5501 | [代码](../analysis/pretty/app-connection.js#L17523) |
| `"POST"` | `"/note/getAllNote/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38525) |
| `"POST"` | `"/note/getNoteForNoteBook"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38533) |
| `"POST"` | `"/note/getAllNote/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38542) |
| `"POST"` | `"/note/getContent/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38550) |
| `"POST"` | `"/note/getIncludeItem/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38560) |
| `"POST"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38571) |
| `"POST"` | `"/note/expunge"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38594) |
| `"POST"` | `"/note/update/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38608) |
| `"POST"` | `"/service/getRecentlyDeleted/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38617) |
| `"POST"` | `"/service/recover"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38629) |
| `"POST"` | `"/resource/getNoteResType"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38636) |
| `"post"` | `"/account/getConfig"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38646) |
| `"post"` | `"/account/saveConfig"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38652) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38658) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38665) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38672) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38679) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38686) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38693) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38703) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38713) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38723) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38730) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38737) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38744) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38751) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38758) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38765) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38772) |
| `"POST"` | `"/config/ai/getCmdConf"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38779) |
| `"POST"` | `"/config/ai/getCmdConfVersion"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38785) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38791) |
| `"post"` | `"/resource/get"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38797) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38803) |
| `"post"` | `"/config/getByKey"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38809) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38815) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38821) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38827) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38835) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38843) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38851) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38857) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38865) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38873) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38881) |
| `"POST"` | `"/history/note/list/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38889) |
| `"POST"` | `"/history/note/detail/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38896) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38905) |
| `"POST"` | `"/history/note/report/v2"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38911) |
| `"POST"` | `"/history/note/delete"` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38918) |
| `"POST"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38924) |
| `"post"` | `""` | app-modules-note / 79 | [代码](../analysis/pretty/app-modules-note.js#L38930) |
| `"POST"` | `"/sync/getSyncState"` | app-modules-note / 125 | [代码](../analysis/pretty/app-modules-note.js#L1038) |
| `"POST"` | `"/service/getRecentlyDeleted/v2"` | app-modules-note / 125 | [代码](../analysis/pretty/app-modules-note.js#L1045) |
| `"POST"` | `"/device/report"` | app-modules-note / 125 | [代码](../analysis/pretty/app-modules-note.js#L1057) |
| `"POST"` | `"/device/getList"` | app-modules-note / 125 | [代码](../analysis/pretty/app-modules-note.js#L1069) |
| `"POST"` | `""` | app-modules-note / 125 | [代码](../analysis/pretty/app-modules-note.js#L1077) |
| `"post"` | `A("preUpload")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16557) |
| `"post"` | `A("getStsToken")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16575) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/upload.do"` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16584) |
| `"POST"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/thumbUpload.do"` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16604) |
| `"post"` | `String(e.domain).replace(/http?s:/, location.protocol) + "/api/file/webdisk/rangeUpload.do"` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16623) |
| `"post"` | `A("confirmUpload")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16644) |
| `"post"` | `A("confirmRangeUpload")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16655) |
| `"post"` | `A("fileDomain")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16663) |
| `"post"` | `A("deferStsToken")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16671) |
| `"post"` | `A("abortUpload")` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16679) |
| `"get"` | ``${t ? String(e.domain) : String(e.domain).replace(/http?s:/, location.protocol)}/api/file/webdisk/download.do${e.asMedia ? "?asMedia=true&_t=" + o : "?_t=" + o}`` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16692) |
| `process.env.IS_WEB ? "post" : "get"` | `process.env.IS_WEB ? "/note-api/fileUrl/download" : e.url` | app-modules-note / 419 | [代码](../analysis/pretty/app-modules-note.js#L16710) |
| `"POST"` | `"/file/addFileInfo"` | app-modules-note / 548 | [代码](../analysis/pretty/app-modules-note.js#L32281) |
| `"POST"` | `"/file/getFileInfoByIds"` | app-modules-note / 548 | [代码](../analysis/pretty/app-modules-note.js#L32291) |
| `"POST"` | `"/file/getResourceInfoByIds"` | app-modules-note / 548 | [代码](../analysis/pretty/app-modules-note.js#L32301) |
| `"POST"` | `"/file/isUploadCloud"` | app-modules-note / 548 | [代码](../analysis/pretty/app-modules-note.js#L32311) |
| `"POST"` | `"/sync/getSyncState"` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38152) |
| `"POST"` | `"/sync/getSyncChunk/v2"` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38165) |
| `"post"` | `A("getTotalNum")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38187) |
| `"post"` | `A("getList")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38196) |
| `"post"` | `A("create")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38206) |
| `"post"` | `A("get")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38215) |
| `"post"` | `A("update")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38224) |
| `"post"` | `A("expunge")` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38233) |
| `"POST"` | `"/service/recover"` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38241) |
| `"post"` | `t = "getEditUrl", "officeOnlineInner/" + t` | app-modules-note / 763 | [代码](../analysis/pretty/app-modules-note.js#L38254) |
| `"get"` | `e` | app-modules-note / 931 | [代码](../analysis/pretty/app-modules-note.js#L45804) |
| `"POST"` | `"/noteBook/getTreeList"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L394) |
| `"POST"` | `"/statistics/note"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L403) |
| `"POST"` | `"/noteBook/getList"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L413) |
| `"POST"` | `"/noteBook/statisticEncryptAndNewFormat"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L430) |
| `"POST"` | `"/noteBook/create"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L437) |
| `"POST"` | `"/noteBook/update"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L447) |
| `"POST"` | `"/noteBook/expungeNoCascade"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L462) |
| `"POST"` | `"/noteBook/expungeCascade"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L470) |
| `"POST"` | `"/noteBook/checkExistByName"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L482) |
| `"POST"` | `"password/encrypt/note/check"` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L489) |
| `"POST"` | `""` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L496) |
| `"POST"` | `""` | app-modules-note / 1010 | [代码](../analysis/pretty/app-modules-note.js#L502) |
| `"POST"` | `"/migrate/submit"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2430) |
| `"POST"` | `"/sync/createSync/v2"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2435) |
| `"POST"` | `"/sync/updateSync/v2"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2441) |
| `"POST"` | `"/sync/deleteSync"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2447) |
| `"POST"` | `"/sync/combineSync/v2"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2452) |
| `"POST"` | `"/sync/getSyncChunk/v2"` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2458) |
| `"post"` | `"/note-api" + i` | app-modules-note / 1685 | [代码](../analysis/pretty/app-modules-note.js#L2466) |
| `"POST"` | `"/service/search/v2"` | app-modules-note / 3667 | [代码](../analysis/pretty/app-modules-note.js#L11872) |
| `"POST"` | `"/tag/getAllTagNames"` | app-modules-note / 3667 | [代码](../analysis/pretty/app-modules-note.js#L11880) |
| `"POST"` | `"/note/getExistsType"` | app-modules-note / 3667 | [代码](../analysis/pretty/app-modules-note.js#L11886) |
| `"POST"` | `"/sync/getSyncState"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17659) |
| `"post"` | `"/sync/getSyncChunk/v2"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17668) |
| `"post"` | `"todoList/getList/v2"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17675) |
| `"post"` | `"todoList/get/v2"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17687) |
| `"post"` | `"todoList/create/v2"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17699) |
| `"post"` | `"todoList/update/v2"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17711) |
| `"post"` | `"todoList/expunge"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17721) |
| `"post"` | `"todoList/resetOrder"` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17730) |
| `"POST"` | `""` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17738) |
| `"POST"` | `""` | app-modules-note / 4594 | [代码](../analysis/pretty/app-modules-note.js#L17747) |
| `"POST"` | `"/service/shared-link/create"` | app-modules-note / 4810 | [代码](../analysis/pretty/app-modules-note.js#L23749) |
| `"POST"` | `"/service/shared-link/status"` | app-modules-note / 4810 | [代码](../analysis/pretty/app-modules-note.js#L23755) |
| `"POST"` | `"/service/shared-link/detail"` | app-modules-note / 4810 | [代码](../analysis/pretty/app-modules-note.js#L23761) |
| `"POST"` | `e` | app-modules-note / 5656 | [代码](../analysis/pretty/app-modules-note.js#L34757) |
| `"POST"` | `e` | app-modules-note / 5657 | [代码](../analysis/pretty/app-modules-note.js#L35422) |
| `"GET"` | `e` | app-modules-note / 5657 | [代码](../analysis/pretty/app-modules-note.js#L35559) |
| `"post"` | `"queryCalendars"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43778) |
| `"post"` | `"queryEvents"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43789) |
| `"post"` | `"queryEventsByIds"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43800) |
| `"post"` | `"queryVisibleCalendars"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43816) |
| `"post"` | `"queryCalendarByAccountName"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43829) |
| `"post"` | `"insertCalendars"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43843) |
| `"post"` | `"updateCalendars"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43865) |
| `"post"` | `"setCalendarVisible"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43888) |
| `"post"` | `"deleteCalendars"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43914) |
| `"post"` | `"queryColors"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43939) |
| `"post"` | `"/vcalendar/suite/web/calendar/pulldata"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43947) |
| `"post"` | `"queryEventsByTitle"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43956) |
| `"post"` | `"getReportingTime"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43972) |
| `"post"` | `"queryReportingTimeByOpendId"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L43989) |
| `"post"` | `"updateReportingTime"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44015) |
| `"post"` | `"queryEventsByIdAndTime"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44032) |
| `"post"` | `"getEventsByCalendarId"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44044) |
| `"post"` | `"queryEventsByTimeRange"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44059) |
| `"post"` | `"queryVivoDaysMatter"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44071) |
| `"post"` | `"getEventDetail"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44143) |
| `"post"` | `"insertEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44156) |
| `"post"` | `"createAllEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44187) |
| `"post"` | `"createNoteEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44218) |
| `"post"` | `"updateEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44242) |
| `"post"` | `"updateChildEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44265) |
| `"post"` | `"updateNoteEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44296) |
| `"post"` | `"deleteEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44319) |
| `"post"` | `"deleteChildEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44342) |
| `"post"` | `"deleteNoteEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44366) |
| `"post"` | `"queryNoteEvent"` | app-modules / 99 | [代码](../analysis/pretty/app-modules.js#L44391) |
| `"post"` | `"/pc_file_manager/channel"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L137) |
| `"post"` | `"/pc_file_manager/channel"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L139) |
| `"post"` | `"/pc_file_manager/channel"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L141) |
| `"get"` | `"/pc_back/album_collect_info"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L142) |
| `"post"` | `"/pc_back/album_collect_detail"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L143) |
| `"get"` | `"/pc_file_manager/tab_count"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L149) |
| `"get"` | `"/pc_file_manager/tab_count"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L153) |
| `"post"` | `"/pc_file_manager/delete_info"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L171) |
| `"get"` | `"/pc_file_manager/global_search"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L175) |
| `"post"` | `"/pc_global/search"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L182) |
| `"post"` | `"/pc_global/search"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L190) |
| `"post"` | `"/pc_global/search"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L197) |
| `"post"` | `"/pc_global/search"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L225) |
| `"get"` | `"/fileManagerSwitch"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L247) |
| `"get"` | `"/fileManagerStorage"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L269) |
| `"post"` | `"/pc_file_manager/file_rename"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L272) |
| `"get"` | `"/pc_file_manager/trans_open_file"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L273) |
| `"get"` | `"/pc_file_manager/clear_recycle"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L276) |
| `"get"` | `"RE_CONNECT_ALBUM:"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L295) |
| `"post"` | `"/mobile_flow"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L305) |
| `"get"` | `"FILE_OPEN_NEAR_DEL:"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L317) |
| `"post"` | `"/pc_file_manager/recycle_operation"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L325) |
| `"get"` | `"/pc_file_manager/create_directory"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L621) |
| `"get"` | `"/pc_file_manager/query_directory_size"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L624) |
| `"post"` | `"/pc_file_manager/file_copy"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L638) |
| `"post"` | `"/pc_file_manager/file_check"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L640) |
| `"post"` | `"/pc_file_manager/get_path"` | app-modules / 102 | [代码](../analysis/pretty/app-modules.js#L642) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1380) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1387) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1394) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1401) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1408) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1415) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1422) |
| `"post"` | `"/api/suite/web/meta/list.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1429) |
| `"post"` | `"/api/suite/web/meta/getStsToken.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1436) |
| `"post"` | `"/api/suite/web/storage/storageDetailNew.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1440) |
| `"get"` | `"/api/file/download.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1445) |
| `"post"` | `"/api/suite/web/meta/preUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1449) |
| `"post"` | `"ffd"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1456) |
| `"post"` | `"/api/suite/web/folder/folderList.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1462) |
| `"post"` | `"/api/suite/web/folder/exploreFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1469) |
| `"get"` | ``/api/suite/${process.env.IS_WEB ? "web" : "pc"}/folder/getAggRuleConfig.do`` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1476) |
| `"post"` | `"/api/suite/web/folder/compensateFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1483) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1490) |
| `"post"` | `"/api/suite/web/folder/createFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1497) |
| `"post"` | `"/api/suite/web/meta/storageUsage.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1504) |
| `"post"` | `"/api/suite/pc/folder/removeFolders.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1508) |
| `"post"` | `"api/suite/web/folder/renameFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1515) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1522) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1529) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1536) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1543) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1550) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1557) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1564) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1571) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1578) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1585) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1592) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1599) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1606) |
| `"get"` | `"api/file/download.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1615) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1623) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1630) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1637) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1644) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1651) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1658) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1665) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1672) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1679) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1686) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1693) |
| `"post"` | `"api/suite/web/meta/removeMetas.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1700) |
| `"post"` | `"api/suite/web/meta/copyMetas.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1707) |
| `"post"` | `"api/suite/web/meta/moveMetas.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1716) |
| `"post"` | `"api/suite/web/meta/progress.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1723) |
| `"post"` | `"/api/file/web/upload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1732) |
| `"post"` | `"/api/file/web/rangeUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1744) |
| `"post"` | `"/api/file/web/thumbUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1756) |
| `"post"` | `"api/suite/web/meta/confirmUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1766) |
| `"post"` | `"api/suite/web/meta/removePermanent.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1774) |
| `"post"` | `"api/suite/web/meta/restoreFromTrash.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1781) |
| `"post"` | `"api/suite/web/meta/restoreMetas.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1788) |
| `"post"` | `"api/suite/web/meta/moveToTrash.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1795) |
| `"post"` | `"api/suite/pc/meta/confirmRangeUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1802) |
| `"post"` | `"api/suite/web/meta/abortUpload.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1811) |
| `"post"` | `"api/suite/web/folder/checkFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1816) |
| `"post"` | `"api/suite/web/meta/count.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1822) |
| `"post"` | `"api/suite/web/meta/changes.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1835) |
| `"post"` | `"/api/suite/web/folder/callBackFolder.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1840) |
| `"post"` | `"api/suite/web/folder/latestCacheVersion.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1845) |
| `"post"` | `"api/suite/web/folder/folderChanges.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1850) |
| `"post"` | `"api/suite/web/system/getCfg.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1855) |
| `"post"` | `"api/suite/web/meta/moveMetasReplaceAll.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1861) |
| `"post"` | `"api/suite/web/meta/moveMetasSaveAll.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1868) |
| `"post"` | `"api/suite/pc/meta/dragMeta.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1875) |
| `"post"` | `"api/suite/web/meta/cleanRecycle.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1882) |
| `"post"` | `"api/suite/web/meta/groups.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1886) |
| `"post"` | `"api/suite/web/meta/groups.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1898) |
| `"post"` | `"/api/suite/web/meta/groupSplit.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1909) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1922) |
| `"post"` | ``/api/suite/${t ? "web" : "pc"}/system/geocoding.do`` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1929) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1934) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1941) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1948) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1955) |
| `"post"` | ``/api/suite/${e}/folder/index.do`` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1964) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1969) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1975) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1984) |
| `"post"` | `"api/suite/web/meta/checkRepeat.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1993) |
| `"post"` | `"api/suite/pc/storage/detail.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L1997) |
| `"post"` | `"api/suite/web/storage/detail.do"` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L2001) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L2005) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L2012) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L2018) |
| `"post"` | `""` | app-modules / 112 | [代码](../analysis/pretty/app-modules.js#L2024) |
| `"POST"` | `"todo/web/sync/getSyncState/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17871) |
| `"post"` | `"todo/web/sync/getSyncChunk/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17881) |
| `"post"` | `"todo/web/todoList/getList/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17888) |
| `"post"` | `"todo/web/todoList/getChildList/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17900) |
| `"post"` | `"todo/web/todoList/get/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17912) |
| `"post"` | `"todo/web/todoList/create/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17924) |
| `"post"` | `"todo/web/todoList/update/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17936) |
| `"post"` | `"todo/web/todoList/expunge/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17946) |
| `"post"` | `"todo/web/todoList/resetOrder/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17956) |
| `"POST"` | `""` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17965) |
| `"POST"` | `""` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17974) |
| `"POST"` | `"todo/web/todoCategory/getList/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17981) |
| `"POST"` | `"todo/web/todoCategory/create/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17989) |
| `"POST"` | `"todo/web/todoCategory/update/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L17997) |
| `"POST"` | `"todo/web/todoCategory/expunge/v2"` | app-modules / 451 | [代码](../analysis/pretty/app-modules.js#L18005) |
| `t` | `e` | app-modules / 3185 | [代码](../analysis/pretty/app-modules.js#L10803) |
| `"POST"` | `"/suite/web/record/pullmapping"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16097) |
| `"POST"` | `"/suite/pc/record/pulldata"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16111) |
| `"POST"` | `"/suite/web/record/pushdata"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16126) |
| `"POST"` | `"/suite/web/record/totrash"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16142) |
| `"POST"` | `"/suite/web/record/restore"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16156) |
| `"POST"` | `"/suite/web/record/remove"` | app-modules / 4068 | [代码](../analysis/pretty/app-modules.js#L16170) |
| `"post"` | `"setFrequency"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33590) |
| `"post"` | `"updateRefreshToken"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33606) |
| `"post"` | `"insertAccount"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33619) |
| `"post"` | `"deleteAccount"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33634) |
| `"post"` | `"isLogin"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33648) |
| `"post"` | `"getAccountList"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33660) |
| `"post"` | `"getAccountBySeriesMasterId"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33673) |
| `"post"` | `"getCalendarList"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33685) |
| `"post"` | `"getCalendarList"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33699) |
| `"post"` | `"getEventListByCalendar"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33714) |
| `"post"` | `"countEventByAccount"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33726) |
| `"post"` | `"updateCalendar"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33744) |
| `"post"` | `"updateCalendar"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33758) |
| `"post"` | `"updateEvent"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33777) |
| `"post"` | `"deleteEvent"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33790) |
| `"post"` | `"updateEvent"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33806) |
| `"post"` | `"updateEvent"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33831) |
| `"post"` | `"addEvent"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33843) |
| `"post"` | `"getEventList"` | app-modules / 5518 | [代码](../analysis/pretty/app-modules.js#L33863) |
| `"get"` | `"/account/getUserCookie"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28934) |
| `"post"` | `"/account/getUserInfo"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28946) |
| `"post"` | `""` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28950) |
| `"post"` | `""` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28958) |
| `"post"` | `""` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28964) |
| `"post"` | `""` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28970) |
| `"post"` | `"/account/logOut"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28985) |
| `"post"` | `"/account/getUserInfo"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28993) |
| `"post"` | `"/account/getConfig"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L28999) |
| `"post"` | `"/account/saveConfig"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29005) |
| `"post"` | `"/account/initAppConfig"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29011) |
| `"post"` | `"/account/getTokenByVivoTokenAndOpenid"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29017) |
| `"get"` | `"/dict/single"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29027) |
| `"post"` | `"/feedback/upload/pic"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29037) |
| `"post"` | `"/feedback/upload/log"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29050) |
| `"post"` | `"/feedback/add/new"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29064) |
| `"POST"` | `"/account/getHomeFunSort"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29070) |
| `"POST"` | `"/account/saveHomeFunSort"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29076) |
| `"post"` | `"/feedback/questionnaire/detail"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29084) |
| `"post"` | `"/feedback/list"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29090) |
| `"post"` | `"/feedback/reply/list"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29096) |
| `"post"` | `"/feedback/update/count"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29102) |
| `"post"` | `"/feedback/update/solve"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29108) |
| `"post"` | `"/feedback/delete/all"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29114) |
| `"post"` | `"/feedback/delete/one"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29120) |
| `"post"` | `"/feedback/last/phone"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29126) |
| `"post"` | `"/feedback/upload/phone"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29132) |
| `"post"` | `e &#124;&#124; "/config/all"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29138) |
| `"get"` | `"/feedback/get/type"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29144) |
| `"get"` | `"/inner/ip"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29147) |
| `"post"` | `"/visit/record"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29150) |
| `"post"` | `"/api/suite/status/listSyncDevices.do"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29168) |
| `"post"` | `"/api/suite/status/listActiveUnsyncOnlineDevices.do"` | child-window / 72 | [代码](../analysis/pretty/child-window.js#L29175) |
| `"POST"` | `e` | child-window / 209 | [代码](../analysis/pretty/child-window.js#L7502) |
| `"DELETE"` | `e` | child-window / 209 | [代码](../analysis/pretty/child-window.js#L7513) |
| `"POST"` | `"/recorder-api/suite/web/record/pullmapping"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15642) |
| `"POST"` | `"/recorder-api/suite/web/record/pulldata"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15650) |
| `"POST"` | `"/recorder-api/suite/web/record/pushdata"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15659) |
| `"POST"` | `"/recorder-api/suite/web/record/totrash"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15669) |
| `"POST"` | `"/recorder-api/suite/web/record/restore"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15678) |
| `"POST"` | `"/recorder-api/suite/web/record/remove"` | child-window / 338 | [代码](../analysis/pretty/child-window.js#L15687) |
| `t.method` | `i` | child-window / 3222 | [代码](../analysis/pretty/child-window.js#L13313) |
| `"POST"` | `"vtalk_createRecord"` | child-window / 3225 | [代码](../analysis/pretty/child-window.js#L13434) |
| `"POST"` | `"vtalk_updateRecord"` | child-window / 3225 | [代码](../analysis/pretty/child-window.js#L13447) |
| `o` | `o` | main / 55 | [代码](../analysis/pretty/main.js#L11537) |
| `e` | `t` | main / 55 | [代码](../analysis/pretty/main.js#L12007) |
| `e` | `n` | main / 55 | [代码](../analysis/pretty/main.js#L12016) |
| `t.method` | `n` | main / 113 | [代码](../analysis/pretty/main.js#L17416) |
| `e.method` | `e.url` | main / 359 | [代码](../analysis/pretty/main.js#L39464) |
| `"post"` | `"/api/v1/file/initDownload"` | main / 727 | [代码](../analysis/pretty/main.js#L64442) |
| `"post"` | `"/api/v1/download/complete"` | main / 727 | [代码](../analysis/pretty/main.js#L64448) |
| `"post"` | `"/api/v1/upload/record"` | main / 727 | [代码](../analysis/pretty/main.js#L64454) |
| `"delete"` | `"/api/v1/upload/record/delete"` | main / 727 | [代码](../analysis/pretty/main.js#L64460) |
| `"post"` | `"/api/v1/file/initUpload"` | main / 727 | [代码](../analysis/pretty/main.js#L64466) |
| `"GET"` | `e` | main / 737 | [代码](../analysis/pretty/main.js#L66481) |
| `"POST"` | `n` | main / 787 | [代码](../analysis/pretty/main.js#L71859) |
| `o` | `m` | main / 806 | [代码](../analysis/pretty/main.js#L73898) |
| `"get"` | `e` | main / 1499 | [代码](../analysis/pretty/main.js#L112233) |
| `"POST"` | `e` | main / 1548 | [代码](../analysis/pretty/main.js#L118215) |
| `"POST"` | `e` | main / 1551 | [代码](../analysis/pretty/main.js#L118557) |
| `"GET"` | `e` | main / 1742 | [代码](../analysis/pretty/main.js#L133456) |
| `"get"` | `"/account/getUserCookie"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25360) |
| `"post"` | `"/account/getUserInfo"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25372) |
| `"post"` | `""` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25376) |
| `"post"` | `""` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25384) |
| `"post"` | `""` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25390) |
| `"post"` | `""` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25396) |
| `"post"` | `"/account/logOut"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25411) |
| `"post"` | `"/account/getUserInfo"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25419) |
| `"post"` | `"/account/getConfig"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25425) |
| `"post"` | `"/account/saveConfig"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25431) |
| `"post"` | `"/account/initAppConfig"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25437) |
| `"post"` | `"/account/getTokenByVivoTokenAndOpenid"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25443) |
| `"get"` | `"/dict/single"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25453) |
| `"post"` | `"/feedback/upload/pic"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25463) |
| `"post"` | `"/feedback/upload/log"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25476) |
| `"post"` | `"/feedback/add/new"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25490) |
| `"POST"` | `"/account/getHomeFunSort"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25496) |
| `"POST"` | `"/account/saveHomeFunSort"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25502) |
| `"post"` | `"/feedback/questionnaire/detail"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25510) |
| `"post"` | `"/feedback/list"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25516) |
| `"post"` | `"/feedback/reply/list"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25522) |
| `"post"` | `"/feedback/update/count"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25528) |
| `"post"` | `"/feedback/update/solve"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25534) |
| `"post"` | `"/feedback/delete/all"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25540) |
| `"post"` | `"/feedback/delete/one"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25546) |
| `"post"` | `"/feedback/last/phone"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25552) |
| `"post"` | `"/feedback/upload/phone"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25558) |
| `"post"` | `e &#124;&#124; "/config/all"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25564) |
| `"get"` | `"/feedback/get/type"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25570) |
| `"get"` | `"/inner/ip"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25573) |
| `"post"` | `"/visit/record"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25576) |
| `"post"` | `"/api/suite/status/listSyncDevices.do"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25594) |
| `"post"` | `"/api/suite/status/listActiveUnsyncOnlineDevices.do"` | module-share-preview / 72 | [代码](../analysis/pretty/module-share-preview.js#L25601) |
| `"POST"` | `e` | module-share-preview / 209 | [代码](../analysis/pretty/module-share-preview.js#L5629) |
| `"DELETE"` | `e` | module-share-preview / 209 | [代码](../analysis/pretty/module-share-preview.js#L5640) |
| `"POST"` | `"/recorder-api/suite/web/record/pullmapping"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13466) |
| `"POST"` | `"/recorder-api/suite/web/record/pulldata"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13474) |
| `"POST"` | `"/recorder-api/suite/web/record/pushdata"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13483) |
| `"POST"` | `"/recorder-api/suite/web/record/totrash"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13493) |
| `"POST"` | `"/recorder-api/suite/web/record/restore"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13502) |
| `"POST"` | `"/recorder-api/suite/web/record/remove"` | module-share-preview / 338 | [代码](../analysis/pretty/module-share-preview.js#L13511) |
| `t.method` | `i` | module-share-preview / 3222 | [代码](../analysis/pretty/module-share-preview.js#L11156) |
| `"POST"` | `"vtalk_createRecord"` | module-share-preview / 3225 | [代码](../analysis/pretty/module-share-preview.js#L11277) |
| `"POST"` | `"vtalk_updateRecord"` | module-share-preview / 3225 | [代码](../analysis/pretty/module-share-preview.js#L11290) |
| `"get"` | `"/account/getUserCookie"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2923) |
| `"post"` | `"/account/getUserInfo"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2935) |
| `"post"` | `""` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2939) |
| `"post"` | `""` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2947) |
| `"post"` | `""` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2953) |
| `"post"` | `""` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2959) |
| `"post"` | `"/account/logOut"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2974) |
| `"post"` | `"/account/getUserInfo"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2982) |
| `"post"` | `"/account/getConfig"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2988) |
| `"post"` | `"/account/saveConfig"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L2994) |
| `"post"` | `"/account/initAppConfig"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3000) |
| `"post"` | `"/account/getTokenByVivoTokenAndOpenid"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3006) |
| `"get"` | `"/dict/single"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3016) |
| `"post"` | `"/feedback/upload/pic"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3026) |
| `"post"` | `"/feedback/upload/log"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3039) |
| `"post"` | `"/feedback/add/new"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3053) |
| `"POST"` | `"/account/getHomeFunSort"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3059) |
| `"POST"` | `"/account/saveHomeFunSort"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3065) |
| `"post"` | `"/feedback/questionnaire/detail"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3073) |
| `"post"` | `"/feedback/list"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3079) |
| `"post"` | `"/feedback/reply/list"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3085) |
| `"post"` | `"/feedback/update/count"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3091) |
| `"post"` | `"/feedback/update/solve"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3097) |
| `"post"` | `"/feedback/delete/all"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3103) |
| `"post"` | `"/feedback/delete/one"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3109) |
| `"post"` | `"/feedback/last/phone"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3115) |
| `"post"` | `"/feedback/upload/phone"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3121) |
| `"post"` | `l &#124;&#124; "/config/all"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3127) |
| `"get"` | `"/feedback/get/type"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3133) |
| `"get"` | `"/inner/ip"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3136) |
| `"post"` | `"/visit/record"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3139) |
| `"post"` | `"/api/suite/status/listSyncDevices.do"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3157) |
| `"post"` | `"/api/suite/status/listActiveUnsyncOnlineDevices.do"` | renderer / 72 | [代码](../analysis/pretty/renderer.js#L3164) |
| `"POST"` | `l` | renderer / 209 | [代码](../analysis/pretty/renderer.js#L8895) |
| `"DELETE"` | `l` | renderer / 209 | [代码](../analysis/pretty/renderer.js#L8906) |
| `"POST"` | `"/recorder-api/suite/web/record/pullmapping"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15194) |
| `"POST"` | `"/recorder-api/suite/web/record/pulldata"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15202) |
| `"POST"` | `"/recorder-api/suite/web/record/pushdata"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15211) |
| `"POST"` | `"/recorder-api/suite/web/record/totrash"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15221) |
| `"POST"` | `"/recorder-api/suite/web/record/restore"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15230) |
| `"POST"` | `"/recorder-api/suite/web/record/remove"` | renderer / 338 | [代码](../analysis/pretty/renderer.js#L15239) |
| `e.method` | `a` | renderer / 3222 | [代码](../analysis/pretty/renderer.js#L44882) |
| `"POST"` | `"vtalk_createRecord"` | renderer / 3225 | [代码](../analysis/pretty/renderer.js#L45002) |
| `"POST"` | `"vtalk_updateRecord"` | renderer / 3225 | [代码](../analysis/pretty/renderer.js#L45015) |
| `"post"` | `"/api/v1/file/initDownload"` | renderer / 3823 | [代码](../analysis/pretty/renderer.js#L57284) |
| `"post"` | `"/api/v1/download/complete"` | renderer / 3823 | [代码](../analysis/pretty/renderer.js#L57290) |
| `"post"` | `"/api/v1/upload/record"` | renderer / 3823 | [代码](../analysis/pretty/renderer.js#L57296) |
| `"delete"` | `"/api/v1/upload/record/delete"` | renderer / 3823 | [代码](../analysis/pretty/renderer.js#L57302) |
| `"post"` | `"/api/v1/file/initUpload"` | renderer / 3823 | [代码](../analysis/pretty/renderer.js#L57308) |
| `l.method` | `l.url` | renderer / 3824 | [代码](../analysis/pretty/renderer.js#L57404) |
| `function(l) {             return "function" == typeof l;         }` | `function(l) {             return "string" == typeof l && !!l.match(A.url);         }` | renderer / 5916 | [代码](../analysis/pretty/renderer.js#L60221) |
| `function(l, e, a, u, v) {             var b = [];             if (l.required &#124;&#124; !l.required && u.hasOwnProperty(l.field)) {                 if (n(e) && !l.required) retur` | `f` | renderer / 5916 | [代码](../analysis/pretty/renderer.js#L60295) |
| `"%s is not a %s (function)"` | `"%s is not a valid %s"` | renderer / 5916 | [代码](../analysis/pretty/renderer.js#L60422) |
| `"POST"` | `"/account/getHomeFunSort"` | renderer / 6116 | [代码](../analysis/pretty/renderer.js#L62516) |
| `"POST"` | `"/account/saveHomeFunSort"` | renderer / 6116 | [代码](../analysis/pretty/renderer.js#L62522) |
| `"POST"` | `tt.origins.configUrl + c.paths.configPath` | verdor1 / 1704 | [代码](../analysis/pretty/verdor1.js#L5817) |
| `i` | `i` | verdor3 / 37 | [代码](../analysis/pretty/verdor3.js#L2005) |
| `e` | `t` | verdor3 / 37 | [代码](../analysis/pretty/verdor3.js#L2476) |
| `e` | `r` | verdor3 / 37 | [代码](../analysis/pretty/verdor3.js#L2485) |

## 仅路径与地址字符串

以下字面值未必属于路由：也可能是资源地址、日志、未启用分支或第三方库示例。不能仅据字符串确定鉴权、请求方法或返回格式。

| 字面值 | 证据 |
|---|---|
| `wss://copilot-api-pre.vivo.com.cn` | [代码](../analysis/pretty/125.js#L205) |
| `wss://quantumkit-pre.vivo.com.cn/jovi-record-api` | [代码](../analysis/pretty/125.js#L209) |
| `wss://asia-copilot-api-pre.vivoglobal.com` | [代码](../analysis/pretty/125.js#L1831) |
| `https://ai-general-ocr-asia-prd.vivoglobal.com` | [代码](../analysis/pretty/125.js#L7794) |
| `https://asia-copilot-api-pre.vivoglobal.com` | [代码](../analysis/pretty/125.js#L7798) |
| `https://quantumkit-pre.vivo.com.cn/ocr-api` | [代码](../analysis/pretty/125.js#L7802) |
| `https://` | [代码](../analysis/pretty/125.js#L7849) |
| `http://` | [代码](../analysis/pretty/125.js#L7849) |
| `/api/file/webdisk/upload.do` | [代码](../analysis/pretty/125.js#L17879) |
| `/api/file/webdisk/thumbUpload.do` | [代码](../analysis/pretty/125.js#L17898) |
| `/api/file/webdisk/rangeUpload.do` | [代码](../analysis/pretty/125.js#L17918) |
| `https://asr-test-v2.vivo.com.cn` | [代码](../analysis/pretty/125.js#L19225) |
| `https://asia-asr-pre-v2.vivoglobal.com` | [代码](../analysis/pretty/125.js#L19225) |
| `https://quantumkit-pre.vivo.com.cn/ws-record-api` | [代码](../analysis/pretty/125.js#L19229) |
| `https://quantumkit-pre.vivo.com.cn/recorder-ws-api` | [代码](../analysis/pretty/125.js#L19229) |
| `https://quantumkit-pre.vivo.com.cn/recorder-ws-api/` | [代码](../analysis/pretty/125.js#L19241) |
| `http://localhost` | [代码](../analysis/pretty/125.js#L19285) |
| `https://magic-cube.vivo.com.cn` | [代码](../analysis/pretty/126.js#L852) |
| `https://pc.vivo.com/#/detail/origin-note` | [代码](../analysis/pretty/126.js#L13221) |
| `https://ai-static.vivo.com.cn/static-ai/common/drag-note4.e76e2c21be8660b1b4efd052eaa530e5.png` | [代码](../analysis/pretty/126.js#L18889) |
| `https://yun.vivo.com.cn/upgrade/index?source=suite` | [代码](../analysis/pretty/126.js#L19141) |
| `http://www.w3.org/2000/svg` | [代码](../analysis/pretty/127.js#L958) |
| `http://www.w3.org/1999/xlink` | [代码](../analysis/pretty/127.js#L959) |
| `https://vivo.cn/2J70KF` | [代码](../analysis/pretty/127.js#L13213) |
| `/api/v1/file/initDownload` | [代码](../analysis/pretty/128.js#L3504) |
| `/api/v1/file/download` | [代码](../analysis/pretty/128.js#L3507) |
| `/api/v1/download/complete` | [代码](../analysis/pretty/128.js#L3510) |
| `/api/v1/upload/record` | [代码](../analysis/pretty/128.js#L3516) |
| `/api/v1/upload/record/delete` | [代码](../analysis/pretty/128.js#L3522) |
| `/api/v1/file/initUpload` | [代码](../analysis/pretty/128.js#L3528) |
| `https://vivo.systeccloud.com/wc/join/` | [代码](../analysis/pretty/128.js#L15050) |
| `https://cloudalbum-cn09.vivo.com.cn` | [代码](../analysis/pretty/136.js#L4207) |
| `https://www.dsadasd21341221321.com` | [代码](../analysis/pretty/163.js#L474) |
| `/api/suite/web/meta/getStsToken.do` | [代码](../analysis/pretty/165.js#L13) |
| `/api/suite/web/meta/fileDomain.do` | [代码](../analysis/pretty/165.js#L27) |
| `http://127.0.0.1:8080/tinymce/` | [代码](../analysis/pretty/165.js#L282) |
| `/api/file/download.do?stsToken=` | [代码](../analysis/pretty/2.js#L515) |
| `/upload/install-apk` | [代码](../analysis/pretty/app-connection.js#L4955) |
| `/download/down_files` | [代码](../analysis/pretty/app-connection.js#L4956) |
| `wss://x-trans.vivo.com/trans/v2/ws` | [代码](../analysis/pretty/app-connection.js#L5005) |
| `wss://x-trans-test.vivo.com/trans/v2/ws` | [代码](../analysis/pretty/app-connection.js#L5006) |
| `wss://x-trans-pre.vivo.com/trans/v2/ws` | [代码](../analysis/pretty/app-connection.js#L5006) |
| `wss://x-trans.vivo.com.cn/trans/v2/ws` | [代码](../analysis/pretty/app-connection.js#L6227) |
| `https://x-trans.vivo.com/check.do` | [代码](../analysis/pretty/app-connection.js#L10892) |
| `wss://` | [代码](../analysis/pretty/app-connection.js#L14128) |
| `ws://` | [代码](../analysis/pretty/app-connection.js#L14128) |
| `/api/v1/file/upload` | [代码](../analysis/pretty/app-connection.js#L16853) |
| `/api/v1/file/streamUpload` | [代码](../analysis/pretty/app-connection.js#L16854) |
| `/api/v1/upload/complete` | [代码](../analysis/pretty/app-connection.js#L16854) |
| `/api/v1/upload/cancel` | [代码](../analysis/pretty/app-connection.js#L16855) |
| `http://cross-file-bridge-test-845322.project-521724.svc.cluster.local:8080` | [代码](../analysis/pretty/app-connection.js#L17516) |
| `https://x-trans.vivo.com/` | [代码](../analysis/pretty/app-connection.js#L18599) |
| `http://127.0.0.1:` | [代码](../analysis/pretty/app-connection.js#L20303) |
| `http://127.0.0.1:9197/` | [代码](../analysis/pretty/app-connection.js#L22454) |
| `https://pc.vivo.com/#/` | [代码](../analysis/pretty/app-connection.js#L22456) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%AF%AD%E7%AF%87%E8%A7%84%E6%95%B4.png` | [代码](../analysis/pretty/app-modules-note.js#L14177) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E7%BB%AD%E5%86%99.png` | [代码](../analysis/pretty/app-modules-note.js#L14194) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%B6%A6%E8%89%B2%201.png` | [代码](../analysis/pretty/app-modules-note.js#L14205) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E7%AE%80%E5%8C%96%E8%A1%A8%E8%BE%BE.png` | [代码](../analysis/pretty/app-modules-note.js#L14216) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%89%A9%E5%85%85%E8%A1%A8%E8%BE%BE.png` | [代码](../analysis/pretty/app-modules-note.js#L14227) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%AF%AD%E6%B3%95%E4%BF%AE%E6%AD%A3%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14238) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%94%B9%E5%86%99%E9%A3%8E%E6%A0%BC%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14249) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%80%BB%E7%BB%93.png` | [代码](../analysis/pretty/app-modules-note.js#L14260) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%BE%85%E5%8A%9E%E6%8F%90%E5%8F%96.png` | [代码](../analysis/pretty/app-modules-note.js#L14271) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%9C%8B%E5%8F%8B%E5%9C%88.png` | [代码](../analysis/pretty/app-modules-note.js#L14288) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%B0%8F%E7%BA%A2%E4%B9%A6.png` | [代码](../analysis/pretty/app-modules-note.js#L14299) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%86%99%E8%AF%97.png` | [代码](../analysis/pretty/app-modules-note.js#L14310) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%AF%84%E4%BB%B7.png` | [代码](../analysis/pretty/app-modules-note.js#L14321) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%A4%B4%E8%84%91%E9%A3%8E%E6%9A%B4.png` | [代码](../analysis/pretty/app-modules-note.js#L14332) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%97%A5%E6%8A%A5%E5%91%A8%E6%8A%A5.png` | [代码](../analysis/pretty/app-modules-note.js#L14343) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%B7%A5%E4%BD%9C%E6%80%BB%E7%BB%93.png` | [代码](../analysis/pretty/app-modules-note.js#L14354) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%BE%85%E5%8A%9E%E6%B8%85%E5%8D%95.png` | [代码](../analysis/pretty/app-modules-note.js#L14365) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E7%AE%80%E5%8E%86%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14376) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%BC%94%E8%AE%B2%E7%A8%BF.png` | [代码](../analysis/pretty/app-modules-note.js#L14387) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%96%87%E7%AB%A0%E5%A4%A7%E7%BA%B2.png` | [代码](../analysis/pretty/app-modules-note.js#L14398) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%AF%B7%E5%81%87%E6%9D%A1%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14409) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%BF%83%E5%BE%97%E4%BD%93%E4%BC%9A%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14420) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14431) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%96%87%E7%AB%A0.png` | [代码](../analysis/pretty/app-modules-note.js#L14442) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E7%94%B3%E8%AF%B7%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14453) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E9%80%9A%E7%9F%A5.png` | [代码](../analysis/pretty/app-modules-note.js#L14464) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%B4%BB%E5%8A%A8%E6%96%B9%E6%A1%88.png` | [代码](../analysis/pretty/app-modules-note.js#L14475) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E5%AE%A3%E4%BC%A0%E6%96%B9%E6%A1%88.png` | [代码](../analysis/pretty/app-modules-note.js#L14486) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%96%B0%E9%97%BB%E7%A8%BF%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14497) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E8%81%8C%E4%BD%8D%E6%8F%8F%E8%BF%B0%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14508) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E9%82%80%E8%AF%B7%E5%87%BD%404x.png` | [代码](../analysis/pretty/app-modules-note.js#L14519) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/SWOT%E5%88%86%E6%9E%90.png` | [代码](../analysis/pretty/app-modules-note.js#L14530) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/%E6%B3%A2%E7%89%B9%E4%BA%94%E5%8A%9B%E5%88%86%E6%9E%90.png` | [代码](../analysis/pretty/app-modules-note.js#L14541) |
| `https://vivo-storagetest-sz.vivo.com.cn/origin-note-bucket/PEST%E5%88%86%E6%9E%90.png` | [代码](../analysis/pretty/app-modules-note.js#L14552) |
| `https://ai-static.vivo.com.cn/static-ai/common/audio-play.170bfe4a46820faba92dc50db85369ee.png` | [代码](../analysis/pretty/app-modules-note.js#L23544) |
| `https://ai-static.vivo.com.cn/static-ai/common/audio-stop.c18bd00ef410e4168d09e797b813f2be.png` | [代码](../analysis/pretty/app-modules-note.js#L23545) |
| `https://ai-static.vivo.com.cn/static-ai/common/audio-continue.d52b8e9a9230b26ee909a97b343bacf4.png` | [代码](../analysis/pretty/app-modules-note.js#L23546) |
| `https://ai-static.vivo.com.cn/static-ai/common/done-dark.2df21186da416c8d52d7a8d7a71f4482.png` | [代码](../analysis/pretty/app-modules-note.js#L23547) |
| `https://ai-static.vivo.com.cn/static-ai/common/dot.215ffde8e050ac73e3d858348bbf70e6.png` | [代码](../analysis/pretty/app-modules-note.js#L23548) |
| `https://ai-static.vivo.com.cn/static-ai/common/done.459a73dae26bca8d9a423567938aa7b1.png` | [代码](../analysis/pretty/app-modules-note.js#L23549) |
| `https://ai-static.vivo.com.cn/static-ai/common/undo.53e599e8a7f735d146b882d5d9a14cc2.png` | [代码](../analysis/pretty/app-modules-note.js#L23550) |
| `wss://quantumkit-pre.vivo.com.cn/jovi-api` | [代码](../analysis/pretty/app-modules-note.js#L33877) |
| `wss://asia-copilot-api-prd.vivoglobal.com` | [代码](../analysis/pretty/app-modules-note.js#L33883) |
| `https://quantumkit-pre.vivo.com.cn/ws-api` | [代码](../analysis/pretty/app-modules-note.js#L34725) |
| `wss://quantumkit-pre.vivo.com.cn/ws-api` | [代码](../analysis/pretty/app-modules-note.js#L34725) |
| `https://asia-asr-v2.vivoglobal.com` | [代码](../analysis/pretty/app-modules-note.js#L34732) |
| `/pc_file_manager/thumb` | [代码](../analysis/pretty/app-modules.js#L134) |
| `/pc_file_manager/new/thumb` | [代码](../analysis/pretty/app-modules.js#L134) |
| `/pc_file_manager/channel` | [代码](../analysis/pretty/app-modules.js#L137) |
| `/pc_back/album_collect_info` | [代码](../analysis/pretty/app-modules.js#L142) |
| `/pc_back/album_collect_detail` | [代码](../analysis/pretty/app-modules.js#L143) |
| `/pc_file_manager/tab_count` | [代码](../analysis/pretty/app-modules.js#L149) |
| `/pc_file_manager/delete_info` | [代码](../analysis/pretty/app-modules.js#L171) |
| `/pc_file_manager/global_search` | [代码](../analysis/pretty/app-modules.js#L175) |
| `/pc_global/search` | [代码](../analysis/pretty/app-modules.js#L182) |
| `/pc_file_manager/file_rename` | [代码](../analysis/pretty/app-modules.js#L272) |
| `/pc_file_manager/trans_open_file` | [代码](../analysis/pretty/app-modules.js#L273) |
| `/pc_file_manager/clear_recycle` | [代码](../analysis/pretty/app-modules.js#L276) |
| `/pc_file_manager/recycle_operation` | [代码](../analysis/pretty/app-modules.js#L325) |
| `/pc_file_manager/create_directory` | [代码](../analysis/pretty/app-modules.js#L621) |
| `/pc_file_manager/query_directory_size` | [代码](../analysis/pretty/app-modules.js#L624) |
| `/pc_file_manager/file_copy` | [代码](../analysis/pretty/app-modules.js#L638) |
| `/pc_file_manager/file_check` | [代码](../analysis/pretty/app-modules.js#L640) |
| `/pc_file_manager/get_path` | [代码](../analysis/pretty/app-modules.js#L642) |
| `/pc_file_manager/download_info` | [代码](../analysis/pretty/app-modules.js#L702) |
| `/pc_file_manager/download` | [代码](../analysis/pretty/app-modules.js#L702) |
| `/pc_file_manager/drop_files_info` | [代码](../analysis/pretty/app-modules.js#L703) |
| `/upload/drop_file_to_phone` | [代码](../analysis/pretty/app-modules.js#L703) |
| `https://subscribe.vivo.com/workday/getInfo` | [代码](../analysis/pretty/app-modules.js#L1061) |
| `/api/suite/web/meta/list.do` | [代码](../analysis/pretty/app-modules.js#L1381) |
| `/api/suite/web/storage/storageDetailNew.do` | [代码](../analysis/pretty/app-modules.js#L1441) |
| `/api/file/download.do` | [代码](../analysis/pretty/app-modules.js#L1446) |
| `/api/suite/web/meta/preUpload.do` | [代码](../analysis/pretty/app-modules.js#L1450) |
| `/api/suite/web/folder/folderList.do` | [代码](../analysis/pretty/app-modules.js#L1463) |
| `/api/suite/web/folder/exploreFolder.do` | [代码](../analysis/pretty/app-modules.js#L1470) |
| `/api/suite/web/folder/compensateFolder.do` | [代码](../analysis/pretty/app-modules.js#L1484) |
| `/api/suite/web/folder/createFolder.do` | [代码](../analysis/pretty/app-modules.js#L1498) |
| `/api/suite/web/meta/storageUsage.do` | [代码](../analysis/pretty/app-modules.js#L1505) |
| `/api/suite/pc/folder/removeFolders.do` | [代码](../analysis/pretty/app-modules.js#L1509) |
| `/api/file/web/upload.do` | [代码](../analysis/pretty/app-modules.js#L1733) |
| `/api/file/web/rangeUpload.do` | [代码](../analysis/pretty/app-modules.js#L1745) |
| `/api/file/web/thumbUpload.do` | [代码](../analysis/pretty/app-modules.js#L1757) |
| `/api/suite/web/folder/callBackFolder.do` | [代码](../analysis/pretty/app-modules.js#L1841) |
| `/api/suite/web/meta/groupSplit.do` | [代码](../analysis/pretty/app-modules.js#L1910) |
| `https://yun.vivo.com.cn` | [代码](../analysis/pretty/app-modules.js#L4143) |
| `https://yun.vivo.com` | [代码](../analysis/pretty/app-modules.js#L4143) |
| `/pc_file_manager/connect_download_progress` | [代码](../analysis/pretty/app-modules.js#L8468) |
| `http://vivo-work.vivo.com.cn:9080` | [代码](../analysis/pretty/app-modules.js#L9070) |
| `https://calendar.dingtalk.com` | [代码](../analysis/pretty/app-modules.js#L9072) |
| `https://login.dingtalk.com` | [代码](../analysis/pretty/app-modules.js#L9073) |
| `https://api.dingtalk.com/v1.0/oauth2/userAccessToken` | [代码](../analysis/pretty/app-modules.js#L9074) |
| `https://api.dingtalk.com/v1.0/calendar/users/me/caldavAccounts` | [代码](../analysis/pretty/app-modules.js#L9075) |
| `https://api.dingtalk.com/v1.0/calendar/users/me/calendars` | [代码](../analysis/pretty/app-modules.js#L9076) |
| `https://api.dingtalk.com/v1.0/calendar/users/me/calendars/primary/events` | [代码](../analysis/pretty/app-modules.js#L9077) |
| `https://caldav.icloud.com.cn` | [代码](../analysis/pretty/app-modules.js#L9082) |
| `https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.email` | [代码](../analysis/pretty/app-modules.js#L9087) |
| `https://vivo-work.vivo.com.cn:9080` | [代码](../analysis/pretty/app-modules.js#L9089) |
| `https://apidata.googleusercontent.com` | [代码](../analysis/pretty/app-modules.js#L9091) |
| `https://accounts.google.com/gsi/client` | [代码](../analysis/pretty/app-modules.js#L9092) |
| `https://oauth2.googleapis.com/token` | [代码](../analysis/pretty/app-modules.js#L9093) |
| `https://www.googleapis.com/oauth2/v3/userinfo` | [代码](../analysis/pretty/app-modules.js#L9094) |
| `https://www.googleapis.com/calendar/v3/users/me/calendarList` | [代码](../analysis/pretty/app-modules.js#L9095) |
| `https://www.googleapis.com/calendar/v3/calendars` | [代码](../analysis/pretty/app-modules.js#L9096) |
| `https://www.googleapis.com/calendar/v3/colors` | [代码](../analysis/pretty/app-modules.js#L9097) |
| `https://login.microsoftonline.com/common/oauth2/nativeclient` | [代码](../analysis/pretty/app-modules.js#L9105) |
| `https://graph.microsoft.com/v1.0` | [代码](../analysis/pretty/app-modules.js#L9107) |
| `https://login.microsoftonline.com/common` | [代码](../analysis/pretty/app-modules.js#L9108) |
| `/api/pc/calendar/getInfo` | [代码](../analysis/pretty/app-modules.js#L10798) |
| `http://productivity-suite-test.vivo.com.cn` | [代码](../analysis/pretty/app-modules.js#L43698) |
| `/api/pc/calendar/getWeather` | [代码](../analysis/pretty/app-modules.js#L44024) |
| `https://yun.vivo.com.cn/welcome` | [代码](../analysis/pretty/child-window.js#L8080) |
| `https://yun.vivo.com/welcome` | [代码](../analysis/pretty/child-window.js#L8080) |
| `https://pcsuite-api-test.vmic.xyz/version/download/windows/full` | [代码](../analysis/pretty/child-window.js#L9308) |
| `https://pcsuite-api-pre.vmic.xyz/version/download/windows/full` | [代码](../analysis/pretty/child-window.js#L9309) |
| `https://pcsuite-api.vivo.com/version/download/windows/full` | [代码](../analysis/pretty/child-window.js#L9310) |
| `https://pcsuite-api-test.vmic.xyz/version/download/mac/full` | [代码](../analysis/pretty/child-window.js#L9312) |
| `https://pcsuite-api-pre.vmic.xyz/version/download/mac/full` | [代码](../analysis/pretty/child-window.js#L9313) |
| `https://pcsuite-api.vivo.com/version/download/mac/full` | [代码](../analysis/pretty/child-window.js#L9314) |
| `https://productivity-suite-test.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L11606) |
| `https://psuite-pre.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L11606) |
| `https://psuite.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L11606) |
| `https://passport.vivo.com` | [代码](../analysis/pretty/child-window.js#L11701) |
| `ws://127.0.0.1` | [代码](../analysis/pretty/child-window.js#L27711) |
| `https://connection-center-test.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28590) |
| `https://connection-center-pre.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28590) |
| `https://connection-center.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28591) |
| `https://cross-file-bridge-test.vivo.com` | [代码](../analysis/pretty/child-window.js#L28593) |
| `https://cross-file-bridge-pre.vivo.com` | [代码](../analysis/pretty/child-window.js#L28593) |
| `https://cross-file-bridge.vivo.com` | [代码](../analysis/pretty/child-window.js#L28594) |
| `https://p-test.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28596) |
| `https://p-pre.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28596) |
| `https://p.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28597) |
| `https://productivity-suite-test.vivo.com.cn/vbusiness/account/cookie/getHtml` | [代码](../analysis/pretty/child-window.js#L28599) |
| `https://psuite-pre.vivo.com.cn/vbusiness/account/cookie/getHtml` | [代码](../analysis/pretty/child-window.js#L28600) |
| `https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml` | [代码](../analysis/pretty/child-window.js#L28601) |
| `https://quantumkit-test.vivo.com.cn/` | [代码](../analysis/pretty/child-window.js#L28603) |
| `https://quantumkit-pre.vivo.com.cn/` | [代码](../analysis/pretty/child-window.js#L28603) |
| `https://quantumkit.vivo.com/suite` | [代码](../analysis/pretty/child-window.js#L28604) |
| `https://pc-pre.vmic.xyz/` | [代码](../analysis/pretty/child-window.js#L28606) |
| `https://pc.vivo.com` | [代码](../analysis/pretty/child-window.js#L28607) |
| `https://pc.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L28607) |
| `https://pc.jovimobile.com` | [代码](../analysis/pretty/child-window.js#L28608) |
| `https://pcsuite-api-test.vmic.xyz` | [代码](../analysis/pretty/child-window.js#L28610) |
| `https://pcsuite-api-pre.vmic.xyz` | [代码](../analysis/pretty/child-window.js#L28610) |
| `https://pcsuite-api.vivo.com` | [代码](../analysis/pretty/child-window.js#L28611) |
| `https://pc.vivo.com/` | [代码](../analysis/pretty/child-window.js#L28614) |
| `http://quantumkit-screen-test.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28616) |
| `http://quantumkit-screen-pre.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28616) |
| `http://quantumkit-screen.vivo.com` | [代码](../analysis/pretty/child-window.js#L28617) |
| `https://subscribe-test.vivo.com.cn/` | [代码](../analysis/pretty/child-window.js#L28619) |
| `https://subscribe.vivo.com.cn/` | [代码](../analysis/pretty/child-window.js#L28619) |
| `https://subscribe-ai.vivo.com.cn/` | [代码](../analysis/pretty/child-window.js#L28622) |
| `https://x-trans-test.vivo.com` | [代码](../analysis/pretty/child-window.js#L28625) |
| `https://x-trans-pre.vivo.com` | [代码](../analysis/pretty/child-window.js#L28625) |
| `https://x-trans.vivo.com` | [代码](../analysis/pretty/child-window.js#L28626) |
| `https://asr-pre-v2.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28637) |
| `https://asr-v2.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28638) |
| `https://asia-ai-image-prd.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L28644) |
| `https://vivo-claw-server-pre.vivo.com` | [代码](../analysis/pretty/child-window.js#L28649) |
| `https://vivo-claw-server-prd.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28650) |
| `https://vivo-claw-payment-grey.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28652) |
| `https://claw.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28653) |
| `https://vivoclaw-gateway-pre.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28655) |
| `https://vivoclaw-gateway.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28656) |
| `https://blueclaw-gateway-test.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28658) |
| `https://blueclaw-gateway.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28659) |
| `https://passport.vivo.com.cn` | [代码](../analysis/pretty/child-window.js#L28669) |
| `https://passport.vivo.com.cn/#/login` | [代码](../analysis/pretty/child-window.js#L28670) |
| `https://passport.vivo.com.cn/#/personalCenter` | [代码](../analysis/pretty/child-window.js#L28671) |
| `https://passport.vivo.com.cn/thirdpart/productivity/transfer` | [代码](../analysis/pretty/child-window.js#L28672) |
| `https://passport.vivo.com/#/personalCenter` | [代码](../analysis/pretty/child-window.js#L28675) |
| `/api/suite/status/listSyncDevices.do` | [代码](../analysis/pretty/child-window.js#L29169) |
| `/api/suite/status/listActiveUnsyncOnlineDevices.do` | [代码](../analysis/pretty/child-window.js#L29176) |
| `https://pcsuite-api-pre.vmic.xyz/config/all` | [代码](../analysis/pretty/child-window.js#L29691) |
| `https://asia-pcsuite-api.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L31525) |
| `https://in-pcsuite-api.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L31549) |
| `https://ru-pcsuite-api.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L31573) |
| `https://eu-pcsuite-api.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L31599) |
| `https://de-gdpr-pcsuite-api.vivoglobal.com` | [代码](../analysis/pretty/child-window.js#L31633) |
| `https://ai-static.vivo.com.cn/static-ai/common/phone-suite-guide.1889dc1ef1a323bdc66af7f5b1a88a67.mp4` | [代码](../analysis/pretty/components-connection.js#L3093) |
| `https://ai-static.vivo.com.cn/static-ai/common/pad-suite-guide.a11fec7aa90614b3df986cd29ccb7951.mp4` | [代码](../analysis/pretty/components-connection.js#L3099) |
| `https://ai-static.vivo.com.cn/static-ai/common/coordination-set-guide-pad.eb432bc1ab05bc71b5ed21fb5e8cc54b.mp4` | [代码](../analysis/pretty/components-connection.js#L3663) |
| `https://ai-static.vivo.com.cn/static-ai/common/coordination-set-guide-phone.83e53738616c0f0ffed3e7d971ed5675.mp4` | [代码](../analysis/pretty/components-connection.js#L3663) |
| `https://ai-static.vivo.com.cn/static-ai/common/qrcode-scan-guide.1c8052b08816e92956b3b23e1d261aa5.mp4` | [代码](../analysis/pretty/components-connection.js#L13528) |
| `https://pcsuite-api.vivo.com/` | [代码](../analysis/pretty/main.js#L39491) |
| `https://asia-pcsuite-api.vivoglobal.com/` | [代码](../analysis/pretty/main.js#L39492) |
| `https://in-pcsuite-api.vivoglobal.com/` | [代码](../analysis/pretty/main.js#L39493) |
| `https://ru-pcsuite-api.vivoglobal.com/` | [代码](../analysis/pretty/main.js#L39494) |
| `https://eu-pcsuite-api.vivoglobal.com/` | [代码](../analysis/pretty/main.js#L39495) |
| `https://de-gdpr-pcsuite-api.vivoglobal.com/` | [代码](../analysis/pretty/main.js#L39496) |
| `http://www.w3.org/XML/1998/namespace` | [代码](../analysis/pretty/main.js#L59768) |
| `http://www.w3.org/2000/xmlns/` | [代码](../analysis/pretty/main.js#L59770) |
| `/api/v3` | [代码](../analysis/pretty/main.js#L60687) |
| `http://json-schema.org/draft-07/schema` | [代码](../analysis/pretty/main.js#L76849) |
| `http://json-schema.org/schema` | [代码](../analysis/pretty/main.js#L76857) |
| `https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#` | [代码](../analysis/pretty/main.js#L77356) |
| `https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js` | [代码](../analysis/pretty/main.js#L96710) |
| `https://s3.amazonaws.com/` | [代码](../analysis/pretty/main.js#L100735) |
| `/skill/fmTransferFileToPC` | [代码](../analysis/pretty/main.js#L109698) |
| `/skill/rightMenuTransfer` | [代码](../analysis/pretty/main.js#L109698) |
| `/skill/connectDevice` | [代码](../analysis/pretty/main.js#L109699) |
| `/skill/getDeviceConnectStatus` | [代码](../analysis/pretty/main.js#L109699) |
| `/skill/getSameAccountDevices` | [代码](../analysis/pretty/main.js#L109700) |
| `/skill/disconnectDevice` | [代码](../analysis/pretty/main.js#L109700) |
| `/skill/getConnectedDevices` | [代码](../analysis/pretty/main.js#L109701) |
| `/skill/getConnectedDeviceInfo` | [代码](../analysis/pretty/main.js#L109701) |
| `/skill/getSuiteInfo` | [代码](../analysis/pretty/main.js#L109702) |
| `/skill/localSearch/search` | [代码](../analysis/pretty/main.js#L109702) |
| `/skill/localSearch/getThumb` | [代码](../analysis/pretty/main.js#L109703) |
| `/skill/localSearch/openFileDetails` | [代码](../analysis/pretty/main.js#L109703) |
| `/skill/localSearch/delete` | [代码](../analysis/pretty/main.js#L109704) |
| `/skill/fmSearch` | [代码](../analysis/pretty/main.js#L109704) |
| `/pc_toast.exe` | [代码](../analysis/pretty/main.js#L111914) |
| `https://pcsuite-api.vivo.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111943) |
| `https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111944) |
| `https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111945) |
| `https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111946) |
| `https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111947) |
| `https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac` | [代码](../analysis/pretty/main.js#L111948) |
| `https://pcsuite-api.vivo.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111950) |
| `https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111951) |
| `https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111952) |
| `https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111953) |
| `https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111954) |
| `https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64` | [代码](../analysis/pretty/main.js#L111955) |
| `https://pcsuite-api.vivo.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111957) |
| `https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111958) |
| `https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111959) |
| `https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111960) |
| `https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111961) |
| `https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows` | [代码](../analysis/pretty/main.js#L111962) |
| `http://172.22.188.74:8083/` | [代码](../analysis/pretty/main.js#L112193) |
| `https://accounts.google.com/` | [代码](../analysis/pretty/preload-welcome.js#L75) |
| `https://accounts.google.ru/` | [代码](../analysis/pretty/preload-welcome.js#L75) |
| `https://caldav.feishu.cn` | [代码](../analysis/pretty/renderer.js#L36008) |
| `https://ospo.vivo.com/outer/license/v2/detail` | [代码](../analysis/pretty/renderer.js#L37665) |
| `https://www.baidu.com` | [代码](../analysis/pretty/renderer.js#L39354) |
| `https://yun.vivo.com.cn/upgrade/index` | [代码](../analysis/pretty/renderer.js#L39910) |
| `https://quantumkit-test-ex.vmic.xyz` | [代码](../analysis/pretty/renderer.js#L58465) |
| `/api/v1/rule/h5/get` | [代码](../analysis/pretty/verdor1.js#L2973) |
| `/api/v1/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2974) |
| `/api/v2/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2975) |
| `/api/v3/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2976) |
| `/api/v4/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2977) |
| `/api/v5/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2978) |
| `/api/v6/data/h5/report` | [代码](../analysis/pretty/verdor1.js#L2979) |
| `http://www.w3.org/1998/Math/MathML` | [代码](../analysis/pretty/verdor1.js#L9721) |
| `http://github.com/dominictarr/crypto-browserify` | [代码](../analysis/pretty/verdor3.js#L59586) |
| `http://localhost:9080` | [代码](../analysis/pretty/webviewPreload.js#L125) |
| `http://localhost:9081` | [代码](../analysis/pretty/webviewPreload.js#L125) |
