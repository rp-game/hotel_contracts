"use strict";
/**
 * Tenant NATS Contracts
 *
 * Patterns:
 * - tenants.findById
 *
 * Handler: user-service (TenantsNatsController)
 * Called by: api-gateway (TenantGuard, HotelChainsService)
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
exports.TenantResponseDto = exports.HotelOperationSettingsDto = exports.DeleteTenantRequestDto = exports.UpdateTenantRequestDto = exports.CreateTenantRequestDto = void 0;
const tenant_types_1 = require("../types/tenant.types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Create Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.create
 * Used by: REST API (@ApiBody) and NATS messages
 */
class CreateTenantRequestDto {
    name;
    type;
    slug;
    description;
    parentId;
    hotels;
    chainId;
    address;
    city;
    country;
    contactEmail;
    contactPhone;
    operationSettings;
}
exports.CreateTenantRequestDto = CreateTenantRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant name',
        example: 'Grand Hotel Chain'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant type',
        enum: tenant_types_1.TenantType,
        example: tenant_types_1.TenantType.INDIVIDUAL_HOTEL
    }),
    (0, class_validator_1.IsEnum)(tenant_types_1.TenantType),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL-friendly slug',
        example: 'grand-hotel-chain'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tenant description',
        example: 'Luxury hotel chain'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Parent tenant ID (for sub-tenants)',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'List of hotel IDs (for chain type)',
        type: [String],
        example: ['hotel-id-1', 'hotel-id-2']
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateTenantRequestDto.prototype, "hotels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Chain ID (for individual hotels)',
        example: 'chain-id-123'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Physical address',
        example: '123 Main Street'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'City',
        example: 'Paris'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Country',
        example: 'France'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact email',
        example: 'contact@hotel.com'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact phone',
        example: '+33123456789'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantRequestDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hotel operation settings',
        type: () => HotelOperationSettingsDto
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateTenantRequestDto.prototype, "operationSettings", void 0);
/**
 * Update Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.update
 * Used by: REST API (@ApiBody) and NATS messages
 */
class UpdateTenantRequestDto {
    id;
    name;
    description;
    contactEmail;
    contactPhone;
    address;
    city;
    country;
    operationSettings;
}
exports.UpdateTenantRequestDto = UpdateTenantRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tenant name',
        example: 'Updated Hotel Name'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tenant description',
        example: 'Updated description'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact email',
        example: 'contact@hotel.com'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact phone',
        example: '+33123456789'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Physical address',
        example: '123 Main Street'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'City',
        example: 'Paris'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Country',
        example: 'France'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTenantRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Hotel operation settings',
        type: () => HotelOperationSettingsDto
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateTenantRequestDto.prototype, "operationSettings", void 0);
/**
 * Delete Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.delete
 * Used by: REST API and NATS messages
 */
class DeleteTenantRequestDto {
    id;
}
exports.DeleteTenantRequestDto = DeleteTenantRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tenant ID to delete',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeleteTenantRequestDto.prototype, "id", void 0);
// ============= Response DTOs =============
/**
 * Hotel Operation Settings DTO (Class-based for Swagger)
 */
class HotelOperationSettingsDto {
    checkInTime;
    checkOutTime;
    timezone;
    currency;
    defaultCleaningDuration;
    gracePeriodMinutes;
    autoAssignRooms;
    hourlyBooking;
    preferBookingMode;
    businessHours;
}
exports.HotelOperationSettingsDto = HotelOperationSettingsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-in time', example: '14:00' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-out time', example: '12:00' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel currency', example: 'USD' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default cleaning duration in minutes', example: 60 }),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "defaultCleaningDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Grace period for late check-out in minutes', example: 15 }),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "gracePeriodMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto assign rooms on booking confirmation', example: false }),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "autoAssignRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable hourly booking', example: false }),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "hourlyBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preferred booking mode', enum: ['hourly', 'daily'] }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "preferBookingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Business hours',
        example: { start: '06:00', end: '23:00' }
    }),
    __metadata("design:type", Object)
], HotelOperationSettingsDto.prototype, "businessHours", void 0);
/**
 * Tenant Response DTO (Class-based for Swagger and type safety)
 */
class TenantResponseDto {
    id;
    name;
    slug;
    type;
    parentId;
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
    createdAt;
    updatedAt;
}
exports.TenantResponseDto = TenantResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], TenantResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant name' }),
    __metadata("design:type", String)
], TenantResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL-friendly slug' }),
    __metadata("design:type", String)
], TenantResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant type', enum: tenant_types_1.TenantType }),
    __metadata("design:type", String)
], TenantResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Parent tenant ID' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is tenant active' }),
    __metadata("design:type", Boolean)
], TenantResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant description' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of hotel IDs (for chain type)', type: [String] }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "hotels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Chain ID (for individual hotels)' }),
    __metadata("design:type", String)
], TenantResponseDto.prototype, "chainId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Physical address' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel operation settings' }),
    __metadata("design:type", Object)
], TenantResponseDto.prototype, "operationSettings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], TenantResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], TenantResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=tenant.nats.js.map