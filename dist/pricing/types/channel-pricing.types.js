"use strict";
/**
 * Channel Pricing Types
 *
 * Shared types for channel pricing synchronization patterns.
 * Handles mapping between internal rates and external channel rates.
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
exports.ChannelRateMapping = exports.ChannelPricingConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Channel pricing configuration (nested in ChannelRateMapping)
 */
class ChannelPricingConfigDto {
    markupType;
    markupValue;
    minRate;
    maxRate;
    commissionIncluded;
}
exports.ChannelPricingConfigDto = ChannelPricingConfigDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup type (percentage or fixed amount)',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    __metadata("design:type", String)
], ChannelPricingConfigDto.prototype, "markupType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup value (percentage or fixed amount)',
        example: 10,
        minimum: -100,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfigDto.prototype, "markupValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum rate threshold',
        example: 100000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfigDto.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum rate threshold',
        example: 5000000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfigDto.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether commission is included in the rate',
        example: false,
    }),
    __metadata("design:type", Boolean)
], ChannelPricingConfigDto.prototype, "commissionIncluded", void 0);
/**
 * Channel rate mapping - mapping between internal rate plan and external channel rate
 * Matches database entity structure with nested pricingConfig
 */
class ChannelRateMapping {
    id;
    tenantId;
    hotelId;
    ratePlanId;
    channelProvider;
    channelName;
    externalRateId;
    isActive;
    pricingConfig;
    createdAt;
    updatedAt;
}
exports.ChannelRateMapping = ChannelRateMapping;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier',
        example: '550e8400-e29b-41d4-a716-446655440096',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate Plan ID',
        example: '550e8400-e29b-41d4-a716-446655440095',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel provider (e.g., STAAH, SITEMINDER, CLOUDBEDS)',
        example: 'STAAH',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "channelProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel name (e.g., Booking.com, Agoda, Expedia)',
        example: 'Booking.com',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'External rate ID in channel manager or OTA system',
        example: '436399',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ChannelRateMapping.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Channel-specific pricing configuration',
        type: () => ChannelPricingConfigDto,
    }),
    __metadata("design:type", ChannelPricingConfigDto)
], ChannelRateMapping.prototype, "pricingConfig", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created at (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated at (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ChannelRateMapping.prototype, "updatedAt", void 0);
//# sourceMappingURL=channel-pricing.types.js.map