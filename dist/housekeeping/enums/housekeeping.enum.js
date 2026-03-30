"use strict";
/**
 * Housekeeping Task Status Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveShiftStatus = exports.TaskPriority = exports.TaskStatus = void 0;
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