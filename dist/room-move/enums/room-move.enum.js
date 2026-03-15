"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomMoveType = exports.RoomMoveReason = exports.RoomMoveStatus = exports.RoomMovePriority = void 0;
/**
 * Room Move Priority Enum
 * Defines priority levels for room move requests
 */
var RoomMovePriority;
(function (RoomMovePriority) {
    RoomMovePriority["LOW"] = "LOW";
    RoomMovePriority["MEDIUM"] = "MEDIUM";
    RoomMovePriority["HIGH"] = "HIGH";
    RoomMovePriority["URGENT"] = "URGENT";
    RoomMovePriority["EMERGENCY"] = "EMERGENCY";
})(RoomMovePriority || (exports.RoomMovePriority = RoomMovePriority = {}));
/**
 * Room Move Status Enum
 * Represents all possible states of a room move request throughout its lifecycle
 */
var RoomMoveStatus;
(function (RoomMoveStatus) {
    RoomMoveStatus["PENDING"] = "PENDING";
    RoomMoveStatus["INITIATED"] = "INITIATED";
    RoomMoveStatus["APPROVED"] = "APPROVED";
    RoomMoveStatus["REJECTED"] = "REJECTED";
    RoomMoveStatus["SCHEDULED"] = "SCHEDULED";
    RoomMoveStatus["IN_PROGRESS"] = "IN_PROGRESS";
    RoomMoveStatus["COMPLETED"] = "COMPLETED";
    RoomMoveStatus["CANCELLED"] = "CANCELLED";
    RoomMoveStatus["FAILED"] = "FAILED";
    RoomMoveStatus["ON_HOLD"] = "ON_HOLD";
})(RoomMoveStatus || (exports.RoomMoveStatus = RoomMoveStatus = {}));
/**
 * Room Move Reason Enum
 * Reasons for initiating a room move
 */
var RoomMoveReason;
(function (RoomMoveReason) {
    RoomMoveReason["GUEST_COMPLAINT"] = "GUEST_COMPLAINT";
    RoomMoveReason["MAINTENANCE_ISSUE"] = "MAINTENANCE_ISSUE";
    RoomMoveReason["UPGRADE_OPPORTUNITY"] = "UPGRADE_OPPORTUNITY";
    RoomMoveReason["DOWNGRADE_REQUEST"] = "DOWNGRADE_REQUEST";
    RoomMoveReason["GROUP_COORDINATION"] = "GROUP_COORDINATION";
    RoomMoveReason["ROOM_DEFECT"] = "ROOM_DEFECT";
    RoomMoveReason["NOISE_COMPLAINT"] = "NOISE_COMPLAINT";
    RoomMoveReason["VIEW_PREFERENCE"] = "VIEW_PREFERENCE";
    RoomMoveReason["ACCESSIBILITY_NEEDS"] = "ACCESSIBILITY_NEEDS";
    RoomMoveReason["EMERGENCY"] = "EMERGENCY";
    RoomMoveReason["OTHER"] = "OTHER";
})(RoomMoveReason || (exports.RoomMoveReason = RoomMoveReason = {}));
/**
 * Room Move Type Enum
 * Classification of the move based on room category comparison
 */
var RoomMoveType;
(function (RoomMoveType) {
    RoomMoveType["SAME_CATEGORY"] = "SAME_CATEGORY";
    RoomMoveType["UPGRADE"] = "UPGRADE";
    RoomMoveType["DOWNGRADE"] = "DOWNGRADE";
    RoomMoveType["EMERGENCY_RELOCATION"] = "EMERGENCY_RELOCATION";
})(RoomMoveType || (exports.RoomMoveType = RoomMoveType = {}));
//# sourceMappingURL=room-move.enum.js.map