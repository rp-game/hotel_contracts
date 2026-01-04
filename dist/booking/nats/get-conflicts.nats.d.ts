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
    affectedBookings: string[];
    affectedRooms: string[];
    detectedAt: string;
    description: string;
    resolutionType?: ResolutionType;
    resolvedAt?: string;
    resolvedBy?: string;
    notes?: string;
}
export interface GetConflictsNatsResponse extends NatsResponse<ConflictNatsData[]> {
    data: ConflictNatsData[];
    total: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=get-conflicts.nats.d.ts.map