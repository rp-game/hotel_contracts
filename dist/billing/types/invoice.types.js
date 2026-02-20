"use strict";
/**
 * Invoice Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
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
exports.CreateInvoiceRequest = exports.InvoiceListResponse = exports.InvoiceListQuery = exports.PlatformInvoice = exports.InvoiceItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("./enums");
/**
 * Invoice Item
 */
class InvoiceItem {
    id;
    itemType;
    description;
    unitPrice;
    quantity;
    totalAmount;
    usagePeriodStart;
    usagePeriodEnd;
    usageDetails;
    taxRate;
    taxAmount;
    isTaxable;
}
exports.InvoiceItem = InvoiceItem;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Invoice item ID' }),
    __metadata("design:type", String)
], InvoiceItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.InvoiceItemType, description: 'Item type' }),
    __metadata("design:type", String)
], InvoiceItem.prototype, "itemType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item description' }),
    __metadata("design:type", String)
], InvoiceItem.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage period start date' }),
    __metadata("design:type", Date)
], InvoiceItem.prototype, "usagePeriodStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage period end date' }),
    __metadata("design:type", Date)
], InvoiceItem.prototype, "usagePeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage details' }),
    __metadata("design:type", Object)
], InvoiceItem.prototype, "usageDetails", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax rate (decimal)' }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount' }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether item is taxable' }),
    __metadata("design:type", Boolean)
], InvoiceItem.prototype, "isTaxable", void 0);
/**
 * Platform Invoice
 */
class PlatformInvoice {
    id;
    invoiceNumber;
    tenantId;
    subscriptionId;
    billingCycle;
    status;
    billingPeriodStart;
    billingPeriodEnd;
    issueDate;
    dueDate;
    paidDate;
    baseAmount;
    usageAmount;
    taxAmount;
    discountAmount;
    totalAmount;
    amountPaid;
    balanceDue;
    currency;
    tenantName;
    tenantEmail;
    billingAddress;
    usageMetrics;
    items;
    notes;
    createdAt;
    updatedAt;
}
exports.PlatformInvoice = PlatformInvoice;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice number' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.BillingCycle, description: 'Billing cycle' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.PlatformInvoiceStatus, description: 'Invoice status' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing period start date' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "billingPeriodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing period end date' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "billingPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Issue date' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Due date' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Paid date' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "paidDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base amount' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Usage amount' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "usageAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "discountAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount paid' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "amountPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Balance due' }),
    __metadata("design:type", Number)
], PlatformInvoice.prototype, "balanceDue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant name' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "tenantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant email' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "tenantEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Billing address' }),
    __metadata("design:type", Object)
], PlatformInvoice.prototype, "billingAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage metrics' }),
    __metadata("design:type", Object)
], PlatformInvoice.prototype, "usageMetrics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice line items', type: [InvoiceItem] }),
    __metadata("design:type", Array)
], PlatformInvoice.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], PlatformInvoice.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at' }),
    __metadata("design:type", Date)
], PlatformInvoice.prototype, "updatedAt", void 0);
/**
 * Invoice List Query
 * Used for NATS request and REST query params
 */
class InvoiceListQuery {
    tenantId;
    status;
    billingCycle;
    issueStartDate;
    issueEndDate;
    dueStartDate;
    dueEndDate;
    minAmount;
    maxAmount;
    tenantName;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.InvoiceListQuery = InvoiceListQuery;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant ID' }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.PlatformInvoiceStatus, description: 'Filter by status' }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.BillingCycle, description: 'Filter by billing cycle' }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issue start date' }),
    __metadata("design:type", Date)
], InvoiceListQuery.prototype, "issueStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Issue end date' }),
    __metadata("design:type", Date)
], InvoiceListQuery.prototype, "issueEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Due start date' }),
    __metadata("design:type", Date)
], InvoiceListQuery.prototype, "dueStartDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Due end date' }),
    __metadata("design:type", Date)
], InvoiceListQuery.prototype, "dueEndDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Minimum amount' }),
    __metadata("design:type", Number)
], InvoiceListQuery.prototype, "minAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Maximum amount' }),
    __metadata("design:type", Number)
], InvoiceListQuery.prototype, "maxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by tenant name' }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "tenantName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number', default: 1 }),
    __metadata("design:type", Number)
], InvoiceListQuery.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 20 }),
    __metadata("design:type", Number)
], InvoiceListQuery.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort by field' }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    __metadata("design:type", String)
], InvoiceListQuery.prototype, "sortOrder", void 0);
/**
 * Invoice List Response
 * Used for both NATS response and REST API response
 */
class InvoiceListResponse {
    data;
    total;
    page;
    limit;
}
exports.InvoiceListResponse = InvoiceListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of invoices', type: [PlatformInvoice] }),
    __metadata("design:type", Array)
], InvoiceListResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of invoices' }),
    __metadata("design:type", Number)
], InvoiceListResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], InvoiceListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], InvoiceListResponse.prototype, "limit", void 0);
/**
 * Create Invoice Request
 * Used for both NATS request and REST API request
 */
class CreateInvoiceRequest {
    tenantId;
    subscriptionId;
    billingCycle;
    billingPeriodStart;
    billingPeriodEnd;
    issueDate;
    dueDate;
    baseAmount;
    usageAmount;
    taxAmount;
    discountAmount;
    totalAmount;
    tenantName;
    tenantEmail;
    billingAddress;
    usageMetrics;
    notes;
    items;
}
exports.CreateInvoiceRequest = CreateInvoiceRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subscription ID' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.BillingCycle, description: 'Billing cycle' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "billingCycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing period start date' }),
    __metadata("design:type", Date)
], CreateInvoiceRequest.prototype, "billingPeriodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing period end date' }),
    __metadata("design:type", Date)
], CreateInvoiceRequest.prototype, "billingPeriodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Issue date' }),
    __metadata("design:type", Date)
], CreateInvoiceRequest.prototype, "issueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Due date' }),
    __metadata("design:type", Date)
], CreateInvoiceRequest.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base amount' }),
    __metadata("design:type", Number)
], CreateInvoiceRequest.prototype, "baseAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage amount', default: 0 }),
    __metadata("design:type", Number)
], CreateInvoiceRequest.prototype, "usageAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tax amount', default: 0 }),
    __metadata("design:type", Number)
], CreateInvoiceRequest.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Discount amount', default: 0 }),
    __metadata("design:type", Number)
], CreateInvoiceRequest.prototype, "discountAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], CreateInvoiceRequest.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant name' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "tenantName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant email' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "tenantEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Billing address' }),
    __metadata("design:type", Object)
], CreateInvoiceRequest.prototype, "billingAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Usage metrics' }),
    __metadata("design:type", Object)
], CreateInvoiceRequest.prototype, "usageMetrics", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    __metadata("design:type", String)
], CreateInvoiceRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice line items', type: [InvoiceItem] }),
    __metadata("design:type", Array)
], CreateInvoiceRequest.prototype, "items", void 0);
//# sourceMappingURL=invoice.types.js.map