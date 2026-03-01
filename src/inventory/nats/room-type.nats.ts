/**
 * Room Type NATS Contracts
 *
 * Patterns:
 * - inventory.roomTypes.findAll
 * - inventory.roomTypes.findOne
 * - inventory.roomTypes.create
 * - inventory.roomTypes.update
 * - inventory.roomTypes.delete
 * - inventory.room-types.get-by-ids
 *
 * Handler: inventory-service
 * Called by: api-gateway, pricing-service
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, IsOptional, IsArray, IsBoolean, Min } from 'class-validator';
import { NatsResponse } from '../../common';
import { RoomType } from '../types';

/**
 * Find All Room Types Request
 * Pattern: inventory.roomTypes.findAll
 */
export interface FindAllRoomTypesRequest {
  tenantId: string;
  hotelId?: string;
  page?: number;
  limit?: number;
}

export interface FindAllRoomTypesResponse {
  data: RoomType[];
  total: number;
  page: number;
  limit: number;
}

export type FindAllRoomTypesNatsResponse = NatsResponse<FindAllRoomTypesResponse>;

/**
 * Find One Room Type Request
 * Pattern: inventory.roomTypes.findOne
 */
export interface FindOneRoomTypeRequest {
  id: string;
  tenantId: string;
}

export type FindOneRoomTypeResponse = RoomType | null;
export type FindOneRoomTypeNatsResponse = NatsResponse<FindOneRoomTypeResponse>;

/**
 * Create Room Type Request
 * Pattern: inventory.roomTypes.create
 */
export class CreateRoomTypeRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room type name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Room type description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Base rate per night' })
  @IsNumber()
  @Min(0)
  baseRate: number;

  @ApiPropertyOptional({ description: 'Maximum capacity' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  capacity?: number;

  @ApiPropertyOptional({ description: 'Number of beds in this room type (default 1)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  numberOfBeds?: number;

  @ApiPropertyOptional({ description: 'Maximum occupancy (alias for capacity)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxOccupancy?: number;

  @ApiPropertyOptional({ description: 'Standard amenities' })
  @IsOptional()
  @IsArray()
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Room feature tags (e.g., ["Non-smoking", "City View"])' })
  @IsOptional()
  @IsArray()
  features?: string[];

  @ApiPropertyOptional({ description: 'Room size in square meters' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  size?: number;

  @ApiPropertyOptional({ description: 'Room category (e.g., "Premium", "Standard")' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Room type images/photos' })
  @IsOptional()
  @IsArray()
  images?: string[];
}

export type CreateRoomTypeResponse = RoomType;
export type CreateRoomTypeNatsResponse = NatsResponse<CreateRoomTypeResponse>;

/**
 * Update Room Type Request
 * Pattern: inventory.roomTypes.update
 */
export class UpdateRoomTypeRequest {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Room type name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Room type description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Base rate per night' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  baseRate?: number;

  @ApiPropertyOptional({ description: 'Maximum capacity' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  capacity?: number;

  @ApiPropertyOptional({ description: 'Number of beds in this room type (default 1)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  numberOfBeds?: number;

  @ApiPropertyOptional({ description: 'Maximum occupancy (alias for capacity)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxOccupancy?: number;

  @ApiPropertyOptional({ description: 'Standard amenities' })
  @IsOptional()
  @IsArray()
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Room feature tags (e.g., ["Non-smoking", "City View"])' })
  @IsOptional()
  @IsArray()
  features?: string[];

  @ApiPropertyOptional({ description: 'Room size in square meters' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  size?: number;

  @ApiPropertyOptional({ description: 'Room category (e.g., "Premium", "Standard")' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ description: 'Room type images/photos' })
  @IsOptional()
  @IsArray()
  images?: string[];

  @ApiPropertyOptional({ description: 'Whether the room type is active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export type UpdateRoomTypeResponse = RoomType | null;
export type UpdateRoomTypeNatsResponse = NatsResponse<UpdateRoomTypeResponse>;

/**
 * Delete Room Type Request
 * Pattern: inventory.roomTypes.delete
 */
export interface DeleteRoomTypeRequest {
  id: string;
  tenantId: string;
}

export interface DeleteRoomTypeResponse {
  message: string;
}

export type DeleteRoomTypeNatsResponse = NatsResponse<DeleteRoomTypeResponse>;

/**
 * Add Image to Room Type Request
 * Pattern: inventory.room-types.images.add
 */
export class AddRoomTypeImageRequest {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Image URL to add' })
  @IsString()
  imageUrl: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;
}

export interface AddRoomTypeImageResponse {
  images: string[];
}

export type AddRoomTypeImageNatsResponse = NatsResponse<AddRoomTypeImageResponse>;

/**
 * Get Room Types By IDs Request
 * Pattern: inventory.room-types.get-by-ids
 */
export interface GetRoomTypesByIdsRequest {
  tenantId: string;
  hotelId: string;
  roomTypeIds: string[];
}

export type GetRoomTypesByIdsResponse = RoomType[];
export type GetRoomTypesByIdsNatsResponse = NatsResponse<GetRoomTypesByIdsResponse>;
