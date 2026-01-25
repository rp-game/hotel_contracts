import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Get Payment Statistics NATS Contract
 * Pattern: payment.stats
 * Retrieves aggregated payment statistics for a tenant/hotel
 */
export interface GetPaymentStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
  startDate?: string;
  endDate?: string;
}

export interface PaymentStatsData {
  totalRevenue: number;
  successfulTransactions: number;
  failedTransactions: number;
  pendingTransactions: number;
  refundedAmount: number;
  averageTransactionAmount: number;
  currencyCode?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
}

export type GetPaymentStatsNatsResponse = NatsResponse<PaymentStatsData>;
