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
    REJECTED = "REJECTED",
    REFUNDED = "REFUNDED"
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
    /**
     * Display name of staff who received the payment
     */
    receivedByName?: string;
    /**
     * Cashier shift ID (auto-linked if staff has an active shift)
     */
    cashierShiftId?: string;
    /**
     * Auto-confirm the payment immediately after creation (SIMPLE bank transfer mode).
     * When true, payment-service confirms the payment atomically in the same transaction.
     */
    autoConfirm?: boolean;
    /**
     * Original amount in foreign currency (e.g. 100 for 100 USD).
     * When provided, backend calculates amount = round(originalAmount * exchangeRate).
     */
    originalAmount?: number;
    /**
     * Original currency code (e.g. 'USD', 'EUR').
     * Must be accompanied by exchangeRate.
     */
    originalCurrency?: string;
    /**
     * Exchange rate from originalCurrency to VND (e.g. 25000 for 1 USD = 25000 VND).
     * Required when originalCurrency is provided.
     */
    exchangeRate?: number;
    /**
     * Rounding unit for the converted VND amount (e.g. 1 for VND, 0.01 for USD cents).
     * Defaults to 1 (round to nearest VND) when not provided.
     * Formula: Math.round(originalAmount * exchangeRate / rounding) * rounding
     */
    rounding?: number;
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
    status: OfflinePaymentStatus;
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
     * Original amount in foreign currency (null if paid in VND)
     */
    originalAmount?: number;
    /**
     * Original currency code (null if paid in VND)
     */
    originalCurrency?: string;
    /**
     * Exchange rate used: originalCurrency → VND
     */
    exchangeRate?: number;
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
/**
 * NATS request to confirm an offline payment (bank transfer verification)
 * Pattern: offline-payment.confirm
 * Used by: api-gateway → accountant confirm flow
 */
export interface ConfirmOfflinePaymentNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    confirmedBy: string;
    transactionId?: string;
    notes?: string;
}
export type ConfirmOfflinePaymentNatsResponse = NatsResponse<OfflinePaymentData>;
/**
 * NATS request to reject an offline payment
 * Pattern: offline-payment.reject
 * Used by: api-gateway → accountant reject flow
 */
export interface RejectOfflinePaymentNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    rejectedBy: string;
    notes?: string;
}
export type RejectOfflinePaymentNatsResponse = NatsResponse<OfflinePaymentData>;
/**
 * NATS request to refund a confirmed offline payment (partial or full)
 * Pattern: offline-payment.refund
 * Used by: api-gateway → refund flow
 */
export interface RefundOfflinePaymentNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
    amount: number;
    reason: string;
    refundedBy: string;
}
export type RefundOfflinePaymentNatsResponse = NatsResponse<OfflinePaymentData>;
/**
 * Event emitted by payment-service after successful refund
 * Pattern: payment.offline.refunded
 * Consumed by: booking-service to update paidAmount and BookingPayment status
 */
export interface PaymentOfflineRefundedEventPayload {
    offlinePaymentId: string;
    bookingId: string;
    tenantId: string;
    hotelId: string;
    refundAmount: number;
    reason: string;
    refundedBy: string;
    refundedAt: string;
}
//# sourceMappingURL=offline-payment.nats.d.ts.map