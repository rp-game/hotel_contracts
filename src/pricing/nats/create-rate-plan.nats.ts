/**
 * Create Rate Plan NATS Contract
 *
 * NATS Pattern: pricing.rate-plan.create
 * Handler: pricing-service
 * Called by: api-gateway
 *
 * @updated 2026-02-12 - Aligned with actual BASE/DERIVED implementation
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsNumber, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';

/**
 * Rate plan type enum - BASE or DERIVED
 */
export enum RatePlanTypeEnum {
  BASE = 'BASE',
  DERIVED = 'DERIVED',
}

/**
 * Derivation type for DERIVED rate plans
 */
export enum DerivationTypeEnum {
  PERCENTAGE = 'PERCENTAGE',
  AMOUNT = 'AMOUNT',
}

/**
 * NATS request to create a rate plan
 * Used for both NATS messages and REST API
 */
export class CreateRatePlanRequest {
  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsUUID()
  hotelId: string;

  @ApiProperty({
    description: 'Rate plan name',
    example: 'Best Available Rate',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Rate plan type',
    enum: RatePlanTypeEnum,
    example: RatePlanTypeEnum.BASE,
  })
  @IsEnum(RatePlanTypeEnum)
  type: RatePlanTypeEnum;

  @ApiPropertyOptional({
    description: 'Parent rate plan ID (required for DERIVED types)',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsOptional()
  @IsUUID()
  parentRatePlanId?: string;

  @ApiPropertyOptional({
    description: 'How to calculate derived price from parent',
    enum: DerivationTypeEnum,
    example: DerivationTypeEnum.PERCENTAGE,
  })
  @IsOptional()
  @IsEnum(DerivationTypeEnum)
  derivationType?: DerivationTypeEnum;

  @ApiPropertyOptional({
    description: 'Derivation value: For PERCENTAGE: 4 = +4%, -10 = -10%. For AMOUNT: 10 = +$10, -10 = -$10',
    example: 4,
  })
  @IsOptional()
  @IsNumber()
  derivationValue?: number;

  @ApiPropertyOptional({
    description: 'Optional description of the rate plan',
    example: 'Standard rate plan for all channels',
  })
  @IsOptional()
  @IsString()
  description?: string;
}

/**
 * NATS response after creating rate plan
 */
export class CreateRatePlanResponse {
  @ApiProperty({
    description: 'Created rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  tenantId: string;

  @ApiProperty({
    description: 'Hotel ID',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  hotelId: string;

  @ApiProperty({
    description: 'Rate plan name',
    example: 'Best Available Rate',
  })
  name: string;

  @ApiProperty({
    description: 'Rate plan type',
    enum: RatePlanTypeEnum,
    example: RatePlanTypeEnum.BASE,
  })
  type: RatePlanTypeEnum;

  @ApiPropertyOptional({
    description: 'Parent rate plan ID (for DERIVED types)',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  parentRatePlanId?: string;

  @ApiPropertyOptional({
    description: 'How to calculate derived price from parent',
    enum: DerivationTypeEnum,
  })
  derivationType?: DerivationTypeEnum;

  @ApiPropertyOptional({
    description: 'Derivation value',
    example: 4,
  })
  derivationValue?: number;

  @ApiPropertyOptional({
    description: 'Optional description',
  })
  description?: string;

  @ApiProperty({
    description: 'Whether the rate plan is active',
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  updatedAt: string;
}

/**
 * Type-safe NATS response wrapper
 */
export type CreateRatePlanNatsResponse = NatsResponse<CreateRatePlanResponse>;
