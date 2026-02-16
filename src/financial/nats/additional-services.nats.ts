/**
 * Additional Services NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.service.*
 * Handler: financial-service
 * Database Entity: AdditionalService (additional_services table)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsUUID, IsDateString, Min } from 'class-validator';
import { NatsResponse } from '../../common';

/**
 * Financial Service Type Enum
 */
export enum FinancialServiceType {
  ONE_TIME = 'ONE_TIME',
  RECURRING = 'RECURRING',
  ON_DEMAND = 'ON_DEMAND'
}

/**
 * Pricing Type Enum
 */
export enum PricingType {
  FIXED = 'FIXED',
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
  PACKAGE = 'PACKAGE'
}

/**
 * Financial Service Category Enum
 */
export enum FinancialServiceCategory {
  ROOM_SERVICE = 'ROOM_SERVICE',
  SPA_WELLNESS = 'SPA_WELLNESS',
  TRANSPORTATION = 'TRANSPORTATION',
  FOOD_BEVERAGE = 'FOOD_BEVERAGE',
  LAUNDRY_CLEANING = 'LAUNDRY_CLEANING',
  BUSINESS_SERVICES = 'BUSINESS_SERVICES',
  ENTERTAINMENT = 'ENTERTAINMENT',
  CONCIERGE = 'CONCIERGE',
  PET_SERVICES = 'PET_SERVICES',
  OTHER = 'OTHER'
}

/**
 * Additional Service Response DTO
 * Used in both NATS responses and REST API responses
 * Matches AdditionalService entity structure
 */
export class AdditionalServiceResponseDto {
  @ApiProperty({ description: 'Service ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Service type', enum: FinancialServiceType })
  @IsEnum(FinancialServiceType)
  serviceType: string;

  @ApiProperty({ description: 'Service category', enum: FinancialServiceCategory })
  @IsEnum(FinancialServiceCategory)
  category: string;

  @ApiProperty({ description: 'Base price (before tax)' })
  @IsNumber()
  @Min(0)
  basePrice: number;

  @ApiProperty({ description: 'Tax rate (decimal, e.g., 0.1 for 10%)' })
  @IsNumber()
  @Min(0)
  taxRate: number;

  @ApiProperty({ description: 'Final price (including tax)' })
  @IsNumber()
  @Min(0)
  finalPrice: number;

  @ApiProperty({ description: 'Pricing type', enum: PricingType })
  @IsEnum(PricingType)
  pricingType: string;

  @ApiProperty({ description: 'Whether booking is required' })
  @IsBoolean()
  requiresBooking: boolean;

  @ApiProperty({ description: 'Whether service is active' })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Whether service is currently available' })
  @IsBoolean()
  isAvailable: boolean;

  @ApiPropertyOptional({ description: 'Maximum quantity per booking' })
  @IsOptional()
  @IsNumber()
  maxQuantity?: number | null;

  @ApiPropertyOptional({ description: 'Available from date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableFrom?: string | null;

  @ApiPropertyOptional({ description: 'Available to date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableTo?: string | null;

  @ApiProperty({ description: 'Created at timestamp' })
  @IsDateString()
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  @IsDateString()
  updatedAt: string;
}

/**
 * Create Additional Service DTO
 */
export class CreateAdditionalServiceDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Service type', enum: FinancialServiceType })
  @IsEnum(FinancialServiceType)
  serviceType: string;

  @ApiProperty({ description: 'Service category', enum: FinancialServiceCategory })
  @IsEnum(FinancialServiceCategory)
  category: string;

  @ApiProperty({ description: 'Base price (before tax)' })
  @IsNumber()
  @Min(0)
  basePrice: number;

  @ApiPropertyOptional({ description: 'Tax rate (decimal)', default: 0.1 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  taxRate?: number;

  @ApiProperty({ description: 'Pricing type', enum: PricingType })
  @IsEnum(PricingType)
  pricingType: string;

  @ApiPropertyOptional({ description: 'Whether booking is required', default: false })
  @IsOptional()
  @IsBoolean()
  requiresBooking?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is available', default: true })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Maximum quantity per booking' })
  @IsOptional()
  @IsNumber()
  maxQuantity?: number;

  @ApiPropertyOptional({ description: 'Available from date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableFrom?: string;

  @ApiPropertyOptional({ description: 'Available to date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableTo?: string;
}

/**
 * Update Additional Service DTO
 */
export class UpdateAdditionalServiceDto {
  @ApiPropertyOptional({ description: 'Service name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Service type', enum: FinancialServiceType })
  @IsOptional()
  @IsEnum(FinancialServiceType)
  serviceType?: string;

  @ApiPropertyOptional({ description: 'Service category', enum: FinancialServiceCategory })
  @IsOptional()
  @IsEnum(FinancialServiceCategory)
  category?: string;

  @ApiPropertyOptional({ description: 'Base price (before tax)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  basePrice?: number;

  @ApiPropertyOptional({ description: 'Tax rate (decimal)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  taxRate?: number;

  @ApiPropertyOptional({ description: 'Pricing type', enum: PricingType })
  @IsOptional()
  @IsEnum(PricingType)
  pricingType?: string;

  @ApiPropertyOptional({ description: 'Whether booking is required' })
  @IsOptional()
  @IsBoolean()
  requiresBooking?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is available' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Maximum quantity per booking' })
  @IsOptional()
  @IsNumber()
  maxQuantity?: number;

  @ApiPropertyOptional({ description: 'Available from date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableFrom?: string;

  @ApiPropertyOptional({ description: 'Available to date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableTo?: string;
}

/**
 * Service List Response DTO
 */
export class ServiceListResponseDto {
  @ApiProperty({ description: 'Array of services', type: [AdditionalServiceResponseDto] })
  data: AdditionalServiceResponseDto[];

  @ApiProperty({ description: 'Total number of services' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Find All Additional Services Request DTO
 */
export class FindAllAdditionalServicesRequestDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by category', enum: FinancialServiceCategory })
  @IsOptional()
  @IsEnum(FinancialServiceCategory)
  category?: string;

  @ApiPropertyOptional({ description: 'Filter by active status' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', default: 10 })
  @IsOptional()
  @IsNumber()
  limit?: number;
}

/**
 * Find One Additional Service Request DTO
 */
export class FindOneAdditionalServiceRequestDto {
  @ApiProperty({ description: 'Service ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * Delete Additional Service Request DTO
 */
export class DeleteAdditionalServiceRequestDto {
  @ApiProperty({ description: 'Service ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * NATS Response Types
 */
export type FindAllAdditionalServicesNatsResponse = NatsResponse<ServiceListResponseDto>;
export type FindOneAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type CreateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type UpdateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type DeleteAdditionalServiceNatsResponse = NatsResponse<{ message: string; serviceId: string }>;
