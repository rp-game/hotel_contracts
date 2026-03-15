/**
 * Room Move Priority Enum
 * Defines priority levels for room move requests
 */
export enum RoomMovePriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
  EMERGENCY = 'EMERGENCY',
}

/**
 * Room Move Status Enum
 * Represents all possible states of a room move request throughout its lifecycle
 */
export enum RoomMoveStatus {
  PENDING = 'PENDING',
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

/**
 * Room Move Reason Enum
 * Reasons for initiating a room move
 */
export enum RoomMoveReason {
  GUEST_COMPLAINT = 'GUEST_COMPLAINT',
  MAINTENANCE_ISSUE = 'MAINTENANCE_ISSUE',
  UPGRADE_OPPORTUNITY = 'UPGRADE_OPPORTUNITY',
  DOWNGRADE_REQUEST = 'DOWNGRADE_REQUEST',
  GROUP_COORDINATION = 'GROUP_COORDINATION',
  ROOM_DEFECT = 'ROOM_DEFECT',
  NOISE_COMPLAINT = 'NOISE_COMPLAINT',
  VIEW_PREFERENCE = 'VIEW_PREFERENCE',
  ACCESSIBILITY_NEEDS = 'ACCESSIBILITY_NEEDS',
  EMERGENCY = 'EMERGENCY',
  OTHER = 'OTHER',
}

/**
 * Room Move Type Enum
 * Classification of the move based on room category comparison
 */
export enum RoomMoveType {
  SAME_CATEGORY = 'SAME_CATEGORY',
  UPGRADE = 'UPGRADE',
  DOWNGRADE = 'DOWNGRADE',
  EMERGENCY_RELOCATION = 'EMERGENCY_RELOCATION',
}
