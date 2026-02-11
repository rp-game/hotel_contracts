"use strict";
/**
 * Loyalty Campaigns NATS Contracts
 *
 * Patterns:
 * - crm.loyalty.campaigns.findAll
 * - crm.loyalty.campaigns.findActive
 * - crm.loyalty.campaigns.stats
 * - crm.loyalty.campaigns.dashboard
 * - crm.loyalty.campaigns.findById
 * - crm.loyalty.campaigns.analytics
 * - crm.loyalty.campaigns.create
 * - crm.loyalty.campaigns.update
 * - crm.loyalty.campaigns.apply
 * - crm.loyalty.campaigns.templates
 *
 * Handler: crm-service (LoyaltyCampaignsNatsController)
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
exports.CampaignAnalyticsNatsResponse = exports.CampaignStatus = exports.CampaignType = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Campaign Type Enum
 */
var CampaignType;
(function (CampaignType) {
    CampaignType["BONUS_POINTS"] = "BONUS_POINTS";
    CampaignType["MULTIPLIER"] = "MULTIPLIER";
    CampaignType["DISCOUNT"] = "DISCOUNT";
    CampaignType["FREE_SERVICE"] = "FREE_SERVICE";
    CampaignType["TIER_BONUS"] = "TIER_BONUS";
    CampaignType["REFERRAL"] = "REFERRAL";
    CampaignType["BIRTHDAY"] = "BIRTHDAY";
    CampaignType["ANNIVERSARY"] = "ANNIVERSARY";
    CampaignType["SEASONAL"] = "SEASONAL";
    CampaignType["SPEND_THRESHOLD"] = "SPEND_THRESHOLD";
})(CampaignType || (exports.CampaignType = CampaignType = {}));
/**
 * Campaign Status Enum
 */
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "DRAFT";
    CampaignStatus["SCHEDULED"] = "SCHEDULED";
    CampaignStatus["ACTIVE"] = "ACTIVE";
    CampaignStatus["PAUSED"] = "PAUSED";
    CampaignStatus["COMPLETED"] = "COMPLETED";
    CampaignStatus["ENDED"] = "ENDED";
    CampaignStatus["CANCELLED"] = "CANCELLED";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
/**
 * Campaign Analytics Response
 */
class CampaignAnalyticsNatsResponse {
    campaignId;
    name;
    totalMembers;
    totalParticipants;
    conversionRate;
    totalPointsAwarded;
    averagePointsPerMember;
    roi;
    engagement;
}
exports.CampaignAnalyticsNatsResponse = CampaignAnalyticsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], CampaignAnalyticsNatsResponse.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], CampaignAnalyticsNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total members in the program' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "totalMembers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total participants in the campaign' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "totalParticipants", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conversion rate (0-100)' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "conversionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points awarded through this campaign' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "totalPointsAwarded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average points per member' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "averagePointsPerMember", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Return on investment (ROI) percentage' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "roi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Engagement rate (0-100)' }),
    __metadata("design:type", Number)
], CampaignAnalyticsNatsResponse.prototype, "engagement", void 0);
//# sourceMappingURL=loyalty-campaigns.nats.js.map