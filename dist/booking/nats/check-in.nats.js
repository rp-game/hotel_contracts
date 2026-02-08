"use strict";
/**
 * Check-In & Check-Out NATS Contracts
 * Patterns: booking.check_in, booking.check_out, booking.pending_checkins
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
exports.PendingCheckinsListData = exports.PendingCheckinBooking = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Pending Check-in Booking Information
 * Used for both NATS response and REST API response
 * Single source of truth for check-in data structure
 */
class PendingCheckinBooking {
    id;
    bookingCode;
    guestName;
    guestEmail;
    guestPhone;
    checkInDate;
    checkOutDate;
    estimatedCheckInTime;
    roomType;
    roomNumber;
    roomTypeId;
    roomId;
    guestCount;
    status;
    assignmentStatus;
    specialRequests;
    totalAmount;
    paidAmount;
    remainingAmount;
    loyaltyPoints;
    loyaltyTier;
}
exports.PendingCheckinBooking = PendingCheckinBooking;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID (UUID)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking reference code (unique, alphanumeric)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest full name' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email address' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone number' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD format)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD format)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estimated check-in time (ISO 8601 format)', required: false }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "estimatedCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number or "Unassigned"' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID (UUID)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID (UUID), null if not yet assigned', required: false }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total guest count (adults + children)' }),
    __metadata("design:type", Number)
], PendingCheckinBooking.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status (CONFIRMED, PENDING, etc.)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room assignment status (ASSIGNED, PENDING, UNASSIGNED)' }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Special requests from guest', required: false }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount (currency unit)' }),
    __metadata("design:type", Number)
], PendingCheckinBooking.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], PendingCheckinBooking.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Remaining amount to pay (totalAmount - paidAmount, calculated by backend)' }),
    __metadata("design:type", Number)
], PendingCheckinBooking.prototype, "remainingAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer loyalty points', required: false }),
    __metadata("design:type", Number)
], PendingCheckinBooking.prototype, "loyaltyPoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer loyalty tier (e.g., GOLD, SILVER, BRONZE)', required: false }),
    __metadata("design:type", String)
], PendingCheckinBooking.prototype, "loyaltyTier", void 0);
/**
 * Pending Check-ins List Response Data
 */
class PendingCheckinsListData {
    bookings;
    total;
    page;
    limit;
}
exports.PendingCheckinsListData = PendingCheckinsListData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of bookings pending check-in', type: [PendingCheckinBooking] }),
    __metadata("design:type", Array)
], PendingCheckinsListData.prototype, "bookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pending check-ins across all pages' }),
    __metadata("design:type", Number)
], PendingCheckinsListData.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], PendingCheckinsListData.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], PendingCheckinsListData.prototype, "limit", void 0);
//# sourceMappingURL=check-in.nats.js.map