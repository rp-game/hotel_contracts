/**
 * Initiate Room Move NATS Contract
 *
 * NATS Pattern: room-move.initiate
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsUUID, IsBoolean } from 'class-validator';
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

  @ApiPropertyOptional({ description: 'Target room type ID' })
  @IsOptional()
  @IsUUID()
  targetRoomTypeId?: string;

  @ApiProperty({ description: 'Reason for room move' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional({ description: 'Description / additional details' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  @IsOptional()
  @IsString()
  internalNotes?: string;

  @ApiProperty({ description: 'User requesting the move' })
  @IsString()
  @IsNotEmpty()
  requestedBy: string;

  @ApiPropertyOptional({ description: 'Name of user requesting the move' })
  @IsOptional()
  @IsString()
  requestedByName?: string;

  @ApiPropertyOptional({ description: 'Move priority', enum: RoomMovePriority })
  @IsOptional()
  @IsEnum(RoomMovePriority)
  priority?: RoomMovePriority;

  @ApiPropertyOptional({ description: 'Whether porter is required' })
  @IsOptional()
  @IsBoolean()
  porterRequired?: boolean;

  @ApiPropertyOptional({ description: 'Assigned porter ID' })
  @IsOptional()
  @IsUUID()
  assignedPorterId?: string;

  @ApiPropertyOptional({ description: 'Assigned porter name' })
  @IsOptional()
  @IsString()
  assignedPorterName?: string;

  @ApiPropertyOptional({ description: 'Whether guest approval is required' })
  @IsOptional()
  @IsBoolean()
  guestApprovalRequired?: boolean;

  @ApiPropertyOptional({ description: 'Preferred move time (ISO datetime)' })
  @IsOptional()
  @IsString()
  preferredMoveTime?: string;

  @ApiPropertyOptional({ description: 'Whether this is an emergency move' })
  @IsOptional()
  @IsBoolean()
  isEmergency?: boolean;

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
