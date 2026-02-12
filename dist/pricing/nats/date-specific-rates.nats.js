"use strict";
/**
 * Date-Specific Rates NATS Contracts (7 patterns)
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
exports.DeleteDateRateResponse = exports.UpdateDateRateResponse = exports.BulkCreateSpecificDateRatesResponse = exports.CreateSpecificDateRateResponse = exports.FindDateRateCalendarResponse = exports.FindDateRateByIdResponse = exports.FindAllDateRatesResponse = exports.DeleteDateRateRequest = exports.UpdateDateRateRequest = exports.UpdateDateRateDto = exports.BulkCreateSpecificDateRatesRequest = exports.DateRateEntry = exports.CreateSpecificDateRateRequest = exports.FindDateRateCalendarRequest = exports.FindDateRateByIdRequest = exports.FindAllDateRatesRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const types_1 = require("../types");
// ============================================================================
// Request Classes
// ============================================================================
/**
 * Request to find all date-specific rates
 */
class FindAllDateRatesRequest {
    tenantId;
    hotelId;
    roomTypeId;
}
exports.FindAllDateRatesRequest = FindAllDateRatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllDateRatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllDateRatesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Room Type ID (optional filter)', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllDateRatesRequest.prototype, "roomTypeId", void 0);
/**
 * Request to find date-specific rate by ID
 */
class FindDateRateByIdRequest {
    id;
    tenantId;
}
exports.FindDateRateByIdRequest = FindDateRateByIdRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindDateRateByIdRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindDateRateByIdRequest.prototype, "tenantId", void 0);
/**
 * Request to get calendar view of date rates
 */
class FindDateRateCalendarRequest {
    tenantId;
    hotelId;
    roomTypeId;
    startDate;
    endDate;
}
exports.FindDateRateCalendarRequest = FindDateRateCalendarRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindDateRateCalendarRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindDateRateCalendarRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindDateRateCalendarRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calendar start date (YYYY-MM-DD)', example: '2025-12-01' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindDateRateCalendarRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calendar end date (YYYY-MM-DD)', example: '2025-12-31' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindDateRateCalendarRequest.prototype, "endDate", void 0);
/**
 * Request to create a date-specific rate
 */
class CreateSpecificDateRateRequest {
    tenantId;
    hotelId;
    roomTypeId;
    date;
    rate;
    currency;
    notes;
    isActive;
}
exports.CreateSpecificDateRateRequest = CreateSpecificDateRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate for this specific date', example: 250, minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSpecificDateRateRequest.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'USD', default: 'USD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about this date (e.g., "Christmas Day")', example: 'Holiday premium pricing' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSpecificDateRateRequest.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this rate is active', example: true, default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateSpecificDateRateRequest.prototype, "isActive", void 0);
/**
 * Single date-rate entry for bulk create
 */
class DateRateEntry {
    date;
    rate;
    notes;
}
exports.DateRateEntry = DateRateEntry;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], DateRateEntry.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rate for this date', example: 250, minimum: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], DateRateEntry.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about this date', example: 'Christmas Day' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DateRateEntry.prototype, "notes", void 0);
/**
 * Request to bulk create date-specific rates
 */
class BulkCreateSpecificDateRatesRequest {
    tenantId;
    hotelId;
    roomTypeId;
    rates;
    currency;
}
exports.BulkCreateSpecificDateRatesRequest = BulkCreateSpecificDateRatesRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BulkCreateSpecificDateRatesRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BulkCreateSpecificDateRatesRequest.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BulkCreateSpecificDateRatesRequest.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of date-specific rates to create',
        type: [DateRateEntry],
        example: [
            { date: '2025-12-24', rate: 220, notes: 'Christmas Eve' },
            { date: '2025-12-25', rate: 250, notes: 'Christmas Day' },
            { date: '2025-12-31', rate: 300, notes: "New Year's Eve" },
        ],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DateRateEntry),
    __metadata("design:type", Array)
], BulkCreateSpecificDateRatesRequest.prototype, "rates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Currency code', example: 'USD', default: 'USD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkCreateSpecificDateRatesRequest.prototype, "currency", void 0);
/**
 * DTO for update body (partial fields only)
 */
class UpdateDateRateDto {
    rate;
    notes;
    isActive;
}
exports.UpdateDateRateDto = UpdateDateRateDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate for this specific date', example: 250, minimum: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateDateRateDto.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes about this date', example: 'Holiday premium pricing' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDateRateDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether this rate is active', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDateRateDto.prototype, "isActive", void 0);
/**
 * Request to update a date-specific rate (NATS)
 */
class UpdateDateRateRequest {
    id;
    tenantId;
    dto;
}
exports.UpdateDateRateRequest = UpdateDateRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateDateRateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateDateRateRequest.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update data', type: () => UpdateDateRateDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateDateRateDto),
    __metadata("design:type", UpdateDateRateDto)
], UpdateDateRateRequest.prototype, "dto", void 0);
/**
 * Request to delete a date-specific rate
 */
class DeleteDateRateRequest {
    id;
    tenantId;
}
exports.DeleteDateRateRequest = DeleteDateRateRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date rate ID', example: '550e8400-e29b-41d4-a716-446655440099' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteDateRateRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeleteDateRateRequest.prototype, "tenantId", void 0);
// ============================================================================
// Response Classes
// ============================================================================
/**
 * Response for finding all date-specific rates
 */
