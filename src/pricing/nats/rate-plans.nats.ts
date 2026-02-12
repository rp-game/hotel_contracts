/**
 * Rate Plans NATS Contracts
 *
 * Handles rate plan management including creation, updates, channel mappings,
 * and price calculations.
 *
 * @updated 2026-02-12 - Converted to classes with @ApiProperty for dual use (NATS + REST)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsNumber, IsUUID } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import {
  CreateRatePlanRequest,
  CreateRatePlanResponse,
  CreateRatePlanNatsResponse,
  RatePlanTypeEnum,
  DerivationTypeEnum,
} from './create-rate-plan.nats';

/**
 * Re-export create contracts
 */
export {
  CreateRatePlanRequest,
  CreateRatePlanResponse,
  CreateRatePlanNatsResponse,
  RatePlanTypeEnum,
  DerivationTypeEnum,
};

/**
 * NATS Pattern: pricing.rate-plan.update
 */
export class UpdateRatePlanRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Update data',
  })
  dto: UpdateRatePlanDto;
}

export class UpdateRatePlanDto {
  @ApiPropertyOptional({
    description: 'Rate plan name',
    example: 'Updated Best Available Rate',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Optional description of the rate plan',
    example: 'Updated description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Whether the rate plan is active',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateRatePlanResponse {
  @ApiProperty({
    description: 'Updated rate plan data',
    type: CreateRatePlanResponse,
  })
  data: CreateRatePlanResponse;
}

export type UpdateRatePlanNatsResponse = NatsResponse<UpdateRatePlanResponse>;

/**
 * NATS Pattern: pricing.rate-plan.get
 */
export class GetRatePlanRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  @IsUUID()
  id: string;
}

export class GetRatePlanResponse {
  @ApiProperty({
    description: 'Rate plan data with parent details',
    type: CreateRatePlanResponse,
  })
  data: CreateRatePlanResponse;
}

export type GetRatePlanNatsResponse = NatsResponse<GetRatePlanResponse>;

/**
 * NATS Pattern: pricing.rate-plan.list
 */
export class ListRatePlansRequest {
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

export class ListRatePlansResponse {
  @ApiProperty({
    description: 'List of rate plans',
    type: [CreateRatePlanResponse],
  })
  data: CreateRatePlanResponse[];
}

export type ListRatePlansNatsResponse = NatsResponse<ListRatePlansResponse>;

/**
 * NATS Pattern: pricing.rate-plan.calculate-price
 */
export class CalculateRatePlanPriceRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174011',
  })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({
    description: 'Base price to calculate from',
    example: 100,
  })
  @IsNumber()
  basePrice: number;
}

export class CalculateRatePlanPriceResponse {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174011',
  })
  ratePlanId: string;

  @ApiProperty({
    description: 'Base price',
    example: 100,
  })
  basePrice: number;

  @ApiProperty({
    description: 'Calculated final price',
    example: 104,
  })
  calculatedPrice: number;

  @ApiPropertyOptional({
    description: 'Derivation type',
    enum: DerivationTypeEnum,
  })
  derivationType?: DerivationTypeEnum;

  @ApiPropertyOptional({
    description: 'Derivation value',
    example: 4,
  })
  derivationValue?: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  currency: string;
}

export type CalculateRatePlanPriceNatsResponse = NatsResponse<CalculateRatePlanPriceResponse>;

/**
 * NATS Pattern: pricing.rate-plan.get-channel-mappings
 */
export class GetChannelMappingsRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  @IsUUID()
  ratePlanId: string;
}

export class ChannelRateMappingResponse {
  @ApiProperty({
    description: 'Mapping ID',
    example: '123e4567-e29b-41d4-a716-446655440020',
  })
  id: string;

  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  ratePlanId: string;

  @ApiProperty({
    description: 'Channel ID',
    example: 'booking-com',
  })
  channelId: string;

  @ApiPropertyOptional({
    description: 'External rate plan ID',
    example: 'BAR-12345',
  })
  externalRatePlanId?: string;

  @ApiPropertyOptional({
    description: 'External rate plan name',
    example: 'Best Available Rate',
  })
  externalRatePlanName?: string;

  @ApiProperty({
    description: 'Whether the mapping is active',
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

export class GetChannelMappingsResponse {
  @ApiProperty({
    description: 'List of channel mappings',
    type: [ChannelRateMappingResponse],
  })
  data: ChannelRateMappingResponse[];
}

export type GetChannelMappingsNatsResponse = NatsResponse<GetChannelMappingsResponse>;

/**
 * NATS Pattern: pricing.rate-plan.add-channel-mapping
 */
export class AddChannelMappingRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({
    description: 'Channel mapping data',
  })
  dto: CreateChannelMappingDto;
}

export class CreateChannelMappingDto {
  @ApiProperty({
    description: 'Channel provider type',
    example: 'STAAH',
  })
  @IsString()
  channelProvider: string;

  @ApiProperty({
    description: 'Channel name (OTA)',
    example: 'Booking.com',
  })
  @IsString()
  channelName: string;

  @ApiPropertyOptional({
    description: 'External rate plan ID in the channel manager or OTA system',
    example: 'STAAH194181',
  })
  @IsOptional()
  @IsString()
  externalRateId?: string;
}

export class AddChannelMappingResponse {
  @ApiProperty({
    description: 'Created channel mapping',
    type: ChannelRateMappingResponse,
  })
  data: ChannelRateMappingResponse;
}

export type AddChannelMappingNatsResponse = NatsResponse<AddChannelMappingResponse>;

/**
 * NATS Pattern: pricing.rate-plan.remove-channel-mapping
 */
export class RemoveChannelMappingRequest {
  @ApiProperty({
    description: 'Channel mapping ID',
    example: '123e4567-e29b-41d4-a716-446655440020',
  })
  @IsUUID()
  mappingId: string;
}

export class RemoveChannelMappingResponse {
  @ApiProperty({
    description: 'Success message',
    example: 'Channel mapping removed successfully',
  })
  message: string;
}

export type RemoveChannelMappingNatsResponse = NatsResponse<RemoveChannelMappingResponse>;

/**
 * NATS Pattern: pricing.rate-plan.find-by-channel
 */
export class FindRatePlansByChannelRequest {
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
    description: 'Channel provider',
    example: 'STAAH',
  })
  @IsString()
  channelProvider: string;

  @ApiProperty({
    description: 'Channel name',
    example: 'Booking.com',
  })
  @IsString()
  channelName: string;
}

export class FindRatePlansByChannelResponse {
  @ApiProperty({
    description: 'List of rate plans',
    type: [CreateRatePlanResponse],
  })
  data: CreateRatePlanResponse[];
}

export type FindRatePlansByChannelNatsResponse = NatsResponse<FindRatePlansByChannelResponse>;

/**
 * NATS Pattern: pricing.rate-plan.delete
 */
export class DeleteRatePlanRequest {
  @ApiProperty({
    description: 'Rate plan ID',
    example: '123e4567-e89b-12d3-a456-426614174010',
  })
  @IsUUID()
  id: string;
}

export class DeleteRatePlanResponse {
  @ApiProperty({
    description: 'Success message',
    example: 'Rate plan deleted successfully',
  })
  message: string;
}

export type DeleteRatePlanNatsResponse = NatsResponse<DeleteRatePlanResponse>;
