import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';
export declare class DetectConflictsNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    roomIds?: string[];
}
export declare class DetectConflictsSummary {
    doubleBookings: number;
    maintenanceOverlaps: number;
    totalRoomsAffected: number;
}
export declare class DetectConflictsNatsResponseData {
    conflicts: ConflictNatsData[];
    totalConflicts: number;
    highSeverityCount: number;
    summary: DetectConflictsSummary;
}
export interface DetectConflictsNatsResponse extends NatsResponse<DetectConflictsNatsResponseData> {
    data: DetectConflictsNatsResponseData;
}
//# sourceMappingURL=detect-conflicts.nats.d.ts.map