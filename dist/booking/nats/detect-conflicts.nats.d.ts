import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';
export interface DetectConflictsNatsRequest {
    tenantId: string;
    hotelId: string;
    startDate: string;
    endDate: string;
    roomIds?: string[];
}
export interface DetectConflictsNatsResponse extends NatsResponse<ConflictNatsData[]> {
    data: ConflictNatsData[];
}
//# sourceMappingURL=detect-conflicts.nats.d.ts.map