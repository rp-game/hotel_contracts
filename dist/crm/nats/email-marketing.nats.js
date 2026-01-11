"use strict";
/**
 * Email Marketing NATS Contracts
 *
 * Patterns:
 * - crm.email_marketing.campaigns.findAll
 * - crm.email_marketing.campaigns.create
 * - crm.email_marketing.campaigns.findOne
 * - crm.email_marketing.campaigns.update
 * - crm.email_marketing.campaigns.delete
 * - crm.email_marketing.templates.findAll
 * - crm.email_marketing.templates.create
 * - crm.email_marketing.send.single
 * - crm.email_marketing.send.campaign
 * - crm.email_marketing.analytics
 *
 * Handler: crm-service (EmailMarketingController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCampaignStatus = void 0;
/**
 * Campaign Status Enum
 */
var EmailCampaignStatus;
(function (EmailCampaignStatus) {
    EmailCampaignStatus["DRAFT"] = "DRAFT";
    EmailCampaignStatus["SCHEDULED"] = "SCHEDULED";
    EmailCampaignStatus["SENDING"] = "SENDING";
    EmailCampaignStatus["SENT"] = "SENT";
    EmailCampaignStatus["PAUSED"] = "PAUSED";
    EmailCampaignStatus["CANCELLED"] = "CANCELLED";
})(EmailCampaignStatus || (exports.EmailCampaignStatus = EmailCampaignStatus = {}));
//# sourceMappingURL=email-marketing.nats.js.map