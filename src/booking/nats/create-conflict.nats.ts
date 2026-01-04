import { ConflictType, ConflictSeverity } from '../types/conflict-enums';
import { GetConflictByIdNatsResponse } from './get-conflict-by-id.nats';

export interface CreateConflictNatsRequest {
  tenantId: string;
  hotelId: string;
  conflictType: ConflictType;
  severity: ConflictSeverity;
  affectedBookings: string[];
  affectedRooms: string[];
  description: string;
  detectedBy?: string;
}

export type CreateConflictNatsResponse = GetConflictByIdNatsResponse;
