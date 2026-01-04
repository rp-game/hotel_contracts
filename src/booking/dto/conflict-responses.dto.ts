import { ConflictStatus, ConflictSeverity, ConflictType, ResolutionType } from '../types/conflict-enums';

/**
 * REST API Response DTOs (snake_case for API Gateway)
 * These are converted from NATS responses (camelCase)
 */

export interface ConflictResponseDto {
  id: string;
  tenant_id: string;
  hotel_id: string;
  conflict_type: ConflictType;
  severity: ConflictSeverity;
  status: ConflictStatus;
  affected_bookings: string[];
  affected_rooms: string[];
  detected_at: string;
  description: string;
  resolution_type?: ResolutionType;
  resolved_at?: string;
  resolved_by?: string;
  notes?: string;
}

export interface ConflictListResponseDto {
  data: ConflictResponseDto[];
  total: number;
  page: number;
  limit: number;
}

export interface ConflictStatsResponseDto {
  total: number;
  by_status: Record<ConflictStatus, number>;
  by_severity: Record<ConflictSeverity, number>;
  by_type: Record<ConflictType, number>;
  pending_count: number;
  critical_count: number;
  resolved_count: number;
  average_resolution_time: number;
}
