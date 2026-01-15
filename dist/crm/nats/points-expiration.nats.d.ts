/**
 * Points Expiration NATS Contracts
 *
 * Patterns:
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
 *
 * Handler: crm-service (PointsExpirationNatsController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Expiration Rule
 */
export interface ExpirationRuleNatsRequest {
    tenantId: string;
    programId: string;
    expirationMonths: number;
    warningMonths: number;
    renewalPercentage?: number;
    extensionEligibility?: boolean;
}
/**
 * Expiration Settings
 */
export interface ExpirationSettingsNatsRequest {
    tenantId: string;
    enableExpirationNotifications: boolean;
    notificationChannels: string[];
    reminderDays: number[];
    autoRenewalEnabled: boolean;
}
/**
 * Points Expiration Stats Response
 */
export interface PointsExpirationStatsNatsResponse {
    totalPointsExpiring: number;
    membersAffected: number;
    expiringIn30Days: number;
    expiringIn60Days: number;
    expiringIn90Days: number;
    riskOfChurnBySegment: Record<string, number>;
}
/**
 * Stats Request
 * Pattern: crm.loyalty.points_expiration.stats
 */
export interface GetPointsExpirationStatsNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Stats Response
 */
export type GetPointsExpirationStatsNatsResponse = NatsResponse<any>;
/**
 * Expiration Schedule
 */
export interface ExpirationScheduleNatsResponse {
    scheduleId: string;
    date: string | Date;
    pointsExpiring: number;
    membersAffected: number;
    status: string;
}
/**
 * Schedule Request
 * Pattern: crm.loyalty.points_expiration.schedule
 */
export interface GetExpirationScheduleNatsRequest {
    tenantId: string;
    programId?: string;
    month?: string;
    periodDays?: number[];
}
/**
 * Schedule Response
 */
export type GetExpirationScheduleNatsResponse = NatsResponse<any[]>;
/**
 * Member Segments with Expiring Points
 */
export interface MemberSegmentExpirationNatsResponse {
    segmentId: string;
    segmentName: string;
    membersWithExpiringPoints: number;
    totalExpiringPoints: number;
    averagePointsPerMember: number;
    riskLevel: string;
}
/**
 * Member Segments Request
 * Pattern: crm.loyalty.points_expiration.member_segments
 */
export interface GetMemberSegmentsNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Member Segments Response
 */
export type GetMemberSegmentsNatsResponse = NatsResponse<any[]>;
/**
 * Retention Opportunities Response
 */
export interface RetentionOpportunitiesNatsResponse {
    opportunityId: string;
    segmentId: string;
    campaignSuggestion: string;
    targetAudience: number;
    estimatedImpact: number;
    recommendedAction: string;
}
/**
 * Retention Opportunities Request
 * Pattern: crm.loyalty.points_expiration.retention_opportunities
 */
export interface GetRetentionOpportunitiesNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Retention Opportunities Response
 */
export type GetRetentionOpportunitiesNatsResponse = NatsResponse<any[]>;
/**
 * Notification Effectiveness Response
 */
export interface NotificationEffectivenessNatsResponse {
    sentNotifications: number;
    openRate: number;
    clickRate: number;
    conversionRate: number;
    channelPerformance: Record<string, any>;
}
/**
 * Notification Effectiveness Request
 * Pattern: crm.loyalty.points_expiration.notification_effectiveness
 */
export interface GetNotificationEffectivenessNatsRequest {
    tenantId: string;
    programId?: string;
    period?: string;
}
/**
 * Notification Effectiveness Response
 */
export type GetNotificationEffectivenessNatsResponse = NatsResponse<NotificationEffectivenessNatsResponse>;
/**
 * Get Rules Request
 * Pattern: crm.loyalty.points_expiration.rules.get
 */
export interface GetExpirationRulesNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Expiration Rule Response (from entity)
 */
