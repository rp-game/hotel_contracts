"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperation = void 0;
/**
 * Sync Operation Enum
 *
 * Represents the types of synchronization operations
 * that can be performed with external channel providers
 */
var SyncOperation;
(function (SyncOperation) {
    /** Push room availability to provider */
    SyncOperation["AVAILABILITY_PUSH"] = "AVAILABILITY_PUSH";
    /** Pull room availability from provider */
    SyncOperation["AVAILABILITY_PULL"] = "AVAILABILITY_PULL";
    /** Push rates to provider */
    SyncOperation["RATES_PUSH"] = "RATES_PUSH";
    /** Pull rates from provider */
    SyncOperation["RATES_PULL"] = "RATES_PULL";
    /** Push bookings to provider */
    SyncOperation["BOOKING_PUSH"] = "BOOKING_PUSH";
    /** Pull bookings from provider */
    SyncOperation["BOOKING_PULL"] = "BOOKING_PULL";
    /** Synchronize room mappings */
    SyncOperation["ROOM_MAPPING_SYNC"] = "ROOM_MAPPING_SYNC";
    /** Synchronize rate mappings */
    SyncOperation["RATE_MAPPING_SYNC"] = "RATE_MAPPING_SYNC";
    /** Full synchronization of all data */
    SyncOperation["FULL_SYNC"] = "FULL_SYNC";
})(SyncOperation || (exports.SyncOperation = SyncOperation = {}));
//# sourceMappingURL=sync-operation.enum.js.map