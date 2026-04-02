/**
 * Amenity Request Status Enum
 * Tracks the lifecycle of a guest amenity request from creation to fulfillment or cancellation
 */

export enum AmenityRequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  FULFILLED = 'FULFILLED',
  CANCELLED = 'CANCELLED',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}
