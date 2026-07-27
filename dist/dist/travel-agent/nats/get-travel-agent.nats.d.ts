/**
 * Get Travel Agent NATS Contract
 *
 * NATS Pattern: travel-agent.find_one
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface GetTravelAgentNatsRequest {
    tenantId: string;
    travelAgentId: string;
}
export type GetTravelAgentNatsResult = NatsResponse<any>;
//# sourceMappingURL=get-travel-agent.nats.d.ts.map