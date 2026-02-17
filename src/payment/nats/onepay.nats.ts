/**
 * OnePay Payment Gateway NATS Contract Definitions
 *
 * Defines request/response interfaces for all OnePay payment operations
 * including payment creation, verification, refunds, and status queries.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Request payload for payment.onepay.create pattern
 * Used to initiate a OnePay payment and get payment URL
 */
export class CreateOnePayPaymentRequest {
  @ApiPropertyOptional({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Chain ID for multi-level gateway config', example: 'chain-uuid' })
  @IsOptional()
  @IsString()
  chainId?: string;

  @ApiPropertyOptional({ description: 'Booking ID reference', example: 'booking-uuid' })
  @IsOptional()
  @IsString()
  bookingId?: string;

  @ApiProperty({ description: 'Payment amount in VND', example: 5000000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  @IsString()
  currency: string;

  @ApiProperty({
    description: 'Customer information',
    type: 'object',
    properties: {
      email: { type: 'string', example: 'customer@example.com' },
      name: { type: 'string', example: 'John Doe' },
      phone: { type: 'string', example: '+84912345678' },
    },
  })
  @IsObject()
  @ValidateNested()
  @Type(() => CustomerInfo)
  customerInfo: CustomerInfo;

  @ApiProperty({ description: 'Order/Invoice description', example: 'Thanh toán phòng khách sạn' })
  @IsString()
  orderInfo: string;

  @ApiProperty({ description: 'URL to redirect customer after payment', example: 'https://app.example.com/callback' })
  @IsString()
  returnUrl: string;

  @ApiPropertyOptional({ description: 'Client IP address for fraud detection', example: '192.168.1.1' })
  @IsOptional()
  @IsString()
  ipAddress?: string;

  @ApiPropertyOptional({ description: 'Additional metadata to store with payment', type: 'object', additionalProperties: true })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}

class CustomerInfo {
  @ApiProperty({ description: 'Customer email', example: 'customer@example.com' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Customer full name', example: 'John Doe' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Customer phone number', example: '+84912345678' })
  @IsOptional()
  @IsString()
  phone?: string;
}

/**
 * Response payload for payment.onepay.create pattern
 * Contains payment URL and transaction details
 */
export class CreateOnePayPaymentResponse {
  @ApiProperty({ description: 'Internal payment ID for tracking', example: 'pay-uuid' })
  @IsString()
  paymentId: string;

  @ApiProperty({ description: 'OnePay transaction reference', example: 'txn-123456' })
  @IsString()
  transactionId: string;

  @ApiProperty({ description: 'OnePay payment gateway URL - redirect customer to this', example: 'https://onepay.vn/pay?...' })
  @IsString()
  paymentUrl: string;

  @ApiProperty({ description: 'Payment amount', example: 5000000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  @IsString()
  currency: string;

  @ApiProperty({ description: 'When this payment URL expires (ISO 8601)', example: '2026-02-17T10:15:00Z' })
  @IsString()
  expiresAt: string;

  @ApiProperty({ description: 'When payment record was created (ISO 8601)', example: '2026-02-17T10:00:00Z' })
  @IsString()
  createdAt: string;
}

/**
 * Request payload for payment.onepay.verify pattern
 * Used to verify OnePay callback parameters and update payment status
 */
export class VerifyOnePayPaymentRequest {
  @ApiPropertyOptional({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Payment ID to verify', example: 'pay-uuid' })
  @IsString()
  paymentId: string;

  @ApiProperty({ description: 'VPC parameters from OnePay callback', type: 'object', additionalProperties: { type: 'string' } })
  @IsObject()
  gatewayParams: Record<string, any>;
}

/**
 * Response payload for payment.onepay.verify pattern
 * Confirms payment status after verification
 */
export class VerifyOnePayPaymentResponse {
  @ApiProperty({ description: 'Payment ID', example: 'pay-uuid' })
  @IsString()
  paymentId: string;

  @ApiProperty({ description: 'Payment status', enum: ['COMPLETED', 'FAILED', 'PENDING'], example: 'COMPLETED' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Internal transaction ID', example: 'txn-uuid' })
  @IsString()
  transactionId: string;

  @ApiProperty({ description: 'Payment amount', example: 500000 })
  @IsNumber()
  amount: number;

  @ApiPropertyOptional({ description: 'OnePay gateway transaction number', example: '123456' })
  @IsOptional()
  @IsString()
  gatewayTransactionId?: string;

  @ApiPropertyOptional({ description: 'Card information (last 4 digits, card type)', example: '4111' })
  @IsOptional()
  @IsString()
  card?: string;

  @ApiPropertyOptional({ description: 'Bank authorization code', example: 'AUTH123' })
  @IsOptional()
  @IsString()
  authCode?: string;

  @ApiProperty({ description: 'When payment was verified (ISO 8601)', example: '2026-02-17T10:00:00Z' })
  @IsString()
  verifiedAt: string;
}

/**
 * Request payload for payment.onepay.query pattern
 * Used to query current status of a payment from OnePay
 */
export interface QueryOnePayPaymentRequest {
  /** Tenant ID (required) */
  tenantId: string;

  /** Hotel ID (required) */
  hotelId: string;

  /** OnePay transaction ID to query */
  transactionId: string;
}

/**
 * Response payload for payment.onepay.query pattern
 * Contains current payment status from OnePay
 */
export interface QueryOnePayPaymentResponse {
  /** Transaction ID */
  transactionId: string;

  /** Current payment status */
  status: string;

  /** Payment amount */
  amount: number;

  /** Response code from OnePay */
  responseCode: string;

  /** Response message from OnePay */
  responseMessage: string;

  /** When query was performed (ISO 8601) */
  queriedAt: string;
}

/**
 * Request payload for payment.onepay.refund pattern
 * Used to process refunds for OnePay payments
 */
export interface RefundOnePayPaymentRequest {
  /** Tenant ID (required) */
  tenantId: string;

  /** Hotel ID (required) */
  hotelId: string;

  /** Payment ID to refund */
  paymentId: string;

  /** OnePay transaction ID to refund */
  transactionId: string;

  /** Refund amount (defaults to full payment amount) */
  amount?: number;

  /** Reason for refund (required) */
  reason: string;
}

/**
 * Response payload for payment.onepay.refund pattern
 * Confirms refund processing
 */
export interface RefundOnePayPaymentResponse {
  /** Refund transaction ID */
  refundId: string;

  /** Refund status (REFUNDED, FAILED, PENDING) */
  status: string;

  /** Refund amount */
  amount: number;

  /** When refund was processed (ISO 8601) */
  processedAt: string;
}

/**
 * Webhook payload from OnePay IPN (Instant Payment Notification)
 * Pattern: payment.webhook.onepay
 *
 * OnePay sends this data to webhook-gateway which publishes it to NATS
 */
export interface OnePayWebhookPayload {
  /** OnePay merchant transaction reference (our transactionId) */
  vpc_MerchTxnRef: string;

  /** OnePay transaction response code (0 = success) */
  vpc_TxnResponseCode: string;

  /** Transaction amount in cents (divide by 100 for VND) */
  vpc_Amount: string;

  /** OnePay gateway transaction number (unique per transaction) */
  vpc_TransactionNo?: string;

  /** Card information (card type and last 4 digits) */
  vpc_Card?: string;

  /** Bank authorization code for the transaction */
  vpc_AuthCode?: string;

  /** HMAC-SHA256 signature for webhook verification */
  vpc_SecureHash: string;

  /** Tenant ID (added by webhook gateway) */
  tenantId: string;

  /** Hotel ID (added by webhook gateway) */
  hotelId: string;

  /** Any other VPC parameters from OnePay */
  [key: string]: any;
}

/**
 * Response format that payment.webhook.onepay handler should return
 * This will be sent back to webhook-gateway for OnePay compliance
 */
export interface OnePayWebhookResponse {
  /** Success flag - true if webhook was processed */
  success: boolean;

  /** OnePay response format field (must be 'Y' or 'N') */
  vpc_DRExists: 'Y' | 'N';

  /** OnePay response message */
  vpc_Message: string;
}

/**
 * Request payload for payment.onepay.config pattern
 * Used to retrieve OnePay configuration for a tenant/hotel
 */
export interface GetOnePayConfigNatsRequest {
  /** Tenant ID (required) */
  tenantId: string;

  /** Hotel ID (required) */
  hotelId: string;
}

/**
 * OnePay configuration data returned from backend
 */
export interface GetOnePayConfigData {
  /** Whether webhook mode is enabled */
  webhookMode: boolean;

  /** Webhook return URL (if configured) */
  returnUrl?: string;

  /** OnePay merchant ID (if configured) */
  merchantId?: string;

  /** OnePay access key (if configured) */
  accessKey?: string;

  /** Secure hash key for webhook verification (if configured) */
  secureHashKey?: string;
}

/**
 * Response payload for payment.onepay.config pattern
 * Contains OnePay configuration for the tenant
 */
export interface GetOnePayConfigNatsResponse {
  /** Success flag */
  success: boolean;

  /** Configuration data (if successful) */
  data?: GetOnePayConfigData;

  /** Error message (if failed) */
  error?: string;

  /** Error code (if failed) */
  errorCode?: string;
}

// ============================================================================
// NATS RESPONSE WRAPPERS
// ============================================================================

/**
 * Create OnePay Payment - NATS Response
 * Pattern: payment.onepay.create
 */
export type CreateOnePayPaymentNatsResponse = NatsResponse<CreateOnePayPaymentResponse>;

/**
 * Verify OnePay Payment - NATS Response
 * Pattern: payment.onepay.verify
 */
export type VerifyOnePayPaymentNatsResponse = NatsResponse<VerifyOnePayPaymentResponse>;

/**
 * Query OnePay Payment Status - NATS Response
 * Pattern: payment.onepay.query (or onepay.status)
 */
export type QueryOnePayPaymentNatsResponse = NatsResponse<QueryOnePayPaymentResponse>;

/**
 * Refund OnePay Payment - NATS Response
 * Pattern: payment.onepay.refund
 */
export type RefundOnePayPaymentNatsResponse = NatsResponse<RefundOnePayPaymentResponse>;

// ============================================================================
// GET PAYMENT STATUS (by Payment ID)
// ============================================================================

/**
 * Request payload for payment.onepay.paymentStatus pattern
 * Used to retrieve payment status by internal payment ID (for polling)
 */
export class GetOnePayPaymentStatusNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID (resolved from JWT if omitted)', example: 'tenant-uuid' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (resolved from JWT if omitted)', example: 'hotel-uuid' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Payment ID to look up', example: 'pay-uuid' })
  @IsString()
  paymentId: string;
}

/**
 * Response payload for payment.onepay.paymentStatus pattern
 * Contains complete payment details for polling use case
 */
export class GetOnePayPaymentStatusData {
  @ApiProperty({ description: 'Payment ID', example: 'pay-uuid' })
  @IsString()
  paymentId: string;

  @ApiProperty({ description: 'Current payment status', enum: ['PENDING', 'COMPLETED', 'FAILED'], example: 'PENDING' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Payment amount', example: 500000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  @IsString()
  currency: string;

  @ApiPropertyOptional({ description: 'Associated booking ID', example: 'booking-uuid' })
  @IsOptional()
  @IsString()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'When payment was completed (ISO 8601)', example: '2026-02-17T10:00:00Z' })
  @IsOptional()
  @IsString()
  paidAt?: string;

  @ApiPropertyOptional({ description: 'OnePay transaction ID', example: 'txn-uuid' })
  @IsOptional()
  @IsString()
  transactionId?: string;

  @ApiPropertyOptional({ description: 'Card information', example: '4111' })
  @IsOptional()
  @IsString()
  card?: string;

  @ApiPropertyOptional({ description: 'When payment record was created (ISO 8601)', example: '2026-02-17T09:00:00Z' })
  @IsOptional()
  @IsString()
  createdAt?: string;

  @ApiPropertyOptional({ description: 'When payment was last updated (ISO 8601)', example: '2026-02-17T09:30:00Z' })
  @IsOptional()
  @IsString()
  updatedAt?: string;
}

/**
 * Get Payment Status - NATS Response
 * Pattern: payment.onepay.paymentStatus
 */
export type GetOnePayPaymentStatusNatsResponse = NatsResponse<GetOnePayPaymentStatusData>;
