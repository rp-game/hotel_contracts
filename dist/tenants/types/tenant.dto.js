"use strict";
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
exports.UpdateTenantDto = exports.CreateTenantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const tenant_types_1 = require("../../user/types/tenant.types");
class CreateTenantDto {
    name;
    type;
    slug;
    description;
    // HOTEL_CHAIN fields
    hotels;
    // INDIVIDUAL_HOTEL fields
    chainId;
    address;
    city;
    country;
    contactEmail;
    contactPhone;
    operationSettings;
}
exports.CreateTenantDto = CreateTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the tenant', example: 'Grand Hotel Chain', minLength: 2, maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of tenant', enum: tenant_types_1.TenantType, example: tenant_types_1.TenantType.HOTEL_CHAIN }),
    (0, class_validator_1.IsEnum)(tenant_types_1.TenantType),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'grand-hotel-chain', maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' }),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description', example: 'Luxury hotel chain across Europe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel IDs belonging to this chain (HOTEL_CHAIN only)', type: [String] }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.HOTEL_CHAIN),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CreateTenantDto.prototype, "hotels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID this hotel belongs to (INDIVIDUAL_HOTEL only)' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Physical address', example: '123 Main Street' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City', example: 'Paris' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country', example: 'France' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email', example: 'contact@grandhotel.com' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 100),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone', example: '+33123456789' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel operation settings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateTenantDto.prototype, "operationSettings", void 0);
class UpdateTenantDto {
    name;
    type;
    slug;
    isActive;
    description;
    hotels;
    chainId;
    address;
    city;
    country;
    contactEmail;
    contactPhone;
    operationSettings;
}
exports.UpdateTenantDto = UpdateTenantDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Name of the tenant', example: 'Grand Hotel Chain', minLength: 2, maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Type of tenant', enum: tenant_types_1.TenantType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(tenant_types_1.TenantType),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'grand-hotel-chain', maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' }),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether the tenant is active' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTenantDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel IDs (HOTEL_CHAIN only)', type: [String] }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.HOTEL_CHAIN),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], UpdateTenantDto.prototype, "hotels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID (INDIVIDUAL_HOTEL only)' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Physical address' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 100),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone' }),
    (0, class_validator_1.ValidateIf)(o => o.type === tenant_types_1.TenantType.INDIVIDUAL_HOTEL),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], UpdateTenantDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel operation settings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateTenantDto.prototype, "operationSettings", void 0);
//# sourceMappingURL=tenant.dto.js.map