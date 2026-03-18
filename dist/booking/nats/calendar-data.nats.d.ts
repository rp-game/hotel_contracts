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
 * Room type information for calendar events
 */
export declare class CalendarRoomTypeDto {
    name: string;
    id: string;
}
/**
 * Calendar event (booking) for display
 * Used as Swagger DTO by api-gateway and as NATS response type by booking-service
 */
export declare class CalendarEventDto {
    id: string;
    bookingCode: string;
    title: string;
    guestName: string;
    guestEmail?: string;
    roomNumber: string;
    roomType: CalendarRoomTypeDto;
    checkInDate: string;
    checkOutDate: string;
    roomId: string;
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    totalAmount: string;
    adultCount: number;
    childCount: number;
    assignmentStatus?: string;
    specialRequests?: string;
    source?: string;
    createdAt?: Date;
    groupId?: string | null;
    groupName?: string | null;
}
/**
 * @deprecated Use CalendarEventDto instead
 */
export type CalendarEvent = CalendarEventDto;
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
    tenantId?: string;
    /**
     * Hotel ID
     */
    hotelId?: string;
    /**
     * Start date for calendar range (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * End date for calendar range (YYYY-MM-DD)
     */
    endDate?: string;
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
    calendar: CalendarEventDto[];
    /**
     * Array of events (duplicate of calendar, for compatibility)
     */
    events: CalendarEventDto[];
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