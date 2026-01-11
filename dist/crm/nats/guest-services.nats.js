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
exports.ServiceBookingStatus = exports.ServiceStatus = void 0;
/**
 * Service Status Enum
 */
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["ACTIVE"] = "ACTIVE";
    ServiceStatus["INACTIVE"] = "INACTIVE";
    ServiceStatus["ARCHIVED"] = "ARCHIVED";
})(ServiceStatus || (exports.ServiceStatus = ServiceStatus = {}));
/**
 * Booking Status Enum
 */
var ServiceBookingStatus;
(function (ServiceBookingStatus) {
    ServiceBookingStatus["PENDING"] = "PENDING";
    ServiceBookingStatus["CONFIRMED"] = "CONFIRMED";
    ServiceBookingStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ServiceBookingStatus["COMPLETED"] = "COMPLETED";
    ServiceBookingStatus["CANCELLED"] = "CANCELLED";
})(ServiceBookingStatus || (exports.ServiceBookingStatus = ServiceBookingStatus = {}));
//# sourceMappingURL=guest-services.nats.js.map