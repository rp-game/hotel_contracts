/**
 * Housekeeping Task Status Enum
 */

export enum TaskStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  VERIFIED = 'VERIFIED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  OVERDUE = 'OVERDUE',
}

/**
 * Housekeeping Task Priority Enum
 */

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Active Shift Status Enum
 * Used for clock-in/out tracking (distinct from scheduling ShiftStatus in user enums)
 */

export enum ActiveShiftStatus {
  NOT_STARTED = 'not_started',
  ACTIVE = 'active',
  BREAK = 'break',
  COMPLETED = 'completed',
}
