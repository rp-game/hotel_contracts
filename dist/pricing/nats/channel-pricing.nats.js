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
exports.ClearChannelPricingConfigRequest = exports.UpdateChannelPricingConfigRequest = exports.CalculateForOtaRequest = exports.DeleteChannelMarkupRequest = exports.UpsertChannelMarkupRequest = exports.GetChannelMappingsByRatePlanRequest = exports.UpdateChannelPricingConfigDto = exports.GetChannelRateMappingRequest = void 0;
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
 * NATS Pattern: pricing.channel-pricing.getByRatePlan
 *
 * Get channel markup configs for a rate plan (optionally filtered by channel name)
 */
class GetChannelMappingsByRatePlanRequest {
    ratePlanId;
    tenantId;
    channelName;
}
exports.GetChannelMappingsByRatePlanRequest = GetChannelMappingsByRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelMappingsByRatePlanRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelMappingsByRatePlanRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by channel name (e.g. Booking.com)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetChannelMappingsByRatePlanRequest.prototype, "channelName", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.upsertMarkup
 *
 * Create or update markup config for (ratePlanId, channelName)
 */
class UpsertChannelMarkupRequest {
    ratePlanId;
    channelName;
    tenantId;
    hotelId;
    pricingConfig;
}
exports.UpsertChannelMarkupRequest = UpsertChannelMarkupRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpsertChannelMarkupRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name (e.g. Booking.com)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertChannelMarkupRequest.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpsertChannelMarkupRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID (from JWT)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpsertChannelMarkupRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pricing config (markup, min/max rate)' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", UpdateChannelPricingConfigDto)
], UpsertChannelMarkupRequest.prototype, "pricingConfig", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.deleteMarkup
 *
 * Delete markup config by ID
 */
class DeleteChannelMarkupRequest {
    id;
    tenantId;
}
exports.DeleteChannelMarkupRequest = DeleteChannelMarkupRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel rate mapping ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteChannelMarkupRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteChannelMarkupRequest.prototype, "tenantId", void 0);
/**
 * NATS Pattern: pricing.rates.calculateForOTA
 *
 * Calculate final price for a (ratePlan × roomType × channel) combination
 * Returns basePrice + markup = finalPrice
 */
class CalculateForOtaRequest {
    ratePlanId;
    roomTypeId;
    hotelId;
    tenantId;
    channelName;
    checkInDate;
    checkOutDate;
}
exports.CalculateForOtaRequest = CalculateForOtaRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTA channel name (e.g. Booking.com)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateForOtaRequest.prototype, "checkOutDate", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.updateConfig
 *
 * Update pricing configuration for a channel mapping
 */
class UpdateChannelPricingConfigRequest extends UpdateChannelPricingConfigDto {
    id;
    tenantId;
    performedBy;
    performedByName;
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
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateChannelPricingConfigRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateChannelPricingConfigRequest.prototype, "performedByName", void 0);
/**
 * NATS Pattern: pricing.channel-pricing.clearConfig
 *
 * Clear pricing configuration for a channel mapping (reset to defaults)
 */
class ClearChannelPricingConfigRequest {
    id;
    tenantId;
    performedBy;
    performedByName;
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
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID performing the action' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClearChannelPricingConfigRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display name of the user performing the action' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClearChannelPricingConfigRequest.prototype, "performedByName", void 0);
//# sourceMappingURL=channel-pricing.nats.js.map