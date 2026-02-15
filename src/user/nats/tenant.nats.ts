/**
 * Tenant NATS Contracts
 *
 * Patterns:
 * - tenants.findById
 *
 * Handler: user-service (TenantsNatsController)
 * Called by: api-gateway (TenantGuard, HotelChainsService)
 */

import { NatsResponse } from '../../common';
import { TenantType } from '../types/tenant.types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsEmail, IsArray, IsObject } from 'class-validator';

/**
 * Hotel Operation Settings
 */
export interface HotelOperationSettings {
  checkInTime?: string;
  checkOutTime?: string;
  timezone?: string;
  currency?: string;
  defaultCleaningDuration?: number;
  gracePeriodMinutes?: number;
  autoAssignRooms?: boolean;
  hourlyBooking?: boolean;
  preferBookingMode?: 'hourly' | 'daily';
  businessHours?: {
    start: string;
    end: string;
  };
}

/**
 * Tenant Data
 */
export interface Tenant {
  id: string;
  name: string;
  slug: string;
  type: TenantType;
  parentId: string | null;
  isActive: boolean;
  description: string | null;
  hotels: string[] | null;
  chainId?: string;
  address: string | null;
  city: string | null;
  country: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  operationSettings: HotelOperationSettings | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Find Tenant By ID Request
 * Pattern: tenants.findById
 *
 * Find a single tenant by ID
 */
export interface FindTenantByIdNatsRequest {
  id: string;
}

export type FindTenantByIdNatsResponse = NatsResponse<Tenant>;

/**
 * Find Tenant Request (alias for FindTenantByIdNatsRequest)
 * Pattern: tenants.findById
 */
export interface FindTenantRequestDto {
  id: string;
}

// ============= Additional Request DTOs =============

/**
 * Get Tenant Settings Request
 * Pattern: tenants.settings.get
 */
export interface GetTenantSettingsRequestDto {
  tenantId?: string;
  hotelId: string;
}

/**
 * Update Tenant Settings Request
 * Pattern: tenants.settings.update
 */
export interface UpdateTenantSettingsRequestDto {
  hotelId: string;
  settings: Partial<HotelOperationSettings>;
}

/**
 * Update Hotel Settings Payload (Hotel-focused settings update)
 * Pattern: tenants.settings.update
 */
export interface UpdateHotelSettingsPayload {
  hotelId: string;
  settings: {
    checkInTime?: string;
    checkOutTime?: string;
    timezone?: string;
    currency?: string;
    defaultCleaningDuration?: number;
    gracePeriodMinutes?: number;
    autoAssignRooms?: boolean;
    businessHours?: {
      start: string;
      end: string;
    };
  };
}

/**
 * Update Settings Payload
 * Pattern: tenants.updateSettings
 */
export interface UpdateSettingsPayload {
  id: string;
  settings: object;
}

/**
 * Get Settings Payload
 * Pattern: tenants.getSettings
 */
export interface GetSettingsPayload {
  id: string;
}

/**
 * Find All Tenants Request
 * Pattern: tenants.findAll
 */
export interface FindAllTenantsRequestDto {
  filters?: {
    type?: string;
  };
}

/**
 * Find Tenant By Slug Request
 * Pattern: tenant.findBySlug
 */
export interface FindTenantBySlugNatsRequest {
  slug: string;
}

export type FindTenantBySlugNatsResponse = NatsResponse<Tenant>;

/**
 * Create Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.create
 * Used by: REST API (@ApiBody) and NATS messages
 */
export class CreateTenantRequestDto {
  @ApiProperty({
    description: 'Tenant name',
    example: 'Grand Hotel Chain'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Tenant type',
    enum: TenantType,
    example: TenantType.INDIVIDUAL_HOTEL
  })
  @IsEnum(TenantType)
  type: TenantType;

