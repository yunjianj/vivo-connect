// analysis/pretty/main.js:111520; webpack module 1491
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(1492)), i = n(234);
    let o = 0;
    t.default = class {
        static showSpaceFullTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CLOUD_SPACE_FULL
            });
        }
        static showFailNetWorkTips() {
            const e = Date.now();
            e - o < 3e3 || (o = e, r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.SYNC_FAIL_FROM_NETWORK
            }));
        }
        static showCheckLocalDataTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CHECK_LOCAL_DATA_COMMON
            });
        }
        static showTokenExpireTips() {
            console.error("正常执行了登录过期"), r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.TOKEN_EXPIRE,
                exdata: "client"
            });
        }
        static checkTokenExpire() {
            window._log.info("[CommonMsg.TOKEN_EXPIRE_CHECK] checkTokenExpire"), r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.TOKEN_EXPIRE_CHECK
            });
        }
        static showOpenSwitchTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CHECK_LOCAL_DATA_SINGLE
            });
        }
        static showCheckSyncDataTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CHECK_SYNCED_DATA_COMMON
            });
        }
        static showClearDataTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CLEAR_SYNCED_LOCAL_DATA_COMMON
            });
        }
        static closeGlobalTips() {
            r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.CLOSE_TIPS_COMMON
            });
        }
        static triggerCoverInstallLoginIn() {
            console.log("[覆盖安装后,触发LogIn]"), r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.COVER_INSTALL_LOGIN_IN
            });
        }
        static closeSyncTips() {
            window._log.info("[CommonMsg.SYNC_NOTIFI_CLOSE]"), r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.SYNC_NOTIFI_CLOSE
            });
        }
        static quitAppTips(e) {
            window._log.info("[CommonMsg.QUIT_TIPS]"), r.default.publish(i.VivoSyncSubscribeModule.VIVO_SYNC_GLOGAL_MESSAGE, {
                cmd: i.CommonMsg.QUIT_TIPS,
                exdata: e
            });
        }
    };
}
