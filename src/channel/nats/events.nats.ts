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

import { ChannelBookingData, AvailabilityData, PricingData } from '../types';

/**
 * Booking Created Event
 * Pattern: booking.created
 *
 * Published when a new booking is created in the system.
 * Channel service listens and syncs to external OTA channels.
 *
 * Request payload structure:
 * {
 *   booking: ChannelBookingData (15 fields)
 * }
 *
 * Returns: void (fire-and-forget)
 */
export interface BookingCreatedNatsRequest {
  booking: ChannelBookingData;
}

/**
 * Booking Updated Event
 * Pattern: booking.updated
 *
 * Published when an existing booking is modified.
 * Channel service listens and syncs updates to external OTA channels.
 *
 * Request payload structure:
 * {
 *   booking: ChannelBookingData (15 fields)
 * }
 *
 * Returns: void (fire-and-forget)
 */
export interface BookingUpdatedNatsRequest {
  booking: ChannelBookingData;
}

/**
 * Booking Cancelled Event
 * Pattern: booking.cancelled
 *
 * Published when a booking is cancelled.
 * Channel service listens and notifies external OTA channels.
 *
 * Request payload structure:
 * {
 *   bookingId: string (required),
 *   reason?: string (optional)
 * }
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
 * Published when room availability changes.
 * Channel service listens and syncs to external channel managers.
 *
 * Request payload structure:
 * {
 *   hotelId: string,
 *   roomTypeId: string,
 *   availability: AvailabilityData[] (array, 6 fields each)
 * }
 *
 * Returns: void (fire-and-forget)
 */
export interface InventoryRoomAvailabilityUpdatedNatsRequest {
  hotelId: string;
  roomTypeId: string;
  availability: AvailabilityData[];
}

/**
 * Pricing Rate Updated Event
 * Pattern: pricing.rate.updated
 *
 * Published when room rates are updated.
 * Channel service listens and syncs to external channel managers.
 *
 * Request payload structure:
 * {
 *   hotelId: string,
 *   roomTypeId: string,
 *   pricing: PricingData[] (array, 8 fields each)
 * }
 *
 * Returns: void (fire-and-forget)
 */
export interface PricingRateUpdatedNatsRequest {
  hotelId: string;
  roomTypeId: string;
  pricing: PricingData[];
}
