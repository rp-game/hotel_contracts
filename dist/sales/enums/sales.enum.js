"use strict";
/**
 * Sales Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesActivityType = exports.CorporateAccountStatus = void 0;
var CorporateAccountStatus;
(function (CorporateAccountStatus) {
    CorporateAccountStatus["ACTIVE"] = "ACTIVE";
    CorporateAccountStatus["INACTIVE"] = "INACTIVE";
    CorporateAccountStatus["SUSPENDED"] = "SUSPENDED";
})(CorporateAccountStatus || (exports.CorporateAccountStatus = CorporateAccountStatus = {}));
var SalesActivityType;
(function (SalesActivityType) {
    SalesActivityType["CALL"] = "CALL";
    SalesActivityType["VISIT"] = "VISIT";
    SalesActivityType["EMAIL"] = "EMAIL";
    SalesActivityType["MEETING"] = "MEETING";
    SalesActivityType["SITE_INSPECTION"] = "SITE_INSPECTION";
    SalesActivityType["OTHER"] = "OTHER";
})(SalesActivityType || (exports.SalesActivityType = SalesActivityType = {}));
//# sourceMappingURL=sales.enum.js.map