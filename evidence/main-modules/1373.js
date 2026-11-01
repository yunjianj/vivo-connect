// analysis/pretty/main.js:102365; webpack module 1373
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.verifySignature = function(e, t, n) {
        return new Promise((o, c) => {
            const u = t.replace(/'/g, "''");
            n.info("Verifying signature " + u), (0, i.execFile)(...s(`"Get-AuthenticodeSignature -LiteralPath '${u}' | ConvertTo-Json -Compress"`, 2e4), (i, s, u) => {
                var d;
                try {
                    if (null != i || u) return l(n, i, u, c), void o(null);
                    const h = function(e) {
                        const t = JSON.parse(e);
                        delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
                        const n = t.SignerCertificate;
                        null != n && (delete n.Archived, delete n.Extensions, delete n.Handle, delete n.HasPrivateKey, 
                        delete n.SubjectName);
                        return t;
                    }(s);
                    if (0 === h.Status) {
                        try {
                            const e = a.normalize(h.Path), r = a.normalize(t);
                            if (n.info(`LiteralPath: ${e}. Update Path: ${r}`), e !== r) return l(n, new Error(`LiteralPath of ${e} is different than ${r}`), u, c), 
                            void o(null);
                        } catch (i) {
                            n.warn("Unable to verify LiteralPath of update asset due to missing data.Path. Skipping this step of validation. Message: " + (null !== (d = i.message) && void 0 !== d ? d : i.stack));
                        }
                        const s = (0, r.parseDn)(h.SignerCertificate.Subject);
                        let p = !1;
                        for (const t of e) {
                            const e = (0, r.parseDn)(t);
                            if (e.size) {
                                p = Array.from(e.keys()).every(t => e.get(t) === s.get(t));
                            } else t === s.get("CN") && (n.warn(`Signature validated using only CN ${t}. Please add your full Distinguished Name (DN) to publisherNames configuration`), 
                            p = !0);
                            if (p) return void o(null);
                        }
                    }
                    const p = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(h, (e, t) => "RawData" === e ? void 0 : t, 2);
                    n.warn("Sign verification failed, installer signed with incorrect certificate: " + p), 
                    o(p);
                } catch (e) {
                    return l(n, e, null, c), void o(null);
                }
            });
        });
    };
    const r = n(36), i = n(10), o = n(8), a = n(1);
    function s(e, t) {
        return [ 'set "PSModulePath=" & chcp 65001 >NUL & powershell.exe', [ "-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", e ], {
            shell: !0,
            timeout: t
        } ];
    }
    function l(e, t, n, r) {
        if (function() {
            const e = o.release();
            return e.startsWith("6.") && !e.startsWith("6.3");
        }()) e.warn(`Cannot execute Get-AuthenticodeSignature: ${t || n}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`); else {
            try {
                (0, i.execFileSync)(...s("ConvertTo-Json test", 1e4));
            } catch (t) {
                return void e.warn(`Cannot execute ConvertTo-Json: ${t.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
            }
            null != t && r(t), n && r(new Error(`Cannot execute Get-AuthenticodeSignature, stderr: ${n}. Failing signature validation due to unknown stderr.`));
        }
    }
}
