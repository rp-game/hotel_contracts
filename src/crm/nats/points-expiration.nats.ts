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
 * - crm.loyalty.points_expiration.members.find_all
 *
 * Handler: crm-service (PointsExpirationNatsController)
 * Called by: api-gateway (CrmController)
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
 * Expiration Overview Stats (nested in full stats response)
 */
export class ExpirationOverviewNatsResponse {
  @ApiProperty({ description: 'Total points expiring across all periods' })
  totalPointsExpiring: number;

  @ApiProperty({ description: 'Number of members affected by expiration' })
  membersAffected: number;

  @ApiProperty({ description: 'Average points per member expiring' })
  averagePointsPerMember: number;

  @ApiProperty({ description: 'Monetary value of expiring points' })
  expirationValue: number;
}

/**
 * Expiration Schedule Item (period breakdown)
 */
export class ExpirationScheduleItemNatsResponse {
  @ApiProperty({ description: 'Period identifier (e.g., "30 days", "60 days", "90 days")' })
  period: string;

  @ApiProperty({ description: 'Total points expiring in this period' })
  points: number;

  @ApiProperty({ description: 'Number of members affected in this period' })
  members: number;

  @ApiProperty({ description: 'Monetary value of expiring points in this period' })
  value: number;
}

/**
 * Member Segment Statistics (tier breakdown)
 */
export class MemberSegmentStatsNatsResponse {
  @ApiProperty({ description: 'Tier name or segment identifier' })
  tier: string;

  @ApiProperty({ description: 'Total points expiring for this segment' })
  expiringPoints: number;

  @ApiProperty({ description: 'Number of members in this segment' })
  members: number;

  @ApiProperty({ description: 'Average expiring points per member in segment' })
  averagePerMember: number;
}

/**
 * Retention Opportunity (suggested actions)
 */
export class RetentionOpportunityNatsResponse {
  @ApiProperty({ description: 'Recommended action to retain members' })
  action: string;

  @ApiProperty({ description: 'Number of members this action targets' })
  targetMembers: number;

  @ApiProperty({ description: 'Estimated conversion rate/success rate' })
  estimatedConversion: number;

  @ApiProperty({ description: 'Potential savings or value recovered' })
  potentialSavings: number;
}

/**
 * Metadata for stats response
 */
export class StatsMetadataNatsResponse {
  @ApiProperty({ description: 'Data source identifier', example: 'DATABASE' })
  dataSource: string;

  @ApiProperty({ description: 'When stats were generated', format: 'date-time' })
  generatedAt: string;
}

/**
 * Complete Points Expiration Stats Response (actual NATS response structure)
 * Pattern: crm.loyalty.points_expiration.stats
 */
export class PointsExpirationStatsDataNatsResponse {
  @ApiProperty({ description: 'Overview statistics', type: ExpirationOverviewNatsResponse })
  overview: ExpirationOverviewNatsResponse;

  @ApiProperty({ description: 'Expiration schedule by period', type: [ExpirationScheduleItemNatsResponse] })
  expirationSchedule: ExpirationScheduleItemNatsResponse[];

  @ApiProperty({ description: 'Member segment statistics', type: [MemberSegmentStatsNatsResponse] })
  memberSegments: MemberSegmentStatsNatsResponse[];

  @ApiProperty({ description: 'Retention opportunities', type: [RetentionOpportunityNatsResponse] })
  retentionOpportunities: RetentionOpportunityNatsResponse[];

  @ApiProperty({ description: 'Response metadata', type: StatsMetadataNatsResponse })
  _metadata: StatsMetadataNatsResponse;
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
export type GetPointsExpirationStatsNatsResponse = NatsResponse<PointsExpirationStatsDataNatsResponse>;

/**
 * Expiration Schedule Item
 * Matches: crm-service/src/database/repositories/points-expiration.repository.ts ExpirationSchedule interface
 */
export interface ExpirationScheduleItem {
  period: string;
  points: number;
  members: number;
  value: number;
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
export type GetExpirationScheduleNatsResponse = NatsResponse<ExpirationScheduleItem[]>;

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
export interface UpdateExpirationSettingsNatsRequest extends ExpirationSettingsNatsRequest {}

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
 * Matches: crm-service PointsExpirationBatch entity
 */
export class PointsExpirationBatchNatsResponse {
  @ApiProperty({ description: 'Batch ID', type: 'number' })
  id: string | number;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Batch name/description' })
  batchName: string;

  @ApiProperty({ description: 'Type of batch operation', enum: ['EXPIRATION_PROCESSING', 'NOTIFICATION_SENDING', 'STATS_CALCULATION'] })
  batchType: string;

