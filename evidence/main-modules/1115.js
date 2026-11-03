// analysis/pretty/main.js:90151; webpack module 1115
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i) {
        var o = n(24), a = o.tryCatch, s = o.errorObj, l = e._async;
        e.prototype.break = e.prototype.cancel = function() {
            if (!i.cancellation()) return this._warn("cancellation is disabled");
            for (var e = this, t = e; e._isCancellable(); ) {
                if (!e._cancelBy(t)) {
                    t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                    break;
                }
                var n = e._cancellationParent;
                if (null == n || !n._isCancellable()) {
                    e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                    break;
                }
                e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n;
            }
        }, e.prototype._branchHasCancelled = function() {
            this._branchesRemainingToCancel--;
        }, e.prototype._enoughBranchesHaveCancelled = function() {
            return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
        }, e.prototype._cancelBy = function(e) {
            return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), 
            !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), 
            !0));
        }, e.prototype._cancelBranched = function() {
            this._enoughBranchesHaveCancelled() && this._cancel();
        }, e.prototype._cancel = function() {
            this._isCancellable() && (this._setCancelled(), l.invoke(this._cancelPromises, this, void 0));
        }, e.prototype._cancelPromises = function() {
            this._length() > 0 && this._settlePromises();
        }, e.prototype._unsetOnCancel = function() {
            this._onCancelField = void 0;
        }, e.prototype._isCancellable = function() {
            return this.isPending() && !this._isCancelled();
        }, e.prototype.isCancellable = function() {
            return this.isPending() && !this.isCancelled();
        }, e.prototype._doInvokeOnCancel = function(e, t) {
            if (o.isArray(e)) for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t); else if (void 0 !== e) if ("function" == typeof e) {
                if (!t) {
                    var r = a(e).call(this._boundValue());
                    r === s && (this._attachExtraTrace(r.e), l.throwLater(r.e));
                }
            } else e._resultCancelled(this);
        }, e.prototype._invokeOnCancel = function() {
            var e = this._onCancel();
            this._unsetOnCancel(), l.invoke(this._doInvokeOnCancel, this, e);
        }, e.prototype._invokeInternalOnCancel = function() {
            this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
        }, e.prototype._resultCancelled = function() {
            this.cancel();
        };
    };
}
