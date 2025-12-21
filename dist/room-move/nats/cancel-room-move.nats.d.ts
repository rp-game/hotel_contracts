import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
/**
 * Cancel Room Move Request
 * Pattern: room-move.cancel
 * Handler: booking-service
 */
export interface CancelRoomMoveRequest {
    moveRequestId: string;
    cancelledBy: string;
    reason: string;
    refundApplicable?: boolean;
    tenantId: string;
    hotelId: string;
}
/**
 * Cancel Room Move Response
 */
export interface CancelRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {
}
//# sourceMappingURL=cancel-room-move.nats.d.ts.map