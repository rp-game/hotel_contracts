/**
 * Weekly Timeline NATS Contracts
 *
 * Patterns:
 * - booking.timeline.weekly
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID, IsDateString, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common';

// ─── NATS Request ────────────────────────────────────────────────

/**
 * NATS payload for booking.timeline.weekly
 */
export class GetWeeklyTimelineNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)' })
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Timezone (default: Asia/Ho_Chi_Minh)' })
  @IsOptional()
  @IsString()
  timezone?: string;
}

// ─── REST Query ──────────────────────────────────────────────────

/**
 * Query DTO for GET /api/timeline/weekly
 */
export class GetWeeklyTimelineQueryDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Week start date (deprecated, use startDate)' })
  @IsOptional()
  @IsDateString()
  weekStart?: string;

  @ApiPropertyOptional({ description: 'Start date for timeline (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date for timeline (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Timezone (default: Asia/Ho_Chi_Minh)' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ description: 'Week offset from current week (default: 0)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  weekOffset?: number;
}

// ─── Response ────────────────────────────────────────────────────

/**
 * Booking data embedded in a timeline block
 */
export class TimelineBookingDataDto {
  @ApiPropertyOptional({ description: 'Check-in time (ISO)' })
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Check-out time (ISO)' })
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Actual check-in time (ISO)' })
  actualCheckInTime?: string;

  @ApiPropertyOptional({ description: 'Booking code' })
  bookingCode?: string;

  @ApiPropertyOptional({ description: 'Total amount' })
  totalAmount?: number;

  @ApiPropertyOptional({ description: 'Special requests' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Last updated timestamp (ISO) — used as version token for delta updates' })
  updatedAt?: string;

  @ApiPropertyOptional({ description: 'Room type ID' })
  roomTypeId?: string;

  @ApiPropertyOptional({ description: 'Corporate account name' })
  corporateName?: string;

  @ApiPropertyOptional({ description: 'Sales person name' })
  salesPersonName?: string;

  @ApiPropertyOptional({ description: 'Travel agent name' })
  travelAgentName?: string;
}

/**
 * A single time block within a room's timeline
 */
export class WeeklyTimelineBlockDto {
  @ApiProperty({ description: 'Block ID' })
  id: string;

  @ApiProperty({ description: 'Start time (ISO)' })
  startTime: string;

  @ApiProperty({ description: 'End time (ISO)' })
  endTime: string;

  @ApiProperty({
    description: 'Block type',
    enum: ['available', 'pending', 'confirmed', 'occupied', 'maintenance', 'checkout_ready', 'cleaning_pending', 'cleaning_in_progress', 'cleaning_completed'],
  })
  type: string;

  @ApiPropertyOptional({ description: 'Booking ID' })
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Guest name' })
  guestName?: string;

  @ApiPropertyOptional({ description: 'Booking status' })
  status?: string;

  @ApiProperty({ description: 'Available actions for this block', type: [String] })
  actions: string[];

  @ApiPropertyOptional({ description: 'Booking metadata', type: TimelineBookingDataDto })
  bookingData?: TimelineBookingDataDto;

  @ApiPropertyOptional({ description: 'Cleaning task ID' })
  cleaningTaskId?: string;

  @ApiPropertyOptional({ description: 'Assigned staff name' })
  assignedStaff?: string;

  @ApiPropertyOptional({ description: 'Priority' })
  priority?: string;

  @ApiPropertyOptional({ description: 'Estimated duration in minutes' })
  estimatedDuration?: number;
}

/**
 * A room row in the weekly timeline
 */
export class WeeklyTimelineRoomDto {
  @ApiProperty({ description: 'Room ID' })
  roomId: string;

  @ApiProperty({ description: 'Room number' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type name' })
  roomType: string;

  @ApiProperty({ description: 'Floor number' })
  floor: number;

  @ApiProperty({ description: 'Timeline blocks', type: [WeeklyTimelineBlockDto] })
  timeBlocks: WeeklyTimelineBlockDto[];
}

/**
 * Full response for GET /api/timeline/weekly
 */
export class WeeklyTimelineResponseDto {
  @ApiProperty({ description: 'Room timelines', type: [WeeklyTimelineRoomDto] })
  rooms: WeeklyTimelineRoomDto[];

  @ApiProperty({ description: 'Server current time (ISO)' })
  currentTime: string;

  @ApiProperty({ description: 'Period start (ISO)' })
  weekStart: string;

  @ApiProperty({ description: 'Period end (ISO)' })
  weekEnd: string;
}

export type GetWeeklyTimelineNatsResponse = NatsResponse<WeeklyTimelineResponseDto>;
