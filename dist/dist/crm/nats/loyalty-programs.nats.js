"use strict";
/**
 * Loyalty Programs NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_program.create
 * - crm.loyalty_program.findAll
 * - crm.loyalty_program.findOne
 * - crm.loyalty_program.update
 * - crm.loyalty_program.remove
 * - crm.loyalty_program.tier.add
 * - crm.loyalty_program.tier.update
 * - crm.loyalty_program.tier.remove
 * - crm.loyalty_tier.findAll
 * - crm.loyalty_program.stats
 * - loyalty.programs.sync
 *
 * Handler: crm-service (LoyaltyProgramsController)
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
exports.SyncProgramsNatsRequest = exports.LoyaltyProgramsSyncData = exports.LoyaltyProgramSyncSummary = exports.LoyaltyProgramNatsResponse = exports.IndividualProgramStats = exports.CreateLoyaltyTierNatsRequest = exports.TierBenefitsRequest = exports.CreateLoyaltyProgramNatsRequest = exports.RedemptionRulesRequest = exports.EarningRulesRequest = exports.TierBasis = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const loyalty_tiers_nats_1 = require("./loyalty-tiers.nats");
/**
 * Tier Basis — determines which points metric is used for tier qualification
 */
var TierBasis;
(function (TierBasis) {
    TierBasis["LIFETIME_POINTS"] = "LIFETIME_POINTS";
    TierBasis["POINTS_BALANCE"] = "POINTS_BALANCE";
})(TierBasis || (exports.TierBasis = TierBasis = {}));
/**
 * Earning Rules
 */
class EarningRulesRequest {
    pointsPerDollar;
    pointsPerVisit;
    minimumSpendForPoints;
    referralBonus;
    bonusMultiplier;
}
exports.EarningRulesRequest = EarningRulesRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points earned per dollar spent (decimal string)', example: '2.50' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EarningRulesRequest.prototype, "pointsPerDollar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points earned per visit/stay', example: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], EarningRulesRequest.prototype, "pointsPerVisit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum spend to earn points (decimal string)', example: '10.00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EarningRulesRequest.prototype, "minimumSpendForPoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bonus points for referrals', example: 1000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], EarningRulesRequest.prototype, "referralBonus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bonus point multiplier (decimal string)', example: '1.25' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EarningRulesRequest.prototype, "bonusMultiplier", void 0);
/**
 * Redemption Rules
 */
class RedemptionRulesRequest {
    minimumPointsForRedemption;
    pointValue;
    maxRedemptionPercentage;
    redemptionCategories;
}
exports.RedemptionRulesRequest = RedemptionRulesRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum points required for redemption', example: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RedemptionRulesRequest.prototype, "minimumPointsForRedemption", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cash value per point (decimal string)', example: '0.0100' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RedemptionRulesRequest.prototype, "pointValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Max bill percentage payable with points (decimal string)', example: '50.00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RedemptionRulesRequest.prototype, "maxRedemptionPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Categories where points can be redeemed' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], RedemptionRulesRequest.prototype, "redemptionCategories", void 0);
/**
 * Create Loyalty Program Request
 * Pattern: crm.loyalty_program.create
 */
class CreateLoyaltyProgramNatsRequest {
    tenantId;
    hotelId;
    name;
    description;
    startDate;
    endDate;
    isActive;
    earningRules;
    redemptionRules;
    pointsValidityPeriod;
    tierBasis;
}
exports.CreateLoyaltyProgramNatsRequest = CreateLoyaltyProgramNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 255 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLoyaltyProgramNatsRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => EarningRulesRequest }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EarningRulesRequest),
    __metadata("design:type", EarningRulesRequest)
], CreateLoyaltyProgramNatsRequest.prototype, "earningRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => RedemptionRulesRequest }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RedemptionRulesRequest),
    __metadata("design:type", RedemptionRulesRequest)
], CreateLoyaltyProgramNatsRequest.prototype, "redemptionRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points validity period in months', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateLoyaltyProgramNatsRequest.prototype, "pointsValidityPeriod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: TierBasis, default: TierBasis.LIFETIME_POINTS }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(TierBasis),
    __metadata("design:type", String)
], CreateLoyaltyProgramNatsRequest.prototype, "tierBasis", void 0);
/**
 * Tier Benefits
 */
class TierBenefitsRequest {
    roomUpgrade;
    lateCheckout;
    discountPercentage;
    freeServices;
    prioritySupport;
    welcomeGift;
    airportTransfer;
    maxGuests;
}
exports.TierBenefitsRequest = TierBenefitsRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TierBenefitsRequest.prototype, "roomUpgrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TierBenefitsRequest.prototype, "lateCheckout", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TierBenefitsRequest.prototype, "discountPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], TierBenefitsRequest.prototype, "freeServices", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TierBenefitsRequest.prototype, "prioritySupport", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TierBenefitsRequest.prototype, "welcomeGift", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TierBenefitsRequest.prototype, "airportTransfer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TierBenefitsRequest.prototype, "maxGuests", void 0);
/**
 * Create Loyalty Tier Request
 */
