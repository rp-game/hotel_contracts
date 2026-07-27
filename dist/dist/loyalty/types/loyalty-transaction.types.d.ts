/**
 * Loyalty Transaction Types and Contracts
 * Used for NATS messaging between API Gateway and CRM Service
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
 * Request payload for fetching loyalty transactions by loyalty program
 */
export interface FindAllTransactionsByProgramRequest {
    tenantId: string;
    programId: string;
    page?: number;
    limit?: number;
    type?: LoyaltyTransactionType;
}
/**
 * Loyalty Transaction DTO for API responses
 */
export interface LoyaltyTransactionDto {
    id: string;
    tenantId: string;
    memberId: string;
    transactionType: LoyaltyTransactionType;
    pointsChanged: number;
    pointsBalanceAfter?: number;
    transactionDate: Date;
    description?: string;
    referenceType?: string;
    referenceId?: string;
    relatedInteractionId?: string;
    metadata?: Record<string, unknown>;
    staffId?: string;
    pointsExpirationDate?: Date;
    createdAt: Date;
}
/**
 * List response for loyalty transactions
 */
export interface LoyaltyTransactionsListResponse {
    transactions: LoyaltyTransactionDto[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=loyalty-transaction.types.d.ts.map