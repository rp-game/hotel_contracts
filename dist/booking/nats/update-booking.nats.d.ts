/**
 * Update Booking NATS Contract
 *
 * NATS Pattern: booking.update
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to edit booking details
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { BackdateReasonCategory } from '../enums/booking.enum';
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
 * Room item for price override in UpdateBookingDto
 */
export declare class UpdateBookingRoomDto {
    bookingRoomId?: string;
    roomTypeId?: string;
    priceOverride?: number;
    perNightOverrideRates?: number[];
    checkInDate?: string;
    checkOutDate?: string;
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
     * Travel Agent ID
     */
    travelAgentId?: string;
    /**
     * Agent reference code from travel agent
     */
    agentReference?: string;
    /**
     * Additional metadata
     */
    metadata?: Record<string, any>;
    requestInvoice?: boolean;
    earlyCheckInFee?: number;
    earlyCheckInFeeGross?: number;
    earlyCheckInFeeVatRate?: number;
    earlyCheckInFeeServiceChargeRate?: number;
    lateCheckOutFee?: number;
    lateCheckOutFeeGross?: number;
    lateCheckOutFeeVatRate?: number;
    lateCheckOutFeeServiceChargeRate?: number;
    /**
     * Pricing mode when dates change:
     * - 'keep_rate_plan': recalculate using original rate plan (default)
     * - 'custom_rate_plan': use a different rate plan for new dates
     */
    pricingMode?: 'keep_rate_plan' | 'custom_rate_plan';
    /**
     * Rate plan ID to use when pricingMode = 'custom_rate_plan'
     */
    newRatePlanId?: string;
    /**
     * Whether to keep applying original promotion to new dates
     */
    keepPromotion?: boolean;
    /**
     * Backdate check-in reason — required when newCheckIn < oldCheckIn AND daysBack > 1.
     * Gateway forwards from request body; service enforces window theo userRoles.
     */
    backdateReasonCategory?: BackdateReasonCategory;
    backdateReasonNote?: string;
    userRoles?: string[];
    /**
     * Full-backdate payment: khi user backdate cả check_in + check_out trên CHECKED_IN
     * booking (case ezCloud backfill), có thể đính kèm 1 payment record để record
     * khoản đã thu từ khách. Backend sẽ tạo BookingPayment + update paid_amount.
     * Số tiền default = remaining balance (frontend tính sẵn).
     */
    backdatePaymentAmount?: number;
    backdatePaymentMethod?: string;
    confirmBackdateCheckIn?: boolean;
    confirmBackdateCheckOut?: boolean;
    /**
     * Room price overrides — allows updating pricePerUnit for existing booking rooms
     */
    rooms?: UpdateBookingRoomDto[];
    /**
     * Display name of the user who performed the override (for audit trail)
     */
    overriddenByName?: string;
    /**
     * User confirm áp dụng giá mới khi đổi ngày riêng từng phòng (rooms[].checkInDate/
     * checkOutDate) trên booking ĐÃ CÓ paidAmount > 0 (PAID/PARTIALLY_PAID). Nếu chưa
     * true và giá thay đổi, BE trả requiresPriceConfirmation=true kèm giá cũ/mới thay vì
     * áp thẳng — tránh âm thầm đổi tổng tiền của booking đã thu tiền.
     */
    confirmPriceChange?: boolean;
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