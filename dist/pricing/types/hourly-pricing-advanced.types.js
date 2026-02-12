"use strict";
/**
 * Hourly Pricing Advanced Types
 *
 * Shared entity types for advanced hourly pricing patterns.
 * Includes tiered blocks, peak periods, and rate calculations.
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
exports.PeakAdjustmentCalculation = exports.HourlyBlockCalculation = exports.HourlyRateCalculation = exports.PeakPeriod = exports.HourlyBlock = exports.HourlyPricingRule = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Hourly pricing rule with tiered blocks
 */
class HourlyPricingRule {
    id;
    tenantId;
    hotelId;
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
    isActive;
    priority;
    description;
    createdAt;
    updatedAt;
    peakPeriods;
}
exports.HourlyPricingRule = HourlyPricingRule;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: '550e8400-e29b-41d4-a716-446655440003' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tiered hourly blocks',
        type: () => [HourlyBlock],
        example: [
            { blockName: 'First 3 hours', fromHour: 1, toHour: 3, ratePerHour: 100000 },
            { blockName: 'Hours 4-6', fromHour: 4, toHour: 6, ratePerHour: 80000 },
        ],
    }),
    __metadata("design:type", Array)
], HourlyPricingRule.prototype, "hourlyBlocks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum hours required', example: 3, minimum: 1, maximum: 24 }),
    __metadata("design:type", Number)
], HourlyPricingRule.prototype, "minHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum hours allowed', example: 12, minimum: 1, maximum: 24 }),
    __metadata("design:type", Number)
], HourlyPricingRule.prototype, "maxHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pricing strategy',
        enum: ['TIERED', 'FLAT', 'HYBRID'],
        example: 'TIERED',
    }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "pricingStrategy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fallback hourly rate',
        example: 80000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], HourlyPricingRule.prototype, "fallbackHourlyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enable dynamic adjustments', example: false }),
    __metadata("design:type", Boolean)
], HourlyPricingRule.prototype, "enableDynamicAdjustments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND', minLength: 3, maxLength: 3 }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Valid from date (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Valid to date (ISO 8601)',
        example: '2025-12-31T23:59:59.999Z',
    }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active status', example: true }),
    __metadata("design:type", Boolean)
], HourlyPricingRule.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority for overlapping rules', example: 0 }),
    __metadata("design:type", Number)
], HourlyPricingRule.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rule description', example: 'Standard hourly pricing' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], HourlyPricingRule.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Peak periods for this rule',
        type: () => [PeakPeriod],
    }),
    __metadata("design:type", Array)
], HourlyPricingRule.prototype, "peakPeriods", void 0);
/**
 * Tiered hour block for progressive pricing
 */
class HourlyBlock {
    blockName;
    fromHour;
    toHour;
    ratePerHour;
    isFlat;
    flatAmount;
}
exports.HourlyBlock = HourlyBlock;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Block name',
        example: 'First 3 hours',
    }),
    __metadata("design:type", String)
], HourlyBlock.prototype, "blockName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Starting hour (1-based)',
        example: 1,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], HourlyBlock.prototype, "fromHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ending hour (inclusive)',
        example: 3,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], HourlyBlock.prototype, "toHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate per hour',
        example: 100000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], HourlyBlock.prototype, "ratePerHour", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Charge flat amount instead of per hour',
        example: false,
    }),
    __metadata("design:type", Boolean)
], HourlyBlock.prototype, "isFlat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Flat amount (if isFlat = true)',
        example: 150000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], HourlyBlock.prototype, "flatAmount", void 0);
/**
 * Peak/off-peak period adjustment
 */
