/**
 * Booking Services NATS Contracts
 *
 * Patterns:
 * - services.find_all
 * - services.find_one
 * - services.create
 * - services.update
 * - services.remove
 * - services.stats
 * - services.check_availability
 *
 * Handler: booking-service (ServiceBookingController)
 * Called by: api-gateway (GuestServicesController)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsEnum, IsBoolean, IsArray, IsNotEmpty, IsUUID, Min, Max, IsDateString } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { NatsResponse, TenantHotelQueryDto, IdParamDto, TenantRequiredHotelOptionalQueryDto } from '../../common';

/**
 * Service Category Enum
 */
export enum ServiceCategory {
  SPA = 'SPA',
  FITNESS = 'FITNESS',
  DINING = 'DINING',
  ENTERTAINMENT = 'ENTERTAINMENT',
  TRANSPORT = 'TRANSPORT',
  BUSINESS = 'BUSINESS',
  WELLNESS = 'WELLNESS',
  TOURS = 'TOURS',
  OTHER = 'OTHER',
}

/**
 * Booking Service Status Enum
 */
export enum BookingServiceStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Booking Service Response (matches Service entity)
 */
export class BookingServiceNatsResponse {
  @ApiProperty({ description: 'Service ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  // Core Fields
  @ApiProperty({ description: 'Service name' })
  name: string;

  @ApiPropertyOptional({ description: 'Service description' })
  description?: string;

  @ApiProperty({ description: 'Service category', enum: ServiceCategory })
  category: ServiceCategory;

  @ApiProperty({ description: 'Service status', enum: BookingServiceStatus })
  status: BookingServiceStatus;

  // Pricing
  @ApiProperty({ description: 'Base price (decimal 10,2)' })
  basePrice: number;

  @ApiProperty({ description: 'Currency code', default: 'USD' })
  currency: string;

  // Timing & Capacity
  @ApiProperty({ description: 'Duration in minutes', default: 60 })
  durationMinutes: number;

  @ApiProperty({ description: 'Maximum capacity', default: 1 })
  maxCapacity: number;

  @ApiProperty({ description: 'Advance booking hours required', default: 24 })
  advanceBookingHours: number;

  @ApiProperty({ description: 'Cancellation hours before service', default: 2 })
  cancellationHours: number;

  // Requirements & Availability
  @ApiProperty({ description: 'Whether service requires approval' })
  requiresApproval: boolean;

  @ApiPropertyOptional({ description: 'Available days (0-6 for Sunday-Saturday)', type: [Number] })
  availableDays?: number[];

  @ApiPropertyOptional({ description: 'Operating hours with start and end times (HH:mm format)' })
  operatingHours?: {
    start: string;
    end: string;
  };

  @ApiPropertyOptional({ description: 'Service location' })
  location?: string;

  @ApiProperty({ description: 'Number of staff required', default: 1 })
  staffRequired: number;

  // Additional Details
  @ApiPropertyOptional({ description: 'Equipment needed for service' })
  equipmentNeeded?: string;

  @ApiPropertyOptional({ description: 'Special instructions for staff' })
  specialInstructions?: string;

  // Timestamps
  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt: string | Date;

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt: string | Date;
}

/**
 * Create Service Request
 * Pattern: services.create
 */
export class CreateServiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Service name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Service description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Service category', enum: ServiceCategory })
  @IsEnum(ServiceCategory)
  category: ServiceCategory;

  @ApiProperty({ description: 'Base price' })
  @IsNumber()
  basePrice: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'USD' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Duration in minutes', default: 60 })
  @IsOptional()
  @IsNumber()
  durationMinutes?: number;

  @ApiPropertyOptional({ description: 'Maximum capacity', default: 1 })
  @IsOptional()
  @IsNumber()
  maxCapacity?: number;

  @ApiPropertyOptional({ description: 'Advance booking hours required', default: 24 })
  @IsOptional()
  @IsNumber()
  advanceBookingHours?: number;

  @ApiPropertyOptional({ description: 'Cancellation hours before service', default: 2 })
  @IsOptional()
  @IsNumber()
  cancellationHours?: number;

  @ApiPropertyOptional({ description: 'Whether service requires approval', default: false })
  @IsOptional()
  @IsBoolean()
  requiresApproval?: boolean;

  @ApiPropertyOptional({ description: 'Available days (0-6 for Sunday-Saturday)', type: [Number] })
  @IsOptional()
  @IsArray()
  availableDays?: number[];

  @ApiPropertyOptional({ description: 'Operating hours with start and end times (HH:mm format)' })
  @IsOptional()
  operatingHours?: {
    start: string;
    end: string;
  };

  @ApiPropertyOptional({ description: 'Service location' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: 'Number of staff required', default: 1 })
  @IsOptional()
  @IsNumber()
  staffRequired?: number;

  @ApiPropertyOptional({ description: 'Equipment needed for service' })
  @IsOptional()
  @IsString()
  equipmentNeeded?: string;

  @ApiPropertyOptional({ description: 'Special instructions for staff' })
  @IsOptional()
  @IsString()
  specialInstructions?: string;

  @ApiPropertyOptional({ description: 'Service status', enum: BookingServiceStatus, default: BookingServiceStatus.ACTIVE })
  @IsOptional()
  @IsEnum(BookingServiceStatus)
  status?: BookingServiceStatus;
}

export type CreateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Find All Services Request
 * Pattern: services.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS handlers and REST API (api-gateway @Query())
 * @standardized 2026-02-25
 */
export class FindAllServicesNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Filter by service category', enum: ServiceCategory })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(ServiceCategory)
  category?: ServiceCategory;

