/**
 * Hotel Chains Type Definitions
 *
 * Unified contracts for both NATS messaging and REST API
 * Converted to classes with @ApiProperty for Swagger documentation
 *
 * Note: Re-exports types from other modules to avoid duplication
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsObject,
  IsNumber,
  IsUUID,
  IsEmail,
  Min,
  Matches,
} from 'class-validator';

// Import enums for validation decorators
import { HotelChainStatus, ChainType } from '../../user/types/hotel-chain.types';

// Re-export existing types from other modules to avoid duplication
export { HotelChainStatus, ChainType, UpdateHotelChainDto } from '../../user/types/hotel-chain.types';
export { HotelDto, HotelListResponseDto } from '../../inventory/nats/hotel.nats';

/**
 * Create hotel chain DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export class CreateHotelChainDto {
  @ApiProperty({ description: 'Chain name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'URL-friendly slug (lowercase, hyphens)', example: 'my-chain' })
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be lowercase alphanumeric with hyphens' })
  slug?: string;

  @ApiProperty({ description: 'Chain brand' })
  @IsString()
  brand: string;

  @ApiProperty({ description: 'Chain type', enum: ChainType })
  @IsEnum(ChainType)
  type: ChainType;

  @ApiPropertyOptional({ description: 'Chain description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Headquarters country' })
  @IsString()
  headquartersCountry: string;

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

  @ApiProperty({ description: 'Chain status', enum: HotelChainStatus })
  @IsEnum(HotelChainStatus)
  status: HotelChainStatus;

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
}

/**
 * Hotel chain response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export class HotelChainResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  brandName: string;

  @ApiPropertyOptional({ description: 'Brand name (same as brandName, for compatibility)' })
  brand?: string;

  @ApiPropertyOptional({ description: 'Chain type', enum: ChainType })
  type?: ChainType;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  headquartersCountry?: string;

  @ApiPropertyOptional()
  headquartersCity?: string;

  @ApiPropertyOptional()
  headquartersAddress?: string;

  @ApiPropertyOptional({ description: 'Website URL' })
  websiteUrl?: string;

  @ApiPropertyOptional({ description: 'Logo URL' })
  logoUrl?: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ enum: HotelChainStatus })
  status: HotelChainStatus;

  @ApiProperty({ type: [String] })
  regions: string[];

  @ApiProperty({ type: [String] })
  operatingRegions: string[];

  @ApiProperty({ type: [String] })
  marketSegments: string[];

  @ApiProperty({ type: [String] })
  targetMarkets: string[];

  @ApiProperty({ type: [String] })
  amenities: string[];

  @ApiPropertyOptional({ description: 'Loyalty program name' })
  loyaltyProgram?: string;

  @ApiPropertyOptional()
  totalProperties?: number;

  @ApiPropertyOptional()
  totalRooms?: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiPropertyOptional()
  hotelCount?: number;

  @ApiProperty({ type: [String] })
  countries: string[];

  @ApiProperty({ type: [String] })
  cities: string[];
}

/**
 * Hotel chains list response DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export class HotelChainListResponseDto {
  @ApiProperty({ type: [HotelChainResponseDto] })
  data: HotelChainResponseDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;
}

/**
 * Brand standards DTO
 * (Unique to tenants - used for setting chain-wide standards)
 */
export class BrandStandardsDto {
  @ApiPropertyOptional({ description: 'Service standards' })
  @IsOptional()
  @IsObject()
  serviceStandards?: {
    checkInTime?: string;
    checkOutTime?: string;
    housekeepingSchedule?: string;
    guestServiceRequirements?: string[];
    qualityStandards?: string[];
  };

  @ApiPropertyOptional({ description: 'Design standards' })
  @IsOptional()
  @IsObject()
  designStandards?: {
    colorScheme?: string[];
    furniture?: string[];
    amenities?: string[];
    branding?: Record<string, any>;
  };

  @ApiPropertyOptional({ description: 'Operational standards' })
  @IsOptional()
  @IsObject()
  operationalStandards?: {
    staffing?: Record<string, any>;
    training?: string[];
    procedures?: Record<string, any>;
    compliance?: string[];
  };

  @ApiPropertyOptional({ description: 'Technology standards' })
  @IsOptional()
  @IsObject()
  technologyStandards?: {
    pmsRequirements?: string[];
    wifiStandards?: Record<string, any>;
    digitalServices?: string[];
    integrations?: string[];
  };

  @ApiPropertyOptional({ description: 'Food and beverage standards' })
  @IsOptional()
  @IsObject()
  foodBeverageStandards?: {
    menuRequirements?: string[];
    serviceStyle?: string;
    qualityStandards?: string[];
    suppliers?: string[];
  };
}

/**
 * Create hotel DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export class CreateHotelDto {
  @ApiProperty({ description: 'Hotel name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Hotel description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Hotel address' })
  @IsString()
  address: string;

  @ApiProperty({ description: 'Hotel city' })
  @IsString()
  city: string;

  @ApiProperty({ description: 'Hotel country' })
  @IsString()
  country: string;

  @ApiProperty({ description: 'Hotel phone number' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Hotel email address' })
  @IsString()
  email: string;

  @ApiPropertyOptional({ description: 'Hotel website' })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiProperty({ description: 'Hotel star rating (1-5)' })
  @IsNumber()
  @Min(1)
  stars: number;

  @ApiProperty({ description: 'Hotel status' })
  @IsString()
  status: string;

  @ApiPropertyOptional({ description: 'Hotel amenities' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiProperty({ description: 'Check-in time (HH:mm format)' })
  @IsString()
  checkInTime: string;

  @ApiProperty({ description: 'Check-out time (HH:mm format)' })
  @IsString()
  checkOutTime: string;

  @ApiPropertyOptional({ description: 'Hotel timezone' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ description: 'Hotel currency code' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel chain ID' })
  @IsOptional()
  @IsString()
  chainId?: string;

  @ApiPropertyOptional({ description: 'Total room count' })
  @IsOptional()
  @IsNumber()
  roomCount?: number;

  @ApiPropertyOptional({ description: 'Hotel analytics data' })
  @IsOptional()
  @IsObject()
  analytics?: Record<string, any>;
}

/**
 * Update hotel DTO
 * (Unique to tenants - not duplicated elsewhere)
 */
export class UpdateHotelDto {
  @ApiPropertyOptional({ description: 'Hotel ID (required for NATS, optional for REST)' })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiPropertyOptional({ description: 'Hotel name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Hotel chain ID' })
  @IsOptional()
  @IsUUID()
  chainId?: string;

  @ApiPropertyOptional({ description: 'Hotel description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Hotel address' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'Hotel city' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'Hotel country' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Hotel phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Hotel email address' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Hotel website' })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiPropertyOptional({ description: 'Hotel star rating (1-5)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  stars?: number;

  @ApiPropertyOptional({ description: 'Hotel status' })
  @IsOptional()
  @IsEnum(['ACTIVE', 'INACTIVE', 'MAINTENANCE'])
  status?: string;

  @ApiPropertyOptional({ description: 'Hotel amenities' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Check-in time (HH:mm format)' })
  @IsOptional()
  @IsString()
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Check-out time (HH:mm format)' })
  @IsOptional()
  @IsString()
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Hotel timezone' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ description: 'Hotel currency code' })
  @IsOptional()
  @IsString()
  currency?: string;
}
