"use strict";
/**
 * Rate Plan Status Enum
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanType = exports.RatePlanStatus = void 0;
var RatePlanStatus;
(function (RatePlanStatus) {
    RatePlanStatus["DRAFT"] = "DRAFT";
    RatePlanStatus["ACTIVE"] = "ACTIVE";
    RatePlanStatus["INACTIVE"] = "INACTIVE";
    RatePlanStatus["ARCHIVED"] = "ARCHIVED";
})(RatePlanStatus || (exports.RatePlanStatus = RatePlanStatus = {}));
/**
 * Rate Plan Type Enum
 *
 * Different pricing models supported by the system
 */
var RatePlanType;
(function (RatePlanType) {
    /**
     * Fixed rate per night
     */
    RatePlanType["NIGHTLY"] = "NIGHTLY";
    /**
     * Hourly pricing (day use, short stays)
     */
    RatePlanType["HOURLY"] = "HOURLY";
    /**
     * Price by date range
     */
    RatePlanType["DATE_RANGE"] = "DATE_RANGE";
    /**
     * Length of stay pricing
     */
    RatePlanType["LOS"] = "LOS";
    /**
     * Package deal pricing
     */
    RatePlanType["PACKAGE"] = "PACKAGE";
})(RatePlanType || (exports.RatePlanType = RatePlanType = {}));
//# sourceMappingURL=pricing.enum.js.map