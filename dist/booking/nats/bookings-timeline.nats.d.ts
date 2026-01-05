/**
 * Bookings Timeline NATS Contracts
 *
 * Patterns:
 * - bookings.timeline.get
 *
 * Handler: booking-service
 * Called by: inventory-service, api-gateway
 */
import { NatsResponse } from '../../common';
/**
 * Get Bookings Timeline Request
 * Pattern: bookings.timeline.get
 *
 * Retrieve bookings data for timeline view with all necessary information
 * for room assignment and scheduling
 */
export interface GetBookingsTimelinePayload {
    hotelId: string;
    startDate: string;
    endDate: string;
}
/**
 * Booking Timeline Item
 * Returned by booking-service for timeline visualization
 */
export interface BookingTimelineData {
    id: string;
    guestName: string;
    roomTypeId: string;
    roomTypeName?: string;
    roomId?: string;
    checkIn: Date | string;
    checkOut: Date | string;
    status: string;
    assignmentStatus?: string;
    bookingType?: string;
    adultCount?: number;
    childCount?: number;
    specialRequests?: string;
}
export type GetBookingsTimelineResponse = BookingTimelineData[];
export type GetBookingsTimelineNatsResponse = NatsResponse<GetBookingsTimelineResponse>;
//# sourceMappingURL=bookings-timeline.nats.d.ts.map