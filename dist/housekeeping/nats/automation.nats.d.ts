/**
 * Housekeeping Automation NATS Contracts
 *
 * Patterns:
 * - housekeeping.automation.events.findAll
 *
 * Handler: housekeeping-service (AutomationController)
 * Called by: api-gateway (HousekeepingService)
 */
import { NatsResponse } from '../../common';
import { LastRunTimesDto, ActiveRulesDto, AutomationStatsDto, AutomationStatusDto as AutomationStatusDataDto } from '../rest/automation.rest';
/**
 * Automation Event Item
 */
export interface AutomationEventItem {
    id: string;
    eventType: string;
    description: string;
    status: string;
    timestamp: string;
    tenantId: string;
    hotelId: string;
    metadata?: any;
    ruleKey: string;
}
/**
 * Paginated Automation Events Response
 */
export interface AutomationEventsData {
    data: AutomationEventItem[];
    total: number;
    page: number;
    limit: number;
}
/**
 * Get Automation Events Request
 * Pattern: housekeeping.automation.events.findAll
 *
 * Retrieve automation events for a hotel with optional filtering.
 */
export interface GetAutomationEventsNatsRequest {
    tenantId: string;
    hotelId: string;
    limit?: number;
    page?: number;
    eventType?: string;
    status?: string;
}
export type GetAutomationEventsNatsResponse = NatsResponse<AutomationEventsData>;
/**
 * Automation Status Data
 * Re-exported from REST contracts for consistency
 */
export { LastRunTimesDto, ActiveRulesDto, AutomationStatsDto, AutomationStatusDataDto };
export type LastRunTimes = LastRunTimesDto;
export type ActiveRules = ActiveRulesDto;
export type AutomationStats = AutomationStatsDto;
export type AutomationStatusData = AutomationStatusDataDto;
/**
 * Get Automation Status Request
 * Pattern: housekeeping.automation.status
 */
export interface AutomationStatusPayload {
    tenantId: string;
    hotelId: string;
}
/**
 * Trigger Auto Assignment Request
 * Pattern: housekeeping.automation.trigger-assignment
 */
export interface TriggerAutoAssignmentPayload {
    tenantId: string;
    hotelId: string;
}
export interface OperationResult {
    success: boolean;
    message: string;
    data?: unknown;
}
/**
 * Auto Schedule Tasks Request
 * Pattern: housekeeping.automation.schedule
 */
export interface AutoScheduleTasksPayload {
    tenantId: string;
    hotelId: string;
    date: string;
}
/**
 * Auto Schedule Task Assignment
 * Shared between NATS contracts and REST API
 */
export declare class TaskAssignmentDto {
    taskId: string;
    roomNumber: string;
    estimatedTime: number;
    taskType: string;
    priority: string;
}
/**
 * Staff Assignment in Auto Schedule
 * Shared between NATS contracts and REST API
 */
export declare class StaffAssignmentDto {
    staffId: string;
    staffName: string;
    tasks: TaskAssignmentDto[];
    totalTime: number;
    workload: number;
}
/**
 * Optimized Schedule Details
 * Shared between NATS contracts and REST API
 */
export declare class OptimizedScheduleDto {
    totalTasks: number;
    assignedTasks: number;
    unassignedTasks: number;
    staffUtilization: number;
    estimatedCompletionTime: string;
    assignments: StaffAssignmentDto[];
    recommendations: string[];
}
/**
 * Auto Schedule Tasks Response Data
 * Shared between NATS contracts and REST API
 */
export declare class AutoScheduleTasksDataDto {
    success: boolean;
    schedule: OptimizedScheduleDto;
    scheduledAt: string;
}
export type AutomationStatusNatsResponse = NatsResponse<AutomationStatusDataDto>;
export type TriggerAutoAssignmentNatsResponse = NatsResponse<OperationResult>;
export type AutoScheduleTasksNatsResponse = NatsResponse<AutoScheduleTasksDataDto>;
/**
 * Update Automation Settings Request
 * Pattern: housekeeping.automation.settings.update
 */
export interface UpdateAutomationSettingsPayload {
    tenantId: string;
    hotelId: string;
    settings: {
        enabled: boolean;
        rules: {
            autoAssignment: boolean;
            autoTaskCreation: boolean;
            qualityChecks: boolean;
            notifications: boolean;
        };
        thresholds: {
            taskTimeout: number;
            qualityMinScore: number;
            maxTasksPerStaff: number;
        };
    };
}
export type UpdateAutomationSettingsNatsResponse = NatsResponse<OperationResult>;
/**
 * Toggle Automation Request
 * Pattern: housekeeping.automation.settings.toggle
 */
export interface ToggleAutomationPayload {
    tenantId: string;
    hotelId: string;
    enabled: boolean;
}
export interface ToggleAutomationResult {
    success: boolean;
    enabled: boolean;
    data?: unknown;
}
export type ToggleAutomationNatsResponse = NatsResponse<ToggleAutomationResult>;
/**
 * Toggle Automation Rule Request
 * Pattern: housekeeping.automation.rule.toggle
 */
export interface ToggleAutomationRulePayload {
    tenantId: string;
    hotelId: string;
    ruleKey: string;
    enabled: boolean;
}
export interface ToggleAutomationRuleResult {
    success: boolean;
    ruleKey: string;
    enabled: boolean;
    data?: unknown;
}
export type ToggleAutomationRuleNatsResponse = NatsResponse<ToggleAutomationRuleResult>;
/**
 * Get Automation Statistics Request
 * Pattern: housekeeping.automation.statistics
 */
export interface GetAutomationStatisticsPayload {
    tenantId: string;
    hotelId: string;
    startDate?: string;
    endDate?: string;
}
export interface AutomationStatisticsData {
    totalAutomations: number;
    successRate: number;
    averageProcessingTime: number;
    tasksByType: Record<string, number>;
    errorCount: number;
}
export type GetAutomationStatisticsNatsResponse = NatsResponse<AutomationStatisticsData>;
//# sourceMappingURL=automation.nats.d.ts.map