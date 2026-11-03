// analysis/pretty/main.js:15681; webpack module 90
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSkillServerPort = t.setSkillServerPort = t.setPcsuiteServerPort = void 0;
    let r = 9199, i = 9200;
    t.setPcsuiteServerPort = function(e) {
        r = e;
    }, t.setSkillServerPort = function(e) {
        i = e;
    }, t.getSkillServerPort = function() {
        return i;
    }, t.default = {
        connectionServerPort: 10380,
        mirrorServcerPort: 10381,
        VDFS_PC_PORT: 5679,
        RELAY_PC_PORT: 8904,
        VDFS_MOBILE_DEVICE_PORT: 5678,
        RELAY_MOBILE_DEVICE_PORT: 8903,
        APK_VERSION_CODE: 6601,
        BUSY_ERROR_NAME: "pcsuite_working",
        blueWlanPreScanTime: 3e5,
        localNetworkPreScanTime: 3e5,
        enableBleAndLocalNetwork: !1,
        UItestMode: !1,
        VIVOES_SERVER_URL: "http://127.0.0.1:9197/",
        PCSUITE_SERVER_URL: `http://127.0.0.1:${r}/`,
        OFFICAL_WEBSITE: "https://pc.vivo.com/#/",
        APP_SERVER_PORT: 9198,
        WIN_VPN_NAME_LIST: [ "cscan.exe" ],
        enbale_upgrade: !0,
        UPGRADE: {
            PCSUITE_MIN_VERSION: 70007,
            PCSUITE_MIN_VERSION_EX: 70007,
            CONNBASE_MIN_VERSION: 1155,
            CAN_UPGRADE_CONNBASE_MIN_VERSION: 1155,
            EXCEPTION_VERSION: [ 47 ],
            PCSUITE_UPGRADE_FILEPATH: "pcsuite.apk",
            CONNBASE_UPGRADE_FILEPATH: "connbase.apk",
            ENP_MIN_VERSION: 1
        },
        SUPPORT_CLOUD: {
            PCSUITE_MIN_VERSION: 40001,
            CONNBASE_MIN_VERSION: 2100,
            VDFS_MIN_VERSION: 20000404,
            CONNECT_CENTER_MIN_VERSION: 10300
        }
    };
}
