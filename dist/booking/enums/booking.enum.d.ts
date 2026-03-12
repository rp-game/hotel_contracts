/**
 * Booking Domain Enums
 */
export declare enum BookingSource {
    DIRECT = "DIRECT",
    WEBSITE = "WEBSITE",
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    WALK_IN = "WALK_IN",
    TRAVEL_AGENT = "TRAVEL_AGENT",
    CORPORATE = "CORPORATE",
    OTA = "OTA"
}
/**
 * Booking Status Enumeration
 *
 * Represents the lifecycle state of a booking
 */
export declare enum BookingStatus {
    /**
     * Booking received but not yet confirmed
     */
    PENDING = "PENDING",
    /**
     * Booking confirmed and payment received
     */
    CONFIRMED = "CONFIRMED",
    /**
     * Guest has checked in
     */
    CHECKED_IN = "CHECKED_IN",
    /**
     * Guest has checked out
     */
    CHECKED_OUT = "CHECKED_OUT",
    /**
     * Booking was cancelled
     */
    CANCELLED = "CANCELLED",
    /**
     * Booking completed and finalized
     */
    COMPLETED = "COMPLETED",
    /**
     * Guest did not show up
     */
    NO_SHOW = "NO_SHOW",
    /**
     * Booking is on hold (temporary)
     */
    ON_HOLD = "ON_HOLD",
    /**
     * Booking created via webshop, awaiting online payment
     */
    PENDING_PAYMENT = "PENDING_PAYMENT"
}
/**
 * Booking Type Enumeration
 *
 * Represents the duration/type of a booking
 */
export declare enum BookingType {
    /**
     * Standard overnight stay (check-in one day, check-out the next day)
     */
    OVERNIGHT = "OVERNIGHT",
    /**
     * Hourly room rental (less than a day)
     */
    HOURLY = "HOURLY",
    /**
     * Meeting room or event space rental
     */
    EVENT_SPACE = "EVENT_SPACE",
    /**
     * Day use (daytime only, typically 3-6 hours)
     */
    DAY_USE = "DAY_USE",
    /**
     * Long-term stay (30+ days with special rates)
     */
    LONG_TERM = "LONG_TERM",
    /**
     * Blocked dates (not available for public booking)
     */
    BLOCK = "BLOCK"
}
export declare enum IdType {
    PASSPORT = "PASSPORT",
    CITIZEN_ID = "CITIZEN_ID",
    DRIVING_LICENSE = "DRIVING_LICENSE"
}
export declare enum PaymentStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    UNPAID = "UNPAID",
    COMPLETED = "COMPLETED",
    DEPOSIT_PAID = "DEPOSIT_PAID",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED",
    PARTIAL = "PARTIAL"
}
export { PaymentStatus as BookingPaymentStatus };
//# sourceMappingURL=booking.enum.d.ts.map