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
 * Unified UpdateBookingDto for both NATS and REST
 * Single source of truth for booking update operations
 * Used as request DTO for API Gateway and NATS request for booking-service
 *
 * All fields optional at contract level - let consumers (controller, handler) add validation
 *
 * @pattern booking.update
 * @handler booking-service
 * @caller api-gateway
 */
export declare class UpdateBookingDto {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId?: string;
    /**
     * Hotel ID
     */
    hotelId?: string;
    /**
     * Booking ID to update
     */
    bookingId?: string;
    /**
     * Guest first name
     */
    guestName?: string;
    /**
     * Guest email
     */
    guestEmail?: string;
    /**
     * Guest phone number
     */
    phoneNumber?: string;
    /**
     * New check-in date (YYYY-MM-DD)
     */
    checkInDate?: string;
    /**
     * New check-out date (YYYY-MM-DD)
     */
    checkOutDate?: string;
    /**
     * Room ID to assign
     */
    roomId?: string;
    /**
     * Number of adults
     */
    adultCount?: number;
    /**
     * Number of children
     */
    childCount?: number;
    /**
     * Special requests from guest
     */
    specialRequests?: string;
    /**
     * Internal notes about the booking
     */
    notes?: string;
    /**
     * New booking status
     */
    status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    /**
     * User ID who made the update
     */
    updatedBy?: string;
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
     * Internal notes about the booking
     */
    notes?: string;
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
 * Backward compatibility alias
 */
export type UpdateBookingRequest = UpdateBookingDto;
/**
 * Full NATS response type for update booking
 */
export type UpdateBookingNatsResponse = NatsResponse<UpdateBookingResponse>;
/**
 * NATS Pattern: booking.modify
 * Generic modification request — modificationData is an open record
 */
export interface ModifyBookingNatsRequest {
    id: string;
    modificationData: Record<string, unknown>;
    tenantId?: string;
    hotelId?: string;
}
//# sourceMappingURL=update-booking.nats.d.ts.map