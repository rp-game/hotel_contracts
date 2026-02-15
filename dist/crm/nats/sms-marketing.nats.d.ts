/**
 * SMS Marketing NATS Contracts
 *
 * Patterns:
 * - crm.sms_marketing.campaigns.findAll
 * - crm.sms_marketing.campaigns.create
 * - crm.sms_marketing.campaigns.findOne
 * - crm.sms_marketing.campaigns.update
 * - crm.sms_marketing.campaigns.delete
 *
 * Handler: crm-service (SmsMarketingController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Create SMS Campaign DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @matches_entity SmsCampaign (services/crm-service/src/marketing/sms/entities/sms-campaign.entity.ts)
 */
export declare class CreateSMSCampaignDto {
    tenantId: string;
    name: string;
    templateId: string;
    campaignType: string;
    recipientSegmentation?: Record<string, any>;
    personalizationData?: Record<string, any>;
    scheduledAt?: string;
    notes?: string;
    metadata?: Record<string, any>;
}
/**
 * SMS Campaign Response (matches entity structure with template join)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @matches_entity SmsCampaign (services/crm-service/src/marketing/sms/entities/sms-campaign.entity.ts)
 * @note message and description populated from joined template relation
 */
export declare class SmsCampaignNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    templateId: string;
    campaignType: string;
    status: string;
    message?: string;
    description?: string;
    templateName?: string;
    scheduledAt?: string;
    sentAt?: string;
    totalRecipients: number;
    sentCount: number;
    deliveredCount: number;
    failedCount: number;
    optOutCount: number;
    deliveryRate: number;
    notes?: string;
    metadata?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
}
/**
 * Find All SMS Campaigns Request
 * Pattern: crm.sms_marketing.campaigns.findAll
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class FindAllSmsCampaignsNatsRequest {
    tenantId: string;
    status?: string;
    createdFrom?: string;
    createdTo?: string;
    page?: number;
    limit?: number;
}
/**
 * SMS Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class SMSCampaignsListResponseDto {
    campaigns: SmsCampaignNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All SMS Campaigns Response
 */
export type FindAllSmsCampaignsNatsResponse = NatsResponse<SMSCampaignsListResponseDto>;
/**
 * Create SMS Campaign Response
 */
export type CreateSmsCampaignNatsResponse = NatsResponse<SmsCampaignNatsResponse>;
//# sourceMappingURL=sms-marketing.nats.d.ts.map