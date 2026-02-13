"use strict";
/**
 * Pricing Domain Types
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
exports.GetRatePlansResponseDto = exports.CalculatePriceResponseDto = exports.ChannelRateMappingResponseDto = exports.RatePlanResponseDto = exports.CreateChannelMappingDto = exports.UpdateRatePlanDto = exports.CreateRatePlanDto = void 0;
// ============================================================================
// Request DTOs
// ============================================================================
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Create rate plan request
 */
class CreateRatePlanDto {
    tenantId;
    hotelId;
    name;
    type;
    parentRatePlanId;
    derivationType;
    derivationValue;
    description;
}
exports.CreateRatePlanDto = CreateRatePlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name', example: 'Best Available Rate' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'BASE' }),
    (0, class_validator_1.IsEnum)(['BASE', 'DERIVED']),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Parent rate plan ID (required for DERIVED types)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "parentRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'How to calculate derived price from parent', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'AMOUNT']),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10', example: 4 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRatePlanDto.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional description of the rate plan', example: 'Standard rate plan for all channels' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanDto.prototype, "description", void 0);
/**
 * Update rate plan request
 */
class UpdateRatePlanDto {
    name;
    description;
    isActive;
}
exports.UpdateRatePlanDto = UpdateRatePlanDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan name', example: 'Updated Best Available Rate' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRatePlanDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional description of the rate plan', example: 'Updated description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRatePlanDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the rate plan is active', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRatePlanDto.prototype, "isActive", void 0);
/**
 * Create channel rate mapping request
 */
class CreateChannelMappingDto {
    channelProvider;
    channelName;
    externalRateId;
}
exports.CreateChannelMappingDto = CreateChannelMappingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel provider type', example: 'STAAH' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "channelProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name (OTA)', example: 'Booking.com' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate plan ID in the channel manager or OTA system', example: 'STAAH194181' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChannelMappingDto.prototype, "externalRateId", void 0);
// ============================================================================
// Response DTOs
// ============================================================================
/**
 * Rate plan response
 */
class RatePlanResponseDto {
    id;
    tenantId;
    hotelId;
    name;
    type;
    parentRatePlanId;
    derivationType;
    derivationValue;
    description;
    isActive;
    createdAt;
    updatedAt;
    parentRatePlan;
    channelMappings;
}
exports.RatePlanResponseDto = RatePlanResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name', example: 'Best Available Rate' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'BASE' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Parent rate plan ID (for DERIVED types)' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "parentRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'How to calculate derived price from parent', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10', example: 4 }),
    __metadata("design:type", Number)
], RatePlanResponseDto.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional description of the rate plan', example: 'Standard rate plan for all channels' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the rate plan is active', example: true }),
    __metadata("design:type", Boolean)
], RatePlanResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], RatePlanResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Parent rate plan details (when included)', type: () => RatePlanResponseDto }),
    __metadata("design:type", RatePlanResponseDto)
], RatePlanResponseDto.prototype, "parentRatePlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Channel mappings (when included)', type: () => [ChannelRateMappingResponseDto] }),
    __metadata("design:type", Array)
], RatePlanResponseDto.prototype, "channelMappings", void 0);
/**
 * Channel rate mapping response
 */
class ChannelRateMappingResponseDto {
    id;
    ratePlanId;
    channelProvider;
    channelName;
    externalRateId;
    isActive;
    createdAt;
    updatedAt;
}
exports.ChannelRateMappingResponseDto = ChannelRateMappingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mapping ID' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel provider type', example: 'STAAH' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "channelProvider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name (OTA)', example: 'Booking.com' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "channelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'External rate plan ID in the channel manager or OTA system', example: 'STAAH194181' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "externalRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the mapping is active', example: true }),
    __metadata("design:type", Boolean)
], ChannelRateMappingResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], ChannelRateMappingResponseDto.prototype, "updatedAt", void 0);
/**
 * Calculate price response
 */
class CalculatePriceResponseDto {
    ratePlanId;
    ratePlanName;
    type;
    basePrice;
    derivationType;
    derivationValue;
    calculatedPrice;
}
exports.CalculatePriceResponseDto = CalculatePriceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID' }),
    __metadata("design:type", String)
], CalculatePriceResponseDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name', example: 'BAR + 4%' }),
    __metadata("design:type", String)
], CalculatePriceResponseDto.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'DERIVED' }),
    __metadata("design:type", String)
], CalculatePriceResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price input', example: 250 }),
    __metadata("design:type", Number)
], CalculatePriceResponseDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Derivation type', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' }),
    __metadata("design:type", String)
], CalculatePriceResponseDto.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Derivation value', example: 4 }),
    __metadata("design:type", Number)
], CalculatePriceResponseDto.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final calculated price', example: 260 }),
    __metadata("design:type", Number)
], CalculatePriceResponseDto.prototype, "calculatedPrice", void 0);
/**
 * Get rate plans response
 */
class GetRatePlansResponseDto {
    data;
}
exports.GetRatePlansResponseDto = GetRatePlansResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of rate plans', type: [RatePlanResponseDto] }),
    __metadata("design:type", Array)
], GetRatePlansResponseDto.prototype, "data", void 0);
//# sourceMappingURL=rate-plan.types.js.map