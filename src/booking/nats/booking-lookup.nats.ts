import { NatsResponse } from '../../common/nats-response.interface';
import { BookingResponseDto } from '../dto/booking-response.dto';

/**
 * NATS Pattern: booking.find_by_code
 */
export interface FindByCodeNatsRequest {
  code: string;
  tenantId: string;
  hotelId: string;
}

export type FindByCodeNatsResponse = NatsResponse<BookingResponseDto>;

/**
 * NATS Pattern: booking.get_by_id / booking.find_by_id
 * Simple lookup without tenant/hotel context (internal use)
 */
export interface GetBookingByIdSimpleNatsRequest {
  bookingId?: string;
  id?: string;
}

export type GetBookingByIdSimpleNatsResponse = NatsResponse<BookingResponseDto>;

/**
 * NATS Pattern: booking.get_by_room_and_guest
 */
export interface GetBookingByRoomAndGuestNatsRequest {
  tenantId: string;
  hotelId: string;
  roomNumber?: string;
  guestName?: string;
  checkInDate?: string;
  checkOutDate?: string;
}

export type GetBookingByRoomAndGuestNatsResponse = NatsResponse<BookingResponseDto | null>;
