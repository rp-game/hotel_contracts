"use strict";
/**
 * Booking Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingPaymentStatus = exports.PaymentStatus = exports.IdType = exports.BookingType = exports.BookingStatus = exports.BookingSource = void 0;
var BookingSource;
(function (BookingSource) {
    BookingSource["DIRECT"] = "DIRECT";
    BookingSource["WEBSITE"] = "WEBSITE";
    BookingSource["PHONE"] = "PHONE";
    BookingSource["EMAIL"] = "EMAIL";
    BookingSource["WALK_IN"] = "WALK_IN";
    BookingSource["TRAVEL_AGENT"] = "TRAVEL_AGENT";
    BookingSource["CORPORATE"] = "CORPORATE";
    BookingSource["OTA"] = "OTA";
})(BookingSource || (exports.BookingSource = BookingSource = {}));
/**
 * Booking Status Enumeration
 *
 * Represents the lifecycle state of a booking
 */
var BookingStatus;
(function (BookingStatus) {
    /**
     * Booking received but not yet confirmed
     */
    BookingStatus["PENDING"] = "PENDING";
    /**
     * Booking confirmed and payment received
     */
    BookingStatus["CONFIRMED"] = "CONFIRMED";
    /**
     * Guest has checked in
     */
    BookingStatus["CHECKED_IN"] = "CHECKED_IN";
    /**
     * Guest has checked out
     */
    BookingStatus["CHECKED_OUT"] = "CHECKED_OUT";
    /**
     * Booking was cancelled
     */
    BookingStatus["CANCELLED"] = "CANCELLED";
    /**
     * Booking completed and finalized
     */
    BookingStatus["COMPLETED"] = "COMPLETED";
    /**
     * Guest did not show up
     */
    BookingStatus["NO_SHOW"] = "NO_SHOW";
    /**
     * Booking is on hold (temporary)
     */
    BookingStatus["ON_HOLD"] = "ON_HOLD";
    /**
     * Booking created via webshop, awaiting online payment
     */
    BookingStatus["PENDING_PAYMENT"] = "PENDING_PAYMENT";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
/**
 * Booking Type Enumeration
 *
 * Represents the duration/type of a booking
 */
var BookingType;
(function (BookingType) {
    /**
     * Standard overnight stay (check-in one day, check-out the next day)
     */
    BookingType["OVERNIGHT"] = "OVERNIGHT";
    /**
     * Hourly room rental (less than a day)
     */
    BookingType["HOURLY"] = "HOURLY";
    /**
     * Meeting room or event space rental
     */
    BookingType["EVENT_SPACE"] = "EVENT_SPACE";
    /**
     * Day use (daytime only, typically 3-6 hours)
     */
    BookingType["DAY_USE"] = "DAY_USE";
    /**
     * Long-term stay (30+ days with special rates)
     */
    BookingType["LONG_TERM"] = "LONG_TERM";
    /**
     * Blocked dates (not available for public booking)
     */
    BookingType["BLOCK"] = "BLOCK";
})(BookingType || (exports.BookingType = BookingType = {}));
var IdType;
(function (IdType) {
    IdType["PASSPORT"] = "PASSPORT";
    IdType["CITIZEN_ID"] = "CITIZEN_ID";
    IdType["DRIVING_LICENSE"] = "DRIVING_LICENSE";
})(IdType || (exports.IdType = IdType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["PAID"] = "PAID";
    PaymentStatus["UNPAID"] = "UNPAID";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["DEPOSIT_PAID"] = "DEPOSIT_PAID";
    PaymentStatus["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["REFUNDED"] = "REFUNDED";
    PaymentStatus["PARTIAL"] = "PARTIAL";
})(PaymentStatus || (exports.BookingPaymentStatus = exports.PaymentStatus = PaymentStatus = {}));
//# sourceMappingURL=booking.enum.js.map