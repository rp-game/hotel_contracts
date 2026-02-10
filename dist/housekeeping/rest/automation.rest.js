"use strict";
/**
 * Housekeeping Automation REST API DTOs
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
exports.AutomationStatusDto = exports.AutomationStatsDto = exports.ActiveRulesDto = exports.LastRunTimesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Last Run Times for Automation Processes
 * Shared between NATS contracts and REST API
 */
class LastRunTimesDto {
    autoAssignment;
    taskCreation;
    overdueProcessing;
}
exports.LastRunTimesDto = LastRunTimesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last auto-assignment run time (ISO datetime)',
        nullable: true,
        type: String,
    }),
    __metadata("design:type", Object)
], LastRunTimesDto.prototype, "autoAssignment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last task creation run time (ISO datetime)',
        nullable: true,
        type: String,
    }),
    __metadata("design:type", Object)
], LastRunTimesDto.prototype, "taskCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last overdue processing run time (ISO datetime)',
        nullable: true,
        type: String,
    }),
    __metadata("design:type", Object)
], LastRunTimesDto.prototype, "overdueProcessing", void 0);
/**
 * Active Automation Rules
 * Shared between NATS contracts and REST API
 */
class ActiveRulesDto {
    checkoutAutomation;
    checkinAutomation;
    autoAssignment;
    overdueMonitoring;
}
exports.ActiveRulesDto = ActiveRulesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Checkout automation enabled',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], ActiveRulesDto.prototype, "checkoutAutomation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Checkin automation enabled',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], ActiveRulesDto.prototype, "checkinAutomation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Auto-assignment enabled',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], ActiveRulesDto.prototype, "autoAssignment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overdue monitoring enabled',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], ActiveRulesDto.prototype, "overdueMonitoring", void 0);
/**
 * Automation Statistics
 * Shared between NATS contracts and REST API
 */
class AutomationStatsDto {
    tasksAutoAssigned;
    tasksAutoCreated;
    overdueTasksProcessed;
    automationSuccessRate;
}
exports.AutomationStatsDto = AutomationStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tasks auto-assigned today',
        type: Number,
    }),
    __metadata("design:type", Number)
], AutomationStatsDto.prototype, "tasksAutoAssigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tasks auto-created today',
        type: Number,
    }),
    __metadata("design:type", Number)
], AutomationStatsDto.prototype, "tasksAutoCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Overdue tasks processed today',
        type: Number,
    }),
    __metadata("design:type", Number)
], AutomationStatsDto.prototype, "overdueTasksProcessed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Automation success rate percentage',
        type: Number,
    }),
    __metadata("design:type", Number)
], AutomationStatsDto.prototype, "automationSuccessRate", void 0);
/**
 * Automation Status Response DTO
 * Shared between NATS contracts and REST API
 * Maps to AutomationStatusData in NATS contracts
 */
class AutomationStatusDto {
    tenantId;
    hotelId;
    automationEnabled;
    lastRunTimes;
    activeRules;
    stats;
}
exports.AutomationStatusDto = AutomationStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        type: String,
    }),
    __metadata("design:type", String)
], AutomationStatusDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        type: String,
    }),
    __metadata("design:type", String)
], AutomationStatusDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Automation enabled status',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], AutomationStatusDto.prototype, "automationEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last run times for different automation types',
        type: LastRunTimesDto,
    }),
    __metadata("design:type", LastRunTimesDto)
], AutomationStatusDto.prototype, "lastRunTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active automation rules and their enablement status',
        type: ActiveRulesDto,
    }),
    __metadata("design:type", ActiveRulesDto)
], AutomationStatusDto.prototype, "activeRules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Today's automation statistics",
        type: AutomationStatsDto,
    }),
    __metadata("design:type", AutomationStatsDto)
], AutomationStatusDto.prototype, "stats", void 0);
//# sourceMappingURL=automation.rest.js.map