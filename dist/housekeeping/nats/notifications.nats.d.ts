/**
 * Notifications NATS Contracts
 * Patterns: housekeeping.notifications.*
 */
import { NatsResponse } from '../../common';
export interface Notification {
    id: string;
    recipientId: string;
    recipientRole?: string;
    title: string;
    message: string;
    type: string;
    priority: string;
    data?: Record<string, unknown>;
    channels: string[];
    isRead: boolean;
    isSent: boolean;
    readAt?: string | Date;
    sentAt?: string | Date;
    scheduledFor?: string | Date;
    expiresAt?: string | Date;
    referenceId?: string;
    referenceType?: string;
    tenantId: string;
    hotelId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export interface CreateNotificationNatsRequest {
    createData: {
        recipientId: string;
        recipientRole?: string;
        title: string;
        message: string;
        type: string;
        priority?: string;
        data?: Record<string, unknown>;
        channels: string[];
        scheduledFor?: string | Date;
        expiresAt?: string | Date;
        referenceId?: string;
        referenceType?: string;
    };
    tenantId: string;
    hotelId: string;
}
export type CreateNotificationNatsResponse = NatsResponse<Notification>;
export interface SendNotificationFromTemplateNatsRequest {
    sendData: {
        templateId: string;
        recipientIds: string[];
        templateData?: Record<string, any>;
        priority?: string;
        channels?: string[];
    };
    tenantId: string;
    hotelId: string;
}
export interface BulkSendResult {
    sent: number;
    failed: number;
    notifications: Notification[];
}
export type SendNotificationFromTemplateNatsResponse = NatsResponse<BulkSendResult>;
export interface SendBulkNotificationsNatsRequest {
    bulkData: {
        notifications: Array<{
            recipientId: string;
            recipientRole?: string;
            type: string;
            priority?: string;
            title: string;
            message: string;
            data?: Record<string, any>;
            channels: string[];
            scheduledFor?: string | Date;
            expiresAt?: string | Date;
            referenceId?: string;
            referenceType?: string;
        }>;
        immediate?: boolean;
        campaignId?: string;
    };
    tenantId: string;
    hotelId: string;
}
export type SendBulkNotificationsNatsResponse = NatsResponse<BulkSendResult>;
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
export interface NotificationStatsResult {
    total: number;
    unread: number;
    read: number;
    byType?: Record<string, number>;
    byPriority?: Record<string, number>;
}
export type GetNotificationStatsNatsResponse = NatsResponse<NotificationStatsResult>;
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