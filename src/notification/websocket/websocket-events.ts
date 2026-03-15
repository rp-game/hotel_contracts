import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { NotificationType, NotificationPriority } from '../enums/notification.enum';

// ============= WS BROADCAST PAYLOAD =============

export class WsBroadcastPayload {
  @ApiProperty({ description: 'Target staff ID (for personal room)' })
  @IsOptional()
  @IsString()
  staffId?: string;

  @ApiProperty({ description: 'Hotel ID (for hotel-wide room)' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Tenant ID (for tenant-wide room)' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Notification event data' })
  event: WsNotificationEvent;
}

// ============= WS NOTIFICATION EVENT =============

export class WsNotificationEvent {
  @ApiProperty({ description: 'Notification ID' })
  @IsString()
  notificationId: string;

  @ApiProperty({ description: 'Notification type', enum: NotificationType })
  @IsEnum(NotificationType)
  type: NotificationType;

  @ApiProperty({ description: 'Notification title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Notification body' })
  @IsString()
  body: string;

  @ApiProperty({ description: 'Notification priority', enum: NotificationPriority })
  @IsEnum(NotificationPriority)
  priority: NotificationPriority;

  @ApiPropertyOptional({ description: 'Additional data', type: Object })
  @IsOptional()
  data?: Record<string, any>;

  @ApiProperty({ description: 'Timestamp' })
  @IsString()
  timestamp: string;
}
