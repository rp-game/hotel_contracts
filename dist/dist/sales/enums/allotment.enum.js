"use strict";
/**
 * Allotment Domain Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllotmentPartnerType = exports.AllotmentInventoryControl = exports.AllotmentStatus = void 0;
var AllotmentStatus;
(function (AllotmentStatus) {
    AllotmentStatus["ACTIVE"] = "ACTIVE";
    AllotmentStatus["SUSPENDED"] = "SUSPENDED";
    AllotmentStatus["EXPIRED"] = "EXPIRED";
    AllotmentStatus["CLOSED"] = "CLOSED";
})(AllotmentStatus || (exports.AllotmentStatus = AllotmentStatus = {}));
var AllotmentInventoryControl;
(function (AllotmentInventoryControl) {
    /** Fallback to general pool when allotment exhausted */
    AllotmentInventoryControl["ELASTIC"] = "ELASTIC";
    /** Hard block — reject booking when allotment exhausted */
    AllotmentInventoryControl["FIXED"] = "FIXED";
})(AllotmentInventoryControl || (exports.AllotmentInventoryControl = AllotmentInventoryControl = {}));
var AllotmentPartnerType;
(function (AllotmentPartnerType) {
    AllotmentPartnerType["CORPORATE"] = "CORPORATE";
    AllotmentPartnerType["TRAVEL_AGENT"] = "TRAVEL_AGENT";
})(AllotmentPartnerType || (exports.AllotmentPartnerType = AllotmentPartnerType = {}));
//# sourceMappingURL=allotment.enum.js.map