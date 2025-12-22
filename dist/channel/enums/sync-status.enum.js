"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncStatus = void 0;
/**
 * Sync Status Enum
 *
 * Represents the result/status of a synchronization operation
 */
var SyncStatus;
(function (SyncStatus) {
    /** Synchronization completed successfully */
    SyncStatus["SUCCESS"] = "SUCCESS";
    /** Synchronization failed completely */
    SyncStatus["FAILED"] = "FAILED";
    /** Synchronization completed with partial success (some records failed) */
    SyncStatus["PARTIAL"] = "PARTIAL";
    /** Synchronization is currently in progress */
    SyncStatus["IN_PROGRESS"] = "IN_PROGRESS";
    /** Synchronization is pending execution */
    SyncStatus["PENDING"] = "PENDING";
})(SyncStatus || (exports.SyncStatus = SyncStatus = {}));
//# sourceMappingURL=sync-status.enum.js.map