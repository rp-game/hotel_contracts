/**
 * Checkout Automation Settings
 * Controls automatic task creation after guest checkout
 */
export declare class CheckoutAutomationSettingsDto {
    enabled: boolean;
    createTaskAfterCheckout: boolean;
    defaultTaskType: string;
    defaultPriority: string;
    estimatedDuration: number;
    assignmentStrategy: 'auto' | 'manual' | 'round-robin';
}
/**
 * Check-in Automation Settings
 * Controls room inspection requirements before guest check-in
 */
export declare class CheckinAutomationSettingsDto {
    enabled: boolean;
    requireInspectionBeforeCheckin: boolean;
    autoCreateInspectionTask: boolean;
    inspectionDuration: number;
}
/**
 * Auto Assignment Settings
 * Controls automatic task assignment to staff
 */
export declare class AutoAssignmentSettingsDto {
    enabled: boolean;
    assignmentStrategy: 'best-match' | 'round-robin' | 'least-busy';
    maxTasksPerStaff: number;
    assignmentInterval: number;
    considerSkills: boolean;
    considerWorkload: boolean;
}
/**
 * Overdue Monitoring Settings
 * Controls monitoring and escalation of overdue tasks
 */
export declare class OverdueMonitoringSettingsDto {
    enabled: boolean;
    overdueThreshold: number;
    escalationEnabled: boolean;
    notificationEmails: string[];
    checkInterval: number;
}
/**
 * Automation Last Run Times
 * Tracks when each automation type last ran
 */
export declare class AutomationLastRunTimesDto {
    autoAssignment?: Date;
    taskCreation?: Date;
    overdueProcessing?: Date;
}
/**
 * Automation Settings DTO
 * Unified DTO for both NATS messages and REST responses
 * Ensures consistency between housekeeping-service and api-gateway
 */
export declare class AutomationSettingsDto {
    id: string;
    tenantId: string;
    hotelId: string;
    checkoutAutomation: CheckoutAutomationSettingsDto;
    checkinAutomation: CheckinAutomationSettingsDto;
    autoAssignment: AutoAssignmentSettingsDto;
    overdueMonitoring: OverdueMonitoringSettingsDto;
    lastRunTimes: AutomationLastRunTimesDto;
    automationEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=automation-settings.dto.d.ts.map