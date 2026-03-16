/**
 * Manage Group Block Allocations NATS Contracts
 *
 * NATS Patterns:
 *   group-block.allocation.add
 *   group-block.allocation.update
 *   group-block.allocation.remove
 * Handler: booking-service
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common/nats-response.interface';

/**
 * NATS request to add an allocation to a group block
 */
export interface AddAllocationNatsRequest {
  groupBlockId: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  roomTypeName: string;
  allottedRooms: number;
  rateOverride?: number;
  startDate: string;
  endDate: string;
  userId: string;
  userName: string;
}

/**
 * NATS request to update an existing allocation
 */
export interface UpdateAllocationNatsRequest {
  allocationId: string;
  groupBlockId: string;
  tenantId: string;
  hotelId: string;
  allottedRooms?: number;
  rateOverride?: number;
  userId: string;
  userName: string;
}

/**
 * NATS request to remove an allocation from a group block
 */
export interface RemoveAllocationNatsRequest {
  allocationId: string;
  groupBlockId: string;
  tenantId: string;
  hotelId: string;
  userId: string;
  userName: string;
}

export type AddAllocationNatsResponse = NatsResponse<any>;
export type UpdateAllocationNatsResponse = NatsResponse<any>;
export type RemoveAllocationNatsResponse = NatsResponse<any>;
