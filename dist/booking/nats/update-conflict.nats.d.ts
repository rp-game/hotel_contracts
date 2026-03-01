import { ConflictStatus, ConflictSeverity, ResolutionType } from '../types/conflict-enums';
import { GetConflictByIdNatsResponse } from './get-conflict-by-id.nats';
export declare class UpdateConflictNatsRequest {
    id: string;
    tenantId?: string;
    status?: ConflictStatus;
    severity?: ConflictSeverity;
    resolutionType?: ResolutionType;
    resolvedBy?: string;
    resolutionNotes?: string;
    actualCost?: number;
    revenueImpact?: number;
    notes?: string;
}
export type UpdateConflictNatsResponse = GetConflictByIdNatsResponse;
//# sourceMappingURL=update-conflict.nats.d.ts.map