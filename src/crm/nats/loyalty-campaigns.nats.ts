/**
 * Loyalty Campaigns NATS Contracts
 *
 * Patterns:
 * - crm.loyalty.campaigns.findAll
 * - crm.loyalty.campaigns.findActive
 * - crm.loyalty.campaigns.stats
 * - crm.loyalty.campaigns.dashboard
 * - crm.loyalty.campaigns.findById
 * - crm.loyalty.campaigns.analytics
 * - crm.loyalty.campaigns.create
 * - crm.loyalty.campaigns.update
 * - crm.loyalty.campaigns.apply
 * - crm.loyalty.campaigns.templates
 *
 * Handler: crm-service (LoyaltyCampaignsNatsController)
 * Called by: api-gateway (CrmController)
 */

import { ApiProperty } from '@nestjs/swagger';
import { NatsResponse } from '../../common';

/**
 * Campaign Type Enum
 */
export enum CampaignType {
  BONUS_POINTS = 'BONUS_POINTS',
  MULTIPLIER = 'MULTIPLIER',
  DISCOUNT = 'DISCOUNT',
  FREE_SERVICE = 'FREE_SERVICE',
  TIER_BONUS = 'TIER_BONUS',
  REFERRAL = 'REFERRAL',
  BIRTHDAY = 'BIRTHDAY',
  ANNIVERSARY = 'ANNIVERSARY',
  SEASONAL = 'SEASONAL',
  SPEND_THRESHOLD = 'SPEND_THRESHOLD',
}

/**
 * Campaign Status Enum
 */
export enum CampaignStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED',
}

/**
 * Campaign Rules
 */
export interface CampaignRulesNatsRequest {
  multiplier?: number;
  bonus_points?: number;
  min_spend?: number;
  max_bonus?: number;
  eligible_tiers?: string[];
  eligible_services?: string[];
  max_uses_per_customer?: number;
  total_budget?: number;
}

/**
 * Campaign Conditions
 */
export interface CampaignConditionsNatsRequest {
  customer_segments?: string[];
  booking_types?: string[];
  room_categories?: string[];
  minimum_nights?: number;
  advance_booking_days?: number;
  exclude_corporate?: boolean;
}

/**
 * Create Campaign Request
 * Pattern: crm.loyalty.campaigns.create
 */
export interface CreateCampaignNatsRequest {
  tenantId: string;
  userId: string;
  programId: string;
  name: string;
  description?: string;
  campaignType: CampaignType;
  startDate: string;
  endDate: string;
  rules: CampaignRulesNatsRequest;
  conditions?: CampaignConditionsNatsRequest;  // Optional - apply to all customers if not specified
  isAutoApply?: boolean;  // Optional - manual apply if false/undefined
  promotionCode?: string;
}

/**
 * Update Campaign Request
 * Pattern: crm.loyalty.campaigns.update
 */
export interface UpdateCampaignNatsRequest {
  tenantId: string;
  campaignId: string;
  userId: string;
  updateDto: Partial<CreateCampaignNatsRequest>;
}

/**
 * Campaign Tracking Metrics
 */
export interface CampaignTracking {
  views?: number;
  enrollments?: number;
  redemptions?: number;
  conversionRate?: number;
}

/**
 * Loyalty Campaign Response
 */
