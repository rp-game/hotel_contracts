/**
 * Add Payment to Booking NATS Contracts
 * Pattern: booking.add_payment
 */
import { NatsResponse } from '../../common';
export interface AddPaymentNatsRequest {
    bookingId: string;
    amount: number;
    paymentMethod: string;
    transactionId?: string;
    notes?: string;
    tenantId: string;
    hotelId: string;
    addedBy: string;
}
export interface PaymentData {
    id: string;
    bookingId: string;
    amount: number;
    paymentMethod: string;
    transactionId?: string;
    notes?: string;
    addedBy: string;
    addedAt: string;
}
export interface AddPaymentResponseData {
    booking: {
        id: string;
        bookingCode: string;
        status: string;
        totalAmount: number;
    };
    payment: PaymentData;
}
export type AddPaymentNatsResponse = NatsResponse<AddPaymentResponseData>;
//# sourceMappingURL=add-payment.nats.d.ts.map