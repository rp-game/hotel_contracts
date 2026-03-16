"use strict";
/**
 * Group Block Response Types
 *
 * Classes with @ApiProperty for Swagger documentation.
 * Used by both NATS responses and REST API responses.
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
exports.GroupBlockStats = exports.GroupBlockStatusStat = exports.GroupBlockDetails = exports.GroupBlockSummary = exports.GroupBlockHistoryEntry = exports.BlockAllocationDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
const group_block_enum_1 = require("../enums/group-block.enum");
/**
 * Block allocation details for display
 */
class BlockAllocationDetails {
    id;
    roomTypeId;
    roomTypeName;
    allottedRooms;
    pickedUpRooms;
    rateOverride;
    startDate;
    endDate;
}
exports.BlockAllocationDetails = BlockAllocationDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Allocation ID' }),
    __metadata("design:type", String)
], BlockAllocationDetails.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type ID' }),
    __metadata("design:type", String)
], BlockAllocationDetails.prototype, "roomTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type name' }),
    __metadata("design:type", String)
], BlockAllocationDetails.prototype, "roomTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms allotted' }),
    __metadata("design:type", Number)
], BlockAllocationDetails.prototype, "allottedRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of rooms picked up' }),
    __metadata("design:type", Number)
], BlockAllocationDetails.prototype, "pickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rate override for this allocation' }),
    __metadata("design:type", Number)
], BlockAllocationDetails.prototype, "rateOverride", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BlockAllocationDetails.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], BlockAllocationDetails.prototype, "endDate", void 0);
/**
 * Group block history entry for audit trail
 */
class GroupBlockHistoryEntry {
    id;
    action;
    performedBy;
    performedByName;
    previousData;
    newData;
    createdAt;
}
exports.GroupBlockHistoryEntry = GroupBlockHistoryEntry;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'History entry ID' }),
    __metadata("design:type", String)
], GroupBlockHistoryEntry.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Action performed', enum: group_block_enum_1.GroupBlockAction }),
    __metadata("design:type", String)
], GroupBlockHistoryEntry.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User who performed the action' }),
    __metadata("design:type", String)
], GroupBlockHistoryEntry.prototype, "performedBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Name of user who performed the action' }),
    __metadata("design:type", String)
], GroupBlockHistoryEntry.prototype, "performedByName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Previous data snapshot' }),
    __metadata("design:type", Object)
], GroupBlockHistoryEntry.prototype, "previousData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New data snapshot' }),
    __metadata("design:type", Object)
], GroupBlockHistoryEntry.prototype, "newData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of the action' }),
    __metadata("design:type", String)
], GroupBlockHistoryEntry.prototype, "createdAt", void 0);
/**
 * Group block summary for list views (flat, independent class)
 */
class GroupBlockSummary {
    id;
    blockCode;
    groupName;
    status;
    checkInDate;
    checkOutDate;
    totalRooms;
    pickedUpRooms;
    cancelledRooms;
    organizerName;
    organizerEmail;
    billingMode;
    createdAt;
}
exports.GroupBlockSummary = GroupBlockSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group block ID' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique block code (e.g., GB-20260316-001)' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "blockCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group name' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block status', enum: group_block_enum_1.GroupBlockStatus }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms allotted across all allocations' }),
    __metadata("design:type", Number)
], GroupBlockSummary.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms picked up (booked)' }),
    __metadata("design:type", Number)
], GroupBlockSummary.prototype, "pickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms cancelled' }),
    __metadata("design:type", Number)
], GroupBlockSummary.prototype, "cancelledRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer name' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "organizerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer email' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "organizerEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing mode', enum: group_block_enum_1.GroupBillingMode }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "billingMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", String)
], GroupBlockSummary.prototype, "createdAt", void 0);
/**
 * Group block full details for detail view (flat, independent class — NOT extending Summary)
 */
class GroupBlockDetails {
    id;
    blockCode;
    groupName;
    status;
    checkInDate;
    checkOutDate;
    cutoffDate;
    totalRooms;
    pickedUpRooms;
    cancelledRooms;
    // Organizer info
    organizerName;
    organizerEmail;
    organizerPhone;
    companyId;
    // Settings
    billingMode;
    inventoryControl;
    // Financial
    depositRequired;
    depositAmount;
    depositPaidAmount;
    commissionPercentage;
    compRoomRatio;
    creditTermDays;
    contractNumber;
    // Notes
    internalNotes;
    specialRequests;
    // Creator info
    createdBy;
    createdByName;
    createdAt;
    updatedAt;
    // Relations
    allocations;
    history;
}
exports.GroupBlockDetails = GroupBlockDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group block ID' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique block code' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "blockCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Group name' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "groupName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block status', enum: group_block_enum_1.GroupBlockStatus }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-in date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "checkInDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check-out date (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "checkOutDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Cutoff date for pickup' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "cutoffDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms allotted' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms picked up' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "pickedUpRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms cancelled' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "cancelledRooms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer name' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "organizerName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer email' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "organizerEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Organizer phone' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "organizerPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated company ID' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Billing mode', enum: group_block_enum_1.GroupBillingMode }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "billingMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Inventory control mode', enum: group_block_enum_1.InventoryControlMode }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "inventoryControl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether deposit is required' }),
    __metadata("design:type", Boolean)
], GroupBlockDetails.prototype, "depositRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Required deposit amount' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "depositAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deposit amount already paid' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "depositPaidAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Commission percentage' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "commissionPercentage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Complimentary room ratio (e.g., "1:20")' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "compRoomRatio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Credit term in days' }),
    __metadata("design:type", Number)
], GroupBlockDetails.prototype, "creditTermDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Contract number' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "contractNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal notes' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "internalNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Special requests' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "specialRequests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created by user ID' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Created by user name' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "createdByName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", String)
], GroupBlockDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Room type allocations', type: [BlockAllocationDetails] }),
    __metadata("design:type", Array)
], GroupBlockDetails.prototype, "allocations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Audit history', type: [GroupBlockHistoryEntry] }),
    __metadata("design:type", Array)
], GroupBlockDetails.prototype, "history", void 0);
/**
 * Group block statistics by status
 */
class GroupBlockStatusStat {
    status;
    count;
    totalRooms;
    pickedUpRooms;
}
exports.GroupBlockStatusStat = GroupBlockStatusStat;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Block status', enum: group_block_enum_1.GroupBlockStatus }),
    __metadata("design:type", String)
], GroupBlockStatusStat.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of blocks in this status' }),
    __metadata("design:type", Number)
], GroupBlockStatusStat.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms allotted in this status' }),
    __metadata("design:type", Number)
], GroupBlockStatusStat.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms picked up in this status' }),
    __metadata("design:type", Number)
], GroupBlockStatusStat.prototype, "pickedUpRooms", void 0);
class GroupBlockStats {
    byStatus;
    totalBlocks;
    totalRooms;
    totalPickedUp;
}
exports.GroupBlockStats = GroupBlockStats;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stats broken down by status', type: [GroupBlockStatusStat] }),
    __metadata("design:type", Array)
], GroupBlockStats.prototype, "byStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of group blocks' }),
    __metadata("design:type", Number)
], GroupBlockStats.prototype, "totalBlocks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms across all blocks' }),
    __metadata("design:type", Number)
], GroupBlockStats.prototype, "totalRooms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total rooms picked up across all blocks' }),
    __metadata("design:type", Number)
], GroupBlockStats.prototype, "totalPickedUp", void 0);
//# sourceMappingURL=group-block.types.js.map