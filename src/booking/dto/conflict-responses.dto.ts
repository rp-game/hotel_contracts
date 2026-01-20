import { ConflictStatus, ConflictSeverity, ConflictType, ResolutionType } from '../types/conflict-enums';

/**
 * REST API Response DTOs (camelCase for consistency)
 * Matches NATS response structure for unified typing
 */

export interface ConflictResponseDto {
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

export interface ConflictListResponseDto {
  data: ConflictResponseDto[];
  total: number;
  page: number;
  limit: number;
}

export interface ConflictStatsResponseDto {
  pending: number;
  inProgress: number;
  resolved: number;
  critical: number;
  total: number;
}
