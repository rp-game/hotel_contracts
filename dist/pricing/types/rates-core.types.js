"use strict";
/**
 * Rates Core Types
 *
 * Shared types for core rate management patterns.
 * Handles base rates, restrictions, and dynamic calculations.
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
exports.DynamicRateCalculation = exports.RateBreakdown = exports.Rate = exports.RateRestrictionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Rate restriction (min stay, closed to arrival, etc.)
 */
class RateRestrictionDto {
    minStay;
    maxStay;
    closedToArrival;
    closedToDeparture;
    stopSell;
}
exports.RateRestrictionDto = RateRestrictionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum stay requirement', required: false }),
    __metadata("design:type", Number)
], RateRestrictionDto.prototype, "minStay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum stay limit', required: false }),
    __metadata("design:type", Number)
], RateRestrictionDto.prototype, "maxStay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Closed to arrival', required: false }),
    __metadata("design:type", Boolean)
], RateRestrictionDto.prototype, "closedToArrival", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Closed to departure', required: false }),
    __metadata("design:type", Boolean)
], RateRestrictionDto.prototype, "closedToDeparture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stop sell flag', required: false }),
    __metadata("design:type", Boolean)
], RateRestrictionDto.prototype, "stopSell", void 0);
/**
 * Base rate entity
 */
class Rate {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    ratePlanId;
    basePrice;
    startDate;
    endDate;
    currency;
    status;
    lengthOfStayRules;
    extraAdultCharge;
    extraChildCharge;
    isActive;
    createdAt;
    updatedAt;
}
exports.Rate = Rate;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate ID' }),
    __metadata("design:type", String)
], Rate.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], Rate.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], Rate.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], Rate.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID', required: false }),
    __metadata("design:type", String)
], Rate.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price' }),
    __metadata("design:type", Number)
], Rate.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date' }),
    __metadata("design:type", String)
], Rate.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date' }),
    __metadata("design:type", String)
], Rate.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], Rate.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate status', enum: ['ACTIVE', 'INACTIVE', 'ARCHIVED'] }),
    __metadata("design:type", String)
], Rate.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Length of stay rules', type: RateRestrictionDto, required: false }),
    __metadata("design:type", RateRestrictionDto)
], Rate.prototype, "lengthOfStayRules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra adult charge', required: false }),
    __metadata("design:type", Number)
], Rate.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra child charge', required: false }),
    __metadata("design:type", Number)
], Rate.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is active flag' }),
    __metadata("design:type", Boolean)
], Rate.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at timestamp' }),
    __metadata("design:type", String)
], Rate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at timestamp' }),
    __metadata("design:type", String)
], Rate.prototype, "updatedAt", void 0);
/**
 * Rate breakdown details
 */
class RateBreakdown {
    baseAmount;
    seasonalAdjustment;
    occupancyAdjustment;
    lengthOfStayDiscount;
    promotionDiscount;
    yieldAdjustment;
    advanceBookingDiscount;
    lastMinuteDiscount;
    taxes;
}
exports.RateBreakdown = RateBreakdown;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base amount' }),
    __metadata("design:type", Object)
], RateBreakdown.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy adjustment' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Length of stay discount' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "lengthOfStayDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion discount' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Yield adjustment' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "yieldAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advance booking discount' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "advanceBookingDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last minute discount' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "lastMinuteDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Taxes' }),
    __metadata("design:type", Number)
], RateBreakdown.prototype, "taxes", void 0);
/**
 * Dynamic rate calculation result
 */
class DynamicRateCalculation {
    tenantId;
    hotelId;
    roomTypeId;
    checkIn;
    checkOut;
    guests;
    nights;
    units;
    baseRate;
    calculatedRate;
    currency;
    breakdown;
    adjustmentDetails;
}
exports.DynamicRateCalculation = DynamicRateCalculation;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], DynamicRateCalculation.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights (for overnight bookings)' }),
    __metadata("design:type", Number)
], DynamicRateCalculation.prototype, "nights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of units (nights for overnight, hours for hourly)' }),
    __metadata("design:type", Number)
], DynamicRateCalculation.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate per night/hour' }),
    __metadata("design:type", Object)
], DynamicRateCalculation.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final calculated rate' }),
    __metadata("design:type", Number)
], DynamicRateCalculation.prototype, "calculatedRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], DynamicRateCalculation.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate breakdown details', type: RateBreakdown }),
    __metadata("design:type", RateBreakdown)
], DynamicRateCalculation.prototype, "breakdown", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adjustment details', type: [String] }),
    __metadata("design:type", Array)
], DynamicRateCalculation.prototype, "adjustmentDetails", void 0);
//# sourceMappingURL=rates-core.types.js.map