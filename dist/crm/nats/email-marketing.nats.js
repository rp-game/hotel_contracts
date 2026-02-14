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
exports.EmailCampaignNatsResponse = exports.EmailCampaignStatus = void 0;
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
 * Email Campaign Response
 */
class EmailCampaignNatsResponse {
    id;
    tenantId;
    name;
    description;
    templateId;
    subject;
    fromEmail;
    fromName;
    status;
    targetSegments;
    targetAudience;
    sentCount;
    openCount;
    clickCount;
    bounceCount;
    scheduledAt;
    sentAt;
    createdBy;
    createdAt;
    updatedAt;
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
    (0, swagger_1.ApiProperty)({ description: 'Email template ID' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "templateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email subject line' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sender email address' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "fromEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sender display name' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "fromName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: EmailCampaignStatus, description: 'Campaign status' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Target customer segments', type: [String] }),
    __metadata("design:type", Array)
], EmailCampaignNatsResponse.prototype, "targetSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total target audience size' }),
    __metadata("design:type", Number)
], EmailCampaignNatsResponse.prototype, "targetAudience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of emails sent' }),
    __metadata("design:type", Number)
], EmailCampaignNatsResponse.prototype, "sentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of emails opened' }),
    __metadata("design:type", Number)
], EmailCampaignNatsResponse.prototype, "openCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of links clicked' }),
    __metadata("design:type", Number)
], EmailCampaignNatsResponse.prototype, "clickCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bounced emails' }),
    __metadata("design:type", Number)
], EmailCampaignNatsResponse.prototype, "bounceCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Scheduled send time' }),
    __metadata("design:type", Object)
], EmailCampaignNatsResponse.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual send time' }),
    __metadata("design:type", Object)
], EmailCampaignNatsResponse.prototype, "sentAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who created campaign' }),
    __metadata("design:type", String)
], EmailCampaignNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], EmailCampaignNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], EmailCampaignNatsResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=email-marketing.nats.js.map