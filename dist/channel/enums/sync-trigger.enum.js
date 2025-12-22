"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncTrigger = void 0;
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
//# sourceMappingURL=sync-trigger.enum.js.map