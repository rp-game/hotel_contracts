"use strict";
/**
 * Rate Plans NATS Contracts
 *
 * Handles rate plan management including creation, updates, channel mappings,
 * and price calculations.
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
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
exports.GetRatePlanHistoryResponseDto = exports.RatePlanHistoryItemDto = exports.GetRatePlanHistoryRequest = exports.DeleteRatePlanResponse = exports.DeleteRatePlanRequest = exports.FindRatePlansByChannelResponse = exports.FindRatePlansByChannelRequest = exports.RemoveChannelMappingResponse = exports.RemoveChannelMappingRequest = exports.AddChannelMappingResponse = exports.AddChannelMappingRequest = exports.CreateChannelMappingDto = exports.GetChannelMappingsResponse = exports.ChannelRateMappingResponse = exports.GetChannelMappingsRequest = exports.CalculateRatePlanPriceResponse = exports.CalculateRatePlanPriceRequest = exports.ListRatePlansResponse = exports.ListRatePlansRequest = exports.GetRatePlanResponse = exports.GetRatePlanRequest = exports.UpdateRatePlanResponse = exports.UpdateRatePlanRequest = exports.UpdateRatePlanDto = exports.DerivationTypeEnum = exports.RatePlanTypeEnum = exports.CreateRatePlanResponse = exports.CreateRatePlanRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_rate_plan_nats_1 = require("./create-rate-plan.nats");
const blackout_period_type_1 = require("../types/blackout-period.type");
const create_rate_plan_nats_2 = require("./create-rate-plan.nats");
Object.defineProperty(exports, "CreateRatePlanRequest", { enumerable: true, get: function () { return create_rate_plan_nats_2.CreateRatePlanRequest; } });
Object.defineProperty(exports, "CreateRatePlanResponse", { enumerable: true, get: function () { return create_rate_plan_nats_2.CreateRatePlanResponse; } });
Object.defineProperty(exports, "RatePlanTypeEnum", { enumerable: true, get: function () { return create_rate_plan_nats_2.RatePlanTypeEnum; } });
Object.defineProperty(exports, "DerivationTypeEnum", { enumerable: true, get: function () { return create_rate_plan_nats_2.DerivationTypeEnum; } });
/**
 * NATS Pattern: pricing.rate-plan.update
 */
class UpdateRatePlanDto {
    name;
    description;
    isActive;
    derivationType;
    derivationValue;
    cancellationPolicy;
    mealPlan;
    paymentType;
    depositPercent;
    validFrom;
    validTo;
    blackoutPeriods;
    isAllotmentRate;
}
exports.UpdateRatePlanDto = UpdateRatePlanDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan name',
        example: 'Updated Best Available Rate',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRatePlanDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional description of the rate plan',
        example: 'Updated description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRatePlanDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether the rate plan is active',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRatePlanDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation type for DERIVED rate plans (PERCENTAGE or AMOUNT)',
        enum: create_rate_plan_nats_2.DerivationTypeEnum,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(create_rate_plan_nats_2.DerivationTypeEnum),
    __metadata("design:type", String)
], UpdateRatePlanDto.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation value for DERIVED rate plans',
        example: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRatePlanDto.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cancellation policy details',
        type: () => create_rate_plan_nats_1.CancellationPolicyDto,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Meal plan included',
        enum: ['ROOM_ONLY', 'BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment type requirement',
        enum: ['PAY_NOW', 'PAY_AT_HOTEL', 'DEPOSIT_REQUIRED'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Deposit percentage required (when paymentType = DEPOSIT_REQUIRED)',
        example: 50,
    }),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "depositPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid from date (YYYY-MM-DD). Set null to remove.',
        example: '2026-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid to date (YYYY-MM-DD). Set null to remove.',
        example: '2026-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Blackout periods. Set null to remove all.',
        type: [blackout_period_type_1.BlackoutPeriodDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => blackout_period_type_1.BlackoutPeriodDto),
    __metadata("design:type", Object)
], UpdateRatePlanDto.prototype, "blackoutPeriods", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Mark as contract/allotment rate (only visible when partner has active allotment)',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRatePlanDto.prototype, "isAllotmentRate", void 0);
class UpdateRatePlanRequest {
    id;
    dto;
}
exports.UpdateRatePlanRequest = UpdateRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateRatePlanRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Update data',
        type: () => UpdateRatePlanDto,
    }),
    __metadata("design:type", UpdateRatePlanDto)
], UpdateRatePlanRequest.prototype, "dto", void 0);
class UpdateRatePlanResponse {
    data;
}
exports.UpdateRatePlanResponse = UpdateRatePlanResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated rate plan data',
        type: create_rate_plan_nats_2.CreateRatePlanResponse,
    }),
    __metadata("design:type", create_rate_plan_nats_2.CreateRatePlanResponse)
], UpdateRatePlanResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.get
 */
