/**
 * Find Group Blocks NATS Contract
 *
 * NATS Pattern: group-block.find_all
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { GroupBlockStatus } from '../enums/group-block.enum';
/**
 * NATS request to find/list group blocks with filters and pagination
 */
export interface FindGroupBlocksNatsRequest {
    tenantId: string;
    hotelId: string;
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
export type FindGroupBlocksNatsResponse = NatsResponse<any>;
//# sourceMappingURL=find-group-blocks.nats.d.ts.map