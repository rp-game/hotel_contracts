"use strict";
/**
 * Common Query/Param DTOs
 *
 * Shared base classes for REST API query parameters and path parameters.
 * Used across all domains to avoid local DTO duplication in api-gateway.
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger + class-validator decorators.
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
exports.IdParamDto = exports.TenantRequiredHotelOptionalQueryDto = exports.TenantHotelQueryDto = exports.BaseTenantHotelOptionalQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Base query DTO with optional tenantId and hotelId.
 * Used for endpoints where tenantId/hotelId may come from JWT context.
 */
class BaseTenantHotelOptionalQueryDto {
    tenantId;
    hotelId;
}
exports.BaseTenantHotelOptionalQueryDto = BaseTenantHotelOptionalQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BaseTenantHotelOptionalQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BaseTenantHotelOptionalQueryDto.prototype, "hotelId", void 0);
/**
 * Query DTO with required tenantId and hotelId.
 * Used for most list/stats/detail endpoints.
 */
class TenantHotelQueryDto {
    tenantId;
    hotelId;
}
exports.TenantHotelQueryDto = TenantHotelQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TenantHotelQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TenantHotelQueryDto.prototype, "hotelId", void 0);
/**
 * Query DTO with required tenantId and optional hotelId.
 * Used for cross-hotel queries (e.g., chain-level stats).
 */
class TenantRequiredHotelOptionalQueryDto {
    tenantId;
    hotelId;
}
exports.TenantRequiredHotelOptionalQueryDto = TenantRequiredHotelOptionalQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TenantRequiredHotelOptionalQueryDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TenantRequiredHotelOptionalQueryDto.prototype, "hotelId", void 0);
/**
 * Path parameter DTO for endpoints with :id param.
 * Used across all CRUD endpoints.
 */
class IdParamDto {
    id;
}
exports.IdParamDto = IdParamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Resource ID', example: '550e8400-e29b-41d4-a716-446655440003' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], IdParamDto.prototype, "id", void 0);
//# sourceMappingURL=query.dto.js.map