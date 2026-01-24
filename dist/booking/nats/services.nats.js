"use strict";
/**
 * Booking Services NATS Contracts
 *
 * Patterns:
 * - services.find_all
 * - services.find_one
 * - services.create
 * - services.update
 * - services.remove
 * - services.stats
 * - services.check_availability
 *
 * Handler: booking-service (ServiceBookingController)
 * Called by: api-gateway (GuestServicesController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServiceStatus = exports.ServiceCategory = void 0;
/**
 * Service Category Enum
 */
var ServiceCategory;
(function (ServiceCategory) {
    ServiceCategory["SPA"] = "SPA";
    ServiceCategory["FITNESS"] = "FITNESS";
    ServiceCategory["DINING"] = "DINING";
    ServiceCategory["ENTERTAINMENT"] = "ENTERTAINMENT";
    ServiceCategory["TRANSPORT"] = "TRANSPORT";
    ServiceCategory["BUSINESS"] = "BUSINESS";
    ServiceCategory["WELLNESS"] = "WELLNESS";
    ServiceCategory["TOURS"] = "TOURS";
    ServiceCategory["OTHER"] = "OTHER";
})(ServiceCategory || (exports.ServiceCategory = ServiceCategory = {}));
/**
 * Booking Service Status Enum
 */
var BookingServiceStatus;
(function (BookingServiceStatus) {
    BookingServiceStatus["ACTIVE"] = "ACTIVE";
    BookingServiceStatus["INACTIVE"] = "INACTIVE";
    BookingServiceStatus["ARCHIVED"] = "ARCHIVED";
})(BookingServiceStatus || (exports.BookingServiceStatus = BookingServiceStatus = {}));
//# sourceMappingURL=services.nats.js.map