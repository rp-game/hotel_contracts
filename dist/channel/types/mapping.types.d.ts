/**
 * Channel Mapping Type Definitions
 *
 * Handles room and rate mappings between internal system and external providers
 */
/**
 * Room mapping configuration (JSONB field)
 * Matches database entity structure (CMSRoomMapping.mappingConfiguration)
 */
export declare class RoomMappingConfiguration {
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
 * Maps internal rooms to external provider room IDs
 */
export declare class RoomMapping {
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
    lastSyncedAt?: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Rate mapping restrictions sub-object
 */
export declare class RateMappingRestrictions {
    minStay?: number;
    maxStay?: number;
    advanceBookingDays?: number;
    closedToArrival?: boolean;
    closedToDeparture?: boolean;
}
/**
 * Rate mapping configuration (JSONB field)
 */
export declare class RateMappingConfiguration {
    rateBasis?: 'PER_NIGHT' | 'PER_PERSON' | 'PER_ROOM';
    mealPlan?: string;
    cancellationPolicy?: string;
    rateType?: 'BAR' | 'CORPORATE' | 'PROMOTIONAL' | 'PACKAGE';
    inclusions?: string[];
    restrictions?: RateMappingRestrictions;
    [key: string]: any;
}
/**
 * Rate mapping entity
 * Maps internal rate plans to external provider rate IDs
 */
export declare class RateMapping {
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
    lastSyncedAt?: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Create room mapping request
 */
export declare class CreateRoomMappingRequest {
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
    internalRoomId: string;
    internalRoomName: string;
    externalRoomId: string;
    externalRoomName: string;
    mappingConfiguration?: RoomMappingConfiguration;
    isActive?: boolean;
}
/**
 * Update room mapping request
 */
export declare class UpdateRoomMappingRequest {
    internalRoomName?: string;
    externalRoomId?: string;
    externalRoomName?: string;
    mappingConfiguration?: RoomMappingConfiguration;
    isActive?: boolean;
}
/**
 * Create rate mapping request
 */
export declare class CreateRateMappingRequest {
    providerId?: string;
    tenantId?: string;
    hotelId?: string;
    internalRoomId: string;
    internalRateId: string;
    internalRateName: string;
    externalRateId: string;
    externalRateName: string;
    mappingConfiguration?: RateMappingConfiguration;
    isActive?: boolean;
}
/**
 * Update rate mapping request
 */
export declare class UpdateRateMappingRequest {
    internalRateName?: string;
    externalRateId?: string;
    externalRateName?: string;
    mappingConfiguration?: RateMappingConfiguration;
    isActive?: boolean;
}
/**
 * Mappings list response (for paginated queries)
 * Generic type - not used directly in Swagger
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
export declare class DeleteMappingResponse {
    message: string;
    deletedAt?: string;
}
//# sourceMappingURL=mapping.types.d.ts.map