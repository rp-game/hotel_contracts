/**
 * Channel Provider Type Enum
 *
 * Represents the different types of channel/PMS providers
 * that the system can integrate with.
 *
 * Values match API Gateway ProviderType enum EXACTLY (PascalCase)
 */
export enum ProviderType {
  /** STAAH integration */
  STAAH = 'STAAH',

  /** SiteMinder integration */
  SITEMINDER = 'SiteMinder',

  /** Beds24 integration */
  BEDS24 = 'Beds24',

  /** RateGain integration */
  RATEGAIN = 'RateGain',
}
