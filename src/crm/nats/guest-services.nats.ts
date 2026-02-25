/**
 * Guest Services NATS Contracts
 *
 * Patterns:
 * - guest-services.complaints.metrics
 * - guest_services.services.create
 * - guest_services.services.find_all
 * - guest_services.services.find_one
 * - guest_services.services.update
 * - guest_services.services.delete
 * - guest_services.services.stats
 * - guest_services.bookings.create
 * - guest_services.bookings.find_all
 * - guest_services.bookings.find_one
 *
 * Handler: crm-service (GuestServicesController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID, IsString, IsNumber, IsEnum, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Service Type Enum (matches CRM GuestService entity)
 */
export enum ServiceType {
  SPA = 'SPA',
  RESTAURANT = 'RESTAURANT',
  ROOM_SERVICE = 'ROOM_SERVICE',
  LAUNDRY = 'LAUNDRY',
  TRANSPORTATION = 'TRANSPORTATION',
  TOUR = 'TOUR',
  CONCIERGE = 'CONCIERGE',
  FITNESS = 'FITNESS',
  BUSINESS_CENTER = 'BUSINESS_CENTER',
  OTHER = 'OTHER',
}

/**
 * Guest Service Status Enum (matches CRM GuestService entity)
 */
export enum GuestServiceStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
}

/**
 * Booking Status Enum (matches CRM ServiceBooking entity)
 */
export enum ServiceBookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

/**
 * Payment Status Constants for Service Bookings
 */
export enum ServiceBookingPaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CHARGED_TO_ROOM = 'CHARGED_TO_ROOM',
  REFUNDED = 'REFUNDED',
  CANCELLED = 'CANCELLED',
}

/**
 * Operating Hour Slot for service schedule validation
 * Used to parse the operatingHours JSON field on GuestService
 */
export class OperatingHourSlot {
  @ApiProperty({
    description: 'Day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)',
    example: 1,
    minimum: 0,
    maximum: 6,
  })
  dayOfWeek: number;

  @ApiProperty({
    description: 'Opening time in HH:mm format',
    example: '09:00',
  })
  openTime: string;

  @ApiProperty({
    description: 'Closing time in HH:mm format',
    example: '21:00',
  })
  closeTime: string;
}

/**
 * Create Guest Service Request
 * Pattern: guest_services.services.create
 */
export interface CreateGuestServiceNatsRequest {
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  serviceType: ServiceType; // Changed from category
  price?: number; // Changed from string to number
  currency?: string;
  durationMinutes?: number; // Changed from duration
  maxCapacity?: number;
  requiresBooking?: boolean;
  advanceBookingHours?: number;
  operatingHours?: string; // Text format
  location?: string;
  contactInfo?: string;
  amenities?: string[];
  specialRequirements?: string;
  status?: GuestServiceStatus;
}

/**
 * Update Guest Service Request
 * Pattern: guest_services.services.update
 */
export interface UpdateGuestServiceNatsRequest {
  tenantId: string;
  serviceId: string;
  updateDto: Partial<CreateGuestServiceNatsRequest>;
}

/**
 * Guest Service Response (matches CRM GuestService entity)
 */
export interface GuestServiceNatsResponse {
  id: string;
  tenantId: string;
  hotelId: string;

  // Core Fields
  name: string;
  description?: string;
  serviceType: ServiceType; // Changed from category to match entity
  status: GuestServiceStatus;

  // Pricing
  price?: number; // Changed from string to number to match entity
  currency?: string;

  // Timing & Capacity
  durationMinutes?: number; // Changed from duration to match entity
  maxCapacity?: number;
  advanceBookingHours?: number;

  // Requirements & Details
  requiresBooking: boolean;
  operatingHours?: string;
  location?: string;
  contactInfo?: string;
  amenities?: string[];
  specialRequirements?: string;

  // Timestamps
  createdAt: string | Date;
  updatedAt: string | Date;

  // Audit Fields
  createdBy?: string;
  updatedBy?: string;
}

/**
 * Create Service Response
 */
export type CreateGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;

/**
 * Find All Services Request
 * Pattern: guest_services.services.find_all
 */
export interface FindAllGuestServicesNatsRequest {
  tenantId: string;
  hotelId?: string;
  serviceType?: ServiceType; // Changed from category to match entity
  status?: GuestServiceStatus;
  page?: number;
  limit?: number;
}

/**
 * Find All Services Response
 */
