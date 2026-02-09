/**
 * Housekeeping REST API DTOs
 *
 * Exports shared DTOs that are used by:
 * - NATS contracts (type definitions)
 * - REST API Gateway endpoints (with @ApiProperty decorators)
 */

// Shared automation DTOs with @ApiProperty for Swagger documentation
export {
  AutomationStatusDto,
  ActiveRulesDto,
  AutomationStatsDto,
  LastRunTimesDto,
} from './automation.rest';

// Automation Settings DTOs (unified for NATS and REST)
export {
  CheckoutAutomationSettingsDto,
  CheckinAutomationSettingsDto,
  AutoAssignmentSettingsDto,
  OverdueMonitoringSettingsDto,
  AutomationLastRunTimesDto,
  AutomationSettingsDto,
} from './automation-settings.dto';

// Re-export NATS contracts for internal use
export * from '../nats';
