"use strict";
/**
 * Feedback NATS Contracts
 *
 * Patterns:
 * - crm.feedback.stats
 * - crm.feedback.findAll
 * - crm.feedback.findOne
 * - crm.feedback.create
 * - crm.feedback.respond
 * - crm.feedback.nps.findAll
 * - crm.feedback.nps.create
 * - crm.feedback.communication.create
 * - crm.feedback.communication.findByCustomer
 * - crm.feedback.analytics
 * - crm.feedback.dashboard
 * - feedback.satisfaction.average
 * - feedback.satisfaction.detailed
 * - feedback.churn.reasons
 *
 * Handler: crm-service (FeedbackController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackStatus = void 0;
/**
 * Feedback Status Enum
 */
var FeedbackStatus;
(function (FeedbackStatus) {
    FeedbackStatus["NEW"] = "NEW";
    FeedbackStatus["IN_PROGRESS"] = "IN_PROGRESS";
    FeedbackStatus["RESOLVED"] = "RESOLVED";
    FeedbackStatus["CLOSED"] = "CLOSED";
    FeedbackStatus["ESCALATED"] = "ESCALATED";
})(FeedbackStatus || (exports.FeedbackStatus = FeedbackStatus = {}));
//# sourceMappingURL=feedback.nats.js.map