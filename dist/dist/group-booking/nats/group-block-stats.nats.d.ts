/**
 * Group Block Stats NATS Contract
 *
 * NATS Pattern: group-block.stats
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
/**
 * NATS request to get group block statistics
 */
export interface GroupBlockStatsNatsRequest {
    tenantId: string;
    hotelId: string;
}
export type GroupBlockStatsNatsResponse = NatsResponse<any>;
//# sourceMappingURL=group-block-stats.nats.d.ts.map