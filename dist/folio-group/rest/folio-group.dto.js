"use strict";
/**
 * Folio Group REST DTOs
 *
 * Request classes with @ApiProperty + class-validator (API Gateway validation).
 * Response classes mirror the NATS data shapes for Swagger.
 * Note: tenantId/hotelId are NOT included — injected from JWT by the controller.
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
exports.FolioGroupListItemDto = exports.FolioGroupFolioDto = exports.FolioGroupSummarySectionDto = exports.FolioGroupBookingItemDto = exports.CollectFolioDto = exports.AddBookingToFolioGroupDto = exports.CreateFolioGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../payment/enums/payment.enum");
// =================== Requests ===================
class CreateFolioGroupDto {
    bookingIds;
    name;
}
exports.CreateFolioGroupDto = CreateFolioGroupDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking IDs to link into the folio group', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CreateFolioGroupDto.prototype, "bookingIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Optional display name for the folio group' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateFolioGroupDto.prototype, "name", void 0);
class AddBookingToFolioGroupDto {
    bookingId;
}
exports.AddBookingToFolioGroupDto = AddBookingToFolioGroupDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID to add to the folio group' }),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], AddBookingToFolioGroupDto.prototype, "bookingId", void 0);
class CollectFolioDto {
    amount;
    paymentMethod;
    payerName;
    reference;
    notes;
}
exports.CollectFolioDto = CollectFolioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Combined amount to collect (allocated fill-order across members)', minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CollectFolioDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', enum: payment_enum_1.PaymentMethod }),
    (0, class_validator_1.IsEnum)(payment_enum_1.PaymentMethod),
    __metadata("design:type", String)
], CollectFolioDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CollectFolioDto.prototype, "payerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Payment reference' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CollectFolioDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CollectFolioDto.prototype, "notes", void 0);
// =================== Responses (Swagger) ===================
class FolioGroupBookingItemDto {
    bookingId;
    bookingCode;
    guestName;
    roomTypeName;
    roomNumber;
    checkInDate;
    checkOutDate;
    status;
    amountDue;
    paidAmount;
    balance;
}
exports.FolioGroupBookingItemDto = FolioGroupBookingItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], FolioGroupBookingItemDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupBookingItemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'finalAmount ?? grossAmount' }),
    __metadata("design:type", Number)
], FolioGroupBookingItemDto.prototype, "amountDue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupBookingItemDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupBookingItemDto.prototype, "balance", void 0);
class FolioGroupSummarySectionDto {
    totalBookings;
    totalDue;
    totalPaid;
    totalBalance;
}
exports.FolioGroupSummarySectionDto = FolioGroupSummarySectionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupSummarySectionDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupSummarySectionDto.prototype, "totalDue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupSummarySectionDto.prototype, "totalPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupSummarySectionDto.prototype, "totalBalance", void 0);
class FolioGroupFolioDto {
    folioGroupId;
    code;
    name;
    hotelId;
    derivedStatus;
    bookings;
    summary;
}
exports.FolioGroupFolioDto = FolioGroupFolioDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupFolioDto.prototype, "folioGroupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupFolioDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], FolioGroupFolioDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupFolioDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['OPEN', 'SETTLED'] }),
    __metadata("design:type", String)
], FolioGroupFolioDto.prototype, "derivedStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FolioGroupBookingItemDto] }),
    __metadata("design:type", Array)
], FolioGroupFolioDto.prototype, "bookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: FolioGroupSummarySectionDto }),
    __metadata("design:type", FolioGroupSummarySectionDto)
], FolioGroupFolioDto.prototype, "summary", void 0);
class FolioGroupListItemDto {
    folioGroupId;
    code;
    name;
    memberCount;
    totalDue;
    totalPaid;
    totalBalance;
    derivedStatus;
    createdAt;
}
exports.FolioGroupListItemDto = FolioGroupListItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupListItemDto.prototype, "folioGroupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupListItemDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], FolioGroupListItemDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupListItemDto.prototype, "memberCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupListItemDto.prototype, "totalDue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupListItemDto.prototype, "totalPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FolioGroupListItemDto.prototype, "totalBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['OPEN', 'SETTLED'] }),
    __metadata("design:type", String)
], FolioGroupListItemDto.prototype, "derivedStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FolioGroupListItemDto.prototype, "createdAt", void 0);
//# sourceMappingURL=folio-group.dto.js.map