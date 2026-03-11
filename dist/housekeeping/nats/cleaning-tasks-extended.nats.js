"use strict";
/**
 * Extended Cleaning Tasks NATS Contracts
 * Patterns: housekeeping.tasks.* (mobile and extended patterns)
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
exports.TaskTimerDto = exports.TaskStatsDto = exports.MobileTaskListResponseDto = exports.TaskSummaryStatsDto = exports.MobileTaskUpdateDto = exports.MobileTaskDto = exports.GetPerformanceMetricsNatsRequest = exports.StaffPerformanceMetricsNatsResponse = exports.GetHousekeepingTasksPayload = exports.EnhancedCleaningTask = exports.ClockOutNatsRequest = exports.ClockInNatsRequest = exports.GetCurrentShiftNatsRequest = exports.ShiftData = exports.QuickCompleteTaskResponseDto = exports.QuickCompleteTaskDto = exports.QuickCompleteResult = exports.QuickCompleteTaskNatsRequest = exports.AddNotesResult = exports.AddTaskNotesNatsRequest = exports.GetRoomTasksNatsRequest = exports.SearchTasksNatsRequest = exports.MobileTaskResponse = exports.GetRecentTasksNatsRequest = exports.FindTaskByIdNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
// FIND TASK BY ID
class FindTaskByIdNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.FindTaskByIdNatsRequest = FindTaskByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTaskByIdNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTaskByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindTaskByIdNatsRequest.prototype, "hotelId", void 0);
// RECENT TASKS (Mobile)
class GetRecentTasksNatsRequest {
    tenantId;
    hotelId;
    staffId;
    limit;
}
exports.GetRecentTasksNatsRequest = GetRecentTasksNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRecentTasksNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRecentTasksNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRecentTasksNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Limit' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetRecentTasksNatsRequest.prototype, "limit", void 0);
class MobileTaskResponse {
    id;
    title;
    description;
    roomNumber;
    roomType;
    priority;
    status;
    estimatedDuration;
    actualDuration;
    assignedAt;
    startedAt;
    completedAt;
    dueDate;
    assignedStaff;
    taskType;
    notes;
    photos;
    location;
    requirements;
    isUrgent;
    canStart;
    canPause;
    canComplete;
}
exports.MobileTaskResponse = MobileTaskResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task title' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task description' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task priority' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task status' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], MobileTaskResponse.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    __metadata("design:type", Number)
], MobileTaskResponse.prototype, "actualDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assignment timestamp' }),
    __metadata("design:type", Date)
], MobileTaskResponse.prototype, "assignedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start timestamp' }),
    __metadata("design:type", Date)
], MobileTaskResponse.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp' }),
    __metadata("design:type", Date)
], MobileTaskResponse.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Due date' }),
    __metadata("design:type", Date)
], MobileTaskResponse.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff info' }),
    __metadata("design:type", Object)
], MobileTaskResponse.prototype, "assignedStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task type' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task notes' }),
    __metadata("design:type", String)
], MobileTaskResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task photos', type: [String] }),
    __metadata("design:type", Array)
], MobileTaskResponse.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Location info' }),
    __metadata("design:type", Object)
], MobileTaskResponse.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task requirements', type: [String] }),
    __metadata("design:type", Array)
], MobileTaskResponse.prototype, "requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether task is urgent' }),
    __metadata("design:type", Boolean)
], MobileTaskResponse.prototype, "isUrgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether task can be started' }),
    __metadata("design:type", Boolean)
], MobileTaskResponse.prototype, "canStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether task can be paused' }),
    __metadata("design:type", Boolean)
], MobileTaskResponse.prototype, "canPause", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether task can be completed' }),
    __metadata("design:type", Boolean)
], MobileTaskResponse.prototype, "canComplete", void 0);
// SEARCH TASKS (Mobile)
class SearchTasksNatsRequest {
    tenantId;
    hotelId;
    query;
    filters;
}
exports.SearchTasksNatsRequest = SearchTasksNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchTasksNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchTasksNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Search query' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchTasksNatsRequest.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search filters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchTasksNatsRequest.prototype, "filters", void 0);
// TASKS BY ROOM (Mobile)
class GetRoomTasksNatsRequest {
    tenantId;
    hotelId;
    roomNumber;
}
exports.GetRoomTasksNatsRequest = GetRoomTasksNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRoomTasksNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRoomTasksNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRoomTasksNatsRequest.prototype, "roomNumber", void 0);
// ADD NOTES
class AddTaskNotesNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
    notes;
    photos;
}
exports.AddTaskNotesNatsRequest = AddTaskNotesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddTaskNotesNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddTaskNotesNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddTaskNotesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddTaskNotesNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes content' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddTaskNotesNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo URLs', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AddTaskNotesNatsRequest.prototype, "photos", void 0);
class AddNotesResult {
    taskId;
    notes;
    photos;
    addedAt;
    addedBy;
}
exports.AddNotesResult = AddNotesResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], AddNotesResult.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes content' }),
    __metadata("design:type", String)
], AddNotesResult.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photo URLs', type: [String] }),
    __metadata("design:type", Array)
], AddNotesResult.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp when notes were added' }),
    __metadata("design:type", String)
], AddNotesResult.prototype, "addedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID who added notes' }),
    __metadata("design:type", String)
], AddNotesResult.prototype, "addedBy", void 0);
// QUICK COMPLETE
class QuickCompleteTaskNatsRequest {
    taskId;
    staffId;
    tenantId;
    hotelId;
    notes;
    qualityRating;
    photos;
    completedAt;
}
exports.QuickCompleteTaskNatsRequest = QuickCompleteTaskNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task quality rating 1-5' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuickCompleteTaskNatsRequest.prototype, "qualityRating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion photos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], QuickCompleteTaskNatsRequest.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], QuickCompleteTaskNatsRequest.prototype, "completedAt", void 0);
class QuickCompleteResult {
    taskId;
    completedAt;
    data;
}
exports.QuickCompleteResult = QuickCompleteResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed task ID' }),
    __metadata("design:type", String)
], QuickCompleteResult.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion timestamp' }),
    __metadata("design:type", String)
], QuickCompleteResult.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task data' }),
    __metadata("design:type", MobileTaskResponse)
], QuickCompleteResult.prototype, "data", void 0);
var quick_complete_task_rest_1 = require("../rest/quick-complete-task.rest");
Object.defineProperty(exports, "QuickCompleteTaskDto", { enumerable: true, get: function () { return quick_complete_task_rest_1.QuickCompleteTaskDto; } });
Object.defineProperty(exports, "QuickCompleteTaskResponseDto", { enumerable: true, get: function () { return quick_complete_task_rest_1.QuickCompleteTaskResponseDto; } });
// SHIFT MANAGEMENT
class ShiftData {
    id;
    staffId;
    date;
    startTime;
    endTime;
    clockInTime;
    clockOutTime;
    status;
    hoursWorked;
    tenantId;
    hotelId;
}
exports.ShiftData = ShiftData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift ID' }),
    __metadata("design:type", String)
], ShiftData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], ShiftData.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift date' }),
    __metadata("design:type", String)
], ShiftData.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled start time' }),
    __metadata("design:type", String)
], ShiftData.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled end time' }),
    __metadata("design:type", String)
], ShiftData.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual clock-in time' }),
    __metadata("design:type", String)
], ShiftData.prototype, "clockInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual clock-out time' }),
    __metadata("design:type", String)
], ShiftData.prototype, "clockOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift status' }),
    __metadata("design:type", String)
], ShiftData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hours worked' }),
    __metadata("design:type", Number)
], ShiftData.prototype, "hoursWorked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ShiftData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ShiftData.prototype, "hotelId", void 0);
class GetCurrentShiftNatsRequest {
    staffId;
    tenantId;
    hotelId;
}
exports.GetCurrentShiftNatsRequest = GetCurrentShiftNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCurrentShiftNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCurrentShiftNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetCurrentShiftNatsRequest.prototype, "hotelId", void 0);
class ClockInNatsRequest {
    staffId;
    tenantId;
    hotelId;
}
exports.ClockInNatsRequest = ClockInNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockInNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockInNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockInNatsRequest.prototype, "hotelId", void 0);
class ClockOutNatsRequest {
    staffId;
    tenantId;
    hotelId;
}
exports.ClockOutNatsRequest = ClockOutNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockOutNatsRequest.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockOutNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClockOutNatsRequest.prototype, "hotelId", void 0);
/**
 * Enhanced Cleaning Task (from getHousekeepingTasks)
 * This is what the service ACTUALLY returns - enhanced with room and staff details
 */
