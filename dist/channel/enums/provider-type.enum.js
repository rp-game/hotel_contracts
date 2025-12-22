"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderType = void 0;
/**
 * Channel Provider Type Enum
 *
 * Represents the different types of channel/PMS providers
 * that the system can integrate with.
 *
 * Values match API Gateway ProviderType enum EXACTLY (PascalCase)
 */
var ProviderType;
(function (ProviderType) {
    /** STAAH integration */
    ProviderType["STAAH"] = "STAAH";
    /** SiteMinder integration */
    ProviderType["SITEMINDER"] = "SiteMinder";
    /** Beds24 integration */
    ProviderType["BEDS24"] = "Beds24";
    /** RateGain integration */
    ProviderType["RATEGAIN"] = "RateGain";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
//# sourceMappingURL=provider-type.enum.js.map