/**
 * SMS Marketing NATS Contracts
 *
 * Patterns:
 * - crm.sms_marketing.campaigns.findAll
 * - crm.sms_marketing.campaigns.create
 * - crm.sms_marketing.campaigns.findOne
 * - crm.sms_marketing.campaigns.update
 * - crm.sms_marketing.campaigns.delete
 * - crm.sms_marketing.templates.findAll
 * - crm.sms_marketing.templates.create
 * - crm.sms_marketing.send.single
 * - crm.sms_marketing.send.campaign
 * - crm.sms_marketing.analytics
 *
 * Handler: crm-service (SmsMarketingController)
 * Called by: api-gateway (CrmController)
 */
import { NatsResponse } from '../../common';
/**
 * SMS Campaign Status Enum
 */
export declare enum SmsCampaignStatus {
    DRAFT = "DRAFT",
    SCHEDULED = "SCHEDULED",
    SENDING = "SENDING",
    SENT = "SENT",
    PAUSED = "PAUSED",
    CANCELLED = "CANCELLED"
}
/**
 * Create SMS Campaign Request
 * Pattern: crm.sms_marketing.campaigns.create
 */
export interface CreateSmsCampaignNatsRequest {
    tenantId: string;
    userId: string;
    name: string;
    description?: string;
    templateId: string;
    content: string;
    fromPhoneNumber?: string;
    targetSegments: string[];
    scheduledAt?: string;
    sendImmediately?: boolean;
    metadata?: Record<string, any>;
}
/**
 * Update SMS Campaign Request
 * Pattern: crm.sms_marketing.campaigns.update
 */
export interface UpdateSmsCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
    userId: string;
    updateDto: Partial<CreateSmsCampaignNatsRequest>;
}
/**
 * SMS Campaign Response
 */
export declare class SmsCampaignNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    description?: string;
    templateId: string;
    content: string;
    fromPhoneNumber?: string;
    status: SmsCampaignStatus;
    targetSegments: string[];
    targetAudience: number;
    sentCount: number;
    deliveredCount: number;
    failedCount: number;
    bounceCount: number;
    scheduledAt?: string | Date;
    sentAt?: string | Date;
    createdBy: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * SMS Template Response
 */
export interface SmsTemplateNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    content: string;
    variables: string[];
    characterCount: number;
    createdBy: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
/**
 * Find All Campaigns Request
 * Pattern: crm.sms_marketing.campaigns.findAll
 */
export interface FindAllSmsCampaignsNatsRequest {
    tenantId: string;
    status?: SmsCampaignStatus;
    page?: number;
    limit?: number;
}
/**
 * Find All Campaigns Response
 */
export type FindAllSmsCampaignsNatsResponse = NatsResponse<{
    data: SmsCampaignNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Create Campaign Response
 */
export type CreateSmsCampaignNatsResponse = NatsResponse<SmsCampaignNatsResponse>;
/**
 * Find One Campaign Request
 * Pattern: crm.sms_marketing.campaigns.findOne
 */
export interface FindOneSmsCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Find One Campaign Response
 */
export type FindOneSmsCampaignNatsResponse = NatsResponse<SmsCampaignNatsResponse>;
/**
 * Update Campaign Response
 */
export type UpdateSmsCampaignNatsResponse = NatsResponse<SmsCampaignNatsResponse>;
/**
 * Delete Campaign Request
 * Pattern: crm.sms_marketing.campaigns.delete
 */
export interface DeleteSmsCampaignNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Delete Campaign Response
 */
export type DeleteSmsCampaignNatsResponse = NatsResponse<{
    success: boolean;
}>;
/**
 * Find All Templates Request
 * Pattern: crm.sms_marketing.templates.findAll
 */
export interface FindAllSmsTemplatesNatsRequest {
    tenantId: string;
    page?: number;
    limit?: number;
}
/**
 * Find All Templates Response
 */
export type FindAllSmsTemplatesNatsResponse = NatsResponse<{
    data: SmsTemplateNatsResponse[];
    total: number;
    page: number;
    limit: number;
}>;
/**
 * Create Template Request
 * Pattern: crm.sms_marketing.templates.create
 */
export interface CreateSmsTemplateNatsRequest {
    tenantId: string;
    userId: string;
    name: string;
    content: string;
    variables?: string[];
}
/**
 * Create Template Response
 */
export type CreateSmsTemplateNatsResponse = NatsResponse<SmsTemplateNatsResponse>;
/**
 * Send Single SMS Request
 * Pattern: crm.sms_marketing.send.single
 */
export interface SendSingleSmsNatsRequest {
    tenantId: string;
    recipientPhone: string;
    templateId: string;
    content: string;
    variables?: Record<string, any>;
    metadata?: Record<string, any>;
}
/**
 * Send Single SMS Response
 */
export type SendSingleSmsNatsResponse = NatsResponse<{
    messageId: string;
    status: string;
    message: string;
}>;
/**
 * Send Campaign SMS Request
 * Pattern: crm.sms_marketing.send.campaign
 */
export interface SendCampaignSmsNatsRequest {
    tenantId: string;
    campaignId: string;
}
/**
 * Send Campaign SMS Response
 */
export type SendCampaignSmsNatsResponse = NatsResponse<{
    campaignId: string;
    totalRecipients: number;
    sentCount: number;
    failedCount: number;
    status: string;
}>;
/**
 * SMS Analytics Response
 */
export interface SmsAnalyticsNatsResponse {
    campaignId?: string;
    campaignName?: string;
    totalSent: number;
    totalDelivered: number;
    totalFailed: number;
    totalBounced: number;
    deliveryRate: number;
    failureRate: number;
    conversionRate?: number;
    roi?: number;
}
/**
 * Analytics Request
 * Pattern: crm.sms_marketing.analytics
 */
export interface GetSmsAnalyticsNatsRequest {
    tenantId: string;
    campaignId?: string;
    period?: string;
}
/**
 * Analytics Response
 */
export type GetSmsAnalyticsNatsResponse = NatsResponse<SmsAnalyticsNatsResponse | SmsAnalyticsNatsResponse[]>;
//# sourceMappingURL=sms-marketing.nats.d.ts.map