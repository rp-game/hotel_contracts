"use strict";
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
exports.AutomationSettingsDto = exports.AutomationLastRunTimesDto = exports.OverdueMonitoringSettingsDto = exports.AutoAssignmentSettingsDto = exports.CheckinAutomationSettingsDto = exports.CheckoutAutomationSettingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Checkout Automation Settings
 * Controls automatic task creation after guest checkout
 */
class CheckoutAutomationSettingsDto {
    enabled;
    createTaskAfterCheckout;
    defaultTaskType;
    defaultPriority;
    estimatedDuration;
    assignmentStrategy;
}
exports.CheckoutAutomationSettingsDto = CheckoutAutomationSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable checkout automation', example: true }),
    __metadata("design:type", Boolean)
], CheckoutAutomationSettingsDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Create cleaning task after checkout', example: true }),
    __metadata("design:type", Boolean)
], CheckoutAutomationSettingsDto.prototype, "createTaskAfterCheckout", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Default task type for checkout cleaning', example: 'CHECKOUT_CLEANING' }),
    __metadata("design:type", String)
], CheckoutAutomationSettingsDto.prototype, "defaultTaskType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Default priority for checkout tasks', example: 'HIGH' }),
    __metadata("design:type", String)
], CheckoutAutomationSettingsDto.prototype, "defaultPriority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated duration in minutes', example: 45 }),
    __metadata("design:type", Number)
], CheckoutAutomationSettingsDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Task assignment strategy',
        enum: ['auto', 'manual', 'round-robin'],
        example: 'auto'
    }),
    __metadata("design:type", String)
], CheckoutAutomationSettingsDto.prototype, "assignmentStrategy", void 0);
/**
 * Check-in Automation Settings
 * Controls room inspection requirements before guest check-in
 */
class CheckinAutomationSettingsDto {
    enabled;
    requireInspectionBeforeCheckin;
    autoCreateInspectionTask;
    inspectionDuration;
}
exports.CheckinAutomationSettingsDto = CheckinAutomationSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable check-in automation', example: true }),
    __metadata("design:type", Boolean)
], CheckinAutomationSettingsDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Require inspection before check-in', example: true }),
    __metadata("design:type", Boolean)
], CheckinAutomationSettingsDto.prototype, "requireInspectionBeforeCheckin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto-create inspection task', example: true }),
    __metadata("design:type", Boolean)
], CheckinAutomationSettingsDto.prototype, "autoCreateInspectionTask", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inspection duration in minutes', example: 15 }),
    __metadata("design:type", Number)
], CheckinAutomationSettingsDto.prototype, "inspectionDuration", void 0);
/**
 * Auto Assignment Settings
 * Controls automatic task assignment to staff
 */
class AutoAssignmentSettingsDto {
    enabled;
    assignmentStrategy;
    maxTasksPerStaff;
    assignmentInterval;
    considerSkills;
    considerWorkload;
}
exports.AutoAssignmentSettingsDto = AutoAssignmentSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable auto assignment', example: true }),
    __metadata("design:type", Boolean)
], AutoAssignmentSettingsDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Assignment strategy',
        enum: ['best-match', 'round-robin', 'least-busy'],
        example: 'best-match'
    }),
    __metadata("design:type", String)
], AutoAssignmentSettingsDto.prototype, "assignmentStrategy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum tasks per staff member', example: 5 }),
    __metadata("design:type", Number)
], AutoAssignmentSettingsDto.prototype, "maxTasksPerStaff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assignment interval in minutes', example: 15 }),
    __metadata("design:type", Number)
], AutoAssignmentSettingsDto.prototype, "assignmentInterval", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Consider staff skills when assigning', example: true }),
    __metadata("design:type", Boolean)
], AutoAssignmentSettingsDto.prototype, "considerSkills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Consider current workload when assigning', example: true }),
    __metadata("design:type", Boolean)
], AutoAssignmentSettingsDto.prototype, "considerWorkload", void 0);
/**
 * Overdue Monitoring Settings
 * Controls monitoring and escalation of overdue tasks
 */
