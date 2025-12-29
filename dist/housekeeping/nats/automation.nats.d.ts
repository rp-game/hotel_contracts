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
 */
export interface LastRunTimes {
    autoAssignment: string | null;
    taskCreation: string | null;
    overdueProcessing: string | null;
}
export interface ActiveRules {
    checkoutAutomation: boolean;
    checkinAutomation: boolean;
    autoAssignment: boolean;
    overdueMonitoring: boolean;
}
export interface AutomationStats {
    tasksAutoAssigned: number;
    tasksAutoCreated: number;
    overdueTasksProcessed: number;
    automationSuccessRate: number;
}
export interface AutomationStatusData {
    tenantId: string;
    hotelId: string;
    automationEnabled: boolean;
    lastRunTimes: LastRunTimes;
    activeRules: ActiveRules;
    stats: AutomationStats;
}
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
export type AutomationStatusNatsResponse = NatsResponse<AutomationStatusData>;
export type TriggerAutoAssignmentNatsResponse = NatsResponse<OperationResult>;
export type AutoScheduleTasksNatsResponse = NatsResponse<OperationResult>;
//# sourceMappingURL=automation.nats.d.ts.map