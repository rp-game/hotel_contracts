/**
 * Housekeeping Automation REST API DTOs
 *
 * Shared classes used by both:
 * - Contracts (for type definitions)
 * - API Gateway REST endpoints (with @ApiProperty decorators)
 *
 * These are imported and used directly by API Gateway
 * to ensure consistency between NATS and REST contracts
 */
/**
 * Last Run Times for Automation Processes
 * Shared between NATS contracts and REST API
 */
export declare class LastRunTimesDto {
    autoAssignment: string | null;
    taskCreation: string | null;
    overdueProcessing: string | null;
}
/**
 * Active Automation Rules
 * Shared between NATS contracts and REST API
 */
export declare class ActiveRulesDto {
    checkoutAutomation: boolean;
    checkinAutomation: boolean;
    autoAssignment: boolean;
    overdueMonitoring: boolean;
}
/**
 * Automation Statistics
 * Shared between NATS contracts and REST API
 */
export declare class AutomationStatsDto {
    tasksAutoAssigned: number;
    tasksAutoCreated: number;
    overdueTasksProcessed: number;
    automationSuccessRate?: number;
}
/**
 * Automation Status Response DTO
 * Shared between NATS contracts and REST API
 * Maps to AutomationStatusData in NATS contracts
 */
export declare class AutomationStatusDto {
    tenantId: string;
    hotelId: string;
    automationEnabled: boolean;
    lastRunTimes: LastRunTimesDto;
    activeRules: ActiveRulesDto;
    stats: AutomationStatsDto;
}
//# sourceMappingURL=automation.rest.d.ts.map