import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

/**
 * Emergency Room Move Request
 * Pattern: room-move.emergency
 * Handler: booking-service
 * Priority: Always URGENT for emergency moves
 */
export interface EmergencyRoomMoveRequest {
  bookingId: string;
  currentRoomId: string;
  reason: string;
  requestedBy: string;
  emergencyType?: 'guest-complaint' | 'maintenance-issue' | 'safety-hazard' | 'other';
  notes?: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Emergency Room Move Response
 */
export interface EmergencyRoomMoveNatsResponse extends NatsResponse<RoomMoveDetails> {}
