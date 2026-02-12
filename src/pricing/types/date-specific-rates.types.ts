/**
 * Date-Specific Rates Types
 *
 * Shared types for date-specific pricing patterns.
 * Handles special pricing for specific dates (holidays, events, etc.)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Date-specific rate entity
 */
export class SpecificDateRate {
  @ApiProperty({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440099' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  roomTypeId: string;

  @ApiProperty({ description: 'Specific date (YYYY-MM-DD)', example: '2025-12-25' })
  date: string;

  @ApiProperty({ description: 'Rate for this specific date', example: 250, minimum: 0 })
  rate: number;

  @ApiProperty({ description: 'Currency code', example: 'USD', default: 'USD' })
  currency: string;

  @ApiPropertyOptional({ description: 'Notes about this date (e.g., "Christmas Day")', example: 'Holiday premium pricing' })
  notes?: string;

  @ApiProperty({ description: 'Whether this rate is active', example: true, default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp', example: '2025-10-05T10:30:00Z' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp', example: '2025-10-05T10:30:00Z' })
  updatedAt: string;
}

/**
 * Single day in calendar view
 */
export class SpecificDateRateCalendarDay {
  @ApiProperty({ description: 'Date (YYYY-MM-DD)', example: '2025-12-25' })
  date: string;

  @ApiPropertyOptional({ description: 'Rate for this date', example: 250, minimum: 0 })
  rate?: number;

  @ApiPropertyOptional({ description: 'Currency code', example: 'USD' })
  currency?: string;

  @ApiPropertyOptional({ description: 'Notes about this date', example: 'Christmas Day' })
  notes?: string;

  @ApiProperty({ description: 'Whether this rate is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Whether this date has a special rate defined', example: true })
  hasSpecialRate: boolean;
}

/**
 * Calendar view of date rates for a room type
 */
export class SpecificDateRateCalendar {
  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  roomTypeId: string;

  @ApiProperty({ description: 'Calendar start date (YYYY-MM-DD)', example: '2025-12-01' })
  startDate: string;

  @ApiProperty({ description: 'Calendar end date (YYYY-MM-DD)', example: '2025-12-31' })
  endDate: string;

  @ApiProperty({
    description: 'Array of calendar days with rate information',
    type: [SpecificDateRateCalendarDay],
    example: [
      { date: '2025-12-25', rate: 250, currency: 'USD', notes: 'Christmas', isActive: true, hasSpecialRate: true },
      { date: '2025-12-26', isActive: false, hasSpecialRate: false },
    ],
  })
  dates: SpecificDateRateCalendarDay[];
}

/**
 * Bulk create result
 */
export class BulkCreateDateRatesResult {
  @ApiProperty({ description: 'Number of rates successfully created', example: 3, minimum: 0 })
  created: number;

  @ApiProperty({
    description: 'Dates that were created',
    type: [String],
    example: ['2025-12-24', '2025-12-25', '2025-12-31'],
  })
  dates: string[];

  @ApiPropertyOptional({ description: 'Number of rates skipped (duplicates)', example: 0, minimum: 0, default: 0 })
  skipped?: number;

  @ApiPropertyOptional({
    description: 'Error messages for failed creates',
    type: [String],
    example: [],
    default: [],
  })
  errors?: string[];
}
