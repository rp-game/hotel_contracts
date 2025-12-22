"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDirection = void 0;
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
//# sourceMappingURL=sync-direction.enum.js.map