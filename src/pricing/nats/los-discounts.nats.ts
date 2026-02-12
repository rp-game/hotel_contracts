/**
 * LOS Discounts NATS Contracts (5 patterns)
 * All classes with @ApiProperty for Swagger + NATS usage
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsNumber, IsOptional, IsBoolean, IsDateString, Min, IsEnum } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { LosDiscount } from '../types';

// ========== FIND ALL ==========

export class FindAllLosDiscountsRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Room Type ID filter (optional)', example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  @IsOptional()
  roomTypeId?: string;
}

export class FindAllLosDiscountsResponse {
  @ApiProperty({ description: 'List of LOS discounts', type: [LosDiscount] })
  data: LosDiscount[];
}

export type FindAllLosDiscountsNatsResponse = NatsResponse<FindAllLosDiscountsResponse>;

// ========== FIND BY ID ==========

export class FindLosDiscountByIdRequest {
  @ApiProperty({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

export class FindLosDiscountByIdResponse {
  @ApiProperty({ description: 'LOS discount details', type: LosDiscount })
  data: LosDiscount;
}

export type FindLosDiscountByIdNatsResponse = NatsResponse<FindLosDiscountByIdResponse>;

// ========== CREATE ==========

export class CreateLosDiscountRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', example: '550e8400-e29b-41d4-a716-446655440002' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({
    description: 'Room Type ID (null for hotel-wide discount)',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsUUID()
  @IsOptional()
  roomTypeId?: string;

  @ApiProperty({ description: 'Minimum nights to qualify', example: 3, minimum: 1 })
  @IsNumber()
  @Min(1)
  minNights: number;

  @ApiPropertyOptional({ description: 'Maximum nights (optional)', example: 7, minimum: 1 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  maxNights?: number;

  @ApiProperty({
    description: 'Discount type',
    example: 'PERCENTAGE',
    enum: ['PERCENTAGE', 'FIXED'],
  })
  @IsEnum(['PERCENTAGE', 'FIXED'])
  discountType: 'PERCENTAGE' | 'FIXED';

  @ApiProperty({ description: 'Discount value', example: 10, minimum: 0 })
  @IsNumber()
  @Min(0)
  discountValue: number;

  @ApiPropertyOptional({ description: 'Description', example: 'Stay 3+ nights, get 10% off' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Currency code', example: 'VND', default: 'VND' })
  @IsString()
  currency: string;

  @ApiPropertyOptional({ description: 'Valid from date', example: '2025-01-01' })
  @IsDateString()
  @IsOptional()
  validFrom?: string;

  @ApiPropertyOptional({ description: 'Valid to date', example: '2025-12-31' })
  @IsDateString()
  @IsOptional()
  validTo?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true, default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class CreateLosDiscountResponse {
  @ApiProperty({ description: 'Created LOS discount', type: LosDiscount })
  data: LosDiscount;

  @ApiProperty({ description: 'Success message', example: 'LOS discount created successfully' })
  message: string;
}

export type CreateLosDiscountNatsResponse = NatsResponse<CreateLosDiscountResponse>;

// ========== UPDATE ==========

export class UpdateLosDiscountRequest {
  @ApiProperty({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Minimum nights', example: 3, minimum: 1 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  minNights?: number;

  @ApiPropertyOptional({ description: 'Maximum nights', example: 7, minimum: 1 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  maxNights?: number;

  @ApiPropertyOptional({ description: 'Discount type', example: 'PERCENTAGE', enum: ['PERCENTAGE', 'FIXED'] })
  @IsEnum(['PERCENTAGE', 'FIXED'])
  @IsOptional()
  discountType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({ description: 'Discount value', example: 10, minimum: 0 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  discountValue?: number;

  @ApiPropertyOptional({ description: 'Description', example: 'Stay 3+ nights, get 10% off' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: 'Currency code', example: 'VND' })
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiPropertyOptional({ description: 'Valid from date', example: '2025-01-01' })
  @IsDateString()
  @IsOptional()
  validFrom?: string;

  @ApiPropertyOptional({ description: 'Valid to date', example: '2025-12-31' })
  @IsDateString()
  @IsOptional()
  validTo?: string;

  @ApiPropertyOptional({ description: 'Is active', example: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateLosDiscountResponse {
  @ApiProperty({ description: 'Updated LOS discount', type: LosDiscount })
  data: LosDiscount;

  @ApiProperty({ description: 'Success message', example: 'LOS discount updated successfully' })
  message: string;
}

export type UpdateLosDiscountNatsResponse = NatsResponse<UpdateLosDiscountResponse>;

// ========== DELETE ==========

export class DeleteLosDiscountRequest {
  @ApiProperty({ description: 'Discount ID', example: '550e8400-e29b-41d4-a716-446655440097' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  tenantId: string;
}

export class DeleteLosDiscountResponse {
  @ApiProperty({ description: 'Success message', example: 'LOS discount deleted successfully' })
  message: string;
}

export type DeleteLosDiscountNatsResponse = NatsResponse<DeleteLosDiscountResponse>;
