/**
 * Emergency Room Move NATS Contract
 *
 * NATS Pattern: room-move.emergency
 * Handler: booking-service
 * Called by: api-gateway
 * Priority: Always URGENT for emergency moves
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveDetails } from '../types';

export class EmergencyRoomMoveRequest {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ description: 'Current room ID' })
  @IsUUID()
  @IsNotEmpty()
  currentRoomId: string;

  @ApiProperty({ description: 'Emergency reason' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiProperty({ description: 'User requesting the emergency move' })
  @IsString()
  @IsNotEmpty()
  requestedBy: string;

  @ApiPropertyOptional({ description: 'Emergency type', enum: ['guest-complaint', 'maintenance-issue', 'safety-hazard', 'other'] })
  @IsOptional()
  @IsString()
  emergencyType?: 'guest-complaint' | 'maintenance-issue' | 'safety-hazard' | 'other';

  @ApiPropertyOptional({ description: 'Additional notes' })
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
export type EmergencyRoomMoveNatsResponse = NatsResponse<RoomMoveDetails>;
