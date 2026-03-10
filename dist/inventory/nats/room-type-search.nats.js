"use strict";
/**
 * Room Type Search NATS Contract
 *
 * Pattern: inventory.room-types.search
 *
 * Returns room types with availability count + rate plans + pricing
 * for a given booking type and time range.
 *
 * Handler: inventory-service
 * Called by: api-gateway, frontend-facing services
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
exports.SearchRoomTypesResponse = exports.RoomTypeSearchResult = exports.RatePlanPricingDetail = exports.CancellationPolicySummaryDto = exports.PriceBreakdownDto = exports.SearchRoomTypesRequest = exports.SearchBookingType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var SearchBookingType;
(function (SearchBookingType) {
    SearchBookingType["OVERNIGHT"] = "OVERNIGHT";
    SearchBookingType["HOURLY"] = "HOURLY";
    SearchBookingType["DAY_USE"] = "DAY_USE";
})(SearchBookingType || (exports.SearchBookingType = SearchBookingType = {}));
// ============================================================================
// REQUEST
// ============================================================================
class SearchRoomTypesRequest {
    tenantId;
    hotelId;
    hotelIds;
    bookingType;
    // --- OVERNIGHT ---
    startDate;
    endDate;
    // --- HOURLY / DAY_USE ---
    date;
    startTime;
    endTime;
    // --- FILTERS ---
    capacity;
    amenities;
    // --- PAGINATION ---
    page;
    limit;
}
exports.SearchRoomTypesRequest = SearchRoomTypesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (single hotel search)', example: 'uuid' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.hotelId !== undefined && o.hotelId !== ''),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hotel IDs (multi-hotel / chain search)',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], SearchRoomTypesRequest.prototype, "hotelIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking type',
        enum: SearchBookingType,
        example: SearchBookingType.OVERNIGHT,
    }),
    (0, class_validator_1.IsEnum)(SearchBookingType),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "bookingType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Check-in date (OVERNIGHT). Format: YYYY-MM-DD',
        example: '2026-03-10',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Check-out date (OVERNIGHT). Format: YYYY-MM-DD',
        example: '2026-03-12',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date for hourly/day-use booking. Format: YYYY-MM-DD',
        example: '2026-03-10',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Start time for hourly/day-use. Format: HH:mm',
        example: '09:00',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'End time for hourly/day-use. Format: HH:mm',
        example: '13:00',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchRoomTypesRequest.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Minimum room capacity (number of guests)',
        example: 2,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchRoomTypesRequest.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Required amenities filter',
        example: ['WiFi', 'Air Conditioning'],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SearchRoomTypesRequest.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-based)', example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchRoomTypesRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', example: 20, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchRoomTypesRequest.prototype, "limit", void 0);
// ============================================================================
// RESPONSE — nested types
// ============================================================================
class PriceBreakdownDto {
    baseAmount;
    seasonalAdjustment;
    occupancyAdjustment;
    lengthOfStayDiscount;
    promotionDiscount;
    taxes;
}
exports.PriceBreakdownDto = PriceBreakdownDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base amount before adjustments', example: 1000000 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seasonal adjustment (+/-)', example: 50000 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "seasonalAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy-based adjustment (+/-)', example: 0 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "occupancyAdjustment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Length-of-stay discount (-)', example: -50000 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "lengthOfStayDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promotion/promo code discount (-)', example: 0 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "promotionDiscount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Taxes included in total', example: 100000 }),
    __metadata("design:type", Number)
], PriceBreakdownDto.prototype, "taxes", void 0);
class CancellationPolicySummaryDto {
    type;
    deadlineHours;
    penaltyPercent;
    description;
}
exports.CancellationPolicySummaryDto = CancellationPolicySummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Policy type',
        enum: ['FREE_CANCELLATION', 'PARTIAL_REFUND', 'NON_REFUNDABLE'],
        example: 'FREE_CANCELLATION',
    }),
    __metadata("design:type", String)
], CancellationPolicySummaryDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hours before check-in deadline for free cancellation',
        example: 24,
    }),
    __metadata("design:type", Number)
], CancellationPolicySummaryDto.prototype, "deadlineHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Penalty percentage after deadline',
        example: 50,
    }),
    __metadata("design:type", Number)
], CancellationPolicySummaryDto.prototype, "penaltyPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Human-readable description' }),
    __metadata("design:type", String)
], CancellationPolicySummaryDto.prototype, "description", void 0);
class RatePlanPricingDetail {
    ratePlanId;
    ratePlanName;
    mealPlan;
    paymentType;
    cancellationPolicy;
    pricePerUnit;
    totalPrice;
    numberOfUnits;
    breakdown;
}
exports.RatePlanPricingDetail = RatePlanPricingDetail;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan ID', example: 'uuid' }),
    __metadata("design:type", String)
], RatePlanPricingDetail.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate plan name', example: 'Best Available Rate' }),
    __metadata("design:type", String)
], RatePlanPricingDetail.prototype, "ratePlanName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Meal plan included',
        example: 'BREAKFAST',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanPricingDetail.prototype, "mealPlan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment type',
        example: 'PAY_NOW',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanPricingDetail.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cancellation policy',
        type: CancellationPolicySummaryDto,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RatePlanPricingDetail.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price per unit (per night for OVERNIGHT, per hour for HOURLY)',
        example: 1100000,
    }),
    __metadata("design:type", Number)
], RatePlanPricingDetail.prototype, "pricePerUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price for the booking', example: 2200000 }),
    __metadata("design:type", Number)
], RatePlanPricingDetail.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of units (nights for OVERNIGHT, hours for HOURLY)',
        example: 2,
    }),
    __metadata("design:type", Number)
], RatePlanPricingDetail.prototype, "numberOfUnits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed price breakdown',
        type: PriceBreakdownDto,
    }),
    __metadata("design:type", PriceBreakdownDto)
], RatePlanPricingDetail.prototype, "breakdown", void 0);
class RoomTypeSearchResult {
    id;
    hotelId;
    hotelName;
    hotelCity;
    name;
    description;
    capacity;
    numberOfBeds;
    amenities;
    images;
    basePrice;
    availableCount;
    ratePlans;
}
exports.RoomTypeSearchResult = RoomTypeSearchResult;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', example: 'uuid' }),
    __metadata("design:type", String)
], RoomTypeSearchResult.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (populated in multi-hotel search)' }),
    __metadata("design:type", String)
], RoomTypeSearchResult.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel name (populated in multi-hotel search)' }),
    __metadata("design:type", String)
], RoomTypeSearchResult.prototype, "hotelName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel city (populated in multi-hotel search)' }),
    __metadata("design:type", String)
], RoomTypeSearchResult.prototype, "hotelCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name', example: 'Deluxe Room' }),
    __metadata("design:type", String)
], RoomTypeSearchResult.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type description' }),
    __metadata("design:type", Object)
], RoomTypeSearchResult.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum guest capacity', example: 2 }),
    __metadata("design:type", Number)
], RoomTypeSearchResult.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of beds', example: 1 }),
    __metadata("design:type", Number)
], RoomTypeSearchResult.prototype, "numberOfBeds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of amenities',
        type: [String],
        example: ['WiFi', 'Air Conditioning', 'Mini Bar'],
    }),
    __metadata("design:type", Array)
], RoomTypeSearchResult.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Room type images (URLs)',
        type: [String],
    }),
    __metadata("design:type", Array)
], RoomTypeSearchResult.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Base price per night (fallback when no rate plans)',
        example: 1000000,
    }),
    __metadata("design:type", Number)
], RoomTypeSearchResult.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of rooms available for the requested time range',
        example: 3,
    }),
    __metadata("design:type", Number)
], RoomTypeSearchResult.prototype, "availableCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable rate plans with pricing',
        type: [RatePlanPricingDetail],
    }),
    __metadata("design:type", Array)
], RoomTypeSearchResult.prototype, "ratePlans", void 0);
class SearchRoomTypesResponse {
    roomTypes;
    total;
    page;
    limit;
}
exports.SearchRoomTypesResponse = SearchRoomTypesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of room types with availability and rate plans',
        type: [RoomTypeSearchResult],
    }),
    __metadata("design:type", Array)
], SearchRoomTypesResponse.prototype, "roomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of room types matching filters', example: 5 }),
    __metadata("design:type", Number)
], SearchRoomTypesResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page (1-based)', example: 1 }),
    __metadata("design:type", Number)
], SearchRoomTypesResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page', example: 20 }),
    __metadata("design:type", Number)
], SearchRoomTypesResponse.prototype, "limit", void 0);
//# sourceMappingURL=room-type-search.nats.js.map