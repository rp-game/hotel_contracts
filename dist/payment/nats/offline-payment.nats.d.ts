/**
 * Offline Payment NATS Contract
 *
 * NATS Pattern: offline-payment.create
 * Handler: payment-service
 * Called by: api-gateway
 * Used by: recording offline payments (cash, bank transfer) for bookings
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Offline payment method enum
 */
export declare enum OfflinePaymentMethod {
    CASH = "CASH",
    BANK_TRANSFER = "BANK_TRANSFER"
}
/**
 * Offline payment status enum
 */
export declare enum OfflinePaymentStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    REJECTED = "REJECTED"
}
/**
 * NATS request to create offline payment
 */
export interface CreateOfflinePaymentNatsRequest {
    /**
     * Payment ID (optional - will be created if not provided)
     */
    paymentId?: string;
    /**
     * Booking ID - which booking this payment is for
     */
    bookingId: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (specific property)
     */
    hotelId: string;
    /**
     * Payment method (CASH, BANK_TRANSFER)
     */
    method: OfflinePaymentMethod | string;
    /**
     * Payment amount
     */
    amount: number;
    /**
     * Currency code (USD, EUR, VND, etc.)
     */
    currency: string;
    /**
     * Bank transaction reference number (for BANK_TRANSFER method)
     */
    referenceNumber?: string;
    /**
     * Receipt number or transaction number
     */
    receiptNumber?: string;
    /**
     * Additional notes/memo for payment
     */
    notes?: string;
    /**
     * Staff ID who received/recorded the payment
     */
    receivedBy?: string;
}
/**
 * Offline payment response data
 */
export interface OfflinePaymentData {
    /**
     * Offline payment record ID
     */
    id: string;
    /**
     * Associated payment ID
     */
    paymentId: string;
    /**
     * Booking ID
     */
    bookingId: string;
    /**
     * Payment method used
     */
    method: string;
    /**
     * Payment amount
     */
    amount: number;
    /**
     * Currency code
     */
    currency: string;
    /**
     * Status of offline payment (PENDING, CONFIRMED, REJECTED)
     */
    status: OfflinePaymentStatus | string;
    /**
     * Bank reference number
     */
    referenceNumber?: string;
    /**
     * Receipt number
     */
    receiptNumber?: string;
    /**
     * When payment was received
     */
    receivedAt?: string;
    /**
     * Who received the payment
     */
    receivedBy?: string;
    /**
     * When payment was confirmed
     */
    confirmedAt?: string;
    /**
     * Who confirmed the payment
     */
    confirmedBy?: string;
    /**
     * Additional notes
     */
    notes?: string;
    /**
     * Record creation date
     */
    createdAt: string;
    /**
     * Record last update date
     */
    updatedAt: string;
}
/**
 * Full NATS response type for create offline payment
 */
export type CreateOfflinePaymentNatsResponse = NatsResponse<OfflinePaymentData>;
/**
 * NATS request to find offline payment by ID
 * Pattern: offline-payment.findById
 */
export interface GetOfflinePaymentByIdNatsRequest {
    /**
     * Offline payment record ID
     */
    id: string;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (optional but recommended for additional validation)
     */
    hotelId?: string;
}
/**
 * Full NATS response type for get offline payment by ID
 */
export type GetOfflinePaymentByIdNatsResponse = NatsResponse<OfflinePaymentData>;
/**
 * NATS request to find offline payments (list)
 * Pattern: offline-payment.find
 */
export interface FindOfflinePaymentsNatsRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (specific property)
     */
    hotelId: string;
    /**
     * Filter by booking ID (optional)
     */
    bookingId?: string;
    /**
     * Filter by status (optional)
     */
    status?: OfflinePaymentStatus | string;
}
/**
 * Full NATS response type for find offline payments
 */
export type FindOfflinePaymentsNatsResponse = NatsResponse<OfflinePaymentData[]>;
//# sourceMappingURL=offline-payment.nats.d.ts.map