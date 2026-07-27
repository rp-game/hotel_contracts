"use strict";
/**
 * Housekeeping Automation NATS Contracts
 *
 * Patterns:
 * - housekeeping.automation.events.findAll
 *
 * Handler: housekeeping-service (AutomationController)
 * Called by: api-gateway (HousekeepingService)
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
exports.AutoScheduleTasksDataDto = exports.OptimizedScheduleDto = exports.StaffAssignmentDto = exports.TaskAssignmentDto = exports.AutomationStatusDataDto = exports.AutomationStatsDto = exports.ActiveRulesDto = exports.LastRunTimesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const automation_rest_1 = require("../rest/automation.rest");
Object.defineProperty(exports, "LastRunTimesDto", { enumerable: true, get: function () { return automation_rest_1.LastRunTimesDto; } });
Object.defineProperty(exports, "ActiveRulesDto", { enumerable: true, get: function () { return automation_rest_1.ActiveRulesDto; } });
Object.defineProperty(exports, "AutomationStatsDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatsDto; } });
Object.defineProperty(exports, "AutomationStatusDataDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatusDto; } });
/**
 * Auto Schedule Task Assignment
 * Shared between NATS contracts and REST API
 */
class TaskAssignmentDto {
    taskId;
    roomNumber;
    estimatedTime;
    taskType;
    priority;
}
exports.TaskAssignmentDto = TaskAssignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID', type: String }),
    __metadata("design:type", String)
], TaskAssignmentDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number', type: String }),
    __metadata("design:type", String)
], TaskAssignmentDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated time in minutes', type: Number }),
    __metadata("design:type", Number)
], TaskAssignmentDto.prototype, "estimatedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task type', type: String }),
    __metadata("design:type", String)
], TaskAssignmentDto.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task priority', type: String }),
    __metadata("design:type", String)
], TaskAssignmentDto.prototype, "priority", void 0);
/**
 * Staff Assignment in Auto Schedule
 * Shared between NATS contracts and REST API
 */
class StaffAssignmentDto {
    staffId;
    staffName;
    tasks;
    totalTime;
    workload;
}
exports.StaffAssignmentDto = StaffAssignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member ID', type: String }),
    __metadata("design:type", String)
], StaffAssignmentDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff member name', type: String }),
    __metadata("design:type", String)
], StaffAssignmentDto.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assigned tasks', type: [TaskAssignmentDto] }),
    __metadata("design:type", Array)
], StaffAssignmentDto.prototype, "tasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total time in minutes', type: Number }),
    __metadata("design:type", Number)
], StaffAssignmentDto.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Workload percentage (0-100)', type: Number }),
    __metadata("design:type", Number)
], StaffAssignmentDto.prototype, "workload", void 0);
/**
 * Optimized Schedule Details
 * Shared between NATS contracts and REST API
 */
class OptimizedScheduleDto {
    totalTasks;
    assignedTasks;
    unassignedTasks;
    staffUtilization;
    estimatedCompletionTime;
    assignments;
    recommendations;
}
exports.OptimizedScheduleDto = OptimizedScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of tasks', type: Number }),
    __metadata("design:type", Number)
], OptimizedScheduleDto.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of assigned tasks', type: Number }),
    __metadata("design:type", Number)
], OptimizedScheduleDto.prototype, "assignedTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of unassigned tasks', type: Number }),
    __metadata("design:type", Number)
], OptimizedScheduleDto.prototype, "unassignedTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff utilization percentage', type: Number }),
    __metadata("design:type", Number)
], OptimizedScheduleDto.prototype, "staffUtilization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated completion time (HH:MM)', type: String }),
    __metadata("design:type", String)
], OptimizedScheduleDto.prototype, "estimatedCompletionTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff assignments', type: [StaffAssignmentDto] }),
    __metadata("design:type", Array)
], OptimizedScheduleDto.prototype, "assignments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduling recommendations', type: [String] }),
    __metadata("design:type", Array)
], OptimizedScheduleDto.prototype, "recommendations", void 0);
/**
 * Auto Schedule Tasks Response Data
 * Shared between NATS contracts and REST API
 */
class AutoScheduleTasksDataDto {
    success;
    schedule;
    scheduledAt;
}
exports.AutoScheduleTasksDataDto = AutoScheduleTasksDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Operation success status', type: Boolean }),
    __metadata("design:type", Boolean)
], AutoScheduleTasksDataDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Optimized schedule', type: () => OptimizedScheduleDto }),
    __metadata("design:type", OptimizedScheduleDto)
], AutoScheduleTasksDataDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Schedule generation timestamp (ISO)', type: String }),
    __metadata("design:type", String)
], AutoScheduleTasksDataDto.prototype, "scheduledAt", void 0);
//# sourceMappingURL=automation.nats.js.map