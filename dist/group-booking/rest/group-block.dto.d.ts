/**
 * Group Block REST DTOs
 *
 * Classes with @ApiProperty + class-validator decorators.
 * Used by API Gateway controllers for request validation.
 * Note: tenantId/hotelId are NOT included — injected from JWT by controller.
 */
import { GroupBlockStatus, GroupBillingMode, InventoryControlMode, GroupMasterChargeCategory } from '../enums/group-block.enum';
/**
 * DTO for creating a block allocation (nested in CreateGroupBlockDto)
 */
export declare class CreateBlockAllocationDto {
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    rateOverride?: number;
    startDate: string;
    endDate: string;
}
/**
 * DTO for creating a new group block
 */
export declare class CreateGroupBlockDto {
    hotelId?: string;
    groupName: string;
    organizerName?: string;
    organizerEmail?: string;
    organizerPhone?: string;
    companyId?: string;
    checkInDate: string;
    checkOutDate: string;
    cutoffDate?: string;
    billingMode?: GroupBillingMode;
    inventoryControl?: InventoryControlMode;
    depositRequired?: boolean;
    depositAmount?: number;
    commissionPercentage?: number;
    compRoomRatio?: string;
    creditTermDays?: number;
    contractNumber?: string;
    internalNotes?: string;
    specialRequests?: string;
    allocations?: CreateBlockAllocationDto[];
}
/**
 * DTO for updating a group block (partial fields)
 */
export declare class UpdateGroupBlockDto {
    groupName?: string;
    organizerName?: string;
    organizerEmail?: string;
    organizerPhone?: string;
    companyId?: string;
    checkInDate?: string;
    checkOutDate?: string;
    cutoffDate?: string;
    billingMode?: GroupBillingMode;
    inventoryControl?: InventoryControlMode;
    depositRequired?: boolean;
    depositAmount?: number;
    commissionPercentage?: number;
    compRoomRatio?: string;
    creditTermDays?: number;
    contractNumber?: string;
    internalNotes?: string;
    specialRequests?: string;
}
/**
 * DTO for updating group block status (state machine transition)
 */
export declare class UpdateGroupBlockStatusDto {
    newStatus: GroupBlockStatus;
    reason?: string;
}
/**
 * DTO for updating an existing block allocation
 */
export declare class UpdateBlockAllocationDto {
    allottedRooms?: number;
    rateOverride?: number;
}
/**
 * Query DTO for listing group blocks
 */
export declare class FindGroupBlocksQueryDto {
    hotelId?: string;
    status?: GroupBlockStatus;
    search?: string;
    checkInDateStart?: string;
    checkInDateEnd?: string;
    checkOutDateStart?: string;
    checkOutDateEnd?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
/**
 * Guest item for batch pickup
 */
export declare class BatchPickupGuestItemDto {
    guestName?: string;
    guestPhone?: string;
}
/**
 * Batch pickup DTO — create multiple bookings from a group block allocation
 */
export declare class BatchPickupDto {
    blockAllocationId: string;
    numberOfRooms: number;
    guests?: BatchPickupGuestItemDto[];
}
/**
 * Batch check-in DTO — check in multiple group bookings at once
 */
export declare class BatchCheckInDto {
    bookingIds: string[];
    notes?: string;
    mode?: 'EXPRESS' | 'FULL';
}
/**
 * Single room assignment item for batch room assignment
 */
export declare class BatchRoomAssignItemDto {
    bookingId: string;
    roomId: string;
    roomNumber: string;
}
/**
 * Batch room assignment DTO — assign rooms to multiple group bookings at once
 */
export declare class BatchRoomAssignDto {
    assignments: BatchRoomAssignItemDto[];
}
/**
 * DTO for recording a group deposit payment
 */
export declare class RecordGroupDepositDto {
    amount: number;
    paymentMethod: string;
    reference?: string;
    notes?: string;
}
/**
 * DTO for voiding a group deposit payment
 */
export declare class VoidGroupDepositDto {
    reason?: string;
}
/**
 * DTO for posting a charge to the group master folio
 */
export declare class PostGroupMasterChargeDto {
    category: GroupMasterChargeCategory;
    description: string;
    amount: number;
    date: string;
    taxRate?: number;
    reference?: string;
}
/**
 * DTO for voiding a master charge
 */
export declare class VoidGroupMasterChargeDto {
    reason: string;
}
/**
 * DTO for recording a group payment (deposit or settlement)
 */
export declare class RecordGroupPaymentDto {
    amount: number;
    paymentMethod: string;
    type?: 'DEPOSIT' | 'PAYMENT';
    reference?: string;
    notes?: string;
}
/**
 * DTO for voiding a group payment
 */
export declare class VoidGroupPaymentDto {
    reason?: string;
}
//# sourceMappingURL=group-block.dto.d.ts.map