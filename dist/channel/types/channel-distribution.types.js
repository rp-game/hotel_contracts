"use strict";
/**
 * Channel Distribution Type Definitions
 *
 * Unified entity replacing the split between cms_rate_mapping (channel-service)
 * and channel_rate_mappings (pricing-service). One row per (ratePlanId, channelName)
 * holds both the external ID translation and pricing config for an OTA channel.
 *
 * Owned by channel-service. Pricing-service queries via NATS to apply markup.
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
exports.ChannelDistributionUpdatedEvent = exports.ListChannelDistributionQuery = exports.UpdateChannelDistributionRequest = exports.UpsertChannelDistributionRequest = exports.ChannelDistribution = exports.ChannelPricingConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const mapping_types_1 = require("./mapping.types");
/**
 * Channel pricing configuration (nested in ChannelDistribution)
 */
class ChannelPricingConfig {
    markupType;
    markupValue;
    minRate;
    maxRate;
    commissionIncluded;
}
exports.ChannelPricingConfig = ChannelPricingConfig;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup type (percentage or fixed amount)',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    __metadata("design:type", String)
], ChannelPricingConfig.prototype, "markupType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Markup value (percentage 0-100 or fixed amount in VND)',
        example: 10,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfig.prototype, "markupValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum gross rate threshold (VND)',
        example: 800000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfig.prototype, "minRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum gross rate threshold (VND)',
        example: 5000000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ChannelPricingConfig.prototype, "maxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether commission is already included in the rate',
        example: false,
    }),
    __metadata("design:type", Boolean)
], ChannelPricingConfig.prototype, "commissionIncluded", void 0);
/**
 * Channel distribution row — 1 per (ratePlanId, channelName).
 * Holds both ID translation and pricing for one OTA channel of one rate plan.
 */
class ChannelDistribution {
    id;
    tenantId;
    hotelId;
    ratePlanId;
    channelName;
    providerId;
    externalRateId;
    externalRateName;
    isActive;
    lastSyncedAt;
    pricingConfig;
    mappingConfiguration;
    createdAt;
    updatedAt;
}
exports.ChannelDistribution = ChannelDistribution;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distribution ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID (cross-service ref)', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name', example: 'Booking.com' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID (CMS aggregator)', format: 'uuid' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate code in provider system', example: 'GRANDHNBAR' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate display name', example: 'BAR Standard' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active status', example: true }),
    __metadata("design:type", Boolean)
], ChannelDistribution.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Last sync timestamp (ISO 8601)',
        example: '2026-05-09T10:30:00.000Z',
    }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "lastSyncedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Channel-specific pricing config (markup, min/max)',
        type: () => ChannelPricingConfig,
    }),
    __metadata("design:type", ChannelPricingConfig)
], ChannelDistribution.prototype, "pricingConfig", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Channel-specific rate mapping config (rate basis, meal plan, restrictions)',
        type: () => mapping_types_1.RateMappingConfiguration,
    }),
    __metadata("design:type", mapping_types_1.RateMappingConfiguration)
], ChannelDistribution.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at (ISO 8601)' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at (ISO 8601)' }),
    __metadata("design:type", String)
], ChannelDistribution.prototype, "updatedAt", void 0);
/**
 * Upsert request — used for create or update by (ratePlanId, channelName).
 */
class UpsertChannelDistributionRequest {
    tenantId;
    hotelId;
    ratePlanId;
    channelName;
    providerId;
    externalRateId;
    externalRateName;
    isActive;
    pricingConfig;
    mappingConfiguration;
    performedBy;
    performedByName;
}
exports.UpsertChannelDistributionRequest = UpsertChannelDistributionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name', example: 'Booking.com' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate code', example: 'GRANDHNBAR' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'External rate name', example: 'BAR Standard' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active status', default: true }),
    __metadata("design:type", Boolean)
], UpsertChannelDistributionRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pricing config (markup, min/max)',
        type: () => ChannelPricingConfig,
    }),
    __metadata("design:type", ChannelPricingConfig)
], UpsertChannelDistributionRequest.prototype, "pricingConfig", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Mapping config (rate basis, meal plan, restrictions)',
        type: () => mapping_types_1.RateMappingConfiguration,
    }),
    __metadata("design:type", mapping_types_1.RateMappingConfiguration)
], UpsertChannelDistributionRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user ID' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user display name' }),
    __metadata("design:type", String)
], UpsertChannelDistributionRequest.prototype, "performedByName", void 0);
/**
 * Update request — partial update by ID.
 */
class UpdateChannelDistributionRequest {
    providerId;
    externalRateId;
    externalRateName;
    isActive;
    pricingConfig;
    mappingConfiguration;
    performedBy;
    performedByName;
}
exports.UpdateChannelDistributionRequest = UpdateChannelDistributionRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider ID', format: 'uuid' }),
    __metadata("design:type", String)
], UpdateChannelDistributionRequest.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate code' }),
    __metadata("design:type", String)
], UpdateChannelDistributionRequest.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate name' }),
    __metadata("design:type", String)
], UpdateChannelDistributionRequest.prototype, "externalRateName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active status' }),
    __metadata("design:type", Boolean)
], UpdateChannelDistributionRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pricing config',
        type: () => ChannelPricingConfig,
    }),
    __metadata("design:type", ChannelPricingConfig)
], UpdateChannelDistributionRequest.prototype, "pricingConfig", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Mapping config',
        type: () => mapping_types_1.RateMappingConfiguration,
    }),
    __metadata("design:type", mapping_types_1.RateMappingConfiguration)
], UpdateChannelDistributionRequest.prototype, "mappingConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user ID' }),
    __metadata("design:type", String)
], UpdateChannelDistributionRequest.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user display name' }),
    __metadata("design:type", String)
], UpdateChannelDistributionRequest.prototype, "performedByName", void 0);
/**
 * List filter query.
 */
class ListChannelDistributionQuery {
    tenantId;
    hotelId;
    ratePlanId;
    channelName;
    providerId;
    isActive;
}
exports.ListChannelDistributionQuery = ListChannelDistributionQuery;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ListChannelDistributionQuery.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ListChannelDistributionQuery.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], ListChannelDistributionQuery.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Channel name' }),
    __metadata("design:type", String)
], ListChannelDistributionQuery.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider ID' }),
    __metadata("design:type", String)
], ListChannelDistributionQuery.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active filter' }),
    __metadata("design:type", Boolean)
], ListChannelDistributionQuery.prototype, "isActive", void 0);
/**
 * Event payload — published when distribution changes (create/update/delete).
 * Pricing-service subscribes to invalidate its in-memory markup cache.
 */
class ChannelDistributionUpdatedEvent {
    action;
    tenantId;
    hotelId;
    ratePlanId;
    channelName;
    distributionId;
}
exports.ChannelDistributionUpdatedEvent = ChannelDistributionUpdatedEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action', enum: ['CREATED', 'UPDATED', 'DELETED'] }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name' }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distribution ID' }),
    __metadata("design:type", String)
], ChannelDistributionUpdatedEvent.prototype, "distributionId", void 0);
//# sourceMappingURL=channel-distribution.types.js.map