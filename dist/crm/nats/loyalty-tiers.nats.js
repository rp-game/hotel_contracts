"use strict";
/**
 * Loyalty Tiers NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_tier.findOneById
 *
 * Handler: crm-service (LoyaltyTiersController)
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
exports.FindAllLoyaltyTiersDto = exports.LoyaltyTierNatsResponse = exports.TierBenefitsNatsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Tier Benefits
 */
class TierBenefitsNatsResponse {
    roomUpgrade;
    lateCheckout;
    discountPercentage;
    freeServices;
    prioritySupport;
    welcomeGift;
    airportTransfer;
    maxGuests;
}
exports.TierBenefitsNatsResponse = TierBenefitsNatsResponse;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room upgrade benefit' }),
    __metadata("design:type", Boolean)
], TierBenefitsNatsResponse.prototype, "roomUpgrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Late checkout benefit' }),
    __metadata("design:type", Boolean)
], TierBenefitsNatsResponse.prototype, "lateCheckout", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount percentage' }),
    __metadata("design:type", String)
], TierBenefitsNatsResponse.prototype, "discountPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], description: 'Free services' }),
    __metadata("design:type", Array)
], TierBenefitsNatsResponse.prototype, "freeServices", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Priority support benefit' }),
    __metadata("design:type", Boolean)
], TierBenefitsNatsResponse.prototype, "prioritySupport", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Welcome gift benefit' }),
    __metadata("design:type", Boolean)
], TierBenefitsNatsResponse.prototype, "welcomeGift", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Airport transfer benefit' }),
    __metadata("design:type", Boolean)
], TierBenefitsNatsResponse.prototype, "airportTransfer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum number of guests' }),
    __metadata("design:type", Number)
], TierBenefitsNatsResponse.prototype, "maxGuests", void 0);
/**
 * Loyalty Tier Response
 */
class LoyaltyTierNatsResponse {
    id;
    tenantId;
    programId;
    name;
    minimumPoints;
    pointsMultiplier;
    multiplier;
    benefits;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.LoyaltyTierNatsResponse = LoyaltyTierNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier ID' }),
    __metadata("design:type", String)
], LoyaltyTierNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LoyaltyTierNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program ID' }),
    __metadata("design:type", String)
], LoyaltyTierNatsResponse.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier name' }),
    __metadata("design:type", String)
], LoyaltyTierNatsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum points required for this tier' }),
    __metadata("design:type", Number)
], LoyaltyTierNatsResponse.prototype, "minimumPoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points multiplier for this tier' }),
    __metadata("design:type", Number)
], LoyaltyTierNatsResponse.prototype, "pointsMultiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Legacy multiplier field' }),
    __metadata("design:type", Number)
], LoyaltyTierNatsResponse.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tier benefits' }),
    __metadata("design:type", TierBenefitsNatsResponse)
], LoyaltyTierNatsResponse.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tier display order' }),
    __metadata("design:type", Number)
], LoyaltyTierNatsResponse.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether tier is active' }),
    __metadata("design:type", Boolean)
], LoyaltyTierNatsResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', type: String }),
    __metadata("design:type", Object)
], LoyaltyTierNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', type: String }),
    __metadata("design:type", Object)
], LoyaltyTierNatsResponse.prototype, "updatedAt", void 0);
/**
 * Find All Loyalty Tiers Response DTO
 * Used for both NATS messaging and REST API responses
 */
class FindAllLoyaltyTiersDto {
    tiers;
    total;
}
exports.FindAllLoyaltyTiersDto = FindAllLoyaltyTiersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of loyalty tiers with full details',
        type: [LoyaltyTierNatsResponse],
        isArray: true
    }),
    __metadata("design:type", Array)
], FindAllLoyaltyTiersDto.prototype, "tiers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of tiers',
        type: 'number',
        example: 5
    }),
    __metadata("design:type", Number)
], FindAllLoyaltyTiersDto.prototype, "total", void 0);
//# sourceMappingURL=loyalty-tiers.nats.js.map