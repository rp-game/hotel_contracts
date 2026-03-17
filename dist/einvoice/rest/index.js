"use strict";
/**
 * E-Invoice REST DTOs
 * Used by API Gateway for Swagger documentation and request validation
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
exports.ProviderConfigResponseDto = exports.EInvoiceSummaryDto = exports.EInvoiceResponseDto = exports.SaveProviderConfigDto = exports.FindEInvoicesQueryDto = exports.UpdateEInvoiceDto = exports.CreateEInvoiceFromInvoiceDto = exports.CreateEInvoiceDto = exports.CreateEInvoiceItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../enums");
// ============================================================================
// REQUEST DTOs
// ============================================================================
class CreateEInvoiceItemDto {
    orderBy;
    code;
    name;
    unit;
    quantity;
    unitPrice;
    vatRate;
    discount;
}
exports.CreateEInvoiceItemDto = CreateEInvoiceItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item order' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateEInvoiceItemDto.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Product/service code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceItemDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product/service name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceItemDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Unit of measurement' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceItemDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateEInvoiceItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateEInvoiceItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'VAT rate (-3, -2, -1, 0, 5, 8, 10)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEInvoiceItemDto.prototype, "vatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount percentage', default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEInvoiceItemDto.prototype, "discount", void 0);
class CreateEInvoiceDto {
    customerType;
    customerName;
    customerTaxCode;
    customerAddress;
    customerEmail;
    customerPhone;
    buyerName;
    paymentMethod;
    arisingDate;
    notes;
    items;
}
exports.CreateEInvoiceDto = CreateEInvoiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    (0, class_validator_1.IsEnum)(enums_1.CustomerType),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name (required for BUSINESS)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code (required for BUSINESS)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address (required for BUSINESS)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name (required for INDIVIDUAL)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    (0, class_validator_1.IsEnum)(enums_1.InvoicePaymentMethod),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Arising date (ISO YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Line items', type: [CreateEInvoiceItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateEInvoiceItemDto),
    __metadata("design:type", Array)
], CreateEInvoiceDto.prototype, "items", void 0);
class CreateEInvoiceFromInvoiceDto {
    customerType;
    customerName;
    customerTaxCode;
    customerAddress;
    customerEmail;
    customerPhone;
    buyerName;
    paymentMethod;
    arisingDate;
    notes;
}
exports.CreateEInvoiceFromInvoiceDto = CreateEInvoiceFromInvoiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    (0, class_validator_1.IsEnum)(enums_1.CustomerType),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name (override)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code (override)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address (override)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    (0, class_validator_1.IsEnum)(enums_1.InvoicePaymentMethod),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Arising date (ISO YYYY-MM-DD). Defaults to today.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceDto.prototype, "notes", void 0);
class UpdateEInvoiceDto {
    customerType;
    customerName;
    customerTaxCode;
    customerAddress;
    customerEmail;
    customerPhone;
    buyerName;
    paymentMethod;
    arisingDate;
    notes;
    items;
}
exports.UpdateEInvoiceDto = UpdateEInvoiceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer type', enum: enums_1.CustomerType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.CustomerType),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.InvoicePaymentMethod),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Arising date (ISO YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEInvoiceDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated line items', type: [CreateEInvoiceItemDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateEInvoiceItemDto),
    __metadata("design:type", Array)
], UpdateEInvoiceDto.prototype, "items", void 0);
class FindEInvoicesQueryDto {
    status;
    search;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindEInvoicesQueryDto = FindEInvoicesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: enums_1.EInvoiceStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EInvoiceStatus),
    __metadata("design:type", String)
], FindEInvoicesQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search query' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindEInvoicesQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date from (ISO)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindEInvoicesQueryDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date to (ISO)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindEInvoicesQueryDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindEInvoicesQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindEInvoicesQueryDto.prototype, "limit", void 0);
class SaveProviderConfigDto {
    providerType;
    apiUrl;
    username;
    password;
    serialCert;
    taxCode;
    companyName;
    companyAddress;
    pattern;
    serial;
    defaultCurrency;
    defaultVatRate;
}
exports.SaveProviderConfigDto = SaveProviderConfigDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: enums_1.ProviderType }),
    (0, class_validator_1.IsEnum)(enums_1.ProviderType),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API URL' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "apiUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'HSM serial cert' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "serialCert", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax code (MST)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company address' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "companyAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice pattern (mẫu số)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "pattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice serial (ký hiệu)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "serial", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default currency', default: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveProviderConfigDto.prototype, "defaultCurrency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default VAT rate', default: 8 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveProviderConfigDto.prototype, "defaultVatRate", void 0);
// ============================================================================
// RESPONSE DTOs
// ============================================================================
var nats_1 = require("../nats");
Object.defineProperty(exports, "EInvoiceResponseDto", { enumerable: true, get: function () { return nats_1.EInvoiceData; } });
var nats_2 = require("../nats");
Object.defineProperty(exports, "EInvoiceSummaryDto", { enumerable: true, get: function () { return nats_2.EInvoiceSummary; } });
var nats_3 = require("../nats");
Object.defineProperty(exports, "ProviderConfigResponseDto", { enumerable: true, get: function () { return nats_3.ProviderConfigData; } });
//# sourceMappingURL=index.js.map