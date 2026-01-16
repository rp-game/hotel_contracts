/**
 * Loyalty Analytics NATS Contracts
 *
 * Patterns:
 * - crm.loyalty.analytics
 * - crm.loyalty.tiers
 * - crm.loyalty.members
 * - crm.loyalty.rewards
 * - crm.loyalty.engagement
 * - crm.loyalty.trends
 * - crm.loyalty.performance
 * - crm.loyalty.segments
 * - crm.loyalty.tier_distribution
 * - crm.loyalty.tier_changes
 * - crm.loyalty.near_advancement
 *
 * Note: Points expiration stats handler is defined in points-expiration.nats.ts
 *
 * Handler: crm-service (LoyaltyAnalyticsController)
 */
import { NatsResponse } from '../../common';
/**
 * Loyalty Analytics Response
 */
export interface LoyaltyAnalyticsNatsResponse {
    totalMembers: number;
    activeMembers: number;
    totalPoints: number;
    redeemedPoints: number;
    avgPointsPerMember: number;
}
/**
 * Loyalty Tier Data
 */
export interface LoyaltyTierDataNatsResponse {
    id: string;
    name: string;
    memberCount: number;
    requiredPoints: number;
    benefits: string[];
}
/**
 * Loyalty Member Data
 */
export interface LoyaltyMemberDataNatsResponse {
    id: string;
    customerId: string;
    points: number;
    tier: string;
    status: string;
    joinedAt: string;
}
/**
 * Get Loyalty Analytics Request
 * Pattern: crm.loyalty.analytics
 */
export interface GetLoyaltyAnalyticsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    programId?: string;
}
/**
 * Get Loyalty Analytics Response
 */
export type GetLoyaltyAnalyticsNatsResponse = NatsResponse<LoyaltyAnalyticsNatsResponse>;
/**
 * Get Loyalty Tiers Request
 * Pattern: crm.loyalty.tiers
 */
export interface GetLoyaltyTiersNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Get Loyalty Tiers Response
 */
export type GetLoyaltyTiersNatsResponse = NatsResponse<LoyaltyTierDataNatsResponse[]>;
/**
 * Get Loyalty Members Request
 * Pattern: crm.loyalty.members
 */
export interface GetLoyaltyMembersNatsRequest {
    tenantId: string;
    programId?: string;
    tier?: string;
    status?: string;
}
/**
 * Get Loyalty Members Response
 */
export type GetLoyaltyMembersNatsResponse = NatsResponse<LoyaltyMemberDataNatsResponse[]>;
/**
 * Get Rewards Analytics Request
 * Pattern: crm.loyalty.rewards
 */
export interface GetRewardsAnalyticsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    programId?: string;
}
/**
 * Get Rewards Analytics Response
 */
export type GetRewardsAnalyticsNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Engagement Metrics Request
 * Pattern: crm.loyalty.engagement
 */
export interface GetEngagementMetricsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    programId?: string;
}
/**
 * Get Engagement Metrics Response
 */
export type GetEngagementMetricsNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Loyalty Trends Request
 * Pattern: crm.loyalty.trends
 */
export interface GetLoyaltyTrendsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    programId?: string;
}
/**
 * Get Loyalty Trends Response
 */
export type GetLoyaltyTrendsNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Program Performance Request
 * Pattern: crm.loyalty.performance
 */
export interface GetProgramPerformanceNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Get Program Performance Response
 */
export type GetProgramPerformanceNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Customer Segments Request
 * Pattern: crm.loyalty.segments
 */
export interface GetCustomerSegmentsAnalyticsNatsRequest {
    tenantId: string;
    programId?: string;
}
/**
 * Get Customer Segments Response
 */
export type GetCustomerSegmentsAnalyticsNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Tier Distribution Request
 * Pattern: crm.loyalty.tier_distribution
 */
export interface GetTierDistributionNatsRequest {
    tenantId: string;
    programId: string;
}
/**
 * Get Tier Distribution Response
 */
export type GetTierDistributionNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Recent Tier Changes Request
 * Pattern: crm.loyalty.tier_changes
 */
export interface GetRecentTierChangesNatsRequest {
    tenantId: string;
    programId: string;
    limit?: number;
}
/**
 * Get Recent Tier Changes Response
 */
export type GetRecentTierChangesNatsResponse = NatsResponse<Record<string, any>>;
/**
 * Get Members Near Advancement Request
 * Pattern: crm.loyalty.near_advancement
 */
export interface GetMembersNearAdvancementNatsRequest {
    tenantId: string;
    programId: string;
    threshold?: number;
}
/**
 * Get Members Near Advancement Response
 */
export type GetMembersNearAdvancementNatsResponse = NatsResponse<Record<string, any>>;
//# sourceMappingURL=loyalty-analytics.nats.d.ts.map