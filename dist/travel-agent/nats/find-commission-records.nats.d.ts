/**
 * Find Commission Records NATS Contract
 *
 * NATS Pattern: commission-record.find_all
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
export interface FindCommissionRecordsNatsRequest {
    tenantId: string;
    hotelId: string;
    travelAgentId?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: number;
    limit?: number;
}
export type FindCommissionRecordsNatsResult = NatsResponse<any>;
//# sourceMappingURL=find-commission-records.nats.d.ts.map