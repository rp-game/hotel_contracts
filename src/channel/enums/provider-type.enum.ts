/**
 * Channel Provider Type Enum
 *
 * Represents the different types of channel/PMS providers
 * that the system can integrate with.
 */
export enum ProviderType {
  /** STAAH integration */
  STAAH = 'staah',

  /** SiteMinder integration */
  SITEMINDER = 'siteminder',

  /** Beds24 integration */
  BEDS24 = 'beds24',

  /** RateGain integration */
  RATEGAIN = 'rategain',
}
