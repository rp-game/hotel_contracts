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
import { NatsResponse } from '../../common';

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
  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string | Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string | Date;
}

/**
 * Create Service Request
 * Pattern: services.create
 */
export class CreateServiceNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Service name' })
  name: string;

  @ApiPropertyOptional({ description: 'Service description' })
  description?: string;

  @ApiProperty({ description: 'Service category', enum: ServiceCategory })
  category: ServiceCategory;

  @ApiProperty({ description: 'Base price' })
  basePrice: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'USD' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Duration in minutes', default: 60 })
  durationMinutes?: number;

  @ApiPropertyOptional({ description: 'Maximum capacity', default: 1 })
  maxCapacity?: number;

  @ApiPropertyOptional({ description: 'Advance booking hours required', default: 24 })
  advanceBookingHours?: number;

  @ApiPropertyOptional({ description: 'Cancellation hours before service', default: 2 })
  cancellationHours?: number;

  @ApiPropertyOptional({ description: 'Whether service requires approval', default: false })
  requiresApproval?: boolean;

  @ApiPropertyOptional({ description: 'Available days (0-6 for Sunday-Saturday)', type: [Number] })
  availableDays?: number[];

  @ApiPropertyOptional({ description: 'Operating hours with start and end times (HH:mm format)' })
  operatingHours?: {
    start: string;
    end: string;
  };

  @ApiPropertyOptional({ description: 'Service location' })
  location?: string;

  @ApiPropertyOptional({ description: 'Number of staff required', default: 1 })
  staffRequired?: number;

  @ApiPropertyOptional({ description: 'Equipment needed for service' })
  equipmentNeeded?: string;

  @ApiPropertyOptional({ description: 'Special instructions for staff' })
  specialInstructions?: string;

  @ApiPropertyOptional({ description: 'Service status', enum: BookingServiceStatus, default: BookingServiceStatus.ACTIVE })
  status?: BookingServiceStatus;
}

export type CreateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Find All Services Request
 * Pattern: services.find_all
 */
export interface FindAllServicesNatsRequest {
  tenantId: string;
  hotelId?: string;
  category?: ServiceCategory;
  status?: BookingServiceStatus;
  page?: number;
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
export interface FindOneServiceNatsRequest {
  tenantId: string;
  hotelId: string;
  serviceId: string;
}

export type FindOneServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Update Service Request
 * Pattern: services.update
 */
export interface UpdateServiceNatsRequest {
  tenantId: string;
  hotelId: string;
  serviceId: string;
  updateData: Partial<CreateServiceNatsRequest>;
}

export type UpdateServiceNatsResponse = NatsResponse<BookingServiceNatsResponse>;

/**
 * Delete Service Request
 * Pattern: services.remove
 */
export interface DeleteServiceNatsRequest {
  tenantId: string;
  hotelId: string;
  serviceId: string;
}

export interface DeleteServiceData {
  success: boolean;
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
export interface GetBookingServiceStatsNatsRequest {
  tenantId: string;
  hotelId: string;
}

export type GetBookingServiceStatsNatsResponse = NatsResponse<BookingServiceStatsData>;

/**
 * Check Service Availability Request
 * Pattern: services.check_availability
 */
export interface CheckServiceAvailabilityNatsRequest {
  tenantId: string;
  hotelId: string;
  serviceId: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm
  numberOfGuests?: number;
}

/**
 * Service Availability Response
 */
export interface ServiceAvailabilityData {
  available: boolean;
  reason?: string; // If not available
  nextAvailableSlot?: {
    date: string;
    time: string;
  };
  capacityRemaining?: number;
}

export type CheckServiceAvailabilityNatsResponse = NatsResponse<ServiceAvailabilityData>;
