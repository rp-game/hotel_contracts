"use strict";
/**
 * Group Block Response DTOs
 *
 * Wrapper classes for REST API responses with Swagger documentation.
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
exports.GroupMasterFolioDto = exports.GroupFolioSummaryDto = exports.GroupFolioBookingItemDto = exports.BatchCheckInResultDto = exports.BatchCheckInResultItemDto = exports.GroupBlockBookingSummaryDto = exports.GroupBlockResponseDto = exports.GroupBlockListResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const group_block_types_1 = require("../types/group-block.types");
/**
 * Paginated list response for group blocks
 */
class GroupBlockListResponseDto {
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.GroupBlockListResponseDto = GroupBlockListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of group block summaries', type: [group_block_types_1.GroupBlockSummary] }),
    __metadata("design:type", Array)
], GroupBlockListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of group blocks matching filters', example: 100 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number (1-indexed)', example: 1 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items per page', example: 10 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages', example: 10 }),
    __metadata("design:type", Number)
], GroupBlockListResponseDto.prototype, "totalPages", void 0);
/**
 * Single group block response wrapper
 */
class GroupBlockResponseDto {
    data;
}
exports.GroupBlockResponseDto = GroupBlockResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group block details', type: group_block_types_1.GroupBlockDetails }),
    __metadata("design:type", group_block_types_1.GroupBlockDetails)
], GroupBlockResponseDto.prototype, "data", void 0);
// =================== Group Block Bookings ===================
class GroupBlockBookingSummaryDto {
    id;
    bookingCode;
    guestName;
    guestPhone;
    roomTypeName;
    roomNumber;
    checkInDate;
    checkOutDate;
    status;
    totalAmount;
    adultCount;
    childCount;
}
exports.GroupBlockBookingSummaryDto = GroupBlockBookingSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GroupBlockBookingSummaryDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupBlockBookingSummaryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupBlockBookingSummaryDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupBlockBookingSummaryDto.prototype, "adultCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupBlockBookingSummaryDto.prototype, "childCount", void 0);
// =================== Batch Check-In ===================
class BatchCheckInResultItemDto {
    bookingId;
    bookingCode;
    success;
    error;
}
exports.BatchCheckInResultItemDto = BatchCheckInResultItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BatchCheckInResultItemDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BatchCheckInResultItemDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], BatchCheckInResultItemDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], BatchCheckInResultItemDto.prototype, "error", void 0);
class BatchCheckInResultDto {
    total;
    succeeded;
    failed;
    results;
}
exports.BatchCheckInResultDto = BatchCheckInResultDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BatchCheckInResultDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BatchCheckInResultDto.prototype, "succeeded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BatchCheckInResultDto.prototype, "failed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BatchCheckInResultItemDto] }),
    __metadata("design:type", Array)
], BatchCheckInResultDto.prototype, "results", void 0);
// =================== Master Folio ===================
class GroupFolioBookingItemDto {
    bookingId;
    bookingCode;
    guestName;
    roomTypeName;
    roomNumber;
    checkInDate;
    checkOutDate;
    status;
    totalAmount;
    taxAmount;
    grossAmount;
    paidAmount;
    balance;
}
exports.GroupFolioBookingItemDto = GroupFolioBookingItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "bookingCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GroupFolioBookingItemDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupFolioBookingItemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioBookingItemDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioBookingItemDto.prototype, "taxAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioBookingItemDto.prototype, "grossAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioBookingItemDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioBookingItemDto.prototype, "balance", void 0);
class GroupFolioSummaryDto {
    totalBookings;
    totalRoomCharges;
    totalTaxAmount;
    totalGrossAmount;
    totalPaidAmount;
    totalBalance;
}
exports.GroupFolioSummaryDto = GroupFolioSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalBookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalRoomCharges", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalTaxAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalGrossAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalPaidAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GroupFolioSummaryDto.prototype, "totalBalance", void 0);
class GroupMasterFolioDto {
    groupBlockId;
    blockCode;
    groupName;
    bookings;
    summary;
}
exports.GroupMasterFolioDto = GroupMasterFolioDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupMasterFolioDto.prototype, "groupBlockId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupMasterFolioDto.prototype, "blockCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GroupMasterFolioDto.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GroupFolioBookingItemDto] }),
    __metadata("design:type", Array)
], GroupMasterFolioDto.prototype, "bookings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GroupFolioSummaryDto }),
    __metadata("design:type", GroupFolioSummaryDto)
], GroupMasterFolioDto.prototype, "summary", void 0);
//# sourceMappingURL=group-block-response.dto.js.map