  @ApiPropertyOptional({
    description: 'URL-friendly slug',
    example: 'grand-hotel-chain'
  })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiPropertyOptional({
    description: 'Tenant description',
    example: 'Luxury hotel chain'
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Parent tenant ID (for sub-tenants)',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsOptional()
  @IsString()
  parentId?: string;

  @ApiPropertyOptional({
    description: 'List of hotel IDs (for chain type)',
    type: [String],
    example: ['hotel-id-1', 'hotel-id-2']
  })
  @IsOptional()
  @IsArray()
  hotels?: string[];

  @ApiPropertyOptional({
    description: 'Chain ID (for individual hotels)',
    example: 'chain-id-123'
  })
  @IsOptional()
  @IsString()
  chainId?: string;

  @ApiPropertyOptional({
    description: 'Physical address',
    example: '123 Main Street'
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'City',
    example: 'Paris'
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({
    description: 'Country',
    example: 'France'
  })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({
    description: 'Contact email',
    example: 'contact@hotel.com'
  })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({
    description: 'Contact phone',
    example: '+33123456789'
  })
  @IsOptional()
  @IsString()
  contactPhone?: string;

  @ApiPropertyOptional({
    description: 'Hotel operation settings',
    type: () => HotelOperationSettingsDto
  })
  @IsOptional()
  @IsObject()
  operationSettings?: HotelOperationSettings;
}

/**
 * Update Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.update
 * Used by: REST API (@ApiBody) and NATS messages
 */
export class UpdateTenantRequestDto {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsString()
  id: string;

  @ApiPropertyOptional({
    description: 'Tenant name',
    example: 'Updated Hotel Name'
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Tenant description',
    example: 'Updated description'
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Contact email',
    example: 'contact@hotel.com'
  })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({
    description: 'Contact phone',
    example: '+33123456789'
  })
  @IsOptional()
  @IsString()
  contactPhone?: string;

  @ApiPropertyOptional({
    description: 'Physical address',
    example: '123 Main Street'
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'City',
    example: 'Paris'
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({
    description: 'Country',
    example: 'France'
  })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({
    description: 'Hotel operation settings',
    type: () => HotelOperationSettingsDto
  })
  @IsOptional()
  @IsObject()
  operationSettings?: Partial<HotelOperationSettings>;
}

/**
 * Delete Tenant Request (Class-based for both REST and NATS)
 * Pattern: tenants.delete
 * Used by: REST API and NATS messages
 */
export class DeleteTenantRequestDto {
  @ApiProperty({
    description: 'Tenant ID to delete',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsString()
  id: string;
}

// ============= Response DTOs =============

/**
 * Hotel Operation Settings DTO (Class-based for Swagger)
 */
export class HotelOperationSettingsDto {
  @ApiPropertyOptional({ description: 'Default check-in time', example: '14:00' })
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Default check-out time', example: '12:00' })
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Hotel timezone', example: 'Asia/Ho_Chi_Minh' })
  timezone?: string;

  @ApiPropertyOptional({ description: 'Hotel currency', example: 'USD' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Default cleaning duration in minutes', example: 60 })
  defaultCleaningDuration?: number;

  @ApiPropertyOptional({ description: 'Grace period for late check-out in minutes', example: 15 })
  gracePeriodMinutes?: number;

  @ApiPropertyOptional({ description: 'Auto assign rooms on booking confirmation', example: false })
  autoAssignRooms?: boolean;

  @ApiPropertyOptional({ description: 'Enable hourly booking', example: false })
  hourlyBooking?: boolean;

  @ApiPropertyOptional({ description: 'Preferred booking mode', enum: ['hourly', 'daily'] })
  preferBookingMode?: 'hourly' | 'daily';

  @ApiPropertyOptional({
    description: 'Business hours',
    example: { start: '06:00', end: '23:00' }
  })
  businessHours?: {
    start: string;
    end: string;
  };
}

/**
 * Tenant Response DTO (Class-based for Swagger and type safety)
 */
export class TenantResponseDto {
  @ApiProperty({ description: 'Tenant ID' })
  id: string;

  @ApiProperty({ description: 'Tenant name' })
  name: string;

  @ApiProperty({ description: 'URL-friendly slug' })
  slug: string;

  @ApiProperty({ description: 'Tenant type', enum: TenantType })
  type: TenantType;

  @ApiPropertyOptional({ description: 'Parent tenant ID' })
  parentId: string | null;

  @ApiProperty({ description: 'Is tenant active' })
  isActive: boolean;

  @ApiPropertyOptional({ description: 'Tenant description' })
  description: string | null;

  @ApiPropertyOptional({ description: 'List of hotel IDs (for chain type)', type: [String] })
  hotels: string[] | null;

  @ApiPropertyOptional({ description: 'Chain ID (for individual hotels)' })
  chainId?: string;

  @ApiPropertyOptional({ description: 'Physical address' })
  address: string | null;

  @ApiPropertyOptional({ description: 'City' })
  city: string | null;

  @ApiPropertyOptional({ description: 'Country' })
  country: string | null;

  @ApiPropertyOptional({ description: 'Contact email' })
  contactEmail: string | null;

  @ApiPropertyOptional({ description: 'Contact phone' })
  contactPhone: string | null;

  @ApiPropertyOptional({ description: 'Hotel operation settings' })
  operationSettings: HotelOperationSettingsDto | null;

  @ApiProperty({ description: 'Created at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated at' })
  updatedAt: Date;
}
