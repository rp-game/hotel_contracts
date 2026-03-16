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
    approvedBy: string;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type ApproveRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=approve-room-move.nats.d.ts.map