/**
 * Channel Mapping Type Definitions
 *
 * Handles room and rate mappings between internal system and external providers
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Room mapping configuration (JSONB field)
 * Matches database entity structure (CMSRoomMapping.mappingConfiguration)
 */
export class RoomMappingConfiguration {
  @ApiPropertyOptional({ description: 'Room type classification', example: 'DELUXE' })
  roomType?: string;

  @ApiPropertyOptional({ description: 'Maximum occupancy', example: 2 })
  maxOccupancy?: number;

  @ApiPropertyOptional({
    description: 'Room amenities',
    type: [String],
    example: ['wifi', 'tv', 'minibar', 'air-conditioning']
  })
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Bed configuration', example: '1 King Bed' })
  bedConfiguration?: string;

  @ApiPropertyOptional({ description: 'Room size in square meters', example: 35 })
  roomSize?: number;

  @ApiPropertyOptional({ description: 'View type', example: 'SEA_VIEW' })
  viewType?: string;

  @ApiPropertyOptional({ description: 'Floor number', example: 5 })
  floor?: number;

  @ApiPropertyOptional({ description: 'Smoking allowed', example: false })
  smokingAllowed?: boolean;

  @ApiPropertyOptional({
    description: 'Accessibility features',
    type: [String],
    example: ['wheelchair-accessible', 'grab-rails']
  })
  accessibilityFeatures?: string[];

  // Allow additional custom fields
  [key: string]: any;
}

/**
 * Room mapping entity
 * Maps internal rooms to external provider room IDs
 */
