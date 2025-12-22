"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderStatus = void 0;
/**
 * Channel Provider Status Enum
 *
 * Represents the operational status of a channel provider configuration
 */
var ProviderStatus;
(function (ProviderStatus) {
    /** Provider is active and operational */
    ProviderStatus["ACTIVE"] = "ACTIVE";
    /** Provider configuration is inactive */
    ProviderStatus["INACTIVE"] = "INACTIVE";
    /** Provider is undergoing maintenance */
    ProviderStatus["MAINTENANCE"] = "MAINTENANCE";
    /** Provider has encountered an error */
    ProviderStatus["ERROR"] = "ERROR";
})(ProviderStatus || (exports.ProviderStatus = ProviderStatus = {}));
//# sourceMappingURL=provider-status.enum.js.map