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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
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
export class CampaignRulesNatsRequest {
  @ApiPropertyOptional({ description: 'Points multiplier (e.g., 2x, 3x)' })
  multiplier?: number;

  @ApiPropertyOptional({ description: 'Fixed bonus points to award' })
  bonus_points?: number;

  @ApiPropertyOptional({ description: 'Minimum spend requirement (VND)' })
  min_spend?: number;

  @ApiPropertyOptional({ description: 'Maximum bonus points cap' })
  max_bonus?: number;

  @ApiPropertyOptional({ description: 'Eligible tier IDs', type: [String] })
  eligible_tiers?: string[];

  @ApiPropertyOptional({ description: 'Eligible service types', type: [String] })
  eligible_services?: string[];

  @ApiPropertyOptional({ description: 'Maximum uses per customer' })
  max_uses_per_customer?: number;

  @ApiPropertyOptional({ description: 'Total campaign budget (VND)' })
  total_budget?: number;
}

/**
 * Campaign Conditions
 */
export class CampaignConditionsNatsRequest {
  @ApiPropertyOptional({ description: 'Target customer segment IDs', type: [String] })
  customer_segments?: string[];

  @ApiPropertyOptional({ description: 'Qualifying booking types', type: [String] })
  booking_types?: string[];

  @ApiPropertyOptional({ description: 'Qualifying room categories', type: [String] })
  room_categories?: string[];

  @ApiPropertyOptional({ description: 'Minimum nights stay requirement' })
  minimum_nights?: number;

  @ApiPropertyOptional({ description: 'Advance booking days required' })
  advance_booking_days?: number;

  @ApiPropertyOptional({ description: 'Exclude corporate bookings' })
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
export class CampaignTracking {
  @ApiPropertyOptional({ description: 'Number of campaign views' })
  views?: number;

  @ApiPropertyOptional({ description: 'Number of enrollments' })
  enrollments?: number;

  @ApiPropertyOptional({ description: 'Number of redemptions' })
  redemptions?: number;

  @ApiPropertyOptional({ description: 'Conversion rate (%)' })
  conversionRate?: number;
}

/**
 * Loyalty Campaign Response
 */
export class LoyaltyCampaignNatsResponse {
  @ApiProperty({ description: 'Campaign ID' })
  id: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId: string;

  @ApiProperty({ description: 'Loyalty program ID' })
  programId: string;

  @ApiProperty({ description: 'Campaign name' })
  name: string;

  @ApiPropertyOptional({ description: 'Campaign description' })
  description?: string;

  @ApiProperty({ description: 'Campaign type' })
  campaignType: string;

  @ApiProperty({ description: 'Campaign status' })
  status: string;

  @ApiProperty({ description: 'Start date (ISO 8601)' })
  startDate: string;

  @ApiProperty({ description: 'End date (ISO 8601)' })
  endDate: string;

  @ApiProperty({ description: 'Campaign rules configuration', type: CampaignRulesNatsRequest })
  @ValidateNested()
  @Type(() => CampaignRulesNatsRequest)
  rules: CampaignRulesNatsRequest;

  @ApiPropertyOptional({ description: 'Campaign conditions', type: CampaignConditionsNatsRequest })
  @ValidateNested()
  @Type(() => CampaignConditionsNatsRequest)
  conditions?: CampaignConditionsNatsRequest;

  @ApiProperty({ description: 'Auto-apply campaign flag' })
  isAutoApply: boolean;

  @ApiPropertyOptional({ description: 'Promotion code for campaign' })
  promotionCode?: string;

  @ApiPropertyOptional({ description: 'Active flag' })
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Campaign budget (VND)' })
  budget?: number;

  @ApiPropertyOptional({ description: 'Participants count' })
  participantsCount?: number;

  @ApiPropertyOptional({ description: 'Participation count' })
  participationCount?: number;

  @ApiPropertyOptional({ description: 'Points awarded through this campaign' })
  pointsAwarded?: number;

  @ApiPropertyOptional({ description: 'Cost to date (VND)' })
  costToDate?: number;

  @ApiPropertyOptional({ description: 'Campaign tracking metrics', type: CampaignTracking })
  @ValidateNested()
  @Type(() => CampaignTracking)
  tracking?: CampaignTracking;

