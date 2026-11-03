// analysis/pretty/main.js:116927; webpack module 1537
function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }(e) || !!e._isBuffer);
    };
}
