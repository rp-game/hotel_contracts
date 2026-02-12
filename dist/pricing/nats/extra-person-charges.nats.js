"use strict";
/**
 * Extra Person Charges NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
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
exports.DeleteExtraPersonChargeResponse = exports.DeleteExtraPersonChargeRequest = exports.UpdateExtraPersonChargeResponse = exports.UpdateExtraPersonChargeRequest = exports.CreateExtraPersonChargeResponse = exports.CreateExtraPersonChargeRequest = exports.FindExtraPersonChargeByIdResponse = exports.FindExtraPersonChargeByIdRequest = exports.FindAllExtraPersonChargesResponse = exports.ExtraPersonChargeResponse = exports.FindAllExtraPersonChargesRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// Find All Extra Person Charges
// ============================================================================
class FindAllExtraPersonChargesRequest {
    tenantId;
    hotelId;
}
exports.FindAllExtraPersonChargesRequest = FindAllExtraPersonChargesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllExtraPersonChargesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllExtraPersonChargesRequest.prototype, "hotelId", void 0);
class ExtraPersonChargeResponse {
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
exports.ExtraPersonChargeResponse = ExtraPersonChargeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra person charge ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174003',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Standard occupancy (base price includes this many people)',
        example: 2,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], ExtraPersonChargeResponse.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum allowed occupancy',
        example: 4,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], ExtraPersonChargeResponse.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra charge per adult beyond standard occupancy',
        example: 200000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ExtraPersonChargeResponse.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Extra charge per child beyond standard occupancy',
        example: 100000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], ExtraPersonChargeResponse.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Children are defined as under this age',
        example: 12,
        minimum: 1,
        maximum: 18,
    }),
    __metadata("design:type", Number)
], ExtraPersonChargeResponse.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'VND',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ExtraPersonChargeResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created at timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated at timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ExtraPersonChargeResponse.prototype, "updatedAt", void 0);
class FindAllExtraPersonChargesResponse {
    data;
}
exports.FindAllExtraPersonChargesResponse = FindAllExtraPersonChargesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of extra person charges',
        type: [ExtraPersonChargeResponse],
        isArray: true,
    }),
    __metadata("design:type", Array)
], FindAllExtraPersonChargesResponse.prototype, "data", void 0);
// ============================================================================
// Find Extra Person Charge By ID
// ============================================================================
class FindExtraPersonChargeByIdRequest {
    id;
    tenantId;
}
exports.FindExtraPersonChargeByIdRequest = FindExtraPersonChargeByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra person charge ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindExtraPersonChargeByIdRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindExtraPersonChargeByIdRequest.prototype, "tenantId", void 0);
class FindExtraPersonChargeByIdResponse {
    data;
}
exports.FindExtraPersonChargeByIdResponse = FindExtraPersonChargeByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra person charge data',
        type: ExtraPersonChargeResponse,
    }),
    __metadata("design:type", ExtraPersonChargeResponse)
], FindExtraPersonChargeByIdResponse.prototype, "data", void 0);
// ============================================================================
// Create Extra Person Charge
// ============================================================================
class CreateExtraPersonChargeRequest {
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
exports.CreateExtraPersonChargeRequest = CreateExtraPersonChargeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '123e4567-e89b-12d3-a456-426614174003',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Standard occupancy (base price includes this many people)',
        example: 2,
        minimum: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateExtraPersonChargeRequest.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum allowed occupancy',
        example: 4,
        minimum: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateExtraPersonChargeRequest.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra charge per adult beyond standard occupancy',
        example: 200000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateExtraPersonChargeRequest.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Extra charge per child beyond standard occupancy',
        example: 100000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateExtraPersonChargeRequest.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Children are defined as under this age',
        example: 12,
        default: 12,
        minimum: 1,
        maximum: 18,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(18),
    __metadata("design:type", Number)
], CreateExtraPersonChargeRequest.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency code',
        example: 'VND',
        default: 'VND',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExtraPersonChargeRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is active',
        example: true,
        default: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateExtraPersonChargeRequest.prototype, "isActive", void 0);
class CreateExtraPersonChargeResponse {
    data;
    message;
}
exports.CreateExtraPersonChargeResponse = CreateExtraPersonChargeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created extra person charge',
        type: ExtraPersonChargeResponse,
    }),
    __metadata("design:type", ExtraPersonChargeResponse)
], CreateExtraPersonChargeResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Extra person charge created successfully',
    }),
    __metadata("design:type", String)
], CreateExtraPersonChargeResponse.prototype, "message", void 0);
// ============================================================================
// Update Extra Person Charge
// ============================================================================
class UpdateExtraPersonChargeRequest {
    id;
    tenantId;
    standardOccupancy;
    maxOccupancy;
    extraAdultCharge;
    extraChildCharge;
    childMaxAge;
    currency;
    isActive;
}
exports.UpdateExtraPersonChargeRequest = UpdateExtraPersonChargeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra person charge ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateExtraPersonChargeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateExtraPersonChargeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Standard occupancy',
        example: 2,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeRequest.prototype, "standardOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum occupancy',
        example: 4,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeRequest.prototype, "maxOccupancy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Extra adult charge',
        example: 200000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeRequest.prototype, "extraAdultCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Extra child charge',
        example: 100000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeRequest.prototype, "extraChildCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Child max age',
        example: 12,
        minimum: 1,
        maximum: 18,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(18),
    __metadata("design:type", Number)
], UpdateExtraPersonChargeRequest.prototype, "childMaxAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Currency code',
        example: 'VND',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExtraPersonChargeRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is active',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateExtraPersonChargeRequest.prototype, "isActive", void 0);
class UpdateExtraPersonChargeResponse {
    data;
    message;
}
exports.UpdateExtraPersonChargeResponse = UpdateExtraPersonChargeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated extra person charge',
        type: ExtraPersonChargeResponse,
    }),
    __metadata("design:type", ExtraPersonChargeResponse)
], UpdateExtraPersonChargeResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Extra person charge updated successfully',
    }),
    __metadata("design:type", String)
], UpdateExtraPersonChargeResponse.prototype, "message", void 0);
// ============================================================================
// Delete Extra Person Charge
// ============================================================================
class DeleteExtraPersonChargeRequest {
    id;
    tenantId;
}
exports.DeleteExtraPersonChargeRequest = DeleteExtraPersonChargeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extra person charge ID',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteExtraPersonChargeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteExtraPersonChargeRequest.prototype, "tenantId", void 0);
class DeleteExtraPersonChargeResponse {
    message;
}
exports.DeleteExtraPersonChargeResponse = DeleteExtraPersonChargeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Extra person charge deleted successfully',
    }),
    __metadata("design:type", String)
], DeleteExtraPersonChargeResponse.prototype, "message", void 0);
//# sourceMappingURL=extra-person-charges.nats.js.map