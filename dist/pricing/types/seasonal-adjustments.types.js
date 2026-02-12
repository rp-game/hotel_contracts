"use strict";
/**
 * Seasonal Adjustments Types
 *
 * Shared types for seasonal pricing adjustment patterns.
 * Handles rate adjustments for different seasons/periods.
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
exports.CommonSeasonalPeriods = exports.SeasonalAdjustment = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Seasonal adjustment entity
 */
class SeasonalAdjustment {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    seasonName;
    startDate;
    endDate;
    adjustmentType;
    adjustmentValue;
    description;
    isActive;
    createdAt;
    updatedAt;
}
exports.SeasonalAdjustment = SeasonalAdjustment;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440050' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Season name', example: 'Summer 2025', maxLength: 100 }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "seasonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE'
    }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment value (percentage or fixed amount)',
        example: 20,
        minimum: -100,
        maximum: 1000
    }),
    __metadata("design:type", Number)
], SeasonalAdjustment.prototype, "adjustmentValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Peak summer season pricing' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is active', example: true }),
    __metadata("design:type", Boolean)
], SeasonalAdjustment.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at', example: '2025-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], SeasonalAdjustment.prototype, "updatedAt", void 0);
/**
 * Common seasonal periods
 */
exports.CommonSeasonalPeriods = {
    LUNAR_NEW_YEAR: {
        name: 'Lunar New Year',
        startDate: '01-25',
        endDate: '02-10',
        adjustmentType: 'PERCENTAGE',
        adjustmentValue: 50,
    },
    SUMMER_HIGH: {
        name: 'Summer High Season',
        startDate: '06-01',
        endDate: '08-31',
        adjustmentType: 'PERCENTAGE',
        adjustmentValue: 30,
    },
    CHRISTMAS_NEW_YEAR: {
        name: 'Christmas & New Year',
        startDate: '12-20',
        endDate: '01-05',
        adjustmentType: 'PERCENTAGE',
        adjustmentValue: 40,
    },
    LOW_SEASON: {
        name: 'Low Season',
        startDate: '09-01',
        endDate: '11-30',
        adjustmentType: 'PERCENTAGE',
        adjustmentValue: -20,
    },
};
//# sourceMappingURL=seasonal-adjustments.types.js.map