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
exports.ListLoyaltyTransactionsNatsResponse = exports.LoyaltyTransactionNatsResponse = exports.LoyaltyTransactionType = void 0;
const swagger_1 = require("@nestjs/swagger");
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
/**
 * Loyalty Transaction Response
 */
class LoyaltyTransactionNatsResponse {
    id;
    tenantId;
    memberId;
    programId;
    customerId;
    transactionType;
    pointsChanged;
    description;
    referenceId;
    referenceType;
    balance;
    balanceBefore;
    balanceAfter;
    metadata;
    transactionDate;
    pointsExpirationDate;
    relatedInteractionId;
    staffId;
    createdAt;
    updatedAt;
}
exports.LoyaltyTransactionNatsResponse = LoyaltyTransactionNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty member ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty program ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: LoyaltyTransactionType, description: 'Transaction type' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points changed (positive or negative)' }),
    __metadata("design:type", Number)
], LoyaltyTransactionNatsResponse.prototype, "pointsChanged", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction description' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference ID (booking, order, etc)' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "referenceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reference type' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "referenceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current balance' }),
    __metadata("design:type", Number)
], LoyaltyTransactionNatsResponse.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Balance before transaction' }),
    __metadata("design:type", Number)
], LoyaltyTransactionNatsResponse.prototype, "balanceBefore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Balance after transaction' }),
    __metadata("design:type", Number)
], LoyaltyTransactionNatsResponse.prototype, "balanceAfter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional metadata' }),
    __metadata("design:type", Object)
], LoyaltyTransactionNatsResponse.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "transactionDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Points expiration date' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "pointsExpirationDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Related interaction ID' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "relatedInteractionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Staff ID who performed the transaction' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "staffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], LoyaltyTransactionNatsResponse.prototype, "updatedAt", void 0);
/**
 * List Loyalty Transactions Response
 */
class ListLoyaltyTransactionsNatsResponse {
    transactions;
    total;
    page;
    limit;
}
exports.ListLoyaltyTransactionsNatsResponse = ListLoyaltyTransactionsNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [LoyaltyTransactionNatsResponse], description: 'List of transactions' }),
    __metadata("design:type", Array)
], ListLoyaltyTransactionsNatsResponse.prototype, "transactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of transactions' }),
    __metadata("design:type", Number)
], ListLoyaltyTransactionsNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], ListLoyaltyTransactionsNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], ListLoyaltyTransactionsNatsResponse.prototype, "limit", void 0);
//# sourceMappingURL=loyalty-transactions.nats.js.map