/**
 * OnePay Payment Gateway NATS Contract Definitions
 *
 * Defines request/response interfaces for all OnePay payment operations
 * including payment creation, verification, refunds, and status queries.
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Request payload for payment.onepay.create pattern
 * Used to initiate a OnePay payment and get payment URL
 */
export interface CreateOnePayPaymentRequest {
    /** Tenant ID (required) */
    tenantId: string;
    /** Hotel ID (required) */
    hotelId: string;
    /** Chain ID - for multi-level gateway config resolution */
    chainId?: string;
    /** Booking ID reference (optional) */
    bookingId?: string;
    /** Payment amount in smallest unit (e.g., VND) */
    amount: number;
    /** Currency code (default: VND) */
    currency: string;
    /** Customer information */
    customerInfo: {
        /** Customer email (required) */
        email: string;
        /** Customer full name (required) */
        name: string;
        /** Customer phone number (optional) */
        phone?: string;
    };
    /** Order description/invoice info */
    orderInfo: string;
    /** URL where customer is redirected after payment */
    returnUrl: string;
    /** Client IP address for fraud detection */
    ipAddress?: string;
    /** Additional metadata to store with payment */
    metadata?: Record<string, any>;
}
/**
 * Response payload for payment.onepay.create pattern
 * Contains payment URL and transaction details
 */
export interface CreateOnePayPaymentResponse {
    /** Internal payment ID for tracking */
    paymentId: string;
    /** OnePay transaction reference */
    transactionId: string;
    /** OnePay payment gateway URL - redirect customer to this */
    paymentUrl: string;
    /** Payment amount */
    amount: number;
    /** Currency code */
    currency: string;
    /** When this payment URL expires (ISO 8601) */
    expiresAt: string;
    /** When payment record was created (ISO 8601) */
    createdAt: string;
}
/**
 * Request payload for payment.onepay.verify pattern
 * Used to verify OnePay callback parameters and update payment status
 */
export declare class VerifyOnePayPaymentRequest {
    tenantId: string;
    hotelId: string;
    paymentId: string;
    gatewayParams: Record<string, any>;
}
/**
 * Response payload for payment.onepay.verify pattern
 * Confirms payment status after verification
 */
export declare class VerifyOnePayPaymentResponse {
    paymentId: string;
    status: string;
    transactionId: string;
    amount: number;
    gatewayTransactionId?: string;
    card?: string;
    authCode?: string;
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
/**
 * Request payload for payment.onepay.paymentStatus pattern
 * Used to retrieve payment status by internal payment ID (for polling)
 */
export declare class GetOnePayPaymentStatusNatsRequest {
    tenantId: string;
    hotelId: string;
    paymentId: string;
}
/**
 * Response payload for payment.onepay.paymentStatus pattern
 * Contains complete payment details for polling use case
 */
export declare class GetOnePayPaymentStatusData {
    paymentId: string;
    status: string;
    amount: number;
    currency: string;
    bookingId?: string;
    paidAt?: string;
    transactionId?: string;
    card?: string;
    createdAt?: string;
    updatedAt?: string;
}
/**
 * Get Payment Status - NATS Response
 * Pattern: payment.onepay.paymentStatus
 */
export type GetOnePayPaymentStatusNatsResponse = NatsResponse<GetOnePayPaymentStatusData>;
//# sourceMappingURL=onepay.nats.d.ts.map