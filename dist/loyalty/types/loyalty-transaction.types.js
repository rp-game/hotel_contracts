"use strict";
/**
 * Loyalty Transaction Types and Contracts
 * Used for NATS messaging between API Gateway and CRM Service
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyTransactionType = void 0;
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
//# sourceMappingURL=loyalty-transaction.types.js.map