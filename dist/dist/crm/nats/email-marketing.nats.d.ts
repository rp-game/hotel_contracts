/**
 * Email Marketing NATS Contracts
 *
 * Patterns:
 * - crm.email_marketing.campaigns.findAll
 * - crm.email_marketing.campaigns.create
 * - crm.email_marketing.campaigns.findOne
 * - crm.email_marketing.campaigns.update
 * - crm.email_marketing.campaigns.delete
 * - crm.email_marketing.templates.findAll
 * - crm.email_marketing.templates.create
 * - crm.email_marketing.send.single
 * - crm.email_marketing.send.campaign
 * - crm.email_marketing.analytics
 *
 * Handler: crm-service (EmailMarketingController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * Campaign Status Enum
 */
export declare enum EmailCampaignStatus {
    DRAFT = "DRAFT",
    SCHEDULED = "SCHEDULED",
    SENDING = "SENDING",
    SENT = "SENT",
    PAUSED = "PAUSED",
    CANCELLED = "CANCELLED"
}
/**
 * Create Email Campaign DTO (used for both requests)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class CreateEmailCampaignDto {
    tenantId: string;
    name: string;
    description?: string;
    subject: string;
    content: string;
    templateId?: string;
    type?: string;
    targetSegmentId?: string;
    scheduledAt?: string;
    sendImmediately?: boolean;
    metadata?: Record<string, any>;
}
/**
 * Update Email Campaign Request
 * Pattern: crm.email_marketing.campaigns.update
 */
export interface UpdateEmailCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
    userId: string;
    updateDto: Partial<CreateEmailCampaignDto>;
}
/**
 * Email Campaign Stats (embedded in campaign)
 */
export declare class EmailCampaignStatsDto {
    totalRecipients: number;
    delivered: number;
    opened: number;
    clicked: number;
    unsubscribed: number;
    bounced: number;
    openRate: string;
    clickRate: string;
    unsubscribeRate: string;
    bounceRate: string;
}
/**
 * Email Campaign Response (matches NATS handler real structure)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches NATS handler real code)
 */
export declare class EmailCampaignNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    description?: string;
    subject: string;
    content: string;
    templateId?: string;
    type: string;
    status: string;
    targetSegmentId?: string;
    scheduledAt?: string;
    sentAt?: string;
    stats?: EmailCampaignStatsDto;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
}
/**
 * Email Template Response
 */
export interface EmailTemplateNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    subject: string;
    htmlContent: string;
    textContent?: string;
    variables: string[];
    createdBy: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Find All Email Campaigns Request
 * Pattern: crm.email_marketing.campaigns.findAll
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class FindAllEmailCampaignsNatsRequest {
    tenantId: string;
    status?: string;
    createdFrom?: string;
    createdTo?: string;
    page?: number;
    limit?: number;
}
/**
 * Email Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export declare class EmailCampaignsListResponseDto {
    campaigns: EmailCampaignNatsResponse[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Find All Campaigns Response
 */
export type FindAllEmailCampaignsNatsResponse = NatsResponse<EmailCampaignsListResponseDto>;
/**
 * Create Campaign Response
 */
export type CreateEmailCampaignNatsResponse = NatsResponse<EmailCampaignNatsResponse>;
/**
 * Find One Campaign Request
 * Pattern: crm.email_marketing.campaigns.findOne
 */
export interface FindOneEmailCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Find One Campaign Response
 */
export type FindOneEmailCampaignNatsResponse = NatsResponse<EmailCampaignNatsResponse>;
/**
 * Update Campaign Response
 */
export type UpdateEmailCampaignNatsResponse = NatsResponse<EmailCampaignNatsResponse>;
/**
 * Delete Campaign Request
 * Pattern: crm.email_marketing.campaigns.delete
 */
export interface DeleteEmailCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Delete Campaign Response
 */
export type DeleteEmailCampaignNatsResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * Find All Templates Request
 * Pattern: crm.email_marketing.templates.findAll
 */
export interface FindAllEmailTemplatesNatsRequest {
    tenantId: string;
    page?: number;
    limit?: number;
}
/**
 * Find All Templates Response
 */
export type FindAllEmailTemplatesNatsResponse = NatsResponse<{
    data: EmailTemplateNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Create Template Request
 * Pattern: crm.email_marketing.templates.create
 */
export interface CreateEmailTemplateNatsRequest {
    tenantId: string;
    userId: string;
    name: string;
    subject: string;
    htmlContent: string;
    textContent?: string;
    variables?: string[];
}
/**
 * Create Template Response
 */
export type CreateEmailTemplateNatsResponse = NatsResponse<EmailTemplateNatsResponse>;
/**
 * Send Single Email Request
 * Pattern: crm.email_marketing.send.single
 */
export interface SendSingleEmailNatsRequest {
    tenantId: string;
    recipientEmail: string;
    templateId: string;
    subject: string;
    variables?: Record<string, any>;
    metadata?: Record<string, any>;
}
/**
 * Send Single Email Response
 */
export type SendSingleEmailNatsResponse = NatsResponse<{
    messageId: string;
    status: string;
    message: string;
}>;
/**
 * Send Campaign Email Request
 * Pattern: crm.email_marketing.send.campaign
 */
export interface SendCampaignEmailNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Send Campaign Email Response
 */
export type SendCampaignEmailNatsResponse = NatsResponse<{
    campaignId: string;
    totalRecipients: number;
    sentCount: number;
    failedCount: number;
    status: string;
}>;
/**
 * Email Analytics Response
 */
export interface EmailAnalyticsNatsResponse {
    campaignId?: string;
    campaignName?: string;
    totalSent: number;
    totalOpens: number;
    totalClicks: number;
    totalBounces: number;
    openRate: number;
    clickRate: number;
    bounceRate: number;
    conversionRate?: number;
    roi?: number;
}
/**
 * Analytics Request
 * Pattern: crm.email_marketing.analytics
 */
export interface GetEmailAnalyticsNatsRequest {
    tenantId: string;
    campaignId?: string;
    period?: string;
}
/**
 * Analytics Response
 */
export type GetEmailAnalyticsNatsResponse = NatsResponse<EmailAnalyticsNatsResponse | EmailAnalyticsNatsResponse[]>;
//# sourceMappingURL=email-marketing.nats.d.ts.map