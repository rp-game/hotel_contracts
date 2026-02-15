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
exports.SMSCampaignsListResponseDto = exports.FindAllSmsCampaignsNatsRequest = exports.SmsCampaignNatsResponse = exports.CreateSMSCampaignDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Create SMS Campaign DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @matches_entity SmsCampaign (services/crm-service/src/marketing/sms/entities/sms-campaign.entity.ts)
 */
class CreateSMSCampaignDto {
    tenantId;
    name;
    templateId;
    campaignType;
    recipientSegmentation;
    personalizationData;
    scheduledAt;
    notes;
    metadata;
}
exports.CreateSMSCampaignDto = CreateSMSCampaignDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SMS template ID reference' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type', enum: ['ONE_TIME', 'RECURRING', 'AUTOMATED'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "campaignType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Recipient segmentation criteria' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSMSCampaignDto.prototype, "recipientSegmentation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Personalization data for template variables' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSMSCampaignDto.prototype, "personalizationData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSMSCampaignDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSMSCampaignDto.prototype, "metadata", void 0);
/**
 * SMS Campaign Response (matches entity structure with template join)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @matches_entity SmsCampaign (services/crm-service/src/marketing/sms/entities/sms-campaign.entity.ts)
 * @note message and description populated from joined template relation
 */
class SmsCampaignNatsResponse {
    id;
    tenantId;
    name;
    templateId;
    campaignType;
    status;
    message;
    description;
    templateName;
    scheduledAt;
    sentAt;
    totalRecipients;
    sentCount;
    deliveredCount;
    failedCount;
    optOutCount;
    deliveryRate;
    notes;
    metadata;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
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
    (0, swagger_1.ApiProperty)({ description: 'SMS template ID reference' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type', example: 'ONE_TIME' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "campaignType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign status', example: 'DRAFT' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SMS message (from template.content)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description (from template.description)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template name (from template.name)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "templateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time (ISO string)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual sent time (ISO string)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total recipients count' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "totalRecipients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successfully sent count' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "sentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successfully delivered count' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "deliveredCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Failed delivery count' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "failedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Opt-out count' }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "optOutCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Delivery rate percentage', example: 98.5 }),
    __metadata("design:type", Number)
], SmsCampaignNatsResponse.prototype, "deliveryRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign notes' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], SmsCampaignNatsResponse.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO string)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO string)' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    __metadata("design:type", String)
], SmsCampaignNatsResponse.prototype, "updatedBy", void 0);
/**
 * Find All SMS Campaigns Request
 * Pattern: crm.sms_marketing.campaigns.findAll
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class FindAllSmsCampaignsNatsRequest {
    tenantId;
    status;
    createdFrom;
    createdTo;
    page;
    limit;
}
exports.FindAllSmsCampaignsNatsRequest = FindAllSmsCampaignsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllSmsCampaignsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllSmsCampaignsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter from date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllSmsCampaignsNatsRequest.prototype, "createdFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter to date (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllSmsCampaignsNatsRequest.prototype, "createdTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindAllSmsCampaignsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FindAllSmsCampaignsNatsRequest.prototype, "limit", void 0);
/**
 * SMS Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class SMSCampaignsListResponseDto {
    campaigns;
    total;
    page;
    limit;
}
exports.SMSCampaignsListResponseDto = SMSCampaignsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of SMS campaigns', type: [SmsCampaignNatsResponse] }),
    __metadata("design:type", Array)
], SMSCampaignsListResponseDto.prototype, "campaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], SMSCampaignsListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], SMSCampaignsListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], SMSCampaignsListResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=sms-marketing.nats.js.map