"use strict";
/**
 * Housekeeping Task Status Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveShiftStatus = exports.TaskPriority = exports.TaskType = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["ASSIGNED"] = "ASSIGNED";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["PAUSED"] = "PAUSED";
    TaskStatus["COMPLETED"] = "COMPLETED";
    TaskStatus["VERIFIED"] = "VERIFIED";
    TaskStatus["APPROVED"] = "APPROVED";
    TaskStatus["REJECTED"] = "REJECTED";
    TaskStatus["CANCELLED"] = "CANCELLED";
    TaskStatus["OVERDUE"] = "OVERDUE";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
/**
 * Housekeeping Task Type Enum
 */
var TaskType;
(function (TaskType) {
    TaskType["ROOM_CLEANING"] = "ROOM_CLEANING";
    TaskType["REGULAR_CLEANING"] = "REGULAR_CLEANING";
    TaskType["LINEN_CHANGE"] = "LINEN_CHANGE";
    TaskType["INVENTORY_CHECK"] = "INVENTORY_CHECK";
    TaskType["MAINTENANCE_REPORT"] = "MAINTENANCE_REPORT";
    TaskType["MAINTENANCE"] = "MAINTENANCE";
    TaskType["CHECKOUT_CLEANING"] = "CHECKOUT_CLEANING";
    TaskType["CHECKIN_PREPARATION"] = "CHECKIN_PREPARATION";
    TaskType["DEEP_CLEANING"] = "DEEP_CLEANING";
    TaskType["CARPET_CLEANING"] = "CARPET_CLEANING";
    TaskType["WINDOW_CLEANING"] = "WINDOW_CLEANING";
    TaskType["INSPECTION"] = "INSPECTION";
    TaskType["TURNOVER"] = "TURNOVER";
    TaskType["LAUNDRY"] = "LAUNDRY";
    TaskType["REGULAR"] = "REGULAR";
    TaskType["CHECKOUT_CLEAN"] = "CHECKOUT_CLEAN";
    TaskType["MAINTENANCE_CLEAN"] = "MAINTENANCE_CLEAN";
})(TaskType || (exports.TaskType = TaskType = {}));
/**
 * Housekeeping Task Priority Enum
 */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "LOW";
    TaskPriority["MEDIUM"] = "MEDIUM";
    TaskPriority["HIGH"] = "HIGH";
    TaskPriority["URGENT"] = "URGENT";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
/**
 * Active Shift Status Enum
 * Used for clock-in/out tracking (distinct from scheduling ShiftStatus in user enums)
 */
var ActiveShiftStatus;
(function (ActiveShiftStatus) {
    ActiveShiftStatus["NOT_STARTED"] = "not_started";
    ActiveShiftStatus["ACTIVE"] = "active";
    ActiveShiftStatus["BREAK"] = "break";
    ActiveShiftStatus["COMPLETED"] = "completed";
})(ActiveShiftStatus || (exports.ActiveShiftStatus = ActiveShiftStatus = {}));
//# sourceMappingURL=housekeeping.enum.js.map