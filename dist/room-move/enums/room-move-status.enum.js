"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomMoveStatus = void 0;
/**
 * Room Move Status Enum
 * Represents all possible states of a room move request throughout its lifecycle
 */
var RoomMoveStatus;
(function (RoomMoveStatus) {
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
//# sourceMappingURL=room-move-status.enum.js.map