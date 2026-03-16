/**
 * Get Room Move By Booking NATS Contract
 *
 * NATS Pattern: room-move.get-by-booking
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class GetRoomMoveByBookingRequest {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  @IsNotEmpty()
  hotelId: string;
}

/**
 * Type-safe NATS response wrapper
 * Returns array of room moves associated with a booking
 */
export type GetRoomMoveByBookingNatsResponse = NatsResponse<RoomMoveDetails[]>;
