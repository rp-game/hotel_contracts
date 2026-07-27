/**
 * Payment Types
 *
 * Unified contracts for both NATS messages and REST API.
 * All types use class with @ApiProperty for single source of truth.
 */
import { PaymentStatus, PlatformPaymentMethod } from './enums';
/**
 * Platform Payment
 */
export declare class PlatformPayment {
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
 * Used for NATS request and REST query params
 */
export declare class PaymentListQuery {
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
 * Used for both NATS response and REST API response
 */
export declare class PaymentListResponse {
    data: PlatformPayment[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Create Platform Payment Request
 * Used for both NATS request and REST API request
 */
export declare class CreatePlatformPaymentRequest {
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