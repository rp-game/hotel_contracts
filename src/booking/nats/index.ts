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
export * from './unassigned-bookings.nats';
export * from './check-in.nats';
export * from './timeline-action.nats';
export * from './analytics.nats';
