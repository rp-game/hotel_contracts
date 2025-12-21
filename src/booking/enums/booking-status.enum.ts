/**
 * Booking Status Enumeration
 *
 * Represents the lifecycle state of a booking
 */
export enum BookingStatus {
  /**
   * Booking received but not yet confirmed
   */
  PENDING = 'PENDING',

  /**
   * Booking confirmed and payment received
   */
  CONFIRMED = 'CONFIRMED',

  /**
   * Guest has checked in
   */
  CHECKED_IN = 'CHECKED_IN',

  /**
   * Guest has checked out
   */
  CHECKED_OUT = 'CHECKED_OUT',

  /**
   * Booking was cancelled
   */
  CANCELLED = 'CANCELLED',

  /**
   * Booking completed and finalized
   */
  COMPLETED = 'COMPLETED',

  /**
   * Guest did not show up
   */
  NO_SHOW = 'NO_SHOW',

  /**
   * Booking is on hold (temporary)
   */
  ON_HOLD = 'ON_HOLD',
}
