import { NatsResponse } from '../../common';
import { ConflictStatus, ConflictSeverity, ConflictType } from '../types/conflict-enums';
export interface GetConflictStatsNatsRequest {
    tenantId: string;
    hotelId?: string;
    startDate?: string;
    endDate?: string;
}
export interface ConflictStatsNatsData {
    total: number;
    byStatus: Record<ConflictStatus, number>;
    bySeverity: Record<ConflictSeverity, number>;
    byType: Record<ConflictType, number>;
    pendingCount: number;
    criticalCount: number;
    resolvedCount: number;
    averageResolutionTime: number;
}
export interface GetConflictStatsNatsResponse extends NatsResponse<ConflictStatsNatsData> {
    data: ConflictStatsNatsData;
}
//# sourceMappingURL=get-conflict-stats.nats.d.ts.map