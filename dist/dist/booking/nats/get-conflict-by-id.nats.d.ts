import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';
export declare class GetConflictByIdNatsRequest {
    id: string;
    tenantId?: string;
}
export interface GetConflictByIdNatsResponse extends NatsResponse<ConflictNatsData> {
    data: ConflictNatsData;
}
//# sourceMappingURL=get-conflict-by-id.nats.d.ts.map