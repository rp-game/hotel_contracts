/**
 * Allotment Domain Enums
 */

export enum AllotmentStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  EXPIRED = 'EXPIRED',
  CLOSED = 'CLOSED',
}

export enum AllotmentInventoryControl {
  /** Fallback to general pool when allotment exhausted */
  ELASTIC = 'ELASTIC',
  /** Hard block — reject booking when allotment exhausted */
  FIXED = 'FIXED',
}

export enum AllotmentPartnerType {
  CORPORATE = 'CORPORATE',
  TRAVEL_AGENT = 'TRAVEL_AGENT',
}
