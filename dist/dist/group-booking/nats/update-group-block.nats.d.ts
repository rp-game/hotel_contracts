/**
 * Update Group Block NATS Contract
 *
 * NATS Pattern: group-block.update
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { GroupBillingMode, InventoryControlMode } from '../enums/group-block.enum';
/**
 * NATS request to update a group block (non-status fields only)
 */
export interface UpdateGroupBlockNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
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
    userId: string;
    userName: string;
}
export type UpdateGroupBlockNatsResponse = NatsResponse<any>;
//# sourceMappingURL=update-group-block.nats.d.ts.map