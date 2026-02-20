/**
 * Housekeeping REST API DTOs
 *
 * Exports shared DTOs that are used by:
 * - NATS contracts (type definitions)
 * - REST API Gateway endpoints (with @ApiProperty decorators)
 */
export { AutomationStatusDto, ActiveRulesDto, AutomationStatsDto, LastRunTimesDto, } from './automation.rest';
export { CheckoutAutomationSettingsDto, CheckinAutomationSettingsDto, AutoAssignmentSettingsDto, OverdueMonitoringSettingsDto, AutomationLastRunTimesDto, AutomationSettingsDto, } from './automation-settings.dto';
export { TimerReportSummaryDto, TimerReportStaffStatsDto, TimerReportTaskDto, TimerReportTimerItemDto, TimerReportDataDto, } from './timers.rest';
export { CreateQualityStandardDto, UpdateQualityStandardDto, GetAllQualityStandardsQueryDto, GetQualityStandardsStatisticsQueryDto, } from './quality-standards.rest';
export * from '../nats';
//# sourceMappingURL=index.d.ts.map