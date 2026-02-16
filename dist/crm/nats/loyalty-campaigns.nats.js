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
exports.ActiveCampaignsListData = exports.LoyaltyCampaignsListData = exports.GetCampaignTemplatesNatsRequest = exports.CampaignTemplateNatsResponse = exports.ApplyCampaignNatsRequest = exports.ManageCampaignStatusNatsRequest = exports.GetCampaignAnalyticsNatsRequest = exports.CampaignAnalyticsNatsResponse = exports.FindCampaignByIdNatsRequest = exports.GetCampaignDashboardNatsRequest = exports.CampaignDashboardNatsResponse = exports.CampaignPerformanceItem = exports.GetCampaignStatsNatsRequest = exports.CampaignStatsNatsResponse = exports.CampaignTopPerformerItem = exports.FindActiveCampaignsNatsRequest = exports.FindAllCampaignsNatsRequest = exports.LoyaltyCampaignNatsResponse = exports.CampaignTracking = exports.UpdateCampaignNatsRequest = exports.CreateCampaignNatsRequest = exports.CampaignConditionsNatsRequest = exports.CampaignRulesNatsRequest = exports.CampaignStatus = exports.CampaignType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
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
 * Campaign Rules
 */
class CampaignRulesNatsRequest {
    multiplier;
    bonus_points;
    min_spend;
    max_bonus;
    eligible_tiers;
    eligible_services;
    max_uses_per_customer;
    total_budget;
}
exports.CampaignRulesNatsRequest = CampaignRulesNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points multiplier (e.g., 2x, 3x)' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fixed bonus points to award' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "bonus_points", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum spend requirement (VND)' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "min_spend", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum bonus points cap' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "max_bonus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Eligible tier IDs', type: [String] }),
    __metadata("design:type", Array)
], CampaignRulesNatsRequest.prototype, "eligible_tiers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Eligible service types', type: [String] }),
    __metadata("design:type", Array)
], CampaignRulesNatsRequest.prototype, "eligible_services", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum uses per customer' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "max_uses_per_customer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total campaign budget (VND)' }),
    __metadata("design:type", Number)
], CampaignRulesNatsRequest.prototype, "total_budget", void 0);
/**
 * Campaign Conditions
 */
class CampaignConditionsNatsRequest {
    customer_segments;
    booking_types;
    room_categories;
    minimum_nights;
    advance_booking_days;
    exclude_corporate;
}
exports.CampaignConditionsNatsRequest = CampaignConditionsNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target customer segment IDs', type: [String] }),
    __metadata("design:type", Array)
], CampaignConditionsNatsRequest.prototype, "customer_segments", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Qualifying booking types', type: [String] }),
    __metadata("design:type", Array)
], CampaignConditionsNatsRequest.prototype, "booking_types", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Qualifying room categories', type: [String] }),
    __metadata("design:type", Array)
], CampaignConditionsNatsRequest.prototype, "room_categories", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum nights stay requirement' }),
    __metadata("design:type", Number)
], CampaignConditionsNatsRequest.prototype, "minimum_nights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Advance booking days required' }),
    __metadata("design:type", Number)
], CampaignConditionsNatsRequest.prototype, "advance_booking_days", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Exclude corporate bookings' }),
    __metadata("design:type", Boolean)
], CampaignConditionsNatsRequest.prototype, "exclude_corporate", void 0);
/**
 * Create Campaign Request
 * Pattern: crm.loyalty.campaigns.create
 */
class CreateCampaignNatsRequest {
    tenantId;
    userId;
    programId;
    name;
    description;
    campaignType;
    startDate;
    endDate;
    rules;
    conditions;
    isAutoApply;
    promotionCode;
}
exports.CreateCampaignNatsRequest = CreateCampaignNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID creating the campaign' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program ID' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type', enum: CampaignType }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "campaignType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign start date (ISO 8601)' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign end date (ISO 8601)' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign rules', type: () => CampaignRulesNatsRequest }),
    __metadata("design:type", CampaignRulesNatsRequest)
], CreateCampaignNatsRequest.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign conditions - apply to all customers if not specified', type: () => CampaignConditionsNatsRequest }),
    __metadata("design:type", CampaignConditionsNatsRequest)
], CreateCampaignNatsRequest.prototype, "conditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto-apply campaign - manual apply if false/undefined', default: false }),
    __metadata("design:type", Boolean)
], CreateCampaignNatsRequest.prototype, "isAutoApply", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion code for customer use' }),
    __metadata("design:type", String)
], CreateCampaignNatsRequest.prototype, "promotionCode", void 0);
/**
 * Update Campaign Request
 * Pattern: crm.loyalty.campaigns.update
 */
