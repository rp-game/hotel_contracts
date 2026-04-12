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
exports.ValidateVoucherDto = exports.UpdateVoucherDto = exports.CreateVoucherBatchDto = exports.CreateVoucherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * REST body for POST /pricing/vouchers
 * tenantId, hotelId, createdBy are injected by the gateway from auth context
 */
class CreateVoucherDto {
    code;
    type;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    source;
    issuedToCustomerId;
    notes;
}
exports.CreateVoucherDto = CreateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique voucher code (will be uppercased)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    (0, class_validator_1.IsEnum)(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED']),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value (monetary amount, percentage, or fixed discount)', minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum booking amount required', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateVoucherDto.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issue to specific customer ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "issuedToCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "notes", void 0);
/**
 * REST body for POST /pricing/vouchers/batch
 */
class CreateVoucherBatchDto {
    prefix;
    count;
    type;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    source;
}
exports.CreateVoucherBatchDto = CreateVoucherBatchDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Code prefix (e.g., VCH)', example: 'VCH' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherBatchDto.prototype, "prefix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of vouchers to create', minimum: 1, maximum: 1000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], CreateVoucherBatchDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    (0, class_validator_1.IsEnum)(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED']),
    __metadata("design:type", String)
], CreateVoucherBatchDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value', minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherBatchDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum booking amount', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherBatchDto.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateVoucherBatchDto.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherBatchDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherBatchDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherBatchDto.prototype, "source", void 0);
/**
 * REST body for PUT /pricing/vouchers/:id
 */
class UpdateVoucherDto {
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    issuedToCustomerId;
    notes;
}
exports.UpdateVoucherDto = UpdateVoucherDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated value', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated minimum booking amount', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated applicable room types' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateVoucherDto.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated valid from date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated valid to date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated issued to customer ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "issuedToCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "notes", void 0);
/**
 * REST body for POST /pricing/vouchers/validate
 */
class ValidateVoucherDto {
    voucherCode;
    bookingAmount;
    customerId;
    roomTypeId;
}
exports.ValidateVoucherDto = ValidateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code to validate' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateVoucherDto.prototype, "voucherCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking amount for minimum check' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ValidateVoucherDto.prototype, "bookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer ID for ownership check' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID for applicable check' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherDto.prototype, "roomTypeId", void 0);
//# sourceMappingURL=voucher.dto.js.map