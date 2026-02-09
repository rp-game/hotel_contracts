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
exports.LastRunTimesDto = exports.AutomationStatsDto = exports.ActiveRulesDto = exports.AutomationStatusDto = void 0;
// Shared automation DTOs with @ApiProperty for Swagger documentation
var automation_rest_1 = require("./automation.rest");
Object.defineProperty(exports, "AutomationStatusDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatusDto; } });
Object.defineProperty(exports, "ActiveRulesDto", { enumerable: true, get: function () { return automation_rest_1.ActiveRulesDto; } });
Object.defineProperty(exports, "AutomationStatsDto", { enumerable: true, get: function () { return automation_rest_1.AutomationStatsDto; } });
Object.defineProperty(exports, "LastRunTimesDto", { enumerable: true, get: function () { return automation_rest_1.LastRunTimesDto; } });
// Re-export NATS contracts for internal use
__exportStar(require("../nats"), exports);
//# sourceMappingURL=index.js.map