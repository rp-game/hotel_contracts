import { GetConflictsNatsResponse } from './get-conflicts.nats';

export interface GetCriticalConflictsNatsRequest {
  tenantId: string;
  hotelId?: string;
}

export type GetCriticalConflictsNatsResponse = GetConflictsNatsResponse;
