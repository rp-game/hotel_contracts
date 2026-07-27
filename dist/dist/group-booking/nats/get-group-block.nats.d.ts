/**
 * Get Group Block NATS Contract
 *
 * NATS Pattern: group-block.find_one
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS request to get a single group block by ID
 */
export interface GetGroupBlockNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type GetGroupBlockNatsResponse = NatsResponse<any>;
//# sourceMappingURL=get-group-block.nats.d.ts.map