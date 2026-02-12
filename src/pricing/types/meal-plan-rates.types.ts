/**
 * Meal Plan Rates Types
 *
 * Shared types for meal plan pricing patterns.
 * Handles additional charges for different meal plan options.
 *
 * @updated 2026-02-12 - Converted to class with @ApiProperty for dual use (NATS + REST)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Meal plan rate entity
 * Used for both NATS messages and REST API responses
 */
export class MealPlanRate {
  @ApiProperty({
    description: 'Rate ID',
    example: '550e8400-e29b-41d4-a716-446655440098',
  })
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  hotelId: string;

  @ApiProperty({
    description: 'Room Type ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  roomTypeId: string;

  @ApiProperty({
    description: 'Meal plan type',
    example: 'BB',
    enum: ['RO', 'BB', 'HB', 'FB', 'AI'],
  })
  mealPlanType: string;

  @ApiPropertyOptional({
    description: 'Description of meal plan',
    example: 'Bed and Breakfast',
  })
  description?: string;

  @ApiProperty({
    description: 'Additional charge for this meal plan',
    example: 150000,
    minimum: 0,
  })
  additionalCharge: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'VND',
  })
  currency: string;

  @ApiProperty({
    description: 'Is active',
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Created at (ISO 8601)',
    example: '2025-01-01T00:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Updated at (ISO 8601)',
    example: '2025-01-01T00:00:00.000Z',
  })
  updatedAt: string;
}

/**
 * Standard meal plan types
 */
export type MealPlanType = 'RO' | 'BB' | 'HB' | 'FB' | 'AI';

/**
 * Meal plan type descriptions
 */
export const MealPlanTypeDescriptions: Record<MealPlanType, string> = {
  RO: 'Room Only',
  BB: 'Bed & Breakfast',
  HB: 'Half Board',
  FB: 'Full Board',
  AI: 'All Inclusive',
};
