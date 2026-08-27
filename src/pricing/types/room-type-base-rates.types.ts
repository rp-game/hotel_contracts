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

  @ApiPropertyOptional({ description: 'Room type this rate derives its base price from (single-level reference only)' })
  parentRoomTypeId?: string | null;

  @ApiPropertyOptional({ description: 'Derivation formula applied to parent room type\'s rates', enum: ['PERCENTAGE', 'AMOUNT'] })
  derivationType?: 'PERCENTAGE' | 'AMOUNT' | null;

  @ApiPropertyOptional({ description: 'Derivation value (percent or fixed amount depending on derivationType)' })
  derivationValue?: number | null;

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

// ============================================================================
// Response Wrapper DTOs
// ============================================================================

/**
 * Get room type base rates response
 */
export class GetRoomTypeBaseRatesResponseDto {
  @ApiProperty({ type: [RoomTypeBaseRate], description: 'List of room type base rates' })
  data: RoomTypeBaseRate[];
}

/**
 * Upsert room type base rate response
 */
export class UpsertRoomTypeBaseRateResponseDto {
  @ApiProperty({ type: RoomTypeBaseRate, description: 'Upserted room type base rate' })
  data: RoomTypeBaseRate;
}

/**
 * Bulk upsert room type base rates response
 */
export class BulkUpsertRoomTypeBaseRatesResponseDto {
  @ApiProperty({ type: [RoomTypeBaseRate], description: 'Upserted room type base rates' })
  data: RoomTypeBaseRate[];
}

// ============================================================================
// Request DTOs
// ============================================================================

import { IsString, IsUUID, IsOptional, IsNumber, IsBoolean, IsArray, IsIn, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Upsert room type base rate request
 */
export class UpsertRoomTypeBaseRateRequestDto {
  @ApiPropertyOptional({ description: 'Base rate price', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  baseRate?: number;

  @ApiPropertyOptional({ description: 'Weekday rate (Mon-Thu)', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weekdayRate?: number;

  @ApiPropertyOptional({ description: 'Weekend rate (Fri-Sun)', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weekendRate?: number;

  @ApiPropertyOptional({ description: 'Enable weekday/weekend pricing', default: false })
  @IsOptional()
  @IsBoolean()
  useWeekdayWeekend?: boolean;

  @ApiPropertyOptional({ description: 'Hourly rate for hourly bookings', minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  hourlyRate?: number;

  @ApiPropertyOptional({ description: 'Currency code', default: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Whether this rate is active', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    description:
      'Room type to derive base price from. Omit field entirely to leave existing reference untouched; send null to explicitly clear it (revert to independent manual pricing).',
    nullable: true,
  })
  @IsOptional()
  @IsUUID()
  parentRoomTypeId?: string | null;

  @ApiPropertyOptional({ description: 'Derivation formula applied to parent room type\'s rates', enum: ['PERCENTAGE', 'AMOUNT'], nullable: true })
  @IsOptional()
  @IsIn(['PERCENTAGE', 'AMOUNT'])
  derivationType?: 'PERCENTAGE' | 'AMOUNT' | null;

  @ApiPropertyOptional({ description: 'Derivation value (percent or fixed amount depending on derivationType)', nullable: true })
  @IsOptional()
  @IsNumber()
  derivationValue?: number | null;
}

/**
 * Room type base rate item for bulk operations
 */
export class RoomTypeBaseRateItemDto {
  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Base rate price', minimum: 0 })
  @IsNumber()
  @Min(0)
  baseRate: number;

  @ApiPropertyOptional({ description: 'Currency code' })
  @IsOptional()
  @IsString()
  currency?: string;
}

/**
 * Bulk upsert room type base rates request
 */
export class BulkUpsertRoomTypeBaseRatesRequestDto {
  @ApiProperty({ type: [RoomTypeBaseRateItemDto], description: 'Array of room type base rates to upsert' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RoomTypeBaseRateItemDto)
  rates: RoomTypeBaseRateItemDto[];
}
