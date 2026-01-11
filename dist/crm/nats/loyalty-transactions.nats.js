"use strict";
/**
 * Loyalty Transactions NATS Contracts
 *
 * Patterns:
 * - crm.loyalty_transaction.create
 * - crm.loyalty_transaction.findAllByTenant
 * - crm.loyalty_transaction.findAllByMember
 * - crm.loyalty_transaction.findOneById
 * - crm.loyalty_transaction.findAllByCustomer
 * - crm.loyalty_transaction.findAllByProgram
 *
 * Handler: crm-service (LoyaltyTransactionsController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyTransactionType = void 0;
/**
 * Loyalty Transaction Type Enum
 */
var LoyaltyTransactionType;
(function (LoyaltyTransactionType) {
    LoyaltyTransactionType["EARN"] = "EARN";
    LoyaltyTransactionType["REDEEM"] = "REDEEM";
    LoyaltyTransactionType["ADJUST"] = "ADJUST";
    LoyaltyTransactionType["EXPIRE"] = "EXPIRE";
    LoyaltyTransactionType["BONUS"] = "BONUS";
})(LoyaltyTransactionType || (exports.LoyaltyTransactionType = LoyaltyTransactionType = {}));
//# sourceMappingURL=loyalty-transactions.nats.js.map