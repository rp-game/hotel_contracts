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
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsUUID, IsDateString, IsArray, Min, Max } from 'class-validator';
import { NatsResponse } from '../../common';
import { FinancialServiceStatsResponseDto, ServiceBookingResponseDto } from './service-bookings.nats';

/**
 * Financial Service Type Enum
 * Represents actual hotel service types
 */
export enum FinancialServiceType {
  SPA = 'SPA',
  RESTAURANT = 'RESTAURANT',
  LAUNDRY = 'LAUNDRY',
  PARKING = 'PARKING',
  TRANSPORT = 'TRANSPORT',
  CONFERENCE = 'CONFERENCE',
  ENTERTAINMENT = 'ENTERTAINMENT',
  INTERNET = 'INTERNET',
  PHONE = 'PHONE',
  MINIBAR = 'MINIBAR',
  OTHER = 'OTHER'
}

/**
 * Pricing Type Enum
 */
export enum PricingType {
  FIXED = 'FIXED',
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
  PER_PERSON = 'PER_PERSON',
  VARIABLE = 'VARIABLE'
}

/**
 * Financial Service Category Enum
 * Represents hotel service categories
 */
export enum FinancialServiceCategory {
  ROOM_SERVICE = 'ROOM_SERVICE',
  FACILITY = 'FACILITY',
  AMENITY = 'AMENITY',
  EXTERNAL = 'EXTERNAL'
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
 * All fields use camelCase (API convention)
 */
export class CreateAdditionalServiceDto {
  @ApiProperty({ description: 'Service name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Service code (unique identifier)' })
  @IsString()
  code: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Service type', enum: FinancialServiceType })
  @IsEnum(FinancialServiceType)
  serviceType: FinancialServiceType;

  @ApiProperty({ description: 'Service category', enum: FinancialServiceCategory })
  @IsEnum(FinancialServiceCategory)
  category: FinancialServiceCategory;

  @ApiProperty({ description: 'Pricing type', enum: PricingType })
  @IsEnum(PricingType)
  pricingType: PricingType;

  @ApiProperty({ description: 'Base price (before tax)' })
  @IsNumber()
  @Min(0)
  basePrice: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Tax rate (0-100)', default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  taxRate?: number;

