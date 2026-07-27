"use strict";
/**
 * Length of Stay (LOS) Discounts Types
 *
 * Shared types for LOS discount patterns.
 * Handles discounts based on number of nights booked.
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
exports.LosDiscount = void 0;
/**
 * Length of stay discount configuration
 */
const swagger_1 = require("@nestjs/swagger");
class LosDiscount {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    minNights;
    maxNights;
    discountType;
    discountValue;
    description;
    currency;
    validFrom;
    validTo;
    isActive;
    createdAt;
    updatedAt;
}
exports.LosDiscount = LosDiscount;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID (null for hotel-wide discount)', required: false }),
    __metadata("design:type", String)
], LosDiscount.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum nights to qualify', example: 3, minimum: 1 }),
    __metadata("design:type", Number)
], LosDiscount.prototype, "minNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum nights (optional)', example: 7, required: false, minimum: 1 }),
    __metadata("design:type", Number)
], LosDiscount.prototype, "maxNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount type', example: 'PERCENTAGE', enum: ['PERCENTAGE', 'FIXED'] }),
    __metadata("design:type", String)
], LosDiscount.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount value', example: 10, minimum: 0 }),
    __metadata("design:type", Number)
], LosDiscount.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description', example: 'Stay 3+ nights, get 10% off', required: false }),
    __metadata("design:type", String)
], LosDiscount.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from date', example: '2025-01-01', required: false }),
    __metadata("design:type", String)
], LosDiscount.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to date', example: '2025-12-31', required: false }),
    __metadata("design:type", String)
], LosDiscount.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is active', example: true }),
    __metadata("design:type", Boolean)
], LosDiscount.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], LosDiscount.prototype, "updatedAt", void 0);
//# sourceMappingURL=los-discounts.types.js.map