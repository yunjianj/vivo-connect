# 本机路由完整清单

此清单直接对应当前样本的注册表。HTTP 路由仅按 pathname 分派，不强制 GET 或 POST；请求体型调用建议使用 POST，查询型调用建议使用 GET。字段契约见配套说明与链接中的完整处理函数。9199 返回字符串码，9200 返回数字码。

| 服务端口 | 传输 | 路径 | 处理函数 | 读取输入 | 证据 |
|---|---|---|---|---|---|
| 9199 | http | `/` | rootRoute | body  | [代码](../evidence/main-modules/239.js#L64) |
| 9199 | http | `/checkServerStatus` | checkServerStatus | query  | [代码](../evidence/main-modules/239.js#L67) |
| 9199 | http | `/notifyConnection` | notifyConnection | query  | [代码](../evidence/main-modules/239.js#L176) |
| 9199 | http | `/queryAll` | bleQueryAll | body  | [代码](../evidence/main-modules/239.js#L325) |
| 9199 | http | `/SSDPQueryAll` | networkQueryAll | body  | [代码](../evidence/main-modules/239.js#L345) |
| 9199 | http | `/isConnectBusy` | isConnectBusy | query  | [代码](../evidence/main-modules/239.js#L365) |
| 9199 | http | `/nfcConection` | nfcConection | body  | [代码](../evidence/main-modules/239.js#L126) |
| 9199 | http | `/buryPoint` | buryPoint | body  | [代码](../evidence/main-modules/239.js#L527) |
| 9199 | http | `/batchBuryPoint` | batchBuryPoint | body  | [代码](../evidence/main-modules/239.js#L557) |
| 9199 | http | `/relayClose` | relayClose |  | [代码](../evidence/main-modules/239.js#L605) |
| 9199 | http | `/RH2RF_PUSH_GATT_CLIENT_LIST` | RH2RF_PUSH_GATT_CLIENT_LIST | body  | [代码](../evidence/main-modules/239.js#L266) |
| 9199 | http | `/getSameAccountDevices` | getSameAccountDevices |  | [代码](../evidence/main-modules/239.js#L290) |
| 9199 | http | `/pcDeviceInfo` | pcDeviceInfo |  | [代码](../evidence/main-modules/239.js#L611) |
| 9199 | http | `/connectDevice` | connectDevice | body  | [代码](../evidence/main-modules/239.js#L625) |
| 9199 | http | `/vivoScreenCapture` | vivoScreenCapture | body  | [代码](../evidence/main-modules/239.js#L799) |
| 9199 | http | `/connectDeviceCloud` | connectDeviceCloud | body  | [代码](../evidence/main-modules/239.js#L668) |
| 9199 | http | `/notifySystemEvent` | notifySystemEvent | body  | [代码](../evidence/main-modules/239.js#L821) |
| 9199 | http | `/getCurConnectedUSBInfo` | getCurConnectedUSBInfo |  | [代码](../evidence/main-modules/239.js#L842) |
| 9199 | http | `/connectDeviceUSB` | connectDeviceUSB | body  | [代码](../evidence/main-modules/239.js#L881) |
| 9199 | http | `/forwardMessage` | forwardMessage | body  | [代码](../evidence/main-modules/239.js#L915) |
| 9199 | http | `/vivoshareDownload` | vivoshareDownload | body  | [代码](../evidence/main-modules/239.js#L932) |
| 9199 | http | `/launchUsbFastConnect` | launchUsbFastConnect | body  | [代码](../evidence/main-modules/239.js#L441) |
| 9199 | http | `/receiveIPToConnect` | receiveIPToConnect | body  | [代码](../evidence/main-modules/239.js#L222) |
| 9199 | http | `/switchLang` | switchLang | body  | [代码](../evidence/main-modules/239.js#L952) |
| 9199 | http | `/rightMenuTransfer` | rightMenuTransfer | body  | [代码](../evidence/main-modules/239.js#L972) |
| 9199 | http | `/launchUsbGuidePrompt` | launchUsbGuidePrompt | body  | [代码](../evidence/main-modules/239.js#L472) |
| 9199 | http | `/closeUsbFastConnect` | closeUsbFastConnect |  | [代码](../evidence/main-modules/239.js#L508) |
| 9199 | http | `/mtpDevicesUpdate` | mtpDevicesUpdate | body  | [代码](../evidence/main-modules/239.js#L995) |
| 9199 | http | `/reportNetworkPermission` | reportNetworkPermission | body  | [代码](../evidence/main-modules/239.js#L1015) |
| 9199 | http | `/startWifiDirect` | startWifiDirect |  | [代码](../evidence/main-modules/239.js#L1035) |
| 9199 | http | `/stopWifiDirect` | stopWifiDirect |  | [代码](../evidence/main-modules/239.js#L1054) |
| 9199 | http | `/invokeShareCamera` | invokeShareCamera | body  | [代码](../evidence/main-modules/239.js#L1073) |
| 9199 | http | `/updateShareCameraUsers` | updateShareCameraUsers | body  | [代码](../evidence/main-modules/239.js#L1114) |
| 9199 | http | `/notifyP2PConflict` | notifyP2PConflict | body  | [代码](../evidence/main-modules/239.js#L1134) |
| 9199 | http | `/fmSearch` | fmSearch | query  | [代码](../evidence/main-modules/239.js#L1152) |
| 9199 | http | `/fmThumb` | fmThumb | query  | [代码](../evidence/main-modules/239.js#L1156) |
| 9199 | http | `/fmTransferFileToPC` | fmTransferFileToPC | body  | [代码](../evidence/main-modules/239.js#L1160) |
| 9199 | http | `/reportWifip2pStatus` | reportWifip2pStatus | body  | [代码](../evidence/main-modules/239.js#L116) |
| 9199 | http | `/getDeviceConnectStatus` | getDeviceConnectStatus | body  | [代码](../evidence/main-modules/239.js#L400) |
| 9199 | http | `/disconnectDevice` | disconnectDevice | body  | [代码](../evidence/main-modules/239.js#L712) |
| 9199 | http | `/getConnectedDevices` | getConnectedDevices |  | [代码](../evidence/main-modules/239.js#L766) |
| 9199 | http | `/checkAuthStatus` | checkAuthStatus |  | [代码](../evidence/main-modules/239.js#L109) |
| 9199 | websocket | `/` | wsRootRoute | query  | [代码](../evidence/main-modules/239.js#L1164) |
| 9200 | http | `/` | rootRoute | body  | [代码](../evidence/main-modules/1481.js#L40) |
| 9200 | http | `/skill/fmTransferFileToPC` | fmTransferFileToPC |  | [代码](../evidence/main-modules/1481.js#L109) |
| 9200 | http | `/skill/rightMenuTransfer` | rightMenuTransfer |  | [代码](../evidence/main-modules/1481.js#L114) |
| 9200 | http | `/skill/connectDevice` | connectDevice | body  | [代码](../evidence/main-modules/1481.js#L354) |
| 9200 | http | `/skill/getDeviceConnectStatus` | getDeviceConnectStatus | body  | [代码](../evidence/main-modules/1481.js#L168) |
| 9200 | http | `/skill/getSameAccountDevices` | getSameAccountDevices |  | [代码](../evidence/main-modules/1481.js#L125) |
| 9200 | http | `/skill/disconnectDevice` | disconnectDevice | body  | [代码](../evidence/main-modules/1481.js#L209) |
| 9200 | http | `/skill/getConnectedDevices` | getConnectedDevices |  | [代码](../evidence/main-modules/1481.js#L276) |
| 9200 | http | `/skill/getConnectedDeviceInfo` | getConnectedDeviceInfo | body  | [代码](../evidence/main-modules/1481.js#L310) |
| 9200 | http | `/skill/getSuiteInfo` | getSuiteInfo | body  | [代码](../evidence/main-modules/1481.js#L46) |
| 9200 | http | `/skill/localSearch/search` | searchComputerFiles | query  | [代码](../evidence/main-modules/1481.js#L398) |
| 9200 | http | `/skill/localSearch/getThumb` | getComputerFileThumbnail | body query  | [代码](../evidence/main-modules/1481.js#L422) |
| 9200 | http | `/skill/localSearch/openFileDetails` | openFilePropertiesPanel | body  | [代码](../evidence/main-modules/1481.js#L434) |
| 9200 | http | `/skill/localSearch/delete` | moveFileToRecycleBin | body  | [代码](../evidence/main-modules/1481.js#L444) |
| 9200 | http | `/skill/fmSearch` | fmSearch | query  | [代码](../evidence/main-modules/1481.js#L119) |
