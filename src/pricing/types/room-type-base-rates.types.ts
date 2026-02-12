/**
 * Room Type Base Rates Types
 *
 * Shared types for room type base rate patterns.
 * Foundation layer - simple base pricing per room type.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Room type base rate entity
 */
export class RoomTypeBaseRate {
  @ApiProperty({ description: 'Base rate ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Base rate amount' })
  baseRate: number;

  @ApiPropertyOptional({ description: 'Weekday rate' })
  weekdayRate?: number;

  @ApiPropertyOptional({ description: 'Weekend rate' })
  weekendRate?: number;

  @ApiPropertyOptional({ description: 'Hourly rate' })
  hourlyRate?: number;

  @ApiProperty({ description: 'Whether to use weekday/weekend pricing' })
  useWeekdayWeekend: boolean;

  @ApiProperty({ description: 'Currency code' })
  currency: string;

  @ApiProperty({ description: 'Whether the rate is active' })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

/**
 * Rate by day of week
 */
export interface RateByDay {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

/**
 * Bulk upsert result
 */
export interface BulkUpsertBaseRatesResult {
  upserted: number;
  failed: number;
  errors: string[];
  rates: RoomTypeBaseRate[];
}
