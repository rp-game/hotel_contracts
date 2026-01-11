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
 * Create Email Campaign Request
 * Pattern: crm.email_marketing.campaigns.create
 */
export interface CreateEmailCampaignNatsRequest {
    tenantId: string;
    userId: string;
    name: string;
    description?: string;
    templateId: string;
    subject: string;
    fromEmail: string;
    fromName?: string;
    targetSegments: string[];
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
    updateDto: Partial<CreateEmailCampaignNatsRequest>;
}
/**
 * Email Campaign Response
 */
export interface EmailCampaignNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    description?: string;
    templateId: string;
    subject: string;
    fromEmail: string;
    fromName?: string;
    status: EmailCampaignStatus;
    targetSegments: string[];
    targetAudience: number;
    sentCount: number;
    openCount: number;
    clickCount: number;
    bounceCount: number;
    scheduledAt?: string | Date;
    sentAt?: string | Date;
    createdBy: string;
    createdAt: string | Date;
    updatedAt: string | Date;
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
 * Find All Campaigns Request
 * Pattern: crm.email_marketing.campaigns.findAll
 */
export interface FindAllEmailCampaignsNatsRequest {
    tenantId: string;
    status?: EmailCampaignStatus;
    page?: number;
    limit?: number;
}
/**
 * Find All Campaigns Response
 */
export type FindAllEmailCampaignsNatsResponse = NatsResponse<{
    data: EmailCampaignNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
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