"use strict";
/**
 * Allotment REST DTOs
 * Used by api-gateway controllers for request validation and Swagger docs
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
exports.AllotmentSummaryResponseDto = exports.AllotmentAvailabilityResponseDto = exports.AllotmentPickupResponseDto = exports.AllotmentDailyInventoryResponseDto = exports.AllotmentListResponseDto = exports.AllotmentResponseDto = exports.AllotmentDetailResponseDto = exports.CheckAllotmentAvailabilityQueryDto = exports.AllotmentStopSellDto = exports.AllotmentReleaseDto = exports.FindAllotmentsQueryDto = exports.UpdateAllotmentDto = exports.CreateAllotmentDto = exports.AllotmentDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const allotment_enum_1 = require("../enums/allotment.enum");
// --- Nested DTO for allotment details ---
class AllotmentDetailDto {
    roomTypeId;
    roomTypeName;
    allottedRooms;
    daysOfWeek;
}
exports.AllotmentDetailDto = AllotmentDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AllotmentDetailDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllotmentDetailDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms allotted per night', example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], AllotmentDetailDto.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Days of week (1=Mon..7=Sun). Null = all days.', example: [1, 3, 5] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Object)
], AllotmentDetailDto.prototype, "daysOfWeek", void 0);
// --- Create ---
class CreateAllotmentDto {
    hotelId;
    partnerId;
    partnerType;
    partnerName;
    contractNumber;
    startDate;
    endDate;
    releaseDays;
    inventoryControl;
    ratePlanId;
    notes;
    details;
}
exports.CreateAllotmentDto = CreateAllotmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (required for CHAIN_OWNER, inferred from token for hotel-scoped users)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Partner ID (corporate account or travel agent)' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "partnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Partner type', enum: allotment_enum_1.AllotmentPartnerType }),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentPartnerType),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Partner name (denormalized)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "partnerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number reference' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Allotment start date', example: '2026-04-01' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Allotment end date', example: '2026-06-30' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auto-release N days before check-in', example: 7, default: 7 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], CreateAllotmentDto.prototype, "releaseDays", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inventory control mode', enum: allotment_enum_1.AllotmentInventoryControl, default: allotment_enum_1.AllotmentInventoryControl.ELASTIC }),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentInventoryControl),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate plan ID (contract rate)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAllotmentDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type allocations', type: [AllotmentDetailDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AllotmentDetailDto),
    __metadata("design:type", Array)
], CreateAllotmentDto.prototype, "details", void 0);
// --- Update ---
class UpdateAllotmentDto {
    startDate;
    endDate;
    releaseDays;
    inventoryControl;
    ratePlanId;
    status;
    notes;
}
exports.UpdateAllotmentDto = UpdateAllotmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(90),
    __metadata("design:type", Number)
], UpdateAllotmentDto.prototype, "releaseDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: allotment_enum_1.AllotmentInventoryControl }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentInventoryControl),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: allotment_enum_1.AllotmentStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentStatus),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAllotmentDto.prototype, "notes", void 0);
// --- Query ---
class FindAllotmentsQueryDto {
    hotelId;
    partnerId;
    partnerType;
    status;
    startDate;
    endDate;
    page;
    limit;
}
exports.FindAllotmentsQueryDto = FindAllotmentsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "partnerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: allotment_enum_1.AllotmentPartnerType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentPartnerType),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: allotment_enum_1.AllotmentStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentStatus),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindAllotmentsQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], FindAllotmentsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], FindAllotmentsQueryDto.prototype, "limit", void 0);
// --- Operations ---
class AllotmentReleaseDto {
    dates;
    roomTypeId;
}
exports.AllotmentReleaseDto = AllotmentReleaseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dates to release', example: ['2026-04-15', '2026-04-16'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDateString)({}, { each: true }),
    __metadata("design:type", Array)
], AllotmentReleaseDto.prototype, "dates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AllotmentReleaseDto.prototype, "roomTypeId", void 0);
class AllotmentStopSellDto {
    dates;
    roomTypeId;
    stopSell;
}
exports.AllotmentStopSellDto = AllotmentStopSellDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dates to stop-sell/unsell', example: ['2026-04-15'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDateString)({}, { each: true }),
    __metadata("design:type", Array)
], AllotmentStopSellDto.prototype, "dates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by room type' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AllotmentStopSellDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'true = stop sell, false = resume sell' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AllotmentStopSellDto.prototype, "stopSell", void 0);
class CheckAllotmentAvailabilityQueryDto {
    partnerId;
    partnerType;
    roomTypeId;
    stayDates;
}
exports.CheckAllotmentAvailabilityQueryDto = CheckAllotmentAvailabilityQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CheckAllotmentAvailabilityQueryDto.prototype, "partnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: allotment_enum_1.AllotmentPartnerType }),
    (0, class_validator_1.IsEnum)(allotment_enum_1.AllotmentPartnerType),
    __metadata("design:type", String)
], CheckAllotmentAvailabilityQueryDto.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CheckAllotmentAvailabilityQueryDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stay dates', example: ['2026-04-10', '2026-04-11'], type: [String] }),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : [value]),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDateString)({}, { each: true }),
    __metadata("design:type", Array)
], CheckAllotmentAvailabilityQueryDto.prototype, "stayDates", void 0);
// --- Response DTOs (for Swagger) ---
class AllotmentDetailResponseDto {
    id;
    roomTypeId;
    roomTypeName;
    allottedRooms;
    daysOfWeek;
}
exports.AllotmentDetailResponseDto = AllotmentDetailResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentDetailResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentDetailResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentDetailResponseDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentDetailResponseDto.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Object)
], AllotmentDetailResponseDto.prototype, "daysOfWeek", void 0);
class AllotmentResponseDto {
    id;
    partnerId;
    partnerType;
    partnerName;
    contractNumber;
    startDate;
    endDate;
    releaseDays;
    inventoryControl;
    ratePlanId;
    status;
    notes;
    totalAllottedRooms;
    totalPickedUpRooms;
    utilizationPercent;
    details;
    createdByName;
    createdAt;
    updatedAt;
}
exports.AllotmentResponseDto = AllotmentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "partnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "partnerType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "partnerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentResponseDto.prototype, "releaseDays", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "ratePlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], AllotmentResponseDto.prototype, "totalAllottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], AllotmentResponseDto.prototype, "totalPickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], AllotmentResponseDto.prototype, "utilizationPercent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [AllotmentDetailResponseDto] }),
    __metadata("design:type", Array)
], AllotmentResponseDto.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentResponseDto.prototype, "updatedAt", void 0);
class AllotmentListResponseDto {
    allotments;
    total;
    page;
    limit;
    totalPages;
}
exports.AllotmentListResponseDto = AllotmentListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AllotmentResponseDto] }),
    __metadata("design:type", Array)
], AllotmentListResponseDto.prototype, "allotments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentListResponseDto.prototype, "totalPages", void 0);
class AllotmentDailyInventoryResponseDto {
    date;
    roomTypeId;
    roomTypeName;
    allottedRooms;
    pickedUpRooms;
    releasedRooms;
    stopSell;
    available;
}
exports.AllotmentDailyInventoryResponseDto = AllotmentDailyInventoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentDailyInventoryResponseDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AllotmentDailyInventoryResponseDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentDailyInventoryResponseDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentDailyInventoryResponseDto.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentDailyInventoryResponseDto.prototype, "pickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentDailyInventoryResponseDto.prototype, "releasedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], AllotmentDailyInventoryResponseDto.prototype, "stopSell", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentDailyInventoryResponseDto.prototype, "available", void 0);
class AllotmentPickupResponseDto {
    daily;
}
exports.AllotmentPickupResponseDto = AllotmentPickupResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AllotmentDailyInventoryResponseDto] }),
    __metadata("design:type", Array)
], AllotmentPickupResponseDto.prototype, "daily", void 0);
class AllotmentAvailabilityResponseDto {
    allotmentId;
    inventoryControl;
    availableDates;
    unavailableDates;
}
exports.AllotmentAvailabilityResponseDto = AllotmentAvailabilityResponseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentAvailabilityResponseDto.prototype, "allotmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], AllotmentAvailabilityResponseDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], AllotmentAvailabilityResponseDto.prototype, "availableDates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], AllotmentAvailabilityResponseDto.prototype, "unavailableDates", void 0);
class AllotmentSummaryResponseDto {
    totalActiveAllotments;
    totalHeldRooms;
    totalPickedUpRooms;
    utilizationPercent;
    upcomingReleases;
}
exports.AllotmentSummaryResponseDto = AllotmentSummaryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentSummaryResponseDto.prototype, "totalActiveAllotments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentSummaryResponseDto.prototype, "totalHeldRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentSummaryResponseDto.prototype, "totalPickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentSummaryResponseDto.prototype, "utilizationPercent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AllotmentSummaryResponseDto.prototype, "upcomingReleases", void 0);
//# sourceMappingURL=allotment.dto.js.map