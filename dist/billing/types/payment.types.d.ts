/**
 * Payment Types
 *
 * Types for platform payments
 */
import { PaymentStatus, PlatformPaymentMethod } from './enums';
/**
 * Platform Payment
 */
export interface PlatformPayment {
    id: string;
    tenantId: string;
    invoiceId: string;
    amount: number;
    currency: string;
    paymentMethod: PlatformPaymentMethod;
    status: PaymentStatus;
    paymentDate: Date;
    gateway?: string;
    gatewayTransactionId?: string;
    gatewayResponse?: Record<string, any>;
    paymentDetails?: {
        cardLast4?: string;
        cardBrand?: string;
        bankName?: string;
        accountLast4?: string;
        paypalEmail?: string;
        description?: string;
    };
    processingFee: number;
    netAmount: number;
    attemptCount: number;
    failureReason?: string;
    nextRetryAt?: Date;
    refundedAmount?: number;
    refundedAt?: Date;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Payment List Query
 */
export interface PaymentListQuery {
    tenantId?: string;
    invoiceId?: string;
    status?: PaymentStatus;
    paymentMethod?: PlatformPaymentMethod;
    paymentStartDate?: Date;
    paymentEndDate?: Date;
    minAmount?: number;
    maxAmount?: number;
    gateway?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
/**
 * Payment List Response
 */
export interface PaymentListResponse {
    payments: PlatformPayment[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
/**
 * Create Platform Payment Request
 */
export interface CreatePlatformPaymentRequest {
    tenantId: string;
    invoiceId: string;
    amount: number;
    currency?: string;
    paymentMethod: PlatformPaymentMethod;
    status?: PaymentStatus;
    paymentDate: Date;
    gateway?: string;
    gatewayTransactionId?: string;
    gatewayResponse?: Record<string, any>;
    paymentDetails?: {
        cardLast4?: string;
        cardBrand?: string;
        bankName?: string;
        accountLast4?: string;
        paypalEmail?: string;
        description?: string;
    };
    processingFee?: number;
    netAmount: number;
    attemptCount?: number;
    failureReason?: string;
    nextRetryAt?: Date;
    notes?: string;
}
//# sourceMappingURL=payment.types.d.ts.map