class PeakPeriod {
    id;
    tenantId;
    hotelId;
    hourlyPricingRuleId;
    periodName;
    startTime;
    endTime;
    daysOfWeek;
    adjustmentType;
    multiplier;
    fixedAdjustment;
    isActive;
    priority;
    createdAt;
    updatedAt;
}
exports.PeakPeriod = PeakPeriod;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440010' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hourly pricing rule ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "hourlyPricingRuleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period name', example: 'Business Hours (Mon-Fri 9AM-6PM)' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "periodName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time (HH:00)', example: '09:00' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time (HH:00)', example: '18:00' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Days of week (0=Sunday, 6=Saturday)',
        example: [1, 2, 3, 4, 5],
        isArray: true,
    }),
    __metadata("design:type", Array)
], PeakPeriod.prototype, "daysOfWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Multiplier or fixed amount', example: 1.2 }),
    __metadata("design:type", Number)
], PeakPeriod.prototype, "multiplier", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fixed adjustment amount',
        example: 50000,
    }),
    __metadata("design:type", Number)
], PeakPeriod.prototype, "fixedAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active status', example: true }),
    __metadata("design:type", Boolean)
], PeakPeriod.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority', example: 0 }),
    __metadata("design:type", Number)
], PeakPeriod.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], PeakPeriod.prototype, "updatedAt", void 0);
/**
 * Hourly rate calculation result with breakdown
 */
class HourlyRateCalculation {
    roomTypeId;
    checkIn;
    startTime;
    endTime;
    totalHours;
    blocks;
    baseTotal;
    peakAdjustments;
    occupancyAdjustment;
    seasonalAdjustment;
    promotionDiscount;
    finalTotal;
    currency;
}
exports.HourlyRateCalculation = HourlyRateCalculation;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: '550e8400-e29b-41d4-a716-446655440003' }),
    __metadata("design:type", String)
], HourlyRateCalculation.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date', example: '2025-12-24' }),
    __metadata("design:type", String)
], HourlyRateCalculation.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time', example: '14:00' }),
    __metadata("design:type", String)
], HourlyRateCalculation.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time', example: '18:00' }),
    __metadata("design:type", String)
], HourlyRateCalculation.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total hours', example: 4 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "totalHours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Block calculations',
        type: () => [HourlyBlockCalculation],
    }),
    __metadata("design:type", Array)
], HourlyRateCalculation.prototype, "blocks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base total before adjustments', example: 350000 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "baseTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Peak period adjustments',
        type: () => [PeakAdjustmentCalculation],
    }),
    __metadata("design:type", Array)
], HourlyRateCalculation.prototype, "peakAdjustments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy adjustment amount', example: 0 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment amount', example: 0 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion discount amount', example: 0 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final total after all adjustments', example: 350000 }),
    __metadata("design:type", Number)
], HourlyRateCalculation.prototype, "finalTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    __metadata("design:type", String)
], HourlyRateCalculation.prototype, "currency", void 0);
/**
 * Calculation breakdown for a single block
 */
class HourlyBlockCalculation {
    blockName;
    hours;
    ratePerHour;
    subtotal;
    isFlat;
}
exports.HourlyBlockCalculation = HourlyBlockCalculation;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block name', example: 'First 3 hours' }),
    __metadata("design:type", String)
], HourlyBlockCalculation.prototype, "blockName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hours in this block', example: 3 }),
    __metadata("design:type", Number)
], HourlyBlockCalculation.prototype, "hours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate per hour', example: 100000 }),
    __metadata("design:type", Number)
], HourlyBlockCalculation.prototype, "ratePerHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal for this block', example: 300000 }),
    __metadata("design:type", Number)
], HourlyBlockCalculation.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is flat rate', example: false }),
    __metadata("design:type", Boolean)
], HourlyBlockCalculation.prototype, "isFlat", void 0);
/**
 * Peak period adjustment in calculation
 */
class PeakAdjustmentCalculation {
    periodName;
    hours;
    adjustmentType;
    adjustmentValue;
    amount;
}
exports.PeakAdjustmentCalculation = PeakAdjustmentCalculation;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Period name', example: 'Business Hours' }),
    __metadata("design:type", String)
], PeakAdjustmentCalculation.prototype, "periodName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hours affected', example: 4 }),
    __metadata("design:type", Number)
], PeakAdjustmentCalculation.prototype, "hours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE',
    }),
    __metadata("design:type", String)
], PeakAdjustmentCalculation.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment value (multiplier or amount)', example: 1.2 }),
    __metadata("design:type", Number)
], PeakAdjustmentCalculation.prototype, "adjustmentValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total adjustment amount', example: 70000 }),
    __metadata("design:type", Number)
], PeakAdjustmentCalculation.prototype, "amount", void 0);
//# sourceMappingURL=hourly-pricing-advanced.types.js.map