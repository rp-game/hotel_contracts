/**
 * Update Booking NATS Contract
 *
 * NATS Pattern: booking.update
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to edit booking details
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Room details in booking (for update response)
 */
export interface UpdatedBookingRoom {
    /**
     * Room ID
     */
    id: string;
    /**
     * Room number
     */
    roomNumber: string;
    /**
     * Room type ID
     */
    roomTypeId: string;
    /**
     * Room type name
     */
    roomTypeName: string;
    /**
     * Check-in date
     */
    checkInDate: string;
    /**
     * Check-out date
     */
    checkOutDate: string;
    /**
     * Price per night
     */
    pricePerNight: number;
    /**
     * Total price
     */
    totalPrice: number;
}
/**
 * NATS request to update a booking
 */
export interface UpdateBookingRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID
     */
    hotelId: string;
    /**
     * Booking ID to update
     */
    bookingId: string;
    /**
     * Guest first name (optional)
     */
    guestName?: string;
    /**
     * Guest email (optional)
     */
    guestEmail?: string;
    /**
     * Guest phone number (optional)
     */
    phoneNumber?: string;
    /**
     * New check-in date (YYYY-MM-DD, optional)
     */
    checkInDate?: string;
    /**
     * New check-out date (YYYY-MM-DD, optional)
     */
    checkOutDate?: string;
    /**
     * Room ID to assign (optional)
     */
    roomId?: string;
    /**
     * Number of adults (optional)
     */
    adultCount?: number;
    /**
     * Number of children (optional)
     */
    childCount?: number;
    /**
     * Special requests from guest (optional)
     */
    specialRequests?: string;
    /**
     * New booking status (optional)
     */
    status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    /**
     * User ID who made the update
     */
    updatedBy: string;
    /**
     * Additional metadata
     */
    metadata?: Record<string, any>;
}
/**
 * NATS response containing updated booking
 */
export interface UpdateBookingResponse {
    /**
     * Booking ID
     */
    id: string;
    /**
     * Booking code
     */
    bookingCode: string;
    /**
     * Current booking status
     */
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    /**
     * Check-in date
     */
    checkInDate: string;
    /**
     * Check-out date
     */
    checkOutDate: string;
    /**
     * Guest name
     */
    guestName: string;
    /**
     * Guest email
     */
    guestEmail?: string;
    /**
     * Guest phone
     */
    phoneNumber?: string;
    /**
     * Total booking amount
     */
    totalAmount: number;
    /**
     * Amount paid
     */
    paidAmount: number;
    /**
     * Outstanding balance
     */
    balance: number;
    /**
     * Rooms in booking
     */
    rooms: UpdatedBookingRoom[];
    /**
     * Number of adults
     */
    adultCount: number;
    /**
     * Number of children
     */
    childCount: number;
    /**
     * Special requests
     */
    specialRequests?: string;
    /**
     * Last updated date
     */
    updatedAt: string;
    /**
     * User who updated
     */
    updatedBy: string;
}
/**
 * Full NATS response type for update booking
 */
export type UpdateBookingNatsResponse = NatsResponse<UpdateBookingResponse>;
//# sourceMappingURL=update-booking.nats.d.ts.map