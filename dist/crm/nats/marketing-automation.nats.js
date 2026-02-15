"use strict";
/**
 * Marketing Automation NATS Contracts
 *
 * Patterns:
 * - crm.marketing.automation.findAll
 * - crm.marketing.automation.create
 * - crm.marketing.automation.findOne
 * - crm.marketing.automation.update
 * - crm.marketing.automation.delete
 * - crm.marketing.automation.activate
 * - crm.marketing.automation.deactivate
 * - crm.marketing.automation.trigger
 * - crm.marketing.automation.execute
 * - crm.marketing.automation.analytics
 *
 * Handler: crm-service (AutomationController)
 * Called by: api-gateway (CrmController)
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
exports.AutomationRulesListResponseDto = exports.FindAllAutomationRulesNatsRequest = exports.MarketingAutomationNatsResponse = exports.ActionType = exports.AutomationStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Automation Status Enum
 */
var AutomationStatus;
(function (AutomationStatus) {
    AutomationStatus["DRAFT"] = "DRAFT";
    AutomationStatus["ACTIVE"] = "ACTIVE";
    AutomationStatus["PAUSED"] = "PAUSED";
    AutomationStatus["ARCHIVED"] = "ARCHIVED";
    AutomationStatus["COMPLETED"] = "COMPLETED";
})(AutomationStatus || (exports.AutomationStatus = AutomationStatus = {}));
/**
 * Automation Action Type
 */
var ActionType;
(function (ActionType) {
    ActionType["SEND_EMAIL"] = "SEND_EMAIL";
    ActionType["SEND_SMS"] = "SEND_SMS";
    ActionType["SEND_PUSH"] = "SEND_PUSH";
    ActionType["APPLY_CAMPAIGN"] = "APPLY_CAMPAIGN";
    ActionType["UPDATE_SEGMENT"] = "UPDATE_SEGMENT";
    ActionType["TRIGGER_WORKFLOW"] = "TRIGGER_WORKFLOW";
})(ActionType || (exports.ActionType = ActionType = {}));
/**
 * Marketing Automation Response (matches AutomationRule entity)
 *
 * @matches_entity AutomationRule (services/crm-service/src/marketing/automation/entities/automation-rule.entity.ts)
 * @standardized 2026-02-15
 */
class MarketingAutomationNatsResponse {
    id;
    tenantId;
    name;
    description;
    ruleType;
    status;
    isActive;
    triggerEvent;
    triggerConditions;
    actionType;
    actionConfig;
    delayMinutes;
    scheduleConfig;
    targetSegmentation;
    maxExecutionsPerCustomer;
    cooldownHours;
    activeFrom;
    activeTo;
    totalTriggers;
    totalExecutions;
    successfulExecutions;
    failedExecutions;
    lastExecutedAt;
    metadata;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
}
exports.MarketingAutomationNatsResponse = MarketingAutomationNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Automation rule ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rule name' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rule description' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rule type', example: 'WELCOME_SERIES' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "ruleType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rule status', example: 'ACTIVE' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether rule is active' }),
    __metadata("design:type", Boolean)
], MarketingAutomationNatsResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Trigger event configuration' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "triggerEvent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Trigger conditions that must be met' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "triggerConditions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action type', example: 'SEND_EMAIL' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "actionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action configuration' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "actionConfig", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Delay in minutes before executing action' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "delayMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Schedule configuration for recurring rules' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "scheduleConfig", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target customer segmentation criteria' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "targetSegmentation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum executions per customer' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "maxExecutionsPerCustomer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cooldown hours between executions' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "cooldownHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rule active from timestamp (ISO string)' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "activeFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rule active to timestamp (ISO string)' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "activeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total trigger count' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "totalTriggers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total execution count' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "totalExecutions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successful execution count' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "successfulExecutions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failed execution count' }),
    __metadata("design:type", Number)
], MarketingAutomationNatsResponse.prototype, "failedExecutions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last executed timestamp (ISO string)' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "lastExecutedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO string)' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO string)' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "updatedBy", void 0);
/**
 * Find All Automation Rules Request
 * Pattern: crm.marketing.automation.findAll
 *
 * @standardized 2026-02-15
 */
class FindAllAutomationRulesNatsRequest {
    tenantId;
    status;
    ruleType;
    isActive;
    page;
    limit;
}
exports.FindAllAutomationRulesNatsRequest = FindAllAutomationRulesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAllAutomationRulesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    __metadata("design:type", String)
], FindAllAutomationRulesNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by rule type' }),
    __metadata("design:type", String)
], FindAllAutomationRulesNatsRequest.prototype, "ruleType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by active status' }),
    __metadata("design:type", Boolean)
], FindAllAutomationRulesNatsRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], FindAllAutomationRulesNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindAllAutomationRulesNatsRequest.prototype, "limit", void 0);
/**
 * Automation Rules List Response DTO
 *
 * @standardized 2026-02-15
 */
class AutomationRulesListResponseDto {
    rules;
    total;
}
exports.AutomationRulesListResponseDto = AutomationRulesListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of automation rules', type: [MarketingAutomationNatsResponse] }),
    __metadata("design:type", Array)
], AutomationRulesListResponseDto.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], AutomationRulesListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=marketing-automation.nats.js.map