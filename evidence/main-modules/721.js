// analysis/pretty/main.js:64093; webpack module 721
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TaskTransType = t.TransStatusEnum = t.TransDescEnum = t.TransTitleEnum = t.ReasonEnum = t.FileTypeEnum = t.SingularOrPluralEnum = t.TransTypeEnum = void 0, 
    function(e) {
        e.ReceiveCloud = "Receive", e.SendCloud = "Send", e.Receive = "Receive", e.Send = "Send", 
        e.FmReceive = "FmReceive", e.FmSend = "FmSend";
    }(t.TransTypeEnum || (t.TransTypeEnum = {})), function(e) {
        e.Singular = "Singular", e.Plural = "Plural";
    }(t.SingularOrPluralEnum || (t.SingularOrPluralEnum = {})), function(e) {
        e.Image = "Image", e.Video = "Video", e.Doc = "File", e.Audio = "Audio", e.File = "File";
    }(t.FileTypeEnum || (t.FileTypeEnum = {})), function(e) {
        e.PhoneNoSpace = "PhoneNoSpace", e.NoSpace = "NoSpace", e.ConnectionException = "ConnectionException", 
        e.CancelReceive = "CancelReceive", e.CancelSend = "CancelSend", e.FileNotExist = "FileNotExist", 
        e.NetWork = "NetWork", e.Cancel = "Cancel", e.UnKnown = "UnKnown";
    }(t.ReasonEnum || (t.ReasonEnum = {})), function(e) {
        e.FromPhone = "FromPhone", e.IsReceive = "IsReceive", e.Receiving = "Receiving", 
        e.ReceivingCloud = "ReceivingCloud", e.ReceiveSuccess = "ReceiveSuccess", e.ReceiveFail = "ReceiveFail", 
        e.Receiveinterrupt = "Receiveinterrupt", e.PrepareToTransmit = "PrepareToTransmit", 
        e.Sending = "Sending", e.CloudTransInProgress = "CloudTransInProgress", e.SendSuccess = "SendSuccess", 
        e.SendFail = "SendFail", e.Sendinterrupt = "Sendinterrupt", e.Transferring = "Transferring", 
        e.TransmissionSuccessful = "TransSuccess", e.TransmissionInterrupt = "chuan-shu-zhong-duan", 
        e.TransmissionFail = "chuan-shu-shi-bai";
    }(t.TransTitleEnum || (t.TransTitleEnum = {})), function(e) {
        e.ReceivedSuccessfully = "ReceivedSuccessfully", e.TransmissionSuccessful = "TransmissionSuccessful", 
        e.SendSuccessfull = "SendSuccessfull";
    }(t.TransDescEnum || (t.TransDescEnum = {})), function(e) {
        e.IsReceive = "IsReceive", e.PreSend = "PreSend", e.Progress = "Progress", e.Saving = "Saving", 
        e.Success = "Success", e.Interrupt = "Interrupt", e.Fail = "Fail", e.FromPhone = "FromPhone";
    }(t.TransStatusEnum || (t.TransStatusEnum = {})), function(e) {
        e[e.Fm = 1] = "Fm", e[e.Cloud = 2] = "Cloud", e[e.FmCloud = 3] = "FmCloud";
    }(t.TaskTransType || (t.TaskTransType = {}));
}
