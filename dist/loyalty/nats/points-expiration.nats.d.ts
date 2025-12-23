/**
 * Loyalty Points Expiration NATS Contracts
 *
 * Patterns (18 total):
 * - crm.loyalty.points_expiration.stats
 * - crm.loyalty.points_expiration.schedule
 * - crm.loyalty.points_expiration.member_segments
 * - crm.loyalty.points_expiration.retention_opportunities
 * - crm.loyalty.points_expiration.notification_effectiveness
 * - crm.loyalty.points_expiration.rules.get
 * - crm.loyalty.points_expiration.rules.create
 * - crm.loyalty.points_expiration.settings.get
 * - crm.loyalty.points_expiration.settings.update
 * - crm.loyalty.points_expiration.process
 * - crm.loyalty.points_expiration.batch_history
 * - crm.loyalty.points_expiration.extend
 * - crm.loyalty.points_expiration.notifications.send
 * - crm.loyalty.points_expiration.notifications.send_batch
 * - crm.loyalty.points_expiration.notifications.history
 * - crm.loyalty.points_expiration.member.get
 * - crm.loyalty.points_expiration.job.daily_processing
 * - crm.loyalty.points_expiration.job.notification_reminders
 *
 * Handler: crm-service (PointsExpirationNatsController)
 * Called by: api-gateway (PointsExpirationController)
 */
import { NatsResponse } from '../../common';
import type { ExpirationStats, ExpirationSchedule, MemberSegmentStats, RetentionOpportunity, NotificationEffectiveness, ExpirationRule, ExpirationSettings, BatchHistoryEntry, NotificationSendResult, BatchNotificationResult, NotificationHistoryEntry, MemberExpiringPoints, DailyProcessingJobResult, NotificationRemindersJobResult } from '../types/points-expiration.types';
/**
 * Get Points Expiration Stats Request
 * Pattern: crm.loyalty.points_expiration.stats
 */
export interface GetPointsExpirationStatsNatsRequest {
    tenantId: string;
}
export interface PointsExpirationStatsData {
    overview: ExpirationStats;
    expirationSchedule: ExpirationSchedule[];
    memberSegments: MemberSegmentStats[];
    retentionOpportunities: RetentionOpportunity[];
    _metadata: {
        dataSource: string;
        generatedAt: string;
    };
}
export type GetPointsExpirationStatsNatsResponse = NatsResponse<PointsExpirationStatsData>;
/**
 * Get Expiration Schedule Request
 * Pattern: crm.loyalty.points_expiration.schedule
 */
export interface GetExpirationScheduleNatsRequest {
    tenantId: string;
    periodDays?: number[];
}
export type GetExpirationScheduleNatsResponse = NatsResponse<ExpirationSchedule[]>;
/**
 * Get Member Segment Stats Request
 * Pattern: crm.loyalty.points_expiration.member_segments
 */
export interface GetMemberSegmentStatsNatsRequest {
    tenantId: string;
}
export type GetMemberSegmentStatsNatsResponse = NatsResponse<MemberSegmentStats[]>;
/**
 * Get Retention Opportunities Request
 * Pattern: crm.loyalty.points_expiration.retention_opportunities
 */
export interface GetRetentionOpportunitiesNatsRequest {
    tenantId: string;
}
export type GetRetentionOpportunitiesNatsResponse = NatsResponse<RetentionOpportunity[]>;
/**
 * Get Notification Effectiveness Request
 * Pattern: crm.loyalty.points_expiration.notification_effectiveness
 */
export interface GetNotificationEffectivenessNatsRequest {
    tenantId: string;
}
export type GetNotificationEffectivenessNatsResponse = NatsResponse<NotificationEffectiveness>;
/**
 * Get Expiration Rules Request
 * Pattern: crm.loyalty.points_expiration.rules.get
 */
export interface GetExpirationRulesNatsRequest {
    tenantId: string;
}
export type GetExpirationRulesNatsResponse = NatsResponse<ExpirationRule[]>;
/**
 * Create Expiration Rule Request
 * Pattern: crm.loyalty.points_expiration.rules.create
 */
export interface CreateExpirationRuleNatsRequest {
    tenant_id: string;
    rule_name: string;
    expiration_days: number;
    application_type: 'ALL' | 'TRANSACTION_TYPE' | 'TIER' | 'CAMPAIGN';
    conditions?: any;
    is_active?: boolean;
}
export type CreateExpirationRuleNatsResponse = NatsResponse<ExpirationRule>;
/**
 * Get Expiration Settings Request
 * Pattern: crm.loyalty.points_expiration.settings.get
 */
export interface GetExpirationSettingsNatsRequest {
    tenantId: string;
}
export type GetExpirationSettingsNatsResponse = NatsResponse<ExpirationSettings | Record<string, any>>;
/**
 * Update Expiration Settings Request
 * Pattern: crm.loyalty.points_expiration.settings.update
 * Note: Accepts dynamic fields via [key: string]: any
 */
export interface UpdateExpirationSettingsNatsRequest {
    tenantId: string;
    [key: string]: any;
}
export type UpdateExpirationSettingsNatsResponse = NatsResponse<ExpirationSettings>;
/**
 * Process Expirations Request
 * Pattern: crm.loyalty.points_expiration.process
 * Note: Accepts dynamic fields via [key: string]: any
 */
export interface ProcessExpirationsNatsRequest {
    tenant_id: string;
    [key: string]: any;
}
export interface ProcessExpirationsResult {
    success: boolean;
    batchId: number;
    message: string;
    [key: string]: any;
}
export type ProcessExpirationsNatsResponse = NatsResponse<ProcessExpirationsResult>;
/**
 * Get Batch History Request
 * Pattern: crm.loyalty.points_expiration.batch_history
 */
export interface GetBatchHistoryNatsRequest {
    tenantId: string;
    limit?: number;
}
export type GetBatchHistoryNatsResponse = NatsResponse<BatchHistoryEntry[]>;
/**
 * Extend Points Expiration Request
 * Pattern: crm.loyalty.points_expiration.extend
 */
export interface ExtendPointsExpirationNatsRequest {
    expiration_id: string;
    extension_days: number;
    reason: string;
}
export interface ExtendPointsResult {
    success: boolean;
    message: string;
}
export type ExtendPointsExpirationNatsResponse = NatsResponse<ExtendPointsResult>;
/**
 * Send Batch Notifications Request
 * Pattern: crm.loyalty.points_expiration.notifications.send_batch
 */
export interface SendBatchNotificationsNatsRequest {
    tenantId: string;
    daysBefore?: number;
}
export type SendBatchNotificationsNatsResponse = NatsResponse<BatchNotificationResult>;
/**
 * Send Notification Request
 * Pattern: crm.loyalty.points_expiration.notifications.send
 */
export interface SendNotificationNatsRequest {
    expiration_id: string;
    tenant_id: string;
    notification_type: string;
    days_before_expiry: number;
}
export type SendNotificationNatsResponse = NatsResponse<NotificationSendResult>;
/**
 * Get Notification History Request
 * Pattern: crm.loyalty.points_expiration.notifications.history
 */
export interface GetNotificationHistoryNatsRequest {
    tenantId: string;
    memberId?: string;
    limit?: number;
}
export type GetNotificationHistoryNatsResponse = NatsResponse<NotificationHistoryEntry[]>;
/**
 * Get Member's Expiring Points Request
 * Pattern: crm.loyalty.points_expiration.member.get
 */
export interface GetMemberExpiringPointsNatsRequest {
    tenantId: string;
    memberId: string;
}
export type GetMemberExpiringPointsNatsResponse = NatsResponse<MemberExpiringPoints[]>;
/**
 * Daily Processing Job Request
 * Pattern: crm.loyalty.points_expiration.job.daily_processing
 */
export interface DailyProcessingJobNatsRequest {
    tenantId: string;
    processingDate?: string;
}
export type DailyProcessingJobNatsResponse = NatsResponse<DailyProcessingJobResult>;
/**
 * Notification Reminders Job Request
 * Pattern: crm.loyalty.points_expiration.job.notification_reminders
 */
export interface NotificationRemindersJobNatsRequest {
    tenantId: string;
    daysBefore?: number[];
}
export type NotificationRemindersJobNatsResponse = NatsResponse<NotificationRemindersJobResult>;
//# sourceMappingURL=points-expiration.nats.d.ts.map