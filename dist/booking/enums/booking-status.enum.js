"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatus = void 0;
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
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
//# sourceMappingURL=booking-status.enum.js.map