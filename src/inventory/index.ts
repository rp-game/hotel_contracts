/**
 * Inventory Domain Contracts
 *
 * Includes:
 * - NATS message contracts (inventory.* patterns)
 * - REST API DTOs
 * - Domain types and enums
 *
 * Import examples:
 * ```typescript
 * import { GetRoomAvailabilityRequest } from '@hotel/contracts/inventory/nats';
 * import { RoomStatus } from '@hotel/contracts/inventory';
 * import * as InventoryContracts from '@hotel/contracts/inventory';
 * ```
 */

export * from './nats';
export * from './rest';
export * from './types';
export * from './enums';
