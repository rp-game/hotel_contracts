"use strict";
/**
 * Hotel NATS Contracts
 *
 * Patterns:
 * - hotels.findAll
 * - hotels.findOne
 * - hotels.create
 * - hotels.update
 * - hotels.delete
 * - hotels.updateStatus
 * - hotels.findByChain
 * - hotels.analytics.occupancy
 * - hotels.analytics.revenue
 * - hotels.analytics.occupancy.aggregate
 * - hotels.analytics.revenue.aggregate
 * - hotels.performance
 * - hotels.settings.updated
 * - hotels.standards.apply
 * - rooms.findByHotel
 * - hotels.room-status.update
 * - hotels.availability.check
 * - hotels.rates.get
 * - hotels.inventory.summary
 * - tenant.hotel.sync (Event)
 * - hotels.updateChainId
 *
 * Handler: inventory-service
 * Called by: api-gateway, user-service
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
exports.RoomData = exports.HotelListResponseDto = exports.FindHotelsByChainRequestDto = exports.HotelWithRoomCountDto = exports.HotelWithStatsDto = exports.HotelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Hotel Entity
 * Shared DTO for both NATS messages and REST API responses
 * Used across: inventory-service, api-gateway, frontend
 */
class HotelDto {
    id;
    tenantId;
    name;
    description;
    address;
    city;
    country;
    postalCode;
    latitude;
    longitude;
    phone;
    email;
    website;
    stars;
    chainId;
    status;
    amenities;
    operationSettings;
    brandStandards;
    policies;
    checkInTime;
    checkOutTime;
    timezone;
    currency;
    createdAt;
    updatedAt;
}
exports.HotelDto = HotelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel unique identifier' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], HotelDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID that owns this hotel' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], HotelDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Street address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Postal/ZIP code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Latitude coordinate' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Longitude coordinate' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], HotelDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel website URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Star rating (1-5)', minimum: 1, maximum: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], HotelDto.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel chain ID if part of a chain' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], HotelDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel operational status', enum: ['ACTIVE', 'INACTIVE', 'MAINTENANCE', 'CLOSED'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel amenities list', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], HotelDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operational settings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], HotelDto.prototype, "operationSettings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Brand standards configuration' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], HotelDto.prototype, "brandStandards", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel policies' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], HotelDto.prototype, "policies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-in time (HH:mm format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-out time (HH:mm format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timezone (IANA format, e.g., Asia/Ho_Chi_Minh)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default currency code (ISO 4217, e.g., VND, USD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation timestamp (ISO 8601 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last update timestamp (ISO 8601 format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelDto.prototype, "updatedAt", void 0);
/**
 * Hotel with statistics
 * Returned by hotels.findOne with room counts
 * Extends HotelDto with additional statistical fields
 */
class HotelWithStatsDto extends HotelDto {
    roomCount;
    availableRooms;
    occupiedRooms;
}
exports.HotelWithStatsDto = HotelWithStatsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total number of rooms in the hotel' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelWithStatsDto.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of available rooms' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelWithStatsDto.prototype, "availableRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of occupied rooms' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelWithStatsDto.prototype, "occupiedRooms", void 0);
/**
 * Hotel with room count
 * Returned by hotels.findAll and hotels.findByChain
 * Extends HotelDto with roomCount field
 */
class HotelWithRoomCountDto extends HotelDto {
    roomCount;
}
exports.HotelWithRoomCountDto = HotelWithRoomCountDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total number of rooms in the hotel' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], HotelWithRoomCountDto.prototype, "roomCount", void 0);
/**
 * Find Hotels By Chain Request
 * Pattern: hotels.findByChain
 * Includes optional filters for city, country, and status
 */
class FindHotelsByChainRequestDto {
    chainId;
    city;
    country;
    status;
}
exports.FindHotelsByChainRequestDto = FindHotelsByChainRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel chain ID to find hotels for' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindHotelsByChainRequestDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by city (case-insensitive partial match)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHotelsByChainRequestDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by country (case-insensitive partial match)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHotelsByChainRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by operational status', enum: ['ACTIVE', 'INACTIVE', 'MAINTENANCE', 'CLOSED'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHotelsByChainRequestDto.prototype, "status", void 0);
/**
 * Paginated response wrapper for hotel list endpoints
 * Used by REST API to return paginated hotel data
 */
class HotelListResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.HotelListResponseDto = HotelListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of hotels with room counts', type: [HotelWithRoomCountDto] }),
    __metadata("design:type", Array)
], HotelListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of hotels in result set' }),
    __metadata("design:type", Number)
], HotelListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], HotelListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], HotelListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total number of pages' }),
    __metadata("design:type", Number)
], HotelListResponseDto.prototype, "totalPages", void 0);
/**
 * Room Data DTO
 * Used in hotels.findRooms response and room-related operations
 */
class RoomData {
    id;
    roomNumber;
    floor;
    roomTypeId;
    status;
    currentStatus;
    tenantId;
    hotelId;
    lastCleanedAt;
    features;
    notes;
    createdAt;
    updatedAt;
}
exports.RoomData = RoomData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RoomData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Floor number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomData.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RoomData.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current status (additional status field)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "currentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RoomData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RoomData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last cleaned timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "lastCleanedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room features' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], RoomData.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created at timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated at timestamp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomData.prototype, "updatedAt", void 0);
//# sourceMappingURL=hotel.nats.js.map