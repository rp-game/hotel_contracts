import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

/**
 * Schedule Room Move Request
 * Pattern: room-move.schedule
 * Handler: booking-service
 */
export interface ScheduleRoomMoveRequest {
  moveRequestId: string;
  scheduledFor: string; // ISO datetime
  estimatedDuration?: number; // minutes
  notes?: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Schedule Room Move Response
 */
export interface ScheduleRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {}
