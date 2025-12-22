/**
 * Channel Mapping Type Definitions
 *
 * Handles room and rate mappings between internal system and external providers
 */
/**
 * Room mapping configuration (JSONB field)
 */
export interface RoomMappingConfiguration {
    roomType?: string;
    maxOccupancy?: number;
    amenities?: string[];
    bedConfiguration?: string;
    roomSize?: number;
    viewType?: string;
    floor?: number;
    smokingAllowed?: boolean;
    accessibilityFeatures?: string[];
    [key: string]: any;
}
/**
 * Room mapping entity
 */
export interface RoomMapping {
    id: string;
    providerId: string;
    tenantId: string;
    hotelId: string;
    internalRoomId: string;
    internalRoomName: string;
    externalRoomId: string;
    externalRoomName: string;
    mappingConfiguration?: RoomMappingConfiguration;
    isActive: boolean;
    lastSyncedAt?: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Rate mapping configuration (JSONB field)
 */
export interface RateMappingConfiguration {
    rateBasis?: 'PER_NIGHT' | 'PER_PERSON' | 'PER_ROOM';
    mealPlan?: string;
    cancellationPolicy?: string;
    rateType?: 'BAR' | 'CORPORATE' | 'PROMOTIONAL' | 'PACKAGE';
    inclusions?: string[];
    restrictions?: {
        minStay?: number;
        maxStay?: number;
        advanceBookingDays?: number;
        closedToArrival?: boolean;
        closedToDeparture?: boolean;
    };
    [key: string]: any;
}
/**
 * Rate mapping entity
 */
export interface RateMapping {
    id: string;
    providerId: string;
    tenantId: string;
    hotelId: string;
    internalRoomId: string;
    internalRateId: string;
    internalRateName: string;
    externalRateId: string;
    externalRateName: string;
    mappingConfiguration?: RateMappingConfiguration;
    isActive: boolean;
    lastSyncedAt?: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Create room mapping request
 */
export interface CreateRoomMappingRequest {
    providerId: string;
    tenantId: string;
    hotelId: string;
    internalRoomId: string;
    internalRoomName: string;
    externalRoomId: string;
    externalRoomName: string;
    mappingConfiguration?: RoomMappingConfiguration;
}
/**
 * Update room mapping request
 */
export interface UpdateRoomMappingRequest {
    internalRoomName?: string;
    externalRoomId?: string;
    externalRoomName?: string;
    mappingConfiguration?: RoomMappingConfiguration;
    isActive?: boolean;
}
/**
 * Create rate mapping request
 */
export interface CreateRateMappingRequest {
    providerId: string;
    tenantId: string;
    hotelId: string;
    internalRoomId: string;
    internalRateId: string;
    internalRateName: string;
    externalRateId: string;
    externalRateName: string;
    mappingConfiguration?: RateMappingConfiguration;
}
/**
 * Update rate mapping request
 */
export interface UpdateRateMappingRequest {
    internalRateName?: string;
    externalRateId?: string;
    externalRateName?: string;
    mappingConfiguration?: RateMappingConfiguration;
    isActive?: boolean;
}
/**
 * Mappings list response (for paginated queries)
 */
export interface MappingsListResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Get room mappings response - returns array of room mappings
 */
export type GetRoomMappingsResponse = RoomMapping[];
/**
 * Get rate mappings response - returns array of rate mappings
 */
export type GetRateMappingsResponse = RateMapping[];
/**
 * Delete mapping response
 */
export interface DeleteMappingResponse {
    message: string;
    deletedAt?: string;
}
//# sourceMappingURL=mapping.types.d.ts.map