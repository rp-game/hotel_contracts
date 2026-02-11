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
 * - crm.loyalty.points_expiration.members.find_all
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
import type {
  ExpirationStats,
  ExpirationSchedule,
  MemberSegmentStats,
  RetentionOpportunity,
  NotificationEffectiveness,
  ExpirationRule,
  ExpirationSettings,
  BatchHistoryEntry,
  NotificationSendResult,
  BatchNotificationResult,
  NotificationHistoryEntry,
  MemberExpiringPoints,
  DailyProcessingJobResult,
  NotificationRemindersJobResult,
} from '../types/points-expiration.types';

// ========== STATISTICS & ANALYTICS (5 Patterns) ==========

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
    generatedAt: string; // ISO format
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

// ========== RULES MANAGEMENT (2 Patterns) ==========

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

// ========== SETTINGS MANAGEMENT (2 Patterns) ==========

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
  [key: string]: any; // Dynamic settings fields
}

export type UpdateExpirationSettingsNatsResponse = NatsResponse<ExpirationSettings>;

// ========== PROCESSING & BATCH OPERATIONS (4 Patterns) ==========

/**
 * Process Expirations Request
 * Pattern: crm.loyalty.points_expiration.process
 * Note: Accepts dynamic fields via [key: string]: any
 */
export interface ProcessExpirationsNatsRequest {
  tenant_id: string;
  [key: string]: any; // Dynamic processing fields
}

export interface ProcessExpirationsResult {
  success: boolean;
  batchId: number;
  message: string;
  [key: string]: any; // Additional result fields
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

// ========== NOTIFICATIONS (3 Patterns) ==========

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

// ========== MEMBERS (1 Pattern) ==========

/**
 * Get Member's Expiring Points Request
 * Pattern: crm.loyalty.points_expiration.member.get
 */
export interface GetMemberExpiringPointsNatsRequest {
  tenantId: string;
  memberId: string;
}

export type GetMemberExpiringPointsNatsResponse = NatsResponse<MemberExpiringPoints[]>;

// ========== SCHEDULED JOBS (2 Patterns) ==========

/**
 * Daily Processing Job Request
 * Pattern: crm.loyalty.points_expiration.job.daily_processing
 */
export interface DailyProcessingJobNatsRequest {
  tenantId: string;
  processingDate?: string; // ISO format date
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
 * Member with Expiring Points (for list display)
 */
export interface MemberWithExpiringPoints {
  memberId: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  programName: string;
  memberTier: string;
  totalPoints: number;
  pointsToExpire: number;
  daysUntilExpiration: number;
  expirationDate: string | Date;
  memberStatus?: string;
  lastActivityDate?: string | Date;
}

export type FindAllMembersExpiringPointsNatsResponse = NatsResponse<{
  members: MemberWithExpiringPoints[];
  total: number;
  hasMore: boolean;
}>;
