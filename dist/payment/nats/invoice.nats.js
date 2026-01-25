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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInvoiceStatus = void 0;
var PaymentInvoiceStatus;
(function (PaymentInvoiceStatus) {
    PaymentInvoiceStatus["DRAFT"] = "draft";
    PaymentInvoiceStatus["SENT"] = "sent";
    PaymentInvoiceStatus["PAID"] = "paid";
    PaymentInvoiceStatus["OVERDUE"] = "overdue";
    PaymentInvoiceStatus["CANCELLED"] = "cancelled";
})(PaymentInvoiceStatus || (exports.PaymentInvoiceStatus = PaymentInvoiceStatus = {}));
//# sourceMappingURL=invoice.nats.js.map