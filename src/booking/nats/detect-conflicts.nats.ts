import { NatsResponse } from '../../common';
import { ConflictNatsData } from './get-conflicts.nats';

export interface DetectConflictsNatsRequest {
  tenantId: string;
  hotelId: string;
  startDate: string;
  endDate: string;
  roomIds?: string[];
}

export interface DetectConflictsNatsResponseData {
  conflicts: ConflictNatsData[];
  totalConflicts: number;
  highSeverityCount: number;
  summary: {
    doubleBookings: number;
    maintenanceOverlaps: number;
    totalRoomsAffected: number;
  };
}

export interface DetectConflictsNatsResponse extends NatsResponse<DetectConflictsNatsResponseData> {
  data: DetectConflictsNatsResponseData;
}
