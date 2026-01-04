import { ConflictStatus, ConflictSeverity, ConflictType, ResolutionType } from '../types/conflict-enums';
/**
 * REST API Response DTOs (camelCase for consistency)
 * Same as NATS response structure for unified typing
 */
export interface ConflictResponseDto {
    id: string;
    tenantId: string;
    hotelId: string;
    conflictType: ConflictType;
    severity: ConflictSeverity;
    status: ConflictStatus;
    affectedBookings: string[];
    affectedRooms: string[];
    detectedAt: string;
    description: string;
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
    total: number;
    byStatus: Record<ConflictStatus, number>;
    bySeverity: Record<ConflictSeverity, number>;
    byType: Record<ConflictType, number>;
    pendingCount: number;
    criticalCount: number;
    resolvedCount: number;
    averageResolutionTime: number;
}
//# sourceMappingURL=conflict-responses.dto.d.ts.map