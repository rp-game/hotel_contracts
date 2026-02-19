"use strict";
/**
 * Additional Services NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.service.*
 * Handler: financial-service
 * Database Entity: AdditionalService (additional_services table)
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
exports.ServiceDashboardResponseDto = exports.TopServiceStatsDto = exports.GetServiceDashboardRequestDto = exports.GetServiceStatsRequestDto = exports.ServiceCategoriesResponseDto = exports.GetServiceCategoriesRequestDto = exports.DeleteAdditionalServiceRequestDto = exports.UpdateAdditionalServiceRequestDto = exports.FindOneAdditionalServiceRequestDto = exports.FindAllAdditionalServicesRequestDto = exports.ServiceListResponseDto = exports.UpdateAdditionalServiceDto = exports.CreateAdditionalServiceDto = exports.AdditionalServiceResponseDto = exports.FinancialServiceCategory = exports.PricingType = exports.FinancialServiceType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const service_bookings_nats_1 = require("./service-bookings.nats");
/**
 * Financial Service Type Enum
 * Represents actual hotel service types
 */
var FinancialServiceType;
(function (FinancialServiceType) {
    FinancialServiceType["SPA"] = "SPA";
    FinancialServiceType["RESTAURANT"] = "RESTAURANT";
    FinancialServiceType["LAUNDRY"] = "LAUNDRY";
    FinancialServiceType["PARKING"] = "PARKING";
    FinancialServiceType["TRANSPORT"] = "TRANSPORT";
    FinancialServiceType["CONFERENCE"] = "CONFERENCE";
    FinancialServiceType["ENTERTAINMENT"] = "ENTERTAINMENT";
    FinancialServiceType["INTERNET"] = "INTERNET";
    FinancialServiceType["PHONE"] = "PHONE";
    FinancialServiceType["MINIBAR"] = "MINIBAR";
    FinancialServiceType["OTHER"] = "OTHER";
})(FinancialServiceType || (exports.FinancialServiceType = FinancialServiceType = {}));
/**
 * Pricing Type Enum
 */
var PricingType;
(function (PricingType) {
    PricingType["FIXED"] = "FIXED";
    PricingType["HOURLY"] = "HOURLY";
    PricingType["DAILY"] = "DAILY";
    PricingType["PER_PERSON"] = "PER_PERSON";
    PricingType["VARIABLE"] = "VARIABLE";
})(PricingType || (exports.PricingType = PricingType = {}));
/**
 * Financial Service Category Enum
 * Represents hotel service categories
 */
var FinancialServiceCategory;
(function (FinancialServiceCategory) {
    FinancialServiceCategory["ROOM_SERVICE"] = "ROOM_SERVICE";
    FinancialServiceCategory["FACILITY"] = "FACILITY";
    FinancialServiceCategory["AMENITY"] = "AMENITY";
    FinancialServiceCategory["EXTERNAL"] = "EXTERNAL";
})(FinancialServiceCategory || (exports.FinancialServiceCategory = FinancialServiceCategory = {}));
/**
 * Additional Service Response DTO
 * Used in both NATS responses and REST API responses
 * Matches AdditionalService entity structure
 */
