// analysis/pretty/main.js:56571; webpack module 596
function(e, t, n) {
    var r = n(282), i = e.exports = function() {
        return this instanceof i ? (this.descriptor = !1, this.encryption = !1, this.utf8 = !1, 
        this.numberOfShannonFanoTrees = 0, this.strongEncryption = !1, this.slidingDictionarySize = 0, 
        this) : new i;
    };
    i.prototype.encode = function() {
        return r.getShortBytes((this.descriptor ? 8 : 0) | (this.utf8 ? 2048 : 0) | (this.encryption ? 1 : 0) | (this.strongEncryption ? 64 : 0));
    }, i.prototype.parse = function(e, t) {
        var n = r.getShortBytesValue(e, t), o = new i;
        return o.useDataDescriptor(0 != (8 & n)), o.useUTF8ForNames(0 != (2048 & n)), o.useStrongEncryption(0 != (64 & n)), 
        o.useEncryption(0 != (1 & n)), o.setSlidingDictionarySize(0 != (2 & n) ? 8192 : 4096), 
        o.setNumberOfShannonFanoTrees(0 != (4 & n) ? 3 : 2), o;
    }, i.prototype.setNumberOfShannonFanoTrees = function(e) {
        this.numberOfShannonFanoTrees = e;
    }, i.prototype.getNumberOfShannonFanoTrees = function() {
        return this.numberOfShannonFanoTrees;
    }, i.prototype.setSlidingDictionarySize = function(e) {
        this.slidingDictionarySize = e;
    }, i.prototype.getSlidingDictionarySize = function() {
        return this.slidingDictionarySize;
    }, i.prototype.useDataDescriptor = function(e) {
        this.descriptor = e;
    }, i.prototype.usesDataDescriptor = function() {
        return this.descriptor;
    }, i.prototype.useEncryption = function(e) {
        this.encryption = e;
    }, i.prototype.usesEncryption = function() {
        return this.encryption;
    }, i.prototype.useStrongEncryption = function(e) {
        this.strongEncryption = e;
    }, i.prototype.usesStrongEncryption = function() {
        return this.strongEncryption;
    }, i.prototype.useUTF8ForNames = function(e) {
        this.utf8 = e;
    }, i.prototype.usesUTF8ForNames = function() {
        return this.utf8;
    };
}
