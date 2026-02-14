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
exports.IndividualProgramStats = exports.LoyaltyProgramNatsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const loyalty_tiers_nats_1 = require("./loyalty-tiers.nats");
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program start date' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program end date' }),
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
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program tiers', type: [loyalty_tiers_nats_1.LoyaltyTierNatsResponse] }),
    __metadata("design:type", Array)
], LoyaltyProgramNatsResponse.prototype, "tiers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Program statistics' }),
    __metadata("design:type", IndividualProgramStats)
], LoyaltyProgramNatsResponse.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deletion timestamp' }),
    __metadata("design:type", Object)
], LoyaltyProgramNatsResponse.prototype, "deletedAt", void 0);
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
//# sourceMappingURL=loyalty-programs.nats.js.map