/**
 * Extra Person Charges NATS Contracts (5 patterns)
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';

// ============================================================================
// Find All Extra Person Charges
// ============================================================================

export class FindAllExtraPersonChargesRequest {
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
}

export class ExtraPersonChargeResponse {
  @ApiProperty({
    description: 'Extra person charge ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
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
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174003',
  })
  roomTypeId: string;

  @ApiProperty({
    description: 'Standard occupancy (base price includes this many people)',
    example: 2,
    minimum: 1,
  })
  standardOccupancy: number;

  @ApiProperty({
    description: 'Maximum allowed occupancy',
    example: 4,
    minimum: 1,
  })
  maxOccupancy: number;

  @ApiProperty({
    description: 'Extra charge per adult beyond standard occupancy',
    example: 200000,
    minimum: 0,
  })
  extraAdultCharge: number;

  @ApiPropertyOptional({
    description: 'Extra charge per child beyond standard occupancy',
    example: 100000,
    minimum: 0,
  })
  extraChildCharge?: number;

  @ApiProperty({
    description: 'Children are defined as under this age',
    example: 12,
    minimum: 1,
    maximum: 18,
  })
  childMaxAge: number;

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
    description: 'Created at timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Updated at timestamp',
    example: '2025-01-01T00:00:00.000Z',
  })
  updatedAt: string;
}

export class FindAllExtraPersonChargesResponse {
  @ApiProperty({
    description: 'List of extra person charges',
    type: [ExtraPersonChargeResponse],
  })
  data: ExtraPersonChargeResponse[];
}

export type FindAllExtraPersonChargesNatsResponse = NatsResponse<FindAllExtraPersonChargesResponse>;

// ============================================================================
// Find Extra Person Charge By ID
// ============================================================================

export class FindExtraPersonChargeByIdRequest {
  @ApiProperty({
    description: 'Extra person charge ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  tenantId: string;
}

export class FindExtraPersonChargeByIdResponse {
  @ApiProperty({
    description: 'Extra person charge data',
    type: ExtraPersonChargeResponse,
  })
  data: ExtraPersonChargeResponse;
}

export type FindExtraPersonChargeByIdNatsResponse = NatsResponse<FindExtraPersonChargeByIdResponse>;

// ============================================================================
// Create Extra Person Charge
// ============================================================================

export class CreateExtraPersonChargeRequest {
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
    description: 'Room Type ID',
    example: '123e4567-e89b-12d3-a456-426614174003',
  })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({
    description: 'Standard occupancy (base price includes this many people)',
    example: 2,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  standardOccupancy: number;

  @ApiProperty({
    description: 'Maximum allowed occupancy',
    example: 4,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  maxOccupancy: number;

  @ApiProperty({
    description: 'Extra charge per adult beyond standard occupancy',
    example: 200000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  extraAdultCharge: number;

  @ApiPropertyOptional({
    description: 'Extra charge per child beyond standard occupancy',
    example: 100000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraChildCharge?: number;

  @ApiPropertyOptional({
    description: 'Children are defined as under this age',
    example: 12,
    default: 12,
    minimum: 1,
    maximum: 18,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(18)
  childMaxAge?: number;

  @ApiPropertyOptional({
    description: 'Currency code',
    example: 'VND',
    default: 'VND',
  })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    description: 'Is active',
    example: true,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateExtraPersonChargeResponse {
  @ApiProperty({
    description: 'Created extra person charge',
    type: ExtraPersonChargeResponse,
  })
  data: ExtraPersonChargeResponse;

  @ApiProperty({
    description: 'Success message',
    example: 'Extra person charge created successfully',
  })
  message: string;
}

export type CreateExtraPersonChargeNatsResponse = NatsResponse<CreateExtraPersonChargeResponse>;

// ============================================================================
// Update Extra Person Charge
// ============================================================================

export class UpdateExtraPersonChargeRequest {
  @ApiProperty({
    description: 'Extra person charge ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({
    description: 'Standard occupancy',
    example: 2,
    minimum: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  standardOccupancy?: number;

  @ApiPropertyOptional({
    description: 'Maximum occupancy',
    example: 4,
    minimum: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxOccupancy?: number;

  @ApiPropertyOptional({
    description: 'Extra adult charge',
    example: 200000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraAdultCharge?: number;

  @ApiPropertyOptional({
    description: 'Extra child charge',
    example: 100000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  extraChildCharge?: number;

  @ApiPropertyOptional({
    description: 'Child max age',
    example: 12,
    minimum: 1,
    maximum: 18,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(18)
  childMaxAge?: number;

  @ApiPropertyOptional({
    description: 'Currency code',
    example: 'VND',
  })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    description: 'Is active',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateExtraPersonChargeResponse {
  @ApiProperty({
    description: 'Updated extra person charge',
    type: ExtraPersonChargeResponse,
  })
  data: ExtraPersonChargeResponse;

  @ApiProperty({
    description: 'Success message',
    example: 'Extra person charge updated successfully',
  })
  message: string;
}

export type UpdateExtraPersonChargeNatsResponse = NatsResponse<UpdateExtraPersonChargeResponse>;

// ============================================================================
// Delete Extra Person Charge
// ============================================================================

export class DeleteExtraPersonChargeRequest {
  @ApiProperty({
    description: 'Extra person charge ID',
    example: '123e4567-e89b-12d3-a456-426614174002',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Tenant ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  tenantId: string;
}

export class DeleteExtraPersonChargeResponse {
  @ApiProperty({
    description: 'Success message',
    example: 'Extra person charge deleted successfully',
  })
  message: string;
}

export type DeleteExtraPersonChargeNatsResponse = NatsResponse<DeleteExtraPersonChargeResponse>;
