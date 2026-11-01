// analysis/pretty/main.js:132969; webpack module 1735
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AUTH_INFO_MAP = void 0, t.AUTH_INFO_MAP = {
        accessibility: {
            title: "辅助功能",
            desc: "开启“vivo办公套件”的权限，才能在手机使用手势、鼠标和键盘操作电脑屏幕",
            pane: "security",
            section: "Privacy_Accessibility",
            method: "askForAccessibilityAccess"
        },
        screen: {
            title: "录屏与系统录音",
            desc: "开启“vivo办公套件”的权限，才能在手机查看电脑屏幕",
            pane: "security",
            section: "Privacy_ScreenCapture",
            method: "askForScreenCaptureAccess"
        },
        microphone: {
            title: "麦克风",
            desc: "开启“vivo办公套件”的权限，才能使用电脑麦克风",
            pane: "security",
            section: "Privacy_Microphone",
            method: "askForMicrophoneAccess"
        },
        "full-disk-access": {
            title: "全盘访问",
            desc: "开启“vivo办公套件”的权限，才能访问电脑文件",
            pane: "security",
            section: "Privacy_AllFiles",
            method: "askForFullDiskAccess"
        }
    };
}
