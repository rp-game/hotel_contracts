import { NatsResponse } from '../../common';
/**
 * Request to get bookings pending check-in
 *
 * @example
 * // Get today's pending check-ins
 * { tenantId: '...', hotelId: '...' }
 *
 * // Get specific date with pagination
 * { tenantId: '...', hotelId: '...', date: '2025-01-25', page: 1, limit: 10 }
 */
export interface GetPendingCheckinsNatsRequest {
    /** Tenant ID (required) */
    tenantId: string;
    /** Hotel ID (required) */
    hotelId: string;
    /**
     * Check-in date (YYYY-MM-DD format).
     * If not provided, defaults to today in hotel timezone.
     */
    date?: string;
    /** Page number for pagination (default: 1) */
    page?: number;
    /** Items per page (default: 10, max: 100) */
    limit?: number;
}
/**
 * Booking pending check-in details
 */
export interface PendingCheckinBooking {
    /** Booking ID */
    id: string;
    /** Booking reference code */
    bookingCode: string;
    /** Main guest full name */
    guestName: string;
    /** Main guest email */
    guestEmail: string;
    /** Main guest phone */
    guestPhone: string;
    /** Check-in date (YYYY-MM-DD) */
    checkInDate: string;
    /** Check-out date (YYYY-MM-DD) */
    checkOutDate: string;
    /** Total guest count (adults + children) */
    guestCount: number;
    /** Room type name */
    roomType: string;
    /** Assigned room number or 'Unassigned' */
    roomNumber: string;
    /** Total booking amount */
    totalAmount: number;
    /** Booking status */
    status: string;
    /** Special requests from guest */
    specialRequests?: string;
    /** Room assignment status (ASSIGNED, PENDING, UNASSIGNED) */
    assignmentStatus: string;
    /** Assigned room ID */
    roomId?: string;
    /** Room type ID */
    roomTypeId: string;
}
/**
 * Response with pending check-ins
 */
export interface GetPendingCheckinsNatsResponse {
    /** List of bookings pending check-in */
    bookings: PendingCheckinBooking[];
    /** Total number of pending check-ins (for pagination) */
    total: number;
    /** Current page number */
    page: number;
    /** Items per page */
    limit: number;
}
/**
 * NATS response type for pending check-ins
 */
export type GetPendingCheckinsResponse = NatsResponse<GetPendingCheckinsNatsResponse>;
//# sourceMappingURL=get-pending-checkins.nats.d.ts.map