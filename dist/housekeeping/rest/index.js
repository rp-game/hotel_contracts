"use strict";
/**
 * Housekeeping REST API DTOs
 *
 * Exports shared DTOs that are used by:
 * - NATS contracts (type definitions)
 * - REST API Gateway endpoints (with @ApiProperty decorators)
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQualityStandardsStatisticsQueryDto = exports.GetAllQualityStandardsQueryDto = exports.TimerReportDataDto = exports.TimerReportTimerItemDto = exports.TimerReportTaskDto = exports.TimerReportStaffStatsDto = exports.TimerReportSummaryDto = exports.AutomationSettingsDto = exports.AutomationLastRunTimesDto = exports.OverdueMonitoringSettingsDto = exports.AutoAssignmentSettingsDto = exports.CheckinAutomationSettingsDto = exports.CheckoutAutomationSettingsDto = exports.LastRunTimesDto = exports.AutomationStatsDto = exports.ActiveRulesDto = exports.AutomationStatusDto = void 0;
// Shared automation DTOs with @ApiProperty for Swagger documentation
var automation_rest_1 = require("./automation.rest");
Object.defineProperty(exports, "AutomationStatusDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatusDto; } });
Object.defineProperty(exports, "ActiveRulesDto", { enumerable: true, get: function () { return automation_rest_1.ActiveRulesDto; } });
Object.defineProperty(exports, "AutomationStatsDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatsDto; } });
Object.defineProperty(exports, "LastRunTimesDto", { enumerable: true, get: function () { return automation_rest_1.LastRunTimesDto; } });
// Automation Settings DTOs (unified for NATS and REST)
var automation_settings_dto_1 = require("./automation-settings.dto");
Object.defineProperty(exports, "CheckoutAutomationSettingsDto", { enumerable: true, get: function () { return automation_settings_dto_1.CheckoutAutomationSettingsDto; } });
Object.defineProperty(exports, "CheckinAutomationSettingsDto", { enumerable: true, get: function () { return automation_settings_dto_1.CheckinAutomationSettingsDto; } });
Object.defineProperty(exports, "AutoAssignmentSettingsDto", { enumerable: true, get: function () { return automation_settings_dto_1.AutoAssignmentSettingsDto; } });
Object.defineProperty(exports, "OverdueMonitoringSettingsDto", { enumerable: true, get: function () { return automation_settings_dto_1.OverdueMonitoringSettingsDto; } });
Object.defineProperty(exports, "AutomationLastRunTimesDto", { enumerable: true, get: function () { return automation_settings_dto_1.AutomationLastRunTimesDto; } });
Object.defineProperty(exports, "AutomationSettingsDto", { enumerable: true, get: function () { return automation_settings_dto_1.AutomationSettingsDto; } });
// Timer Report DTOs (unified for NATS and REST)
var timers_rest_1 = require("./timers.rest");
Object.defineProperty(exports, "TimerReportSummaryDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportSummaryDto; } });
Object.defineProperty(exports, "TimerReportStaffStatsDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportStaffStatsDto; } });
Object.defineProperty(exports, "TimerReportTaskDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportTaskDto; } });
Object.defineProperty(exports, "TimerReportTimerItemDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportTimerItemDto; } });
Object.defineProperty(exports, "TimerReportDataDto", { enumerable: true, get: function () { return timers_rest_1.TimerReportDataDto; } });
// Quality Standards REST Query DTOs
var quality_standards_rest_1 = require("./quality-standards.rest");
Object.defineProperty(exports, "GetAllQualityStandardsQueryDto", { enumerable: true, get: function () { return quality_standards_rest_1.GetAllQualityStandardsQueryDto; } });
Object.defineProperty(exports, "GetQualityStandardsStatisticsQueryDto", { enumerable: true, get: function () { return quality_standards_rest_1.GetQualityStandardsStatisticsQueryDto; } });
// Re-export NATS contracts for internal use
__exportStar(require("../nats"), exports);
//# sourceMappingURL=index.js.map