/**
 * Channel Mapping NATS Contracts
 *
 * Patterns:
 * - inventory.mappings.get
 * - inventory.mapping.get
 * - inventory.mapping.upsert
 * - inventory.mapping.update
 * - inventory.mapping.delete
 * - inventory.mappings.bulk_create
 * - inventory.rate_mappings.get
 * - inventory.rate_mapping.upsert
 * - inventory.rate_mapping.update
 * - inventory.rate_mapping.delete
 *
 * Handler: channel-service (InventorySyncNatsController)
 * Called by: api-gateway
 */

import { NatsResponse } from '../../common';
import {
  RoomMapping,
  RateMapping,
  CreateRoomMappingRequest,
  UpdateRoomMappingRequest,
  CreateRateMappingRequest,
  UpdateRateMappingRequest,
  MappingsListResponse,
  GetRoomMappingsResponse,
  GetRateMappingsResponse,
  DeleteMappingResponse,
} from '../types';

/**
 * Get Room Mappings Request
 * Pattern: inventory.mappings.get
 */
export interface GetRoomMappingsNatsRequest {
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
  hotelId?: string;
  page?: number;
  limit?: number;
}

export type GetRoomMappingsNatsResponse = NatsResponse<GetRoomMappingsResponse>;

/**
 * Get Single Room Mapping Request
 * Pattern: inventory.mapping.get
 */
export interface GetRoomMappingNatsRequest {
  mappingId: string;
}

export type GetRoomMappingNatsResponse = NatsResponse<RoomMapping | null>;

/**
 * Upsert Room Mapping Request (Create/Update)
 * Pattern: inventory.mapping.upsert
 */
export interface UpsertRoomMappingNatsRequest extends CreateRoomMappingRequest {
  providerId?: string;     // Optional - API Gateway may not have access
  tenantId?: string;       // Optional - API Gateway may not have access
  hotelId?: string;        // Optional - API Gateway may not have access
  internalRoomId: string;
}

export type UpsertRoomMappingNatsResponse = NatsResponse<RoomMapping>;

/**
 * Update Room Mapping Request
 * Pattern: inventory.mapping.update
 */
export interface UpdateRoomMappingNatsRequest extends UpdateRoomMappingRequest {
  mappingId: string;
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
}

export type UpdateRoomMappingNatsResponse = NatsResponse<RoomMapping | null>;

/**
 * Delete Room Mapping Request
 * Pattern: inventory.mapping.delete
 */
export interface DeleteRoomMappingNatsRequest {
  mappingId: string;
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
}

export type DeleteRoomMappingNatsResponse = NatsResponse<DeleteMappingResponse>;

/**
 * Bulk Create Room Mappings Request
 * Pattern: inventory.mappings.bulk_create
 */
export interface BulkCreateRoomMappingsNatsRequest {
  mappings: CreateRoomMappingRequest[];
}

export type BulkCreateRoomMappingsNatsResponse = NatsResponse<RoomMapping[]>;

/**
 * Get Rate Mappings Request
 * Pattern: inventory.rate_mappings.get
 */
export interface GetRateMappingsNatsRequest {
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
  hotelId?: string;
  page?: number;
  limit?: number;
}

export type GetRateMappingsNatsResponse = NatsResponse<GetRateMappingsResponse>;

/**
 * Upsert Rate Mapping Request (Create/Update)
 * Pattern: inventory.rate_mapping.upsert
 */
export interface UpsertRateMappingNatsRequest extends CreateRateMappingRequest {
  providerId?: string;     // Optional - API Gateway may not have access
  tenantId?: string;       // Optional - API Gateway may not have access
  hotelId?: string;        // Optional - API Gateway may not have access
  internalRateId: string;
}

export type UpsertRateMappingNatsResponse = NatsResponse<RateMapping>;

/**
 * Update Rate Mapping Request
 * Pattern: inventory.rate_mapping.update
 */
export interface UpdateRateMappingNatsRequest extends UpdateRateMappingRequest {
  mappingId: string;
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
}

export type UpdateRateMappingNatsResponse = NatsResponse<RateMapping | null>;

/**
 * Delete Rate Mapping Request
 * Pattern: inventory.rate_mapping.delete
 */
export interface DeleteRateMappingNatsRequest {
  mappingId: string;
  providerId?: string;  // Optional - API Gateway may not have access
  tenantId?: string;    // Optional - API Gateway may not have access
}

export type DeleteRateMappingNatsResponse = NatsResponse<DeleteMappingResponse>;
