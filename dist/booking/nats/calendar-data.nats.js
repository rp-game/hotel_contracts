"use strict";
/**
 * Calendar Data NATS Contract
 *
 * NATS Pattern: booking.calendar.get
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to fetch bookings for a date range
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
exports.CalendarEventDto = exports.CalendarRoomTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Room type information for calendar events
 */
class CalendarRoomTypeDto {
    name;
    id;
}
exports.CalendarRoomTypeDto = CalendarRoomTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], CalendarRoomTypeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], CalendarRoomTypeDto.prototype, "id", void 0);
/**
 * Calendar event (booking) for display
 * Used as Swagger DTO by api-gateway and as NATS response type by booking-service
 */
class CalendarEventDto {
    id;
    bookingCode;
    title;
    guestName;
    guestEmail;
    roomNumber;
    roomType;
    checkInDate;
    checkOutDate;
    roomId;
    status;
    totalAmount;
    adultCount;
    childCount;
    assignmentStatus;
    specialRequests;
    source;
    createdAt;
    groupId;
    groupName;
}
exports.CalendarEventDto = CalendarEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique event ID (booking ID)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code (e.g., BK2024123456)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Event title (guest name) - for calendar display' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest email' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number (e.g., "101")' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type information', type: () => CalendarRoomTypeDto }),
    __metadata("design:type", CalendarRoomTypeDto)
], CalendarEventDto.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room ID for this booking' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status', enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'] }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount (as string for precision)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of adults' }),
    __metadata("design:type", Number)
], CalendarEventDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of children' }),
    __metadata("design:type", Number)
], CalendarEventDto.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room assignment status' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from guest' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking source (DIRECT, OTA, etc.)' }),
    __metadata("design:type", String)
], CalendarEventDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation timestamp' }),
    __metadata("design:type", Date)
], CalendarEventDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group block ID' }),
    __metadata("design:type", Object)
], CalendarEventDto.prototype, "groupId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group name' }),
    __metadata("design:type", Object)
], CalendarEventDto.prototype, "groupName", void 0);
//# sourceMappingURL=calendar-data.nats.js.map