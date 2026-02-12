/**
 * Hourly Pricing Advanced Types
 *
 * Shared entity types for advanced hourly pricing patterns.
 * Includes tiered blocks, peak periods, and rate calculations.
 * All classes have @ApiProperty decorators for Swagger generation.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Hourly pricing rule with tiered blocks
 */
export class HourlyPricingRule {
  @ApiProperty({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440001' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  hotelId: string;

  @ApiProperty({ description: 'Room type ID', example: '550e8400-e29b-41d4-a716-446655440003' })
  roomTypeId: string;

  @ApiProperty({
    description: 'Tiered hourly blocks',
    type: () => [HourlyBlock],
    example: [
      { blockName: 'First 3 hours', fromHour: 1, toHour: 3, ratePerHour: 100000 },
      { blockName: 'Hours 4-6', fromHour: 4, toHour: 6, ratePerHour: 80000 },
    ],
  })
  hourlyBlocks: HourlyBlock[];

  @ApiProperty({ description: 'Minimum hours required', example: 3, minimum: 1, maximum: 24 })
  minHours: number;

  @ApiProperty({ description: 'Maximum hours allowed', example: 12, minimum: 1, maximum: 24 })
  maxHours: number;

  @ApiProperty({
    description: 'Pricing strategy',
    enum: ['TIERED', 'FLAT', 'HYBRID'],
    example: 'TIERED',
  })
  pricingStrategy: 'TIERED' | 'FLAT' | 'HYBRID';

  @ApiPropertyOptional({
    description: 'Fallback hourly rate',
    example: 80000,
    minimum: 0,
  })
  fallbackHourlyRate?: number;

  @ApiProperty({ description: 'Enable dynamic adjustments', example: false })
  enableDynamicAdjustments: boolean;

  @ApiProperty({ description: 'Currency code', example: 'VND', minLength: 3, maxLength: 3 })
  currency: string;

  @ApiPropertyOptional({
    description: 'Valid from date (ISO 8601)',
    example: '2025-01-01T00:00:00.000Z',
  })
  validFrom?: string;

  @ApiPropertyOptional({
    description: 'Valid to date (ISO 8601)',
    example: '2025-12-31T23:59:59.999Z',
  })
  validTo?: string;

  @ApiProperty({ description: 'Active status', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Priority for overlapping rules', example: 0 })
  priority: number;

  @ApiPropertyOptional({ description: 'Rule description', example: 'Standard hourly pricing' })
  description?: string;

  @ApiProperty({ description: 'Created at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' })
  updatedAt: string;

  @ApiPropertyOptional({
    description: 'Peak periods for this rule',
    type: () => [PeakPeriod],
  })
  peakPeriods?: PeakPeriod[];
}

/**
 * Tiered hour block for progressive pricing
 */
export class HourlyBlock {
  @ApiProperty({
    description: 'Block name',
    example: 'First 3 hours',
  })
  blockName: string;

  @ApiProperty({
    description: 'Starting hour (1-based)',
    example: 1,
    minimum: 1,
  })
  fromHour: number;

  @ApiProperty({
    description: 'Ending hour (inclusive)',
    example: 3,
    minimum: 1,
  })
  toHour: number;

  @ApiProperty({
    description: 'Rate per hour',
    example: 100000,
    minimum: 0,
  })
  ratePerHour: number;

  @ApiPropertyOptional({
    description: 'Charge flat amount instead of per hour',
    example: false,
  })
  isFlat?: boolean;

  @ApiPropertyOptional({
    description: 'Flat amount (if isFlat = true)',
    example: 150000,
    minimum: 0,
  })
  flatAmount?: number;
}

/**
 * Peak/off-peak period adjustment
 */
export class PeakPeriod {
  @ApiProperty({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440010' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  hotelId: string;

  @ApiProperty({
    description: 'Hourly pricing rule ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  hourlyPricingRuleId: string;

  @ApiProperty({ description: 'Period name', example: 'Business Hours (Mon-Fri 9AM-6PM)' })
  periodName: string;

  @ApiProperty({ description: 'Start time (HH:00)', example: '09:00' })
  startTime: string;

  @ApiProperty({ description: 'End time (HH:00)', example: '18:00' })
  endTime: string;

  @ApiProperty({
    description: 'Days of week (0=Sunday, 6=Saturday)',
    example: [1, 2, 3, 4, 5],
    isArray: true,
  })
  daysOfWeek: number[];

  @ApiProperty({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  adjustmentType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({ description: 'Multiplier or fixed amount', example: 1.2 })
  multiplier: number;

  @ApiPropertyOptional({
    description: 'Fixed adjustment amount',
    example: 50000,
  })
  fixedAdjustment?: number;

  @ApiProperty({ description: 'Active status', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Priority', example: 0 })
  priority: number;

  @ApiProperty({ description: 'Created at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at (ISO 8601)', example: '2025-01-01T00:00:00.000Z' })
  updatedAt: string;
}

/**
 * Hourly rate calculation result with breakdown
 */
export class HourlyRateCalculation {
  @ApiProperty({ description: 'Room type ID', example: '550e8400-e29b-41d4-a716-446655440003' })
  roomTypeId: string;

  @ApiProperty({ description: 'Check-in date', example: '2025-12-24' })
  checkIn: string;

  @ApiProperty({ description: 'Start time', example: '14:00' })
  startTime: string;

  @ApiProperty({ description: 'End time', example: '18:00' })
  endTime: string;

  @ApiProperty({ description: 'Total hours', example: 4 })
  totalHours: number;

  @ApiProperty({
    description: 'Block calculations',
    type: () => [HourlyBlockCalculation],
  })
  blocks: HourlyBlockCalculation[];

  @ApiProperty({ description: 'Base total before adjustments', example: 350000 })
  baseTotal: number;

  @ApiProperty({
    description: 'Peak period adjustments',
    type: () => [PeakAdjustmentCalculation],
  })
  peakAdjustments: PeakAdjustmentCalculation[];

  @ApiProperty({ description: 'Occupancy adjustment amount', example: 0 })
  occupancyAdjustment: number;

  @ApiProperty({ description: 'Seasonal adjustment amount', example: 0 })
  seasonalAdjustment: number;

  @ApiProperty({ description: 'Promotion discount amount', example: 0 })
  promotionDiscount: number;

  @ApiProperty({ description: 'Final total after all adjustments', example: 350000 })
  finalTotal: number;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  currency: string;
}

/**
 * Calculation breakdown for a single block
 */
export class HourlyBlockCalculation {
  @ApiProperty({ description: 'Block name', example: 'First 3 hours' })
  blockName: string;

  @ApiProperty({ description: 'Hours in this block', example: 3 })
  hours: number;

  @ApiProperty({ description: 'Rate per hour', example: 100000 })
  ratePerHour: number;

  @ApiProperty({ description: 'Subtotal for this block', example: 300000 })
  subtotal: number;

  @ApiProperty({ description: 'Is flat rate', example: false })
  isFlat: boolean;
}

/**
 * Peak period adjustment in calculation
 */
export class PeakAdjustmentCalculation {
  @ApiProperty({ description: 'Period name', example: 'Business Hours' })
  periodName: string;

  @ApiProperty({ description: 'Hours affected', example: 4 })
  hours: number;

  @ApiProperty({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  adjustmentType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({ description: 'Adjustment value (multiplier or amount)', example: 1.2 })
  adjustmentValue: number;

  @ApiProperty({ description: 'Total adjustment amount', example: 70000 })
  amount: number;
}
