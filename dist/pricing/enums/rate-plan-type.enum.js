"use strict";
/**
 * Rate Plan Type Enum
 *
 * Different pricing models supported by the system
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanType = void 0;
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
//# sourceMappingURL=rate-plan-type.enum.js.map