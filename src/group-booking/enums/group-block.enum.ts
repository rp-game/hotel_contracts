/**
 * Group Block Status - State machine for group booking blocks
 *
 * Transitions:
 *   INQUIRY → TENTATIVE, CANCELLED
 *   TENTATIVE → DEFINITE, CANCELLED, INQUIRY
 *   DEFINITE → COMPLETED, CANCELLED
 *   CANCELLED → (terminal)
 *   COMPLETED → (terminal)
 */
export enum GroupBlockStatus {
  INQUIRY = 'INQUIRY',
  TENTATIVE = 'TENTATIVE',
  DEFINITE = 'DEFINITE',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

/**
 * Group Billing Mode - How charges are routed for group bookings
 */
export enum GroupBillingMode {
  MASTER_ONLY = 'MASTER_ONLY',
  INDIVIDUAL_ONLY = 'INDIVIDUAL_ONLY',
  SPLIT = 'SPLIT',
}

/**
 * Inventory Control Mode - How room allocation affects availability
 */
export enum InventoryControlMode {
  ELASTIC = 'ELASTIC',
  NON_ELASTIC = 'NON_ELASTIC',
  SELL_LIMIT = 'SELL_LIMIT',
}

/**
 * Pre-Registration Status - Tracks guest pre-registration progress for group bookings
 */
export enum PreRegistrationStatus {
  NOT_STARTED = 'NOT_STARTED',
  PARTIAL = 'PARTIAL',
  COMPLETE = 'COMPLETE',
}

/**
 * Group Block Action - Audit trail actions for group block history
 */
export enum GroupBlockAction {
  CREATED = 'CREATED',
  STATUS_CHANGED = 'STATUS_CHANGED',
  ALLOCATION_ADDED = 'ALLOCATION_ADDED',
  ALLOCATION_UPDATED = 'ALLOCATION_UPDATED',
  ALLOCATION_REMOVED = 'ALLOCATION_REMOVED',
  BOOKING_PICKED_UP = 'BOOKING_PICKED_UP',
  BOOKING_CANCELLED = 'BOOKING_CANCELLED',
  DETAILS_UPDATED = 'DETAILS_UPDATED',
}
