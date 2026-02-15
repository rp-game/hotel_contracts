/**
 * Marketing Stats NATS Contracts
 *
 * Pattern: crm.marketing.stats
 * Handler: crm-service (AutomationController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';

/**
 * Marketing Stats Request
 * Pattern: crm.marketing.stats
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 */
export class GetMarketingStatsNatsRequest {
  @ApiProperty({ description: 'Tenant ID', example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsString()
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Start date for filtering (ISO string)', example: '2026-01-01' })
  @IsOptional()
  @IsString()
  startDate?: string;

  @ApiPropertyOptional({ description: 'End date for filtering (ISO string)', example: '2026-12-31' })
  @IsOptional()
  @IsString()
  endDate?: string;

  @ApiPropertyOptional({
    description: 'Filter by campaign type',
    enum: ['email', 'sms', 'all'],
    example: 'all'
  })
  @IsOptional()
  @IsEnum(['email', 'sms', 'all'])
  campaignType?: 'email' | 'sms' | 'all';

  @ApiPropertyOptional({ description: 'Include historical performance data', example: false })
  @IsOptional()
  @IsBoolean()
  includeHistorical?: boolean;

  @ApiPropertyOptional({ description: 'Include top performing campaigns', example: false })
  @IsOptional()
  @IsBoolean()
  includeTopCampaigns?: boolean;
}

/**
 * Marketing Performance by Month
 */
export class MarketingPerformanceMonthDto {
  @ApiProperty({ description: 'Month identifier', example: '2026-01' })
  month!: string;

  @ApiProperty({ description: 'Email campaigns in month', example: 15 })
  emailCampaigns!: number;

  @ApiProperty({ description: 'SMS campaigns in month', example: 8 })
  smsCampaigns!: number;

  @ApiProperty({ description: 'Total revenue in month', example: '125000.50' })
  totalRevenue!: string;

  @ApiProperty({ description: 'Average open rate in month', example: '24.5' })
  avgOpenRate!: string;

  @ApiProperty({ description: 'Customers reached in month', example: 5420 })
  customersReached!: number;
}

/**
 * Top Performing Campaign
 */
export class TopPerformingCampaignDto {
  @ApiProperty({ description: 'Campaign ID' })
  id!: string;

  @ApiProperty({ description: 'Campaign name' })
  name!: string;

  @ApiProperty({ description: 'Campaign type', example: 'email' })
  type!: string;

  @ApiProperty({ description: 'Open rate percentage', example: '45.2' })
  openRate!: string;

  @ApiProperty({ description: 'Click rate percentage', example: '12.8' })
  clickRate!: string;

  @ApiProperty({ description: 'Revenue generated', example: '25000.00' })
  revenueGenerated!: string;

  @ApiProperty({ description: 'Number of recipients', example: 3500 })
  recipients!: number;

  @ApiProperty({ description: 'Sent timestamp', example: '2026-02-01T10:00:00Z' })
  sentAt!: string;
}

/**
 * Marketing Stats Response
 *
 * UNIFIED CONTRACT - Used by both NATS and REST layers
 * @standardized 2026-02-15
 * @contract_accuracy PERFECT (Matches both NATS handler and API Gateway)
 */
export class MarketingStatsNatsResponse {
  @ApiProperty({ description: 'Total email campaigns sent', example: 125 })
  totalEmailCampaigns!: number;

  @ApiProperty({ description: 'Total SMS campaigns sent', example: 87 })
  totalSmsCampaigns!: number;

  @ApiProperty({ description: 'Total automation rules configured', example: 45 })
  totalAutomationRules!: number;

  @ApiProperty({ description: 'Number of active automation rules', example: 32 })
  activeAutomationRules!: number;

  @ApiProperty({
    description: 'Average email open rate (decimal string for precision)',
    example: '23.45',
    type: 'string',
    pattern: '^\\d+(\\.\\d{1,2})?$'
  })
  avgEmailOpenRate!: string;

  @ApiProperty({
    description: 'Average email click rate (decimal string for precision)',
    example: '8.75',
    type: 'string',
    pattern: '^\\d+(\\.\\d{1,2})?$'
  })
  avgEmailClickRate!: string;

  @ApiProperty({
    description: 'Average SMS delivery rate (decimal string for precision)',
    example: '97.80',
    type: 'string',
    pattern: '^\\d+(\\.\\d{1,2})?$'
  })
  avgSmsDeliveryRate!: string;

  @ApiProperty({
    description: 'Total revenue generated from marketing campaigns (decimal string for precision)',
    example: '1250000.75',
    type: 'string',
    pattern: '^\\d+(\\.\\d{1,2})?$'
  })
  totalRevenue!: string;

  @ApiProperty({ description: 'Total customers reached across all campaigns', example: 15420 })
  totalCustomersReached!: number;

  @ApiProperty({ description: 'Emails sent in current month', example: 2340 })
  emailsSentThisMonth!: number;

  @ApiProperty({ description: 'SMS sent in current month', example: 1250 })
  smseSentThisMonth!: number;

  @ApiPropertyOptional({
    description: 'Campaign performance breakdown by month',
    type: [MarketingPerformanceMonthDto]
  })
  performanceByMonth?: MarketingPerformanceMonthDto[];

  @ApiPropertyOptional({
    description: 'Top performing campaigns with metrics',
    type: [TopPerformingCampaignDto]
  })
  topPerformingCampaigns?: TopPerformingCampaignDto[];
}

/**
 * Get Marketing Stats Response (NATS)
 */
export type GetMarketingStatsNatsResponse = NatsResponse<MarketingStatsNatsResponse>;
