"use strict";
/**
 * Hotel Search NATS Contract
 *
 * Pattern: inventory.hotels.search
 *
 * Returns hotels in a chain with availability and lowest price
 * for a given date range. Used for hotel browsing/discovery.
 *
 * Handler: inventory-service
 * Called by: webshop (Go)
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
exports.SearchHotelsResponse = exports.HotelSearchResultDto = exports.SearchHotelsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// REQUEST
// ============================================================================
class SearchHotelsRequest {
    chainId;
    checkInDate;
    checkOutDate;
    adults;
    children;
    provinceId;
    stars;
    sortBy;
    page;
    limit;
}
exports.SearchHotelsRequest = SearchHotelsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID', example: 'uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchHotelsRequest.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD local time)', example: '2026-03-15' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchHotelsRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD local time)', example: '2026-03-17' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchHotelsRequest.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of adults', example: 2, default: 2 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "adults", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of children', example: 0, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "children", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by province ID', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "provinceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by minimum star rating (1-5)', example: 4 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sort order',
        enum: ['price', 'stars', 'name'],
        default: 'price',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['price', 'stars', 'name']),
    __metadata("design:type", String)
], SearchHotelsRequest.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-based)', example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', example: 20, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchHotelsRequest.prototype, "limit", void 0);
// ============================================================================
// RESPONSE
// ============================================================================
class HotelSearchResultDto {
    id;
    name;
    description;
    address;
    city;
    stars;
    amenities;
    images;
    provinceId;
    provinceName;
    latitude;
    longitude;
    checkInTime;
    checkOutTime;
    currency;
    available;
    totalRoomTypes;
    availableRoomTypes;
    lowestPrice;
    lowestPricePerNight;
    lowestPriceRoomTypeName;
    numberOfNights;
}
exports.HotelSearchResultDto = HotelSearchResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel description' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel address' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'City' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Star rating (1-5)' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel amenities', type: [String] }),
    __metadata("design:type", Array)
], HotelSearchResultDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel images (from hotel or first room types)', type: [String] }),
    __metadata("design:type", Array)
], HotelSearchResultDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Province ID' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "provinceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Province name' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "provinceName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Latitude' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Longitude' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in time (HH:mm)', example: '15:00' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out time (HH:mm)', example: '11:00' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code (ISO 4217)', example: 'VND' }),
    __metadata("design:type", String)
], HotelSearchResultDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Has at least 1 available room type' }),
    __metadata("design:type", Boolean)
], HotelSearchResultDto.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of room types' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "totalRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of room types with availability' }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "availableRoomTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lowest total price across all rate plans (null if no availability)',
        nullable: true,
        example: 2200000,
    }),
    __metadata("design:type", Object)
], HotelSearchResultDto.prototype, "lowestPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lowest price per night (null if no availability)',
        nullable: true,
        example: 1100000,
    }),
    __metadata("design:type", Object)
], HotelSearchResultDto.prototype, "lowestPricePerNight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of room type with lowest price (null if no availability)',
        nullable: true,
        example: 'Deluxe Room',
    }),
    __metadata("design:type", Object)
], HotelSearchResultDto.prototype, "lowestPriceRoomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights for the search dates', example: 2 }),
    __metadata("design:type", Number)
], HotelSearchResultDto.prototype, "numberOfNights", void 0);
class SearchHotelsResponse {
    hotels;
    total;
    page;
    limit;
}
exports.SearchHotelsResponse = SearchHotelsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of hotels with availability and pricing', type: [HotelSearchResultDto] }),
    __metadata("design:type", Array)
], SearchHotelsResponse.prototype, "hotels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of hotels matching filters', example: 5 }),
    __metadata("design:type", Number)
], SearchHotelsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page (1-based)', example: 1 }),
    __metadata("design:type", Number)
], SearchHotelsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page', example: 20 }),
    __metadata("design:type", Number)
], SearchHotelsResponse.prototype, "limit", void 0);
//# sourceMappingURL=hotel-search.nats.js.map