class EnhancedCleaningTask {
    id;
    roomId;
    roomNumber;
    roomType;
    floor;
    taskType;
    priority;
    status;
    assignedTo;
    staffName;
    estimatedDuration;
    actualDuration;
    scheduledStart;
    actualStart;
    actualEnd;
    notes;
    deadline;
    verifiedBy;
    verifiedAt;
    guestCheckout;
    nextGuestCheckin;
    specialRequirements;
    completionPhotos;
    inspectionResults;
}
exports.EnhancedCleaningTask = EnhancedCleaningTask;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Floor number' }),
    __metadata("design:type", Number)
], EnhancedCleaningTask.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task type' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task priority' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task status' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assigned staff ID', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], EnhancedCleaningTask.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual duration in minutes', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "actualDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled start time (ISO)' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "scheduledStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual start time (ISO)' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "actualStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual end time (ISO)', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "actualEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task notes' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task deadline (ISO)', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "deadline", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Verified by staff' }),
    __metadata("design:type", String)
], EnhancedCleaningTask.prototype, "verifiedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Verification timestamp (ISO)', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "verifiedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest checkout info', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "guestCheckout", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Next guest check-in info', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "nextGuestCheckin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Special requirements', type: [Object] }),
    __metadata("design:type", Array)
], EnhancedCleaningTask.prototype, "specialRequirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completion photos', type: [Object] }),
    __metadata("design:type", Array)
], EnhancedCleaningTask.prototype, "completionPhotos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inspection results', nullable: true }),
    __metadata("design:type", Object)
], EnhancedCleaningTask.prototype, "inspectionResults", void 0);
/**
 * Get Housekeeping Tasks Request
 * Pattern: housekeeping.tasks
 */
