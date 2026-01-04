import { NatsResponse } from '../../common';

export interface DeleteConflictNatsRequest {
  id: string;
  tenantId: string;
}

export interface DeleteConflictNatsResponse extends NatsResponse<{ deleted: boolean }> {
  data: { deleted: boolean };
}
