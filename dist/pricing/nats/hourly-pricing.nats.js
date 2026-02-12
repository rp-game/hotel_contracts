"use strict";
/**
 * Hourly Pricing NATS Contracts (9 patterns)
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger generation.
 * Used for both NATS messages and REST API DTOs.
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
exports.CalculateHourlyRateResponse = exports.CalculateHourlyRateRequest = exports.DeletePeakPeriodResponse = exports.DeletePeakPeriodRequest = exports.UpdatePeakPeriodResponse = exports.UpdatePeakPeriodRequest = exports.UpdatePeakPeriodDto = exports.CreatePeakPeriodResponse = exports.CreatePeakPeriodRequest = exports.CreatePeakPeriodDto = exports.DeleteHourlyPricingRuleResponse = exports.DeleteHourlyPricingRuleRequest = exports.FindAllHourlyPricingRulesResponse = exports.FindAllHourlyPricingRulesRequest = exports.FindOneHourlyPricingRuleResponse = exports.FindOneHourlyPricingRuleRequest = exports.UpdateHourlyPricingRuleResponse = exports.UpdateHourlyPricingRuleRequest = exports.UpdateHourlyPricingRuleDto = exports.CreateHourlyPricingRuleResponse = exports.CreateHourlyPricingRuleRequest = exports.CreateHourlyPricingRuleDto = exports.HourlyBlockDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../types");
// ============================================
// Hourly Block (Nested DTO)
// ============================================
class HourlyBlockDto {
    blockName;
    fromHour;
    toHour;
    ratePerHour;
    isFlat;
    flatAmount;
}
exports.HourlyBlockDto = HourlyBlockDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Block name (e.g., "First 3 hours", "Hours 4-6")',
        example: 'First 3 hours',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HourlyBlockDto.prototype, "blockName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Starting hour (1-based: 1 = first hour)',
        example: 1,
        minimum: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], HourlyBlockDto.prototype, "fromHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ending hour (inclusive: 3 = up to 3rd hour)',
        example: 3,
        minimum: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], HourlyBlockDto.prototype, "toHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate per hour in this block',
        example: 100000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], HourlyBlockDto.prototype, "ratePerHour", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'If true, charge a flat amount for the entire block instead of per hour',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], HourlyBlockDto.prototype, "isFlat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Flat amount to charge for this block (only used if isFlat = true)',
        example: 150000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], HourlyBlockDto.prototype, "flatAmount", void 0);
// ============================================
// Create Hourly Pricing Rule
// ============================================
class CreateHourlyPricingRuleDto {
    roomTypeId;
    hourlyBlocks;
    minHours;
    maxHours;
    pricingStrategy;
    fallbackHourlyRate;
    enableDynamicAdjustments;
    currency;
    validFrom;
    validTo;
    priority;
    description;
}
exports.CreateHourlyPricingRuleDto = CreateHourlyPricingRuleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of tiered hourly blocks',
        type: [HourlyBlockDto],
        example: [
            {
                blockName: 'First 3 hours',
                fromHour: 1,
                toHour: 3,
                ratePerHour: 100000,
            },
            {
                blockName: 'Hours 4-6',
                fromHour: 4,
                toHour: 6,
                ratePerHour: 80000,
            },
        ],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HourlyBlockDto),
    __metadata("design:type", Array)
], CreateHourlyPricingRuleDto.prototype, "hourlyBlocks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minimum hours required for hourly booking',
        example: 3,
        minimum: 1,
        maximum: 24,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], CreateHourlyPricingRuleDto.prototype, "minHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum hours allowed before switching to overnight rate',
        example: 12,
        minimum: 1,
        maximum: 24,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], CreateHourlyPricingRuleDto.prototype, "maxHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pricing strategy: TIERED (use hourlyBlocks), FLAT (fixed rate), HYBRID (blocks then flat)',
        enum: ['TIERED', 'FLAT', 'HYBRID'],
        example: 'TIERED',
    }),
    (0, class_validator_1.IsEnum)(['TIERED', 'FLAT', 'HYBRID']),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "pricingStrategy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fallback hourly rate if no blocks match or strategy is FLAT',
        example: 80000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateHourlyPricingRuleDto.prototype, "fallbackHourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Enable occupancy, seasonal, and promotional adjustments',
        example: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateHourlyPricingRuleDto.prototype, "enableDynamicAdjustments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code (e.g., VND, USD)',
        example: 'VND',
        minLength: 3,
        maxLength: 3,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Start date (when this rule becomes valid)',
        example: '2025-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'End date (when this rule expires)',
        example: '2025-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Priority for overlapping rules (higher value = higher priority)',
        example: 0,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateHourlyPricingRuleDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rule description',
        example: 'Standard hourly pricing for Standard room type',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleDto.prototype, "description", void 0);
class CreateHourlyPricingRuleRequest {
    tenantId;
    hotelId;
    dto;
}
exports.CreateHourlyPricingRuleRequest = CreateHourlyPricingRuleRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateHourlyPricingRuleRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly pricing rule data', type: CreateHourlyPricingRuleDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CreateHourlyPricingRuleDto),
    __metadata("design:type", CreateHourlyPricingRuleDto)
], CreateHourlyPricingRuleRequest.prototype, "dto", void 0);
class CreateHourlyPricingRuleResponse {
    data;
}
exports.CreateHourlyPricingRuleResponse = CreateHourlyPricingRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created hourly pricing rule', type: () => types_1.HourlyPricingRule }),
    __metadata("design:type", types_1.HourlyPricingRule)
], CreateHourlyPricingRuleResponse.prototype, "data", void 0);
// ============================================
// Update Hourly Pricing Rule
// ============================================
class UpdateHourlyPricingRuleDto {
    hourlyBlocks;
    minHours;
    maxHours;
    pricingStrategy;
    fallbackHourlyRate;
    enableDynamicAdjustments;
    validFrom;
    validTo;
    priority;
    description;
    isActive;
}
exports.UpdateHourlyPricingRuleDto = UpdateHourlyPricingRuleDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Array of tiered hourly blocks',
        type: [HourlyBlockDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HourlyBlockDto),
    __metadata("design:type", Array)
], UpdateHourlyPricingRuleDto.prototype, "hourlyBlocks", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum hours required for hourly booking',
        minimum: 1,
        maximum: 24,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], UpdateHourlyPricingRuleDto.prototype, "minHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum hours allowed before switching to overnight rate',
        minimum: 1,
        maximum: 24,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], UpdateHourlyPricingRuleDto.prototype, "maxHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pricing strategy',
        enum: ['TIERED', 'FLAT', 'HYBRID'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['TIERED', 'FLAT', 'HYBRID']),
    __metadata("design:type", String)
], UpdateHourlyPricingRuleDto.prototype, "pricingStrategy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fallback hourly rate',
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateHourlyPricingRuleDto.prototype, "fallbackHourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Enable dynamic adjustments',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateHourlyPricingRuleDto.prototype, "enableDynamicAdjustments", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Start date',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateHourlyPricingRuleDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'End date',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateHourlyPricingRuleDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Priority for overlapping rules',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateHourlyPricingRuleDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rule description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHourlyPricingRuleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether rule is active',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateHourlyPricingRuleDto.prototype, "isActive", void 0);
class UpdateHourlyPricingRuleRequest {
    id;
    dto;
}
exports.UpdateHourlyPricingRuleRequest = UpdateHourlyPricingRuleRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly pricing rule ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateHourlyPricingRuleRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data', type: UpdateHourlyPricingRuleDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateHourlyPricingRuleDto),
    __metadata("design:type", UpdateHourlyPricingRuleDto)
], UpdateHourlyPricingRuleRequest.prototype, "dto", void 0);
class UpdateHourlyPricingRuleResponse {
    data;
}
exports.UpdateHourlyPricingRuleResponse = UpdateHourlyPricingRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated hourly pricing rule', type: () => types_1.HourlyPricingRule }),
    __metadata("design:type", types_1.HourlyPricingRule)
], UpdateHourlyPricingRuleResponse.prototype, "data", void 0);
// ============================================
// Find One Hourly Pricing Rule
// ============================================
class FindOneHourlyPricingRuleRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindOneHourlyPricingRuleRequest = FindOneHourlyPricingRuleRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneHourlyPricingRuleRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneHourlyPricingRuleRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneHourlyPricingRuleRequest.prototype, "roomTypeId", void 0);
class FindOneHourlyPricingRuleResponse {
    data;
}
exports.FindOneHourlyPricingRuleResponse = FindOneHourlyPricingRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly pricing rule', type: () => types_1.HourlyPricingRule }),
    __metadata("design:type", types_1.HourlyPricingRule)
], FindOneHourlyPricingRuleResponse.prototype, "data", void 0);
// ============================================
// Find All Hourly Pricing Rules
// ============================================
class FindAllHourlyPricingRulesRequest {
    tenantId;
    hotelId;
}
exports.FindAllHourlyPricingRulesRequest = FindAllHourlyPricingRulesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllHourlyPricingRulesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllHourlyPricingRulesRequest.prototype, "hotelId", void 0);
class FindAllHourlyPricingRulesResponse {
    data;
}
exports.FindAllHourlyPricingRulesResponse = FindAllHourlyPricingRulesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of hourly pricing rules', type: () => [types_1.HourlyPricingRule] }),
    __metadata("design:type", Array)
], FindAllHourlyPricingRulesResponse.prototype, "data", void 0);
// ============================================
// Delete Hourly Pricing Rule
// ============================================
class DeleteHourlyPricingRuleRequest {
    id;
}
exports.DeleteHourlyPricingRuleRequest = DeleteHourlyPricingRuleRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly pricing rule ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteHourlyPricingRuleRequest.prototype, "id", void 0);
class DeleteHourlyPricingRuleResponse {
    message;
}
exports.DeleteHourlyPricingRuleResponse = DeleteHourlyPricingRuleResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Rule deleted successfully' }),
    __metadata("design:type", String)
], DeleteHourlyPricingRuleResponse.prototype, "message", void 0);
// ============================================
// Create Peak Period
// ============================================
class CreatePeakPeriodDto {
    periodName;
    startTime;
    endTime;
    daysOfWeek;
    adjustmentType;
    multiplier;
    fixedAdjustment;
    priority;
}
exports.CreatePeakPeriodDto = CreatePeakPeriodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Peak period name',
        example: 'Business Hours (Mon-Fri 9AM-6PM)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePeakPeriodDto.prototype, "periodName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start time in HH:00 format',
        example: '09:00',
        pattern: '^([0-1][0-9]|2[0-3]):00$',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([0-1][0-9]|2[0-3]):00$/, {
        message: 'Start time must be in HH:00 format (e.g., 09:00, 18:00)',
    }),
    __metadata("design:type", String)
], CreatePeakPeriodDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'End time in HH:00 format',
        example: '18:00',
        pattern: '^([0-1][0-9]|2[0-3]):00$',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([0-1][0-9]|2[0-3]):00$/, {
        message: 'End time must be in HH:00 format (e.g., 09:00, 18:00)',
    }),
    __metadata("design:type", String)
], CreatePeakPeriodDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Days of week (0=Sunday, 1=Monday, ..., 6=Saturday)',
        example: [1, 2, 3, 4, 5],
        isArray: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(6, { each: true }),
    __metadata("design:type", Array)
], CreatePeakPeriodDto.prototype, "daysOfWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment type: PERCENTAGE (1.2 = 20% increase) or FIXED amount',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], CreatePeakPeriodDto.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Multiplier (for PERCENTAGE): 1.2 = 20% increase, 0.8 = 20% decrease. Or fixed amount (for FIXED type)',
        example: 1.2,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePeakPeriodDto.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fixed adjustment amount (only used if adjustmentType = FIXED)',
        example: 50000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePeakPeriodDto.prototype, "fixedAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Priority for overlapping periods (higher = applied first)',
        example: 0,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePeakPeriodDto.prototype, "priority", void 0);
class CreatePeakPeriodRequest {
    tenantId;
    hotelId;
    ruleId;
    dto;
}
exports.CreatePeakPeriodRequest = CreatePeakPeriodRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePeakPeriodRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePeakPeriodRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly pricing rule ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePeakPeriodRequest.prototype, "ruleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peak period data', type: CreatePeakPeriodDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CreatePeakPeriodDto),
    __metadata("design:type", CreatePeakPeriodDto)
], CreatePeakPeriodRequest.prototype, "dto", void 0);
class CreatePeakPeriodResponse {
    data;
}
exports.CreatePeakPeriodResponse = CreatePeakPeriodResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created peak period', type: () => types_1.PeakPeriod }),
    __metadata("design:type", types_1.PeakPeriod)
], CreatePeakPeriodResponse.prototype, "data", void 0);
// ============================================
// Update Peak Period
// ============================================
class UpdatePeakPeriodDto {
    periodName;
    startTime;
    endTime;
    daysOfWeek;
    adjustmentType;
    multiplier;
    fixedAdjustment;
    isActive;
    priority;
}
exports.UpdatePeakPeriodDto = UpdatePeakPeriodDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Peak period name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePeakPeriodDto.prototype, "periodName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Start time in HH:00 format',
        pattern: '^([0-1][0-9]|2[0-3]):00$',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([0-1][0-9]|2[0-3]):00$/, {
        message: 'Start time must be in HH:00 format',
    }),
    __metadata("design:type", String)
], UpdatePeakPeriodDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'End time in HH:00 format',
        pattern: '^([0-1][0-9]|2[0-3]):00$',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([0-1][0-9]|2[0-3]):00$/, {
        message: 'End time must be in HH:00 format',
    }),
    __metadata("design:type", String)
], UpdatePeakPeriodDto.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Days of week',
        isArray: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(6, { each: true }),
    __metadata("design:type", Array)
], UpdatePeakPeriodDto.prototype, "daysOfWeek", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], UpdatePeakPeriodDto.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Multiplier or fixed amount',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdatePeakPeriodDto.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fixed adjustment amount',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdatePeakPeriodDto.prototype, "fixedAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Whether period is active',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePeakPeriodDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Priority',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePeakPeriodDto.prototype, "priority", void 0);
class UpdatePeakPeriodRequest {
    periodId;
    dto;
}
exports.UpdatePeakPeriodRequest = UpdatePeakPeriodRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peak period ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdatePeakPeriodRequest.prototype, "periodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data', type: UpdatePeakPeriodDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdatePeakPeriodDto),
    __metadata("design:type", UpdatePeakPeriodDto)
], UpdatePeakPeriodRequest.prototype, "dto", void 0);
class UpdatePeakPeriodResponse {
    data;
}
exports.UpdatePeakPeriodResponse = UpdatePeakPeriodResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated peak period', type: () => types_1.PeakPeriod }),
    __metadata("design:type", types_1.PeakPeriod)
], UpdatePeakPeriodResponse.prototype, "data", void 0);
// ============================================
// Delete Peak Period
// ============================================
class DeletePeakPeriodRequest {
    periodId;
}
exports.DeletePeakPeriodRequest = DeletePeakPeriodRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peak period ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeletePeakPeriodRequest.prototype, "periodId", void 0);
class DeletePeakPeriodResponse {
    message;
}
exports.DeletePeakPeriodResponse = DeletePeakPeriodResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Peak period deleted successfully' }),
    __metadata("design:type", String)
], DeletePeakPeriodResponse.prototype, "message", void 0);
// ============================================
// Calculate Hourly Rate
// ============================================
class CalculateHourlyRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
    checkIn;
    startTime;
    endTime;
    occupancyAdjustment;
    seasonalAdjustment;
    promotionDiscount;
}
exports.CalculateHourlyRateRequest = CalculateHourlyRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-in date (YYYY-MM-DD)',
        example: '2025-12-24',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start time in HH:00 format',
        example: '14:00',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'End time in HH:00 format',
        example: '18:00',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CalculateHourlyRateRequest.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Occupancy adjustment multiplier',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalculateHourlyRateRequest.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Seasonal adjustment multiplier',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalculateHourlyRateRequest.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Promotion discount amount',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CalculateHourlyRateRequest.prototype, "promotionDiscount", void 0);
class CalculateHourlyRateResponse {
    data;
}
exports.CalculateHourlyRateResponse = CalculateHourlyRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hourly rate calculation result', type: () => types_1.HourlyRateCalculation }),
    __metadata("design:type", types_1.HourlyRateCalculation)
], CalculateHourlyRateResponse.prototype, "data", void 0);
//# sourceMappingURL=hourly-pricing.nats.js.map