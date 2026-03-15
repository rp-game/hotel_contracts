import { NotificationType, NotificationPriority } from '../enums/notification.enum';
export declare class WsBroadcastPayload {
    staffId?: string;
    hotelId: string;
    tenantId: string;
    event: WsNotificationEvent;
}
export declare class WsNotificationEvent {
    notificationId: string;
    type: NotificationType;
    title: string;
    body: string;
    priority: NotificationPriority;
    data?: Record<string, any>;
    timestamp: string;
}
//# sourceMappingURL=websocket-events.d.ts.map