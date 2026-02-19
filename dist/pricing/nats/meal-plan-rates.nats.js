"use strict";
/**
 * Meal Plan Rates NATS Contracts (5 patterns)
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
exports.DeleteMealPlanRateResponse = exports.DeleteMealPlanRateRequest = exports.UpdateMealPlanRateResponse = exports.UpdateMealPlanRateRequest = exports.CreateMealPlanRateResponse = exports.CreateMealPlanRateRequest = exports.FindMealPlanRateByIdResponse = exports.FindMealPlanRateByIdRequest = exports.FindAllMealPlanRatesResponse = exports.FindAllMealPlanRatesRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const types_1 = require("../types");
// ============================================================================
// Find All Meal Plan Rates
// ============================================================================
class FindAllMealPlanRatesRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindAllMealPlanRatesRequest = FindAllMealPlanRatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllMealPlanRatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllMealPlanRatesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional: Filter by room type ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllMealPlanRatesRequest.prototype, "roomTypeId", void 0);
class FindAllMealPlanRatesResponse {
    data;
}
exports.FindAllMealPlanRatesResponse = FindAllMealPlanRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of meal plan rates',
        type: [types_1.MealPlanRate],
    }),
    __metadata("design:type", Array)
], FindAllMealPlanRatesResponse.prototype, "data", void 0);
// ============================================================================
// Find Meal Plan Rate By ID
// ============================================================================
class FindMealPlanRateByIdRequest {
    id;
    tenantId;
}
exports.FindMealPlanRateByIdRequest = FindMealPlanRateByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan rate ID',
        example: '550e8400-e29b-41d4-a716-446655440098',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindMealPlanRateByIdRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindMealPlanRateByIdRequest.prototype, "tenantId", void 0);
class FindMealPlanRateByIdResponse {
    data;
}
exports.FindMealPlanRateByIdResponse = FindMealPlanRateByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan rate details',
        type: types_1.MealPlanRate,
    }),
    __metadata("design:type", types_1.MealPlanRate)
], FindMealPlanRateByIdResponse.prototype, "data", void 0);
// ============================================================================
// Create Meal Plan Rate
// ============================================================================
class CreateMealPlanRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
    mealPlanType;
    additionalCharge;
    currency;
    description;
    isActive;
}
exports.CreateMealPlanRateRequest = CreateMealPlanRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan type',
        example: 'BB',
        enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['RO', 'BB', 'HB', 'FB', 'AI']),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "mealPlanType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Additional charge for this meal plan',
        example: 150000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateMealPlanRateRequest.prototype, "additionalCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'VND',
        default: 'VND',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of meal plan',
        example: 'Bed and Breakfast',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMealPlanRateRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is active',
        example: true,
        default: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateMealPlanRateRequest.prototype, "isActive", void 0);
class CreateMealPlanRateResponse {
    data;
    message;
}
exports.CreateMealPlanRateResponse = CreateMealPlanRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created meal plan rate',
        type: types_1.MealPlanRate,
    }),
    __metadata("design:type", types_1.MealPlanRate)
], CreateMealPlanRateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Meal plan rate created successfully',
    }),
    __metadata("design:type", String)
], CreateMealPlanRateResponse.prototype, "message", void 0);
// ============================================================================
// Update Meal Plan Rate
// ============================================================================
class UpdateMealPlanRateRequest {
    id;
    tenantId;
    mealPlanType;
    additionalCharge;
    description;
    isActive;
}
exports.UpdateMealPlanRateRequest = UpdateMealPlanRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan rate ID',
        example: '550e8400-e29b-41d4-a716-446655440098',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMealPlanRateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMealPlanRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Meal plan type',
        example: 'BB',
        enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['RO', 'BB', 'HB', 'FB', 'AI']),
    __metadata("design:type", String)
], UpdateMealPlanRateRequest.prototype, "mealPlanType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Additional charge',
        example: 150000,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateMealPlanRateRequest.prototype, "additionalCharge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description',
        example: 'Bed and Breakfast',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMealPlanRateRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is active',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateMealPlanRateRequest.prototype, "isActive", void 0);
class UpdateMealPlanRateResponse {
    data;
    message;
}
exports.UpdateMealPlanRateResponse = UpdateMealPlanRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated meal plan rate',
        type: types_1.MealPlanRate,
    }),
    __metadata("design:type", types_1.MealPlanRate)
], UpdateMealPlanRateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Meal plan rate updated successfully',
    }),
    __metadata("design:type", String)
], UpdateMealPlanRateResponse.prototype, "message", void 0);
// ============================================================================
// Delete Meal Plan Rate
// ============================================================================
class DeleteMealPlanRateRequest {
    id;
    tenantId;
}
exports.DeleteMealPlanRateRequest = DeleteMealPlanRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan rate ID',
        example: '550e8400-e29b-41d4-a716-446655440098',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeleteMealPlanRateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeleteMealPlanRateRequest.prototype, "tenantId", void 0);
class DeleteMealPlanRateResponse {
    message;
}
exports.DeleteMealPlanRateResponse = DeleteMealPlanRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Meal plan rate deleted successfully',
    }),
    __metadata("design:type", String)
], DeleteMealPlanRateResponse.prototype, "message", void 0);
//# sourceMappingURL=meal-plan-rates.nats.js.map