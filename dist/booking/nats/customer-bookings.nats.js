"use strict";
/**
 * Customer Bookings NATS Contract
 *
 * NATS Pattern: booking.customer.bookings
 * Handler: booking-service
 * Called by: api-gateway (CrmController)
 * Used by: Customer profile page - bookings list
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
exports.CustomerBookingsListNatsResponse = exports.CustomerBookingNatsResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const booking_status_enum_1 = require("../enums/booking-status.enum");
/**
 * Customer Booking Response
 * Compatible with API Gateway BookingDto
 */
class CustomerBookingNatsResponse {
    id;
    bookingCode;
    tenantId;
    hotelId;
    guestName;
    guestEmail;
    guestPhone;
    checkInDate;
    checkOutDate;
    roomTypeId;
    roomTypeName;
    roomId;
    roomNumber;
    guestCount;
    numberOfNights;
    totalAmount;
    paidAmount;
    balance;
    status;
    specialRequests;
    notes;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
    actualCheckInTime;
    actualCheckOutTime;
}
exports.CustomerBookingNatsResponse = CustomerBookingNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code/reference number' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone number' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned room ID' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Assigned room number' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    __metadata("design:type", Number)
], CustomerBookingNatsResponse.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of nights' }),
    __metadata("design:type", Number)
], CustomerBookingNatsResponse.prototype, "numberOfNights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount for booking' }),
    __metadata("design:type", Number)
], CustomerBookingNatsResponse.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid amount' }),
    __metadata("design:type", Number)
], CustomerBookingNatsResponse.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Outstanding balance' }),
    __metadata("design:type", Number)
], CustomerBookingNatsResponse.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking status',
        enum: booking_status_enum_1.BookingStatus
    }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes about the booking' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking creation date' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last updated date' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who created the booking' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who last updated the booking' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-in time' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "actualCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-out time' }),
    __metadata("design:type", String)
], CustomerBookingNatsResponse.prototype, "actualCheckOutTime", void 0);
/**
 * Customer Bookings List Response
 */
class CustomerBookingsListNatsResponse {
    data;
    total;
    page;
    limit;
}
exports.CustomerBookingsListNatsResponse = CustomerBookingsListNatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of customer bookings', type: [CustomerBookingNatsResponse] }),
    __metadata("design:type", Array)
], CustomerBookingsListNatsResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings' }),
    __metadata("design:type", Number)
], CustomerBookingsListNatsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], CustomerBookingsListNatsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page' }),
    __metadata("design:type", Number)
], CustomerBookingsListNatsResponse.prototype, "limit", void 0);
//# sourceMappingURL=customer-bookings.nats.js.map