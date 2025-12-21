"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingType = void 0;
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
    BookingType["ROOM_NIGHT"] = "ROOM_NIGHT";
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
//# sourceMappingURL=booking-type.enum.js.map