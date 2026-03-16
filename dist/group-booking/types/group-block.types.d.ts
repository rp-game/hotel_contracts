/**
 * Group Block Response Types
 *
 * Classes with @ApiProperty for Swagger documentation.
 * Used by both NATS responses and REST API responses.
 */
import { GroupBlockStatus, GroupBillingMode, InventoryControlMode, GroupBlockAction } from '../enums/group-block.enum';
/**
 * Block allocation details for display
 */
export declare class BlockAllocationDetails {
    id: string;
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    pickedUpRooms: number;
    rateOverride?: number;
    startDate: string;
    endDate: string;
}
/**
 * Group block history entry for audit trail
 */
export declare class GroupBlockHistoryEntry {
    id: string;
    action: GroupBlockAction;
    performedBy?: string;
    performedByName?: string;
    previousData?: Record<string, any>;
    newData?: Record<string, any>;
    createdAt: string;
}
/**
 * Group block summary for list views (flat, independent class)
 */
export declare class GroupBlockSummary {
    id: string;
    blockCode: string;
    groupName: string;
    status: GroupBlockStatus;
    checkInDate: string;
    checkOutDate: string;
    totalRooms: number;
    pickedUpRooms: number;
    cancelledRooms: number;
    organizerName?: string;
    organizerEmail?: string;
    billingMode: GroupBillingMode;
    createdAt: string;
}
/**
 * Group block full details for detail view (flat, independent class — NOT extending Summary)
 */
export declare class GroupBlockDetails {
    id: string;
    blockCode: string;
    groupName: string;
    status: GroupBlockStatus;
    checkInDate: string;
    checkOutDate: string;
    cutoffDate?: string;
    totalRooms: number;
    pickedUpRooms: number;
    cancelledRooms: number;
    organizerName?: string;
    organizerEmail?: string;
    organizerPhone?: string;
    companyId?: string;
    billingMode: GroupBillingMode;
    inventoryControl: InventoryControlMode;
    depositRequired: boolean;
    depositAmount?: number;
    depositPaidAmount: number;
    commissionPercentage?: number;
    compRoomRatio?: string;
    creditTermDays?: number;
    contractNumber?: string;
    internalNotes?: string;
    specialRequests?: string;
    createdBy: string;
    createdByName?: string;
    createdAt: string;
    updatedAt: string;
    allocations: BlockAllocationDetails[];
    history: GroupBlockHistoryEntry[];
}
/**
 * Group block statistics by status
 */
export declare class GroupBlockStatusStat {
    status: GroupBlockStatus;
    count: number;
    totalRooms: number;
    pickedUpRooms: number;
}
export declare class GroupBlockStats {
    byStatus: GroupBlockStatusStat[];
    totalBlocks: number;
    totalRooms: number;
    totalPickedUp: number;
}
//# sourceMappingURL=group-block.types.d.ts.map