/**
 * Channel Pricing Types
 *
 * Shared types for channel pricing synchronization patterns.
 * Handles mapping between internal rates and external channel rates.
 * All classes have @ApiProperty decorators for Swagger generation.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Channel pricing configuration (nested in ChannelRateMapping)
 */
export class ChannelPricingConfigDto {
  @ApiPropertyOptional({
    description: 'Markup type (percentage or fixed amount)',
    enum: ['PERCENTAGE', 'FIXED'],
    example: 'PERCENTAGE',
  })
  markupType?: 'PERCENTAGE' | 'FIXED';

  @ApiPropertyOptional({
    description: 'Markup value (percentage or fixed amount)',
    example: 10,
    minimum: -100,
  })
  markupValue?: number;

  @ApiPropertyOptional({
    description: 'Minimum rate threshold',
    example: 100000,
    minimum: 0,
  })
  minRate?: number;

  @ApiPropertyOptional({
    description: 'Maximum rate threshold',
    example: 5000000,
    minimum: 0,
  })
  maxRate?: number;

  @ApiPropertyOptional({
    description: 'Whether commission is included in the rate',
    example: false,
  })
  commissionIncluded?: boolean;
}

/**
 * Channel rate mapping - mapping between internal rate plan and external channel rate
 * Matches database entity structure with nested pricingConfig
 */
export class ChannelRateMapping {
  @ApiProperty({
    description: 'Unique identifier',
    example: '550e8400-e29b-41d4-a716-446655440096',
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
    description: 'Rate Plan ID',
    example: '550e8400-e29b-41d4-a716-446655440095',
  })
  ratePlanId: string;

  @ApiProperty({
    description: 'Channel provider (e.g., STAAH, SITEMINDER, CLOUDBEDS)',
    example: 'STAAH',
  })
  channelProvider: string;

  @ApiProperty({
    description: 'Channel name (e.g., Booking.com, Agoda, Expedia)',
    example: 'Booking.com',
  })
  channelName: string;

  @ApiPropertyOptional({
    description: 'External rate ID in channel manager or OTA system',
    example: '436399',
  })
  externalRateId?: string;

  @ApiProperty({
    description: 'Active status',
    example: true,
  })
  isActive: boolean;

  @ApiPropertyOptional({
    description: 'Channel-specific pricing configuration',
    type: () => ChannelPricingConfigDto,
  })
  pricingConfig?: ChannelPricingConfigDto;

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
