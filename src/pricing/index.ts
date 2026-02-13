/**
 * Pricing Domain Contracts
 *
 * Includes:
 * - REST API DTOs
 * - Domain types and enums
 *
 * Import examples:
 * ```typescript
 * import { CreateRatePlanRequest } from '@hotel/contracts/pricing/nats';
 * import { RatePlanType, RatePlanStatus } from '@hotel/contracts/pricing';
 * import * as PricingContracts from '@hotel/contracts/pricing';
 * ```
 */

// export * from './nats'; // Not exported to avoid conflicts
// export * from './types'; // Not exported to avoid conflicts with ./rest
export * from './rest';
export * from './enums';
