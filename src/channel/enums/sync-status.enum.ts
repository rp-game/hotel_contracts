/**
 * Sync Status Enum
 *
 * Represents the result/status of a synchronization operation
 */
export enum SyncStatus {
  /** Synchronization completed successfully */
  SUCCESS = 'SUCCESS',

  /** Synchronization failed completely */
  FAILED = 'FAILED',

  /** Synchronization completed with partial success (some records failed) */
  PARTIAL = 'PARTIAL',

  /** Synchronization is currently in progress */
  IN_PROGRESS = 'IN_PROGRESS',

  /** Synchronization is pending execution */
  PENDING = 'PENDING',
}
