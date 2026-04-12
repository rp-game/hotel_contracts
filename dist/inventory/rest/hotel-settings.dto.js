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
exports.HotelSettingsResponseDto = exports.UpdateHotelSettingsRequestDto = exports.HotelOperationSettingsDto = exports.ShiftConfigDto = exports.ShiftTimeRangeDto = exports.TaxConfigurationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * Tax Configuration DTO
 * Stores hotel-level tax settings (VAT, service charge, display mode)
 * Compounding order is always: SERVICE_CHARGE first, then VAT (Vietnam standard)
 */
class TaxConfigurationDto {
    vatRate;
    serviceChargeRate;
    taxDisplayMode;
    priceInputMode;
}
exports.TaxConfigurationDto = TaxConfigurationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VAT rate in percentage (e.g. 8 for 8%)',
        example: 8,
        minimum: 0,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], TaxConfigurationDto.prototype, "vatRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Service charge rate in percentage (e.g. 5 for 5%)',
        example: 5,
        minimum: 0,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], TaxConfigurationDto.prototype, "serviceChargeRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ['inclusive', 'exclusive'],
        description: 'How prices are displayed: inclusive (tax included in shown price) or exclusive (tax shown separately, "++" convention)',
        example: 'exclusive',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['inclusive', 'exclusive']),
    __metadata("design:type", String)
], TaxConfigurationDto.prototype, "taxDisplayMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ['pre_tax', 'post_tax'],
        description: 'How prices are inputted: pre_tax means staff enter net price (tax calculated on top), post_tax means staff enter gross price (system back-calculates net before storing)',
        example: 'pre_tax',
        default: 'pre_tax',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['pre_tax', 'post_tax']),
    __metadata("design:type", String)
], TaxConfigurationDto.prototype, "priceInputMode", void 0);
/**
 * Single shift time range definition
 */
class ShiftTimeRangeDto {
    start;
    end;
    label;
}
exports.ShiftTimeRangeDto = ShiftTimeRangeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift start time (HH:mm)', example: '06:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftTimeRangeDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shift end time (HH:mm)', example: '14:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftTimeRangeDto.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Display label', example: 'Morning' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShiftTimeRangeDto.prototype, "label", void 0);
/**
 * Cashier Shift Configuration DTO
 * Defines shift time ranges for the hotel
 */
class ShiftConfigDto {
    morning;
    afternoon;
    night;
}
exports.ShiftConfigDto = ShiftConfigDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Morning shift time range',
        type: ShiftTimeRangeDto,
        example: { start: '06:00', end: '14:00', label: 'Morning' },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShiftTimeRangeDto),
    __metadata("design:type", ShiftTimeRangeDto)
], ShiftConfigDto.prototype, "morning", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Afternoon shift time range',
        type: ShiftTimeRangeDto,
        example: { start: '14:00', end: '22:00', label: 'Afternoon' },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShiftTimeRangeDto),
    __metadata("design:type", ShiftTimeRangeDto)
], ShiftConfigDto.prototype, "afternoon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Night shift time range',
        type: ShiftTimeRangeDto,
        example: { start: '22:00', end: '06:00', label: 'Night' },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShiftTimeRangeDto),
    __metadata("design:type", ShiftTimeRangeDto)
], ShiftConfigDto.prototype, "night", void 0);
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
    taxConfiguration;
    shiftConfig;
    isMultiWarehouse;
    procurementMode;
    bankTransferVerificationMode;
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
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tax configuration for the hotel',
        type: TaxConfigurationDto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TaxConfigurationDto),
    __metadata("design:type", TaxConfigurationDto)
], HotelOperationSettingsDto.prototype, "taxConfiguration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cashier shift time configuration',
        type: ShiftConfigDto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShiftConfigDto),
    __metadata("design:type", ShiftConfigDto)
], HotelOperationSettingsDto.prototype, "shiftConfig", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Enable multi-warehouse stock tracking. When true, goods receipts, issues, and adjustments require a warehouse selection.',
        example: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], HotelOperationSettingsDto.prototype, "isMultiWarehouse", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Procurement mode: SELF = hotel buys from suppliers, CHAIN_ONLY = only receives from chain warehouse, BOTH = both (default)',
        enum: ['SELF', 'CHAIN_ONLY', 'BOTH'],
        default: 'BOTH',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "procurementMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bank transfer verification mode. SIMPLE = receptionist confirms immediately (no transaction ID required). VERIFIED = payment stays PENDING until accountant enters transaction ID.',
        enum: ['SIMPLE', 'VERIFIED'],
        default: 'VERIFIED',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['SIMPLE', 'VERIFIED']),
    __metadata("design:type", String)
], HotelOperationSettingsDto.prototype, "bankTransferVerificationMode", void 0);
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