"use strict";
/**
 * Hotel Chain Types
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
exports.HotelChain = exports.UpdateHotelChainDto = exports.HotelChainStatus = exports.ChainType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Hotel Chain Type Enum
 */
var ChainType;
(function (ChainType) {
    ChainType["LUXURY"] = "LUXURY";
    ChainType["MIDSCALE"] = "MIDSCALE";
    ChainType["ECONOMY"] = "ECONOMY";
    ChainType["BOUTIQUE"] = "BOUTIQUE";
    ChainType["EXTENDED_STAY"] = "EXTENDED_STAY";
    ChainType["RESORT"] = "RESORT";
})(ChainType || (exports.ChainType = ChainType = {}));
/**
 * Hotel Chain Status Enum
 */
var HotelChainStatus;
(function (HotelChainStatus) {
    HotelChainStatus["ACTIVE"] = "ACTIVE";
    HotelChainStatus["INACTIVE"] = "INACTIVE";
    HotelChainStatus["PENDING"] = "PENDING";
    HotelChainStatus["SUSPENDED"] = "SUSPENDED";
})(HotelChainStatus || (exports.HotelChainStatus = HotelChainStatus = {}));
/**
 * Update Hotel Chain DTO
 * All fields are optional for partial updates
 */
class UpdateHotelChainDto {
    name;
    slug;
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
    totalProperties;
    totalRooms;
}
exports.UpdateHotelChainDto = UpdateHotelChainDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'my-chain' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' }),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain brand' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain type', enum: ChainType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(ChainType),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters country' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "headquartersCountry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters city' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "headquartersCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "headquartersAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain website URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain logo URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "logoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain status', enum: HotelChainStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(HotelChainStatus),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operating regions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateHotelChainDto.prototype, "operatingRegions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target market segments' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateHotelChainDto.prototype, "targetMarkets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain amenities and services' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateHotelChainDto.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Loyalty program name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelChainDto.prototype, "loyaltyProgram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total properties' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateHotelChainDto.prototype, "totalProperties", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total rooms' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateHotelChainDto.prototype, "totalRooms", void 0);
/**
 * Hotel Chain response class (used by REST handlers and Swagger)
 */
class HotelChain {
    id;
    name;
    slug;
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
    totalProperties;
    totalRooms;
    createdAt;
    updatedAt;
}
exports.HotelChain = HotelChain;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier' }),
    __metadata("design:type", String)
], HotelChain.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain name' }),
    __metadata("design:type", String)
], HotelChain.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL-friendly slug', example: 'my-chain' }),
    __metadata("design:type", String)
], HotelChain.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain brand' }),
    __metadata("design:type", String)
], HotelChain.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain type', enum: ChainType }),
    __metadata("design:type", String)
], HotelChain.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain description' }),
    __metadata("design:type", String)
], HotelChain.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters country' }),
    __metadata("design:type", String)
], HotelChain.prototype, "headquartersCountry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters city' }),
    __metadata("design:type", String)
], HotelChain.prototype, "headquartersCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Headquarters address' }),
    __metadata("design:type", String)
], HotelChain.prototype, "headquartersAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Website URL' }),
    __metadata("design:type", String)
], HotelChain.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Logo URL' }),
    __metadata("design:type", String)
], HotelChain.prototype, "logoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain status', enum: HotelChainStatus }),
    __metadata("design:type", String)
], HotelChain.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Operating regions', type: [String] }),
    __metadata("design:type", Array)
], HotelChain.prototype, "operatingRegions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Target markets', type: [String] }),
    __metadata("design:type", Array)
], HotelChain.prototype, "targetMarkets", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amenities', type: [String] }),
    __metadata("design:type", Array)
], HotelChain.prototype, "amenities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Loyalty program name' }),
    __metadata("design:type", String)
], HotelChain.prototype, "loyaltyProgram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total properties' }),
    __metadata("design:type", Number)
], HotelChain.prototype, "totalProperties", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total rooms' }),
    __metadata("design:type", Number)
], HotelChain.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], HotelChain.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", Date)
], HotelChain.prototype, "updatedAt", void 0);
//# sourceMappingURL=hotel-chain.types.js.map