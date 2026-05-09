/**
 * Channel Distribution Type Definitions
 *
 * Unified entity replacing the split between cms_rate_mapping (channel-service)
 * and channel_rate_mappings (pricing-service). One row per (ratePlanId, channelName)
 * holds both the external ID translation and pricing config for an OTA channel.
 *
 * Owned by channel-service. Pricing-service queries via NATS to apply markup.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RateMappingConfiguration } from './mapping.types';

/**
 * Channel pricing configuration (nested in ChannelDistribution)
 */
export class ChannelPricingConfig {
  @ApiPropertyOptional({
    description: 'Markup type (percentage or fixed amount)',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  markupType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({
    description: 'Markup value (percentage 0-100 or fixed amount in VND)',
    example: 10,
  })
  markupValue?: number;

  @ApiPropertyOptional({
    description: 'Minimum gross rate threshold (VND)',
    example: 800000,
    minimum: 0,
  })
  minRate?: number;

  @ApiPropertyOptional({
    description: 'Maximum gross rate threshold (VND)',
    example: 5000000,
    minimum: 0,
  })
  maxRate?: number;

  @ApiPropertyOptional({
    description: 'Whether commission is already included in the rate',
    example: false,
  })
  commissionIncluded?: boolean;
}

/**
 * Channel distribution row — 1 per (ratePlanId, channelName).
 * Holds both ID translation and pricing for one OTA channel of one rate plan.
 */
export class ChannelDistribution {
  @ApiProperty({ description: 'Distribution ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID (cross-service ref)', format: 'uuid' })
  ratePlanId: string;

  @ApiProperty({ description: 'Channel name', example: 'Booking.com' })
  channelName: string;

  @ApiProperty({ description: 'Provider ID (CMS aggregator)', format: 'uuid' })
  providerId: string;

  @ApiProperty({
    description: 'External code per room type — { roomTypeId: externalCode } map',
    example: { 'a1b2c3d4-e5f6-7890-abcd-ef1234567890': 'GRANDHNBAR-DLX' },
    additionalProperties: { type: 'string' },
  })
  externalCodes: Record<string, string>;

  @ApiProperty({ description: 'Active status', example: true })
  isActive: boolean;

  @ApiPropertyOptional({
    description: 'Last sync timestamp (ISO 8601)',
    example: '2026-05-09T10:30:00.000Z',
  })
  lastSyncedAt?: string;

  @ApiPropertyOptional({
    description: 'Channel-specific pricing config (markup, min/max)',
    type: () => ChannelPricingConfig,
  })
  pricingConfig?: ChannelPricingConfig;

  @ApiPropertyOptional({
    description: 'Channel-specific rate mapping config (rate basis, meal plan, restrictions)',
    type: () => RateMappingConfiguration,
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiProperty({ description: 'Created at (ISO 8601)' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at (ISO 8601)' })
  updatedAt: string;
}

/**
 * Upsert request — used for create or update by (ratePlanId, channelName).
 */
export class UpsertChannelDistributionRequest {
  @ApiProperty({ description: 'Tenant ID', format: 'uuid' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID', format: 'uuid' })
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID', format: 'uuid' })
  ratePlanId: string;

  @ApiProperty({ description: 'Channel name', example: 'Booking.com' })
  channelName: string;

  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  providerId: string;

  @ApiProperty({
    description: 'External code per room type — { roomTypeId: externalCode } map',
    example: { 'a1b2c3d4-e5f6-7890-abcd-ef1234567890': 'GRANDHNBAR-DLX' },
    additionalProperties: { type: 'string' },
  })
  externalCodes: Record<string, string>;

  @ApiPropertyOptional({ description: 'Active status', default: true })
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Pricing config (markup, min/max)',
    type: () => ChannelPricingConfig,
  })
  pricingConfig?: ChannelPricingConfig;

  @ApiPropertyOptional({
    description: 'Mapping config (rate basis, meal plan, restrictions)',
    type: () => RateMappingConfiguration,
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiPropertyOptional({ description: 'Performed by user ID' })
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Performed by user display name' })
  performedByName?: string;
}

/**
 * Update request — partial update by ID.
 */
export class UpdateChannelDistributionRequest {
  @ApiPropertyOptional({ description: 'Provider ID', format: 'uuid' })
  providerId?: string;

  @ApiPropertyOptional({
    description: 'External code per room type — { roomTypeId: externalCode } map',
    additionalProperties: { type: 'string' },
  })
  externalCodes?: Record<string, string>;

  @ApiPropertyOptional({ description: 'Active status' })
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Pricing config',
    type: () => ChannelPricingConfig,
  })
  pricingConfig?: ChannelPricingConfig;

  @ApiPropertyOptional({
    description: 'Mapping config',
    type: () => RateMappingConfiguration,
  })
  mappingConfiguration?: RateMappingConfiguration;

  @ApiPropertyOptional({ description: 'Performed by user ID' })
  performedBy?: string;

  @ApiPropertyOptional({ description: 'Performed by user display name' })
  performedByName?: string;
}

/**
 * List filter query.
 */
export class ListChannelDistributionQuery {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  hotelId?: string;

  @ApiPropertyOptional({ description: 'Rate plan ID' })
  ratePlanId?: string;

  @ApiPropertyOptional({ description: 'Channel name' })
  channelName?: string;

  @ApiPropertyOptional({ description: 'Provider ID' })
  providerId?: string;

  @ApiPropertyOptional({ description: 'Active filter' })
  isActive?: boolean;
}

/**
 * Event payload — published when distribution changes (create/update/delete).
 * Pricing-service subscribes to invalidate its in-memory markup cache.
 */
export class ChannelDistributionUpdatedEvent {
  @ApiProperty({ description: 'Action', enum: ['CREATED', 'UPDATED', 'DELETED'] })
  action: 'CREATED' | 'UPDATED' | 'DELETED';

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  hotelId: string;

  @ApiProperty({ description: 'Rate plan ID' })
  ratePlanId: string;

  @ApiProperty({ description: 'Channel name' })
  channelName: string;

  @ApiProperty({ description: 'Distribution ID' })
  distributionId: string;
}
