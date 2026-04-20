"use strict";
/**
 * Booking Revenue Summary NATS Contract
 *
 * NATS Pattern: booking.revenue.summary
 * Handler: booking-service
 * Called by: report-service
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
exports.BookingRevenueSummaryData = exports.BookingRevenueSummaryRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class BookingRevenueSummaryRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
}
exports.BookingRevenueSummaryRequest = BookingRevenueSummaryRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BookingRevenueSummaryRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BookingRevenueSummaryRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date inclusive (YYYY-MM-DD or ISO)' }),
    __metadata("design:type", String)
], BookingRevenueSummaryRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date inclusive (YYYY-MM-DD or ISO)' }),
    __metadata("design:type", String)
], BookingRevenueSummaryRequest.prototype, "endDate", void 0);
class BookingRevenueSummaryData {
    roomRevenue;
    totalBookings;
    totalRoomNights;
}
exports.BookingRevenueSummaryData = BookingRevenueSummaryData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total room revenue (SUM of grossAmount from active bookings)' }),
    __metadata("design:type", Number)
], BookingRevenueSummaryData.prototype, "roomRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of active bookings in range' }),
    __metadata("design:type", Number)
], BookingRevenueSummaryData.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total room nights' }),
    __metadata("design:type", Number)
], BookingRevenueSummaryData.prototype, "totalRoomNights", void 0);
//# sourceMappingURL=revenue-summary.nats.js.map