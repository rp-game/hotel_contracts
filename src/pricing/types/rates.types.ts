/**
 * Rate DTOs - Centralized
 *
 * IMPORTANT: These are the SINGLE SOURCE OF TRUTH for rate-related types
 * - Used by pricing-service NATS handlers
 * - Used by API Gateway REST endpoints
 * - All classes have @ApiProperty for Swagger documentation
 *
 * @verified_date 2026-02-13
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsOptional,
  IsNumber,
  IsDateString,
  IsArray,
  IsBoolean,
  IsEnum,
  Min
} from 'class-validator';

// ============================================================================
// Core Rate DTOs
// ============================================================================

/**
 * Detailed rate breakdown (weekday/weekend/extra person)
 */
export class RateDetailsDto {
  @ApiProperty({ description: 'Weekday rate' })
  weekdayRate: number;

  @ApiProperty({ description: 'Weekend rate' })
  weekendRate: number;

  @ApiProperty({ description: 'Extra person charge' })
  extraPersonCharge: number;
}

/**
 * Room rate with availability and pricing information
 */
export class RoomRateDto {
  @ApiProperty({ description: 'Rate ID (null if no base rate configured)', nullable: true })
  id: string | null;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name from inventory service' })
  roomTypeName: string;

  @ApiProperty({ description: 'Base rate price' })
  baseRate: number;

  @ApiProperty({ description: 'Current calculated rate' })
  currentRate: number;

  @ApiProperty({ description: 'Currency code (e.g., VND, USD)' })
  currency: string;

  @ApiProperty({ description: 'Number of available rooms' })
  availableRooms: number;

  @ApiProperty({ description: 'Detailed rate breakdown', type: RateDetailsDto })
  rateDetails: RateDetailsDto;
}

// ============================================================================
// Rate Calculation DTOs
// ============================================================================

/**
 * Breakdown of rate calculation components
 */
export class RateBreakdownDto {
  @ApiProperty({ description: 'Base amount before adjustments', type: 'number' })
  baseAmount: number | string;

  @ApiProperty({ description: 'Seasonal adjustment amount' })
  seasonalAdjustment: number;

  @ApiProperty({ description: 'Occupancy-based adjustment' })
  occupancyAdjustment: number;

  @ApiProperty({ description: 'Length of stay discount' })
  lengthOfStayDiscount: number;

  @ApiProperty({ description: 'Promotion discount applied' })
  promotionDiscount: number;

  @ApiProperty({ description: 'Yield management adjustment' })
  yieldAdjustment: number;

  @ApiProperty({ description: 'Advance booking discount' })
  advanceBookingDiscount: number;

  @ApiProperty({ description: 'Last minute discount' })
  lastMinuteDiscount: number;

  @ApiProperty({ description: 'Tax amount' })
  taxes: number;
}

/**
 * Calculated rate response with full breakdown
 */
export class CalculatedRateDto {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date' })
  checkIn: string;

  @ApiProperty({ description: 'Check-out date' })
  checkOut: string;

  @ApiProperty({ description: 'Number of guests' })
  guests: number;

  @ApiProperty({ description: 'Number of nights (for overnight bookings)' })
  nights: number;

  @ApiProperty({ description: 'Number of units (nights for overnight, hours for hourly)' })
  units: number;

  @ApiProperty({ description: 'Base rate per night/hour', type: 'number' })
  baseRate: number | string;

  @ApiProperty({ description: 'Final calculated rate' })
  calculatedRate: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Rate breakdown details', type: RateBreakdownDto })
  breakdown: RateBreakdownDto;

  @ApiProperty({ description: 'Adjustment details', type: [String] })
  adjustmentDetails: string[];
}

// ============================================================================
// Rate Sync DTOs
// ============================================================================

/**
 * Rate sync error details
 */
export class RateSyncErrorDto {
  @ApiProperty({ description: 'Channel name' })
  channel: string;

  @ApiProperty({ description: 'Error message' })
  error: string;
}

/**
 * Rate synchronization result data
 */
export class SyncRatesDataDto {
  @ApiProperty({ description: 'Whether sync was successful' })
  success: boolean;

  @ApiProperty({ description: 'Successfully synced channels', type: [String] })
  syncedChannels: string[];

  @ApiProperty({ description: 'Failed channels', type: [String] })
  failedChannels: string[];

  @ApiProperty({ description: 'Number of rates synced' })
  syncedRates: number;

  @ApiProperty({ description: 'Number of failed rates' })
  failedRates: number;

  @ApiProperty({ description: 'Error details', type: [RateSyncErrorDto] })
  errors: RateSyncErrorDto[];

  @ApiProperty({ description: 'Last sync timestamp (ISO 8601)' })
  lastSyncDate: string;
}

// ============================================================================
// Rate Details DTOs
// ============================================================================

