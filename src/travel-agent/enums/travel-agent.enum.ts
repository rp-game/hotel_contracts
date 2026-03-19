/**
 * Travel Agent Domain Enums
 */

export enum TravelAgentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum CommissionType {
  PERCENTAGE = 'PERCENTAGE',
  FLAT_PER_NIGHT = 'FLAT_PER_NIGHT',
  FLAT_PER_STAY = 'FLAT_PER_STAY',
}

export enum CommissionRecordStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  PAID = 'PAID',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED',
}
