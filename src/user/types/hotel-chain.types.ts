/**
 * Hotel Chain Types
 */

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsArray, IsNumber } from 'class-validator';

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
 * Hotel Chain Entity
 */
export interface HotelChain {
  id: string;
  name: string;
  brand?: string;
  type: ChainType;
  description?: string;
  headquartersCountry?: string;
  headquartersCity?: string;
  headquartersAddress?: string;
  websiteUrl?: string;
  logoUrl?: string;
  status: HotelChainStatus;
  operatingRegions?: string[];
  targetMarkets?: string[];
  amenities?: string[];
  loyaltyProgram?: string;
  totalProperties?: number;
  totalRooms?: number;
  createdAt: Date;
  updatedAt: Date;
}
