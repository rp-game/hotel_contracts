/**
 * Amenities NATS Contracts
 * Patterns: housekeeping.amenities.*
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

// Note: Dates are strings because they're serialized over NATS
export class Amenity {
  @ApiProperty({ description: 'Amenity ID' })
  id!: string;

  @ApiProperty({ description: 'Amenity name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Amenity description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Amenity category' })
  category?: string;

  @ApiPropertyOptional({ description: 'Amenity cost' })
  cost?: number;

  @ApiPropertyOptional({ description: 'Estimated time in minutes' })
  estimatedTime?: number;

  @ApiProperty({ description: 'Whether amenity is available' })
  isAvailable!: boolean;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string | Date;  // Accept both for compatibility during conversion

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string | Date;  // Accept both for compatibility during conversion
}

// CREATE
export interface CreateAmenityNatsRequest {
  name: string;
  description?: string;
  category?: string;
  cost?: number;
  estimatedTime?: number;
  isAvailable?: boolean;
  tenantId: string;
  hotelId: string;
}
export type CreateAmenityNatsResponse = NatsResponse<Amenity>;

// FIND-ALL (paginated)
export interface FindAllAmenitiesNatsRequest {
  tenantId: string;
  hotelId: string;
  category?: string;
  page?: number;
  limit?: number;
}
export class AmenitiesListData {
  @ApiProperty({ type: [Amenity], description: 'List of amenities' })
  data!: Amenity[];

  @ApiProperty({ description: 'Total number of amenities' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit!: number;
}
export type FindAllAmenitiesNatsResponse = NatsResponse<AmenitiesListData>;

// FIND-ONE
export interface FindOneAmenityNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type FindOneAmenityNatsResponse = NatsResponse<Amenity>;

// UPDATE
export interface UpdateAmenityNatsRequest {
  id: string;
  updateAmenityDto: {
    name?: string;
    description?: string;
    category?: string;
    cost?: number;
    estimatedTime?: number;
    isAvailable?: boolean;
  };
  tenantId: string;
  hotelId: string;
}
export type UpdateAmenityNatsResponse = NatsResponse<Amenity>;

// REMOVE
export interface RemoveAmenityNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type RemoveAmenityNatsResponse = NatsResponse<null>;
