/**
 * Room Move Priority Enum
 * Defines priority levels for room move requests
 */
export enum RoomMovePriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Room Move Status Enum
 * Represents all possible states of a room move request throughout its lifecycle
 */
export enum RoomMoveStatus {
  INITIATED = 'INITIATED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  ON_HOLD = 'ON_HOLD',
}
