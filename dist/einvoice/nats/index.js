"use strict";
/**
 * E-Invoice Domain NATS Message Contracts
 *
 * Patterns:
 * - einvoice.create
 * - einvoice.create_from_invoice
 * - einvoice.update
 * - einvoice.issue
 * - einvoice.delete
 * - einvoice.find_all
 * - einvoice.find_one
 * - einvoice.get_pdf
 * - einvoice.get_html
 * - einvoice.provider_config.save
 * - einvoice.provider_config.get
 *
 * Handler: payment-service (einvoice module)
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
exports.ReplaceEInvoiceNatsRequest = exports.AdjustEInvoiceNatsRequest = exports.CancelEInvoiceNatsRequest = exports.GetProviderConfigNatsRequest = exports.SaveProviderConfigNatsRequest = exports.GetEInvoiceHtmlNatsRequest = exports.GetEInvoicePdfNatsRequest = exports.FindEInvoiceNatsRequest = exports.FindEInvoicesNatsRequest = exports.DeleteEInvoiceNatsRequest = exports.IssueEInvoiceNatsRequest = exports.UpdateEInvoiceNatsRequest = exports.CreateEInvoiceFromInvoiceNatsRequest = exports.CreateEInvoiceNatsRequest = exports.EINVOICE_PATTERNS = exports.ProviderConfigData = exports.EInvoiceSummary = exports.EInvoiceData = exports.EInvoiceHistoryData = exports.EInvoiceItemData = exports.EInvoiceItemInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../enums");
// ============================================================================
// SHARED DATA TYPES
// ============================================================================
/**
 * Input item for create/update requests (computed fields optional — service calculates them)
 */
class EInvoiceItemInput {
    orderBy;
    code;
    name;
    unit;
    quantity;
    unitPrice;
    vatRate;
    discount;
}
exports.EInvoiceItemInput = EInvoiceItemInput;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item order' }),
    __metadata("design:type", Number)
], EInvoiceItemInput.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Product/service code' }),
    __metadata("design:type", String)
], EInvoiceItemInput.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product/service name' }),
    __metadata("design:type", String)
], EInvoiceItemInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Unit of measurement (e.g., Đêm, Lần, Phần)' }),
    __metadata("design:type", String)
], EInvoiceItemInput.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], EInvoiceItemInput.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    __metadata("design:type", Number)
], EInvoiceItemInput.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'VAT rate (-3, -2, -1, 0, 5, 8, 10)' }),
    __metadata("design:type", Number)
], EInvoiceItemInput.prototype, "vatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount percentage' }),
    __metadata("design:type", Number)
], EInvoiceItemInput.prototype, "discount", void 0);
/**
 * Full item data with computed fields (for responses)
 */
