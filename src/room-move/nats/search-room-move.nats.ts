/**
 * Search Room Move NATS Contract
 *
 * NATS Pattern: room-move.search
 * Handler: booking-service
 * Called by: api-gateway
 * Types: search, dashboard-stats, mobile-staff, emergency-available-rooms
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEnum, IsNumber, IsArray } from 'class-validator';
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

  @ApiPropertyOptional({ description: 'Sort order', enum: ['asc', 'desc'] })
  @IsOptional()
  @IsString()
  sortOrder?: 'asc' | 'desc';
}

/**
 * Search Room Move Response
 * Returns different types based on searchType:
 * - search/dashboard-stats/mobile-staff: RoomMoveSearchResult
 * - emergency-available-rooms: Array of AvailableRoom
 */
export type SearchRoomMoveNatsResponse = NatsResponse<RoomMoveSearchResult | AvailableRoom[]>;
