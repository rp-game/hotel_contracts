/**
 * Get Available Rooms NATS Contract
 *
 * NATS Pattern: room-move.get-available-rooms
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { AvailableRoom } from '../types';

export class GetAvailableRoomsForMoveRequest {
  @ApiProperty({ description: 'Booking ID to find alternative rooms for' })
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

  @ApiPropertyOptional({ description: 'Type of move filter' })
  @IsOptional()
  @IsString()
  moveType?: string;

  @ApiPropertyOptional({ description: 'Maximum rate difference' })
  @IsOptional()
  @IsNumber()
  maxRateDifference?: number;

  @ApiPropertyOptional({ description: 'Maximum number of rooms to return' })
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({ description: 'Whether this is an emergency request' })
  @IsOptional()
  emergency?: boolean;
}

/**
 * Type-safe NATS response wrapper
 */
export type GetAvailableRoomsForMoveNatsResponse = NatsResponse<AvailableRoom[]>;
