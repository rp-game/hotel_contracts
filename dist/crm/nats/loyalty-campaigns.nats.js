"use strict";
/**
 * Loyalty Campaigns NATS Contracts
 *
 * Patterns:
 * - crm.loyalty.campaigns.findAll
 * - crm.loyalty.campaigns.findActive
 * - crm.loyalty.campaigns.stats
 * - crm.loyalty.campaigns.dashboard
 * - crm.loyalty.campaigns.findById
 * - crm.loyalty.campaigns.analytics
 * - crm.loyalty.campaigns.create
 * - crm.loyalty.campaigns.update
 * - crm.loyalty.campaigns.apply
 * - crm.loyalty.campaigns.templates
 *
 * Handler: crm-service (LoyaltyCampaignsNatsController)
 * Called by: api-gateway (CrmController)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignStatus = exports.CampaignType = void 0;
/**
 * Campaign Type Enum
 */
var CampaignType;
(function (CampaignType) {
    CampaignType["BONUS_POINTS"] = "BONUS_POINTS";
    CampaignType["MULTIPLIER"] = "MULTIPLIER";
    CampaignType["DISCOUNT"] = "DISCOUNT";
    CampaignType["FREE_SERVICE"] = "FREE_SERVICE";
    CampaignType["TIER_BONUS"] = "TIER_BONUS";
    CampaignType["REFERRAL"] = "REFERRAL";
    CampaignType["BIRTHDAY"] = "BIRTHDAY";
    CampaignType["ANNIVERSARY"] = "ANNIVERSARY";
    CampaignType["SEASONAL"] = "SEASONAL";
    CampaignType["SPEND_THRESHOLD"] = "SPEND_THRESHOLD";
})(CampaignType || (exports.CampaignType = CampaignType = {}));
/**
 * Campaign Status Enum
 */
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "DRAFT";
    CampaignStatus["SCHEDULED"] = "SCHEDULED";
    CampaignStatus["ACTIVE"] = "ACTIVE";
    CampaignStatus["PAUSED"] = "PAUSED";
    CampaignStatus["COMPLETED"] = "COMPLETED";
    CampaignStatus["ENDED"] = "ENDED";
    CampaignStatus["CANCELLED"] = "CANCELLED";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
//# sourceMappingURL=loyalty-campaigns.nats.js.map