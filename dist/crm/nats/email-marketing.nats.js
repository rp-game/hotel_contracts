"use strict";
/**
 * Email Marketing NATS Contracts
 *
 * Patterns:
 * - crm.email_marketing.campaigns.findAll
 * - crm.email_marketing.campaigns.create
 * - crm.email_marketing.campaigns.findOne
 * - crm.email_marketing.campaigns.update
 * - crm.email_marketing.campaigns.delete
 * - crm.email_marketing.templates.findAll
 * - crm.email_marketing.templates.create
 * - crm.email_marketing.send.single
 * - crm.email_marketing.send.campaign
 * - crm.email_marketing.analytics
 *
 * Handler: crm-service (EmailMarketingController)
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
exports.EmailCampaignsListResponseDto = exports.FindAllEmailCampaignsNatsRequest = exports.EmailCampaignNatsResponse = exports.EmailCampaignStatsDto = exports.CreateEmailCampaignDto = exports.EmailCampaignStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Campaign Status Enum
 */
var EmailCampaignStatus;
(function (EmailCampaignStatus) {
    EmailCampaignStatus["DRAFT"] = "DRAFT";
    EmailCampaignStatus["SCHEDULED"] = "SCHEDULED";
    EmailCampaignStatus["SENDING"] = "SENDING";
    EmailCampaignStatus["SENT"] = "SENT";
    EmailCampaignStatus["PAUSED"] = "PAUSED";
    EmailCampaignStatus["CANCELLED"] = "CANCELLED";
})(EmailCampaignStatus || (exports.EmailCampaignStatus = EmailCampaignStatus = {}));
/**
 * Create Email Campaign DTO (used for both requests)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class CreateEmailCampaignDto {
    tenantId;
    name;
    description;
    subject;
    content;
    templateId;
    type;
    targetSegmentId;
    scheduledAt;
    sendImmediately;
    metadata;
}
exports.CreateEmailCampaignDto = CreateEmailCampaignDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email subject' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email content' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template ID' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign type', example: 'promotional' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target segment ID' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "targetSegmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time (ISO string)' }),
    __metadata("design:type", String)
], CreateEmailCampaignDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Send immediately flag' }),
    __metadata("design:type", Boolean)
], CreateEmailCampaignDto.prototype, "sendImmediately", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], CreateEmailCampaignDto.prototype, "metadata", void 0);
/**
 * Email Campaign Stats (embedded in campaign)
 */
class EmailCampaignStatsDto {
    totalRecipients;
    delivered;
    opened;
    clicked;
    unsubscribed;
    bounced;
    openRate;
    clickRate;
    unsubscribeRate;
    bounceRate;
}
exports.EmailCampaignStatsDto = EmailCampaignStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total recipients count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "totalRecipients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Successfully delivered count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "delivered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email opens count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "opened", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email clicks count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "clicked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unsubscribe count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "unsubscribed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bounce count' }),
    __metadata("design:type", Number)
], EmailCampaignStatsDto.prototype, "bounced", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Open rate as decimal string for precision',
        example: '23.45',
        type: 'string'
    }),
    __metadata("design:type", String)
], EmailCampaignStatsDto.prototype, "openRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Click rate as decimal string for precision',
        example: '5.67',
        type: 'string'
    }),
    __metadata("design:type", String)
], EmailCampaignStatsDto.prototype, "clickRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unsubscribe rate as decimal string for precision',
        example: '0.12',
        type: 'string'
    }),
    __metadata("design:type", String)
], EmailCampaignStatsDto.prototype, "unsubscribeRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bounce rate as decimal string for precision',
        example: '1.23',
        type: 'string'
    }),
    __metadata("design:type", String)
], EmailCampaignStatsDto.prototype, "bounceRate", void 0);
/**
 * Email Campaign Response (matches NATS handler real structure)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches NATS handler real code)
 */
class EmailCampaignNatsResponse {
    id;
    tenantId;
    name;
    description;
    subject;
    content;
    templateId;
    type;
    status;
    targetSegmentId;
    scheduledAt;
    sentAt;
    stats;
    createdAt;
    updatedAt;
    createdBy;
}
exports.EmailCampaignNatsResponse = EmailCampaignNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email subject' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email content' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email template ID reference' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type', example: 'promotional' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign status', example: 'draft' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target segment ID reference' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "targetSegmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time (ISO string)' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual sent time (ISO string)' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign statistics', type: EmailCampaignStatsDto }),
    __metadata("design:type", EmailCampaignStatsDto)
], EmailCampaignNatsResponse.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO string)' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO string)' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "createdBy", void 0);
/**
 * Find All Email Campaigns Request
 * Pattern: crm.email_marketing.campaigns.findAll
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class FindAllEmailCampaignsNatsRequest {
    tenantId;
    status;
    createdFrom;
    createdTo;
    page;
    limit;
}
exports.FindAllEmailCampaignsNatsRequest = FindAllEmailCampaignsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAllEmailCampaignsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    __metadata("design:type", String)
], FindAllEmailCampaignsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter from date (ISO string)' }),
    __metadata("design:type", String)
], FindAllEmailCampaignsNatsRequest.prototype, "createdFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter to date (ISO string)' }),
    __metadata("design:type", String)
], FindAllEmailCampaignsNatsRequest.prototype, "createdTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number' }),
    __metadata("design:type", Number)
], FindAllEmailCampaignsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], FindAllEmailCampaignsNatsRequest.prototype, "limit", void 0);
/**
 * Email Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
class EmailCampaignsListResponseDto {
    campaigns;
    total;
    page;
    limit;
}
exports.EmailCampaignsListResponseDto = EmailCampaignsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of email campaigns', type: [EmailCampaignNatsResponse] }),
    __metadata("design:type", Array)
], EmailCampaignsListResponseDto.prototype, "campaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], EmailCampaignsListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], EmailCampaignsListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], EmailCampaignsListResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=email-marketing.nats.js.map