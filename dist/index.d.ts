/**
 * Hotel Contracts - Centralized Domain Contracts Repository
 *
 * This is the single source of truth for all microservice contracts
 * including NATS message definitions, REST DTOs, types, and enums.
 *
 * @packageDocumentation
 *
 * ## Installation
 *
 * ```bash
 * npm install @hotel/contracts@github:org/hotel-contracts#v1.0.0
 * ```
 *
 * ## Usage
 *
 * ```typescript
 * // Common contracts used by all services
 * import { NatsResponse, NatsPaginatedResponse } from '@hotel/contracts/common';
 *
 * // Domain-specific contracts
 * import { CreateBookingRequest } from '@hotel/contracts/booking/nats';
 * import { BookingStatus } from '@hotel/contracts/booking';
 *
 * // Wildcard imports for full domain
 * import * as BookingContracts from '@hotel/contracts/booking';
 * ```
 *
 * ## Domains
 *
 * - **common**: Shared interfaces (NatsResponse, pagination, errors)
 * - **booking**: Booking service contracts
 * - **pricing**: Pricing service contracts
 * - **inventory**: Inventory service contracts
 * - **housekeeping**: Housekeeping service contracts
 * - **user**: User service contracts
 * - **payment**: Payment service contracts
 * - **crm**: CRM service contracts
 * - **financial**: Financial service contracts
 * - **channel**: Channel integration contracts
 * - **notification**: Notification service contracts
 * - **report**: Report service contracts
 * - **platform**: Platform management contracts
 * - **cms**: CMS service contracts
 */
export * from './common';
export * from './booking';
export * from './pricing';
export * from './inventory';
export * from './housekeeping';
export * from './user';
export * from './payment';
export * from './crm';
export * from './financial';
export * from './billing';
export * from './channel';
export * from './notification';
export * from './report';
export * from './platform';
export * from './room-move';
export * from './cms';
export * from './tenants';
//# sourceMappingURL=index.d.ts.map