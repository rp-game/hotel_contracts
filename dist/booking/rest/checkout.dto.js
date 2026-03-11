"use strict";
/**
 * Checkout REST DTOs
 * REST request/response shapes for checkout endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/staffId — from headers/JWT)
 * Response DTOs: what Swagger shows (string dates, no internal fields)
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
exports.MobileCheckoutResponseDto = exports.CheckoutInfoResponseDto = exports.QRCheckoutRequestDto = exports.MobileCheckoutRequestDto = exports.GpsLocationDto = exports.RoomInspectionDto = exports.DamageReportDto = exports.CheckoutStatus = exports.RoomCondition = exports.SearchCheckoutsResponseDto = exports.ValidateQRCodeRequestDto = exports.CheckoutItemsResponseDto = exports.CheckoutHistoryResponseDto = exports.CheckoutHistoryItemDto = exports.CompleteCheckoutResponseDto = exports.StartCheckoutResponseDto = exports.CompleteCheckoutRequestDto = exports.StartCheckoutRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const mobile_checkout_nats_1 = require("../nats/mobile-checkout.nats");
// ============= REQUEST DTOs =============
class StartCheckoutRequestDto {
    bookingId;
}
exports.StartCheckoutRequestDto = StartCheckoutRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StartCheckoutRequestDto.prototype, "bookingId", void 0);
class CompleteCheckoutRequestDto {
    bookingId;
    notes;
    damages;
    services;
}
exports.CompleteCheckoutRequestDto = CompleteCheckoutRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompleteCheckoutRequestDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Checkout notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteCheckoutRequestDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Damages list', type: [Object] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CompleteCheckoutRequestDto.prototype, "damages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional services', type: [Object] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CompleteCheckoutRequestDto.prototype, "services", void 0);
// ============= RESPONSE DTOs (REST — serialized, no internal fields) =============
class StartCheckoutResponseDto {
    bookingId;
    status;
    startTime;
    staffId;
}
exports.StartCheckoutResponseDto = StartCheckoutResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], StartCheckoutResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout status' }),
    __metadata("design:type", String)
], StartCheckoutResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout start time (ISO string)' }),
    __metadata("design:type", String)
], StartCheckoutResponseDto.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Staff ID' }),
    __metadata("design:type", String)
], StartCheckoutResponseDto.prototype, "staffId", void 0);
class CompleteCheckoutResponseDto {
    bookingId;
    status;
    completedTime;
    finalAmount;
}
exports.CompleteCheckoutResponseDto = CompleteCheckoutResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CompleteCheckoutResponseDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout status' }),
    __metadata("design:type", String)
], CompleteCheckoutResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout completed time (ISO string)' }),
    __metadata("design:type", String)
], CompleteCheckoutResponseDto.prototype, "completedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Final amount' }),
    __metadata("design:type", Number)
], CompleteCheckoutResponseDto.prototype, "finalAmount", void 0);
// REST version of CheckoutDataItem — omits tenantId, hotelId, status, source (internal)
class CheckoutHistoryItemDto {
    id;
    bookingCode;
    guestName;
    guestEmail;
    guestPhone;
    checkInDate;
    checkOutDate;
    totalAmount;
    paidAmount;
    paymentStatus;
    roomCount;
    adultCount;
    childCount;
    createdAt;
    createdBy;
}
exports.CheckoutHistoryItemDto = CheckoutHistoryItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking code' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest email' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Guest phone' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", Number)
], CheckoutHistoryItemDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid amount' }),
    __metadata("design:type", Number)
], CheckoutHistoryItemDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms' }),
    __metadata("design:type", Number)
], CheckoutHistoryItemDto.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adult count' }),
    __metadata("design:type", Number)
], CheckoutHistoryItemDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Child count' }),
    __metadata("design:type", Number)
], CheckoutHistoryItemDto.prototype, "childCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created date' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by' }),
    __metadata("design:type", String)
], CheckoutHistoryItemDto.prototype, "createdBy", void 0);
class CheckoutHistoryResponseDto {
    data;
    total;
    page;
    limit;
}
exports.CheckoutHistoryResponseDto = CheckoutHistoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CheckoutHistoryItemDto] }),
    (0, class_transformer_1.Type)(() => CheckoutHistoryItemDto),
    __metadata("design:type", Array)
], CheckoutHistoryResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], CheckoutHistoryResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page' }),
    __metadata("design:type", Number)
], CheckoutHistoryResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page' }),
    __metadata("design:type", Number)
], CheckoutHistoryResponseDto.prototype, "limit", void 0);
class CheckoutItemsResponseDto {
    booking;
    rooms;
    services;
    damages;
    specialRequests;
}
exports.CheckoutItemsResponseDto = CheckoutItemsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: mobile_checkout_nats_1.CheckoutBookingSummary }),
    __metadata("design:type", mobile_checkout_nats_1.CheckoutBookingSummary)
], CheckoutItemsResponseDto.prototype, "booking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [mobile_checkout_nats_1.CheckoutRoomItem] }),
    __metadata("design:type", Array)
], CheckoutItemsResponseDto.prototype, "rooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], description: 'Additional services' }),
    __metadata("design:type", Array)
], CheckoutItemsResponseDto.prototype, "services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], description: 'Damage reports' }),
    __metadata("design:type", Array)
], CheckoutItemsResponseDto.prototype, "damages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    __metadata("design:type", String)
], CheckoutItemsResponseDto.prototype, "specialRequests", void 0);
// ============= BATCH 6 REQUEST DTOs =============
class ValidateQRCodeRequestDto {
    qrCode;
}
exports.ValidateQRCodeRequestDto = ValidateQRCodeRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'QR code string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateQRCodeRequestDto.prototype, "qrCode", void 0);
// ============= BATCH 6 RESPONSE DTOs =============
// SearchCheckoutsResponseDto — REST version uses CheckoutHistoryItemDto (sanitized)
// instead of NATS CheckoutDataItem (has internal tenantId/hotelId/status/source)
class SearchCheckoutsResponseDto {
    data;
    total;
}
exports.SearchCheckoutsResponseDto = SearchCheckoutsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CheckoutHistoryItemDto], description: 'Search results' }),
    (0, class_transformer_1.Type)(() => CheckoutHistoryItemDto),
    __metadata("design:type", Array)
], SearchCheckoutsResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], SearchCheckoutsResponseDto.prototype, "total", void 0);
// ============= BATCH 7: ENUMS =============
var RoomCondition;
(function (RoomCondition) {
    RoomCondition["GOOD"] = "GOOD";
    RoomCondition["DAMAGED"] = "DAMAGED";
    RoomCondition["NEEDS_ATTENTION"] = "NEEDS_ATTENTION";
})(RoomCondition || (exports.RoomCondition = RoomCondition = {}));
var CheckoutStatus;
(function (CheckoutStatus) {
    CheckoutStatus["PENDING"] = "PENDING";
    CheckoutStatus["IN_PROGRESS"] = "IN_PROGRESS";
    CheckoutStatus["COMPLETED"] = "COMPLETED";
    CheckoutStatus["FAILED"] = "FAILED";
})(CheckoutStatus || (exports.CheckoutStatus = CheckoutStatus = {}));
// ============= BATCH 7: NESTED DTOs =============
class DamageReportDto {
    item;
    description;
    severity;
    estimatedCost;
    photos;
}
exports.DamageReportDto = DamageReportDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item or area damaged' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DamageReportDto.prototype, "item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of damage' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DamageReportDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Severity level (1-5)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DamageReportDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated repair cost' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DamageReportDto.prototype, "estimatedCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Photos of damage', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], DamageReportDto.prototype, "photos", void 0);
class RoomInspectionDto {
    guestDeparted;
    keyCardsReturned;
    roomCondition;
    damages;
    missingItems;
    photos;
    notes;
}
exports.RoomInspectionDto = RoomInspectionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest has departed' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RoomInspectionDto.prototype, "guestDeparted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of key cards returned' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RoomInspectionDto.prototype, "keyCardsReturned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room condition', enum: RoomCondition }),
    (0, class_validator_1.IsEnum)(RoomCondition),
    __metadata("design:type", String)
], RoomInspectionDto.prototype, "roomCondition", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of damages found', type: [DamageReportDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], RoomInspectionDto.prototype, "damages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of missing items', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], RoomInspectionDto.prototype, "missingItems", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inspection photos', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], RoomInspectionDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inspection notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RoomInspectionDto.prototype, "notes", void 0);
class GpsLocationDto {
    latitude;
    longitude;
    accuracy;
    timestamp;
}
exports.GpsLocationDto = GpsLocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Latitude' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsLocationDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Longitude' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsLocationDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'GPS accuracy in meters' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GpsLocationDto.prototype, "accuracy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of GPS reading' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GpsLocationDto.prototype, "timestamp", void 0);
// ============= BATCH 7: REQUEST DTOs =============
class MobileCheckoutRequestDto {
    roomNumber;
    guestName;
    expectedCheckoutTime;
    actualCheckoutTime;
    inspection;
    location;
    notes;
}
exports.MobileCheckoutRequestDto = MobileCheckoutRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MobileCheckoutRequestDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name verification' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MobileCheckoutRequestDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected checkout time' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MobileCheckoutRequestDto.prototype, "expectedCheckoutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Actual checkout time' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MobileCheckoutRequestDto.prototype, "actualCheckoutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room inspection details', type: RoomInspectionDto }),
    __metadata("design:type", RoomInspectionDto)
], MobileCheckoutRequestDto.prototype, "inspection", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'GPS location for verification', type: GpsLocationDto }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", GpsLocationDto)
], MobileCheckoutRequestDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MobileCheckoutRequestDto.prototype, "notes", void 0);
class QRCheckoutRequestDto {
    qrCodeData;
    inspection;
    location;
}
exports.QRCheckoutRequestDto = QRCheckoutRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'QR code data scanned from room' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QRCheckoutRequestDto.prototype, "qrCodeData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room inspection details', type: RoomInspectionDto }),
    __metadata("design:type", RoomInspectionDto)
], QRCheckoutRequestDto.prototype, "inspection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'GPS location for verification', type: GpsLocationDto }),
    __metadata("design:type", GpsLocationDto)
], QRCheckoutRequestDto.prototype, "location", void 0);
// ============= BATCH 7: RESPONSE DTOs =============
class CheckoutInfoResponseDto {
    id;
    roomNumber;
    guestName;
    guestPhone;
    expectedCheckoutTime;
    checkInTime;
    totalAmount;
    paidAmount;
    balance;
    adults;
    children;
    additionalServices;
    status;
    isOverdue;
}
exports.CheckoutInfoResponseDto = CheckoutInfoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room number' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest name' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Guest phone' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected checkout time' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "expectedCheckoutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in time' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "checkInTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid amount' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Outstanding balance' }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of adults' }),
    __metadata("design:type", Number)
], CheckoutInfoResponseDto.prototype, "adults", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of children' }),
    __metadata("design:type", Number)
], CheckoutInfoResponseDto.prototype, "children", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional services', type: [Object] }),
    __metadata("design:type", Array)
], CheckoutInfoResponseDto.prototype, "additionalServices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout status', enum: CheckoutStatus }),
    __metadata("design:type", String)
], CheckoutInfoResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether checkout is overdue' }),
    __metadata("design:type", Boolean)
], CheckoutInfoResponseDto.prototype, "isOverdue", void 0);
class MobileCheckoutResponseDto {
    success;
    checkoutId;
    message;
    bookingStatus;
    roomStatus;
    housekeepingTaskId;
    completedAt;
}
exports.MobileCheckoutResponseDto = MobileCheckoutResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout operation status' }),
    __metadata("design:type", Boolean)
], MobileCheckoutResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Checkout ID' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "checkoutId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated booking status' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "bookingStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room status after checkout' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "roomStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Generated housekeeping task ID' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "housekeepingTaskId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of checkout completion' }),
    __metadata("design:type", String)
], MobileCheckoutResponseDto.prototype, "completedAt", void 0);
//# sourceMappingURL=checkout.dto.js.map