/**
 * Sync Trigger Enum
 *
 * Represents the different ways a synchronization
 * operation can be initiated with a channel provider
 */
export enum SyncTrigger {
  /** Manually triggered by user action */
  MANUAL = 'MANUAL',

  /** Triggered by scheduled job/cron */
  SCHEDULED = 'SCHEDULED',

  /** Triggered by incoming webhook from provider */
  WEBHOOK = 'WEBHOOK',

  /** Triggered by inventory change in the system */
  INVENTORY_CHANGE = 'INVENTORY_CHANGE',

  /** Triggered by rate/pricing change in the system */
  RATE_CHANGE = 'RATE_CHANGE',

  /** Triggered by booking event */
  BOOKING_EVENT = 'BOOKING_EVENT',
}