class GetRatePlanRequest {
    id;
}
exports.GetRatePlanRequest = GetRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetRatePlanRequest.prototype, "id", void 0);
class GetRatePlanResponse {
    data;
}
exports.GetRatePlanResponse = GetRatePlanResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan data with parent details',
        type: create_rate_plan_nats_2.CreateRatePlanResponse,
    }),
    __metadata("design:type", create_rate_plan_nats_2.CreateRatePlanResponse)
], GetRatePlanResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.list
 */
class ListRatePlansRequest {
    tenantId;
    hotelId;
    corporateAccountId;
    includeAllCorporate;
    checkInDate;
    checkOutDate;
    accountId;
    accountType;
    allotmentRatePlanIds;
}
exports.ListRatePlansRequest = ListRatePlansRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter: include corporate plans for this account (plus public plans). If omitted, only public plans returned.',
        example: '123e4567-e89b-12d3-a456-426614174099',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'If true, include ALL plans (corporate + public). For admin/management views only.',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ListRatePlansRequest.prototype, "includeAllCorporate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Check-in date (YYYY-MM-DD) — filters out expired and blacked-out rate plans',
        example: '2026-03-20',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Check-out date (YYYY-MM-DD) — used with checkInDate for blackout overlap check',
        example: '2026-03-22',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by account ID (corporate, travel agent, or government account). Returns public plans + plans for this account.',
        example: '123e4567-e89b-12d3-a456-426614174099',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by account type (CORPORATE, TRAVEL_AGENT, GOVERNMENT)',
        enum: ['CORPORATE', 'TRAVEL_AGENT', 'GOVERNMENT'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListRatePlansRequest.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Active allotment rate plan IDs for the partner context — allotment rates are only included if their ID is in this list',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], ListRatePlansRequest.prototype, "allotmentRatePlanIds", void 0);
class ListRatePlansResponse {
    data;
}
exports.ListRatePlansResponse = ListRatePlansResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of rate plans',
        type: [create_rate_plan_nats_2.CreateRatePlanResponse],
    }),
    __metadata("design:type", Array)
], ListRatePlansResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.calculate-price
 */
class CalculateRatePlanPriceRequest {
    ratePlanId;
    basePrice;
}
exports.CalculateRatePlanPriceRequest = CalculateRatePlanPriceRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174011',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateRatePlanPriceRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base price to calculate from',
        example: 100,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalculateRatePlanPriceRequest.prototype, "basePrice", void 0);
class CalculateRatePlanPriceResponse {
    ratePlanId;
    basePrice;
    calculatedPrice;
    derivationType;
    derivationValue;
    currency;
}
exports.CalculateRatePlanPriceResponse = CalculateRatePlanPriceResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174011',
    }),
    __metadata("design:type", String)
], CalculateRatePlanPriceResponse.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base price',
        example: 100,
    }),
    __metadata("design:type", Number)
], CalculateRatePlanPriceResponse.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Calculated final price',
        example: 104,
    }),
    __metadata("design:type", Number)
], CalculateRatePlanPriceResponse.prototype, "calculatedPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation type',
        enum: create_rate_plan_nats_2.DerivationTypeEnum,
    }),
    __metadata("design:type", String)
], CalculateRatePlanPriceResponse.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation value',
        example: 4,
    }),
    __metadata("design:type", Number)
], CalculateRatePlanPriceResponse.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'USD',
    }),
    __metadata("design:type", String)
], CalculateRatePlanPriceResponse.prototype, "currency", void 0);
/**
 * NATS Pattern: pricing.rate-plan.get-channel-mappings
 */
class GetChannelMappingsRequest {
    ratePlanId;
}
exports.GetChannelMappingsRequest = GetChannelMappingsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetChannelMappingsRequest.prototype, "ratePlanId", void 0);
class ChannelRateMappingResponse {
    id;
    ratePlanId;
    channelId;
    externalRatePlanId;
    externalRatePlanName;
    isActive;
    createdAt;
    updatedAt;
}
exports.ChannelRateMappingResponse = ChannelRateMappingResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mapping ID',
        example: '123e4567-e29b-41d4-a716-446655440020',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel ID',
        example: 'booking-com',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "channelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'External rate plan ID',
        example: 'BAR-12345',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "externalRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'External rate plan name',
        example: 'Best Available Rate',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "externalRatePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the mapping is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ChannelRateMappingResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ChannelRateMappingResponse.prototype, "updatedAt", void 0);
