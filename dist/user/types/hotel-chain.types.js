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
exports.UpdateHotelChainDto = exports.HotelChainStatus = exports.ChainType = void 0;
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
//# sourceMappingURL=hotel-chain.types.js.map