"use strict";
/**
 * Date-Specific Rates Types
 *
 * Shared types for date-specific pricing patterns.
 * Handles special pricing for specific dates (holidays, events, etc.)
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
exports.BulkCreateDateRatesResult = exports.SpecificDateRateCalendar = exports.SpecificDateRateCalendarDay = exports.SpecificDateRate = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Date-specific rate entity
 */
class SpecificDateRate {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    date;
    rate;
    currency;
    notes;
    isActive;
    createdAt;
    updatedAt;
}
exports.SpecificDateRate = SpecificDateRate;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440099' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate for this specific date', example: 250, minimum: 0 }),
    __metadata("design:type", Number)
], SpecificDateRate.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'USD', default: 'USD' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about this date (e.g., "Christmas Day")', example: 'Holiday premium pricing' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this rate is active', example: true, default: true }),
    __metadata("design:type", Boolean)
], SpecificDateRate.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp', example: '2025-10-05T10:30:00Z' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp', example: '2025-10-05T10:30:00Z' }),
    __metadata("design:type", String)
], SpecificDateRate.prototype, "updatedAt", void 0);
/**
 * Single day in calendar view
 */
class SpecificDateRateCalendarDay {
    date;
    rate;
    currency;
    notes;
    isActive;
    hasSpecialRate;
}
exports.SpecificDateRateCalendarDay = SpecificDateRateCalendarDay;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date (YYYY-MM-DD)', example: '2025-12-25' }),
    __metadata("design:type", String)
], SpecificDateRateCalendarDay.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate for this date', example: 250, minimum: 0 }),
    __metadata("design:type", Number)
], SpecificDateRateCalendarDay.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'USD' }),
    __metadata("design:type", String)
], SpecificDateRateCalendarDay.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about this date', example: 'Christmas Day' }),
    __metadata("design:type", String)
], SpecificDateRateCalendarDay.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this rate is active', example: true }),
    __metadata("design:type", Boolean)
], SpecificDateRateCalendarDay.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether this date has a special rate defined', example: true }),
    __metadata("design:type", Boolean)
], SpecificDateRateCalendarDay.prototype, "hasSpecialRate", void 0);
/**
 * Calendar view of date rates for a room type
 */
class SpecificDateRateCalendar {
    roomTypeId;
    startDate;
    endDate;
    dates;
}
exports.SpecificDateRateCalendar = SpecificDateRateCalendar;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], SpecificDateRateCalendar.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calendar start date (YYYY-MM-DD)', example: '2025-12-01' }),
    __metadata("design:type", String)
], SpecificDateRateCalendar.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calendar end date (YYYY-MM-DD)', example: '2025-12-31' }),
    __metadata("design:type", String)
], SpecificDateRateCalendar.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of calendar days with rate information',
        type: [SpecificDateRateCalendarDay],
        example: [
            { date: '2025-12-25', rate: 250, currency: 'USD', notes: 'Christmas', isActive: true, hasSpecialRate: true },
            { date: '2025-12-26', isActive: false, hasSpecialRate: false },
        ],
    }),
    __metadata("design:type", Array)
], SpecificDateRateCalendar.prototype, "dates", void 0);
/**
 * Bulk create result
 */
class BulkCreateDateRatesResult {
    created;
    dates;
    skipped;
    errors;
}
exports.BulkCreateDateRatesResult = BulkCreateDateRatesResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rates successfully created', example: 3, minimum: 0 }),
    __metadata("design:type", Number)
], BulkCreateDateRatesResult.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dates that were created',
        type: [String],
        example: ['2025-12-24', '2025-12-25', '2025-12-31'],
    }),
    __metadata("design:type", Array)
], BulkCreateDateRatesResult.prototype, "dates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of rates skipped (duplicates)', example: 0, minimum: 0, default: 0 }),
    __metadata("design:type", Number)
], BulkCreateDateRatesResult.prototype, "skipped", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Error messages for failed creates',
        type: [String],
        example: [],
        default: [],
    }),
    __metadata("design:type", Array)
], BulkCreateDateRatesResult.prototype, "errors", void 0);
//# sourceMappingURL=date-specific-rates.types.js.map