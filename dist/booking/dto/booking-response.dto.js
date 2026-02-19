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
exports.BookingResponseDto = exports.BookingServiceResponseDto = exports.BookingPaymentResponseDto = exports.BookingGuestResponseDto = exports.BookingRoomResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const booking_status_enum_1 = require("../enums/booking-status.enum");
const booking_source_enum_1 = require("../enums/booking-source.enum");
const payment_status_enum_1 = require("../enums/payment-status.enum");
class BookingRoomResponseDto {
    id;
    roomTypeId;
    roomTypeName;
    roomId;
    roomNumber;
    pricePerUnit;
    totalPrice;
    discountAmount;
    adultCount;
    childCount;
}
exports.BookingRoomResponseDto = BookingRoomResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], BookingRoomResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price per unit' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "pricePerUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discount amount' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "discountAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adult count' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Child count' }),
    __metadata("design:type", Number)
], BookingRoomResponseDto.prototype, "childCount", void 0);
class BookingGuestResponseDto {
    id;
    isMainGuest;
    fullName;
    email;
    phone;
    idType;
    idNumber;
    nationality;
}
exports.BookingGuestResponseDto = BookingGuestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is main guest' }),
    __metadata("design:type", Boolean)
], BookingGuestResponseDto.prototype, "isMainGuest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email address' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID type' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "idType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID number' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "idNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nationality' }),
    __metadata("design:type", String)
], BookingGuestResponseDto.prototype, "nationality", void 0);
class BookingPaymentResponseDto {
    id;
    amount;
    paymentMethod;
    paymentStatus;
    paymentDate;
    transactionId;
}
exports.BookingPaymentResponseDto = BookingPaymentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment amount' }),
    __metadata("design:type", Number)
], BookingPaymentResponseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment date' }),
    __metadata("design:type", Date)
], BookingPaymentResponseDto.prototype, "paymentDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Transaction ID' }),
    __metadata("design:type", String)
], BookingPaymentResponseDto.prototype, "transactionId", void 0);
class BookingServiceResponseDto {
    id;
    serviceId;
    serviceName;
    quantity;
    price;
    totalPrice;
    serviceDate;
    isPaid;
}
exports.BookingServiceResponseDto = BookingServiceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID' }),
    __metadata("design:type", String)
], BookingServiceResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service ID reference' }),
    __metadata("design:type", String)
], BookingServiceResponseDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service name' }),
    __metadata("design:type", String)
], BookingServiceResponseDto.prototype, "serviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price' }),
    __metadata("design:type", Number)
], BookingServiceResponseDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service date' }),
    __metadata("design:type", Date)
], BookingServiceResponseDto.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is paid' }),
    __metadata("design:type", Boolean)
], BookingServiceResponseDto.prototype, "isPaid", void 0);
class BookingResponseDto {
    id;
    bookingCode;
    tenantId;
    hotelId;
    guestId;
    // Room assignment (for single room bookings - most common case)
    roomTypeId;
    roomId;
    roomNumber;
    assignmentStatus;
    // Booking information
    status;
    source;
    // Time information
    checkInDate;
    checkOutDate;
    estimatedCheckInTime;
    actualCheckInTime;
    actualCheckOutTime;
    // Payment information
    totalAmount;
    paidAmount;
    paymentStatus;
    // Other information
    specialRequests;
    notes;
    // Guest counts
    adultCount;
    childCount;
    // OTA information
    otaBookingId;
    otaBookingReference;
    // Related information
    rooms;
    guests;
    payments;
    services;
    // Metadata
    createdAt;
    updatedAt;
    createdBy;
    updatedBy;
}
exports.BookingResponseDto = BookingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID (UUID)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking reference code' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest/Customer ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room number' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room assignment status' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status', enum: booking_status_enum_1.BookingStatus }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking source', enum: booking_source_enum_1.BookingSource }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated check-in time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "estimatedCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-in time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "actualCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Actual check-out time' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "actualCheckOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status', enum: payment_status_enum_1.PaymentStatus }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking notes' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of adults' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of children' }),
    __metadata("design:type", Number)
], BookingResponseDto.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA booking ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "otaBookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'OTA booking reference' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "otaBookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking rooms', type: [BookingRoomResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking guests', type: [BookingGuestResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking payments', type: [BookingPaymentResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "payments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional services', type: [BookingServiceResponseDto] }),
    __metadata("design:type", Array)
], BookingResponseDto.prototype, "services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated date' }),
    __metadata("design:type", Date)
], BookingResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Created by user ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Updated by user ID' }),
    __metadata("design:type", String)
], BookingResponseDto.prototype, "updatedBy", void 0);
//# sourceMappingURL=booking-response.dto.js.map