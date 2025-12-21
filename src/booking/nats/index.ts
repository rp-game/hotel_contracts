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
