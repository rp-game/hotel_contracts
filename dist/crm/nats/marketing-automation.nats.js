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
exports.MarketingAutomationNatsResponse = exports.ActionType = exports.AutomationStatus = void 0;
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
 * Marketing Automation Response
 */
class MarketingAutomationNatsResponse {
    id;
    tenantId;
    name;
    description;
    status;
    trigger;
    actions;
    targetSegments;
    totalExecutions;
    successfulExecutions;
    failedExecutions;
    createdBy;
    createdAt;
    updatedAt;
}
exports.MarketingAutomationNatsResponse = MarketingAutomationNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Automation ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Automation name' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Automation description' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: AutomationStatus, description: 'Automation status' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Trigger configuration' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "trigger", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Automation actions', type: 'array' }),
    __metadata("design:type", Array)
], MarketingAutomationNatsResponse.prototype, "actions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target customer segments', type: [String] }),
    __metadata("design:type", Array)
], MarketingAutomationNatsResponse.prototype, "targetSegments", void 0);
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
    (0, swagger_1.ApiProperty)({ description: 'User ID who created automation' }),
    __metadata("design:type", String)
], MarketingAutomationNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], MarketingAutomationNatsResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=marketing-automation.nats.js.map