"use strict";
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
exports.BookingCancelledEvent = exports.BookingCheckedOutEvent = exports.BookingCheckedInEvent = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Booking Events - NATS Event Contracts
 *
 * These classes define the event payload shapes for booking lifecycle events
 * emitted via NATS EventPattern for cross-service communication.
 *
 * Events:
 *   - booking.checked_in   → CRM updates totalBookings + lastBookingDate
 *   - booking.checked_out  → CRM updates totalSpent
 *   - booking.cancelled    → CRM reverses stats
 */
class BookingCheckedInEvent {
    bookingId;
    customerId;
    tenantId;
    hotelId;
    totalAmount;
    checkInDate;
    checkOutDate;
}
exports.BookingCheckedInEvent = BookingCheckedInEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CRM Customer ID' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking total amount (estimated)' }),
    __metadata("design:type", Number)
], BookingCheckedInEvent.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual check-in date/time (ISO string)' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected check-out date (ISO string)' }),
    __metadata("design:type", String)
], BookingCheckedInEvent.prototype, "checkOutDate", void 0);
class BookingCheckedOutEvent {
    bookingId;
    customerId;
    tenantId;
    hotelId;
    finalAmount;
    checkInDate;
    checkOutDate;
    checkedOutAt;
}
exports.BookingCheckedOutEvent = BookingCheckedOutEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CRM Customer ID' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final amount after all charges' }),
    __metadata("design:type", Number)
], BookingCheckedOutEvent.prototype, "finalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (ISO string)' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (ISO string)' }),
    __metadata("design:type", String)
], BookingCheckedOutEvent.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual check-out timestamp' }),
    __metadata("design:type", Date)
], BookingCheckedOutEvent.prototype, "checkedOutAt", void 0);
class BookingCancelledEvent {
    bookingId;
    customerId;
    tenantId;
    hotelId;
    paidAmount;
    refundAmount;
    cancelledAt;
}
exports.BookingCancelledEvent = BookingCancelledEvent;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], BookingCancelledEvent.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CRM Customer ID' }),
    __metadata("design:type", String)
], BookingCancelledEvent.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingCancelledEvent.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingCancelledEvent.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], BookingCancelledEvent.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Refund amount' }),
    __metadata("design:type", Number)
], BookingCancelledEvent.prototype, "refundAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cancellation timestamp' }),
    __metadata("design:type", Date)
], BookingCancelledEvent.prototype, "cancelledAt", void 0);
//# sourceMappingURL=booking-events.nats.js.map