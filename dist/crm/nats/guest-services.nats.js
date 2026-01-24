"use strict";
/**
 * Guest Services NATS Contracts
 *
 * Patterns:
 * - guest-services.complaints.metrics
 * - guest_services.services.create
 * - guest_services.services.find_all
 * - guest_services.services.find_one
 * - guest_services.services.update
 * - guest_services.services.delete
 * - guest_services.services.stats
 * - guest_services.bookings.create
 * - guest_services.bookings.find_all
 * - guest_services.bookings.find_one
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBookingStatus = exports.GuestServiceStatus = exports.ServiceType = void 0;
/**
 * Service Type Enum (matches CRM GuestService entity)
 */
var ServiceType;
(function (ServiceType) {
    ServiceType["SPA"] = "SPA";
    ServiceType["RESTAURANT"] = "RESTAURANT";
    ServiceType["ROOM_SERVICE"] = "ROOM_SERVICE";
    ServiceType["LAUNDRY"] = "LAUNDRY";
    ServiceType["TRANSPORTATION"] = "TRANSPORTATION";
    ServiceType["TOUR"] = "TOUR";
    ServiceType["CONCIERGE"] = "CONCIERGE";
    ServiceType["FITNESS"] = "FITNESS";
    ServiceType["BUSINESS_CENTER"] = "BUSINESS_CENTER";
    ServiceType["OTHER"] = "OTHER";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
/**
 * Guest Service Status Enum (matches CRM GuestService entity)
 */
var GuestServiceStatus;
(function (GuestServiceStatus) {
    GuestServiceStatus["ACTIVE"] = "ACTIVE";
    GuestServiceStatus["INACTIVE"] = "INACTIVE";
    GuestServiceStatus["MAINTENANCE"] = "MAINTENANCE";
})(GuestServiceStatus || (exports.GuestServiceStatus = GuestServiceStatus = {}));
/**
 * Booking Status Enum (matches CRM ServiceBooking entity)
 */
var ServiceBookingStatus;
(function (ServiceBookingStatus) {
    ServiceBookingStatus["PENDING"] = "PENDING";
    ServiceBookingStatus["CONFIRMED"] = "CONFIRMED";
    ServiceBookingStatus["COMPLETED"] = "COMPLETED";
    ServiceBookingStatus["CANCELLED"] = "CANCELLED";
    ServiceBookingStatus["NO_SHOW"] = "NO_SHOW";
})(ServiceBookingStatus || (exports.ServiceBookingStatus = ServiceBookingStatus = {}));
//# sourceMappingURL=guest-services.nats.js.map