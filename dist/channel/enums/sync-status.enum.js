"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncStatus = void 0;
/**
 * Sync Status Enum
 *
 * Represents the result/status of a synchronization operation
 * Values match API Gateway SyncStatus enum EXACTLY
 */
var SyncStatus;
(function (SyncStatus) {
    /** Synchronization is pending execution */
    SyncStatus["PENDING"] = "PENDING";
    /** Synchronization is currently in progress */
    SyncStatus["IN_PROGRESS"] = "IN_PROGRESS";
    /** Synchronization completed successfully */
    SyncStatus["SUCCESS"] = "SUCCESS";
    /** Synchronization completed with partial success (some records failed) */
    SyncStatus["PARTIAL"] = "PARTIAL";
    /** Synchronization failed completely */
    SyncStatus["FAILED"] = "FAILED";
    /** Synchronization was cancelled */
    SyncStatus["CANCELLED"] = "CANCELLED";
})(SyncStatus || (exports.SyncStatus = SyncStatus = {}));
//# sourceMappingURL=sync-status.enum.js.map