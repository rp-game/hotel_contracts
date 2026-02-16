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
import { AdditionalServiceResponseDto } from './additional-services.nats';

/**
 * Financial Service Booking Status Enum
 */
export enum FinancialServiceBookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
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

  @ApiPropertyOptional({ description: 'Service details (populated)' })
  @IsOptional()
  service?: AdditionalServiceResponseDto;

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

  @ApiPropertyOptional({ description: 'Related booking ID (if booking-related)' })
  @IsOptional()
  @IsUUID()
  bookingId?: string | null;

  @ApiPropertyOptional({ description: 'Room number (if applicable)' })
  @IsOptional()
  @IsString()
  roomNumber?: string | null;

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
  status: string;

  @ApiPropertyOptional({ description: 'Additional notes' })
  @IsOptional()
  @IsString()
  notes?: string | null;

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
  status?: string;

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
  status?: string;

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
export class FindAllServiceBookingsRequestDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Filter by service ID' })
  @IsOptional()
  @IsUUID()
  serviceId?: string;

  @ApiPropertyOptional({ description: 'Filter by status', enum: FinancialServiceBookingStatus })
  @IsOptional()
  @IsEnum(FinancialServiceBookingStatus)
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by date from (ISO 8601 date)' })
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @ApiPropertyOptional({ description: 'Filter by date to (ISO 8601 date)' })
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

  @ApiPropertyOptional({ description: 'Popular services' })
  popularServices?: Array<{
    serviceId: string;
    serviceName: string;
    bookingCount: number;
    revenue: number;
  }>;
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
