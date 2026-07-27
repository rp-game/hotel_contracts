"use strict";
/**
 * Booking conflict type definitions and enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolutionType = exports.ConflictType = exports.ConflictSeverity = exports.ConflictStatus = void 0;
var ConflictStatus;
(function (ConflictStatus) {
    ConflictStatus["PENDING"] = "PENDING";
    ConflictStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ConflictStatus["RESOLVED"] = "RESOLVED";
    ConflictStatus["ESCALATED"] = "ESCALATED";
    ConflictStatus["CANCELLED"] = "CANCELLED";
})(ConflictStatus || (exports.ConflictStatus = ConflictStatus = {}));
var ConflictSeverity;
(function (ConflictSeverity) {
    ConflictSeverity["LOW"] = "LOW";
    ConflictSeverity["MEDIUM"] = "MEDIUM";
    ConflictSeverity["HIGH"] = "HIGH";
    ConflictSeverity["CRITICAL"] = "CRITICAL";
})(ConflictSeverity || (exports.ConflictSeverity = ConflictSeverity = {}));
var ConflictType;
(function (ConflictType) {
    ConflictType["DOUBLE_BOOKING"] = "DOUBLE_BOOKING";
    ConflictType["OVERBOOKING"] = "OVERBOOKING";
    ConflictType["MAINTENANCE_OVERLAP"] = "MAINTENANCE_OVERLAP";
    ConflictType["BLOCKED_ROOM"] = "BLOCKED_ROOM";
    ConflictType["ALLOCATION_ERROR"] = "ALLOCATION_ERROR";
})(ConflictType || (exports.ConflictType = ConflictType = {}));
var ResolutionType;
(function (ResolutionType) {
    ResolutionType["UPGRADE"] = "UPGRADE";
    ResolutionType["RELOCATE"] = "RELOCATE";
    ResolutionType["COMPENSATE"] = "COMPENSATE";
    ResolutionType["CANCEL"] = "CANCEL";
    ResolutionType["SPLIT_BOOKING"] = "SPLIT_BOOKING";
    ResolutionType["MANUAL"] = "MANUAL";
})(ResolutionType || (exports.ResolutionType = ResolutionType = {}));
//# sourceMappingURL=conflict-enums.js.map