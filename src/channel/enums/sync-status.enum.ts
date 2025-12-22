/**
 * Sync Status Enum
 *
 * Represents the result/status of a synchronization operation
 * Values match API Gateway SyncStatus enum EXACTLY
 */
export enum SyncStatus {
  /** Synchronization is pending execution */
  PENDING = 'PENDING',

  /** Synchronization is currently in progress */
  IN_PROGRESS = 'IN_PROGRESS',

  /** Synchronization completed successfully */
  SUCCESS = 'SUCCESS',

  /** Synchronization completed with partial success (some records failed) */
  PARTIAL = 'PARTIAL',

  /** Synchronization failed completely */
  FAILED = 'FAILED',

  /** Synchronization was cancelled */
  CANCELLED = 'CANCELLED',
}
