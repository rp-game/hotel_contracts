"use strict";
/**
 * Province NATS Contract
 *
 * Pattern: inventory.provinces.listByChain
 *
 * Returns provinces that have active hotels in a given chain.
 *
 * Handler: inventory-service
 * Called by: webshop
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
exports.ProvinceDto = exports.ListProvincesByChainRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
// ============================================================================
// REQUEST
// ============================================================================
class ListProvincesByChainRequest {
    chainId;
}
exports.ListProvincesByChainRequest = ListProvincesByChainRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chain ID (from hotel entity chainId)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListProvincesByChainRequest.prototype, "chainId", void 0);
// ============================================================================
// RESPONSE
// ============================================================================
class ProvinceDto {
    id;
    name;
    nameEn;
    code;
    region;
}
exports.ProvinceDto = ProvinceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Province ID', example: 1 }),
    __metadata("design:type", Number)
], ProvinceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Province name (Vietnamese)', example: 'Hà Nội' }),
    __metadata("design:type", String)
], ProvinceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Province name (English)', example: 'Ha Noi' }),
    __metadata("design:type", String)
], ProvinceDto.prototype, "nameEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Province code', example: 'HN' }),
    __metadata("design:type", String)
], ProvinceDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Region', example: 'Bắc Bộ' }),
    __metadata("design:type", String)
], ProvinceDto.prototype, "region", void 0);
//# sourceMappingURL=province.nats.js.map