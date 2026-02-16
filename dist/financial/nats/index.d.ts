/**
 * Financial Domain NATS Message Contracts
 *
 * These interfaces define the request/response shapes for inter-service
 * communication via NATS messaging pattern between API Gateway and Financial Service.
 *
 * Includes:
 * - Invoice contracts (re-exported from payment module): payment.invoice.*
 * - Additional Services: additional-services.*
 * - Additional Service Bookings: service-bookings.*
 *
 * Handler: financial-service
 */
export * from './additional-services.nats';
export * from './service-bookings.nats';
//# sourceMappingURL=index.d.ts.map