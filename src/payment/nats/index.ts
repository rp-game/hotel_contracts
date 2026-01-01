/**
 * Payment Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for inter-service
 * communication via NATS messaging pattern.
 *
 * Pattern: *-payment.*
 * Handler: payment-service
 */

export * from './offline-payment.nats';