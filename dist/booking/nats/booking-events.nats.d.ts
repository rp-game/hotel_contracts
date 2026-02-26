/**
 * Booking Events - NATS Event Contracts
 *
 * These classes define the event payload shapes for booking lifecycle events
 * emitted via NATS EventPattern for cross-service communication.
 *
 * Events:
 *   - booking.checked_in   → CRM updates totalBookings + lastBookingDate
 *   - booking.checked_out  → CRM updates totalSpent
 *   - booking.cancelled    → CRM reverses stats
 */
export declare class BookingCheckedInEvent {
    bookingId: string;
    customerId: string;
    tenantId: string;
    hotelId: string;
    totalAmount: number;
    checkInDate: string;
    checkOutDate: string;
}
export declare class BookingCheckedOutEvent {
    bookingId: string;
    customerId: string;
    tenantId: string;
    hotelId: string;
    finalAmount: number;
    checkInDate: string;
    checkOutDate: string;
    checkedOutAt: Date;
}
export declare class BookingCancelledEvent {
    bookingId: string;
    customerId: string;
    tenantId: string;
    hotelId: string;
    paidAmount: number;
    refundAmount: number;
    cancelledAt: Date;
}
//# sourceMappingURL=booking-events.nats.d.ts.map