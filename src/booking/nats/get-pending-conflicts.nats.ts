import { GetConflictsNatsResponse } from './get-conflicts.nats';

export interface GetPendingConflictsNatsRequest {
  tenantId: string;
  hotelId?: string;
}

export type GetPendingConflictsNatsResponse = GetConflictsNatsResponse;
