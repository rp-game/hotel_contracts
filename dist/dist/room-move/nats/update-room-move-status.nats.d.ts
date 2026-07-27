/**
 * Update Room Move Status NATS Contract
 *
 * NATS Pattern: room-move.update-status
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMoveStatus } from '../enums';
export declare class UpdateRoomMoveStatusRequest {
    moveRequestId: string;
    status: RoomMoveStatus;
    updatedBy: string;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type UpdateRoomMoveStatusNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=update-room-move-status.nats.d.ts.map