"use strict";
/**
 * Meal Plan Rates Types
 *
 * Shared types for meal plan pricing patterns.
 * Handles additional charges for different meal plan options.
 *
 * @updated 2026-02-12 - Converted to class with @ApiProperty for dual use (NATS + REST)
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
exports.MealPlanTypeDescriptions = exports.MealPlanRate = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Meal plan rate entity
 * Used for both NATS messages and REST API responses
 */
class MealPlanRate {
    id;
    tenantId;
    hotelId;
    roomTypeId;
    mealPlanType;
    description;
    additionalCharge;
    currency;
    isActive;
    createdAt;
    updatedAt;
}
exports.MealPlanRate = MealPlanRate;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate ID',
        example: '550e8400-e29b-41d4-a716-446655440098',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440002',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room Type ID',
        example: '550e8400-e29b-41d4-a716-446655440001',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan type',
        example: 'BB',
        enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "mealPlanType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of meal plan',
        example: 'Bed and Breakfast',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Additional charge for this meal plan',
        example: 150000,
        minimum: 0,
    }),
    __metadata("design:type", Number)
], MealPlanRate.prototype, "additionalCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'VND',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], MealPlanRate.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created at (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated at (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], MealPlanRate.prototype, "updatedAt", void 0);
/**
 * Meal plan type descriptions
 */
exports.MealPlanTypeDescriptions = {
    RO: 'Room Only',
    BB: 'Bed & Breakfast',
    HB: 'Half Board',
    FB: 'Full Board',
    AI: 'All Inclusive',
};
//# sourceMappingURL=meal-plan-rates.types.js.map