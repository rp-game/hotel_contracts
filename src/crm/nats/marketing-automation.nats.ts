/**
 * Marketing Automation NATS Contracts
 *
 * Patterns:
 * - crm.marketing.automation.findAll
 * - crm.marketing.automation.create
 * - crm.marketing.automation.findOne
 * - crm.marketing.automation.update
 * - crm.marketing.automation.delete
 * - crm.marketing.automation.activate
 * - crm.marketing.automation.deactivate
 * - crm.marketing.automation.trigger
 * - crm.marketing.automation.execute
 * - crm.marketing.automation.analytics
 *
 * Handler: crm-service (AutomationController)
 * Called by: api-gateway (CrmController)
 */

import { NatsResponse } from '../../common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Automation Status Enum
 */
export enum AutomationStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  ARCHIVED = 'ARCHIVED',
  COMPLETED = 'COMPLETED',
}

/**
 * Automation Action Type
 */
export enum ActionType {
  SEND_EMAIL = 'SEND_EMAIL',
  SEND_SMS = 'SEND_SMS',
  SEND_PUSH = 'SEND_PUSH',
  APPLY_CAMPAIGN = 'APPLY_CAMPAIGN',
  UPDATE_SEGMENT = 'UPDATE_SEGMENT',
  TRIGGER_WORKFLOW = 'TRIGGER_WORKFLOW',
}

/**
 * Create Automation Request
 * Pattern: crm.marketing.automation.create
 */
export interface CreateAutomationNatsRequest {
  tenantId: string;
  userId: string;
  name: string;
  description?: string;
  trigger: {
    type: string;
    condition: Record<string, any>;
  };
  actions: Array<{
    type: ActionType;
    config: Record<string, any>;
    delay?: number;
  }>;
  isActive?: boolean;
  targetSegments?: string[];
}

/**
 * Update Automation Request
 * Pattern: crm.marketing.automation.update
 */
export interface UpdateAutomationNatsRequest {
  tenantId: string;
  automationId: string;
  userId: string;
  updateDto: Partial<CreateAutomationNatsRequest>;
}

/**
 * Marketing Automation Response (matches AutomationRule entity)
 *
 * @matches_entity AutomationRule (services/crm-service/src/marketing/automation/entities/automation-rule.entity.ts)
 * @standardized 2026-02-15
 */
export class MarketingAutomationNatsResponse {
  @ApiProperty({ description: 'Automation rule ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Rule name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Rule description' })
  description?: string;

  @ApiProperty({ description: 'Rule type', example: 'WELCOME_SERIES' })
  ruleType!: string;

  @ApiProperty({ description: 'Rule status', example: 'ACTIVE' })
  status!: string;

  @ApiProperty({ description: 'Whether rule is active' })
  isActive!: boolean;

  @ApiProperty({ description: 'Trigger event configuration' })
  triggerEvent!: Record<string, any>;

  @ApiPropertyOptional({ description: 'Trigger conditions that must be met' })
  triggerConditions?: Record<string, any>;

  @ApiProperty({ description: 'Action type', example: 'SEND_EMAIL' })
  actionType!: string;

  @ApiProperty({ description: 'Action configuration' })
  actionConfig!: Record<string, any>;

  @ApiProperty({ description: 'Delay in minutes before executing action' })
  delayMinutes!: number;

  @ApiPropertyOptional({ description: 'Schedule configuration for recurring rules' })
  scheduleConfig?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Target customer segmentation criteria' })
  targetSegmentation?: Record<string, any>;

  @ApiPropertyOptional({ description: 'Maximum executions per customer' })
  maxExecutionsPerCustomer?: number;

  @ApiPropertyOptional({ description: 'Cooldown hours between executions' })
  cooldownHours?: number;

  @ApiPropertyOptional({ description: 'Rule active from timestamp (ISO string)' })
  activeFrom?: string;

  @ApiPropertyOptional({ description: 'Rule active to timestamp (ISO string)' })
  activeTo?: string;

  @ApiProperty({ description: 'Total trigger count' })
  totalTriggers!: number;

  @ApiProperty({ description: 'Total execution count' })
  totalExecutions!: number;

  @ApiProperty({ description: 'Successful execution count' })
  successfulExecutions!: number;

  @ApiProperty({ description: 'Failed execution count' })
  failedExecutions!: number;

