import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

/**
 * Reject Room Move Request
 * Pattern: room-move.reject
 * Handler: booking-service
 */
export interface RejectRoomMoveRequest {
  moveRequestId: string;
  rejectedBy: string;
  reason: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Reject Room Move Response
 */
export interface RejectRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {}
