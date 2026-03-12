"use strict";
/**
 * Room Type List & Detail NATS Contracts
 *
 * Patterns:
 *   inventory.room-types.findAll — list all active room types (no availability check)
 *   inventory.room-types.findOne — get single room type detail
 *
 * Price = basePrice with rate plan adjustment applied inline (no pricing-service call).
 *
 * Handler: inventory-service
 * Called by: api-gateway, booking UI
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
exports.ListRoomTypesResponse = exports.RoomTypeListItem = exports.RatePlanSummaryDto = exports.GetRoomTypeRequest = exports.ListRoomTypesRequest = exports.CancellationPolicySummaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var room_type_search_nats_1 = require("./room-type-search.nats");
Object.defineProperty(exports, "CancellationPolicySummaryDto", { enumerable: true, get: function () { return room_type_search_nats_1.CancellationPolicySummaryDto; } });
// ============================================================================
// REQUEST
// ============================================================================
class ListRoomTypesRequest {
    tenantId;
    hotelId;
    page;
    limit;
}
exports.ListRoomTypesRequest = ListRoomTypesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRoomTypesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListRoomTypesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-based)', example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ListRoomTypesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', example: 20, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ListRoomTypesRequest.prototype, "limit", void 0);
class GetRoomTypeRequest {
    id;
    tenantId;
    hotelId;
}
exports.GetRoomTypeRequest = GetRoomTypeRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetRoomTypeRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetRoomTypeRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetRoomTypeRequest.prototype, "hotelId", void 0);
// ============================================================================
// RESPONSE — nested types
// ============================================================================
class RatePlanSummaryDto {
    ratePlanId;
    ratePlanName;
    planType;
    derivationType;
    derivationValue;
    mealPlan;
    paymentType;
    cancellationPolicy;
    pricePerUnit;
    taxPerUnit;
    grossPerUnit;
}
exports.RatePlanSummaryDto = RatePlanSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID', example: 'uuid' }),
    __metadata("design:type", String)
], RatePlanSummaryDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name', example: 'Best Available Rate' }),
    __metadata("design:type", String)
], RatePlanSummaryDto.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan type', example: 'BASE', enum: ['BASE', 'DERIVED'] }),
    __metadata("design:type", String)
], RatePlanSummaryDto.prototype, "planType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation type for DERIVED plans',
        example: 'PERCENTAGE',
        enum: ['PERCENTAGE', 'AMOUNT'],
    }),
    __metadata("design:type", String)
], RatePlanSummaryDto.prototype, "derivationType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Derivation value (percentage or fixed amount)',
        example: 10,
    }),
    __metadata("design:type", Number)
], RatePlanSummaryDto.prototype, "derivationValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan included',
        example: 'BREAKFAST',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanSummaryDto.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment type',
        example: 'PAY_NOW',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanSummaryDto.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cancellation policy',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanSummaryDto.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price per unit — basePrice with rate plan adjustment applied (net, before tax)',
        example: 1100000,
    }),
    __metadata("design:type", Number)
], RatePlanSummaryDto.prototype, "pricePerUnit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount per unit (service charge + VAT)', example: 147620 }),
    __metadata("design:type", Number)
], RatePlanSummaryDto.prototype, "taxPerUnit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gross price per unit (pricePerUnit + taxPerUnit)', example: 1247620 }),
    __metadata("design:type", Number)
], RatePlanSummaryDto.prototype, "grossPerUnit", void 0);
class RoomTypeListItem {
    id;
    name;
    description;
    capacity;
    numberOfBeds;
    basePrice;
    amenities;
    images;
    ratePlans;
}
exports.RoomTypeListItem = RoomTypeListItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: 'uuid' }),
    __metadata("design:type", String)
], RoomTypeListItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name', example: 'Deluxe Room' }),
    __metadata("design:type", String)
], RoomTypeListItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type description', nullable: true }),
    __metadata("design:type", Object)
], RoomTypeListItem.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum guest capacity', example: 2 }),
    __metadata("design:type", Number)
], RoomTypeListItem.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of beds', example: 1 }),
    __metadata("design:type", Number)
], RoomTypeListItem.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price from room type entity', example: 1000000 }),
    __metadata("design:type", Number)
], RoomTypeListItem.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of amenities',
        type: [String],
        example: ['WiFi', 'Air Conditioning'],
    }),
    __metadata("design:type", Array)
], RoomTypeListItem.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type images (URLs)',
        type: [String],
    }),
    __metadata("design:type", Array)
], RoomTypeListItem.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rate plans with adjusted price',
        type: [RatePlanSummaryDto],
    }),
    __metadata("design:type", Array)
], RoomTypeListItem.prototype, "ratePlans", void 0);
class ListRoomTypesResponse {
    roomTypes;
    total;
    page;
    limit;
}
exports.ListRoomTypesResponse = ListRoomTypesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of active room types with rate plans',
        type: [RoomTypeListItem],
    }),
    __metadata("design:type", Array)
], ListRoomTypesResponse.prototype, "roomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of room types', example: 5 }),
    __metadata("design:type", Number)
], ListRoomTypesResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page (1-based)', example: 1 }),
    __metadata("design:type", Number)
], ListRoomTypesResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page', example: 20 }),
    __metadata("design:type", Number)
], ListRoomTypesResponse.prototype, "limit", void 0);
//# sourceMappingURL=room-type-list.nats.js.map