export interface ExpirationRuleNatsResponse {
    id: string;
    tenantId: string;
    ruleName: string;
    description?: string;
    expirationDays: number;
    applicationType: string;
    appliesToTransactionType?: string;
    appliesToTier?: string;
    appliesToCampaignId?: string;
    allowExtension: boolean;
    maxExtensions?: number;
    extensionDays?: number;
    extensionConditions?: any;
    priority: number;
    effectiveFrom?: string | Date;
    effectiveUntil?: string | Date;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
    createdBy?: string;
    updatedBy?: string;
}
/**
 * Get Rules Response
 */
export type GetExpirationRulesNatsResponse = NatsResponse<ExpirationRuleNatsResponse[]>;
/**
 * Create Rules Request
 * Pattern: crm.loyalty.points_expiration.rules.create
 */
export interface CreateExpirationRuleNatsRequest {
    tenantId: string;
    ruleName: string;
    description?: string;
    expirationDays: number;
    applicationType: string;
    appliesToTransactionType?: string;
    appliesToTier?: string;
    appliesToCampaignId?: string;
    allowExtension?: boolean;
    maxExtensions?: number;
    extensionDays?: number;
    extensionConditions?: any;
    priority?: number;
    effectiveFrom?: string | Date;
    effectiveUntil?: string | Date;
}
/**
 * Create Rules Response
 */
export type CreateExpirationRuleNatsResponse = NatsResponse<ExpirationRuleNatsResponse>;
/**
 * Get Settings Request
 * Pattern: crm.loyalty.points_expiration.settings.get
 */
export interface GetExpirationSettingsNatsRequest {
    tenantId: string;
}
/**
 * Get Settings Response
 */
export type GetExpirationSettingsNatsResponse = NatsResponse<any>;
/**
 * Update Settings Request
 * Pattern: crm.loyalty.points_expiration.settings.update
 */
export interface UpdateExpirationSettingsNatsRequest extends ExpirationSettingsNatsRequest {
}
/**
 * Update Settings Response
 */
export type UpdateExpirationSettingsNatsResponse = NatsResponse<any>;
/**
 * Process Expiration Request
 * Pattern: crm.loyalty.points_expiration.process
 */
export interface ProcessExpirationNatsRequest {
    tenantId: string;
    programId?: string;
    dryRun?: boolean;
}
/**
 * Process Expiration Response
 */
export type ProcessExpirationNatsResponse = NatsResponse<{
    processed: number;
    failed: number;
    pointsExpired: number;
    message: string;
}>;
/**
 * Batch Notification Result
 */
export interface BatchNotificationResultNatsResponse {
    sent: number;
    failed: number;
    skipped: number;
    totalAttempted: number;
}
/**
 * Send Batch Notifications Request
 * Pattern: crm.loyalty.points_expiration.notifications.send_batch
 */
export interface SendBatchNotificationsNatsRequest {
    tenantId: string;
    programId?: string;
    daysBefore?: number;
    notificationType?: string;
}
/**
 * Send Batch Notifications Response
 */
export type SendBatchNotificationsNatsResponse = NatsResponse<PointsExpirationBatchNatsResponse>;
/**
 * Batch History Entry
 */
export interface ExpirationBatchHistoryNatsResponse {
    batchId: string;
    tenantId: string;
    processedAt: string | Date;
    pointsExpired: number;
    membersAffected: number;
    status: string;
}
/**
 * Get Batch History Request
 * Pattern: crm.loyalty.points_expiration.batch_history
 */
export interface GetBatchHistoryNatsRequest {
    tenantId: string;
    limit?: number;
    offset?: number;
}
/**
 * Get Batch History Response
 */
export type GetBatchHistoryNatsResponse = NatsResponse<ExpirationBatchHistoryNatsResponse[]>;
/**
 * Points Expiration Batch Response
 */
export interface PointsExpirationBatchNatsResponse {
    id: string | number;
    tenantId: string;
    batchName: string;
    batchType: string;
    status: string;
    processingDate: string | Date;
    startedAt: string | Date;
    completedAt?: string | Date;
    totalRecords: number;
    processedRecords: number;
    successfulRecords: number;
    failedRecords: number;
    skippedRecords?: number;
    durationSeconds?: number;
    triggerSource: string;
    triggeredBy?: string;
    processingParameters?: any;
    processingSummary?: any;
    errorSummary?: string;
    errorDetails?: any;
    logFilePath?: string;
    createdAt: string | Date;
}
/**
 * Member Expiring Points
 */