  @ApiPropertyOptional({ description: 'Whether service is taxable', default: true })
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is available', default: true })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Whether booking is required', default: false })
  @IsOptional()
  @IsBoolean()
  requiresBooking?: boolean;

  @ApiPropertyOptional({ description: 'Whether approval is required', default: false })
  @IsOptional()
  @IsBoolean()
  requiresApproval?: boolean;

  @ApiPropertyOptional({ description: 'Maximum quantity per booking' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxQuantity?: number;

  @ApiPropertyOptional({ description: 'Minimum advance hours for booking' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minAdvanceHours?: number;

  @ApiPropertyOptional({ description: 'Maximum advance days for booking' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxAdvanceDays?: number;

  @ApiPropertyOptional({ description: 'Available from date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableFrom?: string;

  @ApiPropertyOptional({ description: 'Available to date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  availableTo?: string;

  @ApiPropertyOptional({ description: 'Available days of week', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  availableDays?: string[];

  @ApiPropertyOptional({ description: 'Terms and conditions' })
  @IsOptional()
  @IsString()
  termsConditions?: string;

  @ApiPropertyOptional({ description: 'Cancellation policy' })
  @IsOptional()
  @IsString()
  cancellationPolicy?: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Created by user ID' })
  @IsOptional()
  @IsUUID()
  createdBy?: string;
}

/**
 * Update Additional Service DTO
 * All fields use camelCase (API convention)
 */
export class UpdateAdditionalServiceDto {
  @ApiPropertyOptional({ description: 'Service name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Service code' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Service type', enum: FinancialServiceType })
  @IsOptional()
  @IsEnum(FinancialServiceType)
  serviceType?: FinancialServiceType;

  @ApiPropertyOptional({ description: 'Service category', enum: FinancialServiceCategory })
  @IsOptional()
  @IsEnum(FinancialServiceCategory)
  category?: FinancialServiceCategory;

  @ApiPropertyOptional({ description: 'Pricing type', enum: PricingType })
  @IsOptional()
  @IsEnum(PricingType)
  pricingType?: PricingType;

  @ApiPropertyOptional({ description: 'Base price (before tax)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  basePrice?: number;

  @ApiPropertyOptional({ description: 'Currency code' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Tax rate (0-100)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  taxRate?: number;

  @ApiPropertyOptional({ description: 'Whether service is taxable' })
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Whether service is available' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Whether booking is required' })
  @IsOptional()
  @IsBoolean()
  requiresBooking?: boolean;

  @ApiPropertyOptional({ description: 'Whether approval is required' })
  @IsOptional()
  @IsBoolean()
  requiresApproval?: boolean;

  @ApiPropertyOptional({ description: 'Maximum quantity per booking' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxQuantity?: number;

  @ApiPropertyOptional({ description: 'Minimum advance hours' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minAdvanceHours?: number;

  @ApiPropertyOptional({ description: 'Maximum advance days' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxAdvanceDays?: number;

  @ApiPropertyOptional({ description: 'Available from date (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  availableFrom?: string;

  @ApiPropertyOptional({ description: 'Available to date (ISO 8601)' })
  @IsOptional()
  @IsDateString()
  availableTo?: string;

  @ApiPropertyOptional({ description: 'Available days', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  availableDays?: string[];

  @ApiPropertyOptional({ description: 'Terms and conditions' })
  @IsOptional()
  @IsString()
  termsConditions?: string;

  @ApiPropertyOptional({ description: 'Cancellation policy' })
  @IsOptional()
  @IsString()
  cancellationPolicy?: string;

  @ApiPropertyOptional({ description: 'Updated by user ID' })
  @IsOptional()
  @IsUUID()
  updatedBy?: string;
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
 * Used for findAll, findByType, findByCategory queries
 */
export class FindAllAdditionalServicesRequestDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by service type', enum: FinancialServiceType })
  @IsOptional()
  @IsEnum(FinancialServiceType)
  serviceType?: FinancialServiceType;

  @ApiPropertyOptional({ description: 'Filter by category', enum: FinancialServiceCategory })
  @IsOptional()
  @IsEnum(FinancialServiceCategory)
  category?: FinancialServiceCategory;

  @ApiPropertyOptional({ description: 'Filter by active status' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Filter by available status' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

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
 * Update Additional Service Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
export class UpdateAdditionalServiceRequestDto extends UpdateAdditionalServiceDto {
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
 * Get Service Categories Request DTO
 */
export class GetServiceCategoriesRequestDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * Service Categories Response DTO
 */
export class ServiceCategoriesResponseDto {
  @ApiProperty({ description: 'Available service categories', enum: FinancialServiceCategory, isArray: true })
  categories: string[];
}

/**
 * Get Service Stats Request DTO
 */
export class GetServiceStatsRequestDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

/**
 * Get Service Dashboard Request DTO
 */
export class GetServiceDashboardRequestDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;
}

export class TopServiceStatsDto {
  @ApiProperty({ type: String }) serviceId!: string;
  @ApiProperty({ type: String }) serviceName!: string;
  @ApiProperty() revenue!: number;
  @ApiProperty() bookingCount!: number;
}

/**
 * Service Dashboard Response DTO
 */
export class ServiceDashboardResponseDto {
  @ApiProperty({ description: 'Service statistics', type: () => FinancialServiceStatsResponseDto })
  stats: FinancialServiceStatsResponseDto;

  @ApiPropertyOptional({ description: 'Recent bookings', type: () => [ServiceBookingResponseDto] })
  recentBookings?: ServiceBookingResponseDto[];

  @ApiPropertyOptional({ description: 'Top services by revenue', type: [TopServiceStatsDto] })
  topServices?: TopServiceStatsDto[];
}

/**
 * NATS Response Types
 */
export type FindAllAdditionalServicesNatsResponse = NatsResponse<AdditionalServiceResponseDto[]>;
export type FindOneAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type CreateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type UpdateAdditionalServiceNatsResponse = NatsResponse<AdditionalServiceResponseDto>;
export type DeleteAdditionalServiceNatsResponse = NatsResponse<{ message: string; serviceId: string }>;
export type GetServiceCategoriesNatsResponse = NatsResponse<ServiceCategoriesResponseDto>;
export type GetServiceStatsNatsResponse = NatsResponse<FinancialServiceStatsResponseDto>;
export type GetServiceDashboardNatsResponse = NatsResponse<ServiceDashboardResponseDto>;
