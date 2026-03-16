/**
 * Schedule Room Move NATS Contract
 *
 * NATS Pattern: room-move.schedule
 * Handler: booking-service
 * Called by: api-gateway
 */
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
export declare class ScheduleRoomMoveRequest {
    moveRequestId: string;
    scheduledFor: string;
    estimatedDuration?: number;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Type-safe NATS response wrapper
 */
export type ScheduleRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
//# sourceMappingURL=schedule-room-move.nats.d.ts.map