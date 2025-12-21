/**
 * Rate Plan Type Enum
 *
 * Different pricing models supported by the system
 */

export enum RatePlanType {
  /**
   * Fixed rate per night
   */
  NIGHTLY = 'NIGHTLY',

  /**
   * Hourly pricing (day use, short stays)
   */
  HOURLY = 'HOURLY',

  /**
   * Price by date range
   */
  DATE_RANGE = 'DATE_RANGE',

  /**
   * Length of stay pricing
   */
  LOS = 'LOS',

  /**
   * Package deal pricing
   */
  PACKAGE = 'PACKAGE',
}
