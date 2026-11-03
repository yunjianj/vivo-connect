// analysis/pretty/main.js:13869; webpack module 69
function(e, t, n) {
    n(21);
    var r = n(5);
    function i(e, t) {
        Error.captureStackTrace && Error.captureStackTrace(this, i), this.name = "FingerprintFormatError", 
        this.fingerprint = e, this.format = t, this.message = "Fingerprint format is not supported, or is invalid: ", 
        void 0 !== e && (this.message += " fingerprint = " + e), void 0 !== t && (this.message += " format = " + t);
    }
    function o(e) {
        Error.captureStackTrace && Error.captureStackTrace(this, o), this.name = "InvalidAlgorithmError", 
        this.algorithm = e, this.message = 'Algorithm "' + e + '" is not supported';
    }
    function a(e, t, n) {
        Error.captureStackTrace && Error.captureStackTrace(this, a), this.name = "KeyParseError", 
        this.format = t, this.keyName = e, this.innerErr = n, this.message = "Failed to parse " + e + " as a valid " + t + " format key: " + n.message;
    }
    function s(e, t, n) {
        Error.captureStackTrace && Error.captureStackTrace(this, s), this.name = "SignatureParseError", 
        this.type = e, this.format = t, this.innerErr = n, this.message = "Failed to parse the given data as a " + e + " signature in " + t + " format: " + n.message;
    }
    function l(e, t, n) {
        Error.captureStackTrace && Error.captureStackTrace(this, l), this.name = "CertificateParseError", 
        this.format = t, this.certName = e, this.innerErr = n, this.message = "Failed to parse " + e + " as a valid " + t + " format certificate: " + n.message;
    }
    function c(e, t) {
        Error.captureStackTrace && Error.captureStackTrace(this, c), this.name = "KeyEncryptedError", 
        this.format = t, this.keyName = e, this.message = "The " + t + " format key " + e + " is encrypted (password-protected), and no passphrase was provided in `options`";
    }
    r.inherits(i, Error), r.inherits(o, Error), r.inherits(a, Error), r.inherits(s, Error), 
    r.inherits(l, Error), r.inherits(c, Error), e.exports = {
        FingerprintFormatError: i,
        InvalidAlgorithmError: o,
        KeyParseError: a,
        SignatureParseError: s,
        KeyEncryptedError: c,
        CertificateParseError: l
    };
}