class GetHousekeepingTasksPayload {
    tenantId;
    hotelId;
    date;
}
exports.GetHousekeepingTasksPayload = GetHousekeepingTasksPayload;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetHousekeepingTasksPayload.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetHousekeepingTasksPayload.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetHousekeepingTasksPayload.prototype, "date", void 0);
/**
 * Staff Performance Metrics (from getPerformanceMetrics)
 * This is what the service ACTUALLY returns - NOT the PerformanceMetric entity
 * @unified Used by both NATS responses and REST API responses
 */
class StaffPerformanceMetricsNatsResponse {
    staffId;
    staffName;
    tasksCompleted;
    averageTime;
    averageRating;
    onTimeRate;
    efficiencyScore;
    totalTasks;
    pendingTasks;
    inProgressTasks;
}
exports.StaffPerformanceMetricsNatsResponse = StaffPerformanceMetricsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StaffPerformanceMetricsNatsResponse.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff name' }),
    __metadata("design:type", String)
], StaffPerformanceMetricsNatsResponse.prototype, "staffName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of tasks completed' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "tasksCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average completion time in minutes' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "averageTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average quality rating (0-5)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "averageRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'On-time completion rate (0-100)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "onTimeRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Efficiency score (0-100)' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "efficiencyScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks assigned' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "totalTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks count' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "pendingTasks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks count' }),
    __metadata("design:type", Number)
], StaffPerformanceMetricsNatsResponse.prototype, "inProgressTasks", void 0);
/**
 * Get Performance Metrics Request
 * Pattern: housekeeping.performance
 * @unified Used by both NATS requests and REST API query params
 */
class GetPerformanceMetricsNatsRequest {
    tenantId;
    hotelId;
    startDate;
}
exports.GetPerformanceMetricsNatsRequest = GetPerformanceMetricsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date filter (ISO format or YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetPerformanceMetricsNatsRequest.prototype, "startDate", void 0);
// ============= MOBILE TASK DTOs =============
/**
 * Mobile Task DTO — REST response shape (entity-like with relations)
 * Different from MobileTaskResponse which is the NATS mobile-UI flattened shape
 * @usage GET /api/staff/tasks, GET /api/staff/tasks/:id
 */
