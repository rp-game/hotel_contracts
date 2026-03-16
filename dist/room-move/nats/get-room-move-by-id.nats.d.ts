/**
 * Get Room Move By ID NATS Contract
 *
 * NATS Pattern: room-move.get-by-id
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class GetRoomMoveByIdRequest {
    moveRequestId: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type GetRoomMoveByIdNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=get-room-move-by-id.nats.d.ts.map