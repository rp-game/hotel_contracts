"use strict";
/**
 * Task Timers NATS Contracts
 * Patterns: housekeeping.timers.*
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffTaskSummary = exports.GetStaffTaskSummaryNatsRequest = exports.TimerReportDataDto = exports.TimerReportTimerItemDto = exports.TimerReportTaskDto = exports.TimerReportStaffStatsDto = exports.TimerReportSummaryDto = exports.GetTimerReportNatsRequest = exports.ReviewTimerNatsRequest = exports.GetTaskTimersNatsRequest = exports.TimerStats = exports.GetTimerStatsNatsRequest = exports.StopTimerNatsRequest = exports.ResumeTimerNatsRequest = exports.PauseTimerNatsRequest = exports.StartTimerNatsRequest = exports.TaskTimer = void 0;
const swagger_1 = require("@nestjs/swagger");
const timers_rest_1 = require("../rest/timers.rest");
Object.defineProperty(exports, "TimerReportSummaryDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportSummaryDto; } });
Object.defineProperty(exports, "TimerReportStaffStatsDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportStaffStatsDto; } });
Object.defineProperty(exports, "TimerReportTaskDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportTaskDto; } });
Object.defineProperty(exports, "TimerReportTimerItemDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportTimerItemDto; } });
Object.defineProperty(exports, "TimerReportDataDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportDataDto; } });
class TaskTimer {
    id;
    taskId;
    staffId;
    startTime;
    pauseTime;
    resumeTime;
    stopTime;
    status;
    totalDuration;
    notes;
    qualityRating;
    reviewedBy;
    approved;
    reviewNotes;
    adjustedMinutes;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
}
exports.TaskTimer = TaskTimer;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pause time (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "pauseTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Resume time (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "resumeTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Stop time (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "stopTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer status', enum: ['RUNNING', 'PAUSED', 'STOPPED'] }),
    __metadata("design:type", String)
], TaskTimer.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total duration in minutes' }),
    __metadata("design:type", Number)
], TaskTimer.prototype, "totalDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quality rating' }),
    __metadata("design:type", Number)
], TaskTimer.prototype, "qualityRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reviewed by staff ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "reviewedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether timer was approved' }),
    __metadata("design:type", Boolean)
], TaskTimer.prototype, "approved", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Review notes' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "reviewNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Adjusted minutes' }),
    __metadata("design:type", Number)
], TaskTimer.prototype, "adjustedMinutes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at (ISO)' }),
    __metadata("design:type", String)
], TaskTimer.prototype, "updatedAt", void 0);
// START
class StartTimerNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
}
exports.StartTimerNatsRequest = StartTimerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], StartTimerNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StartTimerNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StartTimerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StartTimerNatsRequest.prototype, "hotelId", void 0);
// PAUSE
class PauseTimerNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
    notes;
}
exports.PauseTimerNatsRequest = PauseTimerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], PauseTimerNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], PauseTimerNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PauseTimerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], PauseTimerNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pause notes' }),
    __metadata("design:type", String)
], PauseTimerNatsRequest.prototype, "notes", void 0);
// RESUME
class ResumeTimerNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
}
exports.ResumeTimerNatsRequest = ResumeTimerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], ResumeTimerNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], ResumeTimerNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ResumeTimerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ResumeTimerNatsRequest.prototype, "hotelId", void 0);
// STOP
class StopTimerNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
    stopData;
}
exports.StopTimerNatsRequest = StopTimerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], StopTimerNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StopTimerNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StopTimerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StopTimerNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stop data' }),
    __metadata("design:type", Object)
], StopTimerNatsRequest.prototype, "stopData", void 0);
// STATS
class GetTimerStatsNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
}
exports.GetTimerStatsNatsRequest = GetTimerStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], GetTimerStatsNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], GetTimerStatsNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTimerStatsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetTimerStatsNatsRequest.prototype, "hotelId", void 0);
class TimerStats {
    elapsedSeconds;
    pausedSeconds;
    workingSeconds;
    elapsedTime;
    pausedTime;
    workingTime;
    efficiency;
}
exports.TimerStats = TimerStats;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Elapsed seconds' }),
    __metadata("design:type", Number)
], TimerStats.prototype, "elapsedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paused seconds' }),
    __metadata("design:type", Number)
], TimerStats.prototype, "pausedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Working seconds' }),
    __metadata("design:type", Number)
], TimerStats.prototype, "workingSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Elapsed time (formatted)' }),
    __metadata("design:type", String)
], TimerStats.prototype, "elapsedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paused time (formatted)' }),
    __metadata("design:type", String)
], TimerStats.prototype, "pausedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Working time (formatted)' }),
    __metadata("design:type", String)
], TimerStats.prototype, "workingTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency percentage' }),
    __metadata("design:type", Number)
], TimerStats.prototype, "efficiency", void 0);
// HISTORY
class GetTaskTimersNatsRequest {
    taskId;
    tenantId;
    hotelId;
    filters;
}
exports.GetTaskTimersNatsRequest = GetTaskTimersNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], GetTaskTimersNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTaskTimersNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetTaskTimersNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filters' }),
    __metadata("design:type", Object)
], GetTaskTimersNatsRequest.prototype, "filters", void 0);
// REVIEW
class ReviewTimerNatsRequest {
    timerId;
    reviewData;
    tenantId;
    hotelId;
}
exports.ReviewTimerNatsRequest = ReviewTimerNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer ID' }),
    __metadata("design:type", String)
], ReviewTimerNatsRequest.prototype, "timerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Review data' }),
    __metadata("design:type", Object)
], ReviewTimerNatsRequest.prototype, "reviewData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ReviewTimerNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ReviewTimerNatsRequest.prototype, "hotelId", void 0);
// REPORT
class GetTimerReportNatsRequest {
    tenantId;
    hotelId;
    filters;
}
exports.GetTimerReportNatsRequest = GetTimerReportNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetTimerReportNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetTimerReportNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filters' }),
    __metadata("design:type", Object)
], GetTimerReportNatsRequest.prototype, "filters", void 0);
// STAFF SUMMARY
class GetStaffTaskSummaryNatsRequest {
    staffId;
    tenantId;
    hotelId;
}
exports.GetStaffTaskSummaryNatsRequest = GetStaffTaskSummaryNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], GetStaffTaskSummaryNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetStaffTaskSummaryNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetStaffTaskSummaryNatsRequest.prototype, "hotelId", void 0);
class StaffTaskSummary {
    total;
    completed;
    pending;
    inProgress;
    overdue;
}
exports.StaffTaskSummary = StaffTaskSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks' }),
    __metadata("design:type", Number)
], StaffTaskSummary.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks' }),
    __metadata("design:type", Number)
], StaffTaskSummary.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks' }),
    __metadata("design:type", Number)
], StaffTaskSummary.prototype, "pending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks' }),
    __metadata("design:type", Number)
], StaffTaskSummary.prototype, "inProgress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Overdue tasks' }),
    __metadata("design:type", Number)
], StaffTaskSummary.prototype, "overdue", void 0);
//# sourceMappingURL=timers.nats.js.map