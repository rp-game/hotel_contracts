import { DevicePlatform, NotificationType, NotificationPriority } from '../enums/notification.enum';
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
export declare class NotificationItemDto {
    id: string;
    recipientId: string;
    type: NotificationType;
    title: string;
    message: string;
    priority: NotificationPriority;
    isRead: boolean;
    isSent: boolean;
    data?: Record<string, unknown>;
    readAt?: string;
    sentAt?: string;
    createdAt: string;
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
//# sourceMappingURL=staff-notification.nats.d.ts.map