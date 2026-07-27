/**
 * Initiate Room Move NATS Contract
 *
 * NATS Pattern: room-move.initiate
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMovePriority } from '../enums';
export declare class InitiateRoomMoveRequest {
    bookingId: string;
    currentRoomId: string;
    targetRoomId: string;
    targetRoomTypeId?: string;
    reason: string;
    description?: string;
    internalNotes?: string;
    requestedBy: string;
    requestedByName?: string;
    priority?: RoomMovePriority;
    porterRequired?: boolean;
    assignedPorterId?: string;
    assignedPorterName?: string;
    guestApprovalRequired?: boolean;
    preferredMoveTime?: string;
    isEmergency?: boolean;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type InitiateRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=initiate-room-move.nats.d.ts.map