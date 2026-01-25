/**
 * Create Booking NATS Contract
 *
 * NATS Pattern: booking.create
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingType } from '../enums/booking-type.enum';
/**
 * NATS request to create a booking
 *
 * @example
 * ```typescript
 * const request: CreateBookingRequest = {
 *   tenantId: 'tenant-123',
 *   hotelId: 'hotel-456',
 *   guestInfo: {
 *     firstName: 'John',
 *     lastName: 'Doe',
 *     email: 'john@example.com',
 *     phone: '+1234567890'
 *   },
 *   bookingDetails: {
 *     bookingType: BookingType.ROOM_NIGHT,
 *     checkInDate: '2024-12-25',
 *     checkOutDate: '2024-12-27',
 *     totalAmount: 500,
 *     currency: 'USD',
 *     source: 'WEB',
 *     rooms: [{...}]
 *   }
 * };
 * ```
 */
export interface CreateBookingRequest {
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId: string;
    /**
     * Hotel ID (specific property)
     */
    hotelId: string;
    /**
     * ID of existing guest (optional if providing guestInfo)
     */
    guestId?: string;
    /**
     * Guest information for new booking
     */
    guestInfo: {
        /**
         * Guest first name
         */
        firstName: string;
        /**
         * Guest last name
         */
        lastName: string;
        /**
         * Guest email address
         */
        email: string;
        /**
         * Guest phone number
         */
        phone: string;
        /**
         * Guest nationality (optional)
         */
        nationality?: string;
        /**
         * Type of ID document (passport, driver's license, etc.)
         */
        idType?: string;
        /**
         * ID document number
         */
        idNumber?: string;
        /**
         * Guest special requests
         */
        specialRequests?: string;
    };
    /**
     * Booking details
     */
    bookingDetails: {
        /**
         * Type of booking (room night, hourly, etc.)
         */
        bookingType: BookingType;
        /**
         * Check-in date (YYYY-MM-DD)
         */
        checkInDate: string;
        /**
         * Check-out date (YYYY-MM-DD)
         */
        checkOutDate: string;
        /**
         * Start time for hourly bookings (HH:mm)
         */
        startTime?: string;
        /**
         * End time for hourly bookings (HH:mm)
         */
        endTime?: string;
        /**
         * Total booking amount
         */
        totalAmount: number;
        /**
         * Currency code (USD, EUR, VND, etc.)
         * @default VND - If not provided, system defaults to VND
         * @optional This field is optional; omit to use default VND currency
         */
        currency?: string;
        /**
         * Booking source (WEB, OTA, PHONE, etc.)
         */
        source: string;
        /**
         * Who created this booking
         */
        createdBy: string;
        /**
         * Rooms included in this booking
         */
        rooms: Array<{
            /**
             * Room type ID
             */
            roomTypeId: string;
            /**
             * Room type name for reference
             */
            roomTypeName: string;
            /**
             * Number of rooms of this type
             */
            quantity: number;
            /**
             * Price per room per night (or hourly rate)
             */
            pricePerUnit: number;
            /**
             * Number of adults
             */
            adultCount: number;
            /**
             * Number of children
             */
            childCount: number;
            /**
             * Total room units
             */
            totalUnits: number;
        }>;
    };
    /**
     * Optional payment information
     */
    paymentInfo?: {
        /**
         * Payment method ID
         */
        paymentMethodId?: string;
        /**
         * Deposit amount (if partial payment)
         */
        depositAmount?: number;
        /**
         * Payment status (PENDING, COMPLETED, etc.)
         */
        paymentStatus?: string;
    };
    /**
     * Additional metadata
     */
    metadata?: Record<string, any>;
}
/**
 * NATS response containing created booking details
 */
export interface CreateBookingResponse {
    /**
     * Unique booking ID
     */
    bookingId: string;
    /**
     * Human-readable booking code (e.g., BK2024123456)
     */
    bookingCode: string;
    /**
     * Booking status after creation
     */
    status: string;
    /**
     * Total booking amount
     */
    totalAmount: number;
    /**
     * Currency code (USD, VND, etc.)
     * @default VND - If not provided in request, defaults to VND
     */
    currency: string;
    /**
     * Room assignments for this booking
     */
    roomAssignments: Array<{
        /**
         * Assigned room ID
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
         * Check-in date for this room
         */
        checkInDate: string;
        /**
         * Check-out date for this room
         */
        checkOutDate: string;
    }>;
    /**
     * Booking creation timestamp
     */
    createdAt: string;
    /**
     * Guest information
     */
    guest?: {
        guestId: string;
        firstName: string;
        lastName: string;
        email: string;
    };
    /**
     * Guest ID reference (top-level for easy access)
     */
    guestId: string;
    /**
     * Room type ID for this booking
     */
    roomTypeId: string;
    /**
     * Room assignment status (ASSIGNED, PENDING, UNASSIGNED)
     * CRITICAL: Indicates if room has been assigned or is pending
     */
    assignmentStatus: string;
    /**
     * Booking source (WEB, OTA, PHONE, WALK_IN, etc.)
     */
    source: string;
    /**
     * Booking type (OVERNIGHT, HOURLY, etc.)
     */
    bookingType: string;
    /**
     * Number of adults in booking
     */
    adultCount: number;
    /**
     * Number of children in booking
     */
    childCount: number;
    /**
     * Guest special requests (transferred from request)
     */
    specialRequests?: string;
    /**
     * Payment status (PENDING, PARTIAL, PAID, REFUNDED, etc.)
     */
    paymentStatus: string;
    /**
     * Amount already paid/deposited
     */
    paidAmount: number;
}
/**
 * Full NATS response type for create booking
 */
export type CreateBookingNatsResponse = NatsResponse<CreateBookingResponse>;
//# sourceMappingURL=create-booking.nats.d.ts.map