class CreateLoyaltyTierNatsRequest {
    tenantId;
    programId;
    name;
    minimumPoints;
    pointsMultiplier;
    benefits;
    order;
    isActive;
}
exports.CreateLoyaltyTierNatsRequest = CreateLoyaltyTierNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLoyaltyTierNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLoyaltyTierNatsRequest.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateLoyaltyTierNatsRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum points required for this tier', minimum: 0 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateLoyaltyTierNatsRequest.prototype, "minimumPoints", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points multiplier for this tier' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreateLoyaltyTierNatsRequest.prototype, "pointsMultiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => TierBenefitsRequest }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TierBenefitsRequest),
    __metadata("design:type", TierBenefitsRequest)
], CreateLoyaltyTierNatsRequest.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display order', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateLoyaltyTierNatsRequest.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLoyaltyTierNatsRequest.prototype, "isActive", void 0);
/**
 * Individual Loyalty Program Stats
 * Statistics for a single loyalty program - can be used in both NATS responses and REST API
 * Calculated from loyalty_members and loyalty_transactions tables
 */
class IndividualProgramStats {
    totalMembers;
    activeMembers;
    totalPointsIssued;
    totalPointsRedeemed;
    averagePointsPerMember;
}
exports.IndividualProgramStats = IndividualProgramStats;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Total members enrolled in this program',
        example: 1250,
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IndividualProgramStats.prototype, "totalMembers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Active members (with activity in last 90 days)',
        example: 980,
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IndividualProgramStats.prototype, "activeMembers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Total points issued to date (sum of all positive transactions)',
        example: 2500000,
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IndividualProgramStats.prototype, "totalPointsIssued", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Total points redeemed to date (sum of all negative transactions)',
        example: 750000,
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IndividualProgramStats.prototype, "totalPointsRedeemed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Average points per member (totalPointsIssued / totalMembers)',
        example: 2040.8,
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IndividualProgramStats.prototype, "averagePointsPerMember", void 0);
/**
 * Loyalty Program Response
 */
class LoyaltyProgramNatsResponse {
    id;
    tenantId;
    hotelId;
    name;
    description;
    startDate;
    endDate;
    isActive;
    earningRules;
    redemptionRules;
    tierBasis;
    tiers;
    stats;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.LoyaltyProgramNatsResponse = LoyaltyProgramNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program ID' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program name' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program description' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program start date', type: String }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program end date', type: String }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether program is active' }),
    __metadata("design:type", Boolean)
], LoyaltyProgramNatsResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Earning rules configuration' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "earningRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Redemption rules configuration' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "redemptionRules", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: TierBasis, default: TierBasis.LIFETIME_POINTS, description: 'Which points metric is used for tier qualification' }),
    __metadata("design:type", String)
], LoyaltyProgramNatsResponse.prototype, "tierBasis", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program tiers', type: [loyalty_tiers_nats_1.LoyaltyTierNatsResponse] }),
    __metadata("design:type", Array)
], LoyaltyProgramNatsResponse.prototype, "tiers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program statistics', type: () => IndividualProgramStats }),
    __metadata("design:type", IndividualProgramStats)
], LoyaltyProgramNatsResponse.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deletion timestamp', type: String }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "deletedAt", void 0);
/**
 * Program Sync — inline program summary
 */
class LoyaltyProgramSyncSummary {
    id;
    name;
    type;
    isActive;
    pointsPerDollar;
    tierCount;
    memberCount;
}
exports.LoyaltyProgramSyncSummary = LoyaltyProgramSyncSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program ID' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program name' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncSummary.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Program type', example: 'points' }),
    __metadata("design:type", String)
], LoyaltyProgramSyncSummary.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the program is active' }),
    __metadata("design:type", Boolean)
], LoyaltyProgramSyncSummary.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points earned per dollar spent' }),
    __metadata("design:type", Number)
], LoyaltyProgramSyncSummary.prototype, "pointsPerDollar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of tiers' }),
    __metadata("design:type", Number)
], LoyaltyProgramSyncSummary.prototype, "tierCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of enrolled members' }),
    __metadata("design:type", Number)
], LoyaltyProgramSyncSummary.prototype, "memberCount", void 0);
/**
 * Program Sync Response data
 * Pattern: loyalty.programs.sync
 */
class LoyaltyProgramsSyncData {
    totalPrograms;
    activePrograms;
    programs;
    totalMembers;
    totalPointsIssued;
    totalPointsRedeemed;
    period;
}
exports.LoyaltyProgramsSyncData = LoyaltyProgramsSyncData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of loyalty programs' }),
    __metadata("design:type", Number)
], LoyaltyProgramsSyncData.prototype, "totalPrograms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of active programs' }),
    __metadata("design:type", Number)
], LoyaltyProgramsSyncData.prototype, "activePrograms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [LoyaltyProgramSyncSummary] }),
    __metadata("design:type", Array)
], LoyaltyProgramsSyncData.prototype, "programs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total enrolled members' }),
    __metadata("design:type", Number)
], LoyaltyProgramsSyncData.prototype, "totalMembers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points issued across all programs' }),
    __metadata("design:type", Number)
], LoyaltyProgramsSyncData.prototype, "totalPointsIssued", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total points redeemed across all programs' }),
    __metadata("design:type", Number)
], LoyaltyProgramsSyncData.prototype, "totalPointsRedeemed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reporting period' }),
    __metadata("design:type", String)
], LoyaltyProgramsSyncData.prototype, "period", void 0);
/**
 * Sync Programs Request
 * Pattern: loyalty.programs.sync
 */
class SyncProgramsNatsRequest {
    tenantId;
    period;
}
exports.SyncProgramsNatsRequest = SyncProgramsNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SyncProgramsNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reporting period (e.g. monthly, yearly)' }),
    __metadata("design:type", String)
], SyncProgramsNatsRequest.prototype, "period", void 0);
//# sourceMappingURL=loyalty-programs.nats.js.map