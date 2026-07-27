/**
 * Room Move REST DTOs
 * REST request/response shapes for room-move endpoints.
 * Request DTOs: what the controller @Body() receives (no tenantId/hotelId — from headers/JWT)
 * Response DTOs: what Swagger shows
 */
import { RoomMovePriority, RoomMoveReason, RoomMoveStatus } from '../enums';
export declare class InitiateRoomMoveDto {
    bookingId: string;
    currentRoomId: string;
    targetRoomId: string;
    reason: RoomMoveReason;
    priority?: RoomMovePriority;
    description?: string;
}
export declare class ApproveRoomMoveDto {
    notes?: string;
}
export declare class RejectRoomMoveDto {
    reason: string;
    notes?: string;
}
export declare class ScheduleRoomMoveDto {
    scheduledMoveTime: string;
    estimatedDurationMinutes?: number;
    notes?: string;
}
export declare class ExecuteRoomMoveDto {
    notes?: string;
}
export declare class CancelRoomMoveDto {
    reason?: string;
}
export declare class QuickTransferRoomDto {
    newRoomId: string;
    notes?: string;
}
export declare class CalculateMovePricingDto {
    bookingId: string;
    targetRoomId: string;
    checkInDate?: string;
    checkOutDate?: string;
}
export declare class RoomMoveResponseDto {
    id: string;
    bookingId: string;
    currentRoomId: string;
    currentRoomNumber?: string;
    targetRoomId?: string;
    targetRoomNumber?: string;
    reason: string;
    status: RoomMoveStatus;
    priority: RoomMovePriority;
    moveType?: string;
    rateDifference?: number;
    additionalCharges?: number;
    refundAmount?: number;
    requestedBy: string;
    requestedByName?: string;
    requestedAt: string;
    approvedBy?: string;
    approvedAt?: string;
    scheduledMoveTime?: string;
    executedBy?: string;
    executedAt?: string;
    description?: string;
}
export declare class RoomMoveSearchResponseDto {
    moves: RoomMoveResponseDto[];
    total: number;
    page: number;
    limit: number;
}
export declare class AvailableRoomResponseDto {
    roomId: string;
    roomNumber: string;
    roomTypeName?: string;
    floor?: number;
    baseRate?: number;
    rateDifference?: number;
    isUpgrade?: boolean;
    currentStatus?: string;
    amenities?: string[];
}
export declare class RoomMovePricingResponseDto {
    originalPrice: number;
    newRoomPrice: number;
    priceDifference: number;
    adjustmentType: string;
    refundAmount: number;
    additionalCharges: number;
    totalAmount: number;
    currency: string;
}
export declare class RoomMoveDashboardStatsDto {
    totalMoves: number;
    pendingApproval: number;
    scheduled: number;
    inProgress: number;
    completedToday: number;
    averageDuration?: number;
}
//# sourceMappingURL=room-move.dto.d.ts.map