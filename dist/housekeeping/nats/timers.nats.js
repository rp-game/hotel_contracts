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
exports.TimerReportDataDto = exports.TimerReportTimerItemDto = exports.TimerReportTaskDto = exports.TimerReportStaffStatsDto = exports.TimerReportSummaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Timer Report Summary Statistics
 */
class TimerReportSummaryDto {
    totalTimers;
    totalElapsedTime;
    totalPausedTime;
    avgTaskTime;
    totalElapsedFormatted;
    avgTaskTimeFormatted;
    averageEfficiency;
}
exports.TimerReportSummaryDto = TimerReportSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of timers' }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalTimers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total elapsed time in seconds' }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalElapsedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total paused time in seconds' }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalPausedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task time in seconds' }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "avgTaskTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total elapsed time formatted' }),
    __metadata("design:type", String)
], TimerReportSummaryDto.prototype, "totalElapsedFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task time formatted' }),
    __metadata("design:type", String)
], TimerReportSummaryDto.prototype, "avgTaskTimeFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average efficiency percentage' }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "averageEfficiency", void 0);
/**
 * Staff Statistics in Timer Report
 */
class TimerReportStaffStatsDto {
    staffId;
    totalTasks;
    totalTime;
    avgTime;
    efficiency;
}
exports.TimerReportStaffStatsDto = TimerReportStaffStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member ID' }),
    __metadata("design:type", String)
], TimerReportStaffStatsDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks completed' }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total time in seconds' }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average time per task in seconds' }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "avgTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency percentage' }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "efficiency", void 0);
/**
 * Task Details in Timer
 */
class TimerReportTaskDto {
    id;
    roomId;
    taskType;
    status;
}
exports.TimerReportTaskDto = TimerReportTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task type' }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task status' }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "status", void 0);
/**
 * Individual Timer Item in Report
 */
class TimerReportTimerItemDto {
    id;
    taskId;
    staffId;
    status;
    startTime;
    endTime;
    elapsedSeconds;
    elapsedFormatted;
    pausedSeconds;
    efficiency;
    isReviewed;
    reviewedBy;
    reviewedAt;
    notes;
    cleaningTask;
}
exports.TimerReportTimerItemDto = TimerReportTimerItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer ID' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer status' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time', required: false }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Elapsed seconds' }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "elapsedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Elapsed time formatted' }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "elapsedFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paused seconds' }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "pausedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency percentage' }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "efficiency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is reviewed' }),
    __metadata("design:type", Boolean)
], TimerReportTimerItemDto.prototype, "isReviewed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewed by', required: false }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "reviewedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reviewed at', required: false }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "reviewedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes', required: false }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cleaning task details', type: () => TimerReportTaskDto, required: false }),
    __metadata("design:type", TimerReportTaskDto)
], TimerReportTimerItemDto.prototype, "cleaningTask", void 0);
/**
 * Complete Timer Report Data
 */
class TimerReportDataDto {
    summary;
    staffStats;
    statusBreakdown;
    timers;
}
exports.TimerReportDataDto = TimerReportDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Summary statistics', type: () => TimerReportSummaryDto }),
    __metadata("design:type", TimerReportSummaryDto)
], TimerReportDataDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff statistics', type: [TimerReportStaffStatsDto] }),
    __metadata("design:type", Array)
], TimerReportDataDto.prototype, "staffStats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status breakdown', type: 'object', additionalProperties: { type: 'number' } }),
    __metadata("design:type", Object)
], TimerReportDataDto.prototype, "statusBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer details', type: [TimerReportTimerItemDto] }),
    __metadata("design:type", Array)
], TimerReportDataDto.prototype, "timers", void 0);
//# sourceMappingURL=timers.nats.js.map