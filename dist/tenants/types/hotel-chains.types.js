"use strict";
/**
 * Hotel Chains Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Converted to classes with @ApiProperty for Swagger documentation
 *
 * Note: Re-exports types from other modules to avoid duplication
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
exports.UpdateHotelDto = exports.CreateHotelDto = exports.HotelChainListResponseDto = exports.HotelChainResponseDto = exports.CreateHotelChainDto = exports.HotelListResponseDto = exports.HotelDto = exports.UpdateHotelChainDto = exports.ChainType = exports.HotelChainStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// Import enums for validation decorators
const hotel_chain_types_1 = require("../../user/types/hotel-chain.types");
// Re-export existing types from other modules to avoid duplication
var hotel_chain_types_2 = require("../../user/types/hotel-chain.types");
Object.defineProperty(exports, "HotelChainStatus", { enumerable: true, get: function () { return hotel_chain_types_2.HotelChainStatus; } });
Object.defineProperty(exports, "ChainType", { enumerable: true, get: function () { return hotel_chain_types_2.ChainType; } });
Object.defineProperty(exports, "UpdateHotelChainDto", { enumerable: true, get: function () { return hotel_chain_types_2.UpdateHotelChainDto; } });
var hotel_nats_1 = require("../../inventory/nats/hotel.nats");
Object.defineProperty(exports, "HotelDto", { enumerable: true, get: function () { return hotel_nats_1.HotelDto; } });
Object.defineProperty(exports, "HotelListResponseDto", { enumerable: true, get: function () { return hotel_nats_1.HotelListResponseDto; } });
/**
 * Create hotel chain DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
class CreateHotelChainDto {
    name;
    brand;
    type;
    description;
    headquartersCountry;
    headquartersCity;
    headquartersAddress;
    websiteUrl;
    logoUrl;
    status;
    operatingRegions;
    targetMarkets;
    amenities;
    loyaltyProgram;
}
exports.CreateHotelChainDto = CreateHotelChainDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain brand' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain type', enum: hotel_chain_types_1.ChainType }),
    (0, class_validator_1.IsEnum)(hotel_chain_types_1.ChainType),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Headquarters country' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "headquartersCountry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters city' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "headquartersCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "headquartersAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain website URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain logo URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "logoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain status', enum: hotel_chain_types_1.HotelChainStatus }),
    (0, class_validator_1.IsEnum)(hotel_chain_types_1.HotelChainStatus),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operating regions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateHotelChainDto.prototype, "operatingRegions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target market segments' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateHotelChainDto.prototype, "targetMarkets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain amenities and services' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateHotelChainDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Loyalty program name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelChainDto.prototype, "loyaltyProgram", void 0);
/**
 * Hotel chain response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
class HotelChainResponseDto {
    id;
    tenantId;
    name;
    brandName;
    description;
    headquartersCountry;
    headquartersCity;
    headquartersAddress;
    phone;
    email;
    status;
    regions;
    operatingRegions;
    marketSegments;
    targetMarkets;
    amenities;
    totalProperties;
    totalRooms;
    createdAt;
    updatedAt;
    hotelCount;
    countries;
    cities;
}
exports.HotelChainResponseDto = HotelChainResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "brandName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "headquartersCountry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "headquartersCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "headquartersAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: hotel_chain_types_1.HotelChainStatus }),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "regions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "operatingRegions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "marketSegments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "targetMarkets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], HotelChainResponseDto.prototype, "totalProperties", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], HotelChainResponseDto.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelChainResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], HotelChainResponseDto.prototype, "hotelCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], HotelChainResponseDto.prototype, "cities", void 0);
/**
 * Hotel chains list response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
class HotelChainListResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.HotelChainListResponseDto = HotelChainListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [HotelChainResponseDto] }),
    __metadata("design:type", Array)
], HotelChainListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HotelChainListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HotelChainListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HotelChainListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], HotelChainListResponseDto.prototype, "totalPages", void 0);
/**
 * Create hotel DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
class CreateHotelDto {
    name;
    description;
    address;
    city;
    country;
    phone;
    email;
    website;
    stars;
    status;
    amenities;
    checkInTime;
    checkOutTime;
    timezone;
    currency;
    tenantId;
    chainId;
    roomCount;
    analytics;
}
exports.CreateHotelDto = CreateHotelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel address' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel city' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel country' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel phone number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel email address' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel website' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel star rating (1-5)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateHotelDto.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel status' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel amenities' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateHotelDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in time (HH:mm format)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out time (HH:mm format)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel timezone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel currency code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel chain ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHotelDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total room count' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateHotelDto.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel analytics data' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateHotelDto.prototype, "analytics", void 0);
/**
 * Update hotel DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
class UpdateHotelDto {
    id;
    name;
    chainId;
    description;
    address;
    city;
    country;
    phone;
    email;
    website;
    stars;
    status;
    amenities;
    checkInTime;
    checkOutTime;
    timezone;
    currency;
}
exports.UpdateHotelDto = UpdateHotelDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (required for NATS, optional for REST)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel chain ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel city' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel country' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel website' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel star rating (1-5)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateHotelDto.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE', 'MAINTENANCE']),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel amenities' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateHotelDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in time (HH:mm format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out time (HH:mm format)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel timezone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel currency code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelDto.prototype, "currency", void 0);
//# sourceMappingURL=hotel-chains.types.js.map