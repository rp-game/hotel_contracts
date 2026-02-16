/**
 * Unassigned Bookings NATS Contracts
 *
 * Patterns:
 * - bookings.unassigned.get
 *
 * Handler: booking-service (BookingTimelineNatsController)
 * Called by: api-gateway (RoomsController)
 */

import { NatsResponse } from '../../common';

/**
 * Unassigned Booking Item
 */
export interface UnassignedBookingItem {
  bookingId: string;
  guestName: string;
  roomType: string;
  roomTypeId: string;
  checkIn: string;
  checkOut: string;
  duration: number;
  guestCount: number;
  specialRequests?: string;
  assignmentStatus: string;
  bookingType: string;
}

/**
 * Get Unassigned Bookings Request
 * Pattern: bookings.unassigned.get
 *
 * Get list of bookings that haven't been assigned to rooms yet
 */
export interface GetUnassignedBookingsNatsRequest {
  hotelId: string;
  startDate?: string;
  endDate?: string;
}

export type GetUnassignedBookingsNatsResponse = NatsResponse<UnassignedBookingItem[]>;
