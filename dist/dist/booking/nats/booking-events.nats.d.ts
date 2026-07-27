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
    roomId?: string;
    roomTypeId?: string;
    guestCount?: number;
    roomNumber?: string;
}
export declare class BookingCheckedOutEvent {
    bookingId: string;
    customerId: string;
    tenantId: string;
    hotelId: string;
    finalAmount: number;
    netAmount?: number;
    checkInDate: string;
    checkOutDate: string;
    checkedOutAt: Date;
    travelAgentId?: string;
    salesPersonId?: string;
    corporateId?: string;
    paidAmount?: number;
    bookingCode?: string;
}
export declare class BookingCancelledEvent {
    bookingId: string;
    customerId: string;
    tenantId: string;
    hotelId: string;
    paidAmount: number;
    refundAmount: number;
    cancelledAt: Date;
    corporateId?: string;
    bookingCode?: string;
}
//# sourceMappingURL=booking-events.nats.d.ts.map