"use strict";
/**
 * Cleaning Tasks NATS Contracts (Unified for NATS + REST)
 * Pattern: housekeeping.cleaning-tasks.*
 *
 * @unified These contracts are used by:
 * - NATS message handlers (housekeeping-service)
 * - API Gateway REST endpoints
 * - Frontend TypeScript client
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
exports.CleaningTasksListNatsResponse = exports.FindAllCleaningTasksNatsRequest = exports.UpdateCleaningTaskNatsRequest = exports.UpdateCleaningTaskFieldsDto = exports.CreateCleaningTaskNatsRequest = exports.CleaningTaskNatsResponse = exports.AssignedStaffNatsDto = exports.CleaningTaskPriority = exports.CleaningTaskType = exports.CleaningTaskStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Cleaning Task Status Enum
 */
var CleaningTaskStatus;
(function (CleaningTaskStatus) {
    CleaningTaskStatus["PENDING"] = "PENDING";
    CleaningTaskStatus["ASSIGNED"] = "ASSIGNED";
    CleaningTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    CleaningTaskStatus["PAUSED"] = "PAUSED";
    CleaningTaskStatus["COMPLETED"] = "COMPLETED";
    CleaningTaskStatus["VERIFIED"] = "VERIFIED";
    CleaningTaskStatus["REJECTED"] = "REJECTED";
    CleaningTaskStatus["CANCELLED"] = "CANCELLED";
    CleaningTaskStatus["OVERDUE"] = "OVERDUE";
})(CleaningTaskStatus || (exports.CleaningTaskStatus = CleaningTaskStatus = {}));
/**
 * Cleaning Task Type Enum
 */
var CleaningTaskType;
(function (CleaningTaskType) {
    CleaningTaskType["CLEANING"] = "CLEANING";
    CleaningTaskType["MAINTENANCE"] = "MAINTENANCE";
    CleaningTaskType["INSPECTION"] = "INSPECTION";
    CleaningTaskType["DEEP_CLEAN"] = "DEEP_CLEAN";
})(CleaningTaskType || (exports.CleaningTaskType = CleaningTaskType = {}));
/**
 * Cleaning Task Priority Enum
 */
var CleaningTaskPriority;
(function (CleaningTaskPriority) {
    CleaningTaskPriority["LOW"] = "LOW";
    CleaningTaskPriority["MEDIUM"] = "MEDIUM";
    CleaningTaskPriority["HIGH"] = "HIGH";
    CleaningTaskPriority["URGENT"] = "URGENT";
})(CleaningTaskPriority || (exports.CleaningTaskPriority = CleaningTaskPriority = {}));
/**
 * Assigned Staff Details
 */
class AssignedStaffNatsDto {
    id;
    fullName;
    avatar;
}
exports.AssignedStaffNatsDto = AssignedStaffNatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], AssignedStaffNatsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of assigned staff' }),
    __metadata("design:type", String)
], AssignedStaffNatsDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff avatar URL' }),
    __metadata("design:type", String)
], AssignedStaffNatsDto.prototype, "avatar", void 0);
/**
 * Single Cleaning Task Response
 * @unified Used by both NATS responses and REST API responses
 */
class CleaningTaskNatsResponse {
    id;
    tenantId;
    hotelId;
    roomId;
    roomNumber;
    taskType;
    status;
    priority;
    description;
    notes;
    estimatedDuration;
    scheduledFor;
    assignedToId;
    assignedStaff;
    createdAt;
    updatedAt;
    completedAt;
    actualDuration;
    isAutomated;
    eventTriggered;
}
exports.CleaningTaskNatsResponse = CleaningTaskNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task type',
        enum: CleaningTaskType,
        example: CleaningTaskType.CLEANING
    }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task status',
        enum: CleaningTaskStatus,
        example: CleaningTaskStatus.PENDING
    }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task priority',
        enum: CleaningTaskPriority,
        example: CleaningTaskPriority.MEDIUM
    }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task description' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task completion notes' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], CleaningTaskNatsResponse.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled start time (ISO datetime)' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff ID' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff details', type: AssignedStaffNatsDto }),
    __metadata("design:type", AssignedStaffNatsDto)
], CleaningTaskNatsResponse.prototype, "assignedStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], CleaningTaskNatsResponse.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    __metadata("design:type", Number)
], CleaningTaskNatsResponse.prototype, "actualDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this task was auto-created by automation' }),
    __metadata("design:type", Boolean)
], CleaningTaskNatsResponse.prototype, "isAutomated", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this task was triggered by an event' }),
    __metadata("design:type", Boolean)
], CleaningTaskNatsResponse.prototype, "eventTriggered", void 0);
/**
 * Create Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.create
 */
class CreateCleaningTaskNatsRequest {
    tenantId;
    hotelId;
    roomId;
    roomNumber;
    taskType;
    priority;
    description;
    estimatedDuration;
    scheduledFor;
    assignedToId;
}
exports.CreateCleaningTaskNatsRequest = CreateCleaningTaskNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task type',
        enum: CleaningTaskType
    }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task priority',
        enum: CleaningTaskPriority
    }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task description' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], CreateCleaningTaskNatsRequest.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Scheduled start time (ISO datetime)' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff ID' }),
    __metadata("design:type", String)
], CreateCleaningTaskNatsRequest.prototype, "assignedToId", void 0);
/**
 * Update fields for Cleaning Task
 */
class UpdateCleaningTaskFieldsDto {
    taskType;
    status;
    priority;
    description;
    notes;
    estimatedDuration;
    scheduledFor;
    assignedToId;
    completedAt;
    actualDuration;
}
exports.UpdateCleaningTaskFieldsDto = UpdateCleaningTaskFieldsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Task type',
        enum: CleaningTaskType
    }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "taskType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Task status',
        enum: CleaningTaskStatus
    }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Task priority',
        enum: CleaningTaskPriority
    }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task description' }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Task completion notes' }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated duration in minutes' }),
    __metadata("design:type", Number)
], UpdateCleaningTaskFieldsDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled start time (ISO datetime)' }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "scheduledFor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned staff ID' }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Completion timestamp (ISO datetime)' }),
    __metadata("design:type", String)
], UpdateCleaningTaskFieldsDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual duration in minutes' }),
    __metadata("design:type", Number)
], UpdateCleaningTaskFieldsDto.prototype, "actualDuration", void 0);
/**
 * Update Cleaning Task Request
 * Pattern: housekeeping.cleaning-tasks.update
 */
class UpdateCleaningTaskNatsRequest {
    id;
    tenantId;
    hotelId;
    updates;
}
exports.UpdateCleaningTaskNatsRequest = UpdateCleaningTaskNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Task ID' }),
    __metadata("design:type", String)
], UpdateCleaningTaskNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateCleaningTaskNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UpdateCleaningTaskNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update fields', type: UpdateCleaningTaskFieldsDto }),
    __metadata("design:type", UpdateCleaningTaskFieldsDto)
], UpdateCleaningTaskNatsRequest.prototype, "updates", void 0);
/**
 * Find All Cleaning Tasks Request (Query Parameters)
 * @unified Used by both NATS requests and REST API query params
 */
class FindAllCleaningTasksNatsRequest {
    tenantId;
    hotelId;
    page;
    limit;
    status;
    type;
    priority;
    assignedToId;
    roomId;
    startDate;
    endDate;
}
exports.FindAllCleaningTasksNatsRequest = FindAllCleaningTasksNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', minimum: 1, default: 1 }),
    __metadata("design:type", Number)
], FindAllCleaningTasksNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 }),
    __metadata("design:type", Number)
], FindAllCleaningTasksNatsRequest.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by task status',
        enum: CleaningTaskStatus
    }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by task type',
        enum: CleaningTaskType
    }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by priority',
        enum: CleaningTaskPriority
    }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by assigned staff ID' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "assignedToId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room ID' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by start date (ISO format)' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by end date (ISO format)' }),
    __metadata("design:type", String)
], FindAllCleaningTasksNatsRequest.prototype, "endDate", void 0);
/**
 * Cleaning Tasks List Response (with pagination)
 * @unified Used by both NATS responses and REST API responses
 */
class CleaningTasksListNatsResponse {
    data;
    total;
    page;
    limit;
}
exports.CleaningTasksListNatsResponse = CleaningTasksListNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of cleaning tasks', type: [CleaningTaskNatsResponse] }),
    __metadata("design:type", Array)
], CleaningTasksListNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of tasks' }),
    __metadata("design:type", Number)
], CleaningTasksListNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], CleaningTasksListNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], CleaningTasksListNatsResponse.prototype, "limit", void 0);
//# sourceMappingURL=cleaning-tasks.nats.js.map