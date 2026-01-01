/**
 * Booking Type Enumeration
 *
 * Represents the duration/type of a booking
 */
export enum BookingType {
  /**
   * Standard overnight stay (check-in one day, check-out the next day)
   */
  OVERNIGHT = 'OVERNIGHT',

  /**
   * Hourly room rental (less than a day)
   */
  HOURLY = 'HOURLY',

  /**
   * Meeting room or event space rental
   */
  EVENT_SPACE = 'EVENT_SPACE',

  /**
   * Day use (daytime only, typically 3-6 hours)
   */
  DAY_USE = 'DAY_USE',

  /**
   * Long-term stay (30+ days with special rates)
   */
  LONG_TERM = 'LONG_TERM',

  /**
   * Blocked dates (not available for public booking)
   */
  BLOCK = 'BLOCK',
}