  @ApiPropertyOptional({ description: 'Last executed timestamp (ISO string)' })
  lastExecutedAt?: string;

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
 * Find All Automation Rules Request
 * Pattern: crm.marketing.automation.findAll
 *
 * @standardized 2026-02-15
 */
export class FindAllAutomationRulesNatsRequest {
  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiPropertyOptional({ description: 'Filter by status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filter by rule type' })
  ruleType?: string;

  @ApiPropertyOptional({ description: 'Filter by active status' })
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Page number' })
  page?: number;

  @ApiPropertyOptional({ description: 'Items per page' })
  limit?: number;
}

/**
 * Automation Rules List Response DTO
 *
 * @standardized 2026-02-15
 */
export class AutomationRulesListResponseDto {
  @ApiProperty({ description: 'List of automation rules', type: [MarketingAutomationNatsResponse] })
  rules!: MarketingAutomationNatsResponse[];

  @ApiProperty({ description: 'Total count' })
  total!: number;
}

/**
 * Find All Automation Rules Response
 */
export type FindAllAutomationRulesNatsResponse = NatsResponse<AutomationRulesListResponseDto>;

/**
 * Create Automation Response
 */
export type CreateAutomationNatsResponse = NatsResponse<MarketingAutomationNatsResponse>;

/**
 * Find One Automation Request
 * Pattern: crm.marketing.automation.findOne
 */
export interface FindOneAutomationNatsRequest {
  tenantId: string;
  automationId: string;
}

/**
 * Find One Automation Response
 */
export type FindOneAutomationNatsResponse = NatsResponse<MarketingAutomationNatsResponse>;

/**
 * Update Automation Response
 */
export type UpdateAutomationNatsResponse = NatsResponse<MarketingAutomationNatsResponse>;

/**
 * Delete Automation Request
 * Pattern: crm.marketing.automation.delete
 */
export interface DeleteAutomationNatsRequest {
  tenantId: string;
  automationId: string;
}

/**
 * Delete Automation Response
 */
export type DeleteAutomationNatsResponse = NatsResponse<{ success: boolean }>;

/**
 * Activate Automation Request
 * Pattern: crm.marketing.automation.activate
 */
export interface ActivateAutomationNatsRequest {
  tenantId: string;
  automationId: string;
}

/**
 * Activate Automation Response
 */
export type ActivateAutomationNatsResponse = NatsResponse<{ success: boolean }>;

/**
 * Deactivate Automation Request
 * Pattern: crm.marketing.automation.deactivate
 */
export interface DeactivateAutomationNatsRequest {
  tenantId: string;
  automationId: string;
}

/**
 * Deactivate Automation Response
 */
export type DeactivateAutomationNatsResponse = NatsResponse<{ success: boolean }>;

/**
 * Trigger Automation Request
 * Pattern: crm.marketing.automation.trigger
 */
export interface TriggerAutomationNatsRequest {
  tenantId: string;
  automationId: string;
  payload: Record<string, any>;
}

/**
 * Trigger Automation Response
 */
export type TriggerAutomationNatsResponse = NatsResponse<{
  executionId: string;
  status: string;
  message: string;
}>;

/**
 * Execute Automation Request
 * Pattern: crm.marketing.automation.execute
 */
export interface ExecuteAutomationNatsRequest {
  tenantId: string;
  automationId: string;
  targetAudience?: string[];
}

/**
 * Execute Automation Response
 */
export type ExecuteAutomationNatsResponse = NatsResponse<{
  executionId: string;
  status: string;
  audienceCount: number;
  message: string;
}>;

/**
 * Automation Analytics Response
 */
export interface AutomationAnalyticsNatsResponse {
  automationId: string;
  name: string;
  totalExecutions: number;
  successfulExecutions: number;
  failedExecutions: number;
  successRate: number;
  averageResponseTime: number;
  conversionRate?: number;
  roi?: number;
}

/**
 * Analytics Request
 * Pattern: crm.marketing.automation.analytics
 */
export interface GetAutomationAnalyticsNatsRequest {
  tenantId: string;
  automationId?: string;
  period?: string;
}

/**
 * Analytics Response
 */
export type GetAutomationAnalyticsNatsResponse = NatsResponse<
  AutomationAnalyticsNatsResponse | AutomationAnalyticsNatsResponse[]
>;