class GetChannelMappingsResponse {
    data;
}
exports.GetChannelMappingsResponse = GetChannelMappingsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of channel mappings',
        type: [ChannelRateMappingResponse],
    }),
    __metadata("design:type", Array)
], GetChannelMappingsResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.add-channel-mapping
 */
class CreateChannelMappingDto {
    channelProvider;
    channelName;
    externalRateId;
}
exports.CreateChannelMappingDto = CreateChannelMappingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel provider type',
        example: 'STAAH',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "channelProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel name (OTA)',
        example: 'Booking.com',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'External rate plan ID in the channel manager or OTA system',
        example: 'STAAH194181',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "externalRateId", void 0);
class AddChannelMappingRequest {
    ratePlanId;
    dto;
}
exports.AddChannelMappingRequest = AddChannelMappingRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AddChannelMappingRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel mapping data',
        type: () => CreateChannelMappingDto,
    }),
    __metadata("design:type", CreateChannelMappingDto)
], AddChannelMappingRequest.prototype, "dto", void 0);
class AddChannelMappingResponse {
    data;
}
exports.AddChannelMappingResponse = AddChannelMappingResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created channel mapping',
        type: ChannelRateMappingResponse,
    }),
    __metadata("design:type", ChannelRateMappingResponse)
], AddChannelMappingResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.remove-channel-mapping
 */
class RemoveChannelMappingRequest {
    mappingId;
}
exports.RemoveChannelMappingRequest = RemoveChannelMappingRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel mapping ID',
        example: '123e4567-e29b-41d4-a716-446655440020',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RemoveChannelMappingRequest.prototype, "mappingId", void 0);
class RemoveChannelMappingResponse {
    message;
}
exports.RemoveChannelMappingResponse = RemoveChannelMappingResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Channel mapping removed successfully',
    }),
    __metadata("design:type", String)
], RemoveChannelMappingResponse.prototype, "message", void 0);
/**
 * NATS Pattern: pricing.rate-plan.find-by-channel
 */
class FindRatePlansByChannelRequest {
    tenantId;
    hotelId;
    channelProvider;
    channelName;
}
exports.FindRatePlansByChannelRequest = FindRatePlansByChannelRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindRatePlansByChannelRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindRatePlansByChannelRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel provider',
        example: 'STAAH',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindRatePlansByChannelRequest.prototype, "channelProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Channel name',
        example: 'Booking.com',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindRatePlansByChannelRequest.prototype, "channelName", void 0);
class FindRatePlansByChannelResponse {
    data;
}
exports.FindRatePlansByChannelResponse = FindRatePlansByChannelResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of rate plans',
        type: [create_rate_plan_nats_2.CreateRatePlanResponse],
    }),
    __metadata("design:type", Array)
], FindRatePlansByChannelResponse.prototype, "data", void 0);
/**
 * NATS Pattern: pricing.rate-plan.delete
 */
class DeleteRatePlanRequest {
    id;
}
exports.DeleteRatePlanRequest = DeleteRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteRatePlanRequest.prototype, "id", void 0);
class DeleteRatePlanResponse {
    message;
}
exports.DeleteRatePlanResponse = DeleteRatePlanResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Rate plan deleted successfully',
    }),
    __metadata("design:type", String)
], DeleteRatePlanResponse.prototype, "message", void 0);
// ─── Rate Plan History ────────────────────────────────────────────────────────
class GetRatePlanHistoryRequest {
    tenantId;
    hotelId;
    ratePlanId;
    action;
    startDate;
    endDate;
    page;
    limit;
}
exports.GetRatePlanHistoryRequest = GetRatePlanHistoryRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by specific rate plan ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by action (CREATE/UPDATE/DELETE)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date YYYY-MM-DD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date YYYY-MM-DD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetRatePlanHistoryRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetRatePlanHistoryRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 50 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetRatePlanHistoryRequest.prototype, "limit", void 0);
class RatePlanHistoryItemDto {
    id;
    ratePlanId;
    ratePlanName;
    action;
    previousData;
    newData;
    performedBy;
    performedByName;
    createdAt;
}
exports.RatePlanHistoryItemDto = RatePlanHistoryItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], RatePlanHistoryItemDto.prototype, "previousData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], RatePlanHistoryItemDto.prototype, "newData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatePlanHistoryItemDto.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], RatePlanHistoryItemDto.prototype, "createdAt", void 0);
class GetRatePlanHistoryResponseDto {
    items;
    total;
    page;
    limit;
}
exports.GetRatePlanHistoryResponseDto = GetRatePlanHistoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [RatePlanHistoryItemDto] }),
    __metadata("design:type", Array)
], GetRatePlanHistoryResponseDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetRatePlanHistoryResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetRatePlanHistoryResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetRatePlanHistoryResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=rate-plans.nats.js.map