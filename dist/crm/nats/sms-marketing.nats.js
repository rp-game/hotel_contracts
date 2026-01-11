"use strict";
/**
 * SMS Marketing NATS Contracts
 *
 * Patterns:
 * - crm.sms_marketing.campaigns.findAll
 * - crm.sms_marketing.campaigns.create
 * - crm.sms_marketing.campaigns.findOne
 * - crm.sms_marketing.campaigns.update
 * - crm.sms_marketing.campaigns.delete
 * - crm.sms_marketing.templates.findAll
 * - crm.sms_marketing.templates.create
 * - crm.sms_marketing.send.single
 * - crm.sms_marketing.send.campaign
 * - crm.sms_marketing.analytics
 *
 * Handler: crm-service (SmsMarketingController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsCampaignStatus = void 0;
/**
 * SMS Campaign Status Enum
 */
var SmsCampaignStatus;
(function (SmsCampaignStatus) {
    SmsCampaignStatus["DRAFT"] = "DRAFT";
    SmsCampaignStatus["SCHEDULED"] = "SCHEDULED";
    SmsCampaignStatus["SENDING"] = "SENDING";
    SmsCampaignStatus["SENT"] = "SENT";
    SmsCampaignStatus["PAUSED"] = "PAUSED";
    SmsCampaignStatus["CANCELLED"] = "CANCELLED";
})(SmsCampaignStatus || (exports.SmsCampaignStatus = SmsCampaignStatus = {}));
//# sourceMappingURL=sms-marketing.nats.js.map