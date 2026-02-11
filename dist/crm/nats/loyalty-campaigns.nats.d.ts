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
import { NatsResponse } from '../../common';
/**
 * Campaign Type Enum
 */
export declare enum CampaignType {
    BONUS_POINTS = "BONUS_POINTS",
    MULTIPLIER = "MULTIPLIER",
    DISCOUNT = "DISCOUNT",
    FREE_SERVICE = "FREE_SERVICE",
    TIER_BONUS = "TIER_BONUS",
    REFERRAL = "REFERRAL",
    BIRTHDAY = "BIRTHDAY",
    ANNIVERSARY = "ANNIVERSARY",
    SEASONAL = "SEASONAL",
    SPEND_THRESHOLD = "SPEND_THRESHOLD"
}
/**
 * Campaign Status Enum
 */
export declare enum CampaignStatus {
    DRAFT = "DRAFT",
    SCHEDULED = "SCHEDULED",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    ENDED = "ENDED",
    CANCELLED = "CANCELLED"
}
/**
 * Campaign Rules
 */
export declare class CampaignRulesNatsRequest {
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
export declare class CampaignConditionsNatsRequest {
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
    conditions?: CampaignConditionsNatsRequest;
    isAutoApply?: boolean;
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
export declare class CampaignTracking {
    views?: number;
    enrollments?: number;
    redemptions?: number;
    conversionRate?: number;
}
/**
 * Loyalty Campaign Response
 */
export declare class LoyaltyCampaignNatsResponse {
    id: string;
    tenantId: string;
    programId: string;
    name: string;
    description?: string;
    campaignType: string;
    status: string;
    startDate: string;
    endDate: string;
    rules: CampaignRulesNatsRequest;
    conditions?: CampaignConditionsNatsRequest;
    isAutoApply: boolean;
    promotionCode?: string;
    isActive?: boolean;
    budget?: number;
    participantsCount?: number;
    participationCount?: number;
    pointsAwarded?: number;
    costToDate?: number;
    tracking?: CampaignTracking;
    createdBy?: string;
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
 * Top Campaign Performer Item (for Stats.topCampaigns array)
 */
export declare class CampaignTopPerformerItem {
    id: string;
    name: string;
    membersImpacted: number;
    pointsAwarded: number;
}
/**
 * Campaign Stats Response
 */
export declare class CampaignStatsNatsResponse {
    totalCampaigns: number;
    activeCampaigns: number;
    totalMembersImpacted: number;
    totalPointsAwarded: number;
    averageRedemptionRate: number;
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
export declare class CampaignPerformanceItem {
    campaignId: string;
    name: string;
    engagement: number;
    roi: number;
}
/**
 * Campaign Dashboard Response
 */
export declare class CampaignDashboardNatsResponse {
    activeCampaigns: number;
    upcomingCampaigns: number;
    totalMembersEnrolled: number;
    totalPointsDistributed: number;
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
export declare class CampaignAnalyticsNatsResponse {
    campaignId: string;
    name: string;
    totalMembers: number;
    totalParticipants: number;
    conversionRate: number;
    totalPointsAwarded: number;
    averagePointsPerMember: number;
    roi: number;
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
export declare class CampaignTemplateNatsResponse {
    id: string;
    name: string;
    type: string;
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
/**
 * Loyalty Campaigns List Data (wrapper for paginated list)
 */
export declare class LoyaltyCampaignsListData {
    data: LoyaltyCampaignNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Active Campaigns List Data (wrapper for active campaigns)
 */
export declare class ActiveCampaignsListData {
    data: LoyaltyCampaignNatsResponse[];
    total: number;
}
//# sourceMappingURL=loyalty-campaigns.nats.d.ts.map