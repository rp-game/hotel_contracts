/**
 * Sync Operation Enum
 *
 * Represents the types of synchronization operations
 * that can be performed with external channel providers
 */
export enum SyncOperation {
  /** Push room availability to provider */
  AVAILABILITY_PUSH = 'AVAILABILITY_PUSH',

  /** Pull room availability from provider */
  AVAILABILITY_PULL = 'AVAILABILITY_PULL',

  /** Push rates to provider */
  RATES_PUSH = 'RATES_PUSH',

  /** Pull rates from provider */
  RATES_PULL = 'RATES_PULL',

  /** Push bookings to provider */
  BOOKING_PUSH = 'BOOKING_PUSH',

  /** Pull bookings from provider */
  BOOKING_PULL = 'BOOKING_PULL',

  /** Synchronize room mappings */
  ROOM_MAPPING_SYNC = 'ROOM_MAPPING_SYNC',

  /** Synchronize rate mappings */
  RATE_MAPPING_SYNC = 'RATE_MAPPING_SYNC',

  /** Full synchronization of all data */
  FULL_SYNC = 'FULL_SYNC',
}
