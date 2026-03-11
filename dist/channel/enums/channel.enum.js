"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncTrigger = exports.SyncStatus = exports.SyncOperation = exports.SyncDirection = exports.ProviderType = exports.ProviderStatus = void 0;
/**
 * Channel Provider Status Enum
 *
 * Represents the operational status of a channel provider configuration
 */
var ProviderStatus;
(function (ProviderStatus) {
    /** Provider is active and operational */
    ProviderStatus["ACTIVE"] = "ACTIVE";
    /** Provider configuration is inactive */
    ProviderStatus["INACTIVE"] = "INACTIVE";
    /** Provider is undergoing maintenance */
    ProviderStatus["MAINTENANCE"] = "MAINTENANCE";
    /** Provider has encountered an error */
    ProviderStatus["ERROR"] = "ERROR";
})(ProviderStatus || (exports.ProviderStatus = ProviderStatus = {}));
/**
 * Channel Provider Type Enum
 *
 * Represents the different types of channel/PMS providers
 * that the system can integrate with.
 *
 * Values match API Gateway ProviderType enum EXACTLY (PascalCase)
 */
var ProviderType;
(function (ProviderType) {
    /** STAAH integration */
    ProviderType["STAAH"] = "STAAH";
    /** SiteMinder integration */
    ProviderType["SITEMINDER"] = "SiteMinder";
    /** Beds24 integration */
    ProviderType["BEDS24"] = "Beds24";
    /** RateGain integration */
    ProviderType["RATEGAIN"] = "RateGain";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
/**
 * Sync Direction Enum
 *
 * Represents the direction of data synchronization
 * between the system and external channel providers
 */
var SyncDirection;
(function (SyncDirection) {
    /** Data flows from system to provider */
    SyncDirection["OUTBOUND"] = "OUTBOUND";
    /** Data flows from provider to system */
    SyncDirection["INBOUND"] = "INBOUND";
    /** Data flows in both directions */
    SyncDirection["BIDIRECTIONAL"] = "BIDIRECTIONAL";
})(SyncDirection || (exports.SyncDirection = SyncDirection = {}));
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
/**
 * Sync Trigger Enum
 *
 * Represents the different ways a synchronization
 * operation can be initiated with a channel provider
 */
var SyncTrigger;
(function (SyncTrigger) {
    /** Manually triggered by user action */
    SyncTrigger["MANUAL"] = "MANUAL";
    /** Triggered by scheduled job/cron */
    SyncTrigger["SCHEDULED"] = "SCHEDULED";
    /** Triggered by incoming webhook from provider */
    SyncTrigger["WEBHOOK"] = "WEBHOOK";
    /** Triggered by inventory change in the system */
    SyncTrigger["INVENTORY_CHANGE"] = "INVENTORY_CHANGE";
    /** Triggered by rate/pricing change in the system */
    SyncTrigger["RATE_CHANGE"] = "RATE_CHANGE";
    /** Triggered by booking event */
    SyncTrigger["BOOKING_EVENT"] = "BOOKING_EVENT";
})(SyncTrigger || (exports.SyncTrigger = SyncTrigger = {}));
//# sourceMappingURL=channel.enum.js.map