class AdditionalServiceResponseDto {
    id;
    tenantId;
    hotelId;
    name;
    description;
    serviceType;
    category;
    basePrice;
    taxRate;
    finalPrice;
    pricingType;
    requiresBooking;
    isActive;
    isAvailable;
    maxQuantity;
    availableFrom;
    availableTo;
    createdAt;
    updatedAt;
}
exports.AdditionalServiceResponseDto = AdditionalServiceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service type', enum: FinancialServiceType }),
    (0, class_validator_1.IsEnum)(FinancialServiceType),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service category', enum: FinancialServiceCategory }),
    (0, class_validator_1.IsEnum)(FinancialServiceCategory),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price (before tax)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AdditionalServiceResponseDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax rate (decimal, e.g., 0.1 for 10%)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AdditionalServiceResponseDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final price (including tax)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AdditionalServiceResponseDto.prototype, "finalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pricing type', enum: PricingType }),
    (0, class_validator_1.IsEnum)(PricingType),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "pricingType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether booking is required' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AdditionalServiceResponseDto.prototype, "requiresBooking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether service is active' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AdditionalServiceResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether service is currently available' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AdditionalServiceResponseDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum quantity per booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], AdditionalServiceResponseDto.prototype, "maxQuantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Available from date (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "availableFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Available to date (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "availableTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at timestamp' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at timestamp' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AdditionalServiceResponseDto.prototype, "updatedAt", void 0);
/**
 * Create Additional Service DTO
 * All fields use camelCase (API convention)
 */
class CreateAdditionalServiceDto {
    name;
    code;
    description;
    serviceType;
    category;
    pricingType;
    basePrice;
    currency;
    taxRate;
    isTaxable;
    isActive;
    isAvailable;
    requiresBooking;
    requiresApproval;
    maxQuantity;
    minAdvanceHours;
    maxAdvanceDays;
    availableFrom;
    availableTo;
    availableDays;
    termsConditions;
    cancellationPolicy;
    tenantId;
    hotelId;
    createdBy;
}
exports.CreateAdditionalServiceDto = CreateAdditionalServiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service code (unique identifier)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service type', enum: FinancialServiceType }),
    (0, class_validator_1.IsEnum)(FinancialServiceType),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service category', enum: FinancialServiceCategory }),
    (0, class_validator_1.IsEnum)(FinancialServiceCategory),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pricing type', enum: PricingType }),
    (0, class_validator_1.IsEnum)(PricingType),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "pricingType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base price (before tax)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAdditionalServiceDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', default: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax rate (0-100)', default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateAdditionalServiceDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is taxable', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdditionalServiceDto.prototype, "isTaxable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is active', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdditionalServiceDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is available', default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdditionalServiceDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether booking is required', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdditionalServiceDto.prototype, "requiresBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether approval is required', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAdditionalServiceDto.prototype, "requiresApproval", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum quantity per booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateAdditionalServiceDto.prototype, "maxQuantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum advance hours for booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAdditionalServiceDto.prototype, "minAdvanceHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum advance days for booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateAdditionalServiceDto.prototype, "maxAdvanceDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available from date (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "availableFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available to date (ISO 8601 date)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "availableTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available days of week', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateAdditionalServiceDto.prototype, "availableDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Terms and conditions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "termsConditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation policy' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdditionalServiceDto.prototype, "createdBy", void 0);
/**
 * Update Additional Service DTO
 * All fields use camelCase (API convention)
 */
class UpdateAdditionalServiceDto {
    name;
    code;
    description;
    serviceType;
    category;
    pricingType;
    basePrice;
    currency;
    taxRate;
    isTaxable;
    isActive;
    isAvailable;
    requiresBooking;
    requiresApproval;
    maxQuantity;
    minAdvanceHours;
    maxAdvanceDays;
    availableFrom;
    availableTo;
    availableDays;
    termsConditions;
    cancellationPolicy;
    updatedBy;
}
exports.UpdateAdditionalServiceDto = UpdateAdditionalServiceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service type', enum: FinancialServiceType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceType),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Service category', enum: FinancialServiceCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceCategory),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pricing type', enum: PricingType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(PricingType),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "pricingType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Base price (before tax)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateAdditionalServiceDto.prototype, "basePrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax rate (0-100)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], UpdateAdditionalServiceDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is taxable' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAdditionalServiceDto.prototype, "isTaxable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is active' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAdditionalServiceDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether service is available' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAdditionalServiceDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether booking is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAdditionalServiceDto.prototype, "requiresBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether approval is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateAdditionalServiceDto.prototype, "requiresApproval", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum quantity per booking' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateAdditionalServiceDto.prototype, "maxQuantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum advance hours' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateAdditionalServiceDto.prototype, "minAdvanceHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum advance days' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateAdditionalServiceDto.prototype, "maxAdvanceDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available from date (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "availableFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available to date (ISO 8601)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "availableTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Available days', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateAdditionalServiceDto.prototype, "availableDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Terms and conditions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "termsConditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cancellation policy' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated by user ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceDto.prototype, "updatedBy", void 0);
/**
 * Service List Response DTO
 */
class ServiceListResponseDto {
    data;
    total;
    page;
    limit;
}
exports.ServiceListResponseDto = ServiceListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of services', type: [AdditionalServiceResponseDto] }),
    __metadata("design:type", Array)
], ServiceListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of services' }),
    __metadata("design:type", Number)
], ServiceListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], ServiceListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], ServiceListResponseDto.prototype, "limit", void 0);
/**
 * Find All Additional Services Request DTO
 * Used for findAll, findByType, findByCategory queries
 */
