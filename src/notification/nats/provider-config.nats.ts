import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsEnum, IsObject } from 'class-validator';
import { NotificationChannel } from '../enums/notification.enum';

// ============= PROVIDER CONFIG CRUD =============

export class UpsertProviderConfigNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID (null = platform default)' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID (null = tenant-level)' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;

  @ApiProperty({ description: 'Provider name (e.g. sendgrid, zalo_zns, aws_sns, expo)' })
  @IsString()
  provider: string;

  @ApiPropertyOptional({ description: 'Provider credentials (API keys, secrets — will be encrypted)', type: Object })
  @IsOptional()
  @IsObject()
  credentials?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Non-sensitive settings (sender name, region, etc.)', type: Object })
  @IsOptional()
  @IsObject()
  settings?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Whether this config is enabled' })
  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Whether this channel is available (platform toggle)' })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Run health check after saving' })
  @IsOptional()
  @IsBoolean()
  healthCheck?: boolean;
}

export class UpsertProviderConfigNatsResponse {
  @ApiProperty({ description: 'Config record ID' })
  id: string;

  @ApiProperty({ description: 'Status message' })
  message: string;

  @ApiPropertyOptional({ description: 'Health check result', type: Object })
  healthCheck?: { healthy: boolean; message?: string };
}

export class GetProviderConfigNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;
}

export class GetProviderConfigNatsResponse {
  @ApiProperty({ description: 'Provider name' })
  provider: string;

  @ApiProperty({ description: 'Non-sensitive settings', type: Object })
  settings: Record<string, any>;

  @ApiProperty({ description: 'Whether credentials are configured' })
  hasCredentials: boolean;
}

export class DeleteProviderConfigNatsRequest {
  @ApiPropertyOptional({ description: 'Tenant ID' })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;
}

export class DeleteProviderConfigNatsResponse {
  @ApiProperty({ description: 'Whether a config was deleted' })
  deleted: boolean;

  @ApiProperty({ description: 'Status message' })
  message: string;
}

export class ListNotificationProvidersNatsResponse {
  @ApiProperty({ description: 'Registered push providers', type: [String] })
  push: string[];

  @ApiProperty({ description: 'Registered email providers', type: [String] })
  email: string[];

  @ApiProperty({ description: 'Registered SMS providers', type: [String] })
  sms: string[];

  @ApiProperty({ description: 'Registered template providers', type: [String] })
  templates: string[];
}

// ============= CHANNEL ADDON CRUD =============

export class UpsertChannelAddonNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;

  @ApiProperty({ description: 'Whether the channel is available for this tenant' })
  @IsBoolean()
  isAvailable: boolean;

  @ApiPropertyOptional({ description: 'Staff ID who enabled/disabled' })
  @IsOptional()
  @IsString()
  enabledBy?: string;

  @ApiPropertyOptional({ description: 'Additional metadata', type: Object })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}

export class UpsertChannelAddonNatsResponse {
  @ApiProperty({ description: 'Addon record ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Channel', enum: NotificationChannel })
  channel: NotificationChannel;

  @ApiProperty({ description: 'Whether the channel is available' })
  isAvailable: boolean;

  @ApiPropertyOptional({ description: 'When the channel was enabled' })
  enabledAt?: Date;

  @ApiPropertyOptional({ description: 'When the channel was disabled' })
  disabledAt?: Date;

  @ApiProperty({ description: 'Status message' })
  message: string;
}

export class GetChannelAddonsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;
}

export class ChannelStatusDto {
  @ApiProperty({ description: 'Whether the channel is available' })
  available: boolean;

  @ApiProperty({ description: 'Whether this channel requires an addon' })
  addon: boolean;

  @ApiPropertyOptional({ description: 'When the channel was enabled' })
  enabledAt?: Date;
}

export class GetChannelAddonsNatsResponse {
  @ApiProperty({ description: 'Channel availability statuses', type: Object })
  channels: {
    in_app: ChannelStatusDto;
    push: ChannelStatusDto;
    email: ChannelStatusDto;
    sms: ChannelStatusDto;
    websocket: ChannelStatusDto;
  };
}

export class CheckChannelAvailabilityNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;
}

export class CheckChannelAvailabilityNatsResponse {
  @ApiProperty({ description: 'Whether the channel is available' })
  available: boolean;
}

// ============= TEMPLATE SYNC =============

export class SyncTemplatesNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Notification channel', enum: NotificationChannel })
  @IsEnum(NotificationChannel)
  channel: NotificationChannel;

  @ApiPropertyOptional({ description: 'Hotel ID' })
  @IsOptional()
  @IsString()
  hotelId?: string;
}

export class SyncedTemplateDto {
  @ApiProperty({ description: 'Template ID' })
  id: string;

  @ApiProperty({ description: 'Template name' })
  name: string;

  @ApiProperty({ description: 'Provider template ID' })
  providerTemplateId: string;

  @ApiProperty({ description: 'Template variables', type: [String] })
  variables: string[];
}

export class SyncTemplatesNatsResponse {
  @ApiProperty({ description: 'Number of templates synced' })
  synced: number;

  @ApiProperty({ description: 'Synced templates', type: [SyncedTemplateDto] })
  templates: SyncedTemplateDto[];
}
