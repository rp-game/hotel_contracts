/**
 * Booking Timeline Action NATS Contracts
 *
 * Patterns:
 * - booking.timeline.action
 *
 * Handler: booking-service (TimelineController)
 * Called by: api-gateway (TimelineService)
 */

import { NatsResponse } from '../../common';

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

export interface TimelineActionData {
  notes?: string;
  reason?: string;
  extendToDate?: string;
  guestDetails?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    nationality?: string;
    idNumber?: string;
    [key: string]: any;
  };
}

/**
 * Perform Timeline Action Request
 * Pattern: booking.timeline.action
 *
 * Perform an action on a room (confirm, checkin, checkout, cancel)
 */
export interface PerformTimelineActionNatsRequest {
  roomId: string;
  action: string;
  bookingId?: string;
  actionData?: TimelineActionData;
}

export type PerformTimelineActionNatsResponse = NatsResponse<TimelineActionResult>;