class MobileTaskDto {
    id;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
    deletedAt;
    roomId;
    assignedToId;
    taskType;
    status;
    priority;
    instructions;
    scheduledDate;
    scheduledFor;
    deadline;
    completedAt;
    verifiedBy;
    verifiedAt;
    isAutomated;
    eventTriggered;
    description;
    notes;
    estimatedDuration;
    assignedTo;
    roomNumber;
    assignedToDetails;
}
exports.MobileTaskDto = MobileTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID (UUID)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (UUID)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID (UUID)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deletion timestamp (soft delete)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "deletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID (UUID)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff ID (UUID)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task type', enum: enums_1.TaskType }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task status', enum: enums_1.TaskStatus }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task priority', enum: enums_1.TaskPriority }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task instructions' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "scheduledDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled start time' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task deadline' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "deadline", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Verified by staff ID/name' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "verifiedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Verification timestamp' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "verifiedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether created by automation' }),
    __metadata("design:type", Boolean)
], MobileTaskDto.prototype, "isAutomated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether triggered by events' }),
    __metadata("design:type", Boolean)
], MobileTaskDto.prototype, "eventTriggered", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task description' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task notes' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], MobileTaskDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff info' }),
    __metadata("design:type", Object)
], MobileTaskDto.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number (extracted from roomId)' }),
    __metadata("design:type", String)
], MobileTaskDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Full staff details for backward compatibility', type: Object }),
    __metadata("design:type", Object)
], MobileTaskDto.prototype, "assignedToDetails", void 0);
/**
 * Mobile Task Update DTO — REST @Body() for task updates
 * @usage PUT /api/staff/tasks/:id
 */
class MobileTaskUpdateDto {
    status;
    progress;
    notes;
    photos;
    requestHelp;
    timeSpent;
}
exports.MobileTaskUpdateDto = MobileTaskUpdateDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task status', enum: enums_1.TaskStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.TaskStatus),
    __metadata("design:type", String)
], MobileTaskUpdateDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Progress percentage (0-100)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MobileTaskUpdateDto.prototype, "progress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Update notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MobileTaskUpdateDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photos for this update', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], MobileTaskUpdateDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Request help flag' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MobileTaskUpdateDto.prototype, "requestHelp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Time spent on task in minutes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MobileTaskUpdateDto.prototype, "timeSpent", void 0);
/**
 * Task Summary Statistics
 */
class TaskSummaryStatsDto {
    pending;
    inProgress;
    completed;
    overdue;
}
exports.TaskSummaryStatsDto = TaskSummaryStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks count' }),
    __metadata("design:type", Number)
], TaskSummaryStatsDto.prototype, "pending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks count' }),
    __metadata("design:type", Number)
], TaskSummaryStatsDto.prototype, "inProgress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks count' }),
    __metadata("design:type", Number)
], TaskSummaryStatsDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overdue tasks count' }),
    __metadata("design:type", Number)
], TaskSummaryStatsDto.prototype, "overdue", void 0);
/**
 * Mobile Task List Response DTO — paginated response
 * @usage GET /api/staff/tasks response
 */
class MobileTaskListResponseDto {
    data;
    total;
    page;
    limit;
    hasNext;
    hasPrev;
    summary;
}
exports.MobileTaskListResponseDto = MobileTaskListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of tasks', type: [MobileTaskDto] }),
    __metadata("design:type", Array)
], MobileTaskListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of tasks' }),
    __metadata("design:type", Number)
], MobileTaskListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], MobileTaskListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], MobileTaskListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has next page' }),
    __metadata("design:type", Boolean)
], MobileTaskListResponseDto.prototype, "hasNext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has previous page' }),
    __metadata("design:type", Boolean)
], MobileTaskListResponseDto.prototype, "hasPrev", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task summary statistics', type: TaskSummaryStatsDto }),
    __metadata("design:type", TaskSummaryStatsDto)
], MobileTaskListResponseDto.prototype, "summary", void 0);
/**
 * Task Stats DTO — replaces local TaskStatsData in client
 */
class TaskStatsDto {
    total;
    completed;
    pending;
    inProgress;
}
exports.TaskStatsDto = TaskStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total tasks count' }),
    __metadata("design:type", Number)
], TaskStatsDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Completed tasks count' }),
    __metadata("design:type", Number)
], TaskStatsDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pending tasks count' }),
    __metadata("design:type", Number)
], TaskStatsDto.prototype, "pending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'In-progress tasks count' }),
    __metadata("design:type", Number)
], TaskStatsDto.prototype, "inProgress", void 0);
/**
 * Task Timer DTO — replaces local TimerData in client
 */
class TaskTimerDto {
    taskId;
    staffId;
    startTime;
    endTime;
    status;
}
exports.TaskTimerDto = TaskTimerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], TaskTimerDto.prototype, "taskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], TaskTimerDto.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer start time' }),
    __metadata("design:type", String)
], TaskTimerDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timer end time' }),
    __metadata("design:type", String)
], TaskTimerDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timer status' }),
    __metadata("design:type", String)
], TaskTimerDto.prototype, "status", void 0);
//# sourceMappingURL=cleaning-tasks-extended.nats.js.map