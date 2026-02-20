/**
 * Payment Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentStatus, PlatformPaymentMethod } from './enums';

/**
 * Platform Payment
 */
export class PlatformPayment {
  @ApiProperty({ description: 'Payment ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Invoice ID' })
  invoiceId: string;

  @ApiProperty({ description: 'Payment amount' })
  amount: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ enum: PlatformPaymentMethod, description: 'Payment method' })
  paymentMethod: PlatformPaymentMethod;

  @ApiProperty({ enum: PaymentStatus, description: 'Payment status' })
  status: PaymentStatus;

  @ApiProperty({ description: 'Payment date' })
  paymentDate: Date;

  @ApiPropertyOptional({ description: 'Payment gateway' })
  gateway?: string;

  @ApiPropertyOptional({ description: 'Gateway transaction ID' })
  gatewayTransactionId?: string;

  @ApiPropertyOptional({ description: 'Raw gateway response' })
  gatewayResponse?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Payment details' })
  paymentDetails?: {
    cardLast4?: string;
    cardBrand?: string;
    bankName?: string;
    accountLast4?: string;
    paypalEmail?: string;
    description?: string;
  };

  @ApiProperty({ description: 'Processing fee' })
  processingFee: number;

  @ApiProperty({ description: 'Net amount after fees' })
  netAmount: number;

  @ApiProperty({ description: 'Number of payment attempts' })
  attemptCount: number;

  @ApiPropertyOptional({ description: 'Failure reason if payment failed' })
  failureReason?: string;

  @ApiPropertyOptional({ description: 'Next retry time for failed payments' })
  nextRetryAt?: Date;

  @ApiPropertyOptional({ description: 'Refunded amount' })
  refundedAmount?: number;

  @ApiPropertyOptional({ description: 'Refund date' })
  refundedAt?: Date;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}

/**
 * Payment List Query
 * Used for NATS request and REST query params
 */
export class PaymentListQuery {
  @ApiPropertyOptional({ description: 'Filter by tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Filter by invoice ID' })
  invoiceId?: string;

  @ApiPropertyOptional({ enum: PaymentStatus, description: 'Filter by status' })
  status?: PaymentStatus;

  @ApiPropertyOptional({ enum: PlatformPaymentMethod, description: 'Filter by payment method' })
  paymentMethod?: PlatformPaymentMethod;

  @ApiPropertyOptional({ description: 'Payment start date' })
  paymentStartDate?: Date;

  @ApiPropertyOptional({ description: 'Payment end date' })
  paymentEndDate?: Date;

  @ApiPropertyOptional({ description: 'Minimum amount' })
  minAmount?: number;

  @ApiPropertyOptional({ description: 'Maximum amount' })
  maxAmount?: number;

  @ApiPropertyOptional({ description: 'Filter by gateway' })
  gateway?: string;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort by field' })
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Payment List Response
 * Used for both NATS response and REST API response
 */
export class PaymentListResponse {
  @ApiProperty({ description: 'List of payments', type: [PlatformPayment] })
  data: PlatformPayment[];

  @ApiProperty({ description: 'Total number of payments' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Create Platform Payment Request
 * Used for both NATS request and REST API request
 */
export class CreatePlatformPaymentRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Invoice ID' })
  invoiceId: string;

  @ApiProperty({ description: 'Payment amount' })
  amount: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'VND' })
  currency?: string;

  @ApiProperty({ enum: PlatformPaymentMethod, description: 'Payment method' })
  paymentMethod: PlatformPaymentMethod;

  @ApiPropertyOptional({ enum: PaymentStatus, description: 'Initial payment status', default: PaymentStatus.PENDING })
  status?: PaymentStatus;

  @ApiProperty({ description: 'Payment date' })
  paymentDate: Date;

  @ApiPropertyOptional({ description: 'Payment gateway' })
  gateway?: string;

  @ApiPropertyOptional({ description: 'Gateway transaction ID' })
  gatewayTransactionId?: string;

  @ApiPropertyOptional({ description: 'Raw gateway response' })
  gatewayResponse?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Payment details' })
  paymentDetails?: {
    cardLast4?: string;
    cardBrand?: string;
    bankName?: string;
    accountLast4?: string;
    paypalEmail?: string;
    description?: string;
  };

  @ApiPropertyOptional({ description: 'Processing fee', default: 0 })
  processingFee?: number;

  @ApiProperty({ description: 'Net amount after fees' })
  netAmount: number;

  @ApiPropertyOptional({ description: 'Number of attempts', default: 1 })
  attemptCount?: number;

  @ApiPropertyOptional({ description: 'Failure reason' })
  failureReason?: string;

  @ApiPropertyOptional({ description: 'Next retry time' })
  nextRetryAt?: Date;

  @ApiPropertyOptional({ description: 'Notes' })
  notes?: string;
}
