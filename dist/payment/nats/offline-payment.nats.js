"use strict";
/**
 * Offline Payment NATS Contract
 *
 * NATS Pattern: offline-payment.create
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: recording offline payments (cash, bank transfer) for bookings
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePaymentStatus = exports.OfflinePaymentMethod = void 0;
/**
 * Offline payment method enum
 */
var OfflinePaymentMethod;
(function (OfflinePaymentMethod) {
    OfflinePaymentMethod["CASH"] = "CASH";
    OfflinePaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
})(OfflinePaymentMethod || (exports.OfflinePaymentMethod = OfflinePaymentMethod = {}));
/**
 * Offline payment status enum
 */
var OfflinePaymentStatus;
(function (OfflinePaymentStatus) {
    OfflinePaymentStatus["PENDING"] = "PENDING";
    OfflinePaymentStatus["CONFIRMED"] = "CONFIRMED";
    OfflinePaymentStatus["REJECTED"] = "REJECTED";
})(OfflinePaymentStatus || (exports.OfflinePaymentStatus = OfflinePaymentStatus = {}));
//# sourceMappingURL=offline-payment.nats.js.map