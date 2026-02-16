import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Get Payment Statistics NATS Contract
 * Pattern: payment.stats
 * Retrieves aggregated payment statistics for a tenant/hotel/chain
 */
export class GetPaymentStatsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (optional, for hotel-level filtering)' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Chain ID (optional, for chain-level filtering)' })
  chainId?: string;

  @ApiPropertyOptional({ description: 'Start date for statistics (ISO format)' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date for statistics (ISO format)' })
  endDate?: string;

  @ApiPropertyOptional({ description: 'Group results by time period (e.g., daily, monthly)' })
  groupBy?: string;
}

export class PaymentStatsPeriodData {
  @ApiProperty({ description: 'Period start date' })
  startDate: string;

  @ApiProperty({ description: 'Period end date' })
  endDate: string;
}

export class PaymentStatsDataNatsResponse {
  @ApiProperty({ description: 'Total revenue in the period' })
  totalRevenue: number;

  @ApiProperty({ description: 'Number of successful transactions' })
  successfulTransactions: number;

  @ApiProperty({ description: 'Number of failed transactions' })
  failedTransactions: number;

  @ApiPropertyOptional({ description: 'Number of pending transactions' })
  pendingTransactions?: number;

  @ApiProperty({ description: 'Total refunded amount' })
  refundedAmount: number;

  @ApiProperty({ description: 'Average transaction amount' })
  averageTransactionAmount: number;

  @ApiPropertyOptional({ description: 'Currency code (e.g., VND)' })
  currencyCode?: string;

  @ApiPropertyOptional({ description: 'Period details', type: PaymentStatsPeriodData })
  period?: PaymentStatsPeriodData;
}

export type GetPaymentStatsNatsResponse = NatsResponse<PaymentStatsDataNatsResponse>;
