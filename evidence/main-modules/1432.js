// analysis/pretty/main.js:105291; webpack module 1432
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VIVOES_SERVICE_STEPS = t.CONNECT_STEPS = t.CONNECT_DIRECTION = t.TYPE_NAME = t.CONNECT_TYPE = void 0, 
    function(e) {
        e.USB = "U", e.SCAN = "S", e.BLE = "B", e.WLAN = "N", e.CLOUD = "C";
    }(t.CONNECT_TYPE || (t.CONNECT_TYPE = {})), function(e) {
        e.U = "usb连接", e.S = "扫码连接", e.B = "蓝牙连接", e.N = "局域网连接", e.C = "云连接";
    }(t.TYPE_NAME || (t.TYPE_NAME = {})), function(e) {
        e.PC_TO_PHONE = "pc2phone", e.PHONE_TO_PC = "phone2pc";
    }(t.CONNECT_DIRECTION || (t.CONNECT_DIRECTION = {})), t.CONNECT_STEPS = {
        PING_IP: {
            code: "PI",
            descriptor: "ping手机ip地址",
            name: "ping手机ip地址",
            classify: "common",
            result: {
                OK: [ "0", "可以ping通" ],
                FAILED: [ "-1", "无法ping通" ]
            }
        },
        TELNET_IP_PORT: {
            code: "TI",
            descriptor: "telnet手机ip+port",
            name: "telnet手机ip+port",
            classify: "common",
            result: {
                OK: [ "0", "telnet成功" ],
                FAILED: [ "-1", "telnet失败" ]
            }
        },
        GET_VERSION: {
            code: "VC",
            descriptor: "version接口请求",
            name: "version接口请求",
            classify: "common",
            result: {
                OK: [ "0", "version接口请求成功" ],
                FAILED: [ "-1", "version接口请求失败" ]
            }
        },
        PEER_BUSY: {
            code: "PB",
            descriptor: "对端正忙",
            name: "对端正忙",
            classify: "common",
            result: {
                OK: [ "0", "对端正忙", "-1" ]
            }
        },
        NEED_UPGRADE: {
            code: "UP",
            descriptor: "手机端vivo办公套件需要升级",
            name: "手机端vivo办公套件需要升级",
            classify: "common",
            result: {
                OK: [ "0", "手机端vivo办公套件需要升级", "-1" ]
            }
        },
        PCSUITE_NEED_UPGRADE: {
            code: "PU",
            descriptor: "pc端vivo办公套件需要升级",
            name: "pc端vivo办公套件需要升级",
            classify: "common",
            result: {
                OK: [ "0", "pc端vivo办公套件需要升级", "-1" ]
            }
        },
        GET_BASEINFO: {
            code: "BI",
            descriptor: "baseinfo接口请求",
            name: "baseinfo接口请求",
            classify: "common",
            result: {
                OK: [ "0", "baseinfo接口请求成功" ],
                FAILED: [ "-1", "baseinfo接口请求失败" ]
            }
        },
        CONNECT_WS: {
            code: "WS",
            descriptor: "连接手机端10380端口websocket",
            name: "连接手机端10380端口websocket",
            classify: "common",
            result: {
                OK: [ "0", "连接手机端10380端口websocket成功" ],
                FAILED: [ "-1", "连接手机端10380端口websocket失败" ]
            }
        },
        CANCEL_CONNECT: {
            code: "CL",
            descriptor: "用户主动取消",
            name: "用户主动取消",
            classify: "common",
            result: {
                OK: [ "0", "用户主动取消成功", "-1" ]
            }
        },
        UNKNOWN_FAILE: {
            code: "UN",
            descriptor: "未知原因失败",
            name: "未知原因失败",
            classify: "common",
            result: {
                OK: [ "0", "未知原因失败" ]
            }
        },
        ADB_TRACKER_ERR: {
            code: "TR",
            descriptor: "adb tracker报错",
            name: "adb tracker报错",
            classify: "USB",
            result: {
                OK: [ "0", "adb tracker报错" ]
            }
        },
        ADB_IS_INSTALLED: {
            code: "IN",
            descriptor: "是否安装了pcsuite",
            name: "是否安装了pcsuite",
            classify: "USB",
            result: {
                OK: [ "0", "已经安装了pcsuite" ],
                FAILED: [ "-1", "未安装了pcsuite", "-1" ]
            }
        },
        ADB_START_PHONE_PCSUITE: {
            code: "SA",
            descriptor: "拉起手机端vivo办公套件",
            name: "拉起手机端vivo办公套件",
            classify: "USB",
            result: {
                OK: [ "0", "拉起手机端vivo办公套件成功" ],
                FAILED: [ "-1", "拉起手机端vivo办公套件失败" ]
            }
        },
        ADB_START_PHONE_SERVICE: {
            code: "SS",
            descriptor: "启动手机端连接服务",
            name: "启动手机端连接服务",
            classify: "USB",
            result: {
                OK: [ "0", "启动手机端连接服务成功" ],
                FAILED: [ "-1", "启动手机端连接服务失败" ]
            }
        },
        ADB_START_PHONE_MAPPING: {
            code: "SF",
            descriptor: "向手机端映射连接端口10380",
            name: "向手机端映射连接端口10380",
            classify: "USB",
            result: {
                OK: [ "0", "向手机端映射连接端口成功" ],
                FAILED: [ "-1", "向手机端映射连接端口失败" ]
            }
        },
        PHONE_LOCK: {
            code: "LS",
            descriptor: "手机端已锁屏",
            name: "手机端已锁屏",
            classify: "common",
            result: {
                OK: [ "0", "手机端已锁屏", "-1" ]
            }
        },
        PRIVACY_NOT_AGREED: {
            code: "PN",
            descriptor: "手机端隐私协议未同意",
            name: "手机端隐私协议未同意",
            classify: "common",
            result: {
                OK: [ "0", "手机端隐私协议未同意", "-1" ]
            }
        },
        PC_CANCEL_CONNECT: {
            code: "AC",
            descriptor: "PC端取消连接",
            name: "PC端取消连接",
            classify: "common",
            result: {
                OK: [ "0", "PC端取消连接", "-1" ]
            }
        },
        CREATE_CLOUD_CONNECT: {
            code: "CC",
            descriptor: "建立云连接通道",
            name: "建立云连接通道",
            classify: "CLOUD",
            result: {
                OK: [ "0", "建立云连接通道" ],
                FAILED: [ "-1", "建立云连接通道失败" ]
            }
        },
        CLOUD_HANDSHAKE: {
            code: "CH",
            descriptor: "云连接handshake请求",
            name: "云连接handshake请求",
            classify: "CLOUD",
            result: {
                OK: [ "0", "云连接handshake请求成功" ],
                FAILED: [ "-1", "云连接handshake请求失败" ]
            }
        }
    }, t.VIVOES_SERVICE_STEPS = {
        SEARCH_BLE_GET_CONNECT_STATE: {
            code: "CI",
            descriptor: "获取PC端连接状态",
            name: "获取PC端连接状态",
            classify: "BLE",
            result: {
                OK: [ "0", "处于可连接状态" ],
                FAILED: [ "-1", "处于连接中状态" ]
            }
        },
        SEARCH_BLE_FIND_DEVICES: {
            code: "NF",
            descriptor: "查找设备是否在设备列表中",
            name: "查找设备是否在设备列表中",
            classify: "BLE",
            result: {
                OK: [ "0", "查找到设备" ],
                FAILED: [ "-1", "查找设备失败" ],
                CANCEL: [ "-90", "查找设备时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "查找设备时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_CONNECT_BLUETOOTH_ADDRESS: {
            code: "BC",
            descriptor: "通过Mac地址连接手机",
            name: "通过Mac地址连接手机",
            classify: "BLE",
            result: {
                OK: [ "0", "通过蓝牙地址连接手机成功" ],
                FAILED: [ "-1", "通过蓝牙地址连接手机失败" ],
                CANCEL: [ "-90", "通过蓝牙地址连接时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "通过蓝牙地址连接时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_GET_GATTSERVICE: {
            code: "GS",
            descriptor: "获取手机端的GATTSERVICE",
            name: "获取手机端的GATTSERVICE",
            classify: "BLE",
            result: {
                OK: [ "0", "获取gattservice成功" ],
                STATE_ERROR: [ "-1", "GattCommunicationStatus通讯状态失败" ],
                CANCEL: [ "-90", "获取gattservice时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "获取gattservice时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_GET_CHARACTERISTICS: {
            code: "GC",
            descriptor: "获取手机端的CHARACTERISTICS",
            name: "获取手机端的CHARACTERISTICS",
            classify: "BLE",
            result: {
                OK: [ "0", "获取读写特征值成功" ],
                RECEIVER_EXTRACHARACTERISTICS_ERROR: [ "-1", "获取接收特征Characteristics失败" ],
                CONFIGURATIONDESCRIPTOR_ERROR: [ "-2", "配置特征描述符失败" ],
                REQUEST_CHARACTERISTICS_ERROR: [ "-3", "获取发送特征Characteristics失败" ],
                CANCEL: [ "-90", "获取CHARACTERISTICS时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "获取CHARACTERISTICS时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_GET_WIFI_DIRECTMAC: {
            code: "AA",
            descriptor: "获取Mac地址",
            name: "获取Mac地址",
            classify: "BLE",
            result: {
                OK: [ "0", "获取Mac地址成功" ],
                MACISEMPTY: [ "-1", "Mac地址为空" ]
            }
        },
        SEARCH_BLE_CREATE_AP: {
            code: "AP",
            descriptor: "创建AP",
            name: "创建AP",
            classify: "BLE",
            result: {
                OK: [ "0", "创建AP成功" ],
                FAILED: [ "-1", "创建AP失败" ]
            }
        },
        SEARCH_BLE_SEND_AP_INFO: {
            code: "PC",
            descriptor: "发送AP信息到手机",
            name: "发送AP信息到手机",
            classify: "BLE",
            result: {
                OK: [ "0", "发送AP信息到手机成功" ],
                FAILED: [ "-1", "发送AP信息到手机失败" ],
                CANCEL: [ "-90", "发送AP信息到手机时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "发送AP信息到手机时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_RECV_RESPONSE: {
            code: "TO",
            descriptor: "等待手机端响应",
            name: "等待手机端响应",
            classify: "BLE",
            result: {
                OK: [ "0", "手机端同意连接" ],
                TIMEOUT: [ "-1", "超时，手机端无响应" ],
                BUSY: [ "-2", "手机端状态忙", "-1" ],
                REJECT: [ "-3", "手机端拒绝", "-1" ],
                CANCEL: [ "-90", "等待手机端响应时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "等待手机端响应时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_RECV_PHONE_IP: {
            code: "NI",
            descriptor: "等待手机端上报IP",
            name: "等待手机端上报IP",
            classify: "BLE",
            result: {
                OK: [ "0", "手机上报IP成功" ],
                FAILED: [ "-1", "手机端没有返回IP" ],
                PHONECANCEL: [ "-2", "手机端取消连接", "-1" ],
                CANCEL: [ "-90", "等待手机上报IP时用户取消", "-1" ],
                BLE_ERROR: [ "-91", "等待手机上报IP时蓝牙状态异常" ]
            }
        },
        SEARCH_BLE_CREATE_WIFIP2P: {
            code: "CW",
            descriptor: "创建wifip2p",
            name: "创建wifip2p",
            classify: "BLE",
            result: {
                OK: [ "0", "创建wifip2p成功" ],
                FAILED: [ "-1", "创建wifip2p失败" ],
                CANCEL: [ "-90", "创建wifip2p时用户取消", "-1" ],
                OPEN_AP: [ "-21", "已打开热点AP且连接了设备", "-1" ],
                OPEN_WIFI_ERROR: [ "-20", "打开wifi开关失败" ]
            }
        },
        SEARCH_BLE_PARSER_PHONE_IP_RESPONSE: {
            code: "PR",
            descriptor: "解析手机端上报IP报文",
            name: "解析手机端上报IP报文",
            classify: "BLE",
            result: {
                OK: [ "0", "解析手机端上报IP报文成功" ],
                FAILED: [ "-1", "解析手机端上报IP报文失败" ],
                PHONECANCEL: [ "-2", "手机端取消连接", "-1" ],
                PHONE_SAP_ENABLE: [ "-5", "手机端返回热点已开启状态", "-1" ],
                PHONE_P2P_CONFLICT: [ "-6", "手机端返回P2P冲突状态", "-1" ]
            }
        },
        SEARCH_WLAN_GET_CONNECT_STATE: {
            code: "WI",
            descriptor: "获取PC端WLAN连接状态",
            name: "获取PC端WLAN连接状态",
            classify: "WLAN",
            result: {
                OK: [ "0", "WLAN处于可连接状态" ],
                FAILED: [ "-1", "WLAN处于连接中状态" ]
            }
        },
        SEARCH_WLAN_FIND_DEVICES: {
            code: "WF",
            descriptor: "查找WLAN设备是否在设备列表中",
            name: "查找WLAN设备是否在设备列表中",
            classify: "WLAN",
            result: {
                OK: [ "0", "查找到WLAN设备" ],
                FAILED: [ "-1", "查找WLAN设备失败" ],
                CANCEL: [ "-90", "查找WLAN设备时用户取消", "-1" ]
            }
        },
        SEARCH_WLAN_CONNECT_SERVER: {
            code: "TF",
            descriptor: "连接手机端10191端口",
            name: "连接手机端10191端口",
            classify: "WLAN",
            result: {
                OK: [ "0", "连接手机端10191端口成功" ],
                FAILED: [ "-1", "连接手机端10191端口失败" ]
            }
        },
        SEARCH_WLAN_RECV_RESPONSE: {
            code: "WO",
            descriptor: "WLAN等待手机端响应",
            name: "WLAN等待手机端响应",
            classify: "WLAN",
            result: {
                OK: [ "0", "手机端同意连接" ],
                TIMEOUT: [ "-1", "超时，手机端无响应" ],
                BUSY: [ "-2", "手机端状态忙", "-1" ],
                REJECT: [ "-3", "手机端拒绝", "-1" ],
                CANCEL: [ "-90", "等待手机端响应时用户取消", "-1" ]
            }
        },
        BT_CONNECT_BLUETOOTH_ADDRESS: {
            code: "BCB",
            descriptor: "蓝牙预连接，通过蓝牙mac地址连接手机",
            name: "蓝牙预连接，通过蓝牙mac地址连接手机",
            classify: "BLE",
            result: {
                OK: [ "0", "通过蓝牙mac地址连接手机成功" ],
                FAILED: [ "-1", "通过蓝牙mac地址连接手机失败" ]
            }
        },
        BT_SEND_DEVICE_INFO: {
            code: "BSD",
            descriptor: "蓝牙预连接，PC端发送握手协议device_info",
            name: "蓝牙预连接，PC端发送握手协议device_info",
            classify: "BLE",
            result: {
                OK: [ "0", "PC端发送握手协议device_info成功" ],
                FAILED: [ "-1", "PC端发送握手协议device_info失败" ]
            }
        },
        BT_RECV_DEVICE_INFO: {
            code: "BRD",
            descriptor: "蓝牙预连接，接收手机端握手协议device_info",
            name: "蓝牙预连接，接收手机端握手协议device_info",
            classify: "BLE",
            result: {
                OK: [ "0", "接收手机端握手协议device_info成功" ],
                FAILED: [ "-1", "接收手机端握手协议device_info失败" ]
            }
        },
        BT_PARSER_DEVICE_INFO: {
            code: "BPD",
            descriptor: "蓝牙预连接，解析手机端握手协议",
            name: "蓝牙预连接，解析手机端握手协议",
            classify: "BLE",
            result: {
                OK: [ "0", "解析手机端握手协议成功" ],
                FAILED: [ "-1", "解析手机端握手协议失败" ]
            }
        },
        WLAN_CONNECT_ADDRESS: {
            code: "WCA",
            descriptor: "局域网预连接，连接手机10191端口",
            name: "局域网预连接，连接手机10191端口",
            classify: "WLAN",
            result: {
                OK: [ "0", "连接手机10191端口成功" ],
                FAILED: [ "-1", "连接手机10191端口失败" ]
            }
        },
        WLAN_SEND_DEVICE_INFO: {
            code: "WSD",
            descriptor: "局域网预连接，PC端发送握手协议device_info",
            name: "局域网预连接，PC端发送握手协议device_info",
            classify: "WLAN",
            result: {
                OK: [ "0", "PC端发送握手协议device_info成功" ],
                FAILED: [ "-1", "PC端发送握手协议device_info失败" ]
            }
        },
        WLAN_RECV_DEVICE_INFO: {
            code: "WRD",
            descriptor: "局域网预连接，接收手机端握手协议device_info",
            name: "局域网预连接，接收手机端握手协议device_info",
            classify: "WLAN",
            result: {
                OK: [ "0", "接收手机端握手协议device_info成功" ],
                FAILED: [ "-1", "接收手机端握手协议device_info失败" ]
            }
        },
        WLAN_PARSER_DEVICE_INFO: {
            code: "WPD",
            descriptor: "局域网预连接，解析手机端握手协议",
            name: "局域网预连接，解析手机端握手协议",
            classify: "WLAN",
            result: {
                OK: [ "0", "解析手机端握手协议成功" ],
                FAILED: [ "-1", "解析手机端握手协议失败" ]
            }
        },
        PRIMARY_GET_CONNECT_STATE: {
            code: "PCS",
            descriptor: "获取PC端正式连接的连接状态",
            name: "获取PC端正式连接的连接状态",
            classify: [ "BLE", "WLAN" ],
            result: {
                OK: [ "0", "处于可连接状态" ],
                BUSY: [ "-1", "处于正式连接中" ],
                P2PBUSY: [ "-2", "处于停止P2P占线中" ]
            }
        },
        PRIMARY_FIND_DEVICES: {
            code: "PFD",
            descriptor: "正式连接，查找设备",
            name: "正式连接，查找设备",
            classify: [ "BLE", "WLAN" ],
            result: {
                OK: [ "0", "查找设备成功" ],
                FAILED: [ "-1", "查找设备失败" ],
                CANCEL: [ "-90", "查找设备时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        BT_CREATE_WIFIP2P: {
            code: "BCW",
            descriptor: "蓝牙正式连接，创建wifip2p",
            name: "蓝牙正式连接，创建wifip2p",
            classify: "BLE",
            result: {
                OK: [ "0", "创建wifip2p成功" ],
                FAILED: [ "-1", "创建wifip2p失败" ],
                CANCEL: [ "-90", "创建wifip2p时用户取消", "-1" ],
                OPEN_AP: [ "-21", "已打开热点AP且连接了设备", "-1" ],
                OPEN_WIFI_ERROR: [ "-20", "打开wifi开关失败" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        BT_SEND_WIFIP2P_INFO: {
            code: "BSW",
            descriptor: "蓝牙正式连接，PC端发送wifip2p信息",
            name: "蓝牙正式连接，PC端发送wifip2p信息",
            classify: "BLE",
            result: {
                OK: [ "0", "PC端发送wifip2p信息成功" ],
                FAILED: [ "-1", "PC端发送wifip2p信息失败" ],
                CANCEL: [ "-90", "PC端发送wifip2p信息时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        BT_RECV_RESPONSE: {
            code: "BRR",
            descriptor: "蓝牙正式连接，接收手机端返回信息",
            name: "蓝牙正式连接，接收手机端返回信息",
            classify: "BLE",
            result: {
                OK: [ "0", "接收手机端返回信息成功" ],
                FAILED: [ "-1", "接收手机端返回信息失败" ],
                CANCEL: [ "-90", "接收手机端返回信息时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        BT_PARSER_RESPONSE: {
            code: "BPR",
            descriptor: "蓝牙正式连接，解析手机端返回信息",
            name: "蓝牙正式连接，解析手机端返回信息",
            classify: "BLE",
            result: {
                OK: [ "0", "解析手机端返回信息成功" ],
                FAILED: [ "-1", "解析手机端返回信息失败" ],
                CANCEL: [ "-90", "解析手机端返回信息时用户取消", "-1" ],
                BUSY: [ "-2", "手机端返回占线状态", "-1" ],
                REJECT: [ "-3", "手机端返回拒绝状态", "-1" ],
                P2PFAILED: [ "-4", "手机端返回P2P连接失败状态" ],
                PHONE_SAP_ENABLE: [ "-5", "手机端返回热点已开启状态", "-1" ],
                PHONE_P2P_CONFLICT: [ "-6", "手机端返回P2P冲突状态", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        BT_GET_WIFIP2P_IP: {
            code: "BGW",
            descriptor: "蓝牙正式连接，获取wifip2p配对IP",
            name: "蓝牙正式连接，获取wifip2p配对IP",
            classify: "BLE",
            result: {
                OK: [ "0", "获取wifip2p配对IP成功" ],
                FAILED: [ "-1", "获取wifip2p配对IP失败" ],
                CANCEL: [ "-90", "获取wifip2p配对IP时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        WLAN_SEND_REQUEST: {
            code: "WSR",
            descriptor: "局域网正式连接，PC端发送连接请求协议",
            name: "局域网正式连接，PC端发送连接请求协议",
            classify: "WLAN",
            result: {
                OK: [ "0", "PC端发送连接请求协议成功" ],
                FAILED: [ "-1", "PC端发送连接请求协议失败" ],
                CANCEL: [ "-90", "PC端发送连接请求协议时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        WLAN_RECV_RESPONSE: {
            code: "WRR",
            descriptor: "局域网正式连接，接收手机端响应",
            name: "局域网正式连接，接收手机端响应",
            classify: "WLAN",
            result: {
                OK: [ "0", "接收手机端响应成功" ],
                FAILED: [ "-1", "接收手机端响应失败" ],
                CANCEL: [ "-90", "接收手机端响应时用户取消", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        },
        WLAN_PARSER_RESPONSE: {
            code: "WPR",
            descriptor: "局域网正式连接，解析手机端返回信息",
            name: "局域网正式连接，解析手机端返回信息",
            classify: "WLAN",
            result: {
                OK: [ "0", "解析手机端返回信息成功" ],
                FAILED: [ "-1", "解析手机端返回信息失败" ],
                CANCEL: [ "-90", "解析手机端返回信息时用户取消", "-1" ],
                BUSY: [ "-2", "手机端返回占线状态", "-1" ],
                REJECT: [ "-3", "手机端返回拒绝状态", "-1" ],
                PRECONNECT_ERROR: [ "-10", "设备未建立预连接或预连接异常" ]
            }
        }
    };
}
