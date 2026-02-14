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
exports.HotelSettingsResponseDto = exports.UpdateHotelSettingsRequestDto = exports.HotelOperationSettingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Hotel Operation Settings - Unified DTO for REST and NATS
 * Single source of truth for operation settings across all layers
 */
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
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default check-out time (HH:mm format)', example: '11:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "checkOutTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'VND' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Default cleaning duration in minutes', example: 60 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(15),
    (0, class_validator_1.Max)(300),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "defaultCleaningDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Grace period for late check-out in minutes', example: 15 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], HotelOperationSettingsDto.prototype, "gracePeriodMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Auto-assign rooms when booking is confirmed', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "autoAssignRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Enable/disable hourly booking mode', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "hourlyBooking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ['hourly', 'daily'],
        description: 'Preferred booking mode',
        example: 'daily'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['hourly', 'daily']),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "preferBookingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        description: 'Business hours (start and end times in HH:mm format)',
        example: { start: '06:00', end: '22:00' },
        additionalProperties: false,
        properties: {
            start: { type: 'string', example: '06:00' },
            end: { type: 'string', example: '22:00' }
        }
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], HotelOperationSettingsDto.prototype, "businessHours", void 0);
/**
 * Update Hotel Settings Request DTO
 * Used for POST /hotels/:id/settings endpoint
 * Includes both basic hotel info and operation settings
 */
class UpdateHotelSettingsRequestDto {
    name;
    address;
    city;
    country;
    contactEmail;
    contactPhone;
    operationSettings;
}
exports.UpdateHotelSettingsRequestDto = UpdateHotelSettingsRequestDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email address' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateHotelSettingsRequestDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Operation settings',
        type: HotelOperationSettingsDto
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HotelOperationSettingsDto),
    __metadata("design:type", HotelOperationSettingsDto)
], UpdateHotelSettingsRequestDto.prototype, "operationSettings", void 0);
/**
 * Hotel Settings Response DTO
 * Used for GET /hotels/:id/settings and POST /hotels/:id/settings responses
 * Returns complete hotel information including operation settings
 */
class HotelSettingsResponseDto {
    id;
    name;
    address;
    city;
    country;
    contactEmail;
    contactPhone;
    tenantId;
    operationSettings;
    createdAt;
    updatedAt;
}
exports.HotelSettingsResponseDto = HotelSettingsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel name' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel address' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact email address' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "contactEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contact phone number' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "contactPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tenant ID' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Operation settings',
        type: HotelOperationSettingsDto
    }),
    __metadata("design:type", HotelOperationSettingsDto)
], HotelSettingsResponseDto.prototype, "operationSettings", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created at timestamp' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Updated at timestamp' }),
    __metadata("design:type", String)
], HotelSettingsResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=hotel-settings.dto.js.map