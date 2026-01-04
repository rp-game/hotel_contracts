import { ConflictStatus, ConflictSeverity, ResolutionType } from '../types/conflict-enums';
import { GetConflictByIdNatsResponse } from './get-conflict-by-id.nats';

export interface UpdateConflictNatsRequest {
  id: string;
  tenantId: string;
  status?: ConflictStatus;
  severity?: ConflictSeverity;
  resolutionType?: ResolutionType;
  notes?: string;
}

export type UpdateConflictNatsResponse = GetConflictByIdNatsResponse;
