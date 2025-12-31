/**
 * Notifications NATS Contracts
 * Patterns: housekeeping.notifications.*
 */

import { NatsResponse } from '../../common';

// NOTE: Dates are strings because they're serialized over NATS
// Type and Priority are enum strings (NotificationType/NotificationPriority values)

// Frontend/REST API Notification DTO (simplified UI model)
// This is what the API Gateway returns to the frontend
export interface NotificationUIDto {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  isRead: boolean;
  createdAt: string;
  readAt?: string;
  relatedTask?: {
    id: string;
    roomNumber: string;
    taskType: string;
  };
  data?: Record<string, unknown>;
}

// Internal NATS Notification (full model with metadata)
export interface Notification {
  id: string;
  recipientId: string;
  recipientRole?: string;  // Role of the recipient (for role-based notifications)
  title: string;
  message: string;
  type: string;  // NotificationType enum value as string
  priority: string;  // NotificationPriority enum value as string
  data?: Record<string, unknown>;
  channels: string[];  // NotificationChannel enum values
  isRead: boolean;
  isSent: boolean;  // Whether notification was successfully sent
  readAt?: string | Date;  // Accept both for compatibility during conversion
  sentAt?: string | Date;  // Accept both for compatibility during conversion
  scheduledFor?: string | Date;  // Accept both for compatibility during conversion
  expiresAt?: string | Date;  // Accept both for compatibility during conversion
  referenceId?: string;  // Reference ID for related entity (task, booking, etc)
  referenceType?: string;  // Type of referenced entity
  tenantId: string;
  hotelId: string;
  createdAt: string | Date;  // Accept both for compatibility during conversion
  updatedAt: string | Date;  // Accept both for compatibility during conversion
}

// CREATE
export interface CreateNotificationNatsRequest {
  createData: {
    recipientId: string;
    recipientRole?: string;
    title: string;
    message: string;
    type: string;  // NotificationType enum value
    priority?: string;  // NotificationPriority enum value
    data?: Record<string, unknown>;
    channels: string[];  // NotificationChannel enum values - REQUIRED
    scheduledFor?: string | Date;
    expiresAt?: string | Date;
    referenceId?: string;
    referenceType?: string;
  };
  tenantId: string;
  hotelId: string;
}
export type CreateNotificationNatsResponse = NatsResponse<Notification>;

// SEND-FROM-TEMPLATE
export interface SendNotificationFromTemplateNatsRequest {
  sendData: {
    templateId: string;
    recipientIds: string[];
    templateData?: Record<string, any>;
    priority?: string;  // NotificationPriority enum value
    channels?: string[];  // NotificationChannel enum values
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

// SEND-BULK
export interface SendBulkNotificationsNatsRequest {
  bulkData: {
    notifications: Array<{
      recipientId: string;
      recipientRole?: string;
      type: string;  // NotificationType enum value
      priority?: string;  // NotificationPriority enum value
      title: string;
      message: string;
      data?: Record<string, any>;
      channels: string[];  // NotificationChannel enum values
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

// FIND-BY-RECIPIENT
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

// UNREAD-COUNT
export interface GetUnreadCountNatsRequest {
  recipientId: string;
  tenantId: string;
  hotelId: string;
}
export type GetUnreadCountNatsResponse = NatsResponse<number>;

// STATS
export interface GetNotificationStatsNatsRequest {
  recipientId: string;
  tenantId: string;
  hotelId: string;
  filters?: any;
}
export interface NotificationStatsResult {
  totalSent: number;
  totalRead: number;
  totalUnread: number;
  readPercentage: number;
  byType: Record<string, number>;
  byChannel: Record<string, number>;
  byPriority: Record<string, number>;
}
export type GetNotificationStatsNatsResponse = NatsResponse<NotificationStatsResult>;

// MARK-READ
export interface MarkAsReadNatsRequest {
  id: string;
  readData: {
    isRead: boolean;
  };
  tenantId: string;
  hotelId: string;
}
export type MarkAsReadNatsResponse = NatsResponse<Notification>;

// MARK-ALL-READ
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

// DELETE
export interface DeleteNotificationNatsRequest {
  id: string;
  tenantId: string;
  hotelId: string;
}
export type DeleteNotificationNatsResponse = NatsResponse<{ message: string }>;
