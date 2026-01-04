import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';

export interface GetConflictByIdNatsRequest {
  id: string;
  tenantId: string;
}

export interface GetConflictByIdNatsResponse extends NatsResponse<ConflictNatsData> {
  data: ConflictNatsData;
}
