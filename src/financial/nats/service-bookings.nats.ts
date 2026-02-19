/**
 * Service Bookings NATS Contracts
 *
 * Unified contracts for both NATS messages and REST DTOs
 * Matches database entity structure (camelCase)
 *
 * Pattern: additional-services.booking.*
 * Handler: financial-service
 * Database Entity: ServiceBooking (service_bookings table)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsUUID, IsDateString, IsEmail, Min } from 'class-validator';
import { NatsResponse } from '../../common';

/**
 * Financial Service Booking Status Enum
 * For additional services bookings (spa, restaurant, laundry, etc.)
 * Different from:
 * - BookingStatus (room bookings): has CHECKED_IN/CHECKED_OUT
 * - FinancialServiceBookingStatus (CRM service bookings): different domain
 */
export enum FinancialServiceBookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW'
}

/**
 * Service Booking Response DTO
 * Used in both NATS responses and REST API responses
 * Matches ServiceBooking entity structure
 */
export class ServiceBookingResponseDto {
  @ApiProperty({ description: 'Booking ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsUUID()
  serviceId: string;

  // NOTE: Removed 'service' property to avoid circular dependency with AdditionalServiceResponseDto
  // Use serviceId to fetch service details if needed

  @ApiProperty({ description: 'Customer name' })
  @IsString()
  customerName: string;

  @ApiProperty({ description: 'Customer email' })
  @IsEmail()
  customerEmail: string;

  @ApiPropertyOptional({ description: 'Customer phone number' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ type: String, description: 'Related booking ID (if booking-related)' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional({ type: String, description: 'Room number (if applicable)' })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiProperty({ description: 'Service date (ISO 8601 date)' })
  @IsDateString()
  serviceDate: string;

  @ApiProperty({ description: 'Quantity booked' })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Unit price' })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'Total amount' })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiProperty({ description: 'Booking status', enum: FinancialServiceBookingStatus })
  @IsEnum(FinancialServiceBookingStatus)
  status: FinancialServiceBookingStatus;

  @ApiPropertyOptional({ type: String, description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Created at timestamp' })
  @IsDateString()
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  @IsDateString()
  updatedAt: string;
}

/**
 * Create Financial Service Booking DTO
 */
export class CreateFinancialServiceBookingDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Service ID' })
  @IsUUID()
  serviceId: string;

  @ApiPropertyOptional({ description: 'Customer ID (if linked to a customer record)' })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiProperty({ description: 'Customer name' })
  @IsString()
  customerName: string;

  @ApiProperty({ description: 'Customer email' })
  @IsEmail()
  customerEmail: string;

  @ApiPropertyOptional({ description: 'Customer phone number' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Related booking ID' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiProperty({ description: 'Service date (ISO 8601 date)' })
  @IsDateString()
  serviceDate: string;

  @ApiProperty({ description: 'Quantity to book' })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Unit price' })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'Total amount' })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiPropertyOptional({ description: 'Initial status', enum: FinancialServiceBookingStatus, default: FinancialServiceBookingStatus.PENDING })
  @IsOptional()
  @IsEnum(FinancialServiceBookingStatus)
  status?: FinancialServiceBookingStatus;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

/**
 * Update Financial Service Booking DTO
 */
export class UpdateFinancialServiceBookingDto {
  @ApiPropertyOptional({ description: 'Customer name' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Customer email' })
  @IsOptional()
  @IsEmail()
  customerEmail?: string;

  @ApiPropertyOptional({ description: 'Customer phone number' })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Service date (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  serviceDate?: string;

  @ApiPropertyOptional({ description: 'Quantity' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  quantity?: number;

  @ApiPropertyOptional({ description: 'Unit price' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  unitPrice?: number;

  @ApiPropertyOptional({ description: 'Total amount' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalAmount?: number;

  @ApiPropertyOptional({ description: 'Booking status', enum: FinancialServiceBookingStatus })
  @IsOptional()
  @IsEnum(FinancialServiceBookingStatus)
  status?: FinancialServiceBookingStatus;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

/**
 * Service Booking List Response DTO
 */
export class FinancialServiceBookingListResponseDto {
  @ApiProperty({ description: 'Array of bookings', type: [ServiceBookingResponseDto] })
  data: ServiceBookingResponseDto[];

  @ApiProperty({ description: 'Total number of bookings' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;
}

/**
 * Find All Service Bookings Request DTO
 */
/**
 * Find All Service Bookings Request DTO
 * Used for findAll, findByCustomer, findByStatus queries
 */
export class FindAllServiceBookingsRequestDto {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by service ID' })
  @IsOptional()
  @IsUUID()
  serviceId?: string;

  @ApiPropertyOptional({ description: 'Filter by customer ID' })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiPropertyOptional({ description: 'Filter by booking ID' })
  @IsOptional()
  @IsUUID()
  bookingId?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: FinancialServiceBookingStatus })
  @IsOptional()
  @IsEnum(FinancialServiceBookingStatus)
  status?: FinancialServiceBookingStatus;

  @ApiPropertyOptional({ description: 'Filter by service date from (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Filter by service date to (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  dateTo?: string;

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
 * Find One Service Booking Request DTO
 */
export class FindOneServiceBookingRequestDto {
  @ApiProperty({ description: 'Booking ID' })
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
 * Update Service Booking Request DTO (for NATS)
 * Combines routing info (id, tenantId, hotelId) with update fields
 */
export class UpdateFinancialServiceBookingRequestDto extends UpdateFinancialServiceBookingDto {
  @ApiProperty({ description: 'Booking ID' })
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
 * Delete Service Booking Request DTO
 */
export class DeleteServiceBookingRequestDto {
  @ApiProperty({ description: 'Booking ID' })
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

export class PopularServiceStatsDto {
  @ApiProperty({ type: String }) serviceId!: string;
  @ApiProperty({ type: String }) serviceName!: string;
  @ApiProperty() bookingCount!: number;
  @ApiProperty() revenue!: number;
}

/**
 * Financial Service Stats Response DTO
 */
export class FinancialServiceStatsResponseDto {
  @ApiProperty({ description: 'Total number of services' })
  totalServices: number;

  @ApiProperty({ description: 'Active services count' })
  activeServices: number;

  @ApiProperty({ description: 'Total bookings count' })
  totalBookings: number;

  @ApiProperty({ description: 'Total revenue' })
  totalRevenue: number;

  @ApiPropertyOptional({ description: 'Revenue by category' })
  revenueByCategory?: Record<string, number>;

  @ApiPropertyOptional({ description: 'Popular services', type: [PopularServiceStatsDto] })
  popularServices?: PopularServiceStatsDto[];
}

/**
 * NATS Response Types
 */
export type FindAllFinancialServiceBookingsNatsResponse = NatsResponse<FinancialServiceBookingListResponseDto>;
export type FindOneFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type CreateFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type UpdateFinancialServiceBookingNatsResponse = NatsResponse<ServiceBookingResponseDto>;
export type DeleteFinancialServiceBookingNatsResponse = NatsResponse<{ message: string; bookingId: string }>;
export type GetFinancialServiceStatsNatsResponse = NatsResponse<FinancialServiceStatsResponseDto>;
