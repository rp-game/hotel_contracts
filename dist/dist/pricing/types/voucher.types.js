"use strict";
/**
 * Voucher Types — Centralized Contracts
 *
 * Single-use unique codes (sold via Shopee/Lazada/Gotit or given to guests).
 * Different from promotions: per-instance lifecycle, not shared codes.
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
exports.VouchersPaginatedResponseDto = exports.VoucherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class VoucherDto {
    id;
    tenantId;
    hotelId;
    code;
    batchId;
    type;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    status;
    issuedToCustomerId;
    usedByCustomerId;
    usedInBookingId;
    usedAt;
    source;
    notes;
    createdBy;
    createdAt;
    updatedAt;
}
exports.VoucherDto = VoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null = chain voucher)' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique voucher code' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Batch ID (group of vouchers created together)' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "batchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    __metadata("design:type", String)
], VoucherDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value (monetary amount, percentage, or fixed discount)' }),
    __metadata("design:type", Number)
], VoucherDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum booking amount required' }),
    __metadata("design:type", Number)
], VoucherDto.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs' }),
    __metadata("design:type", Array)
], VoucherDto.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher status', enum: ['ACTIVE', 'USED', 'EXPIRED', 'CANCELLED'] }),
    __metadata("design:type", String)
], VoucherDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer ID this voucher was issued to' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "issuedToCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer ID who used this voucher' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "usedByCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking ID where voucher was used' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "usedInBookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'When voucher was used' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "usedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", String)
], VoucherDto.prototype, "updatedAt", void 0);
class VouchersPaginatedResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.VouchersPaginatedResponseDto = VouchersPaginatedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VoucherDto] }),
    __metadata("design:type", Array)
], VouchersPaginatedResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VouchersPaginatedResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VouchersPaginatedResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VouchersPaginatedResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VouchersPaginatedResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=voucher.types.js.map