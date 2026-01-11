"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.AutomationStatus = void 0;
/**
 * Automation Status Enum
 */
var AutomationStatus;
(function (AutomationStatus) {
    AutomationStatus["DRAFT"] = "DRAFT";
    AutomationStatus["ACTIVE"] = "ACTIVE";
    AutomationStatus["PAUSED"] = "PAUSED";
    AutomationStatus["ARCHIVED"] = "ARCHIVED";
    AutomationStatus["COMPLETED"] = "COMPLETED";
})(AutomationStatus || (exports.AutomationStatus = AutomationStatus = {}));
/**
 * Automation Action Type
 */
var ActionType;
(function (ActionType) {
    ActionType["SEND_EMAIL"] = "SEND_EMAIL";
    ActionType["SEND_SMS"] = "SEND_SMS";
    ActionType["SEND_PUSH"] = "SEND_PUSH";
    ActionType["APPLY_CAMPAIGN"] = "APPLY_CAMPAIGN";
    ActionType["UPDATE_SEGMENT"] = "UPDATE_SEGMENT";
    ActionType["TRIGGER_WORKFLOW"] = "TRIGGER_WORKFLOW";
})(ActionType || (exports.ActionType = ActionType = {}));
//# sourceMappingURL=marketing-automation.nats.js.map