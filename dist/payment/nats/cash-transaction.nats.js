"use strict";
/**
 * Cash Transaction NATS Contract
 *
 * NATS Patterns: cash-transaction.create, cash-transaction.list
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: recording cash drawer movements (thu/chi ngoài) not tied to guest payments —
 *          paid-out (taxi/ship hộ khách, mua vật tư, tạm ứng, nộp két, hoàn tiền mặt),
 *          paid-in (thu dịch vụ ngoài, bổ sung quỹ)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashTransactionCategory = exports.CashTransactionDirection = void 0;
/**
 * Direction of the cash movement relative to the cash drawer
 */
var CashTransactionDirection;
(function (CashTransactionDirection) {
    CashTransactionDirection["IN"] = "IN";
    CashTransactionDirection["OUT"] = "OUT";
})(CashTransactionDirection || (exports.CashTransactionDirection = CashTransactionDirection = {}));
/**
 * Category of the cash movement
 */
var CashTransactionCategory;
(function (CashTransactionCategory) {
    CashTransactionCategory["PAID_OUT"] = "PAID_OUT";
    CashTransactionCategory["SUPPLY"] = "SUPPLY";
    CashTransactionCategory["ADVANCE"] = "ADVANCE";
    CashTransactionCategory["CASH_DROP"] = "CASH_DROP";
    CashTransactionCategory["REFUND"] = "REFUND";
    CashTransactionCategory["CORRECTION"] = "CORRECTION";
    CashTransactionCategory["MISC_EXPENSE"] = "MISC_EXPENSE";
    CashTransactionCategory["MISC_INCOME"] = "MISC_INCOME";
    CashTransactionCategory["CASH_TOPUP"] = "CASH_TOPUP";
    CashTransactionCategory["MISC"] = "MISC";
})(CashTransactionCategory || (exports.CashTransactionCategory = CashTransactionCategory = {}));
//# sourceMappingURL=cash-transaction.nats.js.map