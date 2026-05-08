/**
 * Channel Pricing NATS Contracts
 *
 * Handles channel pricing synchronization and configuration patterns.
 * Manages mapping between internal rates and external channel rates.
 * All classes have @ApiProperty decorators for Swagger generation.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsEnum, IsNumber, IsBoolean, Min } from 'class-validator';
import { NatsResponse } from '../../common/nats-response.interface';
import { ChannelRateMapping, ChannelPricingConfigDto } from '../types';

/**
 * NATS Pattern: pricing.channel-pricing.getMapping
 *
 * Get channel rate mapping by ID
 */
export class GetChannelRateMappingRequest {
  @ApiProperty({ description: 'Channel rate mapping ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;
}

export interface GetChannelRateMappingResponse {
  data: ChannelRateMapping;
}

export type GetChannelRateMappingNatsResponse = NatsResponse<GetChannelRateMappingResponse>;

/**
 * NATS Pattern: pricing.channel-pricing.getByHotel
 *
 * Get all channel mappings for a hotel (hotel-level OTA → externalRateId lookup)
 */
export class GetChannelMappingsByHotelRequest {
  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Filter by channel provider (e.g. STAAH)' })
  @IsOptional()
  @IsString()
  channelProvider?: string;
}

export type GetChannelMappingsByHotelNatsResponse = NatsResponse<ChannelRateMapping[]>;

/**
 * NATS Pattern: pricing.channel-pricing.getOtaChannels
 *
 * Get distinct OTA channel names available for a hotel (used in rate plan OTA dropdown)
 */
export class GetOtaChannelsRequest {
  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;
}

export type GetOtaChannelsNatsResponse = NatsResponse<string[]>;

/**
 * Update channel pricing configuration DTO
 */
export class UpdateChannelPricingConfigDto {
  @ApiPropertyOptional({
    description: 'Markup type (percentage or fixed amount)',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  @IsOptional()
  @IsEnum(['PERCENTAGE', 'FIXED'])
  markupType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({
    description: 'Markup value (percentage or fixed amount)',
    example: 10,
    minimum: -100,
  })
  @IsOptional()
  @IsNumber()
  @Min(-100)
  markupValue?: number;

  @ApiPropertyOptional({
    description: 'Minimum rate threshold',
    example: 100000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minRate?: number;

  @ApiPropertyOptional({
    description: 'Maximum rate threshold',
    example: 5000000,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxRate?: number;

  @ApiPropertyOptional({
    description: 'Whether commission is included in the rate',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  commissionIncluded?: boolean;
}

/**
 * NATS Pattern: pricing.channel-pricing.updateConfig
 *
 * Update pricing configuration for a channel mapping
 */
export class UpdateChannelPricingConfigRequest extends UpdateChannelPricingConfigDto {
  @ApiProperty({ description: 'Channel rate mapping ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  performedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  performedByName?: string;
}

export interface UpdateChannelPricingConfigResponse {
  data: ChannelRateMapping;
  message: string;
}

export type UpdateChannelPricingConfigNatsResponse = NatsResponse<UpdateChannelPricingConfigResponse>;

/**
 * NATS Pattern: pricing.channel-pricing.clearConfig
 *
 * Clear pricing configuration for a channel mapping (reset to defaults)
 */
export class ClearChannelPricingConfigRequest {
  @ApiProperty({ description: 'Channel rate mapping ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'User ID performing the action' })
  @IsOptional()
  @IsString()
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Display name of the user performing the action' })
  @IsOptional()
  @IsString()
  performedByName?: string;
}

export interface ClearChannelPricingConfigResponse {
  data: ChannelRateMapping;
  message: string;
}

export type ClearChannelPricingConfigNatsResponse = NatsResponse<ClearChannelPricingConfigResponse>;
