/**
 * Channel Provider Status Enum
 *
 * Represents the operational status of a channel provider configuration
 */
export enum ProviderStatus {
  /** Provider is active and operational */
  ACTIVE = 'ACTIVE',

  /** Provider configuration is inactive */
  INACTIVE = 'INACTIVE',

  /** Provider is undergoing maintenance */
  MAINTENANCE = 'MAINTENANCE',

  /** Provider has encountered an error */
  ERROR = 'ERROR',
}
