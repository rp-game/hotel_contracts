/**
 * Marketing Stats NATS Contracts
 *
 * Pattern: crm.marketing.stats
 * Handler: crm-service (AutomationController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Marketing Stats Request
 * Pattern: crm.marketing.stats
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class GetMarketingStatsNatsRequest {
    tenantId: string;
    startDate?: string;
    endDate?: string;
    campaignType?: 'email' | 'sms' | 'all';
    includeHistorical?: boolean;
    includeTopCampaigns?: boolean;
}
/**
 * Marketing Performance by Month
 */
export declare class MarketingPerformanceMonthDto {
    month: string;
    emailCampaigns: number;
    smsCampaigns: number;
    totalRevenue: string;
    avgOpenRate: string;
    customersReached: number;
}
/**
 * Top Performing Campaign
 */
export declare class TopPerformingCampaignDto {
    id: string;
    name: string;
    type: string;
    openRate: string;
    clickRate: string;
    revenueGenerated: string;
    recipients: number;
    sentAt: string;
}
/**
 * Marketing Stats Response
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches both NATS handler and API Gateway)
 */
export declare class MarketingStatsNatsResponse {
    totalEmailCampaigns: number;
    totalSmsCampaigns: number;
    totalAutomationRules: number;
    activeAutomationRules: number;
    avgEmailOpenRate: string;
    avgEmailClickRate: string;
    avgSmsDeliveryRate: string;
    totalRevenue: string;
    totalCustomersReached: number;
    emailsSentThisMonth: number;
    smseSentThisMonth: number;
    performanceByMonth?: MarketingPerformanceMonthDto[];
    topPerformingCampaigns?: TopPerformingCampaignDto[];
}
/**
 * Get Marketing Stats Response (NATS)
 */
export type GetMarketingStatsNatsResponse = NatsResponse<MarketingStatsNatsResponse>;
//# sourceMappingURL=marketing-stats.nats.d.ts.map