export type FindAllGuestServicesNatsResponse = NatsResponse<{
  data: GuestServiceNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

/**
 * Find One Service Request
 * Pattern: guest_services.services.find_one
 */
export interface FindOneGuestServiceNatsRequest {
  tenantId: string;
  serviceId: string;
}

/**
 * Find One Service Response
 */
export type FindOneGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;

/**
 * Update Service Response
 */
export type UpdateGuestServiceNatsResponse = NatsResponse<GuestServiceNatsResponse>;

/**
 * Delete Service Request
 * Pattern: guest_services.services.delete
 */
export interface DeleteGuestServiceNatsRequest {
  tenantId: string;
  serviceId: string;
}

/**
 * Delete Service Response
 */
export type DeleteGuestServiceNatsResponse = NatsResponse<{ success: boolean }>;

/**
 * Guest Service Stats Response
 */
export interface GuestServiceStatsNatsResponse {
  totalServices: number;
  activeServices: number;
  inactiveServices: number;
  totalBookings: number;
  totalRevenue: string;
  averageRating?: number;
}

/**
 * Stats Request
 * Pattern: guest_services.services.stats
 */
export interface GetGuestServiceStatsNatsRequest {
  tenantId: string;
  hotelId?: string;
}

/**
 * Stats Response
 */
export type GetGuestServiceStatsNatsResponse = NatsResponse<GuestServiceStatsNatsResponse>;

/**
 * Create Service Booking DTO
 * Pattern: guest_services.bookings.create
 *
 * Standardized contract used by both REST (API Gateway) and NATS (CRM Service) layers.
 * This class replaces both CreateGuestServiceBookingDto and CreateServiceBookingNatsRequest
 * to ensure field-level consistency across all layers.
 *
 * @standardized 2026-02-11
 * @contract_accuracy PERFECT (Field names unified)
 */
export class CreateServiceBookingDto {
  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Service ID to be booked',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @IsUUID()
  serviceId: string;

  @ApiProperty({
    description: 'Guest/Customer ID who is booking the service',
    example: '550e8400-e29b-41d4-a716-446655440003',
  })
  @IsString()
  guestId: string;

  @ApiPropertyOptional({
    description: 'Room booking ID (if service is for a hotel guest)',
    example: '550e8400-e29b-41d4-a716-446655440004',
  })
  @IsOptional()
  @IsString()
  roomBookingId?: string;

  @ApiPropertyOptional({
    description: 'Room number (if service is for a hotel guest)',
    example: '101',
  })
  @IsOptional()
  @IsString()
  roomNumber?: string;

  @ApiProperty({
    description: 'Booking date and time in ISO 8601 format',
    example: '2026-02-15T14:30:00Z',
  })
  @IsString()
  bookingDateTime: string;

  @ApiPropertyOptional({
    description: 'Duration of the service in minutes',
    example: 60,
  })
  @IsOptional()
  @IsNumber()
  durationMinutes?: number;

  @ApiProperty({
    description: 'Number of guests for the service',
    example: 2,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  numberOfGuests: number;

  @ApiPropertyOptional({
    description: 'Service price (if different from default service price)',
    example: 150.00,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    description: 'Currency code (ISO 4217)',
    example: 'USD',
  })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    description: 'Special requests from the guest',
    example: 'Need wheelchair accessible spa room',
  })
  @IsOptional()
  @IsString()
  specialRequests?: string;

  @ApiPropertyOptional({
    description: 'Internal notes for staff',
    example: 'VIP guest, prepare welcome amenity',
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({
    description: 'Confirmation code (auto-generated if not provided)',
    example: 'SPA-2026-001234',
  })
  @IsOptional()
  @IsString()
  confirmationCode?: string;

  @ApiPropertyOptional({
    description: 'Payment status',
    example: 'PENDING',
  })
  @IsOptional()
  @IsString()
  paymentStatus?: string;

  @ApiPropertyOptional({
    description: 'Staff member assigned to this service',
    example: '550e8400-e29b-41d4-a716-446655440005',
  })
  @IsOptional()
  @IsString()
  staffAssigned?: string;

  @ApiPropertyOptional({
    description: 'Initial booking status',
    enum: ServiceBookingStatus,
    example: ServiceBookingStatus.PENDING,
  })
  @IsOptional()
  @IsEnum(ServiceBookingStatus)
  status?: ServiceBookingStatus;
}

/**
 * Service Booking Response (matches CRM ServiceBooking entity)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Converted to class with @ApiProperty)
 */
export class ServiceBookingNatsResponse {
  @ApiProperty({ description: 'Booking ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId!: string;

  @ApiProperty({ description: 'Service ID' })
  serviceId!: string;

  @ApiPropertyOptional({ description: 'Guest/Customer ID' })
  guestId?: string; // FIXED: Use guestId (frontend expectation) instead of customerId

  @ApiPropertyOptional({ description: 'Service name' })
  serviceName?: string;

  @ApiPropertyOptional({ description: 'Guest name' })
  guestName?: string;

  @ApiPropertyOptional({ description: 'Room booking ID' })
  roomBookingId?: string;

  @ApiPropertyOptional({ description: 'Room number' })
  roomNumber?: string;

  @ApiPropertyOptional({ description: 'Room ID' })
  roomId?: string;

  @ApiPropertyOptional({ description: 'Booking ID reference' })
  bookingId?: string;

  @ApiProperty({ description: 'Booking status', enum: ServiceBookingStatus })
  status!: ServiceBookingStatus;

  @ApiProperty({ description: 'Booking date and time' })
  bookingDateTime!: string; // FIXED: Use bookingDateTime (frontend expectation) instead of bookingDate/serviceDate

  @ApiPropertyOptional({ description: 'Duration in minutes' })
  durationMinutes?: number;

  @ApiProperty({ description: 'Number of guests' })
  numberOfGuests!: number;

  @ApiPropertyOptional({ description: 'Total price' })
  totalPrice?: number; // FIXED: Use totalPrice (frontend expectation) instead of price

  @ApiPropertyOptional({ description: 'Currency code' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Special requests' })
  specialRequests?: string;

  @ApiPropertyOptional({ description: 'Internal notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Confirmation code' })
  confirmationCode?: string;

  @ApiPropertyOptional({
    description: 'Payment status. Set to CHARGED_TO_ROOM when service is completed with a roomBookingId.',
    enum: ServiceBookingPaymentStatus,
    example: ServiceBookingPaymentStatus.PENDING,
  })
  paymentStatus?: string;

  @ApiPropertyOptional({ description: 'Assigned staff ID' })
  staffAssigned?: string;

  @ApiProperty({ description: 'Creation timestamp', type: String })
  createdAt!: string; // FIXED: Use string only (not string | Date)

  @ApiProperty({ description: 'Last update timestamp', type: String })
  updatedAt!: string; // FIXED: Use string only (not string | Date)

  @ApiPropertyOptional({ description: 'Created by user ID' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'Updated by user ID' })
  updatedBy?: string;
}

/**
 * Create Booking Response
 */
export type CreateServiceBookingNatsResponse = NatsResponse<ServiceBookingNatsResponse>;

/**
 * Find All Bookings Request
 * Pattern: guest_services.bookings.find_all
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class FindAllServiceBookingsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsOptional()
  @IsUUID()
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsUUID()
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Guest ID filter' })
  @IsOptional()
  @IsUUID()
  guestId?: string; // FIXED: Use guestId (frontend expectation)

  @ApiPropertyOptional({ description: 'Service ID filter' })
  @IsOptional()
  @IsUUID()
  serviceId?: string;

  @ApiPropertyOptional({ description: 'Booking status filter', enum: ServiceBookingStatus })
  @IsOptional()
  @IsEnum(ServiceBookingStatus)
  status?: ServiceBookingStatus;

  @ApiPropertyOptional({ description: 'Service type filter' })
  @IsOptional()
  @IsString()
  serviceType?: string;

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
 * Service Booking List Data
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class ServiceBookingListDataDto {
  @ApiProperty({ type: [ServiceBookingNatsResponse], description: 'List of service bookings' })
  data!: ServiceBookingNatsResponse[];

  @ApiProperty({ description: 'Total count' })
  total!: number;

  @ApiProperty({ description: 'Current page number' })
  page!: number;

  @ApiProperty({ description: 'Items per page' })
  limit!: number;

  @ApiPropertyOptional({ description: 'Total pages' })
  totalPages?: number;
}

/**
 * Find All Bookings Response
 */
export type FindAllServiceBookingsNatsResponse = NatsResponse<ServiceBookingListDataDto>;

/**
 * Find One Booking Request
 * Pattern: guest_services.bookings.find_one
 */
export interface FindOneServiceBookingNatsRequest {
  tenantId: string;
  bookingId: string;
}

/**
 * Find One Booking Response
 */
export type FindOneServiceBookingNatsResponse = NatsResponse<ServiceBookingNatsResponse>;

/**
 * Complaints Metrics Response
 */
export interface ComplaintsMetricsNatsResponse {
  totalComplaints: number;
  resolvedComplaints: number;
  pendingComplaints: number;
  resolutionRate: number;
  averageResolutionTime: number;
  topComplainedServices: Array<{
    serviceId: string;
    serviceName: string;
    complaintCount: number;
  }>;
}

/**
 * Complaints Metrics Request
 * Pattern: guest-services.complaints.metrics
 */
export interface GetComplaintsMetricsNatsRequest {
  tenantId: string;
  hotelId?: string;
  period?: string;
}

/**
 * Complaints Metrics Response
 */
export type GetComplaintsMetricsNatsResponse = NatsResponse<ComplaintsMetricsNatsResponse>;
