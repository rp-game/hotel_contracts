import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Get Payment Statistics NATS Contract
 * Pattern: payment.stats
 * Retrieves aggregated payment statistics for a tenant/hotel/chain
 */
export declare class GetPaymentStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
    chainId?: string;
    startDate?: string;
    endDate?: string;
    groupBy?: string;
}
export declare class PaymentStatsPeriodData {
    startDate: string;
    endDate: string;
}
export declare class PaymentStatsDataNatsResponse {
    totalRevenue: number;
    successfulTransactions: number;
    failedTransactions: number;
    pendingTransactions?: number;
    refundedAmount: number;
    averageTransactionAmount: number;
    currencyCode?: string;
    period?: PaymentStatsPeriodData;
}
export type GetPaymentStatsNatsResponse = NatsResponse<PaymentStatsDataNatsResponse>;
//# sourceMappingURL=stats.nats.d.ts.map