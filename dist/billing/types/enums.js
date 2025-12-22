"use strict";
/**
 * Platform Billing Enums
 *
 * All enum types used in platform billing system
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemType = exports.PlatformPaymentMethod = exports.PaymentStatus = exports.BillingCycle = exports.PlatformInvoiceStatus = void 0;
/**
 * Platform Invoice Status
 */
var PlatformInvoiceStatus;
(function (PlatformInvoiceStatus) {
    PlatformInvoiceStatus["DRAFT"] = "DRAFT";
    PlatformInvoiceStatus["ISSUED"] = "ISSUED";
    PlatformInvoiceStatus["PAID"] = "PAID";
    PlatformInvoiceStatus["OVERDUE"] = "OVERDUE";
    PlatformInvoiceStatus["CANCELLED"] = "CANCELLED";
    PlatformInvoiceStatus["FAILED"] = "FAILED";
})(PlatformInvoiceStatus || (exports.PlatformInvoiceStatus = PlatformInvoiceStatus = {}));
/**
 * Billing Cycle
 */
var BillingCycle;
(function (BillingCycle) {
    BillingCycle["MONTHLY"] = "MONTHLY";
    BillingCycle["QUARTERLY"] = "QUARTERLY";
    BillingCycle["YEARLY"] = "YEARLY";
})(BillingCycle || (exports.BillingCycle = BillingCycle = {}));
/**
 * Payment Status
 */
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["PROCESSING"] = "PROCESSING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["CANCELLED"] = "CANCELLED";
    PaymentStatus["REFUNDED"] = "REFUNDED";
    PaymentStatus["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
/**
 * Platform Payment Method
 */
var PlatformPaymentMethod;
(function (PlatformPaymentMethod) {
    PlatformPaymentMethod["CREDIT_CARD"] = "CREDIT_CARD";
    PlatformPaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
    PlatformPaymentMethod["PAYPAL"] = "PAYPAL";
    PlatformPaymentMethod["STRIPE"] = "STRIPE";
    PlatformPaymentMethod["MANUAL"] = "MANUAL";
    PlatformPaymentMethod["ACH"] = "ACH";
})(PlatformPaymentMethod || (exports.PlatformPaymentMethod = PlatformPaymentMethod = {}));
/**
 * Invoice Item Type
 */
var InvoiceItemType;
(function (InvoiceItemType) {
    InvoiceItemType["SUBSCRIPTION_FEE"] = "SUBSCRIPTION_FEE";
    InvoiceItemType["USAGE_FEE"] = "USAGE_FEE";
    InvoiceItemType["SETUP_FEE"] = "SETUP_FEE";
    InvoiceItemType["ADDON_FEE"] = "ADDON_FEE";
    InvoiceItemType["DISCOUNT"] = "DISCOUNT";
    InvoiceItemType["TAX"] = "TAX";
})(InvoiceItemType || (exports.InvoiceItemType = InvoiceItemType = {}));
//# sourceMappingURL=enums.js.map