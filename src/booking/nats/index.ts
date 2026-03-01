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
export * from './customer-bookings.nats';
export * from './unassigned-bookings.nats';
export * from './smart-search.nats';
export * from './bookings-timeline.nats';
export * from './timeline-action.nats';
export * from './timeline-room-details.nats';
export * from './check-in.nats';
export * from './mobile-checkout.nats';
export * from './analytics.nats';
export * from './calendar-data.nats';
export * from './update-booking.nats';
export * from './move-booking.nats';
export * from './get-booking-stats.nats';

// Amenity Request NATS contracts
export * from './amenity-requests.nats';
export * from './booking-lookup.nats';
export * from './payment-events.nats';
export * from './booking-events.nats';

// Service NATS contracts
export * from './services.nats';

// Conflict-related NATS contracts
export * from './check-conflict.nats';
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

// Reassign room NATS contracts
export * from './reassign-room.nats';

// Add service NATS contracts
export * from './add-service.nats';

// Add payment NATS contracts
export * from './add-payment.nats';

// Booking management NATS contracts
export * from './cancel-booking.nats';
export * from './booking-lookup.nats';
export * from './assign-room.nats';
export * from './payment-events.nats';
export * from './occupancy.nats';