class UpdateCampaignNatsRequest {
    tenantId;
    campaignId;
    userId;
    updateDto;
}
exports.UpdateCampaignNatsRequest = UpdateCampaignNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateCampaignNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID to update' }),
    __metadata("design:type", String)
], UpdateCampaignNatsRequest.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID performing the update' }),
    __metadata("design:type", String)
], UpdateCampaignNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Partial campaign data to update' }),
    __metadata("design:type", Object)
], UpdateCampaignNatsRequest.prototype, "updateDto", void 0);
/**
 * Campaign Tracking Metrics
 */
class CampaignTracking {
    views;
    enrollments;
    redemptions;
    conversionRate;
}
exports.CampaignTracking = CampaignTracking;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of campaign views' }),
    __metadata("design:type", Number)
], CampaignTracking.prototype, "views", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of enrollments' }),
    __metadata("design:type", Number)
], CampaignTracking.prototype, "enrollments", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of redemptions' }),
    __metadata("design:type", Number)
], CampaignTracking.prototype, "redemptions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Conversion rate (%)' }),
    __metadata("design:type", Number)
], CampaignTracking.prototype, "conversionRate", void 0);
/**
 * Loyalty Campaign Response
 */
class LoyaltyCampaignNatsResponse {
    id;
    tenantId;
    programId;
    name;
    description;
    campaignType;
    status;
    startDate;
    endDate;
    rules;
    conditions;
    isAutoApply;
    promotionCode;
    isActive;
    budget;
    participantsCount;
    participationCount;
    pointsAwarded;
    costToDate;
    tracking;
    createdBy;
    createdAt;
    updatedAt;
}
exports.LoyaltyCampaignNatsResponse = LoyaltyCampaignNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program ID' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign description' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "campaignType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign status' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (ISO 8601)' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (ISO 8601)' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign rules configuration', type: CampaignRulesNatsRequest }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CampaignRulesNatsRequest),
    __metadata("design:type", CampaignRulesNatsRequest)
], LoyaltyCampaignNatsResponse.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign conditions', type: CampaignConditionsNatsRequest }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CampaignConditionsNatsRequest),
    __metadata("design:type", CampaignConditionsNatsRequest)
], LoyaltyCampaignNatsResponse.prototype, "conditions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto-apply campaign flag' }),
    __metadata("design:type", Boolean)
], LoyaltyCampaignNatsResponse.prototype, "isAutoApply", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion code for campaign' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "promotionCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active flag' }),
    __metadata("design:type", Boolean)
], LoyaltyCampaignNatsResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign budget (VND)' }),
    __metadata("design:type", Number)
], LoyaltyCampaignNatsResponse.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Participants count' }),
    __metadata("design:type", Number)
], LoyaltyCampaignNatsResponse.prototype, "participantsCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Participation count' }),
    __metadata("design:type", Number)
], LoyaltyCampaignNatsResponse.prototype, "participationCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points awarded through this campaign' }),
    __metadata("design:type", Number)
], LoyaltyCampaignNatsResponse.prototype, "pointsAwarded", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cost to date (VND)' }),
    __metadata("design:type", Number)
], LoyaltyCampaignNatsResponse.prototype, "costToDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign tracking metrics', type: CampaignTracking }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CampaignTracking),
    __metadata("design:type", CampaignTracking)
], LoyaltyCampaignNatsResponse.prototype, "tracking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp (ISO 8601)' }),
    __metadata("design:type", String)
], LoyaltyCampaignNatsResponse.prototype, "updatedAt", void 0);
/**
 * Find All Campaigns Request
 * Pattern: crm.loyalty.campaigns.findAll
 */
class FindAllCampaignsNatsRequest {
    tenantId;
    programId;
    status;
    page;
    limit;
}
exports.FindAllCampaignsNatsRequest = FindAllCampaignsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindAllCampaignsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by loyalty program ID' }),
    __metadata("design:type", String)
], FindAllCampaignsNatsRequest.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by campaign status' }),
    __metadata("design:type", String)
], FindAllCampaignsNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number for pagination', default: 1 }),
    __metadata("design:type", Number)
], FindAllCampaignsNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page', default: 10 }),
    __metadata("design:type", Number)
], FindAllCampaignsNatsRequest.prototype, "limit", void 0);
/**
 * Find Active Campaigns Request
 * Pattern: crm.loyalty.campaigns.findActive
 */