  @ApiProperty({ description: 'Batch status', enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED'] })
  status: string;

  @ApiProperty({ description: 'When processing started', type: String, format: 'date-time' })
  processingDate: string | Date;

  @ApiProperty({ description: 'When batch started', type: String, format: 'date-time' })
  startedAt: string | Date;

  @ApiPropertyOptional({ description: 'When batch completed', type: String, format: 'date-time' })
  completedAt?: string | Date;

  @ApiProperty({ description: 'Total records in batch' })
  totalRecords: number;

  @ApiProperty({ description: 'Records successfully processed' })
  processedRecords: number;

  @ApiProperty({ description: 'Records processed successfully' })
  successfulRecords: number;

  @ApiProperty({ description: 'Records that failed' })
  failedRecords: number;

  @ApiPropertyOptional({ description: 'Records skipped' })
  skippedRecords?: number;

  @ApiPropertyOptional({ description: 'Processing duration in seconds' })
  durationSeconds?: number;

  @ApiProperty({ description: 'Source of batch trigger', enum: ['SCHEDULED_JOB', 'MANUAL', 'API_CALL', 'EVENT_TRIGGER'] })
  triggerSource: string;

  @ApiPropertyOptional({ description: 'User/system who triggered batch' })
  triggeredBy?: string;

  @ApiPropertyOptional({ description: 'Processing parameters' })
  processingParameters?: any;

  @ApiPropertyOptional({ description: 'Processing summary/statistics' })
  processingSummary?: any;

  @ApiPropertyOptional({ description: 'Error summary with details' })
  errorSummary?: {
    errorTypes?: {
      [errorType: string]: number;
    };
    failedMemberIds?: string[];
    retryRecommendations?: string[];
  };

  @ApiPropertyOptional({ description: 'Additional error details' })
  errorDetails?: any;

  @ApiPropertyOptional({ description: 'Path to batch log file' })
  logFilePath?: string;

  @ApiProperty({ description: 'When batch was created', type: String, format: 'date-time' })
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

/**
 * Member with Expiring Points (for list display)
 */
export class MemberWithExpiringPointsNatsResponse {
  @ApiProperty({ description: 'Member ID' })
  memberId: string;

  @ApiProperty({ description: 'Customer ID' })
  customerId: string;

  @ApiProperty({ description: 'Customer name' })
  customerName: string;

  @ApiProperty({ description: 'Customer email' })
  customerEmail: string;

  @ApiPropertyOptional({ description: 'Customer phone number' })
  customerPhone?: string;

  @ApiProperty({ description: 'Loyalty program name' })
  programName: string;

  @ApiProperty({ description: 'Member tier name' })
  memberTier: string;

  @ApiProperty({ description: 'Current total points balance' })
  totalPoints: number;

  @ApiProperty({ description: 'Points expiring soon' })
  pointsToExpire: number;

  @ApiProperty({ description: 'Days until points expire' })
  daysUntilExpiration: number;

  @ApiProperty({ description: 'Expiration date', type: String, format: 'date-time' })
  expirationDate: string | Date;

  @ApiPropertyOptional({ description: 'Member status' })
  memberStatus?: string;

  @ApiPropertyOptional({ description: 'Last activity date', type: String, format: 'date-time' })
  lastActivityDate?: string | Date;
}

/**
 * Find All Members with Expiring Points Request
 * Pattern: crm.loyalty.points_expiration.members.find_all
 */
export interface FindAllMembersExpiringPointsNatsRequest {
  tenantId: string;
  programId?: string;
  daysUntilExpiration?: number; // e.g., 30 days - find members with points expiring within X days
  minPointsExpiring?: number; // Optional filter for minimum points
  tierFilter?: string[]; // Optional filter by member tiers
  limit?: number;
  offset?: number;
}

/**
 * Find All Members with Expiring Points Response Data
 * Used by both NATS and REST API
 */
export class FindAllMembersExpiringPointsData {
  @ApiProperty({
    description: 'List of members with expiring points',
    type: [MemberWithExpiringPointsNatsResponse],
  })
  members: MemberWithExpiringPointsNatsResponse[];

  @ApiProperty({
    description: 'Total number of members matching criteria',
    type: Number,
  })
  total: number;

  @ApiProperty({
    description: 'Whether there are more results available',
    type: Boolean,
  })
  hasMore: boolean;
}

/**
 * Find All Members with Expiring Points Response (NATS wrapper)
 */
export type FindAllMembersExpiringPointsNatsResponse = NatsResponse<FindAllMembersExpiringPointsData>;

/**
 * Sync Expiration Records Request
 * Pattern: crm.loyalty.points_expiration.sync
 * Generates points_expiration records from loyalty_transactions (EARN_POINTS)
 * for a specific tenant or all tenants.
 */
export class SyncExpirationRecordsNatsRequest {
  @ApiPropertyOptional({
    description: 'Tenant ID to sync. If omitted, syncs all tenants.',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  tenantId?: string;
}

/**
 * Sync Expiration Records Result
 * Returned when syncing a single tenant (tenantId provided).
 */
export class SyncExpirationRecordsResult {
  @ApiProperty({ description: 'Number of new expiration records created', example: 5 })
  created: number;

  @ApiProperty({ description: 'Number of transactions skipped (no expiration policy or already expired)', example: 2 })
  skipped: number;
}

/**
 * Sync Expiration Records Response (NATS wrapper)
 */
export type SyncExpirationRecordsNatsResponse = NatsResponse<SyncExpirationRecordsResult>;
