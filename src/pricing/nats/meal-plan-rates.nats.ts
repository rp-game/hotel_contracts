/**
 * Meal Plan Rates NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { MealPlanRate } from '../types';

// ============================================================================
// Find All Meal Plan Rates
// ============================================================================

export class FindAllMealPlanRatesRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @IsString()
  hotelId: string;

  @ApiPropertyOptional({
    description: 'Optional: Filter by room type ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsOptional()
  @IsString()
  roomTypeId?: string;
}

export class FindAllMealPlanRatesResponse {
  @ApiProperty({
    description: 'List of meal plan rates',
    type: [MealPlanRate],
  })
  data: MealPlanRate[];
}

export type FindAllMealPlanRatesNatsResponse = NatsResponse<FindAllMealPlanRatesResponse>;

// ============================================================================
// Find Meal Plan Rate By ID
// ============================================================================

export class FindMealPlanRateByIdRequest {
  @ApiProperty({
    description: 'Meal plan rate ID',
    example: '550e8400-e29b-41d4-a716-446655440098',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;
}

export class FindMealPlanRateByIdResponse {
  @ApiProperty({
    description: 'Meal plan rate details',
    type: MealPlanRate,
  })
  data: MealPlanRate;
}

export type FindMealPlanRateByIdNatsResponse = NatsResponse<FindMealPlanRateByIdResponse>;

// ============================================================================
// Create Meal Plan Rate
// ============================================================================

export class CreateMealPlanRateRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @IsString()
  hotelId: string;

  @ApiProperty({
    description: 'Room Type ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsString()
  roomTypeId: string;

  @ApiProperty({
    description: 'Meal plan type',
    example: 'BB',
    enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
  })
  @IsString()
  @IsEnum(['RO', 'BB', 'HB', 'FB', 'AI'])
  mealPlanType: string;

  @ApiProperty({
    description: 'Additional charge for this meal plan',
    example: 150000,
    minimum: 0,
  })
  @IsNumber()
  additionalCharge: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'VND',
    default: 'VND',
  })
  @IsString()
  currency: string;

  @ApiPropertyOptional({
    description: 'Description of meal plan',
    example: 'Bed and Breakfast',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Is active',
    example: true,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateMealPlanRateResponse {
  @ApiProperty({
    description: 'Created meal plan rate',
    type: MealPlanRate,
  })
  data: MealPlanRate;

  @ApiProperty({
    description: 'Success message',
    example: 'Meal plan rate created successfully',
  })
  message: string;
}

export type CreateMealPlanRateNatsResponse = NatsResponse<CreateMealPlanRateResponse>;

// ============================================================================
// Update Meal Plan Rate
// ============================================================================

export class UpdateMealPlanRateRequest {
  @ApiProperty({
    description: 'Meal plan rate ID',
    example: '550e8400-e29b-41d4-a716-446655440098',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;

  @ApiPropertyOptional({
    description: 'Meal plan type',
    example: 'BB',
    enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
  })
  @IsOptional()
  @IsString()
  @IsEnum(['RO', 'BB', 'HB', 'FB', 'AI'])
  mealPlanType?: string;

  @ApiPropertyOptional({
    description: 'Additional charge',
    example: 150000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  additionalCharge?: number;

  @ApiPropertyOptional({
    description: 'Description',
    example: 'Bed and Breakfast',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Is active',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateMealPlanRateResponse {
  @ApiProperty({
    description: 'Updated meal plan rate',
    type: MealPlanRate,
  })
  data: MealPlanRate;

  @ApiProperty({
    description: 'Success message',
    example: 'Meal plan rate updated successfully',
  })
  message: string;
}

export type UpdateMealPlanRateNatsResponse = NatsResponse<UpdateMealPlanRateResponse>;

// ============================================================================
// Delete Meal Plan Rate
// ============================================================================

export class DeleteMealPlanRateRequest {
  @ApiProperty({
    description: 'Meal plan rate ID',
    example: '550e8400-e29b-41d4-a716-446655440098',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  tenantId: string;
}

export class DeleteMealPlanRateResponse {
  @ApiProperty({
    description: 'Success message',
    example: 'Meal plan rate deleted successfully',
  })
  message: string;
}

export type DeleteMealPlanRateNatsResponse = NatsResponse<DeleteMealPlanRateResponse>;
