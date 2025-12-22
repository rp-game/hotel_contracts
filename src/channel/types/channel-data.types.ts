/**
 * Channel Data Types
 *
 * Shared data structures for channel synchronization events.
 * These types are used across multiple NATS patterns for booking,
 * availability, and pricing data exchange.
 *
 * Note: Field names use camelCase (propertyId, roomTypeId, etc.)
 * while internal service databases may use snake_case.
 */

/**
 * Channel booking data - used in booking.created, booking.updated events
 * Total fields: 15
 * Note: Different from inventory BookingData - this is for channel sync events
 */
export interface ChannelBookingData {
  id: string;
  propertyId: string;
  roomTypeId?: string;
  guestName: string;
  guestEmail?: string;
  guestPhone?: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  totalAmount: number;
  currency: string;
  status: string;
  specialRequests?: string;
  paymentMethod?: string;
  commission?: number;
}

/**
 * Availability data - used in inventory.room.availability.updated events
 * Total fields: 6
 */
export interface AvailabilityData {
  propertyId: string;
  roomTypeId: string;
  date: string;
  availableRooms: number;
  minStay?: number;
  maxStay?: number;
}

/**
 * Pricing data - used in pricing.rate.updated events
 * Total fields: 8
 */
export interface PricingData {
  propertyId: string;
  roomTypeId: string;
  date: string;
  ratePlan?: string;
  basePrice: number;
  currency: string;
  extraPersonFee?: number;
  childFee?: number;
}
