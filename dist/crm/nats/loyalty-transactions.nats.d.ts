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
import { NatsResponse } from '../../common';
/**
 * Loyalty Transaction Type Enum
 * Matches entity transaction types for proper database queries
 */
export declare enum LoyaltyTransactionType {
    EARN_POINTS = "EARN_POINTS",
    REDEEM_POINTS = "REDEEM_POINTS",
    ADJUSTMENT_ADD = "ADJUSTMENT_ADD",
    ADJUSTMENT_DEDUCT = "ADJUSTMENT_DEDUCT",
    EXPIRE_POINTS = "EXPIRE_POINTS",
    TIER_UPGRADE = "TIER_UPGRADE",
    TIER_DOWNGRADE = "TIER_DOWNGRADE",
    JOIN_PROGRAM = "JOIN_PROGRAM"
}
/**
 * Create Loyalty Transaction Request
 * Pattern: crm.loyalty_transaction.create
 */
export interface CreateLoyaltyTransactionNatsRequest {
    tenantId: string;
    memberId: string;
    transactionType: LoyaltyTransactionType;
    pointsChanged: number;
    transactionDate: string;
    description?: string;
    relatedInteractionId?: string;
    staffId?: string;
    pointsExpirationDate?: string;
    referenceId?: string;
    referenceType?: string;
    metadata?: Record<string, any>;
}
/**
 * Loyalty Transaction Response
 */
export declare class LoyaltyTransactionNatsResponse {
    id: string;
    tenantId: string;
    memberId: string;
    programId: string;
    customerId: string;
    transactionType: LoyaltyTransactionType;
    pointsChanged: number;
    description?: string;
    referenceId?: string;
    referenceType?: string;
    balance: number;
    balanceBefore: number;
    balanceAfter: number;
    metadata?: Record<string, any>;
    transactionDate: string;
    pointsExpirationDate?: string;
    relatedInteractionId?: string;
    staffId?: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * List Loyalty Transactions Response
 */
export declare class ListLoyaltyTransactionsNatsResponse {
    transactions: LoyaltyTransactionNatsResponse[];
    total: number;
    page?: number;
    limit?: number;
}
/**
 * Create Transaction Response
 */
export type CreateLoyaltyTransactionNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse>;
/**
 * Find All Transactions By Tenant Request
 * Pattern: crm.loyalty_transaction.findAllByTenant
 */
export interface FindAllTransactionsByTenantNatsRequest {
    tenantId: string;
    page?: number;
    limit?: number;
    type?: LoyaltyTransactionType;
}
/**
 * Find All Transactions By Tenant Response
 */
export type FindAllTransactionsByTenantNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;
/**
 * Find All By Member Request
 * Pattern: crm.loyalty_transaction.findAllByMember
 */
export interface FindAllByMemberNatsRequest {
    tenantId: string;
    memberId: string;
    page?: number;
    limit?: number;
}
/**
 * Find All By Member Response
 */
export type FindAllByMemberNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse[]>;
/**
 * Find One Transaction Request
 * Pattern: crm.loyalty_transaction.findOneById
 */
export interface FindOneTransactionNatsRequest {
    tenantId: string;
    transactionId: string;
}
/**
 * Find One Transaction Response
 */
export type FindOneTransactionNatsResponse = NatsResponse<LoyaltyTransactionNatsResponse>;
/**
 * Find All Transactions By Customer Request
 * Pattern: crm.loyalty_transaction.findAllByCustomer
 */
export interface FindAllTransactionsByCustomerNatsRequest {
    tenantId: string;
    customerId: string;
    page?: number;
    limit?: number;
}
/**
 * Find All Transactions By Customer Response
 */
export type FindAllTransactionsByCustomerNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;
/**
 * Find All By Program Request
 * Pattern: crm.loyalty_transaction.findAllByProgram
 */
export interface FindAllByProgramNatsRequest {
    tenantId: string;
    programId: string;
    type?: LoyaltyTransactionType;
    page?: number;
    limit?: number;
}
/**
 * Find All By Program Response
 */
export type FindAllByProgramNatsResponse = NatsResponse<ListLoyaltyTransactionsNatsResponse>;
//# sourceMappingURL=loyalty-transactions.nats.d.ts.map