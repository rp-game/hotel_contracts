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
/**
 * Automation Status Enum
 */
export declare enum AutomationStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    ARCHIVED = "ARCHIVED",
    COMPLETED = "COMPLETED"
}
/**
 * Automation Action Type
 */
export declare enum ActionType {
    SEND_EMAIL = "SEND_EMAIL",
    SEND_SMS = "SEND_SMS",
    SEND_PUSH = "SEND_PUSH",
    APPLY_CAMPAIGN = "APPLY_CAMPAIGN",
    UPDATE_SEGMENT = "UPDATE_SEGMENT",
    TRIGGER_WORKFLOW = "TRIGGER_WORKFLOW"
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
export declare class MarketingAutomationNatsResponse {
    id: string;
    tenantId: string;
    name: string;
    description?: string;
    ruleType: string;
    status: string;
    isActive: boolean;
    triggerEvent: Record<string, any>;
    triggerConditions?: Record<string, any>;
    actionType: string;
    actionConfig: Record<string, any>;
    delayMinutes: number;
    scheduleConfig?: Record<string, any>;
    targetSegmentation?: Record<string, any>;
    maxExecutionsPerCustomer?: number;
    cooldownHours?: number;
    activeFrom?: string;
    activeTo?: string;
    totalTriggers: number;
    totalExecutions: number;
    successfulExecutions: number;
    failedExecutions: number;
    lastExecutedAt?: string;
    metadata?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    updatedBy?: string;
}
/**
 * Find All Automation Rules Request
 * Pattern: crm.marketing.automation.findAll
 *
 * @standardized 2026-02-15
 */
export declare class FindAllAutomationRulesNatsRequest {
    tenantId: string;
    status?: string;
    ruleType?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
/**
 * Automation Rules List Response DTO
 *
 * @standardized 2026-02-15
 */
export declare class AutomationRulesListResponseDto {
    rules: MarketingAutomationNatsResponse[];
    total: number;
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
export type DeleteAutomationNatsResponse = NatsResponse<{
    success: boolean;
}>;
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
export type ActivateAutomationNatsResponse = NatsResponse<{
    success: boolean;
}>;
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
export type DeactivateAutomationNatsResponse = NatsResponse<{
    success: boolean;
}>;
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
export type GetAutomationAnalyticsNatsResponse = NatsResponse<AutomationAnalyticsNatsResponse | AutomationAnalyticsNatsResponse[]>;
//# sourceMappingURL=marketing-automation.nats.d.ts.map