class FindActiveCampaignsNatsRequest {
    tenantId;
    programId;
}
exports.FindActiveCampaignsNatsRequest = FindActiveCampaignsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindActiveCampaignsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by loyalty program ID' }),
    __metadata("design:type", String)
], FindActiveCampaignsNatsRequest.prototype, "programId", void 0);
/**
 * Top Campaign Performer Item (for Stats.topCampaigns array)
 */
class CampaignTopPerformerItem {
    id;
    name;
    membersImpacted;
    pointsAwarded;
}
exports.CampaignTopPerformerItem = CampaignTopPerformerItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], CampaignTopPerformerItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], CampaignTopPerformerItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members impacted' }),
    __metadata("design:type", Number)
], CampaignTopPerformerItem.prototype, "membersImpacted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points awarded' }),
    __metadata("design:type", Number)
], CampaignTopPerformerItem.prototype, "pointsAwarded", void 0);
/**
 * Campaign Stats Response
 */
class CampaignStatsNatsResponse {
    totalCampaigns;
    activeCampaigns;
    totalMembersImpacted;
    totalPointsAwarded;
    averageRedemptionRate;
    topCampaigns;
}
exports.CampaignStatsNatsResponse = CampaignStatsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign statistics overview' }),
    __metadata("design:type", Number)
], CampaignStatsNatsResponse.prototype, "totalCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active campaigns count' }),
    __metadata("design:type", Number)
], CampaignStatsNatsResponse.prototype, "activeCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total members impacted' }),
    __metadata("design:type", Number)
], CampaignStatsNatsResponse.prototype, "totalMembersImpacted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points awarded' }),
    __metadata("design:type", Number)
], CampaignStatsNatsResponse.prototype, "totalPointsAwarded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average redemption rate' }),
    __metadata("design:type", Number)
], CampaignStatsNatsResponse.prototype, "averageRedemptionRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Top campaigns', type: [CampaignTopPerformerItem] }),
    (0, class_transformer_1.Type)(() => CampaignTopPerformerItem),
    __metadata("design:type", Array)
], CampaignStatsNatsResponse.prototype, "topCampaigns", void 0);
/**
 * Stats Request
 * Pattern: crm.loyalty.campaigns.stats
 */
class GetCampaignStatsNatsRequest {
    tenantId;
}
exports.GetCampaignStatsNatsRequest = GetCampaignStatsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetCampaignStatsNatsRequest.prototype, "tenantId", void 0);
/**
 * Campaign Performance Item (for Dashboard.campaignPerformance array)
 */
class CampaignPerformanceItem {
    campaignId;
    name;
    engagement;
    roi;
}
exports.CampaignPerformanceItem = CampaignPerformanceItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID' }),
    __metadata("design:type", String)
], CampaignPerformanceItem.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign name' }),
    __metadata("design:type", String)
], CampaignPerformanceItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Engagement rate (0-100)' }),
    __metadata("design:type", Number)
], CampaignPerformanceItem.prototype, "engagement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Return on investment (ROI) percentage' }),
    __metadata("design:type", Number)
], CampaignPerformanceItem.prototype, "roi", void 0);
/**
 * Campaign Dashboard Response
 */
class CampaignDashboardNatsResponse {
    activeCampaigns;
    upcomingCampaigns;
    totalMembersEnrolled;
    totalPointsDistributed;
    campaignPerformance;
}
exports.CampaignDashboardNatsResponse = CampaignDashboardNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active campaigns' }),
    __metadata("design:type", Number)
], CampaignDashboardNatsResponse.prototype, "activeCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of upcoming campaigns' }),
    __metadata("design:type", Number)
], CampaignDashboardNatsResponse.prototype, "upcomingCampaigns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total members enrolled in campaigns' }),
    __metadata("design:type", Number)
], CampaignDashboardNatsResponse.prototype, "totalMembersEnrolled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points distributed through campaigns' }),
    __metadata("design:type", Number)
], CampaignDashboardNatsResponse.prototype, "totalPointsDistributed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign performance metrics', type: [CampaignPerformanceItem] }),
    (0, class_transformer_1.Type)(() => CampaignPerformanceItem),
    __metadata("design:type", Array)
], CampaignDashboardNatsResponse.prototype, "campaignPerformance", void 0);
/**
 * Dashboard Request
 * Pattern: crm.loyalty.campaigns.dashboard
 */
class GetCampaignDashboardNatsRequest {
    tenantId;
}
exports.GetCampaignDashboardNatsRequest = GetCampaignDashboardNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetCampaignDashboardNatsRequest.prototype, "tenantId", void 0);
/**
 * Find Campaign By Id Request
 * Pattern: crm.loyalty.campaigns.findById
 */
