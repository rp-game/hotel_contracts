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
 * Housekeeping Task Type Enum
 */

export enum TaskType {
  ROOM_CLEANING = 'ROOM_CLEANING',
  REGULAR_CLEANING = 'REGULAR_CLEANING',
  LINEN_CHANGE = 'LINEN_CHANGE',
  INVENTORY_CHECK = 'INVENTORY_CHECK',
  MAINTENANCE_REPORT = 'MAINTENANCE_REPORT',
  MAINTENANCE = 'MAINTENANCE',
  CHECKOUT_CLEANING = 'CHECKOUT_CLEANING',
  CHECKIN_PREPARATION = 'CHECKIN_PREPARATION',
  DEEP_CLEANING = 'DEEP_CLEANING',
  CARPET_CLEANING = 'CARPET_CLEANING',
  WINDOW_CLEANING = 'WINDOW_CLEANING',
  INSPECTION = 'INSPECTION',
  TURNOVER = 'TURNOVER',
  LAUNDRY = 'LAUNDRY',
  REGULAR = 'REGULAR',
  CHECKOUT_CLEAN = 'CHECKOUT_CLEAN',
  MAINTENANCE_CLEAN = 'MAINTENANCE_CLEAN',
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