class FindAllDateRatesResponse {
    data;
}
exports.FindAllDateRatesResponse = FindAllDateRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of date-specific rates',
        type: [types_1.SpecificDateRate],
        example: [
            {
                id: '550e8400-e29b-41d4-a716-446655440099',
                tenantId: '550e8400-e29b-41d4-a716-446655440000',
                hotelId: '550e8400-e29b-41d4-a716-446655440002',
                roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
                date: '2025-12-25',
                rate: 250,
                currency: 'USD',
                notes: 'Christmas Day',
                isActive: true,
                createdAt: '2025-10-05T10:30:00Z',
                updatedAt: '2025-10-05T10:30:00Z',
            },
        ],
    }),
    __metadata("design:type", Array)
], FindAllDateRatesResponse.prototype, "data", void 0);
/**
 * Response for finding date-specific rate by ID
 */
class FindDateRateByIdResponse {
    data;
}
exports.FindDateRateByIdResponse = FindDateRateByIdResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date-specific rate details',
        type: types_1.SpecificDateRate,
        example: {
            id: '550e8400-e29b-41d4-a716-446655440099',
            tenantId: '550e8400-e29b-41d4-a716-446655440000',
            hotelId: '550e8400-e29b-41d4-a716-446655440002',
            roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
            date: '2025-12-25',
            rate: 250,
            currency: 'USD',
            notes: 'Christmas Day',
            isActive: true,
            createdAt: '2025-10-05T10:30:00Z',
            updatedAt: '2025-10-05T10:30:00Z',
        },
    }),
    __metadata("design:type", types_1.SpecificDateRate)
], FindDateRateByIdResponse.prototype, "data", void 0);
/**
 * Response for calendar view
 */
class FindDateRateCalendarResponse {
    data;
}
exports.FindDateRateCalendarResponse = FindDateRateCalendarResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Calendar view of date-specific rates',
        type: types_1.SpecificDateRateCalendar,
        example: {
            roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
            startDate: '2025-12-01',
            endDate: '2025-12-31',
            dates: [
                { date: '2025-12-25', rate: 250, currency: 'USD', notes: 'Christmas', isActive: true, hasSpecialRate: true },
                { date: '2025-12-26', isActive: false, hasSpecialRate: false },
            ],
        },
    }),
    __metadata("design:type", types_1.SpecificDateRateCalendar)
], FindDateRateCalendarResponse.prototype, "data", void 0);
/**
 * Response for creating a date-specific rate
 */
class CreateSpecificDateRateResponse {
    data;
    message;
}
exports.CreateSpecificDateRateResponse = CreateSpecificDateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created date-specific rate',
        type: types_1.SpecificDateRate,
        example: {
            id: '550e8400-e29b-41d4-a716-446655440099',
            tenantId: '550e8400-e29b-41d4-a716-446655440000',
            hotelId: '550e8400-e29b-41d4-a716-446655440002',
            roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
            date: '2025-12-25',
            rate: 250,
            currency: 'USD',
            notes: 'Christmas Day',
            isActive: true,
            createdAt: '2025-10-05T10:30:00Z',
            updatedAt: '2025-10-05T10:30:00Z',
        },
    }),
    __metadata("design:type", types_1.SpecificDateRate)
], CreateSpecificDateRateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Date-specific rate created successfully' }),
    __metadata("design:type", String)
], CreateSpecificDateRateResponse.prototype, "message", void 0);
/**
 * Response for bulk creating date-specific rates
 */
class BulkCreateSpecificDateRatesResponse {
    data;
    message;
}
exports.BulkCreateSpecificDateRatesResponse = BulkCreateSpecificDateRatesResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bulk create result',
        type: types_1.BulkCreateDateRatesResult,
        example: {
            created: 3,
            dates: ['2025-12-24', '2025-12-25', '2025-12-31'],
            skipped: 0,
            errors: [],
        },
    }),
    __metadata("design:type", types_1.BulkCreateDateRatesResult)
], BulkCreateSpecificDateRatesResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: '3 date-specific rates created successfully' }),
    __metadata("design:type", String)
], BulkCreateSpecificDateRatesResponse.prototype, "message", void 0);
/**
 * Response for updating a date-specific rate
 */
class UpdateDateRateResponse {
    data;
    message;
}
exports.UpdateDateRateResponse = UpdateDateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated date-specific rate',
        type: types_1.SpecificDateRate,
        example: {
            id: '550e8400-e29b-41d4-a716-446655440099',
            tenantId: '550e8400-e29b-41d4-a716-446655440000',
            hotelId: '550e8400-e29b-41d4-a716-446655440002',
            roomTypeId: '550e8400-e29b-41d4-a716-446655440001',
            date: '2025-12-25',
            rate: 275,
            currency: 'USD',
            notes: 'Christmas Day - Updated',
            isActive: true,
            createdAt: '2025-10-05T10:30:00Z',
            updatedAt: '2025-10-05T11:00:00Z',
        },
    }),
    __metadata("design:type", types_1.SpecificDateRate)
], UpdateDateRateResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Date-specific rate updated successfully' }),
    __metadata("design:type", String)
], UpdateDateRateResponse.prototype, "message", void 0);
/**
 * Response for deleting a date-specific rate
 */
class DeleteDateRateResponse {
    message;
}
exports.DeleteDateRateResponse = DeleteDateRateResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success message', example: 'Date-specific rate deleted successfully' }),
    __metadata("design:type", String)
], DeleteDateRateResponse.prototype, "message", void 0);
//# sourceMappingURL=date-specific-rates.nats.js.map