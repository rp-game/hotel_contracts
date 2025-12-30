/**
 * Notifications NATS Contracts
 * Patterns: housekeeping.notifications.*
 */
import { NatsResponse } from '../../common';
export interface Notification {
    id: string;
    recipientId: string;
    title: string;
    message: string;
    type: string;
    priority: string;
    data?: Record<string, unknown>;
    isRead: boolean;
    readAt?: string;
    scheduledFor?: string;
    sentAt?: string;
    tenantId: string;
    hotelId: string;
    createdAt: string;
    updatedAt: string;
}
export interface CreateNotificationNatsRequest {
    createData: {
        recipientId: string;
        title: string;
        message: string;
        type: string;
        priority: string;
        data?: Record<string, unknown>;
        scheduledFor?: Date;
    };
    tenantId: string;
    hotelId: string;
}
export type CreateNotificationNatsResponse = NatsResponse<Notification>;
export interface SendNotificationFromTemplateNatsRequest {
    sendData: {
        templateId?: string;
        recipientId: string;
        variables: Record<string, unknown>;
    };
    tenantId: string;
    hotelId: string;
}
export type SendNotificationFromTemplateNatsResponse = NatsResponse<Notification>;
export interface SendBulkNotificationsNatsRequest {
    bulkData: {
        recipientIds: string[];
        title: string;
        message: string;
        type: string;
        priority: string;
    };
    tenantId: string;
    hotelId: string;
}
export interface BulkNotificationResult {
    sent: number;
    failed: number;
    notifications: Notification[];
}
export type SendBulkNotificationsNatsResponse = NatsResponse<BulkNotificationResult>;
export interface FindByRecipientNatsRequest {
    recipientId: string;
    tenantId: string;
    hotelId: string;
    filters?: {
        isRead?: boolean;
        type?: string;
        page?: number;
        limit?: number;
    };
}
export interface NotificationsListData {
    data: Notification[];
    total: number;
    page: number;
    limit: number;
}
export type FindByRecipientNatsResponse = NatsResponse<NotificationsListData>;
export interface GetUnreadCountNatsRequest {
    recipientId: string;
    tenantId: string;
    hotelId: string;
}
export type GetUnreadCountNatsResponse = NatsResponse<number>;
export interface GetNotificationStatsNatsRequest {
    recipientId: string;
    tenantId: string;
    hotelId: string;
    filters?: any;
}
export interface NotificationStats {
    total: number;
    unread: number;
    read: number;
    byType?: Record<string, number>;
    byPriority?: Record<string, number>;
}
export type GetNotificationStatsNatsResponse = NatsResponse<NotificationStats>;
export interface MarkAsReadNatsRequest {
    id: string;
    readData: {
        isRead: boolean;
    };
    tenantId: string;
    hotelId: string;
}
export type MarkAsReadNatsResponse = NatsResponse<Notification>;
export interface MarkAllAsReadNatsRequest {
    recipientId: string;
    tenantId: string;
    hotelId: string;
    filters?: any;
}
export interface MarkAllAsReadResult {
    updated: number;
    message: string;
}
export type MarkAllAsReadNatsResponse = NatsResponse<MarkAllAsReadResult>;
export interface DeleteNotificationNatsRequest {
    id: string;
    tenantId: string;
    hotelId: string;
}
export type DeleteNotificationNatsResponse = NatsResponse<{
    message: string;
}>;
//# sourceMappingURL=notifications.nats.d.ts.map