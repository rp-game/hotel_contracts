import { NatsResponse } from '../../common';
import { ConflictStatus, ConflictSeverity, ConflictType, ResolutionType } from '../types/conflict-enums';

export interface GetConflictsNatsRequest {
  tenantId: string;
  hotelId?: string;
  status?: ConflictStatus;
  severity?: ConflictSeverity;
  conflictType?: ConflictType;
  roomId?: string;
  bookingId?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export interface ConflictNatsData {
  id: string;
  tenantId: string;
  hotelId: string;
  conflictType: ConflictType;
  severity: ConflictSeverity;
  status: ConflictStatus;
  roomId: string;
  roomNumber: string;
  conflictDate: string;
  primaryBookingId: string;
  conflictingBookingIds: string[];
  totalGuestsAffected: number;
  hoursUntilImpact: number;
  detectedBy: string;
  detectionMethod: string;
  resolutionType?: ResolutionType;
  resolvedAt?: string;
  resolvedBy?: string;
  notes?: string;
}

export interface GetConflictsNatsResponseData {
  data: ConflictNatsData[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface GetConflictsNatsResponse extends NatsResponse<GetConflictsNatsResponseData> {
  data: GetConflictsNatsResponseData;
}
