import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
/**
 * Approve Room Move Request
 * Pattern: room-move.approve
 * Handler: booking-service
 */
export interface ApproveRoomMoveRequest {
    moveRequestId: string;
    approvedBy: string;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Approve Room Move Response
 */
export interface ApproveRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {
}
//# sourceMappingURL=approve-room-move.nats.d.ts.map