  @ApiPropertyOptional({ description: 'Created by user ID' })
  createdBy?: string;

  @ApiProperty({ description: 'Creation timestamp (ISO 8601)' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp (ISO 8601)' })
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
 * Top Campaign Performer Item (for Stats.topCampaigns array)
 */
export class CampaignTopPerformerItem {
  @ApiProperty({ description: 'Campaign ID' })
  id: string;

  @ApiProperty({ description: 'Campaign name' })
  name: string;

  @ApiProperty({ description: 'Number of members impacted' })
  membersImpacted: number;

  @ApiProperty({ description: 'Points awarded' })
  pointsAwarded: number;
}

/**
 * Campaign Stats Response
 */
export class CampaignStatsNatsResponse {
  @ApiProperty({ description: 'Campaign statistics overview' })
  totalCampaigns: number;

  @ApiProperty({ description: 'Active campaigns count' })
  activeCampaigns: number;

  @ApiProperty({ description: 'Total members impacted' })
  totalMembersImpacted: number;

  @ApiProperty({ description: 'Total points awarded' })
  totalPointsAwarded: number;

  @ApiProperty({ description: 'Average redemption rate' })
  averageRedemptionRate: number;

  @ApiProperty({ description: 'Top campaigns', type: [CampaignTopPerformerItem] })
  @Type(() => CampaignTopPerformerItem)
  topCampaigns: CampaignTopPerformerItem[];
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
 * Campaign Performance Item (for Dashboard.campaignPerformance array)
 */
export class CampaignPerformanceItem {
  @ApiProperty({ description: 'Campaign ID' })
  campaignId: string;

  @ApiProperty({ description: 'Campaign name' })
  name: string;

  @ApiProperty({ description: 'Engagement rate (0-100)' })
  engagement: number;

  @ApiProperty({ description: 'Return on investment (ROI) percentage' })
  roi: number;
}

/**
 * Campaign Dashboard Response
 */
export class CampaignDashboardNatsResponse {
  @ApiProperty({ description: 'Number of active campaigns' })
  activeCampaigns: number;

  @ApiProperty({ description: 'Number of upcoming campaigns' })
  upcomingCampaigns: number;

  @ApiProperty({ description: 'Total members enrolled in campaigns' })
  totalMembersEnrolled: number;

  @ApiProperty({ description: 'Total points distributed through campaigns' })
  totalPointsDistributed: number;

  @ApiProperty({ description: 'Campaign performance metrics', type: [CampaignPerformanceItem] })
  @Type(() => CampaignPerformanceItem)
  campaignPerformance: CampaignPerformanceItem[];
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
export class CampaignTemplateNatsResponse {
  @ApiProperty({ description: 'Template ID' })
  id: string;

  @ApiProperty({ description: 'Template name' })
  name: string;

  @ApiProperty({ description: 'Campaign type' })
  type: string;

  @ApiProperty({ description: 'Template description' })
  description: string;

  @ApiProperty({ description: 'Campaign rules', type: CampaignRulesNatsRequest })
  @ValidateNested()
  @Type(() => CampaignRulesNatsRequest)
  rules: CampaignRulesNatsRequest;

  @ApiPropertyOptional({ description: 'Campaign conditions', type: CampaignConditionsNatsRequest })
  @ValidateNested()
  @Type(() => CampaignConditionsNatsRequest)
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

/**
 * Loyalty Campaigns List Data (wrapper for paginated list)
 */
export class LoyaltyCampaignsListData {
  @ApiProperty({ description: 'List of loyalty campaigns', type: [LoyaltyCampaignNatsResponse] })
  data: LoyaltyCampaignNatsResponse[];

  @ApiProperty({ description: 'Total number of campaigns' })
  total: number;

  @ApiProperty({ description: 'Current page number' })
  page: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit: number;
}

/**
 * Active Campaigns List Data (wrapper for active campaigns)
 */
export class ActiveCampaignsListData {
  @ApiProperty({ description: 'List of active campaigns', type: [LoyaltyCampaignNatsResponse] })
  data: LoyaltyCampaignNatsResponse[];

  @ApiProperty({ description: 'Total number of active campaigns' })
  total: number;
}
