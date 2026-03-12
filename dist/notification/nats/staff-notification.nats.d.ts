import { DevicePlatform, NotificationType, NotificationPriority, NotificationChannel } from '../enums/notification.enum';
import { NotificationItemDto } from '../rest/notification-item.dto';
export { NotificationItemDto } from '../rest/notification-item.dto';
export { MarkAllNotificationsReadDto, MarkAllNotificationsResponseDto } from '../rest/mark-all-read.dto';
export { UnregisterDeviceDto, UnregisterDeviceResponseDto } from '../rest/unregister-device.dto';
export { RegisterDeviceDto, DeviceRegistrationResponseDto } from '../rest/register-device.dto';
export { MarkNotificationReadDto, NotificationListResponseDto } from '../rest/notification-list.dto';
export declare class MarkAllNotificationsReadPayload {
    staffId: string;
    tenantId: string;
    timestamp?: string;
}
export declare class UnregisterDevicePayload {
    staffId: string;
    tenantId: string;
    deviceToken: string;
}
export declare class RegisterDevicePayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
    deviceToken: string;
    platform: DevicePlatform;
    deviceModel?: string;
    appVersion?: string;
    osVersion?: string;
}
export declare class GetMobileNotificationsPayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
    page: number;
    limit: number;
}
export declare class GetMobileNotificationsResponseDto {
    notifications: NotificationItemDto[];
    total: number;
    page: number;
    limit: number;
    unreadCount: number;
}
export declare class MarkNotificationReadPayload {
    staffId: string;
    tenantId: string;
    notificationIds: string[];
}
export declare class MarkNotificationReadResponseDto {
    success: boolean;
    message: string;
}
export declare class GetUnreadCountPayload {
    staffId: string;
    tenantId: string;
    hotelId: string;
}
export declare class GetUnreadCountResponseDto {
    count: number;
}
export declare class StaffSendNotificationNatsRequest {
    staffId: string;
    type: NotificationType;
    title: string;
    body: string;
    priority: NotificationPriority;
    data?: Record<string, unknown>;
    icon?: string;
    imageUrl?: string;
    scheduleFor?: string;
    tenantId: string;
    hotelId: string;
}
export declare class StaffNotificationSettingsDto {
    pushEnabled: boolean;
    emailEnabled: boolean;
    smsEnabled: boolean;
    taskAssignments: boolean;
    urgentRequests: boolean;
    scheduleChanges: boolean;
    systemAlerts: boolean;
    teamMessages: boolean;
    checkoutReminders: boolean;
    maintenanceAlerts: boolean;
    soundEnabled: boolean;
    vibrationEnabled: boolean;
    quietHoursStart?: string;
    quietHoursEnd?: string;
}
export declare class QuietHoursDto {
    start: string;
    end: string;
}
export declare class StaffNotificationPreferencesDto {
    pushEnabled?: boolean;
    smsEnabled?: boolean;
    emailEnabled?: boolean;
    channels?: NotificationChannel[];
    quietHours?: QuietHoursDto;
    notificationTypes?: Record<string, boolean>;
}
export declare class UpdatePreferencesNatsRequest {
    staffId: string;
    tenantId: string;
    preferences: StaffNotificationPreferencesDto;
}
export declare class UpdatePreferencesNatsResponse {
    success: boolean;
    message: string;
}
export declare class GetPreferencesNatsRequest {
    staffId: string;
    tenantId: string;
}
export declare class GetPreferencesNatsResponse {
    preferences: StaffNotificationPreferencesDto;
}
export declare class DeleteNotificationResponseDto {
    id: string;
    status: string;
}
/**
 * Request for notification.send NATS pattern.
 * Uses staffIds (string[]) for multi-recipient support.
 * Different from StaffSendNotificationNatsRequest which uses staffId (string) for single-recipient.
 */
export declare class SendStaffNotificationMultiNatsRequest {
    tenantId: string;
    hotelId: string;
    staffIds: string[];
    type: NotificationType;
    title: string;
    body: string;
    priority: NotificationPriority;
    data?: Record<string, unknown>;
    icon?: string;
    imageUrl?: string;
    scheduledFor?: string;
    channels?: NotificationChannel[];
}
export declare class SendNotificationResponseDto {
    success: boolean;
    messageId?: string;
}
//# sourceMappingURL=staff-notification.nats.d.ts.map