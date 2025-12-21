import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMovePriority } from '../enums';

/**
 * Initiate Room Move Request
 * Pattern: room-move.initiate
 * Handler: booking-service
 */
export interface InitiateRoomMoveRequest {
  bookingId: string;
  currentRoomId: string;
  targetRoomId: string;
  reason: string;
  requestedBy: string;
  priority?: RoomMovePriority;
  tenantId: string;
  hotelId: string;
}

/**
 * Initiate Room Move Response
 */
export interface InitiateRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {}
