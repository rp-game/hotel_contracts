"use strict";
/**
 * LOS Discounts NATS Contracts (5 patterns)
 * All classes with @ApiProperty for Swagger + NATS usage
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
exports.DeleteLosDiscountResponse = exports.DeleteLosDiscountRequest = exports.UpdateLosDiscountResponse = exports.UpdateLosDiscountRequest = exports.CreateLosDiscountResponse = exports.CreateLosDiscountRequest = exports.FindLosDiscountByIdResponse = exports.FindLosDiscountByIdRequest = exports.FindAllLosDiscountsResponse = exports.FindAllLosDiscountsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const types_1 = require("../types");
// ========== FIND ALL ==========
class FindAllLosDiscountsRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindAllLosDiscountsRequest = FindAllLosDiscountsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllLosDiscountsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllLosDiscountsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room Type ID filter (optional)', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindAllLosDiscountsRequest.prototype, "roomTypeId", void 0);
class FindAllLosDiscountsResponse {
    data;
}
exports.FindAllLosDiscountsResponse = FindAllLosDiscountsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of LOS discounts', type: [types_1.LosDiscount] }),
    __metadata("design:type", Array)
], FindAllLosDiscountsResponse.prototype, "data", void 0);
// ========== FIND BY ID ==========
class FindLosDiscountByIdRequest {
    id;
    tenantId;
}
exports.FindLosDiscountByIdRequest = FindLosDiscountByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindLosDiscountByIdRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindLosDiscountByIdRequest.prototype, "tenantId", void 0);
class FindLosDiscountByIdResponse {
    data;
}
exports.FindLosDiscountByIdResponse = FindLosDiscountByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LOS discount details', type: types_1.LosDiscount }),
    __metadata("design:type", types_1.LosDiscount)
], FindLosDiscountByIdResponse.prototype, "data", void 0);
// ========== CREATE ==========
class CreateLosDiscountRequest {
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
}
exports.CreateLosDiscountRequest = CreateLosDiscountRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room Type ID (null for hotel-wide discount)',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum nights to qualify', example: 3, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateLosDiscountRequest.prototype, "minNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum nights (optional)', example: 7, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateLosDiscountRequest.prototype, "maxNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Discount type',
        example: 'PERCENTAGE',
        enum: ['PERCENTAGE', 'FIXED'],
    }),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount value', example: 10, minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateLosDiscountRequest.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Stay 3+ nights, get 10% off' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND', default: 'VND' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Valid from date', example: '2025-01-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Valid to date', example: '2025-12-31' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLosDiscountRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true, default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateLosDiscountRequest.prototype, "isActive", void 0);
class CreateLosDiscountResponse {
    data;
    message;
}
exports.CreateLosDiscountResponse = CreateLosDiscountResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created LOS discount', type: types_1.LosDiscount }),
    __metadata("design:type", types_1.LosDiscount)
], CreateLosDiscountResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'LOS discount created successfully' }),
    __metadata("design:type", String)
], CreateLosDiscountResponse.prototype, "message", void 0);
// ========== UPDATE ==========
class UpdateLosDiscountRequest {
    id;
    tenantId;
    minNights;
    maxNights;
    discountType;
    discountValue;
    description;
    currency;
    validFrom;
    validTo;
    isActive;
}
exports.UpdateLosDiscountRequest = UpdateLosDiscountRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum nights', example: 3, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateLosDiscountRequest.prototype, "minNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum nights', example: 7, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateLosDiscountRequest.prototype, "maxNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount type', example: 'PERCENTAGE', enum: ['PERCENTAGE', 'FIXED'] }),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount value', example: 10, minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateLosDiscountRequest.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Stay 3+ nights, get 10% off' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Valid from date', example: '2025-01-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Valid to date', example: '2025-12-31' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLosDiscountRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateLosDiscountRequest.prototype, "isActive", void 0);
class UpdateLosDiscountResponse {
    data;
    message;
}
exports.UpdateLosDiscountResponse = UpdateLosDiscountResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated LOS discount', type: types_1.LosDiscount }),
    __metadata("design:type", types_1.LosDiscount)
], UpdateLosDiscountResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'LOS discount updated successfully' }),
    __metadata("design:type", String)
], UpdateLosDiscountResponse.prototype, "message", void 0);
// ========== DELETE ==========
class DeleteLosDiscountRequest {
    id;
    tenantId;
}
exports.DeleteLosDiscountRequest = DeleteLosDiscountRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteLosDiscountRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteLosDiscountRequest.prototype, "tenantId", void 0);
class DeleteLosDiscountResponse {
    message;
}
exports.DeleteLosDiscountResponse = DeleteLosDiscountResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'LOS discount deleted successfully' }),
    __metadata("design:type", String)
], DeleteLosDiscountResponse.prototype, "message", void 0);
//# sourceMappingURL=los-discounts.nats.js.map