"use strict";
/**
 * Staff NATS Message Types
 * All staff-related NATS message payloads and responses
 * Exported from user-service
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
exports.StaffPermissionCheckDto = exports.StaffTaskStatsDto = exports.StaffTaskStatsMetrics = exports.TaskStatsTaskTypes = exports.TaskStatsRoomTypes = exports.StaffPerformanceDto = exports.StaffPerformanceTrends = exports.StaffPerformanceMetrics = exports.LogActivityResponseDto = exports.StaffActivityLogDto = exports.StaffActivityDto = exports.StaffActivityDetails = exports.StaffPermissionsDto = exports.StaffDto = void 0;
const swagger_1 = require("@nestjs/swagger");
// ============= NATS Response DTOs =============
/**
 * Staff DTO - Re-exported from rest/staff.dto.ts
 * Single unified DTO used by BOTH NATS messages and REST API
 * This ensures consistency across all layers
 */
var staff_dto_1 = require("../rest/staff.dto");
Object.defineProperty(exports, "StaffDto", { enumerable: true, get: function () { return staff_dto_1.StaffDto; } });
class StaffPermissionsDto {
    staffId;
    permissions;
    roles;
    tenantId;
    hotelId;
}
exports.StaffPermissionsDto = StaffPermissionsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPermissionsDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff permissions', type: [String] }),
    __metadata("design:type", Array)
], StaffPermissionsDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff roles', type: [String] }),
    __metadata("design:type", Array)
], StaffPermissionsDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffPermissionsDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffPermissionsDto.prototype, "hotelId", void 0);
// ============= Activity Related Types =============
class StaffActivityDetails {
    taskId;
    roomNumber;
    shiftType;
    duration;
    location;
    notes;
}
exports.StaffActivityDetails = StaffActivityDetails;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task ID' }),
    __metadata("design:type", String)
], StaffActivityDetails.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], StaffActivityDetails.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Shift type' }),
    __metadata("design:type", String)
], StaffActivityDetails.prototype, "shiftType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Duration in minutes' }),
    __metadata("design:type", Number)
], StaffActivityDetails.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Location' }),
    __metadata("design:type", String)
], StaffActivityDetails.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], StaffActivityDetails.prototype, "notes", void 0);
class StaffActivityDto {
    id;
    action;
    details;
    timestamp;
}
exports.StaffActivityDto = StaffActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity ID' }),
    __metadata("design:type", String)
], StaffActivityDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action performed' }),
    __metadata("design:type", String)
], StaffActivityDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity details', type: StaffActivityDetails }),
    __metadata("design:type", StaffActivityDetails)
], StaffActivityDto.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp' }),
    __metadata("design:type", String)
], StaffActivityDto.prototype, "timestamp", void 0);
class StaffActivityLogDto {
    staffId;
    activities;
    pagination;
    tenantId;
    hotelId;
}
exports.StaffActivityLogDto = StaffActivityLogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffActivityLogDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of activities', type: StaffActivityDto, isArray: true }),
    __metadata("design:type", Array)
], StaffActivityLogDto.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pagination info' }),
    __metadata("design:type", Object)
], StaffActivityLogDto.prototype, "pagination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffActivityLogDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffActivityLogDto.prototype, "hotelId", void 0);
class LogActivityResponseDto {
    success;
    activityId;
    staffId;
    action;
    details;
    timestamp;
    tenantId;
    hotelId;
}
exports.LogActivityResponseDto = LogActivityResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag' }),
    __metadata("design:type", Boolean)
], LogActivityResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity ID' }),
    __metadata("design:type", String)
], LogActivityResponseDto.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], LogActivityResponseDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action performed' }),
    __metadata("design:type", String)
], LogActivityResponseDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Activity details', type: StaffActivityDetails }),
    __metadata("design:type", StaffActivityDetails)
], LogActivityResponseDto.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp' }),
    __metadata("design:type", Date)
], LogActivityResponseDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LogActivityResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], LogActivityResponseDto.prototype, "hotelId", void 0);
// ============= Performance Related Types =============
class StaffPerformanceMetrics {
    tasksCompletedToday;
    averageTaskTime;
    qualityScore;
    productivity;
    onTimeCompletionRate;
    customerRating;
}
exports.StaffPerformanceMetrics = StaffPerformanceMetrics;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks completed today' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "tasksCompletedToday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average task time' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "averageTaskTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quality score' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "qualityScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Productivity' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "productivity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'On-time completion rate' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "onTimeCompletionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer rating' }),
    __metadata("design:type", Number)
], StaffPerformanceMetrics.prototype, "customerRating", void 0);
class StaffPerformanceTrends {
    weeklyTasks;
    weeklyQuality;
}
exports.StaffPerformanceTrends = StaffPerformanceTrends;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekly tasks', type: [Number] }),
    __metadata("design:type", Array)
], StaffPerformanceTrends.prototype, "weeklyTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weekly quality', type: [Number] }),
    __metadata("design:type", Array)
], StaffPerformanceTrends.prototype, "weeklyQuality", void 0);
class StaffPerformanceDto {
    staffId;
    period;
    metrics;
    trends;
    tenantId;
    hotelId;
    calculatedAt;
}
exports.StaffPerformanceDto = StaffPerformanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPerformanceDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period' }),
    __metadata("design:type", String)
], StaffPerformanceDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance metrics', type: StaffPerformanceMetrics }),
    __metadata("design:type", StaffPerformanceMetrics)
], StaffPerformanceDto.prototype, "metrics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Performance trends', type: StaffPerformanceTrends }),
    __metadata("design:type", StaffPerformanceTrends)
], StaffPerformanceDto.prototype, "trends", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffPerformanceDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffPerformanceDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculated at' }),
    __metadata("design:type", String)
], StaffPerformanceDto.prototype, "calculatedAt", void 0);
// ============= Task Stats Related Types =============
class TaskStatsRoomTypes {
    Standard;
    Deluxe;
    Suite;
}
exports.TaskStatsRoomTypes = TaskStatsRoomTypes;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Standard room tasks count' }),
    __metadata("design:type", Number)
], TaskStatsRoomTypes.prototype, "Standard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deluxe room tasks count' }),
    __metadata("design:type", Number)
], TaskStatsRoomTypes.prototype, "Deluxe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Suite room tasks count' }),
    __metadata("design:type", Number)
], TaskStatsRoomTypes.prototype, "Suite", void 0);
class TaskStatsTaskTypes {
    Cleaning;
    Maintenance;
    Inspection;
}
exports.TaskStatsTaskTypes = TaskStatsTaskTypes;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cleaning tasks count' }),
    __metadata("design:type", Number)
], TaskStatsTaskTypes.prototype, "Cleaning", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maintenance tasks count' }),
    __metadata("design:type", Number)
], TaskStatsTaskTypes.prototype, "Maintenance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inspection tasks count' }),
    __metadata("design:type", Number)
], TaskStatsTaskTypes.prototype, "Inspection", void 0);
class StaffTaskStatsMetrics {
    totalTasks;
    completedTasks;
    pendingTasks;
    cancelledTasks;
    averageCompletionTime;
    fastestCompletion;
    slowestCompletion;
    roomTypes;
    taskTypes;
}
exports.StaffTaskStatsMetrics = StaffTaskStatsMetrics;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks assigned' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks count' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "completedTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks count' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "pendingTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cancelled tasks count' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "cancelledTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average completion time in minutes' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "averageCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fastest completion time in minutes' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "fastestCompletion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Slowest completion time in minutes' }),
    __metadata("design:type", Number)
], StaffTaskStatsMetrics.prototype, "slowestCompletion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks by room type', type: TaskStatsRoomTypes }),
    __metadata("design:type", TaskStatsRoomTypes)
], StaffTaskStatsMetrics.prototype, "roomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasks by task type', type: TaskStatsTaskTypes }),
    __metadata("design:type", TaskStatsTaskTypes)
], StaffTaskStatsMetrics.prototype, "taskTypes", void 0);
class StaffTaskStatsDto {
    staffId;
    period;
    stats;
    tenantId;
    hotelId;
}
exports.StaffTaskStatsDto = StaffTaskStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffTaskStatsDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Period for statistics',
        type: 'object',
        properties: {
            startDate: { type: 'string', format: 'date-time' },
            endDate: { type: 'string', format: 'date-time' }
        }
    }),
    __metadata("design:type", Object)
], StaffTaskStatsDto.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task statistics', type: StaffTaskStatsMetrics }),
    __metadata("design:type", StaffTaskStatsMetrics)
], StaffTaskStatsDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffTaskStatsDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffTaskStatsDto.prototype, "hotelId", void 0);
// ============= Permission Check Types =============
class StaffPermissionCheckDto {
    staffId;
    permission;
    allowed;
    tenantId;
    hotelId;
}
exports.StaffPermissionCheckDto = StaffPermissionCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPermissionCheckDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Permission being checked' }),
    __metadata("design:type", String)
], StaffPermissionCheckDto.prototype, "permission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether permission is allowed' }),
    __metadata("design:type", Boolean)
], StaffPermissionCheckDto.prototype, "allowed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], StaffPermissionCheckDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], StaffPermissionCheckDto.prototype, "hotelId", void 0);
//# sourceMappingURL=staff.nats.js.map