class EInvoiceItemData extends EInvoiceItemInput {
    subtotal;
    vatAmount;
    total;
    discountAmount;
}
exports.EInvoiceItemData = EInvoiceItemData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal (quantity * unitPrice)' }),
    __metadata("design:type", Number)
], EInvoiceItemData.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'VAT amount' }),
    __metadata("design:type", Number)
], EInvoiceItemData.prototype, "vatAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total (subtotal + vatAmount)' }),
    __metadata("design:type", Number)
], EInvoiceItemData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], EInvoiceItemData.prototype, "discountAmount", void 0);
class EInvoiceHistoryData {
    id;
    action;
    performedBy;
    performedByName;
    details;
    createdAt;
}
exports.EInvoiceHistoryData = EInvoiceHistoryData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'History record ID' }),
    __metadata("design:type", String)
], EInvoiceHistoryData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action performed', enum: enums_1.EInvoiceAction }),
    __metadata("design:type", String)
], EInvoiceHistoryData.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user ID' }),
    __metadata("design:type", String)
], EInvoiceHistoryData.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Performed by user name' }),
    __metadata("design:type", String)
], EInvoiceHistoryData.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Action details (provider response, errors, etc.)' }),
    __metadata("design:type", Object)
], EInvoiceHistoryData.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp' }),
    __metadata("design:type", String)
], EInvoiceHistoryData.prototype, "createdAt", void 0);
class EInvoiceData {
    id;
    tenantId;
    hotelId;
    invoiceId;
    invoiceCode;
    status;
    providerType;
    providerFkey;
    providerKey;
    invoiceNumber;
    pattern;
    serial;
    customerType;
    customerName;
    customerTaxCode;
    customerAddress;
    customerEmail;
    customerPhone;
    buyerName;
    paymentMethod;
    currency;
    subtotal;
    vatAmount;
    totalAmount;
    amountInWords;
    arisingDate;
    issuedAt;
    notes;
    createdBy;
    createdByName;
    createdAt;
    updatedAt;
    items;
    history;
}
exports.EInvoiceData = EInvoiceData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Linked Invoice ID' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal invoice code' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "invoiceCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', enum: enums_1.EInvoiceStatus }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: enums_1.ProviderType }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'System-generated fkey sent to provider' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "providerFkey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Provider internal key' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "providerKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Invoice number from provider' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice pattern (mẫu số)' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "pattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice serial (ký hiệu)' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "serial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code (MST)' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name (individual)' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency', default: 'VND' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal before tax' }),
    __metadata("design:type", Number)
], EInvoiceData.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'VAT amount' }),
    __metadata("design:type", Number)
], EInvoiceData.prototype, "vatAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], EInvoiceData.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Amount in words' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "amountInWords", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Arising date (ISO format)' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issued at timestamp' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "issuedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], EInvoiceData.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Line items', type: [EInvoiceItemData] }),
    __metadata("design:type", Array)
], EInvoiceData.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'History records', type: [EInvoiceHistoryData] }),
    __metadata("design:type", Array)
], EInvoiceData.prototype, "history", void 0);
class EInvoiceSummary {
    id;
    invoiceCode;
    status;
    invoiceNumber;
    customerName;
    buyerName;
    customerType;
    totalAmount;
    arisingDate;
    paymentMethod;
    createdAt;
}
exports.EInvoiceSummary = EInvoiceSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal invoice code' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "invoiceCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', enum: enums_1.EInvoiceStatus }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Invoice number from provider' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer name' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], EInvoiceSummary.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Arising date' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], EInvoiceSummary.prototype, "createdAt", void 0);
class ProviderConfigData {
    id;
    tenantId;
    hotelId;
    providerType;
    isActive;
    apiUrl;
    username;
    serialCert;
    taxCode;
    companyName;
    companyAddress;
    pattern;
    serial;
    defaultCurrency;
    defaultVatRate;
}
exports.ProviderConfigData = ProviderConfigData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Config ID' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: enums_1.ProviderType }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is active' }),
    __metadata("design:type", Boolean)
], ProviderConfigData.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API URL' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "apiUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'HSM serial cert' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "serialCert", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax code (MST)' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company address' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "companyAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice pattern (mẫu số)' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "pattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice serial (ký hiệu)' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "serial", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default currency', default: 'VND' }),
    __metadata("design:type", String)
], ProviderConfigData.prototype, "defaultCurrency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default VAT rate', default: 8 }),
    __metadata("design:type", Number)
], ProviderConfigData.prototype, "defaultVatRate", void 0);
// ============================================================================
// NATS PATTERNS
// ============================================================================
exports.EINVOICE_PATTERNS = {
    CREATE: 'einvoice.create',
    CREATE_FROM_INVOICE: 'einvoice.create_from_invoice',
    UPDATE: 'einvoice.update',
    ISSUE: 'einvoice.issue',
    DELETE: 'einvoice.delete',
    FIND_ALL: 'einvoice.find_all',
    FIND_ONE: 'einvoice.find_one',
    GET_PDF: 'einvoice.get_pdf',
    GET_HTML: 'einvoice.get_html',
    PROVIDER_CONFIG_SAVE: 'einvoice.provider_config.save',
    PROVIDER_CONFIG_GET: 'einvoice.provider_config.get',
    CANCEL: 'einvoice.cancel',
    ADJUST: 'einvoice.adjust',
    REPLACE: 'einvoice.replace',
};
// ============================================================================
// REQUEST TYPES
// ============================================================================
class CreateEInvoiceNatsRequest {
    tenantId;
    hotelId;
    userId;
    userName;
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
exports.CreateEInvoiceNatsRequest = CreateEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name (required for BUSINESS)' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code (required for BUSINESS)' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address (required for BUSINESS)' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name (required for INDIVIDUAL)' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Arising date (ISO YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CreateEInvoiceNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Line items', type: [EInvoiceItemInput] }),
    __metadata("design:type", Array)
], CreateEInvoiceNatsRequest.prototype, "items", void 0);
class CreateEInvoiceFromInvoiceNatsRequest {
    tenantId;
    hotelId;
    userId;
    userName;
    invoiceId;
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
exports.CreateEInvoiceFromInvoiceNatsRequest = CreateEInvoiceFromInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Source Invoice ID' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer type', enum: enums_1.CustomerType }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name (override)' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code (override)' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address (override)' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Arising date (ISO YYYY-MM-DD). Defaults to today.' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CreateEInvoiceFromInvoiceNatsRequest.prototype, "notes", void 0);
class UpdateEInvoiceNatsRequest {
    tenantId;
    hotelId;
    id;
    userId;
    userName;
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
exports.UpdateEInvoiceNatsRequest = UpdateEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer type', enum: enums_1.CustomerType }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company name' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer tax code' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer address' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer email' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Customer phone' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Buyer name' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "buyerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment method', enum: enums_1.InvoicePaymentMethod }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Arising date (ISO YYYY-MM-DD)' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "arisingDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], UpdateEInvoiceNatsRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated line items', type: [EInvoiceItemInput] }),
    __metadata("design:type", Array)
], UpdateEInvoiceNatsRequest.prototype, "items", void 0);
class IssueEInvoiceNatsRequest {
    tenantId;
    hotelId;
    id;
    userId;
    userName;
}
exports.IssueEInvoiceNatsRequest = IssueEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], IssueEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], IssueEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], IssueEInvoiceNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], IssueEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], IssueEInvoiceNatsRequest.prototype, "userName", void 0);
class DeleteEInvoiceNatsRequest {
    tenantId;
    hotelId;
    id;
    userId;
    userName;
}
exports.DeleteEInvoiceNatsRequest = DeleteEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], DeleteEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], DeleteEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], DeleteEInvoiceNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], DeleteEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], DeleteEInvoiceNatsRequest.prototype, "userName", void 0);
class FindEInvoicesNatsRequest {
    tenantId;
    hotelId;
    status;
    search;
    dateFrom;
    dateTo;
    page;
    limit;
}
exports.FindEInvoicesNatsRequest = FindEInvoicesNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: enums_1.EInvoiceStatus }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search query (invoice code, customer name)' }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by date from (ISO)' }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by date to (ISO)' }),
    __metadata("design:type", String)
], FindEInvoicesNatsRequest.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    __metadata("design:type", Number)
], FindEInvoicesNatsRequest.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    __metadata("design:type", Number)
], FindEInvoicesNatsRequest.prototype, "limit", void 0);
class FindEInvoiceNatsRequest {
    tenantId;
    hotelId;
    id;
}
exports.FindEInvoiceNatsRequest = FindEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], FindEInvoiceNatsRequest.prototype, "id", void 0);
class GetEInvoicePdfNatsRequest {
    tenantId;
    hotelId;
    id;
}
exports.GetEInvoicePdfNatsRequest = GetEInvoicePdfNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetEInvoicePdfNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetEInvoicePdfNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], GetEInvoicePdfNatsRequest.prototype, "id", void 0);
class GetEInvoiceHtmlNatsRequest {
    tenantId;
    hotelId;
    id;
}
exports.GetEInvoiceHtmlNatsRequest = GetEInvoiceHtmlNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetEInvoiceHtmlNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetEInvoiceHtmlNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], GetEInvoiceHtmlNatsRequest.prototype, "id", void 0);
class SaveProviderConfigNatsRequest {
    tenantId;
    hotelId;
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
exports.SaveProviderConfigNatsRequest = SaveProviderConfigNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider type', enum: enums_1.ProviderType }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "providerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API URL' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "apiUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Username' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'HSM serial cert' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "serialCert", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax code (MST)' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "taxCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company address' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "companyAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice pattern (mẫu số)' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "pattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice serial (ký hiệu)' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "serial", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default currency', default: 'VND' }),
    __metadata("design:type", String)
], SaveProviderConfigNatsRequest.prototype, "defaultCurrency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default VAT rate', default: 8 }),
    __metadata("design:type", Number)
], SaveProviderConfigNatsRequest.prototype, "defaultVatRate", void 0);
class GetProviderConfigNatsRequest {
    tenantId;
    hotelId;
}
exports.GetProviderConfigNatsRequest = GetProviderConfigNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetProviderConfigNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetProviderConfigNatsRequest.prototype, "hotelId", void 0);
// ============================================================================
// CANCEL / ADJUST / REPLACE REQUEST TYPES
// ============================================================================
class CancelEInvoiceNatsRequest {
    id;
    tenantId;
    hotelId;
    reason;
    userId;
    userName;
}
exports.CancelEInvoiceNatsRequest = CancelEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-Invoice ID' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for cancellation' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], CancelEInvoiceNatsRequest.prototype, "userName", void 0);
class AdjustEInvoiceNatsRequest {
    originalEInvoiceId;
    tenantId;
    hotelId;
    reason;
    items;
    userId;
    userName;
}
exports.AdjustEInvoiceNatsRequest = AdjustEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original E-Invoice ID to adjust' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "originalEInvoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for adjustment' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Adjusted items (if changing line items)', type: [EInvoiceItemInput] }),
    __metadata("design:type", Array)
], AdjustEInvoiceNatsRequest.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], AdjustEInvoiceNatsRequest.prototype, "userName", void 0);
class ReplaceEInvoiceNatsRequest {
    originalEInvoiceId;
    tenantId;
    hotelId;
    reason;
    items;
    customerName;
    customerTaxCode;
    customerAddress;
    userId;
    userName;
}
exports.ReplaceEInvoiceNatsRequest = ReplaceEInvoiceNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Original E-Invoice ID to replace' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "originalEInvoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for replacement' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Replacement items (if changing line items)', type: [EInvoiceItemInput] }),
    __metadata("design:type", Array)
], ReplaceEInvoiceNatsRequest.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Override customer info' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User ID' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User name' }),
    __metadata("design:type", String)
], ReplaceEInvoiceNatsRequest.prototype, "userName", void 0);
//# sourceMappingURL=index.js.map