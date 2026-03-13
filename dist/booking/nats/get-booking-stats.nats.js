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
exports.BookingStatsResponseDto = exports.BookingStatusCountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BookingStatusCountDto {
    status;
    count;
}
exports.BookingStatusCountDto = BookingStatusCountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking status (e.g. CONFIRMED, CANCELLED)', example: 'CONFIRMED' }),
    __metadata("design:type", String)
], BookingStatusCountDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of bookings with this status', example: 12 }),
    __metadata("design:type", Number)
], BookingStatusCountDto.prototype, "count", void 0);
class BookingStatsResponseDto {
    totalBookings;
    confirmedBookings;
    cancelledBookings;
    occupancyRate;
    averageStay;
    revenue;
    bookingsByStatus;
}
exports.BookingStatsResponseDto = BookingStatsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of bookings', example: 35 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of confirmed bookings', example: 28 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "confirmedBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of cancelled bookings', example: 2 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "cancelledBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Occupancy rate as percentage (0-100)', example: 85.5 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "occupancyRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average stay duration in nights', example: 3.2 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "averageStay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total revenue', example: 15000000 }),
    __metadata("design:type", Number)
], BookingStatsResponseDto.prototype, "revenue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Booking count grouped by status', type: () => [BookingStatusCountDto] }),
    __metadata("design:type", Array)
], BookingStatsResponseDto.prototype, "bookingsByStatus", void 0);
//# sourceMappingURL=get-booking-stats.nats.js.map