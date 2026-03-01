/**
 * Hotel Chain Types
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsArray, IsNumber, Matches } from 'class-validator';

/**
 * Hotel Chain Type Enum
 */
export enum ChainType {
  LUXURY = 'LUXURY',
  MIDSCALE = 'MIDSCALE',
  ECONOMY = 'ECONOMY',
  BOUTIQUE = 'BOUTIQUE',
  EXTENDED_STAY = 'EXTENDED_STAY',
  RESORT = 'RESORT',
}

/**
 * Hotel Chain Status Enum
 */
export enum HotelChainStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
}

/**
 * Update Hotel Chain DTO
 * All fields are optional for partial updates
 */
export class UpdateHotelChainDto {
  @ApiPropertyOptional({ description: 'Chain name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'my-chain' })
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' })
  slug?: string;

  @ApiPropertyOptional({ description: 'Chain brand' })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiPropertyOptional({ description: 'Chain type', enum: ChainType })
  @IsOptional()
  @IsEnum(ChainType)
  type?: ChainType;

  @ApiPropertyOptional({ description: 'Chain description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Headquarters country' })
  @IsOptional()
  @IsString()
  headquartersCountry?: string;

  @ApiPropertyOptional({ description: 'Headquarters city' })
  @IsOptional()
  @IsString()
  headquartersCity?: string;

  @ApiPropertyOptional({ description: 'Headquarters address' })
  @IsOptional()
  @IsString()
  headquartersAddress?: string;

  @ApiPropertyOptional({ description: 'Chain website URL' })
  @IsOptional()
  @IsString()
  websiteUrl?: string;

  @ApiPropertyOptional({ description: 'Chain logo URL' })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiPropertyOptional({ description: 'Chain status', enum: HotelChainStatus })
  @IsOptional()
  @IsEnum(HotelChainStatus)
  status?: HotelChainStatus;

  @ApiPropertyOptional({ description: 'Operating regions' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  operatingRegions?: string[];

  @ApiPropertyOptional({ description: 'Target market segments' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetMarkets?: string[];

  @ApiPropertyOptional({ description: 'Chain amenities and services' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Loyalty program name' })
  @IsOptional()
  @IsString()
  loyaltyProgram?: string;

  @ApiPropertyOptional({ description: 'Total properties' })
  @IsOptional()
  @IsNumber()
  totalProperties?: number;

  @ApiPropertyOptional({ description: 'Total rooms' })
  @IsOptional()
  @IsNumber()
  totalRooms?: number;
}

/**
 * Hotel Chain response class (used by REST handlers and Swagger)
 */
export class HotelChain {
  @ApiProperty({ description: 'Unique identifier' })
  id: string;

  @ApiProperty({ description: 'Chain name' })
  name: string;

  @ApiPropertyOptional({ description: 'URL-friendly slug', example: 'my-chain' })
  slug?: string;

  @ApiPropertyOptional({ description: 'Chain brand' })
  brand?: string;

  @ApiPropertyOptional({ description: 'Chain type', enum: ChainType })
  type?: ChainType;

  @ApiPropertyOptional({ description: 'Chain description' })
  description?: string;

  @ApiPropertyOptional({ description: 'Headquarters country' })
  headquartersCountry?: string;

  @ApiPropertyOptional({ description: 'Headquarters city' })
  headquartersCity?: string;

  @ApiPropertyOptional({ description: 'Headquarters address' })
  headquartersAddress?: string;

  @ApiPropertyOptional({ description: 'Website URL' })
  websiteUrl?: string;

  @ApiPropertyOptional({ description: 'Logo URL' })
  logoUrl?: string;

  @ApiProperty({ description: 'Chain status', enum: HotelChainStatus })
  status: HotelChainStatus;

  @ApiPropertyOptional({ description: 'Operating regions', type: [String] })
  operatingRegions?: string[];

  @ApiPropertyOptional({ description: 'Target markets', type: [String] })
  targetMarkets?: string[];

  @ApiPropertyOptional({ description: 'Amenities', type: [String] })
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Loyalty program name' })
  loyaltyProgram?: string;

  @ApiPropertyOptional({ description: 'Total properties' })
  totalProperties?: number;

  @ApiPropertyOptional({ description: 'Total rooms' })
  totalRooms?: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}
