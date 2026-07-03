"use strict";
/**
 * Booking Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingPaymentStatus = exports.PaymentStatus = exports.IdType = exports.BookingType = exports.BackdateReasonCategory = exports.BookingStatus = exports.BookingSource = void 0;
// BookingSource = alias của SalesChannel (single source of truth ở common).
// Giữ tên BookingSource để tương thích mọi nơi đang dùng.
var sales_channel_enum_1 = require("../../common/enums/sales-channel.enum");
Object.defineProperty(exports, "BookingSource", { enumerable: true, get: function () { return sales_channel_enum_1.SalesChannel; } });
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
     * Guest has physically left, room released, folio still open (pending billing finalization)
     */
    BookingStatus["DEPARTED"] = "DEPARTED";
    /**
     * Guest has checked out and billing finalized
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
 * Reason category for backdated check-in (effectiveCheckInDate < today).
 * Required when daysBack > 1; optional free-text note can supplement.
 */
var BackdateReasonCategory;
(function (BackdateReasonCategory) {
    BackdateReasonCategory["GUEST_LATE_ARRIVAL"] = "GUEST_LATE_ARRIVAL";
    BackdateReasonCategory["STAFF_FORGOT_ENTRY"] = "STAFF_FORGOT_ENTRY";
    BackdateReasonCategory["CORRECT_WRONG_ENTRY"] = "CORRECT_WRONG_ENTRY";
    BackdateReasonCategory["ACCOUNTING_RECONCILE"] = "ACCOUNTING_RECONCILE";
    BackdateReasonCategory["OTHER"] = "OTHER";
})(BackdateReasonCategory || (exports.BackdateReasonCategory = BackdateReasonCategory = {}));
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