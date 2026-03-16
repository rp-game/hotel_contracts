/**
 * Search Room Move NATS Contract
 *
 * NATS Pattern: room-move.search
 * Handler: booking-service
 * Called by: api-gateway
 * Types: search, dashboard-stats, mobile-staff, emergency-available-rooms
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEnum, IsNumber, IsArray, IsBoolean } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { RoomMoveSearchResult, AvailableRoom } from '../types';
import { RoomMoveStatus } from '../enums';

export class SearchRoomMoveRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  @IsNotEmpty()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Search type', enum: ['search', 'dashboard-stats', 'mobile-staff', 'emergency-available-rooms'] })
  @IsOptional()
  @IsString()
  searchType?: 'search' | 'dashboard-stats' | 'mobile-staff' | 'emergency-available-rooms';

  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  status?: RoomMoveStatus | RoomMoveStatus[];

  @ApiPropertyOptional({ description: 'Filter by priority' })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({ description: 'Filter by reason' })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional({ description: 'Filter by booking ID' })
  @IsOptional()
  @IsString()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Filter by room ID' })
  @IsOptional()
  @IsString()
  roomId?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({ description: 'Sort field' })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Sort order', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';

  @ApiPropertyOptional({ description: 'Include timeline events' })
  @IsOptional()
  @IsBoolean()
  includeTimeline?: boolean;

  @ApiPropertyOptional({ description: 'Include booking details' })
  @IsOptional()
  @IsBoolean()
  includeBookingDetails?: boolean;

  @ApiPropertyOptional({ description: 'Include guest details' })
  @IsOptional()
  @IsBoolean()
  includeGuestDetails?: boolean;

  @ApiPropertyOptional({ description: 'Include staff details' })
  @IsOptional()
  @IsBoolean()
  includeStaffDetails?: boolean;

  @ApiPropertyOptional({ description: 'Include room details' })
  @IsOptional()
  @IsBoolean()
  includeRoomDetails?: boolean;

  // Date range filters
  @ApiPropertyOptional({ description: 'Filter by requested date from (ISO datetime)' })
  @IsOptional()
  @IsString()
  requestedFrom?: string;

  @ApiPropertyOptional({ description: 'Filter by requested date to (ISO datetime)' })
  @IsOptional()
  @IsString()
  requestedTo?: string;

  // Staff filters
  @ApiPropertyOptional({ description: 'Filter by requester user ID' })
  @IsOptional()
  @IsString()
  requestedBy?: string;

  // Text search
  @ApiPropertyOptional({ description: 'Text search across description and notes' })
  @IsOptional()
  @IsString()
  searchText?: string;

  // Special filters
  @ApiPropertyOptional({ description: 'Filter emergency moves only' })
  @IsOptional()
  @IsBoolean()
  emergencyOnly?: boolean;

  @ApiPropertyOptional({ description: 'Filter moves scheduled for today' })
  @IsOptional()
  @IsBoolean()
  scheduledToday?: boolean;
}

/**
 * Search Room Move Response
 * Returns different types based on searchType:
 * - search/dashboard-stats/mobile-staff: RoomMoveSearchResult
 * - emergency-available-rooms: Array of AvailableRoom
 */
export type SearchRoomMoveNatsResponse = NatsResponse<RoomMoveSearchResult | AvailableRoom[]>;
