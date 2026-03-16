/**
 * Cancel Room Move NATS Contract
 *
 * NATS Pattern: room-move.cancel
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class CancelRoomMoveRequest {
    moveRequestId: string;
    cancelledBy: string;
    reason: string;
    refundApplicable?: boolean;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type CancelRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=cancel-room-move.nats.d.ts.map