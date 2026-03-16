/**
 * Group Block REST DTOs
 *
 * Classes with @ApiProperty + class-validator decorators.
 * Used by API Gateway controllers for request validation.
 * Note: tenantId/hotelId are NOT included — injected from JWT by controller.
 */
import { GroupBlockStatus, GroupBillingMode, InventoryControlMode } from '../enums/group-block.enum';
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
//# sourceMappingURL=group-block.dto.d.ts.map