class FindCampaignByIdNatsRequest {
    tenantId;
    campaignId;
}
exports.FindCampaignByIdNatsRequest = FindCampaignByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindCampaignByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID to find' }),
    __metadata("design:type", String)
], FindCampaignByIdNatsRequest.prototype, "campaignId", void 0);
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
/**
 * Analytics Request
 * Pattern: crm.loyalty.campaigns.analytics
 */
class GetCampaignAnalyticsNatsRequest {
    tenantId;
    campaignId;
}
exports.GetCampaignAnalyticsNatsRequest = GetCampaignAnalyticsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetCampaignAnalyticsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID for analytics' }),
    __metadata("design:type", String)
], GetCampaignAnalyticsNatsRequest.prototype, "campaignId", void 0);
/**
 * Manage Campaign Status Request
 * Pattern: crm.loyalty.campaigns.manage_status
 */
class ManageCampaignStatusNatsRequest {
    tenantId;
    campaignId;
    status;
    userId;
}
exports.ManageCampaignStatusNatsRequest = ManageCampaignStatusNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ManageCampaignStatusNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID to manage' }),
    __metadata("design:type", String)
], ManageCampaignStatusNatsRequest.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New campaign status', enum: CampaignStatus }),
    __metadata("design:type", String)
], ManageCampaignStatusNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID performing the action' }),
    __metadata("design:type", String)
], ManageCampaignStatusNatsRequest.prototype, "userId", void 0);
/**
 * Apply Campaign Request
 * Pattern: crm.loyalty.campaigns.apply
 */
class ApplyCampaignNatsRequest {
    tenantId;
    campaignId;
    memberId;
    transactionAmount;
}
exports.ApplyCampaignNatsRequest = ApplyCampaignNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ApplyCampaignNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign ID to apply' }),
    __metadata("design:type", String)
], ApplyCampaignNatsRequest.prototype, "campaignId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member ID receiving the campaign benefits' }),
    __metadata("design:type", String)
], ApplyCampaignNatsRequest.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction amount for calculation' }),
    __metadata("design:type", Number)
], ApplyCampaignNatsRequest.prototype, "transactionAmount", void 0);
/**
 * Campaign Template Response
 */
class CampaignTemplateNatsResponse {
    id;
    name;
    type;
    description;
    rules;
    conditions;
}
exports.CampaignTemplateNatsResponse = CampaignTemplateNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template ID' }),
    __metadata("design:type", String)
], CampaignTemplateNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template name' }),
    __metadata("design:type", String)
], CampaignTemplateNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign type' }),
    __metadata("design:type", String)
], CampaignTemplateNatsResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Template description' }),
    __metadata("design:type", String)
], CampaignTemplateNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campaign rules', type: CampaignRulesNatsRequest }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CampaignRulesNatsRequest),
    __metadata("design:type", CampaignRulesNatsRequest)
], CampaignTemplateNatsResponse.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Campaign conditions', type: CampaignConditionsNatsRequest }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CampaignConditionsNatsRequest),
    __metadata("design:type", CampaignConditionsNatsRequest)
], CampaignTemplateNatsResponse.prototype, "conditions", void 0);
/**
 * Templates Request
 * Pattern: crm.loyalty.campaigns.templates
 */
class GetCampaignTemplatesNatsRequest {
    tenantId;
}
exports.GetCampaignTemplatesNatsRequest = GetCampaignTemplatesNatsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID for filtering templates' }),
    __metadata("design:type", String)
], GetCampaignTemplatesNatsRequest.prototype, "tenantId", void 0);
/**
 * Loyalty Campaigns List Data (wrapper for paginated list)
 */
class LoyaltyCampaignsListData {
    data;
    total;
    page;
    limit;
}
exports.LoyaltyCampaignsListData = LoyaltyCampaignsListData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of loyalty campaigns', type: [LoyaltyCampaignNatsResponse] }),
    __metadata("design:type", Array)
], LoyaltyCampaignsListData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of campaigns' }),
    __metadata("design:type", Number)
], LoyaltyCampaignsListData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], LoyaltyCampaignsListData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], LoyaltyCampaignsListData.prototype, "limit", void 0);
/**
 * Active Campaigns List Data (wrapper for active campaigns)
 */
class ActiveCampaignsListData {
    data;
    total;
}
exports.ActiveCampaignsListData = ActiveCampaignsListData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of active campaigns', type: [LoyaltyCampaignNatsResponse] }),
    __metadata("design:type", Array)
], ActiveCampaignsListData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of active campaigns' }),
    __metadata("design:type", Number)
], ActiveCampaignsListData.prototype, "total", void 0);
//# sourceMappingURL=loyalty-campaigns.nats.js.map