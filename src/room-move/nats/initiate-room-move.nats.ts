/**
 * Initiate Room Move NATS Contract
 *
 * NATS Pattern: room-move.initiate
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';
import { RoomMovePriority } from '../enums';

export class InitiateRoomMoveRequest {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ description: 'Current room ID' })
  @IsUUID()
  @IsNotEmpty()
  currentRoomId: string;

  @ApiProperty({ description: 'Target room ID' })
  @IsUUID()
  @IsNotEmpty()
  targetRoomId: string;

  @ApiProperty({ description: 'Reason for room move' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiProperty({ description: 'User requesting the move' })
  @IsString()
  @IsNotEmpty()
  requestedBy: string;

  @ApiPropertyOptional({ description: 'Move priority', enum: RoomMovePriority })
  @IsOptional()
  @IsEnum(RoomMovePriority)
  priority?: RoomMovePriority;

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
 */
export type InitiateRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
