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
import { IsString, IsEnum, IsOptional, IsNumber, IsUUID, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlackoutPeriodDto } from '../types/blackout-period.type';
import { NatsResponse } from '../../common/nats-response.interface';

export class CancellationPolicyDto {
  @ApiProperty({
    description: 'Cancellation policy type',
    enum: ['FREE_CANCELLATION', 'PARTIAL_REFUND', 'NON_REFUNDABLE'],
    example: 'FREE_CANCELLATION',
  })
  type: 'FREE_CANCELLATION' | 'PARTIAL_REFUND' | 'NON_REFUNDABLE';

  @ApiPropertyOptional({
    description: 'Hours before check-in for free cancellation',
    example: 24,
  })
  deadlineHours?: number;

  @ApiPropertyOptional({
    description: 'Penalty percentage if cancelled after deadline',
    example: 50,
  })
  penaltyPercent?: number;

  @ApiPropertyOptional({
    description: 'Human-readable description',
    example: 'Free cancellation up to 24h before check-in',
  })
  description?: string;
}

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

  @ApiPropertyOptional({
    description: 'Cancellation policy details',
    type: () => CancellationPolicyDto,
  })
  @IsOptional()
  cancellationPolicy?: CancellationPolicyDto | null;

  @ApiPropertyOptional({
    description: 'Meal plan included',
    enum: ['ROOM_ONLY', 'BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE'],
    example: 'BREAKFAST',
  })
  @IsOptional()
  @IsString()
  mealPlan?: string | null;

  @ApiPropertyOptional({
    description: 'Payment type requirement',
    enum: ['PAY_NOW', 'PAY_AT_HOTEL', 'DEPOSIT_REQUIRED'],
    example: 'PAY_NOW',
  })
  @IsOptional()
  @IsString()
  paymentType?: string | null;

  @ApiPropertyOptional({
    description: 'Deposit percentage required (when paymentType = DEPOSIT_REQUIRED). E.g. 50 = 50%',
    example: 50,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  depositPercent?: number | null;

  @ApiPropertyOptional({
    description: 'Corporate Account ID — if set, this rate plan is restricted to this corporate account. Only valid for DERIVED type.',
    example: '123e4567-e89b-12d3-a456-426614174099',
  })
  @IsOptional()
  @IsUUID()
  corporateAccountId?: string;

  @ApiPropertyOptional({
    description: 'Corporate account name (denormalized for display). Set automatically from corporate account lookup.',
    example: 'Samsung Vietnam',
  })
  @IsOptional()
  @IsString()
  corporateAccountName?: string;

  @ApiPropertyOptional({
    description: 'Rate plan valid from date (YYYY-MM-DD). If null, always valid.',
    example: '2026-01-01',
  })
  @IsOptional()
  @IsDateString()
  validFrom?: string;

  @ApiPropertyOptional({
    description: 'Rate plan valid to date (YYYY-MM-DD). If null, no expiry.',
    example: '2026-12-31',
  })
  @IsOptional()
  @IsDateString()
  validTo?: string;

  @ApiPropertyOptional({
    description: 'Blackout periods — date ranges when this rate plan is hidden from booking',
    type: [BlackoutPeriodDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BlackoutPeriodDto)
  blackoutPeriods?: BlackoutPeriodDto[];
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

  @ApiPropertyOptional({
    description: 'Cancellation policy details',
    type: () => CancellationPolicyDto,
  })
  cancellationPolicy?: CancellationPolicyDto | null;

  @ApiPropertyOptional({
    description: 'Meal plan included',
    enum: ['ROOM_ONLY', 'BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE'],
    example: 'BREAKFAST',
  })
  mealPlan?: string | null;

  @ApiPropertyOptional({
    description: 'Payment type requirement',
    enum: ['PAY_NOW', 'PAY_AT_HOTEL', 'DEPOSIT_REQUIRED'],
    example: 'PAY_NOW',
  })
  paymentType?: string | null;

  @ApiPropertyOptional({
    description: 'Deposit percentage required (when paymentType = DEPOSIT_REQUIRED)',
    example: 50,
  })
  depositPercent?: number | null;

  @ApiPropertyOptional({
    description: 'Corporate Account ID — if set, this rate plan is restricted to this corporate account',
    example: '123e4567-e89b-12d3-a456-426614174099',
    type: String,
    nullable: true,
  })
  corporateAccountId?: string | null;

  @ApiPropertyOptional({
    description: 'Corporate account name (denormalized)',
    example: 'Samsung Vietnam',
    type: String,
    nullable: true,
  })
  corporateAccountName?: string | null;

  @ApiPropertyOptional({
    description: 'Rate plan valid from date',
    example: '2026-01-01',
  })
  validFrom?: string | null;

  @ApiPropertyOptional({
    description: 'Rate plan valid to date',
    example: '2026-12-31',
  })
  validTo?: string | null;

  @ApiPropertyOptional({
    description: 'Blackout periods',
    type: [BlackoutPeriodDto],
  })
  blackoutPeriods?: BlackoutPeriodDto[] | null;

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
