"use strict";
/**
 * Unassigned Bookings REST API DTOs
 *
 * Used by API Gateway for REST endpoints
 * These are class-based DTOs with @ApiProperty decorators for Swagger documentation
 *
 * Endpoints: GET /bookings/unassigned
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
exports.GetUnassignedBookingsResponseDto = exports.UnassignedBookingItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
/**
 * Unassigned Booking Item DTO
 * Response for unassigned bookings list
 */
class UnassignedBookingItemDto {
    bookingId;
    guestName;
    roomType;
    roomTypeId;
    checkIn;
    checkOut;
    duration;
    guestCount;
    specialRequests;
    assignmentStatus;
    bookingType;
}
exports.UnassignedBookingItemDto = UnassignedBookingItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID', format: 'uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "roomType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID', format: 'uuid' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date/time (ISO format)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date/time (ISO format)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "checkOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration of stay in hours' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UnassignedBookingItemDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of guests' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UnassignedBookingItemDto.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests from the guest' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Assignment status (e.g., UNASSIGNED, PENDING, CANCELLED)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "assignmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of booking (e.g., DIRECT, ONLINE, AGENCY, etc.)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UnassignedBookingItemDto.prototype, "bookingType", void 0);
/**
 * Get Unassigned Bookings Response DTO
 */
class GetUnassignedBookingsResponseDto {
    data;
    total;
    page;
    limit;
}
exports.GetUnassignedBookingsResponseDto = GetUnassignedBookingsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of unassigned bookings', type: [UnassignedBookingItemDto] }),
    __metadata("design:type", Array)
], GetUnassignedBookingsResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of unassigned bookings' }),
    __metadata("design:type", Number)
], GetUnassignedBookingsResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], GetUnassignedBookingsResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], GetUnassignedBookingsResponseDto.prototype, "limit", void 0);
//# sourceMappingURL=unassigned-bookings.rest.js.map