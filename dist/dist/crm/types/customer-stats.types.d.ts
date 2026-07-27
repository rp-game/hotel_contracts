/**
 * Customer Stats Recalculation Types
 * Used for recalculating customer booking statistics from booking service
 */
/**
 * Result of single customer booking stats recalculation
 */
export interface CustomerBookingStatsResult {
    totalBookings: number;
    totalSpent: number;
    lastBookingDate?: Date;
    membershipLevel: string;
    previousTotalBookings: number;
    previousTotalSpent: number;
    previousMembershipLevel: string;
}
/**
 * Individual customer result in bulk recalculation
 */
export interface BulkRecalculationCustomerResult {
    customerId: string;
    email?: string;
    success: boolean;
    error?: string;
}
/**
 * Result of bulk recalculation for all customers in tenant
 */
export interface BulkRecalculationResult {
    totalProcessed: number;
    successful: number;
    failed: number;
    results: BulkRecalculationCustomerResult[];
}
//# sourceMappingURL=customer-stats.types.d.ts.map