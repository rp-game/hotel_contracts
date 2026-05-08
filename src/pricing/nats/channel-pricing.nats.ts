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
 * NATS Pattern: pricing.channel-pricing.getByRatePlan
 *
 * Get channel markup configs for a rate plan (optionally filtered by channel name)
 */
export class GetChannelMappingsByRatePlanRequest {
  @ApiProperty({ description: 'Rate plan ID' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiPropertyOptional({ description: 'Filter by channel name (e.g. Booking.com)' })
  @IsOptional()
  @IsString()
  channelName?: string;
}

export type GetChannelMappingsByRatePlanNatsResponse = NatsResponse<ChannelRateMapping[]>;

/**
 * NATS Pattern: pricing.channel-pricing.upsertMarkup
 *
 * Create or update markup config for (ratePlanId, channelName)
 */
export class UpsertChannelMarkupRequest {
  @ApiProperty({ description: 'Rate plan ID' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Channel name (e.g. Booking.com)' })
  @IsString()
  channelName: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID (from JWT)' })
  @IsUUID()
  hotelId: string;

  @ApiPropertyOptional({ description: 'Pricing config (markup, min/max rate)' })
  @IsOptional()
  pricingConfig?: UpdateChannelPricingConfigDto;
}

export interface UpsertChannelMarkupResponse {
  data: ChannelRateMapping;
  message: string;
}

export type UpsertChannelMarkupNatsResponse = NatsResponse<UpsertChannelMarkupResponse>;

/**
 * NATS Pattern: pricing.channel-pricing.deleteMarkup
 *
 * Delete markup config by ID
 */
export class DeleteChannelMarkupRequest {
  @ApiProperty({ description: 'Channel rate mapping ID' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;
}

export interface DeleteChannelMarkupResponse {
  message: string;
}

export type DeleteChannelMarkupNatsResponse = NatsResponse<DeleteChannelMarkupResponse>;

/**
 * NATS Pattern: pricing.rates.calculateForOTA
 *
 * Calculate final price for a (ratePlan × roomType × channel) combination
 * Returns basePrice + markup = finalPrice
 */
export class CalculateForOtaRequest {
  @ApiProperty({ description: 'Rate plan ID' })
  @IsUUID()
  ratePlanId: string;

  @ApiProperty({ description: 'Room type ID' })
  @IsUUID()
  roomTypeId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsUUID()
  hotelId: string;

  @ApiProperty({ description: 'Tenant ID (multi-tenant isolation)' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'OTA channel name (e.g. Booking.com)' })
  @IsString()
  channelName: string;

  @ApiPropertyOptional({ description: 'Check-in date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  checkInDate?: string;

  @ApiPropertyOptional({ description: 'Check-out date (YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  checkOutDate?: string;
}

export interface CalculateForOtaResponse {
  basePrice: number;
  markup: number;
  finalPrice: number;
  markupApplied: { type: 'PERCENTAGE' | 'FIXED'; value: number } | null;
}

export type CalculateForOtaNatsResponse = NatsResponse<CalculateForOtaResponse>;

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
