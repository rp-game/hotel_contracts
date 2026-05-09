/**
 * Provider-Channel Routing Type Definitions
 *
 * Records which OTA channels each CMS provider serves.
 * One CMS aggregator (STAAH, eviivo, SiteMinder) typically dispatches
 * to many channels (Booking, Agoda, Expedia, Trip, Traveloka).
 *
 * Owned by channel-service. Drives the channel dropdown in distribution UI:
 * after a user picks a provider, the channel dropdown is filtered to those
 * channels the provider has enabled.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProviderChannelRouting {
  @ApiProperty({ description: 'Routing ID', format: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  providerId: string;

  @ApiProperty({ description: 'Channel name', example: 'Booking.com' })
  channelName: string;

  @ApiProperty({ description: 'Whether the provider has this channel enabled', example: true })
  isEnabled: boolean;

  @ApiProperty({ description: 'Created at (ISO 8601)' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at (ISO 8601)' })
  updatedAt: string;
}

export class UpsertProviderChannelRoutingRequest {
  @ApiProperty({ description: 'Provider ID', format: 'uuid' })
  providerId: string;

  @ApiProperty({ description: 'Channel name' })
  channelName: string;

  @ApiPropertyOptional({ description: 'Enabled flag', default: true })
  isEnabled?: boolean;
}

export class ListProviderChannelRoutingQuery {
  @ApiPropertyOptional({ description: 'Provider ID' })
  providerId?: string;

  @ApiPropertyOptional({ description: 'Channel name' })
  channelName?: string;

  @ApiPropertyOptional({ description: 'Enabled filter' })
  isEnabled?: boolean;
}
