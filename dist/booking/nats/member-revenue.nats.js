"use strict";
/**
 * Member Revenue NATS Contract
 *
 * NATS Pattern: bookings.revenue.byCustomers
 * Handler: booking-service (BookingAnalyticsNatsController)
 * Called by: crm-service (LoyaltyAnalyticsService)
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
exports.BookingRevenueByCustomersData = exports.BookingRevenueByCustomersRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Request: get real booking revenue for a set of member customer IDs
 * Pattern: bookings.revenue.byCustomers
 */
class BookingRevenueByCustomersRequest {
    tenantId;
    memberCustomerIds;
    startDate;
    endDate;
}
exports.BookingRevenueByCustomersRequest = BookingRevenueByCustomersRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingRevenueByCustomersRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], description: 'CRM customer IDs of loyalty members (= booking.guestId)' }),
    __metadata("design:type", Array)
], BookingRevenueByCustomersRequest.prototype, "memberCustomerIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date filter (ISO string)' }),
    __metadata("design:type", String)
], BookingRevenueByCustomersRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date filter (ISO string)' }),
    __metadata("design:type", String)
], BookingRevenueByCustomersRequest.prototype, "endDate", void 0);
/**
 * Response data for member vs non-member revenue
 */
class BookingRevenueByCustomersData {
    memberTotalRevenue;
    memberAverageRevenue;
    membersWithBookings;
    nonMemberAverageRevenue;
    upliftPercentage;
}
exports.BookingRevenueByCustomersData = BookingRevenueByCustomersData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue from member bookings (grossAmount sum)' }),
    __metadata("design:type", Number)
], BookingRevenueByCustomersData.prototype, "memberTotalRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average revenue per member who has at least 1 booking' }),
    __metadata("design:type", Number)
], BookingRevenueByCustomersData.prototype, "memberAverageRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of members with at least 1 booking' }),
    __metadata("design:type", Number)
], BookingRevenueByCustomersData.prototype, "membersWithBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average revenue per non-member booking' }),
    __metadata("design:type", Number)
], BookingRevenueByCustomersData.prototype, "nonMemberAverageRevenue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Uplift percentage: (memberAvg - nonMemberAvg) / nonMemberAvg * 100' }),
    __metadata("design:type", Number)
], BookingRevenueByCustomersData.prototype, "upliftPercentage", void 0);
//# sourceMappingURL=member-revenue.nats.js.map