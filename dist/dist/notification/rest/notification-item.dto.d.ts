import { NotificationType, NotificationPriority } from '../enums/notification.enum';
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
//# sourceMappingURL=notification-item.dto.d.ts.map