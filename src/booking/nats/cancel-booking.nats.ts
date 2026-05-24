import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';
import { BookingResponseDto } from '../dto/booking-response.dto';

/**
 * NATS Pattern: booking.cancel
 */
export interface CancelBookingNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
  reason?: string;
  cancelledBy?: string;

  // Phase 2 per-room: undefined/empty → cancel all rooms.
  // Specific UUIDs → cancel only those rooms (booking header may remain
  // CHECKED_IN/CONFIRMED if other rooms still active).
  roomIds?: string[];
}

export type CancelBookingNatsResponse = NatsResponse<BookingResponseDto>;
