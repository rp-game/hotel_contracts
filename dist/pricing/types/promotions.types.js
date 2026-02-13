"use strict";
/**
 * Promotions Types - Centralized Contracts
 *
 * IMPORTANT: These contracts are the SINGLE SOURCE OF TRUTH
 * - Based on database entity structure (promotion.entity.ts)
 * - Used by NATS handlers for microservices communication
 * - Used by API Gateway for REST endpoints
 * - Swagger documentation generated from @ApiProperty decorators
 *
 * @verified_structure_matches services/pricing-service/src/database/entities/promotion.entity.ts
 * @verified_date 2026-02-13
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
exports.PromotionsPaginatedResponseDto = exports.PromotionDto = exports.PromotionConditionsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Promotion conditions structure
 * Stored as JSONB in database
 */
class PromotionConditionsDto {
    minNights;
    minGuests;
    roomTypes;
    channels;
}
exports.PromotionConditionsDto = PromotionConditionsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum nights required for promotion to apply',
        example: 2,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionConditionsDto.prototype, "minNights", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum number of guests required',
        example: 2,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionConditionsDto.prototype, "minGuests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room type IDs this promotion applies to',
        type: [String],
        example: ['550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002']
    }),
    __metadata("design:type", Array)
], PromotionConditionsDto.prototype, "roomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Channel IDs this promotion applies to',
        type: [String],
        example: ['BOOKING_COM', 'EXPEDIA']
    }),
    __metadata("design:type", Array)
], PromotionConditionsDto.prototype, "channels", void 0);
/**
 * Promotion DTO
 * Matches database entity structure exactly
 * PLUS computed 'status' field added by service layer
 */
class PromotionDto {
    id;
    tenantId;
    hotelId;
    name;
    code;
    description;
    startDate;
    endDate;
    discountType;
    discountValue;
    applicableRoomTypes;
    applicableChannels;
    minimumStay;
    maximumStay;
    minimumAdvanceBookingDays;
    maximumAdvanceBookingDays;
    blackoutDates;
    usageLimit;
    usageCount;
    conditions;
    isActive;
    status;
    createdAt;
    updatedAt;
}
exports.PromotionDto = PromotionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promotion unique identifier',
        example: '550e8400-e29b-41d4-a716-446655440000'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '550e8400-e29b-41d4-a716-446655440001'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hotel ID',
        example: '550e8400-e29b-41d4-a716-446655440002'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promotion name',
        example: 'Early Bird Special',
        maxLength: 100
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promotion code (unique)',
        example: 'EARLYBIRD2025',
        maxLength: 50
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Promotion description',
        example: 'Book 30 days in advance and save 20%'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promotion start date (YYYY-MM-DD)',
        example: '2025-01-01',
        type: String
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promotion end date (YYYY-MM-DD)',
        example: '2025-12-31',
        type: String
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Discount type',
        enum: ['PERCENTAGE', 'FIXED'],
        example: 'PERCENTAGE'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Discount value (percentage or fixed amount)',
        example: 20,
        type: Number
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Room type IDs this promotion applies to (null = all room types)',
        type: [String],
        example: ['550e8400-e29b-41d4-a716-446655440003']
    }),
    __metadata("design:type", Array)
], PromotionDto.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Channel IDs this promotion applies to (null = all channels)',
        type: [String],
        example: ['BOOKING_COM', 'EXPEDIA']
    }),
    __metadata("design:type", Array)
], PromotionDto.prototype, "applicableChannels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum stay requirement in nights',
        example: 2,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "minimumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum stay requirement in nights',
        example: 7,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "maximumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum advance booking days required',
        example: 30,
        minimum: 0
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "minimumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Maximum advance booking days allowed',
        example: 365,
        minimum: 0
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "maximumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Blackout dates when promotion does not apply (YYYY-MM-DD)',
        type: [String],
        example: ['2025-12-25', '2025-12-31']
    }),
    __metadata("design:type", Array)
], PromotionDto.prototype, "blackoutDates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum number of times this promotion can be used (0 = unlimited)',
        example: 100,
        minimum: 0,
        default: 0
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "usageLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current usage count',
        example: 15,
        minimum: 0,
        default: 0
    }),
    __metadata("design:type", Number)
], PromotionDto.prototype, "usageCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Additional promotion conditions',
        type: () => PromotionConditionsDto
    }),
    __metadata("design:type", PromotionConditionsDto)
], PromotionDto.prototype, "conditions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether promotion is active',
        example: true,
        default: true
    }),
    __metadata("design:type", Boolean)
], PromotionDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Computed promotion status based on dates and isActive flag',
        enum: ['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING'],
        example: 'ACTIVE'
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
        type: String
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp (ISO 8601)',
        example: '2025-01-15T10:30:00.000Z',
        type: String
    }),
    __metadata("design:type", String)
], PromotionDto.prototype, "updatedAt", void 0);
/**
 * Paginated promotions response
 */
class PromotionsPaginatedResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.PromotionsPaginatedResponseDto = PromotionsPaginatedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of promotions',
        type: [PromotionDto]
    }),
    __metadata("design:type", Array)
], PromotionsPaginatedResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of promotions matching filter',
        example: 50
    }),
    __metadata("design:type", Number)
], PromotionsPaginatedResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current page number',
        example: 1,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionsPaginatedResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of items per page',
        example: 10,
        minimum: 1
    }),
    __metadata("design:type", Number)
], PromotionsPaginatedResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of pages',
        example: 5,
        minimum: 0
    }),
    __metadata("design:type", Number)
], PromotionsPaginatedResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=promotions.types.js.map