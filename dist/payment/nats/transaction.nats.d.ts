/**
 * Transaction Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for payment transaction operations
 * via NATS messaging between API Gateway and Payment Service
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
export interface PaymentTransaction {
    id: string;
    tenantId: string;
    hotelId: string;
    invoiceId?: string;
    amount: number;
    currency: string;
    status: TransactionStatus | string;
    gatewayTransactionId?: string;
    paymentMethod: string;
    createdAt: string;
    completedAt?: string;
    updatedAt?: string;
}
export interface GetTransactionsNatsRequest {
    tenantId: string;
    hotelId?: string;
    status?: string;
    paymentMethod?: string;
    page?: number;
    limit?: number;
}
export interface GetTransactionsData {
    transactions: PaymentTransaction[];
    total: number;
    page: number;
    limit: number;
}
export type GetTransactionsNatsResponse = NatsResponse<GetTransactionsData>;
export interface RetryTransactionNatsRequest {
    id: string;
    tenantId: string;
    hotelId?: string;
}
export interface RetryTransactionData {
    id: string;
    status: string;
    previousStatus: string;
    retryAttempt: number;
    nextRetryAt?: string;
    message: string;
}
export type RetryTransactionNatsResponse = NatsResponse<RetryTransactionData>;
export interface RefundTransactionNatsRequest {
    id: string;
    amount?: number;
    reason?: string;
    tenantId: string;
    hotelId?: string;
}
export interface RefundTransactionData {
    refundTransaction: PaymentTransaction;
    originalTransaction: PaymentTransaction;
    message: string;
}
export type RefundTransactionNatsResponse = NatsResponse<RefundTransactionData>;
//# sourceMappingURL=transaction.nats.d.ts.map