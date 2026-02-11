"use strict";
/**
 * Invoice Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for invoice operations
 * via NATS messaging between API Gateway and Payment Service
 *
 * Patterns:
 * - invoice.create
 * - invoice.createManual
 * - invoice.findAll
 * - invoice.findOne
 * - invoice.send
 * - invoice.pdf
 * - invoice.updateStatus
 *
 * Handler: payment-service (invoices module)
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
exports.GetPaymentInvoicesData = exports.InvoiceDataItem = exports.InvoiceItemData = exports.PaymentInvoiceStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
var PaymentInvoiceStatus;
(function (PaymentInvoiceStatus) {
    PaymentInvoiceStatus["DRAFT"] = "draft";
    PaymentInvoiceStatus["SENT"] = "sent";
    PaymentInvoiceStatus["PAID"] = "paid";
    PaymentInvoiceStatus["OVERDUE"] = "overdue";
    PaymentInvoiceStatus["CANCELLED"] = "cancelled";
})(PaymentInvoiceStatus || (exports.PaymentInvoiceStatus = PaymentInvoiceStatus = {}));
// ============================================================================
// ENRICHED INVOICE TYPES (from NATS handler - matches actual response)
// ============================================================================
/**
 * Invoice item data with full details including tax, discount calculations
 * This matches what the handler actually returns
 */
class InvoiceItemData {
    id;
    description;
    quantity;
    unitPrice;
    amount;
    subtotal;
    tax;
    taxAmount;
    taxRate;
    discount;
    total;
}
exports.InvoiceItemData = InvoiceItemData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item ID' }),
    __metadata("design:type", String)
], InvoiceItemData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item description' }),
    __metadata("design:type", String)
], InvoiceItemData.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal before tax and discount' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "tax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount (alias)' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax rate percentage' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount after tax and discount' }),
    __metadata("design:type", Number)
], InvoiceItemData.prototype, "total", void 0);
/**
 * Enriched invoice data with customer, booking details and calculated fields
 * This matches what the NATS handler actually returns in invoice list responses
 * Replaces the simpler PaymentInvoice type for list responses
 */
class InvoiceDataItem {
    id;
    invoiceNumber;
    bookingId;
    bookingCode;
    customerId;
    guestName;
    guestEmail;
    customerName;
    customerAddress;
    customerTaxCode;
    amount;
    subtotal;
    tax;
    taxAmount;
    taxRate;
    discount;
    totalAmount;
    total;
    paidAmount;
    remainingAmount;
    currency;
    status;
    paymentStatus;
    dueDate;
    issuedDate;
    issuedAt;
    paidAt;
    notes;
    tenantId;
    hotelId;
    createdAt;
    updatedAt;
    items;
}
exports.InvoiceDataItem = InvoiceDataItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice number' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "invoiceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer address', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer tax code', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "customerTaxCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice amount' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal before tax and discount' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "tax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax amount (alias)' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tax rate percentage' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total (alias)' }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid amount', required: false }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Remaining amount', required: false }),
    __metadata("design:type", Number)
], InvoiceDataItem.prototype, "remainingAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice status' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Due date', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Issued date', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "issuedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Issued at timestamp', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "issuedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid at timestamp', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "paidAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', required: false }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at timestamp' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated at timestamp' }),
    __metadata("design:type", String)
], InvoiceDataItem.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice items', type: [InvoiceItemData], required: false }),
    __metadata("design:type", Array)
], InvoiceDataItem.prototype, "items", void 0);
class GetPaymentInvoicesData {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.GetPaymentInvoicesData = GetPaymentInvoicesData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of invoices', type: [InvoiceDataItem] }),
    __metadata("design:type", Array)
], GetPaymentInvoicesData.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of invoices' }),
    __metadata("design:type", Number)
], GetPaymentInvoicesData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], GetPaymentInvoicesData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], GetPaymentInvoicesData.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages', required: false }),
    __metadata("design:type", Number)
], GetPaymentInvoicesData.prototype, "totalPages", void 0);
//# sourceMappingURL=invoice.nats.js.map