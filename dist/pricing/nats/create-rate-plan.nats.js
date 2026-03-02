"use strict";
/**
 * Create Rate Plan NATS Contract
 *
 * NATS Pattern: pricing.rate-plan.create
 * Handler: pricing-service
 * Called by: api-gateway
 *
 * @updated 2026-02-12 - Aligned with actual BASE/DERIVED implementation
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
exports.CreateRatePlanResponse = exports.CreateRatePlanRequest = exports.DerivationTypeEnum = exports.RatePlanTypeEnum = exports.CancellationPolicyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CancellationPolicyDto {
    type;
    deadlineHours;
    penaltyPercent;
    description;
}
exports.CancellationPolicyDto = CancellationPolicyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cancellation policy type',
        enum: ['FREE_CANCELLATION', 'PARTIAL_REFUND', 'NON_REFUNDABLE'],
        example: 'FREE_CANCELLATION',
    }),
    __metadata("design:type", String)
], CancellationPolicyDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hours before check-in for free cancellation',
        example: 24,
    }),
    __metadata("design:type", Number)
], CancellationPolicyDto.prototype, "deadlineHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Penalty percentage if cancelled after deadline',
        example: 50,
    }),
    __metadata("design:type", Number)
], CancellationPolicyDto.prototype, "penaltyPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Human-readable description',
        example: 'Free cancellation up to 24h before check-in',
    }),
    __metadata("design:type", String)
], CancellationPolicyDto.prototype, "description", void 0);
/**
 * Rate plan type enum - BASE or DERIVED
 */
var RatePlanTypeEnum;
(function (RatePlanTypeEnum) {
    RatePlanTypeEnum["BASE"] = "BASE";
    RatePlanTypeEnum["DERIVED"] = "DERIVED";
})(RatePlanTypeEnum || (exports.RatePlanTypeEnum = RatePlanTypeEnum = {}));
/**
 * Derivation type for DERIVED rate plans
 */
var DerivationTypeEnum;
(function (DerivationTypeEnum) {
    DerivationTypeEnum["PERCENTAGE"] = "PERCENTAGE";
    DerivationTypeEnum["AMOUNT"] = "AMOUNT";
})(DerivationTypeEnum || (exports.DerivationTypeEnum = DerivationTypeEnum = {}));
/**
 * NATS request to create a rate plan
 * Used for both NATS messages and REST API
 */
class CreateRatePlanRequest {
    tenantId;
    hotelId;
    name;
    type;
    parentRatePlanId;
    derivationType;
    derivationValue;
    description;
    cancellationPolicy;
    mealPlan;
    paymentType;
}
exports.CreateRatePlanRequest = CreateRatePlanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan name',
        example: 'Best Available Rate',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan type',
        enum: RatePlanTypeEnum,
        example: RatePlanTypeEnum.BASE,
    }),
    (0, class_validator_1.IsEnum)(RatePlanTypeEnum),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Parent rate plan ID (required for DERIVED types)',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "parentRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'How to calculate derived price from parent',
        enum: DerivationTypeEnum,
        example: DerivationTypeEnum.PERCENTAGE,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(DerivationTypeEnum),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10',
        example: 4,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRatePlanRequest.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional description of the rate plan',
        example: 'Standard rate plan for all channels',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cancellation policy details',
        type: () => CancellationPolicyDto,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateRatePlanRequest.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Meal plan included',
        enum: ['ROOM_ONLY', 'BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE'],
        example: 'BREAKFAST',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateRatePlanRequest.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment type requirement',
        enum: ['PAY_NOW', 'PAY_AT_HOTEL', 'DEPOSIT_REQUIRED'],
        example: 'PAY_NOW',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateRatePlanRequest.prototype, "paymentType", void 0);
/**
 * NATS response after creating rate plan
 */
class CreateRatePlanResponse {
    id;
    tenantId;
    hotelId;
    name;
    type;
    parentRatePlanId;
    derivationType;
    derivationValue;
    description;
    cancellationPolicy;
    mealPlan;
    paymentType;
    isActive;
    createdAt;
    updatedAt;
}
exports.CreateRatePlanResponse = CreateRatePlanResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created rate plan ID',
        example: '123e4567-e89b-12d3-a456-426614174010',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan name',
        example: 'Best Available Rate',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plan type',
        enum: RatePlanTypeEnum,
        example: RatePlanTypeEnum.BASE,
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Parent rate plan ID (for DERIVED types)',
        example: '123e4567-e89b-12d3-a456-426614174002',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "parentRatePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'How to calculate derived price from parent',
        enum: DerivationTypeEnum,
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation value',
        example: 4,
    }),
    __metadata("design:type", Number)
], CreateRatePlanResponse.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional description',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cancellation policy details',
        type: () => CancellationPolicyDto,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Meal plan included',
        enum: ['ROOM_ONLY', 'BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE'],
        example: 'BREAKFAST',
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Payment type requirement',
        enum: ['PAY_NOW', 'PAY_AT_HOTEL', 'DEPOSIT_REQUIRED'],
        example: 'PAY_NOW',
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the rate plan is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateRatePlanResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2025-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], CreateRatePlanResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=create-rate-plan.nats.js.map