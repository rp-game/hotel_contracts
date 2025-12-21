import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
/**
 * Get Room Move By ID Request
 * Pattern: room-move.get-by-id
 * Handler: booking-service
 */
export interface GetRoomMoveByIdRequest {
    moveRequestId: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Get Room Move By ID Response
 */
export interface GetRoomMoveByIdNatsResponse extends NatsResponse<RoomMoveDetails> {
}
//# sourceMappingURL=get-room-move-by-id.nats.d.ts.map