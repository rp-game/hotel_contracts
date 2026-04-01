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
const class_transformer_1 = require("class-transformer");
const blackout_period_type_1 = require("../types/blackout-period.type");
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
    depositPercent;
    corporateAccountId;
    corporateAccountName;
    accountId;
    accountType;
    validFrom;
    validTo;
    blackoutPeriods;
    isAllotmentRate;
    performedById;
    performedByName;
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
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Deposit percentage required (when paymentType = DEPOSIT_REQUIRED). E.g. 50 = 50%',
        example: 50,
        minimum: 1,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateRatePlanRequest.prototype, "depositPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Corporate Account ID — if set, this rate plan is restricted to this corporate account. Only valid for DERIVED type.',
        example: '123e4567-e89b-12d3-a456-426614174099',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Corporate account name (denormalized for display). Set automatically from corporate account lookup.',
        example: 'Samsung Vietnam',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "corporateAccountName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Account ID — generic account reference for corporate, travel agent, or government rate plans. Only valid for DERIVED type.',
        example: '123e4567-e89b-12d3-a456-426614174099',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Account type — categorizes the rate plan for filtering. Only valid for DERIVED type.',
        enum: ['CORPORATE', 'TRAVEL_AGENT', 'GOVERNMENT'],
        example: 'CORPORATE',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid from date (YYYY-MM-DD). If null, always valid.',
        example: '2026-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid to date (YYYY-MM-DD). If null, no expiry.',
        example: '2026-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Blackout periods — date ranges when this rate plan is hidden from booking',
        type: [blackout_period_type_1.BlackoutPeriodDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => blackout_period_type_1.BlackoutPeriodDto),
    __metadata("design:type", Array)
], CreateRatePlanRequest.prototype, "blackoutPeriods", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Allotment/contract rate — only visible when partner has an active allotment',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRatePlanRequest.prototype, "isAllotmentRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User ID who performed this action (extracted from JWT token by API Gateway)',
        example: '550e8400-e29b-41d4-a716-446655440052',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "performedById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User name who performed this action (extracted from JWT token by API Gateway)',
        example: 'manager@grandhotelchain.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatePlanRequest.prototype, "performedByName", void 0);
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
    depositPercent;
    corporateAccountId;
    corporateAccountName;
    validFrom;
    validTo;
    blackoutPeriods;
    isActive;
    isAllotmentRate;
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
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Deposit percentage required (when paymentType = DEPOSIT_REQUIRED)',
        example: 50,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "depositPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Corporate Account ID — if set, this rate plan is restricted to this corporate account',
        example: '123e4567-e89b-12d3-a456-426614174099',
        type: String,
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "corporateAccountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Corporate account name (denormalized)',
        example: 'Samsung Vietnam',
        type: String,
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "corporateAccountName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid from date',
        example: '2026-01-01',
        type: String,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "validFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rate plan valid to date',
        example: '2026-12-31',
        type: String,
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "validTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Blackout periods',
        type: [blackout_period_type_1.BlackoutPeriodDto],
    }),
    __metadata("design:type", Object)
], CreateRatePlanResponse.prototype, "blackoutPeriods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the rate plan is active',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateRatePlanResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Allotment/contract rate — only visible when partner has an active allotment',
        example: false,
    }),
    __metadata("design:type", Boolean)
], CreateRatePlanResponse.prototype, "isAllotmentRate", void 0);
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