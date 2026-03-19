/**
 * Delete Travel Agent NATS Contract
 *
 * NATS Pattern: travel-agent.delete
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface DeleteTravelAgentNatsRequest {
    tenantId: string;
    travelAgentId: string;
    deletedBy: string;
}
export type DeleteTravelAgentNatsResult = NatsResponse<any>;
//# sourceMappingURL=delete-travel-agent.nats.d.ts.map