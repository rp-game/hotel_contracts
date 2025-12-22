"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperation = void 0;
/**
 * Sync Operation Enum
 *
 * Represents the types of synchronization operations
 * that can be performed with external channel providers
 *
 * Values match API Gateway SyncOperation enum EXACTLY
 */
var SyncOperation;
(function (SyncOperation) {
    /** Inventory synchronization */
    SyncOperation["INVENTORY_SYNC"] = "INVENTORY_SYNC";
    /** Rate synchronization */
    SyncOperation["RATE_SYNC"] = "RATE_SYNC";
    /** Booking synchronization */
    SyncOperation["BOOKING_SYNC"] = "BOOKING_SYNC";
    /** Full synchronization of all data */
    SyncOperation["FULL_SYNC"] = "FULL_SYNC";
})(SyncOperation || (exports.SyncOperation = SyncOperation = {}));
//# sourceMappingURL=sync-operation.enum.js.map