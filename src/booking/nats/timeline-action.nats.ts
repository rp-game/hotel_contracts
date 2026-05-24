/**
 * Booking Timeline Action NATS Contracts
 *
 * Patterns:
 * - booking.timeline.action
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

export class TimelineActionGuestDetails {
  @ApiPropertyOptional()
  firstName?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  phone?: string;

  @ApiPropertyOptional()
  nationality?: string;

  @ApiPropertyOptional()
  idNumber?: string;
}

/**
 * Timeline Action Result
 */
export interface TimelineActionResult {
  success: boolean;
  message: string;
  booking: {
    id: string;
    status: string;
    bookingCode?: string;
    actualCheckinTime?: Date;
    actualCheckOutTime?: Date;
  };
}

export class TimelineActionData {
  @ApiPropertyOptional()
  notes?: string;

  @ApiPropertyOptional()
  reason?: string;

  @ApiPropertyOptional({ description: 'New checkout date (YYYY-MM-DD)' })
  extendToDate?: string;

  @ApiPropertyOptional({ description: 'Net price per night for extension nights' })
  extensionPricePerNight?: number;

  @ApiPropertyOptional({ type: () => TimelineActionGuestDetails })
  guestDetails?: TimelineActionGuestDetails;

  @ApiPropertyOptional({
    type: [String],
    description: 'Phase 2 per-room: room.id list to apply this action to. If omitted, applies to all eligible booking_rooms.',
  })
  roomIds?: string[];
}

/**
 * Perform Timeline Action Request
 * Pattern: booking.timeline.action
 */
export interface PerformTimelineActionNatsRequest {
  roomId: string;
  action: string;
  bookingId?: string;
  actionData?: TimelineActionData;
}

export type PerformTimelineActionNatsResponse = NatsResponse<TimelineActionResult>;
