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
exports.BookingWindowResponseDto = exports.BookingWindowBucketDto = exports.GetBookingWindowRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetBookingWindowRequest {
    tenantId;
    hotelId;
    startDate;
    endDate;
}
exports.GetBookingWindowRequest = GetBookingWindowRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetBookingWindowRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetBookingWindowRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Start date filter (YYYY-MM-DD)', example: '2025-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetBookingWindowRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'End date filter (YYYY-MM-DD)', example: '2025-12-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetBookingWindowRequest.prototype, "endDate", void 0);
class BookingWindowBucketDto {
    label;
    key;
    total;
    bySource;
}
exports.BookingWindowBucketDto = BookingWindowBucketDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bucket label', example: '0-1 ngày' }),
    __metadata("design:type", String)
], BookingWindowBucketDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bucket key', example: 'same_day' }),
    __metadata("design:type", String)
], BookingWindowBucketDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total bookings in this bucket', example: 42 }),
    __metadata("design:type", Number)
], BookingWindowBucketDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Breakdown by source' }),
    __metadata("design:type", Object)
], BookingWindowBucketDto.prototype, "bySource", void 0);
class BookingWindowResponseDto {
    buckets;
    totalBookings;
    averageAdvanceDays;
}
exports.BookingWindowResponseDto = BookingWindowResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Buckets with booking count per advance days', type: () => [BookingWindowBucketDto] }),
    __metadata("design:type", Array)
], BookingWindowResponseDto.prototype, "buckets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total bookings analyzed', example: 250 }),
    __metadata("design:type", Number)
], BookingWindowResponseDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average advance booking days', example: 12.5 }),
    __metadata("design:type", Number)
], BookingWindowResponseDto.prototype, "averageAdvanceDays", void 0);
//# sourceMappingURL=booking-window.nats.js.map