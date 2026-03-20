/**
 * Blackout Period Type
 *
 * Represents a date range during which a rate plan is hidden from booking.
 * Used for peak seasons (Tet, Christmas, etc.) to prevent discounted rates.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class BlackoutPeriodDto {
  @ApiProperty({
    description: 'Blackout period start date (YYYY-MM-DD)',
    example: '2026-01-28',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'Blackout period end date (YYYY-MM-DD)',
    example: '2026-02-02',
  })
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional({
    description: 'Reason for blackout (e.g. Tet Holiday, Christmas)',
    example: 'Tet Holiday',
  })
  @IsOptional()
  @IsString()
  reason?: string;
}