  @ApiPropertyOptional({ description: 'Filter by availability' })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === undefined || value === null) return undefined;
    return value === 'true' || value === true;
  })
  @IsBoolean()
  available?: boolean;

  @ApiPropertyOptional({ description: 'Filter by service status', enum: BookingServiceStatus })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @IsEnum(BookingServiceStatus)
  status?: BookingServiceStatus;

  @ApiPropertyOptional({ description: 'Page number', minimum: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', minimum: 1, maximum: 100, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}

/**
 * Find All Services Response (paginated)
 */
export class FindAllServicesData {
  @ApiProperty({ description: 'Array of booking services', type: [BookingServiceNatsResponse] })
  data: BookingServiceNatsResponse[];

  @ApiProperty({ description: 'Total number of services' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Total number of pages' })
  totalPages: number;
}

export type FindAllServicesNatsResponse = NatsResponse<FindAllServicesData>;

/**
 * Find One Service Request
 * Pattern: services.find_one
 */
export class FindOneServiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;
}

export type FindOneServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Update Service Request
 * Pattern: services.update
 */
export class UpdateServiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty({ description: 'Update data' })
  updateData: Partial<CreateServiceNatsRequest>;
}

export type UpdateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Delete Service Request
 * Pattern: services.remove
 */
export class DeleteServiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;
}

export class DeleteServiceData {
  @ApiProperty({ description: 'Whether deletion was successful' })
  success: boolean;

  @ApiProperty({ description: 'Result message' })
  message: string;
}

export type DeleteServiceNatsResponse = NatsResponse<DeleteServiceData>;

/**
 * Booking Service Statistics Response
 */
export class BookingServiceStatsData {
  @ApiProperty({ description: 'Total number of services' })
  totalServices: number;

  @ApiProperty({ description: 'Number of active services' })
  activeServices: number;

  @ApiProperty({ description: 'Number of inactive services' })
  inactiveServices: number;

  @ApiProperty({ description: 'Number of archived services' })
  archivedServices: number;

  @ApiProperty({ description: 'Services count by category' })
  byCategory: Record<ServiceCategory, number>;

  @ApiPropertyOptional({ description: 'Total number of bookings' })
  totalBookings?: number;

  @ApiPropertyOptional({ description: 'Total revenue generated' })
  totalRevenue?: number;

  @ApiPropertyOptional({ description: 'Average service rating' })
  averageRating?: number;
}

/**
 * Get Booking Service Stats Request
 * Pattern: services.stats
 */
export class GetBookingServiceStatsNatsRequest extends TenantHotelQueryDto {}

export type GetBookingServiceStatsNatsResponse = NatsResponse<BookingServiceStatsData>;

/**
 * Check Service Availability Request
 * Pattern: services.check_availability
 */
export class CheckServiceAvailabilityNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty({ description: 'Date to check (YYYY-MM-DD)' })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiPropertyOptional({ description: 'Time to check (HH:mm)' })
  @IsOptional()
  @IsString()
  time?: string;

  @ApiPropertyOptional({ description: 'Number of guests' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  numberOfGuests?: number;
}

/**
 * Service Availability Response
 */
export class ServiceAvailabilityData {
  @ApiProperty({ description: 'Whether the service is available' })
  available: boolean;

  @ApiPropertyOptional({ description: 'Reason if not available' })
  reason?: string;

  @ApiPropertyOptional({ description: 'Next available time slot' })
  nextAvailableSlot?: {
    date: string;
    time: string;
  };

  @ApiPropertyOptional({ description: 'Remaining capacity' })
  capacityRemaining?: number;
}

export type CheckServiceAvailabilityNatsResponse = NatsResponse<ServiceAvailabilityData>;
