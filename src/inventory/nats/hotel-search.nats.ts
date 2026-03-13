/**
 * Hotel Search NATS Contract
 *
 * Pattern: inventory.hotels.search
 *
 * Returns hotels in a chain with availability and lowest price
 * for a given date range. Used for hotel browsing/discovery.
 *
 * Handler: inventory-service
 * Called by: webshop (Go)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  IsArray,
  Min,
} from 'class-validator';
import { NatsResponse } from '../../common';

// ============================================================================
// REQUEST
// ============================================================================

export class SearchHotelsRequest {
  @ApiPropertyOptional({ description: 'Hotel chain ID', example: 'uuid' })
  @IsOptional()
  @IsString()
  chainId?: string;

  @ApiPropertyOptional({ description: 'Province IDs (for agency search)', type: [Number], example: [1, 24] })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  provinceIds?: number[];

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD local time)', example: '2026-03-15' })
  @IsString()
  checkInDate: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD local time)', example: '2026-03-17' })
  @IsString()
  checkOutDate: string;

  @ApiPropertyOptional({ description: 'Number of adults', example: 2, default: 2 })
  @IsOptional()
  @IsInt()
  @Min(1)
  adults?: number;

  @ApiPropertyOptional({ description: 'Number of children', example: 0, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  children?: number;

  @ApiPropertyOptional({ description: 'Filter by province ID', example: 1 })
  @IsOptional()
  @IsInt()
  provinceId?: number;

  @ApiPropertyOptional({ description: 'Filter by minimum star rating (1-5)', example: 4 })
  @IsOptional()
  @IsInt()
  @Min(1)
  stars?: number;

  @ApiPropertyOptional({
    description: 'Sort order',
    enum: ['price', 'stars', 'name'],
    default: 'price',
  })
  @IsOptional()
  @IsEnum(['price', 'stars', 'name'])
  sortBy?: 'price' | 'stars' | 'name';

  @ApiPropertyOptional({ description: 'Page number (1-based)', example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', example: 20, default: 20 })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;
}

// ============================================================================
// RESPONSE
// ============================================================================

export class HotelSearchResultDto {
  @ApiProperty({ description: 'Hotel ID' })
  id: string;

  @ApiProperty({ description: 'Hotel name' })
  name: string;

  @ApiPropertyOptional({ description: 'Hotel description' })
  description?: string;

  @ApiProperty({ description: 'Hotel address' })
  address: string;

  @ApiProperty({ description: 'City' })
  city: string;

  @ApiPropertyOptional({ description: 'Star rating (1-5)' })
  stars?: number;

  @ApiProperty({ description: 'Hotel amenities', type: [String] })
  amenities: string[];

  @ApiProperty({ description: 'Hotel images (from hotel or first room types)', type: [String] })
  images: string[];

  @ApiPropertyOptional({ description: 'Province ID' })
  provinceId?: number;

  @ApiPropertyOptional({ description: 'Province name' })
  provinceName?: string;

  @ApiPropertyOptional({ description: 'Latitude' })
  latitude?: number;

  @ApiPropertyOptional({ description: 'Longitude' })
  longitude?: number;

  @ApiProperty({ description: 'Check-in time (HH:mm)', example: '15:00' })
  checkInTime: string;

  @ApiProperty({ description: 'Check-out time (HH:mm)', example: '11:00' })
  checkOutTime: string;

  @ApiProperty({ description: 'Currency code (ISO 4217)', example: 'VND' })
  currency: string;

  @ApiProperty({ description: 'Has at least 1 available room type' })
  available: boolean;

  @ApiProperty({ description: 'Total number of room types' })
  totalRoomTypes: number;

  @ApiProperty({ description: 'Number of room types with availability' })
  availableRoomTypes: number;

  @ApiProperty({
    description: 'Lowest total price across all rate plans (null if no availability)',
    nullable: true,
    example: 2200000,
  })
  lowestPrice: number | null;

  @ApiProperty({
    description: 'Lowest price per night (null if no availability)',
    nullable: true,
    example: 1100000,
  })
  lowestPricePerNight: number | null;

  @ApiProperty({
    description: 'Name of room type with lowest price (null if no availability)',
    nullable: true,
    example: 'Deluxe Room',
  })
  lowestPriceRoomTypeName: string | null;

  @ApiProperty({ description: 'Number of nights for the search dates', example: 2 })
  numberOfNights: number;

  @ApiPropertyOptional({ description: 'Tenant ID (owner of this hotel)' })
  tenantId?: string;
}

export class SearchHotelsResponse {
  @ApiProperty({ description: 'List of hotels with availability and pricing', type: [HotelSearchResultDto] })
  hotels: HotelSearchResultDto[];

  @ApiProperty({ description: 'Total number of hotels matching filters', example: 5 })
  total: number;

  @ApiProperty({ description: 'Current page (1-based)', example: 1 })
  page: number;

  @ApiProperty({ description: 'Items per page', example: 20 })
  limit: number;
}

export type SearchHotelsNatsResponse = NatsResponse<SearchHotelsResponse>;
