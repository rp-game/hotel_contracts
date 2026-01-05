/**
 * Bookings Timeline NATS Contracts
 *
 * Patterns:
 * - bookings.timeline.get
 *
 * Handler: booking-service
 * Called by: inventory-service, api-gateway
 */

import { NatsResponse } from '../../common';

/**
 * Get Bookings Timeline Request
 * Pattern: bookings.timeline.get
 *
 * Retrieve bookings data for timeline view with all necessary information
 * for room assignment and scheduling
 */
export interface GetBookingsTimelinePayload {
  hotelId: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
}

/**
 * Booking Timeline Item
 * Returned by booking-service for timeline visualization
 */
export interface BookingTimelineData {
  id: string;
  guestName: string;
  roomTypeId: string;
  roomTypeName?: string;
  roomId?: string;
  checkIn: Date | string;  // Can be Date object from NATS response
  checkOut: Date | string; // Can be Date object from NATS response
  status: string;
  assignmentStatus?: string;
  bookingType?: string;    // HOURLY or OVERNIGHT
  adultCount?: number;
  childCount?: number;
  specialRequests?: string;
}

export type GetBookingsTimelineResponse = BookingTimelineData[];
export type GetBookingsTimelineNatsResponse = NatsResponse<GetBookingsTimelineResponse>;
