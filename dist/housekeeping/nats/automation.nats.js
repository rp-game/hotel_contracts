"use strict";
/**
 * Housekeeping Automation NATS Contracts
 *
 * Patterns:
 * - housekeeping.automation.events.findAll
 *
 * Handler: housekeeping-service (AutomationController)
 * Called by: api-gateway (HousekeepingService)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationStatusDataDto = exports.AutomationStatsDto = exports.ActiveRulesDto = exports.LastRunTimesDto = void 0;
const automation_rest_1 = require("../rest/automation.rest");
Object.defineProperty(exports, "LastRunTimesDto", { enumerable: true, get: function () { return automation_rest_1.LastRunTimesDto; } });
Object.defineProperty(exports, "ActiveRulesDto", { enumerable: true, get: function () { return automation_rest_1.ActiveRulesDto; } });
Object.defineProperty(exports, "AutomationStatsDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatsDto; } });
Object.defineProperty(exports, "AutomationStatusDataDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatusDto; } });
//# sourceMappingURL=automation.nats.js.map