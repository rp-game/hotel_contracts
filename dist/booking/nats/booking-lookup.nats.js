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
exports.GuestInfoNatsResponseData = exports.RoomByStatusItem = exports.GetRoomsByStatusNatsRequest = exports.FindGuestByIdNatsRequest = exports.FindBookingByIdNatsRequest = exports.GetBookingByRoomAndGuestNatsRequest = exports.GetBookingByIdSimpleNatsRequest = exports.FindByCodeNatsRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * NATS Pattern: booking.find_by_code
 */
class FindByCodeNatsRequest {
    code;
    tenantId;
    hotelId;
}
exports.FindByCodeNatsRequest = FindByCodeNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code' }),
    __metadata("design:type", String)
], FindByCodeNatsRequest.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindByCodeNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindByCodeNatsRequest.prototype, "hotelId", void 0);
/**
 * NATS Pattern: booking.get_by_id / booking.find_by_id
 * Simple lookup without tenant/hotel context (internal use)
 */
class GetBookingByIdSimpleNatsRequest {
    bookingId;
    id;
}
exports.GetBookingByIdSimpleNatsRequest = GetBookingByIdSimpleNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID', required: false }),
    __metadata("design:type", String)
], GetBookingByIdSimpleNatsRequest.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID (alias)', required: false }),
    __metadata("design:type", String)
], GetBookingByIdSimpleNatsRequest.prototype, "id", void 0);
/**
 * NATS Pattern: booking.get_by_room_and_guest
 */
class GetBookingByRoomAndGuestNatsRequest {
    tenantId;
    hotelId;
    roomNumber;
    guestName;
    checkInDate;
    checkOutDate;
}
exports.GetBookingByRoomAndGuestNatsRequest = GetBookingByRoomAndGuestNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number', required: false }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name', required: false }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date', required: false }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date', required: false }),
    __metadata("design:type", String)
], GetBookingByRoomAndGuestNatsRequest.prototype, "checkOutDate", void 0);
/**
 * NATS Pattern: booking.bookings.findOne
 * Lookup with tenant/hotel context validation
 */
class FindBookingByIdNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.FindBookingByIdNatsRequest = FindBookingByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], FindBookingByIdNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindBookingByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindBookingByIdNatsRequest.prototype, "hotelId", void 0);
/**
 * NATS Pattern: booking.guests.findOne
 */
class FindGuestByIdNatsRequest {
    id;
    tenantId;
    hotelId;
}
exports.FindGuestByIdNatsRequest = FindGuestByIdNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], FindGuestByIdNatsRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], FindGuestByIdNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], FindGuestByIdNatsRequest.prototype, "hotelId", void 0);
/**
 * NATS Pattern: booking.rooms.byStatus
 */
class GetRoomsByStatusNatsRequest {
    tenantId;
    hotelId;
    status;
}
exports.GetRoomsByStatusNatsRequest = GetRoomsByStatusNatsRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], GetRoomsByStatusNatsRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], GetRoomsByStatusNatsRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status filter' }),
    __metadata("design:type", String)
], GetRoomsByStatusNatsRequest.prototype, "status", void 0);
// ============= Response DTOs =============
/**
 * Single room item returned by booking.rooms.byStatus handler
 */
class RoomByStatusItem {
    roomNumber;
    roomType;
    guestName;
    status;
    bookingId;
}
exports.RoomByStatusItem = RoomByStatusItem;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], RoomByStatusItem.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type' }),
    __metadata("design:type", String)
], RoomByStatusItem.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    __metadata("design:type", String)
], RoomByStatusItem.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status' }),
    __metadata("design:type", String)
], RoomByStatusItem.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], RoomByStatusItem.prototype, "bookingId", void 0);
/**
 * Guest info returned by booking.guests.findOne handler
 */
class GuestInfoNatsResponseData {
    id;
    name;
    email;
    phone;
    nationality;
    totalBookings;
}
exports.GuestInfoNatsResponseData = GuestInfoNatsResponseData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID' }),
    __metadata("design:type", String)
], GuestInfoNatsResponseData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest full name' }),
    __metadata("design:type", String)
], GuestInfoNatsResponseData.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email' }),
    __metadata("design:type", String)
], GuestInfoNatsResponseData.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone' }),
    __metadata("design:type", String)
], GuestInfoNatsResponseData.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nationality' }),
    __metadata("design:type", String)
], GuestInfoNatsResponseData.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total bookings count' }),
    __metadata("design:type", Number)
], GuestInfoNatsResponseData.prototype, "totalBookings", void 0);
//# sourceMappingURL=booking-lookup.nats.js.map