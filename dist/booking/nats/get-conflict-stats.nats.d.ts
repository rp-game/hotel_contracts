import { NatsResponse } from '../../common';
export declare class GetConflictStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
    startDate?: string;
    endDate?: string;
}
export declare class ConflictStatsNatsData {
    pending: number;
    inProgress: number;
    resolved: number;
    critical: number;
    total: number;
}
export interface GetConflictStatsNatsResponse extends NatsResponse<ConflictStatsNatsData> {
    data: ConflictStatsNatsData;
}
//# sourceMappingURL=get-conflict-stats.nats.d.ts.map