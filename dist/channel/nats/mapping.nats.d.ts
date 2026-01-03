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
import { RoomMapping, RateMapping, CreateRoomMappingRequest, UpdateRoomMappingRequest, CreateRateMappingRequest, UpdateRateMappingRequest, GetRoomMappingsResponse, GetRateMappingsResponse, DeleteMappingResponse } from '../types';
/**
 * Get Room Mappings Request
 * Pattern: inventory.mappings.get
 */
export interface GetRoomMappingsNatsRequest {
    providerId?: string;
    tenantId?: string;
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
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
    internalRoomId: string;
}
export type UpsertRoomMappingNatsResponse = NatsResponse<RoomMapping>;
/**
 * Update Room Mapping Request
 * Pattern: inventory.mapping.update
 */
export interface UpdateRoomMappingNatsRequest extends UpdateRoomMappingRequest {
    mappingId: string;
    providerId?: string;
    tenantId?: string;
}
export type UpdateRoomMappingNatsResponse = NatsResponse<RoomMapping | null>;
/**
 * Delete Room Mapping Request
 * Pattern: inventory.mapping.delete
 */
export interface DeleteRoomMappingNatsRequest {
    mappingId: string;
    providerId?: string;
    tenantId?: string;
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
    providerId?: string;
    tenantId?: string;
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
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
    internalRateId: string;
}
export type UpsertRateMappingNatsResponse = NatsResponse<RateMapping>;
/**
 * Update Rate Mapping Request
 * Pattern: inventory.rate_mapping.update
 */
export interface UpdateRateMappingNatsRequest extends UpdateRateMappingRequest {
    mappingId: string;
    providerId?: string;
    tenantId?: string;
}
export type UpdateRateMappingNatsResponse = NatsResponse<RateMapping | null>;
/**
 * Delete Rate Mapping Request
 * Pattern: inventory.rate_mapping.delete
 */
export interface DeleteRateMappingNatsRequest {
    mappingId: string;
    providerId?: string;
    tenantId?: string;
}
export type DeleteRateMappingNatsResponse = NatsResponse<DeleteMappingResponse>;
/**
 * Get Single Rate Mapping Request
 * Pattern: inventory.rate_mapping.get
 */
export interface GetRateMappingNatsRequest {
    mappingId: string;
    providerId?: string;
    tenantId?: string;
}
export type GetRateMappingNatsResponse = NatsResponse<RateMapping | null>;
/**
 * Bulk Create Rate Mappings Request
 * Pattern: inventory.rate_mappings.bulk_create
 */
export interface BulkCreateRateMappingsNatsRequest {
    mappings: CreateRateMappingRequest[];
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
}
export type BulkCreateRateMappingsNatsResponse = NatsResponse<RateMapping[]>;
//# sourceMappingURL=mapping.nats.d.ts.map