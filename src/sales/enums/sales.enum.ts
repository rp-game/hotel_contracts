/**
 * Sales Domain Enums
 */

export enum CorporateAccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum ARTransactionType {
  CHARGE = 'CHARGE',
  PAYMENT = 'PAYMENT',
  ADJUSTMENT = 'ADJUSTMENT',
  WRITE_OFF = 'WRITE_OFF',
}

export enum ContractStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  RENEWED = 'RENEWED',
}

export enum SalesActivityType {
  CALL = 'CALL',
  VISIT = 'VISIT',
  EMAIL = 'EMAIL',
  MEETING = 'MEETING',
  SITE_INSPECTION = 'SITE_INSPECTION',
  OTHER = 'OTHER',
}

export enum LeadSource {
  REFERRAL = 'REFERRAL',
  COLD_CALL = 'COLD_CALL',
  WEBSITE = 'WEBSITE',
  EVENT = 'EVENT',
  OTHER = 'OTHER',
}

export enum LeadStage {
  INQUIRY = 'INQUIRY',
  PROPOSAL = 'PROPOSAL',
  NEGOTIATION = 'NEGOTIATION',
  WON = 'WON',
  LOST = 'LOST',
}

export enum SalesCommissionAppliesTo {
  CORPORATE = 'CORPORATE',
  TRAVEL_AGENT = 'TRAVEL_AGENT',
  ALL = 'ALL',
}
