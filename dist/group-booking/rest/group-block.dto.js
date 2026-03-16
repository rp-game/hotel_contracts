"use strict";
/**
 * Group Block REST DTOs
 *
 * Classes with @ApiProperty + class-validator decorators.
 * Used by API Gateway controllers for request validation.
 * Note: tenantId/hotelId are NOT included — injected from JWT by controller.
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
exports.BatchCheckInDto = exports.FindGroupBlocksQueryDto = exports.UpdateBlockAllocationDto = exports.UpdateGroupBlockStatusDto = exports.UpdateGroupBlockDto = exports.CreateGroupBlockDto = exports.CreateBlockAllocationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const group_block_enum_1 = require("../enums/group-block.enum");
/**
 * DTO for creating a block allocation (nested in CreateGroupBlockDto)
 */
class CreateBlockAllocationDto {
    roomTypeId;
    roomTypeName;
    allottedRooms;
    rateOverride;
    startDate;
    endDate;
}
exports.CreateBlockAllocationDto = CreateBlockAllocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateBlockAllocationDto.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBlockAllocationDto.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms to allot', minimum: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateBlockAllocationDto.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate override for this allocation' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBlockAllocationDto.prototype, "rateOverride", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Allocation start date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateBlockAllocationDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Allocation end date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateBlockAllocationDto.prototype, "endDate", void 0);
/**
 * DTO for creating a new group block
 */
class CreateGroupBlockDto {
    hotelId;
    groupName;
    organizerName;
    organizerEmail;
    organizerPhone;
    companyId;
    checkInDate;
    checkOutDate;
    cutoffDate;
    billingMode;
    inventoryControl;
    depositRequired;
    depositAmount;
    commissionPercentage;
    compRoomRatio;
    creditTermDays;
    contractNumber;
    internalNotes;
    specialRequests;
    allocations;
}
exports.CreateGroupBlockDto = CreateGroupBlockDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (required if not in JWT)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "organizerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "organizerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer phone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "organizerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated company ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cutoff date for pickup (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "cutoffDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Billing mode', enum: group_block_enum_1.GroupBillingMode }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(group_block_enum_1.GroupBillingMode),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "billingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inventory control mode', enum: group_block_enum_1.InventoryControlMode }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(group_block_enum_1.InventoryControlMode),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether deposit is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateGroupBlockDto.prototype, "depositRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Required deposit amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGroupBlockDto.prototype, "depositAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission percentage' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGroupBlockDto.prototype, "commissionPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Complimentary room ratio (e.g., "1:20")' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "compRoomRatio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Credit term in days' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGroupBlockDto.prototype, "creditTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "internalNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGroupBlockDto.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Initial allocations', type: [CreateBlockAllocationDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateBlockAllocationDto),
    __metadata("design:type", Array)
], CreateGroupBlockDto.prototype, "allocations", void 0);
/**
 * DTO for updating a group block (partial fields)
 */
class UpdateGroupBlockDto {
    groupName;
    organizerName;
    organizerEmail;
    organizerPhone;
    companyId;
    checkInDate;
    checkOutDate;
    cutoffDate;
    billingMode;
    inventoryControl;
    depositRequired;
    depositAmount;
    commissionPercentage;
    compRoomRatio;
    creditTermDays;
    contractNumber;
    internalNotes;
    specialRequests;
}
exports.UpdateGroupBlockDto = UpdateGroupBlockDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Group name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "organizerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "organizerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer phone' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "organizerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated company ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cutoff date for pickup (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "cutoffDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Billing mode', enum: group_block_enum_1.GroupBillingMode }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(group_block_enum_1.GroupBillingMode),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "billingMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Inventory control mode', enum: group_block_enum_1.InventoryControlMode }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(group_block_enum_1.InventoryControlMode),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Whether deposit is required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateGroupBlockDto.prototype, "depositRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Required deposit amount' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGroupBlockDto.prototype, "depositAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission percentage' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGroupBlockDto.prototype, "commissionPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Complimentary room ratio' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "compRoomRatio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Credit term in days' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGroupBlockDto.prototype, "creditTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "internalNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockDto.prototype, "specialRequests", void 0);
/**
 * DTO for updating group block status (state machine transition)
 */
class UpdateGroupBlockStatusDto {
    newStatus;
    reason;
}
exports.UpdateGroupBlockStatusDto = UpdateGroupBlockStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New status', enum: group_block_enum_1.GroupBlockStatus }),
    (0, class_validator_1.IsEnum)(group_block_enum_1.GroupBlockStatus),
    __metadata("design:type", String)
], UpdateGroupBlockStatusDto.prototype, "newStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for status change' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateGroupBlockStatusDto.prototype, "reason", void 0);
/**
 * DTO for updating an existing block allocation
 */
class UpdateBlockAllocationDto {
    allottedRooms;
    rateOverride;
}
exports.UpdateBlockAllocationDto = UpdateBlockAllocationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of rooms to allot', minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateBlockAllocationDto.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate override' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBlockAllocationDto.prototype, "rateOverride", void 0);
/**
 * Query DTO for listing group blocks
 */
class FindGroupBlocksQueryDto {
    hotelId;
    status;
    search;
    checkInDateStart;
    checkInDateEnd;
    checkOutDateStart;
    checkOutDateEnd;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.FindGroupBlocksQueryDto = FindGroupBlocksQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hotel ID (required if not in JWT)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "hotelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by status', enum: group_block_enum_1.GroupBlockStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(group_block_enum_1.GroupBlockStatus),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search by group name or block code' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date start filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "checkInDateStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in date end filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "checkInDateEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date start filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "checkOutDateStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-out date end filter (YYYY-MM-DD)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "checkOutDateEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Page number (1-indexed)', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindGroupBlocksQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Items per page', default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindGroupBlocksQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort field' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Sort order', enum: ['ASC', 'DESC'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindGroupBlocksQueryDto.prototype, "sortOrder", void 0);
/**
 * Batch check-in DTO — check in multiple group bookings at once
 */
class BatchCheckInDto {
    bookingIds;
    notes;
}
exports.BatchCheckInDto = BatchCheckInDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of booking IDs to check in', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], BatchCheckInDto.prototype, "bookingIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Check-in notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchCheckInDto.prototype, "notes", void 0);
//# sourceMappingURL=group-block.dto.js.map