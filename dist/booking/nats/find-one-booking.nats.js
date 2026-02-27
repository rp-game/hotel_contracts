"use strict";
/**
 * Find One Booking NATS Contract
 *
 * NATS Pattern: booking.find_one
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: booking detail page and calendar modal
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
exports.GetBookingByIdResponse = exports.GetBookingByIdRequest = exports.BookingPayment = exports.BookingGuest = exports.BookingRoom = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const booking_response_dto_1 = require("../dto/booking-response.dto");
class BookingRoom {
    id;
    roomNumber;
    roomTypeId;
    roomTypeName;
    checkInDate;
    checkOutDate;
    pricePerNight;
    totalPrice;
}
exports.BookingRoom = BookingRoom;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number (e.g., "101")' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date for this room' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date for this room' }),
    __metadata("design:type", String)
], BookingRoom.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per night for this room' }),
    __metadata("design:type", Number)
], BookingRoom.prototype, "pricePerNight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price for this room' }),
    __metadata("design:type", Number)
], BookingRoom.prototype, "totalPrice", void 0);
class BookingGuest {
    id;
    firstName;
    lastName;
    fullName;
    email;
    phone;
    nationality;
    idType;
    idNumber;
}
exports.BookingGuest = BookingGuest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest first name' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest last name' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest full name' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone number' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest nationality' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID type (passport, driver license, etc.)' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "idType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest ID number' }),
    __metadata("design:type", String)
], BookingGuest.prototype, "idNumber", void 0);
class BookingPayment {
    id;
    method;
    status;
    amount;
    paidAt;
    transactionRef;
}
exports.BookingPayment = BookingPayment;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID' }),
    __metadata("design:type", String)
], BookingPayment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method' }),
    __metadata("design:type", String)
], BookingPayment.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment status',
        enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED'],
    }),
    __metadata("design:type", String)
], BookingPayment.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount paid' }),
    __metadata("design:type", Number)
], BookingPayment.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment date' }),
    __metadata("design:type", String)
], BookingPayment.prototype, "paidAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction reference' }),
    __metadata("design:type", String)
], BookingPayment.prototype, "transactionRef", void 0);
class GetBookingByIdRequest {
    tenantId;
    hotelId;
    bookingId;
}
exports.GetBookingByIdRequest = GetBookingByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetBookingByIdRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetBookingByIdRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID', format: 'uuid' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], GetBookingByIdRequest.prototype, "bookingId", void 0);
class GetBookingByIdResponse {
    id;
    bookingCode;
    status;
    source;
    paymentStatus;
    checkInDate;
    checkOutDate;
    totalAmount;
    paidAmount;
    balance;
    rooms;
    mainGuest;
    additionalGuests;
    payments;
    services;
    folio;
    grandTotal;
    specialRequests;
    notes;
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
    actualCheckInTime;
    actualCheckOutTime;
}
exports.GetBookingByIdResponse = GetBookingByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code (e.g., BK2024123456)' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking status',
        enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'],
    }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking source (WEB, OTA, PHONE, WALK_IN, etc.)' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment status',
        enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED'],
    }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount' }),
    __metadata("design:type", Number)
], GetBookingByIdResponse.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], GetBookingByIdResponse.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Outstanding balance' }),
    __metadata("design:type", Number)
], GetBookingByIdResponse.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rooms in this booking', type: [BookingRoom] }),
    __metadata("design:type", Array)
], GetBookingByIdResponse.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary guest information', type: BookingGuest }),
    __metadata("design:type", BookingGuest)
], GetBookingByIdResponse.prototype, "mainGuest", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional guests', type: [BookingGuest] }),
    __metadata("design:type", Array)
], GetBookingByIdResponse.prototype, "additionalGuests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment records', type: [BookingPayment] }),
    __metadata("design:type", Array)
], GetBookingByIdResponse.prototype, "payments", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional services charged to this booking', type: [booking_response_dto_1.BookingServiceResponseDto] }),
    __metadata("design:type", Array)
], GetBookingByIdResponse.prototype, "services", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Folio line items (rooms + services + discounts)', type: [booking_response_dto_1.FolioItemDto] }),
    __metadata("design:type", Array)
], GetBookingByIdResponse.prototype, "folio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Grand total computed from folio (rooms + services)' }),
    __metadata("design:type", Number)
], GetBookingByIdResponse.prototype, "grandTotal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes about the booking' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking creation date' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update date' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who created the booking' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who last updated the booking' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-in time' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "actualCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-out time' }),
    __metadata("design:type", String)
], GetBookingByIdResponse.prototype, "actualCheckOutTime", void 0);
//# sourceMappingURL=find-one-booking.nats.js.map