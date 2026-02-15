/**
 * Hotel NATS Contracts
 *
 * Patterns:
 * - hotels.findAll
 * - hotels.findOne
 * - hotels.create
 * - hotels.update
 * - hotels.delete
 * - hotels.updateStatus
 * - hotels.findByChain
 * - hotels.analytics.occupancy
 * - hotels.analytics.revenue
 * - hotels.analytics.occupancy.aggregate
 * - hotels.analytics.revenue.aggregate
 * - hotels.performance
 * - hotels.settings.updated
 * - hotels.standards.apply
 * - rooms.findByHotel
 * - hotels.room-status.update
 * - hotels.availability.check
 * - hotels.rates.get
 * - hotels.inventory.summary
 * - tenant.hotel.sync (Event)
 * - hotels.updateChainId
 *
 * Handler: inventory-service
 * Called by: api-gateway, user-service
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsArray, IsNumber, IsEmail, IsObject, Min, Max } from 'class-validator';

/**
 * Hotel Entity
 * Shared DTO for both NATS messages and REST API responses
 * Used across: inventory-service, api-gateway, frontend
 */
export class HotelDto {
  @ApiProperty({ description: 'Hotel unique identifier' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID that owns this hotel' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Hotel description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Street address' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'City' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'Country' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Postal/ZIP code' })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiPropertyOptional({ description: 'Latitude coordinate' })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ description: 'Longitude coordinate' })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ description: 'Contact phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ description: 'Contact email address' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Hotel website URL' })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiPropertyOptional({ description: 'Star rating (1-5)', minimum: 1, maximum: 5 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  stars?: number;

  @ApiPropertyOptional({ description: 'Hotel chain ID if part of a chain' })
  @IsOptional()
  @IsUUID()
  chainId?: string;

  @ApiPropertyOptional({ description: 'Hotel operational status', enum: ['ACTIVE', 'INACTIVE', 'MAINTENANCE', 'CLOSED'] })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Hotel amenities list', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiPropertyOptional({ description: 'Operational settings' })
  @IsOptional()
  @IsObject()
  operationSettings?: {
    timelineSettings?: any;
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

  @ApiPropertyOptional({ description: 'Brand standards configuration' })
  @IsOptional()
  @IsObject()
  brandStandards?: any;

  @ApiPropertyOptional({ description: 'Hotel policies' })
  @IsOptional()
  @IsObject()
  policies?: any;

  @ApiPropertyOptional({ description: 'Default check-in time (HH:mm format)' })
  @IsOptional()
  @IsString()
  checkInTime?: string;

  @ApiPropertyOptional({ description: 'Default check-out time (HH:mm format)' })
  @IsOptional()
  @IsString()
  checkOutTime?: string;

  @ApiPropertyOptional({ description: 'Timezone (IANA format, e.g., Asia/Ho_Chi_Minh)' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ description: 'Default currency code (ISO 4217, e.g., VND, USD)' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Creation timestamp (ISO 8601 format)' })
  @IsOptional()
  @IsString()
  createdAt?: string;

  @ApiPropertyOptional({ description: 'Last update timestamp (ISO 8601 format)' })
  @IsOptional()
  @IsString()
  updatedAt?: string;
}

// Keep Hotel type alias for backward compatibility during migration
export type Hotel = HotelDto;

/**
 * Hotel with statistics
 * Returned by hotels.findOne with room counts
 * Extends HotelDto with additional statistical fields
 */
export class HotelWithStatsDto extends HotelDto {
  @ApiPropertyOptional({ description: 'Total number of rooms in the hotel' })
  @IsOptional()
  @IsNumber()
  roomCount?: number;

  @ApiPropertyOptional({ description: 'Number of available rooms' })
  @IsOptional()
  @IsNumber()
  availableRooms?: number;

  @ApiPropertyOptional({ description: 'Number of occupied rooms' })
  @IsOptional()
  @IsNumber()
  occupiedRooms?: number;
}

/**
 * Hotel with room count
 * Returned by hotels.findAll and hotels.findByChain
 * Extends HotelDto with roomCount field
 */
export class HotelWithRoomCountDto extends HotelDto {
  @ApiPropertyOptional({ description: 'Total number of rooms in the hotel', type: Number })
  @IsOptional()
  @IsNumber()
  roomCount?: number;

  @ApiPropertyOptional({ description: 'Number of currently occupied rooms', type: Number })
  @IsOptional()
  @IsNumber()
  occupiedRooms?: number;
}

// Type aliases for backward compatibility during migration
export type HotelWithStats = HotelWithStatsDto;
export type HotelWithRoomCount = HotelWithRoomCountDto;

/**
 * Find All Hotels Request
 * Pattern: hotels.findAll
 */
export interface FindAllHotelsRequest {
  filters?: any;
  pagination?: { page?: number; limit?: number };
}

export type FindAllHotelsResponse = HotelWithRoomCountDto[];
export type FindAllHotelsNatsResponse = NatsResponse<FindAllHotelsResponse>;

/**
 * Find One Hotel Request
 * Pattern: hotels.findOne
 */
export interface FindOneHotelRequest {
  id: string;
}

export type FindOneHotelResponse = HotelWithStatsDto | null;
export type FindOneHotelNatsResponse = NatsResponse<FindOneHotelResponse>;

/**
 * Create Hotel Request
 * Pattern: hotels.create
 */
export interface CreateHotelRequest {
  hotelData: any;
}

export type CreateHotelResponse = HotelDto;
export type CreateHotelNatsResponse = NatsResponse<CreateHotelResponse>;

/**
 * Update Hotel Request
 * Pattern: hotels.update
 */
export interface UpdateHotelRequest {
  id: string;
  updateData: any;
}

export type UpdateHotelResponse = HotelDto | null;
export type UpdateHotelNatsResponse = NatsResponse<UpdateHotelResponse>;

/**
 * Delete Hotel Request
 * Pattern: hotels.delete
 */
export interface DeleteHotelRequest {
  id: string;
}

export interface DeleteHotelResponse {
  message: string;
}

export type DeleteHotelNatsResponse = NatsResponse<DeleteHotelResponse>;

/**
 * Update Hotel Status Request
 * Pattern: hotels.updateStatus
 */
export interface UpdateHotelStatusRequest {
  id: string;
  status: string;
}

export type UpdateHotelStatusResponse = HotelWithStatsDto;
export type UpdateHotelStatusNatsResponse = NatsResponse<UpdateHotelStatusResponse>;

/**
 * Find Hotels By Chain Request
 * Pattern: hotels.findByChain
 * Includes optional filters for city, country, and status
 */
export class FindHotelsByChainRequestDto {
  @ApiProperty({ description: 'Hotel chain ID to find hotels for' })
  @IsUUID()
  chainId: string;

  @ApiPropertyOptional({ description: 'Filter by city (case-insensitive partial match)' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional({ description: 'Filter by country (case-insensitive partial match)' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Filter by operational status', enum: ['ACTIVE', 'INACTIVE', 'MAINTENANCE', 'CLOSED'] })
  @IsOptional()
  @IsString()
  status?: string;
}

export type FindHotelsByChainResponse = HotelWithStatsDto[];
export type FindHotelsByChainNatsResponse = NatsResponse<FindHotelsByChainResponse>;

/**
 * Paginated response wrapper for hotel list endpoints
 * Used by REST API to return paginated hotel data
 */
export class HotelListResponseDto {
  @ApiProperty({ description: 'Array of hotels with room counts', type: [HotelWithRoomCountDto] })
  data: HotelWithRoomCountDto[];

  @ApiProperty({ description: 'Total number of hotels in result set' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;

  @ApiPropertyOptional({ description: 'Total number of pages' })
  totalPages?: number;
}

/**
 * Get Occupancy Analytics Request
 * Pattern: hotels.analytics.occupancy
 */
export interface GetOccupancyAnalyticsRequest {
  hotelId: string;
  period: string;
}

export interface OccupancyAnalytics {
  hotelId: string;
  period: string;
  occupancyRate: number;
  totalRooms: number;
  occupiedRooms: number;
  data?: any[];
}

export type GetOccupancyAnalyticsResponse = OccupancyAnalytics;
export type GetOccupancyAnalyticsNatsResponse = NatsResponse<GetOccupancyAnalyticsResponse>;

/**
 * Get Revenue Analytics Request
 * Pattern: hotels.analytics.revenue
 */
export interface GetRevenueAnalyticsRequest {
  hotelId: string;
  period: string;
}

export interface RevenueAnalytics {
  hotelId: string;
  period: string;
  totalRevenue: number;
  averageNightlyRate: number;
  revenuePerAvailableRoom: number;
  data?: any[];
}

export type GetRevenueAnalyticsResponse = RevenueAnalytics;
export type GetRevenueAnalyticsNatsResponse = NatsResponse<GetRevenueAnalyticsResponse>;

/**
 * Get Aggregated Occupancy Analytics Request
 * Pattern: hotels.analytics.occupancy.aggregate
 */
export interface GetAggregatedOccupancyAnalyticsRequest {
  hotelIds: string[];
  period: string;
}

export interface AggregatedOccupancyAnalytics {
  hotelIds: string[];
  period: string;
  aggregatedOccupancyRate: number;
  data?: any[];
}

export type GetAggregatedOccupancyAnalyticsResponse = AggregatedOccupancyAnalytics;
export type GetAggregatedOccupancyAnalyticsNatsResponse = NatsResponse<GetAggregatedOccupancyAnalyticsResponse>;

/**
 * Get Aggregated Revenue Analytics Request
 * Pattern: hotels.analytics.revenue.aggregate
 */
export interface GetAggregatedRevenueAnalyticsRequest {
  hotelIds: string[];
  period: string;
}

export interface AggregatedRevenueAnalytics {
  hotelIds: string[];
  period: string;
  aggregatedRevenue: number;
  data?: any[];
}

export type GetAggregatedRevenueAnalyticsResponse = AggregatedRevenueAnalytics;
export type GetAggregatedRevenueAnalyticsNatsResponse = NatsResponse<GetAggregatedRevenueAnalyticsResponse>;

/**
 * Get Hotel Performance Request
 * Pattern: hotels.performance
 */
export interface GetHotelPerformanceRequest {
  hotelId: string;
  metric: string;
}

export interface PerformanceMetrics {
  hotelId: string;
  metric: string;
  value: number;
  trend?: string;
}

export type GetHotelPerformanceResponse = PerformanceMetrics;
export type GetHotelPerformanceNatsResponse = NatsResponse<GetHotelPerformanceResponse>;

/**
 * Hotel Settings Updated Request
 * Pattern: hotels.settings.updated
 */
export interface HotelSettingsUpdatedRequest {
  hotelId: string;
  settings: any;
}

export interface HotelSettingsUpdatedResponse {
  message: string;
}

export type HotelSettingsUpdatedNatsResponse = NatsResponse<HotelSettingsUpdatedResponse>;

/**
 * Apply Brand Standards Request
 * Pattern: hotels.standards.apply
 */
export interface ApplyBrandStandardsRequest {
  hotelId: string;
  standards: any;
}

export interface ApplyBrandStandardsResponse {
  success: boolean;
  applied: string[];
  skipped?: string[];
}

export type ApplyBrandStandardsNatsResponse = NatsResponse<ApplyBrandStandardsResponse>;

/**
 * Find Rooms By Hotel Request
 * Pattern: rooms.findByHotel
 */
export interface FindRoomsByHotelRequest {
  hotelId: string;
}

/**
 * Room Data DTO
 * Used in hotels.findRooms response and room-related operations
 */
export class RoomData {
  @ApiProperty({ description: 'Room ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Room number' })
  @IsString()
  roomNumber: string;

  @ApiPropertyOptional({ description: 'Floor number' })
  @IsOptional()
  @IsNumber()
  floor?: number;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Room status' })
  @IsString()
  status: string;

  @ApiPropertyOptional({ description: 'Current status (additional status field)' })
  @IsOptional()
  @IsString()
  currentStatus?: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Last cleaned timestamp' })
  @IsOptional()
  @IsString()
  lastCleanedAt?: string;

  @ApiPropertyOptional({ description: 'Room features' })
  @IsOptional()
  @IsObject()
  features?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Room notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Created at timestamp' })
  @IsOptional()
  @IsString()
  createdAt?: string;

  @ApiPropertyOptional({ description: 'Updated at timestamp' })
  @IsOptional()
  @IsString()
  updatedAt?: string;
}

export type FindRoomsByHotelResponse = RoomData[];
export type FindRoomsByHotelNatsResponse = NatsResponse<FindRoomsByHotelResponse>;

/**
 * Update Room Status (Hotel) Request
 * Pattern: hotels.room-status.update
 */
export interface UpdateRoomStatusHotelRequest {
  roomId: string;
  hotelId: string;
  status: string;
}

export interface UpdateRoomStatusHotelResponse {
  success: boolean;
  message: string;
}

export type UpdateRoomStatusHotelNatsResponse = NatsResponse<UpdateRoomStatusHotelResponse>;

/**
 * Check Availability Request
 * Pattern: hotels.availability.check
 */
export interface CheckAvailabilityRequest {
  hotelId: string;
}

export interface AvailabilityStatus {
  hotelId: string;
  status: string;
  availableCount?: number;
}

export type CheckAvailabilityResponse = AvailabilityStatus;
export type CheckAvailabilityNatsResponse = NatsResponse<CheckAvailabilityResponse>;

/**
 * Get Hotel Rates Request
 * Pattern: hotels.rates.get
 */
export interface GetHotelRatesRequest {
  hotelId: string;
}

export interface RateInfo {
  roomTypeId: string;
  baseRate: number;
}

export type GetHotelRatesResponse = RateInfo[];
export type GetHotelRatesNatsResponse = NatsResponse<GetHotelRatesResponse>;

/**
 * Get Inventory Summary Request
 * Pattern: hotels.inventory.summary
 */
export interface GetInventorySummaryRequest {
  hotelId: string;
  date?: string; // YYYY-MM-DD
}

export interface InventorySummary {
  hotelId: string;
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  maintenanceRooms?: number;
}

export type GetInventorySummaryResponse = InventorySummary;
export type GetInventorySummaryNatsResponse = NatsResponse<GetInventorySummaryResponse>;

/**
 * Tenant Hotel Sync Event
 * Pattern: tenant.hotel.sync
 * Type: EventPattern (Fire & Forget)
 */
export interface TenantHotelSyncEvent {
  tenantId: string;
  hotelId: string;
  syncData: any;
}

/**
 * Update Chain ID Request
 * Pattern: hotels.updateChainId
 */
export interface UpdateChainIdRequest {
  hotelId: string;
  chainId: string;
}

export type UpdateChainIdResponse = HotelDto;
export type UpdateChainIdNatsResponse = NatsResponse<UpdateChainIdResponse>;
