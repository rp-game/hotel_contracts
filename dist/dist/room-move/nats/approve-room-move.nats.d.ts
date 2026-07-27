/**
 * Approve Room Move NATS Contract
 *
 * NATS Pattern: room-move.approve
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class ApproveRoomMoveRequest {
    moveRequestId: string;
    approved: boolean;
    approvedBy: string;
    approvedByName?: string;
    notes?: string;
    approvalNotes?: string;
    rejectionReason?: string;
    targetRoomId?: string;
    targetRoomNumber?: string;
    targetRoomTypeId?: string;
    rateDifference?: number;
    additionalCharges?: number;
    refundAmount?: number;
    isChargeRequired?: boolean;
    guestApprovalRequired?: boolean;
    scheduledMoveTime?: string;
    estimatedDurationMinutes?: number;
    porterRequired?: boolean;
    assignedPorterId?: string;
    assignedPorterName?: string;
    notifyGuest?: boolean;
    notifyHousekeeping?: boolean;
    generateKeyCards?: boolean;
    guestApprovalMessage?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type ApproveRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=approve-room-move.nats.d.ts.map