class FindAllAdditionalServicesRequestDto {
    tenantId;
    hotelId;
    serviceType;
    category;
    isActive;
    isAvailable;
    page;
    limit;
}
exports.FindAllAdditionalServicesRequestDto = FindAllAdditionalServicesRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllAdditionalServicesRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllAdditionalServicesRequestDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by service type', enum: FinancialServiceType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceType),
    __metadata("design:type", String)
], FindAllAdditionalServicesRequestDto.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by category', enum: FinancialServiceCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(FinancialServiceCategory),
    __metadata("design:type", String)
], FindAllAdditionalServicesRequestDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by active status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FindAllAdditionalServicesRequestDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by available status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FindAllAdditionalServicesRequestDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllAdditionalServicesRequestDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllAdditionalServicesRequestDto.prototype, "limit", void 0);
/**
 * Find One Additional Service Request DTO
 */
class FindOneAdditionalServiceRequestDto {
    id;
    tenantId;
    hotelId;
}
exports.FindOneAdditionalServiceRequestDto = FindOneAdditionalServiceRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAdditionalServiceRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAdditionalServiceRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindOneAdditionalServiceRequestDto.prototype, "hotelId", void 0);
/**
 * Update Additional Service Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
class UpdateAdditionalServiceRequestDto extends UpdateAdditionalServiceDto {
    id;
    tenantId;
    hotelId;
}
exports.UpdateAdditionalServiceRequestDto = UpdateAdditionalServiceRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAdditionalServiceRequestDto.prototype, "hotelId", void 0);
/**
 * Delete Additional Service Request DTO
 */
class DeleteAdditionalServiceRequestDto {
    id;
    tenantId;
    hotelId;
}
exports.DeleteAdditionalServiceRequestDto = DeleteAdditionalServiceRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteAdditionalServiceRequestDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteAdditionalServiceRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteAdditionalServiceRequestDto.prototype, "hotelId", void 0);
/**
 * Get Service Categories Request DTO
 */
class GetServiceCategoriesRequestDto {
    tenantId;
    hotelId;
}
exports.GetServiceCategoriesRequestDto = GetServiceCategoriesRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceCategoriesRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceCategoriesRequestDto.prototype, "hotelId", void 0);
/**
 * Service Categories Response DTO
 */
class ServiceCategoriesResponseDto {
    categories;
}
exports.ServiceCategoriesResponseDto = ServiceCategoriesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available service categories', enum: FinancialServiceCategory, isArray: true }),
    __metadata("design:type", Array)
], ServiceCategoriesResponseDto.prototype, "categories", void 0);
/**
 * Get Service Stats Request DTO
 */
class GetServiceStatsRequestDto {
    tenantId;
    hotelId;
}
exports.GetServiceStatsRequestDto = GetServiceStatsRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceStatsRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceStatsRequestDto.prototype, "hotelId", void 0);
/**
 * Get Service Dashboard Request DTO
 */
class GetServiceDashboardRequestDto {
    tenantId;
    hotelId;
}
exports.GetServiceDashboardRequestDto = GetServiceDashboardRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceDashboardRequestDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetServiceDashboardRequestDto.prototype, "hotelId", void 0);
class TopServiceStatsDto {
    serviceId;
    serviceName;
    revenue;
    bookingCount;
}
exports.TopServiceStatsDto = TopServiceStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], TopServiceStatsDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], TopServiceStatsDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopServiceStatsDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TopServiceStatsDto.prototype, "bookingCount", void 0);
/**
 * Service Dashboard Response DTO
 */
class ServiceDashboardResponseDto {
    stats;
    recentBookings;
    topServices;
}
exports.ServiceDashboardResponseDto = ServiceDashboardResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service statistics', type: () => service_bookings_nats_1.FinancialServiceStatsResponseDto }),
    __metadata("design:type", service_bookings_nats_1.FinancialServiceStatsResponseDto)
], ServiceDashboardResponseDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Recent bookings', type: () => [service_bookings_nats_1.ServiceBookingResponseDto] }),
    __metadata("design:type", Array)
], ServiceDashboardResponseDto.prototype, "recentBookings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Top services by revenue', type: [TopServiceStatsDto] }),
    __metadata("design:type", Array)
], ServiceDashboardResponseDto.prototype, "topServices", void 0);
//# sourceMappingURL=additional-services.nats.js.map