export class RoomMapping {
  @ApiProperty({ description: 'Mapping ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  providerId: string;

  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  hotelId: string;

  @ApiProperty({ description: 'Internal room ID', format: 'uuid' })
  internalRoomId: string;

  @ApiProperty({ description: 'Internal room name', example: 'Deluxe Room 101' })
  internalRoomName: string;

  @ApiProperty({ description: 'External room ID in provider system', example: 'EXT-ROOM-123' })
  externalRoomId: string;

  @ApiProperty({ description: 'External room name in provider system', example: 'Superior Double Room' })
  externalRoomName: string;

  @ApiPropertyOptional({
    description: 'Room mapping configuration (JSONB)',
    type: () => RoomMappingConfiguration
  })
  mappingConfiguration?: RoomMappingConfiguration;

  @ApiProperty({ description: 'Whether the mapping is active', example: true })
  isActive: boolean;

  @ApiPropertyOptional({
    description: 'Last sync timestamp (ISO format)',
    example: '2026-02-14T10:30:00Z'
  })
  lastSyncedAt?: string;

  @ApiProperty({ description: 'Mapping creation timestamp (ISO format)', example: '2026-02-14T10:00:00Z' })
  createdAt: string;

  @ApiProperty({ description: 'Mapping last update timestamp (ISO format)', example: '2026-02-14T10:30:00Z' })
  updatedAt: string;
}

/**
 * Rate mapping restrictions sub-object
 */
export class RateMappingRestrictions {
  @ApiPropertyOptional({ description: 'Minimum stay nights', example: 2 })
  minStay?: number;

  @ApiPropertyOptional({ description: 'Maximum stay nights', example: 14 })
  maxStay?: number;

  @ApiPropertyOptional({ description: 'Advance booking days required', example: 7 })
  advanceBookingDays?: number;

  @ApiPropertyOptional({ description: 'Closed to arrival', example: false })
  closedToArrival?: boolean;

  @ApiPropertyOptional({ description: 'Closed to departure', example: false })
  closedToDeparture?: boolean;
}

/**
 * Rate mapping configuration (JSONB field)
 */
export class RateMappingConfiguration {
  @ApiPropertyOptional({
    description: 'Rate basis',
    enum: ['PER_NIGHT', 'PER_PERSON', 'PER_ROOM'],
    example: 'PER_NIGHT'
  })
  rateBasis?: 'PER_NIGHT' | 'PER_PERSON' | 'PER_ROOM';

  @ApiPropertyOptional({ description: 'Meal plan', example: 'ROOM_ONLY' })
  mealPlan?: string;

  @ApiPropertyOptional({ description: 'Cancellation policy', example: 'NON_REFUNDABLE' })
  cancellationPolicy?: string;

  @ApiPropertyOptional({
    description: 'Rate type',
    enum: ['BAR', 'CORPORATE', 'PROMOTIONAL', 'PACKAGE'],
    example: 'BAR'
  })
  rateType?: 'BAR' | 'CORPORATE' | 'PROMOTIONAL' | 'PACKAGE';

  @ApiPropertyOptional({
    description: 'Rate inclusions',
    type: [String],
    example: ['breakfast', 'wifi']
  })
  inclusions?: string[];

  @ApiPropertyOptional({
    description: 'Rate restrictions',
    type: () => RateMappingRestrictions
  })
  restrictions?: RateMappingRestrictions;

  // Allow additional custom fields
  [key: string]: any;
}

/**
 * Rate mapping entity
 * Maps internal rate plans to external provider rate IDs
 */
export class RateMapping {
  @ApiProperty({ description: 'Mapping ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  providerId: string;

  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  hotelId: string;

  @ApiProperty({ description: 'Internal room ID', format: 'uuid' })
  internalRoomId: string;

  @ApiProperty({ description: 'Internal rate ID', format: 'uuid' })
  internalRateId: string;

  @ApiProperty({ description: 'Internal rate name', example: 'Best Available Rate' })
  internalRateName: string;

  @ApiProperty({ description: 'External rate ID in provider system', example: 'EXT-RATE-456' })
  externalRateId: string;

  @ApiProperty({ description: 'External rate name in provider system', example: 'Standard Rate' })
  externalRateName: string;

  @ApiPropertyOptional({
    description: 'Rate mapping configuration (JSONB)',
    type: () => RateMappingConfiguration
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiProperty({ description: 'Whether the mapping is active', example: true })
  isActive: boolean;

  @ApiPropertyOptional({
    description: 'Last sync timestamp (ISO format)',
    example: '2026-02-14T10:30:00Z'
  })
  lastSyncedAt?: string;

  @ApiProperty({ description: 'Mapping creation timestamp (ISO format)', example: '2026-02-14T10:00:00Z' })
  createdAt: string;

  @ApiProperty({ description: 'Mapping last update timestamp (ISO format)', example: '2026-02-14T10:30:00Z' })
  updatedAt: string;
}

/**
 * Create room mapping request
 */
export class CreateRoomMappingRequest {
  @ApiPropertyOptional({ description: 'Provider ID', format: 'uuid' })
  providerId?: string;

  @ApiPropertyOptional({ description: 'Tenant ID', format: 'uuid' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID', format: 'uuid' })
  hotelId?: string;

  @ApiProperty({ description: 'Internal room ID', format: 'uuid' })
  internalRoomId: string;

  @ApiProperty({ description: 'Internal room name', example: 'Deluxe Room 101' })
  internalRoomName: string;

  @ApiProperty({ description: 'External room ID in provider system', example: 'EXT-ROOM-123' })
  externalRoomId: string;

  @ApiProperty({ description: 'External room name in provider system', example: 'Superior Double Room' })
  externalRoomName: string;

  @ApiPropertyOptional({
    description: 'Room mapping configuration',
    type: () => RoomMappingConfiguration
  })
  mappingConfiguration?: RoomMappingConfiguration;

  @ApiPropertyOptional({ description: 'Whether the mapping is active', default: true })
  isActive?: boolean;
}

/**
 * Update room mapping request
 */
export class UpdateRoomMappingRequest {
  @ApiPropertyOptional({ description: 'Internal room name' })
  internalRoomName?: string;

  @ApiPropertyOptional({ description: 'External room ID in provider system' })
  externalRoomId?: string;

  @ApiPropertyOptional({ description: 'External room name in provider system' })
  externalRoomName?: string;

  @ApiPropertyOptional({
    description: 'Room mapping configuration',
    type: () => RoomMappingConfiguration
  })
  mappingConfiguration?: RoomMappingConfiguration;

  @ApiPropertyOptional({ description: 'Whether the mapping is active' })
  isActive?: boolean;
}

/**
 * Create rate mapping request
 */
export class CreateRateMappingRequest {
  @ApiPropertyOptional({ description: 'Provider ID', format: 'uuid' })
  providerId?: string;

  @ApiPropertyOptional({ description: 'Tenant ID', format: 'uuid' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID', format: 'uuid' })
  hotelId?: string;

  @ApiProperty({ description: 'Internal room ID', format: 'uuid' })
  internalRoomId: string;

  @ApiProperty({ description: 'Internal rate ID', format: 'uuid' })
  internalRateId: string;

  @ApiProperty({ description: 'Internal rate name', example: 'Best Available Rate' })
  internalRateName: string;

  @ApiProperty({ description: 'External rate ID in provider system', example: 'EXT-RATE-456' })
  externalRateId: string;

  @ApiProperty({ description: 'External rate name in provider system', example: 'Standard Rate' })
  externalRateName: string;

  @ApiPropertyOptional({
    description: 'Rate mapping configuration',
    type: () => RateMappingConfiguration
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiPropertyOptional({ description: 'Whether the mapping is active', default: true })
  isActive?: boolean;
}

/**
 * Update rate mapping request
 */
export class UpdateRateMappingRequest {
  @ApiPropertyOptional({ description: 'Internal rate name' })
  internalRateName?: string;

  @ApiPropertyOptional({ description: 'External rate ID in provider system' })
  externalRateId?: string;

  @ApiPropertyOptional({ description: 'External rate name in provider system' })
  externalRateName?: string;

  @ApiPropertyOptional({
    description: 'Rate mapping configuration',
    type: () => RateMappingConfiguration
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiPropertyOptional({ description: 'Whether the mapping is active' })
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
export class DeleteMappingResponse {
  @ApiProperty({ description: 'Success message', example: 'Room mapping deleted successfully' })
  message: string;

  @ApiPropertyOptional({
    description: 'Deletion timestamp (ISO format)',
    example: '2026-02-14T10:30:00Z'
  })
  deletedAt?: string;
}
