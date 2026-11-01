# 原生 Node 模块包装接口

这些是 JavaScript 包装层签名。对象字段和回调数据应继续追踪调用点，不可从形参推导完整 ABI。

| 模块 | 方法 | 形参 | 证据 |
|---|---|---|---|
| electron-dragfile | startDrag | `dragItem, logPath` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L4) |
| electron-dragfile | cancel | `cuid` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L8) |
| electron-dragfile | stop | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L12) |
| electron-dragfile | enter | `mobileDeviceId` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L16) |
| electron-dragfile | leave | `isDisconnect` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L20) |
| electron-dragfile | getAvailableSpace | `path` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L24) |
| electron-dragfile | getFileExtSupportApp | `fileExt` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L28) |
| electron-dragfile | openFile | `file ,appName` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L32) |
| electron-dragfile | openFileAsync | `file ,appName` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L36) |
| electron-dragfile | openFolderAndSelectItems | `file` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L40) |
| electron-dragfile | getFolderInfo | `path ,onFrameCb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L44) |
| electron-dragfile | getDiskInfo | `path` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L48) |
| electron-dragfile | launch | `cmd` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L52) |
| electron-dragfile | openUrl | `url` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L56) |
| electron-dragfile | processIsExist | `processName` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L60) |
| electron-dragfile | esServiceIsExist | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L64) |
| electron-dragfile | syncServiceIsExist | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L68) |
| electron-dragfile | queryPCSuiteInfo | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L72) |
| electron-dragfile | getUserGeoName | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L76) |
| electron-dragfile | getOSInfo | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L80) |
| electron-dragfile | VAudioKernel_Init | `OnPlayProgressCb ,onPlayCompleteCb ,OnTransCodeProgressCb ,onTransCodeCompleteCb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L85) |
| electron-dragfile | VAudioKernel_CreatePlayer | `file_path,progress_interval_ms` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L88) |
| electron-dragfile | VAudioKernel_StartPlay | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L91) |
| electron-dragfile | VAudioKernel_DestroyPlayer | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L94) |
| electron-dragfile | VAudioKernel_GetAudioDuration | `file_path` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L97) |
| electron-dragfile | VAudioKernel_GetAudioDeviceList | `deviceType` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L100) |
| electron-dragfile | VAudioKernel_GetPlayState | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L103) |
| electron-dragfile | VAudioKernel_PausePlay | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L106) |
| electron-dragfile | VAudioKernel_ResumePlay | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L109) |
| electron-dragfile | VAudioKernel_StopPlay | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L112) |
| electron-dragfile | VAudioKernel_SeekPlay | `handle,target_ms` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L115) |
| electron-dragfile | VAudioKernel_SetSkipSilence | `handle, enable` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L118) |
| electron-dragfile | VAudioKernel_SetPlaySpeed | `handle,speed` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L121) |
| electron-dragfile | VAudioKernel_SetLoopPlay | `handle, enable` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L124) |
| electron-dragfile | VAudioKernel_CreateProcessor | `file_path` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L128) |
| electron-dragfile | VAudioKernel_TranscodeAudio | `handle, start_ms,data_format,data_length_ms` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L131) |
| electron-dragfile | VAudioKernel_CancelTranscode | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L134) |
| electron-dragfile | VAudioKernel_DestroyProcessor | `handle` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L137) |
| electron-dragfile | VAudioKernel_DestroyAllPlayers | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/electron-dragfile/index.js#L140) |
| filesearch | init | `appDataPath` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L11) |
| filesearch | uninit | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L15) |
| filesearch | startQuery | `params, callback` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L19) |
| filesearch | queryNext | `callback` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L23) |
| filesearch | stopQuery | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L27) |
| filesearch | getThumbnail | `filePath, saveFileName, height, width, callback` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L31) |
| filesearch | showFileInfo | `filePath` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L35) |
| filesearch | everythingIsRunning | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L39) |
| filesearch | everythingServiceIsRunning | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L43) |
| filesearch | startEverything | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L47) |
| filesearch | everythingIsDBLoaded | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L51) |
| filesearch | hasNTFSDriver | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L55) |
| filesearch | moveFileToTrash | `files, hwnd, callback` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L59) |
| filesearch | clearThumbnail | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L63) |
| filesearch | checkFullDiskAccess | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L67) |
| filesearch | requestAuthorization | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/filesearch/index.js#L71) |
| media-player | init | `appDataPath` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L4) |
| media-player | unInit | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L8) |
| media-player | getVideoInfo | `filePath, windowId, cb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L12) |
| media-player | getVideoInfoV2 | `filePath, windowId, cover, cb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L16) |
| media-player | getImageInfo | `filePath, windowId, cb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L20) |
| media-player | getConvertedImage | `filePath, windowId, cb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L24) |
| media-player | startVideoStream | `filePath, streamId, volumn, play, windowId, cb` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L28) |
| media-player | seekVideoStream | `streamId, time` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L32) |
| media-player | stopVideoStream | `streamId` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L36) |
| media-player | pauseVideoStream | `streamId` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L40) |
| media-player | resumeVideoStream | `streamId, volume, time, opType` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L44) |
| media-player | adjustVolumn | `streamId, volume` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/media-player/index.js#L48) |
| vcam | init | `logDir` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L25) |
| vcam | start | `onFrame` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L47) |
| vcam | stop | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L68) |
| vcam | destroy | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L79) |
| vcam | isRunning | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L88) |
| vcam | allowInvokeShareCamera | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L98) |
| vcam | isCMIOExtensionSupported | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L125) |
| vcam | installAndActivateExtension | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L133) |
| vcam | isExtensionInstalled | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L140) |
| vcam | findVirtualCameraDevice | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L148) |
| vcam | startCameraStream | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L155) |
| vcam | stopCameraStream | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L162) |
| vcam | setupVirtualCamera | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L171) |
| vcam | cleanup | `` | [代码](../pcsuite/resources/app.asar.unpacked/node_modules/vcam/index.js#L178) |
