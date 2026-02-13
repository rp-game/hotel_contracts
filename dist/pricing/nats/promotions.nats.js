"use strict";
/**
 * Promotions NATS Contracts - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for NATS messaging
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway NATS clients
 * - All classes have validators for runtime safety
 *
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
exports.DeletePromotionResponse = exports.ValidatePromotionResponse = exports.ValidatePromotionRequest = exports.DeletePromotionRequest = exports.UpdatePromotionRequest = exports.CreatePromotionRequest = exports.GetPromotionsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../types");
// ============================================================================
// Query/Request DTOs
// ============================================================================
/**
 * Get promotions request with pagination and filtering
 */
class GetPromotionsRequest {
    tenantId;
    hotelId;
    roomTypeId;
    checkIn;
    checkOut;
    promoCode;
    status;
    isActive;
    discountType;
    search;
    page;
    limit;
}
exports.GetPromotionsRequest = GetPromotionsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by promotion code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "promoCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by promotion status',
        enum: ['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING']
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE', 'EXPIRED', 'UPCOMING']),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by isActive flag' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], GetPromotionsRequest.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by discount type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by name or code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetPromotionsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', minimum: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetPromotionsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetPromotionsRequest.prototype, "limit", void 0);
/**
 * Create promotion request
 */
class CreatePromotionRequest {
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
    conditions;
    isActive;
}
exports.CreatePromotionRequest = CreatePromotionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion name', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion code (unique)', maxLength: 50 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount type', enum: ['PERCENTAGE', 'FIXED'] }),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], CreatePromotionRequest.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount value' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable room type IDs', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(undefined, { each: true }),
    __metadata("design:type", Array)
], CreatePromotionRequest.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable channels', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePromotionRequest.prototype, "applicableChannels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum stay in nights', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "minimumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum stay in nights', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "maximumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum advance booking days', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "minimumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum advance booking days', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "maximumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Blackout dates (YYYY-MM-DD)', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePromotionRequest.prototype, "blackoutDates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage limit (0 = unlimited)', minimum: 0, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePromotionRequest.prototype, "usageLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional conditions', type: () => types_1.PromotionConditionsDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => types_1.PromotionConditionsDto),
    __metadata("design:type", types_1.PromotionConditionsDto)
], CreatePromotionRequest.prototype, "conditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Active status', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePromotionRequest.prototype, "isActive", void 0);
/**
 * Update promotion request
 * All fields optional except ID
 */
class UpdatePromotionRequest {
    id;
    tenantId;
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
    conditions;
    isActive;
}
exports.UpdatePromotionRequest = UpdatePromotionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion ID to update' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated name', maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated code', maxLength: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated discount type', enum: ['PERCENTAGE', 'FIXED'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PERCENTAGE', 'FIXED']),
    __metadata("design:type", String)
], UpdatePromotionRequest.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated discount value', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated applicable room types', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)(undefined, { each: true }),
    __metadata("design:type", Array)
], UpdatePromotionRequest.prototype, "applicableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated applicable channels', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdatePromotionRequest.prototype, "applicableChannels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated minimum stay', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "minimumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated maximum stay', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "maximumStay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated minimum advance booking days', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "minimumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated maximum advance booking days', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "maximumAdvanceBookingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated blackout dates (YYYY-MM-DD)', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdatePromotionRequest.prototype, "blackoutDates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated usage limit', minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePromotionRequest.prototype, "usageLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated conditions', type: () => types_1.PromotionConditionsDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => types_1.PromotionConditionsDto),
    __metadata("design:type", types_1.PromotionConditionsDto)
], UpdatePromotionRequest.prototype, "conditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated active status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePromotionRequest.prototype, "isActive", void 0);
/**
 * Delete promotion request
 */
class DeletePromotionRequest {
    id;
    tenantId;
}
exports.DeletePromotionRequest = DeletePromotionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion ID to delete' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeletePromotionRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeletePromotionRequest.prototype, "tenantId", void 0);
/**
 * Validate promotion code request
 */
class ValidatePromotionRequest {
    tenantId;
    hotelId;
    promotionCode;
    roomTypeId;
    checkIn;
    checkOut;
    bookingAmount;
}
exports.ValidatePromotionRequest = ValidatePromotionRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion code to validate' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "promotionCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID for validation' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ValidatePromotionRequest.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking amount to apply promotion to' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ValidatePromotionRequest.prototype, "bookingAmount", void 0);
/**
 * Validate promotion response
 */
class ValidatePromotionResponse {
    isValid;
    promotionId;
    promoCode;
    discountType;
    discountValue;
    message;
    applicableAmount;
    finalAmount;
}
exports.ValidatePromotionResponse = ValidatePromotionResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether promotion is valid' }),
    __metadata("design:type", Boolean)
], ValidatePromotionResponse.prototype, "isValid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Promotion ID if valid' }),
    __metadata("design:type", String)
], ValidatePromotionResponse.prototype, "promotionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion code' }),
    __metadata("design:type", String)
], ValidatePromotionResponse.prototype, "promoCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount type if valid', enum: ['PERCENTAGE', 'FIXED'] }),
    __metadata("design:type", String)
], ValidatePromotionResponse.prototype, "discountType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount value if valid' }),
    __metadata("design:type", Number)
], ValidatePromotionResponse.prototype, "discountValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Message explaining validation result' }),
    __metadata("design:type", String)
], ValidatePromotionResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Applicable discount amount' }),
    __metadata("design:type", Number)
], ValidatePromotionResponse.prototype, "applicableAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Final amount after discount' }),
    __metadata("design:type", Number)
], ValidatePromotionResponse.prototype, "finalAmount", void 0);
/**
 * Delete promotion response
 */
class DeletePromotionResponse {
    success;
    message;
}
exports.DeletePromotionResponse = DeletePromotionResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether deletion was successful' }),
    __metadata("design:type", Boolean)
], DeletePromotionResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Message about deletion' }),
    __metadata("design:type", String)
], DeletePromotionResponse.prototype, "message", void 0);
//# sourceMappingURL=promotions.nats.js.map