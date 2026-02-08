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
exports.HotelOperationSettingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class HotelOperationSettingsDto {
    checkInTime;
    checkOutTime;
    timezone;
    currency;
    defaultCleaningDuration;
    gracePeriodMinutes;
    autoAssignRooms;
    hourlyBooking;
    preferBookingMode;
    businessHours;
}
exports.HotelOperationSettingsDto = HotelOperationSettingsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-in time (HH:mm format)', example: '15:00' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-out time (HH:mm format)', example: '11:00' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'VND' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default cleaning duration in minutes', example: 120 }),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "defaultCleaningDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Grace period for late check-out in minutes', example: 30 }),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "gracePeriodMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto-assign rooms when booking is confirmed', example: true }),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "autoAssignRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable/disable hourly booking mode', example: false }),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "hourlyBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['hourly', 'daily'], description: 'Preferred booking mode', example: 'daily' }),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "preferBookingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        description: 'Business hours (start and end times)',
        example: { start: '06:00', end: '22:00' },
        additionalProperties: false,
        properties: {
            start: { type: 'string', example: '06:00' },
            end: { type: 'string', example: '22:00' }
        }
    }),
    __metadata("design:type", Object)
], HotelOperationSettingsDto.prototype, "businessHours", void 0);
//# sourceMappingURL=tenant-settings.js.map