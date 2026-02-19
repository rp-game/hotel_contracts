"use strict";
/**
 * Find Bookings NATS Contract
 *
 * NATS Pattern: booking.find_all
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: dashboard bookings list with pagination and filtering
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
exports.BookingListResponseDto = exports.BookingSummary = exports.RoomAssignmentSummaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
/**
 * Booking summary for list operations
 * Contains essential fields for display without full booking details
 */
class RoomAssignmentSummaryDto {
    id;
    roomNumber;
    roomTypeName;
}
exports.RoomAssignmentSummaryDto = RoomAssignmentSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], RoomAssignmentSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], RoomAssignmentSummaryDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], RoomAssignmentSummaryDto.prototype, "roomTypeName", void 0);
class BookingSummary {
    /**
     * Unique booking ID
     */
    id;
    /**
     * Human-readable booking code (e.g., BK2024123456)
     */
    bookingCode;
    /**
     * Booking status (uppercase enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, COMPLETED)
     */
    status;
    /**
     * Booking source (WEB, OTA, PHONE, etc.)
     */
    source;
    /**
     * Payment status (enum)
     */
    paymentStatus;
    /**
     * Check-in date (YYYY-MM-DD)
     */
    checkInDate;
    /**
     * Check-out date (YYYY-MM-DD)
     */
    checkOutDate;
    /**
     * Total booking amount
     */
    totalAmount;
    /**
     * Amount already paid
     */
    paidAmount;
    /**
     * Guest full name
     */
    guestName;
    /**
     * Guest email (optional)
     */
    guestEmail;
    /**
     * Guest phone (optional)
     */
    guestPhone;
    /**
     * Number of rooms in booking
     */
    roomCount;
    /**
     * Number of adults
     */
    adultCount;
    /**
     * Number of children
     */
    childCount;
    /**
     * Booking creation date
     */
    createdAt;
    /**
     * User ID who created booking
     */
    createdBy;
    /**
     * Room assignments
     */
    rooms;
    /**
     * Tenant ID (multi-tenant isolation)
     */
    tenantId;
    /**
     * Hotel ID (property reference)
     */
    hotelId;
    /**
     * Guest ID reference
     */
    guestId;
    /**
     * Room type ID for this booking
     */
    roomTypeId;
    /**
     * Assigned room ID (null if unassigned)
     */
    roomId;
    /**
     * Assigned room number (null if unassigned)
     */
    roomNumber;
    /**
     * Room assignment status (ASSIGNED, PENDING, UNASSIGNED)
     * CRITICAL: Indicates if room has been assigned or is pending
     */
    assignmentStatus;
    /**
     * Booking type (OVERNIGHT, HOURLY)
     */
    bookingType;
    /**
     * Start time for hourly bookings (HH:mm format)
     */
    startTime;
    /**
     * End time for hourly bookings (HH:mm format)
     */
    endTime;
    /**
     * Last update timestamp
     */
    updatedAt;
    /**
     * User ID who last updated booking
     */
    updatedBy;
    /**
     * Guest special requests
     */
    specialRequests;
    /**
     * Expected check-in time (ISO timestamp). Resolved by server: per-booking override → hotel default setting.
     * For hourly bookings uses startTime on checkInDate.
     */
    expectedCheckInTime;
    /**
     * Expected check-out time (ISO timestamp). Resolved by server: per-booking override → hotel default setting.
     * For hourly bookings uses endTime on checkOutDate.
     */
    expectedCheckOutTime;
}
exports.BookingSummary = BookingSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique booking ID' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Human-readable booking code (e.g., BK2024123456)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking status',
        enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED', 'COMPLETED']
    }),
    __metadata("design:type", String)
], BookingSummary.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking source (WEB, OTA, PHONE, etc.)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment status',
        enum: ['PENDING', 'PARTIAL', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED']
    }),
    __metadata("design:type", String)
], BookingSummary.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total booking amount' }),
    __metadata("design:type", Number)
], BookingSummary.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount already paid' }),
    __metadata("design:type", Number)
], BookingSummary.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest full name' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest email (optional)', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone (optional)', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms in booking' }),
    __metadata("design:type", Number)
], BookingSummary.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of adults' }),
    __metadata("design:type", Number)
], BookingSummary.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of children' }),
    __metadata("design:type", Number)
], BookingSummary.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking creation date' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who created booking', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room assignments', type: [RoomAssignmentSummaryDto] }),
    __metadata("design:type", Array)
], BookingSummary.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID (multi-tenant isolation)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID (property reference)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest ID reference' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "guestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID for this booking' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true, description: 'Assigned room ID (null if unassigned)', required: false }),
    __metadata("design:type", Object)
], BookingSummary.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true, description: 'Assigned room number (null if unassigned)', required: false }),
    __metadata("design:type", Object)
], BookingSummary.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room assignment status (ASSIGNED, PENDING, UNASSIGNED)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking type (OVERNIGHT, HOURLY)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "bookingType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start time for hourly bookings (HH:mm format)', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End time for hourly bookings (HH:mm format)', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who last updated booking', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest special requests', required: false }),
    __metadata("design:type", String)
], BookingSummary.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Expected check-in datetime (ISO 8601)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "expectedCheckInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, description: 'Expected check-out datetime (ISO 8601)' }),
    __metadata("design:type", String)
], BookingSummary.prototype, "expectedCheckOutTime", void 0);
/**
 * Bookings list response - shared between NATS and REST API
 * Used by:
 * - NATS pattern: booking.find_all (booking-service handler response)
 * - REST API: GET /bookings (api-gateway controller response)
 */
class BookingListResponseDto {
    /**
     * Array of booking summaries
     */
    bookings;
    /**
     * Total number of bookings matching filters
     */
    total;
    /**
     * Current page number (1-indexed)
     */
    page;
    /**
     * Number of items per page
     */
    limit;
    /**
     * Total number of pages
     */
    totalPages;
}
exports.BookingListResponseDto = BookingListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of booking summaries',
        type: [BookingSummary]
    }),
    __metadata("design:type", Array)
], BookingListResponseDto.prototype, "bookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of bookings matching filters',
        example: 100
    }),
    __metadata("design:type", Number)
], BookingListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current page number (1-indexed)',
        example: 1
    }),
    __metadata("design:type", Number)
], BookingListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of items per page',
        example: 10
    }),
    __metadata("design:type", Number)
], BookingListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of pages',
        example: 10
    }),
    __metadata("design:type", Number)
], BookingListResponseDto.prototype, "totalPages", void 0);
//# sourceMappingURL=find-bookings.nats.js.map