/**
 * Channel Event Listener NATS Contracts
 *
 * Patterns (Fire-and-Forget Events):
 * - booking.created
 * - booking.updated
 * - booking.cancelled
 * - inventory.room.availability.updated
 * - pricing.rate.updated
 *
 * Handler: channel-service (ProvidersNatsController)
 * Called by: booking-service, inventory-service, pricing-service
 *
 * Note: These are event listeners with no response.
 * Services publish events, channel-service listens and syncs to external channels.
 * Fire-and-forget pattern means handlers return void, not NatsResponse.
 */

import { PricingData } from '../types';

/**
 * Booking Created/Cancelled Event (OTA inventory sync)
 * Pattern: booking.created | booking.cancelled
 *
 * Published by booking-service via emitChannelInventoryEvent().
 * Carries post-booking available room count for the affected room type.
 * Channel service syncs availability to external OTAs.
 *
 * Returns: void (fire-and-forget)
 */
export interface BookingCreatedNatsRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  availableAfterBooking?: number;
  source?: string;
  externalBookingId?: string;
}

/**
 * Booking Updated Event
 * Pattern: booking.updated
 *
 * Same shape as BookingCreatedNatsRequest — published when a booking is modified.
 * Returns: void (fire-and-forget)
 */
export interface BookingUpdatedNatsRequest {
  tenantId: string;
  hotelId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  availableAfterBooking?: number;
  source?: string;
  externalBookingId?: string;
}

/**
 * Booking Cancelled Event
 * Pattern: booking.cancelled
 *
 * Published when a booking is cancelled.
 * Channel service listens and notifies external OTA channels.
 *
 * Returns: void (fire-and-forget)
 */
export interface BookingCancelledNatsRequest {
  bookingId: string;
  reason?: string;
}

/**
 * Room Availability Updated Event
 * Pattern: inventory.room.availability.updated
 *
 * Published by inventory-service when room availability changes (book/release).
 * Channel service listens and syncs to external channel managers.
 *
 * Returns: void (fire-and-forget)
 */
export interface InventoryRoomAvailabilityUpdatedNatsRequest {
  hotelId: string;
  tenantId: string;
  roomId: string;
  roomTypeId: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime?: string;
  checkOutTime?: string;
  action: string;
  timestamp: string;
}

/**
 * Pricing Rate Updated Event
 * Pattern: pricing.rate.updated
 *
 * Published when room rates are updated.
 * Channel service listens and syncs to external channel managers.
 *
 * Returns: void (fire-and-forget)
 */
export interface PricingRateUpdatedNatsRequest {
  hotelId: string;
  roomTypeId: string;
  pricing: PricingData[];
}
