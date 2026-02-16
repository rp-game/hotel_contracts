/**
 * Transaction Domain NATS Message Contracts
 *
 * These contracts are used for:
 * - NATS message payloads in payment-service
 * - REST API responses in api-gateway
 * - TypeScript client types in frontend
 *
 * Patterns:
 * - transaction.findAll
 * - transaction.retry
 * - transaction.refund
 *
 * Handler: payment-service (transactions module)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

// ============================================================================
// SHARED TYPES
// ============================================================================

export enum TransactionStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export enum TransactionType {
  PAYMENT = 'PAYMENT',
  REFUND = 'REFUND',
  ADJUSTMENT = 'ADJUSTMENT',
}

/**
 * Payment Transaction entity - used in both NATS and REST responses
 * Fields match the payment_transactions database table schema
 */
export class PaymentTransactionNatsResponse {
  @ApiProperty({ description: 'Transaction ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID for multi-tenancy' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID within the tenant' })
  hotelId: string;

  @ApiPropertyOptional({ description: 'Associated payment ID' })
  paymentId?: string;

  @ApiPropertyOptional({ description: 'Associated invoice ID' })
  invoiceId?: string;

  @ApiProperty({ description: 'Transaction amount' })
  amount: number;

  @ApiProperty({ description: 'Currency code (e.g., VND)' })
  currency: string;

  @ApiProperty({ description: 'Transaction type (PAYMENT, REFUND, ADJUSTMENT)', enum: TransactionType })
  type: TransactionType | string;

  @ApiProperty({ description: 'Payment method used', enum: ['CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'CASH', 'EWALLET'] })
  method: string;

  @ApiProperty({ description: 'Transaction status', enum: TransactionStatus })
  status: TransactionStatus | string;

  @ApiPropertyOptional({ description: 'Gateway transaction ID for reconciliation' })
  gatewayTransactionId?: string;

  @ApiPropertyOptional({ description: 'Response from payment gateway' })
  gatewayResponse?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Transaction reference number' })
  transactionReference?: string;

  @ApiPropertyOptional({ description: 'User ID who processed the transaction' })
  processedBy?: string;

  @ApiPropertyOptional({ description: 'Notes about the transaction' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Additional metadata for the transaction' })
  metadata?: Record<string, any>;

  @ApiProperty({ description: 'Transaction creation timestamp' })
  createdAt: string;

  @ApiPropertyOptional({ description: 'Transaction completion timestamp' })
  completedAt?: string;

  @ApiPropertyOptional({ description: 'Last update timestamp' })
  updatedAt?: string;
}

// ============================================================================
// GET TRANSACTIONS (GET /transactions)
// ============================================================================

export class GetTransactionsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID (optional, for hotel-level filtering)' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by transaction status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by transaction type' })
  type?: string;

  @ApiPropertyOptional({ description: 'Filter by payment method' })
  paymentMethod?: string;

  @ApiPropertyOptional({ description: 'Start date for filtering (ISO format)' })
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date for filtering (ISO format)' })
  endDate?: string;

  @ApiPropertyOptional({ description: 'Filter by booking ID' })
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Page number for pagination', example: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', example: 10 })
  limit?: number;
}

export class GetTransactionsDataNatsResponse {
  @ApiProperty({ description: 'List of transactions', type: [PaymentTransactionNatsResponse] })
  transactions: PaymentTransactionNatsResponse[];

  @ApiProperty({ description: 'Total number of transactions' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

export type GetTransactionsNatsResponse = NatsResponse<GetTransactionsDataNatsResponse>;

// ============================================================================
// RETRY TRANSACTION (POST /transactions/:id/retry)
// ============================================================================

export class RetryTransactionNatsRequest {
  @ApiProperty({ description: 'Transaction ID to retry' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;
}

export class RetryTransactionDataNatsResponse {
  @ApiProperty({ description: 'Transaction ID' })
  id: string;

  @ApiProperty({ description: 'New transaction status' })
  status: string;

  @ApiProperty({ description: 'Previous transaction status' })
  previousStatus: string;

  @ApiProperty({ description: 'Retry attempt number' })
  retryAttempt: number;

  @ApiPropertyOptional({ description: 'Next retry timestamp' })
  nextRetryAt?: string;

  @ApiProperty({ description: 'Success message' })
  message: string;
}

export type RetryTransactionNatsResponse = NatsResponse<RetryTransactionDataNatsResponse>;

// ============================================================================
// REFUND TRANSACTION (POST /transactions/:id/refund)
// ============================================================================

export class RefundTransactionNatsRequest {
  @ApiProperty({ description: 'Transaction ID to refund' })
  id: string;

  @ApiPropertyOptional({ description: 'Refund amount (partial refund). If not specified, full refund is performed.' })
  amount?: number;

  @ApiPropertyOptional({ description: 'Reason for refund' })
  reason?: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;
}

export class RefundTransactionDataNatsResponse {
  @ApiProperty({ description: 'Refund transaction details', type: PaymentTransactionNatsResponse })
  refundTransaction: PaymentTransactionNatsResponse;

  @ApiProperty({ description: 'Original transaction details', type: PaymentTransactionNatsResponse })
  originalTransaction: PaymentTransactionNatsResponse;

  @ApiProperty({ description: 'Status message' })
  message: string;
}

export type RefundTransactionNatsResponse = NatsResponse<RefundTransactionDataNatsResponse>;
