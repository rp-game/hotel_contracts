/**
 * Booking Domain - NATS Message Contracts
 *
 * These interfaces define the request/response shapes for inter-service
 * communication via NATS messaging pattern.
 *
 * Pattern: booking.*
 * Handler: booking-service
 */

export * from './create-booking.nats';
export * from './find-bookings.nats';
export * from './find-one-booking.nats';
export * from './unassigned-bookings.nats';
export * from './bookings-timeline.nats';
export * from './check-in.nats';
export * from './mobile-checkout.nats';
export * from './timeline-action.nats';
export * from './analytics.nats';
export * from './calendar-data.nats';
export * from './update-booking.nats';
export * from './move-booking.nats';
export * from './get-booking-stats.nats';

// Amenity Request NATS contracts
export * from './amenity-requests.nats';

// Service NATS contracts
export * from './services.nats';

// Conflict-related NATS contracts
export * from './get-conflicts.nats';
export * from './detect-conflicts.nats';
export * from './get-conflict-stats.nats';
export * from './get-pending-conflicts.nats';
export * from './get-critical-conflicts.nats';
export * from './get-conflict-by-id.nats';
export * from './create-conflict.nats';
export * from './update-conflict.nats';
export * from './delete-conflict.nats';

// Room assignment history NATS contracts
export * from './room-assignment.nats';
