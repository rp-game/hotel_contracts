/**
 * Inter-Service Communication Types for Booking Service
 *
 * Types used when Booking Service communicates with other services
 * (CRM, Inventory, Payment, etc.)
 *
 * Import examples:
 * ```typescript
 * import { CustomerResponse, CreateCustomerRequest } from '@hotel/contracts/booking/inter-service';
 * import { CheckRoomAvailabilityRequest } from '@hotel/contracts/inventory/inter-service';
 * ```
 */

export * from './crm.types';
// Re-export Inventory inter-service types from the canonical inventory domain
export * from '../../inventory/inter-service';
