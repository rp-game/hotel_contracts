"use strict";
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
exports.BookingPricingBreakdownResponseDto = exports.PricingBreakdownDto = exports.RoomPricingEntryDto = exports.RatePlanAdjustmentDto = exports.RatePlanSnapshotDto = exports.PricingBreakdownDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PricingBreakdownDetailDto {
    baseAmount;
    seasonalAdjustment;
    seasonalAdjustmentPercent;
    advanceBookingDiscount;
    advanceBookingDiscountPercent;
    lengthOfStayDiscount;
    lengthOfStayDiscountPercent;
    promotionDiscount;
    promotionDiscountPercent;
    occupancyAdjustment;
    yieldAdjustment;
    taxes;
    taxBreakdown;
    grossAmount;
}
exports.PricingBreakdownDetailDto = PricingBreakdownDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base amount (baseRate × nights)',
        example: 3600000,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Seasonal adjustment amount in VND',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Seasonal adjustment percentage',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "seasonalAdjustmentPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Advance booking discount amount in VND',
        example: 720000,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "advanceBookingDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Advance booking discount percentage',
        example: 0.2,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "advanceBookingDiscountPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Length of stay discount amount in VND',
        example: 180000,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "lengthOfStayDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Length of stay discount percentage',
        example: 0.05,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "lengthOfStayDiscountPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Promotion discount amount (optional)',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Promotion discount percentage (optional)',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "promotionDiscountPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Occupancy adjustment (optional)',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Yield adjustment (optional)',
        example: 0,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "yieldAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total tax amount (service charge + VAT)' }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "taxes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax breakdown by type' }),
    __metadata("design:type", Object)
], PricingBreakdownDetailDto.prototype, "taxBreakdown", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gross amount (net + all taxes)' }),
    __metadata("design:type", Number)
], PricingBreakdownDetailDto.prototype, "grossAmount", void 0);
class RatePlanSnapshotDto {
    id;
    name;
    mealPlan;
    paymentType;
    cancellationPolicy;
    adjustmentType;
    adjustmentValue;
}
exports.RatePlanSnapshotDto = RatePlanSnapshotDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID', format: 'uuid' }),
    __metadata("design:type", String)
], RatePlanSnapshotDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name' }),
    __metadata("design:type", String)
], RatePlanSnapshotDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Meal plan included', type: String, nullable: true }),
    __metadata("design:type", Object)
], RatePlanSnapshotDto.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment type (e.g. PREPAID, PAY_AT_HOTEL)', type: String, nullable: true }),
    __metadata("design:type", Object)
], RatePlanSnapshotDto.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation policy', type: String, nullable: true }),
    __metadata("design:type", Object)
], RatePlanSnapshotDto.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Adjustment type (PERCENTAGE or AMOUNT)', type: String, nullable: true }),
    __metadata("design:type", Object)
], RatePlanSnapshotDto.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Adjustment value (e.g. -10 for -10%)', type: Number, nullable: true }),
    __metadata("design:type", Object)
], RatePlanSnapshotDto.prototype, "adjustmentValue", void 0);
class RatePlanAdjustmentDto {
    type;
    value;
    originalTotal;
    adjustedTotal;
}
exports.RatePlanAdjustmentDto = RatePlanAdjustmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment type', enum: ['PERCENTAGE', 'AMOUNT'] }),
    __metadata("design:type", String)
], RatePlanAdjustmentDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment value (e.g. -10 for -10% discount)', example: -10 }),
    __metadata("design:type", Number)
], RatePlanAdjustmentDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total before rate plan adjustment', example: 3600000 }),
    __metadata("design:type", Number)
], RatePlanAdjustmentDto.prototype, "originalTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total after rate plan adjustment', example: 3240000 }),
    __metadata("design:type", Number)
], RatePlanAdjustmentDto.prototype, "adjustedTotal", void 0);
class RoomPricingEntryDto {
    roomTypeId;
    roomTypeName;
    baseRate;
    calculatedRate;
    quantity;
    breakdown;
}
exports.RoomPricingEntryDto = RoomPricingEntryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', format: 'uuid' }),
    __metadata("design:type", String)
], RoomPricingEntryDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], RoomPricingEntryDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate per unit in VND', example: 1200000 }),
    __metadata("design:type", Number)
], RoomPricingEntryDto.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calculated rate after adjustments', example: 1080000 }),
    __metadata("design:type", Number)
], RoomPricingEntryDto.prototype, "calculatedRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms of this type', example: 1 }),
    __metadata("design:type", Number)
], RoomPricingEntryDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed breakdown', type: PricingBreakdownDetailDto }),
    __metadata("design:type", PricingBreakdownDetailDto)
], RoomPricingEntryDto.prototype, "breakdown", void 0);
class PricingBreakdownDto {
    nights;
    finalPrice;
    currency;
    calculatedAt;
    rooms;
    ratePlanSnapshot;
    ratePlanAdjustment;
}
exports.PricingBreakdownDto = PricingBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of nights',
        example: 3,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDto.prototype, "nights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Final calculated price in VND',
        example: 2736000,
    }),
    __metadata("design:type", Number)
], PricingBreakdownDto.prototype, "finalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'VND',
    }),
    __metadata("design:type", String)
], PricingBreakdownDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp when price was calculated',
        example: '2026-02-24T10:30:00Z',
    }),
    __metadata("design:type", Date)
], PricingBreakdownDto.prototype, "calculatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Per-room pricing breakdown',
        type: [RoomPricingEntryDto],
    }),
    __metadata("design:type", Array)
], PricingBreakdownDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Snapshot of rate plan applied at booking time',
        type: RatePlanSnapshotDto,
    }),
    __metadata("design:type", RatePlanSnapshotDto)
], PricingBreakdownDto.prototype, "ratePlanSnapshot", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan price adjustment details',
        type: RatePlanAdjustmentDto,
    }),
    __metadata("design:type", RatePlanAdjustmentDto)
], PricingBreakdownDto.prototype, "ratePlanAdjustment", void 0);
class BookingPricingBreakdownResponseDto {
    bookingId;
    roomTypeId;
    checkInDate;
    checkOutDate;
    nights;
    rules;
    calculation;
    finalPrice;
    priceValidatedAt;
}
exports.BookingPricingBreakdownResponseDto = BookingPricingBreakdownResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking ID',
    }),
    __metadata("design:type", String)
], BookingPricingBreakdownResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type ID',
    }),
    __metadata("design:type", String)
], BookingPricingBreakdownResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-in date',
    }),
    __metadata("design:type", String)
], BookingPricingBreakdownResponseDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check-out date',
    }),
    __metadata("design:type", String)
], BookingPricingBreakdownResponseDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of nights',
    }),
    __metadata("design:type", Number)
], BookingPricingBreakdownResponseDto.prototype, "nights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rules applied and their effects',
        type: 'object',
        additionalProperties: true,
    }),
    __metadata("design:type", Object)
], BookingPricingBreakdownResponseDto.prototype, "rules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Step-by-step price calculation',
        type: 'object',
        additionalProperties: true,
    }),
    __metadata("design:type", Object)
], BookingPricingBreakdownResponseDto.prototype, "calculation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Final calculated price',
    }),
    __metadata("design:type", Number)
], BookingPricingBreakdownResponseDto.prototype, "finalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'When the price was calculated',
    }),
    __metadata("design:type", Date)
], BookingPricingBreakdownResponseDto.prototype, "priceValidatedAt", void 0);
//# sourceMappingURL=pricing-breakdown.dto.js.map