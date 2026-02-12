/**
 * Seasonal Adjustments NATS Contracts (5 patterns)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsDateString, IsEnum, IsNumber, IsOptional, IsBoolean, Min, Max, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { NatsResponse } from '../../common/nats-response.interface';
import { SeasonalAdjustment } from '../types';

// ============================================================================
// FIND ALL
// ============================================================================

export class FindAllSeasonalAdjustmentsRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Optional filter by room type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsOptional()
  @IsUUID()
  roomTypeId?: string;
}

export class FindAllSeasonalAdjustmentsResponse {
  @ApiProperty({ description: 'List of seasonal adjustments', type: [SeasonalAdjustment] })
  data: SeasonalAdjustment[];
}

export type FindAllSeasonalAdjustmentsNatsResponse = NatsResponse<FindAllSeasonalAdjustmentsResponse>;

// ============================================================================
// FIND BY ID
// ============================================================================

export class FindSeasonalAdjustmentByIdRequest {
  @ApiProperty({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

export class FindSeasonalAdjustmentByIdResponse {
  @ApiProperty({ description: 'Seasonal adjustment details', type: SeasonalAdjustment })
  data: SeasonalAdjustment;
}

export type FindSeasonalAdjustmentByIdNatsResponse = NatsResponse<FindSeasonalAdjustmentByIdResponse>;

// ============================================================================
// CREATE
// ============================================================================

export class CreateSeasonalAdjustmentRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Room Type ID', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Season name', example: 'Summer 2025', maxLength: 100 })
  @IsString()
  @MaxLength(100)
  seasonName: string;

  @ApiProperty({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE'
  })
  @IsEnum(['PERCENTAGE', 'FIXED'])
  adjustmentType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({
    description: 'Adjustment value (percentage or fixed amount)',
    example: 20,
    minimum: -100,
    maximum: 1000
  })
  @IsNumber()
  @Min(-100)
  @Max(1000)
  adjustmentValue: number;

  @ApiPropertyOptional({ description: 'Description', example: 'Peak summer season pricing' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateSeasonalAdjustmentResponse {
  @ApiProperty({ description: 'Created seasonal adjustment', type: SeasonalAdjustment })
  data: SeasonalAdjustment;

  @ApiProperty({ description: 'Success message', example: 'Seasonal adjustment created successfully' })
  message: string;
}

export type CreateSeasonalAdjustmentNatsResponse = NatsResponse<CreateSeasonalAdjustmentResponse>;

// ============================================================================
// UPDATE
// ============================================================================

/**
 * Update DTO - nested structure for NATS message
 * Contains only the fields that can be updated
 */
export class UpdateSeasonalAdjustmentDto {
  @ApiPropertyOptional({ description: 'Season name', example: 'Summer 2025', maxLength: 100 })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  seasonName?: string;

  @ApiPropertyOptional({ description: 'Start date (YYYY-MM-DD)', example: '2025-06-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date (YYYY-MM-DD)', example: '2025-08-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({
    description: 'Adjustment type',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE'
  })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'FIXED'])
  adjustmentType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({
    description: 'Adjustment value (percentage or fixed amount)',
    example: 20,
    minimum: -100,
    maximum: 1000
  })
  @IsOptional()
  @IsNumber()
  @Min(-100)
  @Max(1000)
  adjustmentValue?: number;

  @ApiPropertyOptional({ description: 'Description', example: 'Peak summer season pricing' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

/**
 * Update request - contains ID, tenantId, and nested dto
 * This is the NATS message structure
 */
export class UpdateSeasonalAdjustmentRequest {
  @ApiProperty({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Update data', type: UpdateSeasonalAdjustmentDto })
  @Type(() => UpdateSeasonalAdjustmentDto)
  dto: UpdateSeasonalAdjustmentDto;
}

export class UpdateSeasonalAdjustmentResponse {
  @ApiProperty({ description: 'Updated seasonal adjustment', type: SeasonalAdjustment })
  data: SeasonalAdjustment;

  @ApiProperty({ description: 'Success message', example: 'Seasonal adjustment updated successfully' })
  message: string;
}

export type UpdateSeasonalAdjustmentNatsResponse = NatsResponse<UpdateSeasonalAdjustmentResponse>;

// ============================================================================
// DELETE
// ============================================================================

export class DeleteSeasonalAdjustmentRequest {
  @ApiProperty({ description: 'Seasonal adjustment ID', example: '550e8400-e29b-41d4-a716-446655440050' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

export class DeleteSeasonalAdjustmentResponse {
  @ApiProperty({ description: 'Success message', example: 'Seasonal adjustment deleted successfully' })
  message: string;
}

export type DeleteSeasonalAdjustmentNatsResponse = NatsResponse<DeleteSeasonalAdjustmentResponse>;
