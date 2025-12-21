"use strict";
/**
 * Housekeeping Task Status Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["ASSIGNED"] = "ASSIGNED";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["COMPLETED"] = "COMPLETED";
    TaskStatus["APPROVED"] = "APPROVED";
    TaskStatus["REJECTED"] = "REJECTED";
    TaskStatus["CANCELLED"] = "CANCELLED";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
//# sourceMappingURL=task-status.enum.js.map