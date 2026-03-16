/**
 * Schedule Room Move NATS Contract
 *
 * NATS Pattern: room-move.schedule
 * Handler: booking-service
 * Called by: api-gateway
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsDateString, IsNumber, IsBoolean, IsArray } from 'class-validator';
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

  @ApiPropertyOptional({ description: 'User who scheduled the move' })
  @IsOptional()
  @IsString()
  scheduledBy?: string;

  @ApiPropertyOptional({ description: 'Name of user who scheduled the move' })
  @IsOptional()
  @IsString()
  scheduledByName?: string;

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

  // Porter logistics
  @ApiPropertyOptional({ description: 'Porter arrival time (ISO datetime)' })
  @IsOptional()
  @IsString()
  porterArrivalTime?: string;

  // Guest notification
  @ApiPropertyOptional({ description: 'Whether to notify guest' })
  @IsOptional()
  @IsBoolean()
  notifyGuest?: boolean;

  @ApiPropertyOptional({ description: 'Guest notification message' })
  @IsOptional()
  @IsString()
  guestNotificationMessage?: string;

  @ApiPropertyOptional({ description: 'Notification channels' })
  @IsOptional()
  @IsArray()
  notificationChannels?: string[];

  // Housekeeping coordination
  @ApiPropertyOptional({ description: 'Whether to notify housekeeping' })
  @IsOptional()
  @IsBoolean()
  notifyHousekeeping?: boolean;

  @ApiPropertyOptional({ description: 'Whether room cleaning is scheduled' })
  @IsOptional()
  @IsBoolean()
  roomCleaningScheduled?: boolean;

  @ApiPropertyOptional({ description: 'Housekeeping tasks' })
  @IsOptional()
  @IsArray()
  housekeepingTasks?: string[];

  @ApiPropertyOptional({ description: 'Housekeeping notes' })
  @IsOptional()
  @IsString()
  housekeepingNotes?: string;

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
