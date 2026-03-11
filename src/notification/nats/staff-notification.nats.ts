import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsEnum, IsNumber, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { DevicePlatform, NotificationType, NotificationPriority } from '../enums/notification.enum';

// Re-export REST DTOs for use by NATS layer
export { MarkAllNotificationsReadDto, MarkAllNotificationsResponseDto } from '../rest/mark-all-read.dto';
export { UnregisterDeviceDto, UnregisterDeviceResponseDto } from '../rest/unregister-device.dto';
export { RegisterDeviceDto, DeviceRegistrationResponseDto } from '../rest/register-device.dto';
export { MarkNotificationReadDto, NotificationListResponseDto } from '../rest/notification-list.dto';

// ============= MARK ALL NOTIFICATIONS READ =============

export class MarkAllNotificationsReadPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Timestamp cutoff', required: false })
  @IsOptional()
  @IsDateString()
  timestamp?: string;
}

// ============= UNREGISTER DEVICE =============

export class UnregisterDevicePayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Device token to unregister' })
  @IsString()
  deviceToken: string;
}

// ============= REGISTER DEVICE =============

export class RegisterDevicePayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'FCM device token' })
  @IsString()
  deviceToken: string;

  @ApiProperty({ description: 'Device platform', enum: DevicePlatform })
  @IsEnum(DevicePlatform)
  platform: DevicePlatform;

  @ApiProperty({ description: 'Device model/name', required: false })
  @IsOptional()
  @IsString()
  deviceModel?: string;

  @ApiProperty({ description: 'App version', required: false })
  @IsOptional()
  @IsString()
  appVersion?: string;

  @ApiProperty({ description: 'Device OS version', required: false })
  @IsOptional()
  @IsString()
  osVersion?: string;
}

// ============= GET MOBILE NOTIFICATIONS =============

export class GetMobileNotificationsPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Page number' })
  @IsNumber()
  page: number;

  @ApiProperty({ description: 'Items per page' })
  @IsNumber()
  limit: number;
}

export class NotificationItemDto {
  @ApiProperty({ description: 'Notification ID' })
  id: string;

  @ApiProperty({ description: 'Recipient staff ID' })
  recipientId: string;

  @ApiProperty({ description: 'Notification type', enum: NotificationType })
  type: NotificationType;

  @ApiProperty({ description: 'Notification title' })
  title: string;

  @ApiProperty({ description: 'Notification message body' })
  message: string;

  @ApiProperty({ description: 'Notification priority', enum: NotificationPriority })
  priority: NotificationPriority;

  @ApiProperty({ description: 'Whether notification has been read' })
  isRead: boolean;

  @ApiProperty({ description: 'Whether notification has been sent' })
  isSent: boolean;

  @ApiProperty({ description: 'Additional data payload', required: false, type: Object })
  data?: Record<string, unknown>;

  @ApiProperty({ description: 'Time when notification was read', required: false })
  readAt?: string;

  @ApiProperty({ description: 'Time when notification was sent', required: false })
  sentAt?: string;

  @ApiProperty({ description: 'Notification creation time' })
  createdAt: string;
}

export class GetMobileNotificationsResponseDto {
  @ApiProperty({ description: 'List of notifications', type: [NotificationItemDto] })
  @Type(() => NotificationItemDto)
  notifications: NotificationItemDto[];

  @ApiProperty({ description: 'Total count' })
  total: number;

  @ApiProperty({ description: 'Current page' })
  page: number;

  @ApiProperty({ description: 'Items per page' })
  limit: number;

  @ApiProperty({ description: 'Count of unread notifications' })
  unreadCount: number;
}

// ============= MARK NOTIFICATION READ =============

export class MarkNotificationReadPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Notification IDs to mark as read', type: [String] })
  @IsArray()
  @IsString({ each: true })
  notificationIds: string[];
}

export class MarkNotificationReadResponseDto {
  @ApiProperty({ description: 'Success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;
}

// ============= GET UNREAD COUNT =============

export class GetUnreadCountPayload {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}

export class GetUnreadCountResponseDto {
  @ApiProperty({ description: 'Unread notification count' })
  count: number;
}
