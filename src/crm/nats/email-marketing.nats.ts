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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Campaign Status Enum
 */
export enum EmailCampaignStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  SENDING = 'SENDING',
  SENT = 'SENT',
  PAUSED = 'PAUSED',
  CANCELLED = 'CANCELLED',
}

/**
 * Create Email Campaign DTO (used for both requests)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class CreateEmailCampaignDto {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Campaign name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Campaign description' })
  description?: string;

  @ApiProperty({ description: 'Email subject' })
  subject!: string;

  @ApiProperty({ description: 'Email content' })
  content!: string;

  @ApiPropertyOptional({ description: 'Template ID' })
  templateId?: string;

  @ApiPropertyOptional({ description: 'Campaign type', example: 'promotional' })
  type?: string;

  @ApiPropertyOptional({ description: 'Target segment ID' })
  targetSegmentId?: string;

  @ApiPropertyOptional({ description: 'Scheduled send time (ISO string)' })
  scheduledAt?: string;

  @ApiPropertyOptional({ description: 'Send immediately flag' })
  sendImmediately?: boolean;

  @ApiPropertyOptional({ description: 'Additional metadata' })
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
export class EmailCampaignStatsDto {
  @ApiProperty({ description: 'Total recipients count' })
  totalRecipients!: number;

  @ApiProperty({ description: 'Successfully delivered count' })
  delivered!: number;

  @ApiProperty({ description: 'Email opens count' })
  opened!: number;

  @ApiProperty({ description: 'Email clicks count' })
  clicked!: number;

  @ApiProperty({ description: 'Unsubscribe count' })
  unsubscribed!: number;

  @ApiProperty({ description: 'Bounce count' })
  bounced!: number;

  @ApiProperty({
    description: 'Open rate as decimal string for precision',
    example: '23.45',
    type: 'string'
  })
  openRate!: string;

  @ApiProperty({
    description: 'Click rate as decimal string for precision',
    example: '5.67',
    type: 'string'
  })
  clickRate!: string;

  @ApiProperty({
    description: 'Unsubscribe rate as decimal string for precision',
    example: '0.12',
    type: 'string'
  })
  unsubscribeRate!: string;

  @ApiProperty({
    description: 'Bounce rate as decimal string for precision',
    example: '1.23',
    type: 'string'
  })
  bounceRate!: string;
}

/**
 * Email Campaign Response (matches NATS handler real structure)
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches NATS handler real code)
 */
export class EmailCampaignNatsResponse {
  @ApiProperty({ description: 'Campaign ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Campaign name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Campaign description' })
  description?: string;

  @ApiProperty({ description: 'Email subject' })
  subject!: string;

  @ApiProperty({ description: 'Email content' })
  content!: string;

  @ApiPropertyOptional({ description: 'Email template ID reference' })
  templateId?: string;

  @ApiProperty({ description: 'Campaign type', example: 'promotional' })
  type!: string;

  @ApiProperty({ description: 'Campaign status', example: 'draft' })
  status!: string;

  @ApiPropertyOptional({ description: 'Target segment ID reference' })
  targetSegmentId?: string;

  @ApiPropertyOptional({ description: 'Scheduled send time (ISO string)' })
  scheduledAt?: string;

  @ApiPropertyOptional({ description: 'Actual sent time (ISO string)' })
  sentAt?: string;

  @ApiPropertyOptional({ description: 'Campaign statistics', type: EmailCampaignStatsDto })
  stats?: EmailCampaignStatsDto;

  @ApiProperty({ description: 'Creation timestamp (ISO string)' })
  createdAt!: string;

  @ApiProperty({ description: 'Last update timestamp (ISO string)' })
  updatedAt!: string;

  @ApiPropertyOptional({ description: 'Created by user ID' })
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
export class FindAllEmailCampaignsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter from date (ISO string)' })
  createdFrom?: string;

  @ApiPropertyOptional({ description: 'Filter to date (ISO string)' })
  createdTo?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;
}

/**
 * Email Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class EmailCampaignsListResponseDto {
  @ApiProperty({ description: 'List of email campaigns', type: [EmailCampaignNatsResponse] })
  campaigns!: EmailCampaignNatsResponse[];

  @ApiProperty({ description: 'Total count' })
  total!: number;

  @ApiProperty({ description: 'Current page' })
  page!: number;

  @ApiProperty({ description: 'Items per page' })
  limit!: number;
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
export type DeleteEmailCampaignNatsResponse = NatsResponse<{ success: boolean }>;

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
export type GetEmailAnalyticsNatsResponse = NatsResponse<
  EmailAnalyticsNatsResponse | EmailAnalyticsNatsResponse[]
>;
