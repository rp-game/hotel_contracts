"use strict";
/**
 * Housekeeping Timers REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 *
 * These are imported and used directly by API Gateway
 * to ensure consistency between NATS and REST contracts
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
 * Shared between NATS contracts and REST API
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
    (0, swagger_1.ApiProperty)({
        description: 'Total number of timers',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalTimers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total elapsed time in seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalElapsedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total paused time in seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "totalPausedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average task time in seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "avgTaskTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total elapsed time formatted (HH:MM:SS)',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportSummaryDto.prototype, "totalElapsedFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average task time formatted (HH:MM:SS)',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportSummaryDto.prototype, "avgTaskTimeFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average efficiency percentage across all timers',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportSummaryDto.prototype, "averageEfficiency", void 0);
/**
 * Staff Statistics in Timer Report
 * Shared between NATS contracts and REST API
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
    (0, swagger_1.ApiProperty)({
        description: 'Staff member ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportStaffStatsDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total tasks completed by this staff member',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total time in seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Average time per task in seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "avgTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Efficiency percentage',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportStaffStatsDto.prototype, "efficiency", void 0);
/**
 * Task Details in Timer
 * Shared between NATS contracts and REST API
 */
class TimerReportTaskDto {
    id;
    roomId;
    taskType;
    status;
}
exports.TimerReportTaskDto = TimerReportTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task type',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task status',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTaskDto.prototype, "status", void 0);
/**
 * Individual Timer Item in Report
 * Shared between NATS contracts and REST API
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
    (0, swagger_1.ApiProperty)({
        description: 'Timer ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Staff ID',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timer status',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start time (ISO datetime)',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'End time (ISO datetime)',
        type: String,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Elapsed seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "elapsedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Elapsed time formatted (HH:MM:SS)',
        type: String,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "elapsedFormatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Paused seconds',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "pausedSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Efficiency percentage (working time / total time)',
        type: Number,
    }),
    __metadata("design:type", Number)
], TimerReportTimerItemDto.prototype, "efficiency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether timer has been reviewed',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], TimerReportTimerItemDto.prototype, "isReviewed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of user who reviewed the timer',
        type: String,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "reviewedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Review timestamp (ISO datetime)',
        type: String,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "reviewedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timer notes',
        type: String,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TimerReportTimerItemDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Associated cleaning task details',
        type: () => TimerReportTaskDto,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", TimerReportTaskDto)
], TimerReportTimerItemDto.prototype, "cleaningTask", void 0);
/**
 * Complete Timer Report Response DTO
 * Shared between NATS contracts and REST API
 */
class TimerReportDataDto {
    summary;
    staffStats;
    statusBreakdown;
    timers;
}
exports.TimerReportDataDto = TimerReportDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Summary statistics for all timers',
        type: () => TimerReportSummaryDto,
    }),
    __metadata("design:type", TimerReportSummaryDto)
], TimerReportDataDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Statistics broken down by staff member',
        type: [TimerReportStaffStatsDto],
    }),
    __metadata("design:type", Array)
], TimerReportDataDto.prototype, "staffStats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timer count breakdown by status',
        type: 'object',
        additionalProperties: { type: 'number' },
    }),
    __metadata("design:type", Object)
], TimerReportDataDto.prototype, "statusBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Individual timer details',
        type: [TimerReportTimerItemDto],
    }),
    __metadata("design:type", Array)
], TimerReportDataDto.prototype, "timers", void 0);
//# sourceMappingURL=timers.rest.js.map