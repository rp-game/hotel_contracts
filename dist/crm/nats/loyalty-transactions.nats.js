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
 * Matches entity transaction types for proper database queries
 */
var LoyaltyTransactionType;
(function (LoyaltyTransactionType) {
    LoyaltyTransactionType["EARN_POINTS"] = "EARN_POINTS";
    LoyaltyTransactionType["REDEEM_POINTS"] = "REDEEM_POINTS";
    LoyaltyTransactionType["ADJUSTMENT_ADD"] = "ADJUSTMENT_ADD";
    LoyaltyTransactionType["ADJUSTMENT_DEDUCT"] = "ADJUSTMENT_DEDUCT";
    LoyaltyTransactionType["EXPIRE_POINTS"] = "EXPIRE_POINTS";
    LoyaltyTransactionType["TIER_UPGRADE"] = "TIER_UPGRADE";
    LoyaltyTransactionType["TIER_DOWNGRADE"] = "TIER_DOWNGRADE";
    LoyaltyTransactionType["JOIN_PROGRAM"] = "JOIN_PROGRAM";
})(LoyaltyTransactionType || (exports.LoyaltyTransactionType = LoyaltyTransactionType = {}));
//# sourceMappingURL=loyalty-transactions.nats.js.map