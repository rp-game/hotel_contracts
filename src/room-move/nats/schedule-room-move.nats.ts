/**
 * Schedule Room Move NATS Contract
 *
 * NATS Pattern: room-move.schedule
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsDateString, IsNumber } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class ScheduleRoomMoveRequest {
  @ApiProperty({ description: 'Move request ID' })
  @IsUUID()
  @IsNotEmpty()
  moveRequestId: string;

  @ApiProperty({ description: 'Scheduled move time (ISO datetime)' })
  @IsDateString()
  @IsNotEmpty()
  scheduledFor: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  @IsOptional()
  @IsNumber()
  estimatedDuration?: number;

  @ApiPropertyOptional({ description: 'Scheduling notes' })
  @IsOptional()
  @IsString()
  notes?: string;

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
export type ScheduleRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
