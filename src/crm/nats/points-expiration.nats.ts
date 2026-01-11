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
export type GetPointsExpirationStatsNatsResponse = NatsResponse<PointsExpirationStatsNatsResponse>;

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
}

/**
 * Schedule Response
 */
export type GetExpirationScheduleNatsResponse = NatsResponse<ExpirationScheduleNatsResponse[]>;

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
export type GetMemberSegmentsNatsResponse = NatsResponse<MemberSegmentExpirationNatsResponse[]>;

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
export type GetRetentionOpportunitiesNatsResponse = NatsResponse<RetentionOpportunitiesNatsResponse[]>;

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
 * Get Rules Response
 */
export type GetExpirationRulesNatsResponse = NatsResponse<ExpirationRuleNatsRequest[]>;

/**
 * Create Rules Request
 * Pattern: crm.loyalty.points_expiration.rules.create
 */
export interface CreateExpirationRuleNatsRequest extends ExpirationRuleNatsRequest {}

/**
 * Create Rules Response
 */
export type CreateExpirationRuleNatsResponse = NatsResponse<ExpirationRuleNatsRequest>;

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
export type GetExpirationSettingsNatsResponse = NatsResponse<ExpirationSettingsNatsRequest>;

/**
 * Update Settings Request
 * Pattern: crm.loyalty.points_expiration.settings.update
 */
export interface UpdateExpirationSettingsNatsRequest extends ExpirationSettingsNatsRequest {}

/**
 * Update Settings Response
 */
export type UpdateExpirationSettingsNatsResponse = NatsResponse<ExpirationSettingsNatsRequest>;

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
