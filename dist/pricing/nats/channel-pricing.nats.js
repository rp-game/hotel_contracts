"use strict";
/**
 * Channel Pricing NATS Contracts
 *
 * Handles channel pricing synchronization and configuration patterns.
 * Manages mapping between internal rates and external channel rates.
 * All classes have @ApiProperty decorators for Swagger generation.
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
exports.ClearChannelPricingConfigRequest = exports.UpdateChannelPricingConfigRequest = exports.UpdateChannelPricingConfigDto = exports.GetChannelMappingsByRatePlanRequest = exports.GetChannelRateMappingRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * NATS Pattern: pricing.channel-pricing.getMapping
 *
 * Get channel rate mapping by ID
 */
class GetChannelRateMappingRequest {
    id;
    tenantId;
}
exports.GetChannelRateMappingRequest = GetChannelRateMappingRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel rate mapping ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelRateMappingRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelRateMappingRequest.prototype, "tenantId", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.getByRatePlan
 *
 * Get all channel mappings for a specific rate plan
 */
class GetChannelMappingsByRatePlanRequest {
    ratePlanId;
    tenantId;
}
exports.GetChannelMappingsByRatePlanRequest = GetChannelMappingsByRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID to find mappings for' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelMappingsByRatePlanRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelMappingsByRatePlanRequest.prototype, "tenantId", void 0);
/**
 * Update channel pricing configuration DTO
 */
class UpdateChannelPricingConfigDto {
    markupType;
    markupValue;
    minRate;
    maxRate;
    commissionIncluded;
}
exports.UpdateChannelPricingConfigDto = UpdateChannelPricingConfigDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup type (percentage or fixed amount)',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], UpdateChannelPricingConfigDto.prototype, "markupType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup value (percentage or fixed amount)',
        example: 10,
        minimum: -100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-100),
    __metadata("design:type", Number)
], UpdateChannelPricingConfigDto.prototype, "markupValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum rate threshold',
        example: 100000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateChannelPricingConfigDto.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum rate threshold',
        example: 5000000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateChannelPricingConfigDto.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether commission is included in the rate',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateChannelPricingConfigDto.prototype, "commissionIncluded", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.updateConfig
 *
 * Update pricing configuration for a channel mapping
 */
class UpdateChannelPricingConfigRequest extends UpdateChannelPricingConfigDto {
    id;
    tenantId;
}
exports.UpdateChannelPricingConfigRequest = UpdateChannelPricingConfigRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel rate mapping ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateChannelPricingConfigRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateChannelPricingConfigRequest.prototype, "tenantId", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.clearConfig
 *
 * Clear pricing configuration for a channel mapping (reset to defaults)
 */
class ClearChannelPricingConfigRequest {
    id;
    tenantId;
}
exports.ClearChannelPricingConfigRequest = ClearChannelPricingConfigRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel rate mapping ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ClearChannelPricingConfigRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ClearChannelPricingConfigRequest.prototype, "tenantId", void 0);
//# sourceMappingURL=channel-pricing.nats.js.map