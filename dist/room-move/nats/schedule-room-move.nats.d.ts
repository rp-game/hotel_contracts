import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
/**
 * Schedule Room Move Request
 * Pattern: room-move.schedule
 * Handler: booking-service
 */
export interface ScheduleRoomMoveRequest {
    moveRequestId: string;
    scheduledFor: string;
    estimatedDuration?: number;
    notes?: string;
    tenantId: string;
    hotelId: string;
}
/**
 * Schedule Room Move Response
 */
export interface ScheduleRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {
}
//# sourceMappingURL=schedule-room-move.nats.d.ts.map