class OverdueMonitoringSettingsDto {
    enabled;
    overdueThreshold;
    escalationEnabled;
    notificationEmails;
    checkInterval;
}
exports.OverdueMonitoringSettingsDto = OverdueMonitoringSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable overdue monitoring', example: true }),
    __metadata("design:type", Boolean)
], OverdueMonitoringSettingsDto.prototype, "enabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overdue threshold in hours', example: 2 }),
    __metadata("design:type", Number)
], OverdueMonitoringSettingsDto.prototype, "overdueThreshold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable escalation for overdue tasks', example: true }),
    __metadata("design:type", Boolean)
], OverdueMonitoringSettingsDto.prototype, "escalationEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email addresses for notifications',
        type: [String],
        example: ['manager@hotel.com']
    }),
    __metadata("design:type", Array)
], OverdueMonitoringSettingsDto.prototype, "notificationEmails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check interval in minutes', example: 30 }),
    __metadata("design:type", Number)
], OverdueMonitoringSettingsDto.prototype, "checkInterval", void 0);
/**
 * Automation Last Run Times
 * Tracks when each automation type last ran
 */
class AutomationLastRunTimesDto {
    autoAssignment;
    taskCreation;
    overdueProcessing;
}
exports.AutomationLastRunTimesDto = AutomationLastRunTimesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last auto assignment run time', type: Date }),
    __metadata("design:type", Date)
], AutomationLastRunTimesDto.prototype, "autoAssignment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last task creation run time', type: Date }),
    __metadata("design:type", Date)
], AutomationLastRunTimesDto.prototype, "taskCreation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last overdue processing run time', type: Date }),
    __metadata("design:type", Date)
], AutomationLastRunTimesDto.prototype, "overdueProcessing", void 0);
/**
 * Automation Settings DTO
 * Unified DTO for both NATS messages and REST responses
 * Ensures consistency between housekeeping-service and api-gateway
 */
class AutomationSettingsDto {
    id;
    tenantId;
    hotelId;
    checkoutAutomation;
    checkinAutomation;
    autoAssignment;
    overdueMonitoring;
    lastRunTimes;
    automationEnabled;
    createdAt;
    updatedAt;
}
exports.AutomationSettingsDto = AutomationSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Settings record ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], AutomationSettingsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], AutomationSettingsDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '123e4567-e89b-12d3-a456-426614174000' }),
    __metadata("design:type", String)
], AutomationSettingsDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Checkout automation configuration',
        type: CheckoutAutomationSettingsDto
    }),
    __metadata("design:type", CheckoutAutomationSettingsDto)
], AutomationSettingsDto.prototype, "checkoutAutomation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-in automation configuration',
        type: CheckinAutomationSettingsDto
    }),
    __metadata("design:type", CheckinAutomationSettingsDto)
], AutomationSettingsDto.prototype, "checkinAutomation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Auto assignment configuration',
        type: AutoAssignmentSettingsDto
    }),
    __metadata("design:type", AutoAssignmentSettingsDto)
], AutomationSettingsDto.prototype, "autoAssignment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overdue monitoring configuration',
        type: OverdueMonitoringSettingsDto
    }),
    __metadata("design:type", OverdueMonitoringSettingsDto)
], AutomationSettingsDto.prototype, "overdueMonitoring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last run times for each automation type',
        type: AutomationLastRunTimesDto
    }),
    __metadata("design:type", AutomationLastRunTimesDto)
], AutomationSettingsDto.prototype, "lastRunTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Global automation enabled flag', example: true }),
    __metadata("design:type", Boolean)
], AutomationSettingsDto.prototype, "automationEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Record creation timestamp', type: Date }),
    __metadata("design:type", Date)
], AutomationSettingsDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Record last update timestamp', type: Date }),
    __metadata("design:type", Date)
], AutomationSettingsDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=automation-settings.dto.js.map