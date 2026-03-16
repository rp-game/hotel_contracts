/**
 * Reject Room Move NATS Contract
 *
 * NATS Pattern: room-move.reject
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class RejectRoomMoveRequest {
    moveRequestId: string;
    rejectedBy: string;
    reason: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type RejectRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=reject-room-move.nats.d.ts.map