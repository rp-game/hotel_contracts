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
