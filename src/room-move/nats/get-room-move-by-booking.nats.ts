import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

/**
 * Get Room Move By Booking Request
 * Pattern: room-move.get-by-booking
 * Handler: booking-service
 */
export interface GetRoomMoveByBookingRequest {
  bookingId: string;
  tenantId: string;
  hotelId: string;
}

/**
 * Get Room Move By Booking Response
 * Returns array of room moves associated with a booking
 */
export interface GetRoomMoveByBookingNatsResponse extends NatsResponse<RoomMoveDetails[]> {}
