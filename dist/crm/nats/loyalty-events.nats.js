"use strict";
/**
 * Loyalty Events NATS Contracts
 *
 * Patterns:
 * - booking.completed
 * - loyalty.points.adjust
 * - crm.member.enrolled
 *
 * Handler: crm-service (LoyaltyEventsController)
 * Called by: Multiple services (booking-service, loyalty-service, etc)
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
exports.MemberEnrollmentNatsRequest = exports.PointsAdjustmentNatsRequest = exports.BookingCompletedEventNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Booking Completed Event
 * Pattern: booking.completed
 */
class BookingCompletedEventNatsRequest {
    bookingId;
    tenantId;
    customerId;
    hotelId;
    roomId;
    checkInDate;
    checkOutDate;
    totalAmount;
    numberOfNights;
    numberOfGuests;
    status;
    companyId;
    createdAt;
}
exports.BookingCompletedEventNatsRequest = BookingCompletedEventNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CRM customer UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date ISO string' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date ISO string' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount as string' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights stayed' }),
    __metadata("design:type", Number)
], BookingCompletedEventNatsRequest.prototype, "numberOfNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], BookingCompletedEventNatsRequest.prototype, "numberOfGuests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Company UUID' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Event created at ISO string' }),
    __metadata("design:type", String)
], BookingCompletedEventNatsRequest.prototype, "createdAt", void 0);
/**
 * Points Adjustment Request
 * Pattern: loyalty.points.adjust
 */
class PointsAdjustmentNatsRequest {
    memberId;
    tenantId;
    points;
    reason;
    adjustedBy;
    note;
}
exports.PointsAdjustmentNatsRequest = PointsAdjustmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty member UUID' }),
    __metadata("design:type", String)
], PointsAdjustmentNatsRequest.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant UUID' }),
    __metadata("design:type", String)
], PointsAdjustmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Points to adjust (positive or negative)' }),
    __metadata("design:type", Number)
], PointsAdjustmentNatsRequest.prototype, "points", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for adjustment' }),
    __metadata("design:type", String)
], PointsAdjustmentNatsRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff UUID who made the adjustment' }),
    __metadata("design:type", String)
], PointsAdjustmentNatsRequest.prototype, "adjustedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    __metadata("design:type", String)
], PointsAdjustmentNatsRequest.prototype, "note", void 0);
/**
 * Member Enrollment Event
 * Pattern: crm.member.enrolled
 */
class MemberEnrollmentNatsRequest {
    memberId;
    tenantId;
    email;
    enrollmentSource;
    programId;
    customerId;
}
exports.MemberEnrollmentNatsRequest = MemberEnrollmentNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyalty member UUID' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant UUID' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Enrollment source (e.g. BOOKING, MANUAL)' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "enrollmentSource", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Loyalty program UUID' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "programId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'CRM customer UUID' }),
    __metadata("design:type", String)
], MemberEnrollmentNatsRequest.prototype, "customerId", void 0);
//# sourceMappingURL=loyalty-events.nats.js.map