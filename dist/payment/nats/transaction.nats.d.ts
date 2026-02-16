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
import { NatsResponse } from '../../common/nats-response.interface';
export declare enum TransactionStatus {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed",
    CANCELLED = "cancelled",
    REFUNDED = "refunded"
}
export declare enum TransactionType {
    PAYMENT = "PAYMENT",
    REFUND = "REFUND",
    ADJUSTMENT = "ADJUSTMENT"
}
/**
 * Payment Transaction entity - used in both NATS and REST responses
 * Fields match the payment_transactions database table schema
 */
export declare class PaymentTransactionNatsResponse {
    id: string;
    tenantId: string;
    hotelId: string;
    paymentId?: string;
    invoiceId?: string;
    amount: number;
    currency: string;
    type: TransactionType | string;
    method: string;
    status: TransactionStatus | string;
    gatewayTransactionId?: string;
    gatewayResponse?: Record<string, any>;
    transactionReference?: string;
    processedBy?: string;
    notes?: string;
    metadata?: Record<string, any>;
    createdAt: string;
    completedAt?: string;
    updatedAt?: string;
}
export declare class GetTransactionsNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: string;
    type?: string;
    paymentMethod?: string;
    startDate?: string;
    endDate?: string;
    bookingId?: string;
    page?: number;
    limit?: number;
}
export declare class GetTransactionsDataNatsResponse {
    transactions: PaymentTransactionNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
export type GetTransactionsNatsResponse = NatsResponse<GetTransactionsDataNatsResponse>;
export declare class RetryTransactionNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export declare class RetryTransactionDataNatsResponse {
    id: string;
    status: string;
    previousStatus: string;
    retryAttempt: number;
    nextRetryAt?: string;
    message: string;
}
export type RetryTransactionNatsResponse = NatsResponse<RetryTransactionDataNatsResponse>;
export declare class RefundTransactionNatsRequest {
    id: string;
    amount?: number;
    reason?: string;
    tenantId: string;
    hotelId?: string;
}
export declare class RefundTransactionDataNatsResponse {
    refundTransaction: PaymentTransactionNatsResponse;
    originalTransaction: PaymentTransactionNatsResponse;
    message: string;
}
export type RefundTransactionNatsResponse = NatsResponse<RefundTransactionDataNatsResponse>;
//# sourceMappingURL=transaction.nats.d.ts.map