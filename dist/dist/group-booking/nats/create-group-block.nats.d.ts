/**
 * Create Group Block NATS Contract
 *
 * NATS Pattern: group-block.create
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { GroupBillingMode, InventoryControlMode } from '../enums/group-block.enum';
/**
 * Allocation item included in group block creation
 */
export interface CreateGroupBlockAllocationItem {
    roomTypeId: string;
    roomTypeName: string;
    allottedRooms: number;
    rateOverride?: number;
    startDate: string;
    endDate: string;
}
/**
 * NATS request to create a group block
 */
export interface CreateGroupBlockNatsRequest {
    tenantId: string;
    hotelId: string;
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
    allocations?: CreateGroupBlockAllocationItem[];
    createdBy: string;
    createdByName: string;
}
export type CreateGroupBlockNatsResponse = NatsResponse<any>;
//# sourceMappingURL=create-group-block.nats.d.ts.map