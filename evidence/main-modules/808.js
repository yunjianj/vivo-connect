// analysis/pretty/main.js:73912; webpack module 808
function(e, t, n) {
    const r = n(4), i = n(1);
    try {
        const e = i.join(process.resourcesPath, "build-config.json"), t = r.readFileSync(e, "utf8");
        global.__buildConfig__ = JSON.parse(t);
    } catch (e) {
        global.__buildConfig__ = {
            IS_EXPORT: "true" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.IS_EXPORT : ""),
            CHANNEL_CODE: ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") || ""
        };
    }
}
