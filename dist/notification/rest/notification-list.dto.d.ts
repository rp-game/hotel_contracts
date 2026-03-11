import { NotificationItemDto } from '../nats/staff-notification.nats';
export declare class MarkNotificationReadDto {
    notificationIds: string[];
}
export declare class NotificationListResponseDto {
    notifications: NotificationItemDto[];
    total: number;
    unreadCount: number;
    page: number;
    limit: number;
}
//# sourceMappingURL=notification-list.dto.d.ts.map