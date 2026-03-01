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
export * from './amenity-requests.nats';
export * from './booking-lookup.nats';
export * from './payment-events.nats';
export * from './booking-events.nats';
export * from './services.nats';
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
export * from './room-assignment.nats';
export * from './reassign-room.nats';
export * from './add-service.nats';
export * from './add-payment.nats';
export * from './cancel-booking.nats';
export * from './booking-lookup.nats';
export * from './assign-room.nats';
export * from './payment-events.nats';
export * from './occupancy.nats';
//# sourceMappingURL=index.d.ts.map