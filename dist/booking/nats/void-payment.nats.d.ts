/**
 * Void Booking Payment NATS Contracts
 * Pattern: booking.payment.void
 * Huỷ 1 thanh toán (đặc biệt công nợ COMPANY_ACCOUNT) → đảo AR bằng ADJUSTMENT + trừ paidAmount.
 */
import { NatsResponse } from '../../common';
export interface VoidBookingPaymentNatsRequest {
    bookingId: string;
    paymentId: string;
    reason?: string;
    voidedBy: string;
    tenantId: string;
    hotelId: string;
}
export interface VoidBookingPaymentResponseData {
    booking: {
        id: string;
        bookingCode: string;
        status: string;
        paidAmount: number;
        paymentStatus: string;
    };
}
export type VoidBookingPaymentNatsResponse = NatsResponse<VoidBookingPaymentResponseData>;
//# sourceMappingURL=void-payment.nats.d.ts.map