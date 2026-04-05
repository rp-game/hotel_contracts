"use strict";
/**
 * Sales Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesCommissionAppliesTo = exports.LeadStage = exports.LeadSource = exports.SalesActivityType = exports.ContractStatus = exports.ARTransactionType = exports.CorporateAccountStatus = exports.CorporateAccountType = void 0;
var CorporateAccountType;
(function (CorporateAccountType) {
    CorporateAccountType["CORPORATE"] = "CORPORATE";
    CorporateAccountType["INDIVIDUAL"] = "INDIVIDUAL";
})(CorporateAccountType || (exports.CorporateAccountType = CorporateAccountType = {}));
var CorporateAccountStatus;
(function (CorporateAccountStatus) {
    CorporateAccountStatus["ACTIVE"] = "ACTIVE";
    CorporateAccountStatus["INACTIVE"] = "INACTIVE";
    CorporateAccountStatus["SUSPENDED"] = "SUSPENDED";
})(CorporateAccountStatus || (exports.CorporateAccountStatus = CorporateAccountStatus = {}));
var ARTransactionType;
(function (ARTransactionType) {
    ARTransactionType["CHARGE"] = "CHARGE";
    ARTransactionType["PAYMENT"] = "PAYMENT";
    ARTransactionType["ADJUSTMENT"] = "ADJUSTMENT";
    ARTransactionType["WRITE_OFF"] = "WRITE_OFF";
})(ARTransactionType || (exports.ARTransactionType = ARTransactionType = {}));
var ContractStatus;
(function (ContractStatus) {
    ContractStatus["DRAFT"] = "DRAFT";
    ContractStatus["ACTIVE"] = "ACTIVE";
    ContractStatus["EXPIRED"] = "EXPIRED";
    ContractStatus["RENEWED"] = "RENEWED";
})(ContractStatus || (exports.ContractStatus = ContractStatus = {}));
var SalesActivityType;
(function (SalesActivityType) {
    SalesActivityType["CALL"] = "CALL";
    SalesActivityType["VISIT"] = "VISIT";
    SalesActivityType["EMAIL"] = "EMAIL";
    SalesActivityType["MEETING"] = "MEETING";
    SalesActivityType["SITE_INSPECTION"] = "SITE_INSPECTION";
    SalesActivityType["OTHER"] = "OTHER";
})(SalesActivityType || (exports.SalesActivityType = SalesActivityType = {}));
var LeadSource;
(function (LeadSource) {
    LeadSource["REFERRAL"] = "REFERRAL";
    LeadSource["COLD_CALL"] = "COLD_CALL";
    LeadSource["WEBSITE"] = "WEBSITE";
    LeadSource["EVENT"] = "EVENT";
    LeadSource["OTHER"] = "OTHER";
})(LeadSource || (exports.LeadSource = LeadSource = {}));
var LeadStage;
(function (LeadStage) {
    LeadStage["INQUIRY"] = "INQUIRY";
    LeadStage["PROPOSAL"] = "PROPOSAL";
    LeadStage["NEGOTIATION"] = "NEGOTIATION";
    LeadStage["WON"] = "WON";
    LeadStage["LOST"] = "LOST";
})(LeadStage || (exports.LeadStage = LeadStage = {}));
var SalesCommissionAppliesTo;
(function (SalesCommissionAppliesTo) {
    SalesCommissionAppliesTo["CORPORATE"] = "CORPORATE";
    SalesCommissionAppliesTo["TRAVEL_AGENT"] = "TRAVEL_AGENT";
    SalesCommissionAppliesTo["ALL"] = "ALL";
})(SalesCommissionAppliesTo || (exports.SalesCommissionAppliesTo = SalesCommissionAppliesTo = {}));
//# sourceMappingURL=sales.enum.js.map