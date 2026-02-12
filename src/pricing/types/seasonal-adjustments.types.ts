/**
 * Seasonal Adjustments Types
 *
 * Shared types for seasonal pricing adjustment patterns.
 * Handles rate adjustments for different seasons/periods.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Seasonal adjustment entity
 */
export class SeasonalAdjustment {
  @ApiProperty({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440050' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  roomTypeId: string;

  @ApiProperty({ description: 'Season name', example: 'Summer 2025', maxLength: 100 })
  seasonName: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' })
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' })
  endDate: string;

  @ApiProperty({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE'
  })
  adjustmentType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({
    description: 'Adjustment value (percentage or fixed amount)',
    example: 20,
    minimum: -100,
    maximum: 1000
  })
  adjustmentValue: number;

  @ApiPropertyOptional({ description: 'Description', example: 'Peak summer season pricing' })
  description?: string;

  @ApiProperty({ description: 'Is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Created at', example: '2025-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at', example: '2025-01-01T00:00:00.000Z' })
  updatedAt: string;
}

/**
 * Seasonal period definition
 */
export interface SeasonalPeriod {
  name: string;
  startDate: string;
  endDate: string;
  adjustmentType: 'PERCENTAGE' | 'FIXED';
  adjustmentValue: number;
  isActive: boolean;
}

/**
 * Common seasonal periods
 */
export const CommonSeasonalPeriods: Record<string, Omit<SeasonalPeriod, 'isActive'>> = {
  LUNAR_NEW_YEAR: {
    name: 'Lunar New Year',
    startDate: '01-25',
    endDate: '02-10',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 50,
  },
  SUMMER_HIGH: {
    name: 'Summer High Season',
    startDate: '06-01',
    endDate: '08-31',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 30,
  },
  CHRISTMAS_NEW_YEAR: {
    name: 'Christmas & New Year',
    startDate: '12-20',
    endDate: '01-05',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: 40,
  },
  LOW_SEASON: {
    name: 'Low Season',
    startDate: '09-01',
    endDate: '11-30',
    adjustmentType: 'PERCENTAGE',
    adjustmentValue: -20,
  },
};
