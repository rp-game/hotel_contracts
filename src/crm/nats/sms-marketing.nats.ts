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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

/**
 * Create SMS Campaign DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @matches_entity SmsCampaign (services/crm-service/src/marketing/sms/entities/sms-campaign.entity.ts)
 */
export class CreateSMSCampaignDto {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId!: string;

  @ApiProperty({ description: 'Campaign name' })
  @IsString()
  name!: string;

  @ApiProperty({ description: 'SMS template ID reference' })
  @IsString()
  templateId!: string;

  @ApiProperty({ description: 'Campaign type', enum: ['ONE_TIME', 'RECURRING', 'AUTOMATED'] })
  @IsString()
  campaignType!: string;

  @ApiPropertyOptional({ description: 'Recipient segmentation criteria' })
  @IsOptional()
  recipientSegmentation?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Personalization data for template variables' })
  @IsOptional()
  personalizationData?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Scheduled send time (ISO string)' })
  @IsOptional()
  @IsString()
  scheduledAt?: string;

  @ApiPropertyOptional({ description: 'Campaign notes' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  @IsOptional()
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
export class SmsCampaignNatsResponse {
  @ApiProperty({ description: 'Campaign ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Campaign name' })
  name!: string;

  @ApiProperty({ description: 'SMS template ID reference' })
  templateId!: string;

  @ApiProperty({ description: 'Campaign type', example: 'ONE_TIME' })
  campaignType!: string;

  @ApiProperty({ description: 'Campaign status', example: 'DRAFT' })
  status!: string;

  @ApiPropertyOptional({ description: 'SMS message (from template.content)' })
  message?: string;

  @ApiPropertyOptional({ description: 'Campaign description (from template.description)' })
  description?: string;

  @ApiPropertyOptional({ description: 'Template name (from template.name)' })
  templateName?: string;

  @ApiPropertyOptional({ description: 'Scheduled send time (ISO string)' })
  scheduledAt?: string;

  @ApiPropertyOptional({ description: 'Actual sent time (ISO string)' })
  sentAt?: string;

  @ApiProperty({ description: 'Total recipients count' })
  totalRecipients!: number;

  @ApiProperty({ description: 'Successfully sent count' })
  sentCount!: number;

  @ApiProperty({ description: 'Successfully delivered count' })
  deliveredCount!: number;

  @ApiProperty({ description: 'Failed delivery count' })
  failedCount!: number;

  @ApiProperty({ description: 'Opt-out count' })
  optOutCount!: number;

  @ApiProperty({ description: 'Delivery rate percentage', example: 98.5 })
  deliveryRate!: number;

  @ApiPropertyOptional({ description: 'Campaign notes' })
  notes?: string;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: Record<string, any>;

  @ApiProperty({ description: 'Creation timestamp (ISO string)' })
  createdAt!: string;

  @ApiProperty({ description: 'Last update timestamp (ISO string)' })
  updatedAt!: string;

  @ApiPropertyOptional({ description: 'Created by user ID' })
  createdBy?: string;

  @ApiPropertyOptional({ description: 'Updated by user ID' })
  updatedBy?: string;
}

/**
 * Find All SMS Campaigns Request
 * Pattern: crm.sms_marketing.campaigns.findAll
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class FindAllSmsCampaignsNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Filter from date (ISO string)' })
  @IsOptional()
  @IsString()
  createdFrom?: string;

  @ApiPropertyOptional({ description: 'Filter to date (ISO string)' })
  @IsOptional()
  @IsString()
  createdTo?: string;

  @ApiPropertyOptional({ description: 'Page number' })
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  @IsOptional()
  limit?: number;
}

/**
 * SMS Campaigns List Response DTO
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class SMSCampaignsListResponseDto {
  @ApiProperty({ description: 'List of SMS campaigns', type: [SmsCampaignNatsResponse] })
  campaigns!: SmsCampaignNatsResponse[];

  @ApiProperty({ description: 'Total count' })
  total!: number;

  @ApiProperty({ description: 'Current page' })
  page!: number;

  @ApiProperty({ description: 'Items per page' })
  limit!: number;
}

/**
 * Find All SMS Campaigns Response
 */
export type FindAllSmsCampaignsNatsResponse = NatsResponse<SMSCampaignsListResponseDto>;

/**
 * Create SMS Campaign Response
 */
export type CreateSmsCampaignNatsResponse = NatsResponse<SmsCampaignNatsResponse>;
