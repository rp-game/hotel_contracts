"use strict";
/**
 * Transaction Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for payment transaction operations
 * via NATS messaging between API Gateway and Payment Service
 *
 * Patterns:
 * - transaction.findAll
 * - transaction.retry
 * - transaction.refund
 *
 * Handler: payment-service (transactions module)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.TransactionStatus = void 0;
// ============================================================================
// SHARED TYPES
// ============================================================================
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["FAILED"] = "failed";
    TransactionStatus["CANCELLED"] = "cancelled";
    TransactionStatus["REFUNDED"] = "refunded";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["REFUND"] = "REFUND";
    TransactionType["ADJUSTMENT"] = "ADJUSTMENT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
//# sourceMappingURL=transaction.nats.js.map