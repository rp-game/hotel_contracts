/**
 * Booking Domain Contracts
 *
 * Includes:
 * - NATS message contracts (booking.* patterns)
 * - REST API DTOs
 * - Domain types and enums
 * - Inter-service communication types
 *
 * Import examples:
 * ```typescript
 * import { CreateBookingRequest } from '@hotel/contracts/booking/nats';
 * import { BookingStatus } from '@hotel/contracts/booking';
 * import { CustomerResponse } from '@hotel/contracts/booking/inter-service';
 * import * as BookingContracts from '@hotel/contracts/booking';
 * ```
 */

export * from './nats';
export * from './rest';
export * from './types';
export * from './enums';
export * from './inter-service';
