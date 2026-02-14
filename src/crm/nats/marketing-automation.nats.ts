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
 * Marketing Automation Response
 */
export class MarketingAutomationNatsResponse {
  @ApiProperty({ description: 'Automation ID' })
  id!: string;

  @ApiProperty({ description: 'Tenant ID' })
  tenantId!: string;

  @ApiProperty({ description: 'Automation name' })
  name!: string;

  @ApiPropertyOptional({ description: 'Automation description' })
  description?: string;

  @ApiProperty({ enum: AutomationStatus, description: 'Automation status' })
  status!: AutomationStatus;

  @ApiProperty({ description: 'Trigger configuration' })
  trigger!: {
    type: string;
    condition: Record<string, any>;
  };

  @ApiProperty({ description: 'Automation actions', type: 'array' })
  actions!: Array<{
    type: ActionType;
    config: Record<string, any>;
    delay?: number;
  }>;

  @ApiPropertyOptional({ description: 'Target customer segments', type: [String] })
  targetSegments?: string[];

  @ApiProperty({ description: 'Total execution count' })
  totalExecutions!: number;

  @ApiProperty({ description: 'Successful execution count' })
  successfulExecutions!: number;

  @ApiProperty({ description: 'Failed execution count' })
  failedExecutions!: number;

  @ApiProperty({ description: 'User ID who created automation' })
  createdBy!: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt!: string | Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: string | Date;
}

/**
 * Find All Automations Request
 * Pattern: crm.marketing.automation.findAll
 */
export interface FindAllAutomationsNatsRequest {
  tenantId: string;
  status?: AutomationStatus;
  page?: number;
  limit?: number;
}

/**
 * Find All Automations Response
 */
export type FindAllAutomationsNatsResponse = NatsResponse<{
  data: MarketingAutomationNatsResponse[];
  total: number;
  page: number;
  limit: number;
}>;

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
