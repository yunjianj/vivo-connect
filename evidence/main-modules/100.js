// analysis/pretty/main.js:16514; webpack module 100
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OtherConnectType = t.CONNECT_SOURCE = t.CONNECT_DIALOG_SIZE = t.CLOUD_MC_NAME = t.SYSTEM_STATUS = t.RECONNECT_ERROR_CODE = t.CLOSE_CLOUD_CODE = t.CloudConnectResCode = t.CONNECT_ROUTER = t.CONNECT_MODE = t.ACTION_RESULT_DAILOG_TYPE = t.APP_ACTION_TYPE = t.APP_NAME = t.APP_PROCESS_EVENT_NAME = t.AppProcessMsgType = t.APP_HASH_ID_LIST = t.AppProcessName = t.APPIPCMsgType = t.DeviceType = t.VolumeType = t.NETWORK_SCAN_STATE = t.SCAN_STATE = t.PRE_CONNECT_TYPE = t.PRE_DISCOVERY_TYPE = t.CLOUD_RECONNECT_STATE = t.CONNECT_STATE = void 0, 
    function(e) {
        e[e.READY2CONNECT = 0] = "READY2CONNECT", e[e.UNCONNECT = 1] = "UNCONNECT", e[e.OFFLINE = 2] = "OFFLINE", 
        e[e.CONNECTING = 3] = "CONNECTING", e[e.SUCCESS = 4] = "SUCCESS", e[e.FAILED = 5] = "FAILED", 
        e[e.REJECT = 6] = "REJECT", e[e.CANCEL = 7] = "CANCEL", e[e.REQUEST = 8] = "REQUEST", 
        e[e.SCAN_CONNECTING = 9] = "SCAN_CONNECTING", e[e.END = 10] = "END";
    }(t.CONNECT_STATE || (t.CONNECT_STATE = {})), function(e) {
        e[e.NOT_RECONNECT = 0] = "NOT_RECONNECT", e[e.READY_RECONNECT = 1] = "READY_RECONNECT", 
        e[e.RECONNECTING = 2] = "RECONNECTING", e[e.RECONNECT_SUCC = 3] = "RECONNECT_SUCC", 
        e[e.RECONNECT_FAILED = 4] = "RECONNECT_FAILED", e[e.RECONNECT_CANCEL = 5] = "RECONNECT_CANCEL", 
        e[e.RECONNECT_END = 6] = "RECONNECT_END";
    }(t.CLOUD_RECONNECT_STATE || (t.CLOUD_RECONNECT_STATE = {})), function(e) {
        e.NEARBY = "nearby", e.FARAWAY = "faraway", e.BOTH = "nearby|faraway";
    }(t.PRE_DISCOVERY_TYPE || (t.PRE_DISCOVERY_TYPE = {})), function(e) {
        e.FARAWAYWLAN = "FARAWAYWLAN", e.FARAWAYBT = "FARAWAYBT", e.NEARBYBT = "NEARBYBT", 
        e.NEATBYBLE = "NEATBYBLE";
    }(t.PRE_CONNECT_TYPE || (t.PRE_CONNECT_TYPE = {})), function(e) {
        e[e.UNSCAN = 0] = "UNSCAN", e[e.SCANING = 1] = "SCANING", e[e.NEED_OPEN_WIFI = 2] = "NEED_OPEN_WIFI", 
        e[e.TIMEOUT = 3] = "TIMEOUT", e[e.LIST_DEVICES = 4] = "LIST_DEVICES", e[e.NOT_SUPPORT = 5] = "NOT_SUPPORT";
    }(t.SCAN_STATE || (t.SCAN_STATE = {})), function(e) {
        e[e.UNSCAN = 0] = "UNSCAN", e[e.SCANING = 1] = "SCANING", e[e.NEED_OPEN_WIFI = 2] = "NEED_OPEN_WIFI", 
        e[e.TIMEOUT = 3] = "TIMEOUT", e[e.LIST_DEVICES = 4] = "LIST_DEVICES", e[e.NOT_SUPPORT = 5] = "NOT_SUPPORT";
    }(t.NETWORK_SCAN_STATE || (t.NETWORK_SCAN_STATE = {})), function(e) {
        e[e.TYPE_INTERNAL = 0] = "TYPE_INTERNAL", e[e.TYPE_EXTERNAL = 1] = "TYPE_EXTERNAL";
    }(t.VolumeType || (t.VolumeType = {})), function(e) {
        e.PHONE = "phone", e.PAD = "pad", e.PC = "pc";
    }(t.DeviceType || (t.DeviceType = {})), function(e) {
        e.MESSAGE = "MESSAGE", e.OPEN = "OPEN", e.CLOSE = "CLOSE", e.DESTROY = "DESTROY", 
        e.PROCESS_ALIVE = "PROCESSALIVE";
    }(t.APPIPCMsgType || (t.APPIPCMsgType = {})), function(e) {
        e.VDFS_SERVER = "VDFSSERVER", e.VDFS_CLIENT = "VDFSCLIENT", e.VIVOSCREEN = "VIVOSCREEN", 
        e.EXTENDEDSCREEN = "EXTENDEDSCREEN", e.EXAMPLE = "EXAMPLE", e.REMOTE_CONTROL = "REMOTECONTROL", 
        e.KEYBOARD_MOUSE_COORDINATION = "KEYBOARDMOUSECOORDINATION", e.DRAG_FILE = "DRAG_FILE", 
        e.BACKUP = "BACKUP", e.VIVO_SCREEN_CAPTURE = "SUITESC", e.PHONE_CALL = "PHONE_CALL", 
        e.PC_MODE = "PC_MODE", e.SHARE_CAMERA = "SHARE_CAMERA", e.VIVO_CLAW = "VIVO_CLAW";
    }(t.AppProcessName || (t.AppProcessName = {})), function(e) {
        e.EXTENDEDSCREEN = "extendedScreen", e.BACKUP = "backup", e.DRAG_FILE = "dragfile", 
        e.EXAMPLE = "example", e.PHONE_CALL = "phonecall", e.REMOTE_CONTROL = "remoteControl", 
        e.VDFS_CLIENT = "vdfsClient", e.VDFS_SERVER = "vdfsServer", e.VIVO_SCREEN_CAPTURE = "suitesc", 
        e.KEYBOARD_MOUSE_COORDINATION = "keyboardMouseCoordination", e.PC_MODE = "PCMode", 
        e.VIVO_SCREEN = "vivoScreen";
    }(t.APP_HASH_ID_LIST || (t.APP_HASH_ID_LIST = {})), function(e) {
        e.FORWARD = "forward:", e.RPC = "command:", e.MSG = "msg:", e.RECEIPT = "receipt:", 
        e.HEARTBEAT = "heartbeat:", e.CLOSE = "close:";
    }(t.AppProcessMsgType || (t.AppProcessMsgType = {})), function(e) {
        e.ON_STARTUP_PARAMENTS = "on_startup_paraments", e.ON_MOBILE_DEVICE_CONNECTED = "on_mobile_device_connected", 
        e.ON_CLOUD_MOBILE_DEVICE_CONNECTED = "on_cloud_mobile_device_connected", e.ON_DISCONNECTE_THIRD_DEVICE = "onDisconnecteThirdDevice", 
        e.ON_DAILOG_SHOW_AND_SELECT = "on_dailog_show_and_select", e.GET_KEY_MOUSE_COOPERATION_TCP_CONNECT_STATE_REQUEST = "getKeyMouseCooperationTcpConnectStateRequest", 
        e.bIZ_ACTION = "bizAction", e.ON_MOBILE_DEVICE_DISCONNECTED = "on_mobile_device_disconnected", 
        e.NOTIFY_SERVICE_OFF = "notify_service_off", e.ON_PHONE_BIZ_APP_CONNECTED = "on_phone_biz_app_connected", 
        e.ON_PHONE_BIZ_APP_DISCONNECTED = "on_phone_biz_app_disconnected", e.ON_STATE_CHANGED = "on_state_changed", 
        e.ON_START_KEY_MOUSE_COOPERATION_RESULT = "onStartKeyMouseCooperationResult", e.ON_POSITION_INFO_CHANGED = "on_position_info_changed", 
        e.bIZ_ACTION_RESULT = "bizActionResult", e.ON_FILE_COUNT_TOO_MUCH = "on_file_count_too_much", 
        e.ON_RELAY_CONNECT_STATUS = "on_relay_connect_status", e.ON_CLIPBOARD_EVENT = "on_clipboard_event", 
        e.ON_NEED_AUTHORIZATION = "on_need_authorization", e.GET_PERMISSION_STATUS = "get_permission_status", 
        e.GET_KEY_MOUSE_COOPERATION_STATE = "getKeyMouseCooperationState", e.GET_PC_STATE = "getPcState", 
        e.START_UP = "startup", e.READY = "ready", e.ON_UPDATA_MOBILE_DEVICE_ID = "on_updata_mobile_device_id", 
        e.EXTSCREEN_STATUS = "extscreen_status", e.REQUEST_SCREEN_CAPTURE_ACCESS = "request_screen_capture_access", 
        e.REQUEST_ACCESSIBILITY_ACCESS = "request_accessibility_access", e.REQUEST_SYSTEM_EVENTS_ACCESS = "request_system_events_access", 
        e.OPEN_CONTROLDOWN = "open_controldown", e.CONFIG_STATUS = "config_status", e.ACCESS_ENABLED = "access_enabled", 
        e.ON_SIDEBAR_INFO_CHANGED = "on_sidebar_info_changed", e.ON_SCREEN_RESOLUTION_CHANGE = "on_screen_resolution_change", 
        e.ON_SCREEN_OPENFILE_METHOD_CHNAGE = "openFileMethod", e.ON_FIRST_FRAME_DATA_FROM_MIRROR = "on_first_frame_data_from_mirror", 
        e.PICTURE_RELAY_AUTH = "picture_relay_auth", e.PCMODE_AUDIO_OUTPUT_DEVICE = "pcModeAudioOutputDevice", 
        e.PCMODE_FILE_OPEN_METHOD = "pcModeFileOpenMethod", e.EXIT_AND_SHOW_DIALOG = "exit_and_show_dialog", 
        e.GET_APP_STATE = "get_app_state", e.CLOSE_APP_ACTION = "close_app_action", e.PC_SET_VCAM_OPTION = "pc_set_vcam_option", 
        e.PHONE_SET_VCAM_STATE = "phone_set_vcam_state", e.PC_SET_VCAM_STATE = "pc_set_vcam_state", 
        e.PC_VCAM_START = "pc_vcam_start", e.ON_LAUNCH_TIME = "on_launch_time", e.SWITCH_APP_ACTION = "switch_app_action";
    }(t.APP_PROCESS_EVENT_NAME || (t.APP_PROCESS_EVENT_NAME = {})), function(e) {
        e.ANYWHERE_CONTROL = "anywhere_control", e.VDFS = "vdfs", e.SUPER_CLIPBOARD = "super_clipboard", 
        e.VIVO_RELAY = "vivo_relay", e.VIVO_SCREEN = "vivo_screen", e.EXTENDED_SCREEN = "extended_screen", 
        e.BACKUP_FILE = "backup_file", e.PC_MODE = "PCMode";
    }(t.APP_NAME || (t.APP_NAME = {})), function(e) {
        e.OPEN = "open", e.CLOSE = "close";
    }(t.APP_ACTION_TYPE || (t.APP_ACTION_TYPE = {})), function(e) {
        e.DAILOG_MOBILED_DEVICE_KEYMOUSECOOPERATION_SWITCH_OFF = "dailog_mobiled_device_keymousecooperation_switch_off", 
        e.DAILOG_VIVO_SCREEN_BIZ_CONFLICT = "dailog_vivo_screen_biz_conflict", e.DAILOG_EXT_SCREEN_BIZ_CONFLICT = "dailog_ext_screen_biz_conflict", 
        e.DAILOG_MOBILE_DEVICE_NEED_CLOSE_OTHER_KEYMOUSECOOPERATION = "dailog_mobile_device_need_close_other_keymousecooperation", 
        e.DAILOG_PHONE_PAD_PC_SYNC_KEYMOUSECOOPERATION = "dailog_phone_pad_pc_sync_keymousecooperation", 
        e.DIALOG_FIREWALL_GUIDE = "dailog_firewall_guide", e["DIALOG_NETWORK_CHANNEL_2.4G"] = "network_channel_2.4G", 
        e.DIALOG_REMOTE_CONTROL_KMS_CONFLICT = "dialog_remote_control_and_kms_conflict", 
        e.DIALOG_KMS_EXT_SCREEN_CONFLICT = "dialog_kms_ext_screen_conflict", e.DIALOG_KMS_OTHER_EXT_SCREEN_CONFLICT = "dialog_kms_other_ext_screen_conflict", 
        e.DIALOG_KMS_VIVO_SCREEN_REMOTE_CONTROL_CONFLICT = "dialog_kms_vivo_screen_remote_control_conflict", 
        e.DIALOG_KMS_VIVO_SCREEN_OTHER_EXT_SCREEN_CONFLICT = "dialog_kms_vivo_screen_other_ext_screen_conflict", 
        e.DIALOG_MOBILE_DEVICE_CONNECT_DEVICE_SERVER_SWITCH_OFF = "dialog_mobile_device_connect_device_server_switch_off", 
        e.DIALOG_REMOTE_CONTROL_AND_PC_MODE_CONFLICT_KMCS = "dialog_remote_control_and_pc_mode_conflict", 
        e.DIALOG_OTHER_EXT_SCREEN_AND_PC_MODE_CONFLICT_KMCS = "dialog_other_ext_screen_and_pc_mode_conflict", 
        e.DIALOG_PC_MODE_CONFLICT_KMCS = "dialog_pc_mode_conflict", e.DIALOG_KEY_MOUSE_COOPERATION_CONFLICT = "dialog_key_mouse_cooperation_conflict", 
        e.DAILOG_VIVO_SCREEN_EXT_SCREEN_CONFLICT = "dialog_vivo_screen_ext_screen_conflict", 
        e.DIALOG_EXT_SCREEN_KMS_CONFLICT = "dialog_ext_screen_and_kms_conflict", e.DIALOG_EXT_SCREEN_REMOTE_CONTROL_CONFLICT = "dialog_ext_screen_and_remote_control_conflict", 
        e.DIALOG_EXT_SCREEN_EXT_SCREEN_CONFLICT = "dialog_ext_screen_and_ext_screen_conflict", 
        e.DIALOG_EXT_SCREEN_KMS_KMS_CONFLICT = "dialog_ext_screen_and_kms_kms_conflict", 
        e.DIALOG_EXT_SCREEN_KMS_KMS_PC_MODE_CONFLICT = "dialog_ext_screen_and_kms_kms_pc_mode_conflict", 
        e.DIALOG_EXT_SCREEN_OTHER_KMS_CONFLICT = "dialog_ext_screen_and_other_kms_conflict", 
        e.DIALOG_EXT_SCREEN_VIVO_SCREEN_CONFLICT = "dialog_ext_screen_and_vivo_screen_conflict", 
        e.DIALOG_EXT_SCREEN_PC_MODE_CONFLICT = "dialog_ext_screen_and_pc_mode_conflict", 
        e.DIALOG_EXT_SCREEN_KMS_VIVO_SCREEN_CONFLICT = "dialog_ext_screen_and_kms_vivo_screen_conflict", 
        e.DIALOG_EXT_SCREEN_OTHER_KMS_PC_MODE_CONFLICT = "dialog_ext_screen_and_other_kms_pc_mode_conflict", 
        e.DIALOG_EXT_SCREEN_KMS_PC_MODE_CONFLICT = "dialog_ext_screen_and_kms_pc_mode_conflict", 
        e.DIALOG_EXT_SCREEN_EXT_SCREEN_VIVO_SCREEN_CONFLICT = "dialog_ext_screen_and_ext_screen_vivo_screen_conflict", 
        e.DIALOG_EXT_SCREEN_EXT_SCREEN_PC_MODE_CONFLICT = "dialog_ext_screen_and_ext_screen_pc_mode_conflict", 
        e.DIALOG_EXT_SCREEN_VIVO_SCREEN_REMOTE_CONTROL_CONFLICT = "dialog_ext_screen_and_vivo_screen_remote_control_conflict", 
        e.DIALOG_EXT_SCREEN_PC_MODE_REMOTE_CONTROL_CONFLICT = "dialog_ext_screen_and_pc_mode_remote_control_conflict", 
        e.UNKNOWN = "";
    }(t.ACTION_RESULT_DAILOG_TYPE || (t.ACTION_RESULT_DAILOG_TYPE = {})), function(e) {
        e.USB = "USB", e.SCAN = "SCAN", e.BLE = "BLE", e.WLAN = "WLAN", e.QCLOUD = "CLOUD";
    }(t.CONNECT_MODE || (t.CONNECT_MODE = {})), function(e) {
        e.version = "/version", e.baseinfo = "/base-info", e.ws = "/ws/heart-beat", e.installapk = "/upload/install-apk", 
        e.test = "/test", e.download = "/download/down_files", e.devConnectRequest = "DevConnectRequest", 
        e.handshake = "handshake", e.cloudAuth = "/fileManagerAuth", e.fileManagerPermission = "/fileManagerPermission", 
        e.fileManagerPermission_response = "/fileManagerPermission_response", e.fileManagerStorage = "/fileManagerStorage", 
        e.closeCloudConnect = "/close_cloud_connect", e.PC_CONFIG = "PC_CONFIG:", e.takeAction = "/takeAction", 
        e.PC_GET_CAMERA_STATUS = "PC_GET_CAMERA_STATUS:";
    }(t.CONNECT_ROUTER || (t.CONNECT_ROUTER = {})), function(e) {
        e.SUCCESS = "0000", e.REFUSE = "0004", e.SCREEN_LOCKED = "0007", e.BUSY = "0009", 
        e.PRIVACY_NOT_AGREED = "0010", e.PRIVACY_TIMEOUT = "0016", e.TRANSFER_BUSY = "0020", 
        e.TIMEOUT = "9999", e.FAILED = "9998", e.CANCEL = "9997";
    }(t.CloudConnectResCode || (t.CloudConnectResCode = {})), function(e) {
        e[e.cloudNearSwitchClose = 2e3] = "cloudNearSwitchClose", e[e.cloudFailedClose = 20001] = "cloudFailedClose", 
        e[e.cloudCancelClose = 20002] = "cloudCancelClose", e[e.oppositePcsuiteExit = 21e3] = "oppositePcsuiteExit", 
        e[e.cloudFreeClose = 2e4] = "cloudFreeClose", e[e.normalClose = 1012] = "normalClose", 
        e[e.logoutDisconnect = 2002] = "logoutDisconnect", e[e.cancelReconnect = 2003] = "cancelReconnect";
    }(t.CLOSE_CLOUD_CODE || (t.CLOSE_CLOUD_CODE = {})), function(e) {
        e[e.NOT_DEVICE = 0] = "NOT_DEVICE", e[e.NOT_DEVICE_ID = 1] = "NOT_DEVICE_ID", e[e.START_CONNECT_ERR = 2] = "START_CONNECT_ERR", 
        e[e.HANDSHAKE_ERR = 3] = "HANDSHAKE_ERR", e[e.VERSION_ERR = 4] = "VERSION_ERR", 
        e[e.SCREEN_LOCKED = 5] = "SCREEN_LOCKED", e[e.OPPOSITE_BUSY = 6] = "OPPOSITE_BUSY", 
        e[e.BASE_INFO_ERR = 7] = "BASE_INFO_ERR", e[e.RECONNECT_TIMEOUT = 8] = "RECONNECT_TIMEOUT", 
        e[e.FAILED = 9] = "FAILED";
    }(t.RECONNECT_ERROR_CODE || (t.RECONNECT_ERROR_CODE = {})), function(e) {
        e.BLUETOOTH = "bluetooth", e.WIFI = "wifi", e.LogOn = "LogOn";
    }(t.SYSTEM_STATUS || (t.SYSTEM_STATUS = {})), function(e) {
        e.TARGET_NAME = "com.vivo.pcsuite", e.CONNECT_NAME = "com.vivo.pcsuite.connect", 
        e.NOTE_MC = "com.vivo.pcsuite.note", e.FM_MC = "com.vivo.pcsuite.fileManager", e.VDFS_SERVER_SOURCE_PC_NAME = "com.vivo.vdfsServer", 
        e.VDFS_SERVER_TARGET_MOBILE_NAME = "vdfs", e.VDFS_CLIENT_SOURCE_PC_NAME = "com.vivo.vdfsClient", 
        e.VDFS_CLIENT_TARGET_MOBILE_NAME = "vdfsfile";
    }(t.CLOUD_MC_NAME || (t.CLOUD_MC_NAME = {})), function(e) {
        e[e.BIG_DIALOG = 1] = "BIG_DIALOG", e[e.SMALL_DIALOG = 2] = "SMALL_DIALOG", e[e.CUSTOMIZE_DIALOG = 3] = "CUSTOMIZE_DIALOG";
    }(t.CONNECT_DIALOG_SIZE || (t.CONNECT_DIALOG_SIZE = {})), function(e) {
        e.HOME_START_CONNECT = "1", e.HOME_INSTANTLY_CONNECT = "2", e.DEVICES_DIALOG_START_CONNECT = "3", 
        e.DEVICES_DIALOG_INSTANTLY_CONNECT = "4", e.MULTI_CONNECT_DIALOG = "5", e.FEEL_TRANSF_BTN = "1", 
        e.FEEL_TRANSF_DROP = "2", e.FEEL_TRANSF_RIGHT_MENU = "3", e.FEEL_TRANSF_RETRY = "4", 
        e.OTHER_CONNECT = "-1";
    }(t.CONNECT_SOURCE || (t.CONNECT_SOURCE = {})), function(e) {
        e.transferConnect = "transferConnect", e.switchConnect = "switchConnect", e.recoverConnect = "recoverConnect", 
        e.reconnection = "reconnection";
    }(t.OtherConnectType || (t.OtherConnectType = {}));
}
