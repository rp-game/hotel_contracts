/**
 * Hourly Pricing NATS Contracts (9 patterns)
 *
 * All DTOs are classes with @ApiProperty decorators for Swagger generation.
 * Used for both NATS messages and REST API DTOs.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsArray,
  IsInt,
  IsEnum,
  IsNumber,
  IsBoolean,
  IsDateString,
  IsOptional,
  ValidateNested,
  Matches,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';
import { HourlyPricingRule, PeakPeriod, HourlyRateCalculation } from '../types';

// ============================================
// Hourly Block (Nested DTO)
// ============================================

export class HourlyBlockDto {
  @ApiProperty({
    description: 'Block name (e.g., "First 3 hours", "Hours 4-6")',
    example: 'First 3 hours',
  })
  @IsString()
  blockName: string;

  @ApiProperty({
    description: 'Starting hour (1-based: 1 = first hour)',
    example: 1,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  fromHour: number;

  @ApiProperty({
    description: 'Ending hour (inclusive: 3 = up to 3rd hour)',
    example: 3,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  toHour: number;

  @ApiProperty({
    description: 'Rate per hour in this block',
    example: 100000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  ratePerHour: number;

  @ApiPropertyOptional({
    description: 'If true, charge a flat amount for the entire block instead of per hour',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isFlat?: boolean;

  @ApiPropertyOptional({
    description: 'Flat amount to charge for this block (only used if isFlat = true)',
    example: 150000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  flatAmount?: number;
}

// ============================================
// Create Hourly Pricing Rule
// ============================================

export class CreateHourlyPricingRuleDto {
  @ApiProperty({
    description: 'Room type ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({
    description: 'Array of tiered hourly blocks',
    type: [HourlyBlockDto],
    example: [
      {
        blockName: 'First 3 hours',
        fromHour: 1,
        toHour: 3,
        ratePerHour: 100000,
      },
      {
        blockName: 'Hours 4-6',
        fromHour: 4,
        toHour: 6,
        ratePerHour: 80000,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HourlyBlockDto)
  hourlyBlocks: HourlyBlockDto[];

  @ApiProperty({
    description: 'Minimum hours required for hourly booking',
    example: 3,
    minimum: 1,
    maximum: 24,
  })
  @IsInt()
  @Min(1)
  @Max(24)
  minHours: number;

  @ApiProperty({
    description: 'Maximum hours allowed before switching to overnight rate',
    example: 12,
    minimum: 1,
    maximum: 24,
  })
  @IsInt()
  @Min(1)
  @Max(24)
  maxHours: number;

  @ApiProperty({
    description:
      'Pricing strategy: TIERED (use hourlyBlocks), FLAT (fixed rate), HYBRID (blocks then flat)',
    enum: ['TIERED', 'FLAT', 'HYBRID'],
    example: 'TIERED',
  })
  @IsEnum(['TIERED', 'FLAT', 'HYBRID'])
  pricingStrategy: 'TIERED' | 'FLAT' | 'HYBRID';

  @ApiPropertyOptional({
    description: 'Fallback hourly rate if no blocks match or strategy is FLAT',
    example: 80000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  fallbackHourlyRate?: number;

  @ApiProperty({
    description: 'Enable occupancy, seasonal, and promotional adjustments',
    example: false,
  })
  @IsBoolean()
  enableDynamicAdjustments: boolean;

  @ApiProperty({
    description: 'Currency code (e.g., VND, USD)',
    example: 'VND',
    minLength: 3,
    maxLength: 3,
  })
  @IsString()
  currency: string;

  @ApiPropertyOptional({
    description: 'Start date (when this rule becomes valid)',
    example: '2025-01-01',
  })
  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @ApiPropertyOptional({
    description: 'End date (when this rule expires)',
    example: '2025-12-31',
  })
  @IsOptional()
  @IsDateString()
  validTo?: string;

  @ApiProperty({
    description: 'Priority for overlapping rules (higher value = higher priority)',
    example: 0,
  })
  @IsInt()
  priority: number;

  @ApiPropertyOptional({
    description: 'Rule description',
    example: 'Standard hourly pricing for Standard room type',
  })
  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateHourlyPricingRuleRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Hourly pricing rule data', type: CreateHourlyPricingRuleDto })
  @ValidateNested()
  @Type(() => CreateHourlyPricingRuleDto)
  dto: CreateHourlyPricingRuleDto;
}

export class CreateHourlyPricingRuleResponse {
  @ApiProperty({ description: 'Created hourly pricing rule', type: () => HourlyPricingRule })
  data: HourlyPricingRule;
}

export type CreateHourlyPricingRuleNatsResponse = NatsResponse<CreateHourlyPricingRuleResponse>;

// ============================================
// Update Hourly Pricing Rule
// ============================================

export class UpdateHourlyPricingRuleDto {
  @ApiPropertyOptional({
    description: 'Array of tiered hourly blocks',
    type: [HourlyBlockDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HourlyBlockDto)
  hourlyBlocks?: HourlyBlockDto[];

  @ApiPropertyOptional({
    description: 'Minimum hours required for hourly booking',
    minimum: 1,
    maximum: 24,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(24)
  minHours?: number;

  @ApiPropertyOptional({
    description: 'Maximum hours allowed before switching to overnight rate',
    minimum: 1,
    maximum: 24,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(24)
  maxHours?: number;

  @ApiPropertyOptional({
    description: 'Pricing strategy',
    enum: ['TIERED', 'FLAT', 'HYBRID'],
  })
  @IsOptional()
  @IsEnum(['TIERED', 'FLAT', 'HYBRID'])
  pricingStrategy?: 'TIERED' | 'FLAT' | 'HYBRID';

  @ApiPropertyOptional({
    description: 'Fallback hourly rate',
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  fallbackHourlyRate?: number;

  @ApiPropertyOptional({
    description: 'Enable dynamic adjustments',
  })
  @IsOptional()
  @IsBoolean()
  enableDynamicAdjustments?: boolean;

  @ApiPropertyOptional({
    description: 'Start date',
  })
  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @ApiPropertyOptional({
    description: 'End date',
  })
  @IsOptional()
  @IsDateString()
  validTo?: string;

  @ApiPropertyOptional({
    description: 'Priority for overlapping rules',
  })
  @IsOptional()
  @IsInt()
  priority?: number;

  @ApiPropertyOptional({
    description: 'Rule description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Whether rule is active',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateHourlyPricingRuleRequest {
  @ApiProperty({ description: 'Hourly pricing rule ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Update data', type: UpdateHourlyPricingRuleDto })
  @ValidateNested()
  @Type(() => UpdateHourlyPricingRuleDto)
  dto: UpdateHourlyPricingRuleDto;
}

export class UpdateHourlyPricingRuleResponse {
  @ApiProperty({ description: 'Updated hourly pricing rule', type: () => HourlyPricingRule })
  data: HourlyPricingRule;
}

export type UpdateHourlyPricingRuleNatsResponse = NatsResponse<UpdateHourlyPricingRuleResponse>;

// ============================================
// Find One Hourly Pricing Rule
// ============================================

export class FindOneHourlyPricingRuleRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;
}

export class FindOneHourlyPricingRuleResponse {
  @ApiProperty({ description: 'Hourly pricing rule', type: () => HourlyPricingRule })
  data: HourlyPricingRule;
}

export type FindOneHourlyPricingRuleNatsResponse = NatsResponse<FindOneHourlyPricingRuleResponse>;

// ============================================
// Find All Hourly Pricing Rules
// ============================================

export class FindAllHourlyPricingRulesRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;
}

export class FindAllHourlyPricingRulesResponse {
  @ApiProperty({ description: 'List of hourly pricing rules', type: () => [HourlyPricingRule] })
  data: HourlyPricingRule[];
}

export type FindAllHourlyPricingRulesNatsResponse = NatsResponse<FindAllHourlyPricingRulesResponse>;

// ============================================
// Delete Hourly Pricing Rule
// ============================================

export class DeleteHourlyPricingRuleRequest {
  @ApiProperty({ description: 'Hourly pricing rule ID' })
  @IsUUID()
  id: string;
}

export class DeleteHourlyPricingRuleResponse {
  @ApiProperty({ description: 'Success message', example: 'Rule deleted successfully' })
  message: string;
}

export type DeleteHourlyPricingRuleNatsResponse = NatsResponse<DeleteHourlyPricingRuleResponse>;

// ============================================
// Create Peak Period
// ============================================

export class CreatePeakPeriodDto {
  @ApiProperty({
    description: 'Peak period name',
    example: 'Business Hours (Mon-Fri 9AM-6PM)',
  })
  @IsString()
  periodName: string;

  @ApiProperty({
    description: 'Start time in HH:00 format',
    example: '09:00',
    pattern: '^([0-1][0-9]|2[0-3]):00$',
  })
  @IsString()
  @Matches(/^([0-1][0-9]|2[0-3]):00$/, {
    message: 'Start time must be in HH:00 format (e.g., 09:00, 18:00)',
  })
  startTime: string;

  @ApiProperty({
    description: 'End time in HH:00 format',
    example: '18:00',
    pattern: '^([0-1][0-9]|2[0-3]):00$',
  })
  @IsString()
  @Matches(/^([0-1][0-9]|2[0-3]):00$/, {
    message: 'End time must be in HH:00 format (e.g., 09:00, 18:00)',
  })
  endTime: string;

  @ApiProperty({
    description: 'Days of week (0=Sunday, 1=Monday, ..., 6=Saturday)',
    example: [1, 2, 3, 4, 5],
    isArray: true,
  })
  @IsArray()
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  daysOfWeek: number[];

  @ApiProperty({
    description: 'Adjustment type: PERCENTAGE (1.2 = 20% increase) or FIXED amount',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  @IsEnum(['PERCENTAGE', 'FIXED'])
  adjustmentType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({
    description:
      'Multiplier (for PERCENTAGE): 1.2 = 20% increase, 0.8 = 20% decrease. Or fixed amount (for FIXED type)',
    example: 1.2,
  })
  @IsNumber()
  multiplier: number;

  @ApiPropertyOptional({
    description: 'Fixed adjustment amount (only used if adjustmentType = FIXED)',
    example: 50000,
  })
  @IsOptional()
  @IsNumber()
  fixedAdjustment?: number;

  @ApiProperty({
    description: 'Priority for overlapping periods (higher = applied first)',
    example: 0,
  })
  @IsInt()
  priority: number;
}

export class CreatePeakPeriodRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Hourly pricing rule ID' })
  @IsUUID()
  ruleId: string;

  @ApiProperty({ description: 'Peak period data', type: CreatePeakPeriodDto })
  @ValidateNested()
  @Type(() => CreatePeakPeriodDto)
  dto: CreatePeakPeriodDto;
}

export class CreatePeakPeriodResponse {
  @ApiProperty({ description: 'Created peak period', type: () => PeakPeriod })
  data: PeakPeriod;
}

export type CreatePeakPeriodNatsResponse = NatsResponse<CreatePeakPeriodResponse>;

// ============================================
// Update Peak Period
// ============================================

export class UpdatePeakPeriodDto {
  @ApiPropertyOptional({
    description: 'Peak period name',
  })
  @IsOptional()
  @IsString()
  periodName?: string;

  @ApiPropertyOptional({
    description: 'Start time in HH:00 format',
    pattern: '^([0-1][0-9]|2[0-3]):00$',
  })
  @IsOptional()
  @IsString()
  @Matches(/^([0-1][0-9]|2[0-3]):00$/, {
    message: 'Start time must be in HH:00 format',
  })
  startTime?: string;

  @ApiPropertyOptional({
    description: 'End time in HH:00 format',
    pattern: '^([0-1][0-9]|2[0-3]):00$',
  })
  @IsOptional()
  @IsString()
  @Matches(/^([0-1][0-9]|2[0-3]):00$/, {
    message: 'End time must be in HH:00 format',
  })
  endTime?: string;

  @ApiPropertyOptional({
    description: 'Days of week',
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  daysOfWeek?: number[];

  @ApiPropertyOptional({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
  })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'FIXED'])
  adjustmentType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({
    description: 'Multiplier or fixed amount',
  })
  @IsOptional()
  @IsNumber()
  multiplier?: number;

  @ApiPropertyOptional({
    description: 'Fixed adjustment amount',
  })
  @IsOptional()
  @IsNumber()
  fixedAdjustment?: number;

  @ApiPropertyOptional({
    description: 'Whether period is active',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Priority',
  })
  @IsOptional()
  @IsInt()
  priority?: number;
}

export class UpdatePeakPeriodRequest {
  @ApiProperty({ description: 'Peak period ID' })
  @IsUUID()
  periodId: string;

  @ApiProperty({ description: 'Update data', type: UpdatePeakPeriodDto })
  @ValidateNested()
  @Type(() => UpdatePeakPeriodDto)
  dto: UpdatePeakPeriodDto;
}

export class UpdatePeakPeriodResponse {
  @ApiProperty({ description: 'Updated peak period', type: () => PeakPeriod })
  data: PeakPeriod;
}

export type UpdatePeakPeriodNatsResponse = NatsResponse<UpdatePeakPeriodResponse>;

// ============================================
// Delete Peak Period
// ============================================

export class DeletePeakPeriodRequest {
  @ApiProperty({ description: 'Peak period ID' })
  @IsUUID()
  periodId: string;
}

export class DeletePeakPeriodResponse {
  @ApiProperty({ description: 'Success message', example: 'Peak period deleted successfully' })
  message: string;
}

export type DeletePeakPeriodNatsResponse = NatsResponse<DeletePeakPeriodResponse>;

// ============================================
// Calculate Hourly Rate
// ============================================

export class CalculateHourlyRateRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({
    description: 'Check-in date (YYYY-MM-DD)',
    example: '2025-12-24',
  })
  @IsDateString()
  checkIn: string;

  @ApiProperty({
    description: 'Start time in HH:00 format',
    example: '14:00',
  })
  @IsString()
  startTime: string;

  @ApiProperty({
    description: 'End time in HH:00 format',
    example: '18:00',
  })
  @IsString()
  endTime: string;

  @ApiPropertyOptional({
    description: 'Occupancy adjustment multiplier',
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  occupancyAdjustment?: number;

  @ApiPropertyOptional({
    description: 'Seasonal adjustment multiplier',
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  seasonalAdjustment?: number;

  @ApiPropertyOptional({
    description: 'Promotion discount amount',
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  promotionDiscount?: number;
}

export class CalculateHourlyRateResponse {
  @ApiProperty({ description: 'Hourly rate calculation result', type: () => HourlyRateCalculation })
  data: HourlyRateCalculation;
}

export type CalculateHourlyRateNatsResponse = NatsResponse<CalculateHourlyRateResponse>;
