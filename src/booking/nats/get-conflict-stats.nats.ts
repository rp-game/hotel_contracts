import { NatsResponse } from '../../common';
import { ConflictStatus, ConflictSeverity, ConflictType } from '../types/conflict-enums';

export interface GetConflictStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
  startDate?: string;
  endDate?: string;
}

export interface ConflictStatsNatsData {
  pending: number;
  inProgress: number;
  resolved: number;
  critical: number;
  total: number;
}

export interface GetConflictStatsNatsResponse extends NatsResponse<ConflictStatsNatsData> {
  data: ConflictStatsNatsData;
}
