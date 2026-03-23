import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID, IsArray, IsEnum } from 'class-validator';
import { NatsResponse } from '../../common';

/**
 * Notification Template NATS Contracts
 * Handler: notification-service
 */

export const NOTIFICATION_TEMPLATE_PATTERNS = {
  CREATE: 'notification.template.create',
} as const;

// ─── Create Notification Template ───

export class CreateNotificationTemplateNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsUUID()
  tenantId: string;

  @ApiProperty({ description: 'Template name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Notification channel', enum: ['IN_APP', 'PUSH', 'SMS', 'EMAIL', 'WEBSOCKET'] })
  @IsString()
  channel: string;

  @ApiProperty({ description: 'Provider identifier (email, sms, zalo)' })
  @IsString()
  provider: string;

  @ApiProperty({ description: 'Provider-specific template ID' })
  @IsString()
  providerTemplateId: string;

  @ApiPropertyOptional({ description: 'Template description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Template variables', type: [String], default: [] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variables?: string[];

  @ApiPropertyOptional({ description: 'Active status', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class NotificationTemplateResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  channel: string;

  @ApiProperty()
  provider: string;

  @ApiProperty()
  providerTemplateId: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty({ type: [String] })
  variables: string[];

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export type CreateNotificationTemplateNatsResponse = NatsResponse<NotificationTemplateResponse>;
