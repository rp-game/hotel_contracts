import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS Pattern: booking.payment.status
 * Sent by payment-service when a transaction status changes
 */
export interface UpdatePaymentStatusNatsRequest {
    transactionId: string;
    status: 'COMPLETED' | 'FAILED' | 'PENDING';
    bookingId: string;
    tenantId: string;
    hotelId: string;
    paymentId?: string;
    amount?: number;
    paidAt?: string;
    gateway?: string;
    timestamp?: string;
}
export interface PaymentStatusUpdateNatsResponseData {
    bookingId: string;
    previousStatus?: string;
    newStatus?: string;
    paymentStatus?: string;
    transactionId?: string;
}
export type UpdatePaymentStatusNatsResponse = NatsResponse<PaymentStatusUpdateNatsResponseData>;
/**
 * NATS Pattern: notification.payment.status / analytics.payment.status
 * Shared event shape for payment notification and analytics handlers
 */
export interface PaymentEventNatsRequest {
    transactionId: string;
    status: string;
    gateway: string;
    tenantId: string;
    hotelId: string;
    timestamp: string;
}
/**
 * NATS Pattern: booking.findByTransactionId
 */
export interface FindByTransactionIdNatsRequest {
    transactionId: string;
    tenantId: string;
    hotelId: string;
}
export interface FindByTransactionIdNatsResponseData {
    bookings: Array<{
        id: string;
        bookingCode: string;
        status: string;
        paymentStatus: string;
        totalAmount: number;
        guestName: string;
        guestEmail?: string;
    }>;
}
export type FindByTransactionIdNatsResponse = NatsResponse<FindByTransactionIdNatsResponseData>;
//# sourceMappingURL=payment-events.nats.d.ts.map