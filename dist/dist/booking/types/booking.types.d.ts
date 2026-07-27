/**
 * Booking Domain Types
 *
 * Core type definitions for booking-related data
 */
/**
 * Booking entity type
 */
export interface Booking {
    /**
     * Unique booking ID
     */
    id: string;
    /**
     * Booking code
     */
    code: string;
    /**
     * Current status
     */
    status: string;
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Hotel ID
     */
    hotelId: string;
    /**
     * Guest ID
     */
    guestId: string;
    /**
     * Check-in date
     */
    checkInDate: string;
    /**
     * Check-out date
     */
    checkOutDate: string;
    /**
     * Total amount
     */
    totalAmount: number;
    /**
     * Currency
     */
    currency: string;
    /**
     * Created timestamp
     */
    createdAt: string;
    /**
     * Updated timestamp
     */
    updatedAt: string;
}
/**
 * Room assignment for a booking
 */
export interface BookingRoomAssignment {
    /**
     * Assigned room ID
     */
    roomId: string;
    /**
     * Room number
     */
    roomNumber: string;
    /**
     * Room type
     */
    roomType: {
        id: string;
        name: string;
    };
    /**
     * Check-in date
     */
    checkInDate: string;
    /**
     * Check-out date
     */
    checkOutDate: string;
    /**
     * Number of adults
     */
    adultCount: number;
    /**
     * Number of children
     */
    childCount: number;
    /**
     * Nightly rate
     */
    ratePerNight: number;
}
//# sourceMappingURL=booking.types.d.ts.map