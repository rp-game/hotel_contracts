/**
 * Extra Person Charges Types
 *
 * Shared types for extra person pricing patterns.
 * Handles additional charges when occupancy exceeds standard capacity.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsString, IsOptional, IsBoolean, Min, Max } from 'class-validator';

/**
 * Extra person charge configuration
 */
export class ExtraPersonCharge {
  @ApiProperty({ description: 'Charge ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID' })
  roomTypeId: string;

  @ApiProperty({ description: 'Standard occupancy (base price includes this many people)', example: 2, minimum: 1 })
  standardOccupancy: number;

  @ApiProperty({ description: 'Maximum allowed occupancy', example: 4, minimum: 1 })
  maxOccupancy: number;

  @ApiProperty({ description: 'Extra charge per adult beyond standard occupancy', example: 200000, minimum: 0 })
  extraAdultCharge: number;

  @ApiPropertyOptional({ description: 'Extra charge per child beyond standard occupancy', example: 100000, minimum: 0 })
  extraChildCharge?: number;

  @ApiProperty({ description: 'Children are defined as under this age', example: 12, minimum: 1, maximum: 18 })
  childMaxAge: number;

  @ApiProperty({ description: 'Currency code', example: 'VND' })
  currency: string;

  @ApiProperty({ description: 'Is active', example: true })
  isActive: boolean;

  @ApiProperty({ description: 'Created at timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  updatedAt: string;
}

/**
 * Breakdown of charges for a specific booking
 */
export class ChargeBreakdown {
  @ApiProperty({ description: 'Base rate' })
  baseRate: number;

  @ApiProperty({ description: 'Number of extra adults' })
  extraAdults: number;

  @ApiProperty({ description: 'Number of extra children' })
  extraChildren: number;

  @ApiProperty({ description: 'Charge per extra adult' })
  extraAdultCharge: number;

  @ApiProperty({ description: 'Charge per extra child' })
  extraChildCharge: number;

  @ApiProperty({ description: 'Total extra charges' })
  totalExtraCharges: number;

  @ApiProperty({ description: 'Total rate including extras' })
  totalRate: number;

  @ApiProperty({ description: 'Currency code' })
  currency: string;
}

// ============================================================================
// Request DTOs
// ============================================================================

/**
 * Create extra person charge request
 */
export class CreateExtraPersonChargeDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Standard occupancy (base price includes this many people)', example: 2, minimum: 1 })
  @IsNumber()
  @Min(1)
  standardOccupancy: number;

  @ApiProperty({ description: 'Maximum allowed occupancy', example: 4, minimum: 1 })
  @IsNumber()
  @Min(1)
  maxOccupancy: number;

  @ApiProperty({ description: 'Extra charge per adult beyond standard occupancy', example: 200000, minimum: 0 })
  @IsNumber()
  @Min(0)
  extraAdultCharge: number;

  @ApiPropertyOptional({ description: 'Extra charge per child beyond standard occupancy', example: 100000, minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraChildCharge?: number;

  @ApiPropertyOptional({ description: 'Children are defined as under this age', example: 12, default: 12, minimum: 1, maximum: 18 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(18)
  childMaxAge?: number;

  @ApiPropertyOptional({ description: 'Currency code', example: 'VND', default: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Update extra person charge request
 */
export class UpdateExtraPersonChargeDto {
  @ApiPropertyOptional({ description: 'Standard occupancy', example: 2, minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  standardOccupancy?: number;

  @ApiPropertyOptional({ description: 'Maximum occupancy', example: 4, minimum: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxOccupancy?: number;

  @ApiPropertyOptional({ description: 'Extra adult charge', example: 200000, minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraAdultCharge?: number;

  @ApiPropertyOptional({ description: 'Extra child charge', example: 100000, minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraChildCharge?: number;

  @ApiPropertyOptional({ description: 'Child max age', example: 12, minimum: 1, maximum: 18 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(18)
  childMaxAge?: number;

  @ApiPropertyOptional({ description: 'Currency code', example: 'VND' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

// ============================================================================
// Response DTOs
// ============================================================================

/**
 * Get extra person charges response
 */
export class GetExtraPersonChargesResponseDto {
  @ApiProperty({ description: 'List of extra person charges', type: [ExtraPersonCharge] })
  data: ExtraPersonCharge[];
}
