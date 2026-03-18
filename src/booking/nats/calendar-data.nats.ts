/**
 * Calendar Data NATS Contract
 *
 * NATS Pattern: booking.calendar.get
 * Handler: booking-service
 * Called by: api-gateway
 * Used by: calendar page to fetch bookings for a date range
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Room type information for calendar events
 */
export class CalendarRoomTypeDto {
  @ApiProperty({ description: 'Room type name' })
  name: string;

  @ApiProperty({ description: 'Room type ID' })
  id: string;
}

/**
 * Calendar event (booking) for display
 * Used as Swagger DTO by api-gateway and as NATS response type by booking-service
 */
export class CalendarEventDto {
  @ApiProperty({ description: 'Unique event ID (booking ID)' })
  id: string;

  @ApiProperty({ description: 'Booking code (e.g., BK2024123456)' })
  bookingCode: string;

  @ApiProperty({ description: 'Event title (guest name) - for calendar display' })
  title: string;

  @ApiProperty({ description: 'Guest name' })
  guestName: string;

  @ApiPropertyOptional({ description: 'Guest email' })
  guestEmail?: string;

  @ApiProperty({ description: 'Room number (e.g., "101")' })
  roomNumber: string;

  @ApiProperty({ description: 'Room type information', type: () => CalendarRoomTypeDto })
  roomType: CalendarRoomTypeDto;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  checkOutDate: string;

  @ApiProperty({ description: 'Room ID for this booking' })
  roomId: string;

  @ApiProperty({ description: 'Booking status', enum: ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'] })
  status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';

  @ApiProperty({ description: 'Total booking amount (as string for precision)' })
  totalAmount: string;

  @ApiProperty({ description: 'Number of adults' })
  adultCount: number;

  @ApiProperty({ description: 'Number of children' })
  childCount: number;

  @ApiPropertyOptional({ description: 'Room assignment status' })
  assignmentStatus?: string;

  @ApiPropertyOptional({ description: 'Special requests from guest' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Booking source (DIRECT, OTA, etc.)' })
  source?: string;

  @ApiPropertyOptional({ description: 'Creation timestamp' })
  createdAt?: Date;

  @ApiPropertyOptional({ description: 'Group block ID' })
  groupId?: string | null;

  @ApiPropertyOptional({ description: 'Group name' })
  groupName?: string | null;
}

/**
 * @deprecated Use CalendarEventDto instead
 */
export type CalendarEvent = CalendarEventDto;

/**
 * Room occupancy metrics for a date range
 */
export interface OccupancyMetrics {
  /**
   * Total rooms in the hotel
   */
  totalRooms: number;

  /**
   * Number of occupied rooms
   */
  occupiedRooms: number;

  /**
   * Number of available rooms
   */
  availableRooms: number;

  /**
   * Occupancy rate (0-1)
   */
  occupancyRate: number;

  /**
   * Total revenue for the period
   */
  revenue: number;

  /**
   * Average daily rate
   */
  averageRate: number;
}

/**
 * NATS request to fetch calendar data
 */
export interface GetCalendarDataRequest {
  /**
   * Tenant ID (multi-tenant isolation)
   */
  tenantId?: string;

  /**
   * Hotel ID
   */
  hotelId?: string;

  /**
   * Start date for calendar range (YYYY-MM-DD)
   */
  startDate?: string;

  /**
   * End date for calendar range (YYYY-MM-DD)
   */
  endDate?: string;

  /**
   * Room type ID filter (optional)
   */
  roomTypeId?: string;

  /**
   * Room ID filter (optional)
   */
  roomId?: string;

  /**
   * Booking status filter (optional)
   */
  status?: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED';
}

/**
 * NATS response containing calendar data
 */
export interface GetCalendarDataResponse {
  /**
   * Array of calendar events (bookings)
   */
  calendar: CalendarEventDto[];

  /**
   * Array of events (duplicate of calendar, for compatibility)
   */
  events: CalendarEventDto[];

  /**
   * Room occupancy metrics for the period
   */
  occupancy: OccupancyMetrics;
}

/**
 * Full NATS response type for calendar data
 */
export type GetCalendarDataNatsResponse = NatsResponse<GetCalendarDataResponse>;
