/**
 * Room Type Search NATS Contract
 *
 * Pattern: inventory.room-types.search
 *
 * Returns room types with availability count + rate plans + pricing
 * for a given booking type and time range.
 *
 * Handler: inventory-service
 * Called by: api-gateway, frontend-facing services
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsOptional,
  IsArray,
  IsNumber,
  IsEnum,
  IsInt,
  Min,
} from 'class-validator';
import { NatsResponse } from '../../common';

export enum SearchBookingType {
  OVERNIGHT = 'OVERNIGHT',
  HOURLY = 'HOURLY',
  DAY_USE = 'DAY_USE',
}

// ============================================================================
// REQUEST
// ============================================================================

export class SearchRoomTypesRequest {
  @ApiProperty({ description: 'Tenant ID', example: 'uuid' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: 'uuid' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({
    description: 'Booking type',
    enum: SearchBookingType,
    example: SearchBookingType.OVERNIGHT,
  })
  @IsEnum(SearchBookingType)
  bookingType: SearchBookingType;

  // --- OVERNIGHT ---
  @ApiPropertyOptional({
    description: 'Check-in date (OVERNIGHT). Format: YYYY-MM-DD',
    example: '2026-03-10',
  })
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional({
    description: 'Check-out date (OVERNIGHT). Format: YYYY-MM-DD',
    example: '2026-03-12',
  })
  @IsOptional()
  @IsString()
  endDate?: string;

  // --- HOURLY / DAY_USE ---
  @ApiPropertyOptional({
    description: 'Date for hourly/day-use booking. Format: YYYY-MM-DD',
    example: '2026-03-10',
  })
  @IsOptional()
  @IsString()
  date?: string;

  @ApiPropertyOptional({
    description: 'Start time for hourly/day-use. Format: HH:mm',
    example: '09:00',
  })
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiPropertyOptional({
    description: 'End time for hourly/day-use. Format: HH:mm',
    example: '13:00',
  })
  @IsOptional()
  @IsString()
  endTime?: string;

  // --- FILTERS ---
  @ApiPropertyOptional({
    description: 'Minimum room capacity (number of guests)',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;

  @ApiPropertyOptional({
    description: 'Required amenities filter',
    example: ['WiFi', 'Air Conditioning'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  // --- PAGINATION ---
  @ApiPropertyOptional({ description: 'Page number (1-based)', example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page', example: 20, default: 20 })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;
}

// ============================================================================
// RESPONSE — nested types
// ============================================================================

export class PriceBreakdownDto {
  @ApiProperty({ description: 'Base amount before adjustments', example: 1000000 })
  baseAmount: number;

  @ApiProperty({ description: 'Seasonal adjustment (+/-)', example: 50000 })
  seasonalAdjustment: number;

  @ApiProperty({ description: 'Occupancy-based adjustment (+/-)', example: 0 })
  occupancyAdjustment: number;

  @ApiProperty({ description: 'Length-of-stay discount (-)', example: -50000 })
  lengthOfStayDiscount: number;

  @ApiProperty({ description: 'Promotion/promo code discount (-)', example: 0 })
  promotionDiscount: number;

  @ApiProperty({ description: 'Taxes included in total', example: 100000 })
  taxes: number;
}

export class CancellationPolicySummaryDto {
  @ApiProperty({
    description: 'Policy type',
    enum: ['FREE_CANCELLATION', 'PARTIAL_REFUND', 'NON_REFUNDABLE'],
    example: 'FREE_CANCELLATION',
  })
  type: string;

  @ApiPropertyOptional({
    description: 'Hours before check-in deadline for free cancellation',
    example: 24,
  })
  deadlineHours?: number;

  @ApiPropertyOptional({
    description: 'Penalty percentage after deadline',
    example: 50,
  })
  penaltyPercent?: number;

  @ApiPropertyOptional({ description: 'Human-readable description' })
  description?: string;
}

export class RatePlanPricingDetail {
  @ApiProperty({ description: 'Rate plan ID', example: 'uuid' })
  ratePlanId: string;

  @ApiProperty({ description: 'Rate plan name', example: 'Best Available Rate' })
  ratePlanName: string;

  @ApiProperty({
    description: 'Meal plan included',
    example: 'BREAKFAST',
    nullable: true,
  })
  mealPlan: string | null;

  @ApiProperty({
    description: 'Payment type',
    example: 'PAY_NOW',
    nullable: true,
  })
  paymentType: string | null;

  @ApiProperty({
    description: 'Cancellation policy',
    type: CancellationPolicySummaryDto,
    nullable: true,
  })
  cancellationPolicy: CancellationPolicySummaryDto | null;

  @ApiProperty({
    description: 'Price per unit (per night for OVERNIGHT, per hour for HOURLY)',
    example: 1100000,
  })
  pricePerUnit: number;

  @ApiProperty({ description: 'Total price for the booking', example: 2200000 })
  totalPrice: number;

  @ApiProperty({
    description: 'Number of units (nights for OVERNIGHT, hours for HOURLY)',
    example: 2,
  })
  numberOfUnits: number;

  @ApiProperty({
    description: 'Detailed price breakdown',
    type: PriceBreakdownDto,
  })
  breakdown: PriceBreakdownDto;
}

export class RoomTypeSearchResult {
  @ApiProperty({ description: 'Room type ID', example: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Room type name', example: 'Deluxe Room' })
  name: string;

  @ApiPropertyOptional({ description: 'Room type description' })
  description: string | null;

  @ApiProperty({ description: 'Maximum guest capacity', example: 2 })
  capacity: number;

  @ApiProperty({ description: 'Number of beds', example: 1 })
  numberOfBeds: number;

  @ApiProperty({
    description: 'List of amenities',
    type: [String],
    example: ['WiFi', 'Air Conditioning', 'Mini Bar'],
  })
  amenities: string[];

  @ApiProperty({
    description: 'Room type images (URLs)',
    type: [String],
  })
  images: string[];

  @ApiProperty({
    description: 'Number of rooms available for the requested time range',
    example: 3,
  })
  availableCount: number;

  @ApiProperty({
    description: 'List of applicable rate plans with pricing',
    type: [RatePlanPricingDetail],
  })
  ratePlans: RatePlanPricingDetail[];
}

export class SearchRoomTypesResponse {
  @ApiProperty({
    description: 'List of room types with availability and rate plans',
    type: [RoomTypeSearchResult],
  })
  roomTypes: RoomTypeSearchResult[];

  @ApiProperty({ description: 'Total number of room types matching filters', example: 5 })
  total: number;

  @ApiProperty({ description: 'Current page (1-based)', example: 1 })
  page: number;

  @ApiProperty({ description: 'Items per page', example: 20 })
  limit: number;
}

export type SearchRoomTypesNatsResponse = NatsResponse<SearchRoomTypesResponse>;
