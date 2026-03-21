"use strict";
/**
 * Voucher NATS Message Contracts
 *
 * Patterns:
 * - pricing.vouchers.create
 * - pricing.vouchers.create_batch
 * - pricing.vouchers.find_all
 * - pricing.vouchers.find_one
 * - pricing.vouchers.update
 * - pricing.vouchers.delete
 * - pricing.vouchers.validate
 * - pricing.vouchers.use
 * - pricing.vouchers.unuse
 *
 * Handler: pricing-service (vouchers module)
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
exports.UnuseVoucherNatsRequest = exports.UseVoucherNatsRequest = exports.ValidateVoucherResponse = exports.ValidateVoucherNatsRequest = exports.DeleteVoucherNatsRequest = exports.UpdateVoucherNatsRequest = exports.GetVoucherByIdNatsRequest = exports.GetVouchersNatsRequest = exports.CreateVoucherBatchNatsRequest = exports.CreateVoucherNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// REQUEST TYPES
// ============================================================================
class CreateVoucherNatsRequest {
    tenantId;
    hotelId;
    code;
    type;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    issuedToCustomerId;
    source;
    notes;
    createdBy;
}
exports.CreateVoucherNatsRequest = CreateVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (null = chain voucher)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code (unique per tenant)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    (0, class_validator_1.IsEnum)(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED']),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value (amount, percentage, or fixed discount)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherNatsRequest.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum booking amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherNatsRequest.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateVoucherNatsRequest.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issue to specific customer' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "issuedToCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source (SHOPEE, LAZADA, GOTIT, MANUAL, LOYALTY)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created by user ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherNatsRequest.prototype, "createdBy", void 0);
class CreateVoucherBatchNatsRequest {
    tenantId;
    hotelId;
    prefix;
    count;
    type;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    source;
    createdBy;
}
exports.CreateVoucherBatchNatsRequest = CreateVoucherBatchNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Code prefix (e.g., VCH)', example: 'VCH' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "prefix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of vouchers to create', minimum: 1, maximum: 1000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], CreateVoucherBatchNatsRequest.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    (0, class_validator_1.IsEnum)(['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED']),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVoucherBatchNatsRequest.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum booking amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVoucherBatchNatsRequest.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateVoucherBatchNatsRequest.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid from (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valid to (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Source' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created by user ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateVoucherBatchNatsRequest.prototype, "createdBy", void 0);
class GetVouchersNatsRequest {
    tenantId;
    hotelId;
    status;
    batchId;
    source;
    search;
    page;
    limit;
}
exports.GetVouchersNatsRequest = GetVouchersNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'USED', 'EXPIRED', 'CANCELLED']),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by batch ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "batchId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by source' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetVouchersNatsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetVouchersNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Limit', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetVouchersNatsRequest.prototype, "limit", void 0);
class GetVoucherByIdNatsRequest {
    id;
    tenantId;
}
exports.GetVoucherByIdNatsRequest = GetVoucherByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetVoucherByIdNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetVoucherByIdNatsRequest.prototype, "tenantId", void 0);
class UpdateVoucherNatsRequest {
    id;
    tenantId;
    value;
    minBookingAmount;
    applicableRoomTypes;
    validFrom;
    validTo;
    issuedToCustomerId;
    notes;
}
exports.UpdateVoucherNatsRequest = UpdateVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated value' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateVoucherNatsRequest.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated min booking amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateVoucherNatsRequest.prototype, "minBookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated applicable room types' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateVoucherNatsRequest.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated valid from' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated valid to' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated issued to customer' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "issuedToCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateVoucherNatsRequest.prototype, "notes", void 0);
class DeleteVoucherNatsRequest {
    id;
    tenantId;
}
exports.DeleteVoucherNatsRequest = DeleteVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteVoucherNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteVoucherNatsRequest.prototype, "tenantId", void 0);
class ValidateVoucherNatsRequest {
    tenantId;
    hotelId;
    voucherCode;
    bookingAmount;
    customerId;
    roomTypeId;
}
exports.ValidateVoucherNatsRequest = ValidateVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code to validate' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateVoucherNatsRequest.prototype, "voucherCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ValidateVoucherNatsRequest.prototype, "bookingAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer ID (for ownership check)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidateVoucherNatsRequest.prototype, "roomTypeId", void 0);
class ValidateVoucherResponse {
    isValid;
    voucherId;
    voucherCode;
    type;
    value;
    applicableAmount;
    finalAmount;
    message;
}
exports.ValidateVoucherResponse = ValidateVoucherResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether voucher is valid' }),
    __metadata("design:type", Boolean)
], ValidateVoucherResponse.prototype, "isValid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Voucher ID if valid' }),
    __metadata("design:type", String)
], ValidateVoucherResponse.prototype, "voucherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher code' }),
    __metadata("design:type", String)
], ValidateVoucherResponse.prototype, "voucherCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Voucher type', enum: ['VALUE', 'DISCOUNT_PERCENT', 'DISCOUNT_FIXED'] }),
    __metadata("design:type", String)
], ValidateVoucherResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Voucher value' }),
    __metadata("design:type", Number)
], ValidateVoucherResponse.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable discount amount' }),
    __metadata("design:type", Number)
], ValidateVoucherResponse.prototype, "applicableAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Final amount after discount' }),
    __metadata("design:type", Number)
], ValidateVoucherResponse.prototype, "finalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Validation message' }),
    __metadata("design:type", String)
], ValidateVoucherResponse.prototype, "message", void 0);
class UseVoucherNatsRequest {
    tenantId;
    voucherId;
    bookingId;
    customerId;
}
exports.UseVoucherNatsRequest = UseVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UseVoucherNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UseVoucherNatsRequest.prototype, "voucherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UseVoucherNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UseVoucherNatsRequest.prototype, "customerId", void 0);
class UnuseVoucherNatsRequest {
    tenantId;
    voucherId;
    bookingId;
}
exports.UnuseVoucherNatsRequest = UnuseVoucherNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UnuseVoucherNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UnuseVoucherNatsRequest.prototype, "voucherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UnuseVoucherNatsRequest.prototype, "bookingId", void 0);
//# sourceMappingURL=vouchers.nats.js.map