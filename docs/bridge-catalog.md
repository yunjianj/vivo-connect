# Electron Bridge 方法清单

前缀为模块名，调用名为 `模块/方法`；common 模块可以省略前缀。参数栏保留反编译后的形参名称，不代表业务字段名。所有条目为静态导出项，是否适用于特定窗口仍需按实现检查。

| Bridge 名称 | 实现形参 | 证据 |
|---|---|---|
| `album/test` | `e, t` | [代码](../evidence/main-modules/1507.js#L10) |
| `album/makeDir` | `e, t` | [代码](../evidence/main-modules/1507.js#L17) |
| `album/saveData` | `e, t` | [代码](../evidence/main-modules/1507.js#L31) |
| `album/copyData` | `e, t` | [代码](../evidence/main-modules/1507.js#L89) |
| `album/copysData` | `e, t` | [代码](../evidence/main-modules/1507.js#L128) |
| `album/movesData` | `e, t` | [代码](../evidence/main-modules/1507.js#L152) |
| `album/moveData` | `e, t` | [代码](../evidence/main-modules/1507.js#L168) |
| `album/getFileData` | `e, t` | [代码](../evidence/main-modules/1507.js#L177) |
| `album/getThumb` | `e, t` | [代码](../evidence/main-modules/1507.js#L190) |
| `album/triggerOperateMessage` | `e, t` | [代码](../evidence/main-modules/1507.js#L209) |
| `album/existsFile` | `e, t` | [代码](../evidence/main-modules/1507.js#L221) |
| `album/existFile` | `e, t` | [代码](../evidence/main-modules/1507.js#L232) |
| `album/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1507.js#L243) |
| `album/saveGroups` | `e, t` | [代码](../evidence/main-modules/1507.js#L255) |
| `album/getLocalFileStatInfo` | `e, t` | [代码](../evidence/main-modules/1507.js#L286) |
| `album/getVideoMetadata` | `e, t` | [代码](../evidence/main-modules/1507.js#L302) |
| `album/getLocalFileMd5` | `e, t` | [代码](../evidence/main-modules/1507.js#L362) |
| `album/analysisLocalFile` | `e, t` | [代码](../evidence/main-modules/1507.js#L399) |
| `album/removeCancledUploadFile` | `e, t` | [代码](../evidence/main-modules/1507.js#L444) |
| `album/removeFile` | `e, t` | [代码](../evidence/main-modules/1507.js#L454) |
| `album/isLivePhotpAndCreatVideo` | `e, t` | [代码](../evidence/main-modules/1507.js#L475) |
| `album/isLivePhotoFn` | `e, t` | [代码](../evidence/main-modules/1507.js#L493) |
| `album/cheeckLivePhotoPath` | `e, t` | [代码](../evidence/main-modules/1507.js#L519) |
| `note/event` | `e` | [代码](../evidence/main-modules/1513.js#L9) |
| `note/listenerEvent` | `e` | [代码](../evidence/main-modules/1513.js#L16) |
| `note/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1513.js#L23) |
| `note/notifyMultiWindowNoteUpdate` | `e, t` | [代码](../evidence/main-modules/1513.js#L34) |
| `note/notifyMultiWindowNoteDelete` | `e, t` | [代码](../evidence/main-modules/1513.js#L53) |
| `note/hideMainWindow` | `` | [代码](../evidence/main-modules/1513.js#L72) |
| `note/showMainWindow` | `e, t` | [代码](../evidence/main-modules/1513.js#L78) |
| `note/openScreenCapture` | `e, t` | [代码](../evidence/main-modules/1513.js#L97) |
| `note/addMetamarkAi` | `e, t` | [代码](../evidence/main-modules/1513.js#L134) |
| `calendar/event` | `e` | [代码](../evidence/main-modules/1531.js#L9) |
| `calendar/listenerEvent` | `e` | [代码](../evidence/main-modules/1531.js#L16) |
| `calendar/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1531.js#L23) |
| `notification/makeDir` | `e, t` | [代码](../evidence/main-modules/1541.js#L9) |
| `notification/saveFile` | `e, t` | [代码](../evidence/main-modules/1541.js#L23) |
| `notification/existsFile` | `e, t` | [代码](../evidence/main-modules/1541.js#L101) |
| `notification/writeFile` | `e, t` | [代码](../evidence/main-modules/1541.js#L127) |
| `notification/getMainWorkArea` | `e, t` | [代码](../evidence/main-modules/1541.js#L141) |
| `vtalk/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1542.js#L11) |
| `vtalk/wssend` | `e, t` | [代码](../evidence/main-modules/1542.js#L22) |
| `vtalk/wsUpdateMessage` | `` | [代码](../evidence/main-modules/1542.js#L29) |
| `vtalk/wsEndTask` | `e, t` | [代码](../evidence/main-modules/1542.js#L40) |
| `vtalk/getRecordLenExSid` | `e, t` | [代码](../evidence/main-modules/1542.js#L48) |
| `vtalk/getRecordList` | `e, t` | [代码](../evidence/main-modules/1542.js#L57) |
| `vtalk/deleteRecord` | `e, t` | [代码](../evidence/main-modules/1542.js#L70) |
| `vtalk/updateRecordExtra` | `e, t` | [代码](../evidence/main-modules/1542.js#L79) |
| `vtalk/getSID` | `e, t` | [代码](../evidence/main-modules/1542.js#L91) |
| `vtalk/wsTaskStatusUpdate` | `e, t` | [代码](../evidence/main-modules/1542.js#L101) |
| `vtalk/viewImage` | `e, t` | [代码](../evidence/main-modules/1542.js#L113) |
| `vtalk/openImagePath` | `e, t` | [代码](../evidence/main-modules/1542.js#L136) |
| `vtalk/saveFile` | `e, t` | [代码](../evidence/main-modules/1542.js#L156) |
| `vtalk/saveRemoteFile` | `e, t` | [代码](../evidence/main-modules/1542.js#L235) |
| `vtalk/getUniqueFilePath` | `e, t, n` | [代码](../evidence/main-modules/1542.js#L279) |
| `vtalk/copyImage` | `e, t` | [代码](../evidence/main-modules/1542.js#L284) |
| `vtalk/clearTalkHistory` | `e, t` | [代码](../evidence/main-modules/1542.js#L303) |
| `vtalk/closeWS` | `e, t` | [代码](../evidence/main-modules/1542.js#L322) |
| `vtalk/saveFileRecord` | `e, t` | [代码](../evidence/main-modules/1542.js#L325) |
| `vtalk/saveErrorRecord` | `e, t` | [代码](../evidence/main-modules/1542.js#L332) |
| `vtalk/saveCommonRecord` | `e, t` | [代码](../evidence/main-modules/1542.js#L339) |
| `vtalk/vtalkImageSave` | `e, t` | [代码](../evidence/main-modules/1542.js#L348) |
| `vtalk/vtalkGetFile` | `e, t` | [代码](../evidence/main-modules/1542.js#L357) |
| `vtalk/vtalkGetFileType` | `e, t` | [代码](../evidence/main-modules/1542.js#L370) |
| `vtalk/vtalkGetUrlAndHeaders` | `e, t` | [代码](../evidence/main-modules/1542.js#L377) |
| `record/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1546.js#L9) |
| `record/writeFileToLocal` | `e, t` | [代码](../evidence/main-modules/1546.js#L21) |
| `record/asrInBackground` | `e, t` | [代码](../evidence/main-modules/1546.js#L54) |
| `record/recordASR` | `e, t` | [代码](../evidence/main-modules/1546.js#L60) |
| `record/recordOrganize` | `e, t` | [代码](../evidence/main-modules/1546.js#L80) |
| `common/minimizeWindow` | `e, t` | [代码](../evidence/main-modules/1553.js#L11) |
| `common/setWindowToTop` | `e, t` | [代码](../evidence/main-modules/1553.js#L23) |
| `common/closeMainWindow` | `e, t` | [代码](../evidence/main-modules/1553.js#L31) |
| `common/exitApp` | `e, t` | [代码](../evidence/main-modules/1553.js#L37) |
| `common/quitApp` | `e, t` | [代码](../evidence/main-modules/1553.js#L40) |
| `common/setMainWindowFullScreen` | `e, t` | [代码](../evidence/main-modules/1553.js#L43) |
| `common/getMainWindowISMaximize` | `e, t` | [代码](../evidence/main-modules/1553.js#L50) |
| `common/getSubWindowISMaximize` | `e, t` | [代码](../evidence/main-modules/1553.js#L56) |
| `common/triggerUpdateMessage` | `e, t` | [代码](../evidence/main-modules/1553.js#L63) |
| `common/monitorUpdateMessage` | `{winId: e}, t` | [代码](../evidence/main-modules/1553.js#L84) |
| `common/repairWinService` | `e, t` | [代码](../evidence/main-modules/1553.js#L90) |
| `common/clearTemp` | `{tempId: e}, t` | [代码](../evidence/main-modules/1553.js#L94) |
| `common/imagesCompress` | `{imgUrls: e, tempId: t}, r` | [代码](../evidence/main-modules/1553.js#L102) |
| `common/triggerExportFile` | `{contentStr: e, type: t, landscape: i = !1}, o` | [代码](../evidence/main-modules/1553.js#L142) |
| `common/exportDialogSave` | `e, t` | [代码](../evidence/main-modules/1553.js#L218) |
| `common/triggerRecallOfficeSoft` | `{filePath: e}, t` | [代码](../evidence/main-modules/1553.js#L236) |
| `common/setLoginItemSettings` | `e, t` | [代码](../evidence/main-modules/1553.js#L252) |
| `common/getLoginItemSettings` | `e, t` | [代码](../evidence/main-modules/1553.js#L256) |
| `common/setLoginOtherSettings` | `e, t` | [代码](../evidence/main-modules/1553.js#L262) |
| `common/askForMediaAccess` | `e, t` | [代码](../evidence/main-modules/1553.js#L265) |
| `common/specifyBrowserWindowCommunicate` | `e, t` | [代码](../evidence/main-modules/1553.js#L270) |
| `common/systemTimeChange` | `e, t` | [代码](../evidence/main-modules/1553.js#L279) |
| `common/openMacAllService` | `e, t` | [代码](../evidence/main-modules/1553.js#L285) |
| `common/getDeviceInfo` | `e, t` | [代码](../evidence/main-modules/1553.js#L288) |
| `common/openBrowser` | `e, t` | [代码](../evidence/main-modules/1553.js#L297) |
| `common/getReportList` | `e, t` | [代码](../evidence/main-modules/1553.js#L301) |
| `common/batchDeleteReportStaus` | `e, t` | [代码](../evidence/main-modules/1553.js#L315) |
| `common/batchInsertReportStaus` | `e, t` | [代码](../evidence/main-modules/1553.js#L335) |
| `common/getRepeatReportList` | `e, t` | [代码](../evidence/main-modules/1553.js#L355) |
| `common/runDataBaseMethod` | `e, t` | [代码](../evidence/main-modules/1553.js#L375) |
| `common/getVClawMasterKey` | `e, t` | [代码](../evidence/main-modules/1553.js#L388) |
| `common/getPing` | `e, t` | [代码](../evidence/main-modules/1553.js#L399) |
| `common/getTtelnetIpPort` | `e, t` | [代码](../evidence/main-modules/1553.js#L412) |
| `common/serviceIsSupport` | `e, t` | [代码](../evidence/main-modules/1553.js#L425) |
| `common/getServiceStatus` | `{serviceName: e}, t` | [代码](../evidence/main-modules/1553.js#L435) |
| `common/showOpenDialog` | `{properties: e, defaultPath: t}, n` | [代码](../evidence/main-modules/1553.js#L449) |
| `common/getMainWindowId` | `{}, e` | [代码](../evidence/main-modules/1553.js#L468) |
| `common/getPrimaryDisplay` | `{}, e` | [代码](../evidence/main-modules/1553.js#L473) |
| `common/getProcessArgv` | `{}, e` | [代码](../evidence/main-modules/1553.js#L482) |
| `common/appGetPath` | `{name: e}, t` | [代码](../evidence/main-modules/1553.js#L492) |
| `common/focusMainWindow` | `{}, e` | [代码](../evidence/main-modules/1553.js#L502) |
| `common/hideWindows` | `e, t` | [代码](../evidence/main-modules/1553.js#L512) |
| `common/setFullScreen` | `{}, e` | [代码](../evidence/main-modules/1553.js#L517) |
| `common/screenRestoreMainWindow` | `{}, e` | [代码](../evidence/main-modules/1553.js#L521) |
| `common/openSystemSettingPanel` | `e, t` | [代码](../evidence/main-modules/1553.js#L526) |
| `common/getSystemConfigInfo` | `{}, e` | [代码](../evidence/main-modules/1553.js#L529) |
| `common/getEnvConfig` | `{}, e` | [代码](../evidence/main-modules/1553.js#L533) |
| `common/aiSearchWssend` | `e, t` | [代码](../evidence/main-modules/1558.js#L10) |
| `common/aiSearchWsUpdateMessage` | `` | [代码](../evidence/main-modules/1558.js#L18) |
| `common/aiSearchWsTaskStatusUpdate` | `e, t` | [代码](../evidence/main-modules/1558.js#L30) |
| `common/aiSearchWsEndTask` | `e, t` | [代码](../evidence/main-modules/1558.js#L42) |
| `common/vClawWssend` | `e, t` | [代码](../evidence/main-modules/1562.js#L10) |
| `common/vClawWsUpdateMessage` | `` | [代码](../evidence/main-modules/1562.js#L18) |
| `common/vClawWsTaskStatusUpdate` | `e, t` | [代码](../evidence/main-modules/1562.js#L30) |
| `common/vClawWsEndTask` | `e, t` | [代码](../evidence/main-modules/1562.js#L42) |
| `mac/mainWindowMaximize` | `e, t` | [代码](../evidence/main-modules/1676.js#L8) |
| `mac/setLoginItemSettings` | `e, t` | [代码](../evidence/main-modules/1676.js#L26) |
| `mac/getLoginItemSettings` | `e, t` | [代码](../evidence/main-modules/1676.js#L31) |
| `mac/setWinShadow` | `e, t` | [代码](../evidence/main-modules/1676.js#L36) |
| `mac/setBackground` | `e, t` | [代码](../evidence/main-modules/1676.js#L40) |
