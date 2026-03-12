import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsEnum, IsNumber, IsArray, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { DevicePlatform, NotificationType, NotificationPriority, NotificationChannel } from '../enums/notification.enum';
import { NotificationItemDto } from '../rest/notification-item.dto';

// Re-export REST DTOs for use by NATS layer
export { NotificationItemDto } from '../rest/notification-item.dto';
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

// ============= SEND NOTIFICATION =============

export class StaffSendNotificationNatsRequest {
  @ApiProperty({ description: 'Staff ID to send notification to (or "all" for broadcast)' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Notification type', enum: NotificationType })
  @IsEnum(NotificationType)
  type: NotificationType;

  @ApiProperty({ description: 'Notification title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Notification message body' })
  @IsString()
  body: string;

  @ApiProperty({ description: 'Notification priority', enum: NotificationPriority })
  @IsEnum(NotificationPriority)
  priority: NotificationPriority;

  @ApiPropertyOptional({ description: 'Additional data payload', type: Object })
  @IsOptional()
  data?: Record<string, unknown>;

  @ApiPropertyOptional({ description: 'Notification icon' })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiPropertyOptional({ description: 'Notification image URL' })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({ description: 'Schedule notification for later' })
  @IsOptional()
  @IsDateString()
  scheduleFor?: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;
}

// ============= NOTIFICATION SETTINGS =============

export class StaffNotificationSettingsDto {
  @ApiProperty({ description: 'Enable push notifications' })
  pushEnabled: boolean;

  @ApiProperty({ description: 'Enable email notifications' })
  emailEnabled: boolean;

  @ApiProperty({ description: 'Enable SMS notifications' })
  smsEnabled: boolean;

  @ApiProperty({ description: 'Task assignment notifications' })
  taskAssignments: boolean;

  @ApiProperty({ description: 'Urgent request notifications' })
  urgentRequests: boolean;

  @ApiProperty({ description: 'Schedule change notifications' })
  scheduleChanges: boolean;

  @ApiProperty({ description: 'System alert notifications' })
  systemAlerts: boolean;

  @ApiProperty({ description: 'Team message notifications' })
  teamMessages: boolean;

  @ApiProperty({ description: 'Checkout reminder notifications' })
  checkoutReminders: boolean;

  @ApiProperty({ description: 'Maintenance alert notifications' })
  maintenanceAlerts: boolean;

  @ApiProperty({ description: 'Notification sound enabled' })
  soundEnabled: boolean;

  @ApiProperty({ description: 'Notification vibration enabled' })
  vibrationEnabled: boolean;

  @ApiPropertyOptional({ description: 'Quiet hours start time (24h format)' })
  @IsOptional()
  @IsString()
  quietHoursStart?: string;

  @ApiPropertyOptional({ description: 'Quiet hours end time (24h format)' })
  @IsOptional()
  @IsString()
  quietHoursEnd?: string;
}

// ============= NOTIFICATION PREFERENCES (NATS) =============

export class QuietHoursDto {
  @ApiProperty({ description: 'Quiet hours start time (24h format, e.g. "22:00")' })
  @IsString()
  start: string;

  @ApiProperty({ description: 'Quiet hours end time (24h format, e.g. "07:00")' })
  @IsString()
  end: string;
}

export class StaffNotificationPreferencesDto {
  @ApiPropertyOptional({ description: 'Enable push notifications' })
  @IsOptional()
  @IsBoolean()
  pushEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Enable SMS notifications' })
  @IsOptional()
  @IsBoolean()
  smsEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Enable email notifications' })
  @IsOptional()
  @IsBoolean()
  emailEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Notification channels', enum: NotificationChannel, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(NotificationChannel, { each: true })
  channels?: NotificationChannel[];

  @ApiPropertyOptional({ description: 'Quiet hours settings', type: QuietHoursDto })
  @IsOptional()
  quietHours?: QuietHoursDto;

  @ApiPropertyOptional({ description: 'Notification type flags (taskAssignments, urgentRequests, etc.)', type: Object })
  @IsOptional()
  notificationTypes?: Record<string, boolean>;
}

export class UpdatePreferencesNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Preferences to update', type: StaffNotificationPreferencesDto })
  preferences: StaffNotificationPreferencesDto;
}

export class UpdatePreferencesNatsResponse {
  @ApiProperty({ description: 'Success flag' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;
}

export class GetPreferencesNatsRequest {
  @ApiProperty({ description: 'Staff ID' })
  @IsString()
  staffId: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;
}

export class GetPreferencesNatsResponse {
  @ApiProperty({ description: 'User notification preferences', type: StaffNotificationPreferencesDto })
  preferences: StaffNotificationPreferencesDto;
}

export class DeleteNotificationResponseDto {
  @ApiProperty({ description: 'Deleted notification ID' })
  id: string;

  @ApiProperty({ description: 'Deletion status' })
  status: string;
}

// ============= SEND NOTIFICATION (multi-recipient) =============

/**
 * Request for notification.send NATS pattern.
 * Uses staffIds (string[]) for multi-recipient support.
 * Different from StaffSendNotificationNatsRequest which uses staffId (string) for single-recipient.
 */
export class SendStaffNotificationMultiNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({ description: 'Hotel ID' })
  @IsString()
  hotelId: string;

  @ApiProperty({ description: 'Staff IDs to notify', type: [String] })
  @IsArray()
  @IsString({ each: true })
  staffIds: string[];

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
  data?: Record<string, unknown>;

  @ApiPropertyOptional({ description: 'Icon URL' })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiPropertyOptional({ description: 'Image URL' })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({ description: 'Scheduled send time' })
  @IsOptional()
  @IsDateString()
  scheduledFor?: string;

  @ApiPropertyOptional({ description: 'Notification channels', enum: NotificationChannel, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(NotificationChannel, { each: true })
  channels?: NotificationChannel[];
}

export class SendNotificationResponseDto {
  @ApiProperty({ description: 'Success flag' })
  success: boolean;

  @ApiPropertyOptional({ description: 'Message ID' })
  messageId?: string;
}
