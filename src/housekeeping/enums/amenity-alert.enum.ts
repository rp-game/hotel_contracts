/**
 * Amenity SLA Alert Enums
 * Tracks alert types, status, and SLA compliance state for amenity requests
 */

export enum AmenityAlertType {
  WARNING = 'WARNING',
  ESCALATION_LEVEL_2 = 'ESCALATION_LEVEL_2',
  BREACHED = 'BREACHED',
}

export enum AmenityAlertStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  DISMISSED = 'DISMISSED',
}

export enum AmenitySLAStatus {
  ON_TRACK = 'ON_TRACK',
  WARNING = 'WARNING',
  BREACHED = 'BREACHED',
}
