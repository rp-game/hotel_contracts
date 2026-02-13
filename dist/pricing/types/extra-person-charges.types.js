"use strict";
/**
 * Extra Person Charges Types
 *
 * Shared types for extra person pricing patterns.
 * Handles additional charges when occupancy exceeds standard capacity.
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
exports.GetExtraPersonChargesResponseDto = exports.UpdateExtraPersonChargeDto = exports.CreateExtraPersonChargeDto = exports.ChargeBreakdown = exports.ExtraPersonCharge = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Extra person charge configuration
 */
class ExtraPersonCharge {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    standardOccupancy;
    maxOccupancy;
    extraAdultCharge;
    extraChildCharge;
    childMaxAge;
    currency;
    isActive;
    createdAt;
    updatedAt;
}
exports.ExtraPersonCharge = ExtraPersonCharge;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Charge ID' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Standard occupancy (base price includes this many people)', example: 2, minimum: 1 }),
    __metadata("design:type", Number)
], ExtraPersonCharge.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum allowed occupancy', example: 4, minimum: 1 }),
    __metadata("design:type", Number)
], ExtraPersonCharge.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra charge per adult beyond standard occupancy', example: 200000, minimum: 0 }),
    __metadata("design:type", Number)
], ExtraPersonCharge.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Extra charge per child beyond standard occupancy', example: 100000, minimum: 0 }),
    __metadata("design:type", Number)
], ExtraPersonCharge.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Children are defined as under this age', example: 12, minimum: 1, maximum: 18 }),
    __metadata("design:type", Number)
], ExtraPersonCharge.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', example: 'VND' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is active', example: true }),
    __metadata("design:type", Boolean)
], ExtraPersonCharge.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at timestamp' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at timestamp' }),
    __metadata("design:type", String)
], ExtraPersonCharge.prototype, "updatedAt", void 0);
/**
 * Breakdown of charges for a specific booking
 */
class ChargeBreakdown {
    baseRate;
    extraAdults;
    extraChildren;
    extraAdultCharge;
    extraChildCharge;
    totalExtraCharges;
    totalRate;
    currency;
}
exports.ChargeBreakdown = ChargeBreakdown;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base rate' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "baseRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of extra adults' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "extraAdults", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of extra children' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "extraChildren", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Charge per extra adult' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Charge per extra child' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total extra charges' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "totalExtraCharges", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rate including extras' }),
    __metadata("design:type", Number)
], ChargeBreakdown.prototype, "totalRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], ChargeBreakdown.prototype, "currency", void 0);
// ============================================================================
// Request DTOs
// ============================================================================
/**
 * Create extra person charge request
 */
class CreateExtraPersonChargeDto {
    tenantId;
    hotelId;
    roomTypeId;
    standardOccupancy;
    maxOccupancy;
    extraAdultCharge;
    extraChildCharge;
    childMaxAge;
    currency;
    isActive;
}
exports.CreateExtraPersonChargeDto = CreateExtraPersonChargeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Standard occupancy (base price includes this many people)', example: 2, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateExtraPersonChargeDto.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum allowed occupancy', example: 4, minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateExtraPersonChargeDto.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Extra charge per adult beyond standard occupancy', example: 200000, minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateExtraPersonChargeDto.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Extra charge per child beyond standard occupancy', example: 100000, minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateExtraPersonChargeDto.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Children are defined as under this age', example: 12, default: 12, minimum: 1, maximum: 18 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(18),
    __metadata("design:type", Number)
], CreateExtraPersonChargeDto.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'VND', default: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true, default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateExtraPersonChargeDto.prototype, "isActive", void 0);
/**
 * Update extra person charge request
 */
class UpdateExtraPersonChargeDto {
    standardOccupancy;
    maxOccupancy;
    extraAdultCharge;
    extraChildCharge;
    childMaxAge;
    currency;
    isActive;
}
exports.UpdateExtraPersonChargeDto = UpdateExtraPersonChargeDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Standard occupancy', example: 2, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeDto.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum occupancy', example: 4, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeDto.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Extra adult charge', example: 200000, minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeDto.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Extra child charge', example: 100000, minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeDto.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Child max age', example: 12, minimum: 1, maximum: 18 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(18),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeDto.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExtraPersonChargeDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateExtraPersonChargeDto.prototype, "isActive", void 0);
// ============================================================================
// Response DTOs
// ============================================================================
/**
 * Get extra person charges response
 */
class GetExtraPersonChargesResponseDto {
    data;
}
exports.GetExtraPersonChargesResponseDto = GetExtraPersonChargesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of extra person charges', type: [ExtraPersonCharge] }),
    __metadata("design:type", Array)
], GetExtraPersonChargesResponseDto.prototype, "data", void 0);
//# sourceMappingURL=extra-person-charges.types.js.map