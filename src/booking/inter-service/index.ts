/**
 * Inter-Service Communication Types for Booking Service
 *
 * Types used when Booking Service communicates with other services
 * (CRM, Inventory, Payment, etc.)
 *
 * Import examples:
 * ```typescript
 * import { CustomerResponse, CreateCustomerRequest } from '@hotel/contracts/booking/inter-service';
 * import { BookRoomDetailedResponse } from '@hotel/contracts/booking/inter-service';
 * ```
 */

export * from './crm.types';
export * from './inventory.types';
