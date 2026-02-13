/**
 * Pricing Domain Types
 */

import { RatePlanType, RatePlanStatus } from '../enums';

/**
 * Rate Plan entity
 */
export interface RatePlan {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  description?: string;
  type: RatePlanType;
  status: RatePlanStatus;
  basePrice: number;
  currency: string;
  roomTypeId: string;
  roomTypeName: string;
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Hourly pricing tier
 */
export interface HourlyPricingTier {
  id: string;
  tenantId: string;
  hotelId: string;
  roomTypeId: string;
  name: string;
  pricePerHour: number;
  currency: string;
  checkInTime: string; // "HH:mm" format
  checkOutTime: string; // "HH:mm" format
  maxStayHours: number;
  minStayHours: number;
  status: RatePlanStatus;
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Date-based rate definition
 */
export interface DateRate {
  id: string;
  tenantId: string;
  hotelId: string;
  ratePlanId: string;
  roomTypeId: string;
  date: string; // YYYY-MM-DD
  pricePerNight: number;
  minStay?: number;
  maxStay?: number;
  status: 'ACTIVE' | 'BLOCKED' | 'CLOSED';
  createdAt: string;
  updatedAt: string;
}

/**
 * Price modifier (discount, surcharge)
 */
export interface PriceModifier {
  id: string;
  tenantId: string;
  hotelId: string;
  name: string;
  type: 'DISCOUNT' | 'SURCHARGE';
  value: number;
  unit: 'PERCENTAGE' | 'FIXED';
  applicableTo: 'NIGHTLY' | 'HOURLY' | 'BOTH';
  validFrom: string;
  validTo: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// Request DTOs
// ============================================================================

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsNumber, IsUUID } from 'class-validator';

/**
 * Create rate plan request
 */
export class CreateRatePlanDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Rate plan name', example: 'Best Available Rate' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'BASE' })
  @IsEnum(['BASE', 'DERIVED'])
  type: 'BASE' | 'DERIVED';

  @ApiPropertyOptional({ description: 'Parent rate plan ID (required for DERIVED types)' })
  @IsOptional()
  @IsUUID()
  parentRatePlanId?: string;

  @ApiPropertyOptional({ description: 'How to calculate derived price from parent', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'AMOUNT'])
  derivationType?: 'PERCENTAGE' | 'AMOUNT';

  @ApiPropertyOptional({ description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10', example: 4 })
  @IsOptional()
  @IsNumber()
  derivationValue?: number;

  @ApiPropertyOptional({ description: 'Optional description of the rate plan', example: 'Standard rate plan for all channels' })
  @IsOptional()
  @IsString()
  description?: string;
}

// ============================================================================
// Response DTOs
// ============================================================================
// Note: Request DTOs UpdateRatePlanDto and CreateChannelMappingDto are in nats/rate-plans.nats.ts

/**
 * Rate plan response
 */
export class RatePlanResponseDto {
  @ApiProperty({ description: 'Rate plan ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Rate plan name', example: 'Best Available Rate' })
  name: string;

  @ApiProperty({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'BASE' })
  type: 'BASE' | 'DERIVED';

  @ApiPropertyOptional({ description: 'Parent rate plan ID (for DERIVED types)' })
  parentRatePlanId?: string;

  @ApiPropertyOptional({ description: 'How to calculate derived price from parent', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' })
  derivationType?: 'PERCENTAGE' | 'AMOUNT';

  @ApiPropertyOptional({ description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10', example: 4 })
  derivationValue?: number;

  @ApiPropertyOptional({ description: 'Optional description of the rate plan', example: 'Standard rate plan for all channels' })
  description?: string;

  @ApiProperty({ description: 'Whether the rate plan is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;

  @ApiPropertyOptional({ description: 'Parent rate plan details (when included)', type: () => RatePlanResponseDto })
  parentRatePlan?: RatePlanResponseDto;

  @ApiPropertyOptional({ description: 'Channel mappings (when included)', type: () => [ChannelRateMappingResponseDto] })
  channelMappings?: ChannelRateMappingResponseDto[];
}

/**
 * Channel rate mapping response
 */
export class ChannelRateMappingResponseDto {
  @ApiProperty({ description: 'Mapping ID' })
  id: string;

  @ApiProperty({ description: 'Rate plan ID' })
  ratePlanId: string;

  @ApiProperty({ description: 'Channel provider type', example: 'STAAH' })
  channelProvider: string;

  @ApiProperty({ description: 'Channel name (OTA)', example: 'Booking.com' })
  channelName: string;

  @ApiPropertyOptional({ description: 'External rate plan ID in the channel manager or OTA system', example: 'STAAH194181' })
  externalRateId?: string;

  @ApiProperty({ description: 'Whether the mapping is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

/**
 * Calculate price response
 */
export class CalculatePriceResponseDto {
  @ApiProperty({ description: 'Rate plan ID' })
  ratePlanId: string;

  @ApiProperty({ description: 'Rate plan name', example: 'BAR + 4%' })
  ratePlanName: string;

  @ApiProperty({ description: 'Rate plan type', enum: ['BASE', 'DERIVED'], example: 'DERIVED' })
  type: 'BASE' | 'DERIVED';

  @ApiProperty({ description: 'Base price input', example: 250 })
  basePrice: number;

  @ApiPropertyOptional({ description: 'Derivation type', enum: ['PERCENTAGE', 'AMOUNT'], example: 'PERCENTAGE' })
  derivationType?: 'PERCENTAGE' | 'AMOUNT';

  @ApiPropertyOptional({ description: 'Derivation value', example: 4 })
  derivationValue?: number;

  @ApiProperty({ description: 'Final calculated price', example: 260 })
  calculatedPrice: number;
}

/**
 * Get rate plans response
 */
export class GetRatePlansResponseDto {
  @ApiProperty({ description: 'List of rate plans', type: [RatePlanResponseDto] })
  data: RatePlanResponseDto[];
}
