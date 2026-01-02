/**
 * Move Booking NATS Contract
 *
 * NATS Pattern: booking.move
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page drag-and-drop to move bookings to different dates/rooms
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * Room assignment in moved booking
 */
export interface MovedBookingRoom {
    /**
     * Room ID (previous assignment)
     */
    previousRoomId?: string;
    /**
     * New room ID (after move)
     */
    roomId: string;
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
     * New check-in date
     */
    checkInDate: string;
    /**
     * New check-out date
     */
    checkOutDate: string;
    /**
     * Price per night
     */
    pricePerNight: number;
    /**
     * Total price for room
     */
    totalPrice: number;
}
/**
 * NATS request to move a booking to different dates and/or room
 */
export interface MoveBookingRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID
     */
    hotelId: string;
    /**
     * Booking ID to move
     */
    id: string;
    /**
     * New check-in date (YYYY-MM-DD)
     */
    checkInDate: string;
    /**
     * New check-out date (YYYY-MM-DD)
     */
    checkOutDate: string;
    /**
     * New room ID (optional, if not provided, keeps current room)
     */
    roomId?: string;
    /**
     * Reason for move
     */
    transferReason?: string;
    /**
     * User ID who initiated the move
     */
    movedBy: string;
}
/**
 * NATS response containing moved booking details
 */
export interface MoveBookingResponse {
    /**
     * Booking ID
     */
    id: string;
    /**
     * Booking code
     */
    bookingCode: string;
    /**
     * Booking status
     */
    status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
    /**
     * New check-in date
     */
    checkInDate: string;
    /**
     * New check-out date
     */
    checkOutDate: string;
    /**
     * Guest name
     */
    guestName: string;
    /**
     * Guest email (optional)
     */
    guestEmail?: string;
    /**
     * Guest phone (optional)
     */
    phoneNumber?: string;
    /**
     * Total booking amount (may change if room type changed)
     */
    totalAmount: number;
    /**
     * Rooms after move
     */
    rooms: MovedBookingRoom[];
    /**
     * Number of nights after move
     */
    numberOfNights: number;
    /**
     * Move confirmation timestamp
     */
    movedAt: string;
    /**
     * User who moved the booking
     */
    movedBy: string;
    /**
     * Reason for the move
     */
    moveReason?: string;
}
/**
 * Full NATS response type for move booking
 */
export type MoveBookingNatsResponse = NatsResponse<MoveBookingResponse>;
//# sourceMappingURL=move-booking.nats.d.ts.map