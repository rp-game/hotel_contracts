/**
 * Find Bookings NATS Contract
 *
 * NATS Pattern: booking.find_all
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: dashboard bookings list with pagination and filtering
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
export declare class BookingSummary {
    /**
     * Unique booking ID
     */
    id: string;
    /**
     * Human-readable booking code (e.g., BK2024123456)
     */
    bookingCode: string;
    /**
     * Booking status (uppercase enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, COMPLETED)
     */
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';
    /**
     * Booking source (WEB, OTA, PHONE, etc.)
     */
    source: string;
    /**
     * Payment status (enum)
     */
    paymentStatus: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
    /**
     * Check-in date (YYYY-MM-DD)
     */
    checkInDate: string;
    /**
     * Check-out date (YYYY-MM-DD)
     */
    checkOutDate: string;
    /**
     * Total booking amount
     */
    totalAmount: number;
    /**
     * Amount already paid
     */
    paidAmount: number;
    /**
     * Guest full name
     */
    guestName: string;
    /**
     * Guest email (optional)
     */
    guestEmail?: string;
    /**
     * Guest phone (optional)
     */
    guestPhone?: string;
    /**
     * Number of rooms in booking
     */
    roomCount: number;
    /**
     * Number of adults
     */
    adultCount: number;
    /**
     * Number of children
     */
    childCount: number;
    /**
     * Booking creation date
     */
    createdAt: string;
    /**
     * User ID who created booking
     */
    createdBy?: string;
    /**
     * Room assignments
     */
    rooms?: Array<{
        id: string;
        roomNumber: string;
        roomTypeName: string;
    }>;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (property reference)
     */
    hotelId: string;
    /**
     * Guest ID reference
     */
    guestId: string;
    /**
     * Room type ID for this booking
     */
    roomTypeId: string;
    /**
     * Assigned room ID (null if unassigned)
     */
    roomId: string | null;
    /**
     * Assigned room number (null if unassigned)
     */
    roomNumber: string | null;
    /**
     * Room assignment status (ASSIGNED, PENDING, UNASSIGNED)
     * CRITICAL: Indicates if room has been assigned or is pending
     */
    assignmentStatus: string;
    /**
     * Booking type (OVERNIGHT, HOURLY)
     */
    bookingType: string;
    /**
     * Start time for hourly bookings (HH:mm format)
     */
    startTime?: string;
    /**
     * End time for hourly bookings (HH:mm format)
     */
    endTime?: string;
    /**
     * Last update timestamp
     */
    updatedAt: string;
    /**
     * User ID who last updated booking
     */
    updatedBy?: string;
    /**
     * Guest special requests
     */
    specialRequests?: string;
}
/**
 * NATS request to find/list bookings with filters and pagination
 */
export interface FindBookingsNatsRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (specific property)
     */
    hotelId: string;
    /**
     * Booking status filter (optional)
     */
    status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'COMPLETED';
    /**
     * Booking source filter (WEB, OTA, PHONE, etc.)
     */
    source?: string;
    /**
     * Payment status filter
     */
    paymentStatus?: 'PENDING' | 'PARTIAL' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
    /**
     * Guest ID filter (optional)
     */
    guestId?: string;
    /**
     * Customer ID filter (optional)
     */
    customerId?: string;
    /**
     * Guest name search (substring match)
     */
    guestName?: string;
    /**
     * Booking reference/code search
     */
    bookingReference?: string;
    /**
     * Check-in date start filter (YYYY-MM-DD)
     */
    checkInDateStart?: string;
    /**
     * Check-in date end filter (YYYY-MM-DD)
     */
    checkInDateEnd?: string;
    /**
     * Check-out date start filter (YYYY-MM-DD)
     */
    checkOutDateStart?: string;
    /**
     * Check-out date end filter (YYYY-MM-DD)
     */
    checkOutDateEnd?: string;
    /**
     * Room type ID filter (optional)
     */
    roomTypeId?: string;
    /**
     * Room ID filter (optional) - filter by assigned room
     */
    roomId?: string;
    /**
     * Room assignment status filter (ASSIGNED, PENDING, UNASSIGNED)
     * CRITICAL: Enables filtering for unassigned bookings
     */
    assignmentStatus?: 'ASSIGNED' | 'PENDING' | 'UNASSIGNED';
    /**
     * Booking type filter (OVERNIGHT, HOURLY)
     */
    bookingType?: 'OVERNIGHT' | 'HOURLY';
    /**
     * Pagination: page number (1-indexed, default: 1)
     */
    page?: number;
    /**
     * Pagination: items per page (default: 10, max: 100)
     */
    limit?: number;
    /**
     * Sort field (createdAt, checkInDate, checkOutDate, guestName, bookingCode, status)
     */
    sortBy?: string;
    /**
     * Sort order (ASC or DESC)
     */
    sortOrder?: 'ASC' | 'DESC';
}
/**
 * Bookings list response - shared between NATS and REST API
 * Used by:
 * - NATS pattern: booking.find_all (booking-service handler response)
 * - REST API: GET /bookings (api-gateway controller response)
 */
export declare class BookingListResponseDto {
    /**
     * Array of booking summaries
     */
    bookings: BookingSummary[];
    /**
     * Total number of bookings matching filters
     */
    total: number;
    /**
     * Current page number (1-indexed)
     */
    page: number;
    /**
     * Number of items per page
     */
    limit: number;
    /**
     * Total number of pages
     */
    totalPages: number;
}
/**
 * Type alias for backward compatibility
 * FindBookingsData is now BookingListResponseDto
 */
export type FindBookingsData = BookingListResponseDto;
/**
 * NATS response containing list of bookings with pagination
 *
 * Response structure:
 * ```
 * {
 *   success: true,
 *   data: {
 *     bookings: BookingSummary[],
 *     total: number,
 *     page: number,
 *     limit: number,
 *     totalPages: number
 *   }
 * }
 * ```
 */
export type FindBookingsNatsResponse = NatsResponse<FindBookingsData>;
//# sourceMappingURL=find-bookings.nats.d.ts.map