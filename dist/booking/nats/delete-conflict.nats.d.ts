import { NatsResponse } from '../../common';
export declare class DeleteConflictNatsRequest {
    id: string;
    tenantId: string;
}
export declare class DeleteConflictNatsData {
    deleted: boolean;
}
export interface DeleteConflictNatsResponse extends NatsResponse<DeleteConflictNatsData> {
    data: DeleteConflictNatsData;
}
//# sourceMappingURL=delete-conflict.nats.d.ts.map