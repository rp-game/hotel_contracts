"use strict";
/**
 * Service Booking Stats NATS Contracts
 *
 * Patterns:
 * - guest_services.bookings.stats
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (GuestServicesController)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBookingStatsData = exports.ServiceBookingCount = exports.BookingStatusCount = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Booking status breakdown
 */
class BookingStatusCount {
    status;
    count;
}
exports.BookingStatusCount = BookingStatusCount;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status name', example: 'CONFIRMED' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BookingStatusCount.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bookings with this status', example: 42 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BookingStatusCount.prototype, "count", void 0);
/**
 * Service booking count
 */
class ServiceBookingCount {
    serviceName;
    count;
}
exports.ServiceBookingCount = ServiceBookingCount;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name', example: 'Spa' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServiceBookingCount.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bookings for this service', example: 15 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ServiceBookingCount.prototype, "count", void 0);
/**
 * Service booking statistics data
 */
class ServiceBookingStatsData {
    totalBookings;
    confirmedBookings;
    completedBookings;
    cancelledBookings;
    totalRevenue;
    averageRating;
    bookingsByStatus;
    bookingsByService;
}
exports.ServiceBookingStatsData = ServiceBookingStatsData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings', example: 100 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of confirmed bookings', example: 60 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "confirmedBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of completed bookings', example: 30 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "completedBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of cancelled bookings', example: 10 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "cancelledBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue from completed bookings', example: 15000 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "totalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average service rating (0-5)', example: 4.2 }),
    __metadata("design:type", Number)
], ServiceBookingStatsData.prototype, "averageRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking count grouped by status', type: [BookingStatusCount] }),
    __metadata("design:type", Array)
], ServiceBookingStatsData.prototype, "bookingsByStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking count grouped by service name', type: [ServiceBookingCount] }),
    __metadata("design:type", Array)
], ServiceBookingStatsData.prototype, "bookingsByService", void 0);
//# sourceMappingURL=service-booking-stats.nats.js.map