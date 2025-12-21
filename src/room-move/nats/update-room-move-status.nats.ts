import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMoveStatus } from '../enums';

/**
 * Update Room Move Status Request
 * Pattern: room-move.update-status
 * Handler: booking-service
 */
export interface UpdateRoomMoveStatusRequest {
  moveRequestId: string;
  status: RoomMoveStatus;
  updatedBy: string;
  notes?: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Update Room Move Status Response
 */
export interface UpdateRoomMoveStatusNatsResponse extends NatsResponse<RoomMoveDetails> {}
