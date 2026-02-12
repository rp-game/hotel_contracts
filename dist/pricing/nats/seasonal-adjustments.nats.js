"use strict";
/**
 * Seasonal Adjustments NATS Contracts (5 patterns)
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
exports.DeleteSeasonalAdjustmentResponse = exports.DeleteSeasonalAdjustmentRequest = exports.UpdateSeasonalAdjustmentResponse = exports.UpdateSeasonalAdjustmentRequest = exports.UpdateSeasonalAdjustmentDto = exports.CreateSeasonalAdjustmentResponse = exports.CreateSeasonalAdjustmentRequest = exports.FindSeasonalAdjustmentByIdResponse = exports.FindSeasonalAdjustmentByIdRequest = exports.FindAllSeasonalAdjustmentsResponse = exports.FindAllSeasonalAdjustmentsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../types");
// ============================================================================
// FIND ALL
// ============================================================================
class FindAllSeasonalAdjustmentsRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindAllSeasonalAdjustmentsRequest = FindAllSeasonalAdjustmentsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllSeasonalAdjustmentsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllSeasonalAdjustmentsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional filter by room type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllSeasonalAdjustmentsRequest.prototype, "roomTypeId", void 0);
class FindAllSeasonalAdjustmentsResponse {
    data;
}
exports.FindAllSeasonalAdjustmentsResponse = FindAllSeasonalAdjustmentsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of seasonal adjustments', type: [types_1.SeasonalAdjustment] }),
    __metadata("design:type", Array)
], FindAllSeasonalAdjustmentsResponse.prototype, "data", void 0);
// ============================================================================
// FIND BY ID
// ============================================================================
class FindSeasonalAdjustmentByIdRequest {
    id;
    tenantId;
}
exports.FindSeasonalAdjustmentByIdRequest = FindSeasonalAdjustmentByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSeasonalAdjustmentByIdRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindSeasonalAdjustmentByIdRequest.prototype, "tenantId", void 0);
class FindSeasonalAdjustmentByIdResponse {
    data;
}
exports.FindSeasonalAdjustmentByIdResponse = FindSeasonalAdjustmentByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment details', type: types_1.SeasonalAdjustment }),
    __metadata("design:type", types_1.SeasonalAdjustment)
], FindSeasonalAdjustmentByIdResponse.prototype, "data", void 0);
// ============================================================================
// CREATE
// ============================================================================
class CreateSeasonalAdjustmentRequest {
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
}
exports.CreateSeasonalAdjustmentRequest = CreateSeasonalAdjustmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Season name', example: 'Summer 2025', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "seasonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE'
    }),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adjustment value (percentage or fixed amount)',
        example: 20,
        minimum: -100,
        maximum: 1000
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-100),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], CreateSeasonalAdjustmentRequest.prototype, "adjustmentValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Peak summer season pricing' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true, default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateSeasonalAdjustmentRequest.prototype, "isActive", void 0);
class CreateSeasonalAdjustmentResponse {
    data;
    message;
}
exports.CreateSeasonalAdjustmentResponse = CreateSeasonalAdjustmentResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created seasonal adjustment', type: types_1.SeasonalAdjustment }),
    __metadata("design:type", types_1.SeasonalAdjustment)
], CreateSeasonalAdjustmentResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Seasonal adjustment created successfully' }),
    __metadata("design:type", String)
], CreateSeasonalAdjustmentResponse.prototype, "message", void 0);
// ============================================================================
// UPDATE
// ============================================================================
/**
 * Update DTO - nested structure for NATS message
 * Contains only the fields that can be updated
 */
class UpdateSeasonalAdjustmentDto {
    seasonName;
    startDate;
    endDate;
    adjustmentType;
    adjustmentValue;
    description;
    isActive;
}
exports.UpdateSeasonalAdjustmentDto = UpdateSeasonalAdjustmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Season name', example: 'Summer 2025', maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentDto.prototype, "seasonName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Adjustment type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentDto.prototype, "adjustmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Adjustment value (percentage or fixed amount)',
        example: 20,
        minimum: -100,
        maximum: 1000
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(-100),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], UpdateSeasonalAdjustmentDto.prototype, "adjustmentValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Peak summer season pricing' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Is active', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateSeasonalAdjustmentDto.prototype, "isActive", void 0);
/**
 * Update request - contains ID, tenantId, and nested dto
 * This is the NATS message structure
 */
class UpdateSeasonalAdjustmentRequest {
    id;
    tenantId;
    dto;
}
exports.UpdateSeasonalAdjustmentRequest = UpdateSeasonalAdjustmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data', type: UpdateSeasonalAdjustmentDto }),
    (0, class_transformer_1.Type)(() => UpdateSeasonalAdjustmentDto),
    __metadata("design:type", UpdateSeasonalAdjustmentDto)
], UpdateSeasonalAdjustmentRequest.prototype, "dto", void 0);
class UpdateSeasonalAdjustmentResponse {
    data;
    message;
}
exports.UpdateSeasonalAdjustmentResponse = UpdateSeasonalAdjustmentResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated seasonal adjustment', type: types_1.SeasonalAdjustment }),
    __metadata("design:type", types_1.SeasonalAdjustment)
], UpdateSeasonalAdjustmentResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Seasonal adjustment updated successfully' }),
    __metadata("design:type", String)
], UpdateSeasonalAdjustmentResponse.prototype, "message", void 0);
// ============================================================================
// DELETE
// ============================================================================
class DeleteSeasonalAdjustmentRequest {
    id;
    tenantId;
}
exports.DeleteSeasonalAdjustmentRequest = DeleteSeasonalAdjustmentRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSeasonalAdjustmentRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteSeasonalAdjustmentRequest.prototype, "tenantId", void 0);
class DeleteSeasonalAdjustmentResponse {
    message;
}
exports.DeleteSeasonalAdjustmentResponse = DeleteSeasonalAdjustmentResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Seasonal adjustment deleted successfully' }),
    __metadata("design:type", String)
], DeleteSeasonalAdjustmentResponse.prototype, "message", void 0);
//# sourceMappingURL=seasonal-adjustments.nats.js.map