export interface LoyaltyCampaignNatsResponse {
  id: string;
  tenantId: string;
  programId: string;
  name: string;
  description?: string;
  campaignType: CampaignType;
  status: CampaignStatus;
  startDate: string;
  endDate: string;
  rules: CampaignRulesNatsRequest;
  conditions?: CampaignConditionsNatsRequest;
  isAutoApply: boolean;
  promotionCode?: string;
  isActive?: boolean;
  participationCount?: number;
  pointsAwarded?: number;
  costToDate?: number;
  tracking?: CampaignTracking;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Find All Campaigns Request
 * Pattern: crm.loyalty.campaigns.findAll
 */
export interface FindAllCampaignsNatsRequest {
  tenantId: string;
  programId?: string;
  status?: string;
  page?: number;
  limit?: number;
}

/**
 * Find All Campaigns Response
 */
export type FindAllCampaignsNatsResponse = NatsResponse<{
  data: LoyaltyCampaignNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

/**
 * Find Active Campaigns Request
 * Pattern: crm.loyalty.campaigns.findActive
 */
export interface FindActiveCampaignsNatsRequest {
  tenantId: string;
  programId?: string;
}

/**
 * Find Active Campaigns Response
 */
export type FindActiveCampaignsNatsResponse = NatsResponse<{
  data: LoyaltyCampaignNatsResponse[];
  total: number;
}>;

/**
 * Campaign Stats Response
 */
export interface CampaignStatsNatsResponse {
  totalCampaigns: number;
  activeCampaigns: number;
  totalMembersImpacted: number;
  totalPointsAwarded: number;
  averageRedemptionRate: number;
  topCampaigns: Array<{
    id: string;
    name: string;
    membersImpacted: number;
    pointsAwarded: number;
  }>;
}

/**
 * Stats Request
 * Pattern: crm.loyalty.campaigns.stats
 */
export interface GetCampaignStatsNatsRequest {
  tenantId: string;
}

/**
 * Stats Response
 */
export type GetCampaignStatsNatsResponse = NatsResponse<CampaignStatsNatsResponse>;

/**
 * Campaign Dashboard Response
 */
export interface CampaignDashboardNatsResponse {
  activeCampaigns: number;
  upcomingCampaigns: number;
  totalMembersEnrolled: number;
  totalPointsDistributed: number;
  campaignPerformance: Array<{
    campaignId: string;
    name: string;
    engagement: number;
    roi: number;
  }>;
}

/**
 * Dashboard Request
 * Pattern: crm.loyalty.campaigns.dashboard
 */
export interface GetCampaignDashboardNatsRequest {
  tenantId: string;
}

/**
 * Dashboard Response
 */
export type GetCampaignDashboardNatsResponse = NatsResponse<CampaignDashboardNatsResponse>;

/**
 * Find Campaign By Id Request
 * Pattern: crm.loyalty.campaigns.findById
 */
export interface FindCampaignByIdNatsRequest {
  tenantId: string;
  campaignId: string;
}

/**
 * Find Campaign By Id Response
 */
export type FindCampaignByIdNatsResponse = NatsResponse<LoyaltyCampaignNatsResponse>;

/**
 * Campaign Analytics Response
 */
export class CampaignAnalyticsNatsResponse {
  @ApiProperty({ description: 'Campaign ID' })
  campaignId: string;

  @ApiProperty({ description: 'Campaign name' })
  name: string;

  @ApiProperty({ description: 'Total members in the program' })
  totalMembers: number;

  @ApiProperty({ description: 'Total participants in the campaign' })
  totalParticipants: number;

  @ApiProperty({ description: 'Conversion rate (0-100)' })
  conversionRate: number;

  @ApiProperty({ description: 'Total points awarded through this campaign' })
  totalPointsAwarded: number;

  @ApiProperty({ description: 'Average points per member' })
  averagePointsPerMember: number;

  @ApiProperty({ description: 'Return on investment (ROI) percentage' })
  roi: number;

  @ApiProperty({ description: 'Engagement rate (0-100)' })
  engagement: number;
}

/**
 * Analytics Request
 * Pattern: crm.loyalty.campaigns.analytics
 */
export interface GetCampaignAnalyticsNatsRequest {
  tenantId: string;
  campaignId: string;
}

/**
 * Analytics Response
 */
export type GetCampaignAnalyticsNatsResponse = NatsResponse<CampaignAnalyticsNatsResponse>;

/**
 * Create Campaign Response
 */
export type CreateCampaignNatsResponse = NatsResponse<LoyaltyCampaignNatsResponse>;

/**
 * Update Campaign Response
 */
export type UpdateCampaignNatsResponse = NatsResponse<LoyaltyCampaignNatsResponse>;

/**
 * Manage Campaign Status Request
 * Pattern: crm.loyalty.campaigns.manage_status
 */
export interface ManageCampaignStatusNatsRequest {
  tenantId: string;
  campaignId: string;
  status: CampaignStatus;
  userId: string;
}

/**
 * Manage Campaign Status Response
 */
export type ManageCampaignStatusNatsResponse = NatsResponse<LoyaltyCampaignNatsResponse>;

/**
 * Apply Campaign Request
 * Pattern: crm.loyalty.campaigns.apply
 */
export interface ApplyCampaignNatsRequest {
  tenantId: string;
  campaignId: string;
  memberId: string;
  transactionAmount: number;
}

/**
 * Apply Campaign Response
 */
export type ApplyCampaignNatsResponse = NatsResponse<{
  success: boolean;
  pointsAwarded: number;
  message: string;
}>;

/**
 * Campaign Template Response
 */
export interface CampaignTemplateNatsResponse {
  id: string;
  name: string;
  type: CampaignType;
  description: string;
  rules: CampaignRulesNatsRequest;
  conditions?: CampaignConditionsNatsRequest;
}

/**
 * Templates Request
 * Pattern: crm.loyalty.campaigns.templates
 */
export interface GetCampaignTemplatesNatsRequest {
  tenantId?: string;
}

/**
 * Templates Response
 */
export type GetCampaignTemplatesNatsResponse = NatsResponse<CampaignTemplateNatsResponse[]>;
