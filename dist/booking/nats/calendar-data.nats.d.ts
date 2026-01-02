/**
 * Calendar Data NATS Contract
 *
 * NATS Pattern: booking.calendar.get
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to fetch bookings for a date range
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Calendar event (booking) for display
 */
export interface CalendarEvent {
    /**
     * Unique event ID (booking ID)
     */
    id: string;
    /**
     * Event title (guest name)
     */
    title: string;
    /**
     * Check-in date (YYYY-MM-DD)
     */
    checkInDate: string;
    /**
     * Check-out date (YYYY-MM-DD)
     */
    checkOutDate: string;
    /**
     * Room ID for this booking
     */
    roomId: string;
    /**
     * Room number (e.g., "101")
     */
    roomNumber: string;
    /**
     * Room type name
     */
    roomType: string;
    /**
     * Guest name
     */
    guestName: string;
    /**
     * Guest email (optional)
     */
    guestEmail?: string;
    /**
     * Booking code (e.g., BK2024123456)
     */
    bookingCode: string;
    /**
     * Booking status (PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED)
     */
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    /**
     * Total booking amount
     */
    totalAmount: number;
    /**
     * Number of adults
     */
    adultCount: number;
    /**
     * Number of children
     */
    childCount: number;
}
/**
 * Room occupancy metrics for a date range
 */
export interface OccupancyMetrics {
    /**
     * Total rooms in the hotel
     */
    totalRooms: number;
    /**
     * Number of occupied rooms
     */
    occupiedRooms: number;
    /**
     * Number of available rooms
     */
    availableRooms: number;
    /**
     * Occupancy rate (0-1)
     */
    occupancyRate: number;
    /**
     * Total revenue for the period
     */
    revenue: number;
    /**
     * Average daily rate
     */
    averageRate: number;
}
/**
 * NATS request to fetch calendar data
 */
export interface GetCalendarDataRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID
     */
    hotelId: string;
    /**
     * Check-in date start (YYYY-MM-DD)
     */
    checkInDateStart: string;
    /**
     * Check-in date end (YYYY-MM-DD)
     */
    checkInDateEnd: string;
    /**
     * Room type ID filter (optional)
     */
    roomTypeId?: string;
    /**
     * Room ID filter (optional)
     */
    roomId?: string;
    /**
     * Booking status filter (optional)
     */
    status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
}
/**
 * NATS response containing calendar data
 */
export interface GetCalendarDataResponse {
    /**
     * Array of calendar events (bookings)
     */
    calendar: CalendarEvent[];
    /**
     * Array of events (duplicate of calendar, for compatibility)
     */
    events: CalendarEvent[];
    /**
     * Room occupancy metrics for the period
     */
    occupancy: OccupancyMetrics;
}
/**
 * Full NATS response type for calendar data
 */
export type GetCalendarDataNatsResponse = NatsResponse<GetCalendarDataResponse>;
//# sourceMappingURL=calendar-data.nats.d.ts.map