export interface MemberExpiringPointsNatsResponse {
    memberId: string;
    customerId: string;
    currentPoints: number;
    expiringPoints: number;
    expirationDate: string | Date;
    tierName?: string;
    email?: string;
}
/**
 * Get Member Expiring Points Request
 * Pattern: crm.loyalty.points_expiration.member.get
 */
export interface GetMemberExpiringPointsNatsRequest {
    tenantId: string;
    memberId: string;
}
/**
 * Get Member Expiring Points Response
 */
export type GetMemberExpiringPointsNatsResponse = NatsResponse<MemberExpiringPointsNatsResponse[]>;
/**
 * Extend Expiration Result
 */
export interface ExtendExpirationResultNatsResponse {
    expirationId: string;
    previousExpirationDate: string | Date;
    newExpirationDate: string | Date;
    extensionDays: number;
    pointsAmount: number;
}
/**
 * Extend Points Expiration Request
 * Pattern: crm.loyalty.points_expiration.extend
 */
export interface ExtendExpirationNatsRequest {
    tenantId: string;
    expirationId: string;
    extensionDays: number;
    reason?: string;
}
/**
 * Extend Points Expiration Response
 */
export type ExtendExpirationNatsResponse = NatsResponse<ExtendExpirationResultNatsResponse>;
/**
 * Send Notification Result
 */
export interface SendNotificationResultNatsResponse {
    notificationId: string;
    expirationId: string;
    sent: boolean;
    sentAt: string | Date;
    channel: string;
}
/**
 * Send Single Notification Request
 * Pattern: crm.loyalty.points_expiration.notifications.send
 */
export interface SendNotificationNatsRequest {
    tenantId: string;
    expirationId: string;
    notificationType: string;
    daysBeforeExpiry: number;
    channel?: string;
}
/**
 * Send Single Notification Response
 */
export type SendNotificationNatsResponse = NatsResponse<SendNotificationResultNatsResponse>;
/**
 * Notification History Entry
 */
export interface NotificationHistoryNatsResponse {
    notificationId: string;
    memberId: string;
    notificationType: string;
    sentAt: string | Date;
    channel: string;
    status: string;
    openedAt?: string | Date;
}
/**
 * Get Notification History Request
 * Pattern: crm.loyalty.points_expiration.notifications.history
 */
export interface GetNotificationHistoryNatsRequest {
    tenantId: string;
    memberId?: string;
    limit?: number;
    offset?: number;
}
/**
 * Get Notification History Response
 */
export type GetNotificationHistoryNatsResponse = NatsResponse<NotificationHistoryNatsResponse[]>;
/**
 * Daily Processing Result
 */
export interface DailyProcessingResultNatsResponse {
    processingDate: string | Date;
    pointsExpired: number;
    membersNotified: number;
    batchesProcessed: number;
    successRate: number;
}
/**
 * Daily Expiration Processing Request
 * Pattern: crm.loyalty.points_expiration.job.daily_processing
 */
export interface DailyExpirationProcessingNatsRequest {
    tenantId: string;
    processingDate?: string;
    dryRun?: boolean;
}
/**
 * Daily Expiration Processing Response
 */
export type DailyExpirationProcessingNatsResponse = NatsResponse<DailyProcessingResultNatsResponse>;
/**
 * Send Notification Reminders Result
 */
export interface SendRemindersResultNatsResponse {
    success: boolean;
    results: Array<{
        daysBefore: number;
        batchId: number;
        status: string;
    }>;
    message: string;
}
/**
 * Send Notification Reminders Request
 * Pattern: crm.loyalty.points_expiration.job.notification_reminders
 */
export interface SendNotificationRemindersNatsRequest {
    tenantId: string;
    daysBefore?: number[];
}
/**
 * Send Notification Reminders Response
 */
export type SendNotificationRemindersNatsResponse = NatsResponse<SendRemindersResultNatsResponse>;
//# sourceMappingURL=points-expiration.nats.d.ts.map