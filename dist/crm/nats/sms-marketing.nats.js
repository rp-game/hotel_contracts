"use strict";
/**
 * SMS Marketing NATS Contracts
 *
 * Patterns:
 * - crm.sms_marketing.campaigns.findAll
 * - crm.sms_marketing.campaigns.create
 * - crm.sms_marketing.campaigns.findOne
 * - crm.sms_marketing.campaigns.update
 * - crm.sms_marketing.campaigns.delete
 * - crm.sms_marketing.templates.findAll
 * - crm.sms_marketing.templates.create
 * - crm.sms_marketing.send.single
 * - crm.sms_marketing.send.campaign
 * - crm.sms_marketing.analytics
 *
 * Handler: crm-service (SmsMarketingController)
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
exports.SmsCampaignNatsResponse = exports.SmsCampaignStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * SMS Campaign Status Enum
 */
var SmsCampaignStatus;
(function (SmsCampaignStatus) {
    SmsCampaignStatus["DRAFT"] = "DRAFT";
    SmsCampaignStatus["SCHEDULED"] = "SCHEDULED";
    SmsCampaignStatus["SENDING"] = "SENDING";
    SmsCampaignStatus["SENT"] = "SENT";
    SmsCampaignStatus["PAUSED"] = "PAUSED";
    SmsCampaignStatus["CANCELLED"] = "CANCELLED";
})(SmsCampaignStatus || (exports.SmsCampaignStatus = SmsCampaignStatus = {}));
/**
 * SMS Campaign Response
 */
class SmsCampaignNatsResponse {
    id;
    tenantId;
    name;
    description;
    templateId;
    content;
    fromPhoneNumber;
    status;
    targetSegments;
    targetAudience;
    sentCount;
    deliveredCount;
    failedCount;
    bounceCount;
    scheduledAt;
    sentAt;
    createdBy;
    createdAt;
    updatedAt;
}
exports.SmsCampaignNatsResponse = SmsCampaignNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SMS template ID' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SMS message content' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sender phone number' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "fromPhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: SmsCampaignStatus, description: 'Campaign status' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target customer segments', type: [String] }),
    __metadata("design:type", Array)
], SmsCampaignNatsResponse.prototype, "targetSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total target audience size' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of SMS sent' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "sentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of SMS delivered' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "deliveredCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of failed SMS' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "failedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bounced SMS' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "bounceCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time' }),
    __metadata("design:type", Object)
], SmsCampaignNatsResponse.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual send time' }),
    __metadata("design:type", Object)
], SmsCampaignNatsResponse.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who created campaign' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], SmsCampaignNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], SmsCampaignNatsResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=sms-marketing.nats.js.map