/**
 * Rate restrictions (min/max stay, advance booking, etc.)
 */
export class RateRestrictionsDto {
  @ApiPropertyOptional({ description: 'Minimum stay in nights', minimum: 1 })
  minStay?: number;

  @ApiPropertyOptional({ description: 'Maximum stay in nights', minimum: 1 })
  maxStay?: number;

  @ApiPropertyOptional({ description: 'Advance booking requirement in days', minimum: 0 })
  advanceBooking?: number;

  @ApiPropertyOptional({ description: 'Closed dates (YYYY-MM-DD)', type: [String] })
  closedDates?: string[];
}

/**
 * Channel-specific rate information
 */
export class ChannelRateDto {
  @ApiProperty({ description: 'Channel name' })
  channelName: string;

  @ApiProperty({ description: 'Rate for this channel' })
  rate: number;

  @ApiProperty({ description: 'Commission percentage' })
  commission: number;

  @ApiProperty({ description: 'Whether channel is active' })
  isActive: boolean;
}

/**
 * Rate modifier/adjustment rule
 */
export class RateModifierDto {
  @ApiProperty({ description: 'Modifier type' })
  type: string;

  @ApiProperty({ description: 'Modifier value' })
  value: number;

  @ApiProperty({ description: 'Modifier conditions', type: 'object', additionalProperties: true })
  conditions: Record<string, any>;
}

/**
 * Complete rate details with restrictions, channels, and modifiers
 */
export class RateDetailsDataDto {
  @ApiProperty({ description: 'Rate ID' })
  id: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Room type name' })
  roomTypeName: string;

  @ApiProperty({ description: 'Rate name' })
  rateName: string;

  @ApiProperty({ description: 'Rate code' })
  rateCode: string;

  @ApiProperty({ description: 'Base rate amount' })
  baseRate: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Rate type' })
  rateType: string;

  @ApiProperty({ description: 'Valid from date' })
  validFrom: string;

  @ApiProperty({ description: 'Valid to date' })
  validTo: string;

  @ApiProperty({ description: 'Rate restrictions', type: RateRestrictionsDto })
  restrictions: RateRestrictionsDto;

  @ApiProperty({ description: 'Channel-specific rates', type: [ChannelRateDto] })
  channels: ChannelRateDto[];

  @ApiProperty({ description: 'Rate modifiers', type: [RateModifierDto] })
  modifiers: RateModifierDto[];
}

// ============================================================================
// Response Wrapper DTOs
// ============================================================================

/**
 * Get rates list response
 */
export class GetRatesResponseDto {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ type: [RoomRateDto], description: 'List of room types with their rates' })
  roomTypes: RoomRateDto[];
}

/**
 * Update rate response
 */
export class UpdateRateResponseDto {
  @ApiProperty({ type: RoomRateDto, description: 'Updated rate data' })
  data: RoomRateDto;
}

/**
 * Sync rates response
 */
export class SyncRatesResponseDto {
  @ApiProperty({ description: 'Sync status data', type: SyncRatesDataDto })
  data: SyncRatesDataDto;
}

/**
 * Rate details response
 */
export class RateDetailsResponseDto {
  @ApiProperty({ description: 'Rate details data', type: RateDetailsDataDto })
  data: RateDetailsDataDto;
}

/**
 * Create rate response
 */
export class CreateRateResponseDto {
  @ApiProperty({ type: RoomRateDto, description: 'Created rate data' })
  data: RoomRateDto;
}

// ============================================================================
// Bulk Operations DTOs
// ============================================================================

/**
 * Bulk operation error details
 */
export class BulkOperationErrorDto {
  @ApiProperty({ description: 'Item index in the array' })
  index: number;

  @ApiProperty({ description: 'Error message' })
  error: string;
}

/**
 * Bulk rates operation result
 */
export class BulkRatesResultDto {
  @ApiProperty({ description: 'Number of successful operations' })
  successful: number;

  @ApiProperty({ description: 'Number of failed operations' })
  failed: number;

  @ApiProperty({ description: 'Error details', type: [BulkOperationErrorDto] })
  errors: BulkOperationErrorDto[];

  @ApiProperty({ description: 'Created rates', type: [RoomRateDto] })
  createdRates: RoomRateDto[];
}

/**
 * Bulk rates response
 */
export class BulkRatesResponseDto {
  @ApiProperty({ description: 'Bulk operation results', type: BulkRatesResultDto })
  data: BulkRatesResultDto;
}

// ============================================================================
// Request DTOs
// ============================================================================

/**
 * Base pricing request DTO
 */
export class PricingRequestBaseDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;
}

/**
 * Create rate request
 */
export class CreateRateRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Rate name' })
  @IsString()
  rateName: string;

  @ApiProperty({ description: 'Base rate amount', minimum: 0 })
  @IsNumber()
  @Min(0)
  baseRate: number;

  @ApiProperty({ description: 'Start date for rate validity (YYYY-MM-DD)' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date for rate validity (YYYY-MM-DD)' })
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({ description: 'Minimum rate allowed', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minRate?: number;

  @ApiPropertyOptional({ description: 'Maximum rate allowed', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxRate?: number;

  @ApiPropertyOptional({ description: 'Rate description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Rate category/type' })
  @IsOptional()
  @IsString()
  category?: string;
}

/**
 * Update rate by ID request
 */
export class UpdateRateByIdRequestDto extends PricingRequestBaseDto {
  @ApiPropertyOptional({ description: 'Updated rate name' })
  @IsOptional()
  @IsString()
  rateName?: string;

  @ApiPropertyOptional({ description: 'Updated base rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  baseRate?: number;

  @ApiPropertyOptional({ description: 'Currency code' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Updated minimum rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minRate?: number;

  @ApiPropertyOptional({ description: 'Updated maximum rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxRate?: number;

  @ApiPropertyOptional({ description: 'Updated start date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'Updated end date (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ description: 'Updated description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Updated rate status' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Rate update item for bulk operations
 */
export class RateUpdateItemDto {
  @ApiProperty({ description: 'Rate ID to update' })
  @IsUUID()
  rateId: string;

  @ApiProperty({ description: 'Changes to apply', type: 'object', additionalProperties: true })
  changes: Partial<UpdateRateByIdRequestDto>;
}

/**
 * Bulk update rates request
 */
export class BulkUpdateRatesRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Array of rate updates', type: [RateUpdateItemDto] })
  @IsArray()
  updates: RateUpdateItemDto[];

  @ApiPropertyOptional({ description: 'Skip validation errors', default: false })
  @IsOptional()
  @IsBoolean()
  skipErrors?: boolean;
}

/**
 * Calculate rate request
 */
export class CalculateRateRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date (YYYY-MM-DD)' })
  @IsDateString()
  checkIn: string;

  @ApiProperty({ description: 'Check-out date (YYYY-MM-DD)' })
  @IsDateString()
  checkOut: string;

  @ApiPropertyOptional({ description: 'Number of guests', minimum: 1 })
  @IsOptional()
  @IsNumber()
  guests?: number;

  @ApiPropertyOptional({ description: 'Distribution channel' })
  @IsOptional()
  @IsString()
  channel?: string;

  @ApiPropertyOptional({ description: 'Promotion codes to apply', type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  promotionCodes?: string[];

  @ApiPropertyOptional({ description: 'Booking type (OVERNIGHT or HOURLY)', enum: ['OVERNIGHT', 'HOURLY'] })
  @IsOptional()
  @IsEnum(['OVERNIGHT', 'HOURLY'])
  bookingType?: 'OVERNIGHT' | 'HOURLY';

  @ApiPropertyOptional({ description: 'Start time for hourly bookings (HH:00 format)' })
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiPropertyOptional({ description: 'End time for hourly bookings (HH:00 format)' })
  @IsOptional()
  @IsString()
  endTime?: string;
}

/**
 * Update rate request (for specific date)
 */
export class UpdateRateRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Date to update rate for (YYYY-MM-DD)' })
  @IsDateString()
  date: string;

  @ApiPropertyOptional({ description: 'New base rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  baseRate?: number;

  @ApiPropertyOptional({ description: 'Minimum rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minRate?: number;

  @ApiPropertyOptional({ description: 'Maximum rate', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxRate?: number;

  @ApiPropertyOptional({ description: 'Rate availability status' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Additional pricing modifiers', type: 'object', additionalProperties: true })
  @IsOptional()
  modifiers?: any;
}

/**
 * Sync rates with external channels request
 */
export class SyncRatesRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Room type IDs to sync', type: [String] })
  @IsArray()
  @IsUUID(undefined, { each: true })
  roomTypeIds: string[];

  @ApiProperty({ description: 'Start date for sync period (YYYY-MM-DD)' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date for sync period (YYYY-MM-DD)' })
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({ description: 'External channel to sync with' })
  @IsOptional()
  @IsString()
  channel?: string;

  @ApiPropertyOptional({ description: 'Force sync override', default: false })
  @IsOptional()
  @IsBoolean()
  forceSync?: boolean;
}

/**
 * Bulk create rates request
 */
export class BulkCreateRatesRequestDto extends PricingRequestBaseDto {
  @ApiProperty({ description: 'Array of rates to create', type: [CreateRateRequestDto] })
  @IsArray()
  rates: Omit<CreateRateRequestDto, 'tenantId' | 'hotelId'>[];

  @ApiPropertyOptional({ description: 'Skip validation errors', default: false })
  @IsOptional()
  @IsBoolean